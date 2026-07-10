/* HSK-4 vocabulary coverage report: how much of the target set (old ∪ new
   HSK 4 minus known HSK 1–3, see scripts/build-vocab.js) actually appears in
   the site's content. Coverage is a SIDE EFFECT of the grammar examples —
   the report exists so new/edited sentences can reach for missing words, not
   to mandate 100%. Never bend a sentence to smuggle a word in.

   "Counted" here means TAPPABLE: the extraction below models exactly what
   assets/app.js annotateVocab can reach (lang-tagged elements outside links
   and buttons), and the segmenter is EXECUTED out of app.js itself (via the
   SEGMENTER-BEGIN/END markers), so this report cannot drift from what the
   site underlines.

   Run: node scripts/vocab-coverage.js               — summary + top missing words
        node scripts/vocab-coverage.js --missing 100 — longer missing-word list
        node scripts/vocab-coverage.js --topic ba-sentences — one topic in detail
        node scripts/vocab-coverage.js --json [--topic id]  — machine-readable */
const fs = require("fs"), path = require("path"), vm = require("vm");
const { loadManifest, loadPageData } = require("./lib");
const root = path.join(__dirname, "..");

const argAfter = flag => { const i = process.argv.indexOf(flag); return i >= 0 ? process.argv[i + 1] : null; };
const JSON_OUT = process.argv.includes("--json");
const N_MISSING = parseInt(argAfter("--missing"), 10) || 40;
const ONE_TOPIC = argAfter("--topic");

/* ---- load the generated dictionary ---- */
const vwin = {};
vm.createContext(vwin);
vwin.window = vwin;
vm.runInContext(fs.readFileSync(path.join(root, "assets/data/vocab.js"), "utf8"), vwin, { filename: "vocab.js" });
const V = vwin.HSK4_VOCAB;
if (!V || !V.words) { console.error("assets/data/vocab.js missing — run scripts/build-vocab.js first"); process.exit(1); }
const map = new Map();
V.dict.split(" ").forEach(w => map.set(w, -1));
V.words.forEach((e, i) => map.set(e[0], i));
let maxLen = 1;
for (const w of map.keys()) if (w.length > maxLen) maxLen = w.length;

/* ---- segmenter: executed from assets/app.js, never copied ---- */
const appSrc = fs.readFileSync(path.join(root, "assets/app.js"), "utf8");
const segSrc = appSrc.match(/\/\* SEGMENTER-BEGIN[\s\S]*?\*\/([\s\S]*?)\/\* SEGMENTER-END \*\//);
if (!segSrc) { console.error("SEGMENTER-BEGIN/END markers missing in assets/app.js"); process.exit(1); }
const segCtx = { CJK_RE: /[\u3400-\u9fff\uf900-\ufaff]/, vocabMap: map, vocabMaxLen: maxLen, out: {} }; // escapes, matching app.js
vm.createContext(segCtx);
vm.runInContext(segSrc[1] + "\nout.segment = vocabSegment;", segCtx, { filename: "app.js#segmenter" });
const segment = segCtx.out.segment;

/* ---- text extraction: every string the ANNOTATOR can reach ----
   Full-string fields render inside wholly lang-tagged elements (ex-cn,
   er-wrong/right, builder feedback, the post-answer .zh reveal of the
   correct choice). HTML fields are annotated only inside their
   <span class="zh">/<span class="slot"> islands. Wrong choices (buttons),
   notes/hints (plain-text, never lang-tagged) and tab labels (buttons) are
   SHOWN but not tappable — deliberately not counted. */
const strip = s => String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/\*\*/g, "");
function zhOnly(html) {
  const out = [];
  // lazy up to the first </span>: a nested <span> inside a zh island would
  // truncate the match — content authors don't nest there (fmt() escapes)
  const re = /<span class="(?:zh|slot)(?:\s[^"]*)?"[^>]*>([\s\S]*?)<\/span>/g;
  let m;
  while ((m = re.exec(String(html == null ? "" : html)))) out.push(strip(m[1]));
  return out;
}
function pageLines(page) {
  const full = [page.zh], zh = [page.subtitle];
  (page.sections || []).forEach(s => {
    zh.push(s.title, s.intro, s.html);
    (s.head || []).forEach(h => zh.push(h));
    (s.rows || []).forEach(r => r.forEach(c => zh.push(c)));
    (s.tabs || []).forEach(t => {
      zh.push(t.html);
      (t.examples || []).forEach(it => full.push(it.cn));
    });
    (s.items || []).forEach(it => {
      if (it.cn) full.push(it.cn);                 // examples — ex-cn is fully tagged
      if (it.tiles) full.push(it.tiles.join("")); // builder — solved-state feedback card
      if (it.wrong) { full.push(it.wrong, it.right); zh.push(it.expl); } // clinic
      if (it.q) {                                  // mcq: question + explanation islands
        zh.push(it.q, it.expl);
        // the CORRECT choice is revealed post-answer inside a .zh span
        if (Array.isArray(it.choices) && it.choices[it.a] != null) full.push(strip(it.choices[it.a]));
      }
    });
  });
  return full.map(strip).concat(zh.flatMap(zhOnly));
}

