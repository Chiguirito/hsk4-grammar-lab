/* Shared helpers for the Node scripts (build-shells.js, validate.js).
   Loads manifest.js / data files by executing them in a VM context whose
   global doubles as `window` — no fragile text rewriting of the source. */
const fs = require("fs"), path = require("path"), vm = require("vm");

function loadManifest(root) {
  const win = {};
  vm.createContext(win);
  win.window = win;
  vm.runInContext(fs.readFileSync(path.join(root, "assets/manifest.js"), "utf8"), win, { filename: "manifest.js" });
  return win.MANIFEST;
}

/* Runs one data file and returns the page object it registers.
   Throws on JS errors; returns null if the file never calls registerPage. */
function loadPageData(root, id) {
  const f = path.join(root, "assets/data", id + ".js");
  let page = null;
  const ctx = { registerPage: p => { page = p; } };
  vm.createContext(ctx);
  ctx.window = ctx;
  vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: id + ".js" });
  return page;
}

module.exports = { loadManifest, loadPageData };
