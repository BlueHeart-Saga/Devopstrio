const fs = require('fs');

let content = fs.readFileSync('lib/seo-utils.ts', 'utf8');

// Parse keys in ROUTE_SEO_MAP and keep only unique ones
const mapStart = content.indexOf('export const ROUTE_SEO_MAP');
if (mapStart !== -1) {
  const lines = content.slice(mapStart).split('\n');
  const seenKeys = new Set();
  const cleanedLines = [];
  let currentKey = null;
  let block = [];

  for (let line of lines) {
    const keyMatch = line.match(/^\s*["'](\/services\/[^"']+)["']\s*:\s*\{/);
    if (keyMatch) {
      if (currentKey) {
        if (!seenKeys.has(currentKey)) {
          seenKeys.add(currentKey);
          cleanedLines.push(...block);
        }
      }
      currentKey = keyMatch[1];
      block = [line];
    } else {
      if (currentKey) {
        block.push(line);
      } else {
        cleanedLines.push(line);
      }
    }
  }
  if (currentKey && !seenKeys.has(currentKey)) {
    seenKeys.add(currentKey);
    cleanedLines.push(...block);
  }

  content = content.slice(0, mapStart) + cleanedLines.join('\n');
  fs.writeFileSync('lib/seo-utils.ts', content, 'utf8');
  console.log(`Successfully deduplicated ROUTE_SEO_MAP! Unique keys count: ${seenKeys.size}`);
}
