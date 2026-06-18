"use client";

import React from "react";
import { Bot } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function AiLabOverview() {
  return (
    <>
      {/* Overview Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                WHERE INNOVATION MEETS EXECUTION
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Structured R&D to <span className="text-rose-500">validate use cases</span> and scale systems
              </h2>
              <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
                Dedicated sandboxes allowing fast verification of machine learning models before enterprise migration.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="border-l border-rose-500/30 pl-4 py-2">
                <h4 className="text-xs font-bold text-zinc-200 mb-1">AI Research</h4>
                <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed">Testing pre-release models and parameter fine-tuning boundaries.</p>
              </div>
              <div className="border-l border-rose-500/30 pl-4 py-2">
                <h4 className="text-xs font-bold text-zinc-200 mb-1">AI Prototyping</h4>
                <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed">Developing production-grade sandboxes and data endpoints in under 4 weeks.</p>
              </div>
              <div className="border-l border-rose-500/30 pl-4 py-2">
                <h4 className="text-xs font-bold text-zinc-200 mb-1">LLM Engineering</h4>
                <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed">Custom prompt safety setups, semantic caching, and output routing layers.</p>
              </div>
              <div className="border-l border-rose-500/30 pl-4 py-2">
                <h4 className="text-xs font-bold text-zinc-200 mb-1">Agent Development</h4>
                <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed">Constructing stateful multi-agent workflows using task graphs.</p>
              </div>
              <div className="border-l border-rose-500/30 pl-4 py-2">
                <h4 className="text-xs font-bold text-zinc-200 mb-1">AI Product Innovation</h4>
                <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed">Designing tailored user interfaces that enable human+AI collaboration.</p>
              </div>
              <div className="border-l border-rose-500/30 pl-4 py-2">
                <h4 className="text-xs font-bold text-zinc-200 mb-1">AI Transformation</h4>
                <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed">Establishing compliance protocols and model training handoff structures.</p>
              </div>
            </div>
          </div>

          {/* 3D-style AI illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)]" />
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mx-auto mb-6">
                <Bot size={24} />
              </div>
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Devopstrio Cognitive Blueprint</h4>
              <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                Integrating customized prompt filters and local databases with cloud endpoints.
              </p>
              <div className="mt-6 border-t border-zinc-900 pt-4 flex items-center justify-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[9px] font-mono tracking-widest text-zinc-550 uppercase font-bold">ACTIVE SIMULATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Practice Areas */}
      <section id="innovation-areas" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              R&D PRACTICE AREAS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Our AI research & <span className="text-rose-500">development fields</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
              Exploring neural architectures, autonomous reasoning loops, and zero-trust data access gates.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 hover:bg-zinc-900/5 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Generative AI
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-semibold">
                  <li>ChatGPT Integrations & Fine-Tuning</li>
                  <li>Custom Coding Copilots</li>
                  <li>Marketing Content Generation</li>
                  <li>Knowledge Base Retrieval Assistants</li>
                </ul>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 hover:bg-zinc-900/5 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Agentic AI
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-semibold">
                  <li>Autonomous AI Agents</li>
                  <li>Multi-Agent Orchestration Systems</li>
                  <li>Complex Task Automation Loop</li>
                  <li>Logical Decision-Making Engines</li>
                </ul>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 hover:bg-zinc-900/5 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Enterprise AI
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-semibold">
                  <li>Document Intelligence & Ingest</li>
                  <li>Business Rule Automation Pipelines</li>
                  <li>Intelligent Corporate Workflows</li>
                  <li>Semantic Enterprise Search</li>
                </ul>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal delay={0.15} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 hover:bg-zinc-900/5 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  AI Analytics
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-semibold">
                  <li>Time-Series Predictive Models</li>
                  <li>Enterprise Churn Forecasting</li>
                  <li>Cognitive Business Intelligence</li>
                  <li>User Recommendation Systems</li>
                </ul>
              </div>
            </Reveal>

            {/* Card 5 */}
            <Reveal delay={0.2} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 hover:bg-zinc-900/5 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Computer Vision
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-semibold">
                  <li>Production Image Analysis</li>
                  <li>Real-time Object Detection</li>
                  <li>Multi-language OCR Pipelines</li>
                  <li>Security Video Intelligence</li>
                </ul>
              </div>
            </Reveal>

            {/* Card 6 */}
            <Reveal delay={0.25} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 hover:bg-zinc-900/5 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Conversational AI
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-semibold">
                  <li>Smart Virtual Assistants</li>
                  <li>Automated Customer Support Bots</li>
                  <li>Context-aware Voice AI Channels</li>
                  <li>Audio Speech Analytics</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
