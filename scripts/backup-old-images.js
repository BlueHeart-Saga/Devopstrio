const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();
const backupRootDir = path.resolve(rootDir, "..", "Devopstrio-old-images-backup");
const publicDir = path.join(rootDir, "public");

const imageExtensions = [".png", ".jpg", ".jpeg", ".PNG", ".JPG", ".JPEG"];

// Directories in source code to check for image references
const scanDirs = [
  "app",
  "pages",
  "components",
  "sections",
  "src",
  "styles",
  "lib",
  "data",
  "config"
];

const codeExts = [".tsx", ".ts", ".jsx", ".js", ".json", ".css", ".scss", ".html", ".md", ".mjs", ".cjs"];

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== "node_modules" && file !== ".next" && file !== ".git") {
        getAllFiles(filePath, fileList);
      }
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

// 1. Gather all codebase contents
console.log("🔍 Scanning codebase for active image references...");
const codeFiles = [];
for (const d of scanDirs) {
  const fullPath = path.join(rootDir, d);
  if (fs.existsSync(fullPath)) {
    getAllFiles(fullPath, codeFiles);
  }
}
// Include root config files
const rootConfigs = fs.readdirSync(rootDir).filter(f => {
  const ext = path.extname(f);
  return codeExts.includes(ext) || f.endsWith(".json");
});
for (const cfg of rootConfigs) {
  codeFiles.push(path.join(rootDir, cfg));
}

let concatenatedCodeContent = "";
for (const f of codeFiles) {
  if (codeExts.includes(path.extname(f))) {
    try {
      concatenatedCodeContent += "\n" + fs.readFileSync(f, "utf8");
    } catch (err) {}
  }
}

// Lowercase copy for case-insensitive matching
const concatenatedCodeLower = concatenatedCodeContent.toLowerCase();

// 2. Gather all PNG/JPG/JPEG image files in public/ (excluding public/webp)
function getPublicImageFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (file === "webp") continue; // SKIP WebP folder
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getPublicImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file);
      if (imageExtensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const candidateImageFiles = getPublicImageFiles(publicDir);

console.log(`📸 Found ${candidateImageFiles.length} candidate PNG/JPG/JPEG files in public/`);

let oldImagesFound = candidateImageFiles.length;
let oldImagesMoved = 0;
let totalBackupSizeBytes = 0;
let filesNotMoved = 0;
let filesRequiringManualReview = 0;
const movedFilesList = [];
const skippedFilesList = [];

// Ensure backup folder exists
if (!fs.existsSync(backupRootDir)) {
  fs.mkdirSync(backupRootDir, { recursive: true });
}

for (const imgPath of candidateImageFiles) {
  const relPathFromProject = path.relative(rootDir, imgPath); // e.g. "public/assets/Home-page/hero.png"
  const relPathUnix = relPathFromProject.replace(/\\/g, "/");
  const basename = path.basename(imgPath);
  const basenameLower = basename.toLowerCase();

  // Check if either path or filename is referenced in codebase
  const isPathReferenced = concatenatedCodeLower.includes(relPathUnix.toLowerCase());
  const isBasenameReferenced = concatenatedCodeLower.includes(basenameLower);

  if (isPathReferenced || isBasenameReferenced) {
    filesNotMoved++;
    filesRequiringManualReview++;
    skippedFilesList.push({
      file: relPathUnix,
      reason: isPathReferenced ? "Direct path referenced in code" : "Filename referenced in code"
    });
    continue;
  }

  // Safe to move
  const stat = fs.statSync(imgPath);
  totalBackupSizeBytes += stat.size;

  const destPath = path.join(backupRootDir, relPathFromProject);
  const destDir = path.dirname(destPath);

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Copy then remove for safe cross-device move
  fs.copyFileSync(imgPath, destPath);
  fs.unlinkSync(imgPath);

  oldImagesMoved++;
  movedFilesList.push(relPathUnix);
}

const backupSizeMB = (totalBackupSizeBytes / (1024 * 1024)).toFixed(2);

console.log("\n==============================================");
console.log("📦 OLD IMAGES BACKUP REPORT");
console.log("==============================================");
console.log(`OLD IMAGES FOUND: ${oldImagesFound}`);
console.log(`OLD IMAGES MOVED: ${oldImagesMoved}`);
console.log(`TOTAL BACKUP SIZE: ${backupSizeMB} MB`);
console.log(`FILES NOT MOVED: ${filesNotMoved}`);
console.log(`FILES REQUIRING MANUAL REVIEW: ${filesRequiringManualReview}`);
console.log(`BACKUP LOCATION: ${backupRootDir}`);
console.log("==============================================\n");

const report = {
  timestamp: new Date().toISOString(),
  oldImagesFound,
  oldImagesMoved,
  totalBackupSizeBytes,
  backupSizeMB: `${backupSizeMB} MB`,
  filesNotMoved,
  filesRequiringManualReview,
  backupLocation: backupRootDir,
  movedFilesList,
  skippedFilesList
};

fs.writeFileSync(path.join(rootDir, "scripts", "image-backup-report.json"), JSON.stringify(report, null, 2), "utf8");
