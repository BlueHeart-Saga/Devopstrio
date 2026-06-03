"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Play, BookOpen } from "lucide-react";

export function Insights() {
  const listInsights = [
    {
      title: "AI Agents: The Next Frontier in Enterprise Automation",
      date: "May 12, 2026",
      href: "/contact"
    },
    {
      title: "Cloud Cost Optimization Strategies for 2026",
      date: "May 08, 2026",
      href: "/contact"
    },
    {
      title: "Kubernetes Best Practices for High Availability",
      date: "May 05, 2026",
      href: "/contact"
    },
    {
      title: "Building Secure AI Systems: A Practical Guide",
      date: "May 01, 2026",
      href: "/contact"
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">

        {/* Header Block */}
        <Reveal className="flex justify-between items-end mb-16 pb-6 border-b border-zinc-900">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Latest Highlights
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-rose-500 hover:text-rose-400 transition-colors"
          >
            View all insights <ArrowRight size={14} />
          </a>
        </Reveal>

        {/* 3-Column Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.8fr_1.1fr] gap-8">

          {/* Column 1: AI insights & case study */}
          <div className="flex flex-col gap-8">
            {/* Top Card: AI & Data Insights */}
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between aspect-square">
              {/* Background gradient waves */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.05),transparent_70%)] pointer-events-none" />

              <div>
                <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider block mb-4">
                  AI & Data Insights
                </span>
                <p className="text-base text-zinc-300 font-bold leading-relaxed">
                  Trends, research and expert perspectives
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-500 hover:text-rose-455 transition-colors uppercase tracking-wider"
              >
                Explore Now <ArrowRight size={12} />
              </a>
            </div>

            {/* Bottom Card: Case Study: Retail AI Inventory */}
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-850/80 overflow-hidden group transition-all duration-300 flex flex-col justify-between h-full">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/assets/cases/retail_inventory.png"
                  alt="Retail AI Inventory"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-zinc-950/85 border border-zinc-850 text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                  Case Study
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 gap-6">
                <p className="text-sm font-medium text-zinc-200 leading-snug group-hover:text-white transition-colors">
                  Retail AI Inventory Optimization
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-wider"
                >
                  Read More <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Large event highlight */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 overflow-hidden group transition-all duration-300 flex flex-col h-full relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-900">
              <img
                src="/assets/events/nasscom_keynote.png"
                alt="NASSCOM Forum"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-8 flex flex-col justify-between flex-1 gap-6">
              <div>
                <span className="text-[10px] font-semibold text-rose-500 uppercase tracking-widest block mb-3">
                  EVENT HIGHLIGHT
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-zinc-100 transition-colors">
                  Devopstrio at NASSCOM Technology & Leadership Forum 2026
                </h3>
                <p className="text-zinc-450 text-sm md:text-base font-bold leading-relaxed">
                  Driving conversations on AI transformation, cloud innovation and digital leadership.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-wider self-start"
              >
                Watch Now <Play size={10} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Column 3: Stacked Insights list */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/10 p-6 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6 divide-y divide-zinc-900">
              {listInsights.map((insight, index) => (
                <a
                  key={insight.title}
                  href={insight.href}
                  className={`flex flex-col gap-2 group block ${index > 0 ? "pt-6" : ""}`}
                >
                  <h4 className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors leading-snug">
                    {insight.title}
                  </h4>
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mt-1">
                    <span>{insight.date}</span>
                    <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      Read More <ArrowRight size={10} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-zinc-900/60 flex items-center gap-3 text-zinc-500">
              <BookOpen size={16} />
              <span className="text-[10px] uppercase font-mono tracking-wider">Research Publication Hub</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
