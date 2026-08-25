"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
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

      {/* 1. HERO SECTION (Using Standard Devopstrio Hero Component) */}
      <Hero
        badge="COMMUNITY & TALENT NETWORK"
        prism={true}
        prismHueShift={4.8}
        title={
          <>
            Devopstrio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Talent Network
            </span>
          </>
        }
        subtitle="Connect with global opportunities, industry experts, enterprise projects, and a thriving engineering community designed to accelerate your technology career."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "COMMUNITY & TALENT NETWORK", href: "/ecosystem/community-talent-network" },
          { label: "TALENT NETWORK" }
        ]}
      >
        <div className="flex flex-wrap gap-4 items-center justify-start">
          <button
            onClick={() => setJoinModalOpen(true)}
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
          >
            Join the Network
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("global-marketplace");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 text-white transition-all cursor-pointer"
          >
            Explore Opportunities
          </button>
        </div>
      </Hero>

      {/* HERO STATS STRIP */}
      <section className="w-full py-12 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { val: "25K+", label: "Engineering Professionals" },
              { val: "500+", label: "Enterprise Opportunities" },
              { val: "50+", label: "Technology Partners" },
              { val: "20+", label: "Countries Represented" },
              { val: "100+", label: "Dedicated Mentors" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0A0A0A] border border-zinc-800/80 text-center hover:border-rose-500/40 transition-colors">
                <span className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1 block">
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

      {/* 2. TALENT NETWORK OVERVIEW (Split Layout) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[24px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
                <img src="/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp"
                  alt="Engineers discussing cloud architecture in modern office"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-sm border border-zinc-800 text-xs font-mono text-zinc-300">
                  <span className="text-rose-400 font-bold">✓ Global Engineering Community</span> &bull; 25,000+ Vetted Technology Professionals
                </div>
              </div>
            </div>

            {/* Right Overview Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                ABOUT THE NETWORK
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                A Community Built for Technology Professionals
              </h2>
              <blockquote className="text-zinc-300 text-sm md:text-base border-l-2 border-rose-500 pl-4 py-1 italic font-semibold">
                &quot;Connecting exceptional engineering talent with enterprise innovation through a global technology community.&quot;
              </blockquote>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-semibold">
                The Devopstrio Talent Network connects developers, architects, DevOps engineers, AI specialists, cybersecurity experts, cloud engineers, students, and technology leaders with enterprise projects, mentorship, and continuous learning opportunities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Exclusive enterprise project matches",
                  "Direct 1-on-1 architecture mentorship",
                  "Global remote & full-time career tracks",
                  "Continuous cloud certification support",
                  "Peer code reviews & hackathons",
                  "Zero placement fee for candidates"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-300 font-medium bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setJoinModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Join Talent Ecosystem <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COMMUNITY IMPACT (Large KPI Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                ECOSYSTEM SCALE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Our Community Impact
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Building career opportunities and enterprise partnerships across the global technology ecosystem.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { val: "25K+", label: "Community Members", desc: "Global Talent Network" },
              { val: "2,000+", label: "Job Opportunities", desc: "Enterprise Listings" },
              { val: "1,000+", label: "Successful Placements", desc: "Roles Filled" },
              { val: "300+", label: "Senior Mentors", desc: "Principal Architects" },
              { val: "150+", label: "Enterprise Clients", desc: "Fortune 500 & Scaleups" },
              { val: "40+", label: "Tech Events", desc: "Annual Summits" }
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

      {/* 4. WHO CAN JOIN (8 Large Feature Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                INCLUSIVE ECOSYSTEM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Who Can Join
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Designed for professionals at every stage of their engineering journey, from students to principal leads.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Software Engineers", icon: Code, desc: "Frontend, Backend, and Full-Stack developers building scalable enterprise microservices." },
              { title: "Cloud Engineers", icon: Cloud, desc: "Azure, AWS, and GCP infrastructure architects and landing zone engineers." },
              { title: "DevOps Engineers", icon: Settings, desc: "GitOps practitioners, Kubernetes operators, and CI/CD automation specialists." },
              { title: "AI Engineers", icon: BrainCircuit, desc: "LLM orchestration, RAG architectures, and vector database researchers." },
              { title: "Data Engineers", icon: Database, desc: "Apache Kafka streaming, Databricks, and Snowflake pipeline developers." },
              { title: "Cybersecurity Experts", icon: ShieldCheck, desc: "Zero Trust architects, DevSecOps practitioners, and SOC compliance leads." },
              { title: "Students & Graduates", icon: GraduationCap, desc: "Early-career tech talent seeking internships, bootcamps, and entry-level roles." },
              { title: "Enterprise Partners", icon: Building, desc: "Organizations looking to hire vetted engineering talent or deploy agile pods." }
            ].map((role, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 space-y-3 group h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <role.icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{role.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{role.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-zinc-900">
                    <button
                      onClick={() => setJoinModalOpen(true)}
                      className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                    >
                      Join Network <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TALENT CATEGORIES (Grid) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                SPECIALIZATION MATRIX
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Talent Categories & Domain Focus
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Core technical stacks covered across our talent ecosystem.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { cat: "Software Engineering", skills: "React, Next.js, Node.js, Go, Python" },
              { cat: "Cloud Engineering", skills: "Azure CAF, AWS Control Tower, GCP" },
              { cat: "DevOps & GitOps", skills: "Kubernetes, Terraform, GitHub Actions" },
              { cat: "AI & ML", skills: "LangChain, OpenAI, Qdrant, Vector DBs" },
              { cat: "Cybersecurity", skills: "HashiCorp Vault, SOC2, Zero Trust" },
              { cat: "Data Engineering", skills: "Kafka, Flink, Spark, Snowflake" },
              { cat: "QA Automation", skills: "Playwright, Jest, E2E Testing" },
              { cat: "Product SaaS", skills: "Microservices, System Architecture" }
            ].map((tc, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all space-y-2 group">
                <span className="text-[9px] font-mono text-rose-400 font-bold uppercase block">DOMAIN 0{idx + 1}</span>
                <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">{tc.cat}</h4>
                <p className="text-[11px] text-zinc-400 font-mono font-medium">{tc.skills}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ENGINEERING CAREER JOURNEY (Microsoft-style Roadmap) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                CAREER TRAJECTORY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Engineering Career Journey
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Continuous professional growth roadmap guided by industry mentors.
              </p>
            </div>
          </Reveal>

          <div className="p-8 rounded-[28px] bg-[#0A0A0A] border border-zinc-800/80 overflow-x-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2 min-w-[950px]">
              {[
                { step: "Student", desc: "CS Foundations" },
                { step: "Learning", desc: "DevOps & Cloud 101" },
                { step: "Certification", desc: "Azure/AWS Badge" },
                { step: "Internship", desc: "12-Week Practice" },
                { step: "Associate", desc: "Junior Developer" },
                { step: "Software Eng", desc: "Production Coding" },
                { step: "Senior Eng", desc: "Lead Feature PRs" },
                { step: "Architect", desc: "System Design" },
                { step: "Principal", desc: "Enterprise Lead" },
                { step: "Tech Leader", desc: "Executive VP" }
              ].map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-black border border-zinc-800 w-full group hover:border-rose-500/50 transition-all">
                    <span className="text-[8px] font-mono text-rose-400 font-bold mb-0.5">0{idx + 1}</span>
                    <h4 className="text-[11px] font-bold text-white mb-0.5">{stage.step}</h4>
                    <p className="text-[8px] text-zinc-500 font-medium">{stage.desc}</p>
                  </div>

                  {idx < 9 && (
                    <div className="hidden lg:block text-rose-500 shrink-0">
                      <ArrowRight className="w-3 h-3 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. GLOBAL TALENT MARKETPLACE (Image + Text) */}
      <section id="global-marketplace" className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                GLOBAL OPPORTUNITIES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Global Talent Marketplace
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-semibold">
                Connect with enterprise organizations, technology partners, startups, and digital transformation projects across industries.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Enterprise Cloud Projects", "Remote Opportunities",
                  "Contract & Fractional Roles", "Full-Time Career Tracks",
                  "Graduate Internships", "Consulting Engagements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[24px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 group">
                <img src="/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp"
                  alt="Global engineering teams collaborating"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" />
                <div className="p-4 bg-black/80 backdrop-blur-sm border-t border-zinc-800 text-xs font-mono text-zinc-300 flex justify-between items-center">
                  <span>Remote Engineering Pod Collaboration</span>
                  <span className="text-rose-400 font-bold">20+ Countries</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. SKILLS & CERTIFICATIONS (Technology Badges with Logos) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-10">

          <div className="text-center space-y-2">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block">
              VERIFIED CREDENTIALS
            </span>
            <h3 className="text-xl font-bold text-white">Skills & Certification Badging</h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-zinc-300 font-bold text-xs font-mono">
            {[
              "Microsoft Azure Solutions Architect", "AWS Certified DevOps Engineer", "Google Cloud Professional",
              "Certified Kubernetes Administrator (CKA)", "HashiCorp Certified: Terraform Associate",
              "GitHub Actions Specialist", "Docker Certified Associate", "Python Institute PCEP",
              "FastAPI Developer", "CISSP Security Specialist", "Security+ Credential", "Databricks Data Engineer"
            ].map((cert, idx) => (
              <span key={idx} className="px-4 py-2.5 rounded-xl bg-[#0A0A0A] border border-zinc-800 hover:border-rose-500/40 hover:text-white transition-colors">
                📜 {cert}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 9. LEARNING & MENTORSHIP (Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                CAREER GROWTH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Learning & Mentorship Programs
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Access structured mentorship and 1-on-1 coaching from principal architects.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Career Mentoring", desc: "1-on-1 career path guidance with principal architects." },
              { title: "Technical Coaching", desc: "Hands-on code reviews and system architecture design." },
              { title: "Mock Interviews", desc: "Simulated system design and algorithmic technical screens." },
              { title: "Resume Guidance", desc: "Optimizing engineering profiles for enterprise hiring managers." },
              { title: "Cert Preparation", desc: "Sponsored study groups for AWS/Azure certifications." },
              { title: "Leadership Track", desc: "Preparing senior engineers for Engineering Manager roles." },
              { title: "Architecture Reviews", desc: "Live whiteboarding feedback on personal side projects." },
              { title: "Community Forum", desc: "24/7 private Slack & Discord technical Q&A channels." }
            ].map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#0A0A0A] border border-zinc-800 space-y-2 hover:border-rose-500/40 transition-all">
                <h4 className="text-sm font-bold text-white">{m.title}</h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. SUCCESS STORIES */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                REAL JOURNEYS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Network Success Stories
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                How members of our talent network progressed their careers.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "From Intern to Cloud Engineer", tag: "Career Advancement", desc: "Joined as a university graduate, completed 1-on-1 Azure mentoring, and was placed as a full-time Cloud Architect in 6 months." },
              { title: "Enterprise DevOps Specialist", tag: "Promotion Story", desc: "DevOps engineer gained CKA certification through community study groups and led a 100-node Kubernetes migration." },
              { title: "AI Engineer Placement", tag: "Production AI", desc: "Built open-source RAG projects with community support and landed a Principal AI Architect role at a fintech scaleup." },
              { title: "Community Mentor Growth", tag: "Mentorship", desc: "Senior Architect mentored 12 junior developers while co-authoring Devopstrio Terraform modules." }
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

      {/* 11. PARTNER COMPANIES (Logo Wall) */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-10">

          <div className="text-center space-y-2">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block">
              ENTERPRISE OPPORTUNITIES
            </span>
            <h3 className="text-xl font-bold text-white">Partner Companies & Clients</h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-zinc-400 font-bold text-xs md:text-sm font-mono">
            {[
              "Microsoft", "AWS", "Google Cloud", "Oracle", "SAP",
              "Cisco", "GitHub", "Docker", "Red Hat", "HashiCorp"
            ].map((company, idx) => (
              <span key={idx} className="px-4 py-2.5 rounded-xl bg-[#0A0A0A] border border-zinc-800/80 hover:text-white hover:border-rose-500/40 transition-colors">
                🏢 {company}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 12. COMMUNITY BENEFITS (Feature Grid) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                MEMBER PERKS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Community Member Benefits
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                What you receive when joining the Devopstrio Talent Network.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Exclusive Job Listings", "1-on-1 Mentorship Access", "Global Networking Events", "Hands-on Tech Workshops",
              "Certification Voucher Discounts", "Monthly Industry Webinars", "Open Source Collaborations", "Career Coaching Sessions"
            ].map((ben, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#0A0A0A] border border-zinc-800 flex items-center gap-3 text-xs font-bold text-white hover:border-rose-500/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{ben}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 13. EVENTS & NETWORKING (Timeline & Photos) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                NETWORKING CALENDAR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Events & Community Gatherings
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Connect virtually and in-person at our annual engineering summits.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
            {[
              { step: "01", event: "Engineering Meetup" },
              { step: "02", event: "Cloud Summit" },
              { step: "03", event: "AI Workshop" },
              { step: "04", event: "DevOps Bootcamp" },
              { step: "05", event: "Career Fair" },
              { step: "06", event: "Global Conference" }
            ].map((evt, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0A0A0A] border border-zinc-800 hover:border-rose-500/50 transition-colors">
                <span className="text-[10px] font-mono text-rose-400 font-bold block mb-1">EVENT {evt.step}</span>
                <h4 className="text-xs font-bold text-white">{evt.event}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 14. FAQ SECTION (Matching Accordion Standard) */}
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
              Everything you need to know about joining or hiring through the Talent Network.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {[
              {
                q: "Who can join the Devopstrio Talent Network?",
                a: "Engineers of all levels—software developers, cloud architects, DevOps specialists, AI researchers, cybersecurity engineers, and university students—are welcome to join.",
                proof: "✓ 25,000+ Active Members Worldwide",
                tags: ["All Experience Levels", "Free Membership", "Global Network"]
              },
              {
                q: "Is membership in the Talent Network completely free?",
                a: "Yes, 100% free for candidates and community members. There are zero placement fees or membership dues for developers.",
                proof: "✓ $0 Cost for Engineers & Students",
                tags: ["Free Access", "No Fees", "Open Community"]
              },
              {
                q: "Do I need prior work experience to join?",
                a: "No! We have specialized tracks for students and junior developers, providing mentorship, internships, and certification preparation to build your portfolio.",
                proof: "✓ Student & Junior Pathways Included",
                tags: ["Student Track", "Mentorship", "Internships"]
              },
              {
                q: "Are remote job opportunities available?",
                a: "Yes! Over 80% of enterprise project placements matched through our network offer full remote flexibility or hybrid options across 20+ countries.",
                proof: "✓ 80%+ Remote Opportunities",
                tags: ["Remote Work", "Contract Roles", "Full-Time Roles"]
              },
              {
                q: "How do I connect with senior engineering mentors?",
                a: "Once you register, you gain access to our private community Slack/Discord where you can request 1-on-1 office hours with Principal Cloud Architects.",
                proof: "✓ 100+ Senior Mentors Available",
                tags: ["1-on-1 Mentorship", "Slack Community", "Code Reviews"]
              },
              {
                q: "How can enterprise companies hire engineers through the network?",
                a: "Enterprise clients can click 'Contact Our Community Team' or submit a hiring request. We match pre-vetted candidates or assemble agile pods in under 14 days.",
                proof: "✓ Under 14-Day Average Time-to-Hire",
                tags: ["Enterprise Hiring", "Agile Pods", "Vetted Talent"]
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
                Looking to recruit an agile engineering team for your cloud transformation? Contact our Community Recruitment Team.
              </p>
              <button
                onClick={() => setContactModalOpen(true)}
                className="gap-2 inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
              >
                Contact Community Team <ArrowUpRight size={14} className="text-rose-500" />
              </button>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 15. CTA SECTION */}
      <section className="py-28 relative overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Your Next Engineering Opportunity Starts Here
          </h2>
          <p className="text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-semibold">
            Become part of a global engineering community where learning, collaboration, and innovation create lasting career opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setJoinModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              <Users className="w-4 h-4 mr-2" /> Join the Talent Network
            </button>
            <button
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <Building className="w-4 h-4 text-rose-500 mr-2" /> Contact Our Community Team
            </button>
          </div>
        </div>
      </section>

      {/* MODAL 1: JOIN THE NETWORK */}
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
                <h3 className="text-xl font-bold text-white">Application Submitted!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-medium">
                  Welcome to the Devopstrio Talent Network! Check your inbox for your community Slack/Discord invitation and profile setup link.
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
                    Join Devopstrio Talent Network
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Free global engineering community membership. Access enterprise roles and 1-on-1 mentorship.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Santos"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="maria@example.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Primary Technical Discipline</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none">
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
                    <label className="block text-zinc-300 font-semibold mb-1">Years of Experience</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none">
                      <option>Student / Recent Graduate</option>
                      <option>1 - 3 Years</option>
                      <option>4 - 7 Years</option>
                      <option>8+ Years (Senior / Architect)</option>
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
                    <Users className="w-3.5 h-3.5" /> Submit Profile
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
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
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
                <div className="w-14 h-14 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-medium">
                  Our Community Talent Account Lead will reach out within 24 hours to discuss your engineering team requirements.
                </p>
                <button
                  onClick={() => {
                    setContactModalOpen(false);
                    setContactSubmitted(false);
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
                  setContactSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Building className="w-5 h-5 text-rose-500" />
                    Enterprise Hiring & Talent Request
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Hire pre-vetted developers or deploy dedicated agile engineering pods.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Company / Organization Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Financial Technologies"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="manager@acme.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Roles Needed</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none">
                      <option>Cloud & Infrastructure Architects (Azure/AWS)</option>
                      <option>DevOps & Kubernetes Engineers</option>
                      <option>AI & GenAI Product Developers</option>
                      <option>Full Agile Pod (5-10 Engineers)</option>
                      <option>Cybersecurity & Compliance Specialists</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setContactModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Building className="w-3.5 h-3.5" /> Request Talent Pod
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
