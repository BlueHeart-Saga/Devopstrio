"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Database,
  Server,
  Cloud,
  Network,
  Workflow,
  Activity,
  Sparkles,
  Zap,
  BarChart3,
  Search,
  FileCode,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Container,
  Eye,
  Cpu,
  Sliders,
  Briefcase,
  Users,
  HardDrive,
  FileSearch,
  X,
  Download,
  Terminal,
  GitBranch,
  FileCheck,
  Layers,
  Globe,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  LineChart,
  ShieldAlert,
  Key,
  Lock,
  FileText,
  Check,
  BookOpen,
  Table,
  Gauge,
  Filter,
  ShieldCheck,
  Radio
} from "lucide-react";
import Link from "next/link";

export default function DataFrameworkPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalSubmitted, setModalSubmitted] = useState<boolean>(false);
  const [activeArchLayer, setActiveArchLayer] = useState<string>("Ingestion & Streaming");
  const [activeTechCategory, setActiveTechCategory] = useState<string>("Streaming");
  const [activeLifecycleStep, setActiveLifecycleStep] = useState<number>(0);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    dataNeed: "Data Lakehouse & Warehouse",
    message: ""
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Auto-advance lifecycle demo
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLifecycleStep((prev) => (prev + 1) % 8);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // 1. Business Data Challenges
  const businessChallenges = [
    {
      title: "Disconnected Data Sources",
      desc: "Siloed databases, SaaS applications, and legacy files unable to share real-time operational metrics.",
      icon: Database,
      tag: "Data Silos"
    },
    {
      title: "Manual Data Processing",
      desc: "Brittle custom scripts and fragile cron jobs requiring constant engineering intervention.",
      icon: RefreshCw,
      tag: "High Friction"
    },
    {
      title: "Slow Reporting",
      desc: "Hours or days delay in running batch ETL transformations before dashboards update.",
      icon: BarChart3,
      tag: "Stale Analytics"
    },
    {
      title: "Poor Data Quality",
      desc: "Missing schema validation and duplicates corrupting downstream executive BI reports.",
      icon: AlertTriangle,
      tag: "Data Corruption"
    },
    {
      title: "Limited Real-Time Insights",
      desc: "Inability to process high-throughput event streams like IoT sensor logs or live clickstreams.",
      icon: Radio,
      tag: "Latency Lag"
    },
    {
      title: "Governance Complexity",
      desc: "Unclear data ownership, missing column-level PII lineage, and compliance security risks.",
      icon: ShieldAlert,
      tag: "Compliance Risk"
    },
    {
      title: "AI Readiness Gaps",
      desc: "Unstructured data and raw tables unprepared for LLM RAG pipelines or Feature Store ingestion.",
      icon: BrainCircuit,
      tag: "AI Bottleneck"
    },
    {
      title: "Data Scalability Issues",
      desc: "Monolithic relational databases crashing under petabyte-scale concurrent analytics queries.",
      icon: Server,
      tag: "Query Bottleneck"
    }
  ];

  // 2. Data Framework Architecture Layers
  const architectureLayers = [
    {
      id: "ingestion",
      name: "Ingestion & Streaming",
      icon: Workflow,
      color: "from-amber-500 to-orange-600",
      desc: "High-throughput Change Data Capture (CDC), API connectors, and real-time Kafka event streams.",
      components: ["Apache Kafka / Confluent", "Debezium CDC Engine", "Fivetran / Airbyte Connectors", "IoT MQTT Gateways"]
    },
    {
      id: "processing",
      name: "Transformation & Quality",
      icon: Cpu,
      color: "from-rose-500 to-red-600",
      desc: "Stateful stream processing with Flink and modular SQL/Python data models with dbt and Spark.",
      components: ["Apache Flink Streaming", "Apache Spark Batch", "dbt Semantic Models", "Great Expectations QA"]
    },
    {
      id: "storage",
      name: "Lakehouse & Warehouse",
      icon: Database,
      color: "from-purple-500 to-indigo-600",
      desc: "ACID-compliant open table storage combining low-cost object lakes with high-performance warehouses.",
      components: ["Microsoft Fabric / Databricks", "Snowflake / BigQuery", "Delta Lake / Iceberg", "Data Mart Aggregations"]
    },
    {
      id: "governance",
      name: "Governance & Catalog",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600",
      desc: "Automated end-to-end data lineage, column-level PII masking, RBAC, and metadata discovery.",
      components: ["Data Lineage Tracking", "Dynamic PII Masking", "Centralized Data Catalog", "RBAC Access Policies"]
    },
    {
      id: "analytics_ai",
      name: "Analytics & AI Engine",
      icon: BrainCircuit,
      color: "from-blue-500 to-cyan-500",
      desc: "Self-service BI dashboards, vector embedding pipelines, ML Feature Stores, and predictive models.",
      components: ["Power BI / Tableau / Superset", "AI Feature Stores", "Vector DB Indexer", "Predictive Analytics"]
    }
  ];

  // 3. Core Data Components
  const coreDataComponents = [
    { title: "Data Ingestion", desc: "Batch & Change Data Capture (CDC) streaming pipelines.", icon: Workflow, connects: "Ingest" },
    { title: "ETL / ELT Engine", desc: "Declarative dbt & Apache Spark transformation workflows.", icon: RefreshCw, connects: "Transform" },
    { title: "Streaming Engine", desc: "Apache Kafka & Apache Flink event stream processors.", icon: Radio, connects: "Kafka" },
    { title: "Data Lakehouse", desc: "Delta Lake & Apache Iceberg ACID transactional lakes.", icon: Database, connects: "Lakehouse" },
    { title: "Data Warehouse", desc: "Snowflake, BigQuery & Databricks high-speed analytical engines.", icon: Server, connects: "Warehouse" },
    { title: "Data Catalog", desc: "Searchable data discovery portal with metadata mapping.", icon: Search, connects: "Catalog" },
    { title: "Metadata Governance", desc: "Column-level lineage tracing and automated schema registry.", icon: FileCode, connects: "Metadata" },
    { title: "Data Quality Engine", desc: "Automated schema assertion & anomaly quarantine queues.", icon: ShieldCheck, connects: "Quality" },
    { title: "AI Feature Store", desc: "Centralized ML feature repository for real-time model inference.", icon: BrainCircuit, connects: "Feature Store" },
    { title: "Analytics Layer", desc: "Semantic layer feeding Power BI, Tableau, and embedded APIs.", icon: LineChart, connects: "Analytics" }
  ];

  // 4. Data Lifecycle Timeline
  const dataLifecycleStages = [
    { step: 1, name: "Collect", short: "Capture Data", icon: Database, desc: "Capture operational events, API payloads, database logs, and IoT sensor streams.", snippet: "stream.capture(sources=['postgres_cdc', 'stripe_webhooks', 'iot_sensors'])" },
    { step: 2, name: "Ingest", short: "Buffer & Route", icon: Workflow, desc: "Buffer high-throughput messages in Kafka topics with schema validation.", snippet: "kafka.publish(topic='telemetry.v1', payload=validated_event, partition_by='customer_id')" },
    { step: 3, name: "Transform", short: "ELT Cleanup", icon: Cpu, desc: "Cleanse, deduplicate, and model raw data into Silver & Gold Medallion tables.", snippet: "dbt.run(models='gold_daily_active_users', target='snowflake')" },
    { step: 4, name: "Store", short: "Lakehouse Storage", icon: Server, desc: "Persist ACID-compliant Parquet/Delta files on cloud object storage.", snippet: "lakehouse.write(df, format='delta', mode='append', partitionBy='date')" },
    { step: 5, name: "Govern", short: "PII & Lineage", icon: ShieldCheck, desc: "Enforce dynamic PII masking, catalog metadata, and record data lineage.", snippet: "governance.apply_masking_policy(table='gold_customers', role='analyst')" },
    { step: 6, name: "Analyze", short: "Semantic Query", icon: Search, desc: "Run high-performance SQL queries over unified semantic metrics.", snippet: "warehouse.query('SELECT region, SUM(revenue) FROM gold_sales GROUP BY region')" },
    { step: 7, name: "Visualize", short: "BI Dashboards", icon: BarChart3, desc: "Publish interactive dashboards to Power BI, Tableau, and executive portals.", snippet: "powerbi.refresh_dataset(dataset_id='exec_summary_v4') -> Status: SUCCESS" },
    { step: 8, name: "Optimize", short: "Auto-Tune", icon: Zap, desc: "Monitor query performance, optimize table clustering keys, and scale clusters.", snippet: "auto_tuner.optimize_table(name='gold_sales', zorder_by=['date', 'customer_id'])" }
  ];

  // 5. Ingestion & Integration Cards
  const ingestionCards = [
    { title: "API Connectors", desc: "Pre-built REST & GraphQL connectors for SaaS platforms (Salesforce, Stripe, Zendesk).", icon: Workflow },
    { title: "Database Connectors", desc: "Log-based Change Data Capture (CDC) from PostgreSQL, MySQL, and SQL Server.", icon: Database },
    { title: "File Processing", desc: "Automated ingestion for CSV, JSON, Parquet, XML, and Excel object storage uploads.", icon: FileText },
    { title: "IoT Data Collection", desc: "Low-overhead MQTT & HTTP gateways processing millions of edge device logs.", icon: Radio },
    { title: "Event Streaming", desc: "Distributed pub-sub event streaming topics guaranteeing ordered delivery.", icon: Zap },
    { title: "SaaS Integrations", desc: "Zero-code connector pipelines with automatic schema drift adaptation.", icon: Layers },
    { title: "Batch Processing", desc: "Scheduled high-volume micro-batch jobs running during off-peak windows.", icon: RefreshCw },
    { title: "Real-Time Sync", desc: "Sub-second database replication keeping analytics warehouses strictly in sync.", icon: ClockIcon }
  ];

  // 6. Streaming & Real-Time Cards & Architecture
  const streamingCards = [
    { title: "Apache Kafka", desc: "High-throughput, distributed event streaming platform with multi-region replication." },
    { title: "Apache Flink", desc: "Stateful stream processing engine analyzing sliding-window metrics in real time." },
    { title: "Event Streaming", desc: "Pub-sub event backbones connecting microservices and data pipelines seamlessly." },
    { title: "Stream Processing", desc: "Real-time filtering, enrichment, and aggregation prior to persistent storage." },
    { title: "Real-Time Dashboards", desc: "Live-updating operational dashboards displaying metrics with sub-second latency." },
    { title: "Event-Driven Arch", desc: "Decoupled microservice architectures reacting instantly to business events." },
    { title: "Message Queues", desc: "Fault-tolerant dead letter queues ensuring zero message loss during surges." },
    { title: "Live Analytics", desc: "Instant fraud detection and real-time recommendation engines for digital applications." }
  ];

  const streamingFlow = [
    { step: "Events / IoT", icon: Radio, sub: "Raw Clickstreams" },
    { step: "Apache Kafka", icon: Workflow, sub: "Message Buffer" },
    { step: "Apache Flink", icon: Cpu, sub: "Stream Processor" },
    { step: "Lakehouse", icon: Database, sub: "Delta Storage" },
    { step: "Live Dashboard", icon: BarChart3, sub: "Sub-Second BI" }
  ];

  // 7. Data Lake & Warehouse Cards
  const lakehouseCards = [
    {
      category: "Data Lake",
      title: "Data Lake",
      desc: "Store raw structured, semi-structured, and unstructured enterprise data at scale using open Parquet formats on cloud storage.",
      icon: Database,
      features: ["S3 / Azure Blob", "Schema on Read", "Raw Document Storage", "Unstructured Media"]
    },
    {
      category: "Data Warehouse",
      title: "Data Warehouse",
      desc: "High-speed analytical database engines optimized for complex SQL queries, executive reporting, and BI aggregations.",
      icon: Server,
      features: ["Snowflake / BigQuery", "MPP Query Execution", "Columnar Storage", "Instant Scaling"]
    },
    {
      category: "Lakehouse",
      title: "Data Lakehouse",
      desc: "Combines the cheap, flexible storage of a data lake with the ACID transactions, time travel, and speed of a warehouse.",
      icon: Layers,
      features: ["Delta Lake / Iceberg", "ACID Transactions", "Time Travel Audit", "Single Data Source"]
    },
    {
      category: "Data Marts",
      title: "Data Marts",
      desc: "Domain-specific data models tailored for business units (Finance, Marketing, Sales) with simplified access controls.",
      icon: Table,
      features: ["dbt Dimensional Models", "Domain Autonomy", "Custom Aggregations", "RBAC Guardrails"]
    }
  ];

  // 8. Analytics & AI Data Foundation Cards
  const analyticsCards = [
    { title: "Business Intelligence", desc: "Unified semantic data layers feeding executive dashboards in Power BI & Tableau.", icon: BarChart3 },
    { title: "Machine Learning Features", desc: "Centralized Feature Stores providing consistent inputs for model training & inference.", icon: BrainCircuit },
    { title: "Predictive Analytics", desc: "Machine learning forecasting pipelines predicting customer churn and revenue trends.", icon: LineChart },
    { title: "AI Data Preparation", desc: "Vector embedding generators and chunking pipelines powering enterprise RAG LLMs.", icon: FileCode },
    { title: "Data Visualization", desc: "Custom embedded analytics components integrated into web & mobile applications.", icon: Eye },
    { title: "Semantic Models", desc: "Single source of truth metric definitions eliminating conflicting business numbers.", icon: Table },
    { title: "Self-Service Analytics", desc: "Intuitive query interfaces empowering business analysts to explore data safely.", icon: Search },
    { title: "Enterprise Reporting", desc: "Automated, scheduled financial and operational compliance reports.", icon: FileText }
  ];

  // 9. Data Governance & Security Cards
  const governanceCards = [
    { title: "Data Lineage", desc: "Visual dependency maps tracking data from source database columns to final BI metrics.", icon: Workflow },
    { title: "Data Catalog", desc: "Searchable data discovery catalog indexing descriptions, owners, and freshness.", icon: Search },
    { title: "Metadata Management", desc: "Automated schema registration and drift detection alerting engineers to API changes.", icon: FileCode },
    { title: "Data Classification", desc: "Automated AI tagging identifying PII, confidential, and financial fields.", icon: ShieldAlert },
    { title: "Role-Based Access (RBAC)", desc: "Granular row and column-level security policies dynamic to user roles.", icon: Lock },
    { title: "Encryption", desc: "AES-256 encryption at rest and TLS 1.3 encryption in transit across all pipelines.", icon: Key },
    { title: "Compliance", desc: "Pre-configured governance controls aligned with GDPR, CCPA, HIPAA, and SOC 2.", icon: FileCheck },
    { title: "Audit Logging", desc: "Full audit trail logging every query execution, export event, and schema change.", icon: Activity }
  ];

  // 10. Technology Stack Data
  const techStackData = {
    "Streaming": [
      { name: "Apache Kafka", desc: "Distributed event streaming platform.", icon: Workflow },
      { name: "Apache Flink", desc: "Stateful stream processing engine.", icon: Cpu },
      { name: "RabbitMQ", desc: "Robust message broker for enterprise microservices.", icon: Radio }
    ],
    "Processing": [
      { name: "Apache Spark", desc: "Unified analytics engine for large-scale data processing.", icon: Zap },
      { name: "Apache Beam", desc: "Unified model for batch and streaming pipelines.", icon: Workflow },
      { name: "dbt (data build tool)", desc: "Transform data in your warehouse using SQL.", icon: FileCode }
    ],
    "Databases": [
      { name: "PostgreSQL", desc: "Advanced open-source relational database with pgvector.", icon: Database },
      { name: "MongoDB", desc: "Flexible document database for semi-structured data.", icon: Server },
      { name: "SQL Server", desc: "Enterprise relational database management system.", icon: HardDrive },
      { name: "MySQL", desc: "High-performance transactional database.", icon: Table }
    ],
    "Data Platforms": [
      { name: "Microsoft Fabric", desc: "All-in-one analytics solution for enterprises.", icon: Cloud },
      { name: "Databricks", desc: "Unified Data Intelligence Platform powered by Lakehouse.", icon: Sparkles },
      { name: "Snowflake", desc: "Cloud Data Cloud for warehousing & data sharing.", icon: Layers },
      { name: "BigQuery", desc: "Google serverless, highly scalable cloud data warehouse.", icon: Database }
    ],
    "Analytics": [
      { name: "Power BI", desc: "Microsoft enterprise business analytics & visualization.", icon: BarChart3 },
      { name: "Tableau", desc: "Interactive data visualization platform.", icon: LineChart },
      { name: "Grafana", desc: "Operational telemetry dashboards and alerting.", icon: Activity },
      { name: "Apache Superset", desc: "Modern open-source data exploration platform.", icon: Eye }
    ],
    "Cloud": [
      { name: "Azure Data Services", desc: "Azure Synapse, Event Hubs, and Data Lake Storage.", icon: Cloud },
      { name: "AWS Data Stack", desc: "AWS Kinesis, Glue, EMR, and Redshift warehousing.", icon: Server },
      { name: "Google Cloud Data", desc: "GCP Dataflow, Pub/Sub, and BigQuery platform.", icon: Globe },
      { name: "Oracle Cloud Data", desc: "OCI Autonomous Database and Streaming service.", icon: Database }
    ]
  };

  // 11. Business Outcomes KPI Cards
  const businessOutcomes = [
    { value: "Real-Time", title: "Business Insights", desc: "Sub-second event stream analytics replacing delayed day-old batch reports.", highlight: "from-amber-500 to-orange-600" },
    { value: "AI-Ready", title: "Data Platform", desc: "Structured Medallion datasets powering ML models, Feature Stores, and RAG.", highlight: "from-rose-500 to-red-600" },
    { value: "Trusted", title: "Enterprise Data", desc: "100% data quality assertions, schema registries, and column-level PII masking.", highlight: "from-purple-500 to-indigo-600" },
    { value: "Faster", title: "Decision Making", desc: "Self-service semantic models empowering teams with instant, accurate answers.", highlight: "from-emerald-500 to-teal-600" },
    { value: "Scalable", title: "Data Architecture", desc: "Petabyte-scale multi-cloud lakehouses separating compute from storage.", highlight: "from-blue-500 to-cyan-500" },
    { value: "Unified", title: "Analytics Platform", desc: "Single source of truth metrics accessible across Power BI, APIs, and AI models.", highlight: "from-cyan-500 to-blue-600" }
  ];

  // 12. Use Cases
  const useCases = [
    { title: "Customer Analytics", desc: "360-degree customer behavioral views combining clickstreams, CRM, and order data.", icon: Users },
    { title: "Financial Reporting", desc: "Automated general ledger aggregation, revenue forecasting, and executive BI dashboards.", icon: BarChart3 },
    { title: "IoT Data Processing", desc: "Streaming telemetry ingestion from thousands of industrial sensors in real time.", icon: Radio },
    { title: "Supply Chain Analytics", desc: "Real-time inventory tracking, warehouse optimization, and shipment monitoring.", icon: Workflow },
    { title: "Fraud Detection", desc: "Sub-second transaction evaluation using Apache Flink and ML anomaly detection.", icon: ShieldAlert },
    { title: "Predictive Maintenance", desc: "Equipment failure prediction models analyzing vibration and temperature streams.", icon: Activity },
    { title: "Healthcare Analytics", desc: "HIPAA-compliant patient clinical record aggregation and treatment outcome models.", icon: BookOpen },
    { title: "AI Knowledge Platform", desc: "Automated vector embedding pipelines ingesting documents for enterprise LLM RAG.", icon: BrainCircuit }
  ];

  // 13. Related Accelerators
  const relatedAccelerators = [
    { title: "Cloud Accelerator", desc: "Reusable IaC modules for rapid multi-cloud foundation and network deployment.", href: "/ecosystem/accelerators-frameworks/cloud-accelerator", tag: "Cloud IaC" },
    { title: "DevOps Accelerator", desc: "Enterprise CI/CD pipeline templates, GitOps automation, and Kubernetes manifests.", href: "/ecosystem/accelerators-frameworks/devops-accelerator", tag: "DevOps CI/CD" },
    { title: "AI Framework", desc: "Enterprise AI application foundation for LLMs, RAG, vector databases, and MLOps.", href: "/ecosystem/accelerators-frameworks/ai-framework", tag: "AI Framework" },
    { title: "Security Framework", desc: "Zero-trust compliance guardrails, automated vulnerability scanning, and IAM.", href: "/ecosystem/accelerators-frameworks/security-framework", tag: "Cybersecurity" },
    { title: "Landing Zone Portal", desc: "Explore enterprise cloud landing zone blueprints and IaC repository directory.", href: "/ecosystem/accelerators-frameworks/landing-zone", tag: "Landing Zone" }
  ];

  // 14. FAQ List
  const faqs = [
    {
      q: "What is the Devopstrio Data Framework?",
      a: "The Devopstrio Data Framework is an enterprise-ready foundation for building modern data platforms. It provides reusable architectures for data ingestion, event streaming (Kafka/Flink), Lakehouse storage (Delta Lake/Iceberg), data quality, governance, and AI-ready pipelines."
    },
    {
      q: "Does it support real-time event streaming?",
      a: "Yes. Our framework includes pre-configured streaming architectures powered by Apache Kafka, Apache Flink, and Change Data Capture (Debezium), delivering sub-second event processing for live dashboards and fraud detection."
    },
    {
      q: "Can it build modern Data Lakehouses?",
      a: "Yes. We implement the Medallion Architecture (Bronze, Silver, Gold) using open table formats like Delta Lake and Apache Iceberg on cloud object stores (Azure ADLS, AWS S3), combining low cost with ACID transactional guarantees."
    },
    {
      q: "Which cloud platforms and data warehouses are supported?",
      a: "We support Microsoft Fabric, Databricks, Snowflake, Google BigQuery, Azure Synapse, AWS Redshift, and open-source engines like PostgreSQL and Apache Spark."
    },
    {
      q: "Does it integrate with BI tools like Power BI and Tableau?",
      a: "Yes. Our semantic modeling layer standardizes business metric calculations centrally, providing direct, high-speed connectivity to Power BI, Tableau, Grafana, and Apache Superset."
    },
    {
      q: "How does it support Generative AI and Machine Learning workloads?",
      a: "The framework includes automated pipelines that chunk, embed, and index document streams into vector databases (Qdrant, Pinecone) for RAG applications, alongside ML Feature Stores for real-time model inference."
    },
    {
      q: "How is data governance and compliance managed?",
      a: "We deploy automated data lineage tracking, column-level dynamic PII masking, schema registries, catalog metadata mapping, and RBAC policies aligned with GDPR, HIPAA, and SOC 2."
    },
    {
      q: "Can existing legacy data platforms be modernized?",
      a: "Yes. Our architecture blueprints allow for progressive migration—enabling you to ingest data from legacy databases, modernize transformations with dbt/Spark, and transition smoothly without disrupting active business reports."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Ambient Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      {/* 1. HERO SECTION */}
      <Hero
        badge="ACCELERATORS & FRAMEWORKS"
        colorBends={true}
        colorBendsColors={["#f59e0b", "#f43f5e", "#3b82f6"]}
        title={
          <>
            Devopstrio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-600">
              Data Framework
            </span>
          </>
        }
        subtitle="Accelerate enterprise data modernization with reusable frameworks for ingestion, streaming, transformation, governance, analytics, and AI-ready data platforms."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ACCELERATORS & FRAMEWORKS", href: "/ecosystem/accelerators-frameworks" },
          { label: "DATA FRAMEWORK" }
        ]}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Hero Highlights Badges */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Real-Time Data Pipelines",
              "Data Lakehouse",
              "Streaming Analytics",
              "Data Governance",
              "AI-Ready Architecture",
              "Enterprise Integration"
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById("architecture");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
            >
              Explore Data Framework
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 rounded-full text-xs md:text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-900 cursor-pointer"
            >
              <Database className="w-4 h-4 text-rose-500" />
              Talk to a Data Architect
            </button>
          </div>
        </div>
      </Hero>

      {/* 2. DATA FRAMEWORK OVERVIEW */}
      <section className="w-full py-20 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
              FOUNDATIONAL OVERVIEW
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Transform Data into Business Intelligence
            </h2>
            <p className="text-zinc-300 text-base md:text-xl leading-relaxed font-medium">
              Modern organizations rely on trusted, high-quality data to drive innovation. The Devopstrio Data Framework provides reusable architectures, data pipelines, governance models, and analytics foundations that enable businesses to collect, process, and utilize data efficiently across cloud environments.
            </p>
          </Reveal>

          {/* Overview Highlights 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "Real-Time Streaming", icon: Radio, desc: "Sub-second event stream processing with Apache Kafka & Apache Flink." },
              { title: "Lakehouse Architecture", icon: Layers, desc: "ACID-compliant Delta Lake & Iceberg storage over object lakes." },
              { title: "AI-Ready Foundation", icon: BrainCircuit, desc: "Vector embedding ingestion & ML Feature Store data pipelines." },
              { title: "Data Governance & Lineage", icon: ShieldCheck, desc: "Column-level PII masking, data cataloging, and automated audit logs." }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                  <pillar.icon className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS DATA CHALLENGES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PAIN POINTS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Challenges We Solve
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Eliminate data silos, manual processing friction, slow reporting, and AI readiness gaps.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessChallenges.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-rose-500" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 font-bold">
                        {card.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DATA FRAMEWORK ARCHITECTURE */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE BLUEPRINT
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Data Framework Architecture
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Interactive 5-layer modern data platform stack from sources to business dashboards.
            </p>
          </Reveal>

          {/* Layer Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {architectureLayers.map((layer) => {
              const isSelected = activeArchLayer === layer.name;
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveArchLayer(layer.name)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-500/20"
                      : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <Icon className="w-5 h-5 text-rose-500 mb-2" />
                  <span className="text-xs font-bold block truncate">{layer.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Layer Detail Card */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
            {architectureLayers.map((layer) => {
              if (layer.name !== activeArchLayer) return null;
              const Icon = layer.icon;
              return (
                <div key={layer.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-medium">
                      {layer.desc}
                    </p>
                  </div>
                  <div className="lg:col-span-7 grid grid-cols-2 gap-3">
                    {layer.components.map((comp, idx) => (
                      <div key={idx} className="p-4 bg-black rounded-xl border border-zinc-850 flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                        <span className="text-xs font-bold text-zinc-200">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CORE DATA COMPONENTS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              BUILDING BLOCKS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Core Data Components
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              10 modular components built for enterprise scalability, streaming, and AI integrations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreDataComponents.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                      {comp.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {comp.desc}
                    </p>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-rose-400 border border-zinc-800 font-bold self-start uppercase">
                    {comp.connects}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. DATA LIFECYCLE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              END-TO-END PIPELINE
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Data Lifecycle
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Interactive 8-stage progression from raw event collection to automated query optimization.
            </p>
          </Reveal>

          {/* Lifecycle Stage Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-8 gap-2 mb-8">
            {dataLifecycleStages.map((stg, idx) => {
              const isCurrent = activeLifecycleStep === idx;
              return (
                <button
                  key={stg.step}
                  onClick={() => setActiveLifecycleStep(idx)}
                  className={`p-3 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-500/20"
                      : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <span className="text-[9px] font-mono text-rose-400 font-bold block mb-0.5">
                    Step {stg.step}
                  </span>
                  <span className="text-xs font-bold block truncate">{stg.short}</span>
                </button>
              );
            })}
          </div>

          {/* Inspector Panel */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-mono font-bold">
                Step {dataLifecycleStages[activeLifecycleStep].step} of 8: {dataLifecycleStages[activeLifecycleStep].short}
              </span>
              <h3 className="text-xl font-bold text-white">
                {dataLifecycleStages[activeLifecycleStep].name}
              </h3>
              <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                {dataLifecycleStages[activeLifecycleStep].desc}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveLifecycleStep((prev) => (prev > 0 ? prev - 1 : 7))}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveLifecycleStep((prev) => (prev + 1) % 8)}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white cursor-pointer"
                >
                  Next Step
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-black rounded-2xl p-5 border border-zinc-900 font-mono text-xs text-emerald-400 overflow-x-auto shadow-inner">
              <div className="flex justify-between text-zinc-500 text-[10px] mb-3 pb-2 border-b border-zinc-900">
                <span>data-step-{dataLifecycleStages[activeLifecycleStep].step}.py</span>
                <span>PIPELINE EXECUTION LOG</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-zinc-300">
                {dataLifecycleStages[activeLifecycleStep].snippet}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DATA INGESTION & INTEGRATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MULTI-SOURCE INGESTION
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Data Ingestion & Integration
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              High-throughput CDC, API connectors, file processing, and SaaS sync.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ingestionCards.map((ing, idx) => {
              const Icon = ing.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {ing.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {ing.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. STREAMING & REAL-TIME PROCESSING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              REAL-TIME ANALYTICS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Process Data as It Happens
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Low-latency event processing with Apache Kafka, Apache Flink, and stream analytics.
            </p>
          </Reveal>

          {/* Streaming Architecture Diagram */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {streamingFlow.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-black border border-zinc-900 w-full md:w-48">
                  <step.icon className="w-5 h-5 text-rose-500 mb-2" />
                  <span className="text-xs font-bold text-white">{step.step}</span>
                  <span className="text-[10px] text-zinc-400 font-mono">{step.sub}</span>
                </div>
                {i < 4 && <ArrowRight className="w-4 h-4 text-rose-500 hidden md:block" />}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {streamingCards.map((st, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Radio className="w-4 h-4 text-rose-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DATA LAKE & DATA WAREHOUSE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MODERN STORAGE PATTERNS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Data Lake & Data Warehouse
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Combining the cheap scale of object lakes with the speed and ACID guarantees of lakehouses.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lakehouseCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-zinc-950/80 border border-zinc-800 rounded-3xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-rose-500" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded bg-zinc-900 text-rose-400 border border-zinc-800">
                        {card.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-zinc-900">
                    {card.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="text-xs font-bold text-zinc-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. ANALYTICS & AI DATA FOUNDATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              VALUABLE INSIGHTS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Analytics & AI Data Foundation
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Powering business intelligence, ML feature stores, and RAG vector indexes.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsCards.map((anCard, idx) => {
              const Icon = anCard.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {anCard.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {anCard.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. DATA GOVERNANCE & SECURITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              TRUSTED & COMPLIANT
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Data Governance & Security
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Data lineage, automated PII masking, catalog metadata, and RBAC policies.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceCards.map((govCard, idx) => {
              const Icon = govCard.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {govCard.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {govCard.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DATA ECOSYSTEM
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Deep integrations across streaming, batch processing, data platforms, and analytics.
            </p>
          </Reveal>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(techStackData).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTechCategory === cat
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                    : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-850"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards for active category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackData[activeTechCategory as keyof typeof techStackData]?.map((tech: any, idx: number) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium mt-1">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. BUSINESS OUTCOMES (Large KPI Cards) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MEASURABLE IMPACT
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Business Outcomes
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Accelerate real-time analytics while ensuring enterprise governance and AI readiness.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/80 border border-zinc-800 rounded-3xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl"
              >
                <div>
                  <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${outcome.highlight} tracking-tight block mb-3`}>
                    {outcome.value}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {outcome.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. USE CASES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE DOMAINS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Use Cases
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Data platform deployment blueprints across industry domains and AI workloads.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {useCase.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. RELATED ACCELERATORS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ECOSYSTEM SYNERGY
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related Accelerators
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Explore complementary frameworks in the Devopstrio engineering ecosystem.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAccelerators.map((acc, idx) => (
              <Link
                key={idx}
                href={acc.href}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {acc.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                    {acc.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {acc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 16. FAQ SECTION */}
      <section id="faq" className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Everything you need to know
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Have questions about the Devopstrio Data Framework? Check out answers to common inquiries below.
            </p>
          </Reveal>

          {/* Accordion List */}
          <div className="flex flex-col border-t border-zinc-900">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-rose-400 transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-medium max-w-4xl animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 17. CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 space-y-8">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-2">
              BUILD INTELLIGENT DATA ECOSYSTEMS
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Build an Intelligent Enterprise Data Platform
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
              Create scalable, secure, and AI-ready data ecosystems with the Devopstrio Data Framework—accelerating analytics, automation, and data-driven decision making.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-rose-600/30 cursor-pointer hover:scale-105"
            >
              Schedule a Data Strategy Workshop
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full transition-all duration-300 cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-500" />
              Explore Data Solutions
            </button>
          </div>
        </div>
      </section>

      {/* STRATEGY WORKSHOP MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl space-y-6">
            <button
              onClick={() => {
                setModalOpen(false);
                setModalSubmitted(false);
              }}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalSubmitted ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Workshop Scheduled!</h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                  Thank you for your interest in the Devopstrio Data Framework. Our principal data architects will reach out within 24 hours to schedule your enterprise architecture workshop.
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setModalSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-white rounded-full transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-rose-500 font-bold uppercase block mb-1">
                    DEVOPSTRIO DATA WORKSHOP
                  </span>
                  <h3 className="text-xl font-bold text-white">Schedule a Data Strategy Workshop</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Primary Data Initiative</label>
                    <select
                      value={formData.dataNeed}
                      onChange={(e) => setFormData({ ...formData, dataNeed: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    >
                      <option value="Data Lakehouse & Warehouse">Data Lakehouse & Warehouse (Databricks / Snowflake / Fabric)</option>
                      <option value="Real-Time Streaming">Real-Time Event Streaming (Kafka / Flink / CDC)</option>
                      <option value="AI-Ready Data Pipelines">AI-Ready Data Pipelines & Feature Store</option>
                      <option value="Data Governance & Lineage">Data Governance, Cataloging & PII Masking</option>
                      <option value="Modern Data Stack Migration">Modernizing Legacy Data Stack to Cloud</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Project Goals</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your current data stack or analytics objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer"
                >
                  Submit Workshop Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

// Helper icon component for Clock
function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
