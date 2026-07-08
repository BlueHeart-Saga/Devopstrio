"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

export function InnovationLabs() {
  return (
    <section id="innovation-labs" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">

        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            INNOVATION CENTERS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Active R&D <span className="text-rose-500">innovation labs</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Dedicated R&D workspaces prototyping next-gen software systems, autonomous AI agents, and zero-trust networks. Discover our <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">software development</Link> initiatives or consult our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Lab 1 */}
          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/30 hover:bg-zinc-900/5 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-6 font-bold">
                LAB 01 / COGNITIVE AI
              </span>
              <h3 className="text-base font-bold text-white mb-3 group-hover:text-rose-450 transition-colors">
                LLM Fine-Tuning & Prompt Safety
              </h3>
              <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6">
                Developing parameter-efficient techniques (PEFT) using QLoRA layers. Testing adversarial prompt firewall scripts to prevent LLM injection hazards.
              </p>
              <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">PyTorch</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Llama-3</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">LangGraph</span>
              </div>
            </div>
          </Reveal>

          {/* Lab 2 */}
          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/30 hover:bg-zinc-900/5 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-6 font-bold">
                LAB 02 / ZERO TRUST
              </span>
              <h3 className="text-base font-bold text-white mb-3 group-hover:text-rose-450 transition-colors">
                IaC Validation & Secrets Injection
              </h3>
              <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6">
                Automating dynamic secrets injections inside Kubernetes runtimes using HashiCorp Vault. Running dry-run validation checks on code layouts to ensure data protection.
              </p>
              <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Vault</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Terraform</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Trivy</span>
              </div>
            </div>
          </Reveal>

          {/* Lab 3 */}
          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/30 hover:bg-zinc-900/5 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-6 font-bold">
                LAB 03 / PLATFORM SRE
              </span>
              <h3 className="text-base font-bold text-white mb-3 group-hover:text-rose-450 transition-colors">
                Karpenter Auto-scaling & Telemetry
              </h3>
              <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6">
                Constructing low-cost autoscaling setups on EKS grids. Benchmarking OpenTelemetry tracing parameters to reduce transaction lookup delays.
              </p>
              <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Kubernetes</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Prometheus</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Jaeger</span>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
