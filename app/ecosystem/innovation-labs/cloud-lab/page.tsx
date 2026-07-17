"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
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
  HelpCircle,
  Search
} from "lucide-react";
import Link from "next/link";

const colorMap: Record<string, { border: string; icon: string; number: string; glow: string }> = {
  rose:    { border: "border-rose-500/30 hover:border-rose-500/60",    icon: "text-rose-500 bg-rose-500/10 border-rose-500/20",    number: "text-rose-500/10",    glow: "from-rose-500/10" },
  blue:    { border: "border-blue-500/30 hover:border-blue-500/60",    icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",    number: "text-blue-500/10",    glow: "from-blue-500/10" },
  emerald: { border: "border-emerald-500/30 hover:border-emerald-500/60", icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", number: "text-emerald-500/10", glow: "from-emerald-500/10" },
  orange:  { border: "border-orange-500/30 hover:border-orange-500/60", icon: "text-orange-400 bg-orange-500/10 border-orange-500/20", number: "text-orange-500/10", glow: "from-orange-500/10" },
  purple:  { border: "border-purple-500/30 hover:border-purple-500/60", icon: "text-purple-400 bg-purple-500/10 border-purple-500/20", number: "text-purple-500/10", glow: "from-purple-500/10" },
  cyan:    { border: "border-cyan-500/30 hover:border-cyan-500/60",    icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",    number: "text-cyan-500/10",    glow: "from-cyan-500/10" }
};

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleTimeline.map((step, idx) => {
              const icons = [Search, Layers, Terminal, Workflow, Cloud, Settings];
              const colors = ["rose", "blue", "emerald", "orange", "purple", "cyan"];
              const Icon = icons[idx];
              const c = colorMap[colors[idx]];
              
              return (
                <Reveal key={step.num} delay={idx * 0.05} className="h-full">
                  <div
                    className={`group relative h-full bg-zinc-900/40 border ${c.border} rounded-2xl p-8 overflow-hidden transition-all duration-300 flex flex-col`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                    {/* Large number watermark */}
                    <span className={`absolute top-4 right-6 text-[5.5rem] font-black ${c.number} select-none leading-none transition-transform duration-300 group-hover:scale-110`}>
                      {step.num}
                    </span>

                    <div className="relative z-10 flex flex-col flex-1">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${c.icon}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{step.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {solutionBlocks.map((block, idx) => {
              const icons = [Cloud, Search, Database, Shield, Cpu, Activity, Workflow, CheckCircle];
              const Icon = icons[idx % icons.length];
              return (
                <Reveal key={block.title} delay={idx * 0.04} className="h-full">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900/80 hover:border-rose-500/30 transition-all duration-500 relative group h-full flex flex-col justify-between shadow-lg">
                    
                    {/* Glassmorphic Sheen & Quote-like Icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-3xl" />
                    <Icon className="absolute top-8 right-8 text-zinc-800/40 w-12 h-12 group-hover:text-rose-500/20 transition-colors duration-500" strokeWidth={1} />
                    
                    <div className="relative z-10">
                      <div className="mb-6">
                        <span className="px-3 py-1 bg-zinc-950/80 border border-zinc-800 text-rose-500/80 text-[10px] font-mono font-bold tracking-widest rounded-full uppercase shadow-sm">
                          Ready to Run
                        </span>
                      </div>
                      
                      <h4 className="text-base md:text-lg font-bold text-white tracking-wide leading-tight mb-4 pr-12 group-hover:text-rose-50 transition-colors">
                        {block.title}
                      </h4>
                      <div className="h-[1px] w-12 bg-rose-500/20 mb-4 group-hover:w-full transition-all duration-500" />
                      <p className="text-sm text-zinc-400 leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">
                        {block.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. REFERENCE ARCHITECTURE */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-650/[0.015] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left: Heading & Context */}
            <div className="lg:w-1/2 sticky top-24">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Reference Blueprint
                </span>
                <h2 className="text-xl md:text-2xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
                  Our Cloud Innovation <span className="text-rose-500">Reference Architecture</span>
                </h2>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium mb-10">
                  The layered framework powering secure cloud-native environments and automated infrastructure delivery.
                </p>

                <div className="flex flex-wrap gap-3">
                  {techChips.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.05) }}
                      className="px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-bold hover:border-rose-500/50 hover:text-rose-400 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: Architecture Steps */}
            <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
              <div className="space-y-6 relative">
                {/* Vertical Connector Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-zinc-900/80" />
                
                {archLayers.map((layer, idx) => {
                  const stepNumber = (idx + 1).toString().padStart(2, "0");
                  return (
                    <motion.div
                      key={layer.num}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex gap-6 relative group"
                    >
                      <div className="w-14 h-14 rounded-full bg-black border-2 border-zinc-800 flex items-center justify-center text-zinc-500 font-bold shrink-0 relative z-10 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-colors shadow-lg">
                        {stepNumber}
                      </div>
                      <div className="pt-3 pb-8">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{layer.name}</h3>
                        <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">{layer.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

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

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* LEFT: Topics List (Compact) */}
            <div className="flex flex-row lg:flex-col gap-2.5 lg:w-[280px] xl:w-[320px] shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 w-full snap-x snap-mandatory scrollbar-none">
              {industryUseCases.map((cat, idx) => {
                const icons = [Cloud, Workflow, Activity, Shield, Settings, Cpu, Database, Terminal, Network, Layers, Zap, Sparkles];
                const Icon = icons[idx % icons.length];
                
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveTab(cat.name)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl border text-left transition-all duration-300 shrink-0 lg:shrink-0 snap-start
                      ${activeTab === cat.name
                        ? "bg-rose-500/10 border-rose-500/40 text-white shadow-[0_0_15px_rgba(244,63,94,0.1)] w-[240px] lg:w-full"
                        : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white w-[240px] lg:w-full"}`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 transition-colors
                      ${activeTab === cat.name ? "bg-rose-500/20 border-rose-500/30 text-rose-500" : "bg-zinc-800 border-zinc-700 text-zinc-400"}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-xs leading-tight tracking-wide uppercase">{cat.name}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT: Rectangular Low Height Image Card */}
            <div className="flex-1 w-full bg-[#0A0A0A] rounded-[24px] border border-zinc-800 shadow-xl overflow-hidden min-h-[360px] lg:min-h-[400px] flex flex-col sm:flex-row">
              
              {/* Abstract Visual Half */}
              <div className="w-full sm:w-5/12 lg:w-5/12 relative h-48 sm:h-auto overflow-hidden bg-zinc-950 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  {industryUseCases.map((cat, idx) => {
                    if (cat.name !== activeTab) return null;
                    const icons = [Cloud, Workflow, Activity, Shield, Settings, Cpu, Database, Terminal, Network, Layers, Zap, Sparkles];
                    const Icon = icons[idx % icons.length];
                    
                    return (
                      <motion.div
                        key={cat.name + "-visual"}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(244,63,94,0.15),transparent)]" />
                        <Icon className="w-32 h-32 text-rose-500/10 drop-shadow-2xl relative z-10" strokeWidth={1} />
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#0A0A0A] to-transparent sm:hidden z-20" />
                        <div className="absolute right-0 w-full h-full bg-gradient-to-l from-[#0A0A0A] to-transparent hidden sm:block z-20" />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Content Half */}
              <div className="w-full sm:w-7/12 lg:w-7/12 p-8 md:p-12 flex flex-col justify-center relative z-30">
                <AnimatePresence mode="wait">
                  {industryUseCases.map((cat, idx) => {
                    if (cat.name !== activeTab) return null;
                    const icons = [Cloud, Workflow, Activity, Shield, Settings, Cpu, Database, Terminal, Network, Layers, Zap, Sparkles];
                    const Icon = icons[idx % icons.length];
                    
                    return (
                      <motion.div
                        key={cat.name + "-content"}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-xl border border-rose-500/30 bg-rose-950/20 flex items-center justify-center text-rose-500 shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">Implementation Scenario</span>
                            <span className="text-xs font-semibold text-rose-500/80 leading-tight mt-1">{cat.name}</span>
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                          {cat.name} Solutions
                        </h3>
                        
                        <div className="mt-6 flex flex-col gap-4">
                           {cat.items.map(item => (
                             <div key={item} className="flex items-start gap-3">
                               <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                               <span className="text-sm font-semibold text-zinc-300 leading-relaxed capitalize">
                                 {item}
                               </span>
                             </div>
                           ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
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

                {/* Manifesto-style Stats */}
                <div className="space-y-6 text-xl md:text-2xl font-light text-zinc-300 mt-10 pt-6 border-t border-white/[0.04]">
                  {stats.map((stat) => (
                    <p key={stat.label} className="hover:text-white transition-colors cursor-default flex items-center gap-4">
                      <span className="font-semibold text-rose-500">{stat.value}</span>
                      <span className="font-medium text-white">{stat.label}</span>
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right side metrics and value list */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {labDeliverables.map((item, idx) => {
                const icons = [Activity, Workflow, Shield, Cpu, Database, Search, Layers, Cloud];
                const Icon = icons[idx % icons.length];
                return (
                  <Reveal key={item.title} delay={idx * 0.05} className="h-full">
                    <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-900 hover:border-rose-500/30 transition-all duration-300 h-full flex flex-col">
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center mb-5 group-hover:bg-rose-500/20 group-hover:text-rose-500 transition-colors duration-300 border border-zinc-700 group-hover:border-rose-500/30 text-zinc-400 shadow-inner shrink-0">
                          <Icon size={18} />
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-rose-500 transition-colors duration-300 leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 9. WHY DEVOPSTRIO CLOUD LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Heading & Stats */}
            <div className="sticky top-32">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4">
                  Why Devopstrio
                </span>
                <h2 className="text-xl md:text-2xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                  Why Organizations Build with the <span className="text-rose-500">Devopstrio Cloud Lab</span>
                </h2>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium mb-10">
                  We combine strategy and deep execution to design platforms that scale safely. Our innovation labs deliver measurable outcomes through engineered precision.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-zinc-800/50">
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">250+</p>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-2">Enterprises</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">99.9%</p>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-2">Uptime SLAs</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">24/7</p>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-2">Global Support</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Initiative cards */}
            <div className="space-y-4">
              {whyWorkWithUs.map((item, idx) => {
                const icons = [CheckCircle, Cloud, Search, Workflow, Settings, Activity, Database, Terminal, Shield, Network, Cpu, Layers];
                const Icon = icons[idx % icons.length];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex gap-5 items-start bg-zinc-950/40 border border-white/[0.03] rounded-2xl p-6 hover:border-rose-500/30 transition-all duration-300 group hover:bg-zinc-900/40"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-rose-500/10 group-hover:border-rose-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-rose-400 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold tracking-wide text-sm md:text-base mb-1.5">{item.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

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
