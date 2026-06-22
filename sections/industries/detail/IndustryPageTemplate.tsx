"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Layers,
  Cpu,
  Activity,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Workflow,
  FileText,
  AlertTriangle,
  Lightbulb,
  Zap,
  TrendingUp,
  Clock,
  Award,
  HelpCircle,
  Plus,
  Minus
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { IndustryHero } from "./IndustryHero";

export interface IndustryPageTemplateProps {
  industryName: string;
  hero: {
    title: string;
    highlightedWord: string;
    subtitle: string;
    bgImage: string;
  };
  overview: {
    heading: string;
    desc1: string;
    desc2: string;
  };
  challenges: {
    title: string;
    desc: string;
  }[];
  solutions: {
    title: string;
    desc: string;
  }[];
  capabilities: {
    title: string;
    desc: string;
  }[];
  useCases: {
    title: string;
    result: string;
  }[];
  techs: {
    name: string;
    desc: string;
  }[];
  outcomes: {
    value: string;
    label: string;
    desc: string;
  }[];
  caseStudy: {
    title: string;
    desc: string;
    metrics: { value: string; label: string }[];
    highlights: string[];
  };
  compliance: {
    title: string;
    desc: string;
  }[];
  whyChoose: {
    title: string;
    desc: string;
  }[];
  relatedServices: {
    title: string;
    href: string;
  }[];
  insights: {
    title: string;
    desc: string;
    link: string;
  }[];
  cta: {
    ctaTitle: string;
    ctaHighlight: string;
    ctaDesc: string;
    ctaBtnText: string;
  };
  faqs?: {
    q: string;
    a: string;
  }[];
}

