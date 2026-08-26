const fs = require('fs');
const path = require('path');

function getPages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getPages(filePath));
    } else if (file === 'page.tsx' || file === 'page.jsx' || file === 'page.js') {
      const relPath = path.relative('app', filePath).replace(/\\/g, '/');
      let route = '/' + relPath.replace(/\/page\.(tsx|jsx|js)$/, '').replace(/^page\.(tsx|jsx|js)$/, '');
      results.push(route);
    }
  });
  return results;
}

const pages = getPages('app');

const categories = {
  'Core & Corporate': [],
  'Services & Practice Areas': [],
  'Ecosystem & Platforms': [],
  'Industry Verticals': [],
  'Marketing Portal': [],
  'Insights & Research': [],
  'Careers & Contact': [],
  'Legal & Compliance': [],
  'Admin Portal': []
};

pages.forEach(p => {
  if (p === '/' || p.startsWith('/about')) {
    categories['Core & Corporate'].push(p);
  } else if (p.startsWith('/services')) {
    categories['Services & Practice Areas'].push(p);
  } else if (p.startsWith('/ecosystem')) {
    categories['Ecosystem & Platforms'].push(p);
  } else if (p.startsWith('/industries')) {
    categories['Industry Verticals'].push(p);
  } else if (p.startsWith('/marketing')) {
    categories['Marketing Portal'].push(p);
  } else if (p.startsWith('/insights')) {
    categories['Insights & Research'].push(p);
  } else if (p.startsWith('/careers') || p === '/contact') {
    categories['Careers & Contact'].push(p);
  } else if (p.startsWith('/privacy-policy') || p.startsWith('/terms-of-service') || p.startsWith('/cookie-policy') || p.startsWith('/disclaimer') || p.startsWith('/gdpr') || p.startsWith('/sitemap')) {
    categories['Legal & Compliance'].push(p);
  } else if (p.startsWith('/admin')) {
    categories['Admin Portal'].push(p);
  } else {
    console.log('Unclassified:', p);
  }
});

let grandTotal = 0;
for (const [cat, routes] of Object.entries(categories)) {
  console.log(`\n=== ${cat} (${routes.length} pages) ===`);
  routes.sort().forEach(r => console.log('  ' + r));
  grandTotal += routes.length;
}
console.log('\n===================================');
console.log('GRAND TOTAL PAGE ROUTE TEMPLATES:', grandTotal);
