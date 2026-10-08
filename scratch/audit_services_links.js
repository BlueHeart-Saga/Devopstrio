const fs = require('fs');
const path = require('path');

// 1. Collect all valid routes from app directory
function getRoutes(dir, base = '/services') {
  let routes = [];
  if (!fs.existsSync(dir)) return routes;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullPath = path.join(dir, entry.name);
      if (fs.existsSync(path.join(fullPath, 'page.tsx')) || fs.existsSync(path.join(fullPath, 'page.jsx'))) {
        routes.push(base + '/' + entry.name);
      }
      routes = routes.concat(getRoutes(fullPath, base + '/' + entry.name));
    }
  }
  return routes;
}

const appServicesRoutes = new Set(getRoutes('app/services'));
// Also add top-level pages
appServicesRoutes.add('/services');
appServicesRoutes.add('/services/explore');

// 2. Load all capability slugs from data/services/*.ts
const dataFiles = fs.readdirSync('data/services').filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
const validServicePaths = new Set(appServicesRoutes);

dataFiles.forEach(file => {
  const content = fs.readFileSync(path.join('data/services', file), 'utf8');
  const catSlugMatch = content.match(/slug:\s*["']([^"']+)["']/);
  const catSlug = catSlugMatch ? catSlugMatch[1] : file.replace('.ts', '');
  
  validServicePaths.add(`/services/${catSlug}`);
  
  const capMatches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
  capMatches.forEach(m => {
    validServicePaths.add(`/services/${catSlug}/${m[1]}`);
  });
});

console.log(`Total valid service paths in registry: ${validServicePaths.size}`);

// 3. Scan codebase for any /services/* links
function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'scratch') return;
    if (fs.statSync(filePath).isDirectory()) {
      scanDirectory(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const allFiles = scanDirectory('.');
const brokenLinks = [];

allFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(/["'](\/services\/[a-zA-Z0-9\-_/]+)["']/g)];
  
  matches.forEach(m => {
    const link = m[1].split('#')[0].split('?')[0]; // strip hash and query
    if (link.includes('${')) return; // ignore dynamic template literals
    
    if (!validServicePaths.has(link)) {
      brokenLinks.push({ file: filePath, link });
    }
  });
});

if (brokenLinks.length === 0) {
  console.log('SUCCESS: All /services/* links across the codebase are 100% valid!');
} else {
  console.log(`Found ${brokenLinks.length} broken /services/* links:`);
  console.log(JSON.stringify(brokenLinks, null, 2));
}
