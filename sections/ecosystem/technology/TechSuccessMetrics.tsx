"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface MetricItem {
  value: string;
  label: string;
}

export function TechSuccessMetrics() {
  const metrics: MetricItem[] = [
    { value: "99.99%", label: "Platform Availability" },
    { value: "100+", label: "Enterprise Deployments" },
    { value: "50M+", label: "API Transactions" },
    { value: "20+", label: "Countries Served" },
    { value: "100K+", label: "Users Supported" }
  ];

  return (
    <section id="metrics" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERIFIED OUTCOMES
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
            Success <span className="text-rose-500">Metrics</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
            Operational numbers showing the scaling scope and reliability of our technology integrations.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 text-center flex flex-col justify-center items-center min-h-[140px] hover:border-rose-500/10 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black text-rose-500 tracking-tight mb-3">
                {metric.value}
              </div>
              <div className="text-[10px] md:text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest leading-normal">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
