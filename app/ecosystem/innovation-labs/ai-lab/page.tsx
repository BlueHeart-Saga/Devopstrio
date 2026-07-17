"use client";

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
  HelpCircle,
  Cloud
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
  image: string;
  bullets: string[];
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
      desc: "Internal assistants for employees, operations teams, HR, support, legal, and knowledge workers.",
      image: "/assets/Home-page/we-imagine/gen/we-design-intelligent.png",
      bullets: ["Custom LLMs", "Secure Agent Workflows", "Enterprise Search"]
    },
    {
      title: "Document AI Platforms",
      desc: "OCR, document extraction, policy intelligence, claims processing, contract review, and document search.",
      image: "/assets/Home-page/we-imagine/gen/we-transform-legacy.png",
      bullets: ["Intelligent Extraction", "Vector Indexing", "Automated Compliance"]
    },
    {
      title: "Conversational AI Systems",
      desc: "Customer support bots, internal help assistants, knowledge assistants, and AI-enabled service workflows.",
      image: "/assets/Home-page/we-imagine/gen/we-manage-operations.png",
      bullets: ["24/7 Automation", "Multilingual Support", "Contextual Memory"]
    },
    {
      title: "AI-Powered Workflow Automation",
      desc: "Intelligent task routing, ticket classification, summarization, recommendation engines, and process acceleration.",
      image: "/assets/Home-page/we-imagine/gen/we-build-software.png",
      bullets: ["Task Orchestration", "Predictive Routing", "Data Synthesis"]
    },
    {
      title: "Predictive Business Intelligence",
      desc: "Forecasting, anomaly detection, churn prediction, financial scoring, and operational trend analysis.",
      image: "/assets/Home-page/we-imagine/gen/we-design-intelligent.png",
      bullets: ["Real-time Analytics", "Risk Modeling", "Market Forecasting"]
    },
    {
      title: "Industry-Specific AI Solutions",
      desc: "AI use cases tailored to finance, healthcare, telecom, retail, manufacturing, and public sector operations.",
      image: "/assets/Home-page/we-imagine/gen/we-transform-legacy.png",
      bullets: ["Regulatory Compliance", "Custom Taxonomies", "Domain-Specific Models"]
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleTimeline.map((step, idx) => {
              const icons = [Search, Layers, Terminal, Workflow, Cloud, Settings];
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutionBlocks.map((block, idx) => (
              <Reveal key={block.title} delay={idx * 0.04} className="h-full">
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900/80 hover:border-rose-500/30 transition-all duration-300 relative group h-full flex flex-col overflow-hidden shadow-lg">
                  
                  {/* Subtle Top-Right Image Integration (like the avatar in EmployeeStories, but as a faded background accent) */}
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-10 group-hover:opacity-30 transition-opacity duration-700 [clip-path:circle(100%_at_100%_0%)]">
                    <img src={block.image} alt={block.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-zinc-900/50" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-3xl" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                      <span className="px-3 py-1 bg-zinc-950/80 border border-zinc-800 text-rose-500/80 text-[10px] font-mono font-bold tracking-widest rounded-full uppercase shadow-sm">
                        Ready to Deploy
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-rose-50 transition-colors">
                      {block.title}
                    </h3>
                    
                    <div className="h-[1px] w-12 bg-rose-500/20 mb-4 group-hover:w-full transition-all duration-500" />
                    
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-medium group-hover:text-zinc-300 transition-colors flex-grow">
                      {block.desc}
                    </p>
                    
                    <div className="mt-auto pt-5 border-t border-zinc-800/60 group-hover:border-zinc-700 transition-colors duration-500">
                      <ul className="space-y-3">
                        {block.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-xs font-bold text-zinc-300 group-hover:text-white transition-colors duration-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)] mt-1 shrink-0" />
                            <span className="leading-tight">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
          <div className="relative max-w-5xl mx-auto mb-16 px-4 md:px-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-24">
              {archLayers.map((layer, idx) => {
                const styles = [
                  { 
                    borderColor: "border-rose-500", 
                    textColor: "text-rose-500", 
                    numPos: "-top-8 -right-4 md:-top-10 md:-right-6", 
                    borderRadius: "rounded-[2.5rem] rounded-tr-2xl", 
                    textAlign: "text-left",
                    alignItems: "items-start"
                  },
                  { 
                    borderColor: "border-rose-500", 
                    textColor: "text-rose-500", 
                    numPos: "-bottom-8 -left-4 md:-bottom-10 md:-left-6", 
                    borderRadius: "rounded-[2.5rem] rounded-bl-2xl", 
                    textAlign: "text-left md:text-right",
                    alignItems: "items-start md:items-end"
                  },
                  { 
                    borderColor: "border-rose-500", 
                    textColor: "text-rose-500", 
                    numPos: "-top-8 -right-4 md:-top-10 md:-right-6", 
                    borderRadius: "rounded-[2.5rem] rounded-tr-2xl", 
                    textAlign: "text-left",
                    alignItems: "items-start"
                  },
                  { 
                    borderColor: "border-rose-500", 
                    textColor: "text-rose-500", 
                    numPos: "-bottom-8 -left-4 md:-bottom-10 md:-left-6", 
                    borderRadius: "rounded-[2.5rem] rounded-bl-2xl", 
                    textAlign: "text-left md:text-right",
                    alignItems: "items-start md:items-end"
                  },
                ];
                
                const style = styles[idx % styles.length];

                return (
                  <Reveal key={layer.num} delay={idx * 0.1}>
                    <div className={`relative p-8 md:p-10 border-[2px] ${style.borderColor} ${style.borderRadius} bg-black group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] h-full flex flex-col`}>
                      
                      {/* The Giant Cut-out Number */}
                      <div className={`absolute ${style.numPos} bg-black px-4 z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                        <span 
                          className={`text-[3.5rem] md:text-[4.5rem] font-black leading-none ${style.textColor}`}
                          style={{
                            WebkitTextStroke: `2px currentColor`,
                            WebkitTextFillColor: "transparent",
                            textShadow: `0 0 20px currentColor`
                          }}
                        >
                          {layer.num.replace('Layer ', '')}
                        </span>
                      </div>

                      {/* Content */}
                      <div className={`flex flex-col gap-4 relative z-0 ${style.alignItems} ${style.textAlign} flex-grow`}>
                        
                        {/* Decorative Inner Graphic */}
                        <div className={`w-10 h-10 rounded-full border-2 ${style.borderColor} flex items-center justify-center mb-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300 shrink-0`}>
                          <div className={`w-1.5 h-1.5 rounded-full bg-current ${style.textColor} animate-pulse`} />
                        </div>

                        <h3 className={`text-lg md:text-xl font-extrabold uppercase tracking-wide ${style.textColor}`}>
                          {layer.name}
                        </h3>
                        <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed max-w-[90%]">
                          {layer.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
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
      <section className="w-full py-24 bg-[#030303] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">
            
            {/* Left Column: Text & Sticky Nav */}
            <div className="lg:w-1/3 flex flex-col items-start text-left lg:sticky lg:top-32">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Vertical Focus
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
                  AI Use Cases We Explore
                </h2>
                <p className="text-zinc-400 text-base leading-relaxed mb-10">
                  Targeted implementations mapping cognitive features directly to standard enterprise operational divisions.
                </p>

                {/* Tab Selector */}
                <div className="flex flex-col gap-3 w-full">
                  {industryUseCases.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveTab(cat.name)}
                      className={`flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-300 w-full ${
                        activeTab === cat.name
                          ? "bg-rose-500/10 text-white border-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                          : "bg-[#0A0A0A] text-zinc-400 border-zinc-800/80 hover:text-zinc-200 hover:border-zinc-700/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] font-bold uppercase tracking-wider">{cat.name}</span>
                      </div>
                      <ChevronRight size={14} className={activeTab === cat.name ? "text-rose-500" : "text-zinc-600"} />
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(industryUseCases.find((c) => c.name === activeTab)?.items || []).map((item, idx) => (
                <Reveal key={item} delay={idx * 0.05} className="h-full">
                  <div className="group relative h-[240px] sm:h-[260px] cursor-default [perspective:1000px]">
                    <div className="absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      
                      {/* Front Face */}
                      <div className="absolute inset-0 w-full h-full flex flex-col justify-start bg-[#0A0A0A] border border-zinc-800/80 rounded-2xl p-6 shadow-sm [backface-visibility:hidden]">
                        <div className="w-10 h-10 mb-4 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-rose-500 transition-colors">
                          <Activity size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-bold text-[15px] text-zinc-100 mb-2 leading-relaxed">
                          {item}
                        </h3>
                        <p className="text-[13px] text-zinc-500 leading-relaxed flex-1 line-clamp-2">
                          Enterprise-grade deployment ready for {activeTab.toLowerCase()} workflows.
                        </p>
                        <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 mt-auto opacity-70 transition-opacity">
                          View Details <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>

                      {/* Back Face */}
                      <div className="absolute inset-0 w-full h-full flex flex-col rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-rose-500/50 bg-zinc-950">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.4)_0%,transparent_100%)]" />
                        
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                           <div className="w-10 h-10 mb-4 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500">
                             <Sparkles size={16} />
                           </div>
                           <h3 className="font-bold text-[15px] text-white mb-2 leading-relaxed">{item}</h3>
                           <p className="text-[12px] text-zinc-400 mb-4">Leverage cognitive intelligence to optimize {activeTab.toLowerCase()} operational metrics.</p>
                           <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 cursor-pointer">
                             Explore Implementation <ArrowUpRight size={12} />
                           </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Reveal>
              ))}
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
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  Rigorous performance baselines and continuous quality validation to ensure deployment safety and bottom-line value.
                </p>

                {/* Manifesto-style Stats */}
                <div className="space-y-6 text-xl md:text-2xl font-light text-zinc-300 mt-10 pt-6 border-t border-white/[0.04]">
                  <p className="hover:text-white transition-colors cursor-default flex items-center gap-4">
                    <span className="font-semibold text-rose-500">Faster</span>
                    <span className="font-medium text-white">AI iteration cycles</span>
                  </p>
                  <p className="hover:text-white transition-colors cursor-default flex items-center gap-4">
                    <span className="font-semibold text-rose-500">Higher</span>
                    <span className="font-medium text-white">inference accuracy</span>
                  </p>
                  <p className="hover:text-white transition-colors cursor-default flex items-center gap-4">
                    <span className="font-semibold text-rose-500">Lower</span>
                    <span className="font-medium text-white">compute overhead</span>
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right side metrics and value list */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {labDeliverables.map((item, idx) => {
                const icons = [Activity, Workflow, Shield, Cpu, Database, Search, Layers, Brain];
                const Icon = icons[idx % icons.length];
                return (
                  <Reveal key={item.title} delay={idx * 0.05} className="h-full">
                    <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-900 hover:border-rose-500/30 transition-all duration-300 h-full flex flex-col">
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center mb-5 group-hover:bg-rose-500/20 group-hover:text-rose-500 transition-colors duration-300 border border-zinc-700 group-hover:border-rose-500/30 text-zinc-400 shadow-inner shrink-0">
                          <Icon size={18} />
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-rose-500 transition-colors duration-300 leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 9. WHY DEVOpstrio AI LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Heading & Stats */}
            <div className="sticky top-32">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4">
                  Why Devopstrio
                </span>
                <h2 className="text-xl md:text-2xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                  Why Organizations Work with the <span className="text-rose-500">Devopstrio AI Lab</span>
                </h2>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium mb-10">
                  We focus on enterprise integrations that generate measurable cost optimizations. Our innovation labs deliver measurable outcomes through engineered precision.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-zinc-800/50">
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">250+</p>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-2">Enterprises</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">99.9%</p>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-2">Uptime SLAs</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">24/7</p>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-2">Global Support</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Initiative cards */}
            <div className="space-y-4">
              {whyWorkWithUs.map((item, idx) => {
                const icons = [CheckCircle, Cloud, Search, Workflow, Settings, Activity, Database, Terminal, Shield, Network, Cpu, Layers];
                const Icon = icons[idx % icons.length];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex gap-5 items-start bg-zinc-950/40 border border-white/[0.03] rounded-2xl p-6 hover:border-rose-500/30 transition-all duration-300 group hover:bg-zinc-900/40"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-rose-500/10 group-hover:border-rose-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-rose-400 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold tracking-wide text-sm md:text-base mb-1.5">{item.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

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
