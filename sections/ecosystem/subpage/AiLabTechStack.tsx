"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function AiLabTechStack() {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ENGINEERING FOUNDATION
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Powered by leading <span className="text-rose-500">AI technologies</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Selected developer frameworks, foundational language models, analytics warehouses, and MLOps gates.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6">
              <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                Foundation Models
              </h4>
              <ul className="space-y-2 text-[10px] text-zinc-400 font-semibold">
                <li>OpenAI GPT-4o / o1</li>
                <li>Anthropic Claude 3.5 Sonnet</li>
                <li>Google Gemini 1.5 Pro</li>
                <li>Meta Llama 3.1 (Open-weights)</li>
                <li>Mistral Large (Open-weights)</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6">
              <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                AI Frameworks
              </h4>
              <ul className="space-y-2 text-[10px] text-zinc-400 font-semibold">
                <li>LangChain Agent Libraries</li>
                <li>LlamaIndex Indexers</li>
                <li>CrewAI Agent Frameworks</li>
                <li>Microsoft AutoGen Graphs</li>
                <li>DSPy Prompt Optimization</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6">
              <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                Data Platforms
              </h4>
              <ul className="space-y-2 text-[10px] text-zinc-400 font-semibold">
                <li>Azure AI Foundry</li>
                <li>Databricks Lakehouse Platform</li>
                <li>Snowflake Analytics Engine</li>
                <li>Google BigQuery Storage</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6">
              <h4 className="text-xs font-bold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                MLOps
              </h4>
              <ul className="space-y-2 text-[10px] text-zinc-400 font-semibold">
                <li>MLflow Registry Tracker</li>
                <li>Kubeflow Orchestrator</li>
                <li>Azure ML Studio</li>
                <li>GCP Vertex AI Pipeline</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
