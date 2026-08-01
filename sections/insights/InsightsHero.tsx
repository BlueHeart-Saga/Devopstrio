"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function InsightsHero() {
  return (
    <section className="relative w-full min-h-[520px] lg:min-h-[580px] flex items-center justify-center bg-[#030303] text-white pt-28 pb-16 lg:pb-20 overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Text content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center relative z-20">
            {/* <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                  Devopstrio THOUGHT LEADERSHIP
                </span>
              </div>
            </Reveal> */}

            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                Insights, Blueprints & <span className="text-rose-500">Engineering Intelligence</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 font-medium">
                Deep dives, architectural benchmarks, whitepapers, and operational lessons learned from our global engineering teams building high-availability cloud platforms and enterprise AI runtimes.
              </p>
            </Reveal>

            {/* Quote Block */}
            <Reveal delay={0.3}>
              <div className="border-l-2 border-rose-500 bg-zinc-950/40 px-6 py-4 rounded-r-lg max-w-xl">
                <p className="text-zinc-300 text-xs md:text-sm font-semibold italic leading-relaxed">
                  &ldquo;Knowledge is valuable when shared. We document our production incidents, post-mortems, and cloud blueprints to help teams build resilient architectures.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Insights Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <Image
                src="/assets/herocard/insightspage.png"
                alt="Global Insights Hub"
                priority
                width={480}
                height={480}
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
