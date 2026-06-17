"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function DomainExcellence() {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            EXCELLENCE BENCHMARKS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Rigorous <span className="text-rose-500">engineering standards</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Rigorous coding metrics, automated unit testing frameworks, and GitOps deployments protecting production secrets.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-950/25 transition-all duration-300">
                <CheckCircle2 size={16} />
              </div>
              <h4 className="text-sm font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                Automated Pipeline Testing
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                Every code commit runs through automated testing pipelines, executing regression checks, SAST code analysis, and CVE security scans.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-950/25 transition-all duration-300">
                <ShieldCheck size={16} />
              </div>
              <h4 className="text-sm font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                GitOps Configuration State
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                Live cloud infrastructure state is synchronized with git repository configurations, preventing manual shifts and ensuring auditability.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-950/25 transition-all duration-300">
                <Workflow size={16} />
              </div>
              <h4 className="text-sm font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                Zero Trust Privileges
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                Access keys are never stored in plain text. Compute hosts pull scoped credentials dynamically from HashiCorp Vault.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
