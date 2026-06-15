"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight, Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

export interface CapabilityItem {
  title: string;
  desc: string;
}

export interface TechItem {
  name: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceDetailProps {
  categoryName: string;
  title: string;
  highlightedWord: string;
  subtitle: string;
  overviewHeading: string;
  overviewDesc1: string;
  overviewDesc2: string;
  heroImage: string;
  benefits: string[];
  capabilities: CapabilityItem[];
  techs: TechItem[];
  process: ProcessStep[];
  metrics: CaseStudyMetric[];
  caseStudyTitle: string;
  caseStudyDesc: string;
  caseStudyHighlights: string[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaDesc: string;
  ctaBtnText: string;
}

export function ServiceDetailTemplate({
  categoryName,
  title,
  highlightedWord,
  subtitle,
  overviewHeading,
  overviewDesc1,
  overviewDesc2,
  heroImage,
  benefits,
  capabilities,
  techs,
  process,
  metrics,
  caseStudyTitle,
  caseStudyDesc,
  caseStudyHighlights,
  faqs,
  ctaTitle,
  ctaHighlight,
  ctaDesc,
  ctaBtnText
}: ServiceDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "process", label: "Delivery Process" },
    { id: "case-study", label: "Case Study" },
    { id: "faq", label: "FAQ" },
    { id: "engage", label: "Engage" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16">

      {/* 1. Hero Section (HCLTech-style Card Design) */}
      <section className="w-full py-12 bg-[#030303] text-white relative">
        <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
          <Reveal>
            <div className="relative w-full rounded-2xl border border-zinc-850/80 bg-zinc-950/40 p-8 lg:p-12 overflow-hidden shadow-2xl flex flex-col justify-between gap-10 min-h-[500px]">

              {/* Background Glows */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.03),transparent_50%)] pointer-events-none" />
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center z-10 w-full">

                {/* Left Text Block */}
                <div className="flex flex-col text-left">
                  {/* Breadcrumb */}
                  <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 mb-6 uppercase tracking-widest">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="text-zinc-600">&gt;</span>
                    <Link href="/services/ai-data" className="hover:text-white transition-colors">Services</Link>
                    <span className="text-zinc-600">&gt;</span>
                    <span className="text-rose-500 font-medium">{categoryName.split("/")[0].trim()}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] text-white mb-6">
                    {title} <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">{highlightedWord}</span>
                  </h1>

                  {/* Subheading */}
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xl mb-8">
                    {subtitle}
                  </p>

                  {/* Button */}
                  <a
                    href="#overview"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider transition-colors self-start"
                  >
                    Learn more <span className="text-rose-600 font-bold">&rarr;</span>
                  </a>
                </div>

                {/* Right Image Block */}
                <div className="w-full aspect-[4/3] max-w-[500px] lg:max-w-none mx-auto rounded-lg border border-zinc-900 overflow-hidden bg-zinc-950 flex items-center justify-center shadow-inner relative">
                  {/* Inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
                  <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>

              </div>

              {/* Bottom Slider-style Pillar Indicators */}
              <div className="w-full border-t border-zinc-900/60 pt-6 flex items-center justify-between z-10 flex-wrap gap-4">
                <div className="flex items-center gap-6 md:gap-10">
                  <div className="relative pb-2 cursor-default">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-white font-semibold">Strategic Blueprint</span>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-rose-600" />
                  </div>
                  <div className="pb-2 cursor-default opacity-40">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">Compliance Align</span>
                  </div>
                  <div className="pb-2 cursor-default opacity-40">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">Production Support</span>
                  </div>
                </div>

                {/* Play/Pause Button Mockup */}
                <div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-500 hover:text-white cursor-pointer transition-colors">
                  <span className="text-[9px] font-bold font-mono">||</span>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 3. Overview Section */}
      <section id="overview" className="w-full py-20 bg-[#030303]">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal className="text-left">
            <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest block mb-4">Value Proposition</span>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              {overviewHeading}
            </h2>

            <div className="flex flex-col gap-3 mt-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 size={14} className="text-rose-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="text-left">
            <div className="flex flex-col gap-6 text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest block mb-1">Details</span>
              <p>{overviewDesc1}</p>
              <p>{overviewDesc2}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Capabilities Grid Section */}
      <section id="capabilities" className="w-full py-24 bg-[#030303] border-b border-zinc-900">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

          <Reveal className="mb-16 text-left">
            <div className="inline-flex items-center gap-2 mb-4">

              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                PRACTICE FOCUS
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Core capability <span className="font-semibold text-rose-500">breakdown</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <Reveal key={cap.title} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-[#080808] border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-800 transition-colors">
                  <div>
                    <span className="block text-[10px] font-mono text-rose-600 mb-4 uppercase tracking-widest">
                      Focus Area {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-xs font-semibold text-zinc-100 mb-3 tracking-wide text-left">
                      {cap.title}
                    </h3>
                    <p className="text-[10px] text-zinc-450 leading-relaxed font-light text-left">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Tech Stack Section */}
      <section id="tech-stack" className="w-full py-24 bg-[#030303] border-b border-zinc-900">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            <Reveal className="text-left">
              <div className="inline-flex items-center gap-2 mb-4">

                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                  STACK DETAILS
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Target tech <span className="font-semibold text-rose-500">integrations</span>
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-4 max-w-sm">
                We select technologies aligned with corporate data governance, low runtime execution costs, and modern security patterns.
              </p>
            </Reveal>

            <div className="bg-[#030303] border border-zinc-900 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
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

      {/* 6. Process Section */}
      <section id="process" className="w-full py-24 bg-[#030303] border-b border-zinc-900">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <Reveal className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4">

              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                PRACTICE ROADMAP
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Structured deployment <span className="font-semibold text-rose-500">workflow</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-[#080808] border border-zinc-900 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <span className="block text-xl font-light text-rose-600 mb-6 font-mono">{step.step}</span>
                    <h3 className="text-xs font-semibold text-zinc-100 mb-3 tracking-wide text-left">{step.title}</h3>
                    <p className="text-[10px] text-zinc-450 leading-relaxed font-light text-left">{step.desc}</p>
                  </div>

                  <div className="w-full h-[1px] bg-rose-950/20 mt-8" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case Study Section */}
      <section id="case-study" className="w-full py-24 bg-[#030303] border-b border-zinc-900">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="bg-[#030303] border border-zinc-900 rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative overflow-hidden">

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
      <section id="faq" className="w-full py-24 bg-[#030303] border-b border-zinc-900">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4">

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
                href="/services/ai-data"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
              >
                Back to AI & Data index
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
