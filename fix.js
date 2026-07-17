const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('page.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./app/ecosystem/technology-stack');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  content = content.replace(/<h2 className=\"([^\"]+) uppercase\"/g, '<h2 className=\"$1\"');
  content = content.replace(/<h2 className=\"([^\"]+) uppercase ([^\"]+)\"/g, '<h2 className=\"$1 $2\"');
  
  // also fix if the user meant dropping text-xl to something else, wait.
  // The prompt said: "this page all section header size make as our themeheader like redesign it"
  // CoreServices theme header is: text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white
  // Which is what we already have, minus the uppercase.

  if (original !== content) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
