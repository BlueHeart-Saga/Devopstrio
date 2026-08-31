"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { RibbonGraphic } from "@/components/ui/RibbonGraphic";

export function CareersBeyondHero() {
  const scrollToPositions = () => {
    const el = document.getElementById("open-positions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#030303] text-white pt-36 sm:pt-40 md:pt-48 lg:pt-52 pb-12 md:pb-16 lg:pb-20 min-h-[80vh] flex flex-col justify-center overflow-hidden font-sans border-b border-zinc-900/80">
      
      {/* Right Side Ribbon Graphic Background - Shifted slightly left */}
      <div className="absolute right-0 sm:right-8 md:right-14 lg:right-20 top-12 sm:top-16 md:top-20 bottom-0 w-full lg:w-[60%] h-full pointer-events-none z-0 opacity-85 lg:opacity-100">
        <RibbonGraphic className="w-full h-full" />
      </div>

      {/* Dark Ambient Lighting Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.08),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10 my-auto">
        
        {/* Main Grid Content - Vertically Centered Left Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[50vh]">
          
          <div className="lg:col-span-12 flex flex-col text-left">
            {/* Title with Trailing Underscore _ (Semi-Bold) */}
            <Reveal delay={0.05} className="mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.12] font-sans max-w-4xl">
                Let&apos;s Go Beyond your <br className="hidden sm:inline" />
                <span className="font-semibold text-white">Potential</span>
                <span className="text-rose-500 font-semibold animate-pulse">_</span>
              </h2>
            </Reveal>

            {/* Description Subtitle - Indented / Offset Right Under Heading */}
            <div className="ml-0 sm:ml-16 md:ml-36 lg:ml-52 max-w-xl">
              <Reveal delay={0.15}>
                <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8">
                  At Devopstrio, we provide a supportive environment where you can unleash your strengths and bring your best ideas to life. So, seize the opportunity to create value in your unique way.
                </p>
              </Reveal>

              {/* Split Action Button (Hovered Red BG) */}
              <Reveal delay={0.25}>
                <button
                  onClick={scrollToPositions}
                  className="inline-flex items-center bg-zinc-950 hover:bg-rose-600 border border-zinc-700/90 hover:border-rose-500 rounded-md overflow-hidden transition-all duration-300 group cursor-pointer shadow-2xl hover:shadow-[0_0_30px_rgba(225,29,72,0.4)]"
                >
                  {/* Left Text */}
                  <span className="px-7 py-4 text-sm md:text-base font-semibold text-white tracking-wide border-r border-zinc-800 group-hover:border-rose-500/60 transition-colors">
                    Find Your Job
                  </span>
                  
                  {/* Right Arrow Section */}
                  <span className="px-5 py-4 flex items-center justify-center text-white bg-zinc-900/90 group-hover:bg-rose-700 transition-colors">
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Reveal>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
