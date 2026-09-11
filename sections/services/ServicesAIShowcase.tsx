"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

const aiWebsiteUrl = "https://ai.devopstrio.co.uk";

const aiServicesList = [
  {
    id: "industries",
    title: "Industries",
    subtitle: "Sector-Specific Intelligence",
    description: "Engineered AI frameworks tailored specifically for Healthcare, Banking & Finance, Retail, and Manufacturing environments.",
    link: "https://ai.devopstrio.co.uk/industries/overview",
    icon: "/assets/Home-page/AI-Services-Gif/Industry.gif",
    badge: "Sector Solutions"
  },
  {
    id: "capabilities",
    title: "AI Capabilities",
    subtitle: "Foundation Models & Inference",
    description: "Custom LLM fine-tuning, cognitive semantic search, high-throughput inference pipelines, and multimodal enterprise models.",
    link: "https://ai.devopstrio.co.uk/capabilities/overview",
    icon: "/assets/Home-page/AI-Services-Gif/Services.gif",
    badge: "Foundation Models"
  },
  {
    id: "solutions",
    title: "Enterprise Solutions",
    subtitle: "Scalable Architecture & Workflows",
    description: "Mission-critical enterprise AI architectures, automated workflows, and end-to-end digital modernization engines.",
    link: "https://ai.devopstrio.co.uk/solutions/overview",
    icon: "/assets/Home-page/AI-Services-Gif/AI_Solutions.gif",
    badge: "Enterprise Stacks"
  },
  {
    id: "products",
    title: "AI Products",
    subtitle: "Ready-to-Deploy Platforms",
    description: "Production-ready AI platforms including AIHire talent matching, cognitive doc indexers, and automated evaluation suites.",
    link: "https://ai.devopstrio.co.uk/products/overview",
    icon: "/assets/Home-page/AI-Services-Gif/AI-products.gif",
    badge: "AI Platforms"
  },
  {
    id: "agents",
    title: "AI Agents",
    subtitle: "Autonomous Digital Workforce",
    description: "Deploy autonomous digital agents for automated IT operations, real-time finance auditing, and multi-step customer workflows.",
    link: "https://ai.devopstrio.co.uk/agents/overview",
    icon: "/assets/Home-page/AI-Services-Gif/AI-Agent.gif",
    badge: "Autonomous Workforce"
  },
  {
    id: "innovation",
    title: "Innovation Lab",
    subtitle: "Advanced R&D & Experimentation",
    description: "Cutting-edge experimentation with frontier AI models, novel neural architectures, and rapid proof-of-concept development.",
    link: "https://ai.devopstrio.co.uk/innovation/overview",
    icon: "/assets/Home-page/AI-Services-Gif/AI-Security-governance.gif",
    badge: "R&D Lab"
  },
  {
    id: "integrations",
    title: "Integrations",
    subtitle: "Unified Ecosystem Connectors",
    description: "Seamless enterprise connectivity across OpenAI, Anthropic, LangChain, vector databases, and multi-cloud environments.",
    link: "https://ai.devopstrio.co.uk/integrations/overview",
    icon: "/assets/Home-page/AI-Services-Gif/AI-technology-ecosystem.gif",
    badge: "Ecosystem Connectors"
  }
];

interface AICardProps {
  item: typeof aiServicesList[0];
  flexClass?: string;
  delay?: number;
}

function AICard({ item, flexClass = "flex-1", delay = 0 }: AICardProps) {
  return (
    <Reveal delay={delay} className={`w-full ${flexClass} flex flex-col min-h-[160px] transition-all duration-500`}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full bg-gradient-to-br from-zinc-950/90 via-zinc-950/80 to-[#0a0507]/90 hover:from-rose-950/40 hover:via-zinc-950 hover:to-zinc-950 border border-white/10 hover:border-rose-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 group shadow-xl backdrop-blur-md relative overflow-hidden cursor-pointer"
      >
        {/* Glow backdrop effect on card hover */}
        <div className="absolute -right-10 -top-10 w-56 h-56 bg-rose-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Top: Icon */}
        <div className="relative z-10 mb-2 sm:mb-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
            <img
              src={item.icon}
              alt={`${item.title} icon`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain filter-none drop-shadow-[0_0_18px_rgba(244,63,94,0.7)]"
            />
          </div>
        </div>

        {/* Content: Title + Hover-revealed details */}
        <div className="relative z-10 mt-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans group-hover:text-rose-400 transition-colors leading-tight mb-1">
            {item.title}
          </h3>

          {/* Hover Details: Subtitle & Description (Reveals smoothly on hover) */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <div className="overflow-hidden pt-2">
              <p className="text-xs sm:text-sm font-semibold text-rose-400 mb-1 font-sans">
                {item.subtitle}
              </p>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal font-sans line-clamp-2 sm:line-clamp-3 mb-3">
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

        {/* Bento Mosaic 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch max-w-7xl mx-auto h-auto lg:h-[620px] xl:h-[650px]">

          {/* Column 1: 2 Cards (Equal balanced height) */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 h-full">
            <AICard item={aiServicesList[0]} flexClass="lg:flex-1 hover:lg:flex-[1.25]" delay={0.05} />
            <AICard item={aiServicesList[1]} flexClass="lg:flex-1 hover:lg:flex-[1.25]" delay={0.1} />
          </div>

          {/* Column 2: 3 Cards (Hover expansion ensures full visibility) */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 h-full">
            <AICard item={aiServicesList[2]} flexClass="lg:flex-1 hover:lg:flex-[1.7]" delay={0.15} />
            <AICard item={aiServicesList[3]} flexClass="lg:flex-1 hover:lg:flex-[1.7]" delay={0.2} />
            <AICard item={aiServicesList[4]} flexClass="lg:flex-1 hover:lg:flex-[1.7]" delay={0.25} />
          </div>

          {/* Column 3: 2 Cards (Equal balanced height) */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 h-full">
            <AICard item={aiServicesList[5]} flexClass="lg:flex-1 hover:lg:flex-[1.25]" delay={0.3} />
            <AICard item={aiServicesList[6]} flexClass="lg:flex-1 hover:lg:flex-[1.25]" delay={0.35} />
          </div>

        </div>

      </div>
    </section>
  );
}
