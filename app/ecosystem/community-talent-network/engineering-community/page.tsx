"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import { heroPrimaryBtn, heroPrimaryIconWrap, heroSecondaryBtn, HeroTrustBar, StatStrip } from "../_shared/premium";
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


const faqs = [
  {
    "q": "How do I join the Devopstrio Engineering Community?",
    "a": "Registration is instant and 100% free. Clicking 'Join Community' grants access to our global Discord and Slack channels, GitHub organization, and calendar of technical sessions.",
    "proof": "✓ Free Instant Access · 25,000+ Active Members",
    "tags": [
      "Instant Access",
      "Global Discord/Slack",
      "GitHub Org Access"
    ]
  },
  {
    "q": "Is community membership completely free?",
    "a": "Yes, 100% free forever. We believe knowledge sharing, architectural peer reviews, and open-source tooling must remain open to all engineers globally.",
    "proof": "✓ $0 Cost · Open Source Community Policy",
    "tags": [
      "No Paywall",
      "Free Workshops",
      "Open Access"
    ]
  },
  {
    "q": "Can computer science students and beginners join?",
    "a": "Yes. We maintain early-career and student channels where senior architects host dedicated office hours, perform live code reviews, and guide project architectures.",
    "proof": "✓ Student Friendly · 1-on-1 Mentorship",
    "tags": [
      "Mentorship",
      "Code Reviews",
      "Learning Tracks"
    ]
  },
  {
    "q": "Can enterprises and companies collaborate with the community?",
    "a": "Yes. Enterprise partners sponsor hackathons, co-host technical summits, propose architectural RFCs, and recruit vetted engineering practitioners directly.",
    "proof": "✓ Fortune 500 & High-Growth Scale-Up Partners",
    "tags": [
      "Enterprise Collaboration",
      "Hackathons",
      "Tech Summits"
    ]
  },
  {
    "q": "Do you organize in-person meetups and global conferences?",
    "a": "We host quarterly in-person technical meetups across London, Manchester, New York, Bangalore, and Chennai, alongside monthly virtual global conferences.",
    "proof": "✓ 5 Global Delivery Hubs",
    "tags": [
      "London",
      "New York",
      "Bangalore",
      "Virtual Conferences"
    ]
  },
  {
    "q": "How can I contribute to Devopstrio public GitHub repositories?",
    "a": "Visit github.com/Devopstrio, explore repositories tagged 'good first issue', fork the repo, and submit pull requests following our CONTRIBUTING.md guidelines.",
    "proof": "✓ 500+ Public Contributors · 250+ Repositories",
    "tags": [
      "GitHub",
      "Pull Requests",
      "Open Source"
    ]
  },
  {
    "q": "How do I become a Devopstrio Community Mentor or MVP?",
    "a": "Members who consistently contribute high-quality code reviews, lead technical workshops, or publish community articles can apply for annual Devopstrio MVP recognition.",
    "proof": "✓ Annual MVP Honors & Global Travel Grants",
    "tags": [
      "MVP Recognition",
      "Community Leadership",
      "Speaking Grants"
    ]
  },
  {
    "q": "What engineering guilds are active within the community?",
    "a": "We host specialized guilds including Cloud Architecture & SRE, GenAI & Model Ops, Zero Trust Cybersecurity, Platform Engineering & GitOps, and Data Lakehouses.",
    "proof": "✓ 5 Specialized Guild Corridors",
    "tags": [
      "SRE Guild",
      "AI Guild",
      "Security Guild",
      "Platform Guild"
    ]
  },
  {
    "q": "Are there architectural feedback sessions for personal projects?",
    "a": "Yes! Every alternate Thursday, principal engineers host live 'Architecture Tear-downs' where community members can present system designs for constructive peer review.",
    "proof": "✓ Bi-Weekly Architectural Reviews",
    "tags": [
      "System Design",
      "Peer Review",
      "Architecture Feedback"
    ]
  },
  {
    "q": "How does the community handle intellectual property and licensing?",
    "a": "All code shared in public community repositories is licensed under permissive Apache 2.0 or MIT licenses, ensuring contributors retain authorship and public credit.",
    "proof": "✓ Apache 2.0 & MIT Permissive Standards",
    "tags": [
      "Open Source",
      "Apache 2.0",
      "Contributor Rights"
    ]
  }
];

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
        <div className="flex flex-col items-start gap-7">
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => setJoinModalOpen(true)}
              className={heroPrimaryBtn}
            >
              Join Community
              <span className={heroPrimaryIconWrap}>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("open-source-projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={heroSecondaryBtn}
            >
              <Github className="w-4 h-4 text-rose-500" /> Explore Projects
            </button>
          </div>
          <HeroTrustBar items={[
            { icon: "sparkles", text: "5 Specialized Guilds" },
            { icon: "users", text: "Architecture Workshops" },
            { icon: "zap", text: "AI Innovation Sessions" },
            { icon: "award", text: "DevOps Hackathons" }
          ]} />
        </div>
      </Hero>

      {/* HERO STATS STRIP */}
      <StatStrip
        stats={[
          { val: "10K+", label: "Community Members" },
          { val: "250+", label: "Open Source Projects" },
          { val: "75+", label: "Technical Events" },
          { val: "30+", label: "University Partners" }
        ]}
      />

      {/* 2. COMMUNITY STORY SECTION (Microsoft-Style Split Layout using assets/common images) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Large Image */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <img
                src="/webp/assets/ecosystem/engineering-community/our-engineering-philosophy.webp"
                alt="Our Engineering Philosophy"
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-500 block">
                OUR ENGINEERING PHILOSOPHY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Building More Than Software
              </h2>

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
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Join Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COMMUNITY HIGHLIGHTS (Large KPI Grid) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-500 block">
                COMMUNITY IMPACT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Global Community Scale
              </h2>
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
                  <span className="text-2xl md:text-3xl font-bold text-rose-500 tracking-tight block group-hover:scale-110 transition-transform">
                    {kpi.val}
                  </span>
                  <h4 className="text-xs font-bold text-white">{kpi.label}</h4>
                  <p className="text-xs text-zinc-500 font-mono">{kpi.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. COMMUNITY PILLARS (6 Premium Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-500 block">
                SPECIALIZED GUILDS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Our 6 Community Pillars
              </h2>
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
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">{pillar.desc}</p>
                  </div>
                  <div className="pt-4 mt-auto border-t border-zinc-900/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Active Community Guild</span>
                    <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">Enterprise Track</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. REAL ENGINEERING ACTIVITIES ⭐ (Alternating Sections using assets/common images) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-20">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-500 block">
                HANDS-ON LEARNING & BUILD
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Real Engineering Activities
              </h2>
            </div>
          </Reveal>

          {/* Activity 1: Open Source Collaboration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
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
            <div className="lg:col-span-6 flex items-center justify-center">
              <img
                src="/webp/assets/ecosystem/engineering-community/01-open-source-iac.webp"
                alt="Open Source & IaC"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Activity 2: Architecture Workshops */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
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
            <div className="lg:col-span-6 lg:order-1 flex items-center justify-center">
              <img
                src="/webp/assets/ecosystem/engineering-community/02-system-design.webp"
                alt="System Design"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Activity 3: AI Innovation Sessions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
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
            <div className="lg:col-span-6 flex items-center justify-center">
              <img
                src="/webp/assets/ecosystem/engineering-community/03-enterprise-ai.webp"
                alt="Enterprise AI"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Activity 4: DevOps Hackathons */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
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
            <div className="lg:col-span-6 lg:order-1 flex items-center justify-center">
              <img
                src="/webp/assets/ecosystem/engineering-community/04-48-hour-challenges.webp"
                alt="48-Hour Challenges"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 6. OPEN SOURCE PROJECTS (GitHub-Style Cards Grid) */}
      <section id="open-source-projects" className="scroll-mt-24 py-24 bg-[#030303] border-b border-zinc-900/80">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-500 block flex items-center justify-center gap-2">
                <Github className="w-4 h-4" /> COMMUNITY BLUEPRINTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Featured Open Source Projects
              </h2>
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
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">{proj.desc}</p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
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
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-500 block">
                ANNUAL SCHEDULE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Technical Meetups & Events Timeline
              </h2>
            </div>
          </Reveal>

          <div className="relative border-l-2 border-zinc-800 ml-6 md:ml-52 space-y-10 pl-6 md:pl-10">
            {[
              { month: "January", title: "Global Cloud Summit", desc: "Keynote talks on multi-cloud Landing Zone design and zero-trust perimeter security." },
              { month: "March", title: "DevOps & K8s Meetup", desc: "Live cluster scaling demonstrations, Cilium eBPF networking, and ArgoCD GitOps pipelines." },
              { month: "May", title: "Enterprise AI Hackathon", desc: "48-hour global challenge building multi-agent RAG pipelines using LangGraph and vector stores." },
              { month: "July", title: "Open Source Sprint", desc: "A week of dedicated pull request contributions to Devopstrio Terraform & Helm libraries." },
              { month: "September", title: "Solution Architecture Day", desc: "Deep dive system design reviews and enterprise cloud migration post-mortems." },
              { month: "November", title: "Community Connect & MVP Awards", desc: "Annual celebration recognizing top open source contributors, mentors, and community speakers." }
            ].map((evt, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot with Outer Glow */}
                <div className="absolute -left-[33px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-[#030303] border-2 border-rose-500 group-hover:bg-rose-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(244,63,94,0.4)]" />

                {/* Month on left for desktop: clearly positioned to the left of the dot with safe gap */}
                <div className="hidden md:flex absolute -left-48 top-1 w-36 justify-end items-center pr-4">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full whitespace-nowrap">
                    {evt.month}
                  </span>
                </div>

                <div className="p-6 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-colors space-y-2">
                  <span className="md:hidden text-xs font-mono font-bold text-rose-400 uppercase tracking-wider bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-full w-fit block mb-1">{evt.month}</span>
                  <h4 className="text-lg font-bold text-white">{evt.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. KNOWLEDGE HUB (Cards Grid) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-500 block">
                LEARNING & RESOURCES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Developer Knowledge Hub
              </h2>
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
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">{hub.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-zinc-900/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Verified Resource Hub</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 9. LEARNING PATHS / CAREER ROADMAP */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-500 block">
                CAREER GROWTH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Engineering Progression Roadmap
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { level: "Student", desc: "Foundational CS, Linux, Git, and core cloud architecture fundamentals." },
              { level: "Contributor", desc: "First open-source PR submission, bug triage, and active RFC debate." },
              { level: "Core Member", desc: "Regular pull request author, modular package maintainer, and reviewer." },
              { level: "Technical Mentor", desc: "Guiding early-career engineers through architecture tear-downs and code reviews." },
              { level: "Fellow / MVP", desc: "Shaping global engineering guidelines, speaking at summits, and leading RFCs." }
            ].map((prog, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-[#0D0E12] border border-zinc-800/80 hover:border-rose-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-rose-500 font-bold uppercase tracking-wider">
                      STAGE 0{idx + 1}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {prog.level}
                  </h4>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. COMMUNITY GALLERY ⭐ (Visual Grid using assets/common images) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-500 block">
                LIFE IN THE COMMUNITY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Community Gallery
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Hackathon Finals", img: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp" },
              { title: "London Technical Meetup", img: "/webp/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.webp" },
              { title: "Architecture Workshop", img: "/webp/assets/common/90361fed0bb781d7c86e451995b4dbce-1.webp" },
              { title: "University Guest Lecture", img: "/webp/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.webp" },
              { title: "Cloud Lab Session", img: "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp" },
              { title: "Open Source Sprint", img: "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp" }
            ].map((gal, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="relative rounded-[20px] overflow-hidden border border-zinc-800 shadow-lg group h-48 sm:h-60 bg-zinc-950">
                  <img src={gal.img}
                    alt={gal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy" />
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
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-500 block">
                MEMBER ACHIEVEMENTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Community Success Stories
              </h2>
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
                    <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded">
                      {story.tag}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{story.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">{story.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 12. PARTNER COMMUNITIES (Logo Wall) */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">

          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 block">
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

      <FAQ faqs={faqs} />
      <CTA
        ctaTitle="Join a Global Community of Over"
        ctaHighlight="5,000+ Engineers"
        ctaDesc="Collaborate with top developers, cloud architects, and AI researchers across community meetups, hackathons, and open Discord spaces."
        ctaBtnText="JOIN OUR COMMUNITY"
        backLink="/ecosystem/community-talent-network"
      />
    </main>
  );
}
