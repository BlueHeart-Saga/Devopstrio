"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function InsightsHero() {
  return (
    <section className="w-full bg-black text-white relative overflow-hidden pt-12 md:pt-16 lg:pt-20 pb-0">
      {/* Background Subtle Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0e_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center">
          
          {/* Left: Content Column */}
          <div className="w-full flex flex-col justify-center">
            {/* Main Title */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-white">
                <span className="block font-bold">Scaling Systems.</span>
                <span className="text-rose-500 block mt-1">Refining Tech Culture.</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-xl mb-10">
                Explore engineering blueprints, security assessments, platform configurations, and corporate growth narratives written by Devopstrio SRE and platform specialists.
              </p>
            </Reveal>

            {/* Sub-headline quote block */}
            <Reveal delay={0.3}>
              <div className="border-l-2 border-rose-500 bg-zinc-950/40 px-6 py-4 rounded-r-lg max-w-xl mb-12 lg:mb-20">
                <p className="text-zinc-355 text-xs md:text-sm font-bold italic leading-relaxed">
                  &ldquo;Knowledge is valuable when shared. We document our production incidents, post-mortems, and cloud blueprints to help teams build resilient architectures.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Responsive Image Column */}
          <div className="w-full flex justify-center lg:justify-end items-end lg:-mr-10 xl:-mr-16">
            <Reveal delay={0.3} className="w-full max-w-[500px] lg:max-w-none">
              <img
                src="/assets/herocard/insightspage.png"
                alt="Global Insights Hub"
                className="w-full h-auto max-h-[300px] md:max-h-[420px] lg:max-h-[520px] object-contain object-bottom"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
