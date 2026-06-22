"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Cpu,
  Database,
  Shield,
  Briefcase,
  Sparkles,
  Layout,
  Lock,
  Workflow,
  LineChart,
  ChevronRight,
  Terminal,
  Activity,
  Zap,
  Check,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function OracleStrategicAllianceHub() {
  // 9. Industry Solutions Tab State
  const [activeIndustry, setActiveIndustry] = useState("Banking");

  // FAQ/Accordion State (optional extra support)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // 1. Hero Highlights
  const heroHighlights = [
    "OCI Cloud Expertise",
    "Oracle Database Specialists",
    "Enterprise Applications",
    "Data & Analytics",
    "Cloud Migration",
    "24×7 Managed Operations"
  ];

  // 2. Stats
  const stats = [
    { value: "50+", label: "OCI Deployments" },
    { value: "100+", label: "Database Modernizations" },
    { value: "24x7", label: "Managed Operations" },
    { value: "99.99%", label: "Availability Targets" }
  ];

  // 3. Oracle Capability Areas
  const capabilities = [
    {
      title: "OCI Cloud",
      desc: "Architecting enterprise landing zones and migrating core business networks to Oracle Cloud Infrastructure.",
      icon: <Cloud className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Oracle Database",
      desc: "Optimizing high-performance RAC, GoldenGate replication, and Autonomous database queries.",
      icon: <Database className="w-6 h-6 text-rose-500" />
    },
    {
      title: "ERP Modernization",
      desc: "Upgrading core systems to Oracle Fusion Cloud ERP for intelligent procurement and financials.",
      icon: <Workflow className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Enterprise Applications",
      desc: "Customizing and operating HCM, SCM, and CX suites to improve business workflows.",
      icon: <Briefcase className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Data Platforms",
      desc: "Deploying high-speed Autonomous Data Warehouses with integrated Analytics Cloud reports.",
      icon: <LineChart className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Security & Governance",
      desc: "Implementing zero-trust access controls, Cloud Guard scans, and Data Safe protection zones.",
      icon: <Shield className="w-6 h-6 text-rose-500" />
    }
  ];

  // 4. Oracle Cloud Infrastructure (OCI)
  const ociServices = [
    { title: "OCI Migration", desc: "Migrating enterprise physical databases and VMs to OCI with minimal workloads downtime." },
    { title: "Cloud Architecture", desc: "Designing isolated multi-region enterprise node clusters ready for heavy databases." },
    { title: "Landing Zones", desc: "Setting up secure, structured account root controls, IAM bounds, and networks." },
    { title: "Kubernetes on OCI", desc: "Orchestrating microservices utilizing high-speed managed Oracle Container Engine (OKE)." },
    { title: "Cloud Operations", desc: "Monitoring OCI compute sizing, memory utilization, and cost thresholds hourly." },
    { title: "Disaster Recovery", desc: "Configuring automated cross-region database mirrors and failover policies." }
  ];
  const ociTech = ["OCI Compute", "OCI Storage", "OCI Networking", "OKE", "OCI Load Balancer", "OCI Monitoring"];

  // 5. Oracle Database Modernization
  const dbServices = [
    { title: "Database Migration", desc: "Seamless database transfers to Autonomous Database and Exadata nodes." },
    { title: "Performance Optimization", desc: "Tuning query execution plans, indexes, and partition bounds to accelerate runtimes." },
    { title: "Database Consolidation", desc: "Reducing server upkeep costs by consolidating multiple instances into unified containers." },
    { title: "High Availability", desc: "Configuring multi-active clustering nodes using Oracle RAC and Data Guard mirrors." },
    { title: "Backup & Recovery", desc: "Setting up secure automated backups with strict point-in-time recovery testing." },
    { title: "Database Security", desc: "Scanning configuration vulnerabilities and encrypting tables utilizing Data Safe tools." }
  ];
  const dbTech = ["Oracle Database", "Oracle RAC", "Data Guard", "GoldenGate", "Autonomous Database", "Exadata"];

  // 6. Enterprise Applications
  const enterpriseApps = [
    { title: "Oracle ERP", desc: "Streamline enterprise supply chains, financials, and inventory tracking utilizing Fusion ERP." },
    { title: "Oracle HCM", desc: "Modernize workforce processes, employee reviews, and payroll integrations with Oracle Fusion HCM." },
    { title: "Oracle SCM", desc: "Improve manufacturing logistics, warehouse allocations, and shipping queues." },
    { title: "Oracle CX", desc: "Enhance customer services and sales pipeline tools with modern Oracle CX systems." },
    { title: "Oracle Financials", desc: "Automate ledger entries, asset sheets, and cash flow calculations safely." },
    { title: "Oracle Procurement", desc: "Simplify business purchasing flows and supplier contract validations." }
  ];

  // 7. Data & Analytics
  const dataAnalytics = [
    { title: "Data Warehousing", desc: "Consolidating business metrics into a high-speed Autonomous Data Warehouse database." },
    { title: "Business Intelligence", desc: "Configuring real-time Looker-like reporting panels utilizing Oracle Analytics Cloud." },
    { title: "Data Integration", desc: "Building secure extract, load, and transformation data pipelines utilizing ODI tools." },
    { title: "Analytics Platforms", desc: "Translating telemetry logs into clean business insights and demand charts." },
    { title: "Operational Reporting", desc: "Automating hourly floor production stats and shipping logs for managers." },
    { title: "Executive Dashboards", desc: "Designing visual KPI report panels for manager reviews." }
  ];
  const dataTech = ["Oracle Analytics Cloud", "Oracle Data Integrator", "Autonomous Data Warehouse", "Oracle BI", "Oracle Integration Cloud"];

  // 8. Security & Compliance
  const securityCapabilities = [
    { title: "Identity Management", desc: "Managing least-privilege logins, MFA policies, and user accounts utilizing Oracle IAM." },
    { title: "Data Protection", desc: "Protecting sensitive database columns using Transparent Data Encryption (TDE)." },
    { title: "Cloud Security", desc: "Running security checks across resources automatically with Cloud Guard logs." },
    { title: "Compliance Monitoring", desc: "Enforcing cloud configuration standards for SOC2, HIPAA, and GDPR rules." },
    { title: "Risk Management", desc: "Tracking access changes and database query anomalies in real time." },
    { title: "Security Operations", desc: "Securing database schemas, auditing logs, and configuring secure Vault zones." }
  ];
  const securityTech = ["Oracle IAM", "Cloud Guard", "Data Safe", "Vault", "Security Zones"];

  // 9. Industry Solutions
  const industries = [
    {
      name: "Banking",
      challenge: "Processing core ledger updates at high speed while maintaining regulatory compliance.",
      solution: "Modernize databases on OCI utilizing Oracle RAC and high-performance Exadata systems.",
      outcome: "3x faster transaction processing and 100% compliance pass rates."
    },
    {
      name: "Healthcare",
      challenge: "Siloed patient directories, slow record indexing, and strict privacy laws.",
      solution: "Deploy secure health database endpoints on OCI with automated Data Safe encryption rules.",
      outcome: "Zero record leaks and HIPAA-compliant patient charts synchronization."
    },
    {
      name: "Manufacturing",
      challenge: "Unplanned factory shutdowns due to delayed parts shipping and machine maintenance.",
      solution: "Integrate assembly lines telemetry with Oracle Fusion SCM and IoT analytics databases.",
      outcome: "25% lower inventory waste and automated parts procurement alerts."
    },
    {
      name: "Retail",
      challenge: "Monolithic checkout server crashes during seasonal shopping spikes.",
      solution: "Migrate inventory and order processing lines to autoscaling Oracle Cloud Run and OKE clusters.",
      outcome: "Zero down-time during holiday sales spikes and automated inventory syncing."
    },
    {
      name: "Public Sector",
      challenge: "Siloed legacy citizen records and high hardware maintenance bills.",
      solution: "Migrate public databases to OCI GovCloud environments with strict security zones.",
      outcome: "40% lower administrative hosting costs and highly secure citizen portal access."
    },
    {
      name: "Telecommunications",
      challenge: "Ingesting terabytes of customer calling and billing events daily without lag.",
      solution: "Configure high-throughput GoldenGate replication pipelines to Autonomous Data Warehouses.",
      outcome: "Real-time billing checks and instant database query responses."
    }
  ];

  // 10. OCI Cloud-Native Engineering
  const cloudNativeCapabilities = [
    { title: "Container Platforms", desc: "Package and orchestrate application microservices utilizing managed OKE clusters." },
    { title: "Microservices", desc: "Decompose legacy business code into light, independent API components." },
    { title: "DevOps Automation", desc: "Enforce automated testing and deploy loops utilizing OCI DevOps tools." },
    { title: "Platform Engineering", desc: "Standardize developer setup templates with Terraform IaC configurations." },
    { title: "API Management", desc: "Configure high-throughput API gateways with rate limiting." },
    { title: "Observability", desc: "Monitor application run health using Prometheus and Grafana alerts." }
  ];
  const cloudNativeTech = ["OKE", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "OCI DevOps"];

  // 11. Oracle Certifications
  const certifications = [
    { name: "Oracle OCI Architect Certified Professional", image: "/assets/ecosystem/ORACLE_Awards/image 154.png" },
    { name: "Oracle OCI Developer Certified Associate", image: "/assets/ecosystem/ORACLE_Awards/image 155.png" },
    { name: "Oracle OCI Operations Certified Associate", image: "/assets/ecosystem/ORACLE_Awards/image 156.png" },
    { name: "Oracle Database Administration Specialist", image: "/assets/ecosystem/ORACLE_Awards/image 157.png" },
    { name: "Oracle Security Specialist Certified", image: "/assets/ecosystem/ORACLE_Awards/image 158.png" },
    { name: "Oracle Cloud Infrastructure Professional", image: "/assets/ecosystem/ORACLE_Awards/image 159.png" },
    { name: "Oracle Autonomous Database Specialist", image: "/assets/ecosystem/ORACLE_Awards/image 162.png" },
    { name: "Oracle Cloud Integration Specialist", image: "/assets/ecosystem/ORACLE_Awards/image 163.png" },
    { name: "Oracle Partner of the Year Award", image: "/assets/ecosystem/ORACLE_Awards/Group 1000008908.png" },
    { name: "Oracle Cloud Infrastructure Excellence Award", image: "/assets/ecosystem/ORACLE_Awards/Group 1000008909.png" }
  ];

  // FAQ Accordion Data
  const faqs = [
    {
      q: "What Oracle certifications do Devopstrio specialists possess?",
      a: "Our team holds credentials including OCI Architect Professional, OCI Developer Associate, OCI Operations Associate, Database Administration Specialist, Security Specialist, and Cloud Professional."
    },
    {
      q: "What is Oracle Cloud Infrastructure (OCI) and how does it differentiate from other clouds?",
      a: "OCI is built specifically for mission-critical enterprise workloads, offering high-performance bare metal compute, isolated virtual networks, and specialized cloud database services like Exadata and Autonomous Database."
    },
    {
      q: "How does Devopstrio migrate on-premises Oracle databases to OCI?",
      a: "We design structured migration roadmaps utilizing Oracle GoldenGate for zero-downtime replication, or SQL Developer and Recovery Manager (RMAN) for secure data staging."
    },
    {
      q: "What is Oracle Autonomous Database and how does it reduce administration overhead?",
      a: "It is a cloud database service that uses machine learning to automate database tuning, security patching, backup scheduling, and scaling, eliminating manual database administration labor."
    },
    {
      q: "Can you integrate Oracle ERP Cloud with external third-party applications?",
      a: "Yes. We configure Oracle Integration Cloud (OIC) connections, OAuth 2.0 authentications, and REST API flows to synchronize ERP data with Salesforce, ServiceNow, or local legacy databases."
    },
    {
      q: "What is Oracle Real Application Clusters (RAC) and how does it ensure high availability?",
      a: "Oracle RAC enables multiple database instances to run on different servers while accessing a shared database repository, providing seamless failover and load balancing."
    },
    {
      q: "How do you optimize Oracle database queries to improve application speeds?",
      a: "We run index audits, configure materialized views, partition large tables, adjust database parameters, and analyze SQL execution plans to identify query bottlenecks."
    },
    {
      q: "What is Oracle WebLogic Server and do you support its migration to OCI?",
      a: "WebLogic is a Java enterprise application server. We containerize WebLogic applications and deploy them to OCI Kubernetes Engine (OKE) or configure managed WebLogic Server instances."
    },
    {
      q: "How do you secure data stored in Oracle Cloud databases?",
      a: "We enforce Transparent Data Encryption (TDE) for data at rest, establish IAM security profiles with Multi-Factor Authentication, configure Web Application Firewalls, and isolate database networks."
    },
    {
      q: "What support does Devopstrio provide after migrating to OCI?",
      a: "We provide 24/7 cloud monitoring, database performance tuning, OCI resource optimization, patch upgrades, security audits, and database backup verifications."
    }
  ];


  // 12. Tech Ecosystem
  const techEcosystem = [
    "OCI", "Oracle Database", "Exadata", "Autonomous Database",
    "RAC", "GoldenGate", "Oracle ERP", "Oracle HCM",
    "Oracle Analytics", "Oracle Integration Cloud", "OCI DevOps", "OKE"
  ];

  // 13. Delivery Methodology
  const deliverySteps = [
    { phase: "Assess", desc: "Audit legacy database schemas, query complexities, and ERP code files." },
    { phase: "Plan", desc: "Draft OCI landing zones, IAM structures, and database migration sequences." },
    { phase: "Modernize", desc: "Refactor legacy application architectures to run on OKE or Cloud Run." },
    { phase: "Migrate", desc: "Execute safe migrations of databases and apps using GoldenGate." },
    { phase: "Optimize", desc: "Fine-tune query performance, memory sizing, and OCI hosting bills." },
    { phase: "Secure", desc: "Enforce Zero-Trust access and activate continuous Security Zones monitoring." },
    { phase: "Operate", desc: "Provide 24/7 cloud ops monitoring, automated backup drills, and patch updates." }
  ];

  // 14. Customer Success Stories
  const successStories = [
    {
      title: "ERP Transformation",
      challenge: "A manufacturing client suffered from late shipping alerts due to a slow ERP setup.",
      solution: "Migrated legacy manufacturing systems to Oracle Fusion Cloud ERP and SCM.",
      result: "30% faster order processing and real-time inventory level alerts."
    },
    {
      title: "Database Modernization",
      challenge: "A financial firm experienced slow database queries during peak trading hours.",
      solution: "Upgraded legacy database servers to Autonomous Database on Exadata.",
      result: "4x faster query speeds, automating database scaling without downtime."
    },
    {
      title: "OCI Migration",
      challenge: "High database maintenance bills on aging local hardware.",
      solution: "Migrated their database cluster and applications to OCI Compute and Storage.",
      result: "45% savings in yearly hardware costs and faster system response times."
    },
    {
      title: "Analytics Platform",
      challenge: "Siloed telemetry metrics sat unanalyzed in database directories.",
      solution: "Built an Autonomous Data Warehouse connected to Oracle Analytics Cloud.",
      result: "Enabled instant business dashboards, identifying supply bottlenecks."
    },
    {
      title: "Cloud Operations",
      challenge: "Frequent system crashes and database replication lag issues.",
      solution: "Standardized system setup with GoldenGate replication and OCI monitoring.",
      result: "Achieved 99.99% system availability and eliminated database lag."
    },
    {
      title: "Disaster Recovery",
      challenge: "Manual database backups were unreliable and failed restore tests.",
      solution: "Configured automated database backups with strict replication rules via Data Guard.",
      result: "100% database recovery pass rates, securing critical business data."
    }
  ];

  // 15. Managed Oracle Services
  const managedServices = [
    { title: "24×7 Monitoring", desc: "Real-time health tracking of database alerts, OOKE nodes, and API latencies." },
    { title: "Database Administration", desc: "Regular database performance checks, database index rebuilding, and backups." },
    { title: "Cloud Operations", desc: "Managing OCI instance scaling and storage thresholds to eliminate waste." },
    { title: "Performance Tuning", desc: "Fine-tuning database queries, partition bounds, and memory settings." },
    { title: "Security Management", desc: "Analyzing access logs and running regular Vulnerability scans." },
    { title: "Platform Support", desc: "Automated patch rollouts, database updates, and disaster recovery drills." }
  ];

  // 16. Oracle Innovation Areas
  const innovationAreas = [
    { title: "Autonomous Databases", desc: "Deploy self-tuning, self-patching databases to reduce admin workloads." },
    { title: "AI-Powered Analytics", desc: "Leverage machine learning to identify data trends and automate reporting." },
    { title: "Digital ERP", desc: "Connect business teams to unified financials and supply chain databases." },
    { title: "Cloud-Native OCI", desc: "Orchestrate container applications utilizing OKE and serverless APIs." },
    { title: "Intelligent Automation", desc: "Automate manual data entries and inventory checks with Oracle tools." },
    { title: "Enterprise Data Platforms", desc: "Consolidate diverse department databases into secure data hubs." }
  ];

  // 17. Related Partnerships
  const relatedPartnerships = [
    { name: "Microsoft Alliance", desc: "Enterprise Azure setups, Fabric data lakes, and security systems.", href: "/ecosystem/partnerships/microsoft" },
    { name: "AWS Partnership", desc: "Amazon Web Services cloud enablement & DevOps systems.", href: "/ecosystem/partnerships/aws" },
    { name: "Google Cloud Partnership", desc: "Next-gen GCP data warehousing and predictive AI models.", href: "/ecosystem/partnerships/google-cloud" },
    { name: "SAP Alliance", desc: "Enterprise resource planning, ERP migrations, and supply chain modernizations.", href: "/ecosystem/partnerships/sap" },
    { name: "ServiceNow Alliance", desc: "Automated IT service workflows and digital workforce modules.", href: "/ecosystem/partnerships/servicenow" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/ecosystem/bg-cloud.png"
            alt="Oracle Alliance background"
            className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]"
          />
          {/* Only a dark radial circle in the center behind the text */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          {/* Bottom shadow fade to blend with the black page background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-20 flex flex-col items-center text-center">

          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              Oracle Strategic Alliance
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              Transforming Operations with <span className="text-rose-500">Oracle Cloud</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
              Accelerate enterprise modernization through Oracle Cloud Infrastructure (OCI), Oracle Database, enterprise applications, data platforms, and mission-critical business systems.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to Oracle Expert
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <a
              href="#overview"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Oracle Solutions
            </a>
          </Reveal>

          {/* Highlights pills */}
          <Reveal delay={0.4} className="flex flex-wrap justify-center gap-3 max-w-4xl select-none">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs text-zinc-400 font-bold"
              >
                {item}
              </span>
            ))}
          </Reveal>

        </div>
      </section>

      {/* 2. ALLIANCE OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-6">
              <Reveal className="text-left">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  ALLIANCE VALUE
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                  Strategic Partnership <span className="text-rose-500">Overview</span>
                </h2>
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold mb-8">
                  Devopstrio helps enterprises modernize critical business applications, migrate workloads to OCI, optimize Oracle databases, and build resilient enterprise platforms.
                </p>
                <div className="h-[1px] bg-zinc-900 w-full mb-8" />
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold">
                  Focusing on Exadata architectures, GoldenGate pipelines, and Fusion Cloud SCM systems, we help scale mission-critical transaction engines safely.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-6 select-none">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 text-left group"
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest leading-snug font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CAPABILITY AREAS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ECOSYSTEM CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Core Oracle <span className="text-rose-500">Competencies</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Comprehensive technical capabilities mapped directly to Oracle Cloud and databases.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((c, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[200px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">{c.title}</h4>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {c.icon}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ORACLE CLOUD INFRASTRUCTURE (OCI) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENTERPRISE OCI ARCHITECTURE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Enterprise Cloud <span className="text-rose-500">Services</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ociServices.map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-2 font-bold">0{idx + 1}</span>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{service.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">OCI Technologies:</span>
            {ociTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ORACLE DATABASE MODERNIZATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              MISSION CRITICAL DATA
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Data Platform <span className="text-rose-500">Excellence</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dbServices.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Database Tech:</span>
            {dbTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ENTERPRISE APPLICATIONS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ORACLE APPLICATIONS SUITE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Business Transformation <span className="text-rose-500">Solutions</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseApps.map((app, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{app.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DATA & ANALYTICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              DECISION ENGINE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Intelligent Business <span className="text-rose-500">Insights</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dataAnalytics.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <LineChart className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Analytics Tech:</span>
            {dataTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECURITY & COMPLIANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENTERPRISE SECURITY SUITE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Secure Enterprise <span className="text-rose-500">Operations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {securityCapabilities.map((sec, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{sec.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Security Stack:</span>
            {securityTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRY SOLUTIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENTERPRISE ACCELERATORS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Industry-Focused Oracle <span className="text-rose-500">Solutions</span>
            </h2>
          </Reveal>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 select-none">
            {industries.map((ind) => (
              <button
                key={ind.name}
                onClick={() => setActiveIndustry(ind.name)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${activeIndustry === ind.name
                    ? "bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/10"
                    : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white"
                  }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Active Industry Panel */}
          {industries.map((ind) => {
            if (ind.name !== activeIndustry) return null;
            return (
              <div
                key={ind.name}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 lg:p-12 transition-all duration-500 animate-fadeIn"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-3 font-bold">CHALLENGE</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">{ind.name} Roadblocks</h3>
                    <p className="text-zinc-350 text-xs md:text-sm leading-relaxed font-bold">{ind.challenge}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-3 font-bold">SOLUTION</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Oracle Solution</h3>
                    <p className="text-zinc-350 text-xs md:text-sm leading-relaxed font-bold">{ind.solution}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-3 font-bold">OUTCOME</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Business Outcome</h3>
                    <p className="text-zinc-350 text-xs md:text-sm leading-relaxed font-bold">{ind.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 10. OCI CLOUD-NATIVE ENGINEERING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              OCI CONTAINER INFRASTRUCTURE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Modern Cloud <span className="text-rose-500">Platforms</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cloudNativeCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Cloud-Native Tools:</span>
            {cloudNativeTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11. ORACLE CERTIFICATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CREDENTIALED EXPERT TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Certified Oracle <span className="text-rose-500">Professionals</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Proven credentials validating our capability to construct secure database architectures and Fusion ERP nodes.
            </p>
          </Reveal>

          {/* Badge Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 select-none">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center justify-center bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/20 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300 text-center gap-4 group min-h-[180px]"
              >
                <div className="w-full h-16 flex items-center justify-center mb-2">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-rose-500/5 flex items-center justify-center text-rose-500 group-hover:scale-105 transition-transform duration-300">
                      <Database className="w-6 h-6" />
                    </div>
                  )}
                </div>
                <h4 className="text-xs font-bold text-zinc-350 group-hover:text-rose-500 transition-colors leading-snug">
                  {cert.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TECHNOLOGY ECOSYSTEM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ORACLE TECHNOLOGIES WE FREQUENTLY USE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Oracle Technologies <span className="text-rose-500">We Use</span>
            </h2>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto select-none">
            {techEcosystem.map((tech) => (
              <div
                key={tech}
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. DELIVERY METHODOLOGY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              OUR STEP-BY-STEP PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Oracle Transformation <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {deliverySteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group overflow-hidden"
              >
                <div className="text-[28px] font-black text-rose-500/10 font-mono tracking-tighter leading-none mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2">{step.phase}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CUSTOMER SUCCESS STORIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Enterprise Transformation <span className="text-rose-500">Outcomes</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-500 tracking-wider uppercase font-bold block mb-1">
                    Oracle Success Story
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
                      <p className="text-xs text-zinc-300 font-bold leading-relaxed">{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. MANAGED ORACLE SERVICES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CONTINUOUS ENTERPRISE ASSURANCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Continuous Enterprise <span className="text-rose-500">Operations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedServices.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Activity className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. ORACLE INNOVATION AREAS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              FUTURE PROOF ENTERPRISE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Future-Ready Enterprise <span className="text-rose-500">Platforms</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {innovationAreas.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-2xl hover:border-rose-500/20 transition-all duration-300 text-center"
              >
                <div className="text-rose-500 font-mono text-[10px] uppercase tracking-wider mb-2 font-bold">ORACLE FOCUS</div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider leading-snug">{item.title}</h4>
                <p className="text-[10px] text-zinc-400 mt-2 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left sticky top-28">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  ALLIANCE QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our Oracle Cloud Infrastructure (OCI) and enterprise application capabilities.
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

      {/* 17. RELATED PARTNERSHIPS */}

      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related <span className="text-rose-500">Partnerships</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {relatedPartnerships.map((partner) => (
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
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 18. FINAL CTA */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 flex flex-col items-center">

          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GET STARTED TODAY
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Ready to Modernize with <span className="text-rose-500">Oracle?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Whether you're optimizing Oracle databases, implementing ERP solutions, migrating to OCI, or modernizing enterprise platforms, our Oracle specialists can help accelerate your transformation.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Schedule Oracle Consultation
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk to Oracle Expert
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
