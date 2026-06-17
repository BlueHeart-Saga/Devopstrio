const fs = require('fs');
const path = require('path');

const domains = [
  'accelerators-frameworks',
  'community-talent-network',
  'engineering-excellence',
  'global-delivery',
  'innovation-labs',
  'partnerships',
  'platforms-solutions',
  'technology-stack'
];

domains.forEach(domain => {
  const filePath = path.join('app', 'ecosystem', domain, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove SvgWaveLine after id="domains"
  content = content.replace(
    /(<div id="domains">[\s\S]*?<\/div>)\s*<SvgWaveLine variant="dashed" \/>/g,
    '$1'
  );

  // 2. Remove SvgWaveLine after id="architecture"
  content = content.replace(
    /(<div id="architecture">[\s\S]*?<\/div>)\s*<SvgWaveLine variant="particles" \/>/g,
    '$1'
  );

  // 3. Remove SvgWaveLine after id="excellence"
  content = content.replace(
    /(<div id="excellence">[\s\S]*?<\/div>)\s*<SvgWaveLine variant="dashed" \/>/g,
    '$1'
  );

  // 4. Remove SvgWaveLine after id="delivery"
  content = content.replace(
    /(<div id="delivery">[\s\S]*?<\/div>)\s*<SvgWaveLine variant="particles" \/>/g,
    '$1'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated SvgWaveLines in: ${filePath}`);
});

console.log('Finished updating all 8 domain pages.');
