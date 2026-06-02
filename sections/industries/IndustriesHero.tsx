"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function IndustriesHero() {
  return (
    <section className="w-full relative overflow-hidden bg-black text-white min-h-[520px] lg:min-h-[600px] flex items-center border-b border-zinc-900">
      
      {/* Cover Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/industries_hero_bg.png" 
          alt="Industrial Refinery Background" 
          className="w-full h-full object-cover object-center select-none pointer-events-none opacity-85"
        />
        {/* Premium Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/90 via-[#030303]/60 to-[#030303]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
      </div>

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 py-20 lg:py-28">
        <div className="max-w-3xl">
          
          {/* Breadcrumb Navigation matching Mockup */}
          <Reveal className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-400 mb-8 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="text-zinc-600">&gt;</span>
            <span className="text-rose-500 font-medium">Oil and Gas Technology Solutions</span>
          </Reveal>

          {/* Headline matching Mockup style */}
          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.12] text-white mb-6">
              Driving Innovation and Excellence <br className="hidden sm:inline" />
              in <span className="font-medium bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">Oil and Gas</span>
            </h1>
          </Reveal>

          {/* Subtext description */}
          <Reveal delay={0.2}>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light max-w-xl mb-10">
              We design, build and scale industrial-grade digital architectures that automate field logistics, optimize resource planning, and enforce extreme pipeline telemetry safety standards.
            </p>
          </Reveal>

          {/* CTA Connect Button */}
          <Reveal delay={0.3}>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Connect with us <span className="text-rose-600 font-bold">&rarr;</span>
            </a>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
