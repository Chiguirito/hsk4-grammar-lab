# HSK 4 Grammar Lab — Full Site Audit

**Site:** https://chiguirito.github.io/hsk4-grammar-lab/
**Audited:** 2026-07-05, against `main` (`f61f949`). The deployed site matches the repo byte-for-byte.
**Method:** full static review of the engine (`assets/app.js`, `assets/style.css`, shells, workflow); native-level linguistic audit of all 26 topic data files (every example, pinyin line, MCQ key, builder item, clinic item and grammar claim); live browser testing with Playwright (all 27 pages, quiz/builder/toggle/progress flows, keyboard, 375px mobile viewport).

---

## Executive summary

| Area | Verdict |
|---|---|
| Content accuracy (Chinese, pinyin, translations) | **Very strong** — no wrong grammar taught; defects are edge-level |
| Exercise answer keys | **Good with real defects** — 2 broken items, ~8 double-defensible items |
| Sentence-builder exercises | **Systemic flaw** — ~40 items reject correct alternative word orders |
| Engine (app.js) | **2 confirmed functional bugs** (progress score, builder tiles) + 1 cosmetic |
| Accessibility | **Mixed** — quizzes keyboard-friendly, builders not; no `lang` markup for Chinese |
| SEO / discoverability | **Near zero** — generic titles, no descriptions/OG/favicon/sitemap |
| Performance / stability | **Good** — no JS errors on any page, no dead links, clean mobile layout |
| Pedagogy & coverage | **Excellent** — small gaps (着, reduplication, 是否) and missed opportunities |

The site is genuinely high quality: the prose teaching is accurate and unusually well-pitched at the HSK3→4 delta, the pinyin sandhi conventions are applied almost flawlessly, and the interactive volume (476 MCQs, 194 builders, 197 clinic items, 571 examples) is far beyond typical grammar sites. The findings below are ranked by learner impact.

---

## 1 · P0 — Bugs that actively mislead the learner

### 1.1 Progress score is wrong in both directions (confirmed live)

`assets/app.js:59-72` — `tracker.correct` accumulates forever while `tracker.total` stays fixed, and `pct = correct/total` over **all** interactive items on the page.

- **Inflation:** answering one 6-question quiz, then pressing "↻ Retry" and acing it repeatedly, drives the stored best score past 100%. Reproduced: after 7 retries the index card for 就 vs 才 displays **"172%"** and the green progress bar overflows its track (measured 321px fill in a 187px track), plus an unearned 🏅.
- **Deflation:** a learner who aces the first checkpoint 6/6 on first try stores only **24%**, because the page has 25 mcq+builder items. You can never see 100% without answering *every* quiz and builder on the page correctly in one visit — most users will conclude their score "didn't count."

**Fix:** track answers per question, not as running counters. Give each mcq/builder item a stable key (sectionIndex·itemIndex), record first-try correctness in a map, and compute `pct = correctKeys / totalKeys`. On Retry, don't re-record already-answered keys (or overwrite instead of appending). Clamp `best` to 100 as a belt-and-braces measure.

### 1.2 Builder tiles can't be taken back out of the answer row (confirmed live)

`assets/app.js:230-237` — `mkTile(txt, from)` captures `from = pool` at creation, so the click handler always evaluates `(from === pool ? answer : pool)` → `answer`. Clicking a tile already in the answer row just re-appends it there. Reproduced: tile stays in answer, never returns to pool.

Misplace one tile in a 7-tile sentence and your only recovery is **Reset**, losing all placement work. In an exercise type used 194 times, this is the single biggest UX defect on the site.

**Fix (one line):** decide by current parent at click time:
```js
t.onclick = () => { if (solved) return; answer.classList.remove("ok","bad");
  (t.parentNode === pool ? answer : pool).appendChild(t); };
```

### 1.3 A handful of quiz items are broken or double-keyed

