"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ShieldCheck,
  Lock,
  FileText,
  Boxes,
  Cpu,
  Database,
  Cloud,
  Network,
  CheckCircle2
} from "lucide-react";

export function SolutionDecisionReference() {
  const securityCapabilities = [
    { title: "Zero Trust Architecture", desc: "Identity-aware proxies and strict least-privilege access control." },
    { title: "Data Protection & Encryption", desc: "End-to-end encryption at rest (KMS) and in transit (TLS 1.3)." },
    { title: "Compliance Framework Alignment", desc: "SOC 2, ISO 27001, GDPR, and HIPAA compliant architecture patterns." },
    { title: "Automated Threat Modeling", desc: "STRIDE/PASTA threat modeling integrated before development cycles." }
  ];

  const patterns = [
    { name: "Event-Sourcing & CQRS", desc: "Separating read/write pipelines for high-throughput transactional systems.", icon: Database },
    { name: "BFF (Backend for Frontend)", desc: "Tailoring API specs specifically for Web, Mobile, and Partner interfaces.", icon: Cpu },
    { name: "Strangler Fig Pattern", desc: "Incrementally replacing legacy monoliths with modern cloud microservices.", icon: Boxes },
    { name: "Saga Pattern", desc: "Managing distributed transactions across asynchronous microservices.", icon: Network }
  ];

  const decisionMatrix = [
    { criterion: "System Scalability", monolithic: "Vertical (Limited)", microservices: "Horizontal (Independent)", serverless: "Automated Infinite" },
    { criterion: "Operational Complexity", monolithic: "Low", microservices: "High (Requires K8s/Mesh)", serverless: "Medium (Provider Managed)" },
    { criterion: "Deployment Velocity", monolithic: "Slow (Single Pipeline)", microservices: "Fast (Autonomous Teams)", serverless: "Ultra-Fast (Function Level)" },
    { criterion: "Cost Structure", monolithic: "Fixed Infrastructure", microservices: "Cluster Reserved + Dynamic", serverless: "100% Pay-per-Use" }
  ];

  return (
    <>
      {/* 7. SECURITY & GOVERNANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SECURITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Security & Governance by Design
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityCapabilities.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all">
                <ShieldCheck className="w-6 h-6 text-rose-500 mb-4" />
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ARCHITECTURE PATTERNS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PATTERNS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Enterprise Architecture Patterns
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {patterns.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all">
                  <Icon className="w-6 h-6 text-rose-500 mb-4" />
                  <h4 className="text-base font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. TECHNOLOGY DECISION FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DECISION MATRIX</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Technology Decision Framework
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
              Objective trade-off evaluations driving pragmatic technical choices.
            </p>
          </Reveal>

          <div className="overflow-x-auto bg-zinc-950/60 border border-zinc-900 rounded-2xl p-6 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-900 text-xs font-mono uppercase text-rose-500">
                  <th className="p-4">Criterion</th>
                  <th className="p-4">Monolithic</th>
                  <th className="p-4">Microservices</th>
                  <th className="p-4">Serverless</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/80 text-xs font-medium text-zinc-300">
                {decisionMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="p-4 font-bold text-white">{row.criterion}</td>
                    <td className="p-4 text-zinc-400">{row.monolithic}</td>
                    <td className="p-4 text-zinc-300">{row.microservices}</td>
                    <td className="p-4 text-zinc-400">{row.serverless}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
