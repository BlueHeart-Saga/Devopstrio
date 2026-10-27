"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowUp, Printer, Mail, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  sections: Section[];
}

const LEGAL_NAV_ITEMS = [
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "GDPR Compliance", href: "/gdpr" },
];

export function LegalPageLayout({
  title,
  lastUpdated,
  sections
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  // Monitor scroll for back to top button & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionEls = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionEls.length > 0) {
      observer.current = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter((entry) => entry.isIntersecting);
          if (visibleEntries.length > 0) {
            const sorted = visibleEntries.sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
            );
            setActiveSection(sorted[0].target.id);
          }
        },
        {
          rootMargin: "-15% 0px -65% 0px",
          threshold: [0.05, 0.2]
        }
      );

      sectionEls.forEach((el) => observer.current?.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 xl:px-12 relative font-sans select-text">
      {/* Background Decorative Grids and Subtle Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-rose-600/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-rose-500 transition-colors">HOME</Link>
          <ChevronRight size={12} className="text-zinc-600" />
          <span className="text-zinc-500">LEGAL</span>
          <ChevronRight size={12} className="text-zinc-600" />
          <span className="text-rose-500 uppercase font-semibold">{title}</span>
        </nav>

        {/* Hero Banner Header: Clean & Direct Without Unnecessary Subtitle or Upper Badges */}
        <div className="border-b border-zinc-900 pb-8 mb-10 relative">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                  {title}
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <div className="flex items-center gap-2 bg-zinc-950/80 border border-zinc-800/80 px-4 py-2.5 rounded-xl text-xs font-mono text-zinc-300 shadow-sm">
                  <Calendar size={14} className="text-rose-500" />
                  <span>Last Updated: {lastUpdated}</span>
                </div>
                <button
                  onClick={handlePrint}
                  className="gap-2 inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-200 hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                  title="Print / Save PDF"
                >
                  <Printer size={14} className="text-rose-500" />
                  <span>Print Document</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Legal Policies Navigation Strip */}
        <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max p-1 bg-zinc-950/60 border border-zinc-850 rounded-2xl backdrop-blur-md">
            {LEGAL_NAV_ITEMS.map((item) => {
              const isCurrent = title.toLowerCase().includes(item.name.toLowerCase()) || 
                (item.href === "/gdpr" && title.toLowerCase().includes("gdpr"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                    isCurrent
                      ? "bg-rose-500/15 text-rose-400 border border-rose-500/30 font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Content Layout with STICKY left rail and NATURAL open right content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
          
          {/* Table of Contents - Left Column (Sticky Rail) */}
          <aside className="lg:col-span-4 xl:col-span-3 hidden lg:block sticky top-28 self-start z-20">
            <div className="space-y-5 max-h-[calc(100vh-8.5rem)] overflow-y-auto pr-1.5 custom-scrollbar">
              
              {/* Sections Card */}
              <div className="bg-zinc-950/70 border border-zinc-850 rounded-2xl p-5 backdrop-blur-md shadow-xl">
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-zinc-800/80">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck size={14} className="text-rose-500" />
                    Sections
                  </span>
                  <span className="text-[11px] text-zinc-500 font-mono">On This Page</span>
                </div>
                
                <nav className="flex flex-col gap-1.5">
                  {sections.map((section, idx) => {
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`group w-full text-left text-[14px] sm:text-[14.5px] py-2.5 px-3 rounded-xl transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                          isActive
                            ? "bg-rose-500/15 text-rose-400 font-semibold border border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
                            : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 border border-transparent"
                        }`}
                      >
                        <span className="leading-snug">{section.title}</span>
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded flex-shrink-0 transition-colors ${
                          isActive
                            ? "bg-rose-500/25 text-rose-300 font-bold"
                            : "text-zinc-600 group-hover:text-zinc-400 bg-zinc-900/40"
                        }`}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Legal Assistance Box */}
              <div className="bg-gradient-to-br from-zinc-900/50 via-zinc-950/70 to-zinc-950/50 border border-zinc-850 rounded-2xl p-5 shadow-lg relative overflow-hidden backdrop-blur-md">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2 font-mono">
                  <Mail size={14} />
                  <span>Legal Assistance</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed mb-3 font-normal">
                  For specific regulatory filings, audit certifications, or customized enterprise terms, contact our Trust & Risk office.
                </p>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_TRUST_EMAIL || "info@devopstrioglobal.com"}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400 hover:text-rose-300 transition-colors break-all"
                >
                  <span>{process.env.NEXT_PUBLIC_TRUST_EMAIL || "info@devopstrioglobal.com"}</span>
                  <ChevronRight size={13} className="flex-shrink-0" />
                </a>
              </div>

            </div>
          </aside>

          {/* Main Legal Content - Right Column (Open Flow Without Enclosing Box Frame) */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-14 sm:space-y-18">
            {sections.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-32 border-b border-zinc-900/80 last:border-b-0 pb-12 sm:pb-16 last:pb-0"
              >
                <Reveal delay={0.02 * idx}>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-6 flex items-center gap-3.5">
                    <span className="text-xs font-mono font-bold text-rose-400 w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/25 flex items-center justify-center flex-shrink-0 shadow-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </h2>
                  <div className="text-zinc-300 text-base sm:text-[17px] leading-8 font-normal space-y-5">
                    {section.content}
                  </div>
                </Reveal>
              </section>
            ))}
          </main>

        </div>

        {/* Full-Width Representative CTA at Bottom (Matching Entire Site Layout) */}
        <div className="w-full mt-20 sm:mt-28">
          <RepresentativeCTA
            title="Have Questions About Our"
            highlightText="Terms Or Practices?"
            description="Our dedicated trust, risk, and compliance department is here to help address any inquiries regarding data protection, security controls, or service definitions."
            primaryBtnText="CONTACT TRUST TEAM"
            primaryBtnHref="/contact#contact-form"
            secondaryBtnText="VIEW PRIVACY POLICY"
            secondaryBtnHref="/privacy-policy"
          />
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 p-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-full shadow-[0_0_20px_rgba(225,29,72,0.45)] transition-all cursor-pointer border border-rose-400/30"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LegalPageLayout;
