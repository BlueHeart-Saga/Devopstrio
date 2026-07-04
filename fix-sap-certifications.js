const fs = require('fs');

const pagePath = `c:/Sagadevan/Devopstrio/app/ecosystem/partnerships/sap/page.tsx`;
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Generate certifications array for SAP
const imagesDir = `c:/Sagadevan/Devopstrio/public/assets/ecosystem/Sap_Awards`;
let certsCode = '[]';
if (fs.existsSync(imagesDir)) {
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png') || f.endsWith('.svg') || f.endsWith('.jpg'));
  const certsArray = files.map(file => {
    return `{ image: "/assets/ecosystem/Sap_Awards/${file}" }`;
  });
  certsCode = `[\n            ${certsArray.join(',\n            ')}\n          ]`;
}

const certBlock = `
      {/* CERTIFICATIONS */}
      <PartnerCertifications 
        title="SAP Certifications"
        certifications={${certsCode}}
      />
`;

// 2. Parse the Sections array
const sectionsRegex = /const\s+sapSections\s*=\s*\[([\s\S]*?)\];/;
const sectionsMatch = content.match(sectionsRegex);
const sectionsStr = sectionsMatch[1];
let items = sectionsStr.match(/\{[^}]+\}/g);

// Remove existing if any (shouldn't be)
items = items.filter(item => !item.includes('"certifications"'));

// Calculate middle index
const middleIndex = Math.floor(items.length / 2); // 4
const targetItem = items[middleIndex];
const targetIdMatch = targetItem.match(/id:\s*"([^"]+)"/);
const targetId = targetIdMatch[1]; // "process-transformation"

// Insert certifications item into the array at middleIndex
items.splice(middleIndex, 0, '{ id: "certifications", label: "Certifications" }');

// Rebuild the sections array string
const newSectionsStr = '\n  ' + items.join(',\n  ') + '\n';
content = content.replace(sectionsStr, newSectionsStr);

// 3. Inject the CERTIFICATIONS block before the target section in JSX
const targetRegex = new RegExp(`(<(?:div|section)\\s+id="${targetId}")`);
if (!targetRegex.test(content)) {
  console.log(`Could not find <div/section id="${targetId}" in sap`);
} else {
  content = content.replace(targetRegex, certBlock + '\n      $1');
  fs.writeFileSync(pagePath, content);
  console.log(`Moved certifications in sap to middle (before ${targetId})`);
}
