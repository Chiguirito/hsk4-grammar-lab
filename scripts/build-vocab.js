/* Generates assets/data/vocab.js — the tap-to-translate dictionary + coverage
   target set — from drkameleon/complete-hsk-vocabulary (CC-CEDICT glosses).

   Target words = (old HSK 4 ∪ new HSK 4) − (old HSK 1–3 ∪ new HSK 1–3):
   exactly the vocabulary the HSK-3 learner does NOT know yet but either
   version of the HSK 4 exam may test. "New" spans both the 2021 standard
   (`new-4`) and the 2026 syllabus revision (`newest-4`); "known" is the
   old + 2021 lists the learner actually studied. Words the 2026 syllabus
   assumes at levels 1–3 that appear in NONE of his studied lists also get
   glosses (flag 8) — the new exam presumes them.

   Every OTHER HSK word ships as a plain segmentation list (`dict`) so the
   longest-match segmenter in app.js can't wrap a target word that is really
   part of a longer known word (小时 inside 小时候).

   Run: node scripts/build-vocab.js [--src path/to/complete.json]
   Without --src the source JSON is fetched from GitHub, PINNED to a commit —
   "main" moves, and a silent dataset drift would change vocab.js bytes and
   the sw.js cache hash. Bump the SHA deliberately when refreshing data.
   After running: node scripts/build-shells.js (sw.js precaches vocab.js). */
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const SRC_SHA = "7ac65bf1a6387d35f1ade478906172a19311c7f9"; // 2026-03-23, includes the 2026-syllabus (newest-*) tags
const SRC_URL = "https://raw.githubusercontent.com/drkameleon/complete-hsk-vocabulary/" + SRC_SHA + "/complete.json";

const srcArg = process.argv.indexOf("--src");
const KNOWN = ["old-1", "old-2", "old-3", "new-1", "new-2", "new-3"];
const OLD4 = 1, NEW4 = 2, NEWEST4 = 4, ASSUMED13 = 8; // flag bits on each target entry
// grammar-lesson jargon the HSK lists don't contain — segmentation support so
// e.g. 句型 can't be split into 句 + target word 型; extend as content needs
const EXTRA_DICT = ["句型", "语序", "时量", "动量", "补语", "量词", "动词", "名词",
  "形容词", "副词", "介词", "连词", "代词", "主语", "谓语", "宾语", "定语", "状语",
  "把字句", "被字句", "疑问句", "反问句", "语气词", "声调", "错题本",
  // everyday determiner compounds the HSK lists don't carry as words — without
  // them the segmenter mis-reads 这种植物 as 这 + 种植 + 物 (false underline)
  "这种", "那种", "哪种", "每种", "一种", "有种", "几种", "两种",
  // boundary-fixers from the 2026-07-10 audit: each stops a verified wrong
  // underline (睡着觉→睡着 shuìzháo, 锁上门→上门, 马拉松→松, 十分之七→之,
  // 二十多种→多种, 来得及时→来得及). All verified collateral-free.
  "着觉", "锁上", "马拉松", "十分之", "二十多", "来得"];
// hand-curated glosses where CC-CEDICT's entry misleads for THIS site's usage
// (王 appears in content only as a surname) or is machine junk / a bare
// cross-reference. Checked against the coverage report — keep this short.
const GLOSS_OVERRIDES = {
  "棒": "great; awesome (colloquial praise); (literally) stick, club",
  "王": "Wang (common surname); king",
  "体检": "physical examination; health checkup",
  "没法儿": "no way (to do sth); can't possibly",
  "有劲儿": "strong; energetic",
  "名牌儿": "famous brand",
};

function flagsOf(levels) {
  let f = 0;
  if (levels.includes("old-4")) f |= OLD4;
  if (levels.includes("new-4")) f |= NEW4;
  if (levels.includes("newest-4")) f |= NEWEST4;
  return f;
}

// "ā yí" → "āyí": word-list pinyin joins syllables; tone DIGITS are upstream
// dirt (méifǎr5) — tone marks are already present, so digits just go
const joinPy = py => String(py || "").replace(/[ \d]/g, "");

// "variant of 欤", "surname Wang", "erhua variant of 差点" — real but useless
// as the ONE gloss shown; prefer the form whose meanings actually explain the word
const WEAK = /^(variant of|old variant of|erhua variant of|abbr\. for|used in|surname |see [^ ]+$)/i;
const strongOf = f => (f.meanings || []).filter(m => m && !WEAK.test(m)).length;
function bestForms(entry) {
  return (entry.forms || []).filter(f => strongOf(f) > 0).sort((a, b) => {
    // common-word readings are lowercase; a capitalized reading is a proper
    // noun (狮子 Shīzǐ = Leo, 大陆 Dàlù = mainland China) — never let it beat
    // the everyday sense
    const proper = f => {
      const p = joinPy((f.transcriptions || {}).pinyin);
      return p && p[0] !== p[0].toLowerCase() ? 1 : 0;
    };
    return proper(a) - proper(b) || strongOf(b) - strongOf(a);
  });
}

function pinyinOf(entry) {
  // readings only from forms with a real meaning — a weak-only form's surname
  // reading (单 Shàn) next to the everyday gloss just confuses (fallback: all)
  const forms = bestForms(entry);
  const seen = [];
  for (const f of (forms.length ? forms : entry.forms || [])) {
    const p = joinPy((f.transcriptions || {}).pinyin);
    if (p && !seen.includes(p)) seen.push(p);
  }
  return seen.join(" / ");
}

