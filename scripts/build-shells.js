/* Generates index.html, topics/*.html, review.html, 404.html AND sw.js from
   assets/manifest.js so every page ships a real <title>, meta description,
   CSP, icons and canonical URL (the body is still rendered by assets/app.js),
   and the service worker precaches the whole site with a content-derived
   cache version.
   Run: node scripts/build-shells.js          — write the shells
        node scripts/build-shells.js --check  — exit 1 if any shell is stale (CI) */
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const { loadManifest, loadPageData } = require("./lib");
const root = path.join(__dirname, "..");
const SITE = "https://chiguirito.github.io/hsk4-grammar-lab/";
const BASE = new URL(SITE).pathname; // "/hsk4-grammar-lab/" — the ONE place the repo subpath lives
const CHECK = process.argv.includes("--check");

const MANIFEST = loadManifest(root);
const pages = MANIFEST.units.flatMap(u => u.pages);

// exact content stats, so the meta description and index hero can't drift
let nEx = 0, nMcq = 0, nBuild = 0, nClinic = 0;
for (const p of pages) {
  const page = loadPageData(root, p.id);
  (page.sections || []).forEach(s => {
    if (s.type === "examples") nEx += (s.items || []).length;
    if (s.type === "tabs") (s.tabs || []).forEach(t => { nEx += (t.examples || []).length; });
    if (s.type === "mcq") nMcq += (s.items || []).length;
    if (s.type === "builder") nBuild += (s.items || []).length;
    if (s.type === "clinic") nClinic += (s.items || []).length;
  });
}
const nQuiz = nMcq + nBuild + nClinic;
const TOTAL_ITEMS = nEx + nQuiz;
const round10 = n => Math.floor(n / 10) * 10;

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const plainZh = s => String(s).replace(/\*\*/g, "");
const FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='18' fill='%23b3352c'/%3E%3Ctext x='50' y='74' font-size='60' text-anchor='middle' fill='%23fff' font-family='sans-serif'%3E%E6%B1%89%3C/text%3E%3C/svg%3E";
const FONTS = "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap";
// defense-in-depth: no third-party script can ever load, even if content slips
const CSP = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'";
// runs before first paint: pinyin/english visibility + theme (OS pref, overridable via the Theme toggle)
const BOOT = `(function(){var d=document.documentElement;var g=function(k){try{return localStorage.getItem(k)}catch(e){return null}};if(g("hsk4lab-py")==="off")d.classList.add("hide-py");if(g("hsk4lab-en")==="off")d.classList.add("hide-en");var t=g("hsk4lab-theme");if(t!=="dark"&&t!=="light"){try{t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch(e){t="light"}}d.dataset.theme=t;})();`;

