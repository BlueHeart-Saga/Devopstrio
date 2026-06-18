"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: "2,500+", label: "Completed Projects", desc: "Production workloads deployed globally." },
  { value: "200+", label: "Reusable Assets", desc: "Open-source and proprietary infrastructure templates." },
  { value: "50+", label: "Technology Partners", desc: "Cloud platforms, database engines, and security tools." },
  { value: "25+", label: "Accelerators", desc: "Pre-configured deployment and integration blueprints." },
  { value: "24×7", label: "Operations Support", desc: "Global engineering teams keeping systems online." },
  { value: "99.99%", label: "Availability SLA", desc: "High availability configurations running active-active." }
];

export function EcosystemMetrics() {
  return (
    <section id="metrics" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900/60 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ECOSYSTEM METRICS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Ecosystem Scale & <span className="text-rose-500">Credibility</span>
          </h2>
          <p className="text-zinc-300 text-base md:text-lg font-semibold leading-relaxed">
            Quantifiable indicators demonstrating our capabilities to run enterprise-grade workloads across global systems.
          </p>
        </Reveal>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {metrics.map((met, idx) => (
            <Reveal key={met.label} delay={idx * 0.04} className="h-full">
              <div className="group/card flex flex-col justify-center h-full bg-zinc-950/20 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/40 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden backdrop-blur-sm min-h-[160px] text-center">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-rose-500 group-hover/card:scale-105 transition-transform duration-300 mb-3 drop-shadow-[0_2px_10px_rgba(244,63,94,0.15)]">
                  {met.value}
                </div>

                <h4 className="text-xs font-bold text-white mb-2">
                  {met.label}
                </h4>

                <p className="text-[10px] text-zinc-450 leading-relaxed font-semibold">
                  {met.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
