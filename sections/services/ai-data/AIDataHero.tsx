"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function AIDataHero() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side Details */}
        <Reveal className="flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              PRACTICE AREA / AI & DATA
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white mb-6">
            Cognitive architectures, ML pipelines, and <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">data orchestration</span>.
          </h1>
          
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xl">
            We architect and deploy production-grade Large Language Model (LLM) workflows, semantic caching systems, and secure data layers for modern digital transformations.
          </p>
        </Reveal>

        {/* Right Side Image */}
        <div className="relative w-full max-w-[500px] lg:max-w-none mx-auto overflow-hidden flex items-center justify-center">
          <img 
            src="/assets/herocard/insightspage.png" 
            alt="AI & Data Practice Hero" 
            className="w-full h-auto object-contain max-h-[460px] select-none pointer-events-none"
          />
        </div>

      </div>
    </section>
  );
}
