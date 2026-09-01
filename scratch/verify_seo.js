const fs = require('fs');

// Simple verification script to check title lengths and duplicate brand occurrences in ROUTE_SEO_MAP
const seoUtilsContent = fs.readFileSync('lib/seo-utils.ts', 'utf8');

// Match title lines inside ROUTE_SEO_MAP
const titleMatches = [...seoUtilsContent.matchAll(/title:\s*"([^"]+)"/g)];

console.log(`Found ${titleMatches.length} route titles in seo-utils.ts:\n`);

let failedCount = 0;
titleMatches.forEach(match => {
  const rawTitle = match[1];
  let baseTitle = rawTitle.replace(/(\s*[|:-]\s*Devopstrio)+/gi, "").trim();
  
  if (baseTitle.length + " | Devopstrio".length < 35) {
    if (!/services|cloud|devops|ai|consulting|solutions|engineering|platform|privacy|terms|industry|marketing/i.test(baseTitle)) {
      baseTitle = `${baseTitle} — Enterprise Cloud & AI`;
    } else {
      baseTitle = `${baseTitle} Solutions`;
    }
  }

  let displayTitle = `${baseTitle} | Devopstrio`;

  if (displayTitle.length > 58) {
    const brand = " | Devopstrio";
    const maxLen = 58 - brand.length;
    if (baseTitle.length > maxLen) {
      baseTitle = baseTitle.substring(0, maxLen).trim().replace(/[\s,.-]+$/, "");
    }
    displayTitle = `${baseTitle}${brand}`;
  }

  const brandCount = (displayTitle.match(/Devopstrio/g) || []).length;
  const isLengthOk = displayTitle.length >= 35 && displayTitle.length <= 58;

  if (!isLengthOk || brandCount > 1) {
    failedCount++;
    console.error(`❌ FAIL [${displayTitle.length} chars, ${brandCount} brands]: "${displayTitle}" (Raw: "${rawTitle}")`);
  } else {
    console.log(`✅ PASS [${displayTitle.length} chars]: "${displayTitle}"`);
  }
});

console.log(`\nSummary: ${titleMatches.length - failedCount} PASSED, ${failedCount} FAILED.`);
if (failedCount > 0) {
  process.exit(1);
}
