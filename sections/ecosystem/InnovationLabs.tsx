"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

export function InnovationLabs() {
  return (
    <section id="innovation-labs" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">

        <Reveal className="mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            INNOVATION CENTERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Active R&D <span className="text-rose-500">innovation labs</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Lab 1 */}
          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/30 hover:bg-zinc-900/5 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between min-h-[180px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
              <div>
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-4 font-semibold">
                  LAB 01 / COGNITIVE AI
                </span>
                <h3 className="text-base font-semibold text-white group-hover:text-rose-450 transition-colors">
                  LLM Fine-Tuning & Prompt Safety
                </h3>
              </div>
              <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2 mt-6">
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">PyTorch</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Llama-3</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">LangGraph</span>
              </div>
            </div>
          </Reveal>

          {/* Lab 2 */}
          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/30 hover:bg-zinc-900/5 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between min-h-[180px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
              <div>
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-4 font-semibold">
                  LAB 02 / ZERO TRUST
                </span>
                <h3 className="text-base font-semibold text-white group-hover:text-rose-450 transition-colors">
                  IaC Validation & Secrets Injection
                </h3>
              </div>
              <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2 mt-6">
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Vault</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Terraform</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[9px] font-mono border border-zinc-800/80">Trivy</span>
              </div>
            </div>
          </Reveal>

          {/* Lab 3 */}
          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/30 hover:bg-zinc-900/5 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between min-h-[180px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
              <div>
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-4 font-semibold">
                  LAB 03 / PLATFORM SRE
                </span>
                <h3 className="text-base font-semibold text-white group-hover:text-rose-450 transition-colors">
                  Karpenter Auto-scaling & Telemetry
                </h3>
              </div>
              <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2 mt-6">
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
