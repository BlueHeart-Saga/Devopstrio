"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  ArrowUpRight,
  ChevronRight,
  Layers,
  Cpu,
  Activity,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Workflow,
  FileText,
  ArrowRight,
  Database,
  Bot,
  Users,
  Brain,
  Maximize2,
  Zap,
  Flame,
  HelpCircle,
  Plus,
  Minus
} from "lucide-react";
import { getEcosystemDomain, getEcosystemSubpage } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/ecosystem/CTA";

// FAQs specifically for the AI Innovation Lab
const aiLabFaqs = [
  {
    q: "What is an AI Innovation Lab?",
    a: "Our AI Innovation Lab is a dedicated sandbox and engineering space where enterprise clients collaborate with our AI researchers and developers to evaluate use cases, prototype solutions, and test production safety before rolling out models."
  },
  {
    q: "How do we start an AI project?",
    a: "We begin with a brief Cognitive Assessment to identify workflow bottlenecks, audit datasets, select models, and outline a 4-week validation prototype phase."
  },
  {
    q: "Can AI integrate with existing systems?",
    a: "Yes. All our AI accelerators and agent solutions are modularly built to expose REST/gRPC endpoints, enabling direct connection with legacy ERPs, CRM databases, and CI/CD pipelines."
  },
  {
    q: "Which AI models do you support?",
    a: "We support private orchestrations of leading foundation models including OpenAI's GPT models, Anthropic's Claude, Google's Gemini, and open models like Meta's Llama and Mistral."
  },
  {
    q: "How long does an AI prototype take?",
    a: "A typical high-fidelity proof-of-concept takes 2 to 4 weeks from data ingestion and prompt pipeline engineering to model alignment and user testing."
  }
];

