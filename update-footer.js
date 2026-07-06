const fs = require('fs');
let content = fs.readFileSync('components/Footer.tsx', 'utf8');

// 1. Update the columns wrapper classes
content = content.replace(/<ul className="flex flex-col gap-3 text-xs text-zinc-400 font-medium">/g, '<ul className="flex flex-col gap-3.5 text-[13px] text-zinc-400 font-semibold tracking-wide">');

// 2. Update the Link classes inside the columns
content = content.replace(/className="hover:text-rose-500 transition-colors"/g, 'className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"');
content = content.replace(/className="hover:text-rose-500 transition-colors font-semibold text-zinc-300"/g, 'className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-zinc-300"');

// 3. Update Social Links
const oldSocials = `<div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
            <a
              href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
              title="LinkedIn"
            >
              <img src="/assets/social-icons/linkedin.svg" alt="LinkedIn" className="w-7 h-7 object-contain transition-all duration-200" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579126233218"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
              title="Facebook"
            >
              <img src="/assets/social-icons/facebook.svg" alt="Facebook" className="w-7 h-7 object-contain transition-all duration-200" />
            </a>
            <a
              href="https://www.instagram.com/devopstrio_offcl/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
              title="Instagram"
            >
              <img src="/assets/social-icons/instagram.svg" alt="Instagram" className="w-7 h-7 object-contain transition-all duration-200" />
            </a>
            <a
              href="https://www.youtube.com/@Devopstrioltd"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
              title="YouTube"
            >
              <img src="/assets/social-icons/youtube.svg" alt="YouTube" className="w-7 h-7 object-contain transition-all duration-200" />
            </a>
          </div>`;

const newSocials = `{/* 
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
            <a href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110" title="LinkedIn">
              <img src="/assets/social-icons/linkedin.svg" alt="LinkedIn" className="w-7 h-7 object-contain transition-all duration-200" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579126233218" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110" title="Facebook">
              <img src="/assets/social-icons/facebook.svg" alt="Facebook" className="w-7 h-7 object-contain transition-all duration-200" />
            </a>
            <a href="https://www.instagram.com/devopstrio_offcl/" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110" title="Instagram">
              <img src="/assets/social-icons/instagram.svg" alt="Instagram" className="w-7 h-7 object-contain transition-all duration-200" />
            </a>
            <a href="https://www.youtube.com/@Devopstrioltd" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110" title="YouTube">
              <img src="/assets/social-icons/youtube.svg" alt="YouTube" className="w-7 h-7 object-contain transition-all duration-200" />
            </a>
          </div>
          */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
            <a
              href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579126233218"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/devopstrio_offcl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@Devopstrioltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors duration-300"
            >
              YouTube
            </a>
          </div>`;

content = content.replace(oldSocials, newSocials);

// 4. Update Legal Links
const oldLegal = `<div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-xs text-zinc-500 font-medium">
          <a href="/disclaimer" className="hover:text-zinc-350 transition-colors">Disclaimer</a>
          <span>•</span>
          <a href="/privacy-policy" className="hover:text-zinc-350 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="/terms-of-service" className="hover:text-zinc-350 transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="/cookie-policy" className="hover:text-zinc-350 transition-colors">Cookie Policy</a>
          <span>•</span>
          <a href="/gdpr" className="hover:text-zinc-350 transition-colors">GDPR Compliance</a>
          <span>•</span>
          <a href="/sitemap" className="hover:text-zinc-350 transition-colors">Sitemap</a>
        </div>`;

const newLegal = `<div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-[10px] font-bold tracking-widest uppercase text-zinc-500">
          <a href="/disclaimer" className="hover:text-white transition-colors duration-300">Disclaimer</a>
          <span className="text-zinc-800">•</span>
          <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <span className="text-zinc-800">•</span>
          <a href="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          <span className="text-zinc-800">•</span>
          <a href="/cookie-policy" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          <span className="text-zinc-800">•</span>
          <a href="/gdpr" className="hover:text-white transition-colors duration-300">GDPR Compliance</a>
          <span className="text-zinc-800">•</span>
          <a href="/sitemap" className="hover:text-white transition-colors duration-300">Sitemap</a>
        </div>`;

content = content.replace(oldLegal, newLegal);

fs.writeFileSync('components/Footer.tsx', content, 'utf8');
console.log('Footer updated successfully');
