"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  AlertTriangle,
  BellRing,
  Search,
  Zap,
  CheckCircle2,
  FileCheck,
  Repeat,
  Gauge,
  LineChart,
  Database,
  Network,
  Maximize2,
  Bot,
  RefreshCw,
  Cpu,
  Sliders,
  Flame
} from "lucide-react";

export function SREIncidentPerformance() {
  const incidentSteps = [
    { step: "Detect", icon: Search },
    { step: "Alert", icon: BellRing },
    { step: "Investigate", icon: AlertTriangle },
    { step: "Respond", icon: Zap },
    { step: "Resolve", icon: CheckCircle2 },
    { step: "Review", icon: FileCheck },
    { step: "Improve", icon: Repeat }
  ];

  const incidentCards = [
    { title: "Incident Classification", desc: "P1 to P4 severity tiering with defined SLA response times.", icon: AlertTriangle },
    { title: "Root Cause Analysis (RCA)", desc: "Blameless post-mortems identifying systemic vulnerabilities.", icon: Search },
    { title: "Escalation Management", desc: "Automated PagerDuty/Opsgenie multi-tiered escalation trees.", icon: BellRing },
    { title: "Post-Incident Reviews", desc: "Converting outage lessons into automated regression tests.", icon: FileCheck }
  ];

  const performanceCards = [
    { title: "Load & Stress Testing", icon: Flame },
    { title: "Performance Benchmarking", icon: Gauge },
    { title: "Scalability Testing", icon: Maximize2 },
    { title: "Database Optimization", icon: Database },
    { title: "API Performance Tuning", icon: Network },
    { title: "Caching Strategies (Redis)", icon: RefreshCw },
    { title: "Capacity Forecasting", icon: LineChart },
    { title: "Traffic Engineering & BGP", icon: Sliders }
  ];

  const selfHealingCards = [
    { title: "Auto Scaling (HPA/VPA)", icon: Maximize2 },
    { title: "Self-Healing Workloads", icon: RefreshCw },
    { title: "Automated Rollbacks", icon: Repeat },
    { title: "Infrastructure Automation", icon: Bot },
    { title: "Predictive AI Alerts", icon: Cpu },
    { title: "Auto Remediation Bots", icon: Zap },
    { title: "AIOps Noise Suppression", icon: Sliders },
    { title: "Continuous Optimization", icon: Gauge }
  ];

  return (
    <>
      {/* 8. INCIDENT MANAGEMENT */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">RESPONSE & TRIAGE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Rapid Incident Detection & Resolution
            </h2>
          </Reveal>

          {/* Incident Lifecycle Flow */}
          <div className="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-8 md:p-10 mb-12 shadow-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 mb-8 block text-center">
              Closed-Loop Incident Response Lifecycle
            </span>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {incidentSteps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center min-w-[90px] group">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-2 group-hover:border-rose-500 group-hover:bg-rose-500/10 transition-all">
                      <Icon className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-semibold text-zinc-300">{item.step}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {incidentCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all">
                  <Icon className="w-5 h-5 text-rose-500 mb-3" />
                  <h4 className="text-base font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. PERFORMANCE ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OPTIMIZATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Performance Engineering
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {performanceCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 bg-zinc-950/60 border border-zinc-900 rounded-xl flex items-center gap-3 hover:border-rose-500/40 transition-colors">
                  <Icon className="w-5 h-5 text-rose-500 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-300">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. AUTOMATION & SELF-HEALING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">AIOPS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Intelligent Operations at Scale
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {selfHealingCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all flex flex-col items-center text-center">
                  <Icon className="w-6 h-6 text-rose-500 mb-3" />
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
