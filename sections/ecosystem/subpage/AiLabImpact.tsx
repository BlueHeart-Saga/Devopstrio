"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function AiLabImpact() {
  return (
    <>
      {/* 1. Stats Metrics */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              IMPACT QUANTIFIED
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              The value <span className="text-rose-500">AI delivers</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
              Demonstrated performance improvements across deployed microservices and cognitive frameworks.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">40%</span>
                <h4 className="text-[10px] font-bold text-zinc-200">Faster Operations</h4>
              </div>
            </Reveal>

            <Reveal delay={0.03} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">70%</span>
                <h4 className="text-[10px] font-bold text-zinc-200">Reduced Tasks</h4>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">24/7</span>
                <h4 className="text-[10px] font-bold text-zinc-200">Intelligent Support</h4>
              </div>
            </Reveal>

            <Reveal delay={0.09} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">92%</span>
                <h4 className="text-[10px] font-bold text-zinc-200">Accurate Decisions</h4>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">5x</span>
                <h4 className="text-[10px] font-bold text-zinc-200">Accelerated Innovation</h4>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">100%</span>
                <h4 className="text-[10px] font-bold text-zinc-200">Scalable Automation</h4>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Real-World Use Cases */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              REAL-WORLD IMPLEMENTATIONS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Real-world <span className="text-rose-500">AI use cases</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
              Practical application layers solving complex classification, generation, and scaling challenges.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-bold text-zinc-200 mb-2">AI Customer Support</h4>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Deployed an autonomous support routing agent matching email intents and writing database ticket items automatically.</p>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-bold text-zinc-200 mb-2">Document Processing</h4>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Parsing complex supplier invoices, structuring fields automatically, and executing checks in ERP systems.</p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-bold text-zinc-200 mb-2">Predictive Maintenance</h4>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Tuning sensor logs to forecast mechanical degradation anomalies 12 days before shutdown events.</p>
              </div>
            </Reveal>

            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-bold text-zinc-200 mb-2">Knowledge Management</h4>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Vectorizing internal wiki pages to enable semantic search lookups across Slack and local drives.</p>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-bold text-zinc-200 mb-2">Intelligent Monitoring</h4>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Parsing telemetry event logs to pinpoint latency bottlenecks and trigger scaling schedules.</p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-bold text-zinc-200 mb-2">Enterprise Search</h4>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Enabling hybrid vector lookups mapping corporate files across multiple storage endpoints.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Industry Applications */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              MARKET VERTICALS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              AI solutions <span className="text-rose-500">across industries</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
              Pre-packaged domain compliance matrices aligned for highly regulated global sectors.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
            {["Financial", "Healthcare", "Retail", "Mfg.", "Telecom", "Logistics", "Public Sec."].map((field, idx) => (
              <Reveal key={idx} delay={idx * 0.03} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 transition-all text-center">
                  <span className="block text-[11px] font-bold text-zinc-200">{field}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Enterprise AI Architecture Diagram */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Enterprise AI <span className="text-rose-500">architecture pipeline</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
              Robust multi-layer orchestration fabric from raw inputs to semantic caches and agent executors.
            </p>
          </Reveal>

          <div className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative items-center text-center">
              {/* Step 1 */}
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                <span className="block text-[9px] font-mono text-rose-500 mb-2 font-bold">INPUTS</span>
                <h4 className="text-xs font-bold text-zinc-200 mb-1">Enterprise Data</h4>
                <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">SQL logs, object storage buckets, real-time message queues.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                <span className="block text-[9px] font-mono text-rose-500 mb-2 font-bold">VECTORIZATION</span>
                <h4 className="text-xs font-bold text-zinc-200 mb-1">AI Data Layer</h4>
                <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">Semantic chunks, text embeddings, vector databases.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                <span className="block text-[9px] font-mono text-rose-500 mb-2 font-bold">COGNITION</span>
                <h4 className="text-xs font-bold text-zinc-200 mb-1">LLM Layer</h4>
                <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">Prompt evaluation caches, model endpoints, routers.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                <span className="block text-[9px] font-mono text-rose-500 mb-2 font-bold">LOGIC RUNTIME</span>
                <h4 className="text-xs font-bold text-zinc-200 mb-1">Agent Layer</h4>
                <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">State charts, circular reasoning loops, executor tools.</p>
              </div>

              {/* Step 5 */}
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                <span className="block text-[9px] font-mono text-rose-500 mb-2 font-bold">INTEGRATION</span>
                <h4 className="text-xs font-bold text-zinc-200 mb-1">Applications</h4>
                <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">REST APIs, Slack bots, database write actions.</p>
              </div>

              {/* Step 6 */}
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                <span className="block text-[9px] font-mono text-rose-500 mb-2 font-bold">ENDPOINTS</span>
                <h4 className="text-xs font-bold text-zinc-200 mb-1">Users</h4>
                <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">Active browser sessions, corporate Slack users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
