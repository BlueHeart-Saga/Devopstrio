"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  BrainCircuit,
  Cpu,
  Workflow,
  Database,
  Layers,
  Sparkles,
  Link as LinkIcon,
  ShieldCheck,
  Terminal
} from "lucide-react";
import Link from "next/link";

export default function AIPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const technologies = [
    "OpenAI", "Gemini", "Claude", "LangChain", "CrewAI", "AutoGen", "Pinecone", "Chroma", "HuggingFace"
  ];

  const landscapeFeatures = [
    "Neural Network Architecture setup using PyTorch libraries",
    "GPU Accelerated Training optimization workflows",
    "Model Evaluation tools measuring accuracy and prompt performance"
  ];

  const llmFeatures = [
    "OpenAI API integration for complex reasoning and tasks",
    "Gemini Multi-Modal API endpoints parsing images and files",
    "Claude API setups for long-context semantic translations",
    "HuggingFace Transformers hosting customized fine-tuned weights"
  ];

  const agentFeatures = [
    "LangChain Orchestration managing multi-step agent actions",
    "CrewAI Role Play configurations simulating human team divisions",
    "AutoGen Conversations coordinating autonomous agent loops",
    "Stateful Memory managers preserving chat context across calls"
  ];

  const ragFeatures = [
    "Pinecone Index setup managing production-grade semantic datasets",
    "Chroma DB local instances for low-latency query validation",
    "Hybrid Vector Search engines combining keyword and semantic match",
    "Reranking Pipelines auditing document relevance scores"
  ];

  const integrationFeatures = [
    "Enterprise CRM webhooks linking customer files to LLMs",
    "Database Query agents generating secure PostgreSQL statements",
    "Cloud storage triggers starting summarization loops on upload"
  ];

  const useCases = [
    "Support automation assistants reducing tickets load by 70%",
    "Document analyzer portals parsing complex PDFs in seconds",
    "Predictive analytics engines forecasting monthly inventory demand"
  ];

  const faqs = [
    { q: "How do you secure proprietary company data in LLM pipelines?", a: "We run enterprise-grade APIs with zero-data-retention agreements, ensuring your data is never used to train public foundation models." },
    { q: "What is the benefit of LangChain orchestration?", a: "LangChain structures agent memory, prompts, and tool access so LLMs can execute multi-step business logic without falling into loops." },
    { q: "How does CrewAI compare to AutoGen?", a: "CrewAI defines collaborative roles (e.g. researcher, writer) for agents, whereas AutoGen focus on conversational, multi-agent chat patterns." },
    { q: "What is RAG (Retrieval-Augmented Generation)?", a: "RAG searches local databases for matching documents and inserts them as context into the prompt, reducing LLM hallucinations." },
    { q: "Which vector database do you recommend for production?", a: "We recommend Pinecone for fully managed cloud setups and Chroma or Qdrant for containerized, self-hosted deployments." },
    { q: "How do you prevent AI model drift?", a: "We monitor prediction logs and classification accuracies, triggering re-training loops when metrics deviate from baselines." },
    { q: "Does the platform support offline AI models?", a: "Yes, we deploy open-source models like Llama 3 or Mistral on secure, private GPU instances within your cloud perimeter." },
    { q: "What latency can we expect for agent tasks?", a: "Simple semantic searches resolve in <150ms. Complex agent chains requiring multiple LLM reasoning cycles average 2-4 seconds." },
    { q: "How are custom LLM prompts versioned?", a: "We manage prompts in Git repositories as versioned assets, allowing cleanrollbacks and audit histories." },
    { q: "How do we start planning our AI solution?", a: "Click 'Consult AI Architects' to discuss your datasets, use cases, and schedule a scoping session." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        <div className="absolute inset-0 z-0">
          <img src="/assets/ecosystem/sub-page-hero/Ecosystem_technology_stack/AI_Tech_stack.png" alt="AI Technology Stack background" className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-20">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <BrainCircuit className="w-3.5 h-3.5" />
              Artificial Intelligence Unit
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Artificial Intelligence
            </h1>
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-8 max-w-2xl mx-auto">
              LangChain orchestration and PyTorch code models.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-zinc-200 text-sm md:text-base lg:text-lg leading-relaxed font-medium">
              Build autonomous agent systems, configure semantic search vector DBs, structure retrieval workflows, and host customized models.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Consult AI Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>


      {/* TECHNOLOGIES BAR */}
      <section className="w-full py-10 bg-zinc-950 border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {technologies.map((tech, idx) => (
              <span key={idx} className="text-zinc-500 hover:text-zinc-300 transition-colors duration-300 text-xs md:text-sm font-mono tracking-wider font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. AI TECHNOLOGY LANDSCAPE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CORE LANDSCAPE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">AI Technology Landscape</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Optimize neural systems from the ground up. Design robust PyTorch setups, coordinate tensor libraries, and accelerate inference.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {landscapeFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Cpu className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LLM ECOSYSTEM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {llmFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">MODEL INTEGRATION</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">LLM Ecosystem</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Interface with leading AI systems. Configure Claude workflows, route Gemini prompts, and deploy custom fine-tunes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI AGENT ARCHITECTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">AUTONOMOUS FLOWS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">AI Agent Architecture</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Design multi-agent teams that collaborate. Use CrewAI for role-based splits and AutoGen for conversational loops.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agentFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Workflow className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. RAG FRAMEWORKS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {ragFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Database className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">KNOWLEDGE RETRIEVAL</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">RAG Frameworks</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Augment generation with enterprise search. Build high-speed Pinecone and Chroma query pathways for zero-hallucination answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI PLATFORM INTEGRATIONS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CONNECTIVITY HUB</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">AI Platform Integrations</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Bridge AI agents to production databases, CRM pipelines, and automated cloud triggers.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {integrationFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <LinkIcon className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. AI USE CASES */}
      <section className="w-full py-28 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SOLUTIONS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">AI Use Cases</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {useCases.map((use, idx) => (
              <div key={idx} className="p-8 bg-zinc-950 border border-zinc-900/80 rounded-3xl hover:border-rose-500/30 transition-all duration-300 shadow-xl min-h-[160px] flex flex-col justify-between">
                <span className="text-rose-500 font-bold text-sm">CASE 0{idx + 1}</span>
                <p className="text-zinc-300 leading-relaxed font-bold mt-4">{use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FAQ</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-zinc-950/50 border border-zinc-900 rounded-xl overflow-hidden hover:border-zinc-800 transition-colors duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white"
                  >
                    {faq.q}
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-500" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[200px] border-t border-zinc-900/60" : "max-h-0"}`}>
                    <p className="p-6 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Deploy Production AI</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our AI engineering unit to integrate autonomous agent flows and RAG pipelines.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Consult AI Architects
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