export function IndustryPageTemplate({
  industryName,
  hero,
  overview,
  challenges,
  solutions,
  capabilities,
  useCases,
  techs,
  outcomes,
  caseStudy,
  compliance,
  whyChoose,
  relatedServices,
  insights,
  cta,
  faqs = []
}: IndustryPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "challenges", label: "Challenges" },
    { id: "solutions", label: "Solutions" },
    { id: "capabilities", label: "Capabilities" },
    { id: "use-cases", label: "Use Cases" },
    { id: "tech-stack", label: "Technology" },
    { id: "outcomes", label: "Outcomes" },
    { id: "success-stories", label: "Success Stories" },
    { id: "compliance", label: "Compliance & Security" },
    { id: "why-choose", label: "Why Devopstrio" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">

      {/* 1. Hero Block */}
      <IndustryHero
        industryName={industryName}
        title={hero.title}
        highlightedWord={hero.highlightedWord}
        subtitle={hero.subtitle}
        bgImage={hero.bgImage}
      />

      {/* Sticky Secondary Navigation Bar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Industry Overview */}
      <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Overview
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug mb-6">
                {overview.heading}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6 text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
            <Reveal delay={0.05}>
              <p className="border-l-2 border-zinc-800 pl-4">{overview.desc1}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="border-l-2 border-zinc-800 pl-4">{overview.desc2}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Challenges We Solve */}
      <section id="challenges" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Challenges We Solve
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Key operational <span className="font-semibold text-rose-500">roadblocks</span> we address
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((chal, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all">
                  <div className="w-10 h-10 rounded bg-rose-955/15 border border-rose-900/20 flex items-center justify-center mb-6 text-rose-500">
                    <AlertTriangle size={18} />
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">{chal.title}</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{chal.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solutions We Deliver */}
      <section id="solutions" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Solutions We Deliver
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Customized <span className="font-semibold text-rose-500">technology strategies</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all">
                  <div className="w-10 h-10 rounded bg-rose-955/15 border border-rose-900/20 flex items-center justify-center mb-6 text-rose-500">
                    <Lightbulb size={18} />
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">{sol.title}</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{sol.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Capabilities */}
      <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Engineering <span className="font-semibold text-rose-500">deliverables</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-955/10 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <div className="flex items-center gap-2.5 mb-4 text-xs font-semibold text-zinc-200">
                    <CheckCircle2 size={15} className="text-rose-500 flex-shrink-0" />
                    <span>Capability {(idx + 1).toString().padStart(2, "0")}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-150 mb-2">{cap.title}</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                    {cap.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Use Cases */}
      <section id="use-cases" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Use Cases
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Proven <span className="font-semibold text-rose-500">use case portfolio</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">{uc.title}</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{uc.result}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Technology Stack */}
      <section id="tech-stack" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Technology Stack
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Engineered <span className="font-semibold text-rose-500">integrations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techs.map((tech, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 mb-4 font-mono text-xs font-semibold">
                    {idx + 1}
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">{tech.name}</h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed font-light">{tech.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Business Outcomes */}
      <section id="outcomes" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Business Outcomes
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Quantifiable <span className="font-semibold text-rose-500">operational value</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((out, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all">
                  <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">{out.value}</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">{out.label}</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{out.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Success Stories */}
      {caseStudy && (
        <section id="success-stories" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Success Stories
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Client implementation <span className="font-semibold text-rose-500">breakdowns</span>
              </h2>
            </Reveal>

            <div className="bg-zinc-955/10 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <h4 className="text-sm font-semibold text-zinc-200 mb-4">{caseStudy.title}</h4>
              <p className="text-xs text-zinc-450 leading-relaxed font-light mb-8 max-w-3xl">{caseStudy.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-900">
                {caseStudy.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">{metric.value}</span>
                    <span className="block text-[9px] font-mono tracking-wider text-zinc-500 uppercase">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10. Compliance & Security */}
      <section id="compliance" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Compliance & Security
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Certifications & <span className="font-semibold text-rose-500">security standards</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {compliance.map((comp, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck size={14} className="text-rose-500" />
                    <h4 className="text-xs font-semibold text-zinc-200">{comp.title}</h4>
                  </div>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{comp.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Why Devopstrio */}
      <section id="why-choose" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Why Devopstrio
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Unrivaled <span className="font-semibold text-rose-500">engineering advantages</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((why, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 mb-4">
                    <Award size={14} />
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">{why.title}</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{why.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Related Services */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Practice Links
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Explore related <span className="font-semibold text-rose-500">services</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {relatedServices.map((srv, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <Link
                  href={srv.href}
                  className="group block h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 hover:bg-zinc-900/5 transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500">
                      <Layers size={12} />
                    </span>
                    <span className="text-zinc-650 group-hover:text-rose-500 transition-colors">
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                  <h4 className="text-[11px] font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {srv.title}
                  </h4>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Insights */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Insights & Research
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Featured industry <span className="font-semibold text-rose-500">research papers</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((ins, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <Link
                  href={ins.link}
                  className="group block h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors"
                >
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2 group-hover:text-rose-500 transition-colors">{ins.title}</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light mb-4">{ins.desc}</p>
                  <span className="text-[9px] text-rose-500 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read article <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Block (if faqs present) */}
      {faqs.length > 0 && (
        <section id="faq" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-3xl mx-auto px-12 xl:px-8 text-left">
            <Reveal className="mb-16 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">FAQ</span>
              </div>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white uppercase">
                Technical <span className="text-rose-500">clarifications</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <Reveal key={idx} className="w-full">
                    <div className="bg-zinc-955/20 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-colors">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left transition-colors"
                      >
                        <span className="text-xs md:text-sm font-semibold text-zinc-200">{faq.q}</span>
                        <span className="text-zinc-500 hover:text-white flex-shrink-0 ml-4 transition-colors">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] border-t border-zinc-900/50 p-5 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>
                        <p className="text-xs text-zinc-450 leading-relaxed font-light">{faq.a}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 14. CTA Section */}
      <section className="w-full py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(220,38,38,0.04),transparent_60%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center relative z-10">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Engage Our Architects
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              {cta.ctaTitle} <span className="font-semibold text-rose-500">{cta.ctaHighlight}</span>
            </h2>

            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
              {cta.ctaDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
              >
                {cta.ctaBtnText} <ArrowUpRight size={14} className="stroke-[2.5]" />
              </Link>
              <Link
                href="/industries"
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Back to Industries
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
