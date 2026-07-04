const fs = require('fs');

const vendors = ['aws', 'cisco', 'google-cloud', 'microsoft', 'oracle', 'sap', 'servicenow'];

vendors.forEach(vendor => {
  const pagePath = `c:/Sagadevan/Devopstrio/app/ecosystem/partnerships/${vendor}/page.tsx`;
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Inject { id: "certifications", label: "Certifications" } before { id: "faq", label: "FAQ" }
  if (content.includes('{ id: "faq", label: "FAQ" }') && !content.includes('{ id: "certifications", label: "Certifications" }')) {
    content = content.replace(
      /\{\s*id:\s*"faq",\s*label:\s*"FAQ"\s*\}/, 
      '{ id: "certifications", label: "Certifications" },\n  { id: "faq", label: "FAQ" }'
    );
    fs.writeFileSync(pagePath, content);
    console.log(`Updated nav for ${vendor}`);
  }
});
console.log('Nav done!');
