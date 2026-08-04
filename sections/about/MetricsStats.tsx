"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const metrics = [
  // Row 1
  { value: "2500+", label: "Projects Delivered", desc: "Successful transformations." },
  { value: "1500+", label: "Enterprise Clients", desc: "FTSE 100 & global brands." },
  { value: "525+", label: "Certified Experts", desc: "Cloud & AI architects." },
  { value: "6+", label: "Global Offices", desc: "Locations across 4 countries." },
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
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

        {/* Header Grid */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-center mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500">
                By the Numbers
              </span>
            </div>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              The <span className="text-rose-500">results speak for themselves</span> — <span className="font-bold">every time.</span>
            </h2>
            {/* <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-semibold">
              These aren't marketing numbers. They're metrics pulled from <Link href="/insights/case-studies" className="text-rose-500 hover:underline">real client engagements</Link>, measured against real business outcomes, and verified by the enterprises we serve.
            </p> */}
          </div>

          <div className="p-5 bg-zinc-950/60 border border-zinc-800/80 rounded-none border-r-4 border-r-rose-600">
            <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-1">
              Our Perspective
            </span>
            <p className="text-sm italic text-zinc-200 font-bold leading-relaxed">
              "Numbers only matter when they mean something to the business behind them. Every metric below represents a client who moved faster, spent less, and worried less about their infrastructure."
            </p>
          </div>
        </Reveal>

        {/* 12-Stat Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((item) => (
            <Reveal
              key={item.label}
              className="bg-zinc-950/30 border border-zinc-900 p-6 rounded-none flex flex-col justify-between hover:border-rose-600/30 hover:bg-zinc-950/60 transition-all duration-500 relative group"
            >
              <div>
                <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-rose-500 transition-colors duration-300 font-mono tracking-tight block mb-2">
                  {item.value}
                </span>
                <strong className="text-[10px] font-bold text-zinc-400 group-hover:text-zinc-200 block mb-1.5 uppercase tracking-widest">
                  {item.label}
                </strong>
                {/* <p className="text-[10.5px] text-zinc-500 leading-relaxed font-semibold">
                  {item.desc}
                </p> */}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MetricsStats;
