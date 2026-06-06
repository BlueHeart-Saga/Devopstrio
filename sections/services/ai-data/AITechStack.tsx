"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const techGroups = [
  {
    category: "LLMs & Neural Networks",
    techs: ["OpenAI GPT-4o", "Anthropic Claude 3.5 Sonnet", "Llama 3.2 Fine-Tuning", "Hugging Face Hub"]
  },
  {
    category: "ML Runtimes & Frameworks",
    techs: ["PyTorch", "TensorFlow", "Scikit-Learn", "Jupyter Enterprise Gateway"]
  },
  {
    category: "Vector Engines",
    techs: ["Chroma DB", "Pinecone", "pgvector (PostgreSQL)", "Milvus"]
  },
  {
    category: "Agents & Orchestration",
    techs: ["LangChain", "LangGraph Agent Pipelines", "LlamaIndex RAG Engines", "Flowise Flow setups"]
  }
];

export function AITechStack() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <Reveal className="text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                AI TOOLING
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Cognitive pipelines built on modern <span className="font-semibold text-rose-500">frameworks</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-4 max-w-sm">
              We leverage production-validated libraries and platforms to construct model-agnostic microservices that scale gracefully.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {techGroups.map((group, idx) => (
              <Reveal key={group.category} delay={idx * 0.05} className="bg-[#030303] border border-zinc-900 rounded-2xl p-6 text-left">
                <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-wider block mb-4">
                  {group.category}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {group.techs.map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-xs text-zinc-350 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600/60" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