function countTargets(lines, counts) {
  // per line: bidirectional matching's tie-breaks compare whole-string word
  // counts, so unrelated strings must not influence each other
  lines.forEach(line => {
    segment(line).forEach(seg => { if (seg.vi >= 0) counts[seg.vi] = (counts[seg.vi] || 0) + 1; });
  });
}

/* ---- walk all topics ---- */
const MANIFEST = loadManifest(root);
const ids = MANIFEST.units.flatMap(u => u.pages.map(p => p.id));
if (ONE_TOPIC && !ids.includes(ONE_TOPIC)) { console.error("unknown topic: " + ONE_TOPIC); process.exit(1); }
const total = new Array(V.words.length).fill(0);
const perTopic = [];
for (const id of ids) {
  const counts = {};
  countTargets(pageLines(loadPageData(root, id)), counts);
  let occ = 0;
  for (const k in counts) { total[k] += counts[k]; occ += counts[k]; }
  perTopic.push({ id: id, words: Object.keys(counts).length, occurrences: occ, counts: counts });
}

// mid-transition the list version matters: old∩new > 2026-new > 2021-only
const GROUPS = [
  ["both", "old + new lists (highest value)"],
  ["old", "old list only"],
  ["new26", "new list · on the 2026 syllabus"],
  ["new21", "new list · 2021 only"],
  ["assumed", "HSK 1–3 · assumed by the 2026 exam"],
];
const listOf = f => f & 8 ? "assumed" : (f & 1) && (f & 6) ? "both" : (f & 1) ? "old" : (f & 4) ? "new26" : "new21";
const groups = {};
GROUPS.forEach(([k]) => { groups[k] = [0, 0]; });
V.words.forEach((e, i) => {
  const g = groups[listOf(e[3])];
  g[1]++;
  if (total[i]) g[0]++;
});
const covered = total.filter(Boolean).length;
const once = total.filter(n => n === 1).length;
const thrice = total.filter(n => n >= 3).length;
const missing = V.words.map((e, i) => ({ w: e[0], py: e[1], en: e[2], list: listOf(e[3]), freq: e[4], n: total[i] }))
  .filter(x => !x.n)
  .sort((a, b) => (a.freq || 9e9) - (b.freq || 9e9));

if (JSON_OUT) {
  if (ONE_TOPIC) {
    const t = perTopic.find(x => x.id === ONE_TOPIC);
    console.log(JSON.stringify({
      id: t.id, words: t.words, occurrences: t.occurrences,
      counts: Object.fromEntries(Object.entries(t.counts).map(([k, n]) => [V.words[k][0], n]))
    }, null, 1));
  } else {
    console.log(JSON.stringify({
      target: V.words.length, covered: covered,
      groups: groups, perTopic: perTopic.map(({ id, words, occurrences }) => ({ id, words, occurrences })),
      missing: missing.map(m => m.w),
      counts: Object.fromEntries(V.words.map((e, i) => [e[0], total[i]]).filter(x => x[1]))
    }, null, 1));
  }
  process.exit(0);
}

if (ONE_TOPIC) {
  const t = perTopic.find(x => x.id === ONE_TOPIC);
  console.log(`${t.id}: ${t.words} target words, ${t.occurrences} tappable occurrences\n`);
  Object.keys(t.counts)
    .sort((a, b) => t.counts[b] - t.counts[a])
    .forEach(k => {
      const e = V.words[k];
      console.log(`  ${t.counts[k]}×  ${e[0]}  ${e[1]}  — ${e[2]}  [${listOf(e[3])}]`);
    });
  process.exit(0);
}

const pct = (a, b) => b ? Math.round((a / b) * 100) + "%" : "—";
console.log(`HSK-4 target vocabulary coverage (target set: ${V.words.length} words; counted = tappable in the browser)\n`);
console.log(`covered ≥1×: ${covered} / ${V.words.length} (${pct(covered, V.words.length)})`);
GROUPS.forEach(([k, label]) => {
  const g = groups[k];
  if (g[1]) console.log(`  ${label}: ${g[0]} / ${g[1]} (${pct(g[0], g[1])})`);
});
console.log(`depth: ${once} words appear once · ${covered - once - thrice} twice · ${thrice} three+ times\n`);

console.log("per topic (distinct target words · tappable occurrences):");
perTopic.slice().sort((a, b) => b.words - a.words)
  .forEach(t => console.log(`  ${String(t.words).padStart(4)} · ${String(t.occurrences).padStart(4)}  ${t.id}`));

// single-character/literary function words can't enter an example naturally —
// list the authorable content words first, and the singles as a footnote
const multi = missing.filter(m => m.w.length > 1), single = missing.filter(m => m.w.length === 1);
console.log(`\ntop ${Math.min(N_MISSING, multi.length)} missing content words (most common first · [list]) — reach for these in new examples:`);
multi.slice(0, N_MISSING).forEach(m =>
  console.log(`  ${m.w}  ${m.py}  — ${m.en}  [${m.list}]`));
console.log(`\n(${missing.length} missing total, of which ${single.length} single-character/function words` +
  (single.length ? ` (${single.slice(0, 12).map(m => m.w).join(" ")} …)` : "") +
  ` — see --missing N / --json for everything)`);
