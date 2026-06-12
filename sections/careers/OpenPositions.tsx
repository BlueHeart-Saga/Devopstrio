"use client";

import React, { useState } from "react";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { openPositionsData, categories, Job } from "./careersData";

interface OpenPositionsProps {
  onApplyClick: (job: Job) => void;
}

export function OpenPositions({ onApplyClick }: OpenPositionsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredJobs = selectedCategory === "All"
    ? openPositionsData
    : openPositionsData.filter(job => job.category === selectedCategory);

  return (
    <section id="open-positions" className="py-24 bg-[#030303] border-b border-zinc-900/60">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl text-left mb-16">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Active Roles</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Explore our current <span className="font-semibold text-rose-500">open positions</span>
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm font-light mt-2 max-w-xl">
              Filter roles by engineering domain and find the right place to build your technology career.
            </p>
          </Reveal>
        </div>

        {/* Category Filter Chips */}
        <Reveal className="mb-10 flex flex-wrap gap-2 justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${selectedCategory === cat
                  ? "bg-rose-600 border-rose-600 text-white"
                  : "bg-zinc-950/20 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Jobs Listing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
              <Reveal key={job.id} delay={idx * 0.05} className="h-full">
                <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 md:p-8 hover:border-rose-500/35 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-rose-950/30 border border-rose-500/20 text-[9px] font-bold tracking-wide uppercase text-rose-500 px-2 py-0.5 rounded">
                        {job.category}
                      </span>
                      <span className="bg-zinc-900/60 border border-zinc-850 text-[9px] font-bold text-zinc-400 px-2 py-0.5 rounded">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-2 leading-tight group-hover:text-rose-500 transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[10px] text-zinc-550 mb-4 font-mono">
                      <MapPin size={11} className="text-zinc-650" /> {job.location} | <Clock size={11} className="text-zinc-650" /> {job.experience}
                    </div>

                    <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6">
                      {job.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onApplyClick(job)}
                    className="w-full inline-flex items-center justify-between border border-zinc-900 group-hover:border-rose-500/20 bg-zinc-950/40 rounded-xl px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-350 group-hover:text-white transition-colors"
                  >
                    <span>View Position &rarr;</span>
                    <span className="w-5 h-5 rounded-full bg-zinc-900 group-hover:bg-rose-950/20 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 transition-colors">
                      <ArrowUpRight size={11} className="stroke-[2.5]" />
                    </span>
                  </button>
                </div>
              </Reveal>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-zinc-500 text-xs font-light">
              No active openings in this category. Join our talent network below to get notified of new roles!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
