const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const webpDir = path.join(publicDir, "webp");

// Folders to scan in source code
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

// File extensions to inspect
const validExts = [".tsx", ".ts", ".jsx", ".js", ".json", ".css", ".scss", ".html", ".md"];

let pngReferencesFound = 0;
let pngReferencesUpdated = 0;
let webpFilesVerified = 0;
let dynamicPngUpdated = 0;
let remainingPngReferences = [];
let missingWebpFiles = [];
let potentialCaseIssues = [];

// Helper to check case-sensitive file existence on disk
function checkCaseSensitiveExists(filePath) {
  if (!fs.existsSync(filePath)) return false;

  const dir = path.dirname(filePath);
  const basename = path.basename(filePath);

  if (dir === rootDir || dir === path.dirname(dir)) return true;

  try {
    const files = fs.readdirSync(dir);
    return files.includes(basename);
  } catch (err) {
    return false;
  }
}

// Find WebP file path for a relative image path from code
function findWebPFile(imgPath) {
  let cleaned = imgPath.trim();
  // Strip quotes
  cleaned = cleaned.replace(/^['"`]|['"`]$/g, "");

  // Remove leading @/public or @/ or / or ./
  let relPath = cleaned;
  if (relPath.startsWith("@/public/")) {
    relPath = relPath.substring(9);
  } else if (relPath.startsWith("@/")) {
    relPath = relPath.substring(2);
  } else if (relPath.startsWith("/")) {
    relPath = relPath.substring(1);
  } else if (relPath.startsWith("./")) {
    relPath = relPath.substring(2);
  }

  // Change extension to .webp
  const webpRelPath = relPath.replace(/\.png$/i, ".webp");

  // Check 1: public/webp/<webpRelPath>
  const targetWebpPath1 = path.join(webpDir, webpRelPath);
  if (fs.existsSync(targetWebpPath1)) {
    const isCaseOk = checkCaseSensitiveExists(targetWebpPath1);
    if (!isCaseOk) {
      potentialCaseIssues.push({ path: imgPath, actualDiskPath: targetWebpPath1 });
    }
    return {
      exists: true,
      webUrlPath: `/webp/${webpRelPath.replace(/\\/g, "/")}`,
      diskPath: targetWebpPath1,
      caseOk: isCaseOk
    };
  }

  // Check 2: public/<webpRelPath>
  const targetWebpPath2 = path.join(publicDir, webpRelPath);
  if (fs.existsSync(targetWebpPath2)) {
    const isCaseOk = checkCaseSensitiveExists(targetWebpPath2);
    if (!isCaseOk) {
      potentialCaseIssues.push({ path: imgPath, actualDiskPath: targetWebpPath2 });
    }
    return {
      exists: true,
      webUrlPath: `/${webpRelPath.replace(/\\/g, "/")}`,
      diskPath: targetWebpPath2,
      caseOk: isCaseOk
    };
  }

  return { exists: false };
}

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (file.startsWith(".") || file === "node_modules" || file === "public") continue;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      if (validExts.includes(path.extname(filePath))) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

console.log("🔍 Scanning codebase for PNG references...");

const allFiles = [];
for (const d of scanDirs) {
  const fullDirPath = path.join(rootDir, d);
  getAllFiles(fullDirPath, allFiles);
}

// Regex to capture PNG references in strings, templates, styles, imports
// Excludes http://, https://, data:image
const pngRegex = /(['"`])((?:(?!http:\/\/|https:\/\/|data:image).)+?\.png)(\1)/gi;
const dynamicPngRegex = /(`[^`]*?\${[^`]*?}\.png`)/gi;

let totalModifiedFiles = 0;

for (const filePath of allFiles) {
  let content = fs.readFileSync(filePath, "utf8");
  let originalContent = content;
  let fileModified = false;

  // 1. Process literal PNG strings
  content = content.replace(pngRegex, (match, quote, imgPath) => {
    pngReferencesFound++;

    const webpInfo = findWebPFile(imgPath);
    if (webpInfo.exists) {
      pngReferencesUpdated++;
      webpFilesVerified++;
      fileModified = true;
      return `${quote}${webpInfo.webUrlPath}${quote}`;
    } else {
      missingWebpFiles.push({ file: path.relative(rootDir, filePath), reference: imgPath });
      return match;
    }
  });

  // 2. Process dynamic template literals like `/images/${name}.png` -> `/webp/images/${name}.webp`
  content = content.replace(/(`)([^`]*?\${[^`]*?}[^`]*?\.png)(`)/gi, (match, q1, templateStr, q2) => {
    pngReferencesFound++;
    // Check if replacing .png with .webp makes sense
    if (templateStr.includes("/assets/") || templateStr.includes("/images/") || templateStr.includes("/uploads/")) {
      let updatedTemplate = templateStr.replace(/\.png$/i, ".webp");
      if (!updatedTemplate.startsWith("/webp/") && updatedTemplate.startsWith("/")) {
        updatedTemplate = `/webp${updatedTemplate}`;
      }
      pngReferencesUpdated++;
      dynamicPngUpdated++;
      fileModified = true;
      return `${q1}${updatedTemplate}${q2}`;
    }
    return match;
  });

  if (fileModified) {
    fs.writeFileSync(filePath, content, "utf8");
    totalModifiedFiles++;
  }
}

// Second scan: Audit any remaining PNG references
console.log("🔎 Audit scan for remaining PNG references...");
for (const filePath of allFiles) {
  const content = fs.readFileSync(filePath, "utf8");
  const relPath = path.relative(rootDir, filePath);
  const lines = content.split("\n");

  lines.forEach((line, idx) => {
    if (line.includes(".png") || line.includes(".PNG")) {
      // Classify
      let classification = "E. Other";
      if (line.includes("http://") || line.includes("https://") || line.includes("data:image")) {
        classification = "B. External URL";
      } else if (line.trim().startsWith("//") || line.trim().startsWith("/*") || line.trim().startsWith("*")) {
        classification = "A. Intentionally remaining (Comment)";
      } else {
        const webpMatch = findWebPFile(line);
        if (!webpMatch.exists) {
          classification = "C. Missing WebP conversion";
        } else {
          classification = "D. Code reference that still needs updating";
        }
      }

      remainingPngReferences.push({
        file: relPath,
        line: idx + 1,
        content: line.trim(),
        classification
      });
    }
  });
}

const summaryReport = {
  timestamp: new Date().toISOString(),
  pngReferencesFound,
  pngReferencesUpdated,
  webpFilesVerified,
  dynamicPngUpdated,
  totalModifiedFiles,
  remainingPngCount: remainingPngReferences.length,
  missingWebpFilesCount: missingWebpFiles.length,
  potentialCaseIssuesCount: potentialCaseIssues.length,
  remainingPngReferences,
  missingWebpFiles,
  potentialCaseIssues
};

fs.writeFileSync(path.join(rootDir, "scripts", "png-migration-audit.json"), JSON.stringify(summaryReport, null, 2), "utf8");

console.log("\n==============================================");
console.log("📊 PNG TO WEBP MIGRATION AUDIT SUMMARY");
console.log("==============================================");
console.log(`PNG References Found: ${pngReferencesFound}`);
console.log(`PNG References Updated: ${pngReferencesUpdated}`);
console.log(`WebP Files Verified: ${webpFilesVerified}`);
console.log(`Dynamic PNG References Updated: ${dynamicPngUpdated}`);
console.log(`Modified Source Files: ${totalModifiedFiles}`);
console.log(`Remaining PNG References: ${remainingPngReferences.length}`);
console.log(`Missing WebP Files: ${missingWebpFiles.length}`);
console.log(`Potential Case Issues: ${potentialCaseIssues.length}`);
console.log("==============================================\n");
