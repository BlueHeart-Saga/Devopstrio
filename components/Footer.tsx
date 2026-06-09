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
    <footer className="w-full bg-[#030303] text-zinc-400 pt-16 pb-8 relative overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
       

        {/* MIDDLE ROW: 4-Column Mega Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-20">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-10">
            {/* AI Tools Links (No bold heading in image) */}
            <ul className="flex flex-col gap-4 text-sm text-zinc-400">
              <li><Link href="/services/ai-data-innovation" className="hover:text-white transition-colors">AI & Data Innovation</Link></li>
              <li><Link href="/services/ai-data-innovation#generative-ai-solutions" className="hover:text-white transition-colors">Generative AI Solutions</Link></li>
              <li><Link href="/services/data-engineering" className="hover:text-white transition-colors">Data Engineering</Link></li>
              <li><Link href="/services/data-engineering#data-platform-development" className="hover:text-white transition-colors">Database Management</Link></li>
              <li><Link href="/services/ai-data-innovation" className="hover:text-white transition-colors">Hire AI Engineers</Link></li>
            </ul>
            {/* Cloud & Security Block */}
            <div>
              <h4 className="text-[15px] font-bold text-white mb-6 tracking-wide">Cloud & Security</h4>
              <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                <li><Link href="/services/devops-automation#cicd-implementation" className="hover:text-white transition-colors">CI/CD Pipeline</Link></li>
                <li><Link href="/services/cloud-services#cloud-migration" className="hover:text-white transition-colors">Cloud Migration</Link></li>
                <li><Link href="/services/devops-automation" className="hover:text-white transition-colors">DevOps Consulting</Link></li>
                <li><Link href="/services/devops-automation#infrastructure-as-code" className="hover:text-white transition-colors">Infrastructure as Code</Link></li>
                <li><Link href="/services/devops-automation#kubernetes-services" className="hover:text-white transition-colors">Kubernetes Solutions</Link></li>
                <li><Link href="/services/cloud-services#cloud-security" className="hover:text-white transition-colors">Cloud Security</Link></li>
                <li><Link href="/services/digital-transformation" className="hover:text-white transition-colors">Digital Transformation</Link></li>
                <li><Link href="/services/it-consulting" className="hover:text-white transition-colors">IT Strategy & Consulting</Link></li>
                <li><Link href="/services/cybersecurity#penetration-testing" className="hover:text-white transition-colors">Penetration Testing</Link></li>
                <li><Link href="/services/cybersecurity" className="hover:text-white transition-colors">Security Management</Link></li>
                <li><Link href="/services/cybersecurity#soc" className="hover:text-white transition-colors">Security Ops Center (SOC)</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-10">
            {/* Industries Links */}
            <ul className="flex flex-col gap-4 text-sm text-zinc-400">
              <li><Link href="/industries" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Logistics</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Media & Entertainment</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Retail & E-commerce</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">SaaS Applications</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Telecom</Link></li>
            </ul>
            {/* Applications Block */}
            <div>
              <h4 className="text-[15px] font-bold text-white mb-6 tracking-wide">Applications</h4>
              <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                <li><Link href="/services/software-development" className="hover:text-white transition-colors">Enterprise Systems</Link></li>
                <li><Link href="/services/software-development#mobile-application-development" className="hover:text-white transition-colors">Mobile App Development</Link></li>
                <li><Link href="/services/software-development#saas-product-development" className="hover:text-white transition-colors">SaaS Product Development</Link></li>
                <li><Link href="/services/software-development#web-application-development" className="hover:text-white transition-colors">Web Application Development</Link></li>
                <li><Link href="/services/software-development#api-development-integration" className="hover:text-white transition-colors">API & Microservices</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-10">
            {/* Insights / About Links */}
            <ul className="flex flex-col gap-4 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Celebrations</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Client Transformations</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Team Culture</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Values</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">White Papers</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-10">
            {/* Global Presence */}
            <div>
              <h4 className="text-[15px] font-bold text-white mb-6 tracking-wide">Global Presence</h4>
              <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                <li className="hover:text-white transition-colors">London - Head Office</li>
                <li className="hover:text-white transition-colors">Tennessee - Sub-Regional Office</li>
                <li className="hover:text-white transition-colors">Bengaluru - Corporate Office</li>
                <li className="hover:text-white transition-colors">Chennai - Sub-Regional Office</li>
                <li className="hover:text-white transition-colors">Thoothukudi - Sub-Regional Office</li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-[15px] font-bold text-white mb-6 tracking-wide">Newsletter</h4>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Subscribe to our newsletter for the latest tech insights and company updates.
              </p>
              <form onSubmit={handleSubmit} className="flex relative w-full border border-zinc-800 rounded-lg bg-[#0a0a0a] focus-within:border-zinc-700 transition-colors overflow-hidden">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="flex-grow bg-transparent px-4 py-3.5 text-sm text-white focus:outline-none placeholder:text-zinc-600"
                />
                <button
                  type="submit"
                  className="px-5 border-l border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors"
                  aria-label="Subscribe"
                >
                  <ChevronRight size={16} />
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
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[13px] font-bold tracking-widest text-white">
            <a href="#" className="hover:text-rose-500 transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-rose-500 transition-colors">FACEBOOK</a>
            <a href="#" className="hover:text-rose-500 transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-rose-500 transition-colors">YOUTUBE</a>
          </div>
        </div>

        {/* BOTTOM MOST ROW: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-[13px] text-zinc-500 font-medium pb-2">
          <span>Copyright © 2026 Devopstrio Limited</span>
          <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Contact Us</Link>
            <span>/</span>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Disclaimer</Link>
            <span>/</span>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy Statement</Link>
            <span>/</span>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Terms of use</Link>
            <span>/</span>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
