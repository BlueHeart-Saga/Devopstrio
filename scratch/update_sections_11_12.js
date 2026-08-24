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

  // Match Section 11 (Customization & Integration)
  const sec11Regex = /\{\/\*\s*11\.\s*WHY.*?\*\/\}.*?(?=\{\/\*\s*12\.\s*SECURITY)/s;
  // Match Section 12 (Security)
  const sec12Regex = /\{\/\*\s*12\.\s*SECURITY.*?\*\/\}.*?<\/section>/s;

  const match11 = content.match(sec11Regex);
  const match12 = content.match(sec12Regex);

  const c = colors[prod];

  // We need to parse existing content to keep text intact if possible.
  let tag11 = "EXTENSIBILITY";
  let title11 = "Customization & Personalization";
  let desc11 = "Setup custom branding and gateway routing rules.";
  let listItems11Str = `["Branded Checkout Sheets", "Custom Payout Splits", "Local Currency Profiles"]`;
  
  if (match11) {
    const tMatch = match11[0].match(/<span[^>]*>([\s\S]*?)<\/span>/);
    if (tMatch) tag11 = tMatch[1].trim();
    
    const hMatch = match11[0].match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    if (hMatch) title11 = hMatch[1].trim();
    
    const pMatch = match11[0].match(/<p[^>]*text-zinc-400[^>]*>([\s\S]*?)<\/p>/);
    if (pMatch) desc11 = pMatch[1].trim();
    
    const arrMatch = match11[0].match(/\[\s*"[^\]]+\]/s);
    if (arrMatch) {
       listItems11Str = arrMatch[0];
    }
  }

  let tag12 = "COMPLIANCE & ARCHITECTURE";
  let title12 = "Security & Compliance";
  let desc12 = "High-security compliance.";
  let secItems12Str = `[]`;
  
  if (match12) {
    const tMatch = match12[0].match(/<span[^>]*>([\s\S]*?)<\/span>/);
    if (tMatch) tag12 = tMatch[1].trim();
    
    // Some titles use h2, some use h3 in different products
    const hMatch = match12[0].match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/);
    if (hMatch) title12 = hMatch[1].trim();
    
    const pMatch = match12[0].match(/<p[^>]*text-zinc-400[^>]*>([\s\S]*?)<\/p>/);
    if (pMatch) desc12 = pMatch[1].trim();
    
    const arrMatch = match12[0].match(/\[\s*\{[\s\S]*?\}\s*\]/);
    if (arrMatch) {
       secItems12Str = arrMatch[0];
       let imgIndex = 0;
       const images = [
         "/assets/common/09ff7846bc8c9998745688779c09f88d-1.png",
         "/assets/common/1b065043b6959827c05a0073c93a4a53-1.png",
         "/assets/common/260b761ad40c3ad2acba2c6666894539-1.png",
         "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.png"
       ];
       secItems12Str = secItems12Str.replace(/(\}\s*(,|\]))/g, (m, p1, p2) => {
         const ret = `, image: "${images[imgIndex % 4]}" ` + m;
         imgIndex++;
         return ret;
       });
    }
  }

  const newSection11 = `{/* 11. WHY ${prod.toUpperCase()}, CUSTOMIZATION & INTEGRATION (PREMIUM) */}
      <section className="w-full py-32 bg-black border-b border-zinc-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">
            
            {/* Left Column: Text & List */}
            <div className="lg:w-5/12 flex flex-col items-start text-left lg:sticky lg:top-32">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-${c}-400 mb-4 block">
                  ${tag11}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
                  ${title11}
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium mb-10">
                  ${desc11}
                </p>
                
                <ul className="space-y-6">
                  {${listItems11Str}.map((txt, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm md:text-base text-zinc-300 font-bold">
                      <div className="w-6 h-6 rounded-full bg-${c}-500/10 border border-${c}-500/30 flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-${c}-500/20">
                        <Check className="w-3.5 h-3.5 text-${c}-400" />
                      </div>
                      <span className="leading-relaxed">{txt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right Column: 3D Flip Cards Grid */}
            <div className="lg:w-7/12 w-full">
              <Reveal className="mb-6">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-${c}-400 mb-2 block">
                  CONNECTIVITY
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Enterprise Ecosystem Connectors
                </h3>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {integrations.map((int, i) => {
                  const icons = [UserPlus, Activity, Briefcase, Globe];
                  const images = [
                    "/assets/common/1b065043b6959827c05a0073c93a4a53-1.png",
                    "/assets/common/260b761ad40c3ad2acba2c6666894539-1.png",
                    "/assets/common/315e4fdc6263bfd240f36297e376576e-1.png",
                    "/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.png"
                  ];
                  const Icon = icons[i % 4];
                  return (
                    <Reveal key={i} delay={i * 0.1}>
                      <div className="group relative h-[260px] md:h-[280px] [perspective:1000px] cursor-pointer">
                        <div className="absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          
                          {/* Front Face */}
                          <div className="absolute inset-0 w-full h-full flex flex-col justify-start bg-black border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-6 shadow-sm [backface-visibility:hidden] transition-colors">
                            <div className="w-12 h-12 mb-5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-${c}-400">
                              <Icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg text-zinc-100 mb-3">
                              {int.title}
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed flex-1 font-medium">
                              {int.desc}
                            </p>
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-${c}-500 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                              View Integration <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>

                          {/* Back Face */}
                          <div className="absolute inset-0 w-full h-full flex flex-col rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-${c}-500/30">
                            <img src={images[i % 4]} alt={int.title} className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 flex flex-col justify-end p-6">
                              <div className="w-10 h-10 mb-4 rounded-full bg-${c}-500/20 backdrop-blur-md border border-${c}-500/40 flex items-center justify-center text-${c}-400">
                                <Icon size={18} strokeWidth={2} />
                              </div>
                              <h3 className="font-bold text-lg text-white mb-2">{int.title}</h3>
                              <div className="inline-flex items-center gap-2 text-xs font-bold text-${c}-400">
                                Explore Capabilities <ArrowUpRight size={14} />
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
`;

  const newSection12 = `{/* 12. SECURITY & DATA PRIVACY (PREMIUM) */}
      <section className="relative w-full py-24 bg-black text-white overflow-hidden border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-${c}-400 mb-4 block">
                ${tag12}
              </span>
            </Reveal>
            <Reveal>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                ${title12}
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-zinc-400 text-sm leading-relaxed font-bold">
                ${desc12}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {${secItems12Str}.map((sec, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="relative rounded-[24px] border border-zinc-800/80 bg-black p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-${c}-500/50 min-h-[380px]">
                  
                  {/* Expanding Image Layer with Glassmorphism */}
                  <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                    <img src={sec.image || '/assets/common/09ff7846bc8c9998745688779c09f88d-1.png'} alt={sec.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-40" />
                    <div className="absolute inset-0 bg-${c}-950/40 backdrop-blur-md" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-${c}-900/10 border border-${c}-500/10 rounded-[24px]" />
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-${c}-500/10 border border-${c}-500/30 flex items-center justify-center text-${c}-400 shrink-0 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <sec.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-4 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                        {sec.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-medium group-hover:text-zinc-300 transition-colors duration-500">
                        {sec.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
`;

  if (match11 && match12) {
    content = content.replace(sec11Regex, newSection11 + "\\n\\n");
    content = content.replace(sec12Regex, newSection12 + "\\n\\n");
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated Sections 11 & 12 in ${prod}`);
  } else {
    console.log(`Sections not found or mismatched in ${prod}`);
  }
}
