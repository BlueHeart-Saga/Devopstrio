"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Code,
  Zap,
  FileCode2,
  BookOpen,
  Compass,
  LineChart,
  Share2,
  Bot,
  Settings,
  Terminal,
  Cpu,
  RefreshCw,
  Sliders,
  Maximize2,
  Layers,
  FileJson,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Search,
  FileText,
  AlertTriangle,
  Lock,
  Eye,
  Key,
  ShieldAlert
} from "lucide-react";

export function PlatformExperienceOps() {
  const devExItems = [
    { title: "Developer Portals", icon: BookOpen },
    { title: "One-Click Deployments", icon: Zap },
    { title: "Standard Templates", icon: FileCode2 },
    { title: "API Catalog", icon: Code },
    { title: "Documentation Hub", icon: FileText },
    { title: "Golden Paths", icon: Compass },
    { title: "Developer Analytics", icon: LineChart },
    { title: "Knowledge Sharing", icon: Share2 }
  ];

  const automationItems = [
    { title: "Infrastructure Automation", icon: Bot },
    { title: "CI/CD Automation", icon: Settings },
    { title: "Environment Provisioning", icon: Terminal },
    { title: "Configuration Management", icon: Sliders },
    { title: "Release Automation", icon: RefreshCw },
    { title: "Workflow Automation", icon: Cpu },
    { title: "Auto Scaling", icon: Maximize2 },
    { title: "Platform Updates", icon: Layers }
  ];

  const iacCards = [
    "Terraform", "ARM / Bicep", "Pulumi", "Ansible",
    "GitOps (ArgoCD / Flux)", "Kubernetes Manifests", "Policy as Code (OPA)", "Configuration as Code"
  ];

  const observabilityCards = [
    { title: "Metrics Collection", icon: Activity },
    { title: "Distributed Tracing", icon: Compass },
    { title: "Centralized Logging", icon: Search },
    { title: "Health Monitoring", icon: Activity },
    { title: "Alerting & On-Call", icon: AlertTriangle },
    { title: "SLO & Error Budgets", icon: LineChart },
    { title: "Capacity Planning", icon: Maximize2 },
    { title: "Incident Post-Mortems", icon: FileText }
  ];

  const securityCards = [
    { title: "Zero Trust Architecture", icon: Lock },
    { title: "Secrets Management (Vault)", icon: Key },
    { title: "IAM & Least Privilege", icon: Eye },
    { title: "Vulnerability Scanning", icon: ShieldAlert },
    { title: "Policy Enforcement (OPA)", icon: ShieldCheck },
    { title: "Compliance Automation", icon: CheckCircle2 },
    { title: "Container Image Scanning", icon: Search },
    { title: "Runtime Protection (eBPF)", icon: Zap }
  ];

  return (
    <>
      {/* 7. DEVELOPER EXPERIENCE (DevEx) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-3 block">DEVEX</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Building Better Experiences for Engineers
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
              Reduce friction, context-switching, and onboarding time with developer-centric tooling.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {devExItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/50 border border-zinc-900 rounded-2xl hover:border-blue-500/40 transition-all text-center flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. PLATFORM AUTOMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-3 block">AUTOMATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Automation at Every Layer
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {automationItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl flex items-center gap-3 hover:border-blue-500/30 transition-colors">
                  <Icon className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-300">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. INFRASTRUCTURE AS CODE (IaC) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-3 block">DECLARATIVE INFRASTRUCTURE</span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
                  Everything Defined as Code
                </h2>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Version-controlled, reproducible, and audit-ready infrastructure provisioning using industry-standard IaC tooling and GitOps workflows.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {iacCards.map((iac, idx) => (
                <div key={idx} className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl flex flex-col items-center justify-center text-center hover:border-blue-500/40 transition-colors h-28">
                  <FileJson className="w-6 h-6 text-blue-400 mb-2" />
                  <span className="text-xs font-bold text-zinc-200">{iac}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. OBSERVABILITY & RELIABILITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-3 block">TELEMETRY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Real-Time Platform Insights
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {observabilityCards.map((obs, idx) => {
              const Icon = obs.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-blue-500/30 transition-all flex flex-col items-center text-center">
                  <Icon className="w-6 h-6 text-blue-400 mb-3" />
                  <h4 className="text-sm font-bold text-white">{obs.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. PLATFORM SECURITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-3 block">SECURITY & GOVERNANCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Secure Platforms by Design
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {securityCards.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="p-5 bg-zinc-950/60 border border-zinc-900 rounded-xl flex items-center gap-3 hover:border-blue-500/40 transition-colors">
                  <Icon className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-300">{sec.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
