"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Database,
  BarChart3,
  Network,
  Terminal,
  Activity,
  ChevronRight,
  Cpu,
  Layers,
  CheckCircle,
  Workflow,
  LineChart,
  Settings,
  Sparkles,
  Search,
  Cloud,
  Shield,
  Zap
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

export default function DataAnalyticsInnovationLabPage() {
  const [activeTab, setActiveTab] = useState<string>("Executive Performance Reporting");


  // 2) Mini overview cards
  const miniMissionCards = [
    {
      title: "Unified Data Foundations",
      desc: "Bring together fragmented data across applications, business units, and operational systems into a single, structured ecosystem."
    },
    {
      title: "Trusted Reporting & Insights",
      desc: "Build reliable dashboards, KPIs, and reporting layers that help teams make faster, more confident decisions."
    },
    {
      title: "Real-Time Intelligence",
      desc: "Enable streaming data, live operational visibility, and event-driven analytics for time-sensitive business workflows."
    },
    {
      title: "AI-Ready Data Platforms",
      desc: "Prepare clean, governed, and scalable data environments that support predictive analytics and AI-driven innovation."
    }
  ];

  // 3) Core Areas of Data & Analytics Innovation
  const innovationAreas: CoreArea[] = [
    {
      title: "Modern Data Platform Engineering",
      desc: "Design cloud-native data platforms that centralize enterprise data across applications, operations, customer systems, and business workflows.",
      icon: <Database className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Data Pipeline & Integration Engineering",
      desc: "Build reliable ingestion, transformation, and orchestration pipelines that move data efficiently between source systems, cloud platforms, and analytics environments.",
      icon: <Workflow className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Analytics Engineering & Semantic Modeling",
      desc: "Structure raw data into clean, business-ready models that support consistent reporting, KPI tracking, and self-service analytics across teams.",
      icon: <Layers className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Business Intelligence & Executive Dashboards",
      desc: "Create interactive dashboards, leadership reporting layers, and visual analytics experiences that turn complex data into actionable insight.",
      icon: <BarChart3 className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Real-Time & Streaming Analytics",
      desc: "Enable event-driven data pipelines, operational dashboards, and near real-time analytics for monitoring, alerts, and decision support.",
      icon: <Activity className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Data Governance, Quality & Trust",
      desc: "Improve data accuracy, consistency, lineage, validation, and stewardship through governance controls and quality monitoring frameworks.",
      icon: <Settings className="w-5 h-5 text-rose-500" />
    },
    {
      title: "AI & Machine Learning Data Readiness",
      desc: "Prepare analytics environments for forecasting, recommendation engines, anomaly detection, and AI use cases with high-quality, well-structured data.",
      icon: <Cpu className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Data Strategy & Insight Operating Models",
      desc: "Help organizations define the right architecture, reporting model, governance standards, and analytics operating approach to scale insight delivery.",
      icon: <LineChart className="w-5 h-5 text-rose-500" />
    }
  ];

  // 4) Lifecycle Framework
  const lifecycleTimeline: TimelineStep[] = [
    {
      num: "01",
      title: "Discover",
      desc: "Assess data sources, reporting gaps, quality issues, decision workflows, business KPIs, and platform limitations."
    },
    {
      num: "02",
      title: "Architect",
      desc: "Define the target data platform, ingestion approach, transformation model, reporting layer, governance standards, and operating model."
    },
    {
      num: "03",
      title: "Integrate",
      desc: "Connect source systems, applications, files, APIs, and operational platforms into structured ingestion pipelines."
    },
    {
      num: "04",
      title: "Transform",
      desc: "Clean, standardize, model, and enrich data into analytics-ready structures aligned to business use cases and reporting needs."
    },
    {
      num: "05",
      title: "Visualize",
      desc: "Build dashboards, BI workspaces, performance reports, and operational analytics views for teams, managers, and executives."
    },
    {
      num: "06",
      title: "Optimize",
      desc: "Improve pipeline performance, data quality, reporting trust, governance, and AI readiness as data maturity evolves."
    }
  ];

  // 5) Solutions Built in the Lab
  const solutionBlocks: SolutionBlock[] = [
    {
      title: "Enterprise Data Platform Foundations",
      desc: "Cloud-based data platforms that consolidate data from ERP, CRM, finance, product, support, and operational systems."
    },
    {
      title: "Executive Reporting & KPI Dashboards",
      desc: "Leadership dashboards and reporting environments designed to track performance, risk, revenue, operations, and strategic KPIs."
    },
    {
      title: "Analytics Engineering & Reporting Models",
      desc: "Business-ready data models that standardize metrics, simplify reporting logic, and improve consistency across departments."
    },
    {
      title: "Real-Time Operational Analytics",
      desc: "Streaming data pipelines and live dashboards for operations monitoring, workflow visibility, event tracking, and response management."
    },
    {
      title: "Customer & Product Intelligence Platforms",
      desc: "Analytics foundations that help organizations understand customer behavior, engagement trends, product usage, and conversion patterns."
    },
    {
      title: "Data Governance & Quality Frameworks",
      desc: "Policies, validation layers, lineage visibility, and stewardship models that improve trust in reporting and analytics outputs."
    },
    {
      title: "AI-Ready Data Lakehouse Environments",
      desc: "Structured, scalable data environments designed to support machine learning, forecasting, and advanced analytics initiatives."
    },
    {
      title: "Cross-Functional Data Integration Ecosystems",
      desc: "Integrated architectures that connect multiple business systems into a unified analytics environment without fragmented reporting silos."
    }
  ];

  // 6) Architecture layers
  const archLayers: ArchLayer[] = [
    {
      num: "LAYER 1",
      name: "Source Systems",
      desc: "ERP systems • CRM platforms • HR / finance applications • product applications • support platforms • marketing systems • spreadsheets / flat files • external APIs / third-party data"
    },
    {
      num: "LAYER 2",
      name: "Ingestion & Integration",
      desc: "ETL / ELT pipelines • API ingestion • batch sync jobs • event / stream ingestion • orchestration workflows • data connectors"
    },
    {
      num: "LAYER 3",
      name: "Storage & Processing",
      desc: "cloud data warehouse • data lake / lakehouse • staging zones • transformation jobs • processing engines • analytics-ready marts"
    },
    {
      num: "LAYER 4",
      name: "Modeling & Governance",
      desc: "semantic models • business metrics layer • quality checks • lineage tracking • master data rules • governance controls"
    },
    {
      num: "LAYER 5",
      name: "Analytics & Consumption",
      desc: "executive dashboards • BI reports • self-service analytics • operational monitoring dashboards • embedded analytics • ad hoc exploration"
    },
    {
      num: "LAYER 6",
      name: "AI / Advanced Intelligence Layer",
      desc: "forecasting models • anomaly detection • recommendation engines • segmentation models • copilots / AI analytics assistants • decision intelligence workflows"
    }
  ];

  const techChips = [
    "Azure Data / Microsoft Fabric stack",
    "AWS analytics stack",
    "Google Cloud analytics stack",
    "Snowflake / BigQuery / Synapse",
    "dbt / orchestration / transformation tooling",
    "Power BI / Looker / Tableau BI layers",
    "Kafka / event streaming pipelines",
    "ML / notebook / model-serving integrations"
  ];

  // 7) Use Cases
  const industryUseCases: IndustryUseCase[] = [
    {
      name: "Executive Performance Reporting",
      items: [
        "Leadership dashboards that unify operational, financial, delivery, and growth metrics in one trusted reporting environment."
      ]
    },
    {
      name: "Customer Analytics & Segmentation",
      items: [
        "Insight models for customer behavior, churn signals, engagement trends, and campaign or product performance analysis."
      ]
    },
    {
      name: "Revenue, Sales & Commercial Intelligence",
      items: [
        "Reporting systems that improve visibility into pipeline health, revenue trends, account performance, and growth opportunities."
      ]
    },
    {
      name: "Operations & Delivery Analytics",
      items: [
        "Dashboards for service performance, team productivity, delivery SLAs, support metrics, and platform operations."
      ]
    },
    {
      name: "Real-Time Monitoring & Alerts",
      items: [
        "Streaming analytics environments that surface live events, exceptions, anomalies, and operational changes as they happen."
      ]
    },
    {
      name: "AI & Predictive Data Foundations",
      items: [
        "Clean, governed, model-ready data platforms that support forecasting, classification, recommendations, and intelligent automation."
      ]
    }
  ];

  // 8) Outcomes
  const labDeliverables: Deliverable[] = [
    { title: "Faster, better-informed decision-making" },
    { title: "Unified reporting across fragmented systems" },
    { title: "Higher confidence in data quality and KPIs" },
    { title: "Real-time visibility into operations and performance" },
    { title: "Reduced manual reporting effort" },
    { title: "Stronger foundation for AI and advanced analytics" }
  ];

  const stats = [
    { value: "faster", label: "reporting cycles" },
    { value: "improved", label: "data quality confidence" },
    { value: "reduced", label: "manual spreadsheet work" },
    { value: "higher", label: "analytics adoption across teams" },
    { value: "faster", label: "access to executive KPIs" }
  ];

  // 9) Why work with us
  const whyWorkWithUs: WhyChoose[] = [
    {
      title: "We connect business goals to data architecture",
      desc: "We don’t build data platforms in isolation — we design them around the reporting, visibility, automation, and decision-making outcomes the business actually needs."
    },
    {
      title: "We combine engineering, analytics, and cloud capability",
      desc: "Our teams bring together platform engineering, data integration, analytics modeling, BI, and cloud delivery expertise in one execution model."
    },
    {
      title: "We design for trust, not just dashboards",
      desc: "Strong analytics depends on data quality, consistency, lineage, and governance — not just attractive reports. We build the foundations behind trustworthy insight."
    },
    {
      title: "We support both operational and executive intelligence",
      desc: "From live monitoring dashboards to board-level KPI reporting, we create data experiences for every layer of the enterprise."
    },
    {
      title: "We prepare data for what comes next",
      desc: "Our platforms are designed not only for today’s reporting needs, but also for AI, predictive analytics, automation, and future-scale intelligence use cases."
    },
    {
      title: "We build long-term analytics maturity",
      desc: "We help organizations evolve from fragmented reporting to repeatable, governed, scalable analytics operating models that continue to improve over time."
    }
  ];

  // 10) Related labs
  const relatedLabs: RelatedLab[] = [
    {
      name: "AI Innovation Lab",
      desc: "R&D and applied innovation for enterprise machine learning.",
      href: "/ecosystem/innovation-labs/ai-lab"
    },
    {
      name: "Cloud Innovation Lab",
      desc: "Enterprise landing zones, platform engineering, and hybrid cloud migrations.",
      href: "/ecosystem/innovation-labs/cloud-lab"
    },
    {
      name: "DevOps Innovation Lab",
      desc: "Autonomous GitOps pipelines, self-service developer portals, and SRE models.",
      href: "/ecosystem/innovation-labs/devops-lab"
    },
    {
      name: "Cybersecurity Lab",
      desc: "Zero Trust security frameworks, DevSecOps compliance, and threat containment.",
      href: "/ecosystem/innovation-labs/cybersecurity-lab"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <Hero
        badge="Data & Analytics Innovation Lab"
        floatingLines={true}
        floatingLinesStartColor="#f43f5e"
        floatingLinesMidColor="#f59e0b"
        floatingLinesEndColor="#a855f7"
        title={
          <>
            Building the Data Backbone of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Modern Digital Enterprises
            </span>
          </>
        }
        subtitle="Consolidating fragmented data silos into high-performance, petabyte-scale cloud lakehouses and real-time event streaming pipelines."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "INNOVATION LABS", href: "/ecosystem/innovation-labs" },
          { label: "DATA & ANALYTICS LAB" },
        ]}
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Book a Data Strategy Session
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Analytics Experts
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
                  Building the Data Backbone <br />
                  <span className="text-rose-500">of Modern Digital Enterprises</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  The Devopstrio Data & Analytics Lab is focused on designing scalable data ecosystems that turn operational, customer, financial, and product data into meaningful business intelligence. From ingestion pipelines and cloud data platforms to analytics models, executive dashboards, and governance frameworks, we help organizations move from siloed reporting to connected, decision-ready intelligence.
                </p>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  We work across the full data lifecycle — integrating data from multiple systems, structuring it for analytics, improving quality and trust, enabling real-time visibility, and laying the groundwork for advanced AI and machine learning initiatives.
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

      {/* 3. CORE INNOVATION AREAS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Capabilities
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Core Areas of <span className="text-rose-500">Data & Analytics Innovation</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              The primary capability vectors driving cloud database consolidation, transformation orchestration, and self-service dashboards.
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

      {/* 4. LIFECYCLE / OPERATING MODEL */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-left max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Operating Framework
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              How the Data & Analytics Lab Builds <span className="text-rose-500">Insight-Driven Platforms</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              A structured lifecycle process ensuring pipeline stability, data completeness, and dashboard trustworthiness.
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

      {/* 5. SOLUTIONS BUILT IN THE LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Deliverables
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Data & Analytics Solutions Built <span className="text-rose-500">Inside the Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Deployable architectures and analytical modules designed for the enterprise.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {solutionBlocks.map((block, idx) => {
              const icons = [Cloud, Search, Database, Shield, Cpu, Activity, Workflow, CheckCircle];
              const Icon = icons[idx % icons.length];
              return (
                <Reveal key={block.title} delay={idx * 0.04} className="h-full">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900/80 hover:border-rose-500/30 transition-all duration-500 relative group h-full flex flex-col justify-between shadow-lg">
                    
                    {/* Glassmorphic Sheen & Quote-like Icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-3xl" />
                    <Icon className="absolute top-8 right-8 text-zinc-800/40 w-12 h-12 group-hover:text-rose-500/20 transition-colors duration-500" strokeWidth={1} />
                    
                    <div className="relative z-10">
                      <div className="mb-6">
                        <span className="px-3 py-1 bg-zinc-950/80 border border-zinc-800 text-rose-500/80 text-[10px] font-mono font-bold tracking-widest rounded-full uppercase shadow-sm">
                          Ready to Deploy
                        </span>
                      </div>
                      
                      <h4 className="text-base md:text-lg font-bold text-white tracking-wide leading-tight mb-4 pr-12 group-hover:text-rose-50 transition-colors">
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
                  Our Data & Analytics Innovation <span className="text-rose-500">Reference Architecture</span>
                </h2>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium mb-10">
                  A complete data flow structure from multiple source pipelines to decision intelligence.
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
              Data & Analytics Use Cases We Engineer <span className="text-rose-500">Across the Enterprise</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Custom data engineering models built to power modern digital organizations.
            </p>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* LEFT: Topics List (Compact) */}
            <div className="flex flex-row lg:flex-col gap-2.5 lg:w-[280px] xl:w-[320px] shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 w-full snap-x snap-mandatory scrollbar-none">
              {industryUseCases.map((cat, idx) => {
                const icons = [Cloud, Workflow, Activity, Shield, Settings, Cpu, Database, Terminal, Network, Layers, Zap, Sparkles];
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
                      <p className="font-bold text-xs leading-tight tracking-wide uppercase">{cat.name}</p>
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
                    const icons = [Cloud, Workflow, Activity, Shield, Settings, Cpu, Database, Terminal, Network, Layers, Zap, Sparkles];
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
                    const icons = [Cloud, Workflow, Activity, Shield, Settings, Cpu, Database, Terminal, Network, Layers, Zap, Sparkles];
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

      {/* 8. INNOVATION OUTCOMES / IMPACT */}
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
                  Outcomes the Data & Analytics Lab <br />
                  <span className="text-rose-500">Helps Deliver</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  Key outcomes and metrics demonstrating mature enterprise data architectures.
                </p>

                {/* Manifesto-style Stats */}
                <div className="space-y-6 text-xl md:text-2xl font-light text-zinc-300 mt-10 pt-6 border-t border-white/[0.04]">
                  {stats.map((stat) => (
                    <p key={stat.label} className="hover:text-white transition-colors cursor-default flex items-center gap-4">
                      <span className="font-semibold text-rose-500">{stat.value}</span>
                      <span className="font-medium text-white">{stat.label}</span>
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right side metrics and value list */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {labDeliverables.map((item, idx) => {
                const icons = [Activity, Workflow, Shield, Cpu, Database, Search, Layers, Cloud];
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

      {/* 9. WHY DEVOPSTRIO DATA & ANALYTICS LAB */}
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
                  Why Organizations Build Data Intelligence with <span className="text-rose-500">Devopstrio</span>
                </h2>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium mb-10">
                  We design secure data platforms around your real reporting goals and compliance rules. Our innovation labs deliver measurable outcomes through engineered precision.
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
                Data Engineering
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-5">
                Ready to turn fragmented data into business intelligence at scale?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Partner with the Devopstrio Data & Analytics Lab to build modern data platforms, real-time reporting ecosystems, analytics-ready architectures, and trusted decision intelligence across your enterprise.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
                >
                  Book a Data Strategy Session
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Talk to Analytics Experts
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