Highest-confidence answer-key defects found in the linguistic audit (see §2 for the full list):

- `assets/data/exam-practice.js:144` — 「听到这个消息，他高兴___跳了起来。」 keyed 得, but 他高兴**地**跳了起来 is also fully grammatical ("he happily jumped up"). Worse, the explanation is self-contradictory: it claims 地 "would need the order 高兴地跳 — here 高兴 comes first," but 高兴-before-verb is *exactly* the 地 order. Use an unambiguous complement frame (e.g. 高兴___说不出话来) and rewrite the explanation.
- `assets/data/time-adverbs.js:302` — 「你来得真___」 keyed 正好 produces awkward Chinese (真+正好 collide; the idiom is bare 你来得正好), while distractor 及时 produces the perfectly natural 你来得真及时. The keyed answer is *worse* than a distractor. Drop 真 from the stem.
- `assets/data/jiu-vs-cai.js:236` — 「先写完作业___可以看电视」 keyed 才, but 先…就可以 is an equally natural parental sentence; nothing in the stem excludes 就. Reword (e.g. lead with 只有).
- `assets/data/ba-sentences.js:222` — 「这次搬家___我累坏了」 keyed 把, but 让我累坏了 is at least as common; the explanation itself concedes this. Replace the 让 distractor.
- `assets/data/result-complements.js:255` — keyed 不写完, but 没写完作业就不能看电视 is standard Chinese too.

## 2 · P1 — Content accuracy findings (full list)

### 2.1 Systemic: builder exercises reject correct answers (~40 items)

The builder marks an answer right only if the tile concatenation equals `tiles.join("")` or one entry in `alt`. Almost no item lists its legal alternative orders — and Chinese word order is flexible exactly where these sentences flex: **topicalization, time-word/subject swaps, movable 了, symmetric pairs, and conjunction-after-subject**. In several cases the rejected order is one *the same page explicitly teaches*:

