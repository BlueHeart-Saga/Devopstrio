const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const sourceDir = path.join(__dirname, "public");
const outputDir = path.join(__dirname, "public", "webp");

const extensions = [".png", ".jpg", ".jpeg"];

async function convertDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(dir, entry.name);

    // Don't process the webp output folder again
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

    await sharp(sourcePath)
      .webp({
        quality: 85,
        effort: 5
      })
      .toFile(outputPath);

    console.log(
      `${relativePath} → ${path.relative(sourceDir, outputPath)}`
    );
  }
}

convertDirectory(sourceDir)
  .then(() => console.log("WebP conversion completed."))
  .catch(console.error);
