"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowUp, Printer, Mail, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  sections
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  // Monitor active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    // Setup intersection observer for table of contents active state
    const sectionEls = sections.map((s) => document.getElementById(s.id));
    
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by top position to pick the highest visible one
          const sorted = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveSection(sorted[0].target.id);
        }
      },
      {
        rootMargin: "-10% 0px -70% 0px", // triggers when section is near top of viewport
        threshold: 0.1
      }
    );

    sectionEls.forEach((el) => {
      if (el) observer.current?.observe(el);
    });

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
      const yOffset = -90; // Adjust for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 pt-32 pb-24 px-12 xl:px-8 relative overflow-hidden font-sans select-text">
      {/* Background Decorative Grids and Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-rose-600/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-rose-500 transition-colors">HOME</Link>
          <ChevronRight size={10} />
          <span className="text-zinc-500">LEGAL</span>
          <ChevronRight size={10} />
          <span className="text-rose-500 uppercase font-bold">{title}</span>
        </nav>

        {/* Hero Banner Header */}
        <div className="border-b border-zinc-900 pb-10 mb-16 relative">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-rose-500 text-xs font-bold font-mono tracking-widest uppercase mb-4">
                  <Scale size={14} className="animate-pulse" />
                  Devopstrio Governance & Trust
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                  {title}
                </h1>
                <p className="text-sm md:text-base text-zinc-400 font-light max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <div className="flex items-center gap-2 bg-zinc-950/60 border border-zinc-900 px-4 py-2.5 rounded-xl text-xs font-mono text-zinc-400">
                  <Calendar size={14} className="text-rose-500" />
                  <span>Last Updated: {lastUpdated}</span>
                </div>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center gap-2 bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition-all px-4 py-2.5 rounded-xl text-xs font-mono text-zinc-400 hover:text-white"
                  title="Print / Save PDF"
                >
                  <Printer size={14} className="text-rose-500" />
                  <span>Print Document</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Content Layout with sticky left rail for Table of Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Table of Contents - Left Column (Sticky) */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="bg-zinc-950/40 border border-zinc-900/60 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xs font-mono font-black text-white uppercase tracking-widest mb-6 border-b border-zinc-900 pb-3 flex items-center justify-between">
                  <span>Sections</span>
                  <span className="text-[10px] text-zinc-500 font-normal">On This Page</span>
                </h3>
                <nav className="flex flex-col gap-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left text-xs font-medium py-2 px-3.5 rounded-lg border transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-rose-500/10 text-rose-500 border-rose-500/20 font-bold"
                          : "text-zinc-500 border-transparent hover:text-zinc-350 hover:bg-zinc-900/40"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Legal Note Box */}
              <div className="bg-gradient-to-br from-rose-500/[0.02] to-transparent border border-zinc-900/60 rounded-2xl p-5 text-xs text-zinc-500 leading-relaxed font-light">
                <span className="block font-bold text-white mb-2">Need legal assistance?</span>
                For specific regulatory filings, audit reports, or customized compliance arrangements, contact our Trust team at{" "}
                <a href="mailto:trust@devopstrio.com" className="text-rose-500 hover:underline inline-flex items-center gap-1 font-semibold">
                  trust@devopstrio.com
                </a>
              </div>
            </div>
          </aside>

          {/* Main Legal Content - Right Column */}
          <main className="lg:col-span-9 space-y-12">
            <div className="bg-zinc-950/10 border border-zinc-900/40 rounded-3xl p-6 md:p-12 relative">
              <div className="prose prose-zinc prose-invert max-w-none space-y-14">
                {sections.map((section, idx) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 border-b border-zinc-900/60 last:border-b-0 pb-12 last:pb-0"
                  >
                    <Reveal delay={0.05 * idx}>
                      <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mb-6 flex items-center gap-3">
                        <span className="text-xs font-mono text-rose-500 w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        {section.title}
                      </h2>
                      <div className="text-zinc-400 text-sm leading-relaxed font-normal space-y-4 max-w-none">
                        {section.content}
                      </div>
                    </Reveal>
                  </section>
                ))}
              </div>
            </div>

            {/* Bottom Help Card */}
            <div className="bg-gradient-to-r from-zinc-950 via-zinc-950 to-[#0c0305] border border-zinc-850 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-rose-600/[0.015] blur-[80px] rounded-full pointer-events-none" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Have questions about our terms or practices?</h3>
                <p className="text-xs text-zinc-500 max-w-xl">
                  Our dedicated trust, risk, and compliance department is here to help address any inquiries regarding data protection, security controls, or service definitions.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-rose-500 transition-all flex-shrink-0"
              >
                <Mail size={13} />
                Contact Trust Team
              </Link>
            </div>
          </main>
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
            className="fixed bottom-8 right-8 z-50 p-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-[0_0_20px_rgba(225,29,72,0.35)] transition-all cursor-pointer border border-rose-500/20"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
