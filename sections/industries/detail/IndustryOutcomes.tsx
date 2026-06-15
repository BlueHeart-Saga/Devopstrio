"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface OutcomeItem {
  value: string;
  label: string;
  desc: string;
}

interface IndustryOutcomesProps {
  outcomes: OutcomeItem[];
}

export function IndustryOutcomes({ outcomes }: IndustryOutcomesProps) {
  return (
    <section id="outcomes" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Business Outcomes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Quantifiable <span className="text-[#E11D48]">operational value</span>
          </h2>
        </Reveal>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {outcomes.map((out, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer">
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
                  {/* Huge stats value */}
                  <span className="block text-5xl font-black font-sans tracking-tight text-[#E11D48] mb-4 group-hover:scale-[1.02] transition-transform duration-300 select-none">
                    {out.value}
                  </span>
                  
                  {/* Label */}
                  <h4 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-[#E11D48] transition-colors duration-300">
                    {out.label}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                    {out.desc}
                  </p>
                </div>

                {/* Card Footer decoration */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-zinc-500 group-hover:text-white transition-colors duration-300 relative z-10">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold">
                    Outcome Target
                  </span>
                  <span className="text-[10px] font-bold">
                    ✓ Verified
                  </span>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
