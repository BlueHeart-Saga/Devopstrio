"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, Code2, Sparkles, ArrowUpRight, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AgentCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  desc: string;
  agents: string[];
}

const categoryBgImages: Record<string, string> = {
  business: "/webp/assets/ecosystem/grid/platforms-solutions-page_grid_5/Generated-Design-1.webp",
  it_engineering: "/webp/assets/ecosystem/grid/platforms-solutions-page_grid_5/Generated-Design-2.webp",
  knowledge_productivity: "/webp/assets/ecosystem/grid/platforms-solutions-page_grid_5/Generated-Design-3.webp",
};

export function AIAgentsSection() {
  const [activeCategory, setActiveCategory] = useState("business");

  const categories: AgentCategory[] = [
    {
      id: "business",
      label: "Business Agents",
      icon: <Briefcase size={16} />,
      desc: "Autonomous intelligent agents engineered to streamline corporate workflows, talent operations, sales pipelines, and customer engagements.",
      agents: [
        "HR Agent",
        "Sales Agent",
        "Marketing Agent",
        "Customer Support Agent",
        "Finance Agent",
        "Procurement Agent",
        "Legal Agent",
        "Executive Assistant",
      ],
    },
    {
      id: "it_engineering",
      label: "IT & Engineering Agents",
      icon: <Code2 size={16} />,
      desc: "Specialized engineering agents powering continuous delivery, platform resilience, cloud telemetry, security audits, and automated QA.",
      agents: [
        "DevOps Agent",
        "Software Engineering Agent",
        "QA Testing Agent",
        "Cloud Operations Agent",
        "Security Operations Agent",
        "Database Agent",
      ],
    },
    {
      id: "knowledge_productivity",
      label: "Knowledge & Productivity Agents",
      icon: <Sparkles size={16} />,
      desc: "Intelligent cognitive agents accelerating research, document discovery, meeting summarization, multi-modal workflows, and institutional knowledge retrieval.",
      agents: [
        "Knowledge Agent",
        "Research Agent",
        "Document Agent",
        "Meeting Agent",
        "Email Agent",
        "Workflow Agent",
      ],
    },
  ];

  const currentCat = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="ai-agents" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 xl:px-8 relative z-10">
        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
              AI <span className="text-rose-500">Agents</span>
            </h2>
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div className="flex items-center justify-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                    : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          {/* Left Tall Card (Col 1) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[380px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-violet-650/5 rounded-full blur-3xl pointer-events-none" />

              {/* Dynamic Abstract Background Image */}
              {categories.map((cat) => (
                <img
                  key={cat.id}
                  src={categoryBgImages[cat.id]}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${
                    activeCategory === cat.id ? "opacity-35" : "opacity-0"
                  }`}
                  loading="lazy"
                />
              ))}

              {/* Card top details */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-white mb-4">
                  <div className="w-9 h-9 rounded-xl bg-rose-600/10 flex items-center justify-center text-rose-500">
                    {currentCat.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {currentCat.label}
                  </h3>
                </div>
              </div>

              {/* Card bottom details */}
              <div className="relative z-10 mt-8">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2 font-semibold">
                  Status
                </div>
                <div className="text-sm md:text-base text-white font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Production Ready
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Agents Grid (Col 2-4) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentCat.agents.map((agentName, idx) => (
                <motion.div
                  key={agentName}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="h-full"
                >
                  <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[160px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                    {/* Subtle color highlight glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-white group-hover/card:text-rose-400 transition-colors mb-2">
                        {agentName}
                      </h4>
                    </div>

                    {/* Non-navigating action button as requested */}
                    <div className="inline-flex items-center gap-2.5 group/link mt-auto w-fit select-none">
                      <span className="w-7 h-7 rounded-full bg-rose-600/10 group-hover/card:bg-rose-600 text-rose-500 group-hover/card:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight
                          size={12}
                          className="transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                        />
                      </span>
                      <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-zinc-400 group-hover/card:text-zinc-200 transition-colors">
                        Launch System
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
