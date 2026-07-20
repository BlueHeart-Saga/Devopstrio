"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Heart,
  Zap,
  Terminal,
  Bot,
  Layers,
  FileCheck,
  ShieldCheck,
  Lock,
  Key,
  ShieldAlert,
  Search,
  Eye,
  Activity,
  Maximize2
} from "lucide-react";

export function PlatformDevExSecurity() {
  const devExPillars = [
    { title: "Flow State Optimization", desc: "Removing waiting times for builds, tests, and environment access.", icon: Zap },
    { title: "Cognitive Load Reduction", desc: "Abstracting cloud complexity behind simple self-service APIs.", icon: Heart },
    { title: "Golden Paths", desc: "Pre-approved templates for fast service scaffolding.", icon: Terminal },
    { title: "Developer Onboarding", desc: "Reducing new hire setup time from weeks to hours.", icon: Bot }
  ];

  const automationCards = [
    { title: "Infrastructure Provisioning (Terraform)", icon: Terminal },
    { title: "Automated Environment Teardown", icon: Bot },
    { title: "GitOps Continuous Deployment (ArgoCD)", icon: Layers },
    { title: "Policy as Code (OPA & Gatekeeper)", icon: ShieldCheck },
    { title: "Automated Secret Injection (Vault)", icon: Lock },
    { title: "Self-Service DB Provisioning", icon: Key },
    { title: "Container Vulnerability Scanning", icon: ShieldAlert },
    { title: "Automated Compliance Audits", icon: FileCheck }
  ];

  const iacCapabilities = [
    { title: "Terraform Module Registry", desc: "Vetted, security-compliant IaC modules for cloud resources." },
    { title: "Bicep & ARM Templates", desc: "Native Azure infrastructure automation definitions." },
    { title: "GitOps Workflows", desc: "Declarative infrastructure management driven by Git commits." },
    { title: "Drift Detection", desc: "Continuous monitoring for unapproved cloud console changes." }
  ];

  const observabilityCards = [
    { title: "OpenTelemetry Instrumenting", icon: Activity },
    { title: "Prometheus & Grafana Dashboards", icon: Eye },
    { title: "Datadog APM Integration", icon: Search },
    { title: "Distributed Tracing (Jaeger)", icon: Maximize2 }
  ];

  return (
    <>
      {/* 7. DEVELOPER EXPERIENCE (DEVEX) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DEVEX</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Developer Experience (DevEx)
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

      {/* 8. PLATFORM AUTOMATION & IAC */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">AUTOMATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Platform Automation & Infrastructure as Code
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {automationCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 bg-zinc-950/60 border border-zinc-900 rounded-xl flex items-center gap-3 hover:border-rose-500/40 transition-colors">
                  <Icon className="w-5 h-5 text-rose-500 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-300">{item.title}</span>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iacCapabilities.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl">
                <span className="text-[10px] font-mono text-rose-500 font-bold uppercase block mb-2">IAC PATTERN 0{idx + 1}</span>
                <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OBSERVABILITY & PLATFORM SECURITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SECURITY & OBSERVABILITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Built-In Resilience and Guardrails
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {observabilityCards.map((item, idx) => {
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
