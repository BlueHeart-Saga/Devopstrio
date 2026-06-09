"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#030303] text-zinc-450 pt-20 pb-8 relative overflow-hidden font-sans border-t border-zinc-900/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* MIDDLE ROW: 4-Column Mega Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-20">
          
          {/* Col 1: Core Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 tracking-wide uppercase">Core Services</h4>
            <ul className="flex flex-col gap-3.5 text-xs text-zinc-400">
              <li><Link href="/services/ai-data-innovation" className="hover:text-rose-500 transition-colors">AI & Data Innovation</Link></li>
              <li><Link href="/services/cloud-services" className="hover:text-rose-500 transition-colors">Cloud Strategy & Infrastructure</Link></li>
              <li><Link href="/services/devops-automation" className="hover:text-rose-500 transition-colors">DevOps & Automation</Link></li>
              <li><Link href="/services/software-development" className="hover:text-rose-500 transition-colors">Software Product Engineering</Link></li>
              <li><Link href="/services/qa-testing" className="hover:text-rose-500 transition-colors">Quality Engineering & Testing</Link></li>
              <li><Link href="/services/it-consulting" className="hover:text-rose-500 transition-colors">IT Consulting & Enterprise Architecture</Link></li>
            </ul>
          </div>

          {/* Col 2: Target Industries */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 tracking-wide uppercase">Industries</h4>
            <ul className="flex flex-col gap-3.5 text-xs text-zinc-400">
              <li><Link href="/industries/banking-finance" className="hover:text-rose-500 transition-colors">Banking & Finance</Link></li>
              <li><Link href="/industries/healthcare-life-sciences" className="hover:text-rose-500 transition-colors">Healthcare & Life Sciences</Link></li>
              <li><Link href="/industries/retail-ecommerce" className="hover:text-rose-500 transition-colors">Retail & E-Commerce</Link></li>
              <li><Link href="/industries/manufacturing" className="hover:text-rose-500 transition-colors">Manufacturing & IIoT</Link></li>
              <li><Link href="/industries/telecommunications" className="hover:text-rose-500 transition-colors">Telecommunications</Link></li>
              <li><Link href="/industries/media-entertainment" className="hover:text-rose-500 transition-colors">Media & Entertainment</Link></li>
              <li><Link href="/industries/education" className="hover:text-rose-500 transition-colors">Education & e-Learning</Link></li>
              <li><Link href="/industries/government-public-sector" className="hover:text-rose-500 transition-colors">Government & Public Sector</Link></li>
            </ul>
          </div>

          {/* Col 3: Enterprise Ecosystem */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 tracking-wide uppercase">Ecosystem & Insights</h4>
            <ul className="flex flex-col gap-3.5 text-xs text-zinc-400">
              <li><Link href="/ecosystem/partnerships" className="hover:text-rose-500 transition-colors">Strategic Partnerships</Link></li>
              <li><Link href="/ecosystem/innovation-labs" className="hover:text-rose-500 transition-colors">R&D Innovation Labs</Link></li>
              <li><Link href="/ecosystem/platforms-solutions" className="hover:text-rose-500 transition-colors">Platforms & Solutions</Link></li>
              <li><Link href="/ecosystem/technology-stack" className="hover:text-rose-500 transition-colors">Technology Stack</Link></li>
              <li><Link href="/ecosystem/global-delivery" className="hover:text-rose-500 transition-colors">Global Delivery Network</Link></li>
              <li><Link href="/ecosystem/engineering-excellence" className="hover:text-rose-500 transition-colors">Engineering Excellence</Link></li>
              <li><Link href="/ecosystem/accelerators-frameworks" className="hover:text-rose-500 transition-colors">Accelerators & Frameworks</Link></li>
              <li><Link href="/insights" className="hover:text-rose-500 transition-colors">Insights Hub & Blog</Link></li>
            </ul>
          </div>

          {/* Col 4: Corporate & Newsletter */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">Company</h4>
              <ul className="flex flex-col gap-3 text-xs text-zinc-400">
                <li><Link href="/about" className="hover:text-rose-500 transition-colors">About Devopstrio</Link></li>
                <li><Link href="/careers" className="hover:text-rose-500 transition-colors">Careers & Culture</Link></li>
                <li><Link href="/about#locations" className="hover:text-rose-500 transition-colors">Office Locations</Link></li>
                <li><Link href="/contact" className="hover:text-rose-500 transition-colors">Contact Sales</Link></li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-[13px] font-bold text-white mb-3 tracking-wide uppercase">Newsletter</h4>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                Subscribe to our newsletter for the latest tech insights and company updates.
              </p>
              <form onSubmit={handleSubmit} className="flex relative w-full border border-zinc-900 rounded-xl bg-[#0a0a0a] focus-within:border-zinc-800 transition-colors overflow-hidden">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="flex-grow bg-transparent px-4 py-3 text-xs text-white focus:outline-none placeholder:text-zinc-650"
                />
                <button
                  type="submit"
                  className="px-4 border-l border-zinc-900 flex items-center justify-center text-zinc-500 hover:text-rose-500 hover:bg-zinc-950 transition-colors"
                  aria-label="Subscribe"
                >
                  <ChevronRight size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM MID ROW: Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-zinc-900 mb-6">
          <Link href="/" className="flex items-center gap-3 group mb-6 md:mb-0">
            <img src="/assets/logo/logo.png" alt="Devopstrio" className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110" />
            <span className="text-[17px] font-bold text-white tracking-wide">Devopstrio</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">LINKEDIN</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">FACEBOOK</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">INSTAGRAM</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">YOUTUBE</a>
          </div>
        </div>

        {/* BOTTOM MOST ROW: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-xs text-zinc-500 font-medium pb-2">
          <span>Copyright © 2026 Devopstrio Limited</span>
          <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
            <Link href="/contact" className="hover:text-zinc-350 transition-colors">Contact Us</Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-zinc-350 transition-colors">Disclaimer</Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-zinc-350 transition-colors">Privacy Statement</Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-zinc-350 transition-colors">Terms of use</Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-zinc-350 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
