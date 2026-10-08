const fs = require('fs');
const path = require('path');

function parseRegistry() {
  const content = fs.readFileSync(path.join(__dirname, '../data/services/dynamic-capabilities.ts'), 'utf8');
  const startIdx = content.indexOf('export const capabilityRegistry');
  if (startIdx === -1) throw new Error("Could not find capabilityRegistry");
  const braceIdx = content.indexOf('{', startIdx);
  
  // Find closing brace of object
  let depth = 1;
  let endIdx = braceIdx + 1;
  while (depth > 0 && endIdx < content.length) {
    if (content[endIdx] === '{') depth++;
    if (content[endIdx] === '}') depth--;
    endIdx++;
  }
  
  const objStr = content.substring(braceIdx, endIdx);
  return eval('(' + objStr + ')');
}

function parseSeoMapRoutes() {
  const content = fs.readFileSync(path.join(__dirname, '../lib/seo-utils.ts'), 'utf8');
  const routeRegex = /"(\/services[^"]*)":\s*\{/g;
  const seoRoutes = new Set();
  let match;
  while ((match = routeRegex.exec(content)) !== null) {
    seoRoutes.add(match[1]);
  }
  return seoRoutes;
}

function runAudit() {
  const capabilityRegistry = parseRegistry();
  const seoRoutes = parseSeoMapRoutes();
  
  const categories = Object.keys(capabilityRegistry);
  
  const categoryInventory = {};
  const allServiceUrls = new Set();
  
  categories.forEach(catSlug => {
    const hubUrl = `/services/${catSlug}`;
    allServiceUrls.add(hubUrl);
    
    const subCaps = capabilityRegistry[catSlug];
    const subPages = Object.keys(subCaps);
    const subUrls = [];
    
    subPages.forEach(capSlug => {
      const capUrl = `/services/${catSlug}/${capSlug}`;
      allServiceUrls.add(capUrl);
      subUrls.push(capUrl);
    });

    categoryInventory[catSlug] = {
      hubUrl,
      subPageCount: subPages.length,
      subUrls,
      subPages,
      totalCategoryPages: 1 + subPages.length // 1 Hub + sub-pages
    };
  });

  console.log("\n==================================================================================");
  console.log("     DEVOPSTRIO COMPLETE SERVICES ARCHITECTURE — MACHINE INVENTORY & AUDIT     ");
  console.log("==================================================================================\n");

  let sumOfCategoryTotals = 0;
  let sumOfSubPages = 0;

  console.log("PAGE INVENTORY BY TOP-LEVEL SERVICE CATEGORY:\n");

  categories.forEach((catSlug, index) => {
    const data = categoryInventory[catSlug];
    sumOfCategoryTotals += data.totalCategoryPages;
    sumOfSubPages += data.subPageCount;
    
    console.log(`${(index + 1).toString().padStart(2, ' ')}. Category Hub: /services/${catSlug}`);
    console.log(`    Total Category Pages: ${data.totalCategoryPages} (1 Hub + ${data.subPageCount} sub-pages)`);
    console.log(`    Sub-pages (${data.subPageCount}):`);
    data.subPages.forEach(p => {
      console.log(`      - /services/${catSlug}/${p}`);
    });
    console.log("");
  });

  console.log("----------------------------------------------------------------------------------");
  console.log("MATHEMATICAL & ROUTE COUNT BREAKDOWN:");
  console.log(`- Top-Level Category Hubs: ${categories.length} hubs`);
  console.log(`- Total Dedicated Sub-Pages: ${sumOfSubPages} capability pages`);
  console.log(`- Sum of Category Totals (Category Hubs + Sub-Pages): ${sumOfCategoryTotals} pages`);
  console.log(`- Total Unique Production URLs under /services/* (including hubs & sub-pages): ${allServiceUrls.size} URLs`);
  console.log(`- Excluded Utility/Global Pages:`);
  console.log(`    * Global Services Overview: /services`);
  console.log(`    * Services Capability Explorer: /services/explore`);
  console.log("----------------------------------------------------------------------------------\n");

  // Audit Checks
  console.log("AUDIT CHECKS & INTEGRITY TESTS:\n");

  // 1. Missing SEO Map entries
  const missingSeo = [];
  allServiceUrls.forEach(url => {
    if (!seoRoutes.has(url)) {
      missingSeo.push(url);
    }
  });

  if (missingSeo.length === 0) {
    console.log(`[1] SEO MAP COVERAGE: ✓ PASS — All ${allServiceUrls.size} Service URLs are registered in ROUTE_SEO_MAP.`);
  } else {
    console.log(`[1] SEO MAP COVERAGE: ❌ FAIL — ${missingSeo.length} Service URLs missing from ROUTE_SEO_MAP:`, missingSeo);
  }

  // 2. Orphaned SEO Map entries
  const orphanedSeo = [];
  seoRoutes.forEach(url => {
    if (url !== '/services' && url !== '/services/explore') {
      if (!allServiceUrls.has(url)) {
        orphanedSeo.push(url);
      }
    }
  });

  if (orphanedSeo.length === 0) {
    console.log(`[2] SEO MAP ORPHANS:  ✓ PASS — Zero orphaned service routes found in ROUTE_SEO_MAP.`);
  } else {
    console.log(`[2] SEO MAP ORPHANS:  ℹ️ INFO — ${orphanedSeo.length} SEO map alias/legacy route entries present:`);
    orphanedSeo.forEach(u => console.log(`      - ${u}`));
  }

  // 3. Parallel Slugs / Aliases per Title
  console.log(`\n[3] ALIAS & PARALLEL SLUG MAPPINGS:`);
  categories.forEach(cat => {
    const subCaps = capabilityRegistry[cat];
    const titlesSeen = new Map();
    Object.entries(subCaps).forEach(([slug, item]) => {
      if (titlesSeen.has(item.title)) {
        console.log(`    - [${cat}]: '${slug}' is a parallel/alias mapping for '${titlesSeen.get(item.title)}' ("${item.title}")`);
      } else {
        titlesSeen.set(item.title, slug);
      }
    });
  });
}

runAudit();
