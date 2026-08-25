"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
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
  Award,
  Globe,
  Settings,
  Users
} from "lucide-react";
import Link from "next/link";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { PartnerCertifications } from "@/sections/ecosystem/partnerships/PartnerCertifications";

const awsSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "certifications", label: "Certifications" },
  { id: "solutions", label: "Solutions" },
  { id: "use-cases", label: "Use Cases" },
  { id: "faq", label: "FAQ" }
];

// Stats data
const stats = [
  { value: "350+", label: "AWS Certified Engineers" },
  { value: "14+", label: "AWS Competencies & Credentials" },
  { value: "99.99%", label: "Uptime & Availability Achieved" },
  { value: "500+", label: "Production Cloud Workloads" }
];

// Capabilities data
const capabilities = [
  {
    id: "migration",
    title: "Migration & Modernization",
    subtitle: "Accelerate your transition to the cloud with minimal business disruption.",
    icon: <Cloud className="w-5 h-5 text-rose-500" />,
    metrics: "45% Reduction in Migration Cycle Times",
    points: [
      "AWS Landing Zone Setup with multi-account security guardrails",
      "Automated Database Migrations using AWS DMS & Schema Conversion Tool",
      "Application Refactoring to AWS Serverless and Container platforms",
      "Comprehensive Cloud Readiness assessment and TCO evaluation"
    ],
    tech: ["AWS DMS", "AWS Aurora", "Application Migration Service (MGN)", "Terraform"]
  },
  {
    id: "cloud-native",
    title: "Cloud-Native Engineering",
    subtitle: "Build resilient, auto-scaling, and microservice-driven platforms.",
    icon: <Cpu className="w-5 h-5 text-rose-500" />,
    metrics: "10x Faster Deployment Frequency",
    points: [
      "Container Orchestration via Elastic Kubernetes Service (EKS) & ECS",
      "Event-Driven Architectures utilizing EventBridge & SQS",
      "Serverless execution logic via AWS Lambda",
      "High-throughput API Gateways and secure endpoints configuration"
    ],
    tech: ["Amazon EKS", "AWS Lambda", "ECS Fargate", "API Gateway"]
  },
  {
    id: "devops",
    title: "DevSecOps & GitOps",
    subtitle: "Automate delivery pipelines and enforce security in every release.",
    icon: <Workflow className="w-5 h-5 text-rose-500" />,
    metrics: "Zero-Downtime Releases Standardized",
    points: [
      "Infrastructure as Code (IaC) with unified Terraform components",
      "Automated CI/CD release loops via GitHub Actions & AWS CodePipeline",
      "GitOps-driven state synchronization using ArgoCD inside EKS",
      "Automated static and dynamic code security scans (SAST/DAST)"
    ],
    tech: ["Terraform", "ArgoCD", "AWS CodePipeline", "GitHub Actions"]
  },
  {
    id: "applied-ai",
    title: "Applied AI & GenAI",
    subtitle: "Incorporate foundation models securely into your business processes.",
    icon: <Sparkles className="w-5 h-5 text-rose-500" />,
    metrics: "85% Automation in Data Processing",
    points: [
      "Generative AI application deployment using Amazon Bedrock",
      "Predictive modeling and custom training workflows on Amazon SageMaker",
      "Automated document processing pipelines with AWS Textract",
      "Intelligent search engines built with Amazon Q and OpenSearch"
    ],
    tech: ["Amazon Bedrock", "SageMaker", "AWS Textract", "Amazon Q"]
  },
  {
    id: "data-analytics",
    title: "Data Lakes & Analytics",
    subtitle: "Harness enterprise telemetry and operational logs at scale.",
    icon: <Database className="w-5 h-5 text-rose-500" />,
    metrics: "Petabyte-Scale Query Performance",
    points: [
      "Enterprise Data Lakes built on AWS S3 & Lake Formation",
      "Serverless analytical queries utilizing AWS Athena",
      "Data Warehouse configurations with Amazon Redshift",
      "Real-time data streaming architectures using Amazon Kinesis"
    ],
    tech: ["Amazon Redshift", "AWS Glue", "Amazon Athena", "Amazon Kinesis"]
  }
];

