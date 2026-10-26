"use client";

import React, { useState, useRef } from "react";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ChevronLeft, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud,
  Search, Smartphone, Phone, Mail, MessageCircle, MessageSquare, Twitter, Headset, Smile, User, Star, Map,
  BrainCircuit, Bot, Lightbulb, TrendingUp, CheckCircle, Target, Compass, Blocks, Code, FastForward
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const subSections = [
  { id: "overview", label: "Overview" },
  { id: "evolution", label: "Paradigm Shift" },
  { id: "architecture", label: "Architecture" },
  { id: "capabilities", label: "Capabilities" },
  { id: "models", label: "Models & Frameworks" },
  { id: "lifecycle", label: "Lifecycle" },
  { id: "scale", label: "Scale & Compute" },
  { id: "use-cases", label: "Use Cases" },
  { id: "case-studies", label: "Case Studies" },
  { id: "governance", label: "Responsible AI" },
  { id: "outcomes", label: "Business Value" },
  { id: "why-devopstrio", label: "Why Devopstrio" },
  { id: "faq", label: "FAQ" }
];

// ==========================================
// 1. AI OVERVIEW
// ==========================================
const AIOverview = () => {
  const cards = [
    { title: "Intelligent Automation", desc: "Automate complex workflows and deterministic processes with autonomous AI agents.", icon: Workflow },
    { title: "Generative AI & Copilots", desc: "Build domain-aware chat copilots and assistive tools grounded in your enterprise data.", icon: Bot },
    { title: "Enterprise Foundation Models", desc: "Deploy and fine-tune private frontier LLMs and SLMs inside your secure VPCs.", icon: Server },
    { title: "Predictive Intelligence", desc: "Forecast demand, anomaly signals, and operational metrics with production ML pipelines.", icon: TrendingUp },
    { title: "Stateful Agentic Loops", desc: "Orchestrate multi-step task executions using LangGraph with human-in-the-loop validation.", icon: MessageSquare },
    { title: "Dense-Sparse Vector RAG", desc: "Deliver zero-hallucination domain knowledge through hybrid vector embeddings and semantic search.", icon: BrainCircuit }
  ];

  return (
    <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-3 block">ENTERPRISE INTELLIGENCE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
              Enterprise AI for Modern Digital Ecosystems
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group bg-zinc-950/45 border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col justify-between h-full hover:border-rose-500/40 hover:shadow-[0_12px_32px_rgba(244,63,94,0.12)] transition-all duration-300 p-8 min-h-[220px]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 2. THE PARADIGM SHIFT
// ==========================================
const WhyAI = () => {
  const challenges = [
    "Rigid static workflows unable to adapt to unstructured inputs",
    "Slow manual analytics loops causing delayed business decisions",
    "Data silos locked across legacy ERPs, CRM databases, and documents",
    "High operational labor expenditure on repetitive manual processing",
    "Inability to scale personalized customer interactions 24/7"
  ];
  const benefits = [
    "Autonomous agentic routing with self-correcting error handling",
    "Sub-second real-time inference and predictive trend scoring",
    "Unified dense-sparse vector lakehouses powering RAG copilots",
    "Up to 68% token and operational expenditure saved via semantic caching",
    "Zero-downtime, continuous learning loops with automated evaluation"
  ];

  return (
    <section id="evolution" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">THE PARADIGM SHIFT</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Transforming Static Software into Autonomous Intelligence
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Legacy / Before */}
          <Reveal delay={0.1}>
            <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Minus className="w-4 h-4 text-zinc-500" /> Traditional Static Software
              </h3>
              <ul className="space-y-4">
                {challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-medium leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-zinc-700 mt-1.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* With AI */}
          <Reveal delay={0.2}>
            <div className="p-8 bg-gradient-to-br from-rose-950/20 to-zinc-950 border border-rose-900/40 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(225,29,72,0.12)]">
              <h3 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Plus className="w-4 h-4 text-rose-500" /> Enterprise AI &amp; Agentic Platforms
              </h3>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white font-semibold leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. AI REFERENCE ARCHITECTURE
// ==========================================
const AIArchitecture = () => {
  return (
    <section id="architecture" className="py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-6xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-3 block">
              REFERENCE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
              Enterprise AI Reference Architecture
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto p-4 sm:p-8 rounded-[3rem] bg-zinc-950/60 border border-zinc-900 shadow-[0_0_50px_rgba(225,29,72,0.06)]">
          {/* Top Layer */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 relative z-10 mb-8">
            <Reveal delay={0.1}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center min-w-[160px] shadow-lg hover:border-rose-500/50 transition-all group">
                <Users className="w-8 h-8 text-zinc-400 mb-3 group-hover:text-rose-400 transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Users &amp; Clients</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center min-w-[160px] shadow-lg hover:border-rose-500/50 transition-all group">
                <Smartphone className="w-8 h-8 text-zinc-400 mb-3 group-hover:text-rose-400 transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Enterprise Apps</span>
              </div>
            </Reveal>
          </div>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-gradient-to-b from-zinc-700 to-rose-500/50" />
          </div>

          {/* Middle Layer 1: Gateway */}
          <Reveal delay={0.3}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-md bg-zinc-950 border border-rose-900/40 rounded-2xl p-6 flex items-center justify-center gap-4 shadow-[0_4px_20px_rgba(225,29,72,0.1)]">
                <Network className="w-6 h-6 text-rose-500" />
                <span className="text-sm font-bold uppercase tracking-widest text-white">API Gateway &amp; Safety Guardrails</span>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-rose-500/50" />
          </div>

          {/* Middle Layer 2: Orchestration */}
          <Reveal delay={0.4}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-2xl bg-zinc-900/80 border border-rose-500/30 rounded-2xl p-6 flex items-center justify-center gap-4 shadow-[0_4px_30px_rgba(225,29,72,0.15)] backdrop-blur-sm">
                <Command className="w-6 h-6 text-rose-400" />
                <span className="text-sm font-bold uppercase tracking-widest text-white">LangGraph AI Orchestration Engine</span>
              </div>
            </div>
          </Reveal>

          {/* Split Connectors */}
          <div className="hidden sm:block">
            <div className="flex justify-center relative z-0 -my-4">
               <div className="w-px h-6 bg-rose-500/50" />
            </div>
            <div className="flex justify-center relative z-0">
               <div className="w-[300px] h-px bg-rose-500/50" />
            </div>
            <div className="flex justify-center gap-[300px] relative z-0 -my-4 mb-4">
               <div className="w-px h-10 bg-rose-500/50" />
               <div className="w-px h-10 bg-rose-500/50" />
            </div>
          </div>

          {/* Core Layer: LLMs & Vector Store */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 relative z-10 mb-8 mt-4 sm:mt-0">
            <Reveal delay={0.5}>
              <div className="w-full bg-zinc-950 border border-rose-500/40 rounded-2xl p-8 flex flex-col items-center sm:min-w-[220px] shadow-[0_0_30px_rgba(225,29,72,0.12)] hover:border-rose-500 transition-all group">
                <BrainCircuit className="w-10 h-10 text-rose-500 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-widest text-white text-center">Foundation LLMs &amp; SLMs</span>
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="w-full bg-zinc-950 border border-emerald-500/40 rounded-2xl p-8 flex flex-col items-center sm:min-w-[220px] shadow-[0_0_30px_rgba(16,185,129,0.08)] hover:border-emerald-500 transition-all group">
                <Database className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-widest text-white text-center">Pinecone &amp; pgvector Store</span>
              </div>
            </Reveal>
          </div>

          <div className="hidden sm:block">
            <div className="flex justify-center gap-[300px] relative z-0 -my-4">
               <div className="w-px h-8 bg-rose-500/30" />
               <div className="w-px h-8 bg-emerald-500/30" />
            </div>
            <div className="flex justify-center relative z-0">
               <div className="w-[300px] h-px bg-gradient-to-r from-rose-500/30 to-emerald-500/30" />
            </div>
            <div className="flex justify-center relative z-0 -my-4 mb-4">
               <div className="w-px h-10 bg-zinc-600/50" />
            </div>
          </div>

          {/* Enterprise Data */}
          <Reveal delay={0.7}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-3">
                  <HardDrive className="w-5 h-5 text-zinc-400" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Enterprise Data Fabric (Lakehouse &amp; S3)</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-8 bg-zinc-700" />
          </div>

          {/* Cloud Compute */}
          <Reveal delay={0.8}>
            <div className="flex justify-center relative z-10 mt-4 sm:mt-0">
              <div className="w-full max-w-3xl bg-zinc-950 border-2 border-zinc-800/80 rounded-2xl p-6 flex items-center justify-center gap-4">
                <Cloud className="w-6 h-6 text-blue-500" />
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Multi-Cloud GPU Infrastructure (Azure · AWS · GCP)</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. CORE AI CAPABILITIES SCROLLER
// ==========================================
const AICapabilities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 310;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const capabilities = [
    { title: "Generative AI Pipelines", tag: "Next-Gen AI", desc: "Deploy resilient, production-ready LLM pipelines with hybrid dense-sparse RAG, semantic caching, and vLLM serving.", image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp", href: "/ecosystem/technology-stack/artificial-intelligence/generative-ai-pipelines" },
    { title: "Stateful AI Agents", tag: "Autonomous", desc: "Build persistent multi-agent orchestration graphs using LangGraph with state recovery, tool use, and human approval gates.", image: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp", href: "/ecosystem/technology-stack/artificial-intelligence/stateful-ai-agents" },
    { title: "Deep Machine Learning", tag: "Predictive", desc: "Train custom neural architectures, fine-tune domain weights, and execute low-latency inferencing at scale.", image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp", href: "/ecosystem/technology-stack/artificial-intelligence/deep-machine-learning" },
    { title: "Natural Language Processing", tag: "Language", desc: "Extract entity graphs, perform sentiment categorization, and process multi-lingual documentation streams.", image: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp", href: "/ecosystem/technology-stack/artificial-intelligence/natural-language-processing" },
    { title: "Computer Vision Models", tag: "Visual", desc: "Deploy edge vision models for automated quality inspection, OCR ingestion, and real-time object classification.", image: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp", href: "/ecosystem/technology-stack/artificial-intelligence/computer-vision-models" },
    { title: "Predictive Analytics", tag: "Forecasting", desc: "Model business trends, detect operational churn, and optimize resource scheduling with automated regression trees.", image: "/webp/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.webp", href: "/ecosystem/technology-stack/artificial-intelligence/predictive-analytics" },
    { title: "MLOps Automation", tag: "Continuous", desc: "Enforce model tracking, automated drift detection, canary rollout deployment, and continuous evaluation pipelines.", image: "/webp/assets/common/90361fed0bb781d7c86e451995b4dbce-1.webp", href: "/ecosystem/technology-stack/artificial-intelligence/mlops-automation" }
  ];

  return (
    <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">ENGINEERING SUITE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">Our Core AI Capabilities</h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[260px] sm:min-w-[280px] md:min-w-[290px] max-w-[300px] flex-shrink-0 snap-start">
              <div className="bg-[#0D0E12] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-rose-500/40 hover:shadow-[0_8px_30px_rgba(225,29,72,0.12)] transition-all duration-300 flex flex-col h-full min-h-[330px] group">
                <div className="w-full h-32 relative bg-zinc-900 overflow-hidden border-b border-zinc-800/80">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    unoptimized
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/85 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                    {item.tag}
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug group-hover:text-rose-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4 line-clamp-2 flex-grow">
                    {item.desc}
                  </p>
                  
                  <Link 
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-1.5 text-rose-500 text-xs font-semibold hover:text-rose-400 transition-colors cursor-pointer w-fit group/btn"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                      <ChevronRight size={12} />
                    </div>
                    <span>Explore Capability</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Navigation below scroller */}
        <div className="flex items-center justify-between mt-6 px-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider">
            Scroll for all capabilities →
          </span>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. MODELS & FRAMEWORKS TABS
// ==========================================
const AIModels = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Foundation Models", items: ["OpenAI GPT-4o", "Anthropic Claude 3.5", "Google Gemini 1.5 Pro", "Meta Llama 3.1", "Mistral Large"] },
    { name: "Agentic Frameworks", items: ["LangGraph", "LangChain Core", "LlamaIndex", "Microsoft Semantic Kernel", "AutoGPT"] },
    { name: "Inference & Serving", items: ["vLLM Runtimes", "TGI (Text-Gen Inference)", "TensorRT-LLM", "Ollama Private Mesh", "Triton Server"] },
    { name: "Vector & Lakehouses", items: ["Pinecone Serverless", "pgvector / Aurora", "Qdrant Vector Mesh", "Milvus Enterprise", "Databricks Mosaic"] }
  ];

  return (
    <section id="models" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-5xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">ECOSYSTEM</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">Models &amp; Frameworks We Architect With</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-6 py-4 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === idx ? "bg-rose-500 text-white shadow-lg" : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <div className="w-full md:w-2/3 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] p-8 min-h-[250px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {tabs[activeTab].items.map((item, i) => (
                  <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center flex items-center justify-center hover:border-rose-500/30 transition-colors">
                    <span className="text-sm font-semibold text-zinc-200 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// 6. AI DEVELOPMENT LIFECYCLE
// ==========================================
const AIDevelopmentLifecycle = () => {
  const steps = [
    { name: "Discover", icon: Compass, desc: "Use-case scoping & feasibility" },
    { name: "Data Prep", icon: Database, desc: "Chunking & vector indexing" },
    { name: "Fine-Tune", icon: BrainCircuit, desc: "LoRA & parameter tuning" },
    { name: "Guardrails", icon: ShieldCheck, desc: "PII & hallucination audits" },
    { name: "Deploy", icon: Zap, desc: "vLLM container execution" },
    { name: "Telemetry", icon: Monitor, desc: "Latency & token tracking" },
    { name: "Continuous MLOps", icon: RefreshCw, desc: "Drift detection & rollback" }
  ];

  return (
    <section id="lifecycle" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">LIFECYCLE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">Enterprise AI Development Lifecycle</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 text-center">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.08} className="flex flex-col items-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-4">
                <step.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 group-hover:text-white transition-colors mb-1">
                {step.name}
              </span>
              <span className="text-[11px] text-zinc-500 leading-tight">
                {step.desc}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. ENTERPRISE SCALE & COMPUTE
// ==========================================
const AIInfrastructure = () => {
  const features = [
    { title: "High-Throughput GPUs", desc: "NVIDIA H100 & A100 cluster allocation on private cloud subnets." },
    { title: "Distributed Vector Mesh", desc: "Sharded Pinecone, Qdrant, and pgvector clusters for billions of vectors." },
    { title: "Semantic Prompt Caching", desc: "Edge caching layers that drop redundant LLM token costs by up to 68%." },
    { title: "vLLM Inference Serving", desc: "PagedAttention runtimes delivering <42ms Time-to-First-Token." },
    { title: "Zero Data Retention", desc: "Private API routing ensuring customer prompts never train third-party models." },
    { title: "Automated Evaluation", desc: "Continuous Ragas benchmarking measuring context recall and faithfulness." },
    { title: "Air-Gapped On-Premises", desc: "Local Ollama and vLLM clusters running entirely behind enterprise firewalls." },
    { title: "Multi-Cloud Portability", desc: "Unified abstractions running seamlessly on Azure, AWS, and Google Cloud." }
  ];

  return (
    <section id="scale" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">SCALE &amp; PERFORMANCE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">Engineered for Enterprise Scale</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="p-6 bg-zinc-950/60 border border-zinc-900 rounded-2xl hover:border-rose-500/30 hover:bg-zinc-900/30 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-2 h-2 rounded-full bg-rose-500 mb-4" />
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 8. INDUSTRY USE CASES
// ==========================================
const AIUseCases = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 310;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const useCases = [
    { title: "Banking & Financial Fraud", tag: "Finance", desc: "Analyze millions of transactional swipes in under 35ms using streaming ML classifiers and Kafka pipelines.", image: "/webp/assets/common/e76e125035885aab9c9070ce85df239e-1.webp", href: "/industries/banking-finance#case-study" },
    { title: "Healthcare Diagnostics & EHR", tag: "Health", desc: "Extract structured clinical data from unorganized patient records under strict HIPAA & zero-trust parameters.", image: "/webp/assets/common/f03cc521fb070dfae9d87768b791ff70-1.webp", href: "/industries/healthcare-life-sciences#case-study" },
    { title: "Retail Demand Forecasting", tag: "Commerce", desc: "Anticipate seasonal inventory spikes, auto-tune supply chains, and power dynamic personalization graphs.", image: "/webp/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.webp", href: "/industries/retail-ecommerce#case-study" },
    { title: "Industrial Predictive SCADA", tag: "Manufacturing", desc: "Edge IoT telemetry anomaly detectors alerting engineers to mechanical wear before costly plant shutdowns.", image: "/webp/assets/common/b384eb0438c55e43c61e7595acc29638-1.webp", href: "/industries/manufacturing#case-study" },
    { title: "5G Telecommunications QoS", tag: "Telecom", desc: "High-throughput CDR parsing and automated network anomaly mitigations across distributed edge meshes.", image: "/webp/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.webp", href: "/industries/telecommunications#case-study" },
    { title: "Citizen Gov-Tech Gateways", tag: "Public", desc: "High-security citizen service assistants with FedRAMP-aligned guardrails and air-gapped sovereign execution.", image: "/webp/assets/common/9d91b93f83e6d4cd494ec13611b3e50e-1.webp", href: "/industries/government-public-sector#case-study" }
  ];

  return (
    <section id="use-cases" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">INDUSTRY DEPLOYMENTS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">Enterprise AI in Action</h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[260px] sm:min-w-[280px] md:min-w-[290px] max-w-[300px] flex-shrink-0 snap-start">
              <div className="bg-[#0D0E12] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-rose-500/40 hover:shadow-[0_8px_30px_rgba(225,29,72,0.12)] transition-all duration-300 flex flex-col h-full min-h-[330px] group">
                <div className="w-full h-32 relative bg-zinc-900 overflow-hidden border-b border-zinc-800/80">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                    unoptimized 
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/85 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                    {item.tag}
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug group-hover:text-rose-400 transition-colors line-clamp-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4 line-clamp-2 flex-grow">{item.desc}</p>
                  <Link 
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-1.5 text-rose-500 text-xs font-semibold hover:text-rose-400 transition-colors cursor-pointer w-fit group/btn"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                      <ChevronRight size={12} />
                    </div>
                    <span>Explore Industry Case</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6 px-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider">
            Scroll for more industries →
          </span>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 9. FEATURED AI CASE STUDIES
// ==========================================
const AICaseStudies = () => {
  const caseStudies = [
    {
      company: "Apex Clearing Bank",
      industry: "Financial Intelligence",
      title: "Real-Time XGBoost Fraud Engine",
      summary: "Engineered Kafka streaming pipeline evaluating swipe coordinates against custom ML models in under 35ms.",
      metric: "35ms Latency · 99.4% Catch",
      image: "/webp/assets/Industries-page/case-studies/2.webp",
      link: "/industries/banking-finance#case-study"
    },
    {
      company: "Novis Diagnostics",
      industry: "Clinical AI",
      title: "HIPAA-Sanitized Clinical Summarizer",
      summary: "Constructed zero-data-retention RAG pipeline ingesting real-time wearable telemetry for 2M+ patient monitors.",
      metric: "0 Data Leak · SOC-2 Type II",
      image: "/webp/assets/Industries-page/case-studies/3.webp",
      link: "/industries/healthcare-life-sciences#case-study"
    },
    {
      company: "CloudCore Global",
      industry: "Agentic Engineering",
      title: "LangGraph Multi-Agent Modernizer",
      summary: "Deployed autonomous code refactoring and GitOps validation loops cutting legacy migration timelines by 75%.",
      metric: "68% Token Savings · <42ms TTFT",
      image: "/webp/assets/Industries-page/case-studies/7.webp",
      link: "/ecosystem/technology-stack/artificial-intelligence/generative-ai-pipelines"
    },
    {
      company: "SmartForge IoT",
      industry: "Industrial SCADA",
      title: "Edge Vision & Predictive Maintenance",
      summary: "Deployed edge MQTT gateways and automated AI anomaly detectors across automated robotic assembly lines.",
      metric: "40% Downtime Drop · 24/7 SCADA",
      image: "/webp/assets/Industries-page/case-studies/6.webp",
      link: "/industries/manufacturing#case-study"
    }
  ];

  return (
    <section id="case-studies" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
          <Reveal>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-3 block font-mono">
              VERIFIED SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
              Featured AI <span className="text-rose-500 font-semibold">Case Studies</span>
            </h2>
          </Reveal>

          <Reveal className="flex items-center gap-3">
            <Link
              href="/marketing/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white border border-white/10 hover:border-rose-500/60 bg-[#0b0b0c] px-4 py-2.5 rounded-full transition-all duration-300"
            >
              All Case Studies <ArrowUpRight size={14} className="text-rose-400" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((story, idx) => (
            <Reveal key={idx} delay={idx * 0.06}>
              <Link
                href={story.link}
                className="group block bg-[#0D0E12] border border-white/10 rounded-[24px] p-5 hover:border-rose-500/40 hover:shadow-[0_16px_40px_rgba(244,63,94,0.15)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full cursor-pointer"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden mb-4 group-hover:border-rose-500/30 transition-colors duration-300 bg-zinc-900">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                      {story.industry}
                    </div>
                  </div>

                  <span className="text-xs text-zinc-400 font-mono tracking-wide uppercase block mb-1">
                    {story.company}
                  </span>

                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-rose-400 transition-colors duration-300 mb-2">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                    {story.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-zinc-400 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-mono font-semibold text-rose-400/90">
                    {story.metric}
                  </span>
                  <span className="text-xs font-bold flex items-center gap-1.5 text-rose-400 group-hover:text-rose-300 transition-colors">
                    Read Story <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 10. RESPONSIBLE & SECURE AI GOVERNANCE
// ==========================================
const ResponsibleAI = () => {
  const items = [
    "Zero Data Retention (ZDR)", "Deterministic Guardrails", "Automated PII Masking",
    "Jailbreak & Injection Defense", "Human-in-the-Loop Approval", "Multi-Tenant Isolation",
    "Continuous Ragas Auditing", "Ethical AI & Bias Tracking"
  ];

  return (
    <section id="governance" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">TRUST &amp; SAFETY</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">Responsible &amp; Secure AI Governance</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="px-6 py-4 bg-zinc-950/40 border border-zinc-900 rounded-full hover:border-rose-500/40 hover:bg-zinc-900/30 transition-all duration-300 text-center flex items-center justify-center gap-2">
                <ShieldCheck size={16} className="text-rose-500 shrink-0" />
                <span className="text-xs font-bold text-zinc-300 tracking-wider uppercase">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 11. MEASURABLE BUSINESS OUTCOMES
// ==========================================
const BusinessOutcomes = () => {
  const outcomes = [
    { value: "< 42ms", title: "Time to First Token (TTFT) at 99th Percentile" },
    { value: "68%", title: "Token & Compute Cost Saved via Semantic Caching" },
    { value: "99.98%", title: "Production High-Availability Inference SLA" },
    { value: "100%", title: "Zero Data Leakage with Automated PII Redaction" },
    { value: "10M+", title: "Daily Autonomous Inferences Processed Reliably" },
    { value: "24×7", title: "Continuous Telemetry & Drift Detection Loops" }
  ];

  return (
    <section id="outcomes" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">BUSINESS VALUE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">Measurable Engineering Outcomes</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-8 bg-zinc-950/50 border border-zinc-900 rounded-3xl hover:border-rose-500/30 transition-all flex flex-col justify-between min-h-[190px]">
                <div className="text-3xl md:text-4xl font-extrabold text-rose-500 mb-3 font-mono">
                  {item.value}
                </div>
                <h4 className="text-sm font-bold text-white tracking-wide">{item.title}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 12. WHY DEVOPSTRIO AI
// ==========================================
const WhyChooseAI = () => {
  const items = [
    "Enterprise Foundation Models", "Deterministic Guardrails & Safety", "Private On-Prem & Cloud VPC Inference",
    "Semantic Cache & Token FinOps", "Multi-Agent Graph Orchestration", "Zero-Data-Retention Compliance",
    "Full-Stack Vector & Lakehouse Fabric", "Production MLOps & Continuous Evaluation"
  ];

  return (
    <section id="why-devopstrio" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">WHY DEVOPSTRIO</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">Why Choose Devopstrio AI</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="group p-5 bg-zinc-950/60 border border-zinc-800/80 rounded-2xl hover:border-rose-500/40 hover:bg-zinc-900/40 transition-all duration-300 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200 tracking-wide group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 13. FAQ
// ==========================================
const TechnologyFAQ = () => {
  const faqs = [
    { q: "What enterprise AI services do you engineer?", a: "We architect end-to-end AI capabilities including Generative AI pipelines, LangGraph stateful agents, hybrid dense-sparse vector RAG, private LLM fine-tuning, and automated continuous MLOps." },
    { q: "Which foundation models do you support?", a: "We support leading frontier commercial APIs (OpenAI GPT-4o, Anthropic Claude 3.5, Google Gemini 1.5) as well as self-hosted open-weights models (Meta Llama 3.1, Mistral, DeepSeek) running in private VPCs." },
    { q: "How do you ensure zero data leakage for corporate data?", a: "We enforce strict Zero Data Retention (ZDR) policies, VPC endpoint peering, automated regex/spaCy PII sanitization filters, and air-gapped on-premises inference runtimes." },
    { q: "Can you build autonomous, multi-step AI agents?", a: "Yes. Using LangGraph and Semantic Kernel, we build deterministic cyclic agent loops with persistent PostgreSQL state checkpointers, external database tool bindings, and human-in-the-loop approval workflows." },
    { q: "How do you reduce foundation model API and token costs?", a: "We implement multi-tier semantic caching using Redis Enterprise and embedding cosine similarity thresholds, dropping repetitive token expenditures by up to 68% while delivering sub-8ms responses." },
    { q: "Do you support private on-premise AI deployments?", a: "Yes. We deploy optimized vLLM and TensorRT-LLM runtimes across local NVIDIA GPU clusters (H100/A100) running completely isolated behind your enterprise firewall." },
    { q: "Which cloud platforms are supported natively?", a: "Our AI architectures deploy natively across Microsoft Azure (Azure OpenAI), Amazon Web Services (AWS Bedrock / SageMaker), and Google Cloud (Vertex AI)." },
    { q: "How do you evaluate and monitor models against drift?", a: "We integrate automated Ragas benchmarks, OpenTelemetry trace exporters, and canary release routers to continuously measure context recall, answer relevancy, and accuracy drift." }
  ];
  return (
    <div id="faq">
      <FAQ faqs={faqs} />
    </div>
  );
};

// ==========================================
// 14. CTA
// ==========================================
const TechnologyCTA = () => {
  return (
    <CTA
      ctaTitle="Accelerate Your Business With"
      ctaHighlight="Enterprise AI Architecture"
      ctaDesc="Deploy production-grade foundation models, stateful agentic workflows, and compliant MLOps pipelines with Devopstrio."
      ctaBtnText="TALK TO AN AI ARCHITECT"
      backLink="/ecosystem/technology-stack"
    />
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function AITechnologyStackPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-rose-500 selection:text-white">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Hero Section */}
      <Hero
        badge="TECHNOLOGY STACK"
        title={
          <>
            Artificial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Intelligence
            </span>
          </>
        }
        subtitle="Deploy production-grade foundation models, stateful agentic workflows, dense-sparse vector RAG, and automated MLOps pipelines."
        dotField={true}
        dotFieldProps={{
          dotRadius: 2,
          dotSpacing: 24,
          bulgeStrength: 67,
          glowRadius: 200,
          sparkle: true,
          waveAmplitude: 10,
          gradientFrom: "rgba(225, 29, 72, 0.8)",
          gradientTo: "rgba(239, 68, 68, 0.5)",
          glowColor: "rgba(225, 29, 72, 0.15)",
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ecosystem", href: "/ecosystem" },
          { label: "Technology Stack", href: "/ecosystem/technology-stack" },
          { label: "Artificial Intelligence" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact#contact-form" 
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Talk to AI Architects
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <a 
            href="#capabilities" 
            className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300"
          >
            Explore AI Capabilities
          </a>
        </div>
      </Hero>

      {/* Sticky Sub-navigation */}
      <SectionNavbar sections={subSections} />

      {/* Page Sections */}
      <AIOverview />
      <WhyAI />
      <AIArchitecture />
      <AICapabilities />
      <AIModels />
      <AIDevelopmentLifecycle />
      <AIInfrastructure />
      <AIUseCases />
      <AICaseStudies />
      <ResponsibleAI />
      <BusinessOutcomes />
      <WhyChooseAI />
      <TechnologyFAQ />
      <TechnologyCTA />
    </main>
  );
}
