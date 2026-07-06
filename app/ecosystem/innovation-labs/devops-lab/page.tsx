"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Settings,
  Workflow,
  Terminal,
  Activity,
  Shield,
  ChevronRight,
  Cpu,
  Layers,
  CheckCircle,
  GitBranch,
  Lock,
  Search,
  Sparkles,
  Globe
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

export default function DevOpsInnovationLabPage() {
  const [activeTab, setActiveTab] = useState<string>("Delivery Acceleration");

  // Hero metrics
  const heroMetrics = [
    { value: "500+", label: "Deployments" },
    { value: "99.99%", label: "Platform Reliability" },
    { value: "50+", label: "Automation Assets" },
    { value: "24/7", label: "Platform Operations" }
  ];

  // 2) Mini overview cards
  const miniMissionCards = [
    {
      title: "Pipeline Acceleration",
      desc: "Improving build, test, release, and deployment speed through automation and workflow design."
    },
    {
      title: "Platform Standardization",
      desc: "Creating reusable internal platforms, templates, and environments that simplify engineering operations."
    },
    {
      title: "Reliability & Visibility",
      desc: "Embedding monitoring, alerting, observability, and incident workflows into the software lifecycle."
    },
    {
      title: "Security in the Delivery Flow",
      desc: "Integrating policy checks, secrets controls, vulnerability scanning, and governance into DevOps pipelines."
    }
  ];

  // 3) Core Areas of DevOps Innovation
  const innovationAreas: CoreArea[] = [
    {
      title: "CI/CD Pipeline Engineering",
      desc: "Design automated build, test, release, and deployment pipelines that reduce manual effort and improve release consistency.",
      icon: <Workflow className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Platform Engineering",
      desc: "Build internal developer platforms, reusable engineering templates, golden paths, and self-service environments for delivery teams.",
      icon: <Layers className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Infrastructure as Code",
      desc: "Standardize infrastructure provisioning and environment management through reusable, version-controlled automation.",
      icon: <Terminal className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Kubernetes & Container Delivery",
      desc: "Support containerized workloads, cluster deployment workflows, workload packaging, and scalable runtime operations.",
      icon: <Cpu className="w-5 h-5 text-rose-500" />
    },
    {
      title: "DevSecOps & Compliance Automation",
      desc: "Embed security checks, secrets handling, policy validation, dependency scanning, and compliance controls directly into delivery workflows.",
      icon: <Shield className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Site Reliability Engineering",
      desc: "Improve service reliability through SLOs, incident workflows, proactive monitoring, automation, and operational readiness patterns.",
      icon: <Settings className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Observability & Monitoring",
      desc: "Create visibility across applications, pipelines, infrastructure, and services using logs, metrics, traces, and real-time alerts.",
      icon: <Activity className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Release Governance & Environment Automation",
      desc: "Improve release confidence through deployment approvals, change control workflows, staging automation, rollback patterns, and release visibility.",
      icon: <GitBranch className="w-5 h-5 text-rose-500" />
    }
  ];

  // 4) Lifecycle Framework
  const lifecycleTimeline: TimelineStep[] = [
    {
      num: "01",
      title: "Assess",
      desc: "Evaluate current delivery pipelines, environment bottlenecks, release delays, reliability gaps, and operational pain points."
    },
    {
      num: "02",
      title: "Design",
      desc: "Define the target DevOps operating model, deployment workflow, platform standards, security controls, and observability strategy."
    },
    {
      num: "03",
      title: "Prototype",
      desc: "Build pilot pipelines, IaC modules, environment templates, release patterns, and platform workflows in controlled stages."
    },
    {
      num: "04",
      title: "Automate",
      desc: "Implement CI/CD, infrastructure provisioning, testing automation, deployment workflows, and security validation pipelines."
    },
    {
      num: "05",
      title: "Operate",
      desc: "Deploy production-ready DevOps foundations with observability, release governance, incident readiness, and support processes."
    },
    {
      num: "06",
      title: "Optimize",
      desc: "Continuously improve build speed, deployment frequency, failure recovery, reliability, and developer experience through telemetry and iteration."
    }
  ];

  // 5) Solutions Built in the Lab
  const solutionBlocks: SolutionBlock[] = [
    {
      title: "Enterprise CI/CD Pipelines",
      desc: "Automated build, test, approval, release, and deployment workflows tailored to modern engineering teams."
    },
    {
      title: "Internal Developer Platforms",
      desc: "Reusable platform foundations, self-service environments, shared templates, and standardized deployment paths for development teams."
    },
    {
      title: "Infrastructure Automation Frameworks",
      desc: "IaC modules, environment provisioning workflows, cloud infrastructure templates, and automated configuration patterns."
    },
    {
      title: "Kubernetes Delivery Platforms",
      desc: "Container build pipelines, deployment workflows, cluster release processes, and runtime management foundations."
    },
    {
      title: "DevSecOps Guardrails",
      desc: "Pipeline-integrated security scanning, secrets policies, artifact validation, access controls, and governance automation."
    },
    {
      title: "Observability & Reliability Foundations",
      desc: "Logging, monitoring, tracing, alerting, incident response, and service health visibility for engineering operations."
    },
    {
      title: "Release Governance & Change Automation",
      desc: "Approval flows, release coordination, rollback procedures, environment promotion logic, and deployment control patterns."
    },
    {
      title: "SRE Enablement Models",
      desc: "Reliability engineering practices, SLO frameworks, operational runbooks, alerting strategies, and failure response workflows."
    }
  ];

  // 6) Architecture layers
  const archLayers: ArchLayer[] = [
    {
      num: "LAYER 1",
      name: "Source & Planning Layer",
      desc: "Git repositories • work items / tickets • release branches • change requests • backlog & sprint systems"
    },
    {
      num: "LAYER 2",
      name: "Build & Validation Layer",
      desc: "build pipelines • unit tests • linting • artifact creation • dependency validation • code quality checks"
    },
    {
      num: "LAYER 3",
      name: "Security & Policy Layer",
      desc: "secrets scanning • SAST / dependency checks • policy gates • container image validation • compliance rules"
    },
    {
      num: "LAYER 4",
      name: "Deployment & Environment Layer",
      desc: "CI/CD releases • IaC provisioning • Kubernetes deployment • environment promotion • config management • rollback workflows"
    },
    {
      num: "LAYER 5",
      name: "Runtime & Observability Layer",
      desc: "app monitoring • logs • metrics • traces • health checks • release telemetry • alerting"
    },
    {
      num: "LAYER 6",
      name: "Reliability & Operations Layer",
      desc: "incident workflows • SLO/SLA monitoring • runbooks • change governance • failure response • performance tuning • optimization loops"
    }
  ];

  const techChips = [
    "GitHub Actions / Azure DevOps / GitLab CI",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Helm",
    "ArgoCD / GitOps style delivery",
    "Prometheus / Grafana",
    "ELK / OpenSearch style logging",
    "Sonar / scanning tools",
    "secrets / policy tooling"
  ];

  // 7) Industry / Workload Use Cases
  const industryUseCases: IndustryUseCase[] = [
    {
      name: "Delivery Acceleration",
      items: [
        "slow release pipeline modernization",
        "multi-stage CI/CD implementation",
        "deployment automation for enterprise apps",
        "release consistency across teams"
      ]
    },
    {
      name: "Platform Engineering",
      items: [
        "self-service developer environments",
        "golden templates for application teams",
        "reusable deployment blueprints",
        "internal platform standardization"
      ]
    },
    {
      name: "Infrastructure Automation",
      items: [
        "automated environment provisioning",
        "cloud infrastructure pipelines",
        "configuration standardization",
        "infrastructure drift reduction"
      ]
    },
    {
      name: "DevSecOps",
      items: [
        "secure build pipelines",
        "dependency and artifact scanning",
        "secrets governance",
        "policy-as-code enforcement"
      ]
    },
    {
      name: "Reliability & SRE",
      items: [
        "observability rollout",
        "incident response automation",
        "SLO / alerting implementation",
        "high-availability delivery operations"
      ]
    },
    {
      name: "Kubernetes & Container Delivery",
      items: [
        "cluster deployment workflows",
        "container release pipelines",
        "GitOps environment promotion",
        "application rollout and rollback strategies"
      ]
    }
  ];

  // 8) Outcomes
  const labDeliverables: Deliverable[] = [
    { title: "Faster build and deployment cycles" },
    { title: "Reduced manual release overhead" },
    { title: "Better release consistency across environments" },
    { title: "Improved platform reliability and observability" },
    { title: "Stronger delivery security and compliance posture" },
    { title: "Faster issue detection and rollback readiness" },
    { title: "Better developer productivity" },
    { title: "More resilient software operations" }
  ];

  const stats = [
    { value: "Faster", label: "deployments" },
    { value: "Lower", label: "change failure rates" },
    { value: "Shorter", label: "recovery times" },
    { value: "24×7", label: "operational readiness" },
    { value: "Standardized", label: "platform workflows" },
    { value: "Improved", label: "environment consistency" }
  ];

  // 9) Why work with us
  const whyWorkWithUs: WhyChoose[] = [
    {
      title: "Delivery Engineering, Not Just Tool Setup",
      desc: "We don’t just install CI/CD tools — we redesign delivery systems to improve speed, quality, reliability, and operational maturity."
    },
    {
      title: "Platform Thinking from Day One",
      desc: "We focus on reusable platforms, engineering standards, and scalable operating models that reduce long-term complexity."
    },
    {
      title: "Security Embedded into the Workflow",
      desc: "Secrets, policies, scanning, and governance are integrated into the delivery lifecycle rather than treated as a separate afterthought."
    },
    {
      title: "Built for Real Engineering Teams",
      desc: "Our DevOps models are designed to support developers, QA, operations, and security teams in real production environments."
    },
    {
      title: "Reliability as a Core Design Principle",
      desc: "Monitoring, observability, rollback readiness, and operational resilience are built into the architecture from the start."
    },
    {
      title: "Continuous Improvement Beyond Go-Live",
      desc: "We help teams keep improving deployment speed, stability, and developer experience after the initial platform rollout."
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
      name: "Cloud Innovation Lab",
      desc: "Enterprise landing zones, platform engineering, and hybrid cloud migrations.",
      href: "/ecosystem/innovation-labs/cloud-lab"
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
        badge="DevOps Innovation Lab"
        title={
          <>
            Where Delivery Engineering Becomes <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Competitive Advantage
            </span>
          </>
        }
        subtitle="Accelerate code delivery, simplify environment management, and build highly reliable internal platforms utilizing automated pipelines, IaC, Kubernetes orchestration, and Site Reliability Engineering."
        bgImage="/assets/ecosystem/sub-page-hero/ecosystem_Innovation_labs/devops.png"
        stats={heroMetrics}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "INNOVATION LABS", href: "/ecosystem/innovation-labs" },
          { label: "DEVOPS LAB" },
        ]}
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Book a DevOps Discovery Session
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Our DevOps Team
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
                  Where Delivery Engineering <br />
                  <span className="text-rose-500">Becomes Competitive Advantage</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  The Devopstrio DevOps Innovation Lab is focused on building the systems, workflows, and engineering foundations that help organizations ship software faster, operate more reliably, and scale securely. We combine release automation, platform engineering, observability, Infrastructure as Code, and reliability practices to turn fragmented delivery pipelines into high-performance engineering platforms.
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
              Core Areas of <span className="text-rose-500">DevOps Innovation</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              The primary capability vectors driving modern release automation, container deployments, and SRE excellence.
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

      {/* 4. LIFECYCLE / OPERATING MODEL */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-left max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Operating Framework
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              How the DevOps Lab Transforms <span className="text-rose-500">Delivery Workflows</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              A structured process designed to transition engineering teams to high-velocity, reliable GitOps operations.
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
              DevOps Solutions Built <span className="text-rose-500">Inside the Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Functional automation architectures and platform components built to standardize modern delivery loops.
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
                      <span className="text-[9px] font-mono text-rose-500 font-bold">READY TO DEPLOY</span>
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
              Our DevOps Innovation <span className="text-rose-500">Reference Architecture</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              A comprehensive delivery pipeline blueprint bridging development and operational environments securely.
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
              DevOps Use Cases We Engineer <span className="text-rose-500">Across the Delivery Lifecycle</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Practical engineering solutions mapped to real-world software delivery bottlenecks.
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
                  Outcomes the DevOps Lab <br />
                  <span className="text-rose-500">Helps Deliver</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  Quantifiable improvements in release cycles, operational stability, and developer velocity.
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

      {/* 9. WHY DEVOPSTRIO DEVOPS LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Why Devopstrio
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Why Organizations Build Delivery Excellence with the <span className="text-rose-500">Devopstrio DevOps Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              We focus on reusable platforms, engineering standards, and scalable operating models that reduce long-term complexity.
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
                Ready to modernize how your teams build, ship, and operate software?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Partner with the Devopstrio DevOps Innovation Lab to design faster pipelines, automate infrastructure, strengthen release governance, and build reliable delivery platforms at scale.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
                >
                  Book a DevOps Discovery Session
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Talk to Our DevOps Team
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
