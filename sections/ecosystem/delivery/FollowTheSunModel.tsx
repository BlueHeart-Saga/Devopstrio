"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function FollowTheSunModel() {
  const steps = [
    { name: "United Kingdom", desc: "Corporate strategy & core architectural starts." },
    { name: "Europe Coverage", desc: "Security posture reviews & legal checks." },
    { name: "United States", desc: "Operational support & stakeholder syncs." },
    { name: "India Engineering", desc: "Scale development & SRE rotations." },
    { name: "24×7 Operations", desc: "Continuous uptime control." }
  ];

  const benefits = [
    "Continuous Development & Engineering loops",
    "Faster Incident Resolution cycles",
    "Global Support Coverage around the clock",
    "Reduced Time-to-Market speed margins",
    "Enhanced Service Availability assurances"
  ];

  return (
    <section id="operating-model" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            WORKFLOW HANDOFFS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Follow-The-Sun <span className="text-rose-500">Delivery Model</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            How we transfer task scopes and active incidents across time zones to maintain continuous operational progress.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Follow the sun flow steps */}
          <div className="lg:col-span-7 flex flex-col gap-4 relative">
            {/* Connecting line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-zinc-900 z-0" />

            {steps.map((step, idx) => (
              <div
                key={step.name}
                className="relative flex items-start gap-5 bg-zinc-950/40 border border-zinc-900 rounded-2xl p-4 z-10 hover:border-rose-500/10 transition-all duration-300 group"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-[10px] font-mono font-bold text-rose-500 shrink-0 group-hover:border-rose-500/30 transition-all duration-300">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">{step.name}</h4>
                  <p className="text-[9px] text-zinc-550 font-semibold leading-relaxed mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Benefits checklist card */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-8 min-h-[300px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4 border-b border-zinc-900 pb-2">
                  Delivery Model Benefits
                </span>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-xs text-zinc-300 font-semibold">
                      <CheckCircle2 size={14} className="text-rose-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900/60">
                <span className="text-[9px] font-mono text-zinc-550">
                  Follow-the-Sun guarantees that no operational time is lost between continental shifts.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
