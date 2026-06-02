"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: "140+", label: "Senior Practitioners", desc: "Elite engineers and architects located in Palo Alto, London, and Bangalore." },
  { value: "320+", label: "Cloud Modernizations", desc: "Successful pipeline, landing zone, and database structural transitions completed." },
  { value: "99.99%", label: "Platform Resilience", desc: "Average running uptime measured across client transactional database clusters." },
  { value: "Zero", label: "Breaches Reported", desc: "No critical posture vulnerabilities or leaks across audited software codebases." }
];

export function MetricsStats() {
  return (
    <section className="w-full py-20 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              10 / AUDITED OUTCOMES
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight leading-tight">
            Measurable operations <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">reported by the numbers</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <div 
              key={item.label} 
              className="border border-zinc-900 bg-zinc-950/20 p-6 md:p-8 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors"
            >
              <div>
                <span className="text-3xl font-light text-rose-500 block mb-2">{item.value}</span>
                <strong className="text-xs font-semibold text-zinc-250 block mb-2 uppercase tracking-wider">{item.label}</strong>
                <p className="text-[11px] text-zinc-450 leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
