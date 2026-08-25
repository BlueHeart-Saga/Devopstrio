"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface DashboardMetric {
  value: string;
  label: string;
  desc: string;
}

export function ExcellenceMetricsDashboard() {
  const metrics: DashboardMetric[] = [
    { value: "99.95%", label: "Availability", desc: "Enterprise SLA standard." },
    { value: "95%", label: "Deployment Success Rate", desc: "First-pass canary check validation." },
    { value: "80%", label: "Automated Testing", desc: "Automated regression coverage runs." },
    { value: "50%", label: "Faster Releases", desc: "Cycle speed improvement index." },
    { value: "100+", label: "Production Deployments", desc: "Active clusters monitored." },
    { value: "24×7", label: "Monitoring", desc: "Round-the-clock telemetry coverage." }
  ];

  return (
    <section id="metrics" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            METRICS LEDGER
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Engineering Metrics <span className="text-rose-500">Dashboard</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold">
            Centralized statistics tracking development speeds, test coverages, and platform operational availabilities.
          </p> */}
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 text-center flex flex-col justify-between min-h-[140px] hover:border-rose-500/10 transition-all duration-300"
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-rose-500 tracking-tight mb-2">
                  {metric.value}
                </div>
                <div className="text-base md:text-lg font-semibold text-white uppercase tracking-wider mb-2">
                  {metric.label}
                </div>
              </div>
              {/* <div className="text-[8px] font-mono text-zinc-550 uppercase tracking-wider leading-relaxed">
                {metric.desc}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
