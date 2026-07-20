"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Compass,
  Cloud,
  Layers,
  Network,
  Repeat,
  FileCheck,
  ShieldCheck,
  Maximize2,
  ArrowRight,
  Database,
  Lock,
  Globe,
  Cpu
} from "lucide-react";

export function SolutionCapabilitiesBlueprint() {
  const designPhases = [
    "Requirements & Domain Discovery",
    "Conceptual Architecture",
    "Domain-Driven Design (DDD)",
    "Cloud & Integration Blueprint",
    "Security & Compliance Review",
    "POC & Tech Spike",
    "Architecture Decision Record (ADR)",
    "Governance & Roadmap"
  ];

  const domains = [
    { title: "Enterprise Architecture", desc: "Aligning IT strategy, business capabilities, and enterprise roadmaps.", icon: Compass },
    { title: "Cloud Native Architecture", desc: "Multi-cloud landing zones, serverless, and containerized topologies.", icon: Cloud },
    { title: "Microservices & Distributed Systems", desc: "Decomposing monoliths into resilient, loosely-coupled microservices.", icon: Layers },
    { title: "API Strategy & Integration", desc: "API gateways, GraphQL federations, and RESTful contract design.", icon: Network },
    { title: "Event-Driven Architecture", desc: "Kafka, Event Grid, and message-driven real-time data streaming.", icon: Repeat },
    { title: "Solution Blueprints", desc: "High-level design (HLD) and low-level design (LLD) specifications.", icon: FileCheck },
    { title: "Architecture Reviews (WAF)", desc: "AWS/Azure Well-Architected Framework audits and remediation.", icon: ShieldCheck },
    { title: "Scalability & Resilience Planning", desc: "Chaos engineering, fault isolation, and disaster recovery blueprints.", icon: Maximize2 }
  ];

  const blueprintTiers = [
    { layer: "Presentation & Edge", item: "Cloudflare CDN / API Gateway / OAuth2 OIDC", icon: Globe, color: "border-rose-500/40 bg-rose-950/20 text-rose-300" },
    { layer: "Microservices Core", item: "Containerized Workloads (AKS / EKS) & Service Mesh", icon: Cpu, color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { layer: "Integration & Events", item: "Kafka / Azure Event Hubs / RabbitMQ", icon: Network, color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { layer: "Data Layer", item: "PostgreSQL / Redis / Cosmos DB / Snowflake", icon: Database, color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { layer: "Security & Governance", item: "Zero Trust IAM / HashiCorp Vault / SIEM Audit", icon: Lock, color: "border-zinc-800 bg-zinc-950 text-zinc-400" }
  ];

  return (
    <>
      {/* 4. ARCHITECTURE DESIGN PROCESS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PROCESS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Architecture Design Lifecycle
            </h2>
          </Reveal>

          <div className="relative mt-20 mb-10 px-4">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-900 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-600 via-rose-500 to-transparent -translate-y-1/2 w-3/4 opacity-50 blur-sm"></div>

            <div className="flex justify-between items-center relative z-10 overflow-x-auto pb-8 hide-scrollbar">
              {designPhases.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[140px]">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.5)] mb-4"></div>
                  <span className="text-[10px] font-bold text-rose-500 tracking-wider mb-2">PHASE 0{idx + 1}</span>
                  <span className="text-xs md:text-sm font-semibold text-zinc-300 text-center">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURE DOMAINS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DOMAINS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Core Architecture Domains
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((dom, idx) => {
              const Icon = dom.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{dom.title}</h4>
                  <p className="text-sm text-zinc-400 font-medium">{dom.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ENTERPRISE ARCHITECTURE BLUEPRINT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">BLUEPRINT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Reference Blueprint Topology
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
              A layered enterprise blueprint ensuring security, scalability, and integration elasticity across multi-cloud environments.
            </p>
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {blueprintTiers.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <div key={idx} className={`p-5 rounded-2xl border flex items-center justify-between transition-all duration-300 ${tier.color}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">{tier.layer}</span>
                      <h4 className="text-sm font-bold text-white">{tier.item}</h4>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-rose-500 font-bold">TIER 0{idx + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
