"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function AICaseStudies() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        <Reveal className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-4">

            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              AI IN PRODUCTION
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Proven cognitive solutions: <span className="font-semibold text-rose-500">semantic document search</span>
          </h2>
        </Reveal>

        <div className="bg-[#080808] border border-zinc-900 rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Panel: Impact Description */}
          <Reveal className="text-left relative z-10">
            <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-3">Case Study / Enterprise Knowledge Grid</span>
            <h3 className="text-xl md:text-2xl font-light text-white mb-6">
              Processing 50M+ unstructured policy contracts with LangGraph RAG pipeline.
            </h3>

            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-8">
              We engineered a production Retrieval-Augmented Generation (RAG) system for a global legal consultation firm. The system utilizes semantic parsing and pgvector indexing to deliver verified legal draft references with source citations to 10k+ concurrent associates.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900/60">
              <div>
                <span className="block text-2xl font-semibold text-white font-mono mb-1">
                  &lt;1.8s
                </span>
                <span className="text-[10px] text-zinc-550 block leading-tight font-light">
                  Average query latency
                </span>
              </div>
              <div>
                <span className="block text-2xl font-semibold text-white font-mono mb-1">
                  98.4%
                </span>
                <span className="text-[10px] text-zinc-550 block leading-tight font-light">
                  Accuracy evaluation score
                </span>
              </div>
              <div>
                <span className="block text-2xl font-semibold text-white font-mono mb-1">
                  60k
                </span>
                <span className="text-[10px] text-zinc-550 block leading-tight font-light">
                  Monthly token cost savings
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right Panel: Callout Box */}
          <Reveal className="bg-[#030303] border border-zinc-900 rounded-2xl p-6 relative z-10 text-left">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">Pipeline Breakdown</span>
            <ul className="flex flex-col gap-3 text-xs text-zinc-300 font-light mb-8">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5" />
                <div>
                  <strong className="text-zinc-200 block text-xs">Hybrid Sparse/Dense Search</strong>
                  <span className="text-[10px] text-zinc-550">Combined BM25 keyword matching with Cohere embeddings.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5" />
                <div>
                  <strong className="text-zinc-200 block text-xs">Semantic Cache layer</strong>
                  <span className="text-[10px] text-zinc-550">Redis cached queries to prevent duplicate LLM evaluations.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5" />
                <div>
                  <strong className="text-zinc-200 block text-xs">Self-Correction Nodes</strong>
                  <span className="text-[10px] text-zinc-550">LangGraph nodes to auto-correct queries failing benchmarks.</span>
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
