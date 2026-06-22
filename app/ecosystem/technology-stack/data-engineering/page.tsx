"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  Database,
  Cpu,
  Workflow,
  Layers,
  Sparkles,
  Link as LinkIcon,
  ShieldCheck,
  Server,
  Activity,
  GitBranch
} from "lucide-react";
import Link from "next/link";

export default function DataEngineeringPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const technologies = [
    "Kafka", "Spark", "Flink", "Delta Lake", "Snowflake", "PostgreSQL", "MongoDB"
  ];

  const archFeatures = [
    "Multi-tier storage models isolating hot transactions and cold history databases",
    "Declarative schema migrations checking database consistency",
    "High-performance query tuning optimizing resource load profiles"
  ];

  const streamFeatures = [
    "Kafka telemetry streams scraping application logs concurrently",
    "Flink stream processing transforming metrics in sub-second ticks",
    "Event Driven orchestrations routing messages to specific storage topics",
    "Active replication profiles preserving stream parameters across nodes"
  ];

  const warehouseFeatures = [
    "Snowflake analytical workspaces routing isolated division data",
    "Delta Lake transactional storage layers enforcing ACID structures",
    "Spark batch operations aggregating weekly data metrics sets",
    "Data archiving routines compressing legacy logs into cloud buckets"
  ];

  const analyticsFeatures = [
    "Custom BI API integration exposing metric aggregations",
    "Ad-hoc SQL querying interfaces routing to read replicas",
    "Performance tuning indices tracking average transaction speeds"
  ];

  const govFeatures = [
    "Data Catalog index mappings tracing table schemas automatically",
    "Lineage tracker maps showing path from source to target charts",
    "PII data mask patterns hashing sensitive database fields"
  ];

  const aiFeatures = [
    "AI analytics agents querying DB tables using natural language",
    "Features store databases hosting normalized machine learning inputs",
    "Automated anomaly trackers alerting on spikes in data value metrics"
  ];

  const faqs = [
    { q: "How does Apache Flink compare to Apache Spark?", a: "Flink is built for continuous, sub-second stream processing, whereas Spark is highly optimized for micro-batch and heavy distributed batch operations." },
    { q: "What is a Delta Lake ACID transaction?", a: "It ensures database modifications either complete entirely or not at all (Atomicity, Consistency, Isolation, Durability), preventing corrupt state errors." },
    { q: "How do you coordinate Snowflake compute costs?", a: "We configure auto-suspend timers on virtual warehouses, turning off compute resources during idle hours automatically." },
    { q: "Can we stream metrics directly from MongoDB?", a: "Yes, we deploy Kafka source connectors listening to MongoDB change streams, sending modifications to other services in real-time." },
    { q: "What is the data catalog's main role?", a: "It indexes schemas, annotations, and column descriptions across all tables, helping business teams find data assets easily." },
    { q: "How do you check for data pipeline delays?", a: "We set up Prometheus telemetry trackers checking the lag between Kafka message production and consumer offsets." },
    { q: "Is PostgreSQL used for analytics?", a: "We utilize PostgreSQL for fast transaction records and read-replicas, routing heavy historical reports to Snowflake warehouses." },
    { q: "How are personal data fields masked?", a: "We run data pipeline masking functions that hash fields like credit cards and emails before they are written to analytical workspaces." },
    { q: "Does the system support dbt transformations?", a: "Yes, we model, compile, and test SQL tables inside the warehouse using versioned dbt workflows." },
    { q: "How do we start planning our data engineering platform?", a: "Click 'Consult Data Engineers' to schedule an audit of your database schemas and configure pipeline staging." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-32 bg-black overflow-hidden border-b border-zinc-900/60 flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-10">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Database className="w-3.5 h-3.5" />
              Data Engineering Unit
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Data Engineering
            </h1>
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-8 max-w-2xl mx-auto">
              Kafka telemetry streams and Spark analytics.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              Build data architectures, configure streaming platforms, manage warehouses, tune analytics layers, and enforce governance.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Consult Data Engineers
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGIES BAR */}
      <section className="w-full py-10 bg-zinc-950 border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {technologies.map((tech, idx) => (
              <span key={idx} className="text-zinc-500 hover:text-zinc-300 transition-colors duration-300 text-xs md:text-sm font-mono tracking-wider font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DATA ARCHITECTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">TOPOLOGY</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Data Architecture</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Design reliable database enclaves. Separate write-heavy transactional tables from analytics read-only copies.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {archFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. STREAMING PLATFORM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {streamFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Workflow className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">STREAM CORE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Streaming Platform</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Process event streams on-the-fly. Run Kafka brokers, deploy Flink transformation scripts, and verify payloads structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DATA WAREHOUSE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">LAKEHOUSE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Data Warehouse</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Centralize analytical databases. Query Snowflake enclaves and organize versioned tables using Delta Lake file structures.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {warehouseFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Database className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ANALYTICS LAYER */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {analyticsFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Activity className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">BI CONNECTORS</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Analytics Layer</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Deliver metrics charts fast. Expose ODBC/JDBC database connectors and route queries to read-replicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DATA GOVERNANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">COMPLIANCE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Data Governance</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Enforce privacy guidelines. Catalog table columns schemas, trace dependencies, and mask personal information fields automatically.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {govFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Layers className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. AI INTEGRATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {aiFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">INTELLIGENT PIPELINES</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">AI Integration</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Bridge data tables to machine learning. Deploy features stores and automate pipeline anomaly alert rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-zinc-950/50 border border-zinc-900 rounded-xl overflow-hidden hover:border-zinc-800 transition-colors duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white"
                  >
                    {faq.q}
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-500" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[200px] border-t border-zinc-900/60" : "max-h-0"}`}>
                    <p className="p-6 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Deploy Data Pipelines</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our data engineering unit to build Kafka streams and Snowflake analytical workspaces.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Consult Data Engineers
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
