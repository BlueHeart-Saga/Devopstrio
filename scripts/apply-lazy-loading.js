const fs = require("fs");
const path = require("path");

const targetDirs = [
  path.join(process.cwd(), "sections"),
  path.join(process.cwd(), "components"),
  path.join(process.cwd(), "app")
];

let totalFilesModified = 0;
let totalTagsUpdated = 0;

function processFile(filePath) {
  if (!filePath.endsWith(".tsx") && !filePath.endsWith(".jsx")) return;
  const isHeroFile = path.basename(filePath).toLowerCase().includes("hero");

  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Regex to find <img ... > tags
  // Match <img followed by attributes up to > or />
  const imgRegex = /<img\b([^>]*)\/?>/g;

  const newContent = content.replace(imgRegex, (match, p1) => {
    // Check if loading attribute already exists
    if (/\bloading\s*=/i.test(p1)) {
      return match;
    }

    // Determine loading strategy: 'eager' for primary hero background in hero files, 'lazy' for others
    const loadingVal = isHeroFile ? "eager" : "lazy";

    // Reconstruct tag with loading="lazy" (or "eager")
    const isSelfClosing = match.endsWith("/>");
    const cleanAttr = p1.trimEnd();

    totalTagsUpdated++;
    modified = true;

    if (isSelfClosing) {
      return `<img ${cleanAttr} loading="${loadingVal}" />`;
    } else {
      return `<img ${cleanAttr} loading="${loadingVal}">`;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, newContent, "utf8");
    totalFilesModified++;
    console.log(`Updated ${path.relative(process.cwd(), filePath)}`);
  }
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile()) {
      processFile(fullPath);
    }
  }
}

console.log("🚀 Scanning TSX files for <img> tags without loading attribute...\n");
targetDirs.forEach(processDirectory);
console.log(`\n🎉 Completed! Updated ${totalTagsUpdated} <img> tags across ${totalFilesModified} files.`);