export default function EcosystemSubpagePage() {
  const { domain, subpage } = useParams() as { domain: string; subpage: string };
  const domainData = getEcosystemDomain(domain);
  const data = getEcosystemSubpage(domain, subpage);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data || !domainData) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: domainData.title, href: `/ecosystem/${domain}` },
    { label: data.title }
  ];

  // Specific path for AI Innovation Lab
  if (subpage === "ai-lab") {
    return (
      <main className="min-h-screen bg-black text-white pt-24 pb-16 font-sans">

        {/* 1. Hero Section */}
        <section className="relative overflow-hidden bg-black text-white pt-20 pb-16 border-b border-zinc-900/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.08),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 text-left">
              <nav className="flex items-center gap-2 text-xs font-mono text-zinc-550 mb-8">
                <Link href="/" className="hover:text-rose-500 transition-colors">HOME</Link>
                <ChevronRight size={10} className="text-zinc-700" />
                <Link href="/ecosystem" className="hover:text-rose-500 transition-colors">ECOSYSTEM</Link>
                <ChevronRight size={10} className="text-zinc-700" />
                <span className="text-rose-500 font-bold uppercase">AI INNOVATION LAB</span>
              </nav>

              <Reveal>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500 mb-4 block">
                  DEVOPSTRIO AI INNOVATION LAB
                </span>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6 text-white">
                  Building the Future of <span className="font-semibold text-rose-500">Intelligent</span> Enterprises
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-2xl mb-10">
                  From Generative AI and Agentic Systems to Enterprise Automation and Predictive Intelligence, our AI Innovation Lab helps organizations transform ideas into production-ready AI solutions.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
                  >
                    Start an AI Assessment <ArrowUpRight size={14} />
                  </Link>
                  <a
                    href="#innovation-areas"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-355 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    Explore AI Solutions
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Glowing red AI visual */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="w-72 h-72 rounded-full bg-rose-600/10 absolute filter blur-3xl animate-pulse" />
              <svg className="w-80 h-80 relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Node orbits */}
                <circle cx="100" cy="100" r="80" stroke="rgba(244, 63, 94, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="50" stroke="rgba(244, 63, 94, 0.25)" strokeWidth="1.5" />
                {/* Core brain icon */}
                <g transform="translate(85, 85)">
                  <Brain className="w-8 h-8 text-rose-500 animate-pulse" />
                </g>
                {/* Orbital nodes */}
                <circle cx="100" cy="20" r="5" fill="#f43f5e" />
                <circle cx="180" cy="100" r="4" fill="#18181b" stroke="#f43f5e" strokeWidth="1.5" />
                <circle cx="100" cy="180" r="6" fill="#f43f5e" />
                <circle cx="20" cy="100" r="4" fill="#18181b" stroke="#f43f5e" strokeWidth="1.5" />
                {/* Connected network pathways */}
                <line x1="100" y1="20" x2="100" y2="85" stroke="rgba(244, 63, 94, 0.3)" strokeWidth="1.5" />
                <line x1="100" y1="180" x2="100" y2="115" stroke="rgba(244, 63, 94, 0.3)" strokeWidth="1.5" />
                <line x1="20" y1="100" x2="85" y2="100" stroke="rgba(244, 63, 94, 0.3)" strokeWidth="1.5" />
                <line x1="180" y1="100" x2="115" y2="100" stroke="rgba(244, 63, 94, 0.3)" strokeWidth="1.5" />
              </svg>
            </div>

          </div>
        </section>

        {/* 2. Lab Overview */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-2 mb-4">

                  <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                    WHERE INNOVATION MEETS EXECUTION
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug mb-6">
                  Structured R&D to <span className="font-semibold text-rose-500">validate use cases</span> and scale systems
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="border-l border-rose-500/30 pl-4 py-2">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">AI Research</h4>
                  <p className="text-[10px] text-zinc-500 font-light leading-relaxed">Testing pre-release models and parameter fine-tuning boundaries.</p>
                </div>
                <div className="border-l border-rose-500/30 pl-4 py-2">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">AI Prototyping</h4>
                  <p className="text-[10px] text-zinc-500 font-light leading-relaxed">Developing production-grade sandboxes and data endpoints in under 4 weeks.</p>
                </div>
                <div className="border-l border-rose-500/30 pl-4 py-2">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">LLM Engineering</h4>
                  <p className="text-[10px] text-zinc-500 font-light leading-relaxed">Custom prompt safety setups, semantic caching, and output routing layers.</p>
                </div>
                <div className="border-l border-rose-500/30 pl-4 py-2">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">Agent Development</h4>
                  <p className="text-[10px] text-zinc-500 font-light leading-relaxed">Constructing stateful multi-agent workflows using task graphs.</p>
                </div>
                <div className="border-l border-rose-500/30 pl-4 py-2">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">AI Product Innovation</h4>
                  <p className="text-[10px] text-zinc-500 font-light leading-relaxed">Designing tailored user interfaces that enable human+AI collaboration.</p>
                </div>
                <div className="border-l border-rose-500/30 pl-4 py-2">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">AI Transformation</h4>
                  <p className="text-[10px] text-zinc-500 font-light leading-relaxed">Establishing compliance protocols and model training handoff structures.</p>
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
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">Devopstrio Cognitive Blueprint</h4>
                <p className="text-[10px] text-zinc-500 font-light leading-relaxed">
                  Integrating customized prompt filters and local databases with cloud endpoints.
                </p>
                <div className="mt-6 border-t border-zinc-900 pt-4 flex items-center justify-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">ACTIVE SIMULATIONS</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Innovation Areas */}
        <section id="innovation-areas" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  R&D Practice areas
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Our AI research & <span className="font-semibold text-rose-500">development fields</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Card 1 */}
              <Reveal className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all duration-300">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                    Generative AI
                  </h4>
                  <ul className="space-y-2 text-[10px] text-zinc-500 font-light">
                    <li>ChatGPT Integrations & Fine-Tuning</li>
                    <li>Custom Coding Copilots</li>
                    <li>Marketing Content Generation</li>
                    <li>Knowledge Base Retrieval Assistants</li>
                  </ul>
                </div>
              </Reveal>

              {/* Card 2 */}
              <Reveal delay={0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all duration-300">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                    Agentic AI
                  </h4>
                  <ul className="space-y-2 text-[10px] text-zinc-500 font-light">
                    <li>Autonomous AI Agents</li>
                    <li>Multi-Agent Orchestration Systems</li>
                    <li>Complex Task Automation Loop</li>
                    <li>Logical Decision-Making Engines</li>
                  </ul>
                </div>
              </Reveal>

              {/* Card 3 */}
              <Reveal delay={0.1} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all duration-300">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                    Enterprise AI
                  </h4>
                  <ul className="space-y-2 text-[10px] text-zinc-500 font-light">
                    <li>Document Intelligence & Ingest</li>
                    <li>Business Rule Automation Pipelines</li>
                    <li>Intelligent Corporate Workflows</li>
                    <li>Semantic Enterprise Search</li>
                  </ul>
                </div>
              </Reveal>

              {/* Card 4 */}
              <Reveal delay={0.15} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all duration-300">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                    AI Analytics
                  </h4>
                  <ul className="space-y-2 text-[10px] text-zinc-500 font-light">
                    <li>Time-Series Predictive Models</li>
                    <li>Enterprise Churn Forecasting</li>
                    <li>Cognitive Business Intelligence</li>
                    <li>User Recommendation Systems</li>
                  </ul>
                </div>
              </Reveal>

              {/* Card 5 */}
              <Reveal delay={0.2} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all duration-300">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                    Computer Vision
                  </h4>
                  <ul className="space-y-2 text-[10px] text-zinc-500 font-light">
                    <li>Production Image Analysis</li>
                    <li>Real-time Object Detection</li>
                    <li>Multi-language OCR Pipelines</li>
                    <li>Security Video Intelligence</li>
                  </ul>
                </div>
              </Reveal>

              {/* Card 6 */}
              <Reveal delay={0.25} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all duration-300">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                    Conversational AI
                  </h4>
                  <ul className="space-y-2 text-[10px] text-zinc-500 font-light">
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

        {/* 4. AI Innovation Workflow */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  PROCESS ROADMAP
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                From idea to <span className="font-semibold text-rose-500">production rollout</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-rose-500/5 via-rose-500/20 to-rose-500/5 hidden md:block z-0 -translate-y-6" />

              <Reveal className="h-full z-10">
                <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
                  <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3">STAGE 01</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Discover</h4>
                  <p className="text-[9px] text-zinc-500 leading-relaxed font-light">Audit workflows and map candidate dataset parameters.</p>
                </div>
              </Reveal>

              <Reveal delay={0.05} className="h-full z-10">
                <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
                  <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3">STAGE 02</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Assess</h4>
                  <p className="text-[9px] text-zinc-500 leading-relaxed font-light">Determine API token costs and select optimal LLM foundation models.</p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-full z-10">
                <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
                  <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3">STAGE 03</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Prototype</h4>
                  <p className="text-[9px] text-zinc-500 leading-relaxed font-light">Configure vector index maps and build functional prompt pipelines.</p>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="h-full z-10">
                <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
                  <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3">STAGE 04</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Validate</h4>
                  <p className="text-[9px] text-zinc-500 leading-relaxed font-light">Rigorous verification loops testing outputs and hallucination triggers.</p>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="h-full z-10">
                <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
                  <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3">STAGE 05</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Deploy</h4>
                  <p className="text-[9px] text-zinc-500 leading-relaxed font-light">Promote orchestrations to single-tenant VPC server instances.</p>
                </div>
              </Reveal>

              <Reveal delay={0.25} className="h-full z-10">
                <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
                  <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3">STAGE 06</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Optimize</h4>
                  <p className="text-[9px] text-zinc-500 leading-relaxed font-light">Monitor API budgets, tune caching levels, and retrain models.</p>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* 5. AI Technology Stack */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  ENGINEERING FOUNDATION
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Powered by leading <span className="font-semibold text-rose-500">AI technologies</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <Reveal className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                    Foundation Models
                  </h4>
                  <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
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
                  <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                    AI Frameworks
                  </h4>
                  <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
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
                  <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                    Data Platforms
                  </h4>
                  <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
                    <li>Azure AI Foundry</li>
                    <li>Databricks Lakehouse Platform</li>
                    <li>Snowflake Analytics Engine</li>
                    <li>Google BigQuery Storage</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                    MLOps
                  </h4>
                  <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
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

        {/* 6. AI Accelerators */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  BOILERPLATES & ACCELERATORS
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Ready-to-deploy <span className="font-semibold text-rose-500">AI accelerators</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              <Reveal className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-2">AI Knowledge Assistant</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Private secure documentation search using hybrid sparse/dense vector queries.</p>
                </div>
              </Reveal>

              <Reveal delay={0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-2">Document Intelligence Engine</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Extracting table structures, properties, and values from millions of PDF pages.</p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-2">Customer Support Copilot</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Suggesting context-aware customer email replies to support desks.</p>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-2">Recruitment AI</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Filtering candidate profiles based on corporate job requirements.</p>
                </div>
              </Reveal>

              <Reveal className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-2">Sales Intelligence Platform</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Analyzing pipeline interactions, call notes, and predicting conversion targets.</p>
                </div>
              </Reveal>

              <Reveal delay={0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-2">Contract Review Assistant</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Highlighting liability thresholds, termination clauses, and custom exceptions.</p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-2">Enterprise Search Engine</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Unified hybrid query search accessing Google Drive, Slack, and local databases.</p>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <h4 className="text-xs font-semibold text-zinc-250 mb-2">AI Operations Assistant</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Predicting server CPU exhaustion alerts using time-series sensor logs.</p>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* 7. Industry Applications */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  MARKET VERTICALS
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                AI solutions <span className="font-semibold text-rose-500">across industries</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">

              <Reveal className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 transition-all text-center">
                  <span className="block text-[11px] font-semibold text-zinc-200">Financial</span>
                </div>
              </Reveal>

              <Reveal delay={0.03} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 transition-all text-center">
                  <span className="block text-[11px] font-semibold text-zinc-200">Healthcare</span>
                </div>
              </Reveal>

              <Reveal delay={0.06} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 transition-all text-center">
                  <span className="block text-[11px] font-semibold text-zinc-200">Retail</span>
                </div>
              </Reveal>

              <Reveal delay={0.09} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 transition-all text-center">
                  <span className="block text-[11px] font-semibold text-zinc-200">Mfg.</span>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 transition-all text-center">
                  <span className="block text-[11px] font-semibold text-zinc-200">Telecom</span>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 transition-all text-center">
                  <span className="block text-[11px] font-semibold text-zinc-200">Logistics</span>
                </div>
              </Reveal>

              <Reveal delay={0.18} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 transition-all text-center">
                  <span className="block text-[11px] font-semibold text-zinc-200">Public Sec.</span>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* 8. Enterprise AI Architecture Diagram */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  SYSTEM ARCHITECTURE
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Enterprise AI <span className="font-semibold text-rose-500">architecture pipeline</span>
              </h2>
            </Reveal>

            {/* Architecture Pipeline Flowchart */}
            <div className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative items-center text-center">

                {/* Step 1 */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                  <span className="block text-[9px] font-mono text-rose-500 mb-2">INPUTS</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">Enterprise Data</h4>
                  <p className="text-[9px] text-zinc-550 leading-relaxed font-light">SQL logs, object storage buckets, real-time message queues.</p>
                </div>

                {/* Step 2 */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                  <span className="block text-[9px] font-mono text-rose-500 mb-2">VECTORIZATION</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">AI Data Layer</h4>
                  <p className="text-[9px] text-zinc-550 leading-relaxed font-light">Semantic chunks, text embeddings, vector databases.</p>
                </div>

                {/* Step 3 */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                  <span className="block text-[9px] font-mono text-rose-500 mb-2">COGNITION</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">LLM Layer</h4>
                  <p className="text-[9px] text-zinc-550 leading-relaxed font-light">Prompt evaluation caches, model endpoints, routers.</p>
                </div>

                {/* Step 4 */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                  <span className="block text-[9px] font-mono text-rose-500 mb-2">LOGIC RUNTIME</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">Agent Layer</h4>
                  <p className="text-[9px] text-zinc-550 leading-relaxed font-light">State charts, circular reasoning loops, executor tools.</p>
                </div>

                {/* Step 5 */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                  <span className="block text-[9px] font-mono text-rose-500 mb-2">INTEGRATION</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">Applications</h4>
                  <p className="text-[9px] text-zinc-550 leading-relaxed font-light">REST APIs, Slack bots, database write actions.</p>
                </div>

                {/* Step 6 */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative z-10 group hover:border-rose-500/20 transition-colors">
                  <span className="block text-[9px] font-mono text-rose-500 mb-2">ENDPOINTS</span>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">Users</h4>
                  <p className="text-[9px] text-zinc-550 leading-relaxed font-light">Active browser sessions, corporate Slack users.</p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 9. Business Impact */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  IMPACT QUANTIFIED
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                The value <span className="font-semibold text-rose-500">AI delivers</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

              <Reveal className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">40%</span>
                  <h4 className="text-[10px] font-semibold text-zinc-200">Faster Operations</h4>
                </div>
              </Reveal>

              <Reveal delay={0.03} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">70%</span>
                  <h4 className="text-[10px] font-semibold text-zinc-200">Reduced Manual Tasks</h4>
                </div>
              </Reveal>

              <Reveal delay={0.06} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">24/7</span>
                  <h4 className="text-[10px] font-semibold text-zinc-200">Intelligent Assistance</h4>
                </div>
              </Reveal>

              <Reveal delay={0.09} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">92%</span>
                  <h4 className="text-[10px] font-semibold text-zinc-200">Improved Decision Making</h4>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">5x</span>
                  <h4 className="text-[10px] font-semibold text-zinc-200">Accelerated Innovation</h4>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
                  <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">100%</span>
                  <h4 className="text-[10px] font-semibold text-zinc-200">Scalable Automation</h4>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* 10. Featured Use Cases */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  REAL-WORLD IMPLEMENTATIONS
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Real-world <span className="font-semibold text-rose-500">AI use cases</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <Reveal className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">AI Customer Support</h4>
                  <p className="text-[10px] text-zinc-550 leading-relaxed font-light">Deployed an autonomous support routing agent matching email intents and writing database ticket items automatically.</p>
                </div>
              </Reveal>

              <Reveal delay={0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Document Processing</h4>
                  <p className="text-[10px] text-zinc-550 leading-relaxed font-light">Parsing complex supplier invoices, structuring fields automatically, and executing checks in ERP systems.</p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Predictive Maintenance</h4>
                  <p className="text-[10px] text-zinc-550 leading-relaxed font-light">Tuning sensor logs to forecast mechanical degradation anomalies 12 days before shutdown events.</p>
                </div>
              </Reveal>

              <Reveal className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Knowledge Management</h4>
                  <p className="text-[10px] text-zinc-550 leading-relaxed font-light">Vectorizing internal wiki pages to enable semantic search lookups across Slack and local drives.</p>
                </div>
              </Reveal>

              <Reveal delay={0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Intelligent Monitoring</h4>
                  <p className="text-[10px] text-zinc-550 leading-relaxed font-light">Parsing telemetry event logs to pinpoint latency bottlenecks and trigger scaling schedules.</p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Enterprise Search</h4>
                  <p className="text-[10px] text-zinc-550 leading-relaxed font-light">Enabling hybrid vector lookups mapping corporate files across multiple storage endpoints.</p>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* 11. Future Technologies */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  R&D ROADMAP
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Exploring <span className="font-semibold text-rose-500">what is next</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <Reveal className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/10 transition-colors">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">Agentic AI & Swarms</h4>
                  <p className="text-[10px] text-zinc-550 leading-relaxed font-light">Modeling multiple collaborating agents that split complex operations and audit their decisions.</p>
                </div>
              </Reveal>

              <Reveal delay={0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/10 transition-colors">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">AI Governance & Auditing</h4>
                  <p className="text-[10px] text-zinc-550 leading-relaxed font-light">Codifying automated compliance checks to detect output drift, model bias, and token validation hazards.</p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/10 transition-colors">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">AI for Cloud Operations</h4>
                  <p className="text-[10px] text-zinc-550 leading-relaxed font-light">Connecting agentic diagnostic prompts directly to cluster runtimes to repair SRE incidents automatically.</p>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* 12. Related Ecosystem Areas */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

            <Reveal className="mb-16">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  CONNECTED PRACTICE AREAS
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Related <span className="font-semibold text-rose-500">ecosystem areas</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

              <Reveal className="h-full">
                <Link href="/ecosystem/innovation-labs/cloud-lab" className="block h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all text-center">
                  <span className="text-[11px] font-semibold text-zinc-200">Cloud Innovation Lab</span>
                </Link>
              </Reveal>

              <Reveal delay={0.03} className="h-full">
                <Link href="/ecosystem/innovation-labs/data-analytics-lab" className="block h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all text-center">
                  <span className="text-[11px] font-semibold text-zinc-200">Data & Analytics Lab</span>
                </Link>
              </Reveal>

              <Reveal delay={0.06} className="h-full">
                <Link href="/ecosystem/innovation-labs/cybersecurity-lab" className="block h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all text-center">
                  <span className="text-[11px] font-semibold text-zinc-200">Cybersecurity Lab</span>
                </Link>
              </Reveal>

              <Reveal delay={0.09} className="h-full">
                <Link href="/ecosystem/technology-stack" className="block h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all text-center">
                  <span className="text-[11px] font-semibold text-zinc-200">Technology Stack</span>
                </Link>
              </Reveal>

              <Reveal delay={0.12} className="h-full">
                <Link href="/ecosystem/engineering-excellence" className="block h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all text-center">
                  <span className="text-[11px] font-semibold text-zinc-200">Engineering Excellence</span>
                </Link>
              </Reveal>

            </div>

          </div>
        </section>

        {/* 13. FAQ */}
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-3xl mx-auto px-6 text-left">
            <Reveal className="mb-16 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">FAQ</span>
              </div>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white uppercase">
                Technical <span className="text-rose-500">clarifications</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-4">
              {aiLabFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <Reveal key={idx} className="w-full">
                    <div className="bg-zinc-950/20 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-colors">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left transition-colors"
                      >
                        <span className="text-xs md:text-sm font-semibold text-zinc-200">{faq.q}</span>
                        <span className="text-zinc-500 hover:text-white flex-shrink-0 ml-4 transition-colors">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] border-t border-zinc-900/50 p-5 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>
                        <p className="text-xs text-zinc-450 leading-relaxed font-light">{faq.a}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 14. CTA */}
        <section className="w-full py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(220,38,38,0.04),transparent_60%)] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Reveal>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  PARTNER WITH OUR RESEARCHERS
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
                Ready to Build Your <span className="font-semibold text-rose-500">AI-Powered Future?</span>
              </h2>

              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
                Collaborate on new software prototypes, deploy co-engineered accelerators, and integrate architectures.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
                >
                  Book an AI Strategy Session <ArrowUpRight size={14} className="stroke-[2.5]" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-300 border border-zinc-800 bg-transparent hover:border-zinc-700 hover:text-white transition-all duration-300"
                >
                  Talk to an AI Expert
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    );
  }

  // Fallback layout for other subpages (R&D labs / partnerships / platform details)
  const defaultBreadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: domainData.title, href: `/ecosystem/${domain}` },
    { label: data.title }
  ];

  const defaultSubSections = [
    { id: "challenge", label: "Overview & Alignment" },
    { id: "features", label: "Capabilities" },
    { id: "benefits", label: "Outcomes" },
    { id: "tech-stack", label: "Technology" },
    { id: "case-study", label: "Case Study" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 font-sans">

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-black text-white pt-20 pb-16 border-b border-zinc-900/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.06),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-zinc-550 mb-8">
            {defaultBreadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-rose-500 transition-colors">
                    {crumb.label.toUpperCase()}
                  </Link>
                ) : (
                  <span className="text-rose-500 font-bold uppercase">{crumb.label}</span>
                )}
                {idx < defaultBreadcrumbs.length - 1 && <ChevronRight size={10} className="text-zinc-700" />}
              </React.Fragment>
            ))}
          </nav>

          <div className="max-w-4xl text-left">
            <Reveal>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500 mb-4 block">
                {domainData.title}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6 text-white">
                {data.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-3xl mb-12">
                {data.heroSubtitle}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={defaultSubSections} />

      {/* 2. Challenge & Solution */}
      <section id="challenge" className="w-full py-24 bg-black border-b border-zinc-900/60 text-zinc-300">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
          <div className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3">
              The Technical Challenge
            </span>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              {data.challenge}
            </p>
          </div>

          <div className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase block mb-3">
              Joint Solution Approach
            </span>
            <p className="text-zinc-450 text-xs md:text-sm font-light leading-relaxed">
              {data.solution}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Capabilities */}
      <section id="features" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          <Reveal className="mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500 block mb-2">Capabilities</span>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Co-engineered <span className="font-semibold text-rose-500">deliverables</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.features.map((feat, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300">
                  <div>
                    <div className="flex items-center gap-2.5 mb-4 text-xs font-semibold text-zinc-200">
                      <CheckCircle2 size={15} className="text-rose-500 flex-shrink-0" />
                      <span>Capability {(idx + 1).toString().padStart(2, "0")}</span>
                    </div>
                    <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                      {feat}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Outcomes */}
      <section id="benefits" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          <Reveal className="mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500 block mb-2">Outcomes</span>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Key outcomes and <span className="font-semibold text-rose-500">benefits</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.benefits.map((benefit, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 md:p-8 hover:border-zinc-800 transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-4 text-xs font-semibold text-zinc-200">
                    <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                    <span>Benefit {(idx + 1).toString().padStart(2, "0")}</span>
                  </div>
                  <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                    {benefit}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technology Stack */}
      <section id="tech-stack" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          <Reveal className="mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500 block mb-2">Technology</span>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Co-engineered <span className="font-semibold text-rose-500">technology stack</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.techStack.map((tech, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 hover:border-zinc-800 transition-all duration-300">
                  <h4 className="text-xs font-semibold text-zinc-200 mb-2">{tech.name}</h4>
                  <p className="text-[11px] text-zinc-550 leading-relaxed font-light">{tech.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Case Study */}
      {data.caseStudy && (
        <section id="case-study" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
            <Reveal className="mb-16">
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500 block mb-2">Case Study</span>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Real-world <span className="font-semibold text-rose-500">implementation</span>
              </h2>
            </Reveal>

            <div className="bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <h4 className="text-sm font-semibold text-zinc-200 mb-4">{data.caseStudy.title}</h4>
              <p className="text-xs text-zinc-450 leading-relaxed font-light mb-8 max-w-3xl">{data.caseStudy.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-900">
                {data.caseStudy.metrics?.map((metric, idx) => (
                  <div key={idx}>
                    <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">{metric.value}</span>
                    <span className="block text-[10px] font-mono tracking-wider text-zinc-500 uppercase">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQ */}
      <section id="faq" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-3xl mx-auto px-6 text-left">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500 block mb-2">FAQ</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white uppercase">
              Technical <span className="text-rose-500">clarifications</span>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={idx} className="w-full">
                  <div className="bg-zinc-950/20 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-colors">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors"
                    >
                      <span className="text-xs md:text-sm font-semibold text-zinc-200">{faq.q}</span>
                      <span className="text-zinc-500 hover:text-white flex-shrink-0 ml-4 transition-colors">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] border-t border-zinc-900/50 p-5 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>
                      <p className="text-xs text-zinc-450 leading-relaxed font-light">{faq.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTA
        ctaTitle="Co-engineer with our"
        ctaHighlight="Alliance team"
        ctaDesc={`Schedule a technical architecture session with our joint team to deploy ${data.title.toLowerCase()}.`}
        ctaBtnText="Consult Alliance Lead"
        backLink={`/ecosystem/${domain}`}
      />
    </main>
  );
}
