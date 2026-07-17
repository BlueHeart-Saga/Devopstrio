const fs = require('fs');
const path = require('path');

const colors = {
  brio: 'fuchsia',
  campix: 'purple',
  caresuite: 'cyan',
  homela: 'amber',
  humanex: 'rose',
  justivon: 'indigo',
  prestivo: 'blue',
  safesign: 'emerald'
};

const products = ['safesign', 'brio', 'campix', 'caresuite', 'homela', 'humanex', 'justivon', 'prestivo'];

for (const prod of products) {
  const filePath = path.join(process.cwd(), 'app', 'ecosystem', 'platforms-solutions', 'saas-platforms', prod, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Match Section 10 (BUSINESS BENEFITS)
  // It starts with `{/* 10. BUSINESS BENEFITS */}` or similar and ends with `</section>`
  const sec10Regex = /\{\/\*\s*10\.\s*BUSINESS BENEFITS.*?\*\/\}.*?<\/section>/s;
  
  const match10 = content.match(sec10Regex);
  
  if (match10) {
    const c = colors[prod];
    
    let tag10 = "INVESTMENT RETURN";
    let title10 = "Measurable Business Benefits";
    let desc10 = "Why transitioning logic saves operating capital.";
    let arrStr = "[]";
    
    const tMatch = match10[0].match(/<span[^>]*>([\s\S]*?)<\/span>/);
    if (tMatch) tag10 = tMatch[1].trim();
    
    const hMatch = match10[0].match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    if (hMatch) title10 = hMatch[1].trim();
    
    const pMatch = match10[0].match(/<p[^>]*text-zinc-400[^>]*>([\s\S]*?)<\/p>/);
    if (pMatch) desc10 = pMatch[1].trim();
    
    const arrMatch = match10[0].match(/\[\s*\{[\s\S]*?\}\s*\]/);
    if (arrMatch) {
       arrStr = arrMatch[0];
    }

    const newSection10 = `{/* 10. BUSINESS BENEFITS (PREMIUM) */}
      <section className="relative w-full py-24 md:py-32 bg-[#030303] border-b border-zinc-900/60 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-${c}-500/50 to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-12 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-${c}-500 mb-4 block">
              ${tag10}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              ${title10}
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
              ${desc10}
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {${arrStr}.map((ben, idx) => (
              <div 
                key={idx} 
                className="group relative flex-1 min-w-[280px] max-w-[400px] p-8 md:p-10 bg-[#0a0a0a] border border-zinc-800/80 rounded-[2rem] overflow-hidden hover:bg-zinc-900/50 transition-colors duration-500 shadow-lg hover:shadow-2xl hover:shadow-${c}-500/10"
              >
                {/* Background Huge Number */}
                <div className="absolute -right-4 -bottom-8 text-8xl md:text-[120px] font-black text-zinc-800/20 group-hover:text-${c}-500/10 transition-colors duration-500 pointer-events-none select-none">
                  0{idx + 1}
                </div>
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-${c}-500/0 via-${c}-500/50 to-${c}-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-${c}-500/10 border border-${c}-500/20 flex items-center justify-center text-${c}-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <span className="font-mono font-bold text-lg">0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-4 tracking-tight group-hover:text-${c}-400 transition-colors duration-300">
                    {ben.title}
                  </h4>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium group-hover:text-zinc-300 transition-colors duration-300">
                    {ben.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>`;

    content = content.replace(sec10Regex, newSection10);
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated Section 10 in ${prod}`);
  } else {
    console.log(`Section 10 not found in ${prod}`);
  }
}
