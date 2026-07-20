"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ShieldCheck,
  Eye,
  LineChart,
  Gauge,
  AlertTriangle,
  Bot,
  Activity,
  Flame,
  Globe,
  Cpu,
  Database,
  Lock,
  Search,
  BellRing
} from "lucide-react";

export function SRECapabilitiesArchitecture() {
  const capabilities = [
    { title: "Service Reliability Management", desc: "Setting up SLIs, SLOs, and Error Budgets to balance feature releases with uptime.", icon: ShieldCheck },
    { title: "Full-Stack Observability", desc: "Unified metrics, logs, and distributed tracing across hybrid cloud environments.", icon: Eye },
    { title: "Capacity Planning & Forecasting", desc: "Predictive traffic modeling to scale cloud resources ahead of demand spikes.", icon: LineChart },
    { title: "Performance Engineering", desc: "Latency optimization, database query tuning, and synthetic load testing.", icon: Gauge },
    { title: "Incident Management & Triage", desc: "PagerDuty/Opsgenie multi-tiered response trees and automated runbooks.", icon: AlertTriangle },
    { title: "Toil Reduction & Automation", desc: "Automating operational workflows, self-healing pods, and auto-rollback gates.", icon: Bot },
    { title: "Disaster Recovery & Failover", desc: "Multi-region active-active topologies and automated RTO/RPO validation.", icon: Activity },
    { title: "Chaos Engineering & Game Days", desc: "Injecting fault scenarios to validate system resilience before actual outages.", icon: Flame }
  ];

  const topologyTiers = [
    { layer: "Global Users & Edge CDN", item: "Cloudflare Anycast / Azure Front Door", icon: Globe, color: "border-rose-500/40 bg-rose-950/20 text-rose-300" },
    { layer: "API & Traffic Management", item: "Envoy Proxy / Istio Service Mesh / Gateway API", icon: Cpu, color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { layer: "Application Clusters", item: "Kubernetes Auto-scaling Pods (HPA / VPA)", icon: Bot, color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { layer: "Database & Cache Layer", item: "Active-Active Multi-Region Postgres / Redis Cluster", icon: Database, color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { layer: "Telemetry & Control Center", item: "OpenTelemetry / Prometheus / Grafana Alert Engine", icon: Eye, color: "border-zinc-800 bg-zinc-950 text-zinc-400" }
  ];

  const observabilityCards = [
    { title: "Metrics (Prometheus / Datadog)", desc: "Real-time CPU, memory, request rate, and latency metrics." },
    { title: "Logs (ELK / Loki)", desc: "Centralized, structured log aggregation with instant search." },
    { title: "Tracing (OpenTelemetry / Jaeger)", desc: "End-to-end distributed tracing across microservices." },
    { title: "Dashboards (Grafana)", desc: "Single pane of glass for SLO compliance and health status." },
    { title: "Synthetic Monitoring", desc: "Simulated user journeys testing critical transactions 24/7." },
    { title: "Smart Alerting", desc: "Noise-free alerting based on error budget burn rate." }
  ];

  return (
    <>
      {/* 5. CORE SRE CAPABILITIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CAPABILITIES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Core SRE Capabilities
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

      {/* 6. ENTERPRISE PRODUCTION ARCHITECTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TOPOLOGY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Resilient Production Topology
            </h2>
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {topologyTiers.map((tier, idx) => {
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

      {/* 7. OBSERVABILITY PLATFORM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TELEMETRY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Observability Platform Architecture
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {observabilityCards.map((obs, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/60 border border-zinc-900 rounded-2xl hover:border-rose-500/40 transition-colors">
                <span className="text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest block mb-2">TELEMETRY 0{idx + 1}</span>
                <h3 className="text-lg font-bold text-white mb-3">{obs.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{obs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
