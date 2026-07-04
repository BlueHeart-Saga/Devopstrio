const fs = require('fs');

const pagePath = `c:/Sagadevan/Devopstrio/app/ecosystem/partnerships/sap/page.tsx`;
let content = fs.readFileSync(pagePath, 'utf8');

// Also fix the missing ID for process-transformation
content = content.replace(/\{\/\* 8\. BUSINESS PROCESS TRANSFORMATION \*\/\}\s*<section className="w-full/, '{/* 8. BUSINESS PROCESS TRANSFORMATION */}\n      <section id="process-transformation" className="w-full');

// Inject CERTIFICATIONS before it
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

content = content.replace(/\{\/\* 8\. BUSINESS PROCESS TRANSFORMATION \*\/\}/, match => {
  return certBlock + '\n      ' + match;
});

fs.writeFileSync(pagePath, content);
console.log('Fixed SAP');
