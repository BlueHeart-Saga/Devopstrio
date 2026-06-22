const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

const policies = [
  'terms-of-service',
  'privacy-policy',
  'gdpr',
  'disclaimer',
  'cookie-policy'
];

policies.forEach(policy => {
  const pageFile = path.join(APP_DIR, policy, 'page.tsx');
  if (fs.existsSync(pageFile)) {
    let content = fs.readFileSync(pageFile, 'utf8');

    // Check if alternates is already defined
    if (!content.includes('alternates:')) {
      console.log(`Processing policy page: ${policy}`);

      // We replace the metadata definition to insert alternates
      const target = `export const metadata: Metadata = {
  title: "${policy.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | Devopstrio",`;

      // Let's find the closing brace of metadata object
      const metaIndex = content.indexOf('export const metadata: Metadata = {');
      if (metaIndex !== -1) {
        let braceCount = 0;
        let closedIndex = -1;
        for (let i = metaIndex; i < content.length; i++) {
          if (content[i] === '{') {
            braceCount++;
          } else if (content[i] === '}') {
            braceCount--;
            if (braceCount === 0) {
              closedIndex = i;
              break;
            }
          }
        }

        if (closedIndex !== -1) {
          // Insert alternates: { canonical: "/policy" } before the closing brace
          const insertPos = closedIndex;
          const canonicalStr = `,\n  alternates: {\n    canonical: "/${policy}"\n  }\n`;
          content = content.slice(0, insertPos) + canonicalStr + content.slice(insertPos);
          fs.writeFileSync(pageFile, content, 'utf8');
        }
      }
    }
  }
});

console.log('Policies SEO injection completed successfully!');