function head({ title, description, url, rel, ogType }) {
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Security-Policy" content="${CSP}">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="HSK 4 Grammar Lab">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<link rel="icon" href="${FAVICON}">
<link rel="apple-touch-icon" href="${rel}assets/apple-touch-icon.png">
<link rel="manifest" href="${rel}manifest.webmanifest">
<meta name="theme-color" content="#faf7f1" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#191713" media="(prefers-color-scheme: dark)">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${FONTS}" rel="stylesheet">
<link rel="stylesheet" href="${rel}assets/style.css">
<script>${BOOT}</script>`;
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
    description: `Free interactive grammar course covering exactly the delta from HSK 3 to HSK 4: ${pages.length} topics, ${round10(nEx)}+ example sentences with audio, and ${round10(nQuiz)}+ exam-level quizzes, sentence builders and error clinics.`,
    url: SITE, rel: "", ogType: "website"
  }),
  `<script>window.SITE_STATS = { items: ${TOTAL_ITEMS} };</script>
<script src="assets/manifest.js"></script>
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

/* review.html loads ONLY the data files that actually hold misses (usually a
   handful, often none) instead of all ${pages.length} topics (~1 MB of JS). */
out["review.html"] = shell(
  head({
    title: "Review your misses (错题本) · HSK 4 Grammar Lab",
    description: "Your personal wrong-answer notebook: every HSK 4 quiz question and sentence build you missed, collected from all topics for another round.",
    url: SITE + "review.html", rel: "", ogType: "website"
  }),
  `<script>window.COLLECT_PAGES = [];</script>
<script src="assets/manifest.js"></script>
<script src="assets/app.js"></script>
<script>
(function () {
  var ids = [];
  try {
    var m = JSON.parse(localStorage.getItem("hsk4lab-misses")) || {};
    var valid = {};
    window.MANIFEST.units.forEach(function (u) { u.pages.forEach(function (p) { valid[p.id] = 1; }); });
    Object.keys(m).forEach(function (k) {
      if (m[k] && m[k].grad) return; // graduated — no data needed
      var pid = k.split("/")[0];
      if (valid[pid] && ids.indexOf(pid) < 0) ids.push(pid);
    });
  } catch (e) {}
  var left = ids.length;
  if (!left) { renderReview(); return; }
  ids.forEach(function (pid) {
    var s = document.createElement("script");
    s.src = "assets/data/" + pid + ".js";
    s.onload = s.onerror = function () { if (--left === 0) renderReview(); };
    document.body.appendChild(s);
  });
})();
</script>`,
  ""
);

out["404.html"] = shell(
  head({
    title: "Page not found · HSK 4 Grammar Lab",
    description: "This page does not exist. Head back to the HSK 4 Grammar Lab topic list.",
    url: SITE + "404.html", rel: BASE, ogType: "website"
  }),
  `<script>document.getElementById("app").innerHTML =
  '<div style="max-width:560px;margin:100px auto;text-align:center">' +
  '<div style="font-size:4rem" lang="zh-Hans">找不到</div>' +
  '<h1 style="font-size:1.3rem">Page not found (404)</h1>' +
  '<p><a href="${BASE}">← Back to all grammar topics</a></p></div>';</script>`,
  BASE
);

/* ---------- service worker: precache everything, content-hashed version ---------- */
const PRECACHE = [
  "./", "index.html", "review.html", "404.html", "manifest.webmanifest",
  "assets/style.css", "assets/app.js", "assets/manifest.js",
  "assets/icon.svg", "assets/icon-192.png", "assets/icon-512.png",
  "assets/icon-maskable-512.png", "assets/apple-touch-icon.png",
  ...pages.map(p => "topics/" + p.id + ".html"),
  ...pages.map(p => "assets/data/" + p.id + ".js"),
];
// version = hash of everything the SW serves → any content change busts the cache
const h = crypto.createHash("sha256");
for (const k of Object.keys(out).sort()) h.update(k + "\n" + out[k]);
for (const f of ["assets/style.css", "assets/app.js", "assets/manifest.js", "assets/icon.svg", "manifest.webmanifest"]) {
  const fp = path.join(root, f);
  if (fs.existsSync(fp)) h.update(f + "\n" + fs.readFileSync(fp, "utf8"));
}
// binary assets are precached too — icon-only changes must also bust the cache
for (const f of ["assets/icon-192.png", "assets/icon-512.png", "assets/icon-maskable-512.png", "assets/apple-touch-icon.png"]) {
  const fp = path.join(root, f);
  if (fs.existsSync(fp)) { h.update(f + "\n"); h.update(fs.readFileSync(fp)); }
}
for (const p of pages) h.update(fs.readFileSync(path.join(root, "assets/data", p.id + ".js"), "utf8"));
const VERSION = h.digest("hex").slice(0, 10);

out["sw.js"] = `/* GENERATED by scripts/build-shells.js — do not edit by hand.
   HSK 4 Grammar Lab — offline support.
   Everything is precached at install (all ${pages.length} topics work offline from the
   first visit); fetches are network-first with a short timeout so flaky
   connections fall back to cache instead of hanging. */
const CACHE = "hsk4lab-${VERSION}";
const PRECACHE = ${JSON.stringify(PRECACHE, null, 2)};
const TIMEOUT_MS = 3500;

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      // allSettled: one missing file must not sink the whole install
      .then(c => Promise.allSettled(PRECACHE.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== location.origin) return; // fonts etc: browser handles
  e.respondWith((async () => {
    const net = fetch(req).then(res => {
      if (res.status === 200) {
        const copy = res.clone();
        e.waitUntil(caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}));
      }
      return res;
    });
    net.catch(() => {}); // handled below — avoid an unhandled rejection when the timeout wins
    try {
      return await Promise.race([
        net,
        new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), TIMEOUT_MS))
      ]);
    } catch (err) {
      const hit = await caches.match(req, { ignoreSearch: true });
      if (hit) return hit;
      try { return await net; } catch (e2) {} // nothing cached: give the network its full chance
      if (req.mode === "navigate") {
        const idx = await caches.match("index.html");
        if (idx) return idx;
      }
      return new Response("Offline — this page isn't cached yet.", { status: 503, headers: { "Content-Type": "text/plain" } });
    }
  })());
});
`;

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
