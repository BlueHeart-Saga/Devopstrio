const fs = require('fs');
const path = require('path');

function parseRegistry() {
  const content = fs.readFileSync(path.join(__dirname, '../data/services/dynamic-capabilities.ts'), 'utf8');
  const startIdx = content.indexOf('export const capabilityRegistry');
  const braceIdx = content.indexOf('{', startIdx);
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

function generateSeoEntries() {
  const capabilityRegistry = parseRegistry();
  const existingSeoRoutes = parseSeoMapRoutes();
  const seoFilePath = path.join(__dirname, '../lib/seo-utils.ts');
  let seoContent = fs.readFileSync(seoFilePath, 'utf8');

  let addedCount = 0;
  let newEntries = "";

  Object.entries(capabilityRegistry).forEach(([catSlug, subCaps]) => {
    // Check hub
    const hubUrl = `/services/${catSlug}`;
    if (!existingSeoRoutes.has(hubUrl)) {
      const formattedCat = catSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      newEntries += `  "${hubUrl}": {\n    title: "${formattedCat} Services & Solutions | Devopstrio",\n    description: "Enterprise ${formattedCat} consulting, cloud architecture, and managed engineering solutions by Devopstrio.",\n    keywords: ["${formattedCat}", "Enterprise ${formattedCat}", "Devopstrio Services"]\n  },\n`;
      addedCount++;
    }

    Object.entries(subCaps).forEach(([capSlug, item]) => {
      const capUrl = `/services/${catSlug}/${capSlug}`;
      if (!existingSeoRoutes.has(capUrl)) {
        const title = item.title;
        const desc = item.desc;
        const kw1 = title;
        const kw2 = `${title} UK`;
        const kw3 = "Devopstrio Services";
        newEntries += `  "${capUrl}": {\n    title: "${title} Services | Devopstrio",\n    description: "${desc.replace(/"/g, '\\"')}",\n    keywords: ["${kw1}", "${kw2}", "${kw3}"]\n  },\n`;
        addedCount++;
      }
    });
  });

  if (addedCount > 0) {
    const insertMarker = "  // Ecosystem Hub & Subpages";
    const insertIdx = seoContent.indexOf(insertMarker);
    if (insertIdx !== -1) {
      seoContent = seoContent.slice(0, insertIdx) + newEntries + "\n" + seoContent.slice(insertIdx);
      fs.writeFileSync(seoFilePath, seoContent, 'utf8');
      console.log(`Successfully added ${addedCount} missing service route SEO entries to ROUTE_SEO_MAP in seo-utils.ts.`);
    } else {
      console.log("Could not find insert marker in seo-utils.ts");
    }
  } else {
    console.log("All service routes are already registered in ROUTE_SEO_MAP.");
  }
}

generateSeoEntries();
