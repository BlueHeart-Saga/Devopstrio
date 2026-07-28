"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Zap, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  tag: string;
  title: string;
  challenge: string;
  strategy: string;
  solution: string;
  technologies: string[];
  result: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    tag: "COMPOSABLE KYC & AML",
    title: "AI-Powered AML, Financial Crime, and Investigations Platform",
    challenge: "Financial institutions faced complex regulatory audits, manual KYC bottlenecks, and sophisticated fraud patterns.",
    strategy: "Build a composable KYC intelligence platform integrating Identity, Data, AI, Workflows, and Continuous Monitoring.",
    solution: "Delivered a trigger-based remediation platform for digital onboarding, entity resolution, and adverse media intelligence.",
    technologies: ["AI Copilot", "Graph Databases", "Machine Learning", "Kubernetes"],
    result: "Real-time threat detection across Banks & FinTechs",
    image: "/assets/Home-page/case-studies/COMPOSABLE-KYC-AML.png"
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
    }, 9000); // Smooth auto-scroll every 9 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="cases" className="w-full pt-4 md:pt-8 pb-14 md:pb-20 bg-[#030303] text-white relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-20 items-start">

        {/* Left Side: Overview & Trusted Stats */}
        <div className="relative flex flex-col gap-10 lg:pr-6">
          <div>
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-4 block">
                CASE STUDIES
              </span>
            </Reveal>
            <Reveal>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                Technology Investments That Deliver <span className="text-rose-500">Business Value</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
                We partner with organizations to solve complex challenges through <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-medium">AI</Link>, <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-medium">cloud engineering</Link>, <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-medium">cybersecurity</Link>, <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-medium">DevOps</Link>, and <Link href="/services/software-development" className="text-rose-500 hover:underline font-medium">software development</Link> — creating measurable outcomes that drive efficiency, innovation, and long-term growth.
              </p>
            </Reveal>
          </div>

          {/* High-Level Enterprise Metrics (UI Box) */}
          <Reveal className="relative border border-zinc-900 bg-zinc-950/40 p-6 md:p-8 rounded-xl overflow-hidden shadow-2xl mt-2">
            {/* UI Abstract Image/Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_70%)] blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 relative z-10">
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">2500<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-0.5">Projects</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">525<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-0.5">Experts</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">25<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-0.5">Domains</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">8<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-0.5">Partners</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">7<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-0.5">Years</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-light text-white">4<span className="text-rose-500 font-bold">+</span></span>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-0.5">Countries</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Case Studies Auto-Carousel */}
        <div className="flex flex-col mt-10 lg:mt-0 w-full h-full relative">
          <div className="w-full relative min-h-[580px] md:min-h-[520px] lg:min-h-[540px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="w-full flex flex-col gap-6"
              >
                {/* Image UI with Tag and Title Inside */}
                <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-2 relative border border-zinc-800/80 flex flex-col justify-end p-6 md:p-8 shadow-2xl group cursor-pointer">
                  {/* Subtle clean dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent z-10 pointer-events-none" />

                  <img
                    src={caseStudies[activeIndex].image}
                    alt={caseStudies[activeIndex].title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[1.2s] group-hover:scale-103 group-hover:opacity-85 select-none"
                  />

                  {/* Left/Right Navigation Arrows Inside Image */}
                  <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                      className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-rose-600 hover:border-rose-500 transition-all shadow-xl transform -translate-x-2 group-hover:translate-x-0"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-rose-600 hover:border-rose-500 transition-all shadow-xl transform translate-x-2 group-hover:translate-x-0"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  <div className="relative z-20">
                    <span className="text-xs font-mono tracking-widest text-rose-400 block mb-3 drop-shadow-sm uppercase font-semibold">
                      {caseStudies[activeIndex].tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-snug drop-shadow-md">
                      {caseStudies[activeIndex].title}
                    </h3>
                  </div>
                </div>

                {/* Challenge -> Strategy -> Solution */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm border-y border-zinc-900/60 py-6">
                  <div>
                    <span className="block font-semibold text-zinc-300 mb-1.5 uppercase text-xs tracking-wider font-mono">Challenge</span>
                    <p className="leading-relaxed text-zinc-300 font-normal text-sm md:text-base">{caseStudies[activeIndex].challenge}</p>
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-300 mb-1.5 uppercase text-xs tracking-wider font-mono">Strategy</span>
                    <p className="leading-relaxed text-zinc-300 font-normal text-sm md:text-base">{caseStudies[activeIndex].strategy}</p>
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-300 mb-1.5 uppercase text-xs tracking-wider font-mono">Solution</span>
                    <p className="leading-relaxed text-zinc-300 font-normal text-sm md:text-base">{caseStudies[activeIndex].solution}</p>
                  </div>
                </div>

                {/* Bottom details row: Technologies & Results */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-[10px] font-mono text-zinc-500 mr-2 uppercase tracking-wider">Core Tech:</span>
                    {caseStudies[activeIndex].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 bg-zinc-900/60 border border-zinc-800/80 rounded text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Result Indicator Badge */}
                  <div className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
                    <Zap size={12} className="animate-pulse" />
                    <span>{caseStudies[activeIndex].result}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls & View All Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 mt-8 border-t border-zinc-900/60 w-full relative z-20">
            <div className="flex items-center gap-6">
              {/* Dots */}
              <div className="flex gap-2.5">
                {caseStudies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? "w-6 bg-rose-500" : "w-1.5 bg-zinc-800 hover:bg-zinc-650"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* View All Button */}
            <a
              href="/insights/case-studies"
              className="group flex items-center gap-2 text-rose-500 hover:text-rose-400 font-bold transition-all text-xs uppercase tracking-wider"
            >
              Explore All Outcomes
              <ArrowUpRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
