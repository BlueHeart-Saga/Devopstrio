"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function IndustriesIntro() {
  return (
    <section className="w-full py-24 bg-[#030303] text-zinc-300 border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Outer glassmorphic card container */}
        <div className="bg-[#0b0b0c] border border-white/10 rounded-[32px] p-8 lg:p-16 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start text-left">
          
          {/* Subtle background glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] blur-3xl pointer-events-none z-0" />

          {/* Left Column Heading */}
          <div className="lg:col-span-5 relative z-10">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
                  Core Capability
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white">
                We bridge the gap between <span className="text-[#E11D48]">complex software design</span> and domain-specific regulatory constraints.
              </h2>
            </Reveal>
          </div>

          {/* Right Column Paragraphs */}
          <div className="lg:col-span-7 lg:pt-10 relative z-10">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6 text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                <p className="border-l-2 border-rose-500/20 hover:border-[#E11D48] transition-colors duration-300 pl-4">
                  Integrating AI models, setting up scalable microservice nodes, and scheduling database queries require special domain context. Financial structures demand strict audit trails; medical systems require encrypted patient privacy; logistics teams need low-latency routing calculations.
                </p>
                <p className="border-l-2 border-rose-500/20 hover:border-[#E11D48] transition-colors duration-300 pl-4">
                  At Devopstrio, our engineering teams are segmented by sector specialization. This structure ensures that your system builders understand your compliance frameworks, operations benchmarks, and security goals from day one.
                </p>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
