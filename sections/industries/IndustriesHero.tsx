"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface IndustriesHeroProps {
  breadcrumbCurrent?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  bgImage?: string;
}

export function IndustriesHero({
  breadcrumbCurrent = "Industries",
  titlePrefix = "Driving Innovation and Excellence across",
  titleHighlight = "Global Industries",
  subtitle = "We design, build and scale industrial-grade digital architectures that automate field logistics, optimize resource planning, and enforce extreme telemetry safety standards.",
  bgImage = "/assets/industries_hero_bg.png"
}: IndustriesHeroProps) {
  return (
    <section className="w-full relative overflow-hidden bg-black text-white min-h-[550px] lg:min-h-[640px] flex items-center border-b border-zinc-900/60 -mt-16">
      
      {/* Cover Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={`${breadcrumbCurrent} Background`} 
          className="w-full h-full object-cover object-center select-none pointer-events-none opacity-40 filter brightness-[0.8] contrast-[1.05]"
        />
        {/* Premium Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-30% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.06),transparent_50%)] pointer-events-none" /> */}
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-3xl text-left">
          
          {/* Breadcrumb Navigation */}
          <Reveal className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-550 mb-8 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="text-zinc-755">&gt;</span>
            {breadcrumbCurrent !== "Industries" ? (
              <>
                <a href="/industries" className="hover:text-white transition-colors">Industries</a>
                <span className="text-zinc-755">&gt;</span>
              </>
            ) : null}
            <span className="text-rose-500 font-semibold">{breadcrumbCurrent}</span>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.12] text-white mb-6">
              {titlePrefix} <br className="hidden sm:inline" />
              <span className="font-semibold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">{titleHighlight}</span>
            </h1>
          </Reveal>

          {/* Subtext description */}
          <Reveal delay={0.2}>
            <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-light max-w-xl mb-10">
              {subtitle}
            </p>
          </Reveal>

          {/* CTA Connect Button */}
          <Reveal delay={0.3}>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-rose-600 bg-rose-600/5 hover:bg-rose-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(225,29,72,0.35)]"
            >
              Connect with us <ArrowUpRight size={13} />
            </a>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
