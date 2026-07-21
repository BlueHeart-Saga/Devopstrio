"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  Github,
  GitPullRequest,
  GitBranch,
  GitFork,
  Star,
  Terminal,
  Code,
  Box,
  FileCode,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  X,
  ExternalLink,
  ChevronRight,
  Globe,
  ShieldCheck,
  Database,
  Cloud,
  BrainCircuit,
  Layers,
  Zap,
  Sparkles,
  Cpu,
  BookOpen,
  Calendar,
  Lock,
  Server,
  Award
} from "lucide-react";

export default function OpenSourcePage() {
  // Modal states
  const [contributorModalOpen, setContributorModalOpen] = useState<boolean>(false);
  const [contributorSubmitted, setContributorSubmitted] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // FAQ Toggle
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-600 selection:text-white">
      
      {/* 1. HERO SECTION (Using Standard Devopstrio Hero Component) */}
      <Hero
        badge="COMMUNITY & TALENT NETWORK"
        prism={true}
        prismHueShift={1.0}
        title={
          <>
            Open Source <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Contributions
            </span>
          </>
        }
        subtitle="Building reusable frameworks, cloud accelerators, AI solutions, DevOps automation, and enterprise engineering tools that empower the global developer community."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "COMMUNITY & TALENT NETWORK", href: "/ecosystem/community-talent-network" },
          { label: "OPEN SOURCE CONTRIBUTIONS" }
        ]}
      >
        <div className="flex flex-wrap gap-4 items-center justify-start">
          <a
            href="https://github.com/Devopstrio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
          >
            Explore Projects
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <Github className="w-3.5 h-3.5 text-white" />
            </div>
          </a>
          <button
            onClick={() => setContributorModalOpen(true)}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 text-white transition-all cursor-pointer"
          >
            Contribute on GitHub
          </button>
        </div>
      </Hero>

      {/* HERO STATS STRIP */}
      <section className="w-full py-12 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { val: "250+", label: "GitHub Repositories" },
              { val: "500+", label: "Community Contributors" },
              { val: "100K+", label: "Framework Downloads" },
              { val: "35+", label: "Engineering Frameworks" },
              { val: "50+", label: "Countries Represented" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0A0A0A] border border-zinc-800/80 text-center hover:border-rose-500/40 transition-colors">
                <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-1 block">
                  {stat.val}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR OPEN SOURCE MISSION (Split Layout) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Large Engineering Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[24px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
                <img
                  src="/assets/common/1b065043b6959827c05a0073c93a4a53 1.png"
                  alt="Developers collaborating on open source code"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-sm border border-zinc-800 text-xs font-mono text-zinc-300">
                  <span className="text-rose-400 font-bold">✓ Building in Public</span> &bull; 100% Apache 2.0 & MIT Open Source Blueprint
                </div>
              </div>
            </div>

            {/* Right Mission Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                OUR MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Building Together. Sharing Together.
              </h2>
              <blockquote className="text-zinc-300 text-sm md:text-base border-l-2 border-rose-500 pl-4 py-1 italic font-semibold">
                &quot;At Devopstrio, we believe open source accelerates innovation. We build, contribute, maintain, and share reusable engineering solutions that help developers and organizations innovate faster.&quot;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Transparent open collaboration",
                  "Reusable production assets",
                  "Enterprise security quality",
                  "Community-driven innovation",
                  "Global developer ecosystem",
                  "Zero proprietary vendor lock-in"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-300 font-medium bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setContributorModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Join As Contributor <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CONTRIBUTION IMPACT (Large KPI Section) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                GLOBAL FOOTPRINT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Contribution Impact
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Quantifiable metrics demonstrating the adoption and scale of our public open-source repositories.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { val: "100+", label: "Terraform Modules", desc: "Azure & AWS CAF" },
              { val: "40+", label: "Helm Charts", desc: "K8s Production" },
              { val: "80+", label: "CI/CD Templates", desc: "GitHub Actions" },
              { val: "25+", label: "AI Frameworks", desc: "GenAI & RAG" },
              { val: "15+", label: "Cloud Accelerators", desc: "Landing Zones" },
              { val: "500+", label: "Contributors", desc: "Across 20 Countries" }
            ].map((kpi, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all text-center space-y-2 group h-full">
                  <span className="text-2xl md:text-3xl font-black text-rose-500 tracking-tight block group-hover:scale-110 transition-transform">
                    {kpi.val}
                  </span>
                  <h4 className="text-xs font-bold text-white">{kpi.label}</h4>
                  <p className="text-[10px] text-zinc-500 font-mono">{kpi.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FEATURED OPEN SOURCE PROJECTS */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                FLAGSHIP BLUEPRINTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Featured Open Source Projects
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Five core open-source repositories powering enterprise cloud platforms worldwide.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Landing Zone Accelerator",
                tags: ["Terraform", "Azure", "IaC"],
                desc: "Modular infrastructure-as-code repository automating Azure CAF and AWS Control Tower topologies with Hub-Spoke networking."
              },
              {
                title: "DevOps Accelerator",
                tags: ["GitHub Actions", "Helm", "Kubernetes"],
                desc: "GitOps deployment blueprints, Helm charts, and eBPF network perimeters for enterprise Kubernetes clusters."
              },
              {
                title: "AI Framework",
                tags: ["FastAPI", "LangChain", "OpenAI"],
                desc: "Python framework for multi-agent LLM orchestration, semantic vector caching, and enterprise RAG pipelines."
              },
              {
                title: "Security Framework",
                tags: ["Zero Trust", "Policies", "Compliance"],
                desc: "HashiCorp Vault secret isolation, OPA Rego governance policies, and automated Trivy vulnerability scanners."
              },
              {
                title: "Data Framework",
                tags: ["Kafka", "Flink", "Streaming"],
                desc: "Real-time Apache Kafka event streaming, Databricks pipelines, and Snowflake data lake ingestion templates."
              }
            ].map((proj, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(225,29,72,0.15)] flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        <Github className="w-3.5 h-3.5" /> Devopstrio
                      </span>
                      <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">Public Repo</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{proj.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{proj.desc}</p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-zinc-900 flex justify-end">
                    <a
                      href="https://github.com/Devopstrio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                    >
                      View Repository <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. ENGINEERING FRAMEWORKS (Grid) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                REUSABLE ASSETS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Engineering Frameworks
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Ten core modular blueprints available across the Devopstrio open-source ecosystem.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Cloud Accelerator", "AI Framework", "DevOps Accelerator", "Security Framework", "Data Framework",
              "Landing Zone", "Terraform Modules", "Helm Charts", "GitHub Actions", "FastAPI Boilerplate"
            ].map((fw, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-colors text-center space-y-2 group">
                <Box className="w-5 h-5 text-rose-500 mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-bold text-white">{fw}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. GITHUB REPOSITORY SHOWCASE ⭐ (GitHub-Style Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block flex items-center justify-center gap-2">
                <Github className="w-4 h-4" /> REPOSITORY SHOWCASE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                GitHub Repository Matrix
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Live metrics, active licenses, stars, and release versions for our primary GitHub repositories.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                repo: "Devopstrio/terraform-azure-landingzone",
                lang: "HCL / Terraform",
                license: "Apache 2.0",
                ver: "v3.2",
                stars: "1.4k",
                forks: "210",
                contrib: "45",
                updated: "2 days ago",
                desc: "Production Terraform modules for Azure Landing Zone CAF architecture."
              },
              {
                repo: "Devopstrio/devops-k8s-accelerator",
                lang: "Go & Helm",
                license: "MIT",
                ver: "v2.8",
                stars: "980",
                forks: "145",
                contrib: "38",
                updated: "1 day ago",
                desc: "ArgoCD GitOps deployment patterns and eBPF Cilium network rules."
              },
              {
                repo: "Devopstrio/ai-rag-orchestration",
                lang: "Python",
                license: "Apache 2.0",
                ver: "v1.5",
                stars: "2.1k",
                forks: "340",
                contrib: "62",
                updated: "5 hours ago",
                desc: "Multi-agent LLM orchestration with Qdrant vector database caching."
              },
              {
                repo: "Devopstrio/zero-trust-security",
                lang: "Rego & Go",
                license: "MIT",
                ver: "v4.0",
                stars: "1.1k",
                forks: "180",
                contrib: "29",
                updated: "3 days ago",
                desc: "HashiCorp Vault policy templates and automated Trivy container scanners."
              },
              {
                repo: "Devopstrio/kafka-streaming-pipeline",
                lang: "Java & Scala",
                license: "Apache 2.0",
                ver: "v2.1",
                stars: "760",
                forks: "95",
                contrib: "22",
                updated: "4 days ago",
                desc: "High-throughput Apache Kafka event streaming and Flink transformations."
              },
              {
                repo: "Devopstrio/github-actions-workflows",
                lang: "YAML",
                license: "MIT",
                ver: "v3.0",
                stars: "1.8k",
                forks: "290",
                contrib: "51",
                updated: "6 hours ago",
                desc: "Reusable CI/CD workflows for speculative terraform plans and linting."
              }
            ].map((repo, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all space-y-4 group flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        <Github className="w-3.5 h-3.5" /> {repo.repo}
                      </span>
                      <span className="text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">{repo.ver}</span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed font-semibold">{repo.desc}</p>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-zinc-400 pt-2 border-t border-zinc-900">
                      <span className="flex items-center gap-1 text-rose-400 font-bold">
                        <Star className="w-3 h-3 fill-rose-500" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" /> {repo.forks}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitPullRequest className="w-3 h-3" /> {repo.contrib} Contribs
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 pt-1">
                      <span>Lang: {repo.lang}</span>
                      <span>License: {repo.license}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 flex justify-end">
                    <a
                      href="https://github.com/Devopstrio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                    >
                      View Project <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 7. TECHNOLOGY CATEGORIES (Colorful Category Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                CORE DOMAINS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Technology Categories
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Explore repositories grouped by enterprise engineering domain.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Cloud Native", icon: Cloud, count: "65+ Repos" },
              { title: "AI & GenAI", icon: BrainCircuit, count: "40+ Repos" },
              { title: "DevOps & SRE", icon: Terminal, count: "55+ Repos" },
              { title: "Cybersecurity", icon: ShieldCheck, count: "30+ Repos" },
              { title: "Data Engineering", icon: Database, count: "25+ Repos" },
              { title: "Containers & K8s", icon: Server, count: "20+ Repos" },
              { title: "Networking & Mesh", icon: Globe, count: "15+ Repos" },
              { title: "Web Microservices", icon: Code, count: "10+ Repos" }
            ].map((cat, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all space-y-3 group text-center">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <cat.icon className="w-5 h-5 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white">{cat.title}</h4>
                <span className="text-[10px] font-mono text-zinc-500 block">{cat.count}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. COMMUNITY CONTRIBUTIONS WORKFLOW (Timeline) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                CONTRIBUTION LIFECYCLE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Community Contribution Workflow
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Transparent step-by-step workflow from GitHub issue creation to global production release.
              </p>
            </div>
          </Reveal>

          <div className="p-8 rounded-[28px] bg-[#0A0A0A] border border-zinc-800/80 overflow-x-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 min-w-[800px]">
              {[
                { step: "Issue Created", desc: "Feature or bug logged" },
                { step: "Discussion", desc: "Maintainer RFC review" },
                { step: "Pull Request", desc: "Code submission" },
                { step: "Code Review", desc: "Peer & security check" },
                { step: "Automated Testing", desc: "CI pipeline execution" },
                { step: "Approval", desc: "Maintainer LGTM" },
                { step: "Production Release", desc: "Semantic version tag" }
              ].map((wf, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-black border border-zinc-800 w-full group hover:border-rose-500/50 transition-all">
                    <span className="text-[9px] font-mono text-rose-400 font-bold mb-1">STAGE 0{idx + 1}</span>
                    <h4 className="text-xs font-bold text-white mb-1">{wf.step}</h4>
                    <p className="text-[9px] text-zinc-500 font-medium">{wf.desc}</p>
                  </div>

                  {idx < 6 && (
                    <div className="hidden lg:block text-rose-500 shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 9. PROJECT LIFECYCLE (Large Diagram / Steps) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                GOVERNANCE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Open Source Project Lifecycle
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                How Devopstrio incubates, matures, and maintains open-source repositories over time.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {[
              "Idea", "Prototype", "Community Feedback", "Development",
              "Testing", "Release", "Maintenance", "Long-Term Support"
            ].map((lc, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0A0A0A] border border-zinc-800 hover:border-rose-500/50 transition-colors">
                <span className="text-[9px] font-mono text-rose-400 font-bold block mb-1">0{idx + 1}</span>
                <h4 className="text-xs font-bold text-white">{lc}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. DEVELOPER CONTRIBUTION GUIDE (Step-by-Step Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                DEVELOPER ONBOARDING
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Developer Contribution Guide
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Quick start steps to make your first open-source pull request today.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "Fork Repository", desc: "Click Fork on GitHub Devopstrio org." },
              { step: "Clone & Branch", desc: "git checkout -b feature/my-enhancement" },
              { step: "Develop & Test", desc: "Write clean code with automated tests." },
              { step: "Submit Pull Request", desc: "Open PR and tag @devopstrio-reviewers." }
            ].map((guide, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-[#0A0A0A] border border-zinc-800 space-y-3 hover:border-rose-500/50 transition-all">
                <span className="text-xs font-mono font-bold text-rose-400">STEP 0{idx + 1}</span>
                <h4 className="text-sm font-bold text-white">{guide.step}</h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">{guide.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. ENGINEERING STANDARDS (Cards Grid) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                QUALITY BAR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Engineering Standards
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Every line of code submitted is subject to our production-grade quality policies.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Mandatory Peer Code Review", "Comprehensive Documentation", "Automated Security Validation", "CI/CD Test Coverage > 85%",
              "Semantic Versioning Tags", "Open Source Licensing", "Static Analysis (Checkov/Trivy)", "Backwards Compatibility"
            ].map((std, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#0A0A0A] border border-zinc-800 flex items-center gap-3 text-xs font-bold text-white hover:border-rose-500/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{std}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. LATEST RELEASES (Timeline) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                RELEASE LOG
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Latest Production Releases
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Recent major release versions published across our repository catalog.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { ver: "v3.2", title: "Landing Zone Accelerator", desc: "Added Azure CAF Hub-Spoke vWAN modules and automated Terraform state locking." },
              { ver: "v2.8", title: "DevOps Accelerator", desc: "Integrated Cilium eBPF network perimeters and ArgoCD multi-cluster sync." },
              { ver: "v1.5", title: "AI Framework", desc: "Added LangGraph agent state persistence and Qdrant hybrid vector search." },
              { ver: "v4.0", title: "Security Framework", desc: "Full HashiCorp Vault secrets isolation and SOC2 policy compliance rules." }
            ].map((rel, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-[#0A0A0A] border border-zinc-800 space-y-2 hover:border-rose-500/50 transition-all">
                <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20">{rel.ver}</span>
                <h4 className="text-sm font-bold text-white pt-2">{rel.title}</h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">{rel.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 13. PARTNER COMMUNITIES (Logo Wall) */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block">
              ECOSYSTEM FOUNDATIONS & COLLABORATORS
            </span>
            <h3 className="text-xl font-bold text-white">Partner Communities & Standards</h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-zinc-400 font-bold text-xs md:text-sm font-mono">
            {[
              "GitHub", "Microsoft", "CNCF", "Linux Foundation", "HashiCorp",
              "Docker", "Kubernetes", "Red Hat", "OpenSSF", "Apache Foundation"
            ].map((partner, idx) => (
              <span key={idx} className="px-4 py-2.5 rounded-xl bg-[#0A0A0A] border border-zinc-800/80 hover:text-white hover:border-rose-500/40 transition-colors">
                ⚡ {partner}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 14. SUCCESS STORIES */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                COMMUNITY ADOPTION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Open Source Success Stories
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Real stories of enterprise adoption and open-source collaboration worldwide.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Built by the Community",
                desc: "500+ global contributors across 20 countries maintaining public infrastructure modules.",
                tag: "Global Community"
              },
              {
                title: "Enterprise Adoption",
                desc: "Cloud accelerators powering mission-critical production landing zones for Fortune 500 teams.",
                tag: "Production Scale"
              },
              {
                title: "Student Contributors",
                desc: "University students authoring public Terraform PRs used in production environments.",
                tag: "Academic Impact"
              },
              {
                title: "Global Innovation",
                desc: "Reusable engineering frameworks eliminating 80% of repetitive cloud setup overhead.",
                tag: "Engineering Speed"
              }
            ].map((story, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all space-y-4 group h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                      {story.tag}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{story.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{story.desc}</p>
                  </div>
                  <button
                    onClick={() => setContributorModalOpen(true)}
                    className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer pt-2"
                  >
                    Read Story <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 15. FAQ SECTION (Matching Accordion Standard) */}
      <section id="faq" className="py-20 md:py-28 bg-[#030303] text-white border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                KNOWLEDGE BASE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions we get <span className="bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-semibold">
              Everything you need to know about contributing to Devopstrio open-source projects.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {[
              {
                q: "How do I start contributing to Devopstrio open-source projects?",
                a: "Navigate to github.com/Devopstrio, pick any repository, check issues tagged 'good first issue', fork the repository, and submit your pull request following our CONTRIBUTING.md guidelines.",
                proof: "✓ 500+ Active Contributors · 250+ Repositories",
                tags: ["GitHub PRs", "Good First Issue", "Open Community"]
              },
              {
                q: "Are all Devopstrio open-source projects free to use commercially?",
                a: "Yes. All our repositories are released under permissive open-source licenses (primarily Apache 2.0 and MIT), allowing free commercial and private use.",
                proof: "✓ 100% Free Apache 2.0 / MIT Licensing",
                tags: ["Commercial Use", "Apache 2.0", "MIT License"]
              },
              {
                q: "Can enterprise companies contribute code or sponsor features?",
                a: "Yes! We partner with enterprise teams to co-develop modules, review custom RFCs, and integrate custom cloud policies into our public frameworks.",
                proof: "✓ Trusted by Enterprise Technology Teams",
                tags: ["Enterprise Co-development", "RFC Reviews", "Sponsorship"]
              },
              {
                q: "Are university students welcome to contribute?",
                a: "Absolutely! We provide dedicated mentorship and code reviews for student pull requests to help them build real-world engineering credentials.",
                proof: "✓ Student Contributor Mentorship Program",
                tags: ["Student Friendly", "Code Reviews", "Portfolio Building"]
              },
              {
                q: "How are code reviews and security vulnerabilities handled?",
                a: "Every pull request passes static security analysis (Checkov/Trivy) and automated unit testing before two senior maintainers approve and merge it.",
                proof: "✓ Automated CI/CD & Security Scans",
                tags: ["Checkov", "Trivy", "Peer Review"]
              },
              {
                q: "How are release versions managed?",
                a: "We adhere strictly to Semantic Versioning (MAJOR.MINOR.PATCH). Breaking changes are only released in major version increments with full migration documentation.",
                proof: "✓ Strict Semantic Versioning Standards",
                tags: ["SemVer", "Migration Guides", "Release Logs"]
              },
              {
                q: "Where can I find complete documentation for Terraform modules?",
                a: "All modules feature automated terraform-docs documentation in their README.md files, complete with input variables, outputs, and usage examples.",
                proof: "✓ Auto-generated terraform-docs",
                tags: ["Documentation", "Usage Examples", "README Specs"]
              }
            ].map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={item.q} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {item.q}
                    </span>
                    <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-medium max-w-3xl animate-in fade-in duration-200 flex flex-col gap-4">
                      <p>{item.a}</p>
                      
                      {item.proof && (
                        <span className="text-[10px] text-emerald-400 font-semibold tracking-wide font-mono">
                          {item.proof}
                        </span>
                      )}

                      {item.tags && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 text-[10px] font-mono font-medium tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Below FAQ Callout Box */}
          <Reveal delay={0.2}>
            <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-xs md:text-sm font-semibold">
                Have specific questions about repo maintainership or bug bounties? Reach out to our open-source maintainers.
              </p>
              <button 
                onClick={() => setContributorModalOpen(true)}
                className="gap-2 inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
              >
                Contact Maintainers <ArrowUpRight size={14} className="text-rose-500" />
              </button>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 16. CTA SECTION */}
      <section className="py-28 relative overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Build the Future with Open Source
          </h2>
          <p className="text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-semibold">
            Join developers worldwide in building secure, scalable, and innovative engineering solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://github.com/Devopstrio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              <Github className="w-4 h-4 mr-2" /> Explore GitHub
            </a>
            <button
              onClick={() => setContributorModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <GitPullRequest className="w-4 h-4 text-rose-500 mr-2" /> Become a Contributor
            </button>
          </div>
        </div>
      </section>

      {/* CONTRIBUTOR MODAL */}
      {contributorModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => {
                setContributorModalOpen(false);
                setContributorSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {contributorSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Contributor Registration Received!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-medium">
                  Welcome aboard! We&apos;ve sent an invite to your GitHub account and shared our Maintainer Slack channel link.
                </p>
                <button
                  onClick={() => {
                    setContributorModalOpen(false);
                    setContributorSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#E11D48] text-white text-xs font-bold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContributorSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Github className="w-5 h-5 text-rose-500" />
                    Become an Open Source Contributor
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Register your GitHub handle to receive PR reviews and maintainer channel invites.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">GitHub Username *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. alexrivera-dev"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Area of Contribution</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none">
                      <option>Terraform & Infrastructure Modules (HCL)</option>
                      <option>Kubernetes Operators & Helm Charts (Go / YAML)</option>
                      <option>AI & LLM Orchestration Frameworks (Python)</option>
                      <option>DevSecOps & OPA Policy Rules (Rego)</option>
                      <option>Documentation & Architecture Guides</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setContributorModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <GitPullRequest className="w-3.5 h-3.5" /> Submit Contributor Profile
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </main>
  );
}
