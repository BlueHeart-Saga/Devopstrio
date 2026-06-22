"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function EcosystemHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-[#030303] text-white pt-20 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-zinc-900/60">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">

            {/* Tagline / Eyebrow */}
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                CHOICE FOR DEVOPSTRIO
              </span>
            </Reveal>

            {/* Heading */}
            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                The Ecosystem Behind
                <br />
                <span className="text-[#E11D48]">Exceptional Technology.</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.2}>
              <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed max-w-xl mb-8">
                Bringing together cloud providers, innovation labs, proprietary platforms, and engineering excellence to help enterprises innovate faster and scale smarter.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 items-center justify-start">
                <a
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                  href="#pillars"
                >
                  Explore Pillars

                </a>
                <Link
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                  href="/contact"
                >
                  Talk to Expert

                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Illustration Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <img
                src="/assets/herocard/ecosystempage.png"
                alt="Global Alliance Ecosystem Illustration"
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