const dabgOfferings = [
  {
    title: "Joint Co-Innovation Center",
    desc: "Collaborative sandbox environments to prototype, test, and release next-gen AWS solutions tailored to specific industries."
  },
  {
    title: "Migration Acceleration Program",
    desc: "Leverage AWS funding, frameworks, and Devopstrio blueprints to offset costs and reduce modernization risks."
  },
  {
    title: "24/7 Managed Cloud Operations",
    desc: "Continuous proactive security scanning, resource optimization, and SLA-governed support across all AWS environments."
  }
];

const industries = [
  {
    name: "Healthcare",
    challenge: "Strict compliance protocols, siloed patient databases, and slow operational systems.",
    solution: "Secure, HIPAA-compliant hosting architecture utilizing AWS GovCloud, KMS encryption, and Amazon Comprehend Medical.",
    outcome: "100% compliance audit pass rate and 45% faster record retrieval times."
  },
  {
    name: "Financial Services",
    challenge: "High transaction latency, legacy mainframe dependencies, and complex risk-management operations.",
    solution: "Microservices transition on Amazon EKS with real-time analytics using Amazon Kinesis and DynamoDB.",
    outcome: "Sub-millisecond processing times and 40% reduction in reporting overhead."
  },
  {
    name: "Retail & E-commerce",
    challenge: "Severe site bottlenecks during seasonal traffic spikes and disjointed inventory updates.",
    solution: "Serverless e-commerce infrastructure using AWS Lambda, API Gateway, and Amazon DynamoDB.",
    outcome: "Zero down-time during global holiday sales and real-time cross-channel inventory syncing."
  },
  {
    name: "Manufacturing",
    challenge: "High machinery maintenance costs, untracked floor telemetry, and supply chain delays.",
    solution: "IoT Core integration with predictive analytics pipelines using AWS SageMaker and Amazon Redshift.",
    outcome: "25% lower unplanned downtime and automated supply chain routing alerts."
  }
];

const successStories = [
  {
    title: "Cloud Migration",
    subtitle: "Enterprise ERP System Modernization",
    challenge: "A leading logistics company suffered from database crashes and high physical infrastructure maintenance fees.",
    solution: "Transitioned their full core database inventory onto AWS Aurora clusters, backed by automated Terraform configurations.",
    result: "Reduced annual hosting costs by 40% while achieving 99.99% availability."
  },
  {
    title: "Platform Automation",
    subtitle: "Global FinTech GitOps Pipeline",
    challenge: "Manual environment updates led to deployment errors and failed security compliance audits.",
    solution: "Standardized technical deployments using GitOps, ArgoCD, and automated security scans inside AWS EKS.",
    result: "Increased code release velocity by 6x and achieved continuous compliance auditing."
  },
  {
    title: "GenAI Integration",
    subtitle: "Intelligent Customer Operations Portal",
    challenge: "Support representatives struggled with long response times due to complex manuals and databases.",
    solution: "Deployed a RAG-based support copilot using Amazon Bedrock, OpenSearch, and document ingestion pipelines.",
    result: "85% reduction in average query resolution time, enhancing client satisfaction."
  }
];

const faqs = [
  {
    q: "How does Devopstrio ensure security and compliance on AWS?",
    a: "We implement secure-by-design architectures using AWS Control Tower, IAM least-privilege configurations, KMS data encryption, and continuous monitoring via Security Hub and GuardDuty to ensure SOC2, ISO, and HIPAA compliance."
  },
  {
    q: "What is the Devopstrio AWS Business Group (DABG)?",
    a: "DABG is our dedicated co-innovation alliance with AWS. It combines AWS cloud architects with our engineering specialists to offer accelerated migration funding, joint technology frameworks, and 24/7 managed support."
  },
  {
    q: "Do you support serverless and containerized deployment frameworks?",
    a: "Yes, we specialize in containerized deployments using Amazon EKS (Kubernetes) and ECS (Fargate), as well as serverless applications driven by AWS Lambda and Amazon EventBridge."
  },
  {
    q: "How do you help optimize our monthly AWS expenditures?",
    a: "We perform comprehensive cost-optimization audits using AWS Cost Explorer and Compute Optimizer, configure auto-scaling systems, set up automated scheduling, and recommend AWS Savings Plans."
  }
];

