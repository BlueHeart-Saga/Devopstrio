"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Data Audit & Ingestion",
    desc: "We analyze your database schemas, mask sensitive fields, and ingest raw documents into modern pipeline engines."
  },
  {
    num: "02",
    title: "Vector Embeddings & Indexing",
    desc: "We design optimal semantic search indices inside Postgres pgvector or Pinecone to support fast retrieval."
  },
  {
    num: "03",
    title: "Retrieval Augmented Design",
    desc: "We construct LangGraph pipelines mapping vector searches to LLM contexts with custom prompt templates."
  },
  {
    num: "04",
    title: "Safety Evaluations",
    desc: "We run thousands of sample inputs to stress test prompt safety boundaries and evaluate response validity."
  },
  {
    num: "05",
    title: "Production Scaling",
    desc: "We deploy model microservices to secure cloud instances, set up semantic caches, and open production APIs."
  }
];

export function AILifecycle() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        <Reveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">

            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              AI METHODOLOGY
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Our specialized <span className="font-semibold text-rose-500">AI pipeline delivery</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => (
            <Reveal key={item.num} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-[#030303] border border-zinc-900 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <span className="block text-xl font-light text-rose-600 mb-6 font-mono">{item.num}</span>
                  <h3 className="text-xs font-semibold text-zinc-100 mb-3 tracking-wide text-left">{item.title}</h3>
                  <p className="text-[10px] text-zinc-450 leading-relaxed font-light text-left">{item.desc}</p>
                </div>

                <div className="w-full h-[1px] bg-rose-900/30 mt-8" />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
