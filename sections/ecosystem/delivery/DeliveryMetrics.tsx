"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface MetricItem {
  value: string;
  label: string;
}

export function DeliveryMetrics() {
  const metrics: MetricItem[] = [
    { value: "24×7", label: "Operational Coverage" },
    { value: "6", label: "Strategic Locations" },
    { value: "3", label: "International Markets" },
    { value: "Multi-Cloud", label: "Expertise Platforms" },
    { value: "Enterprise", label: "SLA Governance" },
    { value: "Global", label: "Talent Network" }
  ];

  return (
    <section id="metrics" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            OPERATIONAL ASSURANCE
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Delivery <span className="text-rose-500">Statistics</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold">
            Key operational metrics demonstrating global capacity and SLA support parameters.
          </p> */}
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 text-center flex flex-col justify-center items-center min-h-[140px] hover:border-rose-500/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-semibold text-rose-500 tracking-tight mb-2 font-mono">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-zinc-300 uppercase tracking-wider leading-normal font-mono">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
