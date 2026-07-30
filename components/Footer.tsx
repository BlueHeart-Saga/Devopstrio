"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUp } from "lucide-react";
import CategoryPopup from "@/components/CategoryPopup";
import LocationPopup from "@/components/LocationPopup";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
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
    <footer className="w-full bg-[#030303] text-zinc-550 pt-20 pb-4 relative font-sans mt-24">
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
        {isLocationOpen && (
          <LocationPopup
            closePopup={() => setIsLocationOpen(false)}
          />
        )}

        {/* 6-Column Mega Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 mb-20">

          {/* Col 1: Brand Intro */}
          <div className="flex flex-col items-center text-center gap-0">
            <Link href="/" className="flex flex-col items-center gap-3 group inline-flex mb-4">
              <img
                src="/assets/logo/logo.png"
                alt="Devopstrio logo"
                className="w-16 h-16 object-contain transition-all duration-500 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              />
              <div className="flex flex-col items-start">
                <span className="text-3xl font-semibold text-white tracking-tight leading-none">
                  Devopstrio
                </span>
                <span className="text-[9px] font-bold text-zinc-500 tracking-[0.2em] uppercase mt-2">
                  Enterprise Services
                </span>
              </div>
            </Link>

            {/* Contact Info (Head Office) */}
            <div className="text-xs text-zinc-400 font-semibold tracking-wide flex flex-col items-start text-left gap-1.5 border-t border-zinc-900 pt-4 pb-2 w-full">
              <span className="text-[10px] font-bold text-white uppercase tracking-wider block">Head Office</span>
              <span className="text-zinc-500 font-medium leading-relaxed block text-left">
                128 City Road, London, EC1V 2NX
              </span>
              <a href="tel:04612940062" className="hover:text-rose-500 transition-colors flex items-center gap-2 text-zinc-400">
                <span>📞</span> <span className="font-bold text-white hover:text-rose-500 transition-colors">0461 2940062 / +44 7586 879046</span>
              </a>
              <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="hover:text-rose-500 transition-colors flex items-center gap-2 text-zinc-400">
                {/* <span>✉</span> */}
                 <span className="font-bold">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</span>
              </a>
            </div>

            {/* Corporate Location Box */}
            <div className="rounded-2xl flex flex-col items-start justify-start w-full max-w-[240px]">
              {/* QR Code Image */}
              <div className="w-24 h-24 mx-auto bg-white p-1 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] overflow-hidden">
                <img
                  src="/assets/scan/Scan-me.png"
                  alt="Scan to verify corporate profile"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Verify Profile Button */}
              <div className="flex flex-col gap-2 mt-4 w-full">
                <button
                  onClick={() => setIsLocationOpen(true)}
                  className="flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-black py-2.5 rounded-xl text-xs font-bold transition-all duration-300 shadow-sm w-full"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                  <span>Open Office Location</span>
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Services / Practice Areas */}
          <div>
            <h4 className="text-[11px] font-bold text-white mb-6 tracking-wider uppercase">Core Expertise</h4>
            <ul className="flex flex-col gap-3.5 text-[13px] text-zinc-400 font-semibold tracking-wide">

              <li><Link href="/services/ai-data-innovation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">AI & Data Innovation</Link></li>
              <li><Link href="/services/cloud-services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Cloud Services</Link></li>
              <li><Link href="/services/devops-automation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">DevOps & Automation</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Cybersecurity</Link></li>
              <li><Link href="/services/software-development" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Software Development</Link></li>
              <li><Link href="/services/digital-transformation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Digital Transformation</Link></li>
              <li><Link href="/services/data-engineering" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Data Engineering</Link></li>
              <li><Link href="/services/managed-services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Managed Services</Link></li>
              <li><Link href="/services/qa-testing" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">QA & Testing</Link></li>
              <li><Link href="/services/it-consulting" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">IT Consulting</Link></li>
              <li><Link href="/services/explore" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Explore More Services</Link></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-[11px] font-bold text-white mb-6 tracking-wider uppercase">Industries</h4>
            <ul className="flex flex-col gap-3.5 text-[13px] text-zinc-400 font-semibold tracking-wide">
              <li><Link href="/industries/banking-finance" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Banking & Finance</Link></li>
              <li><Link href="/industries/healthcare-life-sciences" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Healthcare & Life Sciences</Link></li>
              <li><Link href="/industries/retail-ecommerce" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Retail & E-Commerce</Link></li>
              <li><Link href="/industries/manufacturing" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Manufacturing</Link></li>
              <li><Link href="/industries/telecommunications" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Telecommunications</Link></li>
              <li><Link href="/industries/media-entertainment" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Media & Entertainment</Link></li>
              <li><Link href="/industries/education" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Education</Link></li>
              <li><Link href="/industries/government-public-sector" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Government & Public Sector</Link></li>
            </ul>
          </div>

          {/* Col 4: Ecosystem */}
          <div>
            <h4 className="text-[11px] font-bold text-white mb-6 tracking-wider uppercase">Ecosystem</h4>
            <ul className="flex flex-col gap-3.5 text-[13px] text-zinc-400 font-semibold tracking-wide">
              <li><Link href="/ecosystem/partnerships" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Strategic Partnerships</Link></li>
              <li><Link href="/ecosystem/innovation-labs" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">R&D Innovation Labs</Link></li>
              <li><Link href="/ecosystem/platforms-solutions" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Platforms & Solutions</Link></li>
              <li><Link href="/ecosystem/technology-stack" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Technology Stack</Link></li>
              <li><Link href="/ecosystem/global-delivery" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Global Delivery</Link></li>
              <li><Link href="/ecosystem/engineering-excellence" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Engineering Excellence</Link></li>
              <li><Link href="/ecosystem/accelerators-frameworks" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Accelerators & Frameworks</Link></li>
              <li><Link href="/ecosystem/landing-zone" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Landing Zone</Link></li>
            </ul>
          </div>

          {/* Col 5: Insights & Events */}
          <div>
            <h4 className="text-[11px] font-bold text-white mb-6 tracking-wider uppercase">Insights & Events</h4>
            <ul className="flex flex-col gap-3.5 text-[13px] text-zinc-400 font-semibold tracking-wide">
              <li><Link href="/insights" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-zinc-300">Insights Hub</Link></li>
              <li><Link href="/insights/blogs" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Blogs</Link></li>
              <li><Link href="/insights/case-studies" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Case Studies</Link></li>
              <li><Link href="/insights/white-paper" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">White Paper</Link></li>
              <li><Link href="/insights/awards-milestones" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Awards & Milestones</Link></li>
              <li><Link href="/insights/industry-events" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Industry Events</Link></li>
              <li><Link href="/insights/celebrations" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Celebrations</Link></li>
              <li><Link href="/insights/team-culture" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Team Culture</Link></li>
              <li><Link href="/insights/client-transformations" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Client Transformations</Link></li>
              <li><Link href="/insights/impact-metrics" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Impact Metrics</Link></li>
              <li><Link href="/insights/our-offerings" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Our Offerings</Link></li>
            </ul>
          </div>

          {/* Col 6: Company */}
          <div>
            <h4 className="text-[11px] font-bold text-white mb-6 tracking-wider uppercase">Company</h4>
            <ul className="flex flex-col gap-3.5 text-[13px] text-zinc-400 font-semibold tracking-wide">
              <li><Link href="/about/company-overview" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Company Overview</Link></li>
              <li><Link href="/about/leadership-team" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Leadership & Team</Link></li>
              <li><Link href="/about/our-culture-people" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Our Culture & People</Link></li>
              <li><Link href="/about/global-internship" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Global Internship</Link></li>
              <li><Link href="/about/global-presence" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Global Presence</Link></li>
              <li><Link href="/about/partnerships-certifications" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Partnerships & Certifications</Link></li>
              <li><Link href="/about/awards-recognition" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Awards & Recognition</Link></li>
              <li><Link href="/about/sustainability-csr" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Sustainability & CSR</Link></li>
              <li><Link href="/about/testimonials" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Testimonials & Success</Link></li>
              <li><Link href="/about/customer-support" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Customer Support</Link></li>
              <li><Link href="/contact#contact-form" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Trust & Certifications Bar */}
        <div className="flex flex-wrap justify-center md:justify-between items-center py-6 border-t border-b border-zinc-900/60 mb-8 gap-y-6 w-full">

          <div className="flex items-center gap-4 px-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="9" height="9" fill="#F25022" />
              <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
              <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
              <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
            </svg>
            <div className="flex flex-col">
              <span className="text-[13px] font-semibold text-zinc-200">Microsoft</span>
              <span className="text-[11px] text-zinc-500">Solutions Partner</span>
            </div>
          </div>

          <div className="h-8 w-px bg-zinc-800/60 hidden md:block" />

          <div className="flex items-center justify-center px-2">
            <img src="/assets/Tech_logos/AWS.svg" alt="AWS" className="h-7 object-contain brightness-0 invert opacity-90" />
          </div>

          <div className="h-8 w-px bg-zinc-800/60 hidden md:block" />

          <div className="flex items-center gap-4 px-2">
            <img src="/assets/Tech_logos/Google_Cloud.svg" alt="Google Cloud" className="w-8 h-8 object-contain" />
            <div className="flex flex-col">
              <span className="text-[13px] font-semibold text-zinc-200">Google Cloud</span>
              <span className="text-[11px] text-zinc-500">Partner</span>
            </div>
          </div>

          <div className="h-8 w-px bg-zinc-800/60 hidden md:block" />

          <div className="flex flex-col items-center md:items-start px-2">
            <span className="text-xl font-bold text-rose-500 tracking-tight leading-none">100%</span>
            <span className="text-[11px] text-zinc-500 mt-1">Client Satisfaction</span>
          </div>

          <div className="h-8 w-px bg-zinc-800/60 hidden md:block" />

          <div className="flex flex-col items-center md:items-start px-2">
            <span className="text-xl font-bold text-rose-500 tracking-tight leading-none">24/7</span>
            <span className="text-[11px] text-zinc-500 mt-1">Global Support</span>
          </div>

        </div>

        {/* BOTTOM ROW: Socials & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 w-full">

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-[10px] font-bold tracking-widest uppercase text-zinc-500">
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
          </div>

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
          </div>
        </div>

        {/* Copyright - Moved to bottom */}
        <div className="text-center">
          <span className="text-xs text-zinc-500 font-medium tracking-wide">
            Copyright © 2026 Devopstrio Limited. All rights reserved.
          </span>
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
        className={`fixed bottom-0 right-0 z-50 p-3.5 rounded-tl-[1.5rem] bg-zinc-900/30 backdrop-blur-xl border-t border-l border-white/[0.08] text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-500 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] ${showScrollTop ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-full"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} strokeWidth={2} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
}
export default Footer;
