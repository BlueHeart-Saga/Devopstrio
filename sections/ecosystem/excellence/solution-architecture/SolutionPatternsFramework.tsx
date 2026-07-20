"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ShieldCheck,
  Key,
  Lock,
  FileCheck,
  ShieldAlert,
  Search,
  CheckCircle2,
  Boxes,
  Workflow,
  Zap,
  Split,
  BookOpen,
  Network,
  Layers,
  Scale,
  DollarSign,
  Gauge,
  TrendingUp,
  Cpu,
  Building,
  HeartPulse,
  ShoppingBag,
  Landmark
} from "lucide-react";

export function SolutionPatternsFramework() {
  const [selectedPattern, setSelectedPattern] = useState<number>(0);

  const securityItems = [
    { title: "Zero Trust Architecture", icon: Lock },
    { title: "Identity & Access Management", icon: Key },
    { title: "End-to-End Encryption", icon: ShieldCheck },
    { title: "Governance Policies", icon: FileCheck },
    { title: "Compliance Frameworks", icon: CheckCircle2 },
    { title: "Risk Management", icon: ShieldAlert },
    { title: "Audit Logging & Traceability", icon: Search },
    { title: "Secure API Gateways", icon: Network }
  ];

  const patterns = [
    { title: "Microservices", desc: "Decomposing domains into independently deployable services.", details: "Ideal for large teams needing autonomous deployment lifecycles and domain isolation." },
    { title: "Modular Monolith", desc: "Clean boundaries within a unified codebase.", details: "Reduces operational complexity while keeping domain boundaries clean for future microservices extraction." },
    { title: "Event-Driven Architecture", desc: "Asynchronous pub/sub for real-time responsiveness.", details: "Decouples producers and consumers using event brokers like Kafka or Event Hubs." },
    { title: "Serverless", desc: "Event-triggered compute without server overhead.", details: "Eliminates idle compute costs and scales automatically from zero to millions of requests." },
    { title: "CQRS Pattern", desc: "Command Query Responsibility Segregation.", details: "Separates read and write data models for extreme read performance and complex domain validation." },
    { title: "Domain-Driven Design (DDD)", desc: "Modeling software to match business domains.", details: "Aligns domain experts and engineers using a shared ubiquitous language and bounded contexts." },
    { title: "API Gateway Pattern", desc: "Single entry point for client requests.", details: "Handles authentication, rate-limiting, request routing, and protocol translation at the edge." },
    { title: "Layered Architecture", desc: "Traditional N-tier separation of concerns.", details: "Separates Presentation, Business Logic, and Data Access layers for maintainability." }
  ];

  const decisionCriteria = [
    { name: "Business Goals", weight: "Strategic Fit", icon: Scale },
    { name: "Scalability", weight: "Elastic Growth", icon: Gauge },
    { name: "Security", weight: "Zero-Trust", icon: Lock },
    { name: "Performance", weight: "Low Latency", icon: Zap },
    { name: "Cost Optimization", weight: "TCO & FinOps", icon: DollarSign },
    { name: "Maintainability", weight: "Low Tech Debt", icon: BookOpen },
    { name: "Cloud Readiness", weight: "Multi-Cloud", icon: Layers },
    { name: "Future Growth", weight: "Extensibility", icon: TrendingUp }
  ];

  const referenceArchitectures = [
    { title: "Enterprise SaaS Platform", desc: "Multi-tenant architecture with tenant isolation & billing.", icon: Building },
    { title: "AI-Powered Business Application", desc: "LLM orchestration, vector search & RAG pipelines.", icon: Cpu },
    { title: "Cloud-Native Microservices", desc: "Kubernetes, service mesh, and GitOps deployments.", icon: Boxes },
    { title: "Data Analytics Platform", desc: "Streaming ingestion, lakehouse storage & real-time BI.", icon: Workflow },
    { title: "DevOps Platform", desc: "Internal developer portals and automated CI/CD pipelines.", icon: Zap },
    { title: "Digital Commerce Platform", desc: "Headless commerce, high-throughput checkout & inventory.", icon: ShoppingBag },
    { title: "Healthcare Platform", desc: "HIPAA-compliant EHR integration & secure telemetry.", icon: HeartPulse },
    { title: "Financial Services Platform", desc: "PCI-DSS compliant, low-latency transaction processing.", icon: Landmark }
  ];

  return (
    <>
      {/* 8. SECURITY & GOVERNANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-400 mb-3 block">GOVERNANCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Security & Architecture Governance
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {securityItems.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="p-5 bg-zinc-950/60 border border-zinc-900 rounded-xl flex items-center gap-3 hover:border-indigo-500/40 transition-colors">
                  <Icon className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-300">{sec.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. ARCHITECTURE PATTERNS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-400 mb-3 block">PATTERNS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Proven Architecture Patterns
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Pattern Selector Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {patterns.map((pattern, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPattern(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    selectedPattern === idx
                      ? "bg-indigo-950/40 border-indigo-500 text-white shadow-lg shadow-indigo-500/10"
                      : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:border-zinc-800 hover:text-zinc-200"
                  }`}
                >
                  <h4 className="text-sm font-bold mb-1">{pattern.title}</h4>
                  <p className="text-xs text-zinc-400 line-clamp-2">{pattern.desc}</p>
                </div>
              ))}
            </div>

            {/* Pattern Detail Viewer */}
            <div className="lg:col-span-6 bg-zinc-950/60 border border-zinc-900 rounded-3xl p-8 sticky top-28">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 block mb-2">
                FEATURED ARCHITECTURE PATTERN
              </span>
              <h3 className="text-2xl font-black text-white mb-4">
                {patterns[selectedPattern].title}
              </h3>
              <p className="text-sm text-zinc-300 mb-6 font-medium leading-relaxed">
                {patterns[selectedPattern].desc}
              </p>
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 block mb-2">
                  When to use & Architectural Benefits
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  {patterns[selectedPattern].details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TECHNOLOGY DECISION FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-400 mb-3 block">EVALUATION MATRIX</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Technology Decision Framework
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
              Selecting the right technology for the right problem through rigorous trade-off analysis and decision matrices.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {decisionCriteria.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-indigo-500/30 transition-all flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.name}</h4>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{item.weight}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. REFERENCE ARCHITECTURES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-400 mb-3 block">BLUEPRINTS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Reference Architectures
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {referenceArchitectures.map((ref, idx) => {
              const Icon = ref.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-indigo-500/30 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{ref.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">{ref.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
