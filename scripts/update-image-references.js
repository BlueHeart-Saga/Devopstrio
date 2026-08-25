const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const publicWebpDir = path.join(rootDir, "public", "webp");

const targetDirs = ["app", "components", "sections", "data", "lib"];
const targetExtensions = [".tsx", ".ts", ".js", ".jsx", ".json", ".css"];
const imageExtensions = [".png", ".jpg", ".jpeg"];

const reportPath = path.join(rootDir, "scripts", "refactoring-report.json");

const report = {
  timestamp: new Date().toISOString(),
  totalFilesScanned: 0,
  filesModified: 0,
  totalReferencesUpdated: 0,
  updatedReferences: [],
  remainingReferences: []
};

// Regex to capture local image paths starting with /assets/, /images/, /uploads/, or standalone root image filenames
// e.g. "/assets/path/file.png", "/images/hero.jpg", "/logo.png"
const imageRegex = /["'`](\/(?:assets|images|uploads|[a-zA-Z0-0_-]+\.(?:png|jpg|jpeg))[^\s"'`]*\.(?:png|jpg|jpeg))(["'`])/gi;

function fileExistsInWebp(relPath) {
  // relPath e.g. "/assets/home/hero.png" -> "assets/home/hero.webp"
  const cleanPath = relPath.startsWith("/") ? relPath.substring(1) : relPath;
  const rawExt = path.extname(cleanPath);
  const baseWithoutExt = cleanPath.slice(0, -rawExt.length);
  const webpRelPath = baseWithoutExt + ".webp";
  
  const fullWebpPath = path.join(publicWebpDir, webpRelPath);
  return fs.existsSync(fullWebpPath);
}

function processFile(filePath) {
  report.totalFilesScanned++;
  const relativeFilePath = path.relative(rootDir, filePath).replace(/\\/g, "/");
  let content = fs.readFileSync(filePath, "utf-8");
  let fileModified = false;
  let fileReplacements = 0;

  const newContent = content.replace(imageRegex, (match, imagePath, quote) => {
    // If already /webp/, skip
    if (imagePath.startsWith("/webp/")) return match;

    // Check if webp file exists
    if (fileExistsInWebp(imagePath)) {
      const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
      const rawExt = path.extname(cleanPath);
      const baseWithoutExt = cleanPath.slice(0, -rawExt.length);
      const webpPath = `/webp${baseWithoutExt}.webp`;

      report.updatedReferences.push({
        file: relativeFilePath,
        original: imagePath,
        updated: webpPath
      });

      fileModified = true;
      fileReplacements++;
      return `${quote}${webpPath}${quote}`;
    } else {
      report.remainingReferences.push({
        file: relativeFilePath,
        reference: imagePath,
        reason: "Corresponding .webp file does not exist in public/webp/"
      });
      return match;
    }
  });

  if (fileModified) {
    fs.writeFileSync(filePath, newContent, "utf-8");
    report.filesModified++;
    report.totalReferencesUpdated += fileReplacements;
    console.log(`✔ Updated ${fileReplacements} image reference(s) in ${relativeFilePath}`);
  }
}

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git" || entry.name === "public") {
        continue;
      }
      scanDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (targetExtensions.includes(ext)) {
        processFile(fullPath);
      }
    }
  }
}

console.log("🔍 Scanning source code to update PNG/JPG/JPEG image references to /webp/...");

targetDirs.forEach((d) => scanDirectory(path.join(rootDir, d)));

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf-8");

console.log("\n==============================================");
console.log("🎉 Image References Update Completed!");
console.log("==============================================");
console.log(`📁 Files Scanned: ${report.totalFilesScanned}`);
console.log(`📝 Files Modified: ${report.filesModified}`);
console.log(`🔗 Total References Updated: ${report.totalReferencesUpdated}`);
console.log(`⚠️ Remaining References: ${report.remainingReferences.length}`);
console.log(`📄 Report saved to: scripts/refactoring-report.json`);
