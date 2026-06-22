"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Brain,
  Cpu,
  Database,
  Network,
  Shield,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Activity,
  Terminal,
  CheckCircle2,
  Search,
  Briefcase,
  Users,
  FileText,
  Code,
  Settings,
  Workflow,
  Sparkle
} from "lucide-react";
import Link from "next/link";

export default function AIInnovationLabPage() {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Hero highlights
  const heroHighlights = [
    "Generative AI",
    "Agentic AI",
    "Enterprise Search",
    "Intelligent Automation",
    "Decision Intelligence"
  ];

  // Hero metrics
  const heroMetrics = [
    { value: "50+", label: "AI Accelerators" },
    { value: "10+", label: "Production Solutions" },
    { value: "100K+", label: "AI Interactions" },
    { value: "24/7", label: "AI Operations" }
  ];

  // Research Domains
  const researchDomains = [
    {
      title: "Generative AI",
      desc: "Custom tuning foundation models, fine-tuning task-specific parameters, and orchestrating private deployment boundaries.",
      icon: <Sparkles className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Agentic AI",
      desc: "Developing autonomous system agents that leverage tool APIs, retrieve database facts, and execute multi-step logic cycles.",
      icon: <Brain className="w-6 h-6 text-rose-500" />
    },
    {
      q: "Multi-Agent Systems",
      title: "Multi-Agent Systems",
      desc: "Orchestrating cooperative agent networks that distribute complex business procedures into specialized tasks.",
      icon: <Network className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Computer Vision",
      desc: "Training custom classification models, real-time safety tracking grids, and document layout parsing engines.",
      icon: <Cpu className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Natural Language Processing",
      desc: "Building context-aware translation tools, sentiment pipelines, entity extractors, and voice-assisted control units.",
      icon: <Terminal className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Predictive Analytics",
      desc: "Formulating database forecasting algorithms to optimize supply routes, forecast demand, and preempt failures.",
      icon: <Activity className="w-6 h-6 text-rose-500" />
    }
  ];

  // Enterprise Solutions
  const enterpriseSolutions = [
    {
      name: "AIHire",
      tagline: "AI Recruitment Platform",
      desc: "Automating resume screening, skill assessments, and hiring interviews with contextual insights."
    },
    {
      name: "Humanex AI",
      tagline: "HR Intelligence Platform",
      desc: "Synthesizing employee feedback, training needs, and sentiment indicators into operational reports."
    },
    {
      name: "Brio AI",
      tagline: "Creative AI Platform",
      desc: "Empowering content creators with automated asset generation, draft generation, and copy revisions."
    },
    {
      name: "SafeSign AI",
      tagline: "Document Intelligence",
      desc: "Auditing compliance requirements and verifying contracts with semantic clauses comparison."
    },
    {
      name: "Enterprise Search AI",
      tagline: "Knowledge Discovery",
      desc: "Unlocking file repositories using conversational vector query pipelines and instant RAG summarization."
    },
    {
      name: "AI Automation Engine",
      tagline: "Workflow Intelligence",
      desc: "Connecting enterprise systems with intelligent trigger-action chains to execute daily business processes."
    }
  ];

  // Industry applications Use cases
  const useCaseFocusAreas = [
    { title: "Recruitment Intelligence", desc: "Sourcing talent, checking skill sets, and matching candidate profiles dynamically." },
    { title: "Document Processing", desc: "Extracting structured keys from invoices, reports, and legacy manuals automatically." },
    { title: "Customer Support", desc: "Deploying conversational voice and text bots to resolve high-frequency support tickets." },
    { title: "Knowledge Management", desc: "Connecting enterprise folders into one query interface for instant research access." },
    { title: "Predictive Analytics", desc: "Training data models to track machinery health, client retention, and market shifts." }
  ];

  const useCaseIndustries = [
    { name: "Healthcare", desc: "Automating clinical summaries, analyzing telemetry, and optimizing clinic schedules." },
    { name: "Banking", desc: "Detecting fraudulent transactions, analyzing risk metrics, and assisting loan reviews." },
    { name: "Retail", desc: "Generating product descriptions, serving retail recommendations, and managing inventory." },
    { name: "Manufacturing", desc: "Monitoring assembly lines, tracking material supply, and predicting wear parameters." },
    { name: "Technology", desc: "Writing test suites, containerizing codebases, and automating software releases." },
    { name: "Education", desc: "Creating customized study roadmaps, grading tests, and translating academic articles." }
  ];

  // Delivery Framework
  const frameworkSteps = [
    { phase: "Discover", title: "Rapid AI POC", desc: "Identifying business processes, selecting foundational models, and defining criteria." },
    { phase: "Prototype", title: "MVP Development", desc: "Building core pipelines, testing retrieval accuracy, and establishing clean UX." },
    { phase: "Validate", title: "Enterprise Deployment", desc: "Refining prompt engineering, setting safety parameters, and auditing system drift." },
    { phase: "Pilot", title: "Managed AI Operations", desc: "Deploying model instances, configuring usage logs, and scaling access points." }
  ];

  // Success Stories
  const successStories = [
    {
      title: "AI Hiring Assistant",
      challenge: "An enterprise partner struggled with thousands of resume profiles, leading to weeks of scheduling delay.",
      solution: "Deployed AIHire platform to screen qualifications, run initial automated chats, and grade test scores.",
      result: "75% decrease in candidate screening timeline and a 40% reduction in cost-per-hire metrics."
    },
    {
      title: "Enterprise Search Platform",
      challenge: "Customer success agents spent hours browsing dense compliance manuals to answer technical tickets.",
      solution: "Constructed a secure RAG search pipeline connecting local storage files with private LLM workspaces.",
      result: "Instant answer generation, reducing average agent response times from 15 minutes to under 30 seconds."
    },
    {
      title: "Document Intelligence System",
      challenge: "Manual compliance reviews of multi-page legal contracts led to delayed deal sign-offs.",
      solution: "Implemented SafeSign AI to extract key clauses, run risk reviews, and alert legal teams to anomalies.",
      result: "60% faster contract processing speeds with 100% detection of critical missing clauses."
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "What foundation models does the AI Innovation Lab support?",
      a: "We support integrations with industry-leading foundation models including OpenAI GPT-4, Google Gemini, Anthropic Claude, Meta Llama 3, and specialized custom-tuned open-source models."
    },
    {
      q: "How do you ensure enterprise data security and privacy?",
      a: "We deploy model instances inside secure private cloud enclaves (Azure AI, AWS VPC, GCP Vertex) and configure strict data retention policies, ensuring your business data is never used to train public models."
    },
    {
      q: "What is a RAG (Retrieval-Augmented Generation) pipeline?",
      a: "RAG combines LLMs with vector database search, allowing the AI to retrieve facts from your private enterprise repositories to generate accurate, context-aware answers without hallucinating."
    },
    {
      q: "Can we build custom autonomous AI agents?",
      a: "Yes. We design and build custom multi-agent networks that can execute complex workflows, connect with tool APIs, query databases, and automate multi-step operational tasks."
    },
    {
      q: "How long does a typical AI Proof of Concept (POC) take?",
      a: "A rapid AI POC generally takes 3 to 4 weeks under our Innovation Delivery Framework, from initial discovery and data staging to prototype validation."
    },
    {
      q: "What vector databases do you recommend?",
      a: "We regularly implement Pinecone, Weaviate, pgvector, and Milvus depending on the scaling, latency, and cloud infrastructure requirements of the project."
    },
    {
      q: "Do you support fine-tuning existing LLMs?",
      a: "Yes. We fine-tune foundation models using specialized business datasets to align language tone, learn domain-specific terminology, and optimize system task performance."
    },
    {
      q: "How do you manage AI system operations (MLOps)?",
      a: "We configure automated model testing, usage billing audits, drift detection, and automated scaling parameters using Kubernetes (AKS/GKE/EKS) and cloud registries."
    },
    {
      q: "What is your experience with Agentic AI frameworks?",
      a: "We deploy production agents using LangChain, CrewAI, AutoGen, and custom lightweight TypeScript orchestrators to manage multi-step reasoning cycles."
    },
    {
      q: "How can we begin collaborating with the AI Innovation Lab?",
      a: "You can schedule an initial discovery workshop where our team reviews your business workflows, drafts potential architectures, and proposes a tailored MVP plan."
    }
  ];

  // Related connections
  const relatedConnections = [
    { name: "Microsoft Alliance", desc: "Azure cloud architectures, Fabric integration, and security systems.", href: "/ecosystem/partnerships/microsoft" },
    { name: "Google Cloud Strategic Alliance", desc: "AI-Powered, Data-Driven Enterprise Platforms.", href: "/ecosystem/partnerships/google-cloud" },
    { name: "AWS Strategic Alliance", desc: "Cloud-native modernization, serverless architectures, and Bedrock integrations.", href: "/ecosystem/partnerships/aws" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">

        {/* Background Gradients & Grids */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.04),transparent_60%)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center">

          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Sparkle className="w-3 h-3 text-rose-500 animate-spin-slow" />
              AI Innovation Lab
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              Building Enterprise AI Systems, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
                Autonomous Agents & Intelligent Platforms
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-10">
              Accelerate digital operations with tailored foundation models, secure RAG database systems, and agentic task orchestration. We transform legacy workflows into intelligent autonomous assets.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Start AI Project
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk To AI Experts
            </Link>
          </Reveal>

          {/* Pillars */}
          <Reveal delay={0.4} className="flex flex-wrap justify-center gap-3 max-w-4xl select-none mb-16">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                {item}
              </span>
            ))}
          </Reveal>

          {/* Metrics */}
          <Reveal delay={0.5} className="w-full max-w-5xl border-t border-zinc-900/60 pt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 select-none">
              {heroMetrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-mono font-black text-rose-500 mb-1">{metric.value}</div>
                  <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">{metric.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* 2. AI RESEARCH & INNOVATION AREAS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              RESEARCH DOMAINS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              AI Research & <span className="text-rose-500">Innovation Areas</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Translating advanced artificial intelligence theories into scalable, practical enterprise assets.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchDomains.map((domain, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[200px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">{domain.title}</h4>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {domain.icon}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI PLATFORM ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.01] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              TECHNICAL BLUEPRINT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              AI Platform <span className="text-rose-500">Architecture</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              A robust, end-to-end ecosystem engineered for safety, speed, and cognitive accuracy.
            </p>
          </Reveal>

          {/* Technical Stack Architecture Diagram */}
          <div className="max-w-4xl mx-auto bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/[0.02] rounded-full blur-xl pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10 font-mono">

              {/* Layer 1 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">01. Applications</span>
                <span className="text-xs text-zinc-400 font-bold">Web Interfaces, API Endpoints, SaaS Portals, Mobile Clients</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 2 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">02. AI Agents</span>
                <span className="text-xs text-zinc-400 font-bold">Task Routers, Goal Engines, Memory Chains, Prompt Templates</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 3 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">03. Orchestration Layer</span>
                <span className="text-xs text-zinc-400 font-bold">LangChain, LlamaIndex, CrewAI, custom async Flow Controllers</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 4 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">04. Foundation Models</span>
                <span className="text-xs text-zinc-400 font-bold">OpenAI GPT-4, Google Gemini, Anthropic Claude, Meta Llama 3</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 5 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">05. Knowledge & Data</span>
                <span className="text-xs text-zinc-400 font-bold">Vector Database (Pinecone, pgvector), Metadata Syncs, S3/SQL</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 6 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">06. Cloud Infrastructure</span>
                <span className="text-xs text-zinc-400 font-bold">Azure AI, GCP Vertex AI, AWS Bedrock, Dedicated GPU Clusters</span>
              </div>

            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 select-none mt-12">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Integrations Stack:</span>
            {["OpenAI", "Gemini", "Claude", "Llama", "Vector Database", "FastAPI", "Azure AI"].map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ENTERPRISE AI SOLUTIONS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PRODUCT PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Enterprise AI <span className="text-rose-500">Solutions</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">
                      {sol.tagline}
                    </span>
                    <span className="text-xs font-mono text-zinc-700">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                    {sol.name}
                  </h3>

                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI USE CASES & INDUSTRY APPLICATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              APPLICATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              AI Use Cases & <span className="text-rose-500">Industry Mappings</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Unifying operational capabilities with targeted industry solutions.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Column Left: Focus Areas */}
            <div className="p-8 bg-zinc-950/30 border border-zinc-900/80 rounded-3xl">
              <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-6 font-bold">
                OPERATIONAL CAPABILITIES
              </span>
              <div className="flex flex-col gap-6">
                {useCaseFocusAreas.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start pb-6 border-b border-zinc-900/40 last:border-0 last:pb-0">
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 font-mono text-[10px] font-bold flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column Right: Industries */}
            <div className="p-8 bg-zinc-950/30 border border-zinc-900/80 rounded-3xl">
              <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-6 font-bold">
                TARGET INDUSTRIES
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCaseIndustries.map((ind, idx) => (
                  <div key={idx} className="p-5 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/10 rounded-2xl transition-colors duration-300">
                    <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      {ind.name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed font-bold">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. INNOVATION DELIVERY FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              AI Innovation <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {frameworkSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group overflow-hidden"
              >
                <div className="text-[28px] font-black text-rose-500/15 font-mono tracking-tighter leading-none mb-3">
                  0{idx + 1}
                </div>
                <span className="text-[9px] font-mono text-rose-500 uppercase tracking-widest block mb-1 font-bold">
                  {step.phase}
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{step.title}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 select-none mt-12">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Services:</span>
            {["Rapid AI POC", "MVP Development", "Enterprise Deployment", "Managed AI Operations"].map((srv) => (
              <span key={srv} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {srv}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AI SUCCESS STORIES & IMPACT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  CASE STUDIES & METRICS
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                  AI Success Stories <span className="text-rose-500">& Impact</span>
                </h2>
                <p className="text-zinc-350 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
                  Proven, tangible business impact delivered through autonomous agents and intelligent search solutions.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 select-none">
                {[
                  { value: "20+", label: "AI Projects" },
                  { value: "10+", label: "AI Products" },
                  { value: "100K+", label: "AI Requests" },
                  { value: "99.9%", label: "Availability" },
                  { value: "Global", label: "Delivery Support" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 text-left group"
                  >
                    <div className="text-2xl md:text-3xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                      {item.value}
                    </div>
                    <div className="text-[9px] md:text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-snug font-bold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-500 tracking-wider uppercase font-bold block mb-1">
                    AI Case Study
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-white mb-6 tracking-wide">
                    {story.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Challenge</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-bold">{story.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Solution</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-bold">{story.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-zinc-900/80">
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Result</span>
                      <p className="text-xs text-zinc-350 font-bold leading-relaxed">{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left sticky top-28">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  LAB QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our AI systems, model architectures, and data safety compliance.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col gap-4 select-none">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/10 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white uppercase tracking-wider"
                      >
                        {faq.q}
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-550 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-rose-500" : ""
                            }`}
                        />
                      </button>

                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[250px] border-t border-zinc-900/60" : "max-h-0"
                          }`}
                      >
                        <p className="p-6 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RELATED CONNECTIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related Ecosystem <span className="text-rose-500">Connections</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedConnections.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[160px]"
              >
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                    {partner.name}
                    <ChevronRight className="w-4 h-4 text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                  </h4>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 flex flex-col items-center">

          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GET STARTED
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Transform Ideas Into <span className="text-rose-500">Intelligent Systems</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Partner with our AI Innovation Lab to design, build, deploy, and scale cognitive application backends and autonomous workflows.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Start AI Project
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk To AI Experts
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
