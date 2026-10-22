"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RibbonGraphic } from "@/components/ui/RibbonGraphic";

export function EcosystemTopHero() {
  return (
    <section className="relative w-full bg-[#030303] text-white pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-24 min-h-[75vh] flex flex-col justify-center overflow-hidden font-sans border-b border-zinc-900/80">
      
      {/* Right Side Ribbon Graphic Background - Starts below navbar */}
      <div className="absolute right-0 sm:right-8 md:right-14 lg:right-20 top-12 sm:top-16 md:top-20 bottom-0 w-full lg:w-[60%] h-full pointer-events-none z-0 opacity-85 lg:opacity-100">
        <RibbonGraphic className="w-full h-full" />
      </div>

      {/* Ambient Red Glow Spotlight */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.08),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10 my-auto">
        
        {/* Main Grid Content - Left Title & Offset Right Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[45vh]">
          
          <div className="lg:col-span-12 flex flex-col text-left">
            {/* Main Heading with Trailing Underscore */}
            <Reveal delay={0.05} className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] font-sans max-w-4xl">
                Ecosystem &amp; Innovation
                <span className="text-rose-500 font-semibold animate-pulse">_</span>
              </h1>
            </Reveal>

            {/* Description Subtitle - Indented / Offset Right Under Heading */}
            <div className="ml-0 sm:ml-16 md:ml-36 lg:ml-52 max-w-xl">
              <Reveal delay={0.15}>
                <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
                  Our interconnected technology ecosystem combining enterprise cloud accelerators, open-source frameworks, strategic hyper-scaler partnerships, and next-gen AI platforms.
                </p>
              </Reveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default EcosystemTopHero;
