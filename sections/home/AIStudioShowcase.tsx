"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const aiDifferenceItems = [
  {
    id: "philosophy",
    title: "Our AI Philosophy",
    description:
      "We believe AI is not just an add-on layer, but a foundational engineering paradigm. We integrate generative copilots, agentic automation, and self-learning pipelines directly into your core SDLC and enterprise architecture.",
    image: "/assets/Home-page/ai-native/philosophy.png"
  },
  {
    id: "system",
    title: "Our Engineering System",
    description:
      "Our proprietary AI engineering system automates code reviews, regression testing, cloud provisioning, and security compliance. Ship production features up to 50% faster with absolute zero technical debt.",
    image: "/assets/Home-page/ai-native/engineering.png"
  },
  {
    id: "measurement",
    title: "Our Measurement Platform",
    description:
      "We measure every engagement across three dimensions: milestone delivery, build quality, and long-term scalability. Through continuous, real-time tracking, we proactively optimize performance before challenges ever impact your timeline - so you always know exactly where your investment stands.",
    image: "/assets/Home-page/ai-native/measurement.png"
  }
];

const azureUrl = "https://devopstrioaiservices-e6dnggh5gxehh9d0.southindia-01.azurewebsites.net/";

const aiTransformationCards = [
  {
    title: "AI in SDLC",
    subtitle: "AI Chat & Code Copilots",
    description: "Embed specialized LLMs across development pipelines for rapid prototyping, context lookup, and automated code reviews.",
    image: "/assets/Home-page/ai-studio/ai-sdlc.png",
    link: azureUrl,
    badge: "Copilot AI"
  },
  {
    title: "Agentic Back Office",
    subtitle: "Autonomous Digital Agents",
    description: "Deploy goal-oriented autonomous AI agents to execute multi-step business workflows, API calls, and operations.",
    image: "/assets/Home-page/ai-studio/agentic-office.png",
    link: azureUrl,
    badge: "Smart Agents"
  },
  {
    title: "AI in Managed Services",
    subtitle: "Document & Workflow AI",
    description: "Automated OCR, contract intelligence, PDF parsing, and predictive telemetry for enterprise cloud operations.",
    image: "/assets/Home-page/ai-studio/ai-managed-services.png",
    link: azureUrl,
    badge: "DocAI & SRE"
  },
  {
    title: "AI Lab",
    subtitle: "Enterprise AI Studio R&D",
    description: "Multi-modal image synthesis, fine-tuned domain models, vector search, and rapid AI solution prototyping.",
    image: "/assets/Home-page/ai-studio/ai-lab.png",
    link: azureUrl,
    badge: "GenAI Studio"
  }
];

export function AIStudioShowcase() {
  const primaryUrl = "https://devopstrioaiservices-e6dnggh5gxehh9d0.southindia-01.azurewebsites.net";
  const [openDifferenceId, setOpenDifferenceId] = useState<string>("measurement");

  return (
    <section className="w-full pt-20 md:pt-32 pb-16 md:pb-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900">

      {/* Background Ambient Curved Light Halo (Matching ServicesOverviewPillars style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] md:h-[550px] bg-gradient-to-r from-red-600/10 via-rose-500/15 to-red-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block font-mono">
                ENTERPRISE AI PLATFORM
              </span>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-white mb-3 font-sans">
                Devopstrio <span className="text-rose-500">AI Studio</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
                Empower your workforce with an integrated workspace for Chat, Image Generation, Document Intelligence, AI Agents, and Business Automation.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="flex flex-wrap gap-3">
              <a
                href={azureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,29,72,0.45)] hover:-translate-y-0.5"
              >
                <span>🚀 Launch AI Platform</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-200 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>AI Studio Hub</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Feature Banner: Our AI-Native Difference Accordion Card */}
        <Reveal>
          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-8 md:p-12 mb-16 overflow-hidden shadow-2xl">

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8 font-sans">
              Our <span className="text-rose-500">AI-Native Difference</span>
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
                            <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed pt-4 pb-2 font-normal">
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
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-8">
              Four ways we transform <span className="text-rose-500">organizations with AI</span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTransformationCards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.08}>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md group h-[380px] shadow-xl hover:border-rose-500/60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] block cursor-pointer flex flex-col justify-between"
                >
                  {/* Hover-only Full Screen Expanded Background Image with Light Studio Glass Overlay */}
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EB]/95 via-[#F5F2EB]/85 to-[#FAF8F5]/75" />
                  </div>

                  {/* Content Wrapper */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-6">

                    {/* Top Portion: Title, Badge & Subtitle */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 group-hover:bg-[#EAE7E0] group-hover:text-black group-hover:border-zinc-300 transition-colors">
                          {card.badge}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-black/50 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-black group-hover:border-zinc-300 group-hover:bg-white transition-all">
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-black transition-colors tracking-tight font-sans">
                        {card.title}
                      </h4>

                      <p className="text-xs font-semibold text-rose-500/90 mb-2 group-hover:text-red-600 transition-colors">
                        {card.subtitle}
                      </p>

                      <p className="text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-800 transition-colors line-clamp-2">
                        {card.description}
                      </p>
                    </div>

                    {/* Initial State: Edge-to-Edge Bottom 3D Graphic Image Frame */}
                    <div className="relative -mx-6 -mb-6 w-[calc(100%+3rem)] h-[195px] rounded-b-[15px] rounded-t-none overflow-hidden border-t border-zinc-800/60 bg-zinc-950 group-hover:opacity-0 group-hover:scale-95 transition-all duration-300">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Hover State: Bottom Action Footer */}
                    <div className="absolute bottom-6 left-6 right-6 pt-3 border-t border-zinc-800/80 group-hover:border-zinc-400/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white group-hover:text-black transition-colors">
                        Launch Capability
                      </span>
                      <span className="text-xs text-red-500 font-bold group-hover:text-red-600 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>

                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
