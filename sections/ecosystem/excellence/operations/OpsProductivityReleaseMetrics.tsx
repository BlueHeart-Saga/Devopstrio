"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Heart,
  Bot,
  Layers,
  Zap,
  Repeat,
  BarChart3,
  LineChart,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Activity
} from "lucide-react";

export function OpsProductivityReleaseMetrics() {
  const devExPillars = [
    { title: "Flow State & Friction Reduction", desc: "Removing waiting times for builds, reviews, and test runs.", icon: Zap },
    { title: "Internal Developer Portals", desc: "Single pane of glass for developer tooling and docs.", icon: Layers },
    { title: "Automated Onboarding", desc: "Setting up new developer environments in hours, not weeks.", icon: Bot },
    { title: "Cognitive Load Optimization", desc: "Abstracting infrastructure complexity away from developers.", icon: Heart }
  ];

  const releaseStrategies = [
    { name: "Blue-Green Deployments", desc: "Zero-downtime cutover between identical production clusters." },
    { name: "Canary Deployments", desc: "Gradual traffic routing (5% -> 100%) with automated rollback triggers." },
    { name: "Feature Flag Management", desc: "Decoupling code deployments from feature exposure using LaunchDarkly." },
    { name: "Automated CAB Approvals", desc: "Policy-driven change advisory boards evaluating pipeline metrics." }
  ];

  const doraMetrics = [
    { metric: "Deployment Frequency", value: "Multiple / Day", label: "ELITE", desc: "How often code is successfully deployed to production.", icon: Activity },
    { metric: "Lead Time for Changes", value: "< 1 Hour", label: "ELITE", desc: "Time from code commit to running in production.", icon: Clock },
    { metric: "Mean Time to Restore (MTTR)", value: "< 15 Mins", label: "ELITE", desc: "Time taken to recover from a production incident.", icon: Zap },
    { metric: "Change Failure Rate", value: "< 5%", label: "ELITE", desc: "Percentage of deployments requiring emergency fixes.", icon: AlertTriangle }
  ];

  return (
    <>
      {/* 7. DEVELOPER PRODUCTIVITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PRODUCTIVITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Developer Productivity & Experience (DevEx)
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devExPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all">
                  <Icon className="w-6 h-6 text-rose-500 mb-4" />
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. RELEASE & CHANGE MANAGEMENT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">RELEASE OPERATIONS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Release & Change Management
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {releaseStrategies.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all">
                <span className="text-[10px] font-mono text-rose-500 font-bold uppercase block mb-2">PATTERN 0{idx + 1}</span>
                <h4 className="text-base font-bold text-white mb-2">{item.name}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DORA METRICS & ANALYTICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DORA DASHBOARD</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              DORA Metrics & Engineering Analytics
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
              Measuring engineering effectiveness through standardized DORA indicators.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doraMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-8 bg-zinc-950/60 border border-zinc-900 rounded-3xl relative overflow-hidden group hover:border-rose-500/40 transition-colors">
                  <div className="flex justify-between items-center mb-6">
                    <Icon className="w-6 h-6 text-rose-500" />
                    <span className="px-2.5 py-1 bg-rose-500/10 text-rose-500 text-[10px] font-mono font-bold rounded-md border border-rose-500/20">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-2xl md:text-3xl font-black text-white block mb-2">{item.value}</span>
                  <h4 className="text-sm font-bold text-zinc-200 mb-2">{item.metric}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
