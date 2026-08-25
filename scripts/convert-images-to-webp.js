const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const sourceDir = path.join(process.cwd(), "public");
const outputDir = path.join(process.cwd(), "public", "webp");
const reportPath = path.join(process.cwd(), "scripts", "webp-conversion-report.json");

const extensions = [".png", ".jpg", ".jpeg"];

const report = {
  timestamp: new Date().toISOString(),
  totalImages: 0,
  totalOriginalBytes: 0,
  totalWebpBytes: 0,
  savedBytes: 0,
  savedPercent: "0%",
  items: []
};

async function convertDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "webp") continue;
      await convertDirectory(sourcePath);
      continue;
    }

    const rawExt = path.extname(entry.name);
    const ext = rawExt.toLowerCase();

    if (!extensions.includes(ext)) continue;

    const relativePath = path.relative(sourceDir, sourcePath);
    const relativeDir = path.dirname(relativePath);

    const outputDirectory = path.join(outputDir, relativeDir);
    fs.mkdirSync(outputDirectory, { recursive: true });

    const baseName = path.basename(entry.name, rawExt);
    const outputName = baseName + ".webp";
    const outputPath = path.join(outputDirectory, outputName);

    try {
      let pipeline = sharp(sourcePath, { limitInputPixels: false });
      const metadata = await pipeline.metadata();
      if ((metadata.width && metadata.width > 16383) || (metadata.height && metadata.height > 16383)) {
        pipeline = pipeline.resize({
          width: metadata.width > 16383 ? 16383 : undefined,
          height: metadata.height > 16383 ? 16383 : undefined,
          fit: "inside",
          withoutEnlargement: true
        });
      }

      await pipeline
        .webp({
          quality: 85,
          effort: 5
        })
        .toFile(outputPath);

      const originalSize = fs.statSync(sourcePath).size;
      const webpSize = fs.statSync(outputPath).size;
      const reduction = originalSize > 0 ? ((originalSize - webpSize) / originalSize) * 100 : 0;

      report.totalImages++;
      report.totalOriginalBytes += originalSize;
      report.totalWebpBytes += webpSize;

      const item = {
        original: relativePath.replace(/\\/g, "/"),
        webp: path.relative(sourceDir, outputPath).replace(/\\/g, "/"),
        originalKB: (originalSize / 1024).toFixed(2),
        webpKB: (webpSize / 1024).toFixed(2),
        reduction: `${reduction.toFixed(2)}%`
      };

      report.items.push(item);
      console.log(`[${report.totalImages}] ${item.original} → ${item.webp} (${item.originalKB} KB → ${item.webpKB} KB, -${item.reduction})`);
    } catch (err) {
      console.error(`Failed to convert ${sourcePath}:`, err.message);
    }
  }
}

console.log("🚀 Starting Sharp WebP Image Conversion...");
const startTime = Date.now();

convertDirectory(sourceDir)
  .then(() => {
    report.savedBytes = report.totalOriginalBytes - report.totalWebpBytes;
    report.savedPercent = report.totalOriginalBytes > 0
      ? `${((report.savedBytes / report.totalOriginalBytes) * 100).toFixed(2)}%`
      : "0%";

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf-8");

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log("\n==============================================");
    console.log("🎉 WebP Image Conversion Completed Successfully!");
    console.log("==============================================");
    console.log(`⏱️ Duration: ${duration}s`);
    console.log(`🖼️ Total Original Images: ${report.totalImages}`);
    console.log(`📦 Total Original Size: ${(report.totalOriginalBytes / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`⚡ Total WebP Size: ${(report.totalWebpBytes / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`💾 Total Space Saved: ${(report.savedBytes / (1024 * 1024)).toFixed(2)} MB (${report.savedPercent})`);
    console.log(`📄 Conversion report saved to: scripts/webp-conversion-report.json`);
  })
  .catch((err) => {
    console.error("Conversion failed:", err);
    process.exit(1);
  });
