"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  BrainCircuit,
  Bot,
  Network,
  Cpu,
  Database,
  ShieldCheck,
  Briefcase,
  Users,
  Search,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

export default function AIFrameworkPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const blueprintFlow = [
    { step: "User", desc: "Initiates prompt via interface." },
    { step: "AI Gateway", desc: "Routes, caches, & rate-limits." },
    { step: "LLM Layer", desc: "Selects optimal model." },
    { step: "RAG Layer", desc: "Fetches context embeddings." },
    { step: "Knowledge Base", desc: "Vector DB & enterprise data." },
    { step: "Business Systems", desc: "Executes final API actions." }
  ];

  const genAiFramework = [
    { title: "Multi-Model Orchestration", desc: "Seamlessly routing requests between OpenAI GPT-4, Google Gemini, and Anthropic Claude based on cost, latency, and task complexity." },
    { title: "Semantic Caching", desc: "Intercepting redundant queries at the gateway layer and returning cached semantic matches, reducing LLM API bills by up to 40%." },
    { title: "Prompt Management", desc: "Version-controlled prompt registries that allow prompt engineers to safely update system instructions without altering application code." }
  ];

  const agentFramework = [
    { title: "Agent Orchestration", desc: "Utilizing LangGraph and CrewAI to manage stateful, multi-turn interactions where AI agents execute sequential plans." },
    { title: "Multi-Agent Systems", desc: "Deploying swarms of specialized agents (e.g., a 'researcher' agent passing data to a 'writer' agent) for complex problem solving." },
    { title: "Workflow Automation", desc: "Equipping agents with secure API tools allowing them to autonomously update CRM records, send emails, or trigger CI/CD pipelines." }
  ];

  const ragFramework = [
    { title: "Advanced Chunking", desc: "Semantic document parsing that preserves context, moving beyond simple character-count splitting." },
    { title: "Vector Search", desc: "High-speed semantic retrieval using enterprise-grade vector databases like Pinecone, Milvus, and Qdrant." },
    { title: "Hybrid Retrieval", desc: "Combining dense vector embeddings with sparse keyword search (BM25) to guarantee precise, hallucination-free document retrieval." }
  ];

  const governance = [
    "PII Masking algorithms that strip sensitive customer data from prompts before they leave your VPC",
    "Jailbreak protection layers utilizing secondary LLMs to evaluate user prompts for prompt-injection attacks",
    "Comprehensive audit logging of every LLM interaction for compliance with the EU AI Act and SOC 2"
  ];

  const aiUseCases = [
    { icon: <Briefcase className="w-5 h-5 text-rose-500" />, title: "Recruitment AI", desc: "Automated resume parsing, candidate scoring against job descriptions, and preliminary interview scheduling." },
    { icon: <Users className="w-5 h-5 text-rose-500" />, title: "HR AI", desc: "Employee self-service portals instantly answering policy questions by citing the internal employee handbook." },
    { icon: <MessageSquare className="w-5 h-5 text-rose-500" />, title: "Customer Support AI", desc: "Tier 1 ticket resolution bots capable of analyzing past resolved tickets and drafting accurate customer responses." },
    { icon: <Search className="w-5 h-5 text-rose-500" />, title: "Enterprise Search AI", desc: "Unified search bars that index Confluence, Jira, Slack, and Google Drive, allowing natural language knowledge discovery." }
  ];

  const metrics = [
    { value: "10x", label: "Faster Prototype to Production" },
    { value: "-40%", label: "Reduction in LLM API Costs" },
    { value: "0", label: "Data Leakage Incidents" }
  ];

  const faqs = [
    { q: "What is an AI Gateway?", a: "An AI Gateway is a reverse proxy placed between your application and LLM providers. It handles API key management, rate limiting, semantic caching, and allows you to swap out models (e.g., from OpenAI to Claude) without changing frontend code." },
    { q: "What is RAG (Retrieval-Augmented Generation)?", a: "RAG is an architecture that provides an LLM with relevant, private data (like your company's PDFs or databases) before it generates an answer. This prevents hallucinations and ensures responses are factually grounded in your IP." },
    { q: "How do you secure our proprietary data?", a: "We build RAG architectures inside your VPC. Your raw data never trains public models. We utilize PII scrubbers at the gateway level, ensuring sensitive data never reaches external APIs like OpenAI." },
    { q: "What is Semantic Caching?", a: "Traditional caches require exact keyword matches. Semantic caches use vector similarity. If User A asks 'How do I reset my password?' and User B asks 'What is the password reset process?', the cache recognizes the semantic similarity and serves the cached answer without hitting the expensive LLM API." },
    { q: "Can we use local, open-source models?", a: "Yes. Our AI framework supports deploying fine-tuned open-source models (like Llama 3 or Mistral) locally within your own Kubernetes clusters using frameworks like vLLM." },
    { q: "What is a Multi-Agent System?", a: "Instead of one AI trying to do everything, a multi-agent system uses multiple LLMs with specific personas and tools (e.g., a 'Coder' and a 'QA Tester'). They converse and collaborate with each other to solve complex tasks." },
    { q: "How do you prevent prompt injection attacks?", a: "We deploy a multi-layered defense. User inputs are sanitized, and a secondary, smaller LLM is often used purely to classify if the incoming prompt contains malicious instructions before passing it to the main logic engine." },
    { q: "How do you evaluate RAG accuracy?", a: "We use frameworks like RAGAS to programmatically score answers based on Faithfulness (no hallucinations) and Answer Relevance (did it actually answer the question)." },
    { q: "Do you build custom AI models?", a: "We focus heavily on applied AI. While we can fine-tune models, 95% of enterprise use cases are better solved quickly and cheaply using advanced RAG and Prompt Engineering rather than training a model from scratch." },
    { q: "How do we start an AI project?", a: "Click 'Build AI Faster' below to schedule a use-case discovery workshop with our AI architects." }
  ];

  return (
    <main className="relative min-h-screen bg-[#030303] text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        <div className="absolute inset-0 z-0">
          <img src="/assets/ecosystem/sub-page-hero/ecosystem_Accelerators_Frameworks/ai.png" alt="AI Framework background" className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-20">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <BrainCircuit className="w-3.5 h-3.5" />
              PROPRIETARY AI IP
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Enterprise AI Framework
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Accelerating AI adoption through proven architectures and reusable components.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              Move beyond experimental prototypes. Deploy production-grade Generative AI, secure RAG pipelines, and autonomous multi-agent systems using Devopstrio's proprietary enterprise AI architecture.
            </p>
          </Reveal>
          
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. AI ARCHITECTURE BLUEPRINT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">THE PIPELINE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">AI Architecture Blueprint</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {blueprintFlow.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[150px] text-center p-5 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/40 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-rose-500 font-mono font-bold text-xs">{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{stage.step}</h4>
                  <p className="text-[10px] text-zinc-400 font-medium">{stage.desc}</p>
                </div>
                {idx < blueprintFlow.length - 1 && (
                  <div className="hidden lg:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GENAI FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">ORCHESTRATION</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">GenAI Framework</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Prevent vendor lock-in. Our framework abstracts the LLM layer, allowing seamless swapping between OpenAI, Gemini, and Claude while managing prompts centrally.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {genAiFramework.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Network className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI AGENT FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:order-2">
              {agentFramework.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Bot className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">AUTONOMY</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">AI Agent Framework</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We build intelligent swarms. Deploy agents capable of reasoning, breaking down complex tasks, and executing API calls autonomously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RAG FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">KNOWLEDGE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">RAG Framework</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ragFramework.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Database className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI GOVERNANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">SECURITY</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">AI Governance</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Enterprise AI requires enterprise guardrails. We implement strict security layers preventing prompt injections and data leaks.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {governance.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <ShieldCheck className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. AI USE CASES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">APPLICATIONS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">AI Use Cases</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiUseCases.map((useCase, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between min-h-[180px]">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    {useCase.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{useCase.title}</h4>
                </div>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SUCCESS METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">IMPACT</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Framework Metrics</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900/60 rounded-xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-center items-center">
                <span className="text-4xl font-black text-white tracking-tight mb-2">{m.value}</span>
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
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

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.04),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Build AI Faster</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Stop building fragile AI wrappers. Deploy our robust, secure, and scalable Enterprise AI architectures to unlock true business value today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(225,29,72,0.3)]"
          >
            Schedule AI Workshop
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
