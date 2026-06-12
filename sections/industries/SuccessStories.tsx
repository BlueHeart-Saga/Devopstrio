"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const successStories = [
  {
    company: "Apex Clearing Bank",
    achievement: "Mainframe Modernization",
    desc: "Migrated Apex's core transaction ledger to a multi-cloud Kubernetes setup, cutting monthly infrastructure expenditures by 45%.",
    metric: "-45% Costs"
  },
  {
    company: "Novis Diagnostics",
    achievement: "Secure Medical Ingest",
    desc: "Configured an encrypted patient log ingest channel handling 10 million telemetry signals daily with full HIPAA alignment.",
    metric: "10M Signals/Day"
  }
];

export function SuccessStories() {
  return (
    <section id="success" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              CASE HISTORIES
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Featured client <span className="font-semibold text-rose-500">success stories</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 hover:border-zinc-800 transition-colors">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-900">
                  <span className="text-xs font-bold text-zinc-300">{story.company}</span>
                  <span className="px-3 py-1 rounded bg-rose-955/20 text-rose-500 text-[9px] font-mono border border-rose-500/10">
                    {story.metric}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-zinc-100 mb-2">{story.achievement}</h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{story.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
