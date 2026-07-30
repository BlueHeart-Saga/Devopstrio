"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export interface IndustriesHeroProps {
  breadcrumbCurrent?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: React.ReactNode;
  bgImage?: string;
}

export function IndustriesHero({
  breadcrumbCurrent = "Industries",
  titlePrefix = "Driving Innovation and Excellence across",
  titleHighlight = "Global Industries",
  subtitle = (
    <>
      We design, build and scale industrial-grade <Link href="/services/digital-transformation" className="text-rose-500 hover:underline">digital architectures</Link> that <Link href="/services/devops-automation" className="text-rose-500 hover:underline">automate field logistics</Link>, optimize resource planning, and enforce extreme <Link href="/services/cloud-services" className="text-rose-500 hover:underline">telemetry safety standards</Link>.
    </>
  ),
  bgImage = "/assets/industries_hero_bg.png"
}: IndustriesHeroProps) {
  return (
    <section className="w-full relative overflow-hidden bg-black text-white min-h-[550px] lg:min-h-[640px] flex items-center border-b border-zinc-900/60 -mt-24">
      
      {/* Cover Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={`${breadcrumbCurrent} Background`} 
          className="w-full h-full object-cover object-center select-none pointer-events-none opacity-40 filter brightness-[0.8] contrast-[1.05]"
        />
        {/* Premium Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/90 via-30% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-3xl text-left">
          
          {/* Breadcrumb Navigation */}
          <Reveal className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="text-zinc-700">&gt;</span>
            {breadcrumbCurrent !== "Industries" ? (
              <>
                <a href="/industries" className="hover:text-white transition-colors">Industries</a>
                <span className="text-zinc-700">&gt;</span>
              </>
            ) : null}
            <span className="text-[#E11D48] font-bold">{breadcrumbCurrent}</span>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              {titlePrefix} <br className="hidden sm:inline" />
              <span className="text-[#E11D48]">{titleHighlight}</span>
            </h1>
          </Reveal>

          {/* Subtext description */}
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-10">
              {subtitle}
            </p>
          </Reveal>

          {/* CTA Connect Button */}
          <Reveal delay={0.3}>
            <a 
              href="/contact#contact-form" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#E11D48] hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(244,63,94,0.2)]"
            >
              Connect with us <ArrowUpRight size={14} className="stroke-[2.5]" />
            </a>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
