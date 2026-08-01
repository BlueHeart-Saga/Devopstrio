"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface IndustryHeroProps {
  industryName: string;
  title: string;
  highlightedWord: string;
  subtitle: string;
  bgImage: string;
}

export function IndustryHero({
  industryName,
  title,
  highlightedWord,
  subtitle,
  bgImage
}: IndustryHeroProps) {
  return (
    <section className="w-full relative overflow-hidden bg-black text-white min-h-[550px] lg:min-h-[640px] flex items-center border-b border-zinc-900/60 -mt-16">
      {/* Background Graphic Asset with High-End Gradients */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={`${industryName} Hero Background`} 
          className="w-full h-full object-cover object-center select-none pointer-events-none opacity-75 filter brightness-[1.15] contrast-[1.05]"
        />
        {/* Spotlights and dark linear gradient masking */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 via-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.06),transparent_50%)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-3xl text-left">
          
          {/* Custom Breadcrumb */}
          <Reveal className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="text-zinc-700">&gt;</span>
            <a href="/industries" className="hover:text-white transition-colors">Industries</a>
            <span className="text-zinc-700">&gt;</span>
            <span className="text-rose-500 font-semibold">{industryName}</span>
          </Reveal>

          {/* Premium Tag */}
          {/* <Reveal delay={0.05}>
            <span className="mb-6 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              Sector Specialization
            </span>
          </Reveal> */}

          {/* Animated Header */}
          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
              {title}
              <br />
              <span className="text-[#E11D48]">{highlightedWord}</span>
            </h1>
          </Reveal>

          {/* Subtitle block */}
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
              {subtitle}
            </p>
          </Reveal>

          {/* CTA Link */}
          <Reveal delay={0.3}>
            <a 
              href="#overview" 
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
            >
              Explore Capabilities <span className="ml-2">↓</span>
            </a>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
