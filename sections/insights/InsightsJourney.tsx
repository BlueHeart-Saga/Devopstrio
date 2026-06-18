"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const milestoneJourney = [
  { year: "2019", title: "Corporate Inception", desc: "Started as a cloud scaling advisory firm in London with 5 SRE specialists.", detail: "Established original frameworks for database replication loops." },
  { year: "2021", title: "Enterprise Scaling", desc: "Onboarded first Fortune-500 client and set up dedicated DevOps pipelines.", detail: "Passed SOC-2 compliance checkouts with 100% success rate." },
  { year: "2023", title: "Platform Engineering", desc: "Launched Devopstrio Core Accelerator and automated Terraform templates.", detail: "Reduced average client environment provision times by 80%." },
  { year: "2025", title: "AI-Agents Launch", desc: "Developed first autonomous AI workflow agent for cloud-resource healing.", detail: "Deployed 20+ LLM fine-tuning schedules with Azure OpenAI." },
  { year: "2026", title: "Global Delivery Network", desc: "Established follow-the-sun operations across UK, US, and India hubs.", detail: "Serving 100+ global enterprises with zero downtime SLAs." }
];

export function InsightsJourney() {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(231,158,87,0.015),transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Our Journey
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Narrating our <span className="font-semibold text-rose-500">milestones</span>
          </h2>
        </Reveal>

        {/* Timeline slider grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-[38px] left-[5%] right-[5%] h-[1px] bg-zinc-900 hidden md:block" />

          {milestoneJourney.map((m, idx) => (
            <div
              key={m.year}
              className="relative flex flex-col items-start bg-zinc-950/20 border border-zinc-900/60 rounded-2xl p-5 hover:border-zinc-800 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setActiveMilestone(idx)}
              onMouseLeave={() => setActiveMilestone(null)}
            >
              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <span className="text-xl font-bold font-mono text-white bg-black border border-zinc-900 px-3 py-1 rounded-full group-hover:border-rose-500/40 transition-colors">
                  {m.year}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 ring-4 ring-rose-950/20" />
              </div>

              <h4 className="text-xs font-semibold text-zinc-200 mb-2">{m.title}</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed font-light">{m.desc}</p>

              {/* Tooltip detail block */}
              <AnimatePresence>
                {activeMilestone === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute z-20 left-4 right-4 bottom-full mb-3 bg-zinc-950 border border-rose-500/30 rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-left"
                  >
                    <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-1">
                      Journey Detail
                    </span>
                    <p className="text-[11px] text-zinc-350 leading-relaxed font-light">
                      {m.detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
