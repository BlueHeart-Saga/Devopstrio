const fs = require('fs');
const path = require('path');

const products = ['brio', 'campix', 'caresuite', 'homela', 'humanex', 'justivon', 'prestivo'];

for (const prod of products) {
  const filePath = path.join(process.cwd(), 'app', 'ecosystem', 'platforms-solutions', 'saas-platforms', prod, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // The section comment usually matches 4. HOW IT WORKS (STEP BY STEP)
  // Let's use a slightly more flexible regex just in case
  const sectionRegex = /\{\/\*\s*4\.\s*HOW IT WORKS.*?<\/section>/s;
  
  if (sectionRegex.test(content)) {
    const newSection = `{/* 4. HOW IT WORKS (STEP BY STEP) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Copy and CTA */}
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                How it works
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Get up and running in minutes. No steep learning curve, no complex setup — just a clear path from zero to productive.
              </p>
              
              <button className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-colors mb-8 shadow-lg shadow-white/10">
                GET STARTED
              </button>
              
              <p className="text-sm text-zinc-500 font-medium">
                Need a custom plan for large teams? <Link href="/contact" className="text-white hover:underline">Contact us</Link>.
              </p>
            </div>

            {/* Right Side: Vertical Steps */}
            <div className="flex flex-col gap-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 md:gap-8 items-start group">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white text-black font-bold flex items-center justify-center text-lg mt-1 group-hover:scale-110 transition-transform shadow-lg shadow-white/5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>`;

    content = content.replace(sectionRegex, newSection);

    fs.writeFileSync(filePath, content);
    console.log(`Updated HOW IT WORKS in ${prod}`);
  } else {
    console.log(`Section not found in ${prod}`);
  }
}
