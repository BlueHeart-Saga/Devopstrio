const fs = require('fs');
for (const file of ['scratch/update_sections_11_12.js', 'scratch/update_benefits.js']) {
  let text = fs.readFileSync(file, 'utf8');
  text = text.replace(/\\\$\{/g, '${');
  fs.writeFileSync(file, text);
  console.log(`Fixed ${file}`);
}
