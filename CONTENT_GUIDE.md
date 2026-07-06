# HSK 4 Grammar Lab — Content Authoring Guide

You are writing one data file per topic: `assets/data/<id>.js`. Each file calls
`registerPage({...})` exactly once. The engine (`assets/app.js`) renders everything.
Study the exemplar `assets/data/ba-sentences.js` FIRST and match its depth, tone and structure.

## Page object

```js
registerPage({
  id: "<id>",                    // must equal the filename and manifest id
  zh: "**把**字句",               // Chinese title; **…** = red highlight
  title: "English title",
  subtitle: "2-3 sentences: what HSK3 knowledge this builds on, why HSK4 tests it.",
  sections: [ ... ]              // 9-12 sections, see types below
});
```

## Section types

1. `{type:"concept", title, short, html}` — rich prose. Allowed markup: `<p> <h3> <ul> <ol> <li> <b> <i> <s>`,
   `<span class="zh">汉字</span>`, `<b class="hl">highlight</b>`, `<span class="pill">把</span>`,
   `<div class="pattern">Subj + <span class="slot">把</span> + …<small>note</small></div>`,
   callouts: `<div class="callout tip|warn|cmp|rule"><span class="co-title">Title</span> body</div>`.
   Use `cmp` callouts for Spanish/German/English comparisons (learner speaks all three).
2. `{type:"examples", title, short, intro, items:[{cn, py, en, note?, tag?}]}` — cn/py/en accept `**…**` highlights.
3. `{type:"table", title, short, intro?, head:[...], rows:[[html,...]]}` — cells are HTML strings.
   For inline pinyin in tables use `<span class="py-hint">Pīnyīn</span>` (it respects the pinyin toggle).
4. `{type:"tabs", title, short, intro?, tabs:[{label, html?, examples?:[{cn,py,en,note?}]}]}` — deep dives / one tab per sub-meaning.
5. `{type:"mcq", title, short, intro, items:[{q, choices:[...], a: <index>, expl}]}` — q/choices/expl accept HTML + `**…**`.
6. `{type:"builder", title, short, intro, items:[{tiles:["请","把","门","关上"], py, en, hint?, alt?:[["…"]]}]}` —
   tiles concatenated = the correct sentence; engine shuffles them. `alt` = other acceptable orders (optional).
7. `{type:"clinic", title, short, intro, items:[{wrong, right, py, en, expl}]}` — error clinic; exactly ONE bug per item.
8. `{type:"cheatsheet", title, short, html}` — final section, a screenshot-able summary table.

### Field content rules

- `cn`/`py`/`en`/`q`/`choices`/`expl` support `**…**` accent highlighting; `q`, `choices` and `expl`
  additionally accept inline HTML like `<span class="zh">`.
- Builder `hint` and example `note` are plain text with `**…**` highlighting only — HTML in them
  is escaped and will not render.

## Required page recipe (adapt, don't skip)

1. concept — the big idea (metaphor/mental model + `pattern` box + `cmp` callout with ES/DE/EN parallels where real ones exist; never force a fake parallel)
2. concept or table — the core rules
3. examples — 8-12 model sentences with tags & notes
4. tabs or table — sub-meanings / contrast with similar patterns learners confuse
5. concept — word-order details / restrictions
6. mcq "Checkpoint" — 6 items, medium difficulty
7. clinic — 6-8 items
8. builder — 6-8 items
9. concept — edge cases & exceptions ("Edge cases the exam loves")
10. mcq "Final exam drill" — 10-12 items at real HSK4 difficulty (plausible distractors! wrong options must be *tempting*, e.g. the classic confusion, not random)
11. cheatsheet

Volume per page: aim for **≥20 items combined across examples + builders + clinic**,
**≥14 mcq items**, **≥5 builder**, **≥5 clinic**, and a cheatsheet. `scripts/validate.js` emits
warnings below exactly these thresholds. Note that example sentences embedded in tables or prose
HTML don't count toward the tally — only items in `examples` sections and `tabs` example lists do.

## Language quality rules (critical)

- Simplified characters. Natural, native-sounding sentences. Vocabulary at HSK4 level or below (occasional HSK5 word OK if glossed in the note).
- Pinyin: tone marks (ā á ǎ à), spaces between words not syllables (e.g. `Wǒ bǎ zuòyè zuò wán le.`).
  Write 不 as `bú` before 4th tone, 一 as `yí/yì` as actually pronounced. Neutral tones unmarked.
- Every cn line gets py + en. Translations idiomatic, not word-by-word.
- Explanations teach the WHY, not just the answer. Reference the rule by name.
- MCQ distractors must reflect real learner errors (wrong position of negation, confused near-synonym, missing complement...).
- Content must specifically target the HSK3→HSK4 delta: assume the reader knows HSK1-3 grammar (basic 了/过/着, simple complements, 因为…所以, basic 比, simple 把). Explicitly connect: "you knew X from HSK3; HSK4 adds Y".
- Address the reader as "you". Warm, direct, slightly playful tone — like the exemplar. No fluff.

## Technical rules

- The file must be valid standalone JS (no imports). It will run via `<script>` after app.js.
- Use ONLY the section types above. `short` ≤ 16 chars (chip nav label).
- Escape nothing manually; the engine escapes cn/py/en strings (except `**…**`). HTML fields are raw HTML.
- Don't invent new CSS classes. Don't add scripts or event handlers in HTML strings.
- IDs and file names must match the manifest exactly.
