"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function ExpertiseBanner() {
  return (
    <section id="expertise" className="w-full pt-4 pb-12 md:pt-6 md:pb-14 bg-[#030303] relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">
        
        {/* Glassmorphic Banner Container */}
        <div className="bg-[#0b0b0c] border border-white/10 rounded-[32px] p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between items-center text-left">
          
          {/* Subtle background glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] blur-3xl pointer-events-none z-0" />

          {/* Left Block */}
          <div className="lg:w-[70%] relative z-10">
            <Reveal>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
                Co-engineered compliance & <span className="text-[#E11D48] font-semibold">security benchmarks</span>
              </h3>
            </Reveal>
          </div>

          {/* Right Block: Stats */}
          <div className="lg:w-[30%] flex justify-start lg:justify-end gap-8 text-left relative z-10 w-full">
            <div className="border-l-2 border-rose-500/30 pl-4">
              <span className="block text-4xl font-black text-rose-500 mb-1">100%</span>
              <span className="block text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 uppercase">Audit readiness</span>
            </div>
            <div className="border-l-2 border-rose-500/30 pl-4">
              <span className="block text-4xl font-black text-rose-500 mb-1">Zero</span>
              <span className="block text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 uppercase">Breaches</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
