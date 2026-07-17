const fs = require('fs');

const pages = [
  {
    path: 'app/ecosystem/technology-stack/artificial-intelligence/page.tsx',
    titleLine1: 'Pioneering Cognitive <br />',
    titleLine2: 'Frontiers'
  },
  {
    path: 'app/ecosystem/technology-stack/cloud-native/page.tsx',
    titleLine1: 'Architecting Limitless <br />',
    titleLine2: 'Cloud Scale'
  },
  {
    path: 'app/ecosystem/technology-stack/cybersecurity/page.tsx',
    titleLine1: 'Forging Unbreakable <br />',
    titleLine2: 'Digital Trust'
  },
  {
    path: 'app/ecosystem/technology-stack/data-engineering/page.tsx',
    titleLine1: 'Engineering Intelligent <br />',
    titleLine2: 'Data Ecosystems'
  },
  {
    path: 'app/ecosystem/technology-stack/devops-toolchain/page.tsx',
    titleLine1: 'Accelerating Infinite <br />',
    titleLine2: 'Deployment Velocity'
  },
  {
    path: 'app/ecosystem/technology-stack/software-engineering/page.tsx',
    titleLine1: 'Crafting Digital <br />',
    titleLine2: 'Masterpieces'
  }
];

for (const p of pages) {
  let content = fs.readFileSync(p.path, 'utf8');

  // Replace title
  const titleRegex = /title=\{\s*<>\s*[^<]*<br \/>\s*<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">\s*[^<]*\s*<\/span>\s*<\/>\s*\}/m;
  const newTitle = `title={
          <>
            ${p.titleLine1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              ${p.titleLine2}
            </span>
          </>
        }`;
  
  content = content.replace(titleRegex, newTitle);

  fs.writeFileSync(p.path, content, 'utf8');
  console.log('Updated titles in ' + p.path);
}
