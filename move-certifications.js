const fs = require('fs');

const vendors = ['aws', 'cisco', 'google-cloud', 'microsoft', 'oracle', 'sap', 'servicenow'];

vendors.forEach(vendor => {
  const pagePath = `c:/Sagadevan/Devopstrio/app/ecosystem/partnerships/${vendor}/page.tsx`;
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // 1. Extract and remove the CERTIFICATIONS block
  const certRegex = /\s*\{\/\*\s*CERTIFICATIONS\s*\*\/\}\s*<PartnerCertifications[\s\S]*?\/>\s*/;
  const match = content.match(certRegex);
  
  if (!match) {
    console.log(`No certifications block found in ${vendor}`);
    return;
  }
  
  const certBlock = match[0];
  content = content.replace(certRegex, '\n\n'); // Remove it

  // 2. Parse the Sections array
  // Example: const awsSections = [ { id: "overview", label: "Overview" }, ... ];
  const sectionsRegex = /const\s+\w+Sections\s*=\s*\[([\s\S]*?)\];/;
  const sectionsMatch = content.match(sectionsRegex);
  
  if (!sectionsMatch) {
    console.log(`No sections array found in ${vendor}`);
    return;
  }

  const sectionsStr = sectionsMatch[1];
  
  // Extract all { id: "...", label: "..." } lines
  let items = sectionsStr.match(/\{[^}]+\}/g);
  if (!items) return;

  // Remove existing certifications item
  items = items.filter(item => !item.includes('"certifications"'));

  // Calculate middle index
  const middleIndex = Math.floor(items.length / 2);
  
  // Get the target ID we will insert before
  const targetItem = items[middleIndex];
  const targetIdMatch = targetItem.match(/id:\s*"([^"]+)"/);
  if (!targetIdMatch) {
    console.log(`Could not find id in target item ${targetItem} for ${vendor}`);
    return;
  }
  const targetId = targetIdMatch[1];

  // Insert certifications item into the array at middleIndex
  items.splice(middleIndex, 0, '{ id: "certifications", label: "Certifications" }');

  // Rebuild the sections array string
  const newSectionsStr = '\n  ' + items.join(',\n  ') + '\n';
  content = content.replace(sectionsStr, newSectionsStr);

  // 3. Inject the CERTIFICATIONS block before the target section in JSX
  // Look for `<section id="targetId"` or `<div id="targetId"`
  const targetRegex = new RegExp(`(<(?:div|section)\\s+id="${targetId}")`);
  if (!targetRegex.test(content)) {
    console.log(`Could not find <div/section id="${targetId}" in ${vendor}`);
    return;
  }

  content = content.replace(targetRegex, certBlock + '\n      $1');

  fs.writeFileSync(pagePath, content);
  console.log(`Moved certifications in ${vendor} to middle (before ${targetId})`);
});
