"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
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
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        <div className="absolute inset-0 z-0">
          <img src="/assets/ecosystem/sub-page-hero/ecosystem_Accelerators_Frameworks/data.png" alt="Data Framework background" className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-20">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <DatabaseZap className="w-3.5 h-3.5" />
              DATA ARCHITECTURE IP
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Data Engineering Framework
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Enterprise-grade data pipelines and analytics architectures.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              We deploy highly scalable, fault-tolerant data frameworks that unify batch and streaming workloads, ensuring your analytics and AI models are fueled by clean, real-time data.
            </p>
          </Reveal>
          
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. DATA ARCHITECTURE FLOW */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">THE PIPELINE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Data Architecture</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {architectureFlow.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[180px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                  <Settings className="w-6 h-6 text-rose-500 mb-4" />
                  <h4 className="text-sm font-bold text-white mb-2">{stage.step}</h4>
                  <p className="text-[10px] text-zinc-400 font-medium">{stage.desc}</p>
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
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">REAL-TIME</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Streaming Framework</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Process events instantly. Our Kafka and Flink blueprints power low-latency applications like fraud detection and live inventory routing.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {streamingFramework.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Workflow className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
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
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">STORAGE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Data Lake Framework</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
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
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">INSIGHTS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Analytics Framework</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analytics.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <LineChart className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
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
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">COMPLIANCE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Governance Framework</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
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
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">MACHINE LEARNING</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">AI Integration</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiIntegration.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <BrainCircuit className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SUCCESS METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">IMPACT</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Framework Metrics</h2>
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
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
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

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Unlock Data Intelligence</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
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
