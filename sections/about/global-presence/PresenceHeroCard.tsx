"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function PresenceHeroCard() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-[#030303] text-white pt-28 pb-8 lg:pt-36 lg:pb-12 overflow-hidden text-center select-none">
      {/* Soft Ambient Top Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.08),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10">
        {/* Main Headline */}
        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.15] text-white font-sans">
            Together, We Go Further.
          </h1>
        </Reveal>

        {/* Beautiful Feel-Good Quote */}
        <Reveal delay={0.15}>
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-4 max-w-3xl mx-auto tracking-wide">
            &ldquo;Connected across continents, inspired by authentic roots &mdash; uniting passionate minds and technology to build a better world.&rdquo;
          </p>
        </Reveal>
      </div>

      {/* Full Width Graphic Panorama */}
      <Reveal delay={0.2} className="w-full mt-8 md:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
        <div className="relative w-full flex items-center justify-center">
          <img src="/webp/assets/About-page/hero/image3.webp"
            alt="Devopstrio Global Presence Story"
            className="w-full h-auto object-contain max-h-[500px] lg:max-h-[600px] select-none"
          loading="eager" />
        </div>
      </Reveal>
    </section>
  );
}
