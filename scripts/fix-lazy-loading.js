const fs = require("fs");
const path = require("path");

const targetDirs = [
  path.join(process.cwd(), "sections"),
  path.join(process.cwd(), "components"),
  path.join(process.cwd(), "app")
];

let totalFilesFixed = 0;
let totalFixes = 0;

function processFile(filePath) {
  if (!filePath.endsWith(".tsx") && !filePath.endsWith(".jsx")) return;
  const isHeroFile = path.basename(filePath).toLowerCase().includes("hero");
  const loadingVal = isHeroFile ? "eager" : "lazy";

  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Fix stray slash before loading attribute: e.g. / loading="lazy" or / loading="eager"
  content = content.replace(/\/\s*loading\s*=\s*["'](?:lazy|eager)["']/gi, () => {
    modified = true;
    totalFixes++;
    return `loading="${loadingVal}"`;
  });

  // Also clean up any double slashes or extra spaces in img tags like <img ... loading="lazy" />
  // Regex to cleanly match <img ... >
  content = content.replace(/<img\b([^>]+)>/gi, (match, attrs) => {
    // Check if loading attribute is present
    const hasLoading = /\bloading\s*=/i.test(attrs);

    let cleanAttrs = attrs.replace(/\/\s*$/, "").trim(); // strip trailing / if present

    if (!hasLoading) {
      cleanAttrs = `${cleanAttrs} loading="${loadingVal}"`;
    } else {
      // Ensure correct loading value for hero vs non-hero
      cleanAttrs = cleanAttrs.replace(/\bloading\s*=\s*["'](?:lazy|eager)["']/i, `loading="${loadingVal}"`);
    }

    modified = true;
    return `<img ${cleanAttrs} />`;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    totalFilesFixed++;
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

console.log("🛠 Cleaning up and standardizing <img> tags across TSX files...\n");
targetDirs.forEach(processDirectory);
console.log(`\n🎉 Successfully fixed ${totalFixes} tags across ${totalFilesFixed} files!`);
