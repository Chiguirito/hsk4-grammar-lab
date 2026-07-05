/* Generates index.html, topics/*.html and 404.html from assets/manifest.js so every
   page ships a real <title>, meta description, Open Graph tags, favicon and canonical
   URL (the body is still rendered by assets/app.js).
   Run: node scripts/build-shells.js          — write the shells
        node scripts/build-shells.js --check  — exit 1 if any shell is stale (CI) */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const SITE = "https://chiguirito.github.io/hsk4-grammar-lab/";
const CHECK = process.argv.includes("--check");

const win = {};
vm.createContext(win);
vm.runInContext(fs.readFileSync(path.join(root, "assets/manifest.js"), "utf8").replace(/window\./g, "this."), win);
const pages = win.MANIFEST.units.flatMap(u => u.pages);

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const plainZh = s => String(s).replace(/\*\*/g, "");
const FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='18' fill='%23b3352c'/%3E%3Ctext x='50' y='74' font-size='60' text-anchor='middle' fill='%23fff' font-family='sans-serif'%3E%E6%B1%89%3C/text%3E%3C/svg%3E";
const FONTS = "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap";

function head({ title, description, url, rel, ogType }) {
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="HSK 4 Grammar Lab">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<link rel="icon" href="${FAVICON}">
<link rel="manifest" href="${rel}manifest.webmanifest">
<meta name="theme-color" content="#faf7f1" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#191713" media="(prefers-color-scheme: dark)">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${FONTS}" rel="stylesheet">
<link rel="stylesheet" href="${rel}assets/style.css">
<script>(function(){try{var c=document.documentElement.classList;if(localStorage.getItem("hsk4lab-py")==="off")c.add("hide-py");if(localStorage.getItem("hsk4lab-en")==="off")c.add("hide-en");}catch(e){}})();</script>`;
}

const NOSCRIPT = `<noscript><p style="max-width:640px;margin:80px auto;text-align:center;font-family:sans-serif">HSK 4 Grammar Lab is an interactive site and needs JavaScript to render its lessons and quizzes. Please enable JavaScript and reload.</p></noscript>`;

function shell(headHtml, scripts, rel) {
  return `<!doctype html>
<html lang="en">
<head>
${headHtml}
</head>
<body>
${NOSCRIPT}
<div id="app"></div>
${scripts}
<script>if ("serviceWorker" in navigator) navigator.serviceWorker.register("${rel}sw.js").catch(function () {});</script>
</body>
</html>
`;
}

const out = {};

out["index.html"] = shell(
  head({
    title: "HSK 4 Grammar Lab — from HSK 3 to HSK 4",
    description: "Free interactive grammar course covering exactly the delta from HSK 3 to HSK 4: 27 topics, 600+ example sentences with audio, and 900+ exam-level quizzes, sentence builders and error clinics.",
    url: SITE, rel: "", ogType: "website"
  }),
  `<script src="assets/manifest.js"></script>
<script src="assets/app.js"></script>
<script>renderIndex();</script>`,
  ""
);

for (const p of pages) {
  out["topics/" + p.id + ".html"] = shell(
    head({
      title: (p.title.includes(plainZh(p.zh)) ? p.title : plainZh(p.zh) + " — " + p.title) + " · HSK 4 Grammar Lab",
      description: p.blurb + (/[.!?…。！？]$/.test(p.blurb) ? "" : ".") + " Interactive HSK 4 grammar lesson: examples with audio, quizzes, sentence builders and an error clinic.",
      url: SITE + "topics/" + p.id + ".html", rel: "../", ogType: "article"
    }),
    `<script src="../assets/manifest.js"></script>
<script src="../assets/app.js"></script>
<script src="../assets/data/${p.id}.js"></script>`,
    "../"
  );
}

out["review.html"] = shell(
  head({
    title: "Review your misses (错题本) · HSK 4 Grammar Lab",
    description: "Your personal wrong-answer notebook: every HSK 4 quiz question and sentence build you missed, collected from all topics for another round.",
    url: SITE + "review.html", rel: "", ogType: "website"
  }),
  `<script>window.COLLECT_PAGES = [];</script>
<script src="assets/manifest.js"></script>
<script src="assets/app.js"></script>
${pages.map(p => `<script src="assets/data/${p.id}.js"></script>`).join("\n")}
<script>renderReview();</script>`,
  ""
);

out["404.html"] = shell(
  head({
    title: "Page not found · HSK 4 Grammar Lab",
    description: "This page does not exist. Head back to the HSK 4 Grammar Lab topic list.",
    url: SITE + "404.html", rel: "/hsk4-grammar-lab/", ogType: "website"
  }),
  `<script>document.getElementById("app").innerHTML =
  '<div style="max-width:560px;margin:100px auto;text-align:center">' +
  '<div style="font-size:4rem" lang="zh-Hans">找不到</div>' +
  '<h1 style="font-size:1.3rem">Page not found (404)</h1>' +
  '<p><a href="/hsk4-grammar-lab/">← Back to all grammar topics</a></p></div>';</script>`,
  "/hsk4-grammar-lab/"
);

let stale = 0;
for (const [rel, content] of Object.entries(out)) {
  const p = path.join(root, rel);
  const current = fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
  if (current === content) continue;
  if (CHECK) { console.error("STALE: " + rel + " — run `node scripts/build-shells.js` and commit"); stale++; }
  else { fs.writeFileSync(p, content); console.log("wrote " + rel); }
}
if (CHECK) console.log(stale ? stale + " stale shell(s)" : "all " + Object.keys(out).length + " shells up to date");
process.exit(stale ? 1 : 0);
