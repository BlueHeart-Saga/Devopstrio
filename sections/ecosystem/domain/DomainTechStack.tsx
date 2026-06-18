"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { IntegrationsExplorer } from "@/components/ecosystem/IntegrationsExplorer";

interface DomainTechStackProps {
  domain: string;
}

export function DomainTechStack({ domain }: DomainTechStackProps) {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            INTEGRATIONS CATALOG
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Ecosystem <span className="text-rose-500">technology integrations</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Full-stack engineering libraries, database clusters, container setups, and API gateways built for zero latency.
          </p>
        </Reveal>

        {domain === "technology-stack" ? (
          <IntegrationsExplorer />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/25 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Cloud Platforms
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-400 font-semibold">
                  <li>Amazon Web Services (AWS)</li>
                  <li>Microsoft Azure Cloud</li>
                  <li>Google Cloud Platform (GCP)</li>
                  <li>Kubernetes Container Orchestration</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/25 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Automation & IaC
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-400 font-semibold">
                  <li>Terraform & OpenTofu Codification</li>
                  <li>Ansible Configuration Automation</li>
                  <li>ArgoCD GitOps Deployment</li>
                  <li>GitHub Actions Pipeline Engines</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/25 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  AI & Data Platforms
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-400 font-semibold">
                  <li>PyTorch Neural Foundations</li>
                  <li>LangChain / LangGraph Orchestrators</li>
                  <li>Pinecone Vector Indexes</li>
                  <li>Qdrant High-Performance Stores</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/25 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Observability & SRE
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-400 font-semibold">
                  <li>OpenTelemetry Tracing Frameworks</li>
                  <li>Prometheus Latency Collectors</li>
                  <li>Grafana Unified Telemetry Views</li>
                  <li>Datadog Dashboard Monitoring</li>
                </ul>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
