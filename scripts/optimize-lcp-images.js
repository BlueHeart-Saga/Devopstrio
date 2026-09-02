const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SIZE_THRESHOLD_BYTES = 500 * 1024; // 500 KB

async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  }

  return arrayOfFiles;
}

async function optimizeImages() {
  console.log('Scanning for oversized image assets in public directory...');
  const allFiles = await getAllFiles(PUBLIC_DIR);
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  let totalSavedBytes = 0;
  let count = 0;

  for (const filePath of allFiles) {
    const ext = path.extname(filePath).toLowerCase();
    if (!imageExtensions.includes(ext)) continue;

    const stats = fs.statSync(filePath);
    if (stats.size > SIZE_THRESHOLD_BYTES) {
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`Optimizing: ${path.relative(PUBLIC_DIR, filePath)} (${sizeMB} MB)`);

      try {
        const tempPath = filePath + '.tmp';
        const image = sharp(filePath);
        const metadata = await image.metadata();

        let pipeline = image;

        // Resize if width > 1920
        if (metadata.width && metadata.width > 1920) {
          pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
        }

        if (ext === '.png') {
          pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
        } else if (ext === '.webp') {
          pipeline = pipeline.webp({ quality: 80, effort: 6 });
        } else {
          pipeline = pipeline.jpeg({ quality: 80, progressive: true, mozjpeg: true });
        }

        await pipeline.toFile(tempPath);
        const newStats = fs.statSync(tempPath);

        if (newStats.size < stats.size) {
          const saved = stats.size - newStats.size;
          totalSavedBytes += saved;
          fs.unlinkSync(filePath);
          fs.renameSync(tempPath, filePath);
          console.log(`  -> Reduced to ${(newStats.size / (1024 * 1024)).toFixed(2)} MB (Saved ${(saved / (1024 * 1024)).toFixed(2)} MB)`);
          count++;
        } else {
          fs.unlinkSync(tempPath);
          console.log(`  -> Keeping original (already well-compressed)`);
        }
      } catch (err) {
        console.error(`  -> Failed to optimize ${filePath}:`, err.message);
      }
    }
  }

  console.log(`\nOptimization Complete! Processed ${count} images. Saved ${(totalSavedBytes / (1024 * 1024)).toFixed(2)} MB total!`);
}

optimizeImages();
