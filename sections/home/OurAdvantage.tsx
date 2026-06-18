"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Rocket, Globe2, Cloud, TrendingUp 
} from "lucide-react";

interface AdvantageCardData {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  tags: string[];
}

const kpis = [
  { value: "525+", label: "Experts" },
  { value: "2,500+", label: "Projects Delivered" },
  { value: "25+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" }
];

const leftCards: AdvantageCardData[] = [
  {
    title: "Innovation Without Limits",
    desc: "Harness AI, Cloud, Data, and Automation to accelerate transformation and unlock new opportunities.",
    icon: Rocket,
    tags: ["AI Solutions", "Cloud Native", "Data Platforms"]
  },
  {
    title: "Global Reach, Local Expertise",
    desc: "UK leadership combined with global engineering teams delivering scalable solutions worldwide.",
    icon: Globe2,
    tags: ["UK", "USA", "India"]
  }
];

const rightCards: AdvantageCardData[] = [
  {
    title: "Built for Scale & Resilience",
    desc: "Design secure, cloud-native architectures across Azure, AWS, and Google Cloud.",
    icon: Cloud,
    tags: ["Azure", "AWS", "GCP"]
  },
  {
    title: "Outcomes That Matter",
    desc: "Focused on measurable results through faster delivery, lower costs, and higher operational efficiency.",
    icon: TrendingUp,
    tags: ["Business Value", "Growth", "Performance"]
  }
];

export function OurAdvantage() {
  const renderCard = (card: AdvantageCardData, idx: number) => {
    const Icon = card.icon;

    return (
      <Reveal key={idx} className="w-full">
        <div className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-[20px] rounded-[28px] p-6 md:p-8 hover:-translate-y-2 hover:border-rose-500/35 hover:shadow-[0_20px_50px_rgba(225,29,72,0.12)] transition-all duration-300 flex flex-col justify-between min-h-[300px] group relative overflow-hidden">
          
          {/* Card Top / Body */}
          <div>
            <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-rose-500 group-hover:scale-105 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-md">
              <Icon size={18} strokeWidth={1.5} />
            </div>

            <h3 className="text-white text-base md:text-lg font-bold tracking-tight mt-6 mb-3 group-hover:text-rose-350 transition-colors">
              {card.title}
            </h3>

            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">
              {card.desc}
            </p>
          </div>

          {/* Card Bottom / Tags */}
          <div>
            <div className="border-t border-white/[0.04] mb-4" />
            <div className="flex flex-wrap gap-1.5">
              {card.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="text-[9px] font-bold px-2.5 py-1 bg-white/[0.03] text-zinc-400 rounded-full border border-white/[0.05] group-hover:border-rose-500/20 group-hover:bg-rose-500/[0.02] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </Reveal>
    );
  };

  return (
    <section className="w-full py-16 md:py-20 bg-[#030303] text-white relative overflow-hidden" id="advantage">
      {/* Background ambient light effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header Section */}
        <Reveal className="max-w-3xl mx-auto mb-16 flex flex-col items-center text-center">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            The Devopstrio Advantage
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
            Technology Without Limits. <span className="text-rose-500">Built for Growth.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-bold">
            At DevOpsTrio, we help organizations modernize infrastructure, accelerate innovation, and unlock new growth opportunities through secure, reliable, and scalable digital engineering.
          </p>
        </Reveal>

        {/* Center KPI Strip */}
        <Reveal className="w-full mb-16">
          <div className="bg-[#050507]/40 border border-zinc-900/80 backdrop-blur-md rounded-[32px] p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 lg:divide-x divide-zinc-900 shadow-2xl relative overflow-hidden">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
                <span className="text-3xl md:text-4xl xl:text-5xl font-black text-rose-500 tracking-tight mb-2 select-none">
                  {kpi.value}
                </span>
                <span className="text-zinc-450 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  {kpi.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 3-Column Layout: Left (2 cards), Center (Image), Right (2 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.8fr_1.1fr] gap-8 lg:gap-10 items-center max-w-[1400px] mx-auto">
          
          {/* Left Column: Cards 1 & 2 */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {leftCards.map((card, idx) => renderCard(card, idx))}
          </div>

          {/* Center Column: Advantage Graphic Image */}
          <div className="flex justify-center items-center relative py-6 lg:py-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
            <img
              src="/assets/Home-page/advandage.png"
              alt="DevopsTrio Advantage"
              className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-full h-auto object-contain select-none filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
            />
          </div>

          {/* Right Column: Cards 3 & 4 */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {rightCards.map((card, idx) => renderCard(card, idx))}
          </div>

        </div>

      </div>
    </section>
  );
}

export { OurAdvantage as default };