export default function AWSSteategicAllianceHub() {
  const [activeCapability, setActiveCapability] = useState("migration");
  const [activeIndustry, setActiveIndustry] = useState("Healthcare");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const currentCap = capabilities.find((c) => c.id === activeCapability) || capabilities[0];

  // Smooth scroll and scroll animations exactly like in app/page.tsx
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
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      gsap.registerPlugin(ScrollTrigger);

      // Fade-in animation for capability cards on scroll
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

  const heroPoints = [
    { text: "AWS Migration & Modernization", desc: "Enterprise scale migrations & TCO" },
    { text: "Cloud-Native Engineering", desc: "Kubernetes (EKS), Lambda & containers" },
    { text: "Applied AI & GenAI", desc: "Amazon Bedrock & secure ML models" },
    { text: "DevSecOps & Platform Automation", desc: "Terraform pipelines & GitOps" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION WITH CALM AWS WAVE DESIGN & PITCH BLACK BACKGROUND */}
      <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">

        {/* Concentric Wave Elements in AWS Amber/Orange/Yellow Colors */}
        <div className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[85%] md:w-[65%] h-[130%] z-0 pointer-events-none select-none overflow-hidden flex items-center justify-end">
          <div className="relative w-full h-full flex items-center justify-end">
            {/* Outer Waves */}
            <div className="absolute w-[200%] h-[160%] right-[-50%] rounded-[120px] md:rounded-[260px] border border-orange-500/10 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[170%] h-[135%] right-[-40%] rounded-[110px] md:rounded-[230px] border border-orange-500/15 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[140%] h-[110%] right-[-30%] rounded-[100px] md:rounded-[200px] border border-amber-500/15 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[110%] h-[85%] right-[-20%] rounded-[90px] md:rounded-[170px] border border-amber-500/20 rotate-[-28deg] pointer-events-none" />

            {/* Inner Waves */}
            <div className="absolute w-[80%] h-[60%] right-[-10%] rounded-[80px] md:rounded-[140px] border border-yellow-500/20 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[50%] h-[35%] right-[0%] rounded-[70px] md:rounded-[110px] border border-yellow-500/25 rotate-[-28deg] pointer-events-none" />

            {/* Core Glow */}
            <div className="absolute right-[5%] w-[180px] h-[90px] bg-gradient-to-r from-orange-655/15 via-amber-600/10 to-yellow-500/15 rounded-full blur-[50px] opacity-40 animate-pulse" />
          </div>
        </div>

        {/* Soft Ambient Light Theme Effect Gradients on Pitch-Black */}
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none select-none">
          <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[110px]" />
          <div className="absolute bottom-[10%] right-[30%] w-[350px] h-[350px] bg-yellow-500/5 rounded-full blur-[100px]" />
          <div className="absolute top-[35%] right-[0%] w-[250px] h-[250px] bg-amber-500/10 rounded-full blur-[90px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b0f2a_1px,transparent_1px),linear-gradient(to_bottom,#0b0f2a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <Reveal className="mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                    AWS Premier Tier Services Partner
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                  AWS <span className="text-[#E11D48] whitespace-nowrap">Ecosystem</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Helping organizations modernize applications, build resilient cloud-native platforms, secure workloads, and accelerate co-innovation with AWS.
                </p>
              </Reveal>

              {/* Hero Bullet Points Grid */}
              <Reveal delay={0.3} className="w-full mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {heroPoints.map((pt, idx) => (
                    <div key={idx} className="flex gap-3">
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
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                >
                  Talk to an AWS Expert
                </Link>
                <a
                  href="#competencies"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore AWS Capabilities
                </a>
              </Reveal>
            </div>

            {/* Hero Right Visual (Logo Integration) */}
            <div className="lg:col-span-5 relative flex items-center justify-center select-none z-10">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">

                {/* Connecting glowing line and animation */}
                <div className="absolute inset-x-12 h-[2px] bg-gradient-to-r from-rose-500/25 via-amber-500/30 to-orange-500/25 z-0 pointer-events-none">
                  {/* Energy Pulse */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_12px_#E11D48] animate-ping" style={{ animationDuration: '3s' }} />
                </div>

                <div className="flex items-center justify-between w-full relative z-10 px-4">

                  {/* Devopstrio Logo Card */}
                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-rose-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-600 to-red-655 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img src="/webp/assets/logo/logo.webp"
                      alt="Devopstrio Logo"
                      className="w-full h-auto max-h-[85%] object-contain select-none filter brightness-105"
                    loading="lazy" />
                  </div>

                  {/* Plus Connector Indicator */}
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg relative z-20">
                    <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                  </div>

                  {/* AWS Logo Card */}
                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-orange-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img src="/webp/assets/Devopstrio_Partners/aws.webp"
                      alt="Amazon AWS Logo"
                      className="w-full h-auto max-h-[85%] object-contain select-none"
                    loading="lazy" />
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

      {/* STICKY SECTION NAVBAR (Matching the Home Page navbar configuration) */}
      <SectionNavbar sections={awsSections} />

      {/* 2. VALUE STATS COUNT GRID */}
      <div id="overview" className="scroll-mt-24">
        <section className="w-full py-16 bg-[#030303] border-b border-zinc-900/60">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/20 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl md:text-4xl font-bold text-rose-500 tracking-tighter mb-1.5 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 3. ACCENTURE AWS BUSINESS GROUP (DABG) SPOTLIGHT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-5 text-left space-y-6">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Joint Acceleration
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Devopstrio AWS<br />Business Group <span className="text-rose-500">(DABG)</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Accident-proof cloud transformation starts with deep technical alignment. Our joint Business Group combines dedicated cloud architects, proprietary automation accelerators, and flexible AWS migration funding programs to deliver immediate business value.
                </p>
                <div className="h-[1px] bg-zinc-900 w-full my-4" />
                <div className="flex items-center gap-4">
                  <Globe className="w-5 h-5 text-rose-500 shrink-0" />
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Global Reach, Local Accountability</span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-6">
              {dabgOfferings.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 bg-zinc-950/40 border border-zinc-900 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-6 items-start hover:border-rose-500/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center shrink-0 text-rose-500">
                    <span className="text-xs font-mono font-bold">0{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE CAPABILITY TABS */}
      <div id="capabilities" className="scroll-mt-24">
        <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

            <Reveal className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                Capabilities Center
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Enterprise AWS <span className="text-rose-500">Solutions</span>
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-semibold">
                Deep competency alignment targeting your specific modernization objectives.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

              {/* Left Column: Tab Selectors */}
              <div className="lg:col-span-4 flex flex-col gap-2">
                {capabilities.map((cap) => (
                  <button
                    key={cap.id}
                    onClick={() => setActiveCapability(cap.id)}
                    className={`w-full p-5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between gap-4 ${activeCapability === cap.id
                      ? "bg-rose-500/10 border-rose-500 text-white shadow-md"
                      : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {cap.icon}
                      <span className="text-xs md:text-sm font-bold uppercase tracking-wider">{cap.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeCapability === cap.id ? "rotate-90 text-rose-500" : ""}`} />
                  </button>
                ))}
              </div>

              {/* Right Column: Tab Details */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCapability}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-2xl bg-zinc-950/40 border border-white/5 flex flex-col justify-between h-full space-y-6 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />

                    <div>
                      <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                        Key Metric: {currentCap.metrics}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                        {currentCap.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm font-medium leading-relaxed mb-6">
                        {currentCap.subtitle}
                      </p>

                      <div className="h-[1px] bg-zinc-900 w-full mb-6" />

                      <h5 className="text-[10px] font-mono uppercase tracking-widest text-zinc-550 mb-3 block">Deliverables</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentCap.points.map((pt, i) => (
                          <li key={i} className="flex gap-2 items-start text-xs md:text-sm text-zinc-300 font-medium">
                            <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-900 select-none">
                      <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-wider mr-2 self-center">Stack:</span>
                      {currentCap.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-rose-400 rounded-md font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </section>
      </div>

      {/* 5. JOINT SOLUTIONS & INDUSTRIES */}



      {/* CERTIFICATIONS */}
      <PartnerCertifications
        title="AWS Certifications"
        certifications={[
          { image: "/webp/assets/ecosystem/aws-awards/Group-1000008904.webp" },
          { image: "/webp/assets/ecosystem/aws-awards/Group-1000008905.webp" },
          { image: "/webp/assets/ecosystem/aws-awards/Group-1000008906.webp" },
          { image: "/webp/assets/ecosystem/aws-awards/Group-1000008907.webp" },
          { image: "/webp/assets/ecosystem/aws-awards/image-118.webp" },
          { image: "/webp/assets/ecosystem/aws-awards/image-119-Photoroom-1.webp" },
          { image: "/webp/assets/ecosystem/aws-awards/image-119-Photoroom-2.webp" },
          { image: "/webp/assets/ecosystem/aws-awards/image-119-Photoroom-3.webp" },
          { image: "/webp/assets/ecosystem/aws-awards/image-120.webp" },
          { image: "/webp/assets/ecosystem/aws-awards/image-141.webp" },
          { image: "/webp/assets/ecosystem/aws-awards/image-144-Photoroom-1.webp" }
        ]}
      />


      <div id="solutions" className="scroll-mt-24">
        <section className="w-full py-24 bg-black border-b border-zinc-900/60">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

            <Reveal className="mb-12 text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                Vertical Solutions
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                AWS Across <span className="text-rose-500">Industries</span>
              </h2>
            </Reveal>

            {/* Industry selector tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 select-none">
              {industries.map((ind) => (
                <button
                  key={ind.name}
                  onClick={() => setActiveIndustry(ind.name)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${activeIndustry === ind.name
                    ? "bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-500/10"
                    : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white"
                    }`}
                >
                  {ind.name}
                </button>
              ))}
            </div>

            {/* Active Industry details panel */}
            {industries.map((ind) => {
              if (ind.name !== activeIndustry) return null;
              return (
                <div
                  key={ind.name}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 bg-zinc-950/40 border border-zinc-900 rounded-2xl p-8 transition-all duration-500 animate-fadeIn"
                >
                  <div className="space-y-2 text-left">
                    <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">THE CHALLENGE</span>
                    <h4 className="text-base font-bold text-white font-mono">Business Roadblock</h4>
                    <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed">{ind.challenge}</p>
                  </div>

                  <div className="space-y-2 text-left">
                    <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">THE SOLUTION</span>
                    <h4 className="text-base font-bold text-white font-mono">Co-Engineered Setup</h4>
                    <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed">{ind.solution}</p>
                  </div>

                  <div className="space-y-2 text-left">
                    <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">THE OUTCOME</span>
                    <h4 className="text-base font-bold text-white font-mono">Measured Metric</h4>
                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-bold">{ind.outcome}</p>
                  </div>
                </div>
              );
            })}

          </div>
        </section>
      </div>

      {/* 6. CLIENT SUCCESS STORIES */}
      <div id="use-cases" className="scroll-mt-24">
        <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

            <Reveal className="mb-16 text-left">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                Case Outcomes
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Transformational <span className="text-rose-500">Impact</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((story, idx) => (
                <div
                  key={idx}
                  className="fade-scroll-item p-8 rounded-2xl bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                      {story.title}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-white mb-6 uppercase tracking-wide">
                      {story.subtitle}
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Challenge</span>
                        <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{story.challenge}</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Solution</span>
                        <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{story.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-900">
                    <span className="text-[9px] font-mono text-[#10B981] uppercase tracking-wider block mb-1 font-bold">Tangible Outcome</span>
                    <p className="text-xs md:text-sm text-white font-bold leading-normal">{story.result}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* 7. ALLIANCE FAQ ACCORDION */}
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
              Everything you need to know about our AWS strategic alliance frameworks, operational boundaries, and AWS technical execution. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
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
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GET STARTED TODAY
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
              Ready to Accelerate on <span className="text-rose-500">AWS?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-medium">
              Connect with our dedicated AWS cloud-native consultants to evaluate your application portfolios, setup landing zones, or run predictive analytics models.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3.5 pl-6 pr-3.5 py-3.5 bg-white text-black font-bold text-xs tracking-wider uppercase rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Schedule AWS Consultation
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
