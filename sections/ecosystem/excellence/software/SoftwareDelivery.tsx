"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, CheckCircle2, ShieldCheck, TestTube2, GitCommit, FileCheck2, BarChart3, Clock, Rocket, Zap, Workflow, GitPullRequest, Laptop, UploadCloud } from "lucide-react";

export function SoftwareDelivery() {
  const qualityCards = [
    "Unit Testing",
    "Integration Testing",
    "API Testing",
    "UI Testing",
    "Performance Testing",
    "Regression Testing",
    "Automation Testing",
    "Release Validation"
  ];

  const devSecOpsCards = [
    "Secure Coding",
    "Dependency Scanning",
    "Secrets Management",
    "Container Security",
    "CI/CD Security",
    "Code Analysis",
    "Compliance Checks",
    "Vulnerability Management"
  ];

  const metrics = [
    { label: "Deployment Frequency", value: "Multiple/Day", trend: "On Demand" },
    { label: "Lead Time", value: "< 2 Hrs", trend: "Commit to Deploy" },
    { label: "Code Quality", value: "A Grade", trend: "SonarQube" },
    { label: "Test Coverage", value: "> 85%", trend: "Mandatory" },
    { label: "Build Success Rate", value: "99.9%", trend: "CI/CD Pipeline" },
    { label: "Defect Resolution", value: "< 24 Hrs", trend: "Critical bugs" },
    { label: "System Availability", value: "99.99%", trend: "High Availability" },
    { label: "Performance Score", value: "100/100", trend: "Lighthouse" }
  ];

  const workflow = [
    { step: "Requirements", icon: FileCheck2 },
    { step: "Architecture", icon: Workflow },
    { step: "Development", icon: Laptop },
    { step: "Code Review", icon: GitPullRequest },
    { step: "Automated Tests", icon: TestTube2 },
    { step: "CI/CD Pipeline", icon: GitCommit },
    { step: "Cloud Deploy", icon: UploadCloud },
    { step: "Monitoring", icon: BarChart3 }
  ];

  return (
    <>
      {/* 9. QUALITY ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ASSURANCE</span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Quality Engineering</h2>
                <p className="text-zinc-300 text-base leading-relaxed font-medium mb-8">
                  We integrate automation-first testing strategies to catch regressions instantly and guarantee flawless releases.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {qualityCards.map((item, idx) => (
                <div key={idx} className="p-4 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-rose-500/30 transition-colors flex flex-col items-center text-center group">
                  <CheckCircle2 className="w-5 h-5 text-zinc-600 group-hover:text-rose-500 mb-3 transition-colors" />
                  <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. DEVSECOPS INTEGRATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SECURITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Security Throughout Development</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {devSecOpsCards.map((item, idx) => (
              <div key={idx} className="p-5 bg-zinc-900/20 border border-zinc-800 rounded-lg flex items-center gap-4 hover:border-rose-500/40 transition-colors">
                <ShieldCheck className="w-5 h-5 text-rose-500 shrink-0" />
                <span className="text-sm font-semibold text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. ENGINEERING METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">KPI DASHBOARD</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engineering Metrics</h2>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/80 border border-zinc-900 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-rose-500/5 group-hover:to-rose-500/10 transition-colors pointer-events-none" />
                <span className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">{metric.label}</span>
                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</span>
                <div className="flex items-center gap-1.5 mt-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span className="text-[10px] font-mono text-zinc-500 tracking-wider">{metric.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. DELIVERY WORKFLOW */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">END-TO-END</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Delivery Workflow</h2>
          </Reveal>
          
          {/* Interactive Flow */}
          <div className="flex flex-wrap justify-center items-center gap-4 py-8">
            {workflow.map((item, idx) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center w-28 group">
                    <div className="w-14 h-14 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-rose-500 transition-colors group-hover:shadow-[0_0_20px_rgba(225,29,72,0.2)]">
                      <Icon className="w-6 h-6 text-zinc-400 group-hover:text-rose-500 transition-colors" />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-300 text-center leading-tight group-hover:text-white transition-colors">{item.step}</span>
                  </div>
                  {idx < workflow.length - 1 && (
                    <div className="hidden md:flex text-zinc-700">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            {/* Loop back arrow for continuous improvement */}
            <div className="w-full flex justify-center mt-8 md:mt-12">
              <div className="flex items-center gap-3 text-rose-500 text-xs font-bold tracking-wider px-6 py-2 rounded-full border border-rose-500/30 bg-rose-500/5">
                <Repeat className="w-4 h-4" /> CONTINUOUS IMPROVEMENT
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Repeat } from "lucide-react";
