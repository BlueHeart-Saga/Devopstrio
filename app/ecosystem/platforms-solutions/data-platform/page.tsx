"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Database,
  Cpu,
  BarChart2,
  Activity,
  Layers,
  Sparkles,
  Server,
  Workflow
} from "lucide-react";
import Link from "next/link";

export default function DataPlatformPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const heroMetrics = [
    { value: "PB-Scale", label: "Data Volumes" },
    { value: "< 1s", label: "Stream Latency" },
    { value: "SOC-2", label: "Compliance Ready" },
    { value: "100%", label: "Lineage Tracked" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pipeFeatures = [
    "Kafka cluster nodes handling incoming event logs concurrently",
    "Flink real-time transformation processing telemetry fields",
    "Spark batch operations aggregating weekly analytics updates"
  ];

  const warehouseFeatures = [
    "Snowflake isolated storage zones routing billing records",
    "Databricks lakehouse compute engines running analysis, parsing inputs",
    "Redshift warehouse setups indexing regional database snapshots",
    "Delta Lake schema protection protocols keeping records safe"
  ];

  const govFeatures = [
    "Data Catalogs mapping database table schemas automatically",
    "Lineage Trackers mapping data sources to final reporting charts",
    "Access Control rules matching user logins to database views",
    "Compliance checking scripts masking personal information fields"
  ];

  const scienceFeatures = [
    "Jupyter workspace servers hosting machine learning files",
    "MLflow metric dashboards tracking custom algorithm scores",
    "Model Deployment endpoints serving real-time predictions"
  ];

  const biFeatures = [
    "Looker query connections rendering customer dashboards",
    "PowerBI report exports syncing daily metrics sheets",
    "Custom Reporting API hubs delivering metrics to external services"
  ];

  const faqs = [
    { q: "What is a lakehouse architecture?", a: "A lakehouse combines the cheap storage of a data lake with the structured query capability and ACID transactions of a traditional data warehouse." },
    { q: "How does the platform enforce data lineage tracking?", a: "We analyze SQL query logs and pipeline parameters to compile a visual dependency map from source tables to BI outputs." },
    { q: "Is personal information (PII) masked automatically?", a: "Yes, you can configure classification policies that automatically hash or mask fields like SSNs and emails at read-time." },
    { q: "Does the platform support real-time data streaming?", a: "Yes, we deploy Kafka and Flink orchestrations to capture and process streaming data with sub-second latency." },
    { q: "How are analytics models deployed to production?", a: "We pack models into lightweight Docker containers served via secure API endpoints running inside Kubernetes clusters." },
    { q: "Can we connect external BI tools like Looker?", a: "Yes, we provide standard ODBC/JDBC connectors and configure row-level authentication for external tools." },
    { q: "What data formats are supported?", a: "Our pipelines handle CSV, JSON, Apache Parquet, Avro, and traditional relational database tables." },
    { q: "Does the platform handle cataloging automatically?", a: "Yes, metadata crawlers run on schedules to scan tables, index schemas, and tag column types automatically." },
    { q: "What security compliance targets are supported?", a: "We configure storage and compute environments to align with GDPR, HIPAA, and SOC-2 data security rules." },
    { q: "How do we get started with the Data Platform?", a: "Click 'Build Data Architecture' to consult with our data architects and review staging configurations." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="Data Engineering Unit"
        title={
          <>
            Enterprise Data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Deploy real-time Kafka streams, coordinate Snowflake warehouses, catalogue database schemas, and serve predictions."
        particles={true}
        particleColors={["#ffffff", "#fef08a", "#eab308"]}
        stats={heroMetrics}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "DATA PLATFORM" }
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Build Data Architecture
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>


      {/* 2. REAL-TIME DATA PIPELINES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">STREAM CORE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Real-Time Data Pipelines</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Stream data streams reliably. Process and convert incoming database transactions using real-time Kafka logs.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pipeFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Workflow className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLOUD WAREHOUSE & LAKEHOUSE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {warehouseFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Database className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">WAREHOUSE CONFIG</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cloud Warehouse & Lakehouse</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Consolidate enterprise database storage. Query metrics, track account histories, and isolate storage groups cleanly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DATA GOVERNANCE & METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CATALOG RULES</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Data Governance & Metrics</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Map database dependencies. Track table lineage, secure sensitive fields, and catalog active database structures in real-time.
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

      {/* 5. DATA SCIENCE & ANALYTICS ML */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {scienceFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Cpu className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ML DEPLOYMENT</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Data Science & ML</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Deploy predictive algorithms. Host notebook environments, monitor training metrics, and serve models via secure REST endpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PLATFORM DATA ARCHITECTURE */}
      <section className="w-full py-28 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DATA STREAM PATHWAY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Platform Data Architecture</h2>
          </Reveal>

          <div className="max-w-3xl mx-auto bg-zinc-950/40 border border-zinc-900/80 rounded-3xl p-8 lg:p-12 relative overflow-hidden font-mono text-xs hover:border-rose-500/20 transition-all duration-500 shadow-2xl">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Data Sources</span>
                <span className="text-zinc-400">Application metrics, database queries, webhook triggers</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Ingestion Layer</span>
                <span className="text-zinc-400">Kafka event pipelines processing schemas</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Storage & Compute</span>
                <span className="text-zinc-400">Snowflake lakehouse queries and Databricks sets</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Serving Layer</span>
                <span className="text-zinc-400">BI dashboards, Looker reports, ML predictions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS INTELLIGENCE BI */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">REPORT HUB</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Business Intelligence</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Query Looker configurations, compile PowerBI data logs, and present interactive dashboard charts directly to enterprise teams.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {biFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <BarChart2 className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-655 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
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
                    <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Below FAQ callout */}
          <Reveal delay={0.2}>
            <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-xs md:text-sm font-bold">
                Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
              </p>
              <a
                href="mailto:info@devopstrioglobal.com"
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Deploy Data Infrastructure</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our cloud engineers to plan your lakehouse staging.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Build Data Architecture
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
