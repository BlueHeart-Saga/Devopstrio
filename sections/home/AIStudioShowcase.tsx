"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const aiDifferenceItems = [
  {
    id: "philosophy",
    title: "Strategic GenAI & Enterprise AI Philosophy",
    description:
      "We believe AI is a core operational transformation engine. We design custom generative copilots, agentic automation frameworks, and enterprise LLM architectures tailored to your unique industry requirements, security standards, and growth goals.",
    image: "/assets/Home-page/ai-native/philosophy.png"
  },
  {
    id: "system",
    title: "Autonomous AI Systems & MLOps Engineering",
    description:
      "Our battle-tested AI engineering framework automates intelligent code generation, continuous model evaluation, automated data pipelines, and zero-trust security compliance — accelerating time-to-value by up to 50% with enterprise reliability.",
    image: "/assets/Home-page/ai-native/engineering.png"
  },
  {
    id: "measurement",
    title: "Measurable Business ROI & AI Governance",
    description:
      "We measure every AI deployment across velocity, accuracy, security, and long-term scalability. With continuous real-time telemetry and strict AI governance, we guarantee transparent business impact and sustainable operational excellence.",
    image: "/assets/Home-page/ai-native/measurement.png"
  }
];

const azureUrl = "https://devopstrioaiservices-e6dnggh5gxehh9d0.southindia-01.azurewebsites.net/";

const aiTransformationCards = [
  {
    title: "Generative AI & Copilots",
    subtitle: "Custom Enterprise LLMs",
    description: "Architect bespoke GenAI engines, domain-tuned copilot assistants, and semantic RAG systems for intelligent workplace productivity.",
    image: "/assets/Home-page/ai-studio/ai-sdlc.png",
    link: "/services/ai-data-innovation",
    badge: "GenAI & LLMs"
  },
  {
    title: "Agentic Automation",
    subtitle: "Autonomous Digital Agents",
    description: "Deploy goal-driven autonomous AI agents that execute complex multi-step enterprise workflows, API orchestrations, and back-office operations.",
    image: "/assets/Home-page/ai-studio/agentic-office.png",
    link: "/services/ai-data-innovation",
    badge: "AI Agents"
  },
  {
    title: "Document & Workflow AI",
    subtitle: "Intelligent Process Automation",
    description: "Transform unstructured contracts, financial PDFs, and medical records into actionable insights with multi-modal Document AI and predictive telemetry.",
    image: "/assets/Home-page/ai-studio/ai-managed-services.png",
    link: "/services/ai-data-innovation",
    badge: "DocAI & Analytics"
  },
  {
    title: "Enterprise AI R&D Studio",
    subtitle: "Custom ML & Vision Engineering",
    description: "End-to-end Machine Learning model training, computer vision synthesis, vector search platforms, and rapid enterprise AI solution prototyping.",
    image: "/assets/Home-page/ai-studio/ai-lab.png",
    link: azureUrl,
    badge: "AI Lab & MLOps"
  }
];

