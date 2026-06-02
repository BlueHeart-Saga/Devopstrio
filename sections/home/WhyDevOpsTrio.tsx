"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const keyDifferentiators = [
  {
    num: "01",
    title: "Outcome-Driven Agreements",
    desc: "We align our deliverables directly with your business KPIs (deployment speed, uptime guarantees, database query times) rather than billing passive hours."
  },
  {
    num: "02",
    title: "Platform-Neutral Engineering",
    desc: "We design cloud-agnostic platform architectures utilizing Terraform/OpenTofu, Docker, and Kubernetes, preventing costly public cloud vendor lock-in."
  },
  {
    num: "03",
    title: "Senior-Only Cohorts",
    desc: "We only deploy senior engineers with an average of 7+ years of experience. You deal directly with technical creators, never junior project managers."
  }
];

export function Whydevopstrio() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-start">
          
          {/* Left Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">

              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                WHY DEVOPSTRIO
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
              Designing platforms with <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">zero legacy bloat</span>.
            </h2>
            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-bold max-w-md">
              Traditional technology consultancies send partners to sell and junior developers to learn. We embed direct expertise to build, launch, and transfer ownership.
            </p>
          </div>

          {/* Right Block: Vertical Differentiators List */}
          <div className="flex flex-col gap-8">
            {keyDifferentiators.map((diff) => (
              <div 
                key={diff.title}
                className="flex gap-6 pb-8 border-b border-zinc-900 last:border-b-0 last:pb-0 group"
              >
                <span className="text-sm font-mono text-rose-500 tracking-wider pt-0.5">
                  {diff.num}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-wide text-zinc-200 mb-2 group-hover:text-white transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-zinc-455 leading-relaxed font-bold">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </Reveal>

      </div>
    </section>
  );
}
