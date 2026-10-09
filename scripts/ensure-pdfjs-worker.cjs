// Run after npm install and whenever pdfjs-dist is upgraded.
// Ensures the worker version always matches the pdfjs-dist JS runtime.
const fs = require("node:fs");
const path = require("node:path");
const pdfjsPackage = require.resolve("pdfjs-dist/package.json");
const root = path.dirname(pdfjsPackage);
const source = path.join(root, "build", "pdf.worker.min.mjs");
const destDir = path.join(process.cwd(), "public", "workers");
const dest = path.join(destDir, "pdf.worker.min.mjs");
if (!fs.existsSync(source)) {
  throw new Error("This viewer requires pdfjs-dist v4+ with build/pdf.worker.min.mjs. Check your installed package.");
}
fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(source, dest);
console.log(`PDF.js worker copied: ${dest}`);
