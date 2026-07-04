const fs = require('fs');
const path = require('path');

const directories = [
  'c:/Sagadevan/Devopstrio/app/ecosystem/partnerships',
  'c:/Sagadevan/Devopstrio/sections/ecosystem/partnerships'
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Fix Eyebrows (Section Taglines)
  // Usually starts with text-[10px] or text-[11px] and has text-rose-500
  content = content.replace(/<span className="text-\[(?:10|11)px\][^"]*text-rose-500[^"]*">/g, 
    '<span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">');

  // 2. Fix Section Headings (h2)
  // Catch the common specific ecosystem h2 tags and variations
  content = content.replace(/<h2 className="text-2xl md:text-3xl xl:text-4xl[^"]*">/g, 
    '<h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">');
  
  content = content.replace(/<h2 className="text-xl md:text-2xl xl:text-3xl[^"]*">/g, 
    '<h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">');
    
  // also catch other variations like lg:text-4xl etc in Microsoft
  content = content.replace(/<h2 className="text-2xl md:text-3xl lg:text-4xl[^"]*">/g, 
    '<h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">');

  // 3. Fix Section Descriptions
  content = content.replace(/<p className="text-zinc-[34]00 text-sm md:text-base[^"]*">/g,
    '<p className="text-zinc-400 text-base md:text-lg leading-relaxed">');
  content = content.replace(/<p className="text-zinc-350 text-sm md:text-base[^"]*">/g,
    '<p className="text-zinc-400 text-base md:text-lg leading-relaxed">');
  content = content.replace(/<p className="text-zinc-400 text-xs sm:text-sm md:text-base[^"]*">/g,
    '<p className="text-zinc-400 text-base md:text-lg leading-relaxed">');
  content = content.replace(/<p className="text-zinc-200 text-base md:text-lg font-medium leading-relaxed">/g,
    '<p className="text-zinc-400 text-base md:text-lg leading-relaxed">');
  
  // Specific for aws/page.tsx
  content = content.replace(/<p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">/g,
    '<p className="text-zinc-400 text-base md:text-lg leading-relaxed">');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

directories.forEach(processDirectory);
console.log('Done!');
