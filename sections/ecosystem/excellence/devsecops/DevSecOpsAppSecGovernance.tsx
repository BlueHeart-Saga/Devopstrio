"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Code2,
  Scan,
  Activity,
  Network,
  PackageCheck,
  Lock,
  Key,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  ShieldAlert,
  FileText,
  Bot,
  Sliders,
  RefreshCw,
  Cpu,
  Zap,
  Eye
} from "lucide-react";

export function DevSecOpsAppSecGovernance() {
  const appSecCards = [
    { title: "Secure Coding Standards", icon: Code2 },
    { title: "Static Security Testing (SAST)", icon: Scan },
    { title: "Dynamic Security Testing (DAST)", icon: Activity },
    { title: "API Security & Rate Limiting", icon: Network },
    { title: "Software Composition Analysis (SCA)", icon: PackageCheck },
    { title: "Authentication & Authorization", icon: Lock },
    { title: "Secrets Protection & Vaulting", icon: Key },
    { title: "Software Supply Chain Security", icon: ShieldCheck }
  ];

  const complianceCards = [
    { title: "ISO 27001 Alignment", icon: FileCheck },
    { title: "SOC 2 Type II Readiness", icon: CheckCircle2 },
    { title: "GDPR Data Protection", icon: ShieldCheck },
    { title: "HIPAA Compliance Support", icon: FileText },
    { title: "PCI DSS Considerations", icon: Lock },
    { title: "Automated Security Policies", icon: Sliders },
    { title: "Immutable Audit Logging", icon: Eye },
    { title: "Enterprise Risk Management", icon: ShieldAlert }
  ];

  const automationCards = [
    { title: "Automated Code Scanning", icon: Scan },
    { title: "Policy as Code (OPA)", icon: Sliders },
    { title: "Compliance as Code", icon: FileCheck },
    { title: "Automated Patch Management", icon: RefreshCw },
    { title: "AI Threat Detection", icon: Cpu },
    { title: "Real-time Security Alerts", icon: Zap },
    { title: "Auto Remediation Bots", icon: Bot },
    { title: "Continuous Compliance", icon: CheckCircle2 }
  ];

  return (
    <>
      {/* 8. APPLICATION SECURITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">APPSEC</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Application Security & Shielding
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {appSecCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-red-500/30 transition-all flex flex-col items-center text-center group">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-3 group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. COMPLIANCE & GOVERNANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">GOVERNANCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Compliance & Audit Readiness
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 bg-zinc-950/60 border border-zinc-900 rounded-xl flex items-center gap-3 hover:border-red-500/40 transition-colors">
                  <Icon className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-300">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. SECURITY AUTOMATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">INTELLIGENT BOT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Security Automation at Scale
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {automationCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-red-500/30 transition-all flex flex-col items-center text-center">
                  <Icon className="w-6 h-6 text-red-500 mb-3" />
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
