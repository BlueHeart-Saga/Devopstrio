"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  LayoutTemplate,
  Boxes,
  GitBranch,
  Network,
  BookOpen,
  Activity,
  KeyRound,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Server,
  Terminal,
  Cpu,
  Monitor
} from "lucide-react";

export function PlatformCoreCapabilities() {
  const capabilities = [
    { title: "Internal Developer Platform (IDP)", desc: "A centralized platform providing self-service access to infrastructure, templates, and deployment pipelines.", icon: LayoutTemplate },
    { title: "Kubernetes Platform", desc: "Managed Kubernetes environments for scalable containerized applications.", icon: Boxes },
    { title: "CI/CD Platform", desc: "Automated build, testing, deployment, and release pipelines.", icon: GitBranch },
    { title: "API Platform", desc: "Centralized API gateways, service discovery, and API lifecycle management.", icon: Network },
    { title: "Developer Portal", desc: "Reusable templates, documentation, and engineering standards.", icon: BookOpen },
    { title: "Platform Monitoring", desc: "Observability dashboards with real-time performance insights.", icon: Activity },
    { title: "Identity Platform", desc: "Secure authentication, authorization, and access management.", icon: KeyRound },
    { title: "Cloud Foundation", desc: "Landing zones, governance, networking, and shared cloud services.", icon: Cloud }
  ];

  const idpWorkflow = [
    { step: "Developer", icon: Terminal },
    { step: "Developer Portal", icon: BookOpen },
    { step: "Platform Templates", icon: LayoutTemplate },
    { step: "CI/CD Pipeline", icon: GitBranch },
    { step: "Cloud Infrastructure", icon: Cloud },
    { step: "Kubernetes", icon: Boxes },
    { step: "Monitoring", icon: Activity },
    { step: "Production", icon: Server }
  ];

  const idpFeatures = [
    "Project Templates",
    "Self-Service Deployments",
    "Automated Infrastructure",
    "Built-in Security",
    "Developer Documentation",
    "Platform APIs"
  ];

  const architectureLayers = [
    { layer: "Applications", desc: "Microservices, Web Apps, Mobile Backends, AI Workloads", icon: Monitor, color: "border-cyan-500/50 bg-cyan-950/20 text-cyan-400" },
    { layer: "Developer Platform", desc: "Internal Developer Portal, Service Catalog, Golden Paths, Self-Service APIs", icon: BookOpen, color: "border-blue-500/50 bg-blue-950/20 text-blue-400" },
    { layer: "CI/CD & Automation", desc: "GitHub Actions, ArgoCD, Terraform Provisioning, Policy as Code", icon: GitBranch, color: "border-indigo-500/50 bg-indigo-950/20 text-indigo-400" },
    { layer: "Kubernetes", desc: "EKS, AKS, GKE Cluster Fleets, Mesh Networking, Ingress Controls", icon: Boxes, color: "border-purple-500/50 bg-purple-950/20 text-purple-400" },
    { layer: "Cloud Infrastructure", desc: "AWS, Azure, GCP Landing Zones, Multi-Region VPCs, Direct Connect", icon: Cloud, color: "border-pink-500/50 bg-pink-950/20 text-pink-400" },
    { layer: "Security & Monitoring", desc: "Prometheus, Grafana, OpenTelemetry, Vault, Zero Trust Guardrails", icon: ShieldCheck, color: "border-emerald-500/50 bg-emerald-950/20 text-emerald-400" }
  ];

  const cloudFoundationCards = [
    "Landing Zones", "Networking", "Shared Services", "Identity Management",
    "Resource Governance", "Cost Management", "Backup & Recovery", "Disaster Recovery"
  ];

  return (
    <>
      {/* 4. PLATFORM CAPABILITIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-3 block">CORE CAPABILITIES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Comprehensive Platform Services
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-3 block">SELF-SERVICE WORKFLOW</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Internal Developer Platform (IDP)
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
              Empower engineering teams with a unified self-service control plane for provisioning environments, enforcing compliance, and shipping code.
            </p>
          </Reveal>

          {/* Workflow Diagram */}
          <div className="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-8 block text-center">
              End-to-End Self-Service Pipeline
            </span>

            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 relative z-10">
              {idpWorkflow.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center min-w-[110px] group">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-3 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all shadow-md">
                        <Icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-300 text-center group-hover:text-white transition-colors">{item.step}</span>
                    </div>
                    {idx < idpWorkflow.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-zinc-700 shrink-0 hidden lg:block" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Key IDP Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {idpFeatures.map((feat, idx) => (
              <div key={idx} className="p-4 bg-zinc-950/40 border border-zinc-900/80 rounded-xl flex items-center gap-3 hover:border-blue-500/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-semibold text-zinc-300">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOUD PLATFORM ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-3 block">ENTERPRISE FOUNDATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Cloud Platform Architecture
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
              Standardized, multi-layer cloud architecture designed for security, performance, and automated governance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Layered Visualization */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              {architectureLayers.map((layer, idx) => {
                const Icon = layer.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border ${layer.color} flex items-center justify-between transition-all duration-300 hover:translate-x-2`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-black/40">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">{layer.layer}</h4>
                        <p className="text-xs text-zinc-400">{layer.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">L{6 - idx}</span>
                  </div>
                );
              })}
            </div>

            {/* Cloud Foundation Cards */}
            <div className="lg:col-span-5 bg-zinc-950/40 border border-zinc-900 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-zinc-900 pb-4">
                Standardized Cloud Foundations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cloudFoundationCards.map((card, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800/80 rounded-lg text-xs font-semibold text-zinc-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {card}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
