"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

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

export function TransformMetricsSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-[#030303] text-white relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10">

        {/* Header Grid */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-center mb-14">
          <div className="relative">
            {/* Left-to-right arrow PNG pointing to header title */}
            <div className="absolute -top-8 sm:-top-10 md:-top-12 -left-6 sm:-left-10 md:-left-14 z-20 pointer-events-none select-none">
              <img
                src="/assets/components/lefttoright.png"
                alt="Left to right arrow"
                className="w-12 sm:w-16 md:w-20 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
              />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.35] text-white mb-4">
              Proven Metrics That{" "}
              <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1 rounded-xl inline-block">
                Transform
              </span>{" "}
              Enterprise Infrastructure.
            </h2>
          </div>

          <div className="p-6 bg-zinc-950/70 border border-zinc-900 rounded-lg border-r-4 border-r-rose-600 shadow-xl">
            
            <p className="text-sm md:text-base italic text-zinc-200 font-semibold leading-relaxed">
              &ldquo;Numbers only matter when they mean something to the business behind them. Every metric below represents a client who moved faster, spent less, and worried less about their infrastructure.&rdquo;
            </p>
          </div>
        </Reveal>

        {/* 12-Stat Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((item) => (
            <Reveal
              key={item.label}
              className="bg-zinc-950/50 border border-zinc-900 p-6 rounded-lg flex flex-col justify-between hover:border-rose-500/40 hover:bg-zinc-950/80 transition-all duration-500 relative group shadow-lg"
            >
              <div>
                <span className="text-2xl md:text-3xl xl:text-4xl font-semibold text-white group-hover:text-rose-500 transition-colors duration-300 font-sans tracking-tight block mb-2">
                  {item.value}
                </span>
                <strong className="text-xs font-semibold text-zinc-400 group-hover:text-zinc-200 block mb-1.5 uppercase tracking-wider">
                  {item.label}
                </strong>
                <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
