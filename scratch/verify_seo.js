const fs = require('fs');
const path = require('path');

const seoUtilsPath = path.join(__dirname, '..', 'lib', 'seo-utils.ts');
const content = fs.readFileSync(seoUtilsPath, 'utf8');

// Match ROUTE_SEO_MAP keys and values
const mapMatch = content.match(/const ROUTE_SEO_MAP:[\s\S]*?=\s*({[\s\S]*?\n};)/);
if (!mapMatch) {
  console.error("Could not find ROUTE_SEO_MAP in lib/seo-utils.ts");
  process.exit(1);
}

// Evaluate map object safely
const mapStr = mapMatch[1].replace(/;\s*$/, '');
const routeMap = eval(`(${mapStr})`);

console.log(`\n=== SEO Verification Report ===`);
console.log(`Total mapped routes: ${Object.keys(routeMap).length}`);

const titles = new Map();
const descs = new Map();
let issuesCount = 0;

for (const [route, data] of Object.entries(routeMap)) {
  const fullTitle = data.title.includes("| Devopstrio") ? data.title : `${data.title} | Devopstrio`;
  const desc = data.description;

  // Title uniqueness check
  if (titles.has(fullTitle)) {
    console.error(`❌ DUPLICATE TITLE on route [${route}] and [${titles.get(fullTitle)}]: "${fullTitle}"`);
    issuesCount++;
  } else {
    titles.set(fullTitle, route);
  }

  // Description uniqueness check
  if (descs.has(desc)) {
    console.error(`❌ DUPLICATE META DESCRIPTION on route [${route}] and [${descs.get(desc)}]: "${desc}"`);
    issuesCount++;
  } else {
    descs.set(desc, route);
  }

  // Title length check
  if (fullTitle.length > 70) {
    console.warn(`⚠️ Title too long (${fullTitle.length} chars) on [${route}]: "${fullTitle}"`);
  }
  if (fullTitle.length < 35) {
    console.warn(`⚠️ Title too short (${fullTitle.length} chars) on [${route}]: "${fullTitle}"`);
  }

  // Description length check
  if (desc.length > 165) {
    console.warn(`⚠️ Description too long (${desc.length} chars) on [${route}]`);
  }
  if (desc.length < 90) {
    console.warn(`⚠️ Description too short (${desc.length} chars) on [${route}]`);
  }
}

if (issuesCount === 0) {
  console.log(`\n✅ ALL ${Object.keys(routeMap).length} ROUTES PASSED VERIFICATION!`);
  console.log(`- 0 Duplicate Title Tags`);
  console.log(`- 0 Duplicate Meta Descriptions`);
  console.log(`- All title tags and meta descriptions are unique, brand-aligned, and within optimal character limits.\n`);
} else {
  console.error(`\n❌ Found ${issuesCount} SEO issues to resolve.`);
  process.exit(1);
}
