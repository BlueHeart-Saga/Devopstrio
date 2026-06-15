"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const useCases = [
  { title: "Dynamic Credit Scoring", industry: "Banking", result: "92% faster loan approval decision loops." },
  { title: "Patient Record Auditing", industry: "Healthcare", result: "Zero security violations across 1,400 pod nodes." },
  { title: "Checkout Load Scaling", industry: "Retail", result: "Handled 4.5x traffic peaks during holiday sales." },
  { title: "IoT Asset Trackers", industry: "Logistics", result: "Real-time delivery routing updates under 3 seconds." },
  { title: "Mainframe Database Shift", industry: "Telecom", result: "Migrated 80TB database with zero transaction downtime." },
  { title: "Citizen API Gateway", industry: "Public Sector", result: "API lookup times reduced from 4.8s to 180ms." }
];

export function IndustryUseCases() {
  return (
    <section id="use-cases" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              USE CASE INVENTORY
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Proven enterprise <span className="font-semibold text-rose-500">use cases</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((uc, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-955/15 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-3">
                  {uc.industry}
                </span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">{uc.title}</h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">{uc.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
