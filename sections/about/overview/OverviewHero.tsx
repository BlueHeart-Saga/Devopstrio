"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, Globe2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function OverviewHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-40 pb-20 overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/About-page/building/building.png" 
          alt="Devopstrio Building"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft top-bottom gradient to blend with layout boundaries and left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-5" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
        <div className="max-w-3xl">
          <Reveal delay={0.05}>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#E11D48] mb-4 block">
              ENGINEERING THE FUTURE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              Building Solutions.<br />
              Delivering Impact<span className="text-[#E11D48]">.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base text-zinc-300 font-medium max-w-xl mb-10 leading-relaxed">
              Devopstrio is a global technology consulting and engineering company helping organizations modernize, innovate and scale with AI, Cloud, DevOps and Enterprise Engineering.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4 items-center justify-start mb-16">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-500 hover:border-white bg-transparent hover:bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 gap-2"
              >
                <span>Talk to an Expert</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 mb-16 max-w-2xl">
              <div className="border-l border-zinc-700/60 pl-4">
                <Users size={22} className="text-[#E11D48] mb-3 opacity-90" strokeWidth={1.5} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1.5">7+</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold leading-relaxed">Years of<br/>Excellence</div>
              </div>
              <div className="border-l border-zinc-700/60 pl-4">
                <Briefcase size={22} className="text-[#E11D48] mb-3 opacity-90" strokeWidth={1.5} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1.5">2500+</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold leading-relaxed">Projects<br/>Delivered</div>
              </div>
              <div className="border-l border-zinc-700/60 pl-4">
                <Users size={22} className="text-[#E11D48] mb-3 opacity-90" strokeWidth={1.5} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1.5">525+</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold leading-relaxed">Technology<br/>Experts</div>
              </div>
              <div className="border-l border-zinc-700/60 pl-4">
                <Globe2 size={22} className="text-[#E11D48] mb-3 opacity-90" strokeWidth={1.5} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1.5">Global</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold leading-relaxed">Delivery<br/>Model</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="text-xs text-zinc-400 mb-5 font-medium">Trusted by innovative companies worldwide</div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center gap-2 font-semibold text-lg tracking-tight"><div className="grid grid-cols-2 gap-[2px]"><div className="w-2.5 h-2.5 bg-[#00A4EF]"/><div className="w-2.5 h-2.5 bg-[#7FBA00]"/><div className="w-2.5 h-2.5 bg-[#F25022]"/><div className="w-2.5 h-2.5 bg-[#FFB900]"/></div>Microsoft</div>
              <div className="font-bold text-xl tracking-tighter flex items-center">aws</div>
              <div className="font-medium text-lg tracking-tight flex items-center">Google Cloud</div>
              <div className="font-bold text-lg tracking-widest flex items-center text-red-600">ORACLE</div>
              <div className="font-bold text-lg tracking-tight flex items-center">servicenow</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
