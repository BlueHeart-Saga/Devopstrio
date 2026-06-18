"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function IndustryInnovation() {
  const innovations = [
    {
      tag: "AI Lab Application",
      title: "Dynamic Triage Graphs",
      desc: "Deploying LangGraph email sorting blocks to automate logistics routing tickets."
    },
    {
      tag: "Cloud Lab Application",
      title: "Scale-to-Zero Compute",
      desc: "Integrating event-driven KEDA schedulers to drop standby test environments automatically."
    },
    {
      tag: "DevOps Lab Application",
      title: "Canary Auto-Rollbacks",
      desc: "Wiring telemetry alert policies directly to ArgoCD triggers to undo unstable application updates."
    }
  ];

  return (
    <section id="innovation" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              R&D Translation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Applying laboratory R&D <span className="text-[#E11D48]">directly to operations</span>
          </h2>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {innovations.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer">
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-[#E11D48] uppercase block mb-4">
                    {item.tag}
                  </span>
                  
                  <h4 className="text-base font-bold text-white mb-2 tracking-tight transition-colors duration-300">
                    {item.title}
                  </h4>
                  
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
