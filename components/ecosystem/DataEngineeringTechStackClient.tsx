"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ChevronLeft, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud,
  Search, Smartphone, Phone, Mail, MessageCircle, MessageSquare, Twitter, Headset, Smile, User, Star, Map,
  BrainCircuit, Bot, Lightbulb, TrendingUp, CheckCircle, Target, Compass, Blocks, Code, FastForward,
  GitCommit, Repeat, FileCode2, PieChart, LineChart, Link as LinkIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 1. OVERVIEW
// ==========================================
const DataEngineeringOverview = () => {
  const cards = [
    { title: "Data Integration", desc: "Connect disparate enterprise systems.", icon: LinkIcon, href: "/ecosystem/technology-stack/data-engineering/modern-warehousing-schemas" },
    { title: "ETL / ELT Pipelines", desc: "Automate reliable data movement.", icon: Repeat, href: "/ecosystem/technology-stack/data-engineering/data-lakes-storage" },
    { title: "Data Warehousing", desc: "Centralize analytics-ready data.", icon: Database, href: "/ecosystem/technology-stack/data-engineering/modern-warehousing-schemas" },
    { title: "Real-Time Streaming", desc: "Process live event data.", icon: Zap, href: "/ecosystem/technology-stack/data-engineering/real-time-streaming-event-buses" },
    { title: "Data Quality", desc: "Ensure trusted, validated data.", icon: ShieldCheck, href: "/ecosystem/technology-stack/data-engineering/data-compliance-governance" },
    { title: "Analytics Foundation", desc: "Power BI, reporting, and AI.", icon: BarChart2, href: "/ecosystem/technology-stack/data-engineering/analytics-processing" }
  ];

  return (
    <section className="relative py-24 bg-[#030303] overflow-hidden border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-3 block">
              CAPABILITIES MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-0">
              Enterprise Data Architecture
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={idx * 0.05}>
                <Link 
                  href={card.href}
                  className="p-8 rounded-3xl bg-[#0D0E12] border border-zinc-800/80 hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 group flex flex-col justify-between h-full min-h-[220px]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-rose-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-rose-500 text-xs font-bold group-hover:text-white transition-colors">
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                    <span>Explore {card.title}</span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 2. DATA ARCHITECTURE LAYERS
// ==========================================
const DataArchitecture = () => {
  const layers = [
    { name: "Real-Time Streaming & Ingestion", desc: "Apache Kafka, Flink, AWS Kinesis, Debezium Change Data Capture", color: "border-blue-500/50 bg-blue-500/10 text-blue-400" },
    { name: "Lakehouse Storage & Open Formats", desc: "Apache Iceberg, Delta Lake, Apache Parquet, S3 / ADLS Gen2", color: "border-indigo-500/50 bg-indigo-500/10 text-indigo-400" },
    { name: "Distributed Transformation & Compute", desc: "dbt Core, Apache Spark, Snowflake, Databricks Photon", color: "border-purple-500/50 bg-purple-500/10 text-purple-400" },
    { name: "Vector Databases & AI Readiness", desc: "Pinecone, pgvector, Weaviate, Milvus, Semantic Embeddings", color: "border-rose-500/50 bg-rose-500/10 text-rose-400" },
    { name: "Data Quality & Lineage Governance", desc: "Great Expectations, Monte Carlo, OpenMetadata, Unity Catalog", color: "border-amber-500/50 bg-amber-500/10 text-amber-400" },
    { name: "Enterprise Orchestration", desc: "Apache Airflow, Prefect, Dagster, Event-Driven Trigger Busses", color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-4xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">ARCHITECTURE FRAMEWORK</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-0">Multi-Tier Enterprise Data Fabric</h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {layers.map((layer, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className={`p-6 border rounded-2xl flex flex-col md:flex-row justify-between items-center text-center md:text-left transition-all duration-300 hover:brightness-125 hover:-translate-y-1 shadow-lg ${layer.color}`}>
                <span className="text-sm md:text-base font-bold uppercase tracking-widest">{layer.name}</span>
                <span className="text-xs md:text-sm font-medium opacity-90 mt-2 md:mt-0 tracking-wide">{layer.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. ENGINEERING SUITE (CAPABILITIES SCROLLER)
// ==========================================
const DataCapabilities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 310;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const capabilities = [
    { title: "Modern Data Warehousing", tag: "Analytics", desc: "Cloud-native warehouses on Snowflake, Databricks, BigQuery, and Redshift.", image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp", href: "/ecosystem/technology-stack/data-engineering/modern-warehousing-schemas" },
    { title: "Real-Time Streaming Pipelines", tag: "Streaming", desc: "Sub-second event streaming with Kafka, Apache Flink, and Spark Streaming.", image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp", href: "/ecosystem/technology-stack/data-engineering/real-time-streaming-event-buses" },
    { title: "Governed Lakehouse Meshes", tag: "Lakehouse", desc: "Unified data lakes with Apache Iceberg, Delta Lake, and centralized cataloging.", image: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp", href: "/ecosystem/technology-stack/data-engineering/data-lakes-storage" },
    { title: "Automated ELT with dbt", tag: "Transform", desc: "Modular, version-controlled SQL transformations with automated testing in CI.", image: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp", href: "/ecosystem/technology-stack/data-engineering/analytics-processing" },
    { title: "Vector Databases for AI", tag: "Vector", desc: "High-dimensional embeddings storage with Pinecone, pgvector, and Weaviate.", image: "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp", href: "/ecosystem/technology-stack/artificial-intelligence/generative-ai-pipelines" },
    { title: "Data Quality & Lineage Gates", tag: "Govern", desc: "Automated anomaly detection, schema contract enforcement, and SLA tracking.", image: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp", href: "/ecosystem/technology-stack/data-engineering/data-compliance-governance" },
    { title: "Enterprise Orchestration", tag: "Automate", desc: "Resilient DAG scheduling with Apache Airflow, Prefect, and event triggers.", image: "/webp/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.webp", href: "/ecosystem/technology-stack/data-engineering/analytics-processing" },
    { title: "Decoupled Event Busses", tag: "Ingest", desc: "Multi-region cloud-managed event brokers for distributed enterprise systems.", image: "/webp/assets/common/90361fed0bb781d7c86e451995b4dbce-1.webp", href: "/ecosystem/technology-stack/data-engineering/real-time-streaming-event-buses" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">ENGINEERING SUITE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-0">Our Data Engineering Capabilities</h2>
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
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5.5 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4 line-clamp-2 flex-grow">{item.desc}</p>
                  
                  <Link 
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-1.5 text-rose-500 text-xs font-semibold hover:text-rose-400 transition-colors cursor-pointer w-fit group/btn"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                      <ChevronRight size={12} />
                    </div>
                    Explore {item.title}
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
            Explore all capabilities →
          </span>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. TECHNOLOGIES WE USE
// ==========================================
const DataTechnologies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Warehousing & Lakes", items: ["Snowflake", "Databricks", "Google BigQuery", "AWS Redshift", "Apache Iceberg"] },
    { name: "Streaming & Ingestion", items: ["Apache Kafka", "Apache Flink", "AWS Kinesis", "Azure Event Hubs", "Debezium"] },
    { name: "Transformation", items: ["dbt Core", "Apache Spark", "DuckDB", "Polars", "Trino"] },
    { name: "AI & Vector Storage", items: ["Pinecone", "pgvector", "Weaviate", "Qdrant", "ChromaDB"] },
    { name: "Quality & Governance", items: ["Great Expectations", "OpenMetadata", "Monte Carlo", "Unity Catalog", "Apache Airflow"] }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-5xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">ECOSYSTEM</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-0">Technologies We Architect With</h2>
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
                    <span className="text-sm md:text-base font-medium text-zinc-200 tracking-wide">{item}</span>
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
// 5. SOLUTIONS (INDUSTRY USE CASES SCROLLER)
// ==========================================
const DataIndustryUseCases = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 310;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const useCases = [
    { title: "Banking & Capital Markets", tag: "Finance", desc: "Real-time fraud detection pipelines and sub-second transaction auditing lakehouses.", image: "/webp/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.webp", href: "/industries/banking-finance" },
    { title: "Healthcare & Life Sciences", tag: "Health", desc: "HIPAA-compliant genomic analysis pipelines and clinical research data repositories.", image: "/webp/assets/common/9d91b93f83e6d4cd494ec13611b3e50e-1.webp", href: "/industries/healthcare-life-sciences" },
    { title: "Retail & Omni-Commerce", tag: "Commerce", desc: "Real-time dynamic pricing engines and 360-degree customer personalization graphs.", image: "/webp/assets/common/b384eb0438c55e43c61e7595acc29638-1.webp", href: "/industries/retail-ecommerce" },
    { title: "Industrial & Manufacturing", tag: "Industrial", desc: "Telemetry ingestion from millions of IoT sensors for predictive equipment maintenance.", image: "/webp/assets/common/e76e125035885aab9c9070ce85df239e-1.webp", href: "/industries/manufacturing" },
    { title: "Telecommunications & 5G", tag: "Networking", desc: "High-volume call detail record (CDR) streaming and distributed network QoS analytics.", image: "/webp/assets/common/f03cc521fb070dfae9d87768b791ff70-1.webp", href: "/industries/telecommunications" },
    { title: "Government & Public Sector", tag: "Public", desc: "Sovereign census data lakes, municipal analytics, and secure citizen data portals.", image: "/webp/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.webp", href: "/industries/government-public-sector" },
    { title: "Education & EdTech", tag: "Learning", desc: "Student learning trajectory intelligence and cross-institutional analytics databases.", image: "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp", href: "/industries/education" },
    { title: "Global Logistics & Freight", tag: "Supply Chain", desc: "Cold-chain GPS streaming, port bottleneck forecasting, and freight telemetry lakes.", image: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp", href: "/industries/retail-ecommerce" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">SOLUTIONS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-0">
              Industry Use Cases
            </h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[260px] sm:min-w-[280px] md:min-w-[290px] max-w-[300px] flex-shrink-0 snap-start">
              <div className="bg-[#0D0E12] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-rose-500/40 hover:shadow-[0_8px_30px_rgba(225,29,72,0.12)] transition-all duration-300 flex flex-col h-full min-h-[330px] group">
                <div className="w-full h-32 relative bg-zinc-900 overflow-hidden border-b border-zinc-800/80">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" unoptimized />
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <span className="text-xs font-semibold tracking-[0.2em] text-rose-400 font-mono uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5.5 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4 line-clamp-2 flex-grow">{item.desc}</p>
                  <Link 
                    href={item.href}
                    className="mt-auto flex items-center gap-2 text-rose-500 text-xs font-bold hover:text-white transition-colors cursor-pointer w-fit group/btn"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                      <ChevronRight size={12} />
                    </div>
                    Learn More
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
            Explore industry deployments →
          </span>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. BUSINESS OUTCOMES
// ==========================================
const DataOutcomes = () => {
  const outcomes = [
    { value: "99.99%", title: "Pipeline Data Delivery Uptime" },
    { value: "<500ms", title: "Real-Time Streaming Event Latency" },
    { value: "60%", title: "Reduction in Cloud Warehouse Costs" },
    { value: "Zero", title: "Silent Data Pipeline Corruption" },
    { value: "10x", title: "Faster Analytical Query Execution" },
    { value: "100%", title: "Automated Lineage & Governance" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">BUSINESS VALUE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-0">Measurable Data Engineering Outcomes</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-8 bg-zinc-950/50 border border-zinc-900 rounded-3xl hover:border-rose-500/30 transition-all flex flex-col justify-between min-h-[180px]">
                <div className="text-4xl sm:text-5xl font-extrabold text-rose-500 tracking-tight mb-2 font-mono">{item.value}</div>
                <div className="text-base md:text-lg font-bold text-white">{item.title}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const dataEngineeringFaqs = [
  {
    q: "What data warehousing solutions do you design?",
    a: "We architect modern data warehouses and lakehouses across Snowflake, Databricks, Google BigQuery, and AWS Redshift tailored for enterprise scale."
  },
  {
    q: "Do you support real-time streaming architectures?",
    a: "Yes. We implement real-time streaming with Apache Kafka, Apache Flink, AWS Kinesis, and Azure Event Hubs for sub-second event processing."
  },
  {
    q: "How do you ensure data quality and governance?",
    a: "We implement automated data validation using Great Expectations, data lineage tracking, and centralized catalog governance with Unity Catalog and OpenMetadata."
  },
  {
    q: "Can you migrate legacy ETL pipelines to modern ELT?",
    a: "Yes. We modernize legacy SSIS, Informatica, and custom scripts to automated dbt (data build tool) models and orchestrations using Airflow or Prefect."
  }
];

export function DataEngineeringTechStackClient() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <Hero
        title="Data Engineering Tech Stack"
        subtitle="Explore our verified technology stack for big data pipelines, distributed processing, vector storage, and enterprise warehouses."
        bgImage="/webp/assets/services/bg-data.webp"
        badge="TECHNOLOGY STACK"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ecosystem", href: "/ecosystem" },
          { label: "Data Engineering" }
        ]}
      />
      <DataEngineeringOverview />
      <DataArchitecture />
      <DataCapabilities />
      <DataTechnologies />
      <DataIndustryUseCases />
      <DataOutcomes />
      <FAQ faqs={dataEngineeringFaqs} />
      <CTA
        ctaTitle="Transform Data Into Value With"
        ctaHighlight="Modern Data Engineering"
        ctaDesc="Architect scalable lakehouses, streaming pipelines, and governed data layers ready for analytics and enterprise AI."
        ctaBtnText="TALK TO DATA ARCHITECTS"
        backLink="/ecosystem/technology-stack"
      />
    </main>
  );
}
