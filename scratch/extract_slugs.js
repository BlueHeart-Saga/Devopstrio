const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('data/services').filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
const slugsMap = {};

files.forEach(file => {
  const content = fs.readFileSync(path.join('data/services', file), 'utf8');
  const catSlugMatch = content.match(/slug:\s*["']([^"']+)["']/);
  const catSlug = catSlugMatch ? catSlugMatch[1] : file.replace('.ts', '');
  
  const capMatches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
  slugsMap[catSlug] = capMatches.map(m => m[1]);
});

console.log(JSON.stringify(slugsMap, null, 2));
