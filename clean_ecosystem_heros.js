const fs = require('fs');
const path = require('path');

const ecosystemDir = path.join(__dirname, 'app', 'ecosystem');

// Function to recursively get all .tsx files
function getTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getTsxFiles(filePath));
    } else if (file.endsWith('.tsx') && !file.includes('[subpage]')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = getTsxFiles(ecosystemDir);

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the hero section block
  let heroStartIndex = content.indexOf('1. HERO SECTION');
  if (heroStartIndex === -1) {
    heroStartIndex = content.indexOf('<section className="relative w-full');
  }
  if (heroStartIndex === -1) return;
  
  // Find the opening <section tag before/around that
  let sectionStart = content.lastIndexOf('<section', heroStartIndex);
  if (sectionStart === -1) {
    sectionStart = content.indexOf('<section', heroStartIndex);
  }
  if (sectionStart === -1) return;
  
  // Find the closing </section> tag
  const sectionEnd = content.indexOf('</section>', sectionStart);
  if (sectionEnd === -1) return;
  
  const heroBlock = content.substring(sectionStart, sectionEnd + '</section>'.length);
  
  // Now let's transform the heroBlock
  // 1. Remove the grid overlay
  let cleanedHeroBlock = heroBlock.replace(/<div className="absolute inset-0 bg-\[linear-gradient[^>]*\/>/g, '');
  cleanedHeroBlock = cleanedHeroBlock.replace(/<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent[^>]*\/>/g, ''); // just in case
  
  // 2. Find the content container inside the hero section
  const contentDivStartRegex = /<div className="max-w-(5xl|7xl)[^>]*>/;
  const match = cleanedHeroBlock.match(contentDivStartRegex);
  if (!match) return;
  
  const contentDivStart = match[0];
  const contentDivStartIdx = cleanedHeroBlock.indexOf(contentDivStart);
  
  // We want to reconstruct the content inside the content container
  const contentInner = cleanedHeroBlock.substring(contentDivStartIdx + contentDivStart.length, cleanedHeroBlock.lastIndexOf('</div>'));
  
  // Let's find all the Reveal blocks in contentInner
  const revealBlocks = [];
  let currentIdx = 0;
  while (true) {
    const revealStart = contentInner.indexOf('<Reveal', currentIdx);
    if (revealStart === -1) break;
    
    const revealEnd = contentInner.indexOf('</Reveal>', revealStart);
    if (revealEnd === -1) break;
    
    const blockText = contentInner.substring(revealStart, revealEnd + '</Reveal>'.length);
    revealBlocks.push(blockText);
    currentIdx = revealEnd + '</Reveal>'.length;
  }
  
  if (revealBlocks.length === 0) return;
  
  let badgeBlock = '';
  let titleBlock = '';
  let subtitleBlock = '';
  let ctaBlock = '';
  
  revealBlocks.forEach(block => {
    if (block.includes('h1') || block.includes('font-black text-white')) {
      titleBlock = block;
    } else if (block.includes('text-zinc-400') || block.includes('text-zinc-350') || block.includes('text-zinc-300') || block.includes('text-xl') || block.includes('leading-relaxed font-bold')) {
      if (titleBlock && !subtitleBlock) {
        subtitleBlock = block;
      }
    } else if (block.includes('href="/contact"') || block.includes('Link') || block.includes('flex flex-wrap justify-center gap-4') || block.includes('flex justify-center gap-4') || block.includes('ArrowUpRight')) {
      ctaBlock = block;
    } else {
      if (!badgeBlock && !titleBlock) {
        badgeBlock = block;
      }
    }
  });
  
  if (!titleBlock) titleBlock = revealBlocks.find(b => b.includes('h1') || b.includes('text-white')) || revealBlocks[1] || '';
  if (!subtitleBlock) subtitleBlock = revealBlocks.find(b => b.includes('text-zinc-400') || b.includes('text-zinc-350') || b.includes('text-zinc-300') || b.includes('max-w-3xl')) || revealBlocks[2] || '';
  if (!badgeBlock) badgeBlock = revealBlocks[0] && revealBlocks[0] !== titleBlock ? revealBlocks[0] : '';
  if (!ctaBlock) ctaBlock = revealBlocks.find(b => b.includes('Link') || b.includes('href="/contact"') || b.includes('ArrowUpRight')) || '';
  
  if (!ctaBlock) {
    ctaBlock = `
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>`;
    
    // Ensure ArrowUpRight is imported
    if (!content.includes('ArrowUpRight')) {
      const lucideImport = content.match(/import\s*\{([^}]*)\}\s*from\s*["']lucide-react["']/);
      if (lucideImport) {
        const importedItems = lucideImport[1].trim();
        const updatedItems = importedItems + (importedItems.endsWith(',') ? '' : ',') + ' ArrowUpRight';
        content = content.replace(lucideImport[0], `import { ${updatedItems} } from "lucide-react"`);
      }
    }
  } else {
    ctaBlock = ctaBlock.replace(/mb-(12|16|10|8)/g, 'mb-0');
  }
  
  // Reconstruct content container body
  const newContentInner = `\n          ${badgeBlock ? badgeBlock + '\n          ' : ''}${titleBlock}\n          ${subtitleBlock}\n          ${ctaBlock}\n        `;
  
  // Reconstruct hero block
  const newHeroBlock = cleanedHeroBlock.substring(0, contentDivStartIdx) + contentDivStart + newContentInner + '</div>\n';
  
  // Replace in the file content
  const newContent = content.substring(0, sectionStart) + newHeroBlock + content.substring(sectionEnd + '</section>'.length);
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('Cleaned:', path.basename(filePath));
});