| File:line | Tiles produce | Also correct but rejected |
|---|---|---|
| shi-de-emphasis.js:168 | 我是在网上认识的他 | 我是在网上认识**他**的 — the textbook-canonical order! |
| shi-de-emphasis.js:164 | 他是去年来中国的 | 他是去年来**的**中国 (taught in §5 of the same page) |
| questions-indefinites.js:167 | 这件事谁都知道 | 谁都知道这件事 (verbatim in the page's own table, line 37) |
| lian-dou.js:146 | 这个字连老师也不认识 | 连老师也不认识这个字 (same shape as the page's table, line 75) |
| attitude-adverbs.js:240 | 今天恐怕要加班到很晚 | 恐怕今天… (page line 113 teaches 恐怕 "may be sentence-initial") |
| addition-sequencing.js:202 | 又冷又干燥 | 又干燥又冷 — symmetric coordination is order-free |
| addition-sequencing.js:203 | 一边喝咖啡一边讨论计划 | halves swapped — equally correct |
| ba-sentences.js:181/182 | …送给别人了 / 通知大家了 | 送给**了**别人 / 通知**了**大家 — movable 了 |
| exam-practice.js:80 | 太难了，这个字连老师都不认识 | 这个字连老师都不认识，太难了 |

Plus ~30 more time-word/subject swaps and topicalizations across every unit (full inventory in the Appendix). This is the most important content fix on the site: a learner who builds a *correct* sentence gets told "Not yet — check what comes right after the subject," which both punishes correct Chinese and teaches a false rule.

**Fixes, in order of preference:**
1. Add the missing `alt` arrays (Appendix lists concrete orders for every flagged item).
2. Where the alternatives explode (symmetric 又…又), fuse tiles so only one order exists (e.g. one tile 又冷又干燥 split differently, or fewer/bigger tiles).
3. Consider an engine-level assist: when the built string is a known-tricky permutation, show "Grammatical, but the exam order is…" instead of a flat ✗.

### 2.2 Double-defensible MCQ keys (medium confidence)

- you-zai-hai.js:237 — 楼上还在唱歌 keyed 还; 又在唱歌 ("at it again tonight") also plausible — add duration cue to force 还.
- you-zai-hai.js:234 — 下次再点 keyed 再; 下次也点 defensible.
- time-adverbs.js:307 — 从来不吃早饭 keyed; 一直不吃 defensible for a standing habit.
- contrast-concession.js:236 — ordering item where option B (他父母即使都不同意…) is grammatical, admitted by its own explanation.
- exam-practice.js:39, :40 — two sentence-ordering items each have a defensible second order (C→B→A readings); :40's keyed order even conflicts with the site's own "由于-clause comes first" rule (cause-effect.js:151).
- result-complements.js:176 (做好/做完), directional-complements.js:180 (想起来/想出来), :267 (收起来/收上来) — stems don't fully exclude the runner-up.

### 2.3 Clinic items violating the "exactly one bug" contract

- ba-sentences.js:164 — 请把这个词典还了给图书馆 has two bugs (了-placement **and** 个→本); the explanation even says "Two bugs."
- directional-complements.js:208 — 天开始下雨起来了; explanation says "Two bugs in one."
- duration-frequency.js:150 — the "wrong" sentence 老师让我们读一次 is grammatical Chinese; the explanation admits it's "a meaning bug, not a grammar bug."
- addition-sequencing.js:186 — the fix silently swaps 大→明亮 instead of minimally repairing the one bug.

### 2.4 Overstated grammar claims (soften, don't delete)

- separable-verbs.js:150,191 — "离合词 after 把/被 is wrong, **full stop**": colloquial 把觉睡了/把婚结了/把澡洗了 are common native speech. Hedge to "in standard/exam grammar."
- comparisons.js:33 — "the **only** two intensifiers allowed in front: 更 and 还": 稍微/还要/更加 also occur (他比我稍微高一点儿).
- comparisons.js:175 — 比昨天冷很多 (without 了) is standard; only 很多+了 is wrong.
- attitude-adverbs.js:147,259 — "几乎 **never** plays the 没-flip game": 我几乎没赶上飞机 = "barely caught it" is standard.
- yue-lai-yue.js:185 — "**only** 多/少 can stand before the noun": 越来越大的压力 / 越来越激烈的竞争 are common written Chinese.
- cause-effect.js:146 vs :89 — internal contradiction: the position rule says 因此 is strictly clause-initial, but the page's own example has 小李**因此**未能… (post-subject, which is fine). Fix the rule.
- confusables.js:178 — 感到 does take small clauses (感到自己错了); "only 觉得" overreaches.
- de-particles.js:23 — "Spanish doesn't mark the difference": standard Spanish has -mente adverbs; only colloquial rápido doubles.

### 2.5 Polish-level content nits

- duration-frequency.js:15 — stray **Russian** word in prose: "Point-in-time (когда? — 昨天…)" — learner speaks ES/DE/EN.
- prepositions.js:84 — 今天的晚饭由我来做 translated "Tonight's dinner is **on me**" — that idiom means "I'm paying," not "I'll cook."
- time-adverbs.js:269 — 就要起飞了 translated without the imminence ("is about to take off") the item exists to teach.
- Unglossed above-HSK4 vocab (guide requires glossing): 晾 (result-complements.js:139, ba-sentences.js:165), 幸亏 (time-adverbs.js:93), 感人 (cause-effect.js:61), 收件人/掌握 (exam-practice.js:41-42).
- Pinyin convention inconsistencies (content is otherwise remarkably clean): measure word 个 written toned `gè` everywhere vs the guide's "neutral tones unmarked" (→ `ge`); 越来越 spaced two ways (`yuèláiyuè` vs `yuè lái yuè`); degree-state-complements.js:111 `xiě bù hǎo` should be neutral `bu` (it's a potential complement — the sibling file writes `shuō bu hǎo`); :155 `mànmān de` → `mànmàn de` (the 1st-tone shift belongs to the erhua form); time-adverbs.js:109 `yàoburán` → `yàobùrán`; `shēngri` → `shēngrì`.
- questions-indefinites.js:57 — tag says "anyone" on an "anywhere" example.
- ba-sentences.js:31, comparisons.js:31 — duplicate `style` attribute in one tag (invalid HTML; second one is dropped).
- you-zai-hai.js:53 — 点了一个鱼 is loose restaurant colloquial; 一条鱼 is cleaner model language.

## 3 · P1 — Engine & platform

### 3.1 Cosmetic bug: raw `**` in browser titles (confirmed live)

`assets/app.js:349` uses `page.zh` unstripped: every topic tab reads e.g. `**就** vs **才** — 就 vs 才 — the expectation slider · HSK 4 Grammar Lab`. Also redundant (zh + title repeat). Fix: `document.title = stripMarks(page.zh) + " — " + page.title + " · HSK 4 Grammar Lab"` — or better, drop the duplicated zh.

### 3.2 Accessibility

- **Builder tiles are unusable by keyboard** (confirmed: `<span>` with no tabindex; Tab skips them entirely). Quiz choices, toggles, and 🔊 buttons are all reachable and Enter-activatable — so the gap is builder-only. Make tiles `<button type="button">` (restyle) and the whole builder becomes keyboard-operable for free.
- **No `lang` markup for Chinese.** `<html lang="en">` with no `lang="zh-CMN-Hans"` on Chinese spans: screen readers read hanzi with an English voice or spell them out; browser translation and font selection also suffer. The engine already wraps Chinese in `.zh` / `.ex-cn` classes — add `lang="zh-Hans"` in the same places (a few lines in `app.js`).
- MCQ feedback is color-only (green/red backgrounds); the clinic has ✓/✗ glyphs but the quiz doesn't. Add a ✓/✗ prefix on the chosen/correct buttons for color-blind users.
- No `prefers-reduced-motion` handling for smooth-scroll/hover transforms (minor).
- No `<noscript>` fallback: a JS failure yields a blank page with no message.

### 3.3 SEO / discoverability (near-zero today)

- All 26 topic shells ship the identical `<title>HSK 4 Grammar Lab</title>`; the real title is set by JS only. No meta descriptions, no Open Graph/Twitter tags, no favicon (confirmed 404), no `sitemap.xml`/`robots.txt`, no canonical URLs, and 100% JS-rendered body content (non-Google crawlers and link-preview bots see an empty `<div id="app">`).
- **Fix cheaply with a generator:** the shells are already 17-line boilerplate; add a small Node script (like `scripts/validate.js`) that regenerates each shell from `manifest.js` with per-topic `<title>`, `<meta name="description">` (the blurb), OG tags, favicon link — run it manually or in the Pages workflow. An emoji SVG favicon is one line: `<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>汉</text></svg>">`.
- Add `404.html` (GitHub Pages picks it up automatically).

### 3.4 Performance (good; two cheap wins)

- No console errors, no failed requests (besides favicon), no horizontal overflow at 375px, tables scroll inside their wrappers, tap targets 43-46px. Solid.
- Google Fonts CSS is render-blocking and the `preconnect` only covers `fonts.googleapis.com` — add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` (that's where the font bytes come from).
- `hide-py`/`hide-en` classes are applied by JS after load — with pinyin toggled off you get a flash of pinyin on every page load. Inline a 3-line script in `<head>` that reads localStorage and sets the body classes before first paint.

### 3.5 CI / infra

- `scripts/validate.js` is a great validator but **nothing runs it** — the Pages workflow deploys whatever is pushed. Add it as a job (or pre-deploy step) in `.github/workflows/pages.yml` so a broken data file can't deploy a blank topic page.
- The workflow uploads the whole repo (README, CONTENT_GUIDE, scripts) as the site artifact — harmless, but an `exclude` or a `site/` subfolder would be tidier.
- Minor dead code: unused `nQ` in `renderIndex` (app.js:433).

## 4 · P2 — Pedagogy & product recommendations

1. **Shuffle MCQ choices at render.** Choices always appear in authored order, so on retry (and for the many items where the key is A) learners memorize positions. The engine controls rendering — shuffle per render and map the answer index.
2. **A "review my misses" mode.** The store already records per-page results; record per-question misses and add an index-page section "23 questions you missed across 8 topics — drill them." This is the single highest-value learning feature available for the architecture, and it's all client-side.
3. **Fix the builder's misleading hint.** The first-failure hint is always "check what comes right after the subject" (app.js:274) regardless of the actual error — often wrong (e.g. clause-order mistakes). Use the item's own `hint` when present, else something neutral ("compare with the pattern box above").
4. **Make progress semantics visible.** After fixing §1.1, show "12/25 answered · 83% first-try" on the card rather than one opaque percentage.
5. **Honest stats:** the hero says "600+ examples & exercises"; the real count is 571 examples + 867 exercise items ≈ 1,450. Undersell is charming but the number can just be computed from the manifest at render time.
6. **Print/PDF the cheatsheets.** Every page ends with "screenshot me 📋" but there's no `@media print` stylesheet; printing a topic prints the sticky nav and all quizzes. A 20-line print stylesheet (hide interactive sections, expand the cheatsheet) turns each topic into a printable one-pager.
7. **Offline/PWA.** Pure-static, ~1.2MB site — a tiny service worker + manifest makes it installable and subway-proof, which fits the daily-study use case.
8. **Dark mode** via `prefers-color-scheme` — the palette is CSS-variable-driven already, so it's one `:root` override block.
9. **Keyboard shortcuts** 1-4 for MCQ answers; Enter for Check in the builder.
10. **TTS niceties:** a slow/normal speed toggle (the fixed 0.85 rate is good for study but replay-at-slow is a common ask); make table example sentences tappable-to-speak like example cards (currently only cards and clinic fixes speak).
11. **Content coverage gaps** for the HSK3→4 delta (the existing 26 topics cover the syllabus impressively well — 不管/无论, 使/让/令, 难道, 倍/分之 are all in place). Genuinely missing: **durative/manner 着** (V着V着, 坐着吃饭, existential 墙上挂着一张画) has no home topic; **verb/adjective reduplication** (V一V, AABB) appears only in passing; **是否** never appears despite being an HSK4 word. One new "词法" topic (着 + reduplication + 是否) would close the gap.

---

## Appendix — full builder `alt` inventory (add these accepted orders)

| File:line | Add `alt` order(s) |
|---|---|
| result-complements.js:208 | 我终于找到了工作 |
| result-complements.js:210 | 老师的话你听懂了吗 |
| result-complements.js:211 | 今天的作业我还没写完 · 我今天的作业还没写完 |
| result-complements.js:212 | 他把这句话翻译成了英文 |
| result-complements.js:214 | 去年妹妹考上了有名的大学 |
| result-complements.js:215 | 黑板上的字我没看清楚 |
| potential-complements.js:182 | 我今天肯定做不完这么多作业 · 今天我肯定做不完这么多作业 |
| potential-complements.js:183 | 我们再不出发就赶不上飞机了 |
| potential-complements.js:184 | 他的名字我怎么也想不起来 |
| potential-complements.js:185 | 这些旧照片她舍不得扔掉 |
| degree-state-complements.js:169 | 昨天晚上我睡得不太好 |
| duration-frequency.js:167 | 上海他去过两次 |
| duration-frequency.js:171 | 以前我们见过两次面 |
| separable-verbs.js:223 | 我昨晚只睡了五个小时觉 |
| separable-verbs.js:225 | 我们吃完饭去散散步吧 |
| ba-sentences.js:181 | 他把那些旧衣服都送给了别人 |
| ba-sentences.js:182 | 我已经把会议时间通知了大家 |
| comparisons.js:197 | 今天他比平时早到了十分钟 |
| shi-de-emphasis.js:164 | 他是去年来的中国 |
| shi-de-emphasis.js:166 | 这件事你是怎么知道的 |
| shi-de-emphasis.js:168 | 我是在网上认识他的 |
| lian-dou.js:146 | 连老师也不认识这个字 |
| lian-dou.js:149 | 她那时候连一分钱都没有 |
| questions-indefinites.js:167 | 谁都知道这件事 |
| questions-indefinites.js:168 | 今天他什么都不想吃 |
| questions-indefinites.js:169 | 我周末哪儿也不想去 |
| jiu-vs-cai.js:189 | 昨天半夜他才回家 |
| you-zai-hai.js:198 | 今天他又忘了带作业 |
| time-adverbs.js:262 | 明天八点请大家准时到 |
| time-adverbs.js:267 | 他听到这个好消息立刻跳了起来 |
| attitude-adverbs.js:240 | 恐怕今天要加班到很晚 |
| yue-lai-yue.js:172 | 你越早解决这件事越好 |
| confusables.js:281 | 下个月学校要举行运动会 |
| confusables.js:279 | 火车票放假的时候往往很难买 |
| cause-effect.js:199 | 因为他感冒了，没来上课 |
| cause-effect.js:202 | 他为了通过考试，每天都复习两个小时 |
| cause-effect.js:205 | 大家既然都累了，我们就休息一会儿吧 |
| conditionals.js:216 | 万一路上堵车，你就去坐地铁 |
| conditionals.js:217 | 他不管多忙，都坚持锻炼身体 |
| conditionals.js:218 | 你无论去不去，我都要去看看 |
| contrast-concession.js:193 | 这道菜虽然有点儿辣，但是味道很不错 |
| contrast-concession.js:197 | 你有什么需要帮忙的，尽管开口 |
| addition-sequencing.js:202 | 这儿的冬天又干燥又冷 |
| addition-sequencing.js:203 | 我们一边讨论计划，一边喝咖啡 |
| addition-sequencing.js:205 | swapped 一方面 halves |
| de-particles.js:200 | 我今天累得什么都不想做 |
| prepositions.js:225 | 他为了提高口语，每天跟中国朋友聊天 |
| prepositions.js:227 | 我通过这次比赛认识了很多朋友 |
| exam-practice.js:80 | 这个字连老师都不认识，太难了 · 连老师都不认识这个字，太难了 |

*(Items marked "possible" in the underlying reviews — clause-reversed spoken variants, announcement-style 请-fronting — are excluded above unless at least one reviewer rated them natural standard Chinese. When in doubt, prefer fusing tiles over multiplying alts.)*

## Prioritized action plan

**P0 (an afternoon):** fix builder tile-return (§1.2, one line) · fix progress accounting (§1.1) · fix the 5 broken/ambiguous quiz keys in §1.3 · strip `**` from titles (§3.1). — ✅ **Done in this PR** (all verified in-browser: retries no longer inflate scores, legacy >100% values are clamped on display and healed on the next answer, tiles click back to the pool, titles are clean, and the five quiz items were rewritten to have exactly one defensible answer).

**P1 (a weekend):** add the Appendix `alt` orders · fix the 4 clinic items and 8 softened claims (§2.3-2.4) · polish nits (§2.5) · `lang="zh-Hans"` + button tiles (§3.2) · shell generator for titles/descriptions/OG/favicon (§3.3) · run validate.js in CI (§3.5) · fonts preconnect + toggle-flash fix (§3.4).

**P2 (ongoing):** choice shuffling · "review my misses" mode · print stylesheet · dark mode · PWA · the 着/reduplication/是否 topic.
