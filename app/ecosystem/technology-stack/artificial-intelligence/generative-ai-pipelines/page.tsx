"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Globe,
  Database,
  Terminal,
  Activity,
  Workflow,
  Lock,
  GitBranch,
  Sliders,
  Server,
  Code2,
  RefreshCw,
  Search,
  Plus,
  Minus,
  Check,
  Shield,
  Bot,
  Copy,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export default function GenerativeAIPipelinesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  // 1. Tabbed Capability Data with enhanced syntax-highlighted telemetry
  const capabilities = [
    {
      id: "hybrid-rag",
      title: "Hybrid RAG & Semantic Retrieval",
      tag: "Vector Architecture",
      badge: "High-Recall Ingestion",
      latencyBadge: "< 14ms Query Latency",
      desc: "Combines dense vector embeddings with sparse lexical search (BM25) and neural cross-encoder re-ranking to deliver zero-hallucination domain knowledge to frontier foundation models.",
      stats: [
        "Sub-15ms multi-tenant vector similarity querying with HNSW indexes",
        "Cohere neural re-ranking with reciprocal rank fusion (RRF) at 0.942 precision",
        "Automated chunk deduplication and hierarchical markdown tree parsing"
      ],
      terminal: {
        command: "pipeline.retrieve({ query: 'quarterly_ebitda_compliance', topK: 5 })",
        status: "200 OK | RECALL 99.4%",
        logs: [
          { type: "comment", text: "// Ingesting query into embedding pipeline" },
          { type: "step", text: "> dense_encoder: text-embedding-3-large [1536 dim]" },
          { type: "step", text: "> sparse_encoder: BM25 token frequency index" },
          { type: "step", text: "> cross_encoder: cohere-rerank-v3 (top_k=25 -> 5)" },
          { type: "success", text: "> context_window: 1,840 tokens compiled (cosine: 0.941)" },
          { type: "info", text: "> telemetry.provenance: verified against 4 indexed docs" }
        ]
      }
    },
    {
      id: "context-caching",
      title: "Stateful Context & Semantic Caching",
      tag: "Latency Optimization",
      badge: "Token FinOps",
      latencyBadge: "< 6ms Cache Hit",
      desc: "Reduces repetitive LLM compute and token expenditures by up to 68% using in-memory semantic cache lookups, prompt compression, and prefix KV-cache reuse.",
      stats: [
        "Up to 68% direct reduction in foundation model API token consumption",
        "< 8ms cached query response time from Redis Enterprise edge clusters",
        "Dynamic prompt compression with entropy-based token pruning algorithms"
      ],
      terminal: {
        command: "cache.lookup({ embedding: hash, threshold: 0.96 })",
        status: "CACHE_HIT (SAVED $0.042)",
        logs: [
          { type: "comment", text: "// Checking semantic distance in Redis Enterprise" },
          { type: "step", text: "> vector_distance: 0.024 (threshold: <= 0.040)" },
          { type: "success", text: "> cache_hit: TRUE -> serving warm response payload" },
          { type: "info", text: "> latency_saved: 840ms -> edge return in 6.2ms" },
          { type: "info", text: "> prompt_tokens: 0 billed to foundation model API" },
          { type: "success", text: "> budget_guard: cluster quota 42% below ceiling" }
        ]
      }
    },
    {
      id: "agentic-orchestration",
      title: "Agentic Routing & LangGraph Loops",
      tag: "Autonomous Orchestration",
      badge: "Stateful Workflows",
      latencyBadge: "Zero-Loss Checkpointing",
      desc: "Implements deterministic multi-agent graphs with persistent checkpointers, fallback rerouting, human-in-the-loop approvals, and external database tool bindings.",
      stats: [
        "Cyclic multi-step tool execution with state recovery on transient failure",
        "Automated schema validation on structured JSON outputs via Pydantic",
        "Dynamic model routing between SLMs (Llama 3.1 8B) and Frontier LLMs"
      ],
      terminal: {
        command: "langgraph.dispatch({ task: 'audit_invoice_anomalies' })",
        status: "AGENT_LOOP COMPLETED (3 STEPS)",
        logs: [
          { type: "comment", text: "// Executing supervisor state machine" },
          { type: "step", text: "> agent[router]: delegated to postgres_query_tool" },
          { type: "step", text: "> tool[postgres]: retrieved 14 purchase records" },
          { type: "step", text: "> agent[analyst]: detected reconciliation variance £4,210" },
          { type: "success", text: "> schema_validator: pydantic output verified 100%" },
          { type: "info", text: "> state_snapshot: committed to PostgreSQL checkpointer" }
        ]
      }
    },
    {
      id: "guardrails-safety",
      title: "Deterministic Guardrails & PII Sanitization",
      tag: "Security & Governance",
      badge: "Enterprise Shield",
      latencyBadge: "Zero Data Leakage",
      desc: "Inspects incoming prompts and outgoing generations in real-time to redact PII, block prompt injections, verify factual consistency, and enforce strict regulatory compliance.",
      stats: [
        "Zero data leakage with automatic regex & spaCy PII tokenization",
        "Deterministic jailbreak defense using semantic tripwires and NeMo Guardrails",
        "Real-time toxicity and hallucination scoring before stream delivery"
      ],
      terminal: {
        command: "guardrails.verify({ payload: raw_stream, policy: 'FINRA_EU_AI' })",
        status: "POLICY ENFORCED | PII STRIPPED",
        logs: [
          { type: "comment", text: "// Running real-time ingress security inspection" },
          { type: "success", text: "> jailbreak_analyzer: clean (confidence: 0.998)" },
          { type: "step", text: "> pii_masker: 2 IBAN account numbers masked as <REDACTED>" },
          { type: "step", text: "> topical_boundary: financial advisory guardrails verified" },
          { type: "success", text: "> egress_safe: approved for client consumption" },
          { type: "info", text: "> audit_trail: signed with SHA-256 telemetry hash" }
        ]
      }
    }
  ];

  // 2. Metrics / Social Proof
  const metrics = [
    { val: "< 42ms", label: "Time to First Token (TTFT)", sub: "99th percentile" },
    { val: "14,500+", label: "Tokens / Sec Ingestion", sub: "Distributed throughput" },
    { val: "68%", label: "Token & Compute Cost Saved", sub: "Via semantic caching" },
    { val: "99.98%", label: "Pipeline Reliability SLA", sub: "Zero single point of failure" },
  ];

  // 3. 5-Stage Architecture Flow
  const pipelineStages = [
    {
      step: "01",
      title: "Document Ingestion",
      tag: "Multi-Modal Parsing",
      desc: "Extracts unstructured PDFs, API feeds, audio, and databases with semantic chunking and metadata attribution.",
      icon: Database
    },
    {
      step: "02",
      title: "Hybrid Indexing",
      tag: "Dense + Sparse Vectors",
      desc: "Generates high-dimensional vector embeddings with BGE-M3 and sparse BM25 token indices into Qdrant/Milvus.",
      icon: Search
    },
    {
      step: "03",
      title: "Semantic Caching",
      tag: "Sub-8ms Latency",
      desc: "Intercepts incoming requests via Redis KV-caches, pruning repeated queries to eliminate redundant API billing.",
      icon: RefreshCw
    },
    {
      step: "04",
      title: "LLM Inference & Routing",
      tag: "Dynamic Dispatch",
      desc: "Dispatches context to optimal frontier models (GPT-4o, Claude 3.5, Gemini) or private self-hosted vLLM clusters.",
      icon: Cpu
    },
    {
      step: "05",
      title: "Guardrails & Egress",
      tag: "Deterministic Safety",
      desc: "Validates JSON structure, redacts sensitive PII, enforces toxicity filters, and streams verified responses.",
      icon: ShieldCheck
    }
  ];

  // 4. Feature Cards (Balanced 2x3 Grid)
  const featureCards = [
    {
      icon: Zap,
      title: "High-Throughput vLLM Serving",
      tags: ["PagedAttention", "Continuous Batching", "Tensor Parallelism"],
      desc: "Deploy self-hosted open-source models with continuous batching and PagedAttention for 4x higher token serving density and predictable cloud budgets."
    },
    {
      icon: Layers,
      title: "Hybrid Dense-Sparse RAG",
      tags: ["Qdrant", "Cohere Rerank", "HNSW Indexes"],
      desc: "Eliminate semantic drift by pairing vector similarity with BM25 keyword matching and cross-encoder neural rerankers for pinpoint precision."
    },
    {
      icon: Lock,
      title: "Air-Gapped Privacy & PII Redaction",
      tags: ["SOC2 Type II", "spaCy NER", "Regex Tripwires"],
      desc: "Automated sanitization masking credit card numbers, national IDs, and proprietary secrets before LLM ingestion, satisfying strict compliance."
    },
    {
      icon: Workflow,
      title: "Multi-Agent State Orchestration",
      tags: ["LangGraph", "Cyclic State", "Human-in-the-Loop"],
      desc: "Build autonomous multi-agent teams with LangGraph, cyclical execution loops, self-correction, and tool calling with persistent state backends."
    },
    {
      icon: Activity,
      title: "Continuous LLM Observability",
      tags: ["Langfuse", "OpenTelemetry", "Drift Alarms"],
      desc: "Track latency traces, token consumption, drift signals, and user feedback loops using Langfuse and OpenTelemetry across all deployment environments."
    },
    {
      icon: Sliders,
      title: "Prompt Compression & KV Caching",
      tags: ["Entropy Pruning", "Prefix Caching", "Cost FinOps"],
      desc: "Compress verbose enterprise contexts down to salient tokens, maximizing precision while cutting token bills and staying well within context ceilings."
    }
  ];

  // 5. Tech Stack Matrix
  const techStack = [
    { category: "Frontier Foundation Models", items: ["OpenAI GPT-4o", "Anthropic Claude 3.5 Sonnet", "Google Gemini 1.5 Pro", "Meta Llama 3.1 70B", "Mistral Large"] },
    { category: "Inference & Serving", items: ["vLLM Runtimes", "NVIDIA TensorRT-LLM", "Triton Inference Server", "LiteLLM Gateway", "Ollama Clusters"] },
    { category: "Orchestration & Agents", items: ["LangGraph Workflows", "LangChain Core", "LlamaIndex Pipelines", "DSPy Optimizers", "Semantic Kernel"] },
    { category: "Vector Databases & Cache", items: ["Qdrant Vector Engine", "Milvus Cluster", "Pinecone Serverless", "Redis Enterprise Cache", "pgvector"] },
    { category: "Guardrails & Evaluation", items: ["NeMo Guardrails", "Llama Guard 3", "Langfuse Tracing", "Arize Phoenix", "Ragas Framework"] }
  ];

  // 6. FAQs
  const faqs = [
    {
      q: "What is the difference between a basic LLM API call and a Generative AI Pipeline?",
      a: "A basic API call is stateless and lacks real-time company knowledge, safety checks, or error handling. A production Generative AI Pipeline orchestrates ingestion, semantic chunking, hybrid vector retrieval, caching, prompt compression, guardrail enforcement, and token observability into a resilient enterprise workflow."
    },
    {
      q: "How do your pipelines prevent hallucinations and inaccurate outputs?",
      a: "We enforce Hybrid RAG (combining dense vector math with sparse lexical indexing) coupled with cross-encoder re-ranking. Context chunks are validated before prompt injection, and outputs are verified against ground-truth source citations before delivery to the user."
    },
    {
      q: "Can this pipeline run entirely on-premise or within our private cloud VPC?",
      a: "Yes. We engineer pipelines that deploy entirely within your private AWS, Azure, or GCP VPCs, or on bare-metal GPU infrastructure using open weights (Llama 3.1, Mistral, Qwen) with vLLM and self-hosted vector databases like Qdrant or Milvus."
    },
    {
      q: "How does semantic caching lower token costs?",
      a: "Enterprise queries frequently repeat similar questions or tasks. Our Redis-based semantic cache compares incoming prompt embeddings against warm historical answers. If the semantic similarity exceeds 96%, the response is returned in <8ms with zero foundation model token costs."
    },
    {
      q: "How do you enforce PII protection and enterprise compliance?",
      a: "Incoming user queries and retrieved enterprise documents pass through a pre-flight guardrail pipeline powered by spaCy and custom tokenizers. Sensitive PII (names, national IDs, bank numbers, proprietary tokens) is automatically scrubbed or masked prior to LLM processing."
    }
  ];

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(capabilities[activeTab].terminal.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-rose-500 selection:text-white relative">
      
      {/* Background High-Tech Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* =========================================================================
          BREADCRUMBS
      ========================================================================= */}
      <div className="pt-24 pb-4 border-b border-zinc-900/60 bg-black/70 backdrop-blur-xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-zinc-400 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-zinc-600 shrink-0" />
            <Link href="/ecosystem" className="hover:text-white transition-colors">Ecosystem</Link>
            <ChevronRight size={12} className="text-zinc-600 shrink-0" />
            <Link href="/ecosystem/technology-stack" className="hover:text-white transition-colors">Technology Stack</Link>
            <ChevronRight size={12} className="text-zinc-600 shrink-0" />
            <Link href="/ecosystem/technology-stack/artificial-intelligence" className="hover:text-white transition-colors">Artificial Intelligence</Link>
            <ChevronRight size={12} className="text-zinc-600 shrink-0" />
            <span className="text-rose-500 font-semibold">Generative AI Pipelines</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          1. HERO SECTION (Pure Code Design — No Stock Images)
      ========================================================================= */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-zinc-900/80">
        {/* Glow Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-rose-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 backdrop-blur-xl mb-8 text-xs font-semibold uppercase tracking-wider text-rose-300 shadow-[0_0_20px_rgba(225,29,72,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>High-Throughput Enterprise Architecture</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
          >
            Enterprise <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300 bg-clip-text text-transparent">
              Generative AI Pipelines
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Deploy resilient, production-ready LLM pipelines. From hybrid dense-sparse RAG and semantic caching 
            to vLLM serving, stateful multi-agent orchestration, and deterministic safety guardrails.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center items-center gap-4"
          >
            <Link 
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:scale-[1.02]"
            >
              Deploy Pipeline Architecture <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 font-medium text-sm transition-all duration-200 hover:text-white"
            >
              Explore Technical Specs
            </a>
          </motion.div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto border-t border-zinc-900/90 pt-10">
            {metrics.map((m, i) => (
              <div key={i} className="text-center group p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-rose-400 transition-colors">{m.val}</p>
                <p className="text-xs uppercase font-semibold text-zinc-400 mt-1">{m.label}</p>
                <p className="text-[11px] text-zinc-600 font-mono mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE TABBED FEATURE SECTION (Pure Code Design Console)
      ========================================================================= */}
      <section id="architecture" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Pillar Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Engineered for High-Concurrency Production
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
              Modular microservices designed to slot into enterprise Kubernetes environments with automated failover and sub-second execution.
            </p>
          </div>

          {/* Tab Navigation Pill Bar */}
          <div className="flex gap-2 p-1.5 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl w-fit mb-8 overflow-x-auto max-w-full backdrop-blur-md shadow-lg">
            {capabilities.map((feat, idx) => (
              <button
                key={feat.id}
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === idx
                    ? "text-white bg-rose-600 shadow-[0_0_20px_rgba(225,29,72,0.4)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {feat.title}
              </button>
            ))}
          </div>

          {/* Interactive Card Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/90 border border-zinc-800/80 hover:border-zinc-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                  {capabilities[activeTab].badge}
                </span>
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {capabilities[activeTab].latencyBadge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {capabilities[activeTab].title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                {capabilities[activeTab].desc}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {capabilities[activeTab].stats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{stat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link 
                  href="/contact#contact-form"
                  className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 text-sm font-semibold group"
                >
                  Request Technical Implementation Plan <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Graphic / Mock Console Column (Pure Code Design) */}
            <div className="lg:col-span-6 h-full min-h-[340px] bg-[#070709] border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between font-mono text-xs shadow-inner relative group/terminal">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-zinc-500 text-[11px] font-mono">genai-telemetry.bash</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleCopyCommand}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors p-1 rounded"
                    title="Copy command"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                  <span className="text-emerald-400 text-[11px] font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {capabilities[activeTab].terminal.status}
                  </span>
                </div>
              </div>

              {/* Terminal Body with Line Numbers */}
              <div className="space-y-2.5 py-5 text-zinc-400">
                <div className="flex items-center gap-3 text-emerald-400 font-semibold">
                  <span className="text-zinc-600 select-none">01</span>
                  <span>// Real-time telemetry trace connected</span>
                </div>
                <div className="flex items-start gap-3 text-white font-medium">
                  <span className="text-zinc-600 select-none">02</span>
                  <span className="text-rose-400 font-semibold">&gt; {capabilities[activeTab].terminal.command}</span>
                </div>
                {capabilities[activeTab].terminal.logs.map((log, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-zinc-600 select-none">{String(i + 3).padStart(2, "0")}</span>
                    <span className={
                      log.type === "comment" ? "text-zinc-500 italic" : 
                      log.type === "success" ? "text-emerald-300 font-semibold" : 
                      log.type === "info" ? "text-cyan-400" : "text-zinc-300"
                    }>
                      {log.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Terminal Footer */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-zinc-500 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  runtime: vllm-cluster-uk
                </span>
                <span className="text-rose-400 font-semibold">zero-leak certified</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. 5-STAGE END-TO-END PIPELINE ARCHITECTURE (Pure Code Diagram)
      ========================================================================= */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-950/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              EXECUTION TOPOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              End-to-End Pipeline Dataflow
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              Every token is accounted for. Observe how unformatted enterprise data transforms into validated, secure generative output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {pipelineStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div 
                  key={stage.step}
                  className="bg-zinc-900/40 border border-zinc-800/70 hover:border-rose-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 relative"
                >
                  {/* Step connector on desktop */}
                  {i < pipelineStages.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700 pointer-events-none">
                      <ChevronRight size={18} />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                        STAGE {stage.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-zinc-800/60 text-zinc-400 group-hover:text-rose-400 group-hover:bg-rose-500/10 flex items-center justify-center transition-colors">
                        <Icon size={16} />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                      {stage.tag}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FEATURE CARDS GRID (3-COLUMN BALANCED 2x3)
      ========================================================================= */}
      <section className="py-20 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Production-Grade Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/70 hover:border-rose-500/40 transition duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Subtle top glow on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-500/0 group-hover:via-rose-500/50 to-transparent transition-all duration-500" />

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-rose-400 transition-colors">{card.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-normal mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                    {card.tags.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono font-medium text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. VERIFIED TECH STACK MATRIX
      ========================================================================= */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              VERIFIED ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Supported Technologies & Frameworks
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              We build on battle-tested open standards and enterprise frontier models with strict vendor neutrality.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {techStack.map((group, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-zinc-700/80 transition-colors"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 sm:w-56 shrink-0">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-300 hover:border-rose-500/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. BEFORE VS AFTER COMPARISON
      ========================================================================= */}
      <section className="py-20 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              THE IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ad-Hoc LLM Calls vs Managed AI Pipelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-6">
                Naive API Calls
              </span>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">✕</span>
                  <span>Uncontrolled token spikes with runaway monthly API invoices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">✕</span>
                  <span>Frequent hallucinations caused by unranked vector search noise.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">✕</span>
                  <span>Zero safety guardrails, risking proprietary data and PII leakages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">✕</span>
                  <span>High latency (&gt; 2.5s TTFT) causing poor customer experience.</span>
                </li>
              </ul>
            </div>

            {/* With Devopstrio */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-rose-950/20 via-zinc-950 to-zinc-950 border border-rose-900/40 relative shadow-[0_0_30px_rgba(225,29,72,0.1)]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
                  Devopstrio AI Pipelines
                </span>
                <span className="text-[10px] font-mono uppercase bg-rose-500/10 text-rose-300 px-2 py-0.5 rounded border border-rose-500/20">
                  RECOMMENDED
                </span>
              </div>
              <ul className="space-y-4 text-sm text-white font-medium">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                  <span>Up to 68% token reduction through semantic caching & prompt pruning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                  <span>Hybrid dense-sparse retrieval + cross-encoder neural rerankers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                  <span>Deterministic pre-flight guardrails sanitizing 100% of PII.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                  <span>Sub-45ms TTFT with continuous vLLM batching & edge caching.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. TECHNICAL FAQS
      ========================================================================= */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ARCHITECTURE FAQS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i}
                  className="rounded-2xl border border-zinc-900 bg-zinc-950/80 overflow-hidden transition-colors hover:border-zinc-800"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between text-base font-semibold text-white hover:text-rose-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0 ml-4">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed font-normal border-t border-zinc-900/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CALL TO ACTION (BOTTOM BANNER)
      ========================================================================= */}
      <section className="py-24 relative overflow-hidden border-t border-zinc-900 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to Architect Production GenAI Pipelines?
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Partner with Devopstrio to design, build, and deploy high-throughput, secure LLM pipelines tailored to your enterprise data.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact#contact-form"
              className="px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm transition-all duration-200 shadow-xl shadow-rose-600/20"
            >
              Book an Architecture Session
            </Link>
            <Link 
              href="/ecosystem/technology-stack/artificial-intelligence"
              className="px-8 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 font-semibold text-sm transition-all duration-200 hover:text-white"
            >
              Back to AI Tech Stack
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
