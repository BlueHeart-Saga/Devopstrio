"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import Link from "next/link";
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
  Search,
  Globe,
  Settings,
  Eye,
  GitMerge,
  Building,
  Server,
  Layers,
  Award,
  Clock,
  HeartHandshake
} from "lucide-react";

const gcpSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "solutions", label: "Solutions" },
  { id: "architecture", label: "Reference Architecture" },
  { id: "use-cases", label: "Use Cases" },
  { id: "technologies", label: "Technology Stack" },
  { id: "why-gcp", label: "Why Devopstrio" },
  { id: "outcomes", label: "Outcomes" },
  { id: "faq", label: "FAQ" }
];

export default function GoogleCloudStrategicAllianceHub() {
  const [activeTab, setActiveTab] = useState("cloud");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Smooth scroll and scroll animations
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

      // Fade-in animation on scroll
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
    { text: "Cloud-Native Application Platforms", desc: "Scale faster with GKE, Cloud Run & serverless backends" },
    { text: "Data, Analytics & AI", desc: "Unlock deep values using BigQuery, Dataflow & Vertex AI" },
    { text: "Kubernetes & Platform Engineering", desc: "ArgoCD pipelines, infrastructure automation & SRE" },
    { text: "Secure, Scalable Infrastructure", desc: "Zero-trust IAM boundaries, landing zones & SCC logs" }
  ];

  const overviewCards = [
    {
      title: "Cloud Infrastructure & Migration",
      desc: "Architecting secure GCP environments, network topologies, landing zones, and moving workloads safely from legacy centers.",
      icon: <Server className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Data & Analytics on GCP",
      desc: "Structuring modern data lakes, real-time message streaming, Looker business intelligence, and high-performance BigQuery tables.",
      icon: <Database className="w-6 h-6 text-red-500" />
    },
    {
      title: "AI / ML & Intelligent Automation",
      desc: "Implementing custom machine learning models, semantic search pipelines, and agentic assistant workflows on Vertex AI.",
      icon: <Sparkles className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Kubernetes, DevOps & SRE",
      desc: "Establishing internal developer platforms, container engines, GitOps automation, and 24x7 managed reliability operations.",
      icon: <Cpu className="w-6 h-6 text-green-500" />
    }
  ];

  const capabilities = [
    {
      title: "Google Cloud Infrastructure Engineering",
      desc: "VPC design, compute, storage, networking, landing zones, hybrid connectivity.",
      icon: <Server className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Cloud Migration & Modernization",
      desc: "Move workloads to GCP, modernize legacy apps, optimize architecture and operations.",
      icon: <Cloud className="w-6 h-6 text-red-500" />
    },
    {
      title: "Kubernetes & Platform Engineering",
      desc: "GKE platforms, CI/CD pipelines, IaC, platform automation, scalable container environments.",
      icon: <Cpu className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Data Engineering & Analytics",
      desc: "BigQuery, Dataflow, Pub/Sub, data lakes, reporting, real-time analytics pipelines.",
      icon: <Database className="w-6 h-6 text-green-500" />
    },
    {
      title: "AI / ML & Intelligent Automation",
      desc: "Vertex AI, ML pipelines, intelligent search, predictive models, AI-enabled business workflows.",
      icon: <Sparkles className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Security, IAM & Governance",
      desc: "Identity, policy controls, logging, monitoring, threat visibility, compliance-aligned architecture.",
      icon: <Lock className="w-6 h-6 text-red-500" />
    },
    {
      title: "DevOps, SRE & Cloud Operations",
      desc: "Automation, observability, release engineering, reliability engineering, 24×7 managed operations.",
      icon: <Activity className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Cost Optimization & Cloud Governance",
      desc: "Cloud spend control, resource optimization, performance monitoring, governance frameworks.",
      icon: <LineChart className="w-6 h-6 text-green-500" />
    }
  ];

  const solutions = [
    { title: "GCP Landing Zones & Cloud Foundations", desc: "Establishing enterprise organization setup, IAM hierarchy, security barriers, and guardrails." },
    { title: "Cloud-Native Application Platforms", desc: "Designing scalable serverless APIs and frontends using Cloud Run, Cloud CDN, and Cloud SQL." },
    { title: "GKE-Based Container Platforms", desc: "Setting up production-grade Kubernetes engines with multi-zone clustering, auto-scaling, and Anthos." },
    { title: "Real-Time Data & Analytics Pipelines", desc: "Ingesting telemetry clickstreams using Pub/Sub, executing real-time streaming queries with Dataflow." },
    { title: "AI / ML Platforms on Vertex AI", desc: "Building unified machine learning spaces to train, tune, validate, and host proprietary enterprise models." },
    { title: "Hybrid Cloud & API Integration Platforms", desc: "Connecting enterprise databases and external endpoints through Apigee API gateways." },
    { title: "DevSecOps & Release Automation on GCP", desc: "Constructing safe CI/CD delivery pipelines using Cloud Build, Artifact Registry, and GitOps workflows." },
    { title: "Monitoring, Reliability & Cloud Operations", desc: "Custom Cloud Monitoring dashboards, proactive alerting metrics, SRE automation, and support." }
  ];

  const refArchitectureLayers = [
    { name: "Experience Layer", services: "Web & Mobile Applications / Portals (Cloud CDN, Load Balancing)" },
    { name: "Application & API Layer", services: "API Gateways, Microservices Integration (Apigee, Cloud Run)" },
    { name: "Kubernetes / Compute Layer", services: "Container Orchestration & Scaling (GKE, Compute Engine)" },
    { name: "Data & AI Layer", services: "Data Warehousing, Ingestion, Model Hosting (BigQuery, Pub/Sub, Vertex AI)" },
    { name: "Security & Observability Layer", services: "Access Controls, System Monitoring (IAM, Cloud Operations Suite, SCC)" },
    { name: "GCP Infrastructure Layer", services: "Enterprise Cloud Landing Zones, VPC Networking, Cloud Storage" }
  ];

  const whyUs = [
    {
      title: "Cloud-Native Engineering Expertise",
      desc: "Build modern platforms on GCP with performance, scalability, and resilience in mind.",
      icon: <Cloud className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Data & AI Acceleration",
      desc: "Unlock business value with BigQuery, Vertex AI, analytics pipelines, and intelligent automation.",
      icon: <Sparkles className="w-6 h-6 text-red-500" />
    },
    {
      title: "Kubernetes & Platform Engineering Strength",
      desc: "Standardize and scale cloud-native operations through GKE and DevOps automation.",
      icon: <Cpu className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Security & Governance by Design",
      desc: "Embed identity, observability, compliance, and cloud governance from the start.",
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      title: "End-to-End Delivery",
      desc: "Strategy, migration, architecture, engineering, operations, and optimization under one partner.",
      icon: <Briefcase className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Business-Focused Outcomes",
      desc: "Faster delivery, better reliability, smarter analytics, and more efficient cloud operations.",
      icon: <HeartHandshake className="w-6 h-6 text-red-500" />
    }
  ];

  const outcomes = [
    { value: "40%", label: "Faster Deployment Cycles", desc: "Automated GitOps pipelines release updates with less manual checks." },
    { value: "30%", label: "Lower Ops Overhead", desc: "GKE Autopilot and serverless operations minimize direct machine management." },
    { value: "24x7", label: "Managed Cloud Monitoring", desc: "Proactive alert sensors identify system anomalies before outages hit clients." },
    { value: "99.9%", label: "Availability Targets Met", desc: "Redundant regional deployments protect enterprise scale databases." }
  ];

  const techStack = {
    infrastructure: [
      { name: "Compute Engine", desc: "Secure virtual servers" },
      { name: "Cloud Storage", desc: "Enterprise object storage" },
      { name: "Cloud SQL", desc: "Managed relational database engine" },
      { name: "VPC / Networking", desc: "Private subnets and firewalls" },
      { name: "Load Balancing", desc: "Global HTTP(S) request routing" },
      { name: "Cloud Run", desc: "Serverless container execution" }
    ],
    containers: [
      { name: "Google Kubernetes Engine", desc: "Production container engine" },
      { name: "Artifact Registry", desc: "Private build image storage" },
      { name: "Cloud Build", desc: "Continuous execution scripting" },
      { name: "Anthos", desc: "Hybrid cluster management" },
      { name: "Terraform", desc: "Infrastructure as Code" }
    ],
    data: [
      { name: "BigQuery", desc: "Serverless data warehouse tables" },
      { name: "Pub/Sub", desc: "Real-time message messaging queues" },
      { name: "Dataflow", desc: "Stream analytics data processing" },
      { name: "Dataproc", desc: "Managed Apache Spark/Hadoop clusters" },
      { name: "Looker", desc: "Business intelligence visual charts" },
      { name: "Cloud Composer", desc: "Managed workflow orchestration" }
    ],
    ai: [
      { name: "Vertex AI", desc: "Flagship machine learning space" },
      { name: "Dialogflow", desc: "Conversational customer helpers" },
      { name: "Document AI", desc: "Structured data extraction" },
      { name: "Vision AI", desc: "Image analysis and categorization" },
      { name: "Natural Language AI", desc: "Text sentiment parsing algorithms" }
    ],
    security: [
      { name: "IAM", desc: "Secure permissions directory" },
      { name: "Cloud Logging", desc: "System activity logs aggregator" },
      { name: "Cloud Monitoring", desc: "Dashboard telemetry and alerting" },
      { name: "Security Command Center", desc: "Cloud threat risk detection" },
      { name: "Chronicle", desc: "Security operations center dashboard" },
      { name: "Secret Manager", desc: "API key and credential storage" }
    ]
  };

  const faqs = [
    {
      q: "What Google Cloud services does Devopstrio support?",
      a: "We support the entire Google Cloud ecosystem, specializing in infrastructure engineering, GKE container orchestration, BigQuery data platforms, Vertex AI machine learning pipelines, cloud-native app development on Cloud Run, IAM security controls, and Cloud Operations Suite monitoring."
    },
    {
      q: "Do you provide GCP migration and modernization services?",
      a: "Yes. We help enterprises migrate their legacy databases, virtual machines, and monolithic applications to Google Cloud using proven migration frameworks. Post-migration, we refactor workloads into cloud-native architectures to optimize performance and reduce licensing costs."
    },
    {
      q: "Can you build data platforms with BigQuery and Dataflow?",
      a: "Absolutely. We construct modern, secure data lakes and event-driven data ingestion streams using Pub/Sub, Dataflow, and BigQuery. We also set up Looker visualization dashboards to deliver real-time data insights directly to business leaders."
    },
    {
      q: "Do you implement AI / ML solutions on Vertex AI?",
      a: "Yes. We build end-to-end MLOps pipelines on Vertex AI to train, deploy, and monitor custom machine learning models. We also leverage Google's pre-trained Gemini models, Dialogflow, Document AI, and Vision AI to integrate conversational chat assistants and document intelligence into your systems."
    },
    {
      q: "Can you build and manage Kubernetes platforms on GKE?",
      a: "Yes. We design and construct highly available Google Kubernetes Engine (GKE) platforms with automated node scaling, multi-region cluster failovers, container vulnerability scanners, and unified developer self-service provisioning using ArgoCD GitOps pipelines."
    },
    {
      q: "Do you offer managed cloud operations for GCP?",
      a: "Yes. We provide 24/7 managed reliability operations, continuous logging and threat visibility monitoring, backup cycles automation, and cost allocations optimization to ensure your GCP platform remains high-performing and budget-friendly."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        
        {/* Concentric Wave Elements in Google Cloud Colors */}
        <div className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[85%] md:w-[65%] h-[130%] z-0 pointer-events-none select-none overflow-hidden flex items-center justify-end">
          <div className="relative w-full h-full flex items-center justify-end">
            <div className="absolute w-[200%] h-[160%] right-[-50%] rounded-[120px] md:rounded-[260px] border border-blue-500/10 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[170%] h-[135%] right-[-40%] rounded-[110px] md:rounded-[230px] border border-red-500/15 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[140%] h-[110%] right-[-30%] rounded-[100px] md:rounded-[200px] border border-yellow-500/15 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[110%] h-[85%] right-[-20%] rounded-[90px] md:rounded-[170px] border border-green-500/20 rotate-[-28deg] pointer-events-none" />
            
            <div className="absolute w-[80%] h-[60%] right-[-10%] rounded-[80px] md:rounded-[140px] border border-blue-500/20 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[50%] h-[35%] right-[0%] rounded-[70px] md:rounded-[110px] border border-red-500/25 rotate-[-28deg] pointer-events-none" />
            
            <div className="absolute right-[5%] w-[180px] h-[90px] bg-gradient-to-r from-blue-600/15 via-red-600/10 to-yellow-500/15 rounded-full blur-[50px] opacity-40 animate-pulse" />
          </div>
        </div>

        {/* Soft Ambient Light Theme Effect Gradients on Pitch-Black */}
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none select-none">
          <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[110px]" />
          <div className="absolute bottom-[10%] right-[30%] w-[350px] h-[350px] bg-green-500/5 rounded-full blur-[100px]" />
          <div className="absolute top-[35%] right-[0%] w-[250px] h-[250px] bg-red-500/10 rounded-full blur-[90px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b0f2a_1px,transparent_1px),linear-gradient(to_bottom,#0b0f2a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
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
                  Google Cloud <span className="text-[#E11D48] whitespace-nowrap">Ecosystem</span>
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
                  Build intelligent, cloud-native platforms with Google Cloud—combining modern infrastructure, data engineering, AI/ML, Kubernetes, and secure operations to accelerate digital transformation.
                </p>
              </Reveal>

              {/* Hero Bullet Points Grid */}
              <Reveal delay={0.3} className="w-full mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {heroPoints.map((pt, idx) => (
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
                  Talk to a Google Cloud Expert
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Google Cloud Capabilities
                </a>
              </Reveal>
            </div>

            {/* Hero Right Visual (Logo Integration) */}
            <div className="lg:col-span-5 relative flex items-center justify-center select-none z-10">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                {/* Connecting glowing line and animation */}
                <div className="absolute inset-x-12 h-[2px] bg-gradient-to-r from-rose-500/25 via-red-500/30 to-blue-500/25 z-0 pointer-events-none">
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

                  {/* Google Cloud Logo Card */}
                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-blue-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-red-500 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img
                      src="/assets/Tech_logos/Google_Cloud.svg"
                      alt="Google Cloud Logo"
                      className="w-full h-auto max-h-[85%] object-contain select-none"
                    />
                  </div>

                </div>

                <div className="absolute w-[80%] h-[80%] rounded-full border border-zinc-900/40 pointer-events-none z-0" />
                <div className="absolute w-[95%] h-[95%] rounded-full border border-zinc-900/20 pointer-events-none z-0" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STICKY SECTION NAVBAR */}
      <SectionNavbar sections={gcpSections} />

      {/* 2. PARTNERSHIP OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  ALLIANCE VALUE
                </span>
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                  Building Modern Cloud Platforms <span className="text-rose-500">with Google Cloud</span>
                </h2>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium mb-8">
                  Devopstrio combines Google Cloud's leading data, AI, and container engines with our DevOps and systems engineering expertise to help organizations modernize infrastructure, build secure cloud-native products, create real-time analytics platforms, operationalize AI/ML, and improve overall delivery speed and resilience.
                </p>
                <div className="h-[1px] bg-zinc-900 w-full mb-8" />
                <p className="text-zinc-405 text-xs md:text-sm leading-relaxed font-semibold">
                  By standardizing deployment pipelines and embedding automated cost structures, we enable teams to scale business operations with confidence.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 select-none">
                {overviewCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 text-left group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 font-sans">{card.title}</h4>
                    <p className="text-[11px] md:text-xs text-zinc-400 font-bold leading-relaxed font-sans">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CAPABILITY AREAS */}
      <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              OUR CORE STRENGTHS
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Our Google Cloud <span className="text-rose-500">Capabilities</span>
            </h2>
            <p className="text-zinc-350 text-xs md:text-sm font-semibold">
              Advanced cloud capabilities mapped directly to GCP design principles, ensuring scalability and performance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-900/60 pb-3">
                    <span className="text-[10px] font-mono text-zinc-550 font-bold">0{idx + 1}</span>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {c.icon}
                    </div>
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{c.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS WE DELIVER */}
      <section id="solutions" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE DEPLOYMENTS
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Google Cloud Solutions <span className="text-rose-500">for Modern Enterprises</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-rose-500">
                    <CheckCircle2 className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wide">{sol.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GOOGLE CLOUD REFERENCE ARCHITECTURE */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              BLUEPRINT DESIGN
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              A Reference Architecture <span className="text-rose-500">for Google Cloud Delivery</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-semibold">
              Our standardized cloud delivery layers ensure consistency, high performance, security, and smooth data integrations.
            </p>
          </Reveal>

          {/* Vertical Stack Layout */}
          <div className="max-w-3xl mx-auto flex flex-col gap-4 relative">
            
            {/* Connection Line */}
            <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500/20 via-red-500/30 to-green-500/20 z-0 hidden md:block" />

            {refArchitectureLayers.map((layer, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col md:flex-row items-center md:justify-between p-5 bg-zinc-950/70 border border-zinc-900 hover:border-zinc-800 rounded-2xl transition-all duration-300 gap-4"
              >
                <div className="flex items-center gap-4 w-full md:w-1/3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center font-mono text-xs font-bold text-rose-500 shadow-md">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{layer.name}</h4>
                </div>
                <div className="w-full md:w-2/3 text-left md:text-right">
                  <p className="text-[11px] font-mono text-zinc-400 font-semibold">{layer.services}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS USE CASES */}
      <section id="use-cases" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              REAL-WORLD APPLICATION
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Where We Apply <span className="text-rose-500">Google Cloud Ecosystem</span>
            </h2>
          </Reveal>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 select-none">
            {[
              { id: "cloud", label: "Cloud & Infrastructure" },
              { id: "data", label: "Data & Analytics" },
              { id: "ai", label: "AI / ML" },
              { id: "devops", label: "DevOps & Platform" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeTab === tab.id
                    ? "bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/10"
                    : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Panel Content */}
          <div className="max-w-4xl mx-auto bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 transition-all duration-500">
            {activeTab === "cloud" && (
              <div className="animate-fadeIn space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-3">Cloud & Infrastructure Modernization</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Application Modernization</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Refactoring monolithic legacy structures into serverless Cloud Run and GKE services.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">GCP Migration Programs</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Secure datacenter transformations using landing zones and structured migration tools.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Container Platform Adoption</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Standardizing infrastructure deployments through Kubernetes engines.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Disaster Recovery & Resilient Hosting</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Setting up cross-region active-active clusters and automated db backup failovers.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "data" && (
              <div className="animate-fadeIn space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-3">Data & Real-Time Analytics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Enterprise Reporting</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Looker dashboards modeling complex tables to drive executive business decisions.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Customer Analytics</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Mapping consumer behavior and telemetry data inside unified BigQuery datasets.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Real-Time Operational Dashboards</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Streaming active telemetry events to track performance issues immediately.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Event-Driven Data Pipelines</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Using Pub/Sub queue parameters and Dataflow engines to ingest logs.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ai" && (
              <div className="animate-fadeIn space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-3">AI / ML Platforms & Innovations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Demand Forecasting</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Vertex AI models predicting market volume shifts based on seasonal datasets.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Document Intelligence</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Extracting invoice structures and metadata tags using Google Document AI.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Conversational AI</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Deploying Dialogflow chatbots connected to private databases.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Predictive Maintenance</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Anticipating sensor anomalies to lower factory hardware replacement overheads.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:col-span-2">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Intelligent Recommendations</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Serving real-time recommendations to storefront visitors using Retail Search APIs.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "devops" && (
              <div className="animate-fadeIn space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-3">DevOps & Platform Engineering</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Developer Platforms on GKE</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Building custom internal systems to provision sandbox environments instantly.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">CI/CD Automation</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Secure build workflows deploying container images straight to Artifact Registry.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Release Engineering</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Implementing canary testing models and zero downtime rolling upgrades.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Environment Standardization</h4>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-1">Unified Terraform blueprints managing organization variables safely.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. GOOGLE CLOUD TECHNOLOGIES WE WORK WITH */}
      <section id="technologies" className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              TECHNICAL INTEGRATIONS
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Google Cloud Technologies <span className="text-rose-500">Across the Stack</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Infrastructure */}
            <div className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-3xl">
              <span className="text-[9px] font-mono text-blue-500 uppercase tracking-widest block mb-4 font-bold">Cloud Infrastructure</span>
              <div className="space-y-4">
                {techStack.infrastructure.map((tech) => (
                  <div key={tech.name}>
                    <h5 className="text-[11px] font-bold text-white uppercase tracking-wide">{tech.name}</h5>
                    <p className="text-[10px] text-zinc-500 leading-snug">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Containers */}
            <div className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-3xl">
              <span className="text-[9px] font-mono text-red-500 uppercase tracking-widest block mb-4 font-bold">Containers & Platform</span>
              <div className="space-y-4">
                {techStack.containers.map((tech) => (
                  <div key={tech.name}>
                    <h5 className="text-[11px] font-bold text-white uppercase tracking-wide">{tech.name}</h5>
                    <p className="text-[10px] text-zinc-500 leading-snug">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data */}
            <div className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-3xl">
              <span className="text-[9px] font-mono text-yellow-500 uppercase tracking-widest block mb-4 font-bold">Data & Analytics</span>
              <div className="space-y-4">
                {techStack.data.map((tech) => (
                  <div key={tech.name}>
                    <h5 className="text-[11px] font-bold text-white uppercase tracking-wide">{tech.name}</h5>
                    <p className="text-[10px] text-zinc-500 leading-snug">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI */}
            <div className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-3xl">
              <span className="text-[9px] font-mono text-green-500 uppercase tracking-widest block mb-4 font-bold">AI / ML</span>
              <div className="space-y-4">
                {techStack.ai.map((tech) => (
                  <div key={tech.name}>
                    <h5 className="text-[11px] font-bold text-white uppercase tracking-wide">{tech.name}</h5>
                    <p className="text-[10px] text-zinc-500 leading-snug">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-3xl">
              <span className="text-[9px] font-mono text-blue-500 uppercase tracking-widest block mb-4 font-bold">Security & Operations</span>
              <div className="space-y-4">
                {techStack.security.map((tech) => (
                  <div key={tech.name}>
                    <h5 className="text-[11px] font-bold text-white uppercase tracking-wide">{tech.name}</h5>
                    <p className="text-[10px] text-zinc-500 leading-snug">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. WHY GOOGLE CLOUD + DEVOPSTRIO */}
      <section id="why-gcp" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PARTNERSHIP STRENGTH
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Why Organizations Build on Google Cloud <span className="text-rose-500">with Devopstrio</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center mb-4 text-rose-500">
                  {item.icon}
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{item.title}</h4>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUTCOMES / IMPACT */}
      <section id="outcomes" className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MEASURABLE OUTCOMES
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Outcomes Enabled <span className="text-rose-500">Through Google Cloud</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
            {outcomes.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 text-left group"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest leading-snug font-bold mb-3">
                  {stat.label}
                </div>
                <p className="text-[11px] text-zinc-500 font-bold leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. RELATED ECOSYSTEM PAGES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Related <span className="text-rose-500">Ecosystem Pages</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Microsoft Ecosystem", desc: "Strategic Azure setups, Fabric integrations, and digital enterprise hubs.", href: "/ecosystem/partnerships/microsoft" },
              { name: "AWS Ecosystem", desc: "Amazon Web Services configurations, CI/CD code bases, and DevOps tools.", href: "/ecosystem/partnerships/aws" },
              { name: "Oracle Ecosystem", desc: "Enterprise resource planning database modernizations and secure OCI architectures.", href: "/ecosystem/partnerships/oracle" },
              { name: "Technology Stack / Cloud-Native", desc: "Our core software delivery engineering stack, languages, and protocols.", href: "/ecosystem/technology-stack" }
            ].map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[160px]"
              >
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                    {partner.name}
                    <ChevronRight className="w-4 h-4 text-zinc-655 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left sticky top-28">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  ALLIANCE QUESTIONS
                </span>
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our Google Cloud consulting, data analytics, and Kubernetes capabilities.
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
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white uppercase tracking-wider"
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

      {/* 12. FINAL CTA */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">

          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              GET STARTED TODAY
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to Build, Modernize or Scale <span className="text-rose-500">on Google Cloud?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Partner with Devopstrio to design secure, cloud-native, and data-driven solutions on Google Cloud—from infrastructure and Kubernetes to analytics, AI, and managed operations.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Start Your GCP Journey
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk to a Google Cloud Expert
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
