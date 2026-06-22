"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Settings,
  Workflow,
  Terminal,
  Activity,
  Shield,
  ChevronDown,
  ChevronRight,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  GitBranch,
  Search,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function DevOpsInnovationLabPage() {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Hero highlights
  const heroHighlights = [
    "Platform Engineering",
    "DevOps",
    "GitOps",
    "Kubernetes",
    "Infrastructure as Code",
    "Cloud Automation",
    "Site Reliability Engineering",
    "Observability"
  ];

  // Hero metrics
  const heroMetrics = [
    { value: "500+", label: "Deployments" },
    { value: "99.99%", label: "Platform Reliability" },
    { value: "50+", label: "Automation Assets" },
    { value: "24/7", label: "Platform Operations" }
  ];

  // Platform Engineering Domains
  const platformDomains = [
    {
      title: "Platform Engineering",
      desc: "Constructing Internal Developer Platforms (IDPs) and self-service portals to reduce cognitive load and streamline system provisioning.",
      icon: <Layers className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Cloud Automation",
      desc: "Automating cloud infrastructure boundaries across multi-subscription environments with unified configuration sets.",
      icon: <Cpu className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Infrastructure as Code",
      desc: "Writing modular, version-controlled Terraform, OpenTofu, and Pulumi blueprints to standardize environment baselines.",
      icon: <Terminal className="w-6 h-6 text-rose-500" />
    },
    {
      title: "GitOps",
      desc: "Deploying declarative states using Git as the single source of truth, automated via ArgoCD or Flux engines.",
      icon: <GitBranch className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Observability",
      desc: "Setting up telemetry pipelines, synthetic alert systems, and unified dashboards using Prometheus, Grafana, and Datadog.",
      icon: <Activity className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Site Reliability Engineering",
      desc: "Establishing SLO/SLI metrics, incident response templates, failover routing, and chaos engineering architectures.",
      icon: <Settings className="w-6 h-6 text-rose-500" />
    }
  ];

  // Platform Accelerators
  const platformAccelerators = [
    {
      name: "CI/CD Accelerator",
      tagline: "High-Speed Delivery",
      desc: "Pre-configured enterprise pipelines for GitHub Actions and GitLab CI, containing compliance and lint gates."
    },
    {
      name: "GitOps Framework",
      tagline: "Declarative Sync",
      desc: "ArgoCD blueprint templates with multi-tenant config capabilities to manage application clusters automatically."
    },
    {
      name: "Terraform Factory",
      tagline: "Modular Provisioning",
      desc: "Tested IaC modules for landing zones, secure networking, private databases, and private endpoint links."
    },
    {
      name: "Kubernetes Platform",
      tagline: "Cluster Blueprints",
      desc: "Secure cluster templates featuring ingress setups, cert-manager rules, auto-scaler limits, and security boundaries."
    },
    {
      name: "Observability Stack",
      tagline: "Instant Visibility",
      desc: "Deployable infrastructure dashboards, custom alerting models, and application log parsers."
    },
    {
      name: "Developer Portal",
      tagline: "Self-Service Hub",
      desc: "Ready-to-use Backstage template catalogs to bootstrap new microservice repositories with built-in pipelines."
    }
  ];

  // Intelligent Operations
  const intelligentOps = [
    { title: "Self-Service Deployments", desc: "Allowing engineering squads to spin up dev databases and web servers in minutes via automated forms." },
    { title: "Release Automation", desc: "Executing canary rollouts, traffic splitting, and progressive rollouts via service mesh tools." },
    { title: "Infrastructure Automation", desc: "Enforcing auto-healing configuration loops that fix system drifts without administrator alerts." },
    { title: "Incident Automation", desc: "Triggering diagnostic workflows, memory dump creation, and alert routing instantly upon system errors." },
    { title: "AI Operations (AIOps)", desc: "Parsing log events via custom anomaly rules to detect slow database queries and memory leaks." },
    { title: "Policy Automation", desc: "Verifying resource compliance labels and cloud firewalls automatically at build time." }
  ];

  // Delivery & Reliability Framework
  const reliabilityFramework = [
    { phase: "Plan", title: "DevSecOps Integration", desc: "Mapping service dependencies, planning SLI parameters, and injecting safety checks." },
    { phase: "Build", title: "Site Reliability Engineering", desc: "Creating build containers, standardizing build linting, and running vulnerability scans." },
    { phase: "Deploy", title: "Compliance Controls", desc: "Syncing states to container clusters automatically with GitOps engines." },
    { phase: "Observe", title: "Resilience Engineering", desc: "Monitoring traffic flows, querying log files, auditing drift alerts, and tuning auto-scaling." }
  ];

  // Innovation Impact
  const impactStats = [
    { value: "70%", label: "Faster Releases" },
    { value: "90%", label: "Automated Deployments" },
    { value: "60%", label: "Reduced MTTR" },
    { value: "99.99%", label: "Uptime" }
  ];

  const successStories = [
    {
      title: "Enterprise CI/CD Transformation",
      challenge: "An enterprise suffered from manual deployments, long QA delays, and configuration drift across datacenters.",
      solution: "Standardized delivery pipelines on GitHub Actions and constructed a unified configuration registry.",
      result: "70% faster releases and 90% automated deployments with zero administrative errors."
    },
    {
      title: "GitOps Adoption Program",
      challenge: "A financial app had inconsistent container configurations, leading to production crashes during spikes.",
      solution: "Implemented ArgoCD to sync EKS cluster configurations with Git source branches.",
      result: "100% auditable deployment history, instant environment rollback capability, and 60% reduced MTTR."
    },
    {
      title: "Kubernetes Modernization",
      challenge: "Siloed developer teams struggled to spin up test databases, resulting in delays.",
      solution: "Deployed a self-service Backstage developer portal connecting Terraform backend runtimes.",
      result: "Test environment setup time reduced from 5 days to 10 minutes with compliant credentials."
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "What is the core mission of the DevOps Innovation Lab?",
      a: "The lab focuses on building custom developer platforms, GitOps-driven delivery pipelines, automated infrastructure-as-code factories, and intelligent observability setups."
    },
    {
      q: "What is Platform Engineering and why is it replacing traditional DevOps?",
      a: "Platform engineering packages infrastructure tools into an Internal Developer Platform (IDP), enabling self-service provisioning and reducing cognitive load on product developers."
    },
    {
      q: "What platforms do you support for CI/CD automation?",
      a: "We standardize on enterprise solutions including GitHub Actions, GitLab CI, Azure Pipelines, and Jenkins, writing modular, reusable pipeline templates."
    },
    {
      q: "How do you implement GitOps for Kubernetes?",
      a: "We utilize ArgoCD and Flux to synchronize Kubernetes cluster states directly with declarative git repositories, preventing manual configuration drift."
    },
    {
      q: "What infrastructure as code (IaC) tools do you standardize on?",
      a: "We write modular and tested Terraform, OpenTofu, and Pulumi packages to provision multi-cloud environments consistently."
    },
    {
      q: "How does the lab incorporate AI into operations (AIOps)?",
      a: "We deploy automated log parsing models, anomaly detection rules, intelligent alert routing, and auto-remediation scripts to preempt system incidents."
    },
    {
      q: "What is Site Reliability Engineering (SRE) and how do you implement it?",
      a: "We define Service Level Indicators (SLIs) and Service Level Objectives (SLOs), configure telemetry tracking, and run chaos engineering experiments to verify reliability."
    },
    {
      q: "How do you secure the software supply chain (DevSecOps)?",
      a: "We integrate automated container vulnerability scans, static code checks (SAST/DAST), and secrets checking steps directly into the CI/CD build loops."
    },
    {
      q: "What developer portals does the lab deploy?",
      a: "We build developer self-service portals using Backstage, creating unified hubs for documentation, service catalogs, and automated project templates."
    },
    {
      q: "How can we start a DevOps platform evaluation?",
      a: "You can book an initial discovery session where our SREs review your deployment cycles, audit pipeline bottlenecks, and draft an IDP architecture."
    }
  ];

  // Related connections
  const relatedConnections = [
    { name: "Cloud Innovation Lab", desc: "Cloud-native platform engineering, Landing Zones, and multi-cloud architectures.", href: "/ecosystem/innovation-labs/cloud-lab" },
    { name: "AI Innovation Lab", desc: "Custom-trained models, agentic workflows, and secure cognitive workspaces.", href: "/ecosystem/innovation-labs/ai-lab" },
    { name: "Microsoft Alliance", desc: "Azure cloud architectures, Fabric integration, and security systems.", href: "/ecosystem/partnerships/microsoft" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">

        {/* Background Gradients & Grids */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center">

          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Workflow className="w-3.5 h-3.5" />
              DevOps Innovation Lab
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              Engineering Autonomous Delivery Platforms <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
                for Modern Enterprises
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-10">
              Accelerating software delivery through developer platforms, cloud automation, GitOps workflows, observability pipelines, and intelligent site reliability operations.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk To Platform Engineers
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Start DevOps Assessment
            </Link>
          </Reveal>

          {/* Pillars */}
          <Reveal delay={0.4} className="flex flex-wrap justify-center gap-3 max-w-4xl select-none mb-16">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                {item}
              </span>
            ))}
          </Reveal>

          {/* Metrics */}
          <Reveal delay={0.5} className="w-full max-w-5xl border-t border-zinc-900/60 pt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 select-none">
              {heroMetrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-mono font-black text-rose-500 mb-1">{metric.value}</div>
                  <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">{metric.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* 2. PLATFORM ENGINEERING DOMAINS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              RESEARCH & INNOVATION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Platform Engineering <span className="text-rose-500">Domains</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Unifying container networks, declarative code registries, and SRE operations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformDomains.map((domain, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[200px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">{domain.title}</h4>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {domain.icon}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODERN DEVOPS PLATFORM ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.01] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ARCHITECTURE DESIGN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Modern DevOps <span className="text-rose-500">Platform Architecture</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Standardized flow paths bridging product developers with secure production clusters.
            </p>
          </Reveal>

          {/* Technical Stack Architecture Diagram */}
          <div className="max-w-4xl mx-auto bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/[0.02] rounded-full blur-xl pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10 font-mono">

              {/* Layer 1 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">01. Developers</span>
                <span className="text-xs text-zinc-400 font-bold">Product Engineers, QA Teams, Security Engineers</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 2 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">02. Developer Portal</span>
                <span className="text-xs text-zinc-400 font-bold">Self-Service IDP (Backstage), API Catalogs, Service Registries</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 3 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">03. CI/CD Platform</span>
                <span className="text-xs text-zinc-400 font-bold">GitHub Actions, GitLab CI, Vulnerability Scans, Package Hubs</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 4 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">04. GitOps Layer</span>
                <span className="text-xs text-zinc-400 font-bold">ArgoCD Configuration Sync, Helm Charts, Cluster Posture Controllers</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 5 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">05. Cloud Infrastructure</span>
                <span className="text-xs text-zinc-400 font-bold">Multi-Cloud Compute (AWS EKS, Azure AKS), networks, databases</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 6 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">06. Monitoring & Security</span>
                <span className="text-xs text-zinc-400 font-bold">Prometheus Telemetry, Datadog tracing, Audit trails, Vault keys</span>
              </div>

            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 select-none mt-12">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Technology Layer:</span>
            {["GitHub Actions", "Azure DevOps", "Terraform", "Kubernetes", "ArgoCD", "Docker"].map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PLATFORM ACCELERATORS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              DIFFERENTIATORS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Platform <span className="text-rose-500">Accelerators</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformAccelerators.map((sol, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">
                      {sol.tagline}
                    </span>
                    <span className="text-xs font-mono text-zinc-700">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                    {sol.name}
                  </h3>

                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTELLIGENT OPERATIONS & AUTOMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              INTELLIGENT RUNTIMES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Intelligent Operations <span className="text-rose-500">& Automation</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intelligentOps.map((item, idx) => (
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

      {/* 6. DELIVERY & RELIABILITY FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              RELIABILITY PATHWAYS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Delivery & Reliability <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {reliabilityFramework.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group overflow-hidden"
              >
                <div className="text-[28px] font-black text-rose-500/15 font-mono tracking-tighter leading-none mb-3">
                  0{idx + 1}
                </div>
                <span className="text-[9px] font-mono text-rose-500 uppercase tracking-widest block mb-1 font-bold">
                  {step.phase}
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{step.title}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 select-none mt-12">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Methodology:</span>
            {["DevSecOps", "SRE", "Compliance", "Resilience Engineering"].map((srv) => (
              <span key={srv} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {srv}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INNOVATION IMPACT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  METRICS & CASES
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                  DevOps Lab <span className="text-rose-500">Impact</span>
                </h2>
                <p className="text-zinc-350 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
                  Empowering development squads to deploy faster while maintaining extreme compliance boundaries.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-6 select-none">
                {impactStats.map((item, idx) => (
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
                    DevOps Case Study
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

      {/* 8. FAQ SECTION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left sticky top-28">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  LAB QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our DevOps platforms, CI/CD templates, and SRE operations.
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

      {/* RELATED CONNECTIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related Ecosystem <span className="text-rose-500">Connections</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedConnections.map((partner) => (
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
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
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
              Build High-Performance <span className="text-rose-500">Engineering Platforms</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Partner with our DevOps Innovation Lab to design, build, and run self-service developer frameworks and resilient SRE operations.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk To Platform Engineers
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Start DevOps Assessment
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
