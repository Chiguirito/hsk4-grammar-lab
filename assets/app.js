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
  // mark Chinese text for screen readers / font selection (html lang="en")
  const zhLang = root => root.querySelectorAll(".zh, .ex-cn, .er-wrong, .er-right, .tile, .zh-big, .u-zh, .c-zh, .p-zh")
    .forEach(e => { if (!e.lang) e.lang = "zh-Hans"; });
  function shuffled(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

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
  function speak(text) {
    if (!window.speechSynthesis) return;
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
    prev.answered = Math.max(prev.answered || 0, keys.length);
    prev.best = Math.min(100, Math.max(prev.best || 0, pct));
    store[tracker.pageId] = prev;
    saveStore(store);
  }
  // ---- missed-question store (drives review.html) ----
  const MISS_KEY = "hsk4lab-misses";
  function loadMisses() {
    try { return JSON.parse(localStorage.getItem(MISS_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveMisses(m) { try { localStorage.setItem(MISS_KEY, JSON.stringify(m)); } catch (e) {} }
  // ok=false → remember this question; ok=true (first-try correct) → forget it
  function recordMiss(id, ok) {
    if (!id) return;
    const m = loadMisses();
    if (ok) { if (!(id in m)) return; delete m[id]; }
    else m[id] = (m[id] || 0) + 1;
    saveMisses(m);
  }

  function markVisited(pageId) {
    const store = loadStore();
    store[pageId] = store[pageId] || {};
    store[pageId].visited = true;
    saveStore(store);
  }

  /* ---------------- toggles ---------------- */
  function initToggles(container) {
    const prefs = { py: localStorage.getItem("hsk4lab-py") !== "off", en: localStorage.getItem("hsk4lab-en") !== "off" };
    document.documentElement.classList.toggle("hide-py", !prefs.py);
    document.documentElement.classList.toggle("hide-en", !prefs.en);
    const mk = (key, label) => {
      const b = el("button", "toggle-btn" + (prefs[key] ? " on" : ""), label + ": " + (prefs[key] ? "ON" : "OFF"));
      b.onclick = () => {
        prefs[key] = !prefs[key];
        localStorage.setItem("hsk4lab-" + key, prefs[key] ? "on" : "off");
        document.documentElement.classList.toggle(key === "py" ? "hide-py" : "hide-en", !prefs[key]);
        b.classList.toggle("on", prefs[key]);
        b.textContent = label + ": " + (prefs[key] ? "ON" : "OFF");
      };
      container.appendChild(b);
    };
    mk("py", "Pīnyīn");
    mk("en", "English");
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
    if (item.note) card.appendChild(el("div", "ex-note", "💡 " + item.note));
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

  function renderTabs(sec, root) {
    const box = el("div", "tabs");
    const bar = el("div", "tab-bar");
    box.appendChild(bar);
    const panels = [];
    sec.tabs.forEach((tab, i) => {
      const b = el("button", i === 0 ? "active" : "", tab.label);
      const p = el("div", "tab-panel" + (i === 0 ? " active" : ""));
      if (tab.html) p.innerHTML = tab.html;
      (tab.examples || []).forEach(exi => p.appendChild(exampleCard(exi)));
      b.onclick = () => {
        bar.querySelectorAll("button").forEach(x => x.classList.remove("active"));
        panels.forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        p.classList.add("active");
      };
      bar.appendChild(b);
      box.appendChild(p);
      panels.push(p);
    });
    root.appendChild(box);
  }

  function renderMcq(sec, root) {
    const quiz = el("div", "quiz");
    let done = 0, right = 0;
    const scoreBox = el("div", "quiz-score hidden");
    sec.items.forEach((item, idx) => {
      const missId = item._src || (tracker.pageId ? tracker.pageId + "/" + sec._qkey + ":" + idx : null);
      const q = el("div", "q");
      q.appendChild(el("div", "q-num", "QUESTION " + (idx + 1) + " / " + sec.items.length +
        (item._srcLabel ? " · from “" + esc(item._srcLabel) + "”" : "")));
      q.appendChild(el("div", "q-text", fmtHtml(item.q)));
      const wrap = el("div", "q-choices" + (item.choices.every(c => plain(c).length <= 14) ? " cols" : ""));
      const expl = el("div", "q-expl hidden", item.expl ? fmtHtml(item.expl) : "");
      let answeredThis = false;
      // render choices in a shuffled order so positions can't be memorized
      shuffled(item.choices.map((_, i) => i)).forEach(ci => {
        const c = item.choices[ci];
        const b = el("button", null, fmtHtml(c));
        b.dataset.ci = ci;
        b.onclick = () => {
          if (answeredThis) return;
          answeredThis = true;
          const ok = ci === item.a;
          wrap.querySelectorAll("button").forEach(x => {
            x.disabled = true;
            if (+x.dataset.ci === item.a) { x.classList.add("correct"); x.insertAdjacentText("afterbegin", "✓ "); }
            else if (x === b) { x.classList.add("wrong"); x.insertAdjacentText("afterbegin", "✗ "); }
            else x.classList.add("dim");
          });
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
      q.appendChild(expl);
      zhLang(q);
      quiz.appendChild(q);
    });
    function showScore() {
      const pct = Math.round((right / sec.items.length) * 100);
      const msg = pct === 100 ? "满分！Perfect — exam ready." :
        pct >= 80 ? "很棒！Solid — review the misses once and move on." :
        pct >= 60 ? "不错，但还差一点。Re-read the sections above, then retry." :
        "别灰心 — go back through the examples, this needs another pass.";
      scoreBox.innerHTML = '<span class="big">' + right + " / " + sec.items.length + '</span><span>(' + pct + '%)</span><span class="msg">' + msg + "</span>";
      const rb = el("button", "retry-btn", "↻ Retry");
      rb.onclick = () => { root.innerHTML = ""; renderMcq(sec, root); };
      scoreBox.appendChild(rb);
      scoreBox.classList.remove("hidden");
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
      const missId = item._src || (tracker.pageId ? tracker.pageId + "/" + qkey : null);
      const box = el("div", "builder");
      box.appendChild(el("div", "b-prompt",
        "<b>" + (idx + 1) + " / " + sec.items.length + "</b>" +
        (item._srcLabel ? ' · from “' + esc(item._srcLabel) + '”' : "") +
        " · Arrange the tiles into a correct sentence" +
        (item.en ? ' — <i>“' + esc(item.en) + '”</i>' : "") +
        (item.hint ? '<br><span style="color:var(--muted)">Hint: ' + item.hint + "</span>" : "")));
      const answer = el("div", "b-answer");
      const pool = el("div", "b-pool");
      const feedback = el("div", "b-feedback");
      let fails = 0, solved = false;
      const mkTile = (txt) => {
        const t = el("button", "tile", esc(txt));
        t.type = "button";
        t.lang = "zh-Hans";
        t.onclick = () => {
          if (solved) return;
          answer.classList.remove("ok", "bad");
          (t.parentNode === pool ? answer : pool).appendChild(t);
        };
        return t;
      };
      shuffled(item.tiles).forEach(txt => pool.appendChild(mkTile(txt)));
      // fix rare case shuffle === answer
      if ([...pool.children].map(c => c.textContent).join("") === item.tiles.join("") && item.tiles.length > 2) {
        pool.appendChild(pool.firstChild);
      }
      const controls = el("div", "b-controls");
      const check = el("button", "btn primary", "Check ✓");
      const reset = el("button", "btn ghost", "Reset");
      const reveal = el("button", "btn ghost hidden", "Show answer");
      const next = el("button", "btn primary hidden", idx < sec.items.length - 1 ? "Next →" : "Done ✓");
      let firstTry = true;
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
        if (!viaReveal) speak(item.tiles.join(""));
      }
      check.onclick = () => {
        const got = [...answer.children].map(c => c.textContent).join("");
        const want = item.tiles.join("");
        const altWant = (item.alt || []).map(a => a.join(""));
        if (got === want || altWant.includes(got)) {
          recordAnswer(qkey, firstTry);
          if (firstTry) recordMiss(missId, true);
          success(false);
        } else {
          if (firstTry) recordMiss(missId, false);
          firstTry = false;
          fails++;
          answer.classList.add("bad");
          feedback.innerHTML = '<span style="color:var(--bad)">Not yet — ' +
            (fails >= 2 ? "you can reveal the answer, or keep trying."
              : item.hint ? "hint: " + item.hint
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
        if (idx < sec.items.length - 1) { idx++; draw(); }
        else { holder.querySelector(".b-controls").innerHTML = "<b>🎉 Builder complete!</b>"; }
      };
      controls.appendChild(check);
      controls.appendChild(reset);
      controls.appendChild(reveal);
      controls.appendChild(next);
      box.appendChild(answer);
      box.appendChild(pool);
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
      const fix = el("div", "er-fix hidden");
      const r = el("div", "er-right", fmt(item.right));
      r.style.cursor = "pointer";
      r.onclick = () => speak(item.right);
      fix.appendChild(r);
      if (item.py) fix.appendChild(el("div", "ex-py", fmt(item.py)));
      if (item.en) fix.appendChild(el("div", "ex-en", fmt(item.en)));
      fix.appendChild(el("div", "er-expl", "🩺 " + item.expl));
      btn.onclick = () => { fix.classList.remove("hidden"); btn.classList.add("hidden"); };
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
    tracker.pageId = page.id;
    tracker.results = {};
    tracker.total = 0;
    page.sections.forEach((s, i) => {
      if (s.type === "mcq" || s.type === "builder") {
        s._qkey = "s" + i;
        tracker.total += s.items.length;
      }
    });
    markVisited(page.id);

    const zhTitle = stripMarks(page.zh);
    document.title = (page.title.includes(zhTitle) ? page.title : zhTitle + " — " + page.title) + " · HSK 4 Grammar Lab";
    const app = document.getElementById("app");
    const wrap = el("div", "wrap");
    app.appendChild(wrap);

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
    hero.appendChild(el("span", "unit-chip", esc(meta.unitZh ? meta.unitZh + " · " + meta.unit : "HSK 4")));
    hero.appendChild(el("div", "zh-big", fmt(page.zh).replace(/<b class="hl">/g, '<span class="accent">').replace(/<\/b>/g, "</span>")));
    hero.appendChild(el("h1", null, esc(page.title)));
    if (page.subtitle) hero.appendChild(el("p", "subtitle", page.subtitle));
    wrap.appendChild(hero);

    // chip nav
    const nav = el("nav", "chipnav");
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
      (RENDERERS[sec.type] || renderConcept)(sec, body);
      wrap.appendChild(s);
    });

    // pager
    const all = window.ALL_PAGES || [];
    const pos = all.findIndex(p => p.id === page.id);
    const pager = el("div", "pager");
    if (pos > 0) {
      const p = all[pos - 1];
      const a = el("a", "prev", '<div class="dir">← Previous</div><div class="p-title"><span class="p-zh">' + esc(p.zh) + "</span> · " + esc(p.title) + "</div>");
      a.href = p.id + ".html";
      pager.appendChild(a);
    }
    if (pos >= 0 && pos < all.length - 1) {
      const p = all[pos + 1];
      const a = el("a", "next", '<div class="dir">Next →</div><div class="p-title"><span class="p-zh">' + esc(p.zh) + "</span> · " + esc(p.title) + "</div>");
      a.href = p.id + ".html";
      pager.appendChild(a);
    }
    wrap.appendChild(pager);
    wrap.appendChild(el("div", "site-footer", "HSK 4 Grammar Lab · 加油，Paul！ · Tap any Chinese sentence to hear it — tap again for slow"));
    // Chinese in tables is speakable too
    wrap.querySelectorAll(".tbl .zh").forEach(z => {
      z.style.cursor = "pointer";
      z.title = "Listen";
      z.onclick = () => speak(z.textContent);
    });
    zhLang(wrap);
  };

  /* ---------------- review page (错题本) ---------------- */
  window.renderReview = function () {
    const pages = window.COLLECT_PAGES || [];
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

    const mcqItems = [], builderItems = [];
    let stale = false;
    for (const id of Object.keys(misses)) {
      const m = id.match(/^(.+)\/s(\d+):(\d+)$/);
      const page = m && pages.find(p => p.id === m[1]);
      const sec = page && page.sections[+m[2]];
      const item = sec && sec.items && sec.items[+m[3]];
      if (!item || (sec.type !== "mcq" && sec.type !== "builder")) {
        delete misses[id]; stale = true; continue; // content moved since the miss was saved
      }
      const copy = Object.assign({}, item, { _src: id, _srcLabel: stripMarks(page.zh) });
      (sec.type === "mcq" ? mcqItems : builderItems).push(copy);
    }
    if (stale) saveMisses(misses);

    if (!mcqItems.length && !builderItems.length) {
      hero.appendChild(el("p", "subtitle", "Nothing to review — 太棒了！ Miss a question anywhere on the site and it lands here for another round."));
      wrap.appendChild(el("p", null, '<a href="index.html">← Back to all topics</a>'));
      zhLang(wrap);
      return;
    }
    hero.appendChild(el("p", "subtitle", "Every question you missed on a first try, from every topic. Answer one correctly here and it leaves the list — reload to see it gone."));

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
    wrap.appendChild(el("div", "site-footer", "First-try correct answers are removed from this list. 加油！"));
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
    const stats = el("div", "idx-stats");
    stats.innerHTML = '<div class="idx-stat"><div class="n">' + M.units.length + '</div><div class="l">Units</div></div>' +
      '<div class="idx-stat"><div class="n">' + nPages + '</div><div class="l">Topics</div></div>' +
      '<div class="idx-stat"><div class="n">1400+</div><div class="l">Examples & exercises</div></div>';
    hero.appendChild(stats);
    wrap.appendChild(hero);

    // review strip (错题本)
    const missCount = Object.keys(loadMisses()).length;
    const rev = el("a", "review-link");
    rev.href = "review.html";
    rev.innerHTML = '<span class="rl-zh">错题本</span><b>Review your misses</b>' +
      (missCount ? '<span class="rl-count">' + missCount + "</span>" : '<span class="rl-empty">questions you miss collect here</span>');
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
        const a = el("a", "card");
        a.href = "topics/" + p.id + ".html";
        if (st.total) a.title = (st.answered || 0) + " of " + st.total + " questions answered · best first-try score " + pct + "%";
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
    wrap.appendChild(el("div", "site-footer", "Best score per topic is saved in your browser. 🏅 = 80%+ · Built for the HSK 3 → HSK 4 jump."));
    zhLang(wrap);
  };
})();
