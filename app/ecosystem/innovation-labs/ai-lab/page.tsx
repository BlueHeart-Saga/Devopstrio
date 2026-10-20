"use client";

import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Brain,
  Cpu,
  Database,
  Network,
  Shield,
  Sparkles,
  ChevronRight,
  Activity,
  Terminal,
  CheckCircle,
  Settings,
  Workflow,
  Zap,
  Globe,
  Layers,
  HelpCircle,
  Search,
  FileText,
  Lock,
  Code2
} from "lucide-react";
import Link from "next/link";

const colorMap: Record<string, { border: string; icon: string; number: string; glow: string }> = {
  rose:    { border: "border-rose-500/30 hover:border-rose-500/60",    icon: "text-rose-500 bg-rose-500/10 border-rose-500/20",    number: "text-rose-500/10",    glow: "from-rose-500/10" },
  blue:    { border: "border-blue-500/30 hover:border-blue-500/60",    icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",    number: "text-blue-500/10",    glow: "from-blue-500/10" },
  emerald: { border: "border-emerald-500/30 hover:border-emerald-500/60", icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", number: "text-emerald-500/10", glow: "from-emerald-500/10" },
  orange:  { border: "border-orange-500/30 hover:border-orange-500/60", icon: "text-orange-400 bg-orange-500/10 border-orange-500/20", number: "text-orange-500/10", glow: "from-orange-500/10" },
  purple:  { border: "border-purple-500/30 hover:border-purple-500/60", icon: "text-purple-400 bg-purple-500/10 border-purple-500/20", number: "text-purple-500/10", glow: "from-purple-500/10" },
  cyan:    { border: "border-cyan-500/30 hover:border-cyan-500/60",    icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",    number: "text-cyan-500/10",    glow: "from-cyan-500/10" }
};

interface CoreArea {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface TimelineStep {
  num: string;
  title: string;
  desc: string;
}

interface SolutionBlock {
  title: string;
  desc: string;
}

interface ArchLayer {
  num: string;
  name: string;
  desc: string;
}

interface IndustryUseCase {
  name: string;
  items: string[];
}

interface Deliverable {
  title: string;
}

interface WhyChoose {
  title: string;
  desc: string;
}

interface RelatedLab {
  name: string;
  desc: string;
  href: string;
}

export default function AIInnovationLabPage() {
  const [activeTab, setActiveTab] = useState<string>("Enterprise Knowledge Retrieval");

  // 2) Mini overview cards
  const miniMissionCards = [
    {
      title: "Applied Agentic R&D",
      desc: "Prototyping stateful multi-agent architectures, dynamic tool coordination, and deterministic execution loops."
    },
    {
      title: "Private Model Serving",
      desc: "Benchmarking quantized LLM runtimes, continuous batching, and vLLM throughput on isolated GPU nodes."
    },
    {
      title: "Context & Retrieval Engineering",
      desc: "Engineering hybrid dense-sparse indexing, reciprocal rank fusion, and semantic caching layers."
    },
    {
      title: "Model Evaluation & Guardrails",
      desc: "Continuous red-teaming, automated Ragas benchmarking, and token-level PII/toxicity guardrails."
    }
  ];

  // 3) Core Areas of AI Innovation
  const innovationAreas: CoreArea[] = [
    {
      title: "Multi-Agent System Orchestration",
      desc: "Architect stateful multi-agent networks using LangGraph and CrewAI with shared memory, dynamic handoffs, and deterministic state transitions.",
      icon: <Brain className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Self-Hosted LLM Serving",
      desc: "Deploy and optimize open-weight foundation models on private clusters using vLLM, TensorRT-LLM, and PagedAttention for sub-50ms TTFT.",
      icon: <Cpu className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Hybrid Dense-Sparse RAG",
      desc: "Construct high-precision retrieval engines combining dense vector embeddings with sparse BM25 scoring and cross-encoder rerankers.",
      icon: <Database className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Domain Fine-Tuning & QLoRA",
      desc: "Specialize foundation models using LoRA, QLoRA, and Unsloth pipelines with curated domain datasets, instruction tuning, and DPO alignment.",
      icon: <Sparkles className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Model Context Protocol (MCP)",
      desc: "Implement standardized Model Context Protocol interfaces connecting enterprise reasoning graphs directly to REST APIs and microservices.",
      icon: <Network className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Token Guardrails & Red-Teaming",
      desc: "Enforce real-time output safety, PII redaction, prompt injection defense, and hallucination audits via NeMo Guardrails and custom evaluators.",
      icon: <Shield className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Document & Multimodal Vision",
      desc: "Extract structured data from unstructured enterprise documents, technical diagrams, and PDFs using LayoutLM and multimodal vision models.",
      icon: <Terminal className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Continuous MLOps & Observability",
      desc: "Track token throughput, latency percentiles (p50/p99), prompt drift, embedding degradation, and semantic quality using MLflow and TruLens.",
      icon: <Activity className="w-5 h-5 text-rose-500" />
    }
  ];

  // 4) Lifecycle Framework
  const lifecycleTimeline: TimelineStep[] = [
    {
      num: "01",
      title: "Assess",
      desc: "Evaluate target workflows, data taxonomy, token economics, latency tolerances, and model suitability across proprietary operations."
    },
    {
      num: "02",
      title: "Design",
      desc: "Blueprint agent state graphs, retrieval index topologies, embedding dimensions, context window limits, and fallback logic."
    },
    {
      num: "03",
      title: "Prototype",
      desc: "Implement sandboxed proof-of-concepts, benchmark prompt variants against curated ground-truth evaluation sets, and test tool integrations."
    },
    {
      num: "04",
      title: "Build",
      desc: "Engineer production inference runtimes, streaming API endpoints, vector storage clusters, Redis semantic caches, and security firewalls."
    },
    {
      num: "05",
      title: "Deploy",
      desc: "Roll out containerized inference runtimes on dedicated Kubernetes GPU worker pools with horizontal pod autoscaling and Canary routing."
    },
    {
      num: "06",
      title: "Optimize",
      desc: "Perform continuous Ragas evaluation runs, prune context bloat, fine-tune adapters via DPO, and optimize GPU compute unit costs."
    }
  ];

  // 5) Solutions Built in the Lab
  const solutionBlocks: SolutionBlock[] = [
    {
      title: "Multi-Agent Workflow Engine",
      desc: "Deterministic multi-agent coordination frameworks executing multi-step business logic across internal systems."
    },
    {
      title: "Private Sovereign RAG Platform",
      desc: "Zero-data-leakage vector search pipelines indexing internal wikis, code repos, and technical documentation."
    },
    {
      title: "High-Throughput Local LLM Gateway",
      desc: "Centralized internal proxy routing requests across vLLM and TensorRT-LLM instances with semantic caching."
    },
    {
      title: "Automated Document & Claims Extractor",
      desc: "Vision-augmented parsing engine converting complex unstructured PDFs and scanned forms into typed JSON schemas."
    },
    {
      title: "Real-Time Model Guardrail Proxy",
      desc: "Ultra-low-latency intermediary validating prompt inputs and model outputs against prompt injection and PII leakage."
    },
    {
      title: "Synthetic Data & DPO Sandbox",
      desc: "Automated pipeline synthesizing edge-case evaluation datasets and fine-tuning adapters for specialized enterprise domains."
    },
    {
      title: "Text-to-SQL Semantic Synthesizer",
      desc: "Deterministic text-to-SQL generation engine with strict schema-constrained grammar and read-only VPC execution."
    },
    {
      title: "Multimodal Vision Audit System",
      desc: "Edge-capable computer vision inference engine auditing manufacturing defects and document security seals."
    }
  ];

  // 6) Architecture layers
  const archLayers: ArchLayer[] = [
    {
      num: "LAYER 1",
      name: "Client & Interaction Layer",
      desc: "web copilots • streaming chat interfaces • internal agent dashboards • IDE code extensions • Slack/Teams bot runtimes"
    },
    {
      num: "LAYER 2",
      name: "API Gateway & Safety Layer",
      desc: "FastAPI endpoints • token rate limiting • PII masking • prompt injection firewalls • NeMo Guardrails • semantic response caching"
    },
    {
      num: "LAYER 3",
      name: "Agent Orchestration Layer",
      desc: "LangGraph state coordinators • dynamic routing • multi-step reasoning loops • context compaction • tool execution runtimes"
    },
    {
      num: "LAYER 4",
      name: "Retrieval & Semantic Memory Layer",
      desc: "Qdrant vector clusters • pgvector embeddings • hybrid BM25 indexes • cross-encoder rerankers • Redis episodic memory"
    },
    {
      num: "LAYER 5",
      name: "Foundation Model & Inference Layer",
      desc: "vLLM GPU clusters • TensorRT-LLM runtimes • quantized GGUF/AWQ models • LoRA task adapters • private cloud VPC endpoints"
    },
    {
      num: "LAYER 6",
      name: "MLOps, Governance & Evaluation Layer",
      desc: "Ragas benchmark suites • MLflow experiment registries • Ray distributed workers • GPU telemetry • audit logging"
    }
  ];

  const techChips = [
    "LangGraph",
    "vLLM",
    "TensorRT-LLM",
    "Qdrant",
    "pgvector",
    "Unsloth (QLoRA)",
    "FastAPI",
    "Model Context Protocol (MCP)",
    "NeMo Guardrails",
    "MLflow",
    "Ray Serve",
    "LlamaIndex"
  ];

  // 7) Industry / Workload Use Cases
  const industryUseCases: IndustryUseCase[] = [
    {
      name: "Enterprise Knowledge Retrieval",
      items: [
        "hybrid vector & keyword indexing over enterprise wikis",
        "reciprocal rank fusion with cross-encoder reranking",
        "deterministic source citation and hallucination detection",
        "role-based access control (RBAC) synced to Active Directory"
      ]
    },
    {
      name: "Autonomous Operations & Agents",
      items: [
        "LangGraph multi-step workflows with deterministic rollbacks",
        "Model Context Protocol (MCP) integrations with REST APIs",
        "human-in-the-loop approval checkpoints for high-risk actions",
        "automated incident triage and log diagnosis agents"
      ]
    },
    {
      name: "Document & Claims Processing",
      items: [
        "LayoutLM and multimodal vision extraction for unformatted PDFs",
        "schema-constrained JSON generation with Pydantic validation",
        "confidence scoring and anomaly flags for manual audit",
        "high-throughput OCR pipelines handling millions of pages"
      ]
    },
    {
      name: "Algorithmic Risk & Anomaly Detection",
      items: [
        "real-time transaction fraud scoring using embedding distance",
        "unsupervised anomaly detection on streaming telemetry data",
        "explainable AI reasoning logs for regulatory compliance",
        "synthetic edge-case generation for model stress testing"
      ]
    },
    {
      name: "Software Engineering Copilots",
      items: [
        "internal codebase semantic indexing and symbol-aware search",
        "automated pull request reviews and static analysis summarization",
        "test case generation from API OpenAPI/Swagger specs",
        "private self-hosted coding model serving with sub-50ms TTFT"
      ]
    },
    {
      name: "Clinical & Regulated Intelligence",
      items: [
        "de-identification pipelines stripping HIPAA/GDPR identifiers",
        "deterministic medical protocol and guideline verification",
        "audit logging for all model inputs, outputs, and confidence scores",
        "isolated on-premises and private VPC container deployments"
      ]
    }
  ];

  // 8) Outcomes
  const labDeliverables: Deliverable[] = [
    { title: "Sub-50ms Time-to-First-Token (TTFT) on private GPU serving" },
    { title: "Up to 90% reduction in commercial LLM token expenditure via prompt caching" },
    { title: "99.4% precision on schema-constrained JSON extraction pipelines" },
    { title: "Zero-data-leakage architecture strictly isolated inside client VPCs" },
    { title: "Deterministic multi-agent execution with automated rollback guarantees" },
    { title: "Production MLOps pipelines with continuous automated Ragas regression testing" },
    { title: "Sub-second hybrid dense-sparse vector search across millions of documents" },
    { title: "SLO-backed inference runtimes with horizontal GPU pod autoscaling" }
  ];

  const stats = [
    { value: "<50ms", label: "TTFT inference latency" },
    { value: "99.4%", label: "JSON schema precision" },
    { value: "90%", label: "token spend reduction" },
    { value: "100%", label: "private VPC sovereignty" },
    { value: "24×7", label: "model drift monitoring" }
  ];

  // 9) Why work with us
  const whyWorkWithUs: WhyChoose[] = [
    {
      title: "Systems Engineers, Not Just Prompters",
      desc: "We treat AI as a distributed systems engineering challenge, focusing on GPU throughput, memory paging, latency budgets, and deterministic fallbacks."
    },
    {
      title: "Data Sovereignty & Zero Third-Party Leakage",
      desc: "We specialize in self-hosted open-weights runtimes deployed entirely inside your AWS, Azure, or GCP private VPC networks without external data sharing."
    },
    {
      title: "Deterministic Multi-Agent Architectures",
      desc: "Our agent graphs use strict state machine transitions, typed schema contracts, and human-in-the-loop escalation paths to eliminate unconstrained loops."
    },
    {
      title: "End-to-End MLOps & Lifecycle Governance",
      desc: "From initial prompt benchmarking to continuous LoRA adapter retraining and real-time observability, we manage the complete model lifecycle."
    }
  ];

  // 10) Related labs
  const relatedLabs: RelatedLab[] = [
    {
      name: "Cloud Innovation Lab",
      desc: "Architecting zero-trust cloud pipelines, hybrid-mesh setups, and automated scalability patterns.",
      href: "/ecosystem/innovation-labs/cloud-lab"
    },
    {
      name: "DevOps Innovation Lab",
      desc: "Pioneering continuous release engines, GitOps architectures, and automated regression frameworks.",
      href: "/ecosystem/innovation-labs/devops-lab"
    },
    {
      name: "Cybersecurity Lab",
      desc: "Building Zero Trust directory gateways, threat simulation networks, and compliance grids.",
      href: "/ecosystem/innovation-labs/cybersecurity-lab"
    },
    {
      name: "Data & Analytics Lab",
      desc: "Constructing high-throughput data lakes, pipeline analytics indexes, and real-time visualization portals.",
      href: "/ecosystem/innovation-labs/data-analytics-lab"
    }
  ];

  const faqs = [
    {
      q: "How does the AI Lab prevent proprietary enterprise data from training external models?",
      a: "All models tested and deployed in our AI Lab run entirely within dedicated, isolated client VPC environments or on-premises GPU nodes. We use self-hosted open-weight architectures (vLLM, TensorRT-LLM) where data never leaves your network perimeter, ensuring complete compliance with GDPR, HIPAA, and corporate IP standards."
    },
    {
      q: "What is the difference between simple prompt engineering and your multi-agent architecture?",
      a: "Prompt engineering is single-turn and non-deterministic. Our lab builds stateful agent networks using LangGraph, where tasks are decomposed into discrete, specialized agent nodes with typed schema validation, memory persistence, dynamic tool invocation (MCP), and human-in-the-loop approval gates."
    },
    {
      q: "How do you evaluate and eliminate hallucinations in production RAG systems?",
      a: "We implement a multi-layered evaluation framework incorporating Ragas metrics (measuring context relevancy, faithfullness, and answer relevancy), reciprocal rank fusion (combining dense vector and sparse lexical BM25 search), and deterministic cross-encoder rerankers that discard low-confidence retrieval matches."
    },
    {
      q: "How quickly can a lab prototype transition into enterprise production?",
      a: "Because all lab prototypes are containerized from day one and packaged with Terraform / Kubernetes Helm charts, validated POCs can be promoted to production staging environments in as little as 2 to 4 weeks, complete with CI/CD deployment pipelines and MLOps monitoring."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <Hero
        badge="AI Innovation Lab"
        floatingLines={true}
        floatingLinesStartColor="#f43f5e"
        floatingLinesMidColor="#a855f7"
        floatingLinesEndColor="#3b82f6"
        title={
          <>
            Pioneering Applied R&D <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              For Enterprise Cognitive Systems
            </span>
          </>
        }
        subtitle="Moving organizations from experimental sandbox prototypes to secure, highly optimized production ecosystems. We design custom agentic architectures, configure private RAG search networks, and audit model drift under enterprise-grade governance profiles."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "INNOVATION LABS", href: "/ecosystem/innovation-labs" },
          { label: "AI LAB" },
        ]}
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Book An AI Discovery Session
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Our AI Team
          </Link>
        </div>
      </Hero>

      {/* 2. OVERVIEW / MISSION SECTION */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side content */}
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Mission Overview
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Where Cognitive Research Meets <br />
                  <span className="text-rose-500">Production Systems Engineering</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-normal">
                  The Devopstrio AI Innovation Lab bridges the gap between academic cognitive research and enterprise-grade software execution. We test and harden agentic orchestration frameworks, private GPU inference clusters, and context retrieval pipelines so your organization deploys reliable, low-latency, and sovereign AI systems at scale.
                </p>
              </Reveal>
            </div>

            {/* Right side - 4 mini cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {miniMissionCards.map((card, idx) => (
                <Reveal key={card.title} delay={idx * 0.05}>
                  <div className="bg-zinc-950/40 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-5 transition-all duration-300 min-h-[140px] flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white tracking-wide mb-2">
                        {card.title}
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-400 font-normal leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE INNOVATION AREAS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Capabilities
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Core Areas of <span className="text-rose-500">AI Innovation</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
              Applied research vectors dedicated to building reliable, high-throughput, and private cognitive systems.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.04} className="h-full">
                <div className="bg-[#0a0a0a]/60 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center mb-5">
                      {area.icon}
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-white tracking-tight mb-2.5">
                      {area.title}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI LAB LIFECYCLE / OPERATING MODEL */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-left max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Operating Framework
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              How the AI Lab Builds <span className="text-rose-500">Production Cognitive Platforms</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
              A structured lifecycle method prioritizing early mathematical validation and rigorous engineering checks.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleTimeline.map((step, idx) => {
              const icons = [Search, Layers, Terminal, Workflow, Brain, Settings];
              const colors = ["rose", "blue", "emerald", "orange", "purple", "cyan"];
              const Icon = icons[idx];
              const c = colorMap[colors[idx]];
              
              return (
                <Reveal key={step.num} delay={idx * 0.05} className="h-full">
                  <div
                    className={`group relative h-full bg-zinc-900/40 border ${c.border} rounded-2xl p-8 overflow-hidden transition-all duration-300 flex flex-col`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                    {/* Large number watermark */}
                    <span className={`absolute top-4 right-6 text-[5.5rem] font-black ${c.number} select-none leading-none transition-transform duration-300 group-hover:scale-110`}>
                      {step.num}
                    </span>

                    <div className="relative z-10 flex flex-col flex-1">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${c.icon}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{step.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SOLUTIONS BUILT IN THE LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Deliverables
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              AI Solutions Built <span className="text-rose-500">Inside the Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
              Actual software platforms and functional cognitive integrations designed for real business setups.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {solutionBlocks.map((block, idx) => {
              const icons = [Brain, Search, Database, Shield, Cpu, Activity, Workflow, CheckCircle];
              const Icon = icons[idx % icons.length];
              return (
                <Reveal key={block.title} delay={idx * 0.04} className="h-full">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900/80 hover:border-rose-500/30 transition-all duration-500 relative group h-full flex flex-col justify-between shadow-lg">
                    
                    {/* Glassmorphic Sheen & Quote-like Icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-3xl" />
                    <Icon className="absolute top-8 right-8 text-zinc-800/40 w-12 h-12 group-hover:text-rose-500/20 transition-colors duration-500" strokeWidth={1} />
                    
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-rose-400 transition-colors">
                        {block.title}
                      </h4>
                      <div className="h-[1px] w-12 bg-rose-500/20 mb-4 group-hover:w-full transition-all duration-500" />
                      <p className="text-sm text-zinc-400 leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">
                        {block.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. REFERENCE ARCHITECTURE */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-650/[0.015] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left: Heading & Context */}
            <div className="lg:w-1/2 sticky top-24">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Reference Blueprint
                </span>
                <h2 className="text-xl md:text-2xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
                  Our Enterprise AI <span className="text-rose-500">Reference Architecture</span>
                </h2>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium mb-10">
                  The layered framework powering secure model alignment, sub-50ms inference, and deterministic cognitive outputs.
                </p>

                <div className="flex flex-wrap gap-3">
                  {techChips.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.05) }}
                      className="px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-bold hover:border-rose-500/50 hover:text-rose-400 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: Architecture Steps */}
            <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
              <div className="space-y-6 relative">
                {/* Vertical Connector Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-zinc-900/80" />
                
                {archLayers.map((layer, idx) => {
                  const stepNumber = (idx + 1).toString().padStart(2, "0");
                  return (
                    <motion.div
                      key={layer.num}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex gap-6 relative group"
                    >
                      <div className="w-14 h-14 rounded-full bg-black border-2 border-zinc-800 flex items-center justify-center text-zinc-500 font-bold shrink-0 relative z-10 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-colors shadow-lg">
                        {stepNumber}
                      </div>
                      <div className="pt-3 pb-8">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{layer.name}</h3>
                        <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">{layer.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. USE CASES / SCENARIOS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Scenarios
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              AI Use Cases We Engineer <span className="text-rose-500">Across the Enterprise</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
              Targeted implementations mapping robust cognitive models directly to enterprise operational segments.
            </p>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* LEFT: Topics List (Compact) */}
            <div className="flex flex-row lg:flex-col gap-2.5 lg:w-[280px] xl:w-[320px] shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 w-full snap-x snap-mandatory scrollbar-none">
              {industryUseCases.map((cat, idx) => {
                const icons = [Database, Brain, FileText, Activity, Code2, Lock];
                const Icon = icons[idx % icons.length];
                
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveTab(cat.name)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl border text-left transition-all duration-300 shrink-0 lg:shrink-0 snap-start
                      ${activeTab === cat.name
                        ? "bg-rose-500/10 border-rose-500/40 text-white shadow-[0_0_15px_rgba(244,63,94,0.1)] w-[240px] lg:w-full"
                        : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white w-[240px] lg:w-full"}`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 transition-colors
                      ${activeTab === cat.name ? "bg-rose-500/20 border-rose-500/30 text-rose-500" : "bg-zinc-800 border-zinc-700 text-zinc-400"}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-xs md:text-sm leading-tight tracking-wide uppercase">{cat.name}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT: Rectangular Low Height Image Card */}
            <div className="flex-1 w-full bg-[#0A0A0A] rounded-[24px] border border-zinc-800 shadow-xl overflow-hidden min-h-[360px] lg:min-h-[400px] flex flex-col sm:flex-row">
              
              {/* Abstract Visual Half */}
              <div className="w-full sm:w-5/12 lg:w-5/12 relative h-48 sm:h-auto overflow-hidden bg-zinc-950 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  {industryUseCases.map((cat, idx) => {
                    if (cat.name !== activeTab) return null;
                    const icons = [Database, Brain, FileText, Activity, Code2, Lock];
                    const Icon = icons[idx % icons.length];
                    
                    return (
                      <motion.div
                        key={cat.name + "-visual"}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(244,63,94,0.15),transparent)]" />
                        <Icon className="w-32 h-32 text-rose-500/10 drop-shadow-2xl relative z-10" strokeWidth={1} />
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#0A0A0A] to-transparent sm:hidden z-20" />
                        <div className="absolute right-0 w-full h-full bg-gradient-to-l from-[#0A0A0A] to-transparent hidden sm:block z-20" />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Content Half */}
              <div className="w-full sm:w-7/12 lg:w-7/12 p-8 md:p-12 flex flex-col justify-center relative z-30">
                <AnimatePresence mode="wait">
                  {industryUseCases.map((cat, idx) => {
                    if (cat.name !== activeTab) return null;
                    const icons = [Database, Brain, FileText, Activity, Code2, Lock];
                    const Icon = icons[idx % icons.length];
                    
                    return (
                      <motion.div
                        key={cat.name + "-content"}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-xl border border-rose-500/30 bg-rose-950/20 flex items-center justify-center text-rose-500 shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">Implementation Scenario</span>
                            <span className="text-xs font-semibold text-rose-500/80 leading-tight mt-1">{cat.name}</span>
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                          {cat.name} Solutions
                        </h3>
                        
                        <div className="mt-6 flex flex-col gap-4">
                           {cat.items.map(item => (
                             <div key={item} className="flex items-start gap-3">
                               <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                               <span className="text-sm font-semibold text-zinc-300 leading-relaxed capitalize">
                                 {item}
                               </span>
                             </div>
                           ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
              
            </div>
            
          </div>

        </div>
      </section>

      {/* 8. OUTCOMES / DELIVERABLES SECTION */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-500/[0.015] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Heading + Checklist */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Outcomes
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Measurable Results Delivered <span className="text-rose-500">By the AI Lab</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 font-normal">
                  Our lab benchmarks ensure cognitive architectures transition into production with verifiable accuracy, cost predictability, and zero data leakage.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {labDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-rose-500" />
                      </div>
                      <span className="text-sm md:text-base text-zinc-200 font-medium leading-relaxed">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Key Metric Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {stats.map((stat, idx) => (
                <Reveal key={stat.label} delay={idx * 0.05}>
                  <div className="bg-zinc-950/60 border border-white/[0.04] hover:border-rose-500/30 rounded-2xl p-6 transition-all duration-300 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Benchmark Metric</p>
                      <h4 className="text-sm md:text-base font-bold text-white capitalize">{stat.label}</h4>
                    </div>
                    <span className="text-2xl md:text-3xl font-black text-rose-500 tracking-tight font-mono">
                      {stat.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 9. WHY WORK WITH US */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Differentiators
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Why Partner With the <span className="text-rose-500">Devopstrio AI Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
              We bridge academic model innovation with enterprise-grade systems engineering, security, and infrastructure rigor.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkWithUs.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.05} className="h-full">
                <div className="bg-zinc-950/40 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-8 transition-all duration-300 flex flex-col justify-between h-full min-h-[240px]">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-2.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. RELATED LABS CROSS-LINKING */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Ecosystem
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Explore Our Other <span className="text-rose-500">Innovation Labs</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
              Cross-disciplinary engineering pods pioneering cloud, DevOps, security, and data innovations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedLabs.map((lab, idx) => (
              <Reveal key={lab.name} delay={idx * 0.05} className="h-full">
                <Link
                  href={lab.href}
                  className="group bg-zinc-950/40 border border-white/[0.03] hover:border-rose-500/30 rounded-[20px] p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[180px] hover:-translate-y-1"
                >
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white group-hover:text-rose-400 transition-colors uppercase tracking-wider mb-2 flex items-center justify-between">
                      {lab.name}
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 font-normal leading-relaxed">
                      {lab.desc}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-rose-500 uppercase tracking-widest mt-4">
                    Explore Lab &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <FAQ faqs={faqs} />

      {/* 12. CTA */}
      <CTA
        ctaTitle="Turn Cognitive Prototypes Into"
        ctaHighlight="Mission-Critical Systems"
        ctaDesc="Partner with our AI systems architects to design custom multi-agent workflows, self-hosted LLM clusters, and sovereign RAG platforms."
        ctaBtnText="SCHEDULE TECHNICAL BRIEFING"
        backLink="/ecosystem/innovation-labs"
      />
    </main>
  );
}
