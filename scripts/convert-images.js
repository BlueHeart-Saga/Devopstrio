const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const targetDirs = [
  path.join(process.cwd(), "public", "assets"),
  path.join(process.cwd(), "public", "images")
];

const supportedExtensions = [".png", ".jpg", ".jpeg"];

function getQualitySetting(filePath) {
  const normalized = filePath.toLowerCase();
  
  // UI / Screenshots / Diagram graphics (highest quality to preserve text clarity)
  if (normalized.includes("screenshot") || normalized.includes("ui") || normalized.includes("diagram") || normalized.includes("certifications")) {
    return { quality: 92, effort: 6, maxPx: 2048 };
  }
  // Hero images & main banners
  if (normalized.includes("hero") || normalized.includes("banner") || normalized.includes("header")) {
    return { quality: 88, effort: 6, maxPx: 1920 };
  }
  // Standard photos, team, office, lifestyle, industry graphics
  return { quality: 85, effort: 6, maxPx: 1600 };
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      // Skip output webp subfolders to prevent infinite recursion
      if (entry.name.toLowerCase() === "webp") continue;
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (!supportedExtensions.includes(ext)) continue;

      const outputDir = path.join(dirPath, "webp");
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const baseName = path.basename(entry.name, ext);
      const outputPath = path.join(outputDir, `${baseName}.webp`);

      try {
        const settings = getQualitySetting(fullPath);
        const imagePipeline = sharp(fullPath);
        const metadata = await imagePipeline.metadata();

        // Two-stage optimization: Resize if dimensions exceed display bounds
        if (metadata.width && metadata.width > settings.maxPx) {
          imagePipeline.resize({ width: settings.maxPx, withoutEnlargement: true });
        }

        await imagePipeline
          .webp({ quality: settings.quality, effort: settings.effort })
          .toFile(outputPath);

        const originalSize = fs.statSync(fullPath).size;
        const convertedSize = fs.statSync(outputPath).size;
        const reduction = ((originalSize - convertedSize) / originalSize) * 100;

        console.log(
          `✔ ${path.relative(process.cwd(), fullPath)} → webp/${baseName}.webp | ` +
          `${(originalSize / 1024).toFixed(0)} KB → ${(convertedSize / 1024).toFixed(0)} KB | ` +
          `${reduction.toFixed(1)}% smaller`
        );
      } catch (error) {
        console.error(`❌ Failed: ${fullPath}`, error.message);
      }
    }
  }
}

async function convertAll() {
  console.log("🚀 Starting Quality-Preserving Sharp Image Optimization...\n");
  for (const dir of targetDirs) {
    await processDirectory(dir);
  }
  console.log("\n🎉 Quality-Preserving Image Conversion Completed!");
}

convertAll();
