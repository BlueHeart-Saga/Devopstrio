"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import { heroPrimaryBtn, heroPrimaryIconWrap, heroSecondaryBtn, HeroTrustBar, StatStrip } from "../_shared/premium";
import {
  Users,
  Briefcase,
  GraduationCap,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Code,
  Terminal,
  Settings,
  Building,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  X,
  ChevronRight,
  Globe,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Check,
  ExternalLink,
  Sparkles,
  Laptop,
  Cpu,
  Database,
  Layers,
  Lock,
  Server
} from "lucide-react";

export default function TalentNetworkPage() {
  // Modal states
  const [joinModalOpen, setJoinModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [joinSubmitted, setJoinSubmitted] = useState<boolean>(false);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // FAQ Toggle
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-600 selection:text-white">

      {/* 1. HERO SECTION */}
      <Hero
        badge="COMMUNITY & TALENT NETWORK"
        prism={true}
        prismHueShift={4.8}
        title={
          <>
            Devopstrio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-600">
              Talent Network
            </span>
          </>
        }
        subtitle="Connect with global enterprise opportunities, principal mentors, scalable cloud projects, and a thriving engineering community built to accelerate technology careers."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "COMMUNITY & TALENT NETWORK", href: "/ecosystem/community-talent-network" },
          { label: "TALENT NETWORK" }
        ]}
      >
        <div className="flex flex-col items-start gap-7">
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => setJoinModalOpen(true)}
              className={heroPrimaryBtn}
            >
              Join the Network
              <span className={heroPrimaryIconWrap}>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("global-marketplace");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={heroSecondaryBtn}
            >
              Explore Opportunities
            </button>
          </div>
          <HeroTrustBar items={[
            { icon: "users", text: "25,000+ Vetted Practitioners" },
            { icon: "shield", text: "Zero Placement Fees" },
            { icon: "sparkles", text: "1-on-1 Architecture Mentorship" },
            { icon: "globe", text: "Remote & Hybrid Opportunities" }
          ]} />
        </div>
      </Hero>

      {/* HERO STATS STRIP */}
      <StatStrip
        stats={[
          { val: "25K+", label: "Engineering Professionals", sub: "Worldwide Network" },
          { val: "500+", label: "Enterprise Roles", sub: "Annual Placements" },
          { val: "50+", label: "Technology Partners", sub: "AWS, Azure, GCP & More" },
          { val: "20+", label: "Countries Represented", sub: "Global Reach" },
          { val: "100+", label: "Principal Mentors", sub: "1-on-1 Guidance" }
        ]}
      />

      {/* 2. TALENT NETWORK OVERVIEW */}
      <section className="py-20 md:py-28 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Image */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <img
                src="/webp/assets/ecosystem/talent-network/about-the-network.webp"
                alt="About The Network"
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>

            {/* Right Overview Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block">
                ABOUT THE NETWORK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                A Community Built for High-Impact Engineers
              </h2>
              <blockquote className="text-zinc-300 text-base md:text-lg border-l-2 border-rose-500 pl-4 py-1.5 italic font-medium leading-relaxed">
                &quot;Connecting exceptional engineering talent with enterprise innovation through a global technology ecosystem.&quot;
              </blockquote>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
                The Devopstrio Talent Network connects developers, cloud architects, DevOps practitioners, AI specialists, cybersecurity leads, and technology graduates with high-impact enterprise projects, hands-on mentorship, and continuous career advancement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Exclusive enterprise project matches",
                  "Direct 1-on-1 architecture mentorship",
                  "Global remote & full-time career tracks",
                  "Continuous cloud certification support",
                  "Peer code reviews & hackathons",
                  "Zero placement fee for candidates"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 font-medium bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-800/80">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setJoinModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] cursor-pointer"
                >
                  Join Talent Ecosystem <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COMMUNITY IMPACT (Large KPI Cards) */}
      <section className="py-20 md:py-28 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
                ECOSYSTEM SCALE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Our Global Community Impact
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
            {[
          { val: "25K+", label: "Community Members", desc: "Global Talent Network" },
          { val: "2,000+", label: "Job Opportunities", desc: "Enterprise Listings" },
          { val: "1,000+", label: "Successful Placements", desc: "Roles Filled" },
          { val: "300+", label: "Senior Mentors", desc: "Principal Architects" },
          { val: "150+", label: "Enterprise Clients", desc: "Global Scaleups" },
          { val: "40+", label: "Tech Events", desc: "Annual Summits" }
            ].map((kpi, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[22px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all text-center space-y-2.5 group h-full flex flex-col justify-between">
                  <span className="text-3xl sm:text-4xl font-bold text-rose-500 tracking-tight block group-hover:scale-105 transition-transform">
                    {kpi.val}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{kpi.label}</h4>
                    <p className="text-xs text-zinc-500 font-mono">{kpi.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHO CAN JOIN (8 Large Feature Cards) */}
      <section className="py-20 md:py-28 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
                INCLUSIVE ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Who Can Join the Network
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Software Engineers", icon: Code, desc: "Frontend, Backend, and Full-Stack developers architecting robust microservices and distributed APIs." },
              { title: "Cloud Engineers", icon: Cloud, desc: "Azure, AWS, and GCP infrastructure specialists, landing zone builders, and cloud modernizers." },
              { title: "DevOps Engineers", icon: Settings, desc: "GitOps practitioners, Kubernetes cluster operators, Terraform authors, and CI/CD automation specialists." },
              { title: "AI Engineers", icon: BrainCircuit, desc: "LLM orchestration, autonomous agent developers, RAG pipelines, and vector database researchers." },
              { title: "Data Engineers", icon: Database, desc: "Apache Kafka streaming, Databricks lakehouses, Snowflake pipelines, and real-time telemetry analytics." },
              { title: "Cybersecurity Experts", icon: ShieldCheck, desc: "Zero Trust architects, DevSecOps pipeline gatekeepers, SOC compliance leads, and IAM specialists." },
              { title: "Students & Graduates", icon: GraduationCap, desc: "Early-career tech talent seeking accredited internships, architecture bootcamps, and entry-level roles." },
              { title: "Enterprise Partners", icon: Building, desc: "Global organizations looking to recruit pre-vetted senior engineers or deploy dedicated agile squads." }
            ].map((role, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-7 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 space-y-4 group h-full flex flex-col justify-between">
                  <div className="space-y-3.5">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <role.icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      {role.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-zinc-900">
                    {role.title === "Enterprise Partners" ? (
                      <button
                        onClick={() => setContactModalOpen(true)}
                        className="text-xs sm:text-sm font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1.5 cursor-pointer"
                      >
                        Request Talent <ArrowUpRight className="w-4 h-4" />
                      </button>
                    ) : role.title === "Students & Graduates" ? (
                      <Link
                        href="https://devopstrio.co.uk/about/global-internship"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1.5 cursor-pointer"
                      >
                        Explore Internship <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link
                        href="https://devopstrio.co.uk/careers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1.5 cursor-pointer"
                      >
                        Explore Careers <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TALENT CATEGORIES (Grid) */}
      <section className="py-20 md:py-28 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
                SPECIALIZATION MATRIX
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Talent Categories & Core Stacks
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {[
              { cat: "Software Engineering", skills: "React, Next.js, Node.js, Go, Python, Spring Boot" },
              { cat: "Cloud Infrastructure", skills: "Azure CAF, AWS Control Tower, Google Cloud, Terraform" },
              { cat: "DevOps & GitOps", skills: "Kubernetes, Helm, ArgoCD, GitHub Actions, GitLab CI" },
              { cat: "AI & Machine Learning", skills: "LangChain, LlamaIndex, OpenAI, Qdrant, Vector DBs" },
              { cat: "Cybersecurity & IAM", skills: "HashiCorp Vault, SOC2, Zero Trust, Entra ID, Sentinel" },
              { cat: "Data & Analytics", skills: "Apache Kafka, Flink, Spark, Snowflake, Databricks" },
              { cat: "Quality Engineering", skills: "Playwright, Cypress, Jest, k6, Performance & Chaos" },
              { cat: "Product & Architecture", skills: "Event-Driven Systems, Domain-Driven Design, SaaS" }
            ].map((tc, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all space-y-2.5 group">
                <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider block">
                  DOMAIN 0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                  {tc.cat}
                </h4>
                <p className="text-xs text-zinc-400 font-mono font-normal leading-relaxed">
                  {tc.skills}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ENGINEERING CAREER JOURNEY (Roadmap) */}
      <section className="py-20 md:py-28 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
                CAREER TRAJECTORY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Engineering Career Journey
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {[
              { step: "Student", desc: "CS fundamentals, system architecture theory, and algorithms." },
              { step: "Learning", desc: "Cloud platforms, containerization, and GitOps workflows." },
              { step: "Certification", desc: "Official AWS, Azure, and Google Cloud associate badges." },
              { step: "Internship", desc: "12-week paid client-facing delivery squad residency." },
              { step: "Associate", desc: "Production microservices, API integrations, and code reviews." },
              { step: "Software Eng", desc: "Scalable backend systems, resilient event messaging, and SRE." },
              { step: "Senior Eng", desc: "Feature squad tech leadership, CI/CD pipelines, and FinOps." },
              { step: "Architect", desc: "Enterprise cloud landing zones, CAF compliance, and zero trust." },
              { step: "Principal", desc: "Multi-region enterprise delivery governance and technical advisory." },
              { step: "Tech Leader", desc: "Engineering fellowship, strategic technology roadmaps, and MVP." }
            ].map((stage, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-[#0D0E12] border border-zinc-800/80 hover:border-rose-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center"
              >
                <div>
                  <span className="text-xs font-mono text-rose-500 font-bold uppercase tracking-wider block mb-2">
                    STAGE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {stage.step}
                  </h4>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. GLOBAL TALENT MARKETPLACE (Image + Text) */}
      <section id="global-marketplace" className="scroll-mt-24 py-20 md:py-28 bg-[#030303] border-b border-zinc-900/80">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block">
                GLOBAL OPPORTUNITIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                Global Talent Marketplace
              </h2>

              <div className="grid grid-cols-2 gap-3.5 pt-2">
                {[
                  "Enterprise Cloud Projects", "Remote-First Flexibility",
                  "Contract & Fractional Roles", "Full-Time Career Tracks",
                  "Graduate Internships", "Consulting Engagements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 font-medium bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-800/80">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="https://devopstrio-global-qa-e2gehkbdfmbfgddy.southindia-01.azurewebsites.net/careers/jobs"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] cursor-pointer"
                >
                  Browse Open Positions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <img
                src="/webp/assets/ecosystem/talent-network/global-opportunities.webp"
                alt="Global Opportunities"
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 8. SKILLS & CERTIFICATIONS (Technology Badges) */}
      <section className="py-20 md:py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">

          <div className="text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-zinc-400 block mb-3">
              VERIFIED CREDENTIALS
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Skills & Certification Badging
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3.5 text-zinc-300 font-mono text-xs md:text-sm">
            {[
              "Microsoft Azure Solutions Architect (AZ-305)",
              "AWS Certified DevOps Engineer – Professional",
              "Google Cloud Professional Cloud Architect",
              "Certified Kubernetes Administrator (CKA)",
              "HashiCorp Certified: Terraform Associate",
              "GitHub Actions Specialist",
              "Docker Certified Associate (DCA)",
              "Python Institute Certified Developer",
              "FastAPI & Microservices Architect",
              "CISSP – Information Systems Security",
              "CompTIA Security+ Credential",
              "Databricks Certified Data Engineer"
            ].map((cert, idx) => (
              <span
                key={idx}
                className="px-5 py-3 rounded-xl bg-[#0D0E12] border border-zinc-800/80 hover:border-rose-500/40 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(244,63,94,0.12)] hover:text-white transition-all duration-300 font-medium shadow-sm"
              >
                📜 {cert}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 9. LEARNING & MENTORSHIP (Cards) */}
      <section className="py-20 md:py-28 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
                CAREER ACCELERATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Learning & Mentorship Programs
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {[
              { title: "Career Mentoring", desc: "1-on-1 personalized career roadmapping with practicing principal architects." },
              { title: "Technical Coaching", desc: "Hands-on code reviews, refactoring sessions, and system design whiteboarding." },
              { title: "Mock Interviews", desc: "Simulated algorithmic interviews and high-concurrency system architecture tests." },
              { title: "Resume Guidance", desc: "Portfolio optimization to meet the strict screening criteria of enterprise leaders." },
              { title: "Cert Preparation", desc: "Sponsored cohorts and study circles targeting high-value AWS and Azure credentials." },
              { title: "Leadership Track", desc: "Preparing experienced senior developers for Engineering Manager and Staff roles." },
              { title: "Architecture Reviews", desc: "Constructive teardowns and architectural feedback on personal code repositories." },
              { title: "Community Forum", desc: "24/7 dedicated Discord and Slack channels for real-time technical problem solving." }
            ].map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0A0A0A] border border-zinc-800 space-y-2.5 hover:border-rose-500/40 transition-all duration-300 group">
                <h4 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                  {m.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. SUCCESS STORIES */}
      <section className="py-20 md:py-28 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
                PROVEN OUTCOMES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Network Success Stories
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "From Graduate to Cloud Architect", tag: "Career Acceleration", desc: "Joined as a university graduate, completed intensive 1-on-1 Azure mentorship, and secured a full-time Cloud Architect position within 6 months." },
              { title: "Enterprise DevOps Specialist", tag: "Promotion Milestone", desc: "Senior engineer earned CKA certification through community study groups and spearheaded a 100-node mission-critical Kubernetes migration." },
              { title: "Principal AI Engineer Placement", tag: "Production AI", desc: "Architected open-source RAG frameworks with community peers and secured a Principal AI Architect role at a premier fintech organization." },
              { title: "Community Mentor Growth", tag: "Mentorship Impact", desc: "Staff Architect guided 12 junior practitioners through production CI/CD pipelines while co-authoring production Terraform modules." }
            ].map((story, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-7 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all space-y-4 group h-full flex flex-col justify-between">
                  <div className="space-y-3.5">
                    <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-md inline-block">
                      {story.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      {story.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 11. PARTNER COMPANIES (Logo Wall) */}
      <section className="py-20 md:py-24 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">

          <div className="text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-zinc-400 block mb-3">
              ENTERPRISE ALLIANCES
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Trusted by Leading Technology Partners & Enterprises
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-zinc-300 font-mono text-sm md:text-base font-semibold">
            {[
              "Microsoft", "AWS", "Google Cloud", "Oracle", "SAP",
              "Cisco", "GitHub", "Docker", "Red Hat", "HashiCorp"
            ].map((company, idx) => (
              <span
                key={idx}
                className="px-5 py-3 rounded-xl bg-[#0A0A0A] border border-zinc-800/80 hover:text-white hover:border-rose-500/40 transition-colors"
              >
                🏢 {company}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 12. COMMUNITY BENEFITS (Feature Grid) */}
      <section className="py-20 md:py-28 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
                MEMBERSHIP ADVANTAGES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Comprehensive Member Benefits
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {[
              "Exclusive Enterprise Job Board",
              "1-on-1 Mentor Office Hours",
              "Global Networking Summits",
              "Hands-on Cloud Labs",
              "Exam Voucher Subsidies",
              "Monthly Architecture Webinars",
              "Open-Source Framework Teams",
              "Executive Career Advisory"
            ].map((ben, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#0A0A0A] border border-zinc-800 flex items-center gap-3.5 text-xs sm:text-sm font-semibold text-white hover:border-rose-500/40 transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                <span>{ben}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 13. EVENTS & NETWORKING */}
      <section className="py-20 md:py-28 bg-[#030303] border-b border-zinc-900/80 relative overflow-hidden">
            {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.2) 45%, transparent 80%)" }}
      />
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">

          <Reveal>
            <div className="text-center">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
                GLOBAL GATHERINGS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Summits, Meetups & Hackathons
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3.5 text-center">
            {[
              { step: "01", event: "Engineering Meetup", desc: "Monthly technical teardowns & peer code sessions." },
              { step: "02", event: "Cloud Summit", desc: "Multi-cloud architecture keynotes & enterprise panels." },
              { step: "03", event: "AI Workshop", desc: "Hands-on GenAI agentic workflows & RAG labs." },
              { step: "04", event: "DevOps Bootcamp", desc: "Production Kubernetes, GitOps & security scanning." },
              { step: "05", event: "Career Fair", desc: "Exclusive hiring roundtables with enterprise clients." },
              { step: "06", event: "Global Conference", desc: "Annual Devopstrio global flagship engineering summit." }
            ].map((evt, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0D0E12] border border-zinc-800/80 hover:border-rose-500/40 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(244,63,94,0.12)] transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-rose-500 font-bold uppercase tracking-wider block mb-2">EVENT {evt.step}</span>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">{evt.event}</h4>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 14. FAQ SECTION */}
      <FAQ
        badge="KNOWLEDGE BASE"
        title="Questions we get"
        highlight="asked every day."
        faqs={[
  {
    "q": "Who can join the Devopstrio Talent Network?",
    "a": "Engineers of all levels—software developers, cloud architects, DevOps specialists, AI researchers, cybersecurity practitioners, and technology students—are welcome to apply and join.",
    "proof": "✓ 25,000+ Active Members Worldwide",
    "tags": [
      "All Experience Levels",
      "Free Membership",
      "Global Network"
    ]
  },
  {
    "q": "Is membership in the Talent Network completely free?",
    "a": "Yes, 100% free for candidates and community members. We never charge developers placement fees, recruitment commissions, or subscription dues.",
    "proof": "✓ $0 Cost for Engineers & Students",
    "tags": [
      "Free Access",
      "Zero Fees",
      "Open Community"
    ]
  },
  {
    "q": "Do I need prior enterprise experience to join?",
    "a": "No prior enterprise experience is required. We maintain specialized tracks for university students and early-career developers, complete with hands-on labs, 1-on-1 mentorship, and certification bootcamps.",
    "proof": "✓ Student & Junior Pathways Included",
    "tags": [
      "Student Track",
      "Mentorship",
      "Internships"
    ]
  },
  {
    "q": "Are remote opportunities available worldwide?",
    "a": "Yes! Over 80% of enterprise project placements matched through our network offer full remote flexibility or hybrid options across North America, Europe, the UK, and APAC.",
    "proof": "✓ 80%+ Remote Opportunities",
    "tags": [
      "Remote Work",
      "Global Placement",
      "Flexible Models"
    ]
  },
  {
    "q": "How do I connect with senior engineering mentors?",
    "a": "Upon joining, members gain access to our weekly architecture office hours, private community Slack channels, and 1-on-1 mentor matching with principal engineers from AWS, Azure, and Google Cloud.",
    "proof": "✓ 100+ Active Principal Mentors",
    "tags": [
      "1-on-1 Mentorship",
      "Office Hours",
      "Principal Engineers"
    ]
  },
  {
    "q": "How can enterprise companies hire engineers through the network?",
    "a": "Enterprise hiring teams can click 'Hire Talent' to connect with our talent solutions team. We provide curated, pre-vetted candidate shortlists matched to specific cloud, DevOps, or AI architectures within 72 hours.",
    "proof": "✓ 72-Hour Candidate Shortlists",
    "tags": [
      "Enterprise Hiring",
      "Pre-Vetted",
      "Fast Onboarding"
    ]
  },
  {
    "q": "How does Devopstrio vet engineers in the network?",
    "a": "Our multi-stage assessment includes peer-reviewed system design interviews, automated coding benchmarks, production infrastructure troubleshooting scenarios, and verified security credentials.",
    "proof": "✓ Rigorous 4-Stage Technical Vetting",
    "tags": [
      "System Design",
      "Code Challenges",
      "Verified Skills"
    ]
  },
  {
    "q": "What technical domains are currently in highest demand?",
    "a": "Enterprise demand is heavily centered on Kubernetes platform engineering, Multi-Cloud SRE, Generative AI inference architectures, DevSecOps automation, and Data Lakehouse engineering.",
    "proof": "✓ High-Growth Enterprise Focus Areas",
    "tags": [
      "Kubernetes",
      "Platform Engineering",
      "GenAI",
      "DevSecOps"
    ]
  },
  {
    "q": "Can university students and recent graduates join the network?",
    "a": "Yes. Students can apply for our dedicated Global Internship Programme, participate in sponsored hackathons, and gain access to free sandbox cloud credits.",
    "proof": "✓ Dedicated Student Corridor",
    "tags": [
      "Internships",
      "University MoUs",
      "Free Credits"
    ]
  },
  {
    "q": "What is the typical timeline from joining to enterprise project placement?",
    "a": "Pre-vetted members are typically introduced to enterprise projects within 1 to 2 weeks. Vetting is asynchronous and can be completed at your own pace.",
    "proof": "✓ 1-2 Week Average Placement Window",
    "tags": [
      "Rapid Matching",
      "Direct Enterprise Roles",
      "Fast Track"
    ]
  }
]}
      />

      {/* 15. CTA SECTION */}
      <CTA
        ctaTitle="Your Next Engineering Opportunity"
        ctaHighlight="Starts Here"
        ctaDesc="Become part of a global engineering ecosystem where continuous learning, peer collaboration, and innovation create lasting career milestones."
        ctaBtnText="JOIN TALENT NETWORK"
        backLink="/ecosystem/community-talent-network"
      />

      {/* MODAL 1: JOIN THE NETWORK */}
      {joinModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-7 space-y-6 relative shadow-2xl">
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
                <div className="w-16 h-16 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Submitted!</h3>
                <p className="text-sm text-zinc-300 max-w-sm mx-auto font-normal leading-relaxed">
                  Welcome to the Devopstrio Talent Network! Check your inbox for your community Slack/Discord invitation and onboarding link.
                </p>
                <button
                  onClick={() => {
                    setJoinModalOpen(false);
                    setJoinSubmitted(false);
                  }}
                  className="px-7 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
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
                  <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-rose-500" />
                    Join Devopstrio Talent Network
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-normal">
                    Free global engineering community membership. Access enterprise roles and 1-on-1 mentorship.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Santos"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="maria@example.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1.5">Primary Technical Discipline</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-rose-500 focus:outline-none">
                      <option>Cloud Engineering & Infrastructure</option>
                      <option>DevOps, GitOps & Kubernetes</option>
                      <option>AI, LLMs & Vector Databases</option>
                      <option>Full-Stack / Software Engineering</option>
                      <option>Cybersecurity & Zero Trust</option>
                      <option>Data Engineering & Streaming</option>
                      <option>University Student / Graduate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1.5">Years of Experience</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-rose-500 focus:outline-none">
                      <option>Student / Recent Graduate</option>
                      <option>1 - 3 Years</option>
                      <option>4 - 7 Years</option>
                      <option>8+ Years (Senior / Architect)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setJoinModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <Users className="w-4 h-4" /> Submit Profile
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: CONTACT COMMUNITY TEAM (FOR ENTERPRISES) */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-7 space-y-6 relative shadow-2xl">
            <button
              onClick={() => {
                setContactModalOpen(false);
                setContactSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {contactSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-sm text-zinc-300 max-w-sm mx-auto font-normal leading-relaxed">
                  Our Community Talent Account Lead will reach out within 24 hours to discuss your engineering team requirements.
                </p>
                <button
                  onClick={() => {
                    setContactModalOpen(false);
                    setContactSubmitted(false);
                  }}
                  className="px-7 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                    <Building className="w-5 h-5 text-rose-500" />
                    Enterprise Hiring & Talent Request
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-normal">
                    Hire pre-vetted senior engineers or deploy dedicated agile cloud pods.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1.5">Company / Organization Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Financial Technologies"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="manager@acme.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1.5">Roles Needed</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-rose-500 focus:outline-none">
                      <option>Cloud & Infrastructure Architects (Azure/AWS)</option>
                      <option>DevOps & Kubernetes Engineers</option>
                      <option>AI & GenAI Product Developers</option>
                      <option>Full Agile Pod (5-10 Engineers)</option>
                      <option>Cybersecurity & Compliance Specialists</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setContactModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <Building className="w-4 h-4" /> Request Talent Pod
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
