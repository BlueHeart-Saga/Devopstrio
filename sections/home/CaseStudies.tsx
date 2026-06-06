"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Award, Zap, CheckCircle2, ArrowRight, ArrowUpRight, ArrowLeft } from "lucide-react";

const caseStudies = [
  {
    tag: "COMPOSABLE KYC & AML",
    title: "AI-Powered AML, Financial Crime, and Investigations Platform",
    challenge: "Financial institutions faced complex regulatory audits, manual KYC bottlenecks, and sophisticated fraud patterns.",
    strategy: "Build a composable KYC intelligence platform integrating Identity, Data, AI, Workflows, and Continuous Monitoring.",
    solution: "Delivered a trigger-based remediation platform for digital onboarding, entity resolution, and adverse media intelligence.",
    technologies: ["AI Copilot", "Graph Databases", "Machine Learning", "Kubernetes"],
    result: "Real-time threat detection across Banks & FinTechs",
    image: "/assets/Home-page/case-studies/COMPOSABLE%20KYC%20%26%20AML.png"
  },
  {
    tag: "HEALTHCARE CYBERSECURITY",
    title: "Devopstrio AI-Driven Cyber Resilience for NHS Critical Systems",
    challenge: "National healthcare infrastructure required proactive protection against advanced zero-day cyber threats.",
    strategy: "Implement autonomous threat detection, real-time security posture monitoring, and AI-driven response playbooks.",
    solution: "Secured mission-critical NHS systems ensuring maximum uptime, patient data integrity, and compliance.",
    technologies: ["Zero-Trust Network", "AI Threat Intelligence", "SIEM", "Azure Security"],
    result: "99.99% uptime across critical health networks",
    image: "/assets/Home-page/case-studies/HEALTHCARE%20CYBERSECURITY.png"
  },
  {
    tag: "AI RECRUITMENT INTELLIGENCE",
    title: "AIHIRE – AI Recruitment & Hiring Platform",
    challenge: "High-volume recruitment required manual screening, slowing down hiring pipelines and introducing bias.",
    strategy: "Implement an intelligent recruitment scoring and candidate ingestion engine using LLM-based evaluation metrics.",
    solution: "Deployed AIHIRE, processing massive volumes of candidate records securely to accelerate talent acquisition.",
    technologies: ["Next.js", "OpenAI API", "PostgreSQL", "FastAPI"],
    result: "75% reduction in candidate screening cycle time",
    image: "/assets/Home-page/case-studies/AI%20RECRUITMENT%20INTELLIGENCE.png"
  },
  {
    tag: "INTELLIGENT SEARCH",
    title: "AI Product & Services Search Platform",
    challenge: "Customers struggled to navigate vast product catalogs and service offerings using traditional keyword search.",
    strategy: "Develop an AI-powered semantic search engine utilizing vector embeddings and natural language processing.",
    solution: "Launched an intuitive, conversational search experience that hyper-personalizes recommendations.",
    technologies: ["Vector Databases", "LLM Ensembles", "React", "Python"],
    result: "300% increase in search conversion rates",
    image: "/assets/Home-page/case-studies/INTELLIGENT%20SEARCH.png"
  },
  {
    tag: "EDTECH AUTOMATION",
    title: "AI-Based Paper Evaluation System",
    challenge: "Educational institutions faced massive backlogs evaluating subjective exam papers, causing grading delays.",
    strategy: "Train bespoke computer vision and natural language models to evaluate written responses against grading rubrics.",
    solution: "Delivered a highly accurate, unbiased automated grading system for bulk paper evaluations.",
    technologies: ["Computer Vision", "NLP", "TensorFlow", "AWS Cloud"],
    result: "Evaluated 100,000+ papers with 98% human-parity accuracy",
    image: "/assets/Home-page/case-studies/EDTECH%20AUTOMATION.png"
  }
];

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % caseStudies.length);
    }, 7000); // Auto-scroll every 7 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="cases" className="w-full pt-20 md:pt-32 pb-10 md:pb-14 bg-[#030303] text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-20 items-start">

        {/* Left Side: Overview & Trusted Stats */}
        <div className="relative flex flex-col gap-10 lg:pr-6">
          <Reveal>
            <div className="mb-4">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block">
                CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              Technology Investments That Deliver <span className="text-[#E11D48]">Business Value.</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-bold">
              We partner with organizations to solve complex challenges through AI, cloud engineering, cybersecurity, DevOps, and software development—creating measurable outcomes that drive efficiency, innovation, and long-term growth.
            </p>
          </Reveal>

          {/* High-Level Enterprise Metrics (UI Box) */}
          <Reveal className="relative border border-zinc-900 bg-zinc-950/40 p-6 md:p-8 rounded-xl overflow-hidden shadow-2xl mt-2">
            {/* UI Abstract Image/Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_70%)] blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 relative z-10">
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">2500<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Projects</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">525<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Experts</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">25<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Domains</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">8<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Partners</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">7<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Years</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">4<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Countries</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Case Studies Auto-Carousel */}
        <div className="flex flex-col mt-10 lg:mt-0 w-full h-full">

          <div className="relative w-full">
            {caseStudies.map((study, idx) => (
              <div
                key={study.title}
                className={`w-full transition-opacity duration-1000 ${idx === activeIndex ? "opacity-100 z-10 relative" : "opacity-0 z-0 absolute top-0 left-0 pointer-events-none"
                  }`}
              >
                <div className="flex flex-col gap-6">
                  {/* Image UI with Tag and Title Inside */}
                  <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-2 relative border border-zinc-800 flex flex-col justify-end p-6 md:p-8 shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-10 pointer-events-none"></div>
                    <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen transition-all duration-700 group-hover:scale-105 group-hover:opacity-80" />

                    {/* Left/Right Navigation Arrows Inside Image */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-rose-600 hover:border-rose-500 transition-all shadow-xl transform -translate-x-4 group-hover:translate-x-0"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-rose-600 hover:border-rose-500 transition-all shadow-xl transform translate-x-4 group-hover:translate-x-0"
                      >
                        <ArrowRight size={20} />
                      </button>
                    </div>

                    <div className="relative z-20">
                      <span className="text-xs font-mono tracking-widest text-rose-400 block mb-3 drop-shadow-md">
                        {study.tag}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg">
                        {study.title}
                      </h3>
                    </div>
                  </div>

                  {/* Challenge -> Strategy -> Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-455 border-y border-zinc-900/60 py-6">
                    <div>
                      <span className="block font-semibold text-zinc-300 mb-1">Challenge</span>
                      <p className="leading-relaxed font-bold">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="block font-semibold text-zinc-300 mb-1">Strategy</span>
                      <p className="leading-relaxed font-bold">{study.strategy}</p>
                    </div>
                    <div>
                      <span className="block font-semibold text-zinc-300 mb-1">Solution</span>
                      <p className="leading-relaxed font-bold">{study.solution}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-mono text-zinc-500 mr-2 uppercase">Core Tech:</span>
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 bg-zinc-900 border border-zinc-850 rounded text-xs text-zinc-350"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Result Indicator */}
                  <div className="inline-flex items-center gap-2 p-3 bg-rose-950/20 border border-rose-900/30 rounded-lg text-rose-500 text-sm font-semibold max-w-max mt-2">
                    <Zap size={14} />
                    <span>{study.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls & View All Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 mt-8 border-t border-zinc-900/60 w-full">

            <div className="flex items-center gap-6">
              {/* Dots */}
              <div className="flex gap-3">
                {caseStudies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${i === activeIndex ? "w-8 bg-rose-500" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* View All */}
            <a href="/case-studies" className="group flex items-center gap-2 text-rose-500 hover:text-rose-400 font-bold transition-all text-sm uppercase tracking-wider">
              Explore All Outcomes <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
