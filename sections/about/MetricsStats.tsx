"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  // Row 1
  { value: "2500+", label: "Projects Delivered", desc: "Successful digital transformations." },
  { value: "1500+", label: "Enterprise Clients", desc: "FTSE 100 & global brands." },
  { value: "525+", label: "Certified Experts", desc: "Cloud & AI architects." },
  { value: "6+", label: "Global Offices", desc: "Locations across 4 countries." },
  // Row 2
  { value: "98%", label: "Client Retention", desc: "Long-term partnerships." },
  { value: "99.9%", label: "Uptime SLA", desc: "Guaranteed platform availability." },
  { value: "73%", label: "Faster Deployments", desc: "Accelerated release frequency." },
  { value: "42%", label: "Avg Cost Reduction", desc: "Optimised cloud spend." },
  // Row 3
  { value: "£56k", label: "Monthly Savings (Asda)", desc: "Delivered via Azure Virtual Desktop." },
  { value: "565t", label: "CO₂ Saved/Year", desc: "Carbon-efficient coding." },
  { value: "36k+", label: "Trees Planted", desc: "Global reforestation projects." },
  { value: "24/7", label: "Global Support", desc: "Always-on site reliability." }
];

export function MetricsStats() {
  return (
    <section className="w-full py-10 sm:py-14 bg-black text-white relative font-sans">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

        {/* Header Grid */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              The <span className="text-rose-600 font-semibold">Results Speak for Themselves</span>
            </h2>
          </div>

          <div className="p-5 bg-zinc-950/80 border border-zinc-800/80 rounded-lg border-l-4 border-l-rose-600">
            <p className="text-base italic text-zinc-200 font-medium leading-relaxed font-sans">
              &ldquo;Numbers only matter when they mean something to the business behind them. Every metric below represents a client who moved faster, spent less, and worried less about their infrastructure.&rdquo;
            </p>
          </div>
        </Reveal>

        {/* 12-Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <Reveal
              key={item.label}
              delay={idx * 0.05}
              className="bg-zinc-950/80 border border-zinc-800/80 p-5 sm:p-6 rounded-lg flex flex-col justify-between hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 relative group cursor-pointer hover:-translate-y-1"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-white group-hover:text-rose-400 transition-colors duration-300 font-mono tracking-tight block mb-1.5">
                  {item.value}
                </span>
                <span className="text-sm font-semibold text-zinc-300 group-hover:text-white block font-sans">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MetricsStats;
