"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  {
    num: "99.99%",
    label: "Platform Uptime SLA",
    desc: "Active SRE monitoring teams managing auto-failovers and node scaling metrics."
  },
  {
    num: "<15m",
    label: "Incident Response Time",
    desc: "P1 production alerts are triaged by senior system reliability engineers immediately."
  },
  {
    num: "24/7/365",
    label: "Support Desk Availability",
    desc: "Global timezone rotation covering all operational shifts."
  }
];

export function EngagementSLA() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <Reveal className="text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                SUPPORT CONTRACTS
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Guaranteed operational <span className="font-semibold text-rose-500">stability</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-4 max-w-sm">
              We contractually commit to strict latency boundaries, rapid incident resolution times, and robust database backups.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6 w-full text-left">
            {metrics.map((item, idx) => (
              <Reveal key={item.label} delay={idx * 0.05} className="bg-[#080808] border border-zinc-900 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-[0.3fr_0.7fr] gap-6 items-center">
                <span className="text-3xl font-mono font-semibold text-rose-500">{item.num}</span>
                <div>
                  <strong className="text-xs font-semibold text-zinc-200 block mb-1">{item.label}</strong>
                  <span className="text-[10px] text-zinc-550 font-light leading-normal">{item.desc}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
