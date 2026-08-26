const fs = require('fs');

const content = fs.readFileSync('devopstrio-pages-list.txt', 'utf8');
const lines = content.split('\n');

const links = [];
lines.forEach(line => {
  const match = line.match(/^\s*Link:\s*(\/\S+)/);
  if (match) {
    links.push(match[1]);
  }
});

console.log('Total explicit links in devopstrio-pages-list.txt:', links.length);
