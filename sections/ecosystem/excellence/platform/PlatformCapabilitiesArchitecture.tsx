"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Layers,
  Cloud,
  Terminal,
  Bot,
  ShieldCheck,
  BarChart3,
  BookOpen,
  Boxes,
  ArrowRight,
  Database,
  Lock,
  Globe,
  Cpu
} from "lucide-react";

export function PlatformCapabilitiesArchitecture() {
  const capabilities = [
    { title: "Internal Developer Platforms (IDP)", desc: "Backstage portal integration for single-pane software catalogs.", icon: Layers },
    { title: "Cloud Foundations & Landing Zones", desc: "Automated Azure/AWS landing zones with baked-in compliance.", icon: Cloud },
    { title: "Infrastructure as Code (IaC)", desc: "Terraform & Bicep modules for repeatable infra provisioning.", icon: Terminal },
    { title: "CI/CD & Release Automation", desc: "GitOps workflows using GitHub Actions, Azure DevOps, and ArgoCD.", icon: Bot },
    { title: "Policy & Security Governance", desc: "OPA and Azure Policy enforcement at build time.", icon: ShieldCheck },
    { title: "Observability & Telemetry", desc: "Centralized Prometheus, Grafana, and Datadog monitoring.", icon: BarChart3 },
    { title: "Developer Self-Service", desc: "One-click environment creation and DB provisioning.", icon: Boxes },
    { title: "Documentation as Code", desc: "Automated API specs and architecture decision records (ADRs).", icon: BookOpen }
  ];

  const idpModules = [
    { name: "Service Catalog", desc: "Centralized registry of all microservices, APIs, and ownership metadata." },
    { name: "Software Templates", desc: "Golden-path starters for Node, Python, Java, and Go microservices." },
    { name: "TechDocs", desc: "Living documentation written in Markdown next to source code." },
    { name: "Kubernetes Plugin", desc: "Real-time pod health, deployment status, and error logs view." },
    { name: "CI/CD Insights", desc: "Pipeline build history, test coverage, and deployment velocity metrics." },
    { name: "Scorecards", desc: "Automated quality checks for security, SLAs, and architecture standards." }
  ];

  const architectureLayers = [
    { layer: "Developer Interface", item: "Backstage IDP / CLI Tools", icon: Terminal, color: "border-rose-500/40 bg-rose-950/20 text-rose-300" },
    { layer: "Orchestration & GitOps", item: "ArgoCD / GitHub Actions / Terraform", icon: Bot, color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { layer: "Container & Kubernetes", item: "AKS / EKS / OpenShift Clusters", icon: Cpu, color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { layer: "Cloud Infrastructure", item: "Azure / AWS / GCP Landing Zones", icon: Cloud, color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { layer: "Security & Observability", item: "Datadog / OpenTelemetry / Azure Sentinel", icon: Lock, color: "border-zinc-800 bg-zinc-950 text-zinc-400" }
  ];

  return (
    <>
      {/* 4. PLATFORM CAPABILITIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CAPABILITIES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Platform Engineering Capabilities
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{cap.title}</h4>
                  <p className="text-sm text-zinc-400 font-medium">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INTERNAL DEVELOPER PLATFORM (IDP) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">INTERNAL DEVELOPER PLATFORM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Powered by Spotify Backstage
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
              A unified portal unifying code repositories, service catalogs, deployment status, and developer tools into one intuitive interface.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idpModules.map((mod, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/60 border border-zinc-900 rounded-2xl hover:border-rose-500/40 transition-colors">
                <span className="text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest block mb-2">MODULE 0{idx + 1}</span>
                <h3 className="text-lg font-bold text-white mb-3">{mod.name}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOUD PLATFORM ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TOPOLOGY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Cloud Platform Layered Architecture
            </h2>
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {architectureLayers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div key={idx} className={`p-5 rounded-2xl border flex items-center justify-between transition-all duration-300 ${layer.color}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">{layer.layer}</span>
                      <h4 className="text-sm font-bold text-white">{layer.item}</h4>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-rose-500 font-bold">L{5 - idx}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
