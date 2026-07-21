"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  Award,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  X,
  ChevronRight,
  Globe,
  Database,
  Layers,
  Lock,
  Server,
  Check,
  ExternalLink,
  Sparkles,
  Laptop,
  Cpu,
  Trophy,
  GraduationCap,
  Rocket,
  FileCode,
  TrendingUp,
  Building,
  Terminal
} from "lucide-react";

export default function CertificationProgramsPage() {
  // Modal states
  const [enrollModalOpen, setEnrollModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [enrollSubmitted, setEnrollSubmitted] = useState<boolean>(false);
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
        prismHueShift={3.5}
        title={
          <>
            Certification <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Programs
            </span>
          </>
        }
        subtitle="Advance your career with industry-aligned certification programs, practical engineering labs, and hands-on learning designed for modern technology professionals."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "COMMUNITY & TALENT NETWORK", href: "/ecosystem/community-talent-network" },
          { label: "CERTIFICATION PROGRAMS" }
        ]}
      >
        <div className="flex flex-wrap gap-4 items-center justify-start">
          <button
            onClick={() => setEnrollModalOpen(true)}
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
          >
            Explore Certifications
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("hands-on-labs");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 text-white transition-all cursor-pointer"
          >
            Start Learning
          </button>
        </div>
      </Hero>

      {/* HERO STATS STRIP */}
      <section className="w-full py-12 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { val: "50+", label: "Certification Programs" },
              { val: "15K+", label: "Certified Learners" },
              { val: "200+", label: "Hands-on Cloud Labs" },
              { val: "100+", label: "Industry Mentors" },
              { val: "25+", label: "Technology Domains" }
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

      {/* 2. CERTIFICATION PROGRAMS OVERVIEW (Learn. Practice. Get Certified.) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Large Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[24px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
                <img
                  src="/assets/common/e76e125035885aab9c9070ce85df239e 1.png"
                  alt="Classroom and engineering lab environment"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-sm border border-zinc-800 text-xs font-mono text-zinc-300">
                  <span className="text-rose-400 font-bold">✓ Industry-Aligned Certification</span> &bull; Practical Hands-on Sandbox Labs
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Learn. Practice. Get Certified.
              </h2>
              <blockquote className="text-zinc-300 text-sm md:text-base border-l-2 border-rose-500 pl-4 py-1 italic font-semibold">
                &quot;Helping students and professionals validate their skills through structured learning, practical labs, industry-aligned certifications, and engineering excellence.&quot;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Industry-focused syllabus modules",
                  "Hands-on engineering sandboxes",
                  "Real cloud AWS/Azure environments",
                  "Project-based skill validation",
                  "1-on-1 expert mentor feedback",
                  "92%+ first-attempt pass rate"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-300 font-medium bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setEnrollModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Enroll In Certification Track <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY GET CERTIFIED WITH DEVOPSTRIO (6 Premium Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                VALUE PROPOSITION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Why Get Certified with Devopstrio
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Designed for engineers who want real proof of capability, not just multiple-choice test scores.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Trophy, title: "Industry-Recognized Learning", desc: "Curriculums aligned with Microsoft, AWS, Linux Foundation, and CNCF exam objectives." },
              { icon: Cloud, title: "Hands-on Cloud Labs", desc: "Ephemeral Azure, AWS, and Kubernetes sandboxes provisioned automatically for lab work." },
              { icon: BrainCircuit, title: "AI & Modern Technologies", desc: "Specialized tracks in LLM orchestration, vector databases, and multi-agent systems." },
              { icon: Users, title: "Expert Mentorship", desc: "Weekly live office hours with Principal Architects who hold expert-level badges." },
              { icon: BookOpen, title: "Project-Based Learning", desc: "Build real production Terraform modules and CI/CD pipelines as capstone requirements." },
              { icon: Rocket, title: "Career Advancement", desc: "Direct integration into Devopstrio Talent Network upon passing internal readiness exams." }
            ].map((card, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] group flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <card.icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">{card.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{card.desc}</p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-zinc-900 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Cert Pillar</span>
                    <button
                      onClick={() => setEnrollModalOpen(true)}
                      className="text-xs font-bold text-rose-500 flex items-center gap-1 cursor-pointer"
                    >
                      View Details <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CERTIFICATION CATEGORIES (Grid Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                DOMAIN SPECTRUM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Certification Categories
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Eight technical domains offering structured learning and badging.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cloud Engineering", tags: "Azure, AWS, GCP", desc: "Azure Solutions Architect Expert, AWS Solutions Architect Pro, GCP Professional." },
              { title: "DevOps & GitOps", tags: "Docker, K8s, Terraform", desc: "Certified Kubernetes Administrator (CKA), Terraform Associate, GitHub Actions." },
              { title: "Software Engineering", tags: "React, Next.js, FastAPI", desc: "Enterprise Full-Stack Architecture, Node.js Microservices, Python API Development." },
              { title: "Artificial Intelligence", tags: "LLMs, RAG, AI Agents", desc: "GenAI Engineering Specialist, Qdrant Vector DB Certification, LangChain Agent Pro." },
              { title: "Cybersecurity", tags: "Zero Trust, Vault, IAM", desc: "Certified Information Systems Security Professional (CISSP), CKS, HashiCorp Vault." },
              { title: "Data Engineering", tags: "Kafka, Spark, Fabric", desc: "Databricks Data Engineer Professional, Apache Kafka Real-Time Streaming Specialist." },
              { title: "Platform Engineering", tags: "Backstage, Crossplane", desc: "Internal Developer Platform (IDP) Architecture & Kubernetes Operator Engineering." },
              { title: "Quality Engineering", tags: "Playwright, Jest, E2E", desc: "Automated E2E Testing Specialist, Performance Engineering & Load Testing Pro." }
            ].map((cat, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all space-y-3 group flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-rose-400 font-bold bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20">
                      {cat.tags}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{cat.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{cat.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-xs">
                    <span className="text-zinc-500 font-mono">12-Week Track</span>
                    <button
                      onClick={() => setEnrollModalOpen(true)}
                      className="font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                    >
                      Enroll <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CERTIFICATION LEARNING JOURNEY (Interactive Roadmap) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                LEARNING MILESTONES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Certification Learning Journey
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Step-by-step methodology from initial enrollment to official badge issuance.
              </p>
            </div>
          </Reveal>

          <div className="p-8 rounded-[28px] bg-[#0A0A0A] border border-zinc-800/80 overflow-x-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 min-w-[850px]">
              {[
                { step: "Enroll", desc: "Cohort selection" },
                { step: "Learn", desc: "Video & live sessions" },
                { step: "Hands-on Labs", desc: "40+ hours sandbox" },
                { step: "Project Assessment", desc: "Capstone Terraform PR" },
                { step: "Skill Validation", desc: "Internal mock exam" },
                { step: "Certification", desc: "Official exam pass" },
                { step: "Career Growth", desc: "Talent pool placement" }
              ].map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-black border border-zinc-800 w-full group hover:border-rose-500/50 transition-all">
                    <span className="text-[9px] font-mono text-rose-400 font-bold mb-1">STAGE 0{idx + 1}</span>
                    <h4 className="text-xs font-bold text-white mb-1">{stage.step}</h4>
                    <p className="text-[9px] text-zinc-500 font-medium">{stage.desc}</p>
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

      {/* 6. LEARNING PATHS (5 Skill Levels) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                PROGRESSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Learning Paths by Expertise Level
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Five distinct tiers ensuring engineers progress from fundamentals to enterprise leadership.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { level: "Beginner", badge: "🟢 Tier 1", desc: "Build strong cloud, Linux, and programming fundamentals." },
              { level: "Intermediate", badge: "🔵 Tier 2", desc: "Develop real-world engineering skills in Docker and AWS." },
              { level: "Advanced", badge: "🟣 Tier 3", desc: "Master Kubernetes, Terraform, and microservices architecture." },
              { level: "Professional", badge: "🟡 Tier 4", desc: "Lead enterprise cloud migrations and security policies." },
              { level: "Expert", badge: "🔴 Tier 5", desc: "Specialize in LLM RAG pipelines, eBPF mesh, and multi-region." }
            ].map((lp, idx) => (
              <div key={idx} className="p-6 rounded-[20px] bg-[#0A0A0A] border border-zinc-800 space-y-3 hover:border-rose-500/50 transition-all group text-center">
                <span className="text-xs font-mono font-bold">{lp.badge}</span>
                <h4 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{lp.level}</h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">{lp.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. HANDS-ON LABS & PRACTICE (Split Layout) */}
      <section id="hands-on-labs" className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                PRACTICAL ENGINE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Hands-on Labs & Cloud Sandboxes
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-semibold">
                Learners gain access to live ephemeral cloud sandboxes where they build cloud-native applications, AI solutions, DevOps pipelines, and secure enterprise systems.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Live Azure & AWS Environments", "Enterprise Terraform Repos",
                  "Multi-node K8s Clusters", "AI Vector DB Sandboxes",
                  "Security Challenge Scenarios", "Real-time Kafka Pipelines"
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
                <img
                  src="/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca 1.png"
                  alt="Students working on cloud portals and Kubernetes clusters"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 bg-black/80 backdrop-blur-sm border-t border-zinc-800 text-xs font-mono text-zinc-300 flex justify-between items-center">
                  <span>Live Kubernetes & Azure Sandbox</span>
                  <span className="text-rose-400 font-bold">Auto-provisioned</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. CERTIFICATION BENEFITS (8 Feature Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                BENEFITS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Certification Benefits
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Tangible career assets gained upon program completion.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Digital Verified Certificate", "GitHub Badging Credential", "Portfolio Capstone Projects", "1-on-1 Career Guidance",
              "Architect Mentor Feedback", "Private Community Access", "Industry Recognition", "Continuous Upskilling"
            ].map((ben, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#0A0A0A] border border-zinc-800 flex items-center gap-3 text-xs font-bold text-white hover:border-rose-500/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{ben}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. INDUSTRY RECOGNITION (Logo Wall) */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block">
              VENDOR ALIGNMENT
            </span>
            <h3 className="text-xl font-bold text-white">Industry Recognition & Vendors</h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-zinc-400 font-bold text-xs md:text-sm font-mono">
            {[
              "Microsoft", "AWS", "Google Cloud", "Oracle", "GitHub",
              "Docker", "Kubernetes", "HashiCorp", "Cisco", "Red Hat", "Power BI", "OpenAI"
            ].map((vendor, idx) => (
              <span key={idx} className="px-4 py-2.5 rounded-xl bg-[#0A0A0A] border border-zinc-800/80 hover:text-white hover:border-rose-500/40 transition-colors">
                ⚡ {vendor}
              </span>
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
                LEARNER OUTCOMES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Certification Success Stories
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Real stories of career transformation through Devopstrio learning tracks.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Student to Cloud Engineer", tag: "Azure Pathway", desc: "Completed Azure Solutions Architect track during final year of CS, passed exam on first try, and hired as Senior Associate." },
              { title: "DevOps Specialist", tag: "CKA Certification", desc: "Built automated CI/CD pipelines and managed a 50-node Kubernetes cluster following our CKA study bootcamp." },
              { title: "AI Product Engineer", tag: "GenAI Track", desc: "Developed an enterprise RAG assistant using Qdrant vector database after completing the AI Certification Track." },
              { title: "Platform Architect", tag: "Platform Track", desc: "Led internal developer platform (IDP) deployment for a healthcare enterprise post advanced cloud certification." }
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
                    onClick={() => setEnrollModalOpen(true)}
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

      {/* 11. CERTIFICATION LEVELS (Stacked Premium Tiers) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                TIERED CREDENTIALS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Certification Levels
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Clear credential levels reflecting increasing technical difficulty.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { medal: "🥉", level: "Foundation", title: "Core Concepts", desc: "Basics of cloud, Linux, Git, and programming fundamentals." },
              { medal: "🥈", level: "Associate", title: "Applied Skills", desc: "Hands-on Terraform, Docker, and Python API development." },
              { medal: "🥇", level: "Professional", title: "Enterprise Delivery", desc: "Kubernetes administration, multi-region Azure CAF, and CI/CD." },
              { medal: "💎", level: "Expert", title: "Architecture Lead", desc: "LLM RAG multi-agent orchestration, Zero Trust, and eBPF mesh." }
            ].map((lvl, idx) => (
              <div key={idx} className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800 space-y-3 hover:border-rose-500/50 transition-all text-center group">
                <span className="text-3xl block mb-2">{lvl.medal}</span>
                <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest block">{lvl.level}</span>
                <h4 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{lvl.title}</h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">{lvl.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. FAQ SECTION (Matching Accordion Standard) */}
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
              Everything you need to know about Devopstrio Certification Programs.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {[
              {
                q: "Who can join Devopstrio Certification Programs?",
                a: "Students, software developers, cloud engineers, DevOps practitioners, and technology leaders looking to validate their skills with hands-on labs can enroll.",
                proof: "✓ 15,000+ Certified Learners Worldwide",
                tags: ["Students & Professionals", "All Experience Levels", "Global Enroll"]
              },
              {
                q: "Are the certification study cohorts free or paid?",
                a: "All study cohorts, curriculum materials, and sandbox labs are 100% free for active members of the Devopstrio Talent Network.",
                proof: "✓ 100% Sponsored for Talent Network Members",
                tags: ["Free Training", "Free Sandboxes", "Sponsored Exams"]
              },
              {
                q: "Do learners receive digital certificates upon completion?",
                a: "Yes. Upon completing capstone project requirements, learners receive verifiable digital certificates and GitHub profile badges.",
                proof: "✓ Verifiable Digital Badging Included",
                tags: ["Digital Certificate", "LinkedIn Badge", "GitHub Verified"]
              },
              {
                q: "Are live cloud sandbox environments included in the training?",
                a: "Yes. We provision ephemeral Azure, AWS, and Kubernetes sandbox accounts automatically so you can practice on real infrastructure without personal cost.",
                proof: "✓ 200+ Ephemeral Cloud Sandboxes",
                tags: ["Real Cloud Labs", "AWS & Azure Sandboxes", "No Credit Card Needed"]
              },
              {
                q: "Can university students participate in certification tracks?",
                a: "Yes! University students are encouraged to join. We offer specialized beginner pathways to prepare students for early-career cloud roles.",
                proof: "✓ Dedicated University Student Tracks",
                tags: ["Student Friendly", "Beginner Tracks", "Portfolio Building"]
              },
              {
                q: "How long does each certification track typically take?",
                a: "Most certification tracks run for 8 to 12 weeks, requiring approximately 8-10 hours per week of study and lab work.",
                proof: "✓ Flexible 8-12 Week Sprints",
                tags: ["8-12 Weeks", "Self-Paced Option", "Weekly Live Labs"]
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
                Need corporate training for your engineering team or university cohort? Contact our Learning Relations Team.
              </p>
              <button 
                onClick={() => setContactModalOpen(true)}
                className="gap-2 inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
              >
                Contact Learning Team <ArrowUpRight size={14} className="text-rose-500" />
              </button>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 13. CTA SECTION */}
      <section className="py-28 relative overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Build Skills That Power Your Future
          </h2>
          <p className="text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-semibold">
            Whether you&apos;re a student, developer, or experienced engineer, Devopstrio Certification Programs help you gain practical expertise, validate your skills, and accelerate your technology career.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setEnrollModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              <Award className="w-4 h-4 mr-2" /> Browse Certification Programs
            </button>
            <button
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-rose-500 mr-2" /> Contact Learning Team
            </button>
          </div>
        </div>
      </section>

      {/* MODAL 1: BROWSE & ENROLL */}
      {enrollModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => {
                setEnrollModalOpen(false);
                setEnrollSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {enrollSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Enrollment Request Received!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-medium">
                  We have reserved your spot in the upcoming certification study cohort. Check your email for syllabus details and sandbox access instructions.
                </p>
                <button
                  onClick={() => {
                    setEnrollModalOpen(false);
                    setEnrollSubmitted(false);
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
                  setEnrollSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-rose-500" />
                    Enroll in Certification Track
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Access cloud sandboxes, cohort study groups, and mentor office hours.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Chen"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="david@example.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Select Certification Track</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none">
                      <option>Cloud Engineering (Azure CAF & AWS)</option>
                      <option>DevOps & Kubernetes (CKA & Terraform)</option>
                      <option>AI & LLM Orchestration (GenAI Track)</option>
                      <option>Cybersecurity & Zero Trust (Vault & CISSP)</option>
                      <option>Data Engineering (Kafka & Databricks)</option>
                      <option>Full-Stack Software Engineering</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEnrollModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5" /> Submit Enrollment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: CONTACT LEARNING TEAM */}
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
                  Our Learning Relations team will contact you within 24 hours regarding custom corporate or university cohorts.
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
                    <BookOpen className="w-5 h-5 text-rose-500" />
                    Contact Learning & Certification Team
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Custom corporate upskilling programs and university certification partnerships.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Organization / University Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Corp / MIT CS Dept"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="learning@organization.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Inquiry Details</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your team size, target certifications, or university cohort requirements..."
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
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
                    <BookOpen className="w-3.5 h-3.5" /> Submit Learning Inquiry
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
