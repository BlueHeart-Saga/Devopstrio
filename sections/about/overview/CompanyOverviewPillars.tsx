"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface OverviewPillar {
  id: string;
  title: string;
  quote: string;
}

const overviewPillars: OverviewPillar[] = [
  {
    id: "vision",
    title: "Our Vision",
    quote: "To be a global leader in Cloud, AI, and DevOps by empowering organizations to harness multi-cloud innovation, intelligent automation, and data-driven decision-making to drive resilient growth.",
  },
  {
    id: "mission",
    title: "Our Mission",
    quote: "To empower businesses with innovative Cloud, AI, and DevOps solutions that simplify complexity, accelerate transformation, and deliver measurable impact through trust and agility.",
  },
  {
    id: "values",
    title: "Core Values",
    quote: "Built on integrity, transparency, and relentless innovation — delivering sustainable growth and engineering excellence for enterprises worldwide.",
  },
];

export function CompanyOverviewPillars() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section className="w-full pt-0 pb-0 bg-[#030303] text-white relative overflow-hidden font-sans">
      {/* Ambient Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] md:h-[550px] bg-gradient-to-r from-red-600/10 via-rose-500/15 to-red-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* 3 Pillar Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 bg-zinc-950/30 backdrop-blur-md rounded-2xl overflow-hidden min-h-[340px] md:min-h-[380px] transition-all duration-500">
          {overviewPillars.map((pillar, idx) => {
            const isHovered = activeHoverId === pillar.id;

            return (
              <Reveal key={pillar.id} delay={idx * 0.08} className="h-full">
                <div
                  onMouseEnter={() => setActiveHoverId(pillar.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center h-full relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[340px] md:min-h-[380px] cursor-pointer group ${
                    isHovered
                      ? "bg-[#030303] shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-20"
                      : "bg-transparent"
                  }`}
                >
                  {/* Initial Default Content (Title Only) — Hidden when Hovered */}
                  <div
                    className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center text-center ${
                      isHovered
                        ? "opacity-0 scale-95 pointer-events-none absolute inset-x-6 sm:inset-x-8 md:inset-x-10"
                        : "opacity-100 scale-100 relative"
                    }`}
                  >
                    <h3 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-white font-sans">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Hover Quote Only — Revealed on Hover without Border Box Wrap */}
                  <div
                    className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center text-center ${
                      isHovered
                        ? "opacity-100 scale-100 relative z-10"
                        : "opacity-0 scale-95 pointer-events-none absolute inset-x-6 sm:inset-x-8 md:inset-x-10"
                    }`}
                  >
                    <p className="text-base sm:text-lg md:text-xl italic text-rose-100 font-semibold leading-relaxed font-sans drop-shadow-md">
                      &ldquo;{pillar.quote}&rdquo;
                    </p>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CompanyOverviewPillars;
