"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUp } from "lucide-react";
import CategoryPopup from "@/components/CategoryPopup";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsPopupOpen(true);
    }
  };

  return (
    <footer className="w-full bg-[#030303] text-zinc-550 pt-20 pb-12 relative font-sans mt-24">
      {/* Premium Dual-Line White Top Border */}
      <div className="absolute top-0 inset-x-0 flex flex-col items-center">
        <div className="relative w-full flex justify-center opacity-90">
          <div className="w-full h-[2px] bg-gradient-to-r from-zinc-950 via-white/70 to-zinc-950" />
          <div className="absolute top-0 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
        </div>
        <div className="w-[70%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-[3px]" />
      </div>
      
      {/* Background Glows for visual depth */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] pointer-events-none z-0 overflow-hidden" />
      <div className="absolute top-0 left-[20%] w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.01),transparent_70%)] pointer-events-none z-0 overflow-hidden" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Compact Floating Newsletter Card */}
        <div className="max-w-5xl mx-auto w-full bg-white rounded-2xl p-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-8 -mt-28 mb-16 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-20 border border-zinc-200/50">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-1.5 tracking-tight">Subscribe Newsletter</h3>
            <p className="text-zinc-500 text-xs md:text-sm font-medium max-w-sm mx-auto md:mx-0">
              Get the latest insights on enterprise cloud transformations and technical engineering directly to your inbox.
            </p>
          </div>
          <div className="w-full md:w-[400px]">
            <form onSubmit={handleSubmit} className="flex relative w-full border border-zinc-200 rounded-xl bg-zinc-50 focus-within:border-rose-500 focus-within:shadow-[0_0_15px_rgba(225,29,72,0.15)] transition-all duration-300 p-1 shadow-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow bg-transparent px-4 py-2.5 text-xs font-medium text-black focus:outline-none placeholder:text-zinc-400 min-w-0"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-black hover:bg-zinc-800 text-white transition-all duration-300 whitespace-nowrap"
                aria-label="Subscribe"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>

        {isPopupOpen && (
          <CategoryPopup 
            email={email} 
            closePopup={() => setIsPopupOpen(false)} 
          />
        )}

        {/* 6-Column Mega Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 mb-20">
          
          {/* Col 1: Brand Intro */}
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
              <li><Link href="/about/our-culture-people" className="hover:text-rose-500 transition-colors">Our Culture & People</Link></li>
              <li><Link href="/about/global-internship" className="hover:text-rose-500 transition-colors">Global Internship</Link></li>
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
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
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
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-xs text-zinc-500 font-medium">
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
        </div>

        {/* Collapsible HTML Directory Index for Search Bots & Users (Technical SEO Link Index) - Hidden from UI */}
        <details className="hidden mt-8 group border border-zinc-900 rounded-xl bg-zinc-950/20 text-left">
          <summary className="list-none flex items-center justify-between px-6 py-4 cursor-pointer text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-rose-500 transition-colors select-none">
            <span>Explore Site Directory (HTML Index)</span>
            <span className="transition-transform duration-300 group-open:rotate-180 text-sm">&darr;</span>
          </summary>
          <div className="px-6 pb-6 pt-4 border-t border-zinc-900/60 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-[11px] text-zinc-400 font-medium">
            <div>
              <h5 className="font-bold text-white mb-2 uppercase text-[9px] tracking-wider text-rose-500/80">AI & Data Innovation</h5>
              <ul className="flex flex-col gap-1.5">
                <li><a href="/services/ai-data-innovation/generative-ai-solutions" className="hover:text-white transition-colors">Generative AI Solutions</a></li>
                <li><a href="/services/ai-data-innovation/ai-agents-automation" className="hover:text-white transition-colors">AI Agents & Automation</a></li>
                <li><a href="/services/ai-data-innovation/machine-learning-engineering" className="hover:text-white transition-colors">Machine Learning Engineering</a></li>
                <li><a href="/services/ai-data-innovation/data-engineering" className="hover:text-white transition-colors">Data Engineering</a></li>
                <li><a href="/services/ai-data-innovation/business-intelligence-analytics" className="hover:text-white transition-colors">BI & Analytics</a></li>
                <li><a href="/services/ai-data-innovation/predictive-analytics" className="hover:text-white transition-colors">Predictive Analytics</a></li>
                <li><a href="/services/ai-data-innovation/data-governance" className="hover:text-white transition-colors">Data Governance</a></li>
                <li><a href="/services/ai-data-innovation/mlops-ai-operations" className="hover:text-white transition-colors">MLOps & AI Operations</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2 uppercase text-[9px] tracking-wider text-rose-500/80">Cloud Services</h5>
              <ul className="flex flex-col gap-1.5">
                <li><a href="/services/cloud-services/cloud-strategy-consulting" className="hover:text-white transition-colors">Cloud Strategy & Consulting</a></li>
                <li><a href="/services/cloud-services/cloud-migration" className="hover:text-white transition-colors">Cloud Migration</a></li>
                <li><a href="/services/cloud-services/cloud-architecture" className="hover:text-white transition-colors">Cloud Architecture</a></li>
                <li><a href="/services/cloud-services/azure-services" className="hover:text-white transition-colors">Azure Services</a></li>
                <li><a href="/services/cloud-services/aws-services" className="hover:text-white transition-colors">AWS Services</a></li>
                <li><a href="/services/cloud-services/google-cloud-services" className="hover:text-white transition-colors">Google Cloud Services</a></li>
                <li><a href="/services/cloud-services/cloud-security" className="hover:text-white transition-colors">Cloud Security</a></li>
                <li><a href="/services/cloud-services/cloud-managed-services" className="hover:text-white transition-colors">Cloud Managed Services</a></li>
                <li><a href="/services/cloud-services/finops-cost-optimization" className="hover:text-white transition-colors">FinOps & Cost Optimization</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2 uppercase text-[9px] tracking-wider text-rose-500/80">DevOps & Automation</h5>
              <ul className="flex flex-col gap-1.5">
                <li><a href="/services/devops-automation/cicd-implementation" className="hover:text-white transition-colors">CI/CD Implementation</a></li>
                <li><a href="/services/devops-automation/platform-engineering" className="hover:text-white transition-colors">Platform Engineering</a></li>
                <li><a href="/services/devops-automation/infrastructure-as-code" className="hover:text-white transition-colors">Infrastructure as Code</a></li>
                <li><a href="/services/devops-automation/kubernetes-services" className="hover:text-white transition-colors">Kubernetes Services</a></li>
                <li><a href="/services/devops-automation/devsecops" className="hover:text-white transition-colors">DevSecOps</a></li>
                <li><a href="/services/devops-automation/site-reliability-engineering" className="hover:text-white transition-colors">SRE</a></li>
                <li><a href="/services/devops-automation/release-automation" className="hover:text-white transition-colors">Release Automation</a></li>
                <li><a href="/services/devops-automation/monitoring-observability" className="hover:text-white transition-colors">Monitoring & Observability</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2 uppercase text-[9px] tracking-wider text-rose-500/80">Cybersecurity</h5>
              <ul className="flex flex-col gap-1.5">
                <li><a href="/services/cybersecurity/security-assessment" className="hover:text-white transition-colors">Security Assessment</a></li>
                <li><a href="/services/cybersecurity/vulnerability-management" className="hover:text-white transition-colors">Vulnerability Management</a></li>
                <li><a href="/services/cybersecurity/penetration-testing" className="hover:text-white transition-colors">Penetration Testing</a></li>
                <li><a href="/services/cybersecurity/security-operations-center" className="hover:text-white transition-colors">Security Operations Center</a></li>
                <li><a href="/services/cybersecurity/identity-access-management" className="hover:text-white transition-colors">Identity & Access</a></li>
                <li><a href="/services/cybersecurity/cloud-security" className="hover:text-white transition-colors">Cloud Security</a></li>
                <li><a href="/services/cybersecurity/compliance-governance" className="hover:text-white transition-colors">Compliance & Governance</a></li>
                <li><a href="/services/cybersecurity/zero-trust-architecture" className="hover:text-white transition-colors">Zero Trust Architecture</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2 uppercase text-[9px] tracking-wider text-rose-500/80">Software Development</h5>
              <ul className="flex flex-col gap-1.5">
                <li><a href="/services/software-development/enterprise-app-development" className="hover:text-white transition-colors">Enterprise Application Dev</a></li>
                <li><a href="/services/software-development/web-app-development" className="hover:text-white transition-colors">Web Application Dev</a></li>
                <li><a href="/services/software-development/mobile-app-development" className="hover:text-white transition-colors">Mobile Application Dev</a></li>
                <li><a href="/services/software-development/saas-product-development" className="hover:text-white transition-colors">SaaS Product Dev</a></li>
                <li><a href="/services/software-development/api-development-integration" className="hover:text-white transition-colors">API Dev & Integration</a></li>
                <li><a href="/services/software-development/microservices-architecture" className="hover:text-white transition-colors">Microservices Architecture</a></li>
                <li><a href="/services/software-development/product-engineering" className="hover:text-white transition-colors">Product Engineering</a></li>
                <li><a href="/services/software-development/application-modernization" className="hover:text-white transition-colors">Application Modernization</a></li>
              </ul>
            </div>
          </div>
        </details>

      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-0 right-0 z-50 p-3.5 rounded-tl-[1.5rem] bg-zinc-900/30 backdrop-blur-xl border-t border-l border-white/[0.08] text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-500 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] ${
          showScrollTop ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-full"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} strokeWidth={2} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
}
export default Footer;
