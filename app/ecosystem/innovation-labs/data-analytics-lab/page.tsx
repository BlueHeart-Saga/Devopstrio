"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Database,
  BarChart3,
  Network,
  Terminal,
  Activity,
  ChevronDown,
  ChevronRight,
  Cpu,
  Layers,
  CheckCircle2,
  Sparkles,
  Workflow,
  LineChart
} from "lucide-react";
import Link from "next/link";

export default function DataAnalyticsInnovationLabPage() {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Hero highlights
  const heroHighlights = [
    "Modern Data Platforms",
    "Real-Time Analytics",
    "Business Intelligence",
    "AI-Ready Data",
    "Data Warehousing",
    "Data Engineering",
    "Data Science",
    "Data Governance"
  ];

  // Hero metrics
  const heroMetrics = [
    { value: "10M+", label: "Data Records Processed" },
    { value: "50+", label: "Analytics Dashboards" },
    { value: "Real-Time", label: "Data Pipelines" },
    { value: "Enterprise", label: "Data Platforms" }
  ];

  // Data Innovation Domains
  const dataDomains = [
    {
      title: "Data Engineering",
      desc: "Constructing robust batch and streaming ingest structures (ETL/ELT) to process enterprise transaction volumes.",
      icon: <Workflow className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Business Intelligence",
      desc: "Creating responsive, interactive executive dashboards that surface key performance indicators and operational metrics.",
      icon: <BarChart3 className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Data Warehousing",
      desc: "Deploying high-performance, petabyte-scale cloud warehouses using column-oriented storage models.",
      icon: <Database className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Data Science",
      desc: "Structuring clean datasets, training forecasting algorithms, and registering features for predictive models.",
      icon: <Cpu className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Real-Time Analytics",
      desc: "Ingesting live transactional event streams to update operational dashboards with sub-second latency.",
      icon: <Activity className="w-6 h-6 text-rose-500" />
    },
    {
      title: "AI-Ready Data Platforms",
      desc: "Unifying structured and unstructured data repositories with semantic layouts ready for large language model context.",
      icon: <Layers className="w-6 h-6 text-rose-500" />
    }
  ];

  // Analytics Solutions Portfolio
  const solutionsPortfolio = [
    {
      name: "Enterprise Data Platform",
      tagline: "Lakehouse Foundations",
      desc: "Implementing consolidated transactional lakes supporting simultaneous BI reporting and model training runs."
    },
    {
      name: "Business Intelligence",
      tagline: "Actionable Reports",
      desc: "Configuring Power BI and Tableau report templates linked directly to cloud warehousing resources."
    },
    {
      name: "Executive Dashboards",
      tagline: "Single Pane Of Glass",
      desc: "Consolidating company-wide financial, product operational, and customer metrics into unified interfaces."
    },
    {
      name: "Predictive Analytics",
      tagline: "Machine Learning Models",
      desc: "Setting up predictive forecast models to estimate inventory requirements and customer churn."
    },
    {
      name: "Customer Analytics",
      tagline: "Personalized Insights",
      desc: "Gathering clickstreams and user touchpoint telemetry to understand segment behaviors."
    },
    {
      name: "Data Governance",
      tagline: "Compliance Controls",
      desc: "Enforcing unified access controls, data catalogs, and lifecycle rules across data repositories."
    }
  ];

  // Real-Time Intelligence
  const realTimeCapabilities = [
    { title: "Streaming Analytics", desc: "Running live queries on event messages before they get written to cold storage files." },
    { title: "Operational Dashboards", desc: "Updating floor machinery statuses and sales figures automatically as transactions happen." },
    { title: "Predictive Models", desc: "Evaluating fraud indicators instantly on incoming financial transaction payloads." },
    { title: "Data Visualization", desc: "Rendering live status charts with real-time WebSocket updates." },
    { title: "KPI Monitoring", desc: "Sending notifications instantly to managers if server response latency breaches limits." },
    { title: "Decision Intelligence", desc: "Using automated system actions driven by real-time analytics data pipelines." }
  ];

  // Data Delivery Framework
  const dataFramework = [
    { phase: "Collect", title: "Data Ingestion", desc: "Connecting database connectors, clickstreams, and public api feeds." },
    { phase: "Integrate", title: "Lakehouse Storage", desc: "Cleaning messy tables, deduplicating events, and consolidating schemas." },
    { phase: "Process", title: "Warehouse Optimization", desc: "Compacting delta files, managing column partitions, and caching query views." },
    { phase: "Analyze", title: "Visual Analytics", desc: "Publishing semantic datasets, linking BI charts, and running prediction loops." }
  ];

  // Analytics Impact
  const impactStats = [
    { value: "70%", label: "Faster Reporting" },
    { value: "50%", label: "Better Data Visibility" },
    { value: "Real-Time", label: "Insights Enabled" },
    { value: "AI-Ready", label: "Data Foundation" }
  ];

  const successStories = [
    {
      title: "Executive BI Platform",
      challenge: "A retail client had siloed spreadsheets across 5 local offices, delaying monthly reporting tasks.",
      solution: "Consolidated databases into Microsoft Fabric and designed automated Power BI models.",
      result: "70% faster reporting, saving managers hundreds of hours of manual compilation each month."
    },
    {
      title: "Customer Analytics Solution",
      challenge: "An e-commerce app couldn't track customer cart abandonment triggers, leading to lost sales.",
      solution: "Built Apache Kafka streaming ingest pipelines to capture and model user event clickstreams.",
      result: "50% better data visibility and real-time personalized email triggers that recovered abandoned carts."
    },
    {
      title: "Enterprise Data Modernization",
      challenge: "A logistics company struggled with slow query runtimes on legacy SQL databases, blocking daily forecasts.",
      solution: "Migrated data layers to a modern Snowflake Lakehouse warehouse with optimized partitions.",
      result: "Daily forecast queries completed in 2 minutes instead of 8 hours, with auto-scaling warehouse costs."
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "What is the core focus of the Data & Analytics Innovation Lab?",
      a: "The lab focuses on building modern enterprise data platforms, streaming pipelines, real-time analytics dashboards, and AI-ready data warehouses."
    },
    {
      q: "What modern data architectures do you implement?",
      a: "We construct modern Lakehouse architectures, multi-source ingestion systems, and transactional lakes using tools like Databricks, Snowflake, and Apache Iceberg."
    },
    {
      q: "What is Microsoft Fabric and how does the lab deploy it?",
      a: "Fabric is an all-in-one analytics solution. We construct Fabric landing zones, configure OneLake boundaries, build Synapse pipelines, and establish Power BI portals."
    },
    {
      q: "How do you implement real-time streaming pipelines?",
      a: "We utilize Apache Kafka and Azure Event Hubs to process transactional event clickstreams, executing real-time analytics before data reaches the warehouse."
    },
    {
      q: "What is the role of Data Governance in the lab?",
      a: "We deploy automated metadata catalogs, credential management rules, data lineage maps, and compliance labels using Microsoft Purview and Unity Catalog."
    },
    {
      q: "How does the Data Lab support machine learning projects?",
      a: "We build optimized feature stores, configure model training ingestion pipelines, and organize clean, structured datasets for LLMs."
    },
    {
      q: "What Business Intelligence (BI) tools do you support?",
      a: "We standardize on Power BI, Tableau, and custom web dashboards, creating responsive executive views and operational KPIs."
    },
    {
      q: "How do you optimize query performance and lower storage bills?",
      a: "We implement column-indexing standards, configure cold storage lifecycles, and build caching layers to minimize warehouse runtimes."
    },
    {
      q: "Do you support legacy database migrations?",
      a: "Yes. We help migrate local SQL databases to cloud-managed servers like Azure SQL, AWS Aurora, and Snowflake with zero down-time."
    },
    {
      q: "How can we start a data architecture modernization with Devopstrio?",
      a: "You can book a Data Discovery Workshop where our data engineers audit your data sources, evaluate latency requirements, and design a customized Lakehouse roadmap."
    }
  ];

  // Related connections
  const relatedConnections = [
    { name: "AI Innovation Lab", desc: "Custom-trained models, agentic workflows, and secure cognitive workspaces.", href: "/ecosystem/innovation-labs/ai-lab" },
    { name: "Cloud Innovation Lab", desc: "Cloud-native platform engineering, Landing Zones, and multi-cloud architectures.", href: "/ecosystem/innovation-labs/cloud-lab" },
    { name: "Oracle Partnership", desc: "Database modernization and enterprise ERP database migrations.", href: "/ecosystem/partnerships/oracle" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <Hero
        badge="Data & Analytics Innovation Lab"
        title={
          <>
            Transforming Enterprise Data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              into Actionable Intelligence
            </span>
          </>
        }
        subtitle="Empowering enterprises with modern Lakehouse platforms, real-time analytics streaming pipelines, corporate business intelligence, and AI-ready data foundations."
        bgImage="/assets/ecosystem/sub-page-hero/ecosystem_Innovation_labs/data.png"
        stats={heroMetrics}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "INNOVATION LABS", href: "/ecosystem/innovation-labs" },
          { label: "DATA & ANALYTICS LAB" },
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Talk To Data Experts
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
        <Link
          href="/contact"
          className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
        >
          Start Analytics Assessment
        </Link>
      </Hero>

      {/* 2. DATA INNOVATION DOMAINS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              RESEARCH DOMAINS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Data Innovation <span className="text-rose-500">Domains</span>
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-medium">
              Engineering streaming infrastructure, predictive reporting, and cloud-scale catalogs.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataDomains.map((domain, idx) => (
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

      {/* 3. MODERN DATA ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.01] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DATA LAKEHOUSE BLUEPRINT
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Modern Data <span className="text-rose-500">Architecture</span>
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-medium">
              Automated ingestion pipelines feeding high-performance warehousing tables and BI layers.
            </p>
          </Reveal>

          {/* Technical Stack Architecture Diagram */}
          <div className="max-w-4xl mx-auto bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/[0.02] rounded-full blur-xl pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10 font-mono">

              {/* Layer 1 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">01. Data Sources</span>
                <span className="text-xs text-zinc-400 font-bold">SQL databases, public app APIs, web tracking logs, file repositories</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 2 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">02. Ingestion Layer</span>
                <span className="text-xs text-zinc-400 font-bold">Batch data flows, Apache Kafka clickstreams, streaming event hubs</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 3 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">03. Data Lake</span>
                <span className="text-xs text-zinc-400 font-bold">Delta Lake, Apache Iceberg, storage buckets, OneLake enclaves</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 4 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">04. Warehouse</span>
                <span className="text-xs text-zinc-400 font-bold">Snowflake nodes, Databricks compute, columnar index schemas</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 5 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">05. Analytics Layer</span>
                <span className="text-xs text-zinc-400 font-bold">Feature registers, forecasting algorithms, structured sql views</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 6 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">06. Business Intelligence</span>
                <span className="text-xs text-zinc-400 font-bold">Power BI dashboards, executive analytics portals, reporting catalogs</span>
              </div>

            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 select-none mt-12">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Technology Layer:</span>
            {["Microsoft Fabric", "Databricks", "Snowflake", "Power BI", "Apache Kafka", "PostgreSQL"].map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ANALYTICS SOLUTIONS PORTFOLIO */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Analytics Solutions <span className="text-rose-500">Portfolio</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsPortfolio.map((sol, idx) => (
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

      {/* 5. REAL-TIME INTELLIGENCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              STREAMING ANALYTICS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Real-Time <span className="text-rose-500">Intelligence</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realTimeCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500 font-bold font-mono text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DATA DELIVERY FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DELIVERY PIPELINES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Data Delivery <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {dataFramework.map((step, idx) => (
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
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Methodology:</span>
            {["Collect", "Integrate", "Process", "Analyze"].map((srv) => (
              <span key={srv} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {srv}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ANALYTICS IMPACT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  METRICS & CASES
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
                  Analytics Lab <span className="text-rose-500">Impact</span>
                </h2>
                <p className="text-zinc-350 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
                  Accelerating monthly report compile routines and enabling sub-second telemetry dashboards.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-6 select-none">
                {impactStats.map((item, idx) => (
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
                    Analytics Case Study
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
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  DATA QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our data engineering, Microsoft Fabric connections, and warehouse query audits.
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
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
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              GET STARTED
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Turn Data Into <span className="text-rose-500">Strategic Advantage</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Partner with our Data & Analytics Innovation Lab to consolidate your databases, run real-time queries, and establish solid BI views.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk To Data Experts
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Analytics Assessment
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
