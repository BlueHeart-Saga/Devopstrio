"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function ExpertiseBanner() {
  return (
    <section id="expertise" className="w-full py-16 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Glassmorphic Banner Container */}
        <div className="bg-[#0b0b0c] border border-white/10 rounded-[32px] p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between items-center text-left">
          
          {/* Subtle background glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] blur-3xl pointer-events-none z-0" />

          {/* Left Block */}
          <div className="lg:w-[70%] relative z-10">
            <Reveal>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
                Co-engineered compliance & <span className="text-[#E11D48]">security benchmarks</span>
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                We actively certify all deployments against strict industry policies. Our templates support pre-configured ISO-27001 configurations, HIPAA health isolation parameters, and SOC-2 audit databases.
              </p>
            </Reveal>
          </div>

          {/* Right Block: Stats */}
          <div className="lg:w-[30%] flex justify-start lg:justify-end gap-8 text-left relative z-10 w-full">
            <div className="border-l-2 border-[#E11D48]/30 pl-4">
              <span className="block text-4xl font-black text-[#E11D48] mb-1">100%</span>
              <span className="block text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Audit readiness</span>
            </div>
            <div className="border-l-2 border-[#E11D48]/30 pl-4">
              <span className="block text-4xl font-black text-[#E11D48] mb-1">Zero</span>
              <span className="block text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Breaches</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
