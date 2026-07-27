"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  GraduationCap,
  Cloud,
  BrainCircuit,
  Briefcase,
  Users,
  Rocket,
  Building,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Trophy,
  Microscope,
  Code,
  Terminal,
  ShieldCheck,
  Database,
  Layers,
  Award,
  BookOpen,
  Calendar,
  X,
  Plus,
  Minus,
  Check,
  ExternalLink,
  Laptop,
  Flame,
  Globe,
  ChevronRight
} from "lucide-react";

export default function UniversityProgramsPage() {
  // Modal states
  const [partnerModalOpen, setPartnerModalOpen] = useState<boolean>(false);
  const [workshopModalOpen, setWorkshopModalOpen] = useState<boolean>(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState<boolean>(false);
  const [workshopSubmitted, setWorkshopSubmitted] = useState<boolean>(false);
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
        prismHueShift={2.2}
        title={
          <>
            University <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Programs
            </span>
          </>
        }
        subtitle="Empowering students, educators, and institutions through industry collaboration, real-world engineering experiences, innovation labs, internships, and technology research."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "COMMUNITY & TALENT NETWORK", href: "/ecosystem/community-talent-network" },
          { label: "UNIVERSITY PROGRAMS" }
        ]}
      >
        <div className="flex flex-wrap gap-4 items-center justify-start">
          <button
            onClick={() => setPartnerModalOpen(true)}
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
          >
            Become a Partner University
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("internship-programs");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 text-white transition-all cursor-pointer"
          >
            Explore Student Programs
          </button>
        </div>
      </Hero>

      {/* HERO STATISTICS STRIP */}
      <section className="w-full py-12 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { val: "50+", label: "Partner Universities" },
              { val: "10,000+", label: "Students Engaged" },
              { val: "250+", label: "Internships Granted" },
              { val: "100+", label: "Campus Workshops" },
              { val: "30+", label: "Hackathons Hosted" }
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

      {/* 2. PROGRAM OVERVIEW (Bridging Academia and Industry) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Large Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[24px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
                <img
                  src="/assets/common/e76e125035885aab9c9070ce85df239e 1.png"
                  alt="Students working in Devopstrio engineering labs"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-sm border border-zinc-800 text-xs font-mono text-zinc-300">
                  <span className="text-rose-400 font-bold">✓ Industry-Academia Bridge</span> &bull; Hands-on Cloud & AI Engineering Sandbox
                </div>
              </div>
            </div>

            {/* Right Overview Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                PROGRAM OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Bridging Academia and Industry
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed font-semibold">
                Devopstrio collaborates directly with top computer science and engineering faculties globally. We equip students with hands-on enterprise cloud, DevOps, AI, and cybersecurity skills before graduation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Industry-ready curriculum modules",
                  "1-on-1 engineering mentorship",
                  "Live enterprise codebase access",
                  "Fast-tracked internship pathways",
                  "PhD & Master research grants",
                  "State-of-the-art innovation labs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-300 font-medium bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setPartnerModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Partner With Devopstrio <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY UNIVERSITIES PARTNER WITH DEVOPSTRIO (6 Feature Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                MUTUAL VALUE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Why Universities Partner with Devopstrio
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Transforming traditional computer science curriculums into cloud-native engineering powerhouses.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, title: "Industry Curriculum", desc: "Co-developed syllabus modules aligned with Azure CAF, AWS Control Tower, and GenAI standards." },
              { icon: Cloud, title: "Cloud Labs Sandbox", desc: "Free sponsored AWS/Azure infrastructure credits for students to build real production clusters." },
              { icon: BrainCircuit, title: "AI Research Grants", desc: "Funding and compute GPU allocations for postgraduate research in LLMs, RAG, and vector stores." },
              { icon: Briefcase, title: "Paid Internships", desc: "Direct placement of top-performing students into 12-week summer enterprise engineering teams." },
              { icon: Users, title: "Architect Mentorship", desc: "Weekly office hours and guidance from Senior Cloud Architects and Principal Software Engineers." },
              { icon: Rocket, title: "Career Readiness", desc: "95% graduate placement rate into senior technology practices upon graduation." }
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
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Academic Pillar</span>
                    <span className="text-xs font-bold text-rose-500 flex items-center gap-1">
                      Explore Pillar <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. UNIVERSITY PARTNERSHIP PROGRAMS (6 Cards) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                PARTNERSHIP FRAMEWORK
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                University Partnership Programs
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Structured academic programs tailored for undergraduate students, postgraduate researchers, and university faculty.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Industry Internship Program",
                tag: "12-Week Paid Placement",
                desc: "Real-world engineering internships where students write Terraform modules, deploy microservices, and configure CI/CD pipelines."
              },
              {
                title: "Campus Ambassador Program",
                tag: "Student Leadership",
                desc: "Empowering student leaders to organize technical workshops, hackathons, and technology meetups on their campuses."
              },
              {
                title: "Faculty Enablement",
                tag: "Academic Upskilling",
                desc: "Upskilling computer science professors and lecturers with modern cloud architecture, DevOps, and GenAI methodologies."
              },
              {
                title: "Innovation Labs",
                tag: "On-Campus Infrastructure",
                desc: "Co-founding physical and virtual cloud sandbox labs equipped with GPU nodes for AI and Kubernetes experimentation."
              },
              {
                title: "Industry Capstone Projects",
                tag: "Final Year Thesis",
                desc: "Sponsoring real enterprise capstone projects where student teams solve actual industry engineering challenges."
              },
              {
                title: "Joint Research Collaboration",
                tag: "Postgraduate & PhD",
                desc: "Collaborative research papers and grant funding for advanced distributed systems, eBPF security, and RAG optimization."
              }
            ].map((prog, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 space-y-4 group h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded">
                      {prog.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">{prog.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">{prog.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-900">
                    <button
                      onClick={() => setPartnerModalOpen(true)}
                      className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                    >
                      Apply For Program <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INDUSTRY-ACADEMIA COLLABORATION (Microsoft-Style Alternating Feature) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                REAL-WORLD CO-CREATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Industry-Academia Collaboration
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-semibold">
                Students work alongside experienced cloud architects, software engineers, DevOps specialists, AI engineers, and cybersecurity professionals on active enterprise projects.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "Direct code reviews on enterprise GitHub pull requests.",
                  "Weekly architecture reviews with Principal Engineers.",
                  "Co-authored whitepapers and international conference talks."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-zinc-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[24px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 group">
                <img
                  src="/assets/common/37b9b888cc479ea7b74d2d9a05c37597 1.png"
                  alt="Faculty and engineers discussing architecture"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 bg-black/80 backdrop-blur-sm border-t border-zinc-800 text-xs font-mono text-zinc-300 flex justify-between items-center">
                  <span>Faculty & Engineer Architecture Review</span>
                  <span className="text-rose-400 font-bold">Devopstrio Campus Hub</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. STUDENT LEARNING JOURNEY (Step-by-Step Roadmap) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                CAREER TRAJECTORY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Student Learning Journey
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                From first-year computer science student to full-time enterprise cloud engineer.
              </p>
            </div>
          </Reveal>

          <div className="p-8 rounded-[28px] bg-[#0A0A0A] border border-zinc-800/80 overflow-x-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 min-w-[850px]">
              {[
                { step: "University Student", desc: "Core CS Studies" },
                { step: "Technical Bootcamp", desc: "Devops & Cloud 101" },
                { step: "Certification", desc: "Azure/AWS Associate" },
                { step: "Hackathon", desc: "Sprint Coding Challenge" },
                { step: "Internship", desc: "12-Week Paid Sprint" },
                { step: "Live Project", desc: "Production Feature PR" },
                { step: "Graduate Program", desc: "Fast-track Placement" },
                { step: "Full-Time Engineer", desc: "Senior Practice Hire" }
              ].map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-black border border-zinc-800 w-full group hover:border-rose-500/50 transition-all">
                    <span className="text-[9px] font-mono text-rose-400 font-bold mb-1">STEP 0{idx + 1}</span>
                    <h4 className="text-xs font-bold text-white mb-1">{stage.step}</h4>
                    <p className="text-[9px] text-zinc-500 font-medium">{stage.desc}</p>
                  </div>

                  {idx < 7 && (
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

      {/* 7. INTERNSHIP & GRADUATE PROGRAMS (8 Cards by Engineering Track) */}
      <section id="internship-programs" className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                SPECIALIZED PATHWAYS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Internship & Graduate Engineering Tracks
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Eight specialized engineering domain pathways for interns and graduate hires.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Software Engineering", duration: "12 Weeks / Full-Time", skills: "TypeScript, Python, FastAPI, Docker", tech: "Microservices & APIs" },
              { title: "Cloud Engineering", duration: "12 Weeks / Full-Time", skills: "Terraform, Azure CAF, AWS Control Tower", tech: "Landing Zones & IaC" },
              { title: "AI Engineering", duration: "12 Weeks / Full-Time", skills: "Python, LangChain, Qdrant, OpenAI", tech: "LLM RAG & Multi-Agent" },
              { title: "DevOps Engineering", duration: "12 Weeks / Full-Time", skills: "Kubernetes, Helm, GitHub Actions, ArgoCD", tech: "CI/CD & GitOps" },
              { title: "Cybersecurity", duration: "12 Weeks / Full-Time", skills: "Zero Trust, Vault, Trivy, Compliance", tech: "DevSecOps & Identity" },
              { title: "Data Engineering", duration: "12 Weeks / Full-Time", skills: "Apache Kafka, Databricks, Snowflake", tech: "Real-time Data Streams" },
              { title: "Platform Engineering", duration: "12 Weeks / Full-Time", skills: "Backstage, Crossplane, Internal Portals", tech: "Developer Platforms" },
              { title: "QA Engineering", duration: "12 Weeks / Full-Time", skills: "Playwright, Jest, Automated E2E", tech: "Quality Automation" }
            ].map((track, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] space-y-4 group flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      {track.duration}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{track.title}</h3>
                    <p className="text-xs text-zinc-300 font-mono font-medium">{track.tech}</p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-semibold">Skills: {track.skills}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-xs">
                    <span className="text-zinc-500 font-mono">Certificate Included</span>
                    <button
                      onClick={() => setPartnerModalOpen(true)}
                      className="font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                    >
                      Apply Track <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 8. INNOVATION LABS & RESEARCH */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                PRACTICAL ENVIRONMENTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Campus Innovation Labs
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Students gain access to practical environments where they build cloud-native applications, AI solutions, DevOps pipelines, and secure enterprise systems.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Cloud Engineering Lab", img: "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca 1.png", focus: "Azure & AWS Landing Zones" },
              { name: "GenAI & LLM Lab", img: "/assets/common/9d91b93f83e6d4cd494ec13611b3e50e 1.png", focus: "Vector DBs & Multi-Agents" },
              { name: "DevOps & K8s Sandbox", img: "/assets/common/1b065043b6959827c05a0073c93a4a53 1.png", focus: "ArgoCD & GitOps Workflows" },
              { name: "Cybersecurity Perimeter Lab", img: "/assets/common/f317dd71184f5c47d601eeb9508bf92c 1.png", focus: "Zero Trust & eBPF Networks" },
              { name: "IoT & Edge Computing Lab", img: "/assets/common/45ea830d170d382ade235db479060da7 1.png", focus: "Edge Data Processing" }
            ].map((lab, idx) => (
              <div key={idx} className="p-4 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all space-y-3 group">
                <div className="h-32 rounded-xl overflow-hidden relative">
                  <img src={lab.img} alt={lab.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-rose-400 transition-colors">{lab.name}</h4>
                <p className="text-[10px] text-zinc-400 font-mono">{lab.focus}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. HACKATHONS & TECHNICAL EVENTS (Timeline) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                CAMPUS CALENDAR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Hackathons & Technical Events
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Year-round academic competitions, bootcamps, and technical innovation summits.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
            {[
              { step: "01", event: "Cloud Workshop" },
              { step: "02", event: "AI Bootcamp" },
              { step: "03", event: "DevOps Challenge" },
              { step: "04", event: "Hackathon Sprint" },
              { step: "05", event: "Innovation Summit" },
              { step: "06", event: "Research Showcase" }
            ].map((evt, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0A0A0A] border border-zinc-800 hover:border-rose-500/50 transition-colors">
                <span className="text-[10px] font-mono text-rose-400 font-bold block mb-1">STAGE {evt.step}</span>
                <h4 className="text-xs font-bold text-white">{evt.event}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. MENTORSHIP NETWORK (Architect Profiles) */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                ENGINEERING LEADERSHIP
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Dedicated Mentorship Network
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Students receive direct 1-on-1 guidance from Devopstrio principal engineers and architects.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Software Architects", exp: "12+ Years Experience", expertise: "Microservices & Distributed Systems", img: "/assets/common/1b065043b6959827c05a0073c93a4a53 1.png" },
              { name: "Cloud Practice Leads", exp: "15+ Years Experience", expertise: "Azure CAF & AWS Control Tower", img: "/assets/common/37b9b888cc479ea7b74d2d9a05c37597 1.png" },
              { name: "AI Research Specialists", exp: "10+ Years Experience", expertise: "LLM RAG & Autonomous Agents", img: "/assets/common/9d91b93f83e6d4cd494ec13611b3e50e 1.png" },
              { name: "DevOps & SRE Leads", exp: "14+ Years Experience", expertise: "Kubernetes & GitOps Pipelines", img: "/assets/common/f317dd71184f5c47d601eeb9508bf92c 1.png" },
              { name: "Cybersecurity Directors", exp: "16+ Years Experience", expertise: "Zero Trust Architecture & Vault", img: "/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b 1.png" },
              { name: "Data Engineering Leads", exp: "11+ Years Experience", expertise: "Kafka Streaming & Snowflake", img: "/assets/common/82090d7be4ef5694954ce77f9cc2e627 1.png" }
            ].map((mentor, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all flex items-center gap-4 group">
                  <img src={mentor.img} alt={mentor.name} className="w-16 h-16 rounded-2xl object-cover border border-zinc-700 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{mentor.name}</h4>
                    <p className="text-xs text-rose-400 font-mono">{mentor.exp}</p>
                    <p className="text-[11px] text-zinc-400 font-medium">{mentor.expertise}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 11. UNIVERSITY SUCCESS STORIES */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
                PROVEN OUTCOMES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                University Success Stories
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                Real transformation stories from partner academic institutions.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Student → Cloud Engineer",
                desc: "CS student joined summer internship, contributed 14 Terraform PRs, and accepted a full-time Senior Cloud Associate role upon graduation.",
                tag: "Career Growth"
              },
              {
                title: "Internship → Full-Time Hire",
                desc: "Entire 5-person university capstone team was absorbed directly into Devopstrio's AI practice with 100% offer acceptance.",
                tag: "Team Placement"
              },
              {
                title: "Research → Production AI",
                desc: "PhD thesis project on vector cache optimization was open-sourced and integrated into Devopstrio AI Framework.",
                tag: "Research Grant"
              },
              {
                title: "Hackathon Champion",
                desc: "Student team won the 2025 Global Campus Hackathon by building an automated Kubernetes autoscaler.",
                tag: "Hackathon Winner"
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
                    onClick={() => setPartnerModalOpen(true)}
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

      {/* 12. PARTNER UNIVERSITIES (Logo Grid) */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 space-y-10">

          <div className="text-center space-y-2">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block">
              ACADEMIC NETWORK & INSTITUTIONS
            </span>
            <h3 className="text-xl font-bold text-white">50+ Global Partner Universities</h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-zinc-400 font-bold text-xs md:text-sm font-mono">
            {[
              "Imperial College London", "UT Austin", "Carnegie Mellon", "NUS Singapore",
              "IIT Madras", "TU Munich", "ETH Zurich", "University of Toronto",
              "UC Berkeley", "Oxford Computer Science"
            ].map((uni, idx) => (
              <span key={idx} className="px-4 py-2.5 rounded-xl bg-[#0A0A0A] border border-zinc-800/80 hover:text-white hover:border-rose-500/40 transition-colors">
                🎓 {uni}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 13. FAQ SECTION (Matching Standard Accordion FAQ) */}
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
              Everything you need to know about partnering with Devopstrio Academic Programs.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {[
              {
                q: "How can universities partner with Devopstrio?",
                a: "Universities can submit an inquiry through the 'Partner With Us' button. Our academic relations team evaluates curriculum alignment, student intake, and lab facilities within 48 hours.",
                proof: "✓ 50+ Partner Universities Worldwide",
                tags: ["Free Partnership", "Curriculum Co-development", "MoU Agreement"]
              },
              {
                q: "Are the student programs and workshops free for universities?",
                a: "Yes, 100% of our campus workshops, guest lectures, and student cloud sandbox environments are fully funded by Devopstrio.",
                proof: "✓ 0$ Cost for Universities & Students",
                tags: ["Fully Funded", "Free Sandboxes", "Sponsored Grants"]
              },
              {
                q: "Do students receive official certificates upon completing internships?",
                a: "Yes, all students receive a verified Devopstrio Engineering Certificate, along with GitHub contribution badging and LinkedIn credentials.",
                proof: "✓ Recognized Enterprise Certification",
                tags: ["Digital Certificate", "GitHub Badging", "Recommendation Letters"]
              },
              {
                q: "How do paid summer internships work?",
                a: "Internships run for 12 weeks during summer breaks. Interns are paired 1-on-1 with a senior architect and integrated directly into client or open-source engineering sprints.",
                proof: "✓ 100% Paid Placements · 250+ Interns",
                tags: ["12 Weeks", "Paid Salary", "1-on-1 Mentor"]
              },
              {
                q: "Can computer science faculty members participate in training?",
                a: "Yes, we offer dedicated 'Faculty Enablement' bootcamps to bring lecturers up to speed on current cloud-native, IaC, and GenAI best practices.",
                proof: "✓ Faculty Enablement Track",
                tags: ["Professor Bootcamps", "Syllabus Updates", "Lab Grants"]
              },
              {
                q: "Are research grants available for PhD and Master students?",
                a: "Yes, Devopstrio provides dedicated research grants and GPU compute resources for postgraduate projects focused on cloud infrastructure and GenAI.",
                proof: "✓ $2M+ Research Grants Allocated",
                tags: ["Research Grants", "GPU Allocation", "Co-authored Papers"]
              },
              {
                q: "Do final-year students get fast-tracked for full-time roles?",
                a: "Yes, top performers in our internship program, hackathons, and campus ambassador network receive direct full-time employment offers prior to graduation.",
                proof: "✓ 95% Retention & Hire Rate",
                tags: ["Direct Placement", "Graduate Engineering Roles", "Fast-Track Offer"]
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
                Have specific questions about campus hackathons or research grants? Reach out to our Academic Relations team directly.
              </p>
              <button
                onClick={() => setPartnerModalOpen(true)}
                className="gap-2 inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
              >
                Contact Academic Team <ArrowUpRight size={14} className="text-rose-500" />
              </button>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 14. CTA SECTION (Become a Partner University) */}
      <section className="py-28 relative overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Build the Next Generation of Engineers
          </h2>
          <p className="text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-semibold">
            Partner with Devopstrio to prepare students for enterprise technology careers through innovation, mentorship, and real-world engineering experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setPartnerModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 mr-2" /> Partner With Us
            </button>
            <button
              onClick={() => setWorkshopModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-rose-500 mr-2" /> Request Campus Workshop
            </button>
          </div>
        </div>
      </section>

      {/* MODAL 1: PARTNER WITH US */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => {
                setPartnerModalOpen(false);
                setPartnerSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {partnerSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">University Partnership Request Received!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-medium">
                  Thank you for reaching out. Our Academic Relations team will contact your department head within 24-48 hours.
                </p>
                <button
                  onClick={() => {
                    setPartnerModalOpen(false);
                    setPartnerSubmitted(false);
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
                  setPartnerSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-rose-500" />
                    University Partnership Inquiry
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Collaborate on curriculum, internships, research grants, and on-campus innovation labs.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">University / Institution Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Imperial College London"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Faculty Contact Person & Role *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prof. Alan Turing, Head of CS"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Official University Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="turing@university.edu"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Program Interest</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none">
                      <option>Industry Internships & Graduate Recruitment</option>
                      <option>On-Campus Cloud Innovation Labs</option>
                      <option>Curriculum Advisory & Co-development</option>
                      <option>PhD & Master Research Grants</option>
                      <option>Campus Ambassador Program</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setPartnerModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <GraduationCap className="w-3.5 h-3.5" /> Submit Partnership Proposal
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: REQUEST CAMPUS WORKSHOP */}
      {workshopModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => {
                setWorkshopModalOpen(false);
                setWorkshopSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {workshopSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Workshop Request Received!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-medium">
                  We have scheduled your campus workshop inquiry. An engineering speaker coordinator will email you shortly.
                </p>
                <button
                  onClick={() => {
                    setWorkshopModalOpen(false);
                    setWorkshopSubmitted(false);
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
                  setWorkshopSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-rose-500" />
                    Request Campus Workshop / Guest Lecture
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Bring Devopstrio principal architects to your campus for live technical sessions.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">University / Tech Club Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ACM Student Chapter, CMU"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Contact Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="contact@acm-cmu.edu"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Workshop Topic Requested</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none">
                      <option>Azure CAF & AWS Landing Zones (Cloud)</option>
                      <option>GenAI RAG & Vector Databases (AI)</option>
                      <option>Kubernetes GitOps & Helm (DevOps)</option>
                      <option>Zero Trust Architecture & Vault (Security)</option>
                      <option>Career Session: From Student to Enterprise Architect</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setWorkshopModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> Submit Workshop Request
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