export function AIStudioShowcase() {
  const primaryUrl = "https://devopstrioaiservices-e6dnggh5gxehh9d0.southindia-01.azurewebsites.net";
  const [openDifferenceId, setOpenDifferenceId] = useState<string>("philosophy");

  return (
    <section className="w-full pt-0 pb-16 md:pb-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900">

      {/* Background Ambient Curved Light Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] md:h-[550px] bg-gradient-to-r from-red-600/10 via-rose-500/15 to-red-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">

        {/* Section Header - Centered & Impressive Enterprise Copy */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block font-mono">
              PIONEERING ARTIFICIAL INTELLIGENCE
            </span>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-4 font-sans leading-tight">
              Shaping the Future with <span className="text-rose-500">Enterprise AI Innovation</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-zinc-100 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              From visionary GenAI strategies and autonomous digital agents to custom neural engineering and bulletproof AI governance — we empower global enterprises to innovate faster, elevate human potential, and achieve extraordinary business outcomes.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services/ai-data-innovation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,29,72,0.45)] hover:-translate-y-0.5"
              >
                <span>Explore AI Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={azureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-200 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Launch AI Studio Hub</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Feature Banner: Our AI-Native Difference Accordion Card */}
        <Reveal>
          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-8 md:p-12 mb-16 overflow-hidden shadow-2xl">

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8 font-sans">
              Our Enterprise <span className="text-rose-500">AI Engineering Excellence</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Accordion Left Side */}
              <div className="lg:col-span-6 flex flex-col divide-y divide-zinc-800/80 border-t border-b border-zinc-800/80">
                {aiDifferenceItems.map((item) => {
                  const isOpen = openDifferenceId === item.id;

                  return (
                    <div key={item.id} className="py-5 transition-colors">
                      <button
                        onClick={() => setOpenDifferenceId(isOpen ? "" : item.id)}
                        className="w-full flex items-center justify-between text-left group cursor-pointer"
                      >
                        <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? "text-white" : "text-zinc-400 group-hover:text-white"}`}>
                          {item.title}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-rose-500 group-hover:border-rose-500/50 transition-colors shrink-0 ml-4">
                          {isOpen ? <Minus className="w-4 h-4 text-red-500" /> : <Plus className="w-4 h-4 text-zinc-400 group-hover:text-red-500" />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-zinc-100 text-base md:text-[17px] leading-relaxed pt-4 pb-2 font-normal">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* 3D Graphic Preview Right Side */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-zinc-950 min-h-[300px] sm:min-h-[360px] md:min-h-[400px] flex items-center justify-center">
                  {aiDifferenceItems.map((item) => (
                    <img
                      key={item.id}
                      src={item.image}
                      alt={item.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${openDifferenceId === item.id ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                        }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 pointer-events-none" />
                </div>
              </div>

            </div>

          </div>
        </Reveal>

        {/* 4 Transformation Cards Grid */}
        <div className="mb-0">
          <Reveal>
            <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white mb-8">
              Comprehensive <span className="text-rose-500">AI Services For Enterprises</span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTransformationCards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.08} className="h-full">
                <Link
                  href={card.link}
                  className="relative group flex flex-col justify-between bg-[#0A0A0A] rounded-[24px] p-3 border border-zinc-800/80 hover:border-rose-500/60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden shadow-xl hover:shadow-[0_15px_45px_rgba(0,0,0,0.8)] h-full cursor-pointer"
                >
                  {/* Hover-only Full Screen Expanded Background Image with Glass Overlay */}
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60 backdrop-blur-xs" />
                  </div>

                  {/* Content Wrapper */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Uniform Top Cover Image Frame (Fades gracefully on hover to reveal expanded full card image) */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[16px] bg-zinc-900 border border-zinc-800/60 mb-4 group/img transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        {/* Top Badges Overlaid on Image */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                          {card.badge}
                        </div>
                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Card Body - Transitions smoothly upward on hover */}
                      <div className="px-2 flex flex-col gap-1.5 transition-transform duration-500 group-hover:-translate-y-20">
                        {/* Badge shown on hover */}
                        <div className="hidden group-hover:flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-500/20 border border-rose-500/30 text-rose-400">
                            {card.badge}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-rose-600 flex items-center justify-center text-white shadow-md">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <span className="text-[#E11D48] text-xs font-semibold uppercase tracking-widest group-hover:text-rose-400 transition-colors">
                          {card.subtitle}
                        </span>
                        <h4 className="text-white text-lg md:text-xl font-bold leading-snug tracking-tight font-sans">
                          {card.title}
                        </h4>
                        <p className="text-zinc-100 text-sm md:text-base leading-relaxed font-normal line-clamp-3 group-hover:line-clamp-none transition-all mt-1">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Link Footer */}
                    <div className="px-2 pt-4 mt-5 border-t border-zinc-800/80 group-hover:border-rose-500/40 flex items-center justify-between transition-colors">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-500 group-hover:text-rose-400">
                        Explore Capability
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-rose-500 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

