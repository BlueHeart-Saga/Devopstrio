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
  'community-talent-network'
];

const templatePath = path.join('scripts', 'subpage-template.txt');
const subpageTemplate = fs.readFileSync(templatePath, 'utf8');

domains.forEach(domain => {
  const dirPath = path.join('app', 'ecosystem', domain, '[subpage]');
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = subpageTemplate.replace(/__DOMAIN__/g, domain);
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

console.log('Successfully generated separate [subpage] handlers for all 8 domains.');
