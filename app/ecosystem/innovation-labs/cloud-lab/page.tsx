"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Cloud,
  Cpu,
  Database,
  Network,
  Shield,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Activity,
  Terminal,
  CheckCircle2,
  Settings,
  Workflow,
  Zap,
  Globe,
  Gauge
} from "lucide-react";
import Link from "next/link";

export default function CloudInnovationLabPage() {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Hero highlights
  const heroHighlights = [
    "Cloud-Native Engineering",
    "Platform Engineering",
    "Kubernetes",
    "Multi-Cloud",
    "AI Infrastructure",
    "FinOps",
    "DevOps Automation",
    "Cloud Security"
  ];

  // Hero metrics
  const heroMetrics = [
    { value: "100+", label: "Cloud Deployments" },
    { value: "20+", label: "Platform Accelerators" },
    { value: "99.99%", label: "Availability" },
    { value: "Multi-Cloud", label: "Expertise" }
  ];

  // Innovation Domains
  const innovationDomains = [
    {
      title: "Cloud-Native Engineering",
      desc: "Architecting microservices architectures, event-driven state pipelines, and container-based application runtimes.",
      icon: <Cloud className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Platform Engineering",
      desc: "Creating Internal Developer Platforms (IDPs), custom self-service infrastructure portals, and golden path templates.",
      icon: <Settings className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Multi-Cloud Architecture",
      desc: "Unifying operations across AWS, Azure, Google Cloud, and Oracle Cloud with centralized security and networking policies.",
      icon: <Network className="w-6 h-6 text-rose-500" />
    },
    {
      title: "AI Infrastructure",
      desc: "Provisioning high-performance GPU instances, orchestrating vector storage boundaries, and setting up secure model endpoints.",
      icon: <Cpu className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Serverless Computing",
      desc: "Designing scale-to-zero compute runtimes that run asynchronously, eliminating redundant idle instance hosting bills.",
      icon: <Zap className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Edge & Hybrid Cloud",
      desc: "Deploying cloud topologies inside local datacenters using AWS Outposts, Azure Arc, and custom local hardware nodes.",
      icon: <Globe className="w-6 h-6 text-rose-500" />
    }
  ];

  // Cloud Solutions Portfolio
  const solutionsPortfolio = [
    {
      name: "Cloud Landing Zones",
      tagline: "Enterprise Security Guardrails",
      desc: "Configuring multi-account structures, unified IAM privileges, networking topologies, and centralized audit logging."
    },
    {
      name: "Platform Engineering",
      tagline: "Developer Self-Service",
      desc: "Building Developer Portals using Backstage to automate environment spin-up and enforce infrastructure standards."
    },
    {
      name: "DevOps Automation",
      tagline: "Continuous Delivery",
      desc: "Standardizing reusable CI/CD pipelines, container build scripts, and GitOps deployments with ArgoCD."
    },
    {
      name: "Cloud Security",
      tagline: "Zero-Trust Architecture",
      desc: "Implementing uniform network firewalls, secrets vaults, database encryptions, and security posture monitoring."
    },
    {
      name: "AI Infrastructure",
      tagline: "High-Performance Compute",
      desc: "Configuring optimized GPU nodes, model registry networks, and low-latency storage for machine learning teams."
    },
    {
      name: "Managed Cloud Operations",
      tagline: "24/7 Continuous Assurance",
      desc: "Deploying automated telemetry tracking, cluster health checkers, database backups, and emergency patch plans."
    }
  ];

  // Cloud Use Cases
  const useCases = [
    { title: "Application Modernization", desc: "Refactoring legacy monoliths into lightweight, secure microservices ready for cloud execution." },
    { title: "Cloud Migration", desc: "Shifting workloads from physical hosting nodes to AWS, Azure, and Google Cloud with zero data loss." },
    { title: "Multi-Cloud Management", desc: "Establishing single-pane-of-glass dashboards to control server configurations across providers." },
    { title: "AI Platform Deployment", desc: "Building specialized hosting systems for vector databases, fine-tuning scripts, and model web APIs." },
    { title: "Disaster Recovery", desc: "Automating real-time database backups, remote regional replicas, and instant DNS failover drills." },
    { title: "Cloud Cost Optimization", desc: "Applying FinOps tactics to identify unused resources, schedule runtimes, and purchase saving plans." }
  ];

  const targetIndustries = [
    { name: "Banking", desc: "Securing financial ledgers, auditing compliance requirements, and detecting fraud transactions." },
    { name: "Healthcare", desc: "Handling medical telemetry securely, hosting private databases, and supporting clinics." },
    { name: "Retail", desc: "Powering transaction gateways, managing digital inventories, and serving recommendations." },
    { name: "Manufacturing", desc: "Monitoring machinery telemetry parameters, tracking assembly lines, and predicting wear." },
    { name: "Technology", desc: "Speeding up deployment rates, reducing staging hosting expenses, and managing systems." },
    { name: "Public Sector", desc: "Modernizing government portals, deploying secure GovCloud enclaves, and saving citizen database bills." }
  ];

  // Delivery Framework
  const deliveryFramework = [
    { phase: "Assess", title: "Cloud Strategy", desc: "Auditing application dependencies, estimating hosting bills, and defining modernization goals." },
    { phase: "Architect", title: "Migration Factory", desc: "Creating secure multi-subscription Landing Zones and writing modular Terraform scripts." },
    { phase: "Migrate", title: "Platform Operations", desc: "Shifting systems using automated migration chains and testing database consistency." },
    { phase: "Modernize", title: "FinOps Optimization", desc: "Refactoring application code for serverless/containers and configuring auto-scaling boundaries." }
  ];

  // Lab Impact
  const successStories = [
    {
      title: "Cloud Migration Program",
      challenge: "A financial organization struggled with expensive data center maintenance bills and slow staging setup processes.",
      solution: "Migrated infrastructure to AWS and Azure using Landing Zone architectures and Terraform automation.",
      result: "40% lower infrastructure costs and instant multi-region disaster recovery replication systems."
    },
    {
      title: "AI Infrastructure Deployment",
      challenge: "A retail client wanted to fine-tune AI models but lacked high-performance compute clusters and container scaling.",
      solution: "Constructed dedicated GPU scheduling fabrics on GCP Vertex AI using Google Kubernetes Engine.",
      result: "50% faster model training cycles and automated auto-scaling boundaries that shut down idle nodes."
    },
    {
      title: "Enterprise Platform Modernization",
      challenge: "An e-commerce partner suffered from website lag during sales spikes due to monolithic database queries.",
      solution: "Refactored codebases to run on Google Kubernetes Engine container pods with Cloud Run scaling.",
      result: "99.99% platform uptime and 5x faster load speeds under peak shopping traffic spikes."
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "What is the main objective of the Cloud Innovation Lab?",
      a: "The lab focuses on building custom cloud-native platforms, high-performance container environments, automated platform engineering templates, and hybrid-cloud/multi-cloud orchestration fabrics."
    },
    {
      q: "What cloud providers do you support?",
      a: "We support Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), and Oracle Cloud Infrastructure (OCI), specializing in secure multi-cloud architectures."
    },
    {
      q: "How does platform engineering differ from standard DevOps?",
      a: "Platform engineering builds Internal Developer Platforms (IDPs) that provide self-service portals, templates, and pre-packaged infrastructure components to speed up developer workflows."
    },
    {
      q: "What is your experience with Kubernetes container orchestration?",
      a: "We run multi-cluster networks utilizing Azure AKS, AWS EKS, Google GKE, and on-premises Kubernetes platforms, configuring secure service meshes and autoscaling."
    },
    {
      q: "How do you implement FinOps and optimize cloud costs?",
      a: "We deploy real-time monitoring tools, configure serverless scale-to-zero limits, schedule VM runtimes, optimize databases, and configure automated billing alerts."
    },
    {
      q: "What is a Cloud Landing Zone?",
      a: "A landing zone is a pre-configured multi-account cloud environment setting up security policies, identity management, network topologies, and log structures."
    },
    {
      q: "How does the Cloud Lab support AI infrastructure requirements?",
      a: "We construct high-speed GPU networking fabrics, configure model registry storage, set up Kubernetes cluster scaling for LLM training, and implement secure model APIs."
    },
    {
      q: "What DevOps automation frameworks do you standardize on?",
      a: "We write modular IaC using Terraform, OpenTofu, and Pulumi, and automate deployments using GitOps engines like ArgoCD and custom GitHub Actions pipelines."
    },
    {
      q: "Do you support hybrid cloud migrations?",
      a: "Yes. We help organizations bridge local data centers with public clouds using AWS Outposts, Azure Arc, Google Anthos, and secure VPN/ExpressRoute tunnels."
    },
    {
      q: "How can we initiate a cloud platform modernization program with Devopstrio?",
      a: "You can schedule an architecture scoping workshop where our cloud architects audit your applications, map cloud-native paths, and deliver a modular roadmap."
    }
  ];

  // Related connections
  const relatedConnections = [
    { name: "AI Innovation Lab", desc: "Custom-trained models, agentic workflows, and secure cognitive workspaces.", href: "/ecosystem/innovation-labs/ai-lab" },
    { name: "Microsoft Alliance", desc: "Azure cloud architectures, Fabric integration, and security systems.", href: "/ecosystem/partnerships/microsoft" },
    { name: "AWS Strategic Alliance", desc: "Cloud-native modernization, serverless architectures, and Bedrock integrations.", href: "/ecosystem/partnerships/aws" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/ecosystem/sub-page-hero/ecosystem_Innovation_labs/cloud.png"
            alt="Cloud Innovation Lab background"
            className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Decorative Grid */}
        

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Cloud className="w-3.5 h-3.5" />
              Cloud Innovation Lab
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              Building Cloud-Native Platforms, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
                AI Infrastructure & Modern Enterprise Systems
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-10">
              Accelerating enterprise transformation through cloud-native architectures, platform engineering templates, GPU computing infrastructure, and multi-cloud innovation.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Start Cloud Innovation
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk To Cloud Architects
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. CLOUD INNOVATION DOMAINS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CORE DOMAINS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Cloud Innovation & <span className="text-rose-500">Platform Engineering Domains</span>
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-medium">
              Engineering secure, automated platforms for multi-cloud and hybrid environments.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationDomains.map((domain, idx) => (
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

      {/* 3. CLOUD PLATFORM ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.01] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PLATFORM BLUEPRINT
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Cloud Platform <span className="text-rose-500">Architecture</span>
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-medium">
              A robust, unified model for multi-cloud governance, scalability, and security posture.
            </p>
          </Reveal>

          {/* Technical Stack Architecture Diagram */}
          <div className="max-w-4xl mx-auto bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/[0.02] rounded-full blur-xl pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10 font-mono">

              {/* Layer 1 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">01. Applications</span>
                <span className="text-xs text-zinc-400 font-bold">Frontend Applications, APIs, Mobile Portals, Web Clients</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 2 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">02. Platform Services</span>
                <span className="text-xs text-zinc-400 font-bold">Service Meshes, Ingress Gateways, Secrets Vaults, Databases</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 3 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">03. Containers & K8s</span>
                <span className="text-xs text-zinc-400 font-bold">Kubernetes Clusters, Pod Autoscale Policies, Container Registries</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 4 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">04. Cloud Infrastructure</span>
                <span className="text-xs text-zinc-400 font-bold">Virtual Private Networks, Compute Clusters, Storage Buckets</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 5 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">05. Observability & Security</span>
                <span className="text-xs text-zinc-400 font-bold">CloudWatch/Prometheus telemetry, SIEM logging, Audit trails</span>
              </div>

            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 select-none mt-12">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Technology Layer:</span>
            {["Azure", "AWS", "Google Cloud", "Oracle Cloud", "Kubernetes", "Docker"].map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CLOUD SOLUTIONS PORTFOLIO */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Cloud Solutions <span className="text-rose-500">Portfolio</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsPortfolio.map((sol, idx) => (
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

      {/* 5. CLOUD INNOVATION USE CASES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              USE CASES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Cloud Innovation <span className="text-rose-500">Use Cases & Industries</span>
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-medium">
              Proven architectures mapped across major business sectors.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Column Left: Use Cases */}
            <div className="p-8 bg-zinc-950/30 border border-zinc-900/80 rounded-3xl">
              <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-6 font-bold">
                OPERATIONAL USE CASES
              </span>
              <div className="flex flex-col gap-6">
                {useCases.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start pb-6 border-b border-zinc-900/40 last:border-0 last:pb-0">
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 font-mono text-[10px] font-bold flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column Right: Industries */}
            <div className="p-8 bg-zinc-950/30 border border-zinc-900/80 rounded-3xl">
              <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-6 font-bold">
                INDUSTRY FOCUS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {targetIndustries.map((ind, idx) => (
                  <div key={idx} className="p-5 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/10 rounded-2xl transition-colors duration-300">
                    <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      {ind.name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed font-bold">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CLOUD DELIVERY FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DELIVERY METHODOLOGY
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Cloud Delivery <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {deliveryFramework.map((step, idx) => (
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
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Capabilities:</span>
            {["Cloud Strategy", "Migration Factory", "Platform Operations", "FinOps Optimization"].map((srv) => (
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
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  METRICS & CASES
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
                  Cloud Lab <span className="text-rose-500">Impact</span>
                </h2>
                <p className="text-zinc-350 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
                  Proven acceleration rates and hosting reductions validated across our multi-cloud deployments.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 select-none">
                {[
                  { value: "50%", label: "Faster Deployments" },
                  { value: "40%", label: "Lower Infrastructure Costs" },
                  { value: "99.99%", label: "Platform Uptime" },
                  { value: "24x7", label: "Managed Operations" }
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
                    Cloud Case Study
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
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  LAB QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our cloud platform engineering, Kubernetes networks, and FinOps audits.
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
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
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              GET STARTED
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Build the Next Generation of <span className="text-rose-500">Cloud Platforms</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Partner with our Cloud Innovation Lab to modernize, automate, and scale your global digital infrastructure.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Start Cloud Innovation
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk To Cloud Architects
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
