"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function BusinessImpact() {
  const impacts = [
    {
      value: "-45%",
      label: "Infrastructure Spend",
      desc: <>Cut idle virtualization billing using <Link href="/services/cloud-services" className="text-rose-500 hover:underline">auto-scaling grids</Link>.</>
    },
    {
      value: "4.8x",
      label: "Release Frequency",
      desc: <>Boosted weekly deployments through <Link href="/services/devops-automation" className="text-rose-500 hover:underline">automated test pipelines</Link>.</>
    },
    {
      value: "Zero",
      label: "Configuration Drift",
      desc: <>Enforced 100% git-tracked <Link href="/services/devops-automation" className="text-rose-500 hover:underline">state synchronization</Link> metrics.</>
    },
    {
      value: "95%",
      label: "Token Bill Savings",
      desc: <>Optimized LLM queries via <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">semantic output caching</Link>.</>
    }
  ];

  return (
    <section id="impact" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Quantifiable Results
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Quantifiable <span className="text-[#E11D48]">business impact</span>
          </h2>
        </Reveal>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {impacts.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer">
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
                  {/* Huge Bold Value */}
                  <span className="block text-5xl font-black text-white group-hover:text-[#E11D48] transition-colors duration-300 mb-6">
                    {item.value}
                  </span>
                  
                  {/* Label */}
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.label}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
