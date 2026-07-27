"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  Users,
  Code,
  Cloud,
  Terminal,
  BrainCircuit,
  ShieldCheck,
  Database,
  Calendar,
  BookOpen,
  Trophy,
  Award,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Sparkles,
  Plus,
  Minus,
  X,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Building,
  Layers,
  Globe,
  Laptop,
  Cpu,
  GitPullRequest,
  Flame,
  Check,
  Search,
  Filter,
  MessageSquare,
  Zap,
  Rocket
} from "lucide-react";

export default function EngineeringCommunityPage() {
  // Modal States
  const [joinModalOpen, setJoinModalOpen] = useState<boolean>(false);
  const [mentorModalOpen, setMentorModalOpen] = useState<boolean>(false);
  const [joinSubmitted, setJoinSubmitted] = useState<boolean>(false);
  const [mentorSubmitted, setMentorSubmitted] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // FAQ Toggle
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-600 selection:text-white">

      {/* 1. HERO SECTION (Preserving standard Devopstrio Hero component design) */}
      <Hero
        badge="GLOBAL DEVELOPER ECOSYSTEM"
        prism={true}
        prismHueShift={3.5}
        title={
          <>
            Building the Future{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Together.
            </span>
          </>
        }
        subtitle="Join a global engineering community where developers, architects, cloud engineers, DevOps specialists, and AI innovators collaborate to solve real-world enterprise challenges."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "COMMUNITY & TALENT NETWORK", href: "/ecosystem/community-talent-network" },
          { label: "ENGINEERING COMMUNITY" }
        ]}
      >
        <div className="flex flex-wrap gap-4 items-center justify-start">
          <button
            onClick={() => setJoinModalOpen(true)}
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
          >
            Join Community
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("open-source-projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 text-white transition-all cursor-pointer"
          >
            <Github className="w-4 h-4 text-rose-500 mr-2" /> Explore Projects
          </button>
        </div>
      </Hero>

      {/* HERO STATS STRIP */}
      <section className="w-full py-12 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "10K+", label: "Community Members" },
              { val: "250+", label: "Open Source Projects" },
              { val: "75+", label: "Technical Events" },
              { val: "30+", label: "University Partners" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0A0A0A] border border-zinc-800/80 text-center hover:border-rose-500/40 transition-colors">
                <span className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1 block">
                  {stat.val}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. COMMUNITY STORY SECTION (Microsoft-Style Split Layout using assets/common images) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Large Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[24px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
                <img
                  src="/assets/common/e76e125035885aab9c9070ce85df239e 1.png"
                  alt="Devopstrio Team Discussing Architecture"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-sm border border-zinc-800 text-xs font-mono text-zinc-300">
                  <span className="text-rose-400 font-bold">✓ Real Collaborative Engineering</span> &bull; Solution Architecture Whiteboard Review
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                OUR ENGINEERING PHILOSOPHY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Building More Than Software
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed font-semibold">
                We believe innovation grows through collaboration. Our Engineering Community connects professionals, students, researchers, and technology leaders to learn, share knowledge, contribute to open-source projects, and build enterprise-grade solutions together.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  "Peer-to-peer code reviews and architectural guidance from senior staff.",
                  "Hands-on open source contributions used in real production environments.",
                  "Zero hierarchy — students, junior developers, and principal architects build side by side."
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-zinc-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setJoinModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Join The Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COMMUNITY HIGHLIGHTS (Large KPI Grid) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                COMMUNITY IMPACT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Global Community Scale
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Measurable growth, open collaboration, and active developer engagement worldwide.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { val: "10K+", label: "Community Members", desc: "Active globally" },
              { val: "250+", label: "GitHub Repositories", desc: "Open source" },
              { val: "80+", label: "Technical Meetups", desc: "Hosted yearly" },
              { val: "40+", label: "Hands-on Workshops", desc: "Live sessions" },
              { val: "15+", label: "Countries Represented", desc: "Global reach" },
              { val: "100+", label: "Technical Articles", desc: "Published ADRs" }
            ].map((kpi, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 text-center space-y-2 group h-full">
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

      {/* 4. COMMUNITY PILLARS (6 Premium Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                SPECIALIZED GUILDS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Our 6 Community Pillars
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Focused technical domains where members connect, exchange ideas, and build specialized tooling.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Developer Network", icon: Code, desc: "Full-stack software engineering, modern TypeScript, Python microservices, and system architecture principles.", color: "text-rose-500" },
              { title: "Cloud Community", icon: Cloud, desc: "Azure CAF, AWS Control Tower, GCP Foundations, multi-cloud networking, and cost optimization.", color: "text-rose-500" },
              { title: "AI Community", icon: BrainCircuit, desc: "Enterprise LLMs, Retrieval-Augmented Generation (RAG), vector databases, and multi-agent orchestration.", color: "text-rose-500" },
              { title: "DevOps Guild", icon: Terminal, desc: "Infrastructure as Code, Kubernetes GitOps, GitHub Actions pipelines, and Site Reliability Engineering.", color: "text-rose-500" },
              { title: "Cybersecurity Circle", icon: ShieldCheck, desc: "Zero Trust architecture, DevSecOps pipelines, identity governance, and continuous threat monitoring.", color: "text-rose-500" },
              { title: "Data Engineering Hub", icon: Database, desc: "Real-time streaming, Apache Kafka, Databricks, Snowflake data lakes, and AI-ready data pipelines.", color: "text-rose-500" }
            ].map((pillar, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] group flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">{pillar.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{pillar.desc}</p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-zinc-900 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Active Guild</span>
                    <button
                      onClick={() => setJoinModalOpen(true)}
                      className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                    >
                      Join Guild <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. REAL ENGINEERING ACTIVITIES ⭐ (Alternating Sections using assets/common images) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-20">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                HANDS-ON LEARNING & BUILD
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Real Engineering Activities
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                No passive webinars. We engage through real pull requests, system design whiteboard sessions, and hackathons.
              </p>
            </div>
          </Reveal>

          {/* Activity 1: Open Source Collaboration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                01. OPEN SOURCE & IAC
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Open Source Collaboration</h3>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-semibold">
                Contribute to enterprise-grade repositories, reusable frameworks, Terraform modules, DevOps templates, and cloud automation projects used by Fortune 500 teams worldwide.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">Terraform Modules</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">GitHub Actions</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">Helm Charts</span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-[24px] overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 group">
                <img
                  src="/assets/common/1b065043b6959827c05a0073c93a4a53 1.png"
                  alt="Developers reviewing pull requests on monitors"
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Activity 2: Architecture Workshops */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                02. SYSTEM DESIGN
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Architecture Workshops</h3>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-semibold">
                Participate in solution architecture reviews, system design workshops, and engineering best-practice discussions led by principal cloud architects.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">Whiteboard Sessions</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">ADR Reviews</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">Scalability Audits</span>
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-[24px] overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 group">
                <img
                  src="/assets/common/37b9b888cc479ea7b74d2d9a05c37597 1.png"
                  alt="Cloud architecture design session"
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Activity 3: AI Innovation Sessions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                03. ENTERPRISE AI
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">AI Innovation Sessions</h3>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-semibold">
                Experiment with enterprise AI, LLMs, RAG, vector databases (Qdrant/Pinecone), and intelligent multi-agent automation using LangChain and LlamaIndex.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">RAG Pipelines</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">Multi-Agent Systems</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">Vector Databases</span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-[24px] overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 group">
                <img
                  src="/assets/common/9d91b93f83e6d4cd494ec13611b3e50e 1.png"
                  alt="AI engineering workspace"
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Activity 4: DevOps Hackathons */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                04. 48-HOUR CHALLENGES
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">DevOps Hackathons</h3>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-semibold">
                Build CI/CD pipelines, Kubernetes platforms, GitOps workflows, and automated governance solutions in 48-hour global sprint hackathons with sponsor cash prizes.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">GitOps & ArgoCD</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">K8s Autoscaling</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">Sponsor Cash Prizes</span>
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-[24px] overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 group">
                <img
                  src="/assets/common/f317dd71184f5c47d601eeb9508bf92c 1.png"
                  alt="Hackathon team coding overnight"
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. OPEN SOURCE PROJECTS (GitHub-Style Cards Grid) */}
      <section id="open-source-projects" className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block flex items-center justify-center gap-2">
                <Github className="w-4 h-4" /> COMMUNITY BLUEPRINTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Featured Open Source Projects
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Production-ready codebases, Terraform modules, and frameworks open for public contribution.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Terraform Enterprise Modules",
                contributors: "150+ Contributors",
                tags: ["Azure", "AWS", "IaC", "CAF"],
                desc: "Landing Zone, Hub-Spoke Network, Security Baseline, and Monitoring Terraform modules.",
                url: "https://github.com/Devopstrio"
              },
              {
                title: "Kubernetes Enterprise Templates",
                contributors: "210+ Contributors",
                tags: ["K8s", "Helm", "GitOps", "Cilium"],
                desc: "Production-ready Helm charts, ArgoCD GitOps manifests, and Cilium eBPF network perimeters.",
                url: "https://github.com/Devopstrio"
              },
              {
                title: "Devopstrio AI Framework",
                contributors: "320+ Contributors",
                tags: ["Python", "RAG", "VectorDB", "LangChain"],
                desc: "Reusable foundation for building AI-powered applications, LLM orchestration, and vector stores.",
                url: "https://github.com/Devopstrio"
              },
              {
                title: "FastAPI Microservices Boilerplate",
                contributors: "180+ Contributors",
                tags: ["Python", "FastAPI", "Docker", "OAuth2"],
                desc: "Asynchronous Python API template with automated Swagger docs, JWT auth, and Alembic migrations.",
                url: "https://github.com/Devopstrio"
              },
              {
                title: "GitHub Actions Workflow Library",
                contributors: "290+ Contributors",
                tags: ["CI/CD", "GitHub Actions", "Checkov", "Security"],
                desc: "Reusable CI/CD workflow actions for speculative terraform plans, security scanning, and image builds.",
                url: "https://github.com/Devopstrio"
              },
              {
                title: "DevSecOps Security Framework",
                contributors: "140+ Contributors",
                tags: ["Zero Trust", "Vault", "Trivy", "Compliance"],
                desc: "HashiCorp Vault secret isolation, vulnerability scanners, and automated SOC2 policy scripts.",
                url: "https://github.com/Devopstrio"
              }
            ].map((proj, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(225,29,72,0.15)] flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        <Github className="w-3.5 h-3.5" /> Devopstrio
                      </span>
                      <span className="text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">{proj.contributors}</span>
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
                      href={proj.url}
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

      {/* 7. TECHNICAL MEETUPS & EVENTS (Timeline Layout) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                ANNUAL SCHEDULE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Technical Meetups & Events Timeline
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Join our virtual summits, local meetups, and open-source sprint sessions throughout the year.
              </p>
            </div>
          </Reveal>

          <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {[
              { month: "January", title: "Global Cloud Summit", desc: "Keynote talks on multi-cloud Landing Zone design and zero-trust perimeter security." },
              { month: "March", title: "DevOps & K8s Meetup", desc: "Live cluster scaling demonstrations, Cilium eBPF networking, and ArgoCD GitOps pipelines." },
              { month: "May", title: "Enterprise AI Hackathon", desc: "48-hour global challenge building multi-agent RAG pipelines using LangGraph and vector stores." },
              { month: "July", title: "Open Source Sprint", desc: "A week of dedicated pull request contributions to Devopstrio Terraform & Helm libraries." },
              { month: "September", title: "Solution Architecture Day", desc: "Deep dive system design reviews and enterprise cloud migration post-mortems." },
              { month: "November", title: "Community Connect & MVP Awards", desc: "Annual celebration recognizing top open source contributors, mentors, and community speakers." }
            ].map((evt, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#030303] border-2 border-rose-500 group-hover:bg-rose-500 transition-colors" />

                {/* Month Pill on left for desktop */}
                <span className="hidden md:block absolute -left-32 top-1 text-xs font-mono font-bold text-rose-400 uppercase tracking-widest text-right w-24">
                  {evt.month}
                </span>

                <div className="p-6 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-colors space-y-2">
                  <span className="md:hidden text-xs font-mono font-bold text-rose-400 uppercase block">{evt.month}</span>
                  <h4 className="text-lg font-bold text-white">{evt.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. KNOWLEDGE HUB (Cards Grid) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                LEARNING & RESOURCES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Developer Knowledge Hub
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Access open engineering blogs, architecture decision records, tutorials, and step-by-step labs.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Engineering Blogs", icon: BookOpen, desc: "In-depth articles written by senior architects on cloud native patterns and performance tuning." },
              { title: "Architecture Guides", icon: Layers, desc: "Real-world Architecture Decision Records (ADRs) and multi-cloud blueprint reference guides." },
              { title: "Cloud Tutorials", icon: Cloud, desc: "Step-by-step Terraform and Bicep deployment tutorials for Azure, AWS, and Google Cloud." },
              { title: "DevOps Interactive Labs", icon: Terminal, desc: "Hands-on scenario labs for setting up GitHub Actions pipelines, Docker, and Kubernetes clusters." },
              { title: "AI Workshops", icon: BrainCircuit, desc: "Guided notebooks and workshops for building vector search engines and enterprise RAG apps." },
              { title: "API & IaC Documentation", icon: Code, desc: "Complete documentation for all Devopstrio public repositories and reusable frameworks." }
            ].map((hub, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 space-y-3 group h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <hub.icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{hub.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{hub.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-900">
                    <button
                      onClick={() => setJoinModalOpen(true)}
                      className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                    >
                      Access Content <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 9. LEARNING PATHS / CAREER ROADMAP */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                CAREER GROWTH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Engineering Progression Roadmap
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Clear skill progression supported by our community mentors, open-source work, and certification tracks.
              </p>
            </div>
          </Reveal>

          <div className="p-8 rounded-[28px] bg-[#0A0A0A] border border-zinc-800/80 overflow-x-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 min-w-[700px]">
              {[
                { level: "Student", desc: "Foundational CS & Cloud concepts" },
                { level: "Intern", desc: "First open source PR contributions" },
                { level: "Associate Engineer", desc: "Terraform & CI/CD deployment" },
                { level: "Software Engineer", desc: "Production feature ownership" },
                { level: "Senior Engineer", desc: "System design & mentoring" },
                { level: "Architect", desc: "Enterprise cloud topologies" },
                { level: "Principal Engineer", desc: "Global ecosystem leadership" }
              ].map((path, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center p-4 rounded-xl bg-black border border-zinc-800 w-full group hover:border-rose-500/50 transition-all">
                    <span className="text-[10px] font-mono text-rose-400 font-bold mb-1">LEVEL 0{idx + 1}</span>
                    <h4 className="text-sm font-bold text-white mb-1">{path.level}</h4>
                    <p className="text-[10px] text-zinc-500 font-medium">{path.desc}</p>
                  </div>

                  {idx < 6 && (
                    <div className="hidden lg:block text-rose-500 shrink-0">
                      <ArrowRight className="w-4 h-4 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 10. COMMUNITY GALLERY ⭐ (Visual Grid using assets/common images) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                LIFE IN THE COMMUNITY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Community Gallery
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Snapshots from our global hackathons, technical meetups, university sessions, and open-source coding sprints.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Hackathon Finals", img: "/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b 1.png" },
              { title: "London Technical Meetup", img: "/assets/common/82090d7be4ef5694954ce77f9cc2e627 1.png" },
              { title: "Architecture Workshop", img: "/assets/common/90361fed0bb781d7c86e451995b4dbce 1.png" },
              { title: "University Guest Lecture", img: "/assets/common/945ab601f043c558e0a8162da2a1eb4c 1.png" },
              { title: "Cloud Lab Session", img: "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca 1.png" },
              { title: "Open Source Sprint", img: "/assets/common/45ea830d170d382ade235db479060da7 1.png" }
            ].map((gal, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="relative rounded-[20px] overflow-hidden border border-zinc-800 shadow-lg group h-48 sm:h-60 bg-zinc-950">
                  <img
                    src={gal.img}
                    alt={gal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-bold text-white group-hover:text-rose-400 transition-colors block">
                      {gal.title}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 11. COMMUNITY SUCCESS STORIES */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                MEMBER ACHIEVEMENTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Community Success Stories
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Real engineers sharing their journey from community contributor to enterprise leader.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "From Student to Cloud Engineer",
                desc: "Started as a university community member, contributed 12 Terraform PRs, and landed a Cloud Architect position.",
                tag: "Career Transition"
              },
              {
                title: "Built Terraform Modules Used by Enterprises",
                desc: "Authored an open-source Azure CAF networking module now downloaded over 50,000 times on Terraform Registry.",
                tag: "Open Source MVP"
              },
              {
                title: "Published 20 Open Source Projects",
                desc: "Created reusable GitHub Action pipelines for automated Kubernetes security scanning and Checkov linting.",
                tag: "DevOps Creator"
              },
              {
                title: "Won Community Innovation Award",
                desc: "Led a 4-person hackathon team that created an autonomous AI agent for cloud cost optimization.",
                tag: "Hackathon Winner"
              }
            ].map((story, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] space-y-4 group h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                      {story.tag}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{story.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{story.desc}</p>
                  </div>
                  <button
                    onClick={() => setJoinModalOpen(true)}
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

      {/* 12. PARTNER COMMUNITIES (Logo Wall) */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-10">

          <div className="text-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block">
              ECOSYSTEM & COMMUNITY PARTNERS
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-zinc-400 font-bold text-sm md:text-base font-mono">
            {["GitHub", "Microsoft", "Google Cloud", "AWS", "Docker", "HashiCorp", "Red Hat", "CNCF", "Kubernetes", "Linux Foundation"].map((partner, idx) => (
              <span key={idx} className="px-4 py-2 rounded-xl bg-[#0A0A0A] border border-zinc-800/80 hover:text-white hover:border-rose-500/40 transition-colors">
                {partner}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 13. FAQ SECTION (Matching FAQ.tsx Accordion Standard) */}
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
              Everything you need to know before joining the Devopstrio Engineering Community.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {[
              {
                q: "How do I join the Devopstrio Engineering Community?",
                a: "Simply click the 'Join Community' button on this page. Registration is instant and grants you access to our active community Discord/Slack channels, GitHub org invite, and event notifications.",
                proof: "✓ Free Instant Access · 10,000+ Active Members",
                tags: ["Free Registration", "Global Discord/Slack", "GitHub Org Access"]
              },
              {
                q: "Is membership completely free?",
                a: "Yes, 100% free forever. We believe developer communities should be open to all without paywalls or subscription barriers.",
                proof: "✓ 0$ Cost · Open Source Community Policy",
                tags: ["No Credit Card Required", "Free Workshops", "Open Access"]
              },
              {
                q: "Can computer science students and beginners join?",
                a: "Absolutely! We encourage students and career-switchers to join. Our senior architects provide dedicated mentorship, code reviews, and project guidance.",
                proof: "✓ 30+ University Partners · Student Mentorship Program",
                tags: ["Student Friendly", "Code Reviews", "Mentorship"]
              },
              {
                q: "Can enterprises and companies collaborate with the community?",
                a: "Yes. Enterprise partners sponsor hackathons, co-host technical meetups, and recruit vetted engineering talent directly from our MVP network.",
                proof: "✓ Trusted by Fortune 500 & Series-C Startups",
                tags: ["Enterprise Sponsorship", "Talent Recruitment", "Co-hosted Meetups"]
              },
              {
                q: "Do you organize in-person meetups?",
                a: "We host bi-weekly global virtual sessions and monthly localized in-person meetups across London, New York, San Francisco, Bangalore, and Singapore.",
                proof: "✓ 80+ Annual Meetups Worldwide",
                tags: ["In-Person Meetups", "Global Virtual Summits", "Local Chapters"]
              },
              {
                q: "How can I contribute to Devopstrio public GitHub repositories?",
                a: "Check out our GitHub repository organization page at github.com/Devopstrio, filter by issues tagged 'good first issue' or 'help wanted', and submit your pull request!",
                proof: "✓ 250+ Active Open Source Repositories",
                tags: ["Good First Issue", "Terraform Modules", "PR Reviews"]
              },
              {
                q: "How do I become a Devopstrio Community Mentor or MVP?",
                a: "Members who consistently contribute open-source PRs, publish technical articles, or host workshops are awarded MVP status with conference speaking slots and sponsored certifications.",
                proof: "✓ Recognized Engineering Leadership Track",
                tags: ["MVP Status", "Conference Passes", "Sponsored Certifications"]
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
                Have specific questions about community chapters or sponsorships? Reach out to our community team directly.
              </p>
              <button
                onClick={() => setJoinModalOpen(true)}
                className="gap-2 inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
              >
                Contact Community Team <ArrowUpRight size={14} className="text-rose-500" />
              </button>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 14. CTA SECTION */}
      <section className="py-28 relative overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Join Thousands of Engineers Building Tomorrow
          </h2>
          <p className="text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-semibold">
            Become part of a growing community focused on innovation, collaboration, and continuous learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setJoinModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              <Users className="w-4 h-4 mr-2" /> Join Community
            </button>
            <button
              onClick={() => setMentorModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-rose-500 mr-2" /> Become a Mentor
            </button>
          </div>
        </div>
      </section>

      {/* JOIN COMMUNITY MODAL */}
      {joinModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => {
                setJoinModalOpen(false);
                setJoinSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {joinSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Welcome to Devopstrio Community!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-medium">
                  We&apos;ve sent an invite link to your email for our global Discord server and GitHub contributor organization.
                </p>
                <button
                  onClick={() => {
                    setJoinModalOpen(false);
                    setJoinSubmitted(false);
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
                  setJoinSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-rose-500" />
                    Join Engineering Community
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Free membership to global developer channels, open source projects, and meetups.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Lee"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@example.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Primary Role / Interest</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none">
                      <option>Software Developer / Engineer</option>
                      <option>Cloud / DevOps / SRE Engineer</option>
                      <option>AI / Machine Learning Engineer</option>
                      <option>Solution / Enterprise Architect</option>
                      <option>Computer Science Student / Graduate</option>
                      <option>Technology Leader / Executive</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setJoinModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Users className="w-3.5 h-3.5" /> Submit Membership
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* BECOME A MENTOR MODAL */}
      {mentorModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => {
                setMentorModalOpen(false);
                setMentorSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {mentorSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Mentor Application Received!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-medium">
                  Thank you for offering your expertise. Our community leads will connect with you to discuss workshop hosting and CFP speaking slots.
                </p>
                <button
                  onClick={() => {
                    setMentorModalOpen(false);
                    setMentorSubmitted(false);
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
                  setMentorSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-rose-500" />
                    Become a Community Mentor
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Share your experience through workshops, CFP speaking sessions, and code reviews.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Maya Lin"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="maya@company.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Area of Expertise</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Terraform, Kubernetes, GenAI RAG, Site Reliability"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setMentorModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Submit Mentor Profile
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
