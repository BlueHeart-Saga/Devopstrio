"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function CaseStudyHighlight() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              BUSINESS IMPACT
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Discover how business leaders are driving value with <span className="text-rose-500">modern architectures</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed">
              Explore our real-world case studies detailing how leading enterprises partner with Devopstrio to optimize <Link href="/services/cloud-services" className="text-rose-500 hover:underline">core infrastructure</Link>, reduce <Link href="/services/devops-automation" className="text-rose-500 hover:underline">execution latency</Link>, and achieve measurable returns.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left card: Large, spanning full height on desktop (lg:col-span-6) */}
          <div className="lg:col-span-6 flex">
            <Reveal className="w-full h-full">
              <div className="h-full bg-zinc-950/40 border border-white/10 hover:border-rose-500/30 rounded-3xl overflow-hidden relative flex flex-col justify-between p-8 md:p-12 min-h-[460px] group text-left backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-500">
                {/* Background Image: Premium Wave Graphic */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/assets/services/bg-case-study.png"
                    alt="Engineering impact wave"
                    className="w-full h-full object-cover opacity-35 group-hover:opacity-45 group-hover:scale-[1.02] transition-all duration-700 pointer-events-none select-none mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent" />
                </div>

                <div className="relative z-10">
                  <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-4 font-semibold">Case Study / Latency reduction</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug max-w-md">
                    Migrating high-frequency trading platform to AWS EKS microservices.
                  </h3>
                </div>

                <div className="relative z-10 mt-auto pt-6 border-t border-zinc-900/50">
                  <span className="block text-5xl md:text-6xl font-mono font-bold text-rose-500 mb-2">
                    180ms
                  </span>
                  <p className="text-xs md:text-sm text-zinc-200 leading-relaxed font-semibold">
                    Sub-millisecond transaction latency achieved.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right side: Two stacked cards (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Top-Right Card: Light/fluid background look */}
            <div className="flex-grow flex">
              <Reveal className="w-full h-full">
                <div className="h-full bg-zinc-950/30 border border-white/10 hover:border-rose-500/20 rounded-3xl p-8 flex flex-col justify-between min-h-[218px] relative overflow-hidden group text-left backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_75%)] pointer-events-none" />

                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase block mb-3 font-semibold">Service Reliability</span>
                    <span className="block text-4xl font-mono font-bold text-white mb-2">
                      99.999%
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-200 leading-relaxed font-semibold">
                    Continuous SLA uptime guaranteed under peak load.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Bottom-Right Card: Purple/blue/rose abstract look */}
            <div className="flex-grow flex">
              <Reveal className="w-full h-full">
                <div className="h-full bg-zinc-950/30 border border-white/10 hover:border-rose-500/20 rounded-3xl p-8 flex flex-col justify-between min-h-[218px] relative overflow-hidden group text-left backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300">
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-rose-600/10 rounded-full blur-[60px] pointer-events-none" />

                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-rose-400 uppercase block mb-3 font-semibold">Infrastructure Cost</span>
                    <span className="block text-4xl font-mono font-bold text-rose-500 mb-2">
                      45%
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-200 leading-relaxed font-semibold">
                    Monthly cloud hosting spend saved through auto-scaling.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
