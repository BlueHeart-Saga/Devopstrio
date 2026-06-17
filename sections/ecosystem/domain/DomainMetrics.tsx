"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";

interface Metric {
  value: string;
  label: string;
}

interface DomainMetricsProps {
  stats: Metric[];
}

export function DomainMetrics({ stats }: DomainMetricsProps) {
  // Helper component to parse and animate metric values dynamically
  const AnimateMetricValue = ({ value }: { value: string }) => {
    const match = value.match(/^([+-]?)([\d.]+)(.*)$/);
    if (!match) {
      return <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">{value}</span>;
    }
    
    const prefix = match[1];
    const num = parseFloat(match[2]);
    const suffix = match[3];
    
    return (
      <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">
        {prefix}
        <CountUp to={num} duration={1.5} />
        {suffix}
      </span>
    );
  };

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            IMPACT QUANTIFIED
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Quantifiable <span className="text-rose-500">engineering outcomes</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            By leveraging our integrated ecosystems, enterprises achieve unprecedented efficiency gains, drastically reduced time-to-market, and ironclad security guardrails.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats && stats.length >= 4 ? (
            stats.slice(0, 4).map((stat, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-gradient-to-b from-zinc-955 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/25 transition-all duration-300">
                  <AnimateMetricValue value={stat.value} />
                  <h4 className="text-xs font-bold text-zinc-200 mb-1">
                    {stat.label}
                  </h4>
                </div>
              </Reveal>
            ))
          ) : (
            <>
              <Reveal className="h-full">
                <div className="h-full bg-gradient-to-b from-zinc-955 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/25 transition-all duration-300">
                  <AnimateMetricValue value="4.8x" />
                  <h4 className="text-xs font-bold text-zinc-200 mb-1">
                    Workflow Frequency
                  </h4>
                </div>
              </Reveal>
              <Reveal delay={0.05} className="h-full">
                <div className="h-full bg-gradient-to-b from-zinc-955 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/25 transition-all duration-300">
                  <AnimateMetricValue value="-45%" />
                  <h4 className="text-xs font-bold text-zinc-200 mb-1">
                    Drift Reductions
                  </h4>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="h-full">
                <div className="h-full bg-gradient-to-b from-zinc-955 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/25 transition-all duration-300">
                  <AnimateMetricValue value="120ms" />
                  <h4 className="text-xs font-bold text-zinc-200 mb-1">
                    Query Latency
                  </h4>
                </div>
              </Reveal>
              <Reveal delay={0.15} className="h-full">
                <div className="h-full bg-gradient-to-b from-zinc-955 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/25 transition-all duration-300">
                  <AnimateMetricValue value="99.99%" />
                  <h4 className="text-xs font-bold text-zinc-200 mb-1">
                    Target Uptime SLAs
                  </h4>
                </div>
              </Reveal>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
