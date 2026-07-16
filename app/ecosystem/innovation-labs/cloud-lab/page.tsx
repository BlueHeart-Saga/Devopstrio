"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Cloud,
  Cpu,
  Database,
  Network,
  Shield,
  Sparkles,
  ChevronRight,
  Activity,
  Terminal,
  CheckCircle,
  Settings,
  Workflow,
  Zap,
  Globe,
  Layers,
  HelpCircle
} from "lucide-react";
import Link from "next/link";

interface CoreArea {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface TimelineStep {
  num: string;
  title: string;
  desc: string;
}

interface SolutionBlock {
  title: string;
  desc: string;
}

interface ArchLayer {
  num: string;
  name: string;
  desc: string;
}

interface IndustryUseCase {
  name: string;
  items: string[];
}

interface Deliverable {
  title: string;
}

interface WhyChoose {
  title: string;
  desc: string;
}

interface RelatedLab {
  name: string;
  desc: string;
  href: string;
}

export default function CloudInnovationLabPage() {
  const [activeTab, setActiveTab] = useState<string>("Platform Modernization");


  // 2) Mini overview cards
  const miniMissionCards = [
    {
      title: "Cloud Foundation Design",
      desc: "Blueprinting scalable landing zones, secure account structures, and multi-environment cloud foundations."
    },
    {
      title: "Platform Engineering",
      desc: "Building reusable internal platforms that accelerate development and reduce operational complexity."
    },
    {
      title: "Automation & Reliability",
      desc: "Applying Infrastructure as Code, CI/CD, observability, and Site Reliability Engineering practices to improve speed and resilience."
    },
    {
      title: "Optimization & Governance",
      desc: "Improving cost efficiency, compliance posture, cloud visibility, and long-term operational control."
    }
  ];

  // 3) Core Areas of Cloud Innovation
  const innovationAreas: CoreArea[] = [
    {
      title: "Cloud Architecture & Landing Zones",
      desc: "Design secure, scalable cloud foundations with account structures, network patterns, identity models, and governance controls aligned to enterprise growth.",
      icon: <Network className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Cloud Migration & Modernization",
      desc: "Assess, migrate, refactor, and modernize legacy workloads into cloud-native or hybrid architectures with minimal disruption and long-term scalability.",
      icon: <Cloud className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Kubernetes & Container Platforms",
      desc: "Engineer containerized platforms for microservices, internal applications, and modern workloads using secure orchestration and production-grade cluster operations.",
      icon: <Layers className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Infrastructure as Code & Platform Automation",
      desc: "Automate infrastructure provisioning, policy controls, and environment creation using repeatable, version-controlled Infrastructure as Code practices.",
      icon: <Terminal className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Cloud Security & Governance",
      desc: "Embed identity, access control, secrets management, network protection, compliance guardrails, and governance standards into every cloud environment.",
      icon: <Shield className="w-5 h-5 text-rose-500" />
    },
    {
      title: "FinOps & Cost Optimization",
      desc: "Improve cloud spend visibility, eliminate waste, optimize compute usage, and establish cost accountability across teams and environments.",
      icon: <Activity className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Observability & Site Reliability Engineering",
      desc: "Build monitoring, alerting, tracing, incident workflows, and service reliability practices to improve platform resilience and operational visibility.",
      icon: <Settings className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Hybrid & Multi-Cloud Enablement",
      desc: "Support architectures that span cloud platforms, on-prem systems, and distributed workloads while maintaining consistent operations and security.",
      icon: <Globe className="w-5 h-5 text-rose-500" />
    }
  ];

  // 4) Lifecycle Framework
  const lifecycleTimeline: TimelineStep[] = [
    {
      num: "01",
      title: "Assess",
      desc: "Review current infrastructure, application dependencies, operational gaps, security posture, and cloud readiness."
    },
    {
      num: "02",
      title: "Design",
      desc: "Define landing zones, platform architecture, governance models, deployment patterns, and reliability requirements."
    },
    {
      num: "03",
      title: "Prototype",
      desc: "Validate migration patterns, IaC modules, platform components, and environment designs through controlled proof-of-concepts."
    },
    {
      num: "04",
      title: "Build",
      desc: "Engineer cloud infrastructure, CI/CD workflows, observability layers, security controls, and platform services."
    },
    {
      num: "05",
      title: "Deploy",
      desc: "Launch production-ready environments with automation, access controls, monitoring, backup strategies, and operational runbooks."
    },
    {
      num: "06",
      title: "Optimize",
      desc: "Improve cost, performance, reliability, developer experience, and governance through continuous tuning and platform evolution."
    }
  ];

  // 5) Solutions Built in the Lab
  const solutionBlocks: SolutionBlock[] = [
    {
      title: "Enterprise Landing Zones",
      desc: "Secure multi-account / multi-subscription foundations for cloud governance, networking, identity, and environment standardization."
    },
    {
      title: "Kubernetes Platform Foundations",
      desc: "Container platforms for internal apps, APIs, microservices, and scalable engineering workloads."
    },
    {
      title: "Cloud Migration Accelerators",
      desc: "Predefined migration blueprints, modernization patterns, and automation assets that reduce delivery time and migration risk."
    },
    {
      title: "DevOps & Deployment Platforms",
      desc: "CI/CD, release automation, infrastructure pipelines, environment provisioning, and platform engineering workflows."
    },
    {
      title: "Cloud Security Baselines",
      desc: "Identity controls, secrets management, secure network policies, workload protection, and compliance guardrails."
    },
    {
      title: "Observability & Reliability Stacks",
      desc: "Centralized logging, metrics, tracing, alerting, service health monitoring, and incident response workflows."
    },
    {
      title: "FinOps Dashboards & Optimization Models",
      desc: "Cloud usage analytics, budget visibility, rightsizing recommendations, and optimization playbooks."
    },
    {
      title: "Managed Cloud Operations Foundations",
      desc: "Support models, operational monitoring, platform maintenance, backup, recovery, and ongoing reliability support."
    }
  ];

  // 6) Architecture layers
  const archLayers: ArchLayer[] = [
    {
      num: "LAYER 1",
      name: "Business & Application Layer",
      desc: "web apps • APIs • internal tools • enterprise workloads • analytics applications • AI workloads"
    },
    {
      num: "LAYER 2",
      name: "Platform & Runtime Layer",
      desc: "Kubernetes / containers • app services / compute runtimes • serverless components • API gateways • job runners / schedulers"
    },
    {
      num: "LAYER 3",
      name: "Infrastructure & Network Layer",
      desc: "virtual networks / VPCs • load balancers • storage • databases • compute clusters • hybrid connectivity"
    },
    {
      num: "LAYER 4",
      name: "Automation & Delivery Layer",
      desc: "CI/CD pipelines • Infrastructure as Code • GitOps / deployment workflows • image registries • release controls"
    },
    {
      num: "LAYER 5",
      name: "Observability & Operations Layer",
      desc: "logging • metrics • tracing • alerting • uptime monitoring • incident workflows"
    },
    {
      num: "LAYER 6",
      name: "Security & Governance Layer",
      desc: "IAM / RBAC • secrets management • policy enforcement • compliance controls • backup / DR • cost governance"
    }
  ];

  const techChips = [
    "Azure",
    "AWS",
    "Google Cloud",
    "Terraform",
    "Kubernetes",
    "Docker",
    "GitHub Actions / CI pipelines",
    "Prometheus / Grafana / observability stack",
    "Vault / secrets / policy tooling",
    "PostgreSQL / MongoDB / object storage"
  ];

  // 7) Industry / Workload Use Cases
  const industryUseCases: IndustryUseCase[] = [
    {
      name: "Platform Modernization",
      items: [
        "cloud landing zone setup",
        "application modernization",
        "platform standardization",
        "legacy infrastructure migration"
      ]
    },
    {
      name: "DevOps & Delivery",
      items: [
        "automated release pipelines",
        "environment provisioning",
        "infrastructure automation",
        "developer platform enablement"
      ]
    },
    {
      name: "Reliability & Operations",
      items: [
        "SRE operating models",
        "centralized observability",
        "disaster recovery planning",
        "always-on infrastructure monitoring"
      ]
    },
    {
      name: "Security & Compliance",
      items: [
        "identity and access governance",
        "cloud policy enforcement",
        "secrets handling",
        "secure workload deployment"
      ]
    },
    {
      name: "Cost & Efficiency",
      items: [
        "cloud cost optimization",
        "rightsizing workloads",
        "storage / compute optimization",
        "operational simplification"
      ]
    },
    {
      name: "Data & AI foundations",
      items: [
        "data platform infrastructure",
        "GPU / AI workload environments",
        "secure analytics infrastructure",
        "model deployment environments"
      ]
    }
  ];

  // 8) Outcomes
  const labDeliverables: Deliverable[] = [
    { title: "Faster cloud deployment cycles" },
    { title: "More reliable infrastructure operations" },
    { title: "Lower cloud spend through optimization" },
    { title: "Improved developer velocity" },
    { title: "Better visibility across environments" },
    { title: "Stronger governance and compliance posture" },
    { title: "Reduced manual provisioning effort" },
    { title: "Production-ready platform foundations" }
  ];

  const stats = [
    { value: "24×7", label: "operational readiness" },
    { value: "Multi-Region", label: "deployment support" },
    { value: "Reusable", label: "cloud accelerators" },
    { value: "Instant", label: "environment setup" },
    { value: "Standardized", label: "platform models" }
  ];

  // 9) Why work with us
  const whyWorkWithUs: WhyChoose[] = [
    {
      title: "Cloud Strategy + Engineering in One Team",
      desc: "We combine cloud architecture, DevOps, platform engineering, security, and operations under one delivery model."
    },
    {
      title: "Built for Production, Not Just Planning",
      desc: "Our lab focuses on production-grade cloud foundations that can support real applications, real teams, and real scale."
    },
    {
      title: "Automation-First Approach",
      desc: "We reduce manual overhead through Infrastructure as Code, reusable blueprints, deployment pipelines, and operational automation."
    },
    {
      title: "Security and Governance by Design",
      desc: "Identity, compliance, observability, backup, and policy controls are embedded into the architecture from the start."
    },
    {
      title: "Cross-Platform Cloud Expertise",
      desc: "We work across Azure, AWS, Google Cloud, and hybrid environments to design the right cloud operating model for each business."
    },
    {
      title: "Long-Term Platform Partnership",
      desc: "We support modernization, deployment, optimization, and ongoing operations — not just one-time implementation."
    }
  ];

  // 10) Related labs
  const relatedLabs: RelatedLab[] = [
    {
      name: "AI Innovation Lab",
      desc: "R&D and applied innovation for enterprise machine learning.",
      href: "/ecosystem/innovation-labs/ai-lab"
    },
    {
      name: "DevOps Innovation Lab",
      desc: "Accelerate CI/CD pipelines, release safety, and deployment workflows.",
      href: "/ecosystem/innovation-labs/devops-lab"
    },
    {
      name: "Cybersecurity Lab",
      desc: "Threat mitigation, pen-testing, and compliance architecture auditing.",
      href: "/ecosystem/innovation-labs/cybersecurity-lab"
    },
    {
      name: "Data & Analytics Lab",
      desc: "Enterprise data lakes, stream processing, and business intelligence models.",
      href: "/ecosystem/innovation-labs/data-analytics-lab"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <Hero
        badge="Cloud Innovation Lab"
        floatingLines={true}
        floatingLinesStartColor="#0ea5e9"
        floatingLinesMidColor="#2563eb"
        floatingLinesEndColor="#6366f1"
        title={
          <>
            Where Cloud Strategy Becomes <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Production-Ready Infrastructure
            </span>
          </>
        }
        subtitle="Accelerate hyper-scale execution through robust landing zones, platform engineering, automated Infrastructure as Code, and production-grade Kubernetes orchestration across public, hybrid, and multi-cloud environments."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "INNOVATION LABS", href: "/ecosystem/innovation-labs" },
          { label: "CLOUD LAB" },
        ]}
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Book a Cloud Strategy Session
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Our Cloud Team
          </Link>
        </div>
      </Hero>

