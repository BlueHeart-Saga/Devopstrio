"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function MarketingHero({ onDownloadProfile }: { onDownloadProfile?: () => void }) {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-[#030303] text-white pt-20 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">

            {/* Heading */}
            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                Marketing Resources.
                <br />
                <span className="text-[#E11D48] whitespace-nowrap">Sales Enablement.</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
                Devopstrio is a UK-based global technology partner providing a unified resource portal for clients, partners, and sales teams to access <Link href="/marketing/company" className="text-rose-500 hover:underline">corporate presentations</Link>, <Link href="/marketing/services" className="text-rose-500 hover:underline">service brochures</Link>, <Link href="/marketing/case-studies" className="text-rose-500 hover:underline">case studies</Link>, and <Link href="/marketing/whitepapers" className="text-rose-500 hover:underline">technical whitepapers</Link>.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 items-center justify-start">
                <a
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                  href="#featured-resources"
                >
                  Browse Resources
                </a>
                <button
                  onClick={onDownloadProfile}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Download Company Profile
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <img src="/assets/herocard/Marketinghero.png"
                alt="Devopstrio Marketing & Sales Portal"
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none"
              loading="eager" />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
