"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  DatabaseZap,
  Database,
  Workflow,
  LineChart,
  ShieldAlert,
  BrainCircuit,
  Settings
} from "lucide-react";
import Link from "next/link";

export default function DataFrameworkPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const streamingFramework = [
    { title: "Apache Kafka", desc: "Enterprise event streaming backbone handling millions of events per second with guaranteed exactly-once processing." },
    { title: "Apache Flink", desc: "Stateful stream processing templates that aggregate, filter, and alert on real-time data before it hits the database." },
    { title: "Apache Spark", desc: "Massive micro-batch processing blueprints optimized for complex ETL transformations on petabyte-scale datasets." }
  ];

  const dataLake = [
    { title: "Delta Lake / Iceberg", desc: "Open table formats that bring ACID transactions and time-travel capabilities directly to cheap cloud object storage." },
    { title: "Medallion Architecture", desc: "Structuring data logically into Bronze (Raw), Silver (Cleansed), and Gold (Business-Ready) layers." },
    { title: "Data Contracts", desc: "Enforcing strict schema validation at the ingestion layer so upstream software changes never break downstream dashboards." }
  ];

  const analytics = [
    { title: "Serverless Warehousing", desc: "Integrating Snowflake or BigQuery for ad-hoc, high-speed analytical queries without managing cluster hardware." },
    { title: "Semantic Layer", desc: "Defining business metrics (like 'Active User') centrally so all BI tools and dashboards report the exact same numbers." },
    { title: "Embedded Analytics", desc: "APIs that securely expose data lake metrics directly into your customer-facing web applications." }
  ];

  const governance = [
    "Data Lineage tracking exactly where a column of data originated and every transformation it went through",
    "Role-Based Access Control (RBAC) masking PII columns (like SSNs) dynamically based on user permissions",
    "Automated Data Quality monitors that halt pipelines if anomaly thresholds (like >50% null values) are breached"
  ];

  const aiIntegration = [
    { title: "Feature Stores", desc: "Centralized repositories where data engineers clean and store features for machine learning models to consume instantly." },
    { title: "Vector Pipelines", desc: "Automated jobs that constantly convert new text data into vector embeddings and sync them to Qdrant/Pinecone for RAG." },
    { title: "Model Monitoring", desc: "Observability pipelines tracking data drift to alert data scientists when an ML model needs retraining." }
  ];

  const architectureFlow = [
    { step: "Ingest", desc: "Kafka / Fivetran" },
    { step: "Process", desc: "Spark / dbt" },
    { step: "Store", desc: "Delta Lake / S3" },
    { step: "Serve", desc: "Trino / Snowflake" }
  ];

  const metrics = [
    { value: "<500ms", label: "Real-time Processing Latency" },
    { value: "100%", label: "Data Quality Guarantee" },
    { value: "-60%", label: "Cloud Storage Costs" }
  ];

  const faqs = [
    { q: "What is a 'Lakehouse'?", a: "A Lakehouse combines the cheap, flexible storage of a Data Lake with the reliability, ACID transactions, and fast query performance of a Data Warehouse (using formats like Delta Lake or Apache Iceberg)." },
    { q: "What is the Medallion Architecture?", a: "It's a data design pattern. Bronze layer holds raw, untransformed data. Silver layer holds cleaned, deduplicated data. Gold layer holds highly refined, aggregated data ready for BI tools to consume." },
    { q: "How do you handle schema changes from source databases?", a: "We implement Data Contracts and use tools like Debezium for Change Data Capture (CDC). If an upstream database drops a column, our schema registries catch the breaking change before it corrupts the pipeline." },
    { q: "Why use Flink over Spark for streaming?", a: "Spark uses 'micro-batching' (processing chunks of data every few seconds). Flink is a true event-driven streaming engine, processing each event the millisecond it arrives, which is critical for use cases like fraud detection." },
    { q: "What is a Semantic Layer?", a: "A Semantic Layer acts as a translator between raw database tables and business users. Instead of writing SQL, users query defined concepts like 'Revenue by Region', ensuring everyone gets the exact same calculation." },
    { q: "How do you enforce data quality?", a: "We run automated tests (using tools like Great Expectations or dbt tests) at every stage. If data violates a rule (e.g., negative age values), it is quarantined into a 'dead letter queue' and an alert is fired." },
    { q: "Do these frameworks support real-time AI?", a: "Yes. Our pipelines can stream live data directly into Feature Stores and Vector Databases, ensuring your AI models and RAG applications are reasoning over data that is only seconds old." },
    { q: "How do you handle data privacy (GDPR/CCPA)?", a: "We implement dynamic data masking. A data scientist querying a table might see plain text, but a third-party analyst running the exact same query will see '***' in the PII columns, enforced at the query-engine level." },
    { q: "Are we locked into a specific cloud vendor?", a: "No. Our Data Framework relies heavily on open-source standards (Kafka, Spark, Iceberg). You can migrate these workloads freely between AWS, Azure, GCP, or even on-premises." },
    { q: "How do we deploy this data framework?", a: "Click 'Unlock Data Intelligence' below to schedule a data architecture whiteboard session with our engineers." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="DATA ARCHITECTURE IP"
        colorBends={true}
        colorBendsColors={["#f43f5e", "#f59e0b", "#a855f7"]}
        title={
          <>
            Data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering Framework
            </span>
          </>
        }
        subtitle="Enterprise-grade data pipelines and analytics architectures. We deploy highly scalable, fault-tolerant data frameworks that unify batch and streaming workloads, ensuring your analytics and AI models are fueled by clean, real-time data."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ACCELERATORS & FRAMEWORKS", href: "/ecosystem/accelerators-frameworks" },
          { label: "DATA FRAMEWORK" }
        ]}
      >
        <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
      </Hero>

      {/* 2. DATA ARCHITECTURE FLOW */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">THE PIPELINE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Data Architecture</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {architectureFlow.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[180px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                  <Settings className="w-6 h-6 text-rose-500 mb-4" />
                  <h4 className="text-base font-bold text-white mb-2">{stage.step}</h4>
                  <p className="text-xs text-zinc-300 font-medium">{stage.desc}</p>
                </div>
                {idx < architectureFlow.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STREAMING FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">REAL-TIME</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Streaming Framework</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Process events instantly. Our Kafka and Flink blueprints power low-latency applications like fraud detection and live inventory routing.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {streamingFramework.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Workflow className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. DATA LAKE FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:order-2">
              {dataLake.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Database className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">STORAGE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Data Lake Framework</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Unify structured and unstructured data using the Medallion architecture, layered over cost-effective object storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ANALYTICS FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">INSIGHTS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Analytics Framework</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analytics.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <LineChart className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GOVERNANCE FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">COMPLIANCE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Governance Framework</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Ensure trust in your data. Our frameworks automate data cataloging, quality checks, and strict access controls.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {governance.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <ShieldAlert className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. AI INTEGRATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">MACHINE LEARNING</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">AI Integration</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiIntegration.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <BrainCircuit className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SUCCESS METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">IMPACT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Framework Metrics</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900/60 rounded-xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-center items-center">
                <span className="text-4xl font-black text-white tracking-tight mb-2">{m.value}</span>
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">{m.label}</span>
              </div>
            ))}
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
              Everything you need to know about the Data Framework. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Unlock Data Intelligence</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Eliminate data silos and pipeline fragility. Deploy our enterprise data frameworks to build a reliable foundation for BI and Generative AI.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Deploy Data Framework
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
