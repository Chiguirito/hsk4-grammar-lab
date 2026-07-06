/* ============================================================
   HSK 4 Grammar Lab — page engine
   Pages call registerPage(PAGE) with a data object; this file
   renders every section type and wires up all interactivity.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- utilities ---------------- */
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // **…** → accent highlight (used inside cn / py / en strings; escapes HTML)
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b class="hl">$1</b>');
  // same, but allows raw HTML (quiz questions/choices/explanations may contain <span class="zh"> etc.)
  const fmtHtml = s => String(s).replace(/\*\*(.+?)\*\*/g, '<b class="hl">$1</b>');
  const plain = s => String(s).replace(/<[^>]+>/g, "").replace(/\*\*/g, "");
  const stripMarks = s => String(s).replace(/\*\*/g, "");
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  // mark Chinese text for screen readers / font selection (html lang="en");
  // only elements that actually contain CJK get tagged, pinyin gets zh-Latn
  const CJK_RE = /[㐀-鿿豈-﫿]/;
  const zhLang = root => {
    root.querySelectorAll(".zh, .ex-cn, .er-wrong, .er-right, .tile, .zh-big, .u-zh, .c-zh, .p-zh, .rl-zh, .t-zh, .pattern .slot")
      .forEach(e => { if (!e.lang && CJK_RE.test(e.textContent)) e.lang = "zh-Hans"; });
    root.querySelectorAll(".ex-py, .py-hint").forEach(e => { if (!e.lang) e.lang = "zh-Latn-pinyin"; });
  };
  function shuffled(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // stable content-derived miss-store ids: editing or reordering topic content
  // invalidates a saved miss cleanly instead of silently re-pointing it at a
  // different question (positional "page/s2:5" ids are migrated on sight)
  function hashId(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = (((h << 5) + h) ^ str.charCodeAt(i)) >>> 0;
    return h.toString(36);
  }
  const mcqMissId = (pageId, item) => pageId + "/h" + hashId("m|" + plain(item.q) + "|" + item.choices.map(plain).join("|"));
  const builderMissId = (pageId, item) => pageId + "/h" + hashId("b|" + item.tiles.join("|"));

  /* ---------------- speech ---------------- */
  let zhVoice = null;
  function pickVoice() {
    const vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    zhVoice = vs.find(v => /zh[-_]CN/i.test(v.lang)) || vs.find(v => /^zh/i.test(v.lang)) || null;
  }
  if (window.speechSynthesis) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  let lastSpoken = { text: null, t: 0 };
  let warnedNoVoice = false;
  function speak(text) {
    if (!window.speechSynthesis) return;
    try { if (localStorage.getItem("hsk4lab-audio") === "off") return; } catch (e) {}
    if (!zhVoice) pickVoice();
    if (!zhVoice && !warnedNoVoice) {
      warnedNoVoice = true;
      toast("No Chinese voice found — install one in your system's text-to-speech settings for proper audio.");
    }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(stripMarks(text).replace(/[（(].*?[)）]/g, ""));
    u.lang = "zh-CN";
    if (zhVoice) u.voice = zhVoice;
    // tapping the same sentence again shortly after replays it slowly
    const now = Date.now();
    u.rate = (lastSpoken.text === text && now - lastSpoken.t < 6000) ? 0.6 : 0.85;
    lastSpoken = { text: text, t: now };
    speechSynthesis.speak(u);
  }

  /* ---------------- clipboard + AI tutor bridge ----------------
     The learner studies with an external AI chatbot; these helpers
     copy a fully self-contained tutoring prompt (question, choices,
     their answer, the site's explanation) so the AI has context
     without the site ever calling an API. */
  let currentPage = null; // set by registerPage; null on index/review
  let toastEl = null, toastTimer = 0;
  function toast(msg) {
    if (!toastEl) { toastEl = el("div", "toast"); toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2800);
  }
  function copyText(text, okMsg) {
    window.__lastCopy = text; // debug/testing hook
    const done = ok => toast(ok ? (okMsg || "Copied — paste into your AI chat (ChatGPT, Claude, …)") : "Couldn't copy automatically — try again");
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      ta.remove();
      done(ok);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => done(true), fallback);
    } else fallback();
  }
  function aiBtn(label, buildPrompt) {
    const b = el("button", "ai-btn", "🤖 " + esc(label));
    b.type = "button";
    b.title = "Copy a ready-made prompt for ChatGPT, Claude or any AI chatbot";
    b.onclick = () => copyText(buildPrompt());
    return b;
  }
  const AI_PREAMBLE = "I'm studying for the HSK 4 Chinese exam (I've passed HSK 3) using an offline grammar site, and I'd like your help as a tutor.";
  function topicLabel(page) {
    const z = stripMarks(page.zh || "");
    return page.title && page.title.includes(z) ? page.title : z + (page.title ? " — " + page.title : "");
  }
  function topicLine(item) {
    if (item && item._srcTopic) return "Topic: " + item._srcTopic;
    if (currentPage) return "Topic: " + topicLabel(currentPage);
    return "Topic: HSK 4 grammar";
  }
  function mcqPrompt(item, chosenIdx) {
    const wrong = chosenIdx !== item.a;
    const lines = [AI_PREAMBLE, "", topicLine(item), "",
      "Multiple-choice question: " + plain(item.q),
      "Choices:"];
    item.choices.forEach(c => lines.push("- " + plain(c)));
    lines.push("Correct answer: " + plain(item.choices[item.a]));
    if (chosenIdx >= 0) lines.push("My answer: " + plain(item.choices[chosenIdx]) + (wrong ? " (wrong)" : " (correct — but I want to understand it more deeply)"));
    if (item.expl) lines.push("", "The site's explanation: " + plain(item.expl));
    lines.push("", "Please:",
      wrong ? "1. Explain in English why my answer is wrong and why the correct answer works."
            : "1. Explain in English why the correct answer works, and in which situations the other choices would be right instead.",
      "2. Give 2-3 minimal-pair example sentences (with pinyin and English) that isolate exactly this grammar point.",
      "3. Then quiz me with 3 similar HSK 4-level questions, one at a time, and correct my answers.");
    return lines.join("\n");
  }
  function builderPrompt(item, wrongAttempt) {
    const lines = [AI_PREAMBLE, "", topicLine(item), "",
      "Word-order exercise: arrange the given tiles into a correct sentence.",
      "Tiles: " + item.tiles.join(" / ")];
    if (item.en) lines.push('Intended meaning: "' + plain(item.en) + '"');
    lines.push("Expected answer: " + item.tiles.join("") + (item.py ? " (" + stripMarks(item.py) + ")" : ""));
    if (item.alt && item.alt.length) lines.push("Also accepted: " + item.alt.map(a => a.join("")).join(" · "));
    if (wrongAttempt) lines.push("My attempt: " + wrongAttempt + " (marked wrong)");
    if (item.hint) lines.push("The site's hint: " + plain(item.hint));
    lines.push("", "Please:",
      wrongAttempt
        ? "1. Explain in English what's wrong with my word order and, step by step, why the expected order is correct."
        : "1. Explain in English, step by step, which word-order rules produce this sentence.",
      "2. Give 2-3 more example sentences that use the same pattern (with pinyin and English).",
      "3. Then give me 2 similar word-order exercises, one at a time, and check my answers.");
    return lines.join("\n");
  }
  function clinicPrompt(item) {
    const lines = [AI_PREAMBLE, "", topicLine(item), "",
      "Error-spotting exercise: the sentence below contains exactly one grammar mistake.",
      "Incorrect: " + stripMarks(item.wrong),
      "Corrected: " + stripMarks(item.right) + (item.py ? " (" + stripMarks(item.py) + ")" : "")];
    if (item.en) lines.push('Meaning: "' + plain(item.en) + '"');
    if (item.expl) lines.push("", "The site's explanation: " + plain(item.expl));
    lines.push("", "Please:",
      "1. Explain the underlying grammar rule in more depth than the explanation above (in English).",
      "2. Show 2-3 more wrong/right sentence pairs that make the same mistake — and its fix — obvious.",
      "3. Then test me with 2 new find-the-mistake sentences on the same rule, one at a time.");
    return lines.join("\n");
  }
  // serialize cheatsheet-style HTML to readable plain text (tables → "a | b" rows)
  function htmlToText(html) {
    const root = document.createElement("div");
    root.innerHTML = html;
    const out = [];
    (function walk(n) {
      for (const c of n.childNodes) {
        if (c.nodeType === 3) { out.push(c.nodeValue.replace(/\s+/g, " ")); continue; }
        if (c.nodeType !== 1) continue;
        const t = c.tagName;
        if (t === "TR") out.push([...c.children].map(x => x.textContent.replace(/\s+/g, " ").trim()).join(" | ") + "\n");
        else if (t === "LI") out.push("- " + c.textContent.replace(/\s+/g, " ").trim() + "\n");
        else if (t === "BR") out.push("\n");
        else if (/^(P|DIV|H[1-6]|UL|OL|TABLE)$/.test(t)) { walk(c); out.push("\n"); }
        else walk(c);
      }
    })(root);
    return out.join("").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
  }
  function topicPrompt(page) {
    const lines = [AI_PREAMBLE, "",
      'I just finished studying the topic "' + topicLabel(page) + '".'];
    if (page.subtitle) lines.push("Topic summary: " + plain(page.subtitle));
    const cheat = page.sections.find(s => s.type === "cheatsheet");
    if (cheat) lines.push("", "The topic's cheat sheet:", htmlToText(cheat.html));
    else lines.push("", "The topic covers: " + page.sections.filter(s => s.title).map(s => plain(s.title)).join("; ") + ".");
    const exs = [];
    page.sections.forEach(s => { if (s.type === "examples") (s.items || []).forEach(it => exs.push(it)); });
    if (exs.length) {
      lines.push("", "Sample sentences from the topic:");
      exs.slice(0, 8).forEach(it => lines.push("- " + stripMarks(it.cn) + (it.en ? " — " + stripMarks(it.en) : "")));
    }
    lines.push("", "Please act as my HSK 4 tutor for this grammar topic:",
      "1. Quiz me with 10 new exam-style questions, one at a time — mix fill-in-the-blank multiple choice, word-order (arrange the words) and find-the-mistake questions. Don't reuse the sample sentences above.",
      "2. After each answer, tell me if I was right and explain why in English.",
      "3. Keep vocabulary at HSK 4 level or below.",
      "4. At the end, summarize my weak points on this topic.");
    return lines.join("\n");
  }

  /* ---------------- progress store ---------------- */
  const STORE_KEY = "hsk4lab-progress";
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveStore(s) { try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (e) {} }
  // page-level question tracking (first-try correct across all interactive sections)
  // Each mcq/builder item has a stable key; only its first answer this visit
  // counts, so quiz retries can neither inflate nor re-score progress.
  const tracker = { total: 0, results: {}, pageId: null };
  function recordAnswer(key, ok) {
    if (!tracker.pageId) return; // review page: no per-topic progress to update
    if (key in tracker.results) return;
    tracker.results[key] = ok;
    const store = loadStore();
    const prev = store[tracker.pageId] || {};
    const keys = Object.keys(tracker.results);
    const correct = keys.filter(k => tracker.results[k]).length;
    const pct = tracker.total ? Math.min(100, Math.round((correct / tracker.total) * 100)) : 0;
    prev.total = tracker.total;
    prev.visited = true;
    // clamp: an import from a version with more questions must not show "14 of 10 answered"
    prev.answered = Math.min(tracker.total, Math.max(prev.answered || 0, keys.length));
    prev.best = Math.min(100, Math.max(prev.best || 0, pct));
    store[tracker.pageId] = prev;
    saveStore(store);
  }
  // ---- missed-question store (drives review.html) ----
  // Spaced repetition, Leitner-style: each miss is {n: times missed, box: 1-3, due: "YYYY-MM-DD"}.
  // A fresh miss lands in box 1, due immediately. A first-try correct answer promotes it
  // (box 2 due in 2 days, box 3 due in 5 days, box 3 correct → graduated/removed);
  // any new miss demotes it back to box 1. Older installs stored a plain count — migrated on read.
  const MISS_KEY = "hsk4lab-misses";
  const BOX_DAYS = { 2: 2, 3: 5 }; // due-offset after promotion INTO this box
  function dateStr(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + (offsetDays || 0));
    const p = n => (n < 10 ? "0" : "") + n;
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }
  // keys that would write onto Object.prototype instead of the store
  const SAFE_KEY = k => k !== "__proto__" && k !== "constructor" && k !== "prototype";
  function normMiss(v) {
    if (typeof v === "number" && v > 0) return { n: v, box: 1, due: dateStr(0) };
    if (v && typeof v === "object") {
      // graduation tombstone — kept so an import can't resurrect a mastered item
      if (typeof v.grad === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v.grad)) return { grad: v.grad };
      if (typeof v.n === "number" && v.n > 0) {
        return {
          n: v.n,
          box: Math.min(3, Math.max(1, v.box | 0 || 1)),
          due: /^\d{4}-\d{2}-\d{2}$/.test(v.due) ? v.due : dateStr(0)
        };
      }
    }
    return null;
  }
  function loadMisses() {
    try {
      const raw = JSON.parse(localStorage.getItem(MISS_KEY)) || {};
      const m = {};
      const keepGrad = dateStr(-365); // tombstones expire after a year
      for (const k of Object.keys(raw)) {
        if (!SAFE_KEY(k)) continue;
        const v = normMiss(raw[k]);
        if (!v || (v.grad && v.grad < keepGrad)) continue;
        m[k] = v;
      }
      return m;
    } catch (e) { return {}; }
  }
  function saveMisses(m) { try { localStorage.setItem(MISS_KEY, JSON.stringify(m)); } catch (e) {} }
  function missStats() {
    const m = loadMisses(), t = dateStr(0);
    let due = 0, scheduled = 0, next = null;
    for (const k of Object.keys(m)) {
      if (m[k].grad) continue;
      if (m[k].due <= t) due++;
      else { scheduled++; if (!next || m[k].due < next) next = m[k].due; }
    }
    return { total: due + scheduled, due: due, scheduled: scheduled, next: next };
  }
  // shift a YYYY-MM-DD string by whole days (noon anchor avoids DST edges)
  function shiftDateStr(s, days) {
    const d = new Date(s + "T12:00:00");
    d.setDate(d.getDate() + days);
    const p = n => (n < 10 ? "0" : "") + n;
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }
  // approximate the day a schedule was RECORDED: due minus its box offset
  const recordedOn = e => e.box > 1 ? shiftDateStr(e.due, -BOX_DAYS[e.box]) : e.due;
  // conservative merge of two schedules for the same question:
  // between active schedules, lower box wins (same box → earlier due).
  // A graduation beats any OLDER schedule (imports must not resurrect a
  // mastered item), but a miss recorded strictly AFTER the graduation is
  // newer knowledge and wins — same rule recordMiss applies on-device.
  function mergeMiss(a, b) {
    if (a.grad && b.grad) return a.grad >= b.grad ? a : b;
    if (a.grad || b.grad) {
      const grad = a.grad ? a : b, active = a.grad ? b : a;
      return recordedOn(active) > grad.grad ? active : grad;
    }
    return {
      n: Math.max(a.n, b.n),
      box: Math.min(a.box, b.box),
      due: a.box < b.box ? a.due : b.box < a.box ? b.due : (a.due < b.due ? a.due : b.due)
    };
  }
  // Only the FIRST answer per question per visit moves its schedule (same
  // rule as recordAnswer) — quiz retries can't promote or demote twice.
  const missRecorded = new Set();
  function recordMiss(id, ok) {
    if (!id || missRecorded.has(id)) return;
    missRecorded.add(id);
    const m = loadMisses();
    const today = dateStr(0);
    if (ok) {
      const e = m[id];
      if (!e || e.grad) return;
      // spaced repetition only counts a correct answer once the item is DUE —
      // re-answering it early (e.g. on its topic page) leaves the schedule alone
      if (e.due > today) return;
      if (e.box >= 3) m[id] = { grad: today }; // graduated 🎓
      else { e.box += 1; e.due = dateStr(BOX_DAYS[e.box]); }
    } else {
      const prev = m[id];
      m[id] = { n: (prev && prev.n ? prev.n : 0) + 1, box: 1, due: today };
    }
    saveMisses(m);
  }
  // migrate any legacy positional ids ("page/s2:5") for this page to stable
  // content-hash ids, so content edits can't silently re-point saved misses
  function migratePageMisses(page) {
    const m = loadMisses();
    let changed = false;
    for (const id of Object.keys(m)) {
      const match = id.match(/^(.+)\/s(\d+):(\d+)$/);
      if (!match || match[1] !== page.id) continue;
      const sec = page.sections[+match[2]];
      const item = sec && sec.items && sec.items[+match[3]];
      let nid = null;
      if (item && sec.type === "mcq") nid = mcqMissId(page.id, item);
      else if (item && sec.type === "builder") nid = builderMissId(page.id, item);
      const cur = m[id];
      delete m[id];
      changed = true;
      if (!nid) continue; // content moved since the miss was saved
      m[nid] = m[nid] ? mergeMiss(m[nid], cur) : cur;
    }
    if (changed) saveMisses(m);
  }

  function markVisited(pageId) {
    const store = loadStore();
    store[pageId] = store[pageId] || {};
    store[pageId].visited = true;
    saveStore(store);
  }

  /* ---------------- toggles ---------------- */
  function initToggles(container) {
    const get = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
    const set = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
    const prefs = { py: get("hsk4lab-py") !== "off", en: get("hsk4lab-en") !== "off", audio: get("hsk4lab-audio") !== "off" };
    document.documentElement.classList.toggle("hide-py", !prefs.py);
    document.documentElement.classList.toggle("hide-en", !prefs.en);
    const mk = (key, label, apply) => {
      const b = el("button", "toggle-btn" + (prefs[key] ? " on" : ""), label + ": " + (prefs[key] ? "ON" : "OFF"));
      b.type = "button";
      b.setAttribute("aria-pressed", String(prefs[key]));
      b.onclick = () => {
        prefs[key] = !prefs[key];
        set("hsk4lab-" + key, prefs[key] ? "on" : "off");
        if (apply) apply(prefs[key]);
        b.classList.toggle("on", prefs[key]);
        b.setAttribute("aria-pressed", String(prefs[key]));
        b.textContent = label + ": " + (prefs[key] ? "ON" : "OFF");
      };
      container.appendChild(b);
    };
    mk("py", "Pīnyīn", on => document.documentElement.classList.toggle("hide-py", !on));
    mk("en", "English", on => document.documentElement.classList.toggle("hide-en", !on));
    mk("audio", "🔊", null); // gates speak() incl. the builder's auto-play
    // three-state theme override: Auto (follow OS) → Dark → Light
    const THEMES = ["auto", "dark", "light"];
    let th = get("hsk4lab-theme");
    if (THEMES.indexOf(th) < 0) th = "auto";
    const applyTheme = () => {
      let dark = th === "dark";
      if (th === "auto") { try { dark = matchMedia("(prefers-color-scheme: dark)").matches; } catch (e) {} }
      document.documentElement.dataset.theme = dark ? "dark" : "light";
      // keep the browser-chrome color in step even when the toggle overrides the OS
      document.querySelectorAll('meta[name="theme-color"]')
        .forEach(m => m.setAttribute("content", dark ? "#191713" : "#faf7f1"));
    };
    const tb = el("button", "toggle-btn");
    tb.type = "button";
    const themeLabel = () => { tb.textContent = "Theme: " + th.charAt(0).toUpperCase() + th.slice(1); };
    tb.onclick = () => {
      th = THEMES[(THEMES.indexOf(th) + 1) % THEMES.length];
      set("hsk4lab-theme", th);
      applyTheme();
      themeLabel();
    };
    applyTheme();
    themeLabel();
    try {
      matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { if (th === "auto") applyTheme(); });
    } catch (e) {}
    container.appendChild(tb);
  }

  /* ---------------- renderers ---------------- */
  function exampleCard(item) {
    const card = el("div", "ex");
    if (item.tag) card.appendChild(el("span", "tag", esc(item.tag)));
    const cn = el("div", "ex-cn");
    cn.innerHTML = fmt(item.cn) + ' <button class="spk" title="Listen" aria-label="listen">🔊</button>';
    cn.onclick = () => speak(item.cn);
    card.appendChild(cn);
    if (item.py) card.appendChild(el("div", "ex-py", fmt(item.py)));
    if (item.en) card.appendChild(el("div", "ex-en", fmt(item.en)));
    if (item.note) card.appendChild(el("div", "ex-note", "💡 " + fmt(item.note))); // plain text + **…** only, per CONTENT_GUIDE
    zhLang(card);
    return card;
  }

  function renderExamples(sec, root) {
    const list = el("div", "ex-list");
    sec.items.forEach(it => list.appendChild(exampleCard(it)));
    root.appendChild(list);
  }

  function renderConcept(sec, root) {
    root.appendChild(el("div", "prose", sec.html));
  }

  function renderTable(sec, root) {
    const wrap = el("div", "tbl-wrap");
    const t = el("table", "tbl");
    if (sec.head) {
      const tr = el("tr");
      sec.head.forEach(h => tr.appendChild(el("th", null, h)));
      t.appendChild(tr);
    }
    (sec.rows || []).forEach(r => {
      const tr = el("tr");
      r.forEach(c => tr.appendChild(el("td", null, c)));
      t.appendChild(tr);
    });
    wrap.appendChild(t);
    root.appendChild(wrap);
  }

  let tabSeq = 0;
  function renderTabs(sec, root) {
    const box = el("div", "tabs");
    const bar = el("div", "tab-bar");
    bar.setAttribute("role", "tablist");
    box.appendChild(bar);
    const tabs = [];
    (sec.tabs || []).forEach((tab, i) => {
      const b = el("button", i === 0 ? "active" : "", tab.label);
      b.type = "button";
      b.id = "tab" + (++tabSeq);
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", i === 0 ? "true" : "false");
      b.tabIndex = i === 0 ? 0 : -1;
      const p = el("div", "tab-panel" + (i === 0 ? " active" : ""));
      p.setAttribute("role", "tabpanel");
      p.setAttribute("aria-labelledby", b.id);
      if (tab.html) p.innerHTML = tab.html;
      (tab.examples || []).forEach(exi => p.appendChild(exampleCard(exi)));
      b.onclick = () => tabs.forEach(t => {
        const on = t.b === b;
        t.b.classList.toggle("active", on);
        t.b.setAttribute("aria-selected", String(on));
        t.b.tabIndex = on ? 0 : -1;
        t.p.classList.toggle("active", on);
      });
      bar.appendChild(b);
      box.appendChild(p);
      tabs.push({ b: b, p: p });
    });
    bar.addEventListener("keydown", e => {
      const idx = tabs.findIndex(t => t.b === document.activeElement);
      if (idx < 0) return;
      let to = -1;
      if (e.key === "ArrowRight") to = (idx + 1) % tabs.length;
      else if (e.key === "ArrowLeft") to = (idx - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") to = 0;
      else if (e.key === "End") to = tabs.length - 1;
      if (to < 0) return;
      e.preventDefault();
      tabs[to].b.focus();
      tabs[to].b.click();
    });
    root.appendChild(box);
  }

  function renderMcq(sec, root) {
    const quiz = el("div", "quiz");
    let done = 0, right = 0;
    const scoreBox = el("div", "quiz-score hidden");
    scoreBox.setAttribute("role", "status"); // announce the final score to screen readers
    sec.items.forEach((item, idx) => {
      const missId = item._src || (tracker.pageId ? mcqMissId(tracker.pageId, item) : null);
      const q = el("div", "q");
      q.appendChild(el("div", "q-num", "QUESTION " + (idx + 1) + " / " + sec.items.length +
        (item._srcLabel ? " · from “" + esc(item._srcLabel) + "”" : "")));
      q.appendChild(el("div", "q-text", fmtHtml(item.q)));
      const wrap = el("div", "q-choices" + (item.choices.every(c => plain(c).length <= 14) ? " cols" : ""));
      const result = el("div", "q-result hidden");
      result.setAttribute("role", "status"); // announces correctness — the styling on the buttons is silent
      const expl = el("div", "q-expl hidden", item.expl ? fmtHtml(item.expl) : "");
      let answeredThis = false, chosen = -1;
      const actions = el("div", "q-actions hidden");
      actions.appendChild(aiBtn("Copy for AI", () => mcqPrompt(item, chosen)));
      // render choices in a shuffled order so positions can't be memorized
      shuffled(item.choices.map((_, i) => i)).forEach(ci => {
        const c = item.choices[ci];
        const b = el("button", null, fmtHtml(c));
        b.type = "button";
        b.dataset.ci = ci;
        b.onclick = () => {
          if (answeredThis) return;
          answeredThis = true;
          chosen = ci;
          actions.classList.remove("hidden");
          const ok = ci === item.a;
          wrap.querySelectorAll("button").forEach(x => {
            // aria-disabled, not disabled: the clicked button keeps keyboard focus
            x.setAttribute("aria-disabled", "true");
            if (+x.dataset.ci === item.a) { x.classList.add("correct"); x.insertAdjacentText("afterbegin", "✓ "); }
            else if (x === b) { x.classList.add("wrong"); x.insertAdjacentText("afterbegin", "✗ "); }
            else x.classList.add("dim");
          });
          result.className = "q-result " + (ok ? "good" : "bad");
          result.innerHTML = ok ? "✓ Correct!" : '✗ Not quite — the answer is <span class="zh">' + esc(plain(item.choices[item.a])) + "</span>";
          zhLang(result);
          if (item.expl) expl.classList.remove("hidden");
          done++;
          if (ok) right++;
          recordAnswer(sec._qkey + ":" + idx, ok);
          recordMiss(missId, ok);
          if (done === sec.items.length) showScore();
        };
        wrap.appendChild(b);
      });
      q.appendChild(wrap);
      q.appendChild(result);
      q.appendChild(expl);
      q.appendChild(actions);
      zhLang(q);
      quiz.appendChild(q);
    });
    function showScore() {
      const pct = Math.round((right / sec.items.length) * 100);
      const msg = pct === 100 ? '<span class="zh">满分！</span>Perfect — exam ready.' :
        pct >= 80 ? '<span class="zh">很棒！</span>Solid — review the misses once and move on.' :
        pct >= 60 ? '<span class="zh">不错，但还差一点。</span>Re-read the sections above, then retry.' :
        '<span class="zh">别灰心</span> — go back through the examples, this needs another pass.';
      scoreBox.innerHTML = '<span class="big">' + right + " / " + sec.items.length + '</span><span>(' + pct + '%)</span><span class="msg">' + msg + "</span>";
      const rb = el("button", "retry-btn", "↻ Retry");
      rb.type = "button";
      rb.onclick = () => {
        root.innerHTML = "";
        renderMcq(sec, root);
        const b1 = root.querySelector(".q-choices button");
        if (b1) b1.focus(); // the Retry button is gone — don't strand keyboard focus
      };
      scoreBox.appendChild(rb);
      // last quiz of a topic: hand the learner their next step
      if (sec._last && currentPage) {
        const extra = el("div", "score-next");
        const st = missStats();
        if (st.due) {
          const a = el("a", null, "Review " + st.due + " missed question" + (st.due > 1 ? "s" : "") + " →");
          a.href = "../review.html";
          extra.appendChild(a);
        }
        const all = window.ALL_PAGES || [];
        const pos = all.findIndex(p => p.id === currentPage.id);
        const nxt = pos >= 0 ? all[pos + 1] : null; // findIndex -1 must not alias to all[0]
        if (nxt) {
          const a = el("a", null, "Next topic: " + stripMarks(nxt.zh) + " →");
          a.href = nxt.id + ".html";
          extra.appendChild(a);
        }
        if (extra.children.length) scoreBox.appendChild(extra);
      }
      scoreBox.classList.remove("hidden");
      zhLang(scoreBox);
    }
    quiz.appendChild(scoreBox);
    root.appendChild(quiz);
  }

  function renderBuilder(sec, root) {
    const holder = el("div");
    let idx = 0;
    function draw() {
      holder.innerHTML = "";
      const item = sec.items[idx];
      const qkey = sec._qkey + ":" + idx;
      const missId = item._src || (tracker.pageId ? builderMissId(tracker.pageId, item) : null);
      const box = el("div", "builder");
      box.appendChild(el("div", "b-prompt",
        "<b>" + (idx + 1) + " / " + sec.items.length + "</b>" +
        (item._srcLabel ? ' · from “' + esc(item._srcLabel) + '”' : "") +
        " · Arrange the tiles into a correct sentence" +
        (item.en ? ' — <i>“' + esc(item.en) + '”</i>' : "") +
        (item.hint ? '<br><span style="color:var(--muted)">Hint: ' + fmt(item.hint) + "</span>" : "")));
      const answer = el("div", "b-answer");
      answer.setAttribute("role", "group");
      answer.setAttribute("aria-label", "Your sentence");
      const pool = el("div", "b-pool");
      pool.setAttribute("role", "group");
      pool.setAttribute("aria-label", "Available words");
      const live = el("div", "sr-only"); // announces tile moves to screen readers
      live.setAttribute("aria-live", "polite");
      const feedback = el("div", "b-feedback");
      feedback.setAttribute("role", "status");
      let fails = 0, solved = false;
      // tile-boundary separator (written as an escape on purpose — a raw
      // control character here is invisible and has misled reviewers before):
      // 女孩+子 must not be graded the same as 女+孩子
      const SEP = "\u0001";
      const mkTile = (txt) => {
        const t = el("button", "tile", esc(txt));
        t.type = "button";
        t.lang = "zh-Hans";
        t.onclick = () => {
          if (solved) return;
          answer.classList.remove("ok", "bad");
          const toAnswer = t.parentNode === pool;
          (toAnswer ? answer : pool).appendChild(t);
          live.textContent = toAnswer
            ? txt + " — added to your sentence (position " + answer.children.length + ")"
            : txt + " — returned to the pool";
        };
        return t;
      };
      shuffled(item.tiles).forEach(txt => pool.appendChild(mkTile(txt)));
      // fix rare case shuffle === answer
      if ([...pool.children].map(c => c.textContent).join(SEP) === item.tiles.join(SEP) && item.tiles.length > 2) {
        pool.appendChild(pool.firstChild);
      }
      const controls = el("div", "b-controls");
      const check = el("button", "btn primary", "Check ✓");
      const reset = el("button", "btn ghost", "Reset");
      const reveal = el("button", "btn ghost hidden", "Show answer");
      const next = el("button", "btn primary hidden", idx < sec.items.length - 1 ? "Next →" : "Done ✓");
      let firstTry = true, lastWrong = "";
      const ai = aiBtn("Copy for AI", () => builderPrompt(item, lastWrong));
      ai.classList.add("hidden");
      function success(viaReveal) {
        solved = true;
        answer.classList.add("ok");
        answer.classList.remove("bad");
        feedback.innerHTML = "";
        feedback.appendChild(exampleCard({ cn: item.tiles.join(""), py: item.py, en: item.en, note: item.note }));
        check.classList.add("hidden");
        reveal.classList.add("hidden");
        reset.classList.add("hidden");
        next.classList.remove("hidden");
        ai.classList.remove("hidden");
        next.focus(); // Check/Reveal just vanished under the keyboard user
        if (!viaReveal) speak(item.tiles.join(""));
      }
      check.onclick = () => {
        const got = [...answer.children].map(c => c.textContent).join(SEP);
        const want = item.tiles.join(SEP);
        const altWant = (item.alt || []).map(a => a.join(SEP));
        if (got === want || altWant.includes(got)) {
          recordAnswer(qkey, firstTry);
          if (firstTry) recordMiss(missId, true);
          success(false);
        } else {
          if (firstTry) recordMiss(missId, false);
          firstTry = false;
          fails++;
          lastWrong = got.split(SEP).join(""); // strip the tile separators; the AI prompt wants plain text
          ai.classList.remove("hidden");
          answer.classList.add("bad");
          feedback.innerHTML = '<span style="color:var(--bad)">Not yet — ' +
            (fails >= 2 ? "you can reveal the answer, or keep trying."
              : item.hint ? "hint: " + fmt(item.hint)
              : "compare with the pattern boxes above.") + "</span>";
          if (fails >= 2) reveal.classList.remove("hidden");
        }
      };
      reset.onclick = () => {
        answer.classList.remove("ok", "bad");
        [...answer.children].forEach(c => pool.appendChild(c));
        feedback.innerHTML = "";
      };
      reveal.onclick = () => { recordAnswer(qkey, false); success(true); };
      next.onclick = () => {
        if (idx < sec.items.length - 1) {
          idx++;
          draw();
          const t0 = holder.querySelector(".b-pool .tile");
          if (t0) t0.focus(); // keep keyboard focus inside the rebuilt widget
        } else { holder.querySelector(".b-controls").innerHTML = "<b>🎉 Builder complete!</b>"; }
      };
      controls.appendChild(check);
      controls.appendChild(reset);
      controls.appendChild(reveal);
      controls.appendChild(next);
      controls.appendChild(ai);
      box.appendChild(answer);
      box.appendChild(pool);
      box.appendChild(live);
      box.appendChild(controls);
      box.appendChild(feedback);
      holder.appendChild(box);
    }
    draw();
    root.appendChild(holder);
  }

  function renderClinic(sec, root) {
    const list = el("div", "clinic");
    sec.items.forEach((item, i) => {
      const card = el("div", "er");
      card.appendChild(el("div", "q-num", "PATIENT " + (i + 1) + " / " + sec.items.length));
      const w = el("div", "er-wrong", fmt(item.wrong));
      card.appendChild(w);
      card.appendChild(el("div", "er-task", "Diagnose the error, then reveal the fix."));
      const btn = el("button", "btn ghost", "Reveal fix 🩺");
      btn.type = "button";
      const fix = el("div", "er-fix hidden");
      fix.tabIndex = -1; // focus target when the Reveal button hides itself
      const r = el("div", "er-right", fmt(item.right) + ' <button type="button" class="spk" title="Listen" aria-label="Listen">🔊</button>');
      r.style.cursor = "pointer";
      r.onclick = () => speak(item.right); // the .spk button bubbles here — keyboard path included
      fix.appendChild(r);
      if (item.py) fix.appendChild(el("div", "ex-py", fmt(item.py)));
      if (item.en) fix.appendChild(el("div", "ex-en", fmt(item.en)));
      fix.appendChild(el("div", "er-expl", "🩺 " + item.expl));
      const actions = el("div", "q-actions");
      actions.appendChild(aiBtn("Copy for AI", () => clinicPrompt(item)));
      fix.appendChild(actions);
      btn.onclick = () => { fix.classList.remove("hidden"); btn.classList.add("hidden"); fix.focus(); };
      card.appendChild(btn);
      card.appendChild(fix);
      list.appendChild(card);
    });
    root.appendChild(list);
  }

  function renderCheat(sec, root) {
    root.appendChild(el("div", "cheat", sec.html));
  }

  const RENDERERS = {
    concept: renderConcept,
    examples: renderExamples,
    table: renderTable,
    tabs: renderTabs,
    mcq: renderMcq,
    builder: renderBuilder,
    clinic: renderClinic,
    cheatsheet: renderCheat
  };

  /* ---------------- page assembly ---------------- */
  window.registerPage = function (page) {
    if (window.COLLECT_PAGES) { window.COLLECT_PAGES.push(page); return; } // review.html: collect, don't render
    currentPage = page;
    tracker.pageId = page.id;
    tracker.results = {};
    tracker.total = 0;
    let lastMcq = null;
    page.sections.forEach((s, i) => {
      if (s.type === "mcq" || s.type === "builder") {
        s._qkey = "s" + i;
        tracker.total += s.items.length;
      }
      if (s.type === "mcq") lastMcq = s;
    });
    if (lastMcq) lastMcq._last = true; // final drill gets the "what's next" links
    markVisited(page.id);
    migratePageMisses(page); // upgrade legacy positional miss ids for this page
    try { localStorage.setItem("hsk4lab-last", JSON.stringify({ id: page.id, t: Date.now() })); } catch (e) {}

    const zhTitle = stripMarks(page.zh);
    document.title = (page.title.includes(zhTitle) ? page.title : zhTitle + " — " + page.title) + " · HSK 4 Grammar Lab";
    const app = document.getElementById("app");
    const wrap = el("div", "wrap");
    app.appendChild(wrap);

    // keyboard users shouldn't have to tab through the header on all 27 topics
    const skip = el("a", "skip-link", "Skip to lesson");
    skip.href = "#sec1";
    wrap.appendChild(skip);

    // top bar
    const top = el("div", "site-top");
    top.appendChild(el("a", "home-link", '<span class="dot"></span> HSK 4 Grammar Lab')).href = "../index.html";
    const toggles = el("div", "toggles");
    initToggles(toggles);
    top.appendChild(toggles);
    wrap.appendChild(top);

    // hero
    const hero = el("div", "hero");
    const meta = (window.ALL_PAGES || []).find(p => p.id === page.id) || {};
    hero.appendChild(el("span", "unit-chip", meta.unitZh
      ? '<span class="zh">' + esc(meta.unitZh) + "</span> · " + esc(meta.unit)
      : "HSK 4"));
    hero.appendChild(el("div", "zh-big", fmt(page.zh).replace(/<b class="hl">/g, '<span class="accent">').replace(/<\/b>/g, "</span>")));
    hero.appendChild(el("h1", null, esc(page.title)));
    if (page.subtitle) hero.appendChild(el("p", "subtitle", page.subtitle));
    wrap.appendChild(hero);

    // chip nav
    const nav = el("nav", "chipnav");
    nav.setAttribute("aria-label", "Lesson sections");
    page.sections.forEach((sec, i) => {
      if (!sec.title) return;
      const a = el("a", null, (i + 1) + " · " + esc(sec.short || sec.title.replace(/<[^>]+>/g, "")));
      a.href = "#sec" + (i + 1);
      nav.appendChild(a);
    });
    wrap.appendChild(nav);

    // sections
    page.sections.forEach((sec, i) => {
      const s = el("section", "block");
      s.id = "sec" + (i + 1);
      s.appendChild(el("div", "sec-kicker", "Part " + (i + 1)));
      s.appendChild(el("h2", null, sec.title));
      if (sec.intro) s.appendChild(el("p", "sec-intro", sec.intro));
      const body = el("div");
      s.appendChild(body);
      // one malformed section must not take the rest of the page down with it
      try { (RENDERERS[sec.type] || renderConcept)(sec, body); }
      catch (err) {
        body.appendChild(el("p", "sec-error", "⚠ This section failed to render — the topic data file may have an error."));
        if (window.console && console.error) console.error('Section ' + (i + 1) + ' ("' + sec.type + '") failed to render:', err);
      }
      wrap.appendChild(s);
    });

    // AI practice card (the site never calls an API — it hands the learner a prompt)
    const aiCard = el("div", "ai-topic");
    const aiTxt = el("div", "ai-topic-text");
    aiTxt.appendChild(el("b", null, "🤖 Practice more with AI"));
    aiTxt.appendChild(el("span", null, "Copies this topic's rules plus a request for 10 fresh exam-style questions — paste it into ChatGPT, Claude or any AI chatbot."));
    aiCard.appendChild(aiTxt);
    aiCard.appendChild(aiBtn("Copy practice prompt", () => topicPrompt(page)));
    wrap.appendChild(aiCard);

    // pager
    const all = window.ALL_PAGES || [];
    const pos = all.findIndex(p => p.id === page.id);
    const pager = el("div", "pager");
    const pagerTitle = p => p.title.includes(stripMarks(p.zh))
      ? '<span class="p-zh">' + esc(p.title) + "</span>"
      : '<span class="p-zh">' + esc(p.zh) + "</span> · " + esc(p.title);
    if (pos > 0) {
      const p = all[pos - 1];
      const a = el("a", "prev", '<div class="dir">← Previous</div><div class="p-title">' + pagerTitle(p) + "</div>");
      a.href = p.id + ".html";
      pager.appendChild(a);
    }
    if (pos >= 0 && pos < all.length - 1) {
      const p = all[pos + 1];
      const a = el("a", "next", '<div class="dir">Next →</div><div class="p-title">' + pagerTitle(p) + "</div>");
      a.href = p.id + ".html";
      pager.appendChild(a);
    }
    wrap.appendChild(pager);
    wrap.appendChild(el("div", "site-footer", 'HSK 4 Grammar Lab · <span class="zh">加油，Paul！</span> · Tap any Chinese sentence to hear it — tap again for slow'));
    // Chinese in tables is speakable too — with a real button for keyboard users
    wrap.querySelectorAll(".tbl .zh").forEach(z => {
      const txt = z.textContent; // captured BEFORE the 🔊 button joins the cell
      z.style.cursor = "pointer";
      z.title = "Listen";
      z.onclick = () => speak(txt);
      z.insertAdjacentHTML("beforeend", ' <button type="button" class="spk" title="Listen" aria-label="Listen">🔊</button>');
    });
    zhLang(wrap);
  };

  /* ---------------- review page (错题本) ---------------- */
  function missesReviewPrompt(list) {
    const byTopic = {};
    list.forEach(r => { (byTopic[r.item._srcTopic] = byTopic[r.item._srcTopic] || []).push(r); });
    const lines = [AI_PREAMBLE, "",
      "Below is my current wrong-answer list from the site, grouped by grammar topic (×N = how many times I've missed it)."];
    for (const topic of Object.keys(byTopic)) {
      lines.push("", "Topic: " + topic);
      byTopic[topic].forEach(r => {
        const it = r.item;
        if (r.type === "mcq") {
          lines.push("- [multiple choice] " + plain(it.q) + " | choices: " + it.choices.map(plain).join(" / ") +
            " | correct: " + plain(it.choices[it.a]) + " | ×" + r.miss.n);
        } else {
          lines.push('- [word order] ' + it.tiles.join("") + (it.en ? ' ("' + plain(it.en) + '")' : "") + " | ×" + r.miss.n);
        }
      });
    }
    lines.push("", "Please:",
      "1. Look at these misses together and identify the underlying grammar patterns I'm confusing.",
      "2. Rank my 3 weakest areas, with a one-line diagnosis each.",
      "3. Coach me on the weakest one: a short, focused explanation first, then 5 new HSK 4-level practice questions, one at a time — correct and explain each of my answers.");
    return lines.join("\n");
  }

  window.renderReview = function () {
    const pages = window.COLLECT_PAGES || [];
    pages.forEach(migratePageMisses); // legacy positional ids → content-hash ids
    const misses = loadMisses();
    document.title = "Review your misses · HSK 4 Grammar Lab";
    const app = document.getElementById("app");
    const wrap = el("div", "wrap");
    app.appendChild(wrap);

    const top = el("div", "site-top");
    top.appendChild(el("a", "home-link", '<span class="dot"></span> HSK 4 Grammar Lab')).href = "index.html";
    const toggles = el("div", "toggles");
    initToggles(toggles);
    top.appendChild(toggles);
    wrap.appendChild(top);

    const hero = el("div", "hero");
    hero.appendChild(el("span", "unit-chip", "复习 · Review"));
    hero.appendChild(el("div", "zh-big", '错题<span class="accent">本</span>'));
    hero.appendChild(el("h1", null, "Review your misses"));
    wrap.appendChild(hero);

    // per-page lookup: content-hash id → its section + item
    const known = {};
    ((window.MANIFEST || {}).units || []).forEach(u => u.pages.forEach(p => { known[p.id] = 1; }));
    const manifestLoaded = Object.keys(known).length > 0;
    const maps = {};
    pages.forEach(p => {
      const map = {};
      p.sections.forEach(sec => {
        if (sec.type !== "mcq" && sec.type !== "builder") return;
        (sec.items || []).forEach(item => {
          map[(sec.type === "mcq" ? mcqMissId : builderMissId)(p.id, item)] = { sec: sec, item: item };
        });
      });
      maps[p.id] = map;
    });

    const mcqItems = [], builderItems = [], allResolved = [];
    let stale = false;
    const t = dateStr(0);
    for (const id of Object.keys(misses)) {
      if (misses[id].grad) continue; // graduated tombstone — nothing to review
      const pid = id.split("/")[0];
      // only trust "unknown topic" as a delete signal when the manifest actually
      // loaded — an empty `known` would otherwise wipe the whole store
      if (!known[pid]) {
        if (manifestLoaded) { delete misses[id]; stale = true; } // topic no longer exists
        continue;
      }
      const page = pages.find(p => p.id === pid);
      if (!page) continue; // data file didn't load (offline?) — keep the record, skip for now
      const hit = maps[pid][id];
      if (!hit) { delete misses[id]; stale = true; continue; } // content edited since the miss was saved
      const copy = Object.assign({}, hit.item, { _src: id, _srcLabel: stripMarks(page.zh), _srcTopic: topicLabel(page) });
      allResolved.push({ type: hit.sec.type, item: copy, miss: misses[id] });
      if (misses[id].due > t) continue; // scheduled for a later day — spaced repetition at work
      (hit.sec.type === "mcq" ? mcqItems : builderItems).push(copy);
    }
    if (stale) saveMisses(misses);
    // aggregate counts come from the one shared implementation
    const revStats = missStats();
    const scheduled = revStats.scheduled, nextDue = revStats.next;

    if (allResolved.length) {
      const acts = el("div", "review-actions");
      acts.appendChild(aiBtn("Copy all my misses for AI (" + allResolved.length + ")", () => missesReviewPrompt(allResolved)));
      hero.appendChild(acts);
    }

    if (!mcqItems.length && !builderItems.length) {
      hero.insertBefore(el("p", "subtitle", scheduled
        ? 'Nothing due today — <span class="zh">太棒了！</span> ' + scheduled + " question" + (scheduled > 1 ? "s are" : " is") + " scheduled to come back on " + nextDue + "."
        : 'Nothing to review — <span class="zh">太棒了！</span> Miss a question anywhere on the site and it lands here for another round.'),
        hero.querySelector(".review-actions"));
      wrap.appendChild(el("p", null, '<a href="index.html">← Back to all topics</a>'));
      zhLang(wrap);
      return;
    }
    hero.insertBefore(el("p", "subtitle", "Questions you missed, back on a spaced schedule. Answer one correctly and it levels up (level 3 graduates it for good); miss it again and it starts over." +
      (scheduled ? " " + scheduled + " more scheduled from " + nextDue + "." : "")),
      hero.querySelector(".review-actions"));

    let n = 0;
    const addSection = (title, type, items) => {
      if (!items.length) return;
      n++;
      const s = el("section", "block");
      s.appendChild(el("div", "sec-kicker", "Round " + n));
      s.appendChild(el("h2", null, title));
      const body = el("div");
      s.appendChild(body);
      RENDERERS[type]({ type: type, items: items, _qkey: "review" + n }, body);
      wrap.appendChild(s);
    };
    addSection("Missed questions (" + mcqItems.length + ")", "mcq", shuffled(mcqItems));
    addSection("Missed sentence builds (" + builderItems.length + ")", "builder", shuffled(builderItems));
    wrap.appendChild(el("div", "site-footer", 'Correct answers move a question up a level — it comes back after 2, then 5 days, then graduates for good. <span class="zh">加油！</span>'));
    zhLang(wrap);
  };

  /* ---------------- index page ---------------- */
  window.renderIndex = function () {
    const M = window.MANIFEST;
    const store = loadStore();
    const app = document.getElementById("app");
    const wrap = el("div", "wrap");
    app.appendChild(wrap);

    const top = el("div", "site-top");
    top.appendChild(el("span", "home-link", '<span class="dot"></span> HSK 4 Grammar Lab'));
    const toggles = el("div", "toggles");
    initToggles(toggles);
    top.appendChild(toggles);
    wrap.appendChild(top);

    const hero = el("div", "idx-hero");
    hero.appendChild(el("h1", "zh-big", '从三级<span class="accent">到四级</span>'));
    hero.appendChild(el("p", "lead", "You passed HSK 3. This site teaches <b>exactly the delta</b> to HSK 4 — every new structure, pattern and trap, with hundreds of interactive exam-level exercises."));
    const nPages = window.ALL_PAGES.length;
    // exact exercise count is computed at build time (see scripts/build-shells.js)
    const nItems = (window.SITE_STATS && window.SITE_STATS.items) || "1400+";
    const stats = el("div", "idx-stats");
    stats.innerHTML = '<div class="idx-stat"><div class="n">' + M.units.length + '</div><div class="l">Units</div></div>' +
      '<div class="idx-stat"><div class="n">' + nPages + '</div><div class="l">Topics</div></div>' +
      '<div class="idx-stat"><div class="n">' + nItems + '</div><div class="l">Examples & exercises</div></div>';
    hero.appendChild(stats);
    wrap.appendChild(hero);

    // today strip: continue where you left off + suggested next topic
    const lastRaw = (() => { try { return JSON.parse(localStorage.getItem("hsk4lab-last")); } catch (e) { return null; } })();
    const lastPage = lastRaw && window.ALL_PAGES.find(p => p.id === lastRaw.id);
    const nextPage = window.ALL_PAGES.find(p =>
      (!lastPage || p.id !== lastPage.id) && ((store[p.id] || {}).best || 0) < 80);
    if (lastPage || nextPage) {
      const strip = el("div", "today-strip");
      const chip = (dir, p) => {
        const zh = stripMarks(p.zh);
        const label = p.title.includes(zh) ? '<span class="t-zh">' + esc(p.title) + "</span>"
          : '<span class="t-zh">' + esc(zh) + "</span> · " + esc(p.title);
        const a = el("a", null, '<div class="dir">' + dir + '</div><div class="t-title">' + label + "</div>");
        a.href = "topics/" + p.id + ".html";
        strip.appendChild(a);
      };
      if (lastPage) chip("▶ Continue", lastPage);
      if (nextPage) chip(lastPage ? "Next up" : "Start here", nextPage);
      wrap.appendChild(strip);
    }

    // review strip (错题本) — shows what's DUE, not just what exists
    const mStats = missStats();
    const rev = el("a", "review-link");
    rev.href = "review.html";
    rev.innerHTML = '<span class="rl-zh">错题本</span><b>Review your misses</b>' +
      (mStats.due ? '<span class="rl-count">' + mStats.due + " due</span>" :
       mStats.scheduled ? '<span class="rl-empty">none due today ✓ · ' + mStats.scheduled + " scheduled for " + mStats.next + "</span>" :
       '<span class="rl-empty">questions you miss collect here</span>');
    wrap.appendChild(rev);

    M.units.forEach(u => {
      const unit = el("div", "unit");
      const head = el("div", "unit-head");
      head.appendChild(el("span", "u-zh", esc(u.zh)));
      head.appendChild(el("h2", null, esc(u.name)));
      unit.appendChild(head);
      unit.appendChild(el("p", "unit-desc", u.desc));
      const cards = el("div", "cards");
      u.pages.forEach(p => {
        const st = store[p.id] || {};
        const pct = Math.min(100, st.best || 0);
        const answered = Math.min(st.answered || 0, st.total || 0); // clamped: imports/content changes can leave answered > total
        const a = el("a", "card");
        a.href = "topics/" + p.id + ".html";
        if (st.total) a.title = answered + " of " + st.total + " questions answered · best first-try score " + pct + "%";
        // the title tooltip is invisible to touch + screen readers; mirror it here
        a.setAttribute("aria-label", stripMarks(p.zh) + " — " + p.title +
          (st.total ? " — best first-try score " + pct + "%, " + answered + " of " + st.total + " questions answered"
                    : st.visited ? " — visited" : ""));
        a.innerHTML = '<span class="c-zh">' + esc(p.zh) + "</span>" +
          '<span class="c-title">' + esc(p.title) + "</span>" +
          '<span class="c-blurb">' + esc(p.blurb) + "</span>" +
          '<span class="c-progress"><span class="pbar"><div style="width:' + pct + '%"></div></span><span class="pct">' + (st.visited ? pct + "%" : "·") + "</span></span>" +
          (pct >= 80 ? '<span class="c-done">🏅</span>' : st.visited ? '<span class="c-done">👀</span>' : "");
        cards.appendChild(a);
      });
      unit.appendChild(cards);
      wrap.appendChild(unit);
    });
    // backup / cross-device sync: export & import via clipboard (no account, no server)
    const dataRow = el("div", "data-row");
    dataRow.appendChild(el("span", null, "Progress is saved in this browser only —"));
    const exp = el("button", "toggle-btn", "Export progress");
    exp.onclick = () => copyText(
      JSON.stringify({ v: 1, exported: dateStr(0), progress: loadStore(), misses: loadMisses() }),
      "Progress copied — paste it into Import on your other device");
    const imp = el("button", "toggle-btn", "Import");
    dataRow.appendChild(exp);
    dataRow.appendChild(imp);
    const panel = el("div", "data-import hidden");
    const ta = el("textarea");
    ta.placeholder = "Paste an export from your other device here…";
    const apply = el("button", "btn primary", "Import & merge");
    apply.onclick = () => {
      const err = importData(ta.value.trim());
      if (err) { toast(err); return; }
      toast("Imported ✓ — reloading…");
      setTimeout(() => location.reload(), 900);
    };
    imp.onclick = () => panel.classList.toggle("hidden");
    panel.appendChild(ta);
    panel.appendChild(apply);
    wrap.appendChild(dataRow);
    wrap.appendChild(panel);

    wrap.appendChild(el("div", "site-footer", "Best score per topic is saved in your browser — no account, no server, no tracking. Fonts load from Google Fonts (the site's only third-party request). 🏅 = 80%+ · Built for the HSK 3 → HSK 4 jump."));
    zhLang(wrap);
  };

  // merge an exported snapshot into this browser's stores (never deletes local data)
  function importData(text) {
    let data;
    try { data = JSON.parse(text); } catch (e) { return "That isn't valid JSON — paste the exact text from Export."; }
    if (!data || data.v !== 1 || !data.progress || typeof data.progress !== "object" ||
        !data.misses || typeof data.misses !== "object") return "That doesn't look like an export from this site.";
    const store = loadStore();
    for (const id of Object.keys(data.progress)) {
      if (!SAFE_KEY(id)) continue; // "__proto__" here would write onto Object.prototype
      const inc = data.progress[id] || {}, cur = store[id] || {};
      cur.visited = !!(cur.visited || inc.visited);
      if (inc.total) cur.total = Math.max(cur.total || 0, inc.total);
      if (inc.answered) cur.answered = Math.max(cur.answered || 0, inc.answered);
      if (inc.best) cur.best = Math.min(100, Math.max(cur.best || 0, inc.best));
      store[id] = cur;
    }
    const m = loadMisses();
    for (const id of Object.keys(data.misses)) {
      if (!SAFE_KEY(id)) continue;
      const inc = normMiss(data.misses[id]);
      if (!inc) continue;
      // mergeMiss keeps the conservative schedule — and a graduation on either
      // device wins, so an old export can't resurrect a mastered question
      m[id] = m[id] ? mergeMiss(m[id], inc) : inc;
    }
    saveStore(store);
    saveMisses(m);
    return null;
  }
})();
