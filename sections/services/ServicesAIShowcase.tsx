"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

const aiWebsiteUrl = "https://ai.devopstrio.co.uk";

const aiServicesList = [
  {
    id: "solutions",
    title: "AI Solutions",
    subtitle: "Cognitive Enterprise Stacks",
    description: "Custom enterprise solutions built on top-tier cognitive stacks, incorporating semantic retrieval systems and customized LLMs.",
    link: `${aiWebsiteUrl}/#solutions`,
    icon: "/assets/Home-page/AI-Services-Gif/AI_Solutions.gif",
    badge: "Cognitive Stacks"
  },
  {
    id: "services",
    title: "AI Services",
    subtitle: "Modernization & Model Training",
    description: "End-to-end consulting, continuous modernization, custom model training, and integration pipelines built for modern businesses.",
    link: `${aiWebsiteUrl}/#services`,
    icon: "/assets/Home-page/AI-Services-Gif/Services.gif",
    badge: "Model Training"
  },
  {
    id: "agents",
    title: "AI Agents",
    subtitle: "Autonomous Digital Workforce",
    description: "Deploy autonomous digital agents trained for IT support operations, sales pipeline execution, finance auditing, and HR operations.",
    link: `${aiWebsiteUrl}/#agents`,
    icon: "/assets/Home-page/AI-Services-Gif/AI-Agent.gif",
    badge: "Autonomous Workforce"
  },
  {
    id: "industry",
    title: "AI by Industry",
    subtitle: "Sector-Specific Engineering",
    description: "Engineered frameworks optimized specifically for Healthcare workflows, Banking security compliance, and Smart Retail recommendations.",
    link: `${aiWebsiteUrl}/#industries`,
    icon: "/assets/Home-page/AI-Services-Gif/Industry.gif",
    badge: "Sector Solutions"
  },
  {
    id: "ecosystem",
    title: "AI Technology Ecosystem",
    subtitle: "Leading-Edge Stack Integrations",
    description: "Harness standard-setting integrations with OpenAI, Anthropic, LangChain, vector datastores, and cloud environments.",
    link: `${aiWebsiteUrl}/#ecosystem`,
    icon: "/assets/Home-page/AI-Services-Gif/AI-technology-ecosystem.gif",
    badge: "Stack Integrations"
  },
  {
    id: "governance",
    title: "AI Governance",
    subtitle: "Zero-Trust Security & Audit",
    description: "Establish model explainability benchmarks, human-in-the-loop oversight workflows, and zero-trust security audits.",
    link: `${aiWebsiteUrl}/#governance`,
    icon: "/assets/Home-page/AI-Services-Gif/AI-Security-governance.gif",
    badge: "Zero-Trust Security"
  },
  {
    id: "platforms",
    title: "AI Platforms & Products",
    subtitle: "Intelligent Search & Matching",
    description: "Activate AIHire matching platforms, cognitive search indexers, and automated academic document evaluation studios.",
    link: `${aiWebsiteUrl}/#platforms`,
    icon: "/assets/Home-page/AI-Services-Gif/AI-products.gif",
    badge: "AI Platforms"
  }
];

interface AICardProps {
  item: typeof aiServicesList[0];
  flexClass?: string;
  delay?: number;
}

function AICard({ item, flexClass = "flex-1", delay = 0 }: AICardProps) {
  return (
    <Reveal delay={delay} className={`w-full ${flexClass} flex flex-col min-h-[160px]`}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full bg-gradient-to-br from-zinc-950/90 via-zinc-950/80 to-[#0a0507]/90 hover:from-rose-950/40 hover:via-zinc-950 hover:to-zinc-950 border border-white/10 hover:border-rose-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-500 group shadow-xl backdrop-blur-md relative overflow-hidden cursor-pointer"
      >
        {/* Glow backdrop effect on card hover */}
        <div className="absolute -right-10 -top-10 w-56 h-56 bg-rose-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Top: Big Icon (NO background, NO border container) */}
        <div className="relative z-10 mb-2 sm:mb-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
            <img
              src={item.icon}
              alt={`${item.title} icon`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain filter-none drop-shadow-[0_0_18px_rgba(244,63,94,0.7)]"
            />
          </div>
        </div>

        {/* Content: Big Title + Hover-revealed details */}
        <div className="relative z-10 mt-auto">
          {/* Big Viewable Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight font-sans group-hover:text-rose-400 transition-colors leading-tight mb-1">
            {item.title}
          </h3>

          {/* Hover Details: Subtitle & Description (Reveals smoothly on hover) */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <div className="overflow-hidden pt-2">
              <p className="text-xs sm:text-sm font-semibold text-rose-400 mb-1.5 font-sans">
                {item.subtitle}
              </p>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal font-sans line-clamp-3 mb-3">
                {item.description}
              </p>

              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-400 group-hover:text-white transition-colors">
                <span>Explore {item.title}</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export function ServicesAIShowcase() {
  return (
    <section className="w-full pt-16 pb-16 md:pt-20 md:pb-20 bg-[#030303] text-white relative overflow-hidden font-sans border-t border-zinc-900/60" id="ai-services">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <Reveal>
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-6 font-sans leading-relaxed flex flex-wrap items-center justify-center gap-x-3">
                <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1.5 rounded-xl inline-block align-middle shadow-[0_4px_20px_rgba(244,63,94,0.35)]">
                  IMAGINE
                </span>{" "}
                <span>the Future with</span>{" "}
                <span className="relative inline-block px-1.5 mx-1">
                  <span className="text-white font-semibold relative z-10">Enterprise AI</span>
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-4 text-rose-500 pointer-events-none overflow-visible z-0"
                    viewBox="0 0 240 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 2 8 Q 60 4, 120 7 T 238 6"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-95 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.75)]"
                    />
                  </svg>
                </span>
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Bento Mosaic 3-Column Grid matching reference pattern with auto-adjusting responsive gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch max-w-7xl mx-auto h-auto lg:h-[640px] xl:h-[680px]">

          {/* Column 1: 2 Cards (Large Top, Medium Bottom) */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 h-full">
            <AICard item={aiServicesList[0]} flexClass="lg:flex-[1.55]" delay={0.05} />
            <AICard item={aiServicesList[1]} flexClass="lg:flex-[1.0]" delay={0.1} />
          </div>

          {/* Column 2: 3 Cards (Top, Middle, Bottom) */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 h-full">
            <AICard item={aiServicesList[2]} flexClass="lg:flex-1" delay={0.15} />
            <AICard item={aiServicesList[3]} flexClass="lg:flex-1" delay={0.2} />
            <AICard item={aiServicesList[4]} flexClass="lg:flex-1" delay={0.25} />
          </div>

          {/* Column 3: 2 Cards (Medium Top, Large Bottom) */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 h-full">
            <AICard item={aiServicesList[5]} flexClass="lg:flex-[1.0]" delay={0.3} />
            <AICard item={aiServicesList[6]} flexClass="lg:flex-[1.55]" delay={0.35} />
          </div>

        </div>

      </div>
    </section>
  );
}