      {/* 2. OVERVIEW / MISSION SECTION */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side content */}
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Mission Overview
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Where Cloud Strategy Becomes <br />
                  <span className="text-rose-500">Production-Ready Infrastructure</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  The Devopstrio Cloud Innovation Lab is dedicated to designing, testing, and operationalizing cloud-native architectures that support modern enterprise workloads. We help organizations move from fragmented infrastructure to secure, scalable, automated cloud platforms by combining architecture design, platform engineering, DevOps, observability, and governance.
                </p>
              </Reveal>
            </div>

            {/* Right side - 4 mini cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {miniMissionCards.map((card, idx) => (
                <Reveal key={card.title} delay={idx * 0.05}>
                  <div className="bg-zinc-950/40 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-5 transition-all duration-300 min-h-[140px] flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                        {card.title}
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-400 font-semibold leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE INNOVATION AREAS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Capabilities
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Core Areas of <span className="text-rose-500">Cloud Innovation</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              The main capability vectors driving modern cloud transformation, platform automation, and cloud-native excellence.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.04} className="h-full">
                <div className="bg-[#0a0a0a]/60 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center mb-5">
                      {area.icon}
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                      {area.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOUD LAB LIFECYCLE / OPERATING MODEL */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-left max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Operating Framework
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              How the Cloud Lab Builds <span className="text-rose-500">Modern Platform Foundations</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              A structured lifecycle method prioritizing early validation and rigorous engineering checks.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {lifecycleTimeline.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.05} className="h-full">
                <div className="bg-zinc-950/80 border border-white/[0.03] hover:border-rose-500/20 rounded-2xl p-5 flex flex-col justify-between h-full min-h-[190px] relative group transition-all duration-300">
                  <div>
                    <span className="text-2xl font-black text-rose-500/10 font-mono tracking-tighter block mb-4 group-hover:text-rose-500/25 transition-colors">
                      {step.num}
                    </span>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SOLUTIONS BUILT IN THE LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Deliverables
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Cloud Solutions Built <span className="text-rose-500">Inside the Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Actual software platforms and functional cloud integrations designed for real business setups.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionBlocks.map((block, idx) => (
              <Reveal key={block.title} delay={idx * 0.04}>
                <div className="bg-[#0a0a0a]/60 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-6 transition-all duration-300 min-h-[170px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-white/[0.03] pb-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        {block.title}
                      </h4>
                      <span className="text-[9px] font-mono text-rose-500 font-bold">READY TO RUN</span>
                    </div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {block.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REFERENCE ARCHITECTURE */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-650/[0.015] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Reference Blueprint
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Our Cloud Innovation <span className="text-rose-500">Reference Architecture</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              The layered framework powering secure cloud-native environments and automated infrastructure delivery.
            </p>
          </Reveal>

          {/* Layered Diagram */}
          <div className="flex flex-col gap-4 font-mono">
            {archLayers.map((layer, idx) => (
              <Reveal key={layer.num} delay={idx * 0.05}>
                <div className="bg-zinc-950/60 border border-white/[0.03] rounded-2xl p-5 hover:border-rose-500/20 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-[10px] font-bold text-rose-500 uppercase tracking-widest font-mono border-r border-white/10 pr-2">
                      {layer.num}
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{layer.name}</span>
                  </div>
                  <span className="text-xs md:text-sm text-zinc-400 font-semibold md:max-w-md text-left md:text-right leading-relaxed">
                    {layer.desc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Tech Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 select-none mt-12">
            {techChips.map((tech) => (
              <span key={tech} className="px-3.5 py-2 bg-zinc-950 border border-white/[0.04] text-[10px] font-mono text-zinc-400 rounded-xl font-bold">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 7. USE CASES / SCENARIOS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Scenarios
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Cloud Use Cases We Engineer <span className="text-rose-500">Across the Enterprise</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Targeted implementations mapping robust platform models directly to enterprise operational segments.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            
            {/* Left selector sidebar */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory">
              {industryUseCases.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-left border transition-all duration-300 flex-shrink-0 snap-start w-[140px] lg:w-full ${
                    activeTab === cat.name
                      ? "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.1)]"
                      : "bg-zinc-950/45 text-zinc-400 border-white/[0.03] hover:text-zinc-300 hover:bg-zinc-900/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">{cat.name}</span>
                  </div>
                  <ChevronRight size={14} className="hidden lg:block text-zinc-555" />
                </button>
              ))}
            </div>

            {/* Right Display Card */}
            <div className="lg:col-span-8">
              <div className="bg-[#0b0b0b]/60 border border-white/[0.03] rounded-3xl p-6 md:p-8 min-h-[260px] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-6 border-b border-white/[0.03] pb-2">
                    ACTIVE USE CASE MAPPING FOR: {activeTab}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(industryUseCases.find((c) => c.name === activeTab)?.items || []).map((item, idx) => (
                      <Reveal key={item} delay={idx * 0.04} className="h-full">
                        <div className="group relative rounded-[20px] border border-white/[0.04] bg-zinc-950/80 p-5 hover:border-rose-500/20 hover:shadow-[0_8px_30px_rgba(244,63,94,0.02)] transition-all duration-300 flex flex-col justify-between h-full min-h-[90px]">
                          <div className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                            <span className="text-xs md:text-sm font-bold text-zinc-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                              {item}
                            </span>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. INNOVATION OUTCOMES / IMPACT */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Innovation Impact
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Outcomes the Cloud Lab <br />
                  <span className="text-rose-500">Helps Deliver</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  Providing enterprise metrics, operational availability models, and platform accelerators.
                </p>

                {/* Stat-style UI */}
                <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.04] pt-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-rose-500 w-24 flex-shrink-0">
                        {stat.value}
                      </span>
                      <span className="text-[11px] text-zinc-450 uppercase tracking-widest font-semibold">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right side metrics and value list */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {labDeliverables.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.05}>
                  <div className="bg-zinc-950/80 border border-white/[0.03] rounded-2xl p-5 hover:border-rose-500/10 transition-colors duration-300 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-zinc-300">{item.title}</span>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 9. WHY DEVOPSTRIO CLOUD LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Why Devopstrio
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Why Organizations Build with the <span className="text-rose-500">Devopstrio Cloud Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              We combine strategy and deep execution to design platforms that scale safely.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWorkWithUs.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.04}>
                <div className="bg-[#0a0a0a]/60 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-6 transition-all duration-300 flex flex-col justify-between min-h-[170px] h-full">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 10. RELATED LABS / CTA */}
      <section className="w-full py-24 bg-[#020202] relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          {/* Related Labs Grid */}
          <div className="mb-24">
            <Reveal className="mb-14 text-left">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                Ecosystem
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-5">
                Explore More <span className="text-rose-500">Innovation Labs</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedLabs.map((lab) => (
                <Link
                  key={lab.name}
                  href={lab.href}
                  className="group bg-zinc-950/60 border border-white/[0.03] hover:border-rose-500/20 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between min-h-[160px]"
                >
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 flex items-center justify-between">
                      {lab.name}
                      <ChevronRight size={14} className="text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {lab.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA Block */}
          <div className="relative rounded-[32px] border border-white/[0.04] bg-zinc-950/50 p-8 md:p-16 text-center overflow-hidden max-w-4xl mx-auto">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                Platform Modernization
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-5">
                Ready to modernize your cloud foundation?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Work with the Devopstrio Cloud Innovation Lab to design secure landing zones, modernize workloads, automate infrastructure, and build resilient cloud platforms that scale with your business.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
                >
                  Book a Cloud Strategy Session
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Talk to Our Cloud Team
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
