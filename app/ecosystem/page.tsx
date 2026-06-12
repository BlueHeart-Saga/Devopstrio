"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  ChevronRight, 
  Layers, 
  Cpu, 
  Activity, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  Timer, 
  LineChart, 
  Flame, 
  Compass, 
  Workflow
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const ecosystemPillars = [
  {
    slug: "partnerships",
    title: "Strategic Partnerships",
    desc: "Technology alliances with AWS, Microsoft Azure, Google Cloud, and Oracle to build pre-certified integration templates.",
    icon: "🤝"
  },
  {
    slug: "innovation-labs",
    title: "Innovation Labs",
    desc: "Dedicated R&D workspaces prototyping next-gen software systems, autonomous AI agents, and zero-trust networks.",
    icon: "🔬"
  },
  {
    slug: "platforms-solutions",
    title: "Platforms & Solutions",
    desc: "Owned software products, landing zone accelerators, and boilerplate SaaS configurations to reduce build overhead.",
    icon: "💻"
  },
  {
    slug: "technology-stack",
    title: "Technology Stack",
    desc: "Full-stack engineering libraries, database clusters, container setups, and API gateways built for zero latency.",
    icon: "🛠️"
  },
  {
    slug: "global-delivery",
    title: "Global Delivery Network",
    desc: "Sourcing certified architects and SRE leads globally to support continuous follow-the-sun operations.",
    icon: "🌎"
  },
  {
    slug: "engineering-excellence",
    title: "Engineering Excellence",
    desc: "Rigorous coding metrics, automated unit testing frameworks, and GitOps deployments protecting production secrets.",
    icon: "📐"
  },
  {
    slug: "accelerators-frameworks",
    title: "Accelerators & Frameworks",
    desc: "Pre-parameterized Terraform modules, automated backup scripts, and data migration pipelines.",
    icon: "🚀"
  },
  {
    slug: "community-talent-network",
    title: "Community & Talent Network",
    desc: "Managing developer academies, university partnerships, open-source repositories, and leadership mentoring.",
    icon: "👥"
  }
];

