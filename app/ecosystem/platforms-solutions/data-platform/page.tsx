"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders
} from "lucide-react";
import Link from "next/link";

// ==========================================
// 2. PLATFORM OVERVIEW (DataPlatformOverview)
// ==========================================
const DataPlatformOverview = () => {
  const cards = [
    {
      title: "Unified Lakehouse Architectures",
      desc: "Establish optimized data lakehouses combining structured queries and semi-structured storage zones.",
      img: "/assets/data_lakehouse_card.png",
      linkText: "Get the whitepaper"
    },
    {
      title: "Real-Time Pipeline Execution",
      desc: "Automate batch extracts and stream Kafka event logs with sub-second delivery guarantees.",
      img: "/assets/data_pipelines_card.png",
      linkText: "Read the execution guide"
    },
    {
      title: "Governed Business Intelligence",
      desc: "Map column lineage, enforce PII masking rules, and deliver clean, AI-ready datasets.",
      img: "/assets/data_governance_card.png",
      linkText: "Access governance frameworks"
    }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">

        {/* Top Featured Wide Card */}
        <Reveal>
          <div className="w-full bg-zinc-950/80 border border-zinc-900 rounded-[2.5rem] p-8 md:p-12 mb-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 hover:border-zinc-800 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            <div className="lg:w-1/2 flex flex-col items-start text-left">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-4 block">FRONTIER TRANSFORMATION</span>
              <h3 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4 leading-snug">
                Turn enterprise data into your core business engine
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm font-semibold leading-relaxed mb-8 max-w-lg">
                Scale intelligence across your organization, embedding trusted data into how work gets done, decisions are made, and outcomes are delivered.
              </p>
              <Link
                href="/contact#contact-form"
                className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-md shadow-white/5"
              >
                Find out how
              </Link>
            </div>
            <div className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden aspect-[16/10] bg-zinc-900 border border-zinc-800 relative group">
              <img src="/assets/data_overview_hero.png"
                alt="Frontier transformation cover"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </Reveal>

        {/* Section Heading & Explore Button */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">GET INSIGHTS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 uppercase">
              Advance your Data Transformation
            </h2>
            <p className="text-zinc-450 text-sm leading-relaxed font-semibold mb-8 max-w-2xl">
              Move from data fragmentation to business impact with expert platforms and guidance.
            </p>
            <Link
              href="/contact#contact-form"
              className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-800 bg-zinc-900/40 text-white hover:bg-zinc-900/80 transition-all duration-300"
            >
              Explore platform details
            </Link>
          </div>
        </Reveal>

        {/* 3-Column Card Grid with Images & Arrow Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="group bg-zinc-950/45 border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col justify-between h-full hover:border-zinc-800 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300">
                <div>
                  {/* Top Image Cover */}
                  <div className="w-full aspect-[16/9] overflow-hidden bg-zinc-900 border-b border-zinc-900 relative">
                    <img src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-base font-bold text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Link Button at Bottom */}
                <div className="px-6 md:px-8 pb-8 pt-2">
                  <Link
                    href="/contact#contact-form"
                    className="inline-flex items-center gap-3 text-xs font-bold tracking-wider uppercase text-zinc-300 hover:text-white transition-colors duration-300 group/link"
                  >
                    <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover/link:text-rose-500 group-hover/link:bg-rose-500/10 transition-colors">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <span>{item.linkText}</span>
                  </Link>
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
// 3. DATA CHALLENGES (DataChallenges)
// ==========================================
const DataChallenges = () => {
  const challenges = [
    { title: "Siloed Repositories", desc: "Departments operating on isolated data clusters without centralized access catalogs.", icon: Layers },
    { title: "Data Inconsistencies", desc: "Null columns, duplicated rows, and broken relational schemas causing calculation errors.", icon: AlertTriangle },
    { title: "Manual Compilations", desc: "Teams consuming hours compiling spreadsheets manually instead of automatic sync.", icon: FileText },
    { title: "Brittle Integrations", desc: "Managing custom scripts that break upon third-party software updates.", icon: Workflow },
    { title: "Query Latency", desc: "Warehouse queries taking minutes or hours to compile dashboard reports.", icon: Gauge },
    { title: "Compliance Risks", desc: "Exposures of private customer data violating GDPR or SOC-2 storage mandates.", icon: Lock }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">DATA BOTTLENECKS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4 uppercase">
              Comprehensive analytics solutions built for scale
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
              Explore integrated data engineering strategies designed to eliminate fragmentation and deliver reliable enterprise data.
            </p>
          </div>
        </Reveal>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Tall Card */}
          <div className="lg:col-span-4 h-full min-h-[420px]">
            <Reveal className="h-full">
              <div className="relative overflow-hidden rounded-3xl h-full flex flex-col justify-end p-8 bg-zinc-900 border border-zinc-800 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] group">
                <div className="absolute inset-0 z-0">
                  <img src="/assets/data_challenges_cover.png"
                    alt="Data challenges team cover"
                    className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between items-start">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-rose-500 bg-rose-500/10 px-3.5 py-1 rounded-full mb-8">
                    DATA STRATEGY
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">
                      Centralize and clean fragmented data streams
                    </h3>
                    <p className="text-xs text-zinc-450 leading-relaxed font-bold mb-6 max-w-sm">
                      Save engineering overhead by replacing custom ingestion scripts and manual spreadsheets with an automated, fully governed source of truth.
                    </p>
                    <Link
                      href="/contact#contact-form"
                      className="px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-md shadow-white/5"
                    >
                      Find out how
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right 3x2 Card Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 h-full">
              {challenges.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={idx} delay={idx * 0.05} className="h-full">
                    <div className="relative group rounded-3xl p-6 bg-zinc-950/45 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 flex flex-col justify-between h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                      <div>
                        {/* Icon at top */}
                        <div className="w-10 h-10 rounded-2xl bg-rose-600/10 text-rose-500 flex items-center justify-center mb-5">
                          <Icon size={18} />
                        </div>
                        <h4 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-bold">
                          {item.desc}
                        </p>
                      </div>

                      {/* Link at bottom */}
                      <div className="mt-5">
                        <Link href="/contact#contact-form" className="text-xs font-bold text-rose-500 hover:text-rose-400 inline-flex items-center gap-1.5 transition-all">
                          Learn more <ChevronRight className="w-3 h-3 animate-pulse" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. PLATFORM CAPABILITIES (DataCapabilities)
// ==========================================
const DataCapabilities = () => {
  const capabilities = [
    { title: "Enterprise Data Integration", desc: "Connect cloud applications, databases, APIs, ERP, CRM, IoT, and business systems.", icon: Workflow },
    { title: "Data Lake & Warehouse", desc: "Centralize structured and unstructured enterprise data into unified catalogs.", icon: Database },
    { title: "Real-Time Streaming", desc: "Process live events, transactions, and telemetry instantly with sub-second lag.", icon: Zap },
    { title: "Business Intelligence", desc: "Interactive dashboards and executive reporting syncing daily summaries.", icon: BarChart2 },
    { title: "AI & Machine Learning", desc: "Prepare trusted datasets for predictive analytics and deep learning models.", icon: Cpu },
    { title: "Data Governance", desc: "Establish rigid access policies, trace lineage maps, and catalog schema records.", icon: Shield },
    { title: "Master Data Management", desc: "Maintain consistent business information defaults across all nodes.", icon: Layers },
    { title: "Secure Data Sharing", desc: "Enable controlled database access across departments and external partners.", icon: Lock }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM ENGINE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Core Data Platform Capabilities</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-3xl hover:border-rose-500/20 hover:bg-zinc-900/10 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-455 leading-relaxed font-bold">{item.desc}</p>
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
// 5. ENTERPRISE DATA ARCHITECTURE (DataArchitecture)
// ==========================================
const DataArchitecture = () => {
  const steps = [
    {
      num: "01",
      icon: Server,
      title: "Data Sources",
      desc: "ERP, CRM, IoT devices, Web Applications, and third-party SaaS APIs.",
      numColor: "text-rose-500",
      hoverColor: "group-hover:text-rose-500 group-hover:border-rose-500/30",
      glowColor: "rgba(244, 63, 94, 0.04)",
      borderColor: "rgba(244, 63, 94, 0.2)"
    },
    {
      num: "02",
      icon: Workflow,
      title: "Ingestion Layer",
      desc: "Extract-Load-Transform (ELT) pipelines capturing system transactions.",
      numColor: "text-[#9F8EC9]",
      hoverColor: "group-hover:text-[#9F8EC9] group-hover:border-[#9F8EC9]/30",
      glowColor: "rgba(159, 142, 201, 0.04)",
      borderColor: "rgba(159, 142, 201, 0.2)"
    },
    {
      num: "03",
      icon: Zap,
      title: "Stream Processing",
      desc: "Kafka cluster brokers routing real-time telemetry and message queues.",
      numColor: "text-[#5EA5E0]",
      hoverColor: "group-hover:text-[#5EA5E0] group-hover:border-[#5EA5E0]/30",
      glowColor: "rgba(94, 165, 224, 0.04)",
      borderColor: "rgba(94, 165, 224, 0.2)"
    },
    {
      num: "04",
      icon: Database,
      title: "Data Lakehouse",
      desc: "Raw, semi-structured storage zones serving as the source of truth.",
      numColor: "text-[#86D16F]",
      hoverColor: "group-hover:text-[#86D16F] group-hover:border-[#86D16F]/30",
      glowColor: "rgba(134, 209, 111, 0.04)",
      borderColor: "rgba(134, 209, 111, 0.2)"
    },
    {
      num: "05",
      icon: HardDrive,
      title: "Data Warehousing",
      desc: "Structured Databricks lakehouses and Snowflake storage indices.",
      numColor: "text-[#FFB057]",
      hoverColor: "group-hover:text-[#FFB057] group-hover:border-[#FFB057]/30",
      glowColor: "rgba(255, 176, 87, 0.04)",
      borderColor: "rgba(255, 176, 87, 0.2)"
    },
    {
      num: "06",
      icon: Shield,
      title: "Data Governance",
      desc: "Data catalogs mapping lineage, columns, and schema rules.",
      numColor: "text-[#F472B6]",
      hoverColor: "group-hover:text-[#F472B6] group-hover:border-[#F472B6]/30",
      glowColor: "rgba(244, 114, 182, 0.04)",
      borderColor: "rgba(244, 114, 182, 0.2)"
    },
    {
      num: "07",
      icon: Lock,
      title: "Security & Lineage",
      desc: "Access control rules masking columns and logging admin operations.",
      numColor: "text-[#2DD4BF]",
      hoverColor: "group-hover:text-[#2DD4BF] group-hover:border-[#2DD4BF]/30",
      glowColor: "rgba(45, 212, 191, 0.04)",
      borderColor: "rgba(45, 212, 191, 0.2)"
    },
    {
      num: "08",
      icon: Cpu,
      title: "AI & Analytics",
      desc: "Predictive algorithms, Jupyter servers, and ML training pipelines.",
      numColor: "text-[#FB7185]",
      hoverColor: "group-hover:text-[#FB7185] group-hover:border-[#FB7185]/30",
      glowColor: "rgba(251, 113, 133, 0.04)",
      borderColor: "rgba(251, 113, 133, 0.2)"
    },
    {
      num: "09",
      icon: BarChart2,
      title: "Consumption Hub",
      desc: "Looker reports, PowerBI grids, and downstream data share targets.",
      numColor: "text-[#A78BFA]",
      hoverColor: "group-hover:text-[#A78BFA] group-hover:border-[#A78BFA]/30",
      glowColor: "rgba(167, 139, 250, 0.04)",
      borderColor: "rgba(167, 139, 250, 0.2)"
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-b border-zinc-900/60">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 xl:px-8 relative z-10 text-left">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              REFERENCE ARCHITECTURE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white uppercase">
              Enterprise Data Architecture
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold mt-3">
              Our reference architecture maps data flows cleanly from system endpoints into highly governed analytics tables.
            </p>
          </Reveal>
        </div>

        {/* Pillars Grid (3x3 on desktops) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05 + 0.05}>
                <div className="group relative rounded-[2rem] p-8 bg-[#0A0A0C]/55 border border-zinc-900/90 hover:border-zinc-800 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[340px] text-center overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]">

                  {/* Subtle color-matching radial glow background on card hover */}
                  <div className="absolute -inset-px rounded-[2rem] transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${p.glowColor}, transparent 65%)`,
                      border: `1px solid ${p.borderColor}`
                    }} />

                  <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">

                    {/* Top Portion: Infographic Slit & Number */}
                    <div className="w-full flex flex-col items-center">
                      <div className="relative w-full h-20 overflow-hidden flex items-end justify-center">
                        {/* Number peeking from slot */}
                        <span className={`text-[6.5rem] font-black font-sans leading-none tracking-tighter select-none translate-y-[24px] transition-transform duration-500 ease-out group-hover:translate-y-[8px] ${p.numColor}`}>
                          {p.num}
                        </span>
                        {/* Shadow overlay to give pocket slit depth */}
                        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent pointer-events-none opacity-20" />
                      </div>

                      {/* Pocket Slit Horizontal Line */}
                      <div className="w-full h-px bg-zinc-850 relative">
                        <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-[#0A0A0C] to-transparent -translate-y-full opacity-90" />
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white mt-7 mb-3 transition-colors duration-300">
                        {p.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed max-w-[230px]">
                        {p.desc}
                      </p>
                    </div>

                    {/* Bottom Portion: Icon */}
                    <div className={`w-9 h-9 rounded-full bg-zinc-950/80 border border-zinc-900 flex items-center justify-center text-zinc-500 mt-6 ${p.hoverColor} transition-all duration-500 group-hover:scale-110`}>
                      <Icon size={14} strokeWidth={2.5} />
                    </div>

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
// 6. CORE PLATFORM MODULES (DataModules)
// ==========================================
const DataModules = () => {
  const modules = [
    { title: "Data Ingestion", desc: "Automated extraction loops sync databases, logs, and files with schema recognition.", icon: Workflow },
    { title: "Data Pipelines", desc: "Transform streams using custom dbt scripts, Apache Spark transformations, and Kafka logic.", icon: Activity },
    { title: "Data Lake", desc: "PB-scale unstructured file systems with delta lake structures protecting schema defaults.", icon: Database },
    { title: "Data Warehouse", desc: "Highly structured analytics indexes running parallel warehouse queries.", icon: HardDrive },
    { title: "Data Governance", desc: "Lineage maps trace columns back to server databases to verify reporting sources.", icon: Shield },
    { title: "Analytics", desc: "Low-latency database configurations query logs dynamically for looker grids.", icon: BarChart2 },
    { title: "AI Services", desc: "Pre-process tabular datasets to train predictive modeling pipelines.", icon: Cpu },
    { title: "Monitoring", desc: "Observe cluster loads, verify pipelines status, and report failures immediately.", icon: Settings }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM MODULES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Core Platform Modules</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-3xl hover:border-rose-500/20 hover:shadow-[0_10px_30px_rgba(225,29,72,0.03)] transition-all duration-300 min-h-[220px] flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-zinc-450 leading-relaxed font-bold mt-4">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. DATA PIPELINE WORKFLOW (DataPipelineWorkflow)
// ==========================================
const DataPipelineWorkflow = () => {
  const steps = [
    { step: "01", name: "Collect", desc: "Establish connections to system endpoints, log trackers, and APIs.", icon: Server },
    { step: "02", name: "Ingest", desc: "Automate batch extracts and real-time Kafka streaming feeds.", icon: Workflow },
    { step: "03", name: "Transform", desc: "Format parameters and aggregate metrics using Spark or dbt.", icon: Cpu },
    { step: "04", name: "Validate", desc: "Audit values against schemas to clean null blocks.", icon: Shield },
    { step: "05", name: "Store", desc: "Archive assets inside data lakes and structured warehouses.", icon: Database },
    { step: "06", name: "Analyze", desc: "Process historical trends and build predictive datasets.", icon: Sliders },
    { step: "07", name: "Visualize", desc: "Map values directly onto Looker and PowerBI dashboards.", icon: BarChart2 },
    { step: "08", name: "Optimize", desc: "Refactor database query structures to lower cloud execution bills.", icon: RefreshCw }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative">
      {/* Background glowing mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">

        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PIPELINE LIFECYCLE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
              Data Pipeline <span className="text-rose-500">Workflow</span>
            </h2>
          </div>
        </Reveal>

        {/* 8-Step Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} delay={idx * 0.05}>
                <div className="relative overflow-hidden bg-zinc-950/45 border border-zinc-900 rounded-[2rem] p-8 min-h-[240px] h-full flex flex-col justify-between hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">

                  <div>
                    {/* Header: Large Styled Number & Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-6xl font-mono font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-rose-500/30 via-rose-500/15 to-transparent select-none drop-shadow-[0_4px_16px_rgba(225,29,72,0.25)]">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-rose-600/10 text-rose-500 flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm font-bold text-white mb-3 hover:text-rose-400 transition-colors duration-300 uppercase tracking-wider">
                      {step.name}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
                      {step.desc}
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
// 8. PLATFORM FEATURES (PlatformFeatures)
// ==========================================
const PlatformFeatures = () => {
  const features = [
    { title: "Multi-Source Integration", desc: "Connect diverse operational tools, SaaS APIs, and local directories dynamically." },
    { title: "Real-Time Streaming", desc: "Route system event transactions and telemetry logs using Kafka brokers." },
    { title: "Batch Processing", desc: "Schedule heavy calculations and database queries via automated airflow loops." },
    { title: "Data Quality Monitoring", desc: "Filter null profiles and duplicate column fields using catalog metrics." },
    { title: "Metadata Catalog", desc: "Automatically crawl schemas to map active database column headers." },
    { title: "Role-Based Access", desc: "Limit user permissions matching roles to isolated database table views." },
    { title: "Data Lineage", desc: "Map data movements visually from source files to final Looker charts." },
    { title: "Self-Service Analytics", desc: "Allow non-technical users to build reports without SQL engineering delays." },
    { title: "Dashboard Builder", desc: "Create interactive visual reports using drag-and-drop metrics widgets." },
    { title: "AI-Ready Datasets", desc: "Export clean tabular columns formatted for cognitive training playbooks." },
    { title: "Automated Pipelines", desc: "Build triggers that sync databases upon specific record updates." },
    { title: "Multi-Cloud Deployment", desc: "Run warehouse nodes across AWS, Google Cloud, and Microsoft Azure systems." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM FEATURE GRID</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Complete Data Platform Features</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 min-h-[160px] flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-450 leading-relaxed font-bold">{item.desc}</p>
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
// 9. DATA GOVERNANCE & SECURITY (DataGovernance)
// ==========================================
const DataGovernance = () => {
  const categories = [
    {
      title: "Data Quality & Catalogs",
      icon: Database,
      points: [
        "Continuously audit null parameters, column types, and relational rules.",
        "Index schemas and columns automatically using metadata crawlers."
      ]
    },
    {
      title: "Lineage & Traceability",
      icon: Workflow,
      points: [
        "Track query dependencies visually from source folders to output charts.",
        "Compile immutable activity trails to verify admin database access."
      ]
    },
    {
      title: "Access & Security",
      icon: Lock,
      points: [
        "Mask personal fields and restrict views matching user logins.",
        "Secure database assets at rest using automated key rotation."
      ]
    },
    {
      title: "Compliance & Retention",
      icon: ShieldCheck,
      points: [
        "Enforce controls matching GDPR, HIPAA, and SOC-2 storage mandates.",
        "Archive logs automatically to cost-effective cold storage structures."
      ]
    }
  ];

  const callouts = [
    { text: "Audit your data schema compliance score", icon: ShieldCheck },
    { text: "Configure end-to-end data encryption", icon: Lock },
    { text: "Establish automated PII masking rules", icon: Settings },
    { text: "Examine complete column lineage flow maps", icon: Workflow }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">

        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GOVERNANCE & TRUST</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">
              Trusted Data Starts with Governance
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
              Establish rigid compliance rules, trace lineage maps, and secure enterprise databases using automated governance controls.
            </p>
          </div>
        </Reveal>

        {/* 4 Featured Topics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] flex flex-col justify-between h-full hover:border-zinc-800 transition-all duration-300">
                <div>
                  {/* Large Icon Preview Container */}
                  <div className="w-full bg-zinc-900 border border-zinc-800/80 rounded-2xl p-8 flex items-center justify-center mb-6 aspect-video">
                    <item.icon className="w-10 h-10 text-rose-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-5 tracking-tight">{item.title}</h3>

                  {/* Bullet points with Book/Doc Icon */}
                  <ul className="space-y-4">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 font-semibold leading-relaxed">
                        <FileText className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Horizontal Quick Link Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {callouts.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03 + 0.2}>
              <div className="p-4 bg-zinc-950/30 border border-zinc-900 hover:border-rose-500/20 hover:bg-zinc-900/10 rounded-2xl flex items-center gap-3.5 transition-all duration-300 group cursor-pointer">
                <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 transition-colors">
                  <item.icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors">
                  {item.text}
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
// ==========================================
// 10. AI & ANALYTICS INTEGRATION (AIAnalyticsIntegration)
// ==========================================
const AIAnalyticsIntegration = () => {
  const steps = [
    { name: "Raw Data Ingestion", desc: "Extracting transaction databases, file storage directories, and server event logs.", glow: "rgba(244,63,94,0.15)", border: "hover:border-rose-500/30" },
    { name: "Automated Data Cleansing", desc: "Filtering noise vectors, eliminating duplicates, and parsing schema rules.", glow: "rgba(159,142,201,0.15)", border: "hover:border-[#9F8EC9]/30" },
    { name: "Lakehouse Schema Modeling", desc: "Formatting semi-structured schemas into highly optimized analytics warehouse tables.", glow: "rgba(94,165,224,0.15)", border: "hover:border-[#5EA5E0]/30" },
    { name: "Cognitive AI Engines", desc: "Feeding clean, tokenized data arrays directly into machine learning training models.", glow: "rgba(134,209,111,0.15)", border: "hover:border-[#86D16F]/30" },
    { name: "BI Dashboard Synchronization", desc: "Streaming real-time telemetry updates and query metrics to active Looker views.", glow: "rgba(255,176,87,0.15)", border: "hover:border-[#FFB057]/30" },
    { name: "Trusted Business Outcomes", desc: "Empowering management dashboards with reliable predictions and historical audits.", glow: "rgba(45,212,191,0.15)", border: "hover:border-[#2DD4BF]/30" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_75%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left Side */}
        <div className="lg:col-span-5 text-left">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              DATA PIPELINE FLOW
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">
              Power Business Intelligence & AI
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-semibold">
              The platform prepares clean, governed, and scalable datasets that support business intelligence dashboards, machine learning models, predictive analytics, and Generative AI initiatives.
            </p>
            <Link
              href="/contact#contact-form"
              className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-md shadow-white/5"
            >
              Analyze Your Pipeline
            </Link>
          </Reveal>
        </div>

        {/* Right Side: Flow Visualization (Timeline Tracker) */}
        <div className="lg:col-span-7 w-full relative">
          <Reveal delay={0.1}>
            <div className="relative pl-8 md:pl-12 flex flex-col gap-6">

              {/* Central vertical timeline track */}
              <div className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-rose-500 via-[#9F8EC9] to-[#2DD4BF] opacity-40 pointer-events-none" />

              {steps.map((item, idx) => (
                <div key={idx} className="group relative flex items-start gap-6 w-full">

                  {/* Glowing Node Icon Circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border border-zinc-800 bg-[#0A0A0C] flex items-center justify-center font-mono font-bold text-xs text-zinc-400 group-hover:text-white group-hover:border-rose-500 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(225,29,72,0.1)]">
                    {`0${idx + 1}`}
                  </div>

                  {/* Card Details Box */}
                  <div className={`flex-grow p-5 bg-zinc-950/45 border border-zinc-900 rounded-[1.5rem] transition-all duration-500 ${item.border} flex flex-col md:flex-row md:items-center justify-between gap-4 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)]`}>

                    {/* Shadow overlay glowing on card hover */}
                    <div className="absolute -inset-px rounded-[1.5rem] transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0"
                      style={{ background: `radial-gradient(circle at 10% 50%, ${item.glow}, transparent 55%)` }} />

                    <div className="relative z-10">
                      <h4 className="text-sm font-bold text-white mb-1.5 tracking-tight group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed max-w-xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 11. SUPPORTED TECHNOLOGIES (TechnologyStack)
// ==========================================
const TechnologyStack = () => {
  const techs = [
    { name: "Microsoft Fabric", logo: "/assets/Tech_logos/Microsoft-Azure.svg" },
    { name: "Azure Synapse", logo: "/assets/Tech_logos/Microsoft-Azure.svg" },
    { name: "Snowflake DB", logo: "/assets/Tech_logos/Snowflake.svg" },
    { name: "Databricks", logo: "/assets/Tech_logos/Databricks.svg" },
    { name: "Google BigQuery", logo: "/assets/Tech_logos/Google_Cloud.svg" },
    { name: "Amazon Redshift", logo: "/assets/Tech_logos/AWS.svg" },
    { name: "Confluent Kafka", logo: "/assets/Tech_logos/Confluent.svg" },
    { name: "MongoDB Atlas", logo: "/assets/Tech_logos/MongoDB.svg" },
    { name: "Cloudera System", logo: "/assets/Tech_logos/Cloudera.svg" },
    { name: "Data Factory", logo: "/assets/Tech_logos/Microsoft-Azure.svg" },
    { name: "Elasticsearch", logo: "/assets/Tech_logos/Elastic.svg" },
    { name: "HashiCorp Stack", logo: "/assets/Tech_logos/HashiCorp.svg" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">INTEGRATED STACK</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Supported Technologies</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techs.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.02}>
              <div className="p-6 bg-zinc-950/65 border border-zinc-900 rounded-3xl hover:border-rose-500/20 flex flex-col items-center justify-center gap-4 text-center min-h-[150px] group transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                {/* Logo wrapper */}
                <div className="w-14 h-14 flex items-center justify-center bg-zinc-900/80 rounded-2xl border border-zinc-800 group-hover:scale-105 transition-transform duration-300">
                  <img src={item.logo}
                    alt={item.name}
                    className="w-7 h-7 object-contain opacity-70 group-hover:opacity-100 transition-all duration-350 filter brightness-105"
                  loading="lazy" />
                </div>
                {/* Title */}
                <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white transition-colors duration-300 uppercase tracking-widest leading-none">
                  {item.name}
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
// 12. BUSINESS OUTCOMES (BusinessOutcomes)
// ==========================================
const BusinessOutcomes = () => {
  const outcomes = [
    { value: "10×", title: "Faster Data Processing", desc: "Reducing query compile durations through lakehouse table indexes." },
    { value: "99.9%", title: "Trusted Data Availability", desc: "Ensuring schemas and pipelines are continuously active." },
    { value: "80%", title: "Reduction in Manual Reporting", desc: "Transitioning team operations into automated Looker report cards." },
    { value: "Real-Time", title: "Business Insights", desc: "Streaming database transactions instantly into target boards." },
    { value: "360°", title: "Enterprise Data Visibility", desc: "Consolidating scattered CRM, ERP, and API catalogs." },
    { value: "AI Ready", title: "Data Foundation", desc: "Exporting clean tabular arrays optimized for machine learning models." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">BUSINESS VALUE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Business Outcomes</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] hover:border-rose-500/20 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[190px]">
                <div className="text-xl md:text-2xl xl:text-3xl font-bold text-rose-500 mb-3 tracking-tight">
                  {item.value}
                </div>
                <h4 className="text-sm font-bold text-white mb-2 tracking-tight uppercase tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-semibold max-w-[240px]">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 13. INDUSTRY USE CASES (IndustryUseCases)
// ==========================================
const IndustryUseCases = () => {
  const useCases = [
    { title: "Banking", desc: "Fraud analytics, database lineage audit logs, and unified customer profile tables.", icon: Database },
    { title: "Healthcare", desc: "Clinical operations dashboards, patient history metrics, and HIPAA compliant warehouses.", icon: Heart },
    { title: "Retail", desc: "Customer behavior trends, conversion trackers, and real-time checkout monitoring.", icon: ShoppingBag },
    { title: "Manufacturing", desc: "Production lines monitoring, supply telemetry logs, and predictive maintenance rules.", icon: Factory },
    { title: "Telecommunications", desc: "Network routing performance metrics and volume connection filters.", icon: Workflow },
    { title: "Government", desc: "Citizen file catalogs, query reporting APIs, and open database structures.", icon: Globe },
    { title: "Education", desc: "Student portal registries, learning telemetry maps, and academic data sharing.", icon: BookOpen },
    { title: "Logistics", desc: "Fleet tracking routes, warehouse supply statistics, and delivery timeline metrics.", icon: Activity }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SECTOR DEPLOYMENTS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4 uppercase">
              Tailored Sector Solutions
            </h2>
            <p className="text-zinc-455 text-sm md:text-base leading-relaxed font-semibold">
              Explore integrated data platform blueprints designed to protect specific industry regulatory frameworks and compliance standards.
            </p>
          </div>
        </Reveal>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left tall card */}
          <div className="lg:col-span-4 h-full min-h-[420px]">
            <Reveal className="h-full">
              <div className="relative overflow-hidden rounded-3xl h-full flex flex-col justify-end p-8 bg-zinc-900 border border-zinc-800 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] group">
                <div className="absolute inset-0 z-0">
                  <img src="/assets/data_industry_cover.png"
                    alt="Layered data security cover"
                    className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-750"
                  loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between items-start">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-rose-500 bg-rose-500/10 px-3.5 py-1 rounded-full mb-8">
                    TAILORED POLICIES
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">
                      Devopstrio Data <br />delivers trusted insights
                    </h3>
                    <p className="text-xs text-zinc-450 leading-relaxed font-bold mb-6 max-w-sm">
                      Deploy custom data integration pipelines and zero trust compliance profiles tailored for unique sector environments.
                    </p>
                    <Link
                      href="/contact#contact-form"
                      className="px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-md shadow-white/5"
                    >
                      Secure Your Sector
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Cards grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 h-full">
              {useCases.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={idx} delay={idx * 0.05} className="h-full">
                    <div className="relative group rounded-3xl p-6 bg-zinc-950/45 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-500 flex flex-col justify-between h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                      <div>
                        {/* Icon at top */}
                        <div className="w-10 h-10 rounded-2xl bg-rose-600/10 text-rose-500 flex items-center justify-center mb-5">
                          <Icon size={18} />
                        </div>
                        <h4 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-bold">
                          {item.desc}
                        </p>
                      </div>

                      {/* Link at bottom */}
                      <div className="mt-5">
                        <Link href="/contact#contact-form" className="text-xs font-semibold text-rose-500 hover:text-rose-400 hover:underline inline-flex items-center gap-1.5 transition-all">
                          Learn more <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 14. WHY DEVOPSTRIO DATA PLATFORM (WhyChooseDataPlatform)
// ==========================================
const WhyChooseDataPlatform = () => {
  const pillars = [
    {
      num: "01",
      icon: Database,
      title: "Enterprise Scale",
      desc: "Process multi-petabyte analytics, run parallel warehouse query maps, and orchestrate storage nodes dynamically.",
      numColor: "text-rose-500",
      hoverColor: "group-hover:text-rose-500 group-hover:border-rose-500/30",
      glowColor: "rgba(244, 63, 94, 0.04)",
      borderColor: "rgba(244, 63, 94, 0.2)"
    },
    {
      num: "02",
      icon: Cpu,
      title: "AI-Ready Foundation",
      desc: "Clean database columns automatically to prepare tabular training models for model execution.",
      numColor: "text-[#9F8EC9]",
      hoverColor: "group-hover:text-[#9F8EC9] group-hover:border-[#9F8EC9]/30",
      glowColor: "rgba(159, 142, 201, 0.04)",
      borderColor: "rgba(159, 142, 201, 0.2)"
    },
    {
      num: "03",
      icon: Shield,
      title: "Secure by Design",
      desc: "Mask personal fields, trace complete table lineage, and rotate encryption keys schedule-based.",
      numColor: "text-[#5EA5E0]",
      hoverColor: "group-hover:text-[#5EA5E0] group-hover:border-[#5EA5E0]/30",
      glowColor: "rgba(94, 165, 224, 0.04)",
      borderColor: "rgba(94, 165, 224, 0.2)"
    },
    {
      num: "04",
      icon: Zap,
      title: "Real-Time Processing",
      desc: "Capture system event logs and incoming user queries with sub-second stream latency.",
      numColor: "text-[#86D16F]",
      hoverColor: "group-hover:text-[#86D16F] group-hover:border-[#86D16F]/30",
      glowColor: "rgba(134, 209, 111, 0.04)",
      borderColor: "rgba(134, 209, 111, 0.2)"
    },
    {
      num: "05",
      icon: Globe,
      title: "Multi-Cloud Ready",
      desc: "Coordinate databases across Amazon AWS, Google Cloud, and Microsoft Azure warehouses.",
      numColor: "text-[#FFB057]",
      hoverColor: "group-hover:text-[#FFB057] group-hover:border-[#FFB057]/30",
      glowColor: "rgba(255, 176, 87, 0.04)",
      borderColor: "rgba(255, 176, 87, 0.2)"
    },
    {
      num: "06",
      icon: Lock,
      title: "Governed Data",
      desc: "Enforce access control rules to ensure user logins match permitted directory tables.",
      numColor: "text-[#F472B6]",
      hoverColor: "group-hover:text-[#F472B6] group-hover:border-[#F472B6]/30",
      glowColor: "rgba(244, 114, 182, 0.04)",
      borderColor: "rgba(244, 114, 182, 0.2)"
    },
    {
      num: "07",
      icon: BarChart2,
      title: "Business Analytics",
      desc: "Empower non-technical teams with drag-and-drop Looker grids and daily reporting.",
      numColor: "text-[#2DD4BF]",
      hoverColor: "group-hover:text-[#2DD4BF] group-hover:border-[#2DD4BF]/30",
      glowColor: "rgba(45, 212, 191, 0.04)",
      borderColor: "rgba(45, 212, 191, 0.2)"
    },
    {
      num: "08",
      icon: Workflow,
      title: "Future-Ready",
      desc: "Integrate database engines with modern lakehouse formats like Delta Lake and Iceberg.",
      numColor: "text-[#FB7185]",
      hoverColor: "group-hover:text-[#FB7185] group-hover:border-[#FB7185]/30",
      glowColor: "rgba(251, 113, 133, 0.04)",
      borderColor: "rgba(251, 113, 133, 0.2)"
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-b border-zinc-900/60">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 xl:px-8 relative z-10 text-left">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              OUR ADVANTAGE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white uppercase">
              Why Choose Devopstrio Data Platform
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold mt-3">
              We help companies bridge the gap between complex database configurations and high-impact business decisions.
            </p>
          </Reveal>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05 + 0.05}>
                <div className="group relative rounded-[2rem] p-8 bg-[#0A0A0C]/55 border border-zinc-900/90 hover:border-zinc-800 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[260px] text-center overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]">

                  {/* Subtle color-matching radial glow background on card hover */}
                  <div className="absolute -inset-px rounded-[2rem] transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${p.glowColor}, transparent 65%)`,
                      border: `1px solid ${p.borderColor}`
                    }} />

                  <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">

                    <div className="w-full flex flex-col items-center">
                      {/* Icon Badge at Top */}
                      <div className={`w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-400 ${p.hoverColor} transition-all duration-500 group-hover:scale-105`}>
                        <Icon size={20} strokeWidth={2.2} />
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white mt-6 mb-3 transition-colors duration-300">
                        {p.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed max-w-[220px]">
                        {p.desc}
                      </p>
                    </div>

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
// 15. RELATED SOLUTIONS (RelatedSolutions)
// ==========================================
const RelatedSolutions = () => {
  const solutions = [
    { title: "Data Engineering", path: "/ecosystem/platforms-solutions/data-platform" },
    { title: "AI & Data Innovation", path: "/ecosystem/innovation-labs/ai-lab" },
    { title: "Cloud Services", path: "/ecosystem/platforms-solutions/cloud-management-platform" },
    { title: "Business Intelligence", path: "/ecosystem/platforms-solutions/data-platform" },
    { title: "Managed Services", path: "/ecosystem/platforms-solutions/data-platform" },
    { title: "Digital Transformation", path: "/ecosystem/platforms-solutions/data-platform" },
    { title: "Microsoft Partnership", path: "/about" },
    { title: "Google Cloud Partnership", path: "/about" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM LINKS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Related Solutions</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <Link
                href={item.path}
                className="group p-6 bg-zinc-950 border border-zinc-900 hover:border-rose-500/30 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <span className="text-xs md:text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                  {item.title}
                </span>
                <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-rose-500 group-hover:bg-rose-500/10 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
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
// 16. FAQ (PlatformFAQ)
// ==========================================
const PlatformFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: "What is an Enterprise Data Platform?", a: "An Enterprise Data Platform is a centralized hub that unifies ingestion, storage, warehousing, metadata management, and query catalog operations under strict governance default rules." },
    { q: "Can it integrate with existing ERP and CRM systems?", a: "Yes, we support standard extraction connectors for SAP, Salesforce, local SQL servers, and third-party SaaS REST APIs." },
    { q: "Does it support real-time data processing?", a: "Yes, our architecture integrates Kafka brokers and streaming logic to route events directly into target storage under 1-second latencies." },
    { q: "Can it prepare data for AI and machine learning?", a: "Absolutely. Crawlers format columns dynamically to export clean, model-ready tabular arrays for training pipelines." },
    { q: "How is data quality managed?", a: "We run scheduled validation scripts to trace database dependencies, check schema columns, and mask sensitive PII fields." },
    { q: "Which cloud platforms are supported?", a: "Our modules deploy natively inside Amazon AWS, Google Cloud, and Microsoft Azure warehouses." },
    { q: "Is it suitable for multi-cloud environments?", a: "Yes. Our platform coordinates queries seamlessly across distributed Snowflake indexes and Databricks workspaces." },
    { q: "How does it improve business reporting?", a: "It replaces manual excel compiles with dynamic Looker dashboards and automated daily report syncs." }
  ];

  return (
    <section id="faq" className="w-full py-24 bg-black text-white relative border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">FAQ</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-4 uppercase">
            Questions we get <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">asked every day</span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed font-bold">
            Everything you need to know about our data lakehouse architectures, pipeline lineages, and security policies. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
          </p>
        </Reveal>

        {/* Accordion FAQ */}
        <div className="flex flex-col border-t border-zinc-900 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="border-b border-zinc-900 py-6">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group"
                >
                  <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn">
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
// 17. CTA (PlatformCTA)
// ==========================================
const PlatformCTA = () => {
  return (
    <section className="w-full py-32 bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GET STARTED</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-black mb-6 tracking-tight uppercase text-white">
            Turn Enterprise Data into Competitive Advantage
          </h2>
          <p className="text-zinc-300 text-sm md:text-base font-semibold mb-10 max-w-xl mx-auto leading-relaxed">
            Unlock trusted insights, accelerate AI adoption, and empower better decision-making with Devopstrio&apos;s Enterprise Data Platform.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              Schedule a Platform Demo
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact#contact-form"
              className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300"
            >
              Speak with a Data Expert
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// MAIN COMPONENT (DataPlatformPage)
// ==========================================
export default function DataPlatformPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. Hero */}
      <Hero
        badge="Enterprise Data Platform"
        title={
          <>
            Enterprise Data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Transform fragmented enterprise data into trusted business intelligence through scalable data integration, governance, analytics, AI, and real-time processing."
        particles={true}
        particleColors={["#ffffff", "#fda4af", "#f43f5e"]}
        particleBaseSize={150}
        magicRings={true}
        magicRingsColor="#f43f5e"
        magicRingsColorTwo="#9f1239"
        magicRingsRingCount={4}
        magicRingsSpeed={0.5}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "DATA PLATFORM" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Request Platform Demo
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300"
          >
            Talk to a Data Expert
          </Link>
        </div>
      </Hero>

      {/* 2. Platform Overview */}
      <DataPlatformOverview />

      {/* 3. Data Challenges */}
      <DataChallenges />

      {/* 4. Platform Capabilities */}
      <DataCapabilities />

      {/* 5. Enterprise Data Architecture */}
      <DataArchitecture />

      {/* 6. Core Platform Modules */}
      <DataModules />

      {/* 7. Data Pipeline Workflow */}
      <DataPipelineWorkflow />

      {/* 8. Platform Features */}
      <PlatformFeatures />

      {/* 9. Data Governance & Security */}
      <DataGovernance />

      {/* 10. AI & Analytics Integration */}
      <AIAnalyticsIntegration />

      {/* 11. Supported Technologies */}
      <TechnologyStack />

      {/* 12. Business Outcomes */}
      <BusinessOutcomes />

      {/* 13. Industry Use Cases */}
      <IndustryUseCases />

      {/* 14. Why Devopstrio Data Platform */}
      <WhyChooseDataPlatform />

      {/* 15. Related Solutions */}
      <RelatedSolutions />

      {/* 16. FAQ */}
      <PlatformFAQ />

      {/* 17. CTA */}
      <PlatformCTA />
    </main>
  );
}
