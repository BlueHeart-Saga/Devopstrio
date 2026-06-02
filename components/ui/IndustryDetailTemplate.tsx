"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight, Plus, Minus, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

export interface IndustryFocusArea {
  title: string;
  desc: string;
}

export interface IndustryTech {
  name: string;
  desc: string;
}

export interface IndustryMetric {
  value: string;
  label: string;
}

export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface IndustryDetailProps {
  industryName: string;
  title: string;
  highlightedWord: string;
  subtitle: string;
  overviewHeading: string;
  overviewDesc1: string;
  overviewDesc2: string;
  heroImage: string;
  challenges: string[];
  focusAreas: IndustryFocusArea[];
  compliances: string[];
  techs: IndustryTech[];
  metrics: IndustryMetric[];
  caseStudyTitle: string;
  caseStudyDesc: string;
  caseStudyHighlights: string[];
  faqs: IndustryFAQ[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaDesc: string;
  ctaBtnText: string;
}

export function IndustryDetailTemplate({
  industryName,
  title,
  highlightedWord,
  subtitle,
  overviewHeading,
  overviewDesc1,
  overviewDesc2,
  heroImage,
  challenges,
  focusAreas,
  compliances,
  techs,
  metrics,
  caseStudyTitle,
  caseStudyDesc,
  caseStudyHighlights,
  faqs,
  ctaTitle,
  ctaHighlight,
  ctaDesc,
  ctaBtnText
}: IndustryDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "focus-areas", label: "Focus Areas" },
    { id: "compliance", label: "Compliance" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "case-study", label: "Case Study" },
    { id: "faq", label: "FAQ" },
    { id: "engage", label: "Engage" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      
      {/* 1. Hero Section */}
      <section className="w-full py-24 md:py-32 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center relative z-10">
          
          <Reveal className="flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                INDUSTRIES / {industryName}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white mb-6">
              {title} <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">{highlightedWord}</span>.
            </h1>
            
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xl">
              {subtitle}
            </p>
          </Reveal>

          <div className="relative w-full max-w-[500px] lg:max-w-none mx-auto overflow-hidden flex items-center justify-center">
            <img 
              src={heroImage} 
              alt={title} 
              className="w-full h-auto object-contain max-h-[460px] select-none pointer-events-none"
            />
          </div>

        </div>
      </section>

      {/* 2. Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 3. Overview Section */}
      <section id="overview" className="w-full py-20 bg-[#030303] border-b border-zinc-900">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal className="text-left">
            <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest block mb-4">Domain Context</span>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              {overviewHeading}
            </h2>
            
            <div className="flex flex-col gap-3 mt-8">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">Key Operational Challenges</span>
              {challenges.map((challenge, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 size={14} className="text-rose-500 flex-shrink-0" />
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal className="text-left">
            <div className="flex flex-col gap-6 text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest block mb-1">Our Approach</span>
              <p>{overviewDesc1}</p>
              <p>{overviewDesc2}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Focus Areas Grid */}
      <section id="focus-areas" className="w-full py-24 bg-[#050505] border-b border-zinc-900">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          
          <Reveal className="mb-16 text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                CORE Focus
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Specialized <span className="font-semibold text-rose-500">capability groups</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-[#080808] border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-800 transition-colors">
                  <div>
                    <span className="block text-[10px] font-mono text-rose-600 mb-4 uppercase tracking-widest">
                      Focus Area {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-xs font-semibold text-zinc-100 mb-3 tracking-wide text-left">
                      {area.title}
                    </h3>
                    <p className="text-[10px] text-zinc-455 leading-relaxed font-light text-left">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Compliance & Audits */}
      <section id="compliance" className="w-full py-24 bg-[#030303] border-b border-zinc-900">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-[1px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                  GOVERNANCE
                </span>
              </div>
              <h2 className="text-2xl font-light text-white tracking-tight mb-4">
                Regulatory safety & <span className="font-semibold text-rose-500">audits alignment</span>
              </h2>
              <p className="text-zinc-450 text-xs md:text-sm font-light leading-relaxed max-w-md">
                We develop under strict compliance regulations, running automated security checks in our build tools to flag vulnerabilities before code releases.
              </p>
            </Reveal>

            <Reveal className="flex flex-col gap-3">
              {compliances.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#080808] border border-zinc-900 p-4 rounded-xl">
                  <ShieldCheck size={18} className="text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-zinc-200 block mb-0.5">{comp.split(":")[0]}</strong>
                    <span className="text-[10px] text-zinc-500 leading-normal font-light">{comp.split(":")[1]}</span>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Tech Stack Section */}
      <section id="tech-stack" className="w-full py-24 bg-[#050505] border-b border-zinc-900">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            <Reveal className="text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-[1px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                  STACK INTEGRATION
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Target tech <span className="font-semibold text-rose-500">frameworks</span>
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-4 max-w-sm">
                We design with high-performance languages and databases suited for heavy workloads.
              </p>
            </Reveal>

            <div className="bg-[#080808] border border-zinc-900/60 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {techs.map((tech) => (
                <div key={tech.name} className="flex flex-col border-b border-zinc-900 pb-4 last:border-b-0">
                  <strong className="text-xs font-semibold text-zinc-200 mb-1">{tech.name}</strong>
                  <span className="text-[10px] text-zinc-500 font-light leading-normal">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Case Study Section */}
      <section id="case-study" className="w-full py-24 bg-[#030303] border-b border-zinc-900">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="bg-[#050505] border border-zinc-900 rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

            <Reveal className="text-left relative z-10">
              <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-3">Case Study / Project Validation</span>
              <h3 className="text-xl md:text-2xl font-light text-white mb-6">
                {caseStudyTitle}
              </h3>
              
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-8">
                {caseStudyDesc}
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900">
                {metrics.map((m, i) => (
                  <div key={i}>
                    <span className="block text-2xl font-semibold text-white font-mono mb-1">{m.value}</span>
                    <span className="text-[10px] text-zinc-550 block leading-tight font-light">{m.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="bg-[#080808] border border-zinc-900 rounded-2xl p-6 relative z-10 text-left">
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-widest block mb-4">Milestone highlights</span>
              <ul className="flex flex-col gap-3 text-[11px] text-zinc-300 font-light mb-8">
                {caseStudyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 flex-shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section id="faq" className="w-full py-24 bg-[#050505] border-b border-zinc-900">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Technical <span className="font-semibold text-rose-500">clarifications</span>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={idx} className="w-full">
                  <div className="bg-[#080808] border border-zinc-900 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="text-xs font-semibold text-zinc-200">{faq.q}</span>
                      <span className="text-zinc-500 hover:text-white flex-shrink-0 ml-4">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>

                    <div className={`transition-all duration-300 ${isOpen ? "max-h-[250px] border-t border-zinc-900/50 p-5" : "max-h-0 overflow-hidden"}`}>
                      <p className="text-[11px] text-zinc-450 leading-relaxed font-light">{faq.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section id="engage" className="w-full py-24 bg-[#030303] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(220,38,38,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                GET IN TOUCH
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              {ctaTitle} <span className="font-semibold text-rose-500">{ctaHighlight}</span>
            </h2>
            
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
              {ctaDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-lg"
              >
                {ctaBtnText} <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
              >
                Back to industries index
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
