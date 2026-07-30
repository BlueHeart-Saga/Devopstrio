"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Building2, Users, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function PresenceHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-40 pb-20 overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/About-page/hero/Build locally delivering globally.png" 
          alt="Devopstrio Global Footprint"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft top-bottom gradient to blend with layout boundaries and left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-5" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
        <div className="max-w-3xl">
          <Reveal delay={0.05}>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#E11D48] mb-4 block">
              Global Scale, Local Accountability
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              Built Locally.<br />
              Delivering Globally<span className="text-[#E11D48]">.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base text-zinc-300 font-medium max-w-xl mb-10 leading-relaxed">
              Devopstrio combines strategic leadership, distributed <Link href="/services" className="text-[#E11D48] hover:underline">engineering</Link>, and round-the-clock <Link href="/services/managed-services" className="text-[#E11D48] hover:underline">operational support</Link> to help organizations across <Link href="/industries" className="text-[#E11D48] hover:underline">industries</Link> modernize, scale, and innovate—wherever they operate.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4 items-center justify-start mb-16">
              <Link
                href="#map"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 gap-2"
              >
                <span>View Footprint Map</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-500 hover:border-white bg-transparent hover:bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 gap-2"
              >
                <span>Talk to an Expert</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          {/* Highlights Row with Left Borders */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 mb-16 max-w-2xl">
              <div className="border-l border-zinc-700/60 pl-4">
                <Building2 size={22} className="text-[#E11D48] mb-3 opacity-90" strokeWidth={1.5} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1.5">6</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold leading-relaxed">Global<br/>Offices</div>
              </div>
              <div className="border-l border-zinc-700/60 pl-4">
                <Globe size={22} className="text-[#E11D48] mb-3 opacity-90" strokeWidth={1.5} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1.5">3+</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold leading-relaxed">Countries<br/>Represented</div>
              </div>
              <div className="border-l border-zinc-700/60 pl-4">
                <Users size={22} className="text-[#E11D48] mb-3 opacity-90" strokeWidth={1.5} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1.5">525+</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold leading-relaxed">Technology<br/>Experts</div>
              </div>
              <div className="border-l border-zinc-700/60 pl-4">
                <Clock size={22} className="text-[#E11D48] mb-3 opacity-90" strokeWidth={1.5} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1.5">24/7</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold leading-relaxed">Managed Support<br/>& Delivery</div>
              </div>
            </div>
          </Reveal>

          {/* Trusted Partners Banner */}
          {/* <Reveal delay={0.25}>
            <div className="text-xs text-zinc-400 mb-5 font-medium">Supporting Enterprise Infrastructure Worldwide</div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center gap-2 font-semibold text-lg tracking-tight"><div className="grid grid-cols-2 gap-[2px]"><div className="w-2.5 h-2.5 bg-[#00A4EF]"/><div className="w-2.5 h-2.5 bg-[#7FBA00]"/><div className="w-2.5 h-2.5 bg-[#F25022]"/><div className="w-2.5 h-2.5 bg-[#FFB900]"/></div>Microsoft</div>
              <div className="font-bold text-xl tracking-tighter flex items-center">aws</div>
              <div className="font-medium text-lg tracking-tight flex items-center">Google Cloud</div>
              <div className="font-bold text-lg tracking-widest flex items-center text-red-600">ORACLE</div>
              <div className="font-bold text-lg tracking-tight flex items-center">servicenow</div>
            </div>
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}
