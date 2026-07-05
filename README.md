# HSK 4 Grammar Lab 汉语水平考试四级语法实验室

An interactive site that teaches **exactly the delta from HSK 3 to HSK 4**: every new grammar
structure, pattern and trap — with ~470 quiz questions, 570+ example sentences (all with pinyin,
translation and text-to-speech), sentence builders, error clinics and progress tracking.

**27 topics in 6 units:** Complements (result, directional, potential, degree/state, duration/frequency) ·
Core patterns (把, 被, comparisons, 是…的, 连…都, question-word indefinites) · Adverbs (就/才, 又/再/还,
time & attitude adverbs, 越来越) · Connectors (cause/effect, conditionals, contrast, addition) ·
Words & structures (的/地/得, separable verbs, 着/reduplication/是否, prepositions, numbers, confusables) · Exam room (mixed drills).

## Run it in GitHub Codespaces

1. Click **Code → Codespaces → Create codespace on main**.
2. Wait for it to boot — a static server starts automatically on port **8000**.
3. When the "port forwarded" toast appears, click **Open in Browser** (or open the **Ports** tab → port 8000 → globe icon).

That's it — the site is pure static HTML/CSS/JS, no build step.

## Or host it on GitHub Pages (recommended for daily studying)

The repo ships with a Pages deploy workflow. One-time setup:

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Re-run the "Deploy to GitHub Pages" workflow (Actions tab) or push any commit.
3. Your site appears at `https://<user>.github.io/<repo>/`.

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Notes

- **Progress** (best score per topic) is stored in your browser's localStorage — no account needed.
- **Audio** uses your device's Chinese text-to-speech voice (install one in your OS settings for best quality).
- Toggle **Pīnyīn** and **English** off as you get stronger — recommended once a topic hits 80%+.
- Content architecture: each topic is a data file in `assets/data/`, rendered by the shared engine
  `assets/app.js`. See `CONTENT_GUIDE.md` to add or edit topics.

学习顺序 suggested path: do Unit 1 (complements) first — it unlocks half of everything else — then
Units 2-5 in any order, and Unit 6 (exam room) last. 加油！🀄
