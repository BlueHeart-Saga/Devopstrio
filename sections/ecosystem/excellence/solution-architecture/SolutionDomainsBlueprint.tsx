"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Building2,
  Cloud,
  AppWindow,
  Database,
  Network,
  ShieldCheck,
  Server,
  Bot,
  Users,
  Smartphone,
  Key,
  Boxes,
  Cpu,
  Activity,
  Layers
} from "lucide-react";

export function SolutionDomainsBlueprint() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const domains = [
    { title: "Enterprise Architecture", desc: "Align business capabilities with technology strategy.", icon: Building2 },
    { title: "Cloud Architecture", desc: "Design scalable and resilient cloud environments.", icon: Cloud },
    { title: "Application Architecture", desc: "Modern applications using modular and service-oriented designs.", icon: AppWindow },
    { title: "Data Architecture", desc: "Reliable, secure, and AI-ready data platforms.", icon: Database },
    { title: "Integration Architecture", desc: "Connect enterprise systems through APIs and event-driven services.", icon: Network },
    { title: "Security Architecture", desc: "Embed governance, identity, and protection across every layer.", icon: ShieldCheck },
    { title: "Infrastructure Architecture", desc: "Design highly available, scalable infrastructure.", icon: Server },
    { title: "AI Solution Architecture", desc: "Integrate AI services into enterprise workflows and applications.", icon: Bot }
  ];

  const blueprintLayers = [
    { name: "Business Users & Clients", sub: "Web, Mobile, Partner Portals, IoT Endpoints", icon: Users, color: "border-indigo-500/40 bg-indigo-950/20 text-indigo-400" },
    { name: "Digital Channels & UI Layer", sub: "Next.js, React Native, Edge WASM Routers", icon: Smartphone, color: "border-purple-500/40 bg-purple-950/20 text-purple-400" },
    { name: "API Gateway & Security Proxy", sub: "OAuth2, Rate-Limiting, WAF, Service Mesh Ingress", icon: Key, color: "border-pink-500/40 bg-pink-950/20 text-pink-400" },
    { name: "Business Services Layer", sub: "Domain Services, Business Process Workflows", icon: Building2, color: "border-rose-500/40 bg-rose-950/20 text-rose-400" },
    { name: "Microservices & Core Logic", sub: "Containerized Microservices, Event Handlers", icon: Boxes, color: "border-amber-500/40 bg-amber-950/20 text-amber-400" },
    { name: "AI Services & Orchestration", sub: "LLM Orchestration, Vector Search, ML Inference", icon: Cpu, color: "border-emerald-500/40 bg-emerald-950/20 text-emerald-400" },
    { name: "Data Platform & Warehousing", sub: "PostgreSQL, Delta Lake, Redis Cache, Kafka Streams", icon: Database, color: "border-cyan-500/40 bg-cyan-950/20 text-cyan-400" },
    { name: "Cloud Infrastructure", sub: "Azure, AWS, GCP Landing Zones, Multi-Region VPCs", icon: Cloud, color: "border-blue-500/40 bg-blue-950/20 text-blue-400" },
    { name: "Monitoring & Security Guardrails", sub: "Prometheus, OpenTelemetry, Vault, Zero Trust", icon: Activity, color: "border-teal-500/40 bg-teal-950/20 text-teal-400" }
  ];

  const cloudIntegrationCards = [
    "Hybrid Cloud", "Multi-Cloud", "API Management", "Event Streaming",
    "Identity Federation", "Service Mesh", "Messaging Platforms", "Integration Gateways"
  ];

  return (
    <>
      {/* 5. ARCHITECTURE DOMAINS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-400 mb-3 block">DOMAINS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Architecture Domains & Specializations
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{domain.title}</h4>
                  <p className="text-sm text-zinc-400 font-medium">{domain.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ENTERPRISE ARCHITECTURE BLUEPRINT */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-400 mb-3 block">BLUEPRINT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Enterprise Architecture Blueprint
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
              A unified, multi-layered architectural model connecting client touchpoints down to infrastructure and monitoring guardrails.
            </p>
          </Reveal>

          {/* Interactive Layered Architecture */}
          <div className="max-w-4xl mx-auto flex flex-col gap-3 relative">
            {blueprintLayers.map((layer, idx) => {
              const Icon = layer.icon;
              const isHovered = activeLayer === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveLayer(idx)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`p-4 rounded-xl border ${layer.color} flex items-center justify-between transition-all duration-300 cursor-pointer ${
                    isHovered ? "scale-[1.02] shadow-xl shadow-indigo-500/10 bg-zinc-900/90" : "bg-zinc-950/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-black/50 border border-white/5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white mb-0.5">{layer.name}</h4>
                      <p className="text-xs text-zinc-400 font-mono">{layer.sub}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    LAYER 0{9 - idx}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CLOUD & INTEGRATION ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-400 mb-3 block">INTEGRATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Cloud & Integration Architecture
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cloudIntegrationCards.map((item, idx) => (
              <div key={idx} className="p-5 bg-zinc-950/60 border border-zinc-900 rounded-xl flex items-center gap-3 hover:border-indigo-500/40 transition-colors">
                <Layers className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-xs font-semibold text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
