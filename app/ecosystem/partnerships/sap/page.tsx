"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import {
  ArrowUpRight,
  CheckCircle2,
  Plus,
  Minus,
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
  Search,
  Globe,
  Settings,
  Lightbulb,
  Building
} from "lucide-react";
import Link from "next/link";
import { FAQ } from "@/components/ecosystem/FAQ";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";
import { HeroParticleCanvas } from "@/components/ecosystem/HeroParticleCanvas";
import { VendorServicesMarquee } from "@/sections/ecosystem/partnerships/VendorServicesMarquee";

const sapSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "btp-platform", label: "BTP Platform" },
  { id: "business-ai", label: "Business AI" },
  { id: "process-transformation", label: "Process Transformation" },
  { id: "solutions", label: "Solutions" },
  { id: "industry-transformation", label: "Industry Focus" },
  { id: "faq", label: "FAQ" }
];

export default function SAPStrategicAllianceHub() {
  // 10. Industry Transformation Tab State
  const [activeIndustry, setActiveIndustry] = useState("Banking");

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
    { text: "AI-Powered Operations", desc: "Joule AI agentic workflows & intelligent decision engine tools" },
    { text: "Business Transformation", desc: "SAP Signavio process modeling & legacy ERP conversions" },
    { text: "Digital Core Modernization", desc: "Seamless migration loops to high-performance S/4HANA cloud" },
    { text: "Intelligent SAP BTP Platform", desc: "Custom extension apps development & multi-cloud system integrations" }
  ];

  // 2. SAP Ecosystem Overview Pillars
  const platformPillars = [
    { title: "Business Applications", desc: "Digital core networks covering ERP, supply chain, and human resources applications.", icon: <Briefcase className="w-6 h-6 text-rose-500" /> },
    { title: "Business Data", desc: "A unified data platform connecting transaction ledgers and telemetry data models.", icon: <Database className="w-6 h-6 text-rose-500" /> },
    { title: "Business AI", desc: "Joule copilot models providing contextual recommendations directly within system applications.", icon: <Sparkles className="w-6 h-6 text-rose-500" /> },
    { title: "Automation", desc: "Autonomous workflows and robotic automation loops built to optimize processes.", icon: <Zap className="w-6 h-6 text-rose-500" /> },
    { title: "SAP BTP Platform", desc: "SAP Business Technology Platform for application development and systems integration.", icon: <Cpu className="w-6 h-6 text-rose-500" /> }
  ];

  // 3. Enterprise Business Domains
  const businessDomains = [
    {
      title: "Finance",
      bullets: ["Financial Planning & Analysis", "Accounting & Closing cycles", "Treasury & Cash management", "Governance, Risk & Compliance"]
    },
    {
      title: "Supply Chain",
      bullets: ["Inventory Optimization", "Digital Logistics & Warehousing", "Manufacturing Operations", "Procurement Automation"]
    },
    {
      title: "Human Capital",
      bullets: ["Workforce Management", "Talent Acquisition portals", "Employee Experience tracking", "Corporate Learning management"]
    },
    {
      title: "Customer Experience",
      bullets: ["Sales automation & pipelines", "Field service dispatching", "Marketing campaign engines", "Digital commerce systems"]
    },
    {
      title: "Procurement",
      bullets: ["Supplier Network connections", "Strategic sourcing metrics", "Contract lifecycle management", "Spend Analysis engines"]
    }
  ];

  // 5. SAP BTP Platform Capabilities
  const btpCapabilities = [
    { title: "Application Development", desc: "Constructing custom business software and extensions on SAP BTP." },
    { title: "Integration Suite", desc: "Connecting distinct ERP systems, SaaS hubs, and APIs with secure BTP connectors." },
    { title: "Data Management", desc: "Structuring master database assets with high-speed SAP HANA databases." },
    { title: "Analytics", desc: "Configuring real-time forecasting dashboards using SAP Analytics Cloud." },
    { title: "Automation", desc: "Enforcing unified workflow approvals and process automation loops." },
    { title: "AI Services", desc: "Deploying generative AI features and Joule copilots inside company applications." }
  ];

  // 6. Business AI Platform Features
  const aiFeatures = [
    { title: "Joule AI", desc: "SAP's flagship conversational assistant offering instant data summaries and app help." },
    { title: "AI Agents", desc: "Autonomous software units configured to run complex invoice reviews and procurement approvals." },
    { title: "Generative AI", desc: "Simplifying dense legal agreements and logistics logs into clear executive briefings." },
    { title: "Predictive Intelligence", desc: "Anticipating inventory demands and warehouse storage requirements accurately." },
    { title: "Decision Automation", desc: "Applying business policies automatically to routing decisions and invoice matching." },
    { title: "Business Insights", desc: "Surfacing process bottlenecks and suggesting workflow optimization paths." }
  ];

  // 8. Business Process Transformation Timeline
  const processSteps = [
    { phase: "Assess", desc: "Audit legacy ERP components, custom code lines, and database sizes." },
    { phase: "Model", desc: "Design future process models and unified data directories." },
    { phase: "Optimize", desc: "Identify process bottlenecks using SAP Signavio process mining tools." },
    { phase: "Automate", desc: "Enforce digital workflows, Joule agents, and automated backups." },
    { phase: "Integrate", desc: "Connect applications to BTP integration suites and cloud networks." },
    { phase: "Operate", desc: "Launch new digital core tools and monitor operational metrics." },
    { phase: "Innovate", desc: "Deploy AI pilots, custom workflows, and predictive models." }
  ];

  // 9. SAP Solution Portfolio
  const solutionPortfolio = [
    { title: "SAP S/4HANA", sub: "Digital Core ERP", desc: "Real-time enterprise resource planning database for finance and supply chain operations." },
    { title: "SAP SuccessFactors", sub: "Human Capital Management", desc: "Unified global employee directory, payroll, and talent management system." },
    { title: "SAP Ariba", sub: "Procurement & Spend", desc: "Global supplier network marketplace for secure spend analytics." },
    { title: "SAP CX", sub: "Customer Experience", desc: "Integrated customer relationship management and e-commerce portal tools." },
    { title: "SAP IBP", sub: "Supply Chain Planning", desc: "Real-time demand planning, supply chains, and logistics visibility tools." },
    { title: "SAP Signavio", sub: "Process Intelligence", desc: "Enterprise process mining to optimize operations." }
  ];

  // 10. Industry Transformation
  const industries = [
    {
      name: "Banking",
      challenge: "Handling complex regulatory audits across disconnected legacy reporting systems.",
      solution: "Consolidate accounting systems onto S/4HANA Finance with automated compliance reporting.",
      outcome: "3x faster financial closings and 100% audit accuracy."
    },
    {
      name: "Manufacturing",
      challenge: "Delayed product shipments due to unscheduled machinery downtime and inventory bottlenecks.",
      solution: "Deploy S/4HANA Asset Management connected to predictive IoT sensors.",
      outcome: "25% lower inventory waste and automated spare parts ordering."
    },
    {
      name: "Retail",
      challenge: "Frequent website crashes and slow order syncing during holiday shopping spikes.",
      solution: "Integrate retail portals with S/4HANA inventory ledgers using SAP BTP.",
      outcome: "Zero down-time during holiday sales spikes and instant stock updates."
    },
    {
      name: "Healthcare",
      challenge: "Siloed patient billing records and high administrative data entry overhead.",
      solution: "Deploy secure health analytics databases with automated billing workflows.",
      outcome: "40% faster billing cycles and compliant records storage."
    },
    {
      name: "Energy",
      challenge: "Inefficient asset tracking and manual field technician dispatching.",
      solution: "Implement SAP Field Service Management sync'd with enterprise SCM databases.",
      outcome: "30% higher technician utilization and reduced maintenance delays."
    },
    {
      name: "Telecommunications",
      challenge: "Processing millions of customer calling records daily without database delays.",
      solution: "Deploy high-performance SAP HANA database engines for customer billing.",
      outcome: "Real-time billing checks and instant system response times."
    },
    {
      name: "Government",
      challenge: "Legacy paper documents filing systems and slow citizen service rates.",
      solution: "Migrate public databases to secure SAP GovCloud portals with automated routing.",
      outcome: "45% lower admin overhead and faster citizen services processing."
    },
    {
      name: "Logistics",
      challenge: "Delayed container updates and manual freight scheduling.",
      solution: "Configure SAP Transportation Management with real-time GPS tracking.",
      outcome: "Optimized shipping routes and 20% lower fuel expenses."
    }
  ];

  // 11. Data & Analytics Hub
  const analyticsCapabilities = [
    { title: "Business Data Cloud", desc: "Deploying a unified, semantic data layer across the enterprise." },
    { title: "SAP HANA", desc: "Powering real-time transactional analysis with high-speed databases." },
    { title: "Analytics Cloud", desc: "Designing visual forecast models and cash flow dashboards." },
    { title: "Data Governance", desc: "Configuring strict data catalogs and metadata labels." },
    { title: "Master Data Management", desc: "Consolidating client, product, and supplier directories." },
    { title: "Enterprise Reporting", desc: "Automating financial reports and tax reviews safely." }
  ];

  // 12. Enterprise Automation Center
  const automationSolutions = [
    { title: "Workflow Automation", desc: "Enforcing unified approval routes and incident processing loops." },
    { title: "Process Automation", desc: "Running software bots to complete ERP entries without APIs." },
    { title: "Approvals", desc: "Automating procurement approvals based on custom budget limits." },
    { title: "Document Automation", desc: "Extracting transaction keys from supplier invoices automatically." },
    { title: "Case Management", desc: "Allocating support tickets to correct developer teams." },
    { title: "Business Rules", desc: "Configuring conditional routing tables and budget boundaries." }
  ];

  // 13. SAP + AI Innovation Lab R&D Areas
  const innovationAreas = [
    { title: "Agentic Workflows", desc: "Testing autonomous AI agents that process invoice disputes." },
    { title: "Generative AI", desc: "Deploying LLM nodes to draft business emails and reports." },
    { title: "Business Copilots", desc: "Tuning Joule assistants to retrieve operational metrics." },
    { title: "Predictive Supply Chain", desc: "Training ML models to anticipate logistics delays." },
    { title: "Autonomous Finance", desc: "Automating ledger reviews and billing runs." },
    { title: "Smart Procurement", desc: "Automating vendor selection based on historic delivery records." }
  ];

  // SAP Certifications
  const certifications = [
    { name: "SAP Certified Associate - S/4HANA Cloud", image: "/webp/assets/ecosystem/Sap_Awards/image-180.webp" },
    { name: "SAP Certified Technology Associate - SAP HANA", image: "/webp/assets/ecosystem/Sap_Awards/image-181.webp" },
    { name: "SAP Certified Development Associate - SAP BTP", image: "/webp/assets/ecosystem/Sap_Awards/image-183.webp" },
    { name: "SAP Certified Technology Specialist - SAP Activate", image: "/webp/assets/ecosystem/Sap_Awards/image-185.webp" },
    { name: "SAP Certified Integration Associate", image: "/webp/assets/ecosystem/Sap_Awards/image-186.webp" },
    { name: "SAP Gold Partner Competency Award", image: "/webp/assets/ecosystem/Sap_Awards/Group-1000008910.webp" },
    { name: "SAP Cloud Transformation Excellence", image: "/webp/assets/ecosystem/Sap_Awards/image-194-Photoroom-1.webp" }
  ];

  // FAQ Accordion Data
  const faqs = [
    {
      q: "What certified credentials do Devopstrio SAP consultants possess?",
      a: "Our consultants possess credentials including SAP Certified Associate for S/4HANA Cloud, Technology Associate for SAP HANA, Development Associate for BTP, and Specialist for SAP Activate."
    },
    {
      q: "What is the role of SAP Business Technology Platform (BTP) in a cloud architecture?",
      a: "SAP BTP is the orchestration and extension layer, allowing enterprises to integrate SAP applications with third-party software, run analytics, and build custom apps without disrupting the core ERP."
    },
    {
      q: "How does Devopstrio help with migrating from legacy ECC to S/4HANA?",
      a: "We guide you through the migration lifecycle—including custom code remediation, database conversions to SAP HANA, and data quality staging using SAP Activate."
    },
    {
      q: "What is SAP Business AI and how does it optimize operations?",
      a: "SAP Business AI integrates machine learning and LLMs directly into finance, supply chain, and procurement processes, enabling automated cash applications, demand forecasting, and natural language queries via Joule."
    },
    {
      q: "How do you integrate SAP with other cloud ecosystems like Azure or AWS?",
      a: "We deploy SAP Integration Suite on BTP, creating REST/SOAP endpoint mappings and event mesh configurations that synchronize inventory and sales data securely across multi-cloud databases."
    },
    {
      q: "What is SAP Signavio and when is it utilized?",
      a: "SAP Signavio is a process-mining and workflow modeling platform we use to analyze transactions, find bottlenecks, and simulate process efficiency gains before upgrading the core ERP system."
    },
    {
      q: "Can you secure database instances for SAP HANA workloads?",
      a: "Yes. We configure SAP HANA encryption keys, security roles, LDAP user syncs, audit logs, and secure OCI/Azure network zones to safeguard enterprise database schemas."
    },
    {
      q: "What benefits does SAP Datasphere offer for business analytics?",
      a: "SAP Datasphere provides a unified data fabric, combining SAP data with external datasets while maintaining business context, semantics, and security rules for real-time dashboard analytics."
    },
    {
      q: "How do you handle custom ABAP code during cloud migrations?",
      a: "We run automated audit tools to analyze custom code blocks, deprecate obsolete elements, and rewrite necessary modules into clean cloud-compliant extensions using BTP ABAP environments."
    },
    {
      q: "What support does Devopstrio provide after S/4HANA go-live?",
      a: "We provide 24/7 technical support, system patching, performance monitoring, database tuning, and regular enhancement package updates to ensure continuous system health."
    }
  ];

  // 15. Business Value Metrics
  const impactMetrics = [
    { value: "35%", label: "Process Efficiency" },
    { value: "50%", label: "Faster Decisions" },
    { value: "30%", label: "Cost Reduction" },
    { value: "99.9%", label: "Platform Availability" },
    { value: "24x7", label: "Managed Operations" },
    { value: "Global", label: "Enterprise Delivery" }
  ];

  // 16. Devopstrio SAP Delivery Framework
  const deliveryFrameworkSteps = [
    { phase: "Strategy", desc: "Defining transformation goals, software licensing, and cloud roadmaps." },
    { phase: "Assessment", desc: "Auditing legacy ERP code files, database sizes, and API configurations." },
    { phase: "Architecture", desc: "Designing OCI/Azure landing zones, BTP integrations, and database schemas." },
    { phase: "Migration", desc: "Executing safe S/4HANA migrations with minimal system downtime." },
    { phase: "Implementation", desc: "Configuring applications, forms, workflows, and security guardrails." },
    { phase: "Optimization", desc: "Running Signavio process mining tests to resolve transaction lag." },
    { phase: "Managed Services", desc: "Providing 24/7 help desk, patch rollouts, and database tuning." }
  ];

  // 17. Customer Success Stories
  const successStories = [
    {
      title: "ERP Modernization",
      challenge: "A manufacturing client had duplicate inventory listings across aging local databases.",
      solution: "Consolidated databases onto a single SAP S/4HANA cloud database.",
      result: "Achieved 100% inventory accuracy, reducing stock write-offs by 25%."
    },
    {
      title: "Supply Chain Optimization",
      challenge: "Delayed shipment alerts due to manual parts ordering processes.",
      solution: "Integrated manufacturing lines with SAP SCM and automated procurement pipelines.",
      result: "30% reduction in parts shortages and faster shipping times."
    },
    {
      title: "Finance Transformation",
      challenge: "Month-end accounting closures took weeks due to manual spreadsheets.",
      solution: "Automated billing entries and cash flow sheets using S/4HANA Finance.",
      result: "Closed monthly books in 3 days, saving hundreds of accounting hours."
    },
    {
      title: "Procurement Excellence",
      challenge: "Unapproved spend across disconnected purchasing directories.",
      solution: "Configured SAP Ariba to enforce automated approvals based on manager limits.",
      result: "Eliminated unapproved spend and saved 15% on supplier procurement."
    },
    {
      title: "Workforce Transformation",
      challenge: "High onboarding wait times and disconnected employee portal software.",
      solution: "Deployed SuccessFactors as a unified global payroll and employee platform.",
      result: "40% faster onboarding and higher overall employee satisfaction."
    },
    {
      title: "AI-Powered Enterprise",
      challenge: "Customer service teams spent hours searching manuals to fix system issues.",
      solution: "Deployed Joule assistant tools sync'd with technical manuals databases.",
      result: "85% faster case resolution rates, improving support quality."
    }
  ];

  // 18. Future of the Autonomous Enterprise
  const autonomousEnterpriseFocus = [
    { title: "AI Agents", desc: "Self-executing software units designed to perform transactional audits." },
    { title: "Business AI", desc: "Joule copilot models providing insights inside S/4HANA screens." },
    { title: "Autonomous Workflows", desc: "Automating purchasing approvals based on past trends." },
    { title: "Decision Intelligence", desc: "Enforcing cloud and operational policies automatically." },
    { title: "Predictive Operations", desc: "Anticipating resource requirements to auto-scale databases." },
    { title: "Self-Optimizing Enterprises", desc: "Applying process mining optimizations to workflows dynamically." }
  ];

  // 19. Related Partnerships
  const relatedPartnerships = [
    { name: "Microsoft Alliance", desc: "Enterprise Azure setups, Fabric data lakes, and security systems.", href: "/ecosystem/partnerships/microsoft" },
    { name: "AWS Partnership", desc: "Amazon Web Services cloud enablement & DevOps systems.", href: "/ecosystem/partnerships/aws" },
    { name: "Google Cloud", desc: "Next-gen GCP data warehousing and predictive AI models.", href: "/ecosystem/partnerships/google-cloud" },
    { name: "Oracle Alliance", desc: "Database modernization and OCI database migrations.", href: "/ecosystem/partnerships/oracle" },
    { name: "ServiceNow", desc: "IT Service Management and automated workflows.", href: "/ecosystem/partnerships/servicenow" },
    { name: "Innovation Labs", desc: "Prototyping future workflows and cloud-native solutions.", href: "/ecosystem/innovation-labs" },
    { name: "Technology Stack", desc: "Core software components and deployment strategies.", href: "/ecosystem/platforms-solutions" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION: SAP ECOSYSTEM HERO */}
      <section className="relative isolate flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden bg-black text-white pt-24 pb-16 lg:py-28 border-b border-zinc-900/60">
        <style>{`
          /* Partnership Connector Rail - Bounded, stops cleanly before SAP logo */
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
              SAP Strategic Alliance
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">SAP Enterprise</span>
              <span className="block bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
              Next-generation S/4HANA cloud transformations, SAP BTP innovation architectures, and sovereign AI business automation powered by SAP.
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
                <div className="w-full h-0.5 bg-gradient-to-r from-rose-500/50 via-zinc-700/40 to-blue-500/50 rounded-full" />
                
                {/* Laser tracer beam bounded along line */}
                <div className="connector-laser absolute inset-y-0 h-1 rounded-full bg-gradient-to-r from-transparent via-rose-500 to-transparent blur-[1px]" />
                
                {/* Energy pulse particle stopping cleanly before SAP card */}
                <div className="connector-node absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_16px_5px_rgba(244,63,94,0.9)]" />
              </div>

              {/* SAP Logo Card */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-zinc-950/90 p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(0,140,240,0.25)] transition-all duration-300">
                <img
                  src="/assets/Tech_logos/sap.svg"
                  alt="SAP"
                  className="h-full w-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,140,240,0.35)]"
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

      {/* TOP SERVICES WORKED ON MARQUEE */}
      <VendorServicesMarquee vendor="sap" />

      {/* STICKY SECTION NAVBAR */}
      <SectionNavbar sections={sapSections} />


      {/* 2. SAP ECOSYSTEM OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              ECOSYSTEM CORE
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              SAP Platform <span className="text-rose-500">Overview</span>
            </h2>
            
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {platformPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-rose-500/5 flex items-center justify-center mb-6 text-rose-500">
                    {item.icon}
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENTERPRISE BUSINESS DOMAINS */}
      <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              BUSINESS DEPARTMENTS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Enterprise Business <span className="text-rose-500">Domains</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {businessDomains.map((domain, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">{domain.title}</h3>
                  <div className="h-[1px] bg-zinc-900 w-full my-4" />

                  <ul className="space-y-3">
                    {domain.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">
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

      {/* 4. SAP BUSINESS SUITE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left font-bold">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              DIGITAL CORE
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              SAP Business <span className="text-rose-500">Suite</span>
            </h2>
          </Reveal>

          {/* Architecture representation */}
          <div className="w-full bg-zinc-950/50 border border-zinc-900 rounded-3xl p-8 max-w-4xl mx-auto select-none">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center justify-center text-center font-mono text-[11px] md:text-xs">

              <div className="p-6 bg-zinc-900 border border-zinc-850 rounded-2xl">
                <div className="text-rose-500 font-bold mb-2">APPLICATIONS</div>
                <div className="text-zinc-400 text-[10px] leading-relaxed font-bold">Enterprise S/4HANA system screens.</div>
              </div>

              <div className="p-6 bg-zinc-900 border border-zinc-850 rounded-2xl">
                <div className="text-rose-500 font-bold mb-2">DATA</div>
                <div className="text-zinc-400 text-[10px] leading-relaxed font-bold">Real-time SAP HANA database logs.</div>
              </div>

              <div className="p-6 bg-zinc-900 border border-zinc-850 rounded-2xl">
                <div className="text-rose-500 font-bold mb-2">AI</div>
                <div className="text-zinc-400 text-[10px] leading-relaxed font-bold">Contextual Joule assistant suggestions.</div>
              </div>

              <div className="p-6 bg-zinc-900 border border-zinc-850 rounded-2xl">
                <div className="text-rose-500 font-bold mb-2">AUTOMATION</div>
                <div className="text-zinc-400 text-[10px] leading-relaxed font-bold">Unified digital approval routes.</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. SAP BUSINESS TECHNOLOGY PLATFORM (BTP) */}
      <section id="btp-platform" className="w-full py-24 bg-black border-b border-zinc-900/60 relative scroll-mt-28">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              BTP INTEGRATION & RUNTIMES
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              SAP Business Technology <span className="text-rose-500">Platform (BTP)</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {btpCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS AI PLATFORM */}
      <section id="business-ai" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              JOULE & CO-PILOTS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              AI Embedded Across <span className="text-rose-500">Business Operations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTELLIGENT ENTERPRISE ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Intelligent Enterprise <span className="text-rose-500">Architecture</span>
            </h2>
          </Reveal>

          {/* Connected Flow */}
          <div className="w-full bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 max-w-5xl mx-auto select-none">
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[10px] md:text-xs text-zinc-400 font-bold">
              {["Customer", "Sales", "Finance", "Supply Chain", "Manufacturing", "Procurement", "Operations"].map((node, nIdx) => (
                <React.Fragment key={node}>
                  <div className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5">
                    {node}
                  </div>
                  {nIdx < 6 && <ChevronRight className="w-3.5 h-3.5 text-rose-500" />}
                </React.Fragment>
              ))}
            </div>
            <div className="text-center font-mono text-[10px] text-rose-500/60 uppercase tracking-widest mt-6 font-bold">
              Connected through: SAP Business Suite
            </div>
          </div>
        </div>
      </section>

      {/* 8. BUSINESS PROCESS TRANSFORMATION */}
      <section id="process-transformation" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              PROCESS METHODOLOGY
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Business Process <span className="text-rose-500">Transformation</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {processSteps.map((step, idx) => (
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

      {/* 9. SAP SOLUTION PORTFOLIO */}
      <section id="solutions" className="w-full py-24 bg-black border-b border-zinc-900/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              INTELLIGENT SUITE
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              SAP Solution <span className="text-rose-500">Portfolio</span>
            </h2>
            
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionPortfolio.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">{sol.sub}</span>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{sol.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INDUSTRY TRANSFORMATION */}
      <section id="industry-transformation" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              VERTICAL BLUEPRINTS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Industry <span className="text-rose-500">Transformation</span>
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
                    <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">CHALLENGE</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">{ind.name} Roadblocks</h3>
                    <p className="text-zinc-200 text-sm md:text-base leading-relaxed font-medium">{ind.challenge}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">SOLUTION</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">SAP Solution</h3>
                    <p className="text-zinc-200 text-sm md:text-base leading-relaxed font-medium">{ind.solution}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">OUTCOME</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Business Impact</h3>
                    <p className="text-zinc-200 text-sm md:text-base leading-relaxed font-medium">{ind.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 11. DATA & ANALYTICS HUB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              SAP HANA CLOUD DATA
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Data & Analytics <span className="text-rose-500">Hub</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticsCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. ENTERPRISE AUTOMATION CENTER */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              WORKFLOW RUNTIMES
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Enterprise Automation <span className="text-rose-500">Center</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationSolutions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. SAP + AI INNOVATION LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              R&D PROJECTS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              SAP + AI Innovation <span className="text-rose-500">Lab</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationAreas.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. INTEGRATION ECOSYSTEM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              BTP INTEGRATION SUITE
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Integration <span className="text-rose-500">Ecosystem</span>
            </h2>
          </Reveal>

          {/* Integration representation */}
          <div className="w-full bg-zinc-950/50 border border-zinc-900 rounded-3xl p-8 max-w-4xl mx-auto select-none">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center text-center font-mono text-[10px] md:text-xs">

              <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-500 rounded-xl font-bold col-span-3 md:col-span-4 lg:col-span-8 mb-4">
                SAP Integration Hub
              </div>

              {["Microsoft", "AWS", "Google Cloud", "Oracle", "ServiceNow", "Salesforce", "Workday"].map((tech) => (
                <div key={tech} className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-350 hover:text-white hover:border-rose-500/20 transition-all font-bold">
                  ↔ {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAP CERTIFICATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              CREDENTIALED EXPERT TEAM
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Certified SAP <span className="text-rose-500">Engineers</span>
            </h2>
            
          </Reveal>

          {/* Badge Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 select-none">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center justify-center bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/20 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300 text-center gap-4 group min-h-[180px]"
              >
                <div className="w-full h-16 flex items-center justify-center mb-2">
                  {cert.image ? (
                    <img src={cert.image}
                      alt={cert.name}
                      className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 group-hover:scale-105"
                      loading="lazy" />
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

      {/* 15. BUSINESS VALUE METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-5">
              <Reveal className="text-left font-bold">
                <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
                  PROVEN VALUE
                </span>
                <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
                  Business Value <span className="text-rose-500">Metrics</span>
                </h2>
                
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 select-none">
                {impactMetrics.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 text-left group"
                  >
                    <div className="text-2xl md:text-3xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                      {stat.value}
                    </div>
                    <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider leading-snug font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 16. DEVOPSTRIO SAP DELIVERY FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              COE JOURNEY
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Devopstrio SAP Delivery <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {deliveryFrameworkSteps.map((step, idx) => (
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

      {/* 17. CUSTOMER SUCCESS STORIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              OUTCOMES achieved
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Customer Success <span className="text-rose-500">Stories</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
                    SAP Success Story
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
                      <p className="text-xs text-zinc-350 font-bold leading-relaxed">{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18. FUTURE OF THE AUTONOMOUS ENTERPRISE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              FUTURE VISION
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Future of the <span className="text-rose-500">Autonomous Enterprise</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {autonomousEnterpriseFocus.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-2xl hover:border-rose-500/20 transition-all duration-300 text-center"
              >
                <div className="text-rose-500 font-mono text-[10px] uppercase tracking-wider mb-2 font-bold">AUTONOMOUS</div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider leading-snug">{item.title}</h4>
                <p className="text-[10px] text-zinc-400 mt-2 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <FAQ faqs={faqs} />

      {/* 19. RELATED ECOSYSTEM CONNECTIONS */}

      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Related Ecosystem <span className="text-rose-500">Connections</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
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
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 20. CTA */}
      <RepresentativeCTA
        title="Transform Into An Intelligent Enterprise With"
        highlightText="SAP Solutions?"
        description="Leverage SAP Business Suite, Business AI, Data Cloud, and SAP BTP to modernize every business process."
        primaryBtnText="TALK TO SAP EXPERTS"
        primaryBtnHref="/contact#contact-form"
        secondaryBtnText="EXPLORE ALL SERVICES"
        secondaryBtnHref="/services"
      />
    </main>
  );
}
