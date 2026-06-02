"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "AIHire Accelerator",
    label: "Customizable, LLM-powered recruitment platform designed for secure automated resume matching, pipeline analytics, and audit compliance.",
    stat: "75%",
    statLabel: "Reduction in candidate screening cycles",
    metrics: [20, 45, 65, 80, 75, 90, 85, 95]
  },
  {
    name: "Cognitive Search Hub",
    label: "Secure vector and hybrid keyword enterprise search framework indexing knowledge stores, file system documents, and databases.",
    stat: "42%",
    statLabel: "Faster information discovery speed",
    metrics: [40, 35, 55, 60, 50, 70, 65, 80]
  },
  {
    name: "Core Analytics Engine",
    label: "A governed metrics layer and semantic database cache designed for high-concurrency dashboards, real-time alerting, and telemetry feeds.",
    stat: "12x",
    statLabel: "Acceleration in report compiling",
    metrics: [30, 40, 60, 75, 90, 110, 95, 120]
  },
  {
    name: "Triage Security Shield",
    label: "An automated cloud posture and compliance triage workflow consolidating multi-source logs, threat alerts, and identity actions.",
    stat: "63%",
    statLabel: "Fewer unresolved security alerts",
    metrics: [15, 30, 45, 35, 50, 55, 65, 70]
  }
];

export function OurProducts() {
  return (
    <section id="products" className="w-full py-20 md:py-32 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              CORE PRODUCTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Productized accelerators built to speed up <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">enterprise execution</span>.
          </h2>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((prod, index) => (
            <div 
              key={prod.name}
              className="border border-zinc-900 bg-zinc-950/20 rounded-2xl p-8 hover:border-zinc-800 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden shadow-2xl min-h-[480px]"
            >
              {/* Background visual lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] opacity-25 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.02),transparent_60%)] pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <span className="text-xs font-mono text-zinc-500">ACCELERATOR_0{index + 1}</span>
                  <a href="/contact" className="w-8 h-8 rounded-full border border-zinc-850 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                {/* Details */}
                <h3 className="text-xl font-normal text-white mb-3 group-hover:text-rose-500 transition-colors">
                  {prod.name}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold mb-8 max-w-md">
                  {prod.label}
                </p>
              </div>

              {/* Data Dashboard Visualization */}
              <div className="mt-auto pt-6 border-t border-zinc-900/80">
                <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-6 items-end">
                  
                  {/* Performance Metric */}
                  <div>
                    <strong className="block text-3xl font-bold text-white leading-none mb-1">
                      {prod.stat}
                    </strong>
                    <span className="block text-[9px] uppercase tracking-wider font-semibold text-zinc-500 leading-tight">
                      {prod.statLabel}
                    </span>
                  </div>

                  {/* Visual Chart Simulation */}
                  <div className="h-16 flex items-end gap-1 px-2 pb-1 border-b border-l border-zinc-900/60 w-full relative">
                    {prod.metrics.map((val, idx) => (
                      <div 
                        key={idx}
                        className="flex-1 bg-rose-950/40 border border-rose-900/20 hover:bg-rose-500 hover:border-rose-400 transition-colors rounded-t"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                    <span className="absolute top-2 right-2 text-[8px] font-mono text-zinc-650 tracking-wider">LIVE_METRIC</span>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
