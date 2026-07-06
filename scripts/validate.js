/* Node validator: checks every data file against the schema + manifest. Run: node scripts/validate.js */
const fs = require("fs"), path = require("path");
const { loadManifest, loadPageData } = require("./lib");
const root = path.join(__dirname, "..");
const MANIFEST = loadManifest(root);
const ids = MANIFEST.units.flatMap(u => u.pages.map(p => p.id));
let errors = [], warnings = [];
const TYPES = ["concept","examples","table","tabs","mcq","builder","clinic","cheatsheet"];

for (const id of ids) {
  const f = path.join(root, "assets/data", id + ".js");
  if (!fs.existsSync(f)) { errors.push(`${id}: data file MISSING`); continue; }
  const shell = path.join(root, "topics", id + ".html");
  if (!fs.existsSync(shell)) errors.push(`${id}: topic html shell missing`);
  let page = null;
  try { page = loadPageData(root, id); }
  catch (e) { errors.push(`${id}: JS ERROR — ${e.message}`); continue; }
  if (!page) { errors.push(`${id}: registerPage never called`); continue; }
  if (page.id !== id) errors.push(`${id}: page.id is "${page.id}"`);
  if (!page.zh || !page.title || !page.subtitle) errors.push(`${id}: missing zh/title/subtitle`);
  // a missing sections array is fatal for the renderer — error, don't crash the validator
  if (!Array.isArray(page.sections) || !page.sections.length) { errors.push(`${id}: sections missing or empty`); continue; }
  if (page.sections.length < 8) warnings.push(`${id}: only ${page.sections.length} sections (recipe says 9-12)`);
  let nEx = 0, nMcq = 0, nBuild = 0, nClinic = 0, hasCheat = false;
  page.sections.forEach((s, i) => {
    const tag = `${id} sec${i + 1} (${s.type})`;
    if (!TYPES.includes(s.type)) errors.push(`${tag}: unknown type`);
    if (!s.title) errors.push(`${tag}: missing title`);
    // the renderer requires html on concept/cheatsheet and a tabs array on tabs —
    // these used to validate clean and then break or blank the page at runtime
    if ((s.type === "concept" || s.type === "cheatsheet") && !s.html) errors.push(`${tag}: missing html`);
    if (s.type === "examples") {
      (s.items || []).forEach((it, j) => {
        nEx++;
        if (!it.cn || !it.py || !it.en) errors.push(`${tag} item${j + 1}: needs cn+py+en`);
      });
    }
    if (s.type === "tabs") {
      if (!Array.isArray(s.tabs) || !s.tabs.length) errors.push(`${tag}: tabs array missing or empty`);
      else s.tabs.forEach(t => {
        if (!t.label) errors.push(`${tag}: tab missing label`);
        if (!t.html && !(t.examples || []).length) errors.push(`${tag}: tab "${t.label}" has neither html nor examples`);
        (t.examples || []).forEach(it => {
          nEx++;
          if (!it.cn) errors.push(`${tag}: tab example missing cn`);
        });
      });
    }
    if (s.type === "mcq") (s.items || []).forEach((it, j) => {
      nMcq++;
      if (!it.q || !Array.isArray(it.choices) || it.choices.length < 2) errors.push(`${tag} q${j + 1}: bad q/choices`);
      else if (new Set(it.choices.map(String)).size !== it.choices.length) errors.push(`${tag} q${j + 1}: duplicate choices`);
      if (!(Number.isInteger(it.a) && it.a >= 0 && it.a < it.choices.length)) errors.push(`${tag} q${j + 1}: answer index out of range`);
      if (!it.expl) warnings.push(`${tag} q${j + 1}: no explanation`);
    });
    if (s.type === "builder") (s.items || []).forEach((it, j) => {
      nBuild++;
      if (!Array.isArray(it.tiles) || it.tiles.length < 3) errors.push(`${tag} item${j + 1}: needs ≥3 tiles`);
      if (!it.py || !it.en) warnings.push(`${tag} item${j + 1}: missing py/en`);
      // every alt order must be an exact permutation of tiles, or it's unreachable
      if (it.alt !== undefined) {
        if (!Array.isArray(it.alt) || it.alt.some(a => !Array.isArray(a))) errors.push(`${tag} item${j + 1}: alt must be an array of tile arrays`);
        else it.alt.forEach((a, k) => {
          if (a.slice().sort().join("\u0001") !== (it.tiles || []).slice().sort().join("\u0001"))
            errors.push(`${tag} item${j + 1} alt${k + 1}: not a permutation of tiles`);
        });
      }
    });
    if (s.type === "clinic") (s.items || []).forEach((it, j) => {
      nClinic++;
      if (!it.wrong || !it.right || !it.expl) errors.push(`${tag} item${j + 1}: needs wrong+right+expl`);
    });
    if (s.type === "cheatsheet") hasCheat = true;
    if (s.type === "table" && (!s.rows || !s.rows.length)) errors.push(`${tag}: empty table`);
  });
  const vol = [];
  if (nEx + nBuild + nClinic < 20) vol.push(`examples+builders+clinic low (${nEx}+${nBuild}+${nClinic})`);
  if (nMcq < 14) vol.push(`mcq low (${nMcq})`);
  if (nBuild < 5) vol.push(`builder low (${nBuild})`);
  if (nClinic < 5) vol.push(`clinic low (${nClinic})`);
  if (!hasCheat) vol.push("no cheatsheet");
  if (vol.length) warnings.push(`${id}: ${vol.join(", ")}`);
}
// orphan data files
for (const f of fs.readdirSync(path.join(root, "assets/data"))) {
  const id = f.replace(/\.js$/, "");
  if (!ids.includes(id)) warnings.push(`orphan data file: ${f}`);
}
console.log("=== ERRORS (" + errors.length + ") ===");
errors.forEach(e => console.log("  ✗ " + e));
console.log("=== WARNINGS (" + warnings.length + ") ===");
warnings.forEach(w => console.log("  ⚠ " + w));
process.exit(errors.length ? 1 : 0);
