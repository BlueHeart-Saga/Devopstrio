"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Layers,
  Workflow,
  Cpu,
  Activity,
  Shield,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Users,
  Briefcase,
  Palette,
  FileCheck,
  TrendingUp,
  Network,
  Calendar,
  Lock,
  Boxes
} from "lucide-react";
import Link from "next/link";

export default function SaaSPlatformsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Platform Logos for Hero
  const platformLogos = [
    { name: "Humanex", href: "/ecosystem/platforms-solutions/saas-platforms/humanex" },
    { name: "Brio", href: "/ecosystem/platforms-solutions/saas-platforms/brio" },
    { name: "SafeSign", href: "/ecosystem/platforms-solutions/saas-platforms/safesign" },
    { name: "Campix", href: "/ecosystem/platforms-solutions/saas-platforms/campix" },
    { name: "Prestivo", href: "/ecosystem/platforms-solutions/saas-platforms/prestivo" },
    { name: "Homela", href: "/ecosystem/platforms-solutions/saas-platforms/homela" }
  ];

  // Hero Metrics
  const heroMetrics = [
    { value: "10+", label: "SaaS Products" },
    { value: "5+", label: "Industry Solutions" },
    { value: "Global", label: "Cloud Infrastructure" },
    { value: "Enterprise", label: "Ready" }
  ];

  // Overview Categories
  const overviewCategories = [
    { name: "HR & Workforce", desc: "AI-driven recruiting, core HR, payroll structures, and talent retention tracking." },
    { name: "Creative & Content", desc: "Automated media assembly, asset libraries, copy generators, and design grids." },
    { name: "Document Management", desc: "Secure electronic signing, audit trails, and document workflow automations." },
    { name: "Business Operations", desc: "Task tracking, calendar boards, billing pipelines, and team integrations." },
    { name: "Customer Experience", desc: "Intelligent chatbot triggers, customer satisfaction metrics, and feedback portals." },
    { name: "Industry Platforms", desc: "Vertical-specific operational platforms built for real estate and localized systems." }
  ];

  // Platform Portfolio Products
  const portfolioProducts = [
    {
      slug: "humanex",
      name: "Humanex",
      tagline: "AI-powered HR & Workforce Management Platform",
      desc: "Streamline talent operations from application screening to performance reviews. Featuring automated compliance checking, dynamic payroll calculators, and self-service onboarding portals.",
      features: ["Recruitment", "Employee Management", "Payroll", "Onboarding", "Performance"]
    },
    {
      slug: "brio",
      name: "Brio",
      tagline: "AI Creative & Marketing Platform",
      desc: "Empower design teams to produce brand assets at scale. Includes neural copywriters, central media storage lakes, drag-and-drop design builders, and automated social campaign routers.",
      features: ["Content Generation", "Design Assets", "Campaign Support", "Media Management"]
    },
    {
      slug: "safesign",
      name: "SafeSign",
      tagline: "Digital Signature & Document Platform",
      desc: "Accelerate signature loops securely. Fully compliant with European eIDAS and US ESIGN Acts, featuring custom workflow builders, file audit logs, and encrypted storage lockers.",
      features: ["eSignature", "Workflows", "Compliance", "Document Tracking"]
    },
    {
      slug: "campix",
      name: "Campix",
      tagline: "Campaign & Marketing Operations Platform",
      desc: "Align marketing execution with actual sales performance datasets. Tracks cross-channel spending, automates analytics collection, and splits traffic dynamically for optimal conversions.",
      features: ["Traffic Splitting", "Spend Auditing", "Analytics Aggregator", "Channel Attribution"]
    },
    {
      slug: "prestivo",
      name: "Prestivo",
      tagline: "Business Productivity Platform",
      desc: "Consolidate communication, tasks, schedules, and document workspaces in one collaborative hub. Minimizes context-switching delays and optimizes process tracking.",
      features: ["Task Boards", "Calendar Sync", "Team Chat Rooms", "File Collaboration"]
    },
    {
      slug: "homela",
      name: "Homela",
      tagline: "Industry-Specific Operations Platform",
      desc: "Tailored operations manager built for real estate, leasing, and physical asset trackers. Coordinates scheduling, automates contract triggers, and aggregates regional rental telemetry.",
      features: ["Lease Workflows", "Asset Telemetry", "Contract Automation", "Regional Analytics"]
    }
  ];

  // Capabilities
  const capabilities = [
    { title: "Artificial Intelligence", desc: "Context-aware agents and machine learning modules parsing inputs inside application flows." },
    { title: "Workflow Automation", desc: "No-code workflow managers running stateful tasks, API checks, and automated retry loops." },
    { title: "Cloud Native", desc: "Deployed inside isolated Kubernetes boundaries to auto-scale compute depending on traffic loads." },
    { title: "Analytics", desc: "Embedded databases recording platform usage, transaction latency, and billing metrics." },
    { title: "Security", desc: "End-to-end data encryption, single sign-on parameters, and compliance checklists." },
    { title: "API Integration", desc: "Pre-configured webhook systems and triggers linking platforms with external ERPs." }
  ];

  // Business Solutions
  const businessSolutions = [
    { function: "Human Resources", need: "Siloed applicant databases and slow onboarding loops.", recom: "Humanex Platform", outcome: "Onboarding time reduced from weeks to minutes." },
    { function: "Marketing", need: "Slow design turnarounds and manually configured channels.", recom: "Brio + Campix", outcome: "Marketing asset production scaled by 300%." },
    { function: "Operations", need: "Fragmented spreadsheets and lost document approvals.", recom: "Prestivo Platform", outcome: "Team process bottlenecks eliminated." },
    { function: "Compliance", need: "Insecure paper signing loops and missing audits.", recom: "SafeSign Platform", outcome: "100% compliant, audit-ready signature logs." },
    { function: "Document Management", need: "Manually archiving files and indexing folder links.", recom: "SafeSign + Prestivo", outcome: "Dynamic document routing templates." },
    { function: "Customer Engagement", need: "Overwhelmed human support staff on simple billing questions.", recom: "AI support widgets", outcome: "70% self-service resolution rate." }
  ];

  // Success Stories
  const successStories = [
    {
      title: "HR Digital Transformation",
      challenge: "A retail company with 2,000 employees struggled to manage timesheets and performance cycles.",
      solution: "Deployed Humanex, unifying payroll rules and manager dashboards.",
      result: "90% automated timesheet approvals and zero manual payroll calculator errors."
    },
    {
      title: "Document Automation",
      challenge: "A real estate group spent days mailing lease papers to remote tenants.",
      solution: "Integrated SafeSign eSignatures and automated contract reminders.",
      result: "Lease signing time collapsed from 4 days to 12 minutes, with full compliance logs."
    },
    {
      title: "Marketing Productivity",
      challenge: "A tech startup struggled to run campaigns across 12 countries, bottlenecked by asset designs.",
      solution: "Deployed Brio to scale design variants and Campix to automate split tests.",
      result: "10x campaigns launched with the same headcount, lowering acquisition cost by 25%."
    }
  ];

  // Roadmap Areas
  const roadmapItems = [
    { phase: "Q1 - Q2", title: "AI Copilots", desc: "Deploying conversational sidebar assistants inside Humanex and Brio interfaces." },
    { phase: "Q3", title: "Agentic Workflows", desc: "Integrating multi-agent orchestration to let platforms run background tasks autonomously." },
    { phase: "Q4", title: "Predictive Analytics", desc: "Adding customer churn predictors and forecasting tools directly to Campix dashboards." },
    { phase: "Future", title: "Industry Cloud Platforms", desc: "Re-packaging tools into vertical packages optimized for financial services." }
  ];

  // FAQs
  const faqs = [
    {
      q: "Are these SaaS platforms hosted by Devopstrio or in our cloud?",
      a: "We support both! You can access them as managed SaaS tools, or we can deploy the complete platform code directly inside your secure cloud accounts."
    },
    {
      q: "Can we request custom feature additions for our business?",
      a: "Yes, we regularly partner with enterprise users to construct bespoke microservices and custom dashboards connected to our core products."
    },
    {
      q: "What security frameworks do your SaaS platforms comply with?",
      a: "Our core codebases are built around SOC-2 compliance parameters, including row-level DB security, SSO integration, and full data encryption at rest."
    },
    {
      q: "How does billing work for multi-tenant integrations?",
      a: "We offer seat-based licenses, transaction volume billing, and custom flat-rate subscriptions depending on your scale."
    },
    {
      q: "What database backends do these systems run on?",
      a: "We standardize on PostgreSQL and MongoDB backends depending on the platform's relational or document data layouts."
    },
    {
      q: "Do you integrate with third-party software like SAP or ServiceNow?",
      a: "Yes, all our platforms provide RESTful APIs and pre-configured webhooks to sync datasets automatically with external ERP systems."
    },
    {
      q: "Is there a trial period available for these tools?",
      a: "Yes, we set up isolated POC workspaces so your teams can evaluate and test features before launching."
    },
    {
      q: "How does SafeSign verify signatory identity?",
      a: "SafeSign records email pins, IP footprints, and SMS verification tokens, mapping every transaction to a secure PDF audit certificate."
    },
    {
      q: "Does Brio own the copyright of AI-generated assets?",
      a: "No, all brand design components, media copies, and layouts produced inside Brio belong entirely to your enterprise."
    },
    {
      q: "How do we start a platform deployment?",
      a: "You can click 'Request Demo' or contact our engineers to discuss your cloud configuration requirements."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/ecosystem/sub-page-hero/ecosystem_platforms_solutions/Saas.png"
            alt="SaaS Platforms background"
            className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
        {/* Decorative Grid */}
        

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-20 flex flex-col items-center text-center">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Boxes className="w-3.5 h-3.5" />
              Enterprise SaaS Ecosystem
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              Enterprise SaaS Platforms <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
                Built for Scale, Automation & Business Growth
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-10">
              Discover Devopstrio's growing ecosystem of SaaS products, industry solutions, and intelligent business platforms designed to accelerate digital transformation.
            </p>
          </Reveal>
          <Reveal delay={0.4} className="w-full max-w-4xl select-none mb-0">
            <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest block mb-6 font-bold">
              PROPRIETARY SAAS SOLUTIONS
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {platformLogos.map((logo) => (
                <Link
                  key={logo.name}
                  href={logo.href}
                  className="text-base md:text-lg font-black tracking-widest text-zinc-500 hover:text-rose-500 font-mono transition-colors"
                >
                  {logo.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* 2. SAAS ECOSYSTEM OVERVIEW */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  ECOSYSTEM LAYOUT
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
                  SaaS Ecosystem <span className="text-rose-500">Overview</span>
                </h2>
                <p className="text-zinc-350 text-xs md:text-sm font-bold leading-relaxed mb-6">
                  Our systems bridge team productivity and operations, routing transaction datasets through high-performance databases automatically.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 p-8 rounded-3xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-center">
                <div className="p-4 bg-black border border-zinc-900/80 rounded-xl w-full text-zinc-400 font-bold">People</div>
                <div className="text-zinc-750">→</div>
                <div className="p-4 bg-black border border-zinc-900/80 rounded-xl w-full text-zinc-400 font-bold">Processes</div>
                <div className="text-zinc-750">→</div>
                <div className="p-4 bg-black border border-zinc-900/80 rounded-xl w-full text-zinc-400 font-bold">Platforms</div>
                <div className="text-zinc-750">→</div>
                <div className="p-4 bg-black border border-zinc-900/80 rounded-xl w-full text-zinc-400 font-bold">Insights</div>
                <div className="text-zinc-750">→</div>
                <div className="p-4 bg-rose-500/10 border border-rose-500/35 rounded-xl w-full text-rose-550 font-bold">Growth</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {overviewCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/10 rounded-3xl transition-all duration-300"
              >
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 pb-2 border-b border-zinc-900/60">
                  {cat.name}
                </h4>
                <p className="text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PLATFORM PORTFOLIO */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PLATFORMS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Platform <span className="text-rose-500">Portfolio</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Explore our proprietary software tools designed for rapid business execution.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioProducts.map((prod, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-900/60 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">{prod.name}</h3>
                      <p className="text-[10px] text-rose-500 font-mono mt-1 uppercase tracking-wider font-bold">{prod.tagline}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-700">0{idx + 1}</span>
                  </div>

                  <p className="text-xs md:text-sm text-zinc-400 font-bold leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {prod.features.map((feat) => (
                      <span key={feat} className="px-2.5 py-1 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-400 rounded-md font-bold">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/ecosystem/platforms-solutions/saas-platforms/${prod.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-rose-500 transition-colors mt-auto"
                >
                  Explore Platform
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PLATFORM CAPABILITIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PLATFORM FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Platform <span className="text-rose-500">Capabilities</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500 font-bold font-mono text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BUSINESS SOLUTIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              RECOMMENDED PATHWAYS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Business <span className="text-rose-500">Solutions</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 md:p-8 justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-4 font-bold">
                    {sol.function}
                  </span>

                  <div className="space-y-4 font-bold">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider block mb-1">Business Need</span>
                      <p className="text-xs text-zinc-300">{sol.need}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-rose-550 uppercase tracking-wider block mb-1">Recommended Platform</span>
                      <p className="text-xs text-white">{sol.recom}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900/80">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider block mb-1 font-bold">Business Outcome</span>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">{sol.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PLATFORM ARCHITECTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              BLUEPRINT LAYERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Platform <span className="text-rose-500">Architecture</span>
            </h2>
          </Reveal>

          <div className="max-w-4xl mx-auto bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="flex flex-col gap-6 relative z-10 font-mono">

              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">01. Users</span>
                <span className="text-xs text-zinc-400 font-bold">End Customers, HR Admins, Campaign managers</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">02. SaaS Applications</span>
                <span className="text-xs text-zinc-400 font-bold">Humanex dashboard, SafeSign portal, Brio layout compiler</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">03. API Layer</span>
                <span className="text-xs text-zinc-400 font-bold">FastAPI route controllers, webhook handlers, payment connectors</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">04. Cloud Infrastructure</span>
                <span className="text-xs text-zinc-400 font-bold">Azure AKS, secure EKS namespaces, resource balancers</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">05. Data Platform</span>
                <span className="text-xs text-zinc-400 font-bold">PostgreSQL row-level isolation, MongoDB document registries</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">06. Security & Monitoring</span>
                <span className="text-xs text-zinc-400 font-bold">SSL verification certificates, Prometheus telemetry engines</span>
              </div>

            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 select-none mt-12">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Technology Stack:</span>
            {["React", "Next.js", "FastAPI", "Azure", "MongoDB", "PostgreSQL"].map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CUSTOMER SUCCESS & IMPACT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  METRICS & CASES
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
                  Customer Success <span className="text-rose-500">& Impact</span>
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-6 select-none">
                {[
                  { value: "99.9%", label: "Availability" },
                  { value: "Thousands", label: "Of Transactions" },
                  { value: "Multi-Tenant", label: "Architecture" },
                  { value: "Global", label: "Access" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 text-left group"
                  >
                    <div className="text-2xl md:text-3xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                      {item.value}
                    </div>
                    <div className="text-[9px] md:text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-snug font-bold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-500 tracking-wider uppercase font-bold block mb-1">
                    Customer Story
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

      {/* 8. FUTURE PLATFORM ROADMAP */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              DEVELOPMENT TIMELINE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Future Platform <span className="text-rose-500">Roadmap</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {roadmapItems.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group overflow-hidden"
              >
                <div className="text-[28px] font-black text-rose-500/15 font-mono tracking-tighter leading-none mb-3">
                  {step.phase}
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{step.title}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 select-none mt-12">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Future Focus:</span>
            {["AI Copilots", "Agentic Workflows", "Predictive Analytics", "Industry Cloud Platforms", "Mobile Experiences", "Enterprise Integrations"].map((srv) => (
              <span key={srv} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {srv}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left sticky top-28">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  PLATFORM QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our multi-tenant SaaS architectures, custom additions, and database hosting boundaries.
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

      {/* 9. CTA SECTION */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 flex flex-col items-center">

          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GET STARTED
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Explore the <span className="text-rose-500">Devopstrio SaaS Ecosystem</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Connect with our product specialists to view live sandbox environments and configure your deployment parameters.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Request Demo
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk To Product Experts
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
