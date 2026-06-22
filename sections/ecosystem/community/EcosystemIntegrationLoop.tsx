"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, BookOpen, UserCheck, Award, Users, Lightbulb, Send } from "lucide-react";

interface StepItem {
  name: string;
  icon: React.ReactNode;
  desc: string;
}

export function EcosystemIntegrationLoop() {
  const steps: StepItem[] = [
    { name: "University Programs", icon: <BookOpen size={18} />, desc: "Campus partnerships and engineering bootcamps." },
    { name: "Talent Network", icon: <UserCheck size={18} />, desc: "Access to verified technology professionals." },
    { name: "Certifications", icon: <Award size={18} />, desc: "Continuous learning and professional growth paths." },
    { name: "Engineering Community", icon: <Users size={18} />, desc: "Developer meetups and open source initiatives." },
    { name: "Innovation Labs", icon: <Lightbulb size={18} />, desc: "R&D prototyping and future technology testing." },
    { name: "Client Delivery", icon: <Send size={18} />, desc: "Deploying secure, high-uptime platforms." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            TALENT ESCALATION
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Ecosystem <span className="text-rose-500">Integration</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            How academic partnerships transition into talent networks, professional credentials, and client delivery workloads.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <div
              key={step.name}
              className="bg-zinc-950/45 border border-zinc-900/80 rounded-3xl p-6 hover:border-rose-500/10 transition-all duration-300 flex flex-col justify-between min-h-[180px] relative group"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 mb-4">
                  {step.icon}
                </div>
                <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">{step.name}</h4>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connecting arrow pointing to next element (only on desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-850 items-center justify-center text-zinc-500 group-hover:border-rose-500/30 group-hover:text-rose-500 transition-all duration-300">
                  <ArrowUpRight size={12} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
