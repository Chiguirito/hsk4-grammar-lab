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
  const CJK_RE = /[\u3400-\u9fff\uf900-\ufaff]/; // escapes, not literals: U+F900 has a lookalike (U+8C48) that already fooled one copy of this regex
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

  /* ---------------- HSK-4 vocabulary: tap-to-translate ----------------
     assets/data/vocab.js (loaded by topic + review shells) ships the target
     words — (old ∪ new HSK 4) minus the HSK 1–3 lists the learner already
     knows — plus a plain list of every other HSK word so longest-match
     segmentation can't wrap a target word that is really part of a longer
     known word (小时 inside 小时候). Annotation happens at render time ON
     PURPOSE: content strings are never edited, so miss-store content hashes
     stay stable. Never annotates inside links or buttons (quiz choices could
     leak the answer through a gloss; builder tiles must stay plain; a tap on
     a pager link must navigate, not open a popover). */
  let vocabMap = null, vocabMaxLen = 1;
  function vocabReady() {
    if (vocabMap) return true;
    const V = window.HSK4_VOCAB;
    // hard guard: a missing/malformed vocab.js degrades to "no underlines",
    // it must never take down page rendering
    if (!V || V.v !== 1 || !Array.isArray(V.words) || typeof V.dict !== "string") return false;
    vocabMap = new Map();
    V.dict.split(" ").forEach(w => vocabMap.set(w, -1));
    V.words.forEach((e, i) => vocabMap.set(e[0], i));
    for (const w of vocabMap.keys()) if (w.length > vocabMaxLen) vocabMaxLen = w.length;
    document.addEventListener("click", e => {
      const w = e.target.closest(".vw");
      if (w) vocabPop(w);
      else if (!e.target.closest(".vw-pop")) hideVocabPop();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") { hideVocabPop(true); return; }
      const w = e.target.closest ? e.target.closest(".vw") : null;
      if (!w) return;
      // role="button" spans don't get native Enter/Space activation
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        vocabPop(w);
      } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        // roving tabindex: one Tab stop per sentence, arrow keys walk its words
        const box = w.closest("[data-vw]");
        const list = box ? [...box.querySelectorAll(".vw")] : [];
        const to = list[list.indexOf(w) + (e.key === "ArrowRight" ? 1 : -1)];
        if (!to) return;
        e.preventDefault();
        w.tabIndex = -1;
        to.tabIndex = 0;
        to.focus();
      }
    });
    // the popover follows its word through scrolls of ANY container (capture:
    // element scrolls don't bubble) and hides only when the word leaves view
    let vwRaf = 0;
    addEventListener("scroll", () => {
      if (!vwFor || vwRaf) return;
      vwRaf = requestAnimationFrame(() => {
        vwRaf = 0;
        if (!vwFor) return;
        const r = vwFor.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) hideVocabPop();
        else placeVocabPop(r);
      });
    }, { capture: true, passive: true });
    addEventListener("resize", () => hideVocabPop(), { passive: true });
    return true;
  }
  let vwPop = null, vwFor = null;
  function hideVocabPop(refocus) {
    if (!vwFor) return;
    const w = vwFor;
    vwFor = null;
    vwPop.classList.add("hidden");
    w.setAttribute("aria-expanded", "false");
    // opening moved focus into the dialog — hand it back to the word (but
    // never steal it from wherever a click-away already put it)
    if (refocus || vwPop.contains(document.activeElement)) w.focus({ preventScroll: true });
  }
  function placeVocabPop(r) {
    const pw = vwPop.offsetWidth, ph = vwPop.offsetHeight;
    vwPop.style.left = Math.max(8, Math.min(r.left + r.width / 2 - pw / 2, innerWidth - pw - 8)) + "px";
    vwPop.style.top = (r.bottom + 8 + ph > innerHeight - 8 ? Math.max(8, r.top - ph - 8) : r.bottom + 8) + "px";
  }
  function vocabPop(span) {
    const entry = ((window.HSK4_VOCAB || {}).words || [])[+span.dataset.vi];
    if (!entry) return;
    if (vwFor === span) { hideVocabPop(); return; } // second tap closes
    hideVocabPop();
    if (!vwPop) {
      vwPop = el("div", "vw-pop hidden");
      vwPop.setAttribute("role", "dialog");
      vwPop.setAttribute("aria-label", "Word translation");
      vwPop.tabIndex = -1; // focus lands here on open so screen readers announce the content
      document.body.appendChild(vwPop);
    }
    // mid-transition the exam version matters — name the list(s) precisely
    const f = entry[3], lists = [];
    if (f & 1) lists.push("old");
    if (f & 4) lists.push("new 2026");
    else if (f & 2) lists.push("new 2021");
    const tag = f & 8 ? "HSK 1–3 · assumed on the 2026 exam" : "HSK 4 · " + lists.join(" + ") + " list";
    vwPop.innerHTML =
      '<div class="vw-head"><span class="vw-w" lang="zh-Hans">' + esc(entry[0]) + '</span>' +
      '<button type="button" class="spk" title="Listen" aria-label="Listen">🔊</button></div>' +
      '<div class="vw-py" lang="zh-Latn-pinyin">' + esc(entry[1]) + "</div>" +
      '<div class="vw-en">' + esc(entry[2]) + "</div>" +
      (entry[5] ? '<div class="vw-cl">量词 <span class="zh" lang="zh-Hans">' + esc(entry[5]) + "</span></div>" : "") +
      '<div class="vw-tag">' + esc(tag) + "</div>";
    vwPop.querySelector(".spk").onclick = () => speak(entry[0]);
    // measure hidden, then place near the word, clamped to the viewport
    vwPop.style.visibility = "hidden";
    vwPop.classList.remove("hidden");
    placeVocabPop(span.getBoundingClientRect());
    vwPop.style.visibility = "";
    span.setAttribute("aria-expanded", "true");
    vwFor = span;
    vwPop.focus({ preventScroll: true });
  }
  /* SEGMENTER-BEGIN — bidirectional maximum matching. scripts/vocab-coverage.js
     executes this exact block (extracted via these markers), so the coverage
     report can never drift from what the site underlines.
     Greedy forward alone splits 放进口袋 as 进口+袋; the backward pass finds
     进+口袋 and the tie-breaks below decide. Returns [{i, len, vi}] segments;
     vi -1 = known word, -2 = char in no list (still a segment, so both passes
     are compared over the same ground). */
  function vocabScan(s, back) {
    const segs = [];
    let p = back ? s.length : 0;
    while (back ? p > 0 : p < s.length) {
      if (!CJK_RE.test(s[back ? p - 1 : p])) { p += back ? -1 : 1; continue; }
      let hit = 1, vi = -2;
      for (let len = Math.min(vocabMaxLen, back ? p : s.length - p); len > 0; len--) {
        const v = vocabMap.get(s.substr(back ? p - len : p, len));
        if (v !== undefined) { hit = len; vi = v; break; }
      }
      if (back) { p -= hit; segs.unshift({ i: p, len: hit, vi: vi }); }
      else { segs.push({ i: p, len: hit, vi: vi }); p += hit; }
    }
    return segs;
  }
  function vocabSegment(s) {
    const f = vocabScan(s, false), b = vocabScan(s, true);
    if (f.length !== b.length) return f.length < b.length ? f : b;
    if (f.every((x, k) => x.i === b[k].i && x.len === b[k].len)) return f;
    // the passes disagree: fewer single-char words, then fewer target matches
    // (a false underline is worse than a missed one), then forward — the
    // symmetric ties left are noun+localizer (阳台+上), where backward steals
    // the localizer into a fake word (阳+台上)
    const singles = a => a.filter(x => x.len === 1).length;
    const targets = a => a.filter(x => x.vi >= 0).length;
    if (singles(f) !== singles(b)) return singles(f) < singles(b) ? f : b;
    return targets(f) <= targets(b) ? f : b;
  }
  /* SEGMENTER-END */
  // wrap target words in already-zhLang'd content under root; idempotent
  function annotateVocab(root) {
    if (!vocabReady()) return;
    root.querySelectorAll('[lang="zh-Hans"]').forEach(zEl => {
      if (zEl.dataset.vw || zEl.closest("a, button, .b-pool, .b-answer, .vw")) return;
      zEl.dataset.vw = "1";
      // one malformed element must never take down page rendering
      try { annotateEl(zEl); } catch (err) {}
    });
  }
  function annotateEl(zEl) {
    /* Segment the element's WHOLE text, not per text node: a word split
       across markup (来**得及** renders as text + <b class="hl">) is still
       found and each piece gets wrapped. Skipped subtrees (links, buttons
       like the 🔊) insert a separator so no word can match across them. */
    const tw = document.createTreeWalker(zEl, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let s = "", tn;
    while ((tn = tw.nextNode())) {
      if (tn.parentElement.closest("a, button, .vw")) { s += "\u0001"; continue; } // escape on purpose — a raw control char is invisible (see builder SEP)
      nodes.push({ node: tn, start: s.length, end: s.length + tn.nodeValue.length });
      s += tn.nodeValue;
    }
    if (!CJK_RE.test(s)) return;
    const perNode = new Map(); // node record → [{from, to, vi}] local ranges, in order
    vocabSegment(s).forEach(seg => {
      if (seg.vi < 0) return; // known word — only needed to place boundaries
      const end = seg.i + seg.len;
      const hits = nodes.filter(n => n.end > seg.i && n.start < end);
      // a word that IS the accent highlight (**却** on the 却-lesson) is the
      // page's own subject, explained right above — underlining every
      // occurrence is noise, not signal
      if (hits.length === 1) {
        const hl = hits[0].node.parentElement.closest(".hl");
        if (hl && hl.textContent === s.substr(seg.i, seg.len)) return;
      }
      hits.forEach(n => {
        if (!perNode.has(n)) perNode.set(n, []);
        perNode.get(n).push({ from: Math.max(seg.i, n.start) - n.start, to: Math.min(end, n.end) - n.start, vi: seg.vi });
      });
    });
    let firstTab = true; // roving tabindex: one Tab stop per sentence, arrows do the rest
    perNode.forEach((ranges, n) => {
      const txt = n.node.nodeValue;
      const frag = document.createDocumentFragment();
      let last = 0;
      ranges.forEach(r => {
        if (r.from > last) frag.appendChild(document.createTextNode(txt.slice(last, r.from)));
        const w = el("span", "vw", esc(txt.slice(r.from, r.to)));
        w.dataset.vi = r.vi;
        w.setAttribute("role", "button");
        w.setAttribute("tabindex", firstTab ? "0" : "-1");
        w.setAttribute("aria-expanded", "false");
        w.setAttribute("aria-haspopup", "dialog");
        firstTab = false;
        frag.appendChild(w);
        last = r.to;
      });
      if (last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
      n.node.parentNode.replaceChild(frag, n.node);
    });
    if (perNode.size) vocabHint();
  }
  // one-shot discoverability toast — a title tooltip never shows on touch and
  // makes VoiceOver read an English sentence inside every Chinese one
  let vwHinted = false;
  function vocabHint() {
    if (vwHinted) return;
    vwHinted = true;
    try {
      if (localStorage.getItem("hsk4lab-vw-hint")) return;
      localStorage.setItem("hsk4lab-vw-hint", "1");
    } catch (e) { return; }
    toast("Dotted-underlined words are new HSK 4 vocabulary — tap one for a translation");
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

  /* ---------------- study-day log (drives the Today-panel streak) ----------------
     A study day = a day with at least one ANSWERED question (quiz, builder or
     review) — opening the site or re-reading doesn't count. Additive key. */
  const DAYS_KEY = "hsk4lab-days";
  function loadDays() {
    try {
      const d = JSON.parse(localStorage.getItem(DAYS_KEY));
      return Array.isArray(d) ? d.filter(x => /^\d{4}-\d{2}-\d{2}$/.test(x)) : [];
    } catch (e) { return []; }
  }
  let dayLogged = false; // one write per visit is plenty
  function logStudyDay() {
    if (dayLogged) return;
    dayLogged = true;
    try {
      const days = loadDays();
      const t = dateStr(0);
      if (days.indexOf(t) < 0) {
        days.push(t);
        days.sort();
        localStorage.setItem(DAYS_KEY, JSON.stringify(days.slice(-60)));
      }
    } catch (e) {}
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
    logStudyDay(); // any answered question marks today a study day (review page included)
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
    logStudyDay(); // builder wrong attempts reach here without recordAnswer
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
    store[pageId].lv = dateStr(0); // last visit — additive field, ignored by import merge
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
    // audio lives on the 🔊 button only — the sentence text stays selectable
    // for long-press Look Up / dictionary lookups on iPad
    cn.innerHTML = fmt(item.cn) + ' <button type="button" class="spk" title="Listen" aria-label="Listen">🔊</button>';
    cn.querySelector(".spk").onclick = () => speak(item.cn);
    card.appendChild(cn);
    if (item.py) card.appendChild(el("div", "ex-py", fmt(item.py)));
    if (item.en) card.appendChild(el("div", "ex-en", fmt(item.en)));
    if (item.note) card.appendChild(el("div", "ex-note", "💡 " + fmt(item.note))); // plain text + **…** only, per CONTENT_GUIDE
    zhLang(card);
    annotateVocab(card); // builder feedback cards render after the page-level pass
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
          annotateVocab(result); // answer is revealed now — a gloss can't leak anything anymore
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
      annotateVocab(q); // choices are buttons — skipped, so glosses can't leak answers; Retry re-renders outside the page-level pass
      quiz.appendChild(q);
    });
    function showScore() {
      // topbar/TOC listen for this to add a "completed this visit" tick
      document.dispatchEvent(new CustomEvent("hsk4:section-done", { detail: { qkey: sec._qkey } }));
      // un-hide BEFORE writing: content added while display:none is not
      // reliably announced by the role="status" live region
      scoreBox.classList.remove("hidden");
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
        } else {
          holder.querySelector(".b-controls").innerHTML = "<b>🎉 Builder complete!</b>";
          document.dispatchEvent(new CustomEvent("hsk4:section-done", { detail: { qkey: sec._qkey } }));
        }
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
      r.querySelector(".spk").onclick = () => speak(item.right); // 🔊 only — text stays selectable
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

    // prior state is read BEFORE this visit overwrites it (resume + retest offers)
    const prevStore = loadStore()[page.id] || {};
    const prevBest = prevStore.best || 0, prevLv = prevStore.lv || null;
    let prevLast = null;
    try { prevLast = JSON.parse(localStorage.getItem("hsk4lab-last")); } catch (e) {}
    const prevSec = prevLast && prevLast.id === page.id && prevLast.sec > 1 ? prevLast.sec : 0;
    const prevAgeDays = prevLast && prevLast.t ? (Date.now() - prevLast.t) / 864e5 : Infinity;

    markVisited(page.id);
    migratePageMisses(page); // upgrade legacy positional miss ids for this page
    // {id, sec, t} — sec is additive; the index Continue link deep-links to it
    const saveLast = sec => { try { localStorage.setItem("hsk4lab-last", JSON.stringify({ id: page.id, sec: sec, t: Date.now() })); } catch (e) {} };
    // a reload must not lose the saved position — but a STALE one must not be
    // laundered into "fresh" by rewriting it with t=now
    saveLast(prevSec && prevAgeDays <= 4 ? prevSec : 1);

    const zhTitle = stripMarks(page.zh);
    document.title = (page.title.includes(zhTitle) ? page.title : zhTitle + " — " + page.title) + " · HSK 4 Grammar Lab";
    const app = document.getElementById("app");
    const wrap = el("div", "wrap with-toc");
    app.appendChild(wrap);

    // keyboard users shouldn't have to tab through the header on all 27 topics
    const skip = el("a", "skip-link", "Skip to lesson");
    skip.href = "#sec1";
    wrap.appendChild(skip);

    const secLabel = sec => sec.short || String(sec.title || "").replace(/<[^>]+>/g, "");

    // sidebar TOC — typography-only rail, visible ≥1180px (CSS hides it below)
    const tocNav = el("nav", "toc");
    tocNav.setAttribute("aria-label", "Lesson contents");
    // way back home without scrolling up (scrolling to the header would move the resume point)
    const tocHome = el("a", "toc-home", "← All topics");
    tocHome.href = "../index.html";
    tocNav.appendChild(tocHome);
    tocNav.appendChild(el("div", "toc-head", "In this lesson"));
    page.sections.forEach((sec, i) => {
      if (!sec.title) return;
      const a = el("a", null, '<span class="toc-num">' + (i + 1) + "</span>" + esc(secLabel(sec)));
      a.href = "#sec" + (i + 1);
      tocNav.appendChild(a);
    });
    wrap.appendChild(tocNav);

    const content = el("div", "content-col");
    wrap.appendChild(content);

    // top bar
    const top = el("header", "site-top");
    top.appendChild(el("a", "home-link", '<span class="dot"></span> HSK 4 Grammar Lab')).href = "../index.html";
    const toggles = el("div", "toggles");
    initToggles(toggles);
    top.appendChild(toggles);
    content.appendChild(top);

    // everything after the header lives in main, so landmark navigation
    // reaches the re-entry offers and hero too
    const main = el("main");
    content.appendChild(main);

    // re-entry offer: resume a recent mid-lesson position, or nudge a retest on
    // a mastered/stale topic — at most one, dismissible, never auto-acting
    if (!location.hash) {
      const row = el("div", "resume-row");
      if (prevSec && prevSec <= page.sections.length && prevAgeDays <= 4) {
        const target = page.sections[prevSec - 1];
        const a = el("a", "resume-pill", "↩ Resume at Part " + prevSec +
          (target && target.title ? " — " + esc(secLabel(target)) : ""));
        a.href = "#sec" + prevSec;
        row.appendChild(a);
      } else if (prevBest >= 80 || (prevLv && prevLv <= dateStr(-7))) {
        const firstQuiz = page.sections.findIndex(s => s.type === "mcq" || s.type === "builder");
        let shown = false;
        try { shown = !!sessionStorage.getItem("hsk4lab-retest-" + page.id); } catch (e) {}
        if (firstQuiz >= 0 && !shown) {
          const b = el("div", "retest-banner");
          b.innerHTML = "You’ve studied this" + (prevBest ? " (best " + prevBest + "%)" : "") +
            ' — <a href="#sec' + (firstQuiz + 1) + '">test yourself first ↓</a>';
          row.appendChild(b);
          try { sessionStorage.setItem("hsk4lab-retest-" + page.id, "1"); } catch (e) {}
        }
      }
      if (row.children.length) {
        const x = el("button", "resume-dismiss", "✕");
        x.type = "button";
        x.setAttribute("aria-label", "Dismiss");
        x.onclick = () => {
          row.remove();
          const h = content.querySelector(".home-link");
          if (h) h.focus(); // don't strand keyboard focus in a removed row
        };
        row.appendChild(x);
        main.appendChild(row);
      }
    }

    // hero
    const hero = el("div", "hero");
    const meta = (window.ALL_PAGES || []).find(p => p.id === page.id) || {};
    hero.appendChild(el("span", "unit-chip", meta.unitZh
      ? '<span class="zh">' + esc(meta.unitZh) + "</span> · " + esc(meta.unit)
      : "HSK 4"));
    hero.appendChild(el("div", "zh-big", fmt(page.zh).replace(/<b class="hl">/g, '<span class="accent">').replace(/<\/b>/g, "</span>")));
    hero.appendChild(el("h1", null, esc(page.title)));
    if (page.subtitle) hero.appendChild(el("p", "subtitle", page.subtitle));
    main.appendChild(hero);

    // sticky topbar: topic name (once the hero is gone) + section chips +
    // "Part N / M" + reading-progress hairline
    const topbar = el("div", "topbar");
    const tbTitle = el("span", "tb-title", '<span class="zh">' + esc(zhTitle) + "</span>");
    const nav = el("nav", "chip-scroll");
    nav.setAttribute("aria-label", "Lesson sections");
    page.sections.forEach((sec, i) => {
      if (!sec.title) return;
      const a = el("a", null, (i + 1) + " · " + esc(secLabel(sec)));
      a.href = "#sec" + (i + 1);
      nav.appendChild(a);
    });
    const tbPart = el("span", "tb-part", "Part 1 / " + page.sections.length);
    const prog = el("div", "tb-progress");
    prog.setAttribute("aria-hidden", "true"); // decorative — tb-part is the accessible equivalent
    topbar.appendChild(tbTitle);
    topbar.appendChild(nav);
    topbar.appendChild(tbPart);
    topbar.appendChild(prog);
    main.appendChild(topbar);

    // sections
    page.sections.forEach((sec, i) => {
      const s = el("section", "block");
      s.id = "sec" + (i + 1);
      s.tabIndex = -1; // TOC/chip jumps move focus here
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
      main.appendChild(s);
    });

    // AI practice card (the site never calls an API — it hands the learner a prompt)
    const aiCard = el("div", "ai-topic");
    const aiTxt = el("div", "ai-topic-text");
    aiTxt.appendChild(el("b", null, "🤖 Practice more with AI"));
    aiTxt.appendChild(el("span", null, "Copies this topic's rules plus a request for 10 fresh exam-style questions — paste it into ChatGPT, Claude or any AI chatbot."));
    aiCard.appendChild(aiTxt);
    aiCard.appendChild(aiBtn("Copy practice prompt", () => topicPrompt(page)));
    main.appendChild(aiCard);

    // pager
    const all = window.ALL_PAGES || [];
    const pos = all.findIndex(p => p.id === page.id);
    const pager = el("nav", "pager");
    pager.setAttribute("aria-label", "Adjacent topics");
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
    content.appendChild(pager);
    // prev/next also live at the bottom of the sidebar rail
    if (pager.children.length) {
      const tp = el("div", "toc-pager");
      if (pos > 0) { const a = el("a", null, "← " + esc(stripMarks(all[pos - 1].zh))); a.href = all[pos - 1].id + ".html"; tp.appendChild(a); }
      if (pos >= 0 && pos < all.length - 1) { const a = el("a", null, esc(stripMarks(all[pos + 1].zh)) + " →"); a.href = all[pos + 1].id + ".html"; tp.appendChild(a); }
      tocNav.appendChild(tp);
    }
    content.appendChild(el("div", "site-footer", 'HSK 4 Grammar Lab · <span class="zh">加油，Paul！</span> · Tap 🔊 to hear any sentence — tap again for slow'));
    // Chinese in tables is speakable too — via the 🔊 button (text stays selectable)
    wrap.querySelectorAll(".tbl .zh").forEach(z => {
      const txt = z.textContent; // captured BEFORE the 🔊 button joins the cell
      z.insertAdjacentHTML("beforeend", ' <button type="button" class="spk" title="Listen" aria-label="Listen">🔊</button>');
      z.querySelector(".spk").onclick = () => speak(txt);
    });

    /* ---- wayfinding: scrollspy, Part label, hairline, resume save ---- */
    const sectionEls = [...main.querySelectorAll("section.block")];
    const linksFor = i => wrap.querySelectorAll('.chip-scroll a[href="#sec' + (i + 1) + '"], .toc a[href="#sec' + (i + 1) + '"]');
    const reduced = (() => { try { return matchMedia("(prefers-reduced-motion: reduce)"); } catch (e) { return { matches: false }; } })();
    let curIdx = -1, rowTouched = false, userScrolled = false;
    nav.addEventListener("pointerdown", () => { rowTouched = true; });
    ["pointerup", "pointercancel", "pointerleave"].forEach(ev => nav.addEventListener(ev, () => { rowTouched = false; }));
    function setActive(i) {
      if (i === curIdx || i < 0 || i >= sectionEls.length) return;
      curIdx = i;
      wrap.querySelectorAll(".chip-scroll a.act, .toc a.act").forEach(a => { a.classList.remove("act"); a.removeAttribute("aria-current"); });
      linksFor(i).forEach(a => { a.classList.add("act"); a.setAttribute("aria-current", "location"); });
      tbPart.textContent = "Part " + (i + 1) + " / " + sectionEls.length;
      // keep the active chip in view — but never yank the row mid-touch
      const chip = nav.querySelector('a[href="#sec' + (i + 1) + '"]');
      if (chip && !rowTouched) {
        const left = chip.offsetLeft - nav.clientWidth / 2 + chip.offsetWidth / 2;
        try { nav.scrollTo({ left: left, behavior: reduced.matches ? "auto" : "smooth" }); }
        catch (e) { nav.scrollLeft = left; }
      }
      if (userScrolled) saveLast(i + 1); // resume position — only after a real scroll
    }
    // sections are taller than the viewport: track which one crosses a band
    // ~25–35% down the screen instead of naive whole-element intersection
    if ("IntersectionObserver" in window) {
      const inBand = new Set();
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { e.isIntersecting ? inBand.add(e.target) : inBand.delete(e.target); });
        let best = -1;
        sectionEls.forEach((s, i) => { if (inBand.has(s)) best = i; });
        if (best >= 0) setActive(best);
      }, { rootMargin: "-25% 0px -65% 0px" });
      sectionEls.forEach(s => io.observe(s));
      // topbar shows the topic name once the hero has scrolled away
      new IntersectionObserver(es => {
        es.forEach(e => topbar.classList.toggle("past-hero", !e.isIntersecting));
      }).observe(hero);
    } else topbar.classList.add("past-hero");
    setActive(Math.max(0, (parseInt((location.hash.match(/^#sec(\d+)$/) || [])[1], 10) || 1) - 1));

    // anchor jumps land below the real topbar height
    const setStickyH = () => document.documentElement.style.setProperty("--sticky-h", topbar.offsetHeight + "px");
    setStickyH();
    addEventListener("resize", setStickyH);

    // reading-progress hairline (decorative; rAF-throttled; scaleX composites)
    let raf = 0;
    addEventListener("scroll", () => {
      userScrolled = true;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = document.documentElement.scrollHeight - innerHeight;
        prog.style.transform = "scaleX(" + (max > 0 ? Math.min(1, scrollY / max) : 0) + ")";
      });
    }, { passive: true });

    // chip-row edge fades: only where there actually is hidden overflow
    const updateFades = () => {
      const max = nav.scrollWidth - nav.clientWidth;
      nav.classList.toggle("can-l", nav.scrollLeft > 4);
      nav.classList.toggle("can-r", max - nav.scrollLeft > 4);
    };
    nav.addEventListener("scroll", updateFades, { passive: true });
    addEventListener("resize", updateFades);
    updateFades();
    // a chip tabbed into view must not sit half-faded under the edge mask
    nav.addEventListener("focusin", e => {
      const c = e.target.closest("a");
      if (!c) return;
      const left = c.offsetLeft - nav.clientWidth / 2 + c.offsetWidth / 2;
      try { nav.scrollTo({ left: left, behavior: "auto" }); } catch (err) { nav.scrollLeft = left; }
    });

    // ✓ on chips/TOC when a quiz/builder section is completed this visit
    document.addEventListener("hsk4:section-done", e => {
      const m = /^s(\d+)$/.exec((e.detail || {}).qkey || "");
      if (!m) return;
      linksFor(+m[1]).forEach(a => {
        if (a.querySelector(".tick")) return;
        a.insertAdjacentHTML("afterbegin", '<span class="tick" aria-hidden="true">✓</span><span class="sr-only">completed this visit — </span>');
      });
    });

    // section links: instant jump + move focus (don't rely on fragment heuristics)
    wrap.addEventListener("click", e => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // new-tab etc. stays native
      const a = e.target.closest('a[href^="#sec"]');
      if (!a) return;
      const t = document.getElementById(a.getAttribute("href").slice(1));
      if (!t) return;
      e.preventDefault();
      try { history.pushState(null, "", a.getAttribute("href")); } catch (err) {}
      userScrolled = true; // a deliberate jump counts as a position
      t.focus({ preventScroll: true });
      t.scrollIntoView(); // instant — scroll-margin-top clears the sticky bar
      // immediate highlight + resume save; also the only path without IntersectionObserver
      setActive(sectionEls.indexOf(t));
    });
    zhLang(wrap);
    annotateVocab(wrap);
    // topic shells load vocab.js AFTER the topic data so the dictionary can't
    // delay first paint on an uncached visit — annotate once it has arrived
    if (!vocabMap) addEventListener("load", () => annotateVocab(wrap), { once: true });
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
    // the drill and the review list load different data files — a hash-only
    // navigation between them must re-run the shell loader
    window.addEventListener("hashchange", () => location.reload());
    const drillMode = location.hash === "#drill";
    document.title = (drillMode ? "Daily mixed drill" : "Review your misses") + " · HSK 4 Grammar Lab";
    const app = document.getElementById("app");
    const wrap = el("div", "wrap");
    app.appendChild(wrap);

    const top = el("header", "site-top");
    top.appendChild(el("a", "home-link", '<span class="dot"></span> HSK 4 Grammar Lab')).href = "index.html";
    const toggles = el("div", "toggles");
    initToggles(toggles);
    top.appendChild(toggles);
    wrap.appendChild(top);

    const hero = el("div", "hero");
    if (drillMode) {
      hero.appendChild(el("span", "unit-chip", '<span class="zh">每日一练</span> · Mixed drill'));
      hero.appendChild(el("div", "zh-big", '混合<span class="accent">演练</span>'));
      hero.appendChild(el("h1", null, "Daily mixed drill"));
    } else {
      hero.appendChild(el("span", "unit-chip", "复习 · Review"));
      hero.appendChild(el("div", "zh-big", '错题<span class="accent">本</span>'));
      hero.appendChild(el("h1", null, "Review your misses"));
    }
    const mainEl = el("main");
    mainEl.appendChild(hero); // hero inside main — consistent landmark reach
    wrap.appendChild(mainEl);

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

    if (allResolved.length && !drillMode) {
      const acts = el("div", "review-actions");
      acts.appendChild(aiBtn("Copy all my misses for AI (" + allResolved.length + ")", () => missesReviewPrompt(allResolved)));
      hero.appendChild(acts);
    }

    let n = 0;
    const addSection = (title, type, items, stepMode) => {
      if (!items.length) return;
      n++;
      const s = el("section", "block");
      s.appendChild(el("div", "sec-kicker", "Round " + n));
      s.appendChild(el("h2", null, title));
      const body = el("div");
      s.appendChild(body);
      RENDERERS[type]({ type: type, items: items, _qkey: "review" + n }, body);
      if (stepMode && type === "mcq") stepQuiz(body);
      mainEl.appendChild(s);
    };
    // one-question-at-a-time layer for the drill: answered questions stay
    // visible for context, the next unanswered one reveals after each answer
    function stepQuiz(body) {
      const apply = () => {
        const qs = [...body.querySelectorAll(".q")];
        let first = qs.findIndex(q => !q.querySelector('.q-choices button[aria-disabled="true"]'));
        if (first < 0) first = qs.length;
        qs.forEach((q, i) => q.classList.toggle("hidden", i > first));
      };
      apply();
      body.addEventListener("click", e => {
        if (e.target.closest(".q-choices button")) setTimeout(apply, 350);
        else if (e.target.closest(".retry-btn")) setTimeout(apply, 0);
      });
    }
    // 7-day outlook: how many scheduled questions come due on each coming day
    function schedStrip() {
      const counts = [0, 0, 0, 0, 0, 0, 0];
      let totalWeek = 0, peak = 0;
      const dayStrs = [];
      for (let o = 0; o <= 6; o++) dayStrs.push(dateStr(o));
      for (const id of Object.keys(misses)) {
        const m = misses[id];
        if (m.grad) continue;
        const at = dayStrs.indexOf(m.due);
        if (at >= 0) { counts[at]++; totalWeek++; peak = Math.max(peak, counts[at]); }
      }
      if (!totalWeek) return null;
      const box = el("div", "sched");
      const bits = [];
      for (let o = 0; o <= 6; o++) {
        const name = o === 0 ? "today" : new Date(dayStrs[o] + "T12:00:00").toLocaleDateString("en", { weekday: "short" });
        const d = el("div", o === 0 ? "today" : null);
        d.innerHTML = '<div class="bar"><i style="height:' + (counts[o] ? Math.round(6 + 26 * counts[o] / peak) : 2) + 'px"></i></div>' +
          (counts[o] ? '<span class="n">' + counts[o] + "</span> " : "") + name;
        box.appendChild(d);
        if (counts[o]) bits.push(counts[o] + " due " + name);
      }
      box.setAttribute("role", "img");
      box.setAttribute("aria-label", "Upcoming reviews this week: " + bits.join(", "));
      return box;
    }

    /* ---- drill mode: ~10 interleaved questions, misses first ----
       Fresh items carry their real content-hash id, so the engine's rules
       apply unchanged: a correct answer on a never-missed question records
       nothing; missing it files it in 错题本 like anywhere else. */
    if (drillMode) {
      const DRILL_N = 10;
      const store = loadStore();
      const unitOf = {};
      (window.ALL_PAGES || []).forEach(p => { unitOf[p.id] = p.unit; });
      const picked = shuffled(allResolved.filter(r => r.miss.due <= t)).slice(0, DRILL_N);
      if (picked.length < DRILL_N) {
        const cand = [];
        pages.forEach(p => {
          if (!(store[p.id] || {}).visited) return;
          const best = (store[p.id] || {}).best || 0;
          p.sections.forEach(sec => {
            if (sec.type !== "mcq" && sec.type !== "builder") return;
            (sec.items || []).forEach(item => {
              const id = (sec.type === "mcq" ? mcqMissId : builderMissId)(p.id, item);
              if (misses[id]) return; // active or graduated — not "fresh"
              cand.push({
                type: sec.type, unit: unitOf[p.id],
                _k: best + Math.random() * 40, // weakest topics first, with variety
                item: Object.assign({}, item, { _src: id, _srcLabel: stripMarks(p.zh), _srcTopic: topicLabel(p) })
              });
            });
          });
        });
        cand.sort((a, b) => a._k - b._k);
        const unitCount = {};
        for (const c of cand) {
          if (picked.length >= DRILL_N) break;
          // interleaving: no unit may dominate the drill
          if ((unitCount[c.unit] || 0) >= Math.ceil(DRILL_N / 2)) continue;
          unitCount[c.unit] = (unitCount[c.unit] || 0) + 1;
          picked.push({ type: c.type, item: c.item });
        }
      }
      if (!picked.length) {
        hero.appendChild(el("p", "subtitle", "Nothing to drill yet — visit a topic or two first, then come back."));
        mainEl.appendChild(el("p", null, '<a href="index.html">← Back to all topics</a>'));
        zhLang(wrap);
        return;
      }
      const nDue = picked.filter(r => r.miss).length;
      hero.appendChild(el("p", "subtitle", picked.length + " questions across your topics — " +
        (nDue ? nDue + " due from <span class=\"zh\">错题本</span> first, then " : "") +
        "fresh questions from your weakest topics. Miss one and it joins the review schedule."));
      const dm = picked.filter(r => r.type === "mcq").map(r => r.item);
      const db = picked.filter(r => r.type === "builder").map(r => r.item);
      addSection("Mixed questions (" + dm.length + ")", "mcq", dm, true);
      addSection("Word-order builds (" + db.length + ")", "builder", db);
      mainEl.appendChild(el("p", null, '<a href="review.html">← Review page</a> · <a href="index.html">All topics</a>'));
      wrap.appendChild(el("div", "site-footer", 'Interleaved practice — mixing topics is harder than drilling one, and that\'s the point. <span class="zh">加油！</span>'));
      zhLang(wrap);
      annotateVocab(wrap);
      return;
    }

    if (!mcqItems.length && !builderItems.length) {
      hero.insertBefore(el("p", "subtitle", scheduled
        ? 'Nothing due today — <span class="zh">太棒了！</span> ' + scheduled + " question" + (scheduled > 1 ? "s are" : " is") + " scheduled to come back on " + nextDue + "."
        : 'Nothing to review — <span class="zh">太棒了！</span> Miss a question anywhere on the site and it lands here for another round.'),
        hero.querySelector(".review-actions"));
      const strip = schedStrip();
      if (strip) mainEl.appendChild(strip);
      // practice ahead: re-drill scheduled items early. Corrects before the due
      // date leave the schedule untouched (engine rule); misses demote — a
      // demonstrated failure is new information whatever the calendar says.
      const ahead = allResolved.filter(r => r.miss.due > t);
      if (ahead.length) {
        const b = el("button", "btn ghost", "Practice ahead (" + ahead.length + " scheduled) — schedules stay put");
        b.type = "button";
        b.onclick = () => {
          b.remove();
          addSection("Practice ahead — early corrects don't advance the schedule (" +
            ahead.filter(r => r.type === "mcq").length + ")", "mcq",
            shuffled(ahead.filter(r => r.type === "mcq").map(r => r.item)));
          addSection("Practice ahead — sentence builds (" +
            ahead.filter(r => r.type === "builder").length + ")", "builder",
            shuffled(ahead.filter(r => r.type === "builder").map(r => r.item)));
          zhLang(mainEl);
          annotateVocab(mainEl);
          const s1 = mainEl.querySelector("section.block");
          if (s1) { s1.tabIndex = -1; s1.focus({ preventScroll: true }); }
        };
        mainEl.appendChild(el("div", "review-actions")).appendChild(b);
      }
      const anyVisited = Object.keys(loadStore()).length > 0;
      mainEl.appendChild(el("p", null, '<a href="index.html">← Back to all topics</a>' +
        (anyVisited ? ' · <a href="review.html#drill">10-question mixed drill</a>' : "")));
      zhLang(wrap);
      return;
    }
    hero.insertBefore(el("p", "subtitle", "Questions you missed, back on a spaced schedule. Answer one correctly and it levels up (level 3 graduates it for good); miss it again and it starts over." +
      (scheduled ? " " + scheduled + " more scheduled from " + nextDue + "." : "")),
      hero.querySelector(".review-actions"));

    addSection("Missed questions (" + mcqItems.length + ")", "mcq", shuffled(mcqItems));
    addSection("Missed sentence builds (" + builderItems.length + ")", "builder", shuffled(builderItems));
    wrap.appendChild(el("div", "site-footer", 'Correct answers move a question up a level — it comes back after 2, then 5 days, then graduates for good. <span class="zh">加油！</span>'));
    zhLang(wrap);
    annotateVocab(wrap);
  };

  /* ---------------- index page ---------------- */
  window.renderIndex = function () {
    const M = window.MANIFEST;
    const store = loadStore();
    const app = document.getElementById("app");
    const wrap = el("div", "wrap");
    app.appendChild(wrap);

    const top = el("header", "site-top");
    top.appendChild(el("span", "home-link", '<span class="dot"></span> HSK 4 Grammar Lab'));
    const toggles = el("div", "toggles");
    initToggles(toggles);
    top.appendChild(toggles);
    wrap.appendChild(top);

    const mainEl = el("main");
    wrap.appendChild(mainEl);

    const hero = el("div", "idx-hero");
    hero.appendChild(el("h1", "zh-big", '从三级<span class="accent">到四级</span>'));
    hero.appendChild(el("p", "lead", "You passed HSK 3. This site teaches <b>exactly the delta</b> to HSK 4 — every new structure, pattern and trap, with hundreds of interactive exam-level exercises."));
    const nPages = window.ALL_PAGES.length;
    // exact exercise count is computed at build time (see scripts/build-shells.js)
    const nItems = (window.SITE_STATS && window.SITE_STATS.items) || "1400+";
    // accent goes to YOUR numbers; the static content counts are a footnote
    const misses0 = loadMisses();
    let graduated = 0;
    for (const k of Object.keys(misses0)) if (misses0[k].grad) graduated++;
    const mastered = window.ALL_PAGES.filter(p => ((store[p.id] || {}).best || 0) >= 80).length;
    const anyProgress = window.ALL_PAGES.some(p => (store[p.id] || {}).visited);
    const stats = el("div", "idx-stats");
    if (anyProgress) {
      stats.appendChild(el("div", "idx-you", "🏅 " + mastered + " / " + nPages + " topics at 80%+" +
        (graduated ? ' · 🎓 ' + graduated + ' graduated from <span class="zh">错题本</span>' : "")));
    }
    stats.appendChild(el("div", "idx-static", M.units.length + " units · " + nPages + " topics · " + nItems + " examples & exercises"));
    hero.appendChild(stats);
    mainEl.appendChild(hero);

    /* ---- Today panel: one glance, one filled action ----
       Slot order is fixed (review due → continue → next) so the page never
       reshuffles between visits; retrieval outranks new material on purpose. */
    const mStats = missStats();
    const lastRaw = (() => { try { return JSON.parse(localStorage.getItem("hsk4lab-last")); } catch (e) { return null; } })();
    const lastPage = lastRaw && window.ALL_PAGES.find(p => p.id === lastRaw.id);
    // deep-link Continue to the saved section — but only while it's fresh (≤4 days)
    const lastSec = lastPage && lastRaw.sec > 1 && lastRaw.t && (Date.now() - lastRaw.t) / 864e5 <= 4 ? lastRaw.sec : 0;
    const nextPage = window.ALL_PAGES.find(p =>
      (!lastPage || p.id !== lastPage.id) && ((store[p.id] || {}).best || 0) < 80);

    const today = el("div", "today-panel");
    const tpHead = el("div", "tp-head");
    tpHead.appendChild(el("span", "tp-kicker", '<span class="zh">今天</span> · Today'));
    // rolling 7-day dots, counted only on days with ≥1 answered question —
    // deliberately NOT a breakable streak counter
    const days = loadDays();
    if (days.length) {
      let n7 = 0;
      const dots = [];
      for (let o = -6; o <= 0; o++) {
        const hit = days.indexOf(dateStr(o)) >= 0;
        if (hit) n7++;
        dots.push(hit ? "●" : "○");
      }
      const streak = el("span", "tp-streak");
      streak.innerHTML = '<span class="dots" aria-hidden="true">' + dots.join("") + "</span>" + n7 +
        ' of last 7 days<span class="sr-only"> — days with at least one answered question</span>';
      streak.title = "Days with at least one answered question";
      tpHead.appendChild(streak);
    }
    today.appendChild(tpHead);

    const topicLabelHtml = p => {
      const zh = stripMarks(p.zh);
      return p.title.includes(zh) ? '<span class="t-zh">' + esc(p.title) + "</span>"
        : '<span class="t-zh">' + esc(zh) + "</span> · " + esc(p.title);
    };
    const contHref = lastPage ? "topics/" + lastPage.id + ".html" + (lastSec ? "#sec" + lastSec : "") : null;
    const tpMain = el("div", "tp-main");
    const tpRows = el("div", "tp-rows");
    if (mStats.due) {
      const a = el("a", "btn primary", '<span class="zh">错题本</span> — review ' + mStats.due + " due →");
      a.href = "review.html";
      tpMain.appendChild(a);
    } else if (lastPage) {
      const a = el("a", "btn primary", "▶ Continue — " + topicLabelHtml(lastPage) + (lastSec ? " · Part " + lastSec : ""));
      a.href = contHref;
      tpMain.appendChild(a);
    } else if (nextPage) {
      const a = el("a", "btn primary", "Start here — " + topicLabelHtml(nextPage));
      a.href = "topics/" + nextPage.id + ".html";
      tpMain.appendChild(a);
    }
    // mixed drill: interleaved retrieval across topics (misses first, then
    // fresh items from your weakest studied topics)
    if (anyProgress || mStats.due) {
      const d = el("a", "btn ghost", "10-question mixed drill");
      d.href = "review.html#drill";
      tpMain.appendChild(d);
    }
    today.appendChild(tpMain);

    if (lastPage && mStats.due) {
      const a = el("a", null, '<span class="dir">▶ Continue</span>' + topicLabelHtml(lastPage) + (lastSec ? " · Part " + lastSec : ""));
      a.href = contHref;
      tpRows.appendChild(a);
    }
    if (nextPage && (mStats.due || lastPage)) { // skip when it's already the primary button
      const a = el("a", null, '<span class="dir">' + (lastPage ? "Next up" : "Start here") + "</span>" + topicLabelHtml(nextPage));
      a.href = "topics/" + nextPage.id + ".html";
      tpRows.appendChild(a);
    }
    if (!mStats.due) {
      const a = el("a", null, '<span class="dir"><span class="zh">错题本</span></span>' +
        (mStats.scheduled ? "none due today ✓ · " + mStats.scheduled + " back on " + mStats.next
                          : "questions you miss collect here"));
      a.href = "review.html";
      tpRows.appendChild(a);
    }
    if (tpRows.children.length) today.appendChild(tpRows);
    mainEl.appendChild(today);

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
      mainEl.appendChild(unit);
    });
    // backup / cross-device sync: export & import via clipboard (no account, no server)
    const dataRow = el("div", "data-row");
    dataRow.appendChild(el("span", null, "Progress is saved in this browser only —"));
    const exp = el("button", "toggle-btn", "Export progress");
    exp.onclick = () => copyText(
      JSON.stringify({ v: 1, exported: dateStr(0), progress: loadStore(), misses: loadMisses(), days: loadDays() }),
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
    panel.id = "import-panel";
    imp.setAttribute("aria-expanded", "false");
    imp.setAttribute("aria-controls", panel.id);
    imp.onclick = () => {
      const open = panel.classList.toggle("hidden") === false;
      imp.setAttribute("aria-expanded", String(open));
      if (open) ta.focus();
    };
    panel.appendChild(ta);
    panel.appendChild(apply);
    mainEl.appendChild(dataRow);
    mainEl.appendChild(panel);

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
    // study-day log: union merge (older exports simply don't carry `days`)
    if (Array.isArray(data.days)) {
      try {
        const merged = [...new Set(loadDays().concat(
          data.days.filter(x => /^\d{4}-\d{2}-\d{2}$/.test(x))))].sort();
        localStorage.setItem(DAYS_KEY, JSON.stringify(merged.slice(-60)));
      } catch (e) {}
    }
    return null;
  }
})();
