"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface IndustryHeroProps {
  industryName: string;
  title: string;
  highlightedWord: string;
  subtitle?: string;
  bgImage: string;
}

export function IndustryHero({
  industryName,
  title,
  highlightedWord,
  bgImage
}: IndustryHeroProps) {
  return (
    <section className="w-full relative overflow-hidden bg-black text-white min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between border-b border-zinc-900/60 -mt-16 font-sans">
      {/* Background Graphic Asset with High-End Gradients */}
      <div className="absolute inset-0 z-0">
        <img src={bgImage} 
          alt={`${industryName} Hero Background`} 
          className="w-full h-full object-cover object-center select-none pointer-events-none opacity-75 filter brightness-[1.15] contrast-[1.05]"
        loading="eager" />
        {/* Spotlights and dark linear gradient masking */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 via-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.06),transparent_50%)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-8 relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 flex-grow flex flex-col justify-between">
        
        {/* Custom Breadcrumb - Pinned at top side right below Navbar */}
        <Reveal className="flex items-center gap-2 text-xs md:text-sm font-semibold text-zinc-400 mb-6 uppercase tracking-widest">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} className="text-zinc-600 flex-shrink-0" />
          <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
          <ChevronRight size={14} className="text-zinc-600 flex-shrink-0" />
          <span className="text-rose-500 font-semibold">{industryName}</span>
        </Reveal>

        {/* Animated Header */}
        <div className="max-w-4xl text-left my-auto py-4">
          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.12] text-white font-sans">
              {title}{" "}
              <span className="text-rose-500 font-semibold">{highlightedWord}</span>
            </h1>
          </Reveal>
        </div>

      </div>
    </section>
  );
}


