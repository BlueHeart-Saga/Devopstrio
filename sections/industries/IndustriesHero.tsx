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
  bgImage = "/webp/assets/industries_hero_bg.webp"
}: IndustriesHeroProps) {
  return (
    <section className="w-full relative overflow-hidden bg-black text-white min-h-screen md:min-h-[100dvh] flex items-center justify-center -mt-24 font-sans">
      
      {/* Cover Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage} 
          alt={`${breadcrumbCurrent} Background`} 
          className="w-full h-full object-cover object-center select-none pointer-events-none opacity-40 filter brightness-[0.8] contrast-[1.05]"
          loading="eager"
        />
        {/* Premium Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/90 via-30% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-8 relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 my-auto">
        <div className="max-w-4xl text-left">
          
          {/* Breadcrumb Navigation */}
          <Reveal className="flex items-center gap-2 text-xs md:text-sm font-semibold text-zinc-400 mb-6 sm:mb-8 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="text-zinc-700">&gt;</span>
            {breadcrumbCurrent !== "Industries" ? (
              <>
                <a href="/industries" className="hover:text-white transition-colors">Industries</a>
                <span className="text-zinc-700">&gt;</span>
              </>
            ) : null}
            <span className="text-rose-500 font-semibold">{breadcrumbCurrent}</span>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white font-sans mb-6">
              {titlePrefix} <br className="hidden sm:inline" />
              <span className="text-rose-500 font-semibold">{titleHighlight}</span>
            </h1>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
