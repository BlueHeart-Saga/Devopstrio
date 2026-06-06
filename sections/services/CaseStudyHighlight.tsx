"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudyHighlight() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        <Reveal className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              CLIENT IMPACT
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Services in action: <span className="font-semibold text-rose-500">financial engine optimization</span>
          </h2>
        </Reveal>

        <div className="bg-[#030303] border border-zinc-900 rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Panel: Impact Description */}
          <Reveal className="text-left relative z-10">
            <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-3">Case Study / FinTech Runtimes</span>
            <h3 className="text-xl md:text-2xl font-light text-white mb-6">
              Migrating a high-frequency trading platform to AWS Kubernetes with zero packet loss.
            </h3>

            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-8">
              We partnered with a top Tier-1 financial provider to decouple their monolithic legacy order execution engine into containerized Go microservices on EKS. We integrated zero-trust mesh routing and customized sidecar kernels to achieve sub-millisecond execution times.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900">
              <div>
                <span className="block text-2xl font-semibold text-white font-mono mb-1">
                  180ms
                </span>
                <span className="text-[10px] text-zinc-550 block leading-tight font-light">
                  Latency reduction
                </span>
              </div>
              <div>
                <span className="block text-2xl font-semibold text-white font-mono mb-1">
                  99.999%
                </span>
                <span className="text-[10px] text-zinc-550 block leading-tight font-light">
                  Continuous uptime SLA
                </span>
              </div>
              <div>
                <span className="block text-2xl font-semibold text-white font-mono mb-1">
                  45%
                </span>
                <span className="text-[10px] text-zinc-550 block leading-tight font-light">
                  Cloud hosting savings
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right Panel: Callout Box */}
          <Reveal className="bg-[#080808] border border-zinc-900 rounded-2xl p-6 relative z-10 text-left">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">Tech Highlights</span>
            <ul className="flex flex-col gap-3 text-xs text-zinc-300 font-light mb-8">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5" />
                <div>
                  <strong className="text-zinc-200 block text-xs">AWS EKS Cluster Resize</strong>
                  <span className="text-[10px] text-zinc-500">Configured NodeGroup scalers for flash surges.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5" />
                <div>
                  <strong className="text-zinc-200 block text-xs">Zero-Trust Sidecar Routing</strong>
                  <span className="text-[10px] text-zinc-500">Mutual TLS tunnels between services.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5" />
                <div>
                  <strong className="text-zinc-200 block text-xs">Custom WebSockets Cache</strong>
                  <span className="text-[10px] text-zinc-500">Redis layers for real-time tickers.</span>
                </div>
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-semibold tracking-wide text-white border border-rose-600 bg-rose-600/5 hover:bg-rose-600 transition-colors"
            >
              Read full report <ArrowUpRight size={12} />
            </a>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
