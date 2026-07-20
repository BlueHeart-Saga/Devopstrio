"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ShieldCheck,
  Repeat,
  Users,
  Zap,
  Bot,
  BarChart3,
  CheckCircle2,
  FileCheck,
  Compass,
  Layers,
  ArrowRight
} from "lucide-react";

export function OpsLifecycleManagement() {
  const deliveryStages = [
    "Portfolio Intake",
    "Capacity Planning",
    "Sprint Backlog",
    "CI/CD Build & Test",
    "Change Approval",
    "Canary Release",
    "Ops Telemetry",
    "Feedback Loop"
  ];

  const governanceItems = [
    { title: "Architecture Review Boards (ARB)", desc: "Validating structural integrity and tech radar compliance." },
    { title: "Policy-as-Code Enforcers", desc: "Automated compliance checks running on every PR." },
    { title: "Security & Risk Controls", desc: "Security gates blocking releases with unmitigated vulnerabilities." },
    { title: "Financial Operations (FinOps)", desc: "Cost monitoring and cloud spending guardrails for squads." }
  ];

  const managementFrameworks = [
    { title: "Autonomous Pod Structure", desc: "Cross-functional teams of PMs, devs, SREs, and QAs centered on business outcomes.", icon: Users },
    { title: "Agile & SAFe Scaling", desc: "Tailored agile delivery models matching enterprise scale and team velocity.", icon: Repeat },
    { title: "Engineering Competency Matrix", desc: "Clear career ladders, skill mapping, and technical mentorship pathways.", icon: Compass },
    { title: "Resource & Capacity Allocation", desc: "Data-backed workload balancing to prevent burnout and boost efficiency.", icon: BarChart3 }
  ];

  return (
    <>
      {/* 4. GOVERNANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">GOVERNANCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Engineering Governance Framework
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceItems.map((gov, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <ShieldCheck className="w-6 h-6 text-rose-500 mb-4" />
                <h4 className="text-base font-bold text-white mb-2">{gov.title}</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">{gov.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DELIVERY OPERATIONS LIFECYCLE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">LIFECYCLE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Delivery Operations Lifecycle
            </h2>
          </Reveal>

          <div className="relative mt-20 mb-10 px-4">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-900 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-600 via-rose-500 to-transparent -translate-y-1/2 w-3/4 opacity-50 blur-sm"></div>

            <div className="flex justify-between items-center relative z-10 overflow-x-auto pb-8 hide-scrollbar">
              {deliveryStages.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[130px]">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.5)] mb-4"></div>
                  <span className="text-[10px] font-bold text-rose-500 tracking-wider mb-2">STAGE 0{idx + 1}</span>
                  <span className="text-xs md:text-sm font-semibold text-zinc-300 text-center">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MANAGEMENT FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">MANAGEMENT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Engineering Management Framework
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementFrameworks.map((fw, idx) => {
              const Icon = fw.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{fw.title}</h4>
                  <p className="text-sm text-zinc-400 font-medium">{fw.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
