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
    <footer className="w-full bg-[#030303] text-zinc-550 pt-24 pb-12 relative overflow-hidden font-sans border-t border-zinc-900/60">
      {/* Background Glows for visual depth */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-0 left-[20%] w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* 6-Column Mega Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 mb-20">
          
          {/* Col 1: Brand Intro & Newsletter */}
          <div className="flex flex-col gap-6">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
                <img 
                  src="/assets/logo/logo.png" 
                  alt="Devopstrio logo" 
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105" 
                />
                <span className="text-[20px] font-bold text-white tracking-tight">
                  Devopstrio
                </span>
              </Link>
              <p className="text-xs text-zinc-405 font-medium leading-relaxed">
                Devopstrio is a global technology consulting and co-engineering partner, building compliant, cloud-native enterprise runtimes.
              </p>
            </div>
            
            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-[10px] font-bold text-white mb-2 tracking-wider uppercase">Subscribe</h4>
              <form onSubmit={handleSubmit} className="flex relative w-full border border-white/5 rounded-xl bg-zinc-950/40 focus-within:border-rose-500/40 focus-within:shadow-[0_0_15px_rgba(225,29,72,0.05)] transition-all duration-300 overflow-hidden backdrop-blur-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-grow bg-transparent px-3 py-2.5 text-xs text-white focus:outline-none placeholder:text-zinc-650 min-w-0"
                />
                <button
                  type="submit"
                  className="px-3 border-l border-white/5 flex items-center justify-center text-zinc-500 hover:text-rose-500 hover:bg-zinc-950 transition-colors"
                  aria-label="Subscribe"
                >
                  <ChevronRight size={14} />
                </button>
              </form>
            </div>
          </div>

          {/* Col 2: Services / Practice Areas */}
          <div>
            <h4 className="text-[11px] font-bold text-white mb-6 tracking-wider uppercase">Practice Areas</h4>
            <ul className="flex flex-col gap-3 text-xs text-zinc-400 font-medium">
              <li><Link href="/services/ai-data-innovation" className="hover:text-rose-500 transition-colors">AI & Data Innovation</Link></li>
              <li><Link href="/services/cloud-services" className="hover:text-rose-500 transition-colors">Cloud Services</Link></li>
              <li><Link href="/services/devops-automation" className="hover:text-rose-500 transition-colors">DevOps & Automation</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-rose-500 transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services/software-development" className="hover:text-rose-500 transition-colors">Software Development</Link></li>
              <li><Link href="/services/digital-transformation" className="hover:text-rose-500 transition-colors">Digital Transformation</Link></li>
              <li><Link href="/services/data-engineering" className="hover:text-rose-500 transition-colors">Data Engineering</Link></li>
              <li><Link href="/services/managed-services" className="hover:text-rose-500 transition-colors">Managed Services</Link></li>
              <li><Link href="/services/qa-testing" className="hover:text-rose-500 transition-colors">QA & Testing</Link></li>
              <li><Link href="/services/it-consulting" className="hover:text-rose-500 transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-[11px] font-bold text-white mb-6 tracking-wider uppercase">Industries</h4>
            <ul className="flex flex-col gap-3 text-xs text-zinc-400 font-medium">
              <li><Link href="/industries/banking-finance" className="hover:text-rose-500 transition-colors">Banking & Finance</Link></li>
              <li><Link href="/industries/healthcare-life-sciences" className="hover:text-rose-500 transition-colors">Healthcare & Life Sciences</Link></li>
              <li><Link href="/industries/retail-ecommerce" className="hover:text-rose-500 transition-colors">Retail & E-Commerce</Link></li>
              <li><Link href="/industries/manufacturing" className="hover:text-rose-500 transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/telecommunications" className="hover:text-rose-500 transition-colors">Telecommunications</Link></li>
              <li><Link href="/industries/media-entertainment" className="hover:text-rose-500 transition-colors">Media & Entertainment</Link></li>
              <li><Link href="/industries/education" className="hover:text-rose-500 transition-colors">Education</Link></li>
              <li><Link href="/industries/government-public-sector" className="hover:text-rose-500 transition-colors">Government & Public Sector</Link></li>
            </ul>
          </div>

          {/* Col 4: Ecosystem */}
          <div>
            <h4 className="text-[11px] font-bold text-white mb-6 tracking-wider uppercase">Ecosystem</h4>
            <ul className="flex flex-col gap-3 text-xs text-zinc-400 font-medium">
              <li><Link href="/ecosystem/partnerships" className="hover:text-rose-500 transition-colors">Strategic Partnerships</Link></li>
              <li><Link href="/ecosystem/innovation-labs" className="hover:text-rose-500 transition-colors">R&D Innovation Labs</Link></li>
              <li><Link href="/ecosystem/platforms-solutions" className="hover:text-rose-500 transition-colors">Platforms & Solutions</Link></li>
              <li><Link href="/ecosystem/technology-stack" className="hover:text-rose-500 transition-colors">Technology Stack</Link></li>
              <li><Link href="/ecosystem/global-delivery" className="hover:text-rose-500 transition-colors">Global Delivery</Link></li>
              <li><Link href="/ecosystem/engineering-excellence" className="hover:text-rose-500 transition-colors">Engineering Excellence</Link></li>
              <li><Link href="/ecosystem/accelerators-frameworks" className="hover:text-rose-500 transition-colors">Accelerators & Frameworks</Link></li>
            </ul>
          </div>

          {/* Col 5: Insights & Events */}
          <div>
            <h4 className="text-[11px] font-bold text-white mb-6 tracking-wider uppercase">Insights & Events</h4>
            <ul className="flex flex-col gap-3 text-xs text-zinc-400 font-medium">
              <li><Link href="/insights" className="hover:text-rose-500 transition-colors font-semibold text-zinc-300">Insights Hub</Link></li>
              <li><Link href="/insights/blogs" className="hover:text-rose-500 transition-colors">Blogs</Link></li>
              <li><Link href="/insights/case-studies" className="hover:text-rose-500 transition-colors">Case Studies</Link></li>
              <li><Link href="/insights/white-paper" className="hover:text-rose-500 transition-colors">White Paper</Link></li>
              <li><Link href="/insights/awards-milestones" className="hover:text-rose-500 transition-colors">Awards & Milestones</Link></li>
              <li><Link href="/insights/industry-events" className="hover:text-rose-500 transition-colors">Industry Events</Link></li>
              <li><Link href="/insights/celebrations" className="hover:text-rose-500 transition-colors">Celebrations</Link></li>
              <li><Link href="/insights/team-culture" className="hover:text-rose-500 transition-colors">Team Culture</Link></li>
              <li><Link href="/insights/client-transformations" className="hover:text-rose-500 transition-colors">Client Transformations</Link></li>
              <li><Link href="/insights/impact-metrics" className="hover:text-rose-500 transition-colors">Impact Metrics</Link></li>
            </ul>
          </div>

          {/* Col 6: Company */}
          <div>
            <h4 className="text-[11px] font-bold text-white mb-6 tracking-wider uppercase">Company</h4>
            <ul className="flex flex-col gap-3 text-xs text-zinc-400 font-medium">
              <li><Link href="/about/company-overview" className="hover:text-rose-500 transition-colors">Company Overview</Link></li>
              <li><Link href="/about/leadership-team" className="hover:text-rose-500 transition-colors">Leadership & Team</Link></li>
              <li><Link href="/about/life-at-devopstrio" className="hover:text-rose-500 transition-colors">Life at Devopstrio</Link></li>
              <li><Link href="/about/global-presence" className="hover:text-rose-500 transition-colors">Global Presence</Link></li>
              <li><Link href="/about/partnerships-certifications" className="hover:text-rose-500 transition-colors">Partnerships & Certifications</Link></li>
              <li><Link href="/about/awards-recognition" className="hover:text-rose-500 transition-colors">Awards & Recognition</Link></li>
              <li><Link href="/about/sustainability-csr" className="hover:text-rose-500 transition-colors">Sustainability & CSR</Link></li>
              <li><Link href="/about/testimonials" className="hover:text-rose-500 transition-colors">Testimonials & Success</Link></li>
              <li><Link href="/about/customer-support" className="hover:text-rose-500 transition-colors">Customer Support</Link></li>
              <li><Link href="/contact" className="hover:text-rose-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-b border-zinc-900/60 mb-8 gap-6">
          <span className="text-xs text-zinc-500 font-medium tracking-wide">
            Copyright © 2026 Devopstrio Limited. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">LINKEDIN</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">FACEBOOK</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">INSTAGRAM</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">YOUTUBE</a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-xs text-zinc-500 font-medium">
          <Link href="/disclaimer" className="hover:text-zinc-350 transition-colors">Disclaimer</Link>
          <span>•</span>
          <Link href="/privacy-policy" className="hover:text-zinc-350 transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/terms-of-service" className="hover:text-zinc-350 transition-colors">Terms of Service</Link>
          <span>•</span>
          <Link href="/cookie-policy" className="hover:text-zinc-350 transition-colors">Cookie Policy</Link>
          <span>•</span>
          <Link href="/gdpr" className="hover:text-zinc-350 transition-colors">GDPR Compliance</Link>
          <span>•</span>
          <Link href="/sitemap" className="hover:text-zinc-350 transition-colors">Sitemap</Link>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
