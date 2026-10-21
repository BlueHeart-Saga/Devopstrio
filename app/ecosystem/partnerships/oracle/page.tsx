"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { PartnerCertifications } from "@/sections/ecosystem/partnerships/PartnerCertifications";
import {
  ArrowUpRight,
  Plus,
  Minus,
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
import { FAQ } from "@/components/ecosystem/FAQ";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";
import { HeroParticleCanvas } from "@/components/ecosystem/HeroParticleCanvas";

const oracleSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "solutions", label: "Solutions" },
  { id: "architecture", label: "Architecture" },
  { id: "certifications", label: "Certifications" },
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
    let cleanupTriggers = () => { };
    let alive = true;

    const startMotion = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (!alive) return;

      lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.85 });
      (window as any).__lenis = lenis;
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
      if ((window as any).__lenis === lenis) {
        (window as any).__lenis = null;
      }
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
    <main className="min-h-screen bg-black text-white pt-16 font-sans selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION: ORACLE ECOSYSTEM HERO */}
      <section className="relative isolate flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden bg-black text-white pt-24 pb-16 lg:py-28 border-b border-zinc-900/60">
        <style>{`
          /* Partnership Connector Rail - Bounded, stops cleanly before Oracle logo */
          @keyframes connectorTravel {
            0% {
              left: 0px;
              opacity: 0;
              transform: translateY(-50%) scale(0.5);
            }
            15% {
              opacity: 1;
              transform: translateY(-50%) scale(1.15);
            }
            80% {
              opacity: 1;
              transform: translateY(-50%) scale(1.15);
            }
            96% {
              left: calc(100% - 14px);
              opacity: 0.8;
              transform: translateY(-50%) scale(0.9);
            }
            100% {
              left: calc(100% - 12px);
              opacity: 0;
              transform: translateY(-50%) scale(0.4);
            }
          }

          @keyframes laserBeam {
            0% {
              left: 0px;
              width: 16px;
              opacity: 0;
            }
            20% {
              opacity: 1;
              width: 70px;
            }
            75% {
              opacity: 1;
              width: 70px;
            }
            95% {
              left: calc(100% - 70px);
              width: 60px;
              opacity: 0.7;
            }
            100% {
              left: calc(100% - 30px);
              width: 25px;
              opacity: 0;
            }
          }

          .connector-node {
            animation: connectorTravel 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          .connector-laser {
            animation: laserBeam 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .connector-node, .connector-laser {
              animation: none !important;
            }
          }
        `}</style>

        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12">
          {/* Left Column Content */}
          <div className="min-w-0">
            <span className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              Oracle Strategic Alliance
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Oracle Cloud</span>
              <span className="block bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
              Mission-critical OCI architectures, Autonomous Database modernizations, and enterprise Fusion ERP cloud integrations powered by Oracle.
            </p>

            {/* Partnership connector row */}
            <div className="mt-12 flex items-center gap-3 sm:gap-5 pt-8 border-t border-zinc-900/80">
              {/* Devopstrio Logo Card */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-zinc-950/90 p-3 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-rose-500/50 hover:shadow-[0_0_25px_rgba(244,63,94,0.25)] transition-all duration-300">
                <img src="/webp/assets/logo/logo.webp" alt="Devopstrio" className="h-full w-full object-contain" />
              </div>

              {/* Connecting Track with bounded laser tracer and travelling pulse node */}
              <div className="relative h-2 w-32 sm:w-52 flex-none flex items-center overflow-hidden">
                {/* Base rail track */}
                <div className="w-full h-0.5 bg-gradient-to-r from-rose-500/50 via-zinc-700/40 to-red-500/50 rounded-full" />
                
                {/* Laser tracer beam bounded along line */}
                <div className="connector-laser absolute inset-y-0 h-1 rounded-full bg-gradient-to-r from-transparent via-rose-500 to-transparent blur-[1px]" />
                
                {/* Energy pulse particle stopping cleanly before Oracle card */}
                <div className="connector-node absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_16px_5px_rgba(244,63,94,0.9)]" />
              </div>

              {/* Oracle Logo Card */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-zinc-950/90 p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(235,0,0,0.25)] transition-all duration-300">
                <img
                  src="/assets/Tech_logos/Oracle_Cloud.svg"
                  alt="Oracle Cloud"
                  className="h-full w-full object-contain filter drop-shadow-[0_2px_8px_rgba(235,0,0,0.35)]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Algoscale-style 3D Particle Field Canvas */}
          <div className="hidden lg:block">
            <HeroParticleCanvas />
          </div>
        </div>
      </section>

      {/* STICKY SECTION NAVBAR */}
      <SectionNavbar sections={oracleSections} />

      {/* 2. PARTNERSHIP OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Story Direction Left Side */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <Reveal className="text-left">
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
                  ALLIANCE OVERVIEW
                </span>
                <h2 className="text-[32px] leading-[40px] sm:text-[38px] sm:leading-[46px] lg:text-[44px] lg:leading-[50px] font-bold tracking-[-1.5px] text-white mb-6">
                  Modernizing Core <span className="text-rose-500">Enterprise Systems</span>
                </h2>
                <div className="relative w-full overflow-hidden rounded-2xl flex items-center justify-center">
                  <Image
                    src="/webp/assets/partnerships/oracle/the-devopstrio-advantage.webp"
                    alt="Modernizing Core Enterprise Systems"
                    width={1764}
                    height={1863}
                    className="h-auto w-full max-w-[480px] object-contain rounded-2xl"
                    priority
                  />
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
      <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              OUR CAPABILITIES
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Our Oracle <span className="text-rose-500">Capabilities</span>
            </h2>
            
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
      <section id="solutions" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              ORACLE DELIVERABLES
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
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
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative scroll-mt-28">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              SYSTEM ARCHITECTURE FLOW
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              A Reference Architecture for <span className="text-rose-500">Oracle-Powered Delivery</span>
            </h2>
            
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



      {/* CERTIFICATIONS */}
      <div id="certifications" className="scroll-mt-28">
        <PartnerCertifications
          title="Oracle Certifications & Awards"
          certifications={[
            {
              name: "Health & Life Sciences Award",
              category: "Partner Awards",
              year: "2025",
              subtitle: "Industry Solutions Partner",
              image: "/webp/assets/ecosystem/ORACLE_Awards/Group-1000008908.webp"
            },
            {
              name: "Communications Award",
              category: "Partner Awards",
              year: "2025",
              subtitle: "Industry Solutions Partner",
              image: "/webp/assets/ecosystem/ORACLE_Awards/Group-1000008909.webp"
            },
            {
              name: "Customer Success Award",
              category: "Partner Awards",
              year: "2024",
              subtitle: "Best-in-Class Applications",
              image: "/webp/assets/ecosystem/ORACLE_Awards/image-154.webp"
            },
            {
              name: "GenAI Innovation Award",
              category: "Excellence Awards",
              year: "2025",
              subtitle: "Oracle Excellence Accreditations",
              image: "/webp/assets/ecosystem/ORACLE_Awards/image-155.webp"
            },
            {
              name: "Cloud & Tech Innovation (EMEA)",
              category: "Cloud/Tech Partner",
              year: "2024",
              subtitle: "Europe, Middle East & Africa",
              image: "/webp/assets/ecosystem/ORACLE_Awards/image-156.webp"
            },
            {
              name: "Business Impact Award (EMEA)",
              category: "Cloud/Tech Partner",
              year: "2024",
              subtitle: "Europe, Middle East & Africa",
              image: "/webp/assets/ecosystem/ORACLE_Awards/image-157.webp"
            },
            {
              name: "Cloud & Tech Innovation (Europe West)",
              category: "Cloud/Tech Partner",
              year: "2024",
              subtitle: "Europe West Region",
              image: "/webp/assets/ecosystem/ORACLE_Awards/image-158.webp"
            },
            {
              name: "Business Impact Award (Europe West)",
              category: "Cloud/Tech Partner",
              year: "2024",
              subtitle: "Europe West Region",
              image: "/webp/assets/ecosystem/ORACLE_Awards/image-159.webp"
            },
            {
              name: "Oracle Excellence Award Winner",
              category: "Excellence Awards",
              year: "2018",
              subtitle: "Global Partner Recognition",
              image: "/webp/assets/ecosystem/ORACLE_Awards/image-162.webp"
            },
            {
              name: "Partner of the Year (Ireland)",
              category: "Country Awards",
              year: "2018",
              subtitle: "Oracle Vertice Regional Award",
              image: "/webp/assets/ecosystem/ORACLE_Awards/image-163.webp"
            }
          ]}
        />
      </div>

      <section id="use-cases" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              WORKLOAD APPLICATIONS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
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
      <section id="technologies" className="w-full py-24 bg-black border-b border-zinc-900/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
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
      <section id="why-oracle" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              ALLIANCE VALUE
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
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
      <section id="outcomes" className="w-full py-24 bg-black border-b border-zinc-900/60 relative scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Metric Highlights Left Side */}
            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
                  PROVEN METRICS
                </span>
                <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
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
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
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
      <FAQ faqs={faqs} />

      {/* 12. FINAL CTA */}
      <RepresentativeCTA
        title="Ready To Modernize Core Enterprise Systems With"
        highlightText="Oracle Cloud?"
        description="Partner with Devopstrio to design secure, scalable, and business-critical Oracle solutions across cloud infrastructure, databases, and managed operations."
        primaryBtnText="SCHEDULE ORACLE STRATEGY SESSION"
        primaryBtnHref="/contact#contact-form"
        secondaryBtnText="EXPLORE ALL SERVICES"
        secondaryBtnHref="/services"
      />
    </main>
  );
}
