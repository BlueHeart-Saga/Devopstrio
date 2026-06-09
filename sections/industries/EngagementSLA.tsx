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
    <section className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Block */}
          <div className="lg:col-span-5 text-left">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Support Contracts
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Guaranteed operational <span className="font-semibold text-rose-500">stability</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-4 max-w-sm">
                We contractually commit to strict latency boundaries, rapid incident resolution times, and robust database backups.
              </p>
            </Reveal>
          </div>

          {/* Right Block: SLA Cards */}
          <div className="lg:col-span-7 flex flex-col gap-5 w-full text-left">
            {metrics.map((item, idx) => (
              <Reveal key={item.label} delay={idx * 0.05} className="w-full">
                <div className="bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-[0.25fr_0.75fr] gap-6 items-center hover:border-zinc-800 hover:bg-zinc-900/5 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <span className="text-3xl md:text-4xl font-mono font-bold text-rose-500 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {item.num}
                  </span>
                  <div>
                    <strong className="text-xs font-semibold text-zinc-200 block mb-1 group-hover:text-white transition-colors">
                      {item.label}
                    </strong>
                    <span className="text-[10.5px] text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
                      {item.desc}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
