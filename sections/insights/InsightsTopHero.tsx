"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { RibbonGraphic } from "@/components/ui/RibbonGraphic";

export function InsightsTopHero() {
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
                Insights &amp; Publications
                <span className="text-rose-500 font-semibold animate-pulse">_</span>
              </h1>
            </Reveal>

            {/* Description Subtitle - Indented / Offset Right Under Heading */}
            <div className="ml-0 sm:ml-16 md:ml-36 lg:ml-52 max-w-xl">
              <Reveal delay={0.15}>
                <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8">
                  Deep-dives, architecture blueprints, post-mortems, and cloud-native technical publications authored directly by our principal SRE, DevOps, and Generative AI platform engineers.
                </p>
              </Reveal>

              {/* Scroll Down Indicator */}
              <Reveal delay={0.25}>
                <a
                  href="#featured-highlights"
                  className="inline-flex items-center gap-3.5 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-all group cursor-pointer pt-2 select-none"
                >
                  <div className="w-10 h-10 rounded-full border border-zinc-700/80 bg-zinc-900/90 flex items-center justify-center text-rose-500 group-hover:border-rose-500 group-hover:bg-rose-500/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(244,63,94,0.25)]">
                    <ArrowDown size={17} className="animate-bounce" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-rose-400 transition-colors">
                      Explore Publications
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-500 tracking-wider uppercase font-medium">
                      Scroll to discover insights ↓
                    </span>
                  </div>
                </a>
              </Reveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default InsightsTopHero;
