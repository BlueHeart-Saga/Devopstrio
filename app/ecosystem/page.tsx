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
    <main className="min-h-screen bg-black text-white pt-16 pb-16 font-sans">

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center bg-[#030303] text-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden border-b border-zinc-900/60">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

            {/* Left Column: Text & Metrics */}
            <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
              {/* Breadcrumb Navigation */}
              {/* <nav className="flex items-center gap-2 text-xs font-mono text-zinc-555 mb-8">
                <Link href="/" className="hover:text-rose-500 transition-colors">HOME</Link>
                <ChevronRight size={10} className="text-zinc-700" />
                <span className="text-rose-500 font-bold uppercase">ECOSYSTEM</span>
              </nav> */}

              {/* Heading */}
              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                  Co-engineering the
                  <br />
                  <span className="text-[#E11D48] whitespace-nowrap">Future of Cloud.</span>
                </h1>
              </Reveal>

              {/* Description */}
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
                  Devopstrio brings together cloud providers, innovation centers, accelerators, and talent channels into a unified network, providing high-performance, compliant, and cost-effective solutions.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-4 items-center justify-start">
                  <a
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                    href="#pillars"
                  >
                    Explore Pillars
                    <span className="ml-2">→</span>
                  </a>
                  <Link
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                    href="/contact"
                  >
                    Talk to Expert
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Ecosystem Image */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
              <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
                <img
                  src="/assets/herocard/ecosystempage.png"
                  alt="Global Alliance Ecosystem Illustration"
                  className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none"
                />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Ecosystem Domains Section */}
      <section id="pillars" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-left">

          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

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

      {/* 3. System Architecture Section */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-[20%] left-[-10%] w-[30%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

            {/* Left Column: Stats & Description */}
            <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                  A Unified Ecosystem Built
                  <br />
                  <span className="text-[#E11D48] whitespace-nowrap">for Extreme Scale</span>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-semibold max-w-xl mb-12">
                  We combine industry-leading cloud platforms, container engines, and continuous integration pipelines into a single, cohesive delivery system. This unified fabric empowers our engineering teams to deploy resilient, zero-downtime solutions instantly.
                </p>
              </Reveal>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full border-t border-zinc-900/60 pt-8">
                <Reveal delay={0.25}>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-bold font-mono text-white mb-2">200+</span>
                    <span className="block text-[8px] sm:text-[9px] font-mono tracking-widest text-zinc-550 uppercase leading-snug">Certified Tech Integrations</span>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-bold font-mono text-white mb-2">99.999%</span>
                    <span className="block text-[8px] sm:text-[9px] font-mono tracking-widest text-zinc-550 uppercase leading-snug">Production Pipeline SLA</span>
                  </div>
                </Reveal>
                <Reveal delay={0.35}>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-bold font-mono text-white mb-2">24/7</span>
                    <span className="block text-[8px] sm:text-[9px] font-mono tracking-widest text-zinc-550 uppercase leading-snug">Follow-the-Sun Support</span>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Column: Technology Fabric Logo Grid with Tooltips */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end z-20">
              <Reveal delay={0.2} className="w-full max-w-[440px]">
                <div className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_75%)] pointer-events-none" />

                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Our Technology Fabric
                  </h3>
                  <p className="text-[10px] text-zinc-500 leading-relaxed mb-6 font-semibold">
                    Hover over the nodes to explore the integrated tools in our delivery pipeline:
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    {alliances.map((partner, index) => (
                      <div
                        className="group/logo relative h-16 bg-white border border-zinc-900 rounded-xl flex items-center justify-center p-3 hover:border-rose-500/20 hover:shadow-[0_0_20px_rgba(225,29,72,0.1)] transition-all duration-300 cursor-pointer"
                        key={index}
                      >
                        <Image
                          src={partner.path}
                          alt={partner.name}
                          width={60}
                          height={20}
                          className="max-h-6 object-contain opacity-80 group-hover/logo:opacity-100 transition-opacity duration-300"
                          unoptimized
                        />
                        {/* Tooltip */}
                        <span className="absolute bottom-full left-[50%] translate-x-[-50%] mb-2 bg-rose-600 text-white text-[8px] font-bold py-1 px-2.5 rounded shadow-lg opacity-0 pointer-events-none group-hover/logo:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                          {partner.name}
                        </span>
                      </div>
                    ))}
                    {/* Add extra standard tools */}
                    <div className="group/logo relative h-16 bg-zinc-900/40 border border-zinc-900 rounded-xl flex items-center justify-center p-3 hover:border-rose-500/25 hover:shadow-[0_0_20px_rgba(225,29,72,0.1)] transition-all duration-300 cursor-pointer text-zinc-400 hover:text-white">
                      <span className="text-[10px] font-mono font-bold">K8S</span>
                      <span className="absolute bottom-full left-[50%] translate-x-[-50%] mb-2 bg-rose-600 text-white text-[8px] font-bold py-1 px-2.5 rounded shadow-lg opacity-0 pointer-events-none group-hover/logo:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                        Kubernetes
                      </span>
                    </div>
                    <div className="group/logo relative h-16 bg-zinc-900/40 border border-zinc-900 rounded-xl flex items-center justify-center p-3 hover:border-rose-500/25 hover:shadow-[0_0_20px_rgba(225,29,72,0.1)] transition-all duration-300 cursor-pointer text-zinc-400 hover:text-white">
                      <span className="text-[10px] font-mono font-bold">TF</span>
                      <span className="absolute bottom-full left-[50%] translate-x-[-50%] mb-2 bg-rose-600 text-white text-[8px] font-bold py-1 px-2.5 rounded shadow-lg opacity-0 pointer-events-none group-hover/logo:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                        Terraform
                      </span>
                    </div>
                    <div className="group/logo relative h-16 bg-zinc-900/40 border border-zinc-900 rounded-xl flex items-center justify-center p-3 hover:border-rose-500/25 hover:shadow-[0_0_20px_rgba(225,29,72,0.1)] transition-all duration-300 cursor-pointer text-zinc-400 hover:text-white">
                      <span className="text-[10px] font-mono font-bold">VAULT</span>
                      <span className="absolute bottom-full left-[50%] translate-x-[-50%] mb-2 bg-rose-600 text-white text-[8px] font-bold py-1 px-2.5 rounded shadow-lg opacity-0 pointer-events-none group-hover/logo:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                        HashiCorp Vault
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Ecosystem Topology Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-left">

          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                ECOSYSTEM TOPOLOGY
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Connected alliance <span className="font-semibold text-rose-500">dataflow & layers</span>
            </h2>
            <p className="text-zinc-555 text-xs md:text-sm font-semibold leading-relaxed mt-2 max-w-xl">
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
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">
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
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">
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
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">
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
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">
                  Production-ready business endpoints, automated retries, and active OpenTelemetry performance trackers.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 5. Innovation Labs Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-left">

          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                INNOVATION CENTERS
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

      {/* 6. Reference Architectures / Delivery Stacks Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10 text-left">

          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                REFERENCE ARCHITECTURES
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Our standard <span className="font-semibold text-rose-500">delivery stacks</span>
            </h2>
            <p className="text-zinc-550 text-xs md:text-sm font-semibold leading-relaxed mt-2 max-w-xl">
              Pre-validated, robust technical templates designed to spin up secure production infrastructure in minutes.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Stack 1 */}
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 hover:border-rose-500/25 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
                <h3 className="text-sm font-semibold text-zinc-150 group-hover:text-white transition-colors mb-3">
                  Enterprise DevOps Stack
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-semibold">
                  Designed for scalable, resilient container deployments on secure clouds.
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/60">
                  {["Kubernetes", "Terraform", "AWS Cloud", "Docker Engine", "GitLab CI"].map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-500 text-[9px] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Stack 2 */}
            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 hover:border-rose-500/25 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
                <h3 className="text-sm font-semibold text-zinc-150 group-hover:text-white transition-colors mb-3">
                  SecOps & Vault Stack
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-semibold">
                  Implements strict zero-trust networks with automated compliance guardrails.
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/60">
                  {["HashiCorp Vault", "Zero-Trust Auth", "SonarQube SAST", "OWASP", "IAM Roles"].map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-500 text-[9px] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Stack 3 */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 hover:border-rose-500/25 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
                <h3 className="text-sm font-semibold text-zinc-150 group-hover:text-white transition-colors mb-3">
                  Next-Gen AI / App Stack
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-semibold">
                  For custom machine learning workflows and premium visual interfaces.
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/60">
                  {["Next.js", "FastAPI MLOps", "React Engine", "Vite Bundler", "Node.js API"].map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-500 text-[9px] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 7. Business Outcomes Section */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

            {/* Left Column: Outcome list */}
            <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                    QUANTIFIABLE IMPACT
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                  Proven Business Results
                  <br />
                  <span className="text-[#E11D48] whitespace-nowrap">for Our Clients</span>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-semibold max-w-xl mb-10">
                  By leveraging our integrated ecosystems, enterprises achieve unprecedented efficiency gains, drastically reduced time-to-market, and ironclad security guardrails.
                </p>
              </Reveal>

              {/* Outcome rows */}
              <div className="flex flex-col gap-6 w-full">
                {[
                  {
                    title: "85% Reduction in Manual Processes",
                    desc: "GitOps and automated IaC deployments replace human error patterns completely."
                  },
                  {
                    title: "99.999% Platform Uptime Maintained",
                    desc: "Self-healing Kubernetes clusters adjust capacity dynamically under traffic surges."
                  },
                  {
                    title: "70% Faster Pipeline Delivery Loops",
                    desc: "Pre-validated container patterns accelerate testing cycles across dev teams."
                  }
                ].map((item, idx) => (
                  <Reveal key={idx} delay={0.25 + idx * 0.05}>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-md bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mt-0.5 flex-shrink-0">
                        <CheckCircle2 size={13} />
                      </div>
                      <div>
                        <strong className="block text-xs font-bold text-white mb-1">
                          {item.title}
                        </strong>
                        <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Column: Purple Azure Partnership Announcement Card */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end z-20">
              <Reveal delay={0.2} className="w-full max-w-[440px]">
                <div className="bg-gradient-to-br from-[#100816] to-[#170b1b] border border-[#281438] hover:border-rose-500/35 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.06),transparent_75%)] pointer-events-none" />

                  <span className="inline-block px-2.5 py-1 rounded bg-rose-950/30 border border-rose-900/40 text-[#E11D48] text-[8px] font-bold tracking-wider uppercase mb-6">
                    STRATEGIC COLLABORATION
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-4 group-hover:text-rose-400 transition-colors">
                    Devopstrio Partners with Azure to Accelerate Enterprise AI Adoption
                  </h3>

                  <p className="text-[11px] text-zinc-400 leading-relaxed mb-8 font-semibold">
                    We are proud to announce a multi-year technical partnership aimed at accelerating secure cloud-native deployment patterns and custom cognitive service integrations for healthcare and fintech industries.
                  </p>

                  <Link
                    href="/insights-knowledge/white-paper"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-rose-500 transition-colors"
                  >
                    Read the Full Announcement <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Rationale Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10 text-left">

          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                RATIONALE
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Why partner with <span className="font-semibold text-rose-500">Devopstrio?</span>
            </h2>
            <p className="text-zinc-550 text-xs md:text-sm font-semibold leading-relaxed mt-2 max-w-xl">
              We translate raw computing infrastructure into highly reliable business capabilities.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Block 1 */}
            <Reveal className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 hover:border-rose-500/25 transition-all duration-300 group relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-950/25 group-hover:border-rose-500/30 transition-all duration-300">
                  <Cpu size={16} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-3">
                  Engineering Leadership
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                  Every code commit runs through automated testing pipelines, executing regression checks, SAST code analysis, and CVE security scans.
                </p>
              </div>
            </Reveal>

            {/* Block 2 */}
            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 hover:border-rose-500/25 transition-all duration-300 group relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-950/25 group-hover:border-rose-500/30 transition-all duration-300">
                  <Workflow size={16} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-3">
                  Proven Solutions
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                  Live cloud infrastructure state is synchronized with git repository configurations, preventing manual shifts and ensuring auditability.
                </p>
              </div>
            </Reveal>

            {/* Block 3 */}
            <Reveal delay={0.1} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 hover:border-rose-500/25 transition-all duration-300 group relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-950/25 group-hover:border-rose-500/30 transition-all duration-300">
                  <ShieldCheck size={16} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-3">
                  Certified Workforce
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                  Access keys are never stored in plain text. Compute hosts pull scoped credentials dynamically from HashiCorp Vault.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 9. Global Delivery Network Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

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
                <span className="block text-[9px] font-mono tracking-widest text-zinc-555 mb-3 uppercase">
                  APAC CENTER
                </span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  24/7 Managed Operations & Testing
                </h4>
                <p className="text-[10px] text-zinc-555 leading-relaxed font-light">
                  Managing system backups, running scale testing suites, and responding to system outages.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 10. Global Support Section */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-[20%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

            {/* Left Column: Support info */}
            <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                    GLOBAL SUPPORT
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                  24/7 Enterprise
                  <br />
                  <span className="text-[#E11D48] whitespace-nowrap">Follow-the-Sun Support</span>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-zinc-450 text-xs sm:text-sm leading-relaxed font-semibold max-w-xl mb-10">
                  Our technical support desks span critical time zones (London, India, USA) to ensure continuous monitoring, immediate incident management, and seamless pipeline recoveries at all times.
                </p>
              </Reveal>

              {/* Details table */}
              <div className="flex flex-col gap-4 w-full border-t border-zinc-900/60 pt-6">
                <Reveal delay={0.25}>
                  <div className="flex text-xs">
                    <span className="w-32 font-bold text-white">Headquarters:</span>
                    <span className="text-[#E11D48] font-semibold">128 City Road, London, EC1V 2NX</span>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="flex text-xs">
                    <span className="w-32 font-bold text-white">Hotline Support:</span>
                    <span className="text-[#E11D48] font-semibold">+44 7471 482903</span>
                  </div>
                </Reveal>
                <Reveal delay={0.35}>
                  <div className="flex text-xs">
                    <span className="w-32 font-bold text-white">Partner Escalation:</span>
                    <span className="text-[#E11D48] font-semibold">partners@devopstrioglobal.com</span>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Column: SLA Dashboard */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end z-20">
              <Reveal delay={0.2} className="w-full max-w-[440px]">
                <div className="bg-zinc-950/25 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_75%)] pointer-events-none" />

                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 border-b border-zinc-900/60 pb-4 mb-4">
                    Support Commitments
                  </h3>

                  <div className="flex flex-col gap-4">
                    {[
                      { label: "Critical Incidents (P1)", val: "< 15 Mins" },
                      { label: "Standard Incidents (P2)", val: "< 1 Hour" },
                      { label: "Deployment Queries", val: "< 4 Hours" },
                      { label: "SLA Guarantee", val: "99.99%" }
                    ].map((row, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs border-b border-zinc-900/30 pb-2 last:border-0 last:pb-0">
                        <span className="text-zinc-400 font-semibold">{row.label}</span>
                        <strong className="text-emerald-500 font-bold font-mono">{row.val}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 11. CTA Section */}
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
