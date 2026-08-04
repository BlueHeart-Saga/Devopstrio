"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Rocket, Globe2, Cloud, TrendingUp 
} from "lucide-react";
import Link from "next/link";

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
    tags: ["AI", "Cloud", "Data"]
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
    tags: ["Value", "Growth", "Speed"]
  }
];

export function OurAdvantage() {
  const renderCard = (card: AdvantageCardData, idx: number, position: 'left' | 'right') => {
    const Icon = card.icon;

    return (
      <Reveal key={idx} className="w-full relative z-20">
        <div className="group relative flex flex-col items-start text-left gap-4 w-full">
          
          {/* Circular Glowing Icon with Connecting Arcs */}
          <div className="relative">
             <div className="relative z-10 flex items-center justify-center w-[60px] h-[60px] rounded-full border border-rose-500/40 bg-black shadow-[0_0_30px_rgba(225,29,72,0.2)] group-hover:shadow-[0_0_50px_rgba(225,29,72,0.5)] group-hover:border-rose-400 transition-all duration-500">
               {/* dashed outer ring */}
               <div className="absolute inset-[-5px] border-[1.5px] border-dashed border-rose-500/40 rounded-full animate-[spin_15s_linear_infinite]" />
               <Icon size={22} className="text-rose-500 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
             </div>
             
             {/* Half-circle connecting arc to simulate the screenshot */}
             {position === 'left' && (
                <div className="absolute top-1/2 left-8 w-[120px] lg:w-[180px] h-[120px] lg:h-[180px] border-[1px] border-rose-500/30 rounded-full -translate-y-1/2 pointer-events-none z-0" style={{ clipPath: 'polygon(50% -20%, 120% -20%, 120% 120%, 50% 120%)' }} />
             )}
             {position === 'right' && (
                <div className="absolute top-1/2 right-8 w-[120px] lg:w-[180px] h-[120px] lg:h-[180px] border-[1px] border-rose-500/30 rounded-full -translate-y-1/2 pointer-events-none z-0" style={{ clipPath: 'polygon(-20% -20%, 50% -20%, 50% 120%, -20% 120%)' }} />
             )}
          </div>

          <div className="flex flex-col gap-2 mt-2 max-w-[300px]">
            <h3 className="text-white text-lg lg:text-xl font-bold tracking-tight group-hover:text-rose-400 transition-colors">
              {card.title}
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
              {card.desc}
            </p>
          </div>

          {/* Red Pill Tags */}
          <div className="flex flex-wrap gap-2.5 justify-start mt-1">
            {card.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="inline-flex items-center justify-center px-3 py-1.5 rounded text-[10px] md:text-xs font-black tracking-[0.1em] uppercase bg-[#E11D48] hover:bg-rose-500 text-white transition-all duration-300 shadow-[0_4px_15px_rgba(225,29,72,0.25)] hover:shadow-[0_8px_25px_rgba(225,29,72,0.4)] hover:-translate-y-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </Reveal>
    );
  };

  return (
    <section className="w-full py-10 md:py-16 bg-[#030303] text-white relative overflow-hidden" id="advantage">
      {/* Background ambient light effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header Section */}
        <Reveal className="max-w-3xl mx-auto mb-10 md:mb-14 flex flex-col items-center text-center">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            The Devopstrio Advantage
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
            Technology Without Limits. Built for Growth.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-bold">
            At DevOpsTrio, we help organizations <Link href="/services/cloud-services" className="text-rose-500 hover:underline">modernize infrastructure</Link>, <Link href="/services/digital-transformation" className="text-rose-500 hover:underline">accelerate innovation</Link>, and unlock new growth opportunities through secure, reliable, and scalable <Link href="/services/software-development" className="text-rose-500 hover:underline">digital engineering</Link>.
          </p>
        </Reveal>

        {/* Center KPI Strip (No Borders/Boxes) */}
        <Reveal className="w-full mb-12 lg:mb-16 mt-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto relative z-20">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center px-2">
                <span className="text-3xl md:text-4xl xl:text-5xl font-black text-rose-500 tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(225,29,72,0.4)] select-none">
                  {kpi.value}
                </span>
                <span className="text-zinc-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  {kpi.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 3-Column Layout: Left (2 cards), Center (Image), Right (2 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center max-w-[1150px] mx-auto relative">
          
          {/* Left Column: Cards 1 & 2 */}
          <div className="flex flex-col gap-14 lg:gap-20 w-full lg:max-w-[320px] lg:ml-auto lg:mr-4">
            {leftCards.map((card, idx) => renderCard(card, idx, 'left'))}
          </div>

          {/* Center Column: Advantage Graphic Image */}
          <div className="flex justify-center items-center relative py-10 lg:py-0 w-full min-h-[350px]">

            {/* Pop-out U-Shape Cutout Image Wrapper (Top perfectly transparent, Bottom curved) */}
            <div className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[340px]">
              
              {/* Bottom Glowing U-Shape Base (No border) */}
              <div className="absolute bottom-0 left-0 right-0 h-[60%] rounded-b-full bg-gradient-to-t from-rose-950/40 to-transparent shadow-[0_25px_50px_rgba(225,29,72,0.3)] pointer-events-none" />

              {/* Bottom Smile Border (Fades out before hitting the vertical left/right edges) */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[60%] rounded-b-full border-b-[1.5px] border-rose-500/60 pointer-events-none z-20"
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 25%, black 75%, transparent 95%)', maskImage: 'linear-gradient(to right, transparent 5%, black 25%, black 75%, transparent 95%)' }}
              />

              {/* Image Container (Clipped at the bottom, transparent at the top) */}
              <div className="relative w-full rounded-b-full overflow-hidden flex items-end">
                <img
                  src="/assets/Home-page/advandage1.png"
                  alt="DevopsTrio Advantage"
                  className="w-full h-auto object-contain object-bottom select-none relative z-10 block"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Cards 3 & 4 */}
          <div className="flex flex-col gap-14 lg:gap-20 w-full lg:max-w-[320px] lg:mr-auto lg:ml-4">
            {rightCards.map((card, idx) => renderCard(card, idx, 'right'))}
          </div>

        </div>

      </div>
    </section>
  );
}

export { OurAdvantage as default };
