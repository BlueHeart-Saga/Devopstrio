const fs = require('fs');
const path = require('path');

const domains = [
  'partnerships',
  'innovation-labs',
  'platforms-solutions',
  'technology-stack',
  'global-delivery',
  'engineering-excellence',
  'accelerators-frameworks',
  'managed-services'
];

const templatePath = path.join('app', 'ecosystem', '[domain]', 'page.tsx');
const templateContent = fs.readFileSync(templatePath, 'utf8');

domains.forEach(domain => {
  const dirPath = path.join('app', 'ecosystem', domain);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Find the parts to replace
  let newContent = templateContent.replace(
    /interface PageProps \{[\s\S]*?export default function EcosystemDomainPage\(\{ params \}: PageProps\) \{[\s\S]*?const \{ domain \} = use\(params\);/m,
    `export default function EcosystemDomainPage() {\n  const domain = "${domain}";`
  );

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), newContent);
});

console.log('Successfully created separate DDD pages for all 8 domains.');