// a meaning that LEADS with a long parenthetical usage note buries the actual
// translation past the truncation budget (厉害) — drop the note if a real
// gloss remains behind it
function cleanMeaning(m) {
  const bare = m.replace(/^\([^)]*\)[\s;,]*/, "");
  return bare.length >= 3 ? bare : m;
}
const unbalanced = g => (g.match(/\(/g) || []).length > (g.match(/\)/g) || []).length;

function glossOf(entry) {
  for (const f of bestForms(entry)) {
    const ms = f.meanings.filter(m => m && !WEAK.test(m)).map(cleanMeaning);
    if (!ms.length) continue;
    let g = ms.slice(0, 2).join("; ");
    if (g.length > 90) {
      g = g.slice(0, 89).replace(/[;,][^;,]*$/, "");
      // never ship a cut that strands an unclosed "(…" with no translation left
      while (g && unbalanced(g)) g = g.slice(0, g.lastIndexOf("(")).replace(/[;,\s]+$/, "");
      if (!g) g = ms[0].slice(0, 89).replace(/[;,][^;,]*$/, "");
      g += "…";
    }
    if (g && g !== "…") return g;
  }
  // nothing but weak glosses — better than an empty popover
  const f0 = (entry.forms || [])[0];
  return f0 && f0.meanings ? f0.meanings.filter(Boolean).slice(0, 2).join("; ") : "";
}

function classifierOf(entry) {
  for (const f of bestForms(entry).concat(entry.forms || [])) {
    if (f.classifiers && f.classifiers.length) return f.classifiers[0];
  }
  return "";
}

async function load() {
  if (srcArg >= 0) return JSON.parse(fs.readFileSync(process.argv[srcArg + 1], "utf8"));
  console.log("fetching " + SRC_URL + " …");
  const res = await fetch(SRC_URL);
  if (!res.ok) throw new Error("fetch failed: HTTP " + res.status);
  return res.json();
}

load().then(data => {
  const target = [], dict = [];
  for (const e of data) {
    const known = e.level.some(l => KNOWN.includes(l));
    let f = flagsOf(e.level);
    // 2026 syllabus assumes these at levels 1–3, but this learner studied the
    // old + 2021 lists — gloss them even though no HSK-4 list carries them
    if (!f && !known && e.level.some(l => /^newest-[123]$/.test(l))) f = ASSUMED13;
    if (f && !known) {
      const entry = [e.simplified, pinyinOf(e), GLOSS_OVERRIDES[e.simplified] || glossOf(e), f, e.frequency || 0];
      const cl = classifierOf(e);
      if (cl) entry.push(cl);
      target.push(entry);
    } else dict.push(e.simplified);
  }
  target.sort((a, b) => (a[4] || 9e9) - (b[4] || 9e9)); // most frequent first — nicer diffs, no runtime meaning
  const targetSet = new Set(target.map(t => t[0]));
  for (const w of EXTRA_DICT) if (!targetSet.has(w) && !dict.includes(w)) dict.push(w);
  dict.sort();

  const n = { old: 0, new21: 0, new26: 0, both: 0, oldOnly: 0, newOnly: 0, assumed: 0 };
  for (const t of target) {
    if (t[3] & OLD4) n.old++;
    if (t[3] & NEW4) n.new21++;
    if (t[3] & NEWEST4) n.new26++;
    if (t[3] & ASSUMED13) n.assumed++;
    else if (t[3] & OLD4 && t[3] & (NEW4 | NEWEST4)) n.both++;
    else if (t[3] & OLD4) n.oldOnly++;
    else n.newOnly++;
  }

  const out = "/* GENERATED by scripts/build-vocab.js — do not edit by hand.\n" +
    "   HSK 4 target vocabulary: (old HSK 4 ∪ new HSK 4) − (old/new HSK 1–3).\n" +
    "   words: [simplified, pinyin, gloss, flags(1=old-4 2=new-4/2021 4=new-4/2026 8=assumed-1-3/2026), freq-rank, classifier?]\n" +
    "   dict: every other HSK word — segmentation support only, never annotated.\n" +
    "   " + target.length + " target words (" + n.both + " in both lists, " + n.oldOnly + " old-only, " + n.newOnly + " new-only, " + n.assumed + " assumed-known 2026) · " + dict.length + " dict words */\n" +
    "window.HSK4_VOCAB = {\n" +
    '"v": 1,\n' +
    '"words": [\n' + target.map(t => JSON.stringify(t)).join(",\n") + "\n],\n" +
    '"dict": ' + JSON.stringify(dict.join(" ")) + "\n};\n";

  fs.writeFileSync(path.join(root, "assets/data/vocab.js"), out);
  console.log("wrote assets/data/vocab.js — " + target.length + " target words " +
    "(old-4: " + n.old + ", new-4/2021: " + n.new21 + ", new-4/2026: " + n.new26 +
    " | both: " + n.both + ", old-only: " + n.oldOnly + ", new-only: " + n.newOnly +
    ", assumed-1-3/2026: " + n.assumed + "), " +
    dict.length + " segmentation-only words, " + Math.round(out.length / 1024) + " KB");
}).catch(err => { console.error(err.message || err); process.exit(1); });
