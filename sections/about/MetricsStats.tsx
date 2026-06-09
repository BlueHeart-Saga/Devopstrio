"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  // Row 1
  { value: "100+", label: "Projects Delivered", desc: "Successful transformations." },
  { value: "50+", label: "Enterprise Clients", desc: "FTSE 100 & global brands." },
  { value: "525+", label: "Certified Experts", desc: "Cloud & AI architects." },
  { value: "6", label: "Global Offices", desc: "Locations across 4 countries." },
  // Row 2
  { value: "98%", label: "Client Retention", desc: "Long-term relationships." },
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
    <section className="w-full py-20 bg-black text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">

        {/* Header Grid */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
                By the Numbers
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
              The <span className="text-rose-500">results speak for themselves</span> — <span className="font-bold">every time.</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
              These aren't marketing numbers. They're metrics pulled from real client engagements, measured against real business outcomes, and verified by the enterprises we serve.
            </p>
          </div>

          <div className="bg-zinc-950/20 border border-zinc-900 p-6 rounded-xl border-l-4 border-l-rose-600">
            <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
              Our Perspective
            </span>
            <p className="text-xs md:text-sm italic text-zinc-400 leading-relaxed font-bold">
              "Numbers only matter when they mean something to the business behind them. Every metric below represents a client who moved faster, spent less, and worried less about their infrastructure."
            </p>
          </div>
        </Reveal>

        {/* 12-Stat Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <Reveal
              key={item.label}
              className="bg-zinc-950/20 border border-zinc-900 p-6 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors"
            >
              <div>
                <span className="text-2xl md:text-3xl font-bold text-rose-500 block mb-2">{item.value}</span>
                <strong className="text-xs font-bold text-white block mb-1 uppercase tracking-wider">{item.label}</strong>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-bold">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
