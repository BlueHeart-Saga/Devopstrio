"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Landmark, HeartPulse, Cpu, ShoppingBag, Radio } from "lucide-react";

const industries = [
  {
    icon: Landmark,
    name: "Financial Services",
    desc: "Governed transaction layers, FinOps cloud systems & secure database engines."
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "HIPAA-compliant platforms, automated patient routing & MLOps diagnosis tooling."
  },
  {
    icon: Cpu,
    name: "Software & SaaS",
    desc: "Multi-tenant cloud architecture, automated CI/CD pipelines & SaaS core development."
  },
  {
    icon: ShoppingBag,
    name: "Retail & Commerce",
    desc: "High-volume commerce runtimes, real-time analytics & modern search layers."
  },
  {
    icon: Radio,
    name: "Telecom & IoT",
    desc: "Low-latency edge infrastructure, message queues & network monitoring."
  }
];

export function TrustedByIndustries() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

        <Reveal className="mb-12">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
              INDUSTRIES WE SERVE
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-300">
            Tailored engineering capabilities built for <span className="text-white font-medium">highly regulated sectors</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-zinc-850/80 rounded-xl divide-y sm:divide-y-0 lg:divide-x divide-zinc-900 bg-zinc-950/20 overflow-hidden shadow-2xl">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="p-6 md:p-8 flex flex-col justify-between hover:bg-zinc-950/60 transition-all duration-300 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 group-hover:border-rose-500/30 transition-all duration-300 mb-6 shadow-inner">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold tracking-wide text-zinc-200 mb-2 group-hover:text-white transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-zinc-450 leading-relaxed font-bold">
                    {ind.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono text-rose-500">SECTOR_READY // 0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
