"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface StepItem {
  id: string;
  name: string;
  desc: string;
}

export function EcosystemIntegrationLoop() {
  const steps: StepItem[] = [
    { id: "01", name: "University Programs", desc: "Campus partnerships and engineering bootcamps." },
    { id: "02", name: "Talent Network", desc: "Access to verified technology professionals." },
    { id: "03", name: "Certifications", desc: "Continuous learning and professional growth paths." },
    { id: "04", name: "Engineering Community", desc: "Developer meetups and open source initiatives." },
    { id: "05", name: "Innovation Labs", desc: "R&D prototyping and future technology testing." },
    { id: "06", name: "Client Delivery", desc: "Deploying secure, high-uptime platforms." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            TALENT ESCALATION
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Ecosystem <span className="text-rose-500">Integration</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold leading-relaxed">
            How academic partnerships transition into talent networks, professional credentials, and client delivery workloads.
          </p> */}
        </Reveal>

        {/* Pipeline Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <Reveal key={step.name} delay={idx * 0.05} className="h-full relative">
              <div
                className="bg-zinc-950/45 border border-zinc-900 rounded-3xl p-5 hover:border-rose-500/20 hover:bg-zinc-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[140px] h-full relative group shadow-lg backdrop-blur-md"
              >
                <div>
                  {/* Step Watermark */}
                  <span className="text-xl md:text-2xl font-bold font-mono text-rose-500/80 mb-5 block transition-colors group-hover:text-rose-455">
                    {step.id}
                  </span>

                  {/* Title */}
                  <h4 className="text-base md:text-lg font-semibold text-white uppercase tracking-wider mb-2 group-hover:text-rose-400 transition-colors duration-300">
                    {step.name}
                  </h4>

                  {/* Description */}
                  {/* <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
                    {step.desc}
                  </p> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
