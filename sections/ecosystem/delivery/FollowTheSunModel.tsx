"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, ShieldCheck, Clock, Cpu } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface ShiftDetail {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  number: string;
  color: string;
}

const shifts: ShiftDetail[] = [
  {
    icon: Map,
    title: "United Kingdom HQ",
    description: "Core architectural designs, leadership alignment, customer-success strategy, and global project governance.",
    number: "01",
    color: "red",
  },
  {
    icon: ShieldCheck,
    title: "Europe Coverage",
    description: "Ongoing security posture evaluations, vulnerability management, compliance audits, and legal oversight.",
    number: "02",
    color: "blue",
  },
  {
    icon: Clock,
    title: "United States Operations",
    description: "Real-time incident response, proactive managed services, client relations, and EST timezone synchronization.",
    number: "03",
    color: "orange",
  },
  {
    icon: Cpu,
    title: "India Delivery Centres",
    description: "High-speed DevOps automation, software development, cloud platform engineering, and round-the-clock SRE operations.",
    number: "04",
    color: "green",
  },
];

const colorMap: Record<string, { border: string; icon: string; number: string; glow: string }> = {
  red:    { border: "border-red-500/30 hover:border-red-500/60",    icon: "text-rose-500 bg-red-500/10 border-red-500/20",    number: "text-red-500/20",    glow: "from-red-500/5" },
  blue:   { border: "border-blue-500/30 hover:border-blue-500/60",  icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",   number: "text-blue-500/20",   glow: "from-blue-500/5" },
  orange: { border: "border-orange-500/30 hover:border-orange-500/60", icon: "text-orange-400 bg-orange-500/10 border-orange-500/20", number: "text-orange-500/20", glow: "from-orange-500/5" },
  green:  { border: "border-green-500/30 hover:border-green-500/60", icon: "text-green-400 bg-green-500/10 border-green-500/20",  number: "text-green-500/20",  glow: "from-green-500/5" },
};

const benefits = [
  "Continuous Engineering loops",
  "Rapid Incident Resolution",
  "24/7 Global Support",
  "Enhanced Uptime Assurances"
];

export function FollowTheSunModel() {
  return (
    <section id="operating-model" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(244,63,94,0.04),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4">
              WORKFLOW HANDOFFS
            </span> */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-4">
              Follow-The-Sun <span className="text-rose-500">Delivery Model</span>
            </h2>
            {/* <p className="text-zinc-400 text-sm font-semibold max-w-2xl mx-auto">
              How we transfer task scopes and active incidents across time zones to maintain continuous operational progress.
            </p> */}
          </Reveal>
        </div>

        {/* 2x2 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {shifts.map((shift, idx) => {
            const c = colorMap[shift.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative bg-zinc-950/40 border ${c.border} rounded-3xl p-8 overflow-hidden transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Large number watermark */}
                <span className={`absolute top-4 right-6 text-8xl font-black ${c.number} select-none leading-none`}>
                  {shift.number}
                </span>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${c.icon}`}>
                    <shift.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white uppercase tracking-wider mb-3">{shift.title}</h3>
                  {/* <p className="text-sm text-zinc-300 leading-relaxed font-semibold">{shift.description}</p> */}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Benefits Section */}
        {/* <div className="mt-16 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <h4 className="text-base md:text-lg font-semibold text-white uppercase tracking-wider">Continuous 24/7 Operations</h4>
              <p className="text-[10px] text-zinc-500 font-semibold mt-0.5">Timezone-aligned handoffs ensure seamless delivery without operational delay.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {benefits.map((b) => (
              <span
                key={b}
                className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-850 text-[9px] font-mono text-zinc-350 font-semibold uppercase tracking-wider"
              >
                {b}
              </span>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
}
