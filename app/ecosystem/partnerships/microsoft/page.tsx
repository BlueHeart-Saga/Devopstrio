"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
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
  Users,
  Terminal,
  Sparkles,
  Layout,
  Lock,
  Workflow,
  LineChart,
  ChevronRight,
  Server,
  Layers,
  Globe,
  Activity,
  Check,
  Building,
  HardDrive,
  Network,
  GitBranch,
  Search,
  Eye,
  ArrowRight,
  TrendingUp,
  FileText
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { PartnerCertifications } from "@/sections/ecosystem/partnerships/PartnerCertifications";

const microsoftSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "solutions", label: "Solutions" },
  { id: "architecture", label: "Architecture" },
  { id: "certifications", label: "Certifications" },
  { id: "use-cases", label: "Use Cases" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "outcomes", label: "Outcomes" },
  { id: "faq", label: "FAQ" }
];

export default function MicrosoftAllianceHub() {
  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Use Case Category State
  const [activeUseCase, setActiveUseCase] = useState<string>("cloud");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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

      // Fade-in animation for architecture layers and capability cards on scroll
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

  // 1. Hero Points
  const heroPoints = [
    { text: "Azure Cloud Engineering", desc: "Enterprise scale landings & compute" },
    { text: "Microsoft 365 & Collaboration", desc: "Optimized corporate workplaces" },
    { text: "Data & AI on Azure", desc: "Azure OpenAI & semantic analytics" },
    { text: "Security, Identity & Compliance", desc: "Entra ID, Defender & zero trust" }
  ];

  // 2. Overview Stats / Highlight Cards
  const highlightCards = [
    {
      title: "Azure Cloud Platforms",
      desc: "Delivering elastic infrastructure, AKS clusters, and high-performance serverless landing zones.",
      icon: <Cloud className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Microsoft Security & Identity",
      desc: "Hardening directory credentials, conditional access layers, and cloud endpoints via Entra and Defender.",
      icon: <Lock className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Data, Analytics & AI",
      desc: "Constructing business fabric data lakes and custom LLM inference models with Azure OpenAI.",
      icon: <Cpu className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Collaboration & Productivity",
      desc: "Automating internal workflows with Power Platform apps and connected Teams environments.",
      icon: <Layout className="w-5 h-5 text-rose-500" />
    }
  ];

  // 3. Microsoft Capability Areas
  const capabilities = [
    {
      title: "Azure Cloud Engineering",
      desc: "Establish highly resilient cloud foundations. We design enterprise landing zones, multi-region architectures, network subnets, and automated scale groups tailored to high-density workloads.",
      icon: <Cloud className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Azure Migration & Modernization",
      desc: "Migrate legacy on-premise compute nodes with zero disruption. We refactor monolithic software packages into containerized, cloud-optimized microservices using Azure App Services and VM scale sets.",
      icon: <Server className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Microsoft DevOps & Platform Engineering",
      desc: "Accelerate delivery speeds using automated GitOps pipelines. We construct Azure DevOps workflows, infrastructure as code (IaC) via Terraform, and Git-driven CI/CD scripts.",
      icon: <Workflow className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Data, AI & Analytics on Azure",
      desc: "Unlock predictive analytics. We configure Azure Data Factory pipelines, warehouse lakes in Synapse, Fabric telemetry maps, and secure, isolated private LLM integrations.",
      icon: <Cpu className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Security, Identity & Compliance",
      desc: "Build a solid defense perimeter. We integrate Microsoft Entra ID (Azure AD), write conditional access governance rules, set up Defender endpoints, and run Sentinel SIEM dashboards.",
      icon: <Shield className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Microsoft 365 & Collaboration",
      desc: "Improve operational synergy. We optimize intranet portals, SharePoint workspaces, and customize secure communication bots within MS Teams for seamless employee alignment.",
      icon: <Layout className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Business Applications & Automation",
      desc: "Minimize manual tasks. We deploy Power Apps, connect business metrics, and implement Power Automate flows that connect legacy software interfaces directly to web platforms.",
      icon: <Briefcase className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Managed Azure Operations",
      desc: "Ensure continuous system health. We provide 24/7 SRE monitoring, incident recovery setups, backup schedules, and active cloud cost governance to minimize monthly infrastructure bills.",
      icon: <Activity className="w-6 h-6 text-rose-500" />
    }
  ];

  // 4. Solutions We Deliver
  const solutions = [
    {
      title: "Azure Cloud Landing Zones",
      desc: "Fully compliant, multi-subscription Azure cloud baselines built using Terraform, featuring strict networking policies, hub-spoke peering, and built-in IAM guardrails.",
      metrics: "Ready in days, not months"
    },
    {
      title: "Enterprise Application Hosting",
      desc: "Highly available, auto-scaling container configurations running on Azure Kubernetes Service (AKS) or Azure Container Apps, backed by Azure SQL and CDN edge cache.",
      metrics: "99.99% availability targets"
    },
    {
      title: "Hybrid Cloud & Virtual Desktop",
      desc: "Connecting on-premises systems directly to Azure using Azure Arc and scaling remote work environments securely using Azure Virtual Desktop (AVD).",
      metrics: "Secure edge performance"
    },
    {
      title: "Azure Data & AI Platforms",
      desc: "Production-ready enterprise data fabrics powered by Microsoft Fabric and Azure OpenAI, enabling semantic searches, automated document extraction, and private chatbots.",
      metrics: "Zero-data-leakage guarantee"
    },
    {
      title: "DevSecOps Pipelines on Azure",
      desc: "Securing code delivery routes using GitHub Actions or Azure Pipelines, integrating automated security vulnerability scanning directly into the build pipeline.",
      metrics: "4x quicker build times"
    },
    {
      title: "Identity & Access Modernization",
      desc: "Upgrading legacy access systems to modern Microsoft Entra ID setups, introducing single-sign-on (SSO), multi-factor verification, and role-based directory permissions.",
      metrics: "98% decrease in access breaches"
    },
    {
      title: "SIEM/SOC with Microsoft Sentinel",
      desc: "Deploying Microsoft Sentinel to collect security logs across your entire business stack, automating threat response playbooks to lock down compromised devices instantly.",
      metrics: "Sub-second attack containment"
    },
    {
      title: "Power Platform Business Automation",
      desc: "Constructing custom business portals using Power Apps and integrating automated backend data synchronization using Power Automate flows.",
      metrics: "35% lower workflow overhead"
    }
  ];

  // 5. Reference Architecture Layers
  const archLayers = [
    {
      layer: "Experience Layer",
      tech: "Microsoft Teams / SharePoint / Power Apps / Custom Web Portals",
      desc: "The interface where employees, clients, and partners securely interact with business applications.",
      color: "border-rose-500/25 bg-rose-500/[0.02]"
    },
    {
      layer: "Application Layer",
      tech: "Azure Kubernetes Service (AKS) / Azure App Service / Container Apps",
      desc: "Hosting scalable containerized microservices and web apps with native health tracking and automatic scaling.",
      color: "border-blue-500/25 bg-blue-500/[0.02]"
    },
    {
      layer: "Platform & Integration Layer",
      tech: "Azure API Management / Service Bus / Event Grid",
      desc: "Managing communication between microservices and external databases with low latency.",
      color: "border-indigo-500/25 bg-indigo-500/[0.02]"
    },
    {
      layer: "Data & AI Layer",
      tech: "Microsoft Fabric / Azure Synapse / Azure SQL / Azure OpenAI",
      desc: "Storing enterprise records securely, training ML pipelines, and powering AI semantic search runs.",
      color: "border-violet-500/25 bg-violet-500/[0.02]"
    },
    {
      layer: "Security & Governance Layer",
      tech: "Microsoft Entra ID / Defender / Sentinel / Purview",
      desc: "Cross-cutting identity management, live threat monitoring, and corporate compliance logs.",
      color: "border-purple-500/25 bg-purple-500/[0.02]"
    },
    {
      layer: "Cloud Infrastructure Layer",
      tech: "Azure Landing Zones / ExpressRoute / Virtual WAN / Terraform",
      desc: "Global backbone network infrastructure, hybrid connections, and infrastructure as code templates.",
      color: "border-pink-500/25 bg-pink-500/[0.02]"
    }
  ];

  // 6. Business Use Cases
  const useCaseCategories = {
    cloud: {
      title: "Cloud & Infrastructure",
      cases: [
        { label: "Cloud Migration Programs", detail: "Moving core operations from legacy servers onto Azure virtual machines and managed SQL clusters with minimal disruption." },
        { label: "Hybrid Infrastructure Setup", detail: "Bridging private datacenters to Azure utilizing ExpressRoute and managing multi-cloud configs with Azure Arc." },
        { label: "Disaster Recovery Systems", detail: "Implementing live database replication patterns with Azure Site Recovery to prevent outages and data loss." },
        { label: "Virtual Desktop Deployment", detail: "Scaling remote developer workspaces securely with Azure Virtual Desktop, complete with built-in compliance logs." }
      ]
    },
    data: {
      title: "Data & AI",
      cases: [
        { label: "Enterprise Reporting Networks", detail: "Unifying commercial telemetry logs using Microsoft Fabric to power real-time dashboards in Power BI." },
        { label: "Predictive Analytics Models", detail: "Training custom machine learning pipelines on Azure ML to forecast supply chains and consumer trends." },
        { label: "AI-Powered Automation Scripts", detail: "Connecting Azure OpenAI models to automate customer tickets, classify paperwork, and draft documents." },
        { label: "Corporate Knowledge Platforms", detail: "Creating secure internal search tools indexing legal PDFs, employee guidelines, and engineering manuals." }
      ]
    },
    security: {
      title: "Security & Compliance",
      cases: [
        { label: "Identity Modernization", detail: "Upgrading Active Directory to Entra ID, implementing conditional access rules, and configuring secure single sign-on." },
        { label: "SOC Threat Monitoring", detail: "Setting up threat logs dashboards using Microsoft Sentinel, enabling automated incident alerts." },
        { label: "Compliance Governance Audits", detail: "Creating automated reports inside Azure Purview to confirm compliance with HIPAA, SOC2, and ISO 27001." },
        { label: "Zero Trust Security Architectures", detail: "Segmenting infrastructure subnets and isolating databases so compromised credentials cannot access the system." }
      ]
    },
    productivity: {
      title: "Productivity & Collaboration",
      cases: [
        { label: "Teams & SharePoint Intranets", detail: "Designing custom document vaults, team Wikis, and automated workflows inside Microsoft 365 environments." },
        { label: "Power Platform Automations", detail: "Replacing legacy physical forms with lightweight mobile apps connected directly to SQL databases." },
        { label: "Employee Self-Service Portals", detail: "Deploying Power Virtual Agents to resolve staff questions and handle HR requests automatically." }
      ]
    }
  };

  // 7. Tech Stack Grouped Layout
  const techStackGroups = [
    {
      category: "Azure Cloud",
      items: ["Azure Virtual Machines", "Azure App Service", "Azure Kubernetes Service", "Azure Virtual Desktop", "Azure Storage", "Azure Networking"]
    },
    {
      category: "Data & AI",
      items: ["Azure Data Factory", "Azure Synapse", "Azure SQL Database", "Azure AI Services", "Azure Machine Learning", "Power BI Dashboards"]
    },
    {
      category: "Security & Identity",
      items: ["Microsoft Entra ID", "Microsoft Defender", "Microsoft Sentinel", "Microsoft Purview", "Microsoft Intune MDM"]
    },
    {
      category: "DevOps & Automation",
      items: ["Azure DevOps Pipelines", "GitHub Enterprise", "Terraform on Azure", "Bicep / ARM Templates", "Power Automate Flows"]
    },
    {
      category: "Productivity",
      items: ["Microsoft 365", "Microsoft Teams Hub", "SharePoint Online", "Power Apps Portal"]
    }
  ];

  // 8. Why Microsoft + Devopstrio
  const whyChooseUs = [
    {
      title: "Cloud-First Delivery Expertise",
      desc: "We design and deploy modern Azure platforms optimized for performance, high availability, and long-term cost efficiency."
    },
    {
      title: "Security by Design",
      desc: "We integrate identity management, zero-trust policies, audit logging, and threat detection from day one."
    },
    {
      title: "Full-Stack Microsoft Capability",
      desc: "Our experience spans the entire Microsoft ecosystem, from core Azure networks to data pipelines and workplace tools."
    },
    {
      title: "End-to-End Ownership",
      desc: "We support you through every phase of the cloud journey, from initial strategy and migration to ongoing 24/7 SRE support."
    },
    {
      title: "Business-Focused Outcomes",
      desc: "We prioritize reducing infrastructure complexity, accelerating deployment times, and maximizing your cloud return on investment."
    },
    {
      title: "Global Delivery Model",
      desc: "We offer flexible delivery options, combining local consulting and remote engineering to support your team wherever they are."
    }
  ];

  // 9. Business Outcomes
  const outcomes = [
    { value: "40%", label: "Faster Deployment Cycles", sub: "Achieved via automated Azure DevOps infrastructure pipelines." },
    { value: "30%", label: "Lower Operational Overhead", sub: "Reduced manual resource configuration tasks." },
    { value: "24/7", label: "Managed Azure Operations", sub: "Continuous active system health monitoring and response." },
    { value: "99.9%", label: "Uptime SLA Targets Met", sub: "Architected using highly resilient multi-region infrastructure." }
  ];

  // 10. Related Ecosystem Pages
  const relatedPages = [
    { name: "AWS Ecosystem", desc: "Enterprise cloud migrations and DevOps automation pipelines on AWS.", href: "/ecosystem/partnerships/aws" },
    { name: "Google Cloud Ecosystem", desc: "Data warehousing, Kubernetes, and analytics services on GCP.", href: "/ecosystem/partnerships/google-cloud" },
    { name: "Oracle Ecosystem", desc: "Database modernization, OCI services, and ERP integrations.", href: "/ecosystem/partnerships/oracle" },
    { name: "DevOps & Cloud Native Stack", desc: "Explore our core platform engineering and Kubernetes technology stack.", href: "/ecosystem/technology" }
  ];

  // 11. FAQ Accordion Data
  const faqs = [
    {
      q: "What Microsoft services does Devopstrio support?",
      a: "We support the entire Microsoft enterprise stack. This includes Azure infrastructure (AKS, App Services, VMs, WAN networks), Azure Data & AI platforms (Fabric, Synapse, SQL Database, Azure OpenAI), Microsoft Security (Entra ID, Defender, Sentinel), and Microsoft 365 / Power Platform applications."
    },
    {
      q: "Do you provide Azure migration services?",
      a: "Yes. We manage end-to-end migrations using the Microsoft Cloud Adoption Framework. We analyze your current applications, design the target Azure architecture, deploy landing zones, securely migrate your workloads, and optimize the environment."
    },
    {
      q: "Can you modernize legacy apps on Azure?",
      a: "Absolutely. We refactor legacy applications into containerized architectures using Azure Kubernetes Service (AKS) or Azure Container Apps, helping you lower operational costs and improve scalability."
    },
    {
      q: "Do you support Microsoft security and compliance solutions?",
      a: "Yes, security is a core part of our delivery model. We implement Zero Trust identity controls with Entra ID, configure Microsoft Defender to protect endpoints, and deploy Sentinel SIEM to monitor and react to security incidents in real time."
    },
    {
      q: "Can you build data and AI platforms on Azure?",
      a: "Yes, we specialize in building modern data platforms using Azure Data Factory, Synapse, and Microsoft Fabric. We also design secure Azure OpenAI models to support custom chat agents and document search tools."
    },
    {
      q: "Do you provide managed Azure operations?",
      a: "Yes, we offer 24/7 managed support. This includes continuous monitoring, patch management, database backup verification, incident resolution, and active cost optimization to keep your cloud spend in check."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      
      {/* 1. HERO SECTION WITH CALM MICROSOFT WAVE DESIGN & PITCH BLACK BACKGROUND */}
      <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        
        {/* Concentric Wave Elements */}
        <div className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[85%] md:w-[65%] h-[130%] z-0 pointer-events-none select-none overflow-hidden flex items-center justify-end">
          <div className="relative w-full h-full flex items-center justify-end">
            {/* Outer Waves */}
            <div className="absolute w-[200%] h-[160%] right-[-50%] rounded-[120px] md:rounded-[260px] border border-blue-500/10 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[170%] h-[135%] right-[-40%] rounded-[110px] md:rounded-[230px] border border-blue-500/15 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[140%] h-[110%] right-[-30%] rounded-[100px] md:rounded-[200px] border border-indigo-500/15 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[110%] h-[85%] right-[-20%] rounded-[90px] md:rounded-[170px] border border-indigo-500/20 rotate-[-28deg] pointer-events-none" />
            
            {/* Inner Waves */}
            <div className="absolute w-[80%] h-[60%] right-[-10%] rounded-[80px] md:rounded-[140px] border border-teal-500/20 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[50%] h-[35%] right-[0%] rounded-[70px] md:rounded-[110px] border border-teal-500/25 rotate-[-28deg] pointer-events-none" />
            
            {/* Core Glow */}
            <div className="absolute right-[5%] w-[180px] h-[90px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-teal-500/15 rounded-full blur-[50px] opacity-40 animate-pulse" />
          </div>
        </div>

        {/* Soft Ambient Light Theme Effect Gradients on Pitch-Black */}
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none select-none">
          <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[110px]" />
          <div className="absolute bottom-[10%] right-[30%] w-[350px] h-[350px] bg-teal-500/5 rounded-full blur-[100px]" />
          <div className="absolute top-[35%] right-[0%] w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[90px]" />
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
                  Microsoft <span className="text-[#E11D48] whitespace-nowrap">Ecosystem</span>
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Helping organizations modernize infrastructure, accelerate cloud adoption, strengthen security, and build intelligent enterprise platforms with Microsoft technologies.
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
                  Talk to a Microsoft Expert
                </Link>
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Microsoft Capabilities
                </a>
              </Reveal>
            </div>

            {/* Hero Right Visual (Logo Integration) */}
            <div className="lg:col-span-5 relative flex items-center justify-center select-none z-10">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                {/* Connecting glowing line and animation */}
                <div className="absolute inset-x-12 h-[2px] bg-gradient-to-r from-rose-500/25 via-purple-500/30 to-blue-500/25 z-0 pointer-events-none">
                  {/* Energy Pulse */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_12px_#E11D48] animate-ping" style={{ animationDuration: '3s' }} />
                </div>

                <div className="flex items-center justify-between w-full relative z-10 px-4">
                  
                  {/* Devopstrio Logo Card */}
                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-rose-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-600 to-red-650 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img
                      src="/assets/logo/logo.png"
                      alt="Devopstrio Logo"
                      className="w-full h-auto max-h-[85%] object-contain select-none filter brightness-105"
                    />
                  </div>

                  {/* Plus Connector Indicator */}
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg relative z-20">
                    <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                  </div>

                  {/* Azure Logo Card */}
                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-blue-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img
                      src="/assets/Tech_logos/Microsoft Azure.svg"
                      alt="Microsoft Azure Logo"
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

      {/* STICKY SECTION NAVBAR (Matching the Home Page navbar configuration) */}
      <SectionNavbar sections={microsoftSections} />

      {/* 2. PARTNERSHIP OVERVIEW */}
      <div id="overview" className="scroll-mt-24">
        <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Overview Story Text */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <Reveal>
                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                    PARTNERSHIP OVERVIEW
                  </span>
                  <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                    Building Enterprise Solutions on Microsoft Technologies
                  </h2>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                    Through our strategic relationship, Devopstrio brings deep infrastructure, platform, data, and security engineering expertise to help organizations optimize their Microsoft investments.
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-8">
                    Whether you are migrating core databases, refactoring services to Azure Kubernetes Service, implementing zero-trust identity policies with Entra ID, or deploying private Azure OpenAI frameworks, we configure secure, scalable, and audit-ready architectures.
                  </p>
                  <Link
                    href="/contact#contact-form"
                    className="group inline-flex items-center gap-2 text-rose-500 font-bold text-xs md:text-sm tracking-wider uppercase hover:text-rose-455 transition-colors"
                  >
                    Consult Our Microsoft Engineers
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Reveal>
              </div>

              {/* Overview 4 Highlight Cards */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {highlightCards.map((card, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-[#080808]/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 text-left flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-rose-950/20 group-hover:border-rose-900/30 transition-all duration-300">
                          {card.icon}
                        </div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{card.title}</h4>
                        <p className="text-[11px] text-zinc-455 font-semibold leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* 3. MICROSOFT CAPABILITIES */}
      <div id="capabilities" className="scroll-mt-24">
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
            
            <Reveal className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                OUR DEEP CAPABILITIES
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Our Microsoft <span className="text-rose-500">Capabilities</span>
              </h2>
              <p className="text-zinc-400 text-sm font-semibold">
                Deep, validated technical expertise across the entire Microsoft enterprise technology ecosystem.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {capabilities.map((c, idx) => (
                <div
                  key={idx}
                  className="fade-scroll-item group flex flex-col justify-between p-6 bg-[#080808] border border-zinc-900 hover:border-rose-500/25 rounded-2xl transition-all duration-500 hover:-translate-y-1 h-full shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900/60">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider max-w-[80%] leading-snug">{c.title}</h4>
                      <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {c.icon}
                      </div>
                    </div>
                    <p className="text-xs text-zinc-455 font-medium leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* 4. SOLUTIONS WE DELIVER */}
      <div id="solutions" className="scroll-mt-24">
        <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
            
            <Reveal className="mb-16 text-left">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                ENTERPRISE PLATFORMS
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Microsoft-Powered Solutions for <span className="text-rose-500">Modern Enterprises</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="fade-scroll-item p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 flex flex-col justify-between h-full min-h-[220px]"
                >
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                      {sol.title}
                    </h4>
                    <p className="text-[11px] text-zinc-455 font-semibold leading-relaxed mb-6">
                      {sol.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-900/80 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-rose-455 font-bold uppercase tracking-wider">
                      {sol.metrics}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* 5. REFERENCE ARCHITECTURE */}
      <div id="architecture" className="scroll-mt-24">
        <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
            
            <Reveal className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                SYSTEM ARCHITECTURE
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                A Reference Architecture for <span className="text-rose-500">Microsoft-Powered Delivery</span>
              </h2>
              <p className="text-zinc-400 text-sm font-semibold">
                Our standardized delivery structure guarantees security and high scalability across every layer of the system.
              </p>
            </Reveal>

            {/* Symmetrical Layered Architecture Blocks */}
            <div className="flex flex-col gap-4 max-w-4xl mx-auto select-none">
              {archLayers.map((layer, idx) => (
                <div key={idx} className={`fade-scroll-item p-6 border rounded-2xl transition-all duration-300 hover:border-rose-500/40 hover:shadow-[0_0_15px_rgba(244,63,94,0.05)] ${layer.color} flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                  
                  {/* Layer Label & Technical Scope */}
                  <div className="max-w-lg">
                    <span className="text-[9px] font-mono text-rose-550 font-bold uppercase tracking-wider block mb-1">
                      LAYER 0{6 - idx} // {layer.layer}
                    </span>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">{layer.tech}</h3>
                    <p className="text-xs text-zinc-450 font-semibold leading-relaxed">{layer.desc}</p>
                  </div>

                  {/* Icon Block Indicator */}
                  <div className="flex items-center gap-2 self-start md:self-center">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">VERIFIED</span>
                    <CheckCircle2 className="w-4 h-4 text-rose-500" />
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* 6. BUSINESS USE CASES */}
      

        
      {/* CERTIFICATIONS */}
      <PartnerCertifications 
        title="Microsoft Certifications"
        certifications={[
            { image: "/assets/ecosystem/microsofr-awards/Group 1000008903.png" },
            { image: "/assets/ecosystem/microsofr-awards/image 123.png" },
            { image: "/assets/ecosystem/microsofr-awards/image 124.png" },
            { image: "/assets/ecosystem/microsofr-awards/image 125.png" },
            { image: "/assets/ecosystem/microsofr-awards/image 126.png" },
            { image: "/assets/ecosystem/microsofr-awards/image 127.png" },
            { image: "/assets/ecosystem/microsofr-awards/image 128.png" },
            { image: "/assets/ecosystem/microsofr-awards/image 129.png" },
            { image: "/assets/ecosystem/microsofr-awards/image 138.png" },
            { image: "/assets/ecosystem/microsofr-awards/image 139.png" }
          ]}
      />

      
      <div id="use-cases" className="scroll-mt-24">
        <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
            
            <Reveal className="mb-12 text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                PRACTICAL USE CASES
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Where We Apply the <span className="text-rose-500">Microsoft Ecosystem</span>
              </h2>
            </Reveal>

            {/* Categories Tab Selector */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 select-none">
              {Object.entries(useCaseCategories).map(([key, cat]) => (
                <button
                  key={key}
                  onClick={() => setActiveUseCase(key)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${
                    activeUseCase === key
                      ? "bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/10"
                      : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Active Category Display Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {useCaseCategories[activeUseCase as keyof typeof useCaseCategories].cases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl text-left flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500 font-mono text-xs font-bold mt-1">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{useCase.label}</h4>
                    <p className="text-[11px] text-zinc-450 font-semibold leading-relaxed">
                      {useCase.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* 7. MICROSOFT TECHNOLOGIES WE WORK WITH */}
      <div id="tech-stack" className="scroll-mt-24">
        <section className="w-full py-24 bg-black border-b border-zinc-900/60">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
            
            <Reveal className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                COMPLETE STACK
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Microsoft Technologies Across the <span className="text-rose-500">Stack</span>
              </h2>
            </Reveal>

            {/* Tech Stack Groups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
              {techStackGroups.map((group, idx) => (
                <div key={idx} className="p-6 bg-[#080808] border border-zinc-900 rounded-2xl text-left">
                  <span className="text-[9px] font-mono text-rose-500 font-bold uppercase tracking-widest block mb-4">
                    {group.category}
                  </span>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="text-xs text-zinc-400 font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/60 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Why Microsoft + Devopstrio Grid */}
            <Reveal className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                THE DEVOPSTRIO VALUE
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Why Organizations Build on Microsoft with <span className="text-rose-500">Devopstrio</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 text-left flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-rose-500/30 group-hover:text-rose-500 transition-colors font-mono text-xs font-bold block mb-4">
                      0{idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 leading-snug">{item.title}</h4>
                    <p className="text-xs text-zinc-455 font-semibold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* 9. BUSINESS OUTCOMES / IMPACT */}
      <div id="outcomes" className="scroll-mt-24">
        <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
              
              {/* Outcomes Left */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <Reveal>
                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                    BUSINESS OUTCOMES
                  </span>
                  <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                    Outcomes Enabled Through the Microsoft <span className="text-rose-500">Ecosystem</span>
                  </h2>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                    We measure our engineering success by the tangible business results we deliver to our enterprise clients.
                  </p>
                </Reveal>
              </div>

              {/* Outcomes Right (Metrics) */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
                  {outcomes.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 text-left group"
                    >
                      <div className="text-3xl md:text-4xl lg:text-5xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                        {stat.value}
                      </div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{stat.label}</h4>
                      <p className="text-[10px] text-zinc-455 font-semibold leading-relaxed">
                        {stat.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Related Pages */}
            <Reveal className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                EXPLORE OUR ALLIANCES
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Related <span className="text-rose-500">Ecosystem</span> Pages
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPages.map((partner) => (
                <Link
                  key={partner.name}
                  href={partner.href}
                  className="group flex flex-col justify-between p-6 bg-[#080808] border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-350 min-h-[180px] hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                      {partner.name}
                      <ChevronRight className="w-4 h-4 text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all duration-300" />
                    </h4>
                    <p className="text-[11px] text-zinc-455 font-semibold leading-relaxed">
                      {partner.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* 11. FAQ */}
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
              Everything you need to know about our custom Microsoft Azure implementation and consulting models. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

{/* 12. FINAL CTA */}
        <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
          {/* Ambient background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                GET STARTED TODAY
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Looking to Build, Migrate or Modernize on <span className="text-rose-500">Microsoft?</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Partner with Devopstrio to design secure, scalable, and future-ready Microsoft solutions across cloud, data, AI, DevOps, and enterprise operations.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
              >
                Talk to a Microsoft Expert
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300"
              >
                Start Your Azure Journey
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
  );
}
