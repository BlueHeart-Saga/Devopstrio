"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowDown } from "lucide-react";

export function PresenceTourTrip() {
  const scrollToLocations = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const target = document.getElementById("locations");
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-4 pb-16 md:pb-24 bg-[#030303] text-white relative border-b border-zinc-900/60 overflow-hidden text-center select-none">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.06),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white mb-3">
            Take a Tour: <span className="text-rose-500 font-semibold">Our People & Places</span>
          </h2>
        </Reveal>

        {/* Mid & Big Sized Straight Top-To-Bottom Arrow */}
        <Reveal delay={0.1}>
          <div 
            onClick={scrollToLocations}
            className="flex flex-col items-center justify-center my-6 cursor-pointer group transition-all duration-500 hover:scale-105"
            title="Click to start tour"
          >
            <img src="/webp/assets/components/streight-toptobuttm.webp"
              alt="Scroll to Explore Locations"
              className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain filter drop-shadow-[0_0_25px_rgba(225,29,72,0.55)] group-hover:drop-shadow-[0_0_40px_rgba(225,29,72,0.9)] transition-all duration-500"
            loading="lazy" />
          </div>
        </Reveal>

        {/* Glassmorphism Button & Smooth Scroll UI */}
        <Reveal delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              onClick={scrollToLocations}
              className="group inline-flex items-center gap-3.5 px-8 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/20 hover:border-rose-500/70 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(225,29,72,0.35)] transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              <span className="group-hover:text-rose-400 transition-colors">Explore Global Hubs</span>
              <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-rose-600/40 border border-white/15 flex items-center justify-center transition-colors">
                {/* <ArrowDown size={13} className="text-white group-hover:translate-y-0.5 transition-transform duration-300" /> */}
              </div>
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
