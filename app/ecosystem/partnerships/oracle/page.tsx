"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import {
  ArrowUpRight,
  ChevronDown,
  Cloud,
  Cpu,
  Database,
  Shield,
  Briefcase,
  Sparkles,
  Workflow,
  LineChart,
  ChevronRight,
  Zap,
  Check,
  Lock,
  Activity
} from "lucide-react";
import Link from "next/link";

const oracleSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "solutions", label: "Solutions" },
  { id: "architecture", label: "Architecture" },
  { id: "use-cases", label: "Use Cases" },
  { id: "technologies", label: "Technologies" },
  { id: "why-oracle", label: "Why Us" },
  { id: "outcomes", label: "Outcomes" },
  { id: "faq", label: "FAQ" }
];

export default function OracleStrategicAllianceHub() {
  // FAQ/Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Scroll animations
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cleanupTriggers = () => {};
    let alive = true;

    const startMotion = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (!alive) return;

      lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.85 });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray<HTMLElement>(".fade-scroll-item").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0.2, y: 15 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: true
            },
            delay: index * 0.02
          }
        );
      });

      cleanupTriggers = () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    startMotion();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      lenis?.destroy();
      cleanupTriggers();
    };
  }, []);

  // 1. Hero Highlights
  const heroHighlights = [
    { text: "Oracle Cloud Infrastructure (OCI)", desc: "High-performance enterprise bare-metal compute & networking structures" },
    { text: "Database Modernization", desc: "Enterprise database upgrades, GoldenGate & Autonomous migrations" },
    { text: "Enterprise Applications", desc: "Fusion Cloud ERP suite configuration & custom API bridges" },
    { text: "Secure Operations", desc: "Zero-Trust cloud boundaries, continuous GRC audits & cost management" }
  ];

  // 2. Overview Cards
  const overviewCards = [
    {
      title: "Oracle Cloud Infrastructure",
      desc: "Deploying enterprise-grade landing zones, high-throughput network tunnels, and automated environments on OCI.",
      icon: <Cloud className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Oracle Database & Data Platforms",
      desc: "Upgrading legacy databases to Exadata, Autonomous structures, and configuring real-time backups.",
      icon: <Database className="w-6 h-6 text-rose-500" />
    },
    {
      title: "ERP & App Integration",
      desc: "Connecting Fusion ERP, supply chains, and financials to third-party platforms via OIC middleware.",
      icon: <Workflow className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Security & Operations",
      desc: "Applying Zero-Trust access controls, IAM roles, and Cloud Guard automated monitoring.",
      icon: <Shield className="w-6 h-6 text-rose-500" />
    }
  ];

  // 3. Oracle Capability Areas
  const capabilitiesList = [
    {
      title: "OCI Cloud Infrastructure Engineering",
      desc: "Landing zones, compute, storage, networking, hybrid connectivity, and resilient infrastructure design.",
      bullets: ["Enterprise OCI landing zones", "Direct network routing structures", "resilient compute pools"]
    },
    {
      title: "Oracle Database Modernization",
      desc: "Database upgrades, query tuning, migration, HA/DR design, performance optimization, and secure data architectures.",
      bullets: ["RAC high-availability", "Transparent Data Encryption", "Query performance optimization"]
    },
    {
      title: "Enterprise Workload Migration to OCI",
      desc: "Move business-critical apps, legacy systems, and databases into modern Oracle cloud environments with minimal downtime.",
      bullets: ["Structured migration blueprints", "GoldenGate zero-downtime replication", "Legacy modernization scripts"]
    },
    {
      title: "Data Platforms & Analytics",
      desc: "Structured data platforms, reporting foundations, data pipelines, business intelligence, and data governance.",
      bullets: ["Autonomous Data Warehouses", "Data Integrator pipelines", "Analytics Cloud dashboards"]
    },
    {
      title: "Oracle Application & Integration Services",
      desc: "ERP integrations, APIs, middleware connectivity, and enterprise workflow orchestration.",
      bullets: ["Oracle Integration Cloud (OIC)", "OAuth 2.0 API frameworks", "Fusion ERP custom connectors"]
    },
    {
      title: "Security, Governance & Compliance",
      desc: "Identity, access controls, encryption, monitoring, backup, and policy-driven governance.",
      bullets: ["Oracle IAM policies", "Cloud Guard vulnerabilities scan", "Data Safe governance audits"]
    },
    {
      title: "DevOps, Automation & Cloud Operations",
      desc: "CI/CD pipelines, IaC blueprints, observability, environment automation, and managed cloud operations.",
      bullets: ["OCI Terraform automation", "Prometheus & OCI observability", "Automated deployment pipelines"]
    },
    {
      title: "Cost, Performance & Capacity Optimization",
      desc: "Compute rightsizing, workload optimization, database performance, and infrastructure efficiency tuning.",
      bullets: ["Compute pool rightsizing", "Database memory tuning", "OCI budget threshold limits"]
    }
  ];

  // 4. Solutions We Deliver
  const solutionsList = [
    { title: "OCI Landing Zones & Foundations", desc: "Setting up isolated virtual networks, tenant parameters, and IAM root controls." },
    { title: "Oracle Database Migration", desc: "Upgrading local database systems to OCI Cloud Autonomous Database nodes." },
    { title: "Business-Critical Workload Hosting", desc: "Configuring high-performance Exadata systems for heavy transactions." },
    { title: "Enterprise Data Platforms", desc: "Consolidating finance and sales records into centralized reporting systems." },
    { title: "ERP & App Integration", desc: "Mapping procurement workflows to Oracle Fusion ERP via OIC bridges." },
    { title: "Backup, DR & Resilience", desc: "Structuring active-active database configurations using Oracle Data Guard." },
    { title: "DevOps & Automation", desc: "Deploying OCI infrastructure automatically utilizing Terraform scripts." },
    { title: "Managed OCI Operations", desc: "Providing 24/7 incident tracking, cloud metrics monitoring, and patches." }
  ];

  // 5. Reference Architecture Visual Layers
  const architectureLayers = [
    { name: "Experience Layer", desc: "Users, Employees, Customers, Portals, and Internal Systems." },
    { name: "Application & Integration Layer", desc: "API & Integration Layer, Oracle Integration Cloud (OIC)." },
    { name: "Business Services Layer", desc: "Business Services, Middleware, and Enterprise Workflows." },
    { name: "Data & Database Layer", desc: "Oracle Databases, Data Platform, and Analytics Cloud." },
    { name: "Security & Governance Layer", desc: "Security, Backup, Monitoring, and GRC Governance." },
    { name: "OCI Infrastructure Layer", desc: "Oracle Cloud Infrastructure Foundation, Bare-Metal, Compute & Storage." }
  ];

  // 6. Business Use Cases
  const useCases = [
    {
      domain: "Enterprise Infrastructure & Databases",
      items: [
        "Oracle database modernization",
        "Business-critical workload hosting",
        "Hybrid cloud transformation",
        "Backup, DR, and resilience platforms"
      ]
    },
    {
      domain: "Enterprise Operations & Systems",
      items: [
        "ERP-connected workflows",
        "Finance and operations platforms",
        "Internal business systems modernization",
        "Master data and reporting environments"
      ]
    },
    {
      domain: "Data & Analytics",
      items: [
        "Centralized enterprise reporting",
        "Performance dashboards",
        "Operational data pipelines",
        "Business intelligence platforms"
      ]
    },
    {
      domain: "Cloud Operations",
      items: [
        "OCI environment automation",
        "Cost optimization",
        "Monitoring & observability",
        "Secure managed operations"
      ]
    }
  ];

  // 7. Oracle Technologies We Work With
  const technologiesStack = [
    {
      category: "Cloud Infrastructure",
      techs: ["Oracle Cloud Infrastructure (OCI)", "Compute Pools", "Block / Object Storage", "Virtual Networking", "Load Balancers", "Identity & Access Services"]
    },
    {
      category: "Databases & Data",
      techs: ["Oracle Database", "Autonomous Database", "Oracle Exadata", "Oracle Data Integrator (ODI)", "Oracle Analytics Cloud", "Data Guard"]
    },
    {
      category: "Applications & Integration",
      techs: ["Oracle ERP Ecosystem", "Oracle Integration Cloud (OIC)", "Oracle API Tooling", "Enterprise Workflow Connectivity"]
    },
    {
      category: "Security & Operations",
      techs: ["IAM Policies", "TDE Encryption & Key Management", "OCI Monitoring", "Backup & Disaster Recovery", "Observability Tooling"]
    },
    {
      category: "Automation & Delivery",
      techs: ["Terraform for OCI", "CI/CD Pipelines", "DevOps Automation", "Infrastructure Orchestration"]
    }
  ];

  // 8. Why Oracle + Devopstrio
  const whyUsCards = [
    {
      title: "Enterprise Infrastructure Expertise",
      desc: "Architect and operate OCI environments built specifically for security, performance, and operational resilience."
    },
    {
      title: "Database & Core System Modernization",
      desc: "Upgrade and optimize the databases and transactional platforms that power your business-critical operations."
    },
    {
      title: "Secure Hybrid Cloud Delivery",
      desc: "Support legacy modernization and cloud adoption pathways without disrupting active, critical business workflows."
    },
    {
      title: "Integrated Data & Enterprise Operations",
      desc: "Synchronize database schemas, reporting environments, enterprise apps, and operational workflows."
    },
    {
      title: "End-to-End Delivery Ownership",
      desc: "Strategy, migration blueprints, infrastructure architecture, automation, support, and billing optimization through one partner."
    },
    {
      title: "Business-Focused Outcomes",
      desc: "Lower operational complexity, ensure stronger uptime reliability, and achieve better performance for core enterprise systems."
    }
  ];

  // 9. Outcomes / Impact Metrics
  const impactMetrics = [
    { value: "40%", label: "Faster Provisioning" },
    { value: "30%", label: "Less Admin Overhead" },
    { value: "99.9%", label: "Availability Target" },
    { value: "24×7", label: "Operations Support" }
  ];

  const impactDetails = [
    { title: "Faster Workload Modernization", desc: "Migrating enterprise platforms to modern cloud endpoints swiftly." },
    { title: "Stronger Database Performance", desc: "Accelerating transaction queries and query execution speeds." },
    { title: "Better Operational Continuity", desc: "Enforcing disaster recovery designs with automated mirrors." },
    { title: "Improved Reporting & Visibility", desc: "Consolidating operations records into clean analytics dashboards." },
    { title: "Reduced Infrastructure Complexity", desc: "Eliminating legacy physical server maintenance overhead." },
    { title: "Secure OCI Operations", desc: "Enforcing security boundaries, access controls, and encryption." }
  ];

  // 10. Related Ecosystem Pages
  const relatedPages = [
    { name: "Microsoft Ecosystem", desc: "Collaborative Azure operations, MS Teams integrations, and data lakes.", href: "/ecosystem/partnerships/microsoft" },
    { name: "AWS Ecosystem", desc: "Amazon Web Services DevOps configurations and secure hosting.", href: "/ecosystem/partnerships/aws" },
    { name: "Google Cloud Ecosystem", desc: "Next-gen GCP data warehousing and predictive AI integrations.", href: "/ecosystem/partnerships/google-cloud" },
    { name: "Data Engineering", desc: "Centralized data pipelines and data warehouse deployments.", href: "/ecosystem/technology-stack/data-engineering" },
    { name: "Cloud-Native Platforms", desc: "OKE & GKE container orchestration and serverless scripts.", href: "/ecosystem/technology-stack/cloud-native" },
    { name: "Global Delivery", desc: "Follow-the-sun support hubs and managed systems centers.", href: "/ecosystem/global-delivery" },
    { name: "Security & Compliance", desc: "Implementing Zero-Trust architectures and regulatory auditing.", href: "/ecosystem/technology-stack/cybersecurity" }
  ];

  // 11. FAQ Accordion Data
  const faqs = [
    {
      q: "What Oracle services does Devopstrio support?",
      a: "We support the entire Oracle stack, including Oracle Cloud Infrastructure (OCI) architecture, Oracle Database administration, Exadata systems, Autonomous Database integration, Fusion ERP platforms, and Oracle Integration Cloud (OIC) middleware."
    },
    {
      q: "Do you help migrate databases and workloads to OCI?",
      a: "Yes. We design structured cloud migration plans utilizing Oracle GoldenGate for zero-downtime data replication, and Recovery Manager (RMAN) or data pump scripts to transfer workloads securely."
    },
    {
      q: "Can you modernize legacy Oracle environments?",
      a: "Absolutely. We refactor legacy PL/SQL scripts, upgrade older Oracle Database clusters to modern architectures (RAC, Multitenant), and containerize Java applications to run on OCI Kubernetes Engine (OKE)."
    },
    {
      q: "Do you support Oracle data platforms and analytics?",
      a: "Yes, we construct high-speed Autonomous Data Warehouses, set up ETL pipelines utilizing Oracle Data Integrator (ODI), and design business intelligence dashboards using Oracle Analytics Cloud."
    },
    {
      q: "Can you integrate Oracle systems with other enterprise platforms?",
      a: "Yes. Using Oracle Integration Cloud (OIC), API Gateway, and custom REST adapters, we link Oracle databases and ERP systems with third-party software like Salesforce, ServiceNow, and Azure Data Factory."
    },
    {
      q: "Do you provide managed OCI operations and monitoring?",
      a: "We provide 24/7 cloud operations management. Our services include tracking OCI resource usage, configuring automated backups, running database security scans, and optimizing OCI monthly costs."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION WITH CALM CRIMSON/RED WAVE DESIGN */}
      <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        
        {/* Concentric Wave Elements in Oracle Crimson/Red Theme */}
        <div className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[85%] md:w-[65%] h-[130%] z-0 pointer-events-none select-none overflow-hidden flex items-center justify-end">
          <div className="relative w-full h-full flex items-center justify-end">
            <div className="absolute w-[200%] h-[160%] right-[-50%] rounded-[120px] md:rounded-[260px] border border-red-950/10 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[170%] h-[135%] right-[-40%] rounded-[110px] md:rounded-[230px] border border-red-500/10 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[140%] h-[110%] right-[-30%] rounded-[100px] md:rounded-[200px] border border-rose-500/10 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[110%] h-[85%] right-[-20%] rounded-[90px] md:rounded-[170px] border border-red-600/15 rotate-[-28deg] pointer-events-none" />
            
            <div className="absolute w-[80%] h-[60%] right-[-10%] rounded-[80px] md:rounded-[140px] border border-rose-500/20 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[50%] h-[35%] right-[0%] rounded-[70px] md:rounded-[110px] border border-red-500/25 rotate-[-28deg] pointer-events-none" />
            
            <div className="absolute right-[5%] w-[180px] h-[90px] bg-gradient-to-r from-red-600/15 via-rose-600/10 to-amber-500/5 rounded-full blur-[50px] opacity-40 animate-pulse" />
          </div>
        </div>

        {/* Soft Ambient Light Theme Effect Gradients on Pitch-Black */}
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none select-none">
          <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-red-950/15 rounded-full blur-[110px]" />
          <div className="absolute bottom-[10%] right-[30%] w-[350px] h-[350px] bg-rose-950/10 rounded-full blur-[100px]" />
          <div className="absolute top-[35%] right-[0%] w-[250px] h-[250px] bg-amber-950/10 rounded-full blur-[90px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f0c0c_1px,transparent_1px),linear-gradient(to_bottom,#1f0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <Reveal className="mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                    Strategic Cloud Partnership
                  </span>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                  Oracle <span className="text-[#E11D48] whitespace-nowrap">Ecosystem</span>
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
                  Modernize enterprise workloads, data platforms, and mission-critical operations with Oracle technologies across cloud infrastructure, databases, applications, and secure digital transformation.
                </p>
              </Reveal>

              {/* Hero Bullet Points Grid */}
              <Reveal delay={0.3} className="w-full mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {heroHighlights.map((pt, idx) => (
                    <div key={idx} className="flex gap-3 animate-fadeIn">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{pt.text}</h4>
                        <p className="text-[10px] text-zinc-450 font-semibold">{pt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
              
              {/* CTAs */}
              <Reveal delay={0.4} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                >
                  Talk to an Oracle Solutions Expert
                </Link>
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Oracle Capabilities
                </a>
              </Reveal>
            </div>

            {/* Hero Right Visual (Logo Integration) */}
            <div className="lg:col-span-5 relative flex items-center justify-center select-none z-10">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                {/* Connecting glowing line and animation */}
                <div className="absolute inset-x-12 h-[2px] bg-gradient-to-r from-rose-500/25 via-red-500/30 to-rose-500/25 z-0 pointer-events-none">
                  {/* Energy Pulse */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_12px_#E11D48] animate-ping" style={{ animationDuration: '3s' }} />
                </div>

                <div className="flex items-center justify-between w-full relative z-10 px-4">
                  
                  {/* Devopstrio Logo Card */}
                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-rose-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-600 to-red-655 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img
                      src="/assets/logo/logo.png"
                      alt="Devopstrio Logo"
                      className="w-full h-auto max-h-[85%] object-contain select-none filter brightness-105"
                    />
                  </div>

                  {/* Plus Connector Indicator */}
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg relative z-20">
                    <Sparkles className="w-4 h-4 text-yellow-450 animate-pulse" />
                  </div>

                  {/* Oracle Cloud Logo Card */}
                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-red-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 to-rose-500 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img
                      src="/assets/Tech_logos/Oracle_Cloud.svg"
                      alt="Oracle Cloud Logo"
                      className="w-full h-auto max-h-[85%] object-contain select-none"
                    />
                  </div>

                </div>

                {/* Outer concentric rings highlighting integration */}
                <div className="absolute w-[80%] h-[80%] rounded-full border border-zinc-900/40 pointer-events-none z-0" />
                <div className="absolute w-[95%] h-[95%] rounded-full border border-zinc-900/20 pointer-events-none z-0" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STICKY SECTION NAVBAR */}
      <SectionNavbar sections={oracleSections} />

      {/* 2. PARTNERSHIP OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Story Direction Left Side */}
            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  ALLIANCE OVERVIEW
                </span>
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                  Modernizing Core Enterprise <span className="text-rose-500">Systems with Oracle</span>
                </h2>
                <div className="space-y-4 text-zinc-300 text-sm md:text-base font-semibold leading-relaxed">
                  <p>
                    Oracle serves as a foundational platform for business-critical infrastructure, enterprise databases, and operational ERP systems.
                  </p>
                  <p>
                    Devopstrio leverages Oracle Cloud Infrastructure (OCI) to assist organizations with hybrid cloud modernization, enabling safe migrations of data-intensive workloads without disrupting operations.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* 4 Overview Cards Right Side */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
                {overviewCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/25 rounded-3xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-rose-500/5 flex items-center justify-center mb-6 text-rose-500">
                        {card.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white mb-3 leading-snug">{card.title}</h3>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ORACLE CAPABILITY AREAS */}
      <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              OUR CAPABILITIES
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Our Oracle <span className="text-rose-500">Capabilities</span>
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-semibold">
              Deep capability profiles tailored to modernize core infrastructure and secure enterprise databases.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilitiesList.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-2 leading-snug">{cap.title}</h3>
                  <p className="text-xs text-zinc-400 font-bold mb-6 leading-relaxed">{cap.desc}</p>
                  
                  <div className="h-[1px] bg-zinc-900 w-full my-4" />
                  <ul className="space-y-2">
                    {cap.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-[10px] text-zinc-350 font-bold leading-normal">
                        <Check className="w-3 h-3 text-rose-500 shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS WE DELIVER WITH ORACLE */}
      <section id="solutions" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ORACLE DELIVERABLES
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Oracle-Powered Solutions for <span className="text-rose-500">Enterprise Transformation</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsList.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2">{sol.title}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ORACLE REFERENCE ARCHITECTURE */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              SYSTEM ARCHITECTURE FLOW
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              A Reference Architecture for <span className="text-rose-500">Oracle-Powered Delivery</span>
            </h2>
            <p className="text-zinc-350 text-sm md:text-base font-semibold">
              Layered visual representation of Oracle cloud stack workflows from clients to high-speed bare-metal nodes.
            </p>
          </Reveal>

          {/* Layered Flow Diagram */}
          <div className="max-w-4xl mx-auto space-y-3 relative z-10">
            {architectureLayers.map((layer, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-zinc-950/60 border border-zinc-900 rounded-2xl hover:border-rose-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 text-xs font-mono font-bold">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{layer.name}</h4>
                </div>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold max-w-md md:text-right">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS USE CASES */}
      <section id="use-cases" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              WORKLOAD APPLICATIONS
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Where We Apply the <span className="text-rose-500">Oracle Ecosystem</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl flex flex-col justify-between hover:border-rose-500/20 transition-all duration-300"
              >
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-6 border-b border-zinc-900 pb-3">{useCase.domain}</h3>
                  <ul className="space-y-4">
                    {useCase.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2 animate-pulse" />
                        <span className="text-xs text-zinc-350 font-bold leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ORACLE TECHNOLOGIES WE WORK WITH */}
      <section id="technologies" className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Oracle Technologies <span className="text-rose-500">Across the Stack</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 select-none">
            {technologiesStack.map((techGroup, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-350"
              >
                <h4 className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-4 border-b border-zinc-900/80 pb-2">
                  {techGroup.category}
                </h4>
                <div className="flex flex-col gap-2">
                  {techGroup.techs.map((tech) => (
                    <div 
                      key={tech} 
                      className="px-3 py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-[10px] font-mono text-zinc-350 font-bold hover:text-white transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY ORACLE + DEVOPSTRIO */}
      <section id="why-oracle" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ALLIANCE VALUE
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Why Organizations Build on Oracle <span className="text-rose-500">with Devopstrio</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsCards.map((card, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-4 leading-snug">{card.title}</h4>
                  <p className="text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUTCOMES / IMPACT */}
      <section id="outcomes" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Metric Highlights Left Side */}
            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  PROVEN METRICS
                </span>
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                  Outcomes Enabled Through <span className="text-rose-500">Oracle Technologies</span>
                </h2>
              </Reveal>

              <div className="grid grid-cols-2 gap-4 mt-8 select-none">
                {impactMetrics.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-black text-rose-500 tracking-tighter mb-1 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider leading-snug font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Details Right Side */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
                {impactDetails.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2">{item.title}</h4>
                    <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. RELATED ECOSYSTEM PAGES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Related Ecosystem <span className="text-rose-500">Pages</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {relatedPages.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[160px]"
              >
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                    {partner.name}
                    <ChevronRight className="w-4 h-4 text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                  </h4>
                  <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section id="faq" className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left sticky top-28">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  ALLIANCE QUESTIONS
                </span>
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our Oracle Cloud Infrastructure (OCI) and database modernization capabilities.
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
                          className={`w-4 h-4 text-zinc-550 transition-transform duration-300 flex-shrink-0 ${
                            isOpen ? "rotate-180 text-rose-500" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-[250px] border-t border-zinc-900/60" : "max-h-0"
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

      {/* 12. FINAL CTA */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 flex flex-col items-center">

          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              OCI TRANSFORMATION
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to Modernize Core Enterprise <span className="text-rose-500">Systems with Oracle?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Partner with Devopstrio to design secure, scalable, and business-critical Oracle solutions across cloud infrastructure, databases, enterprise systems, and managed operations.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to an Oracle Solutions Expert
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your OCI Transformation
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
