"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
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
  Terminal,
  Activity,
  Workflow,
  Search,
  FileText,
  TrendingUp,
  Settings,
  Eye,
  Layers,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import Link from "next/link";

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

interface UseCaseCategory {
  name: string;
  items: string[];
}

interface MetricDeliverable {
  title: string;
  desc?: string;
}

interface WhyItem {
  title: string;
  desc: string;
}

interface LabCard {
  name: string;
  desc: string;
  href: string;
}

export default function AIInnovationLabPage() {
  const [activeTab, setActiveTab] = useState<string>("Finance");


  // 2. Mission overview - right side mini cards
  const miniMissionCards = [
    {
      title: "Applied AI Research",
      desc: "Exploring practical AI use cases aligned to enterprise needs."
    },
    {
      title: "Rapid Prototyping",
      desc: "Turning concepts into working AI proof points quickly."
    },
    {
      title: "Production Deployment",
      desc: "Moving models, copilots, and agents into secure production systems."
    },
    {
      title: "Continuous Optimization",
      desc: "Monitoring performance, accuracy, and business outcomes over time."
    }
  ];

  // 3. Core AI Innovation Areas
  const innovationAreas: CoreArea[] = [
    {
      title: "Generative AI Applications",
      desc: "LLM-powered assistants, enterprise copilots, content automation, summarization, search augmentation, and knowledge systems.",
      icon: <Sparkles className="w-5 h-5 text-rose-500" />
    },
    {
      title: "AI Agents & Workflow Automation",
      desc: "Task-oriented AI agents that interact with systems, trigger workflows, retrieve data, and support operations teams.",
      icon: <Brain className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Natural Language Processing",
      desc: "Text classification, sentiment analysis, semantic search, entity extraction, document understanding, and chatbot intelligence.",
      icon: <Terminal className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Document Intelligence",
      desc: "Invoice extraction, contract parsing, policy search, OCR pipelines, enterprise knowledge retrieval, and intelligent document workflows.",
      icon: <FileText className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Predictive Analytics & Forecasting",
      desc: "Demand forecasting, anomaly detection, customer scoring, trend prediction, and operational insights from business data.",
      icon: <TrendingUp className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Computer Vision",
      desc: "Image analysis, object detection, visual quality checks, ID/document verification, and AI-assisted inspection workflows.",
      icon: <Eye className="w-5 h-5 text-rose-500" />
    },
    {
      title: "AI Search & Knowledge Systems",
      desc: "Vector search, RAG pipelines, internal knowledge copilots, document Q&A, and enterprise search experiences.",
      icon: <Search className="w-5 h-5 text-rose-500" />
    },
    {
      title: "MLOps & Model Lifecycle Engineering",
      desc: "Model deployment, monitoring, retraining pipelines, evaluation, inference infrastructure, and AI operations at scale.",
      icon: <Settings className="w-5 h-5 text-rose-500" />
    }
  ];

  // 4. AI Lab Lifecycle Timeline
  const lifecycleTimeline: TimelineStep[] = [
    {
      num: "01",
      title: "Discover",
      desc: "Identify business problems, data availability, constraints, and AI opportunity areas."
    },
    {
      num: "02",
      title: "Frame the Use Case",
      desc: "Define scope, KPIs, model type, integration requirements, and expected business outcome."
    },
    {
      num: "03",
      title: "Prototype",
      desc: "Build quick proof-of-concepts, validate feasibility, test prompts/models, and compare solution paths."
    },
    {
      num: "04",
      title: "Engineer",
      desc: "Develop the data pipelines, APIs, orchestration, UI, and infrastructure required for production readiness."
    },
    {
      num: "05",
      title: "Deploy",
      desc: "Launch secure AI services, copilots, automation workflows, or analytics systems into live environments."
    },
    {
      num: "06",
      title: "Improve",
      desc: "Track usage, quality, hallucination risks, model drift, and business impact — then iterate continuously."
    }
  ];

  // 5. Solution Blocks
  const solutionBlocks: SolutionBlock[] = [
    {
      title: "Enterprise AI Copilots",
      desc: "Internal assistants for employees, operations teams, HR, support, legal, and knowledge workers."
    },
    {
      title: "Document AI Platforms",
      desc: "OCR, document extraction, policy intelligence, claims processing, contract review, and document search."
    },
    {
      title: "Conversational AI Systems",
      desc: "Customer support bots, internal help assistants, knowledge assistants, and AI-enabled service workflows."
    },
    {
      title: "AI-Powered Workflow Automation",
      desc: "Intelligent task routing, ticket classification, summarization, recommendation engines, and process acceleration."
    },
    {
      title: "Predictive Business Intelligence",
      desc: "Forecasting, anomaly detection, churn prediction, financial scoring, and operational trend analysis."
    },
    {
      title: "Industry-Specific AI Solutions",
      desc: "AI use cases tailored to finance, healthcare, telecom, retail, manufacturing, and public sector operations."
    }
  ];

  // 6. Enterprise AI Reference Architecture Layers
  const archLayers: ArchLayer[] = [
    {
      num: "Layer 6",
      name: "Governance & Operations Layer",
      desc: "MLOps, model monitoring, observability, access control, security, compliance, human review, audit trails"
    },
    {
      num: "Layer 5",
      name: "Application Layer",
      desc: "Copilots, chat interfaces, internal dashboards, APIs, automation tools, business apps"
    },
    {
      num: "Layer 4",
      name: "Intelligence Orchestration Layer",
      desc: "Prompt orchestration, agent logic, retrieval pipelines, memory, workflow triggers, evaluation rules"
    },
    {
      num: "Layer 3",
      name: "AI / Model Layer",
      desc: "LLMs, fine-tuned models, NLP pipelines, vision models, forecasting models, recommendation models"
    },
    {
      num: "Layer 2",
      name: "Data Processing Layer",
      desc: "ETL/ELT, document parsing, chunking, embeddings, feature engineering, OCR, cleaning pipelines"
    },
    {
      num: "Layer 1",
      name: "Data Sources",
      desc: "CRM, ERP, PDFs, emails, databases, support tickets, images, logs, business systems, IoT data"
    }
  ];

  // Tech chips
  const techChips = [
    "Python",
    "FastAPI",
    "LangChain / orchestration layer",
    "Vector databases",
    "Azure / AWS / GCP",
    "PostgreSQL / MongoDB",
    "ML pipelines",
    "Docker / Kubernetes",
    "monitoring & logging stack"
  ];

  // 7. Industry use cases
  const industryUseCases: UseCaseCategory[] = [
    {
      name: "Finance",
      items: [
        "Fraud alerts based on pattern shifts",
        "Document verification & validation",
        "Credit risk support decision trees",
        "Financial document summarization"
      ]
    },
    {
      name: "Healthcare",
      items: [
        "Patient record search & clinical summaries",
        "Medical document processing",
        "Triage support engines",
        "Workflow automation for doctor logs"
      ]
    },
    {
      name: "Retail",
      items: [
        "Product recommendations grids",
        "Customer service copilots",
        "Demand forecasting metrics",
        "Catalog enrichment pipelines"
      ]
    },
    {
      name: "Manufacturing",
      items: [
        "Defect detection algorithms",
        "Maintenance prediction models",
        "SOP knowledge assistants",
        "Operational anomaly alerts"
      ]
    }
  ];

  // 8. Deliverables / Value
  const labDeliverables: MetricDeliverable[] = [
    { title: "Faster AI experimentation cycles" },
    { title: "Reduced manual decision-making effort" },
    { title: "Better document processing accuracy" },
    { title: "Faster knowledge retrieval across teams" },
    { title: "Improved operational efficiency" },
    { title: "Scalable AI deployment readiness" },
    { title: "Reduced time from prototype to production" },
    { title: "Continuous learning and optimization" }
  ];

  // 9. Why work with us
  const whyWorkWithUs: WhyItem[] = [
    {
      title: "Applied, Not Experimental for the Sake of It",
      desc: "We focus on AI opportunities that can create measurable value, not just demos."
    },
    {
      title: "Engineering + AI in One Team",
      desc: "Our lab combines AI research, cloud engineering, DevOps, software development, and security expertise."
    },
    {
      title: "Built for Enterprise Integration",
      desc: "We design AI solutions that connect with real business systems, workflows, and operational environments."
    },
    {
      title: "Responsible Deployment Mindset",
      desc: "Security, privacy, access control, monitoring, and governance are considered from the beginning."
    },
    {
      title: "From Prototype to Platform",
      desc: "We don’t stop at a proof-of-concept — we help productionize and scale what works."
    },
    {
      title: "Long-Term Innovation Partner",
      desc: "We support continuous iteration, optimization, and new AI opportunities as your business evolves."
    }
  ];

  // 10. Related labs
  const relatedLabs: LabCard[] = [
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
          { label: "AI LAB" }
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Book An AI Discovery Session
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
        <Link
          href="/contact"
          className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
        >
          Talk to Our AI Team
        </Link>
      </Hero>

      {/* 2. AI LAB OVERVIEW / MISSION */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Glow highlight */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-rose-650/[0.01] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side content */}
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Mission Overview
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Where AI Research Meets <br />
                  <span className="text-rose-500">Production Engineering</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  The Devopstrio AI Innovation Lab is where we explore, validate, and engineer modern AI solutions that solve practical business challenges. We combine applied research, rapid prototyping, data engineering, model development, and production deployment to help organizations move from AI experimentation to real-world impact.
                </p>
              </Reveal>
            </div>

            {/* Right side - 4 mini cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {miniMissionCards.map((card, idx) => (
                <Reveal key={card.title} delay={idx * 0.05}>
                  <div className="bg-zinc-950/40 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-5 transition-all duration-300 min-h-[140px] flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                        {card.title}
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-400 font-semibold leading-relaxed">
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

      {/* 3. WHAT THE AI LAB FOCUSES ON */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Capabilities
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Core AI <span className="text-rose-500">Innovation Areas</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              The core technical vectors driven by our research scientists and integration engineers.
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
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                        {area.title}
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* 4. AI LAB OPERATING MODEL / LIFECYCLE */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-left max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Operating Framework
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              How Our AI Lab Turns Ideas into <span className="text-rose-500">Production Systems</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              A structured lifecycle method prioritizing early validation and rigorous engineering checks.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {lifecycleTimeline.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.05} className="h-full">
                <div className="bg-zinc-950/80 border border-white/[0.03] hover:border-rose-500/20 rounded-2xl p-5 flex flex-col justify-between h-full min-h-[190px] relative group transition-all duration-300">
                  <div>
                    <span className="text-2xl font-black text-rose-500/10 font-mono tracking-tighter block mb-4 group-hover:text-rose-500/25 transition-colors">
                      {step.num}
                    </span>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. AI SOLUTION BLOCKS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Deliverables
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Solutions Built Inside the <span className="text-rose-500">AI Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Actual software platforms and functional cognitive integrations designed for real business setups.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionBlocks.map((block, idx) => (
              <Reveal key={block.title} delay={idx * 0.04}>
                <div className="bg-[#0a0a0a]/60 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-6 transition-all duration-300 min-h-[160px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-white/[0.03] pb-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        {block.title}
                      </h4>
                      <span className="text-[9px] font-mono text-rose-500 font-bold">ACTIVE ARCH</span>
                    </div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {block.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI ARCHITECTURE / TECHNOLOGY FOUNDATION */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-650/[0.015] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Reference Blueprint
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Our Enterprise AI <span className="text-rose-500">Reference Architecture</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              The layered framework powering secure model alignment and low-latency cognitive outputs.
            </p>
          </Reveal>

          {/* Layered Diagram */}
          <div className="flex flex-col gap-4 font-mono">
            {archLayers.map((layer, idx) => (
              <Reveal key={layer.num} delay={idx * 0.05}>
                <div className="bg-zinc-950/60 border border-white/[0.03] rounded-2xl p-5 hover:border-rose-500/20 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-[10px] font-bold text-rose-500 uppercase tracking-widest font-mono border-r border-white/10 pr-2">
                      {layer.num}
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{layer.name}</span>
                  </div>
                  <span className="text-xs md:text-sm text-zinc-400 font-semibold md:max-w-md text-left md:text-right leading-relaxed">
                    {layer.desc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Tech Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 select-none mt-12">
            {techChips.map((tech) => (
              <span key={tech} className="px-3.5 py-2 bg-zinc-950 border border-white/[0.04] text-[10px] font-mono text-zinc-400 rounded-xl font-bold">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 7. AI USE CASES BY BUSINESS FUNCTION / INDUSTRY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Vertical Focus
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              AI Use Cases We Explore <span className="text-rose-500">Across the Enterprise</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Targeted implementations mapping cognitive features directly to standard enterprise operational divisions.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            
            {/* Left selector sidebar */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory">
              {industryUseCases.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-left border transition-all duration-300 flex-shrink-0 snap-start w-[140px] lg:w-full ${
                    activeTab === cat.name
                      ? "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.1)]"
                      : "bg-zinc-950/45 text-zinc-400 border-white/[0.03] hover:text-zinc-300 hover:bg-zinc-900/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">{cat.name}</span>
                  </div>
                  <ChevronRight size={14} className="hidden lg:block text-zinc-550" />
                </button>
              ))}
            </div>

            {/* Right Display Card */}
            <div className="lg:col-span-8">
              <div className="bg-[#0b0b0b]/60 border border-white/[0.03] rounded-3xl p-6 md:p-8 min-h-[260px] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-6 border-b border-white/[0.03] pb-2">
                    ACTIVE USE CASE MAPPING FOR: {activeTab}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(industryUseCases.find((c) => c.name === activeTab)?.items || []).map((item, idx) => (
                      <Reveal key={item} delay={idx * 0.04} className="h-full">
                        <div className="group relative rounded-[20px] border border-white/[0.04] bg-zinc-950/80 p-5 hover:border-rose-500/20 hover:shadow-[0_8px_30px_rgba(244,63,94,0.02)] transition-all duration-300 flex flex-col justify-between h-full min-h-[90px]">
                          <div className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                            <span className="text-xs md:text-sm font-bold text-zinc-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                              {item}
                            </span>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. INNOVATION OUTCOMES / LAB IMPACT */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Innovation Impact
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  What the AI Lab <br />
                  <span className="text-rose-500">Delivers</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Rigorous performance baselines and continuous quality validation to ensure deployment safety and bottom-line value.
                </p>
              </Reveal>
            </div>

            {/* Right side metrics and value list */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {labDeliverables.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.05}>
                  <div className="bg-zinc-950/80 border border-white/[0.03] rounded-2xl p-5 hover:border-rose-500/10 transition-colors duration-300 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-zinc-300">{item.title}</span>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 9. WHY DEVOpstrio AI LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Why Devopstrio
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Why Organizations Work with the <span className="text-rose-500">Devopstrio AI Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              We focus on enterprise integrations that generate measurable cost optimizations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWorkWithUs.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.04}>
                <div className="bg-[#0a0a0a]/60 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-6 transition-all duration-300 flex flex-col justify-between min-h-[170px] h-full">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 10. RELATED LABS / CTA */}
      <section className="w-full py-24 bg-[#020202] relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          {/* Related Labs Grid */}
          <div className="mb-24">
            <Reveal className="mb-14 text-left">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                Ecosystem
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-5">
                Explore More <span className="text-rose-500">Innovation Labs</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedLabs.map((lab) => (
                <Link
                  key={lab.name}
                  href={lab.href}
                  className="group bg-zinc-950/60 border border-white/[0.03] hover:border-rose-500/20 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between min-h-[160px]"
                >
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 flex items-center justify-between">
                      {lab.name}
                      <ChevronRight size={14} className="text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {lab.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA Block */}
          <div className="relative rounded-[32px] border border-white/[0.04] bg-zinc-950/50 p-8 md:p-16 text-center overflow-hidden max-w-4xl mx-auto">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                Applied AI Collaboration
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-5">
                Have an AI idea worth building?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Partner with the Devopstrio AI Innovation Lab to prototype, validate, and deploy AI systems that create real business value.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
                >
                  Book an AI Discovery Session
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Talk to Our AI Team
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
