"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud,
  Search, Smartphone, Phone, Mail, MessageCircle, MessageSquare, Twitter, Headset, Smile, User, Star, Map,
  BrainCircuit, Bot, Lightbulb, TrendingUp, CheckCircle, Target, Compass, Blocks, Code, FastForward,
  GitCommit, Repeat, FileCode2, PieChart, LineChart, Link as LinkIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 2. DATA ENGINEERING OVERVIEW
// ==========================================
const DataEngineeringOverview = () => {
  const cards = [
    { title: "Data Integration", desc: "Connect disparate enterprise systems.", icon: LinkIcon },
    { title: "ETL / ELT Pipelines", desc: "Automate reliable data movement.", icon: Repeat },
    { title: "Data Warehousing", desc: "Centralize analytics-ready data.", icon: Database },
    { title: "Real-Time Streaming", desc: "Process live event data.", icon: Zap },
    { title: "Data Quality", desc: "Ensure trusted, validated data.", icon: ShieldCheck },
    { title: "Analytics Foundation", desc: "Power BI, reporting, and AI.", icon: BarChart2 }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OVERVIEW</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Engineering the Foundation for Intelligent Business
            </h2>
            <p className="text-zinc-450 text-sm leading-relaxed font-semibold mb-8 max-w-2xl">
              Modern organizations generate data from cloud applications, ERP systems, IoT devices, customer platforms, and operational systems. Our data engineering approach unifies these sources into trusted, scalable, and governed data platforms that enable analytics, AI, and business intelligence.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group bg-zinc-950/45 border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col justify-between h-full hover:border-zinc-800 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 p-8 min-h-[220px]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
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
// 3. MODERN DATA CHALLENGES
// ==========================================
const DataChallenges = () => {
  const challenges = [
    "Data Silos", "Disconnected Systems", "Poor Data Quality", "Slow Reporting",
    "Complex Integrations", "Limited Visibility", "Compliance Requirements", "Scaling Data Growth"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">THE PROBLEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Solving Enterprise Data Challenges
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {challenges.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-900/50 hover:bg-zinc-900/10 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[120px] group">
                <AlertTriangle className="w-6 h-6 text-zinc-600 mb-3 group-hover:text-rose-500 transition-colors" />
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
// 4. ENTERPRISE DATA ARCHITECTURE
// ==========================================
const EnterpriseDataArchitecture = () => {
  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-6xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ECOSYSTEM
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-16">
              Enterprise Data Engineering Architecture
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto p-4 sm:p-8 rounded-[3rem] bg-zinc-950/40 border border-zinc-900 shadow-[0_0_50px_rgba(225,29,72,0.05)]">
          
          {/* Layer 1: Sources */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative z-10 mb-8">
            {["ERP & CRM", "Applications", "IoT Data", "APIs"].map((src, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center min-w-[140px] shadow-lg hover:border-rose-500/50 transition-all group">
                  <Database className="w-6 h-6 text-zinc-400 mb-2 group-hover:text-rose-400 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">{src}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-gradient-to-b from-zinc-700 to-rose-500/50" />
          </div>

          {/* Layer 2: Ingestion & Pipelines */}
          <Reveal delay={0.3}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-2xl bg-zinc-900/80 border border-rose-500/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-6 shadow-[0_4px_30px_rgba(225,29,72,0.15)] backdrop-blur-sm">
                <div className="flex items-center gap-4 w-full border-b border-zinc-800 pb-4">
                  <Repeat className="w-5 h-5 text-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Data Ingestion & Pipelines</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 w-full">
                  <div className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">Stream Processing</span>
                  </div>
                  <div className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">Batch ETL/ELT</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-rose-500/50" />
          </div>

          {/* Layer 3: Storage & Transformation */}
          <Reveal delay={0.4}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-3xl bg-zinc-950 border border-fuchsia-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(217,70,239,0.05)] hover:border-fuchsia-500/50 transition-all group">
                <div className="flex items-center gap-4 flex-1 justify-center">
                  <Database className="w-6 h-6 text-fuchsia-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Data Lake</span>
                </div>
                <div className="w-full sm:w-px h-px sm:h-10 bg-zinc-800" />
                <div className="flex items-center gap-4 flex-1 justify-center">
                  <Settings className="w-6 h-6 text-zinc-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Transformation</span>
                </div>
                <div className="w-full sm:w-px h-px sm:h-10 bg-zinc-800" />
                <div className="flex items-center gap-4 flex-1 justify-center">
                  <Server className="w-6 h-6 text-fuchsia-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Data Warehouse</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-10 bg-zinc-700" />
          </div>

          {/* Layer 4: Consumption */}
          <Reveal delay={0.5}>
            <div className="flex justify-center relative z-10 mt-4 sm:mt-0">
              <div className="w-full max-w-xl bg-zinc-900 border-2 border-zinc-800/50 rounded-2xl p-6 flex items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <BarChart2 className="w-6 h-6 text-blue-400 group-hover:text-rose-400 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Analytics & BI</span>
                </div>
                <div className="w-px h-10 bg-zinc-700" />
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <BrainCircuit className="w-6 h-6 text-emerald-400 group-hover:text-rose-400 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">AI & Machine Learning</span>
                </div>
                <div className="w-px h-10 bg-zinc-700" />
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <Users className="w-6 h-6 text-purple-400 group-hover:text-rose-400 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Business Users</span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. CORE DATA ENGINEERING CAPABILITIES
// ==========================================
const DataCapabilities = () => {
  const capabilities = [
    { title: "Data Integration", tag: "Connect", desc: "Connect enterprise systems, APIs, cloud apps, and databases.", image: "/assets/common/1b065043b6959827c05a0073c93a4a53 1.png" },
    { title: "ETL / ELT Pipelines", desc: "Reliable and automated data movement.", tag: "Move", image: "/assets/common/260b761ad40c3ad2acba2c6666894539 1.png" },
    { title: "Data Warehousing", tag: "Centralize", desc: "Build centralized analytics-ready repositories.", image: "/assets/common/315e4fdc6263bfd240f36297e376576e 1.png" },
    { title: "Data Lake Engineering", tag: "Store", desc: "Store structured and unstructured enterprise data.", image: "/assets/common/37b9b888cc479ea7b74d2d9a05c37597 1.png" },
    { title: "Real-Time Data Streaming", tag: "Process", desc: "Capture and process live events.", image: "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca 1.png" },
    { title: "Data Transformation", tag: "Enrich", desc: "Clean, enrich, and standardize data.", image: "/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b 1.png" },
    { title: "Master Data Management", tag: "Govern", desc: "Create trusted enterprise-wide data consistency.", image: "/assets/common/82090d7be4ef5694954ce77f9cc2e627 1.png" },
    { title: "Metadata & Cataloging", tag: "Discover", desc: "Improve discoverability and governance.", image: "/assets/common/90361fed0bb781d7c86e451995b4dbce 1.png" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">CAPABILITIES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Our Data Engineering Capabilities</h2>
          </div>
        </Reveal>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
                <div className="w-full h-48 relative bg-zinc-900 overflow-hidden border-b border-zinc-800">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" unoptimized />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-base font-bold text-white mb-3 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-6 flex-grow">{item.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-rose-500 text-xs font-bold hover:text-white transition-colors cursor-pointer w-fit">
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <ChevronRight size={14} />
                    </div>
                    Explore {item.title}
                  </div>
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
// 6. DATA PIPELINE LIFECYCLE
// ==========================================
const PipelineLifecycle = () => {
  const steps = [
    { label: "Collect", icon: Database },
    { label: "Ingest", icon: Workflow },
    { label: "Validate", icon: ShieldCheck },
    { label: "Transform", icon: Settings },
    { label: "Store", icon: HardDrive },
    { label: "Analyze", icon: BarChart2 },
    { label: "Visualize", icon: PieChart },
    { label: "Optimize", icon: TrendingUp }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">LIFECYCLE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Data Pipeline Lifecycle</h2>
          </div>
        </Reveal>

        <div className="relative flex flex-row items-center justify-between gap-6 lg:gap-0 mt-12 w-full overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="absolute top-[32px] left-[40px] right-[40px] h-px bg-zinc-800 z-0 min-w-[800px]" />
          
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="w-auto relative z-10 flex flex-col items-center group flex-shrink-0 min-w-[100px] snap-center">
              <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <step.icon className="w-6 h-6" />
              </div>
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors bg-[#030303] px-2">
                {step.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. DATA INTEGRATION & TRANSFORMATION
// ==========================================
const IntegrationSection = () => {
  const items = ["API Integration", "Database Integration", "ERP Integration", "CRM Integration", "Cloud Data Integration", "Batch Processing", "ETL", "ELT"];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">INTEGRATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Connecting Enterprise Data Sources</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[90px]">
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
// 8. STREAMING & REAL-TIME PROCESSING
// ==========================================
const StreamingSection = () => {
  const items = ["Event Streaming", "Kafka Pipelines", "Stream Processing", "IoT Data", "Log Analytics", "Real-Time Dashboards"];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">REAL-TIME</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Real-Time Data Engineering</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-emerald-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[120px]">
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
// 9. DATA GOVERNANCE & QUALITY
// ==========================================
const GovernanceSection = () => {
  const items = ["Data Quality", "Metadata Management", "Data Lineage", "Security & Access", "Compliance", "Audit Logs", "Data Catalog", "Data Stewardship"];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GOVERNANCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Trusted Data Starts with Governance</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-blue-500/30 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[90px]">
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
// 10. TECHNOLOGY STACK
// ==========================================
const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Data Integration", items: [{ name: "Azure Data Factory", logo: "/assets/Tech_logos/Microsoft Azure.svg" }, { name: "Apache NiFi", logo: null }, { name: "Informatica", logo: null }, { name: "Talend", logo: null }, { name: "Fivetran", logo: null }] },
    { name: "Streaming", items: [{ name: "Apache Kafka", logo: null }, { name: "Apache Flink", logo: null }, { name: "Spark Streaming", logo: null }, { name: "Confluent", logo: "/assets/Tech_logos/Confluent.svg" }] },
    { name: "Processing", items: [{ name: "Apache Spark", logo: null }, { name: "Databricks", logo: "/assets/Tech_logos/Databricks.svg" }, { name: "dbt", logo: null }, { name: "Airflow", logo: null }] },
    { name: "Warehousing", items: [{ name: "Snowflake", logo: "/assets/Tech_logos/Snowflake.svg" }, { name: "BigQuery", logo: "/assets/Tech_logos/Google_Cloud.svg" }, { name: "Amazon Redshift", logo: "/assets/Tech_logos/AWS.svg" }, { name: "Azure Synapse", logo: "/assets/Tech_logos/Microsoft Azure.svg" }] },
    { name: "Databases", items: [{ name: "PostgreSQL", logo: null }, { name: "MongoDB", logo: "/assets/Tech_logos/MongoDB.svg" }, { name: "SQL Server", logo: "/assets/Tech_logos/Microsoft Azure.svg" }, { name: "MySQL", logo: null }, { name: "Oracle", logo: "/assets/Tech_logos/Oracle_Cloud.svg" }] },
    { name: "Analytics", items: [{ name: "Power BI", logo: "/assets/Tech_logos/Microsoft Azure.svg" }, { name: "Tableau", logo: null }, { name: "Looker", logo: "/assets/Tech_logos/Google_Cloud.svg" }] },
    { name: "Cloud", items: [{ name: "Azure", logo: "/assets/Tech_logos/Microsoft Azure.svg" }, { name: "AWS", logo: "/assets/Tech_logos/AWS.svg" }, { name: "Google Cloud", logo: "/assets/Tech_logos/Google_Cloud.svg" }, { name: "OCI", logo: "/assets/Tech_logos/Oracle_Cloud.svg" }] }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-6xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Technologies We Use</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-shrink-0 snap-start text-left px-6 py-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === idx ? "bg-rose-500 text-white shadow-lg" : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <div className="w-full md:w-2/3 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] p-8 min-h-[300px] flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {tabs[activeTab].items.map((item, i) => (
                  <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center flex flex-col items-center justify-center gap-3 hover:border-rose-500/30 transition-colors min-h-[120px]">
                    {item.logo && (
                      <div className="h-8 flex items-center justify-center">
                        <Image src={item.logo} alt={item.name} width={40} height={40} className="object-contain max-h-8 w-auto opacity-80" unoptimized />
                      </div>
                    )}
                    <span className="text-[11px] font-bold text-zinc-300 tracking-wide uppercase">{item.name}</span>
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
// 11. BUSINESS OUTCOMES
// ==========================================
const BusinessOutcomes = () => {
  const outcomes = [
    { value: "10×", title: "Faster Data Processing" },
    { value: "360°", title: "Enterprise Visibility" },
    { value: "99.9%", title: "Reliable Data Pipelines" },
    { value: "AI-Ready", title: "Data Foundation" },
    { value: "Real-Time", title: "Analytics" },
    { value: "Trusted", title: "Business Insights" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">IMPACT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Business Outcomes</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] hover:border-rose-500/20 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[190px]">
                <div className="text-3xl md:text-4xl font-black text-rose-500 mb-3 tracking-tight">
                  {item.value}
                </div>
                <h4 className="text-xs font-bold text-white tracking-widest uppercase">{item.title}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 12. INDUSTRY USE CASES
// ==========================================
const IndustryUseCases = () => {
  const useCases = [
    { title: "Banking", tag: "Finance", desc: "Transaction analytics and fraud data pipelines.", image: "/assets/common/945ab601f043c558e0a8162da2a1eb4c 1.png" },
    { title: "Healthcare", tag: "Health", desc: "Clinical data integration and reporting.", image: "/assets/common/9d91b93f83e6d4cd494ec13611b3e50e 1.png" },
    { title: "Retail", tag: "Commerce", desc: "Customer analytics and demand forecasting.", image: "/assets/common/b384eb0438c55e43c61e7595acc29638 1.png" },
    { title: "Manufacturing", tag: "Industrial", desc: "Production analytics and IoT integration.", image: "/assets/common/e76e125035885aab9c9070ce85df239e 1.png" },
    { title: "Telecommunications", tag: "Networking", desc: "Network telemetry and performance analytics.", image: "/assets/common/f03cc521fb070dfae9d87768b791ff70 1.png" },
    { title: "Government", tag: "Public", desc: "Citizen data platforms and reporting.", image: "/assets/common/f317dd71184f5c47d601eeb9508bf92c 1.png" },
    { title: "Education", tag: "Learning", desc: "Student analytics and institutional reporting.", image: "/assets/common/45ea830d170d382ade235db479060da7 1.png" },
    { title: "Logistics", tag: "Supply Chain", desc: "Fleet tracking and supply chain visibility.", image: "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa 1.png" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SOLUTIONS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Industry Use Cases
            </h2>
          </div>
        </Reveal>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
                <div className="w-full h-40 relative bg-zinc-900 overflow-hidden border-b border-zinc-800">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" unoptimized />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-base font-bold text-white mb-3 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-6 flex-grow">{item.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-rose-500 text-xs font-bold hover:text-white transition-colors cursor-pointer w-fit">
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <ChevronRight size={14} />
                    </div>
                    Learn More
                  </div>
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
// 13. WHY DEVOPSTRIO DATA ENGINEERING
// ==========================================
const WhyChooseDataEngineering = () => {
  const items = [
    "Enterprise Data Expertise", "Modern Data Pipelines", "Real-Time Processing", "AI-Ready Architectures",
    "Governance by Design", "Cloud-Native Platforms", "Scalable Data Infrastructure", "Business-Driven Analytics"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">WHY DEVOPSTRIO</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Why Devopstrio Data Engineering</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="px-6 py-4 bg-zinc-950/40 border border-zinc-900 rounded-full hover:border-rose-500/30 transition-all duration-300 text-center">
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
// 14. FAQ
// ==========================================
const TechnologyFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: "What is data engineering?", a: "Data engineering is the practice of designing and building systems for collecting, storing, and analyzing data at scale. It creates the foundation for data science, analytics, and business intelligence." },
    { q: "Do you build ETL and ELT pipelines?", a: "Yes, we architect and deploy both ETL (Extract, Transform, Load) and modern ELT pipelines using tools like Apache Airflow, dbt, Azure Data Factory, and Databricks to automate data movement." },
    { q: "Can you integrate ERP and CRM data?", a: "Absolutely. We build integrations across complex enterprise systems like SAP, Salesforce, Oracle, and Dynamics 365, unifying operational data into a single source of truth." },
    { q: "Do you support real-time streaming?", a: "Yes, we implement real-time event streaming architectures using Apache Kafka, Confluent, and Spark Streaming for use cases like fraud detection, IoT telemetry, and live dashboards." },
    { q: "Which cloud platforms are supported?", a: "We design cloud-native data platforms across Microsoft Azure, AWS, and Google Cloud, utilizing their managed services like Azure Synapse, AWS Redshift, and BigQuery." },
    { q: "How do you ensure data quality?", a: "We embed automated data quality checks, validation rules, and observability directly into the data pipelines to ensure downstream consumers only access trusted data." },
    { q: "Can data pipelines support AI initiatives?", a: "Yes, AI-readiness is a core focus. We ensure data is cleaned, structured, and cataloged appropriately to train ML models and power GenAI applications." },
    { q: "Do you build enterprise data lakes and warehouses?", a: "Yes, we design modern data architectures including Data Warehouses (Snowflake, BigQuery), Data Lakes, and Data Lakehouses (Databricks) tailored to your analytics needs." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] text-white relative border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">FAQ</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-4">
            Questions we get <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">asked every day</span>
          </h2>
        </Reveal>

        <div className="flex flex-col border-t border-zinc-900">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="border-b border-zinc-900 py-6">
                <button onClick={() => toggleFaq(idx)} className="flex justify-between items-center w-full text-left focus:outline-none group">
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 text-xs text-zinc-400 font-bold max-w-3xl leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 15. CTA
// ==========================================
const TechnologyCTA = () => {
  return (
    <section className="w-full py-32 bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GET STARTED</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-black mb-6 tracking-tight text-white">
            Turn Data into Business Intelligence
          </h2>
          <p className="text-zinc-300 text-sm md:text-base font-semibold mb-10 max-w-xl mx-auto leading-relaxed">
            Build modern data pipelines, scalable analytics platforms, and trusted enterprise data foundations with Devopstrio's data engineering expertise.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 pl-6 pr-3 py-3.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Talk to a Data Engineer
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link href="/contact" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
              Start Your Data Transformation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function DataEngineeringPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <Hero
        badge="Technology Stack"
        title={
          <>
            Enterprise Data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering
            </span>
          </>
        }
        subtitle="Architect the infrastructure of modern intelligence. We engineer hyperscale data pipelines and resilient, unified architectures that transform raw enterprise complexity into real-time, AI-ready insights."
        shapeGrid={true}
        shapeGridSpeed={0.5}
        shapeGridSquareSize={50}
        shapeGridDirection="diagonal"
        shapeGridBorderColor="rgba(255, 255, 255, 0.08)"
        shapeGridHoverFillColor="rgba(225, 29, 72, 0.2)"
        shapeGridShape="square"
        shapeGridHoverTrailAmount={3}
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
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "TECHNOLOGY STACK", href: "/ecosystem/technology-stack" },
          { label: "DATA ENGINEERING" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
            Explore Data Solutions
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link href="/contact" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
            Talk to a Data Engineer
          </Link>
        </div>
      </Hero>

      <DataEngineeringOverview />
      <DataChallenges />
      <EnterpriseDataArchitecture />
      <DataCapabilities />
      <PipelineLifecycle />
      <IntegrationSection />
      <StreamingSection />
      <GovernanceSection />
      <TechnologyStack />
      <BusinessOutcomes />
      <IndustryUseCases />
      <WhyChooseDataEngineering />
      <TechnologyFAQ />
      <TechnologyCTA />
    </main>
  );
}
