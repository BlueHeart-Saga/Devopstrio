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
    <section className="w-full relative overflow-hidden bg-black text-white min-h-[550px] lg:min-h-[640px] flex items-center border-b border-zinc-900/60">
      {/* Background Graphic Asset with High-End Gradients */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={`${industryName} Hero Background`} 
          className="w-full h-full object-cover object-center select-none pointer-events-none opacity-40 filter brightness-[0.8] contrast-[1.05]"
        />
        {/* Spotlights and dark linear gradient masking */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.06),transparent_50%)] pointer-events-none" />
      </div>

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10 py-20 lg:py-28">
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
          <Reveal delay={0.05}>
            <span className="inline-block px-3 py-1 bg-rose-600/10 border border-rose-500/20 text-rose-500 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
              Sector Specialization
            </span>
          </Reveal>

          {/* Animated Header */}
          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.12] text-white mb-6">
              {title} <br className="hidden sm:inline" />
              <span className="font-semibold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">{highlightedWord}</span>
            </h1>
          </Reveal>

          {/* Subtitle block */}
          <Reveal delay={0.2}>
            <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-light max-w-xl mb-10">
              {subtitle}
            </p>
          </Reveal>

          {/* CTA Link */}
          <Reveal delay={0.3}>
            <a 
              href="#overview" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900/40 hover:border-zinc-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              Explore Capabilities <span className="text-rose-500 font-bold">&darr;</span>
            </a>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
