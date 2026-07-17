const fs = require('fs');
const path = require('path');

const colors = {
  brio: 'fuchsia',
  campix: 'purple',
  caresuite: 'cyan',
  homela: 'amber',
  humanex: 'rose',
  justivon: 'indigo',
  prestivo: 'blue'
};

const products = ['brio', 'campix', 'caresuite', 'homela', 'humanex', 'justivon', 'prestivo'];

for (const prod of products) {
  const filePath = path.join(process.cwd(), 'app', 'ecosystem', 'platforms-solutions', 'saas-platforms', prod, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Add Star, Quote to lucide-react imports if not there
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+"lucide-react";/s;
  const match = content.match(importRegex);
  if (match) {
    let imports = match[1];
    let hasStar = imports.includes('Star');
    let hasQuote = imports.includes('Quote');
    if (!hasStar) imports += ',\n  Star';
    if (!hasQuote) imports += ',\n  Quote';
    content = content.replace(match[0], `import {\n${imports}\n} from "lucide-react";`);
  }

  // 2. Extract the testimonial section details and replace it
  const sectionRegex = /\{\/\*\s*13\.\s*CLIENT TESTIMONIALS\s*\*\/\}.*?<\/section>/s;
  const sectionMatch = content.match(sectionRegex);
  
  if (sectionMatch) {
    const oldSection = sectionMatch[0];
    
    // Extract smallTag, title, subtitle
    const smallTagMatch = oldSection.match(/<span[^>]*>\s*(.*?)\s*<\/span>/s);
    const titleMatch = oldSection.match(/<h2[^>]*>\s*(.*?)\s*<\/h2>/s);
    const descMatch = oldSection.match(/<p[^>]*text-zinc-400[^>]*>\s*(.*?)\s*<\/p>/s);
    
    const smallTag = smallTagMatch ? smallTagMatch[1].trim() : "CLIENT TESTIMONIALS";
    const title = titleMatch ? titleMatch[1].trim() : "Trusted by Finance Leaders";
    const desc = descMatch ? descMatch[1].trim() : "Read how operating groups automate reconciliation.";

    // Extract the JSON array of testimonials
    const arrayRegex = /\[\s*\{\s*quote:[\s\S]*?\}\s*\]/;
    const arrayMatch = oldSection.match(arrayRegex);
    let quotesArrayStr = arrayMatch ? arrayMatch[0] : "";
    
    // Add avatars if they don't exist
    if (quotesArrayStr && !quotesArrayStr.includes('avatar:')) {
       quotesArrayStr = quotesArrayStr.replace(/role:\s*"([^"]+)"/g, (m, role) => {
         let nameSeed = role.replace(/[^a-zA-Z]/g, '').toLowerCase().substring(0, 8) || "user";
         return `role: "${role}",\n                avatar: "https://i.pravatar.cc/150?u=${nameSeed}"`;
       });
    }

    const c = colors[prod];

    const newSection = `{/* 13. CLIENT TESTIMONIALS (PREMIUM) */}
      <section className="w-full py-24 md:py-32 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-${c}-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-12 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-${c}-500 mb-4 block">
              ${smallTag}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              ${title}
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
              ${desc}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {${quotesArrayStr}.map((t, idx) => (
              <div 
                key={idx} 
                className={\`p-8 md:p-10 bg-[#0c0c0c] border border-zinc-800/80 rounded-[2rem] flex flex-col justify-between relative group hover:border-${c}-500/50 hover:bg-zinc-900/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-${c}-500/10 \${idx === 1 ? 'md:-translate-y-6' : ''}\`}
              >
                {/* Large Quotation Icon Background */}
                <div className="absolute top-6 right-6 text-zinc-800/30 group-hover:text-${c}-500/10 transition-colors pointer-events-none">
                  <Quote size={80} />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1.5 mb-8">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-${c}-500 text-${c}-500" />
                    ))}
                  </div>
                  
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium mb-12">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-zinc-800/50 group-hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-${c}-500/30 transition-colors">
                    <Image 
                      src={t.avatar || 'https://i.pravatar.cc/150?u=fallback'} 
                      alt={t.author} 
                      width={48} 
                      height={48} 
                      className="w-full h-full object-cover" 
                      unoptimized 
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white tracking-wide">{t.author}</div>
                    <div className="text-[10px] text-${c}-400 font-mono tracking-widest uppercase mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>`;

    content = content.replace(sectionRegex, newSection);

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${prod}`);
  } else {
    console.log(`Section not found in ${prod}`);
  }
}
