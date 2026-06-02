"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const concreteAchievements = [
  { title: "OIDC Cloud Pipeline Standard", desc: "Contributed open-source security modules replacing static token structures, adopted by 15,000+ deployments." },
  { title: "AWS Security Posture Validation", desc: "Recognized as a leading builder of Zero-Trust landing zones under strict compliance frameworks." },
  { title: "Enterprise AI Orchestrator Award", desc: "Received industry honors for designing low-latency agentic architectures in commercial banking." }
];

export function Achievements() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                11 / INNOVATION & ACHIEVEMENTS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Applied research in <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">AI & data platforms</span>.
            </h2>
          </div>
          <div className="text-zinc-450 text-base md:text-lg leading-relaxed font-light">
            <p>
              We contribute actively to core cloud-native standards. Our practitioners dedicate research hours to benchmarking agent latency, cloud egress optimization, and pipeline credential rotation.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-900/60">
          {concreteAchievements.map((item) => (
            <div 
              key={item.title}
              className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-xl hover:border-zinc-800 transition-colors group"
            >
              <span className="block text-[9px] font-mono text-rose-500 mb-2">RECOGNITION</span>
              <h3 className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