const alliances = [
  { name: "Microsoft", path: "/assets/Home-page/partners/Microsoft.svg" },
  { name: "AWS", path: "/assets/Tech-icons/amazon-web-service-logo_svgstack_com_7421780931787.svg" },
  { name: "Google Cloud", path: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" },
  { name: "OpenAI", path: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
  { name: "Oracle", path: "/assets/Tech-icons/oracle-logo_svgstack_com_28991780931429.svg" },
  { name: "ServiceNow", path: "/assets/Home-page/partners/servicenow.svg" }
];

export default function EcosystemLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-black text-white pt-20 pb-16 px-6 border-b border-zinc-900/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.06),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-site mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-zinc-550 mb-8">
            <Link href="/" className="hover:text-rose-500 transition-colors">HOME</Link>
            <ChevronRight size={10} className="text-zinc-700" />
            <span className="text-rose-500 font-bold uppercase">ECOSYSTEM</span>
          </nav>

          <div className="max-w-4xl text-left">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Global Alliance Ecosystem
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6 text-white">
                Co-engineering the <span className="font-semibold text-rose-500">future of cloud</span> operations
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-450 text-xs md:text-sm leading-relaxed font-light max-w-3xl mb-12">
                Devopstrio brings together cloud providers, innovation centers, accelerators, and talent channels into a unified network, providing high-performance, compliant, and cost-effective solutions.
              </p>
            </Reveal>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <Reveal delay={0.15}>
              <div className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-5 hover:border-zinc-800 transition-colors">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">50+</span>
                <span className="block text-[9px] font-mono tracking-wider text-zinc-500 uppercase">Technology Partners</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-5 hover:border-zinc-800 transition-colors">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">30+</span>
                <span className="block text-[9px] font-mono tracking-wider text-zinc-500 uppercase">R&D Innovation Labs</span>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-5 hover:border-zinc-800 transition-colors">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">25+</span>
                <span className="block text-[9px] font-mono tracking-wider text-zinc-500 uppercase">Owned Products & IP</span>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-5 hover:border-zinc-800 transition-colors">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">50k+</span>
                <span className="block text-[9px] font-mono tracking-wider text-zinc-500 uppercase">Community Developers</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Ecosystem Domains Section */}
      <section id="pillars" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Ecosystem Pillars
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Core <span className="font-semibold text-rose-500">ecosystem domains</span>
            </h2>
            <p className="text-zinc-550 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
              Choose an ecosystem pillar to view R&D labs, software platforms, and co-engineered partner channels.
            </p>
          </Reveal>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemPillars.map((pillar, idx) => {
              const href = `/ecosystem/${pillar.slug}`;
              return (
                <Reveal key={pillar.slug} delay={idx * 0.05} className="h-full">
                  <Link
                    href={href}
                    className="group flex flex-col justify-between h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden cursor-pointer"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-4 border-b border-zinc-900/60 pb-3">
                        <span className="text-2xl">{pillar.icon}</span>
                        <span className="w-8 h-8 rounded-full bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-950/20 group-hover:border-rose-500/20 transition-all duration-300">
                          <ArrowUpRight size={13} className="stroke-[2.5]" />
                        </span>
                      </div>

                      <h3 className="text-xs font-semibold text-zinc-100 group-hover:text-white transition-colors mb-2">
                        {pillar.title}
                      </h3>

                      <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="border-t border-zinc-900/60 pt-3 mt-auto">
                      <span className="text-[9px] text-rose-500 font-semibold group-hover:translate-x-1 transition-transform duration-250 inline-flex items-center gap-1">
                        Explore Domain <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Ecosystem Architecture Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Ecosystem Topology
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Connected alliance <span className="font-semibold text-rose-500">dataflow & layers</span>
            </h2>
            <p className="text-zinc-550 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
              How our technology partners, accelerators, and R&D labs collaborate to deploy workloads.
            </p>
          </Reveal>

          {/* Interactive Topology Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Horizontal Line Connector */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-rose-500/5 via-rose-500/20 to-rose-500/5 hidden md:block z-0 -translate-y-6" />

            <Reveal className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  LAYER 01
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <Globe size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Cloud Infrastructure
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Raw public cloud partitions, IAM roles, and storage components hosted on AWS, Azure, and Google Cloud.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  LAYER 02
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <Layers size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Devopstrio Accelerators
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Pre-compiled landing zones, Terraform boilerplates, and deployment blueprints configured for SOC-2 compliance.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  LAYER 03
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <Cpu size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Cognitive Engines
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Private RAG configurations, semantic LLM routers, agentic workflows, and low-latency databases.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  LAYER 04
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <Activity size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Client Environments
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Production-ready business endpoints, automated retries, and active OpenTelemetry performance trackers.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 4. Innovation Labs Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Innovation Centers
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Active R&D <span className="font-semibold text-rose-500">innovation labs</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Lab 1 */}
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 hover:bg-zinc-900/5 transition-all duration-300">
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-6">
                  LAB 01 / COGNITIVE AI
                </span>
                <h3 className="text-sm font-semibold text-white mb-3">
                  LLM Fine-Tuning & Prompt Safety
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Developing parameter-efficient techniques (PEFT) using QLoRA layers. Testing adversarial prompt firewall scripts to prevent LLM injection hazards.
                </p>
                <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">PyTorch</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Llama-3</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">LangGraph</span>
                </div>
              </div>
            </Reveal>

            {/* Lab 2 */}
            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 hover:bg-zinc-900/5 transition-all duration-300">
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-6">
                  LAB 02 / ZERO TRUST
                </span>
                <h3 className="text-sm font-semibold text-white mb-3">
                  IaC Validation & Secrets Injection
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Automating dynamic secrets injections inside Kubernetes runtimes using HashiCorp Vault. Running dry-run validation checks on code layouts to ensure data protection.
                </p>
                <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Vault</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Terraform</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Trivy</span>
                </div>
              </div>
            </Reveal>

            {/* Lab 3 */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/10 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 hover:bg-zinc-900/5 transition-all duration-300">
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-6">
                  LAB 03 / PLATFORM SRE
                </span>
                <h3 className="text-sm font-semibold text-white mb-3">
                  Karpenter Auto-scaling & Telemetry
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Constructing low-cost autoscaling setups on EKS grids. Benchmarking OpenTelemetry tracing parameters to reduce transaction lookup delays.
                </p>
                <div className="border-t border-zinc-900/60 pt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Kubernetes</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Prometheus</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 text-[9px] font-mono border border-zinc-800">Jaeger</span>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 5. Technology Stack Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Integrations Catalog
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Ecosystem <span className="font-semibold text-rose-500">technology integrations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tech Box 1 */}
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Cloud Platforms
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
                  <li>Amazon Web Services (AWS)</li>
                  <li>Microsoft Azure Cloud</li>
                  <li>Google Cloud Platform (GCP)</li>
                  <li>Kubernetes Container Orchestration</li>
                </ul>
              </div>
            </Reveal>

            {/* Tech Box 2 */}
            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Automation & IaC
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
                  <li>Terraform & OpenTofu Codification</li>
                  <li>Ansible Configuration Automation</li>
                  <li>ArgoCD GitOps Deployment</li>
                  <li>GitHub Actions Pipeline Engines</li>
                </ul>
              </div>
            </Reveal>

            {/* Tech Box 3 */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  AI & Data Platforms
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
                  <li>PyTorch Neural Foundations</li>
                  <li>LangChain / LangGraph Orchestrators</li>
                  <li>Pinecone Vector Indexes</li>
                  <li>Qdrant High-Performance Stores</li>
                </ul>
              </div>
            </Reveal>

            {/* Tech Box 4 */}
            <Reveal delay={0.15} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-semibold text-zinc-200 mb-3 border-b border-zinc-900 pb-2 uppercase tracking-wider font-mono">
                  Observability & SRE
                </h4>
                <ul className="space-y-2 text-[10px] text-zinc-450 font-light">
                  <li>OpenTelemetry Tracing Frameworks</li>
                  <li>Prometheus Latency Collectors</li>
                  <li>Grafana Unified Telemetry Views</li>
                  <li>Datadog Dashboard Monitoring</li>
                </ul>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 6. Strategic Partnerships Section */}
      <section className="py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Alliances
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Strategic <span className="font-semibold text-rose-500">partnership network</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
            {alliances.map((partner, i) => (
              <Reveal key={i} delay={i * 0.05} className="h-full">
                <div className="h-24 bg-zinc-950/20 border border-zinc-900 rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 hover:border-zinc-850 hover:bg-zinc-900/5 transition-all duration-300">
                  <Image
                    src={partner.path}
                    alt={partner.name}
                    width={100}
                    height={32}
                    className="object-contain max-h-8"
                    unoptimized
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Engineering Excellence Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Excellence Benchmarks
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Rigorous <span className="font-semibold text-rose-500">engineering standards</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Standard 1 */}
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-4">
                  <CheckCircle2 size={15} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Automated Pipeline Testing
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Every code commit runs through automated testing pipelines, executing regression checks, SAST code analysis, and CVE security scans.
                </p>
              </div>
            </Reveal>

            {/* Standard 2 */}
            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-4">
                  <ShieldCheck size={15} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  GitOps Configuration State
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Live cloud infrastructure state is synchronized with git repository configurations, preventing manual shifts and ensuring auditability.
                </p>
              </div>
            </Reveal>

            {/* Standard 3 */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-4">
                  <Workflow size={15} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Zero Trust Privileges
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Access keys are never stored in plain text. Compute hosts pull scoped credentials dynamically from HashiCorp Vault.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 8. Global Delivery Network Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Availability Map
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Global <span className="font-semibold text-rose-500">delivery distribution</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Hub 1 */}
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-3 uppercase">
                  AMERICAS HUB
                </span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Technical Strategy & Consulting
                </h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">
                  Architecting landing zones, database sizing blueprints, and managing client success integrations.
                </p>
              </div>
            </Reveal>

            {/* Hub 2 */}
            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-3 uppercase">
                  EMEA CENTER
                </span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Platform Engineering & Migrations
                </h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">
                  Developing Terraform plans, migrating virtual machine databases, and configuring EKS clusters.
                </p>
              </div>
            </Reveal>

            {/* Hub 3 */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[9px] font-mono tracking-widest text-zinc-550 mb-3 uppercase">
                  APAC CENTER
                </span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  24/7 Managed Operations & Testing
                </h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">
                  Managing system backups, running scale testing suites, and responding to system outages.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 9. Impact Metrics Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Impact Quantified
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Quantifiable <span className="font-semibold text-rose-500">engineering outcomes</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Metric 1 */}
            <Reveal className="h-full">
              <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">4.8x</span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-1">
                  Workflow Frequency Increase
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Accelerated pipelines reduce manual coding checks and compile times.
                </p>
              </div>
            </Reveal>

            {/* Metric 2 */}
            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">-45%</span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-1">
                  Drift Reductions
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Continuous synchronization prevents unauthorized alterations of server layouts.
                </p>
              </div>
            </Reveal>

            {/* Metric 3 */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">120ms</span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-1">
                  Query Latency
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Highly-scalable data indexing fetches search items in fractions of a second.
                </p>
              </div>
            </Reveal>

            {/* Metric 4 */}
            <Reveal delay={0.15} className="h-full">
              <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">99.99%</span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-1">
                  Target Uptime SLAs
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Multi-region failover and SRE coverage protect client operations round-the-clock.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 10. CTA Section */}
      <section className="w-full py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(220,38,38,0.04),transparent_60%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Partner Portal
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Join our strategic <span className="font-semibold text-rose-500">alliance network</span>
            </h2>

            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
              Collaborate on new software prototypes, deploy co-engineered accelerators, and integrate architectures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
              >
                Request Partner Access <ArrowUpRight size={14} className="stroke-[2.5]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
