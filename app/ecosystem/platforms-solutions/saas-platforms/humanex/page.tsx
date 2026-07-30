"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {

  ArrowUpRight,
  Plus,
  Minus,
  Check,
  Users,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Sparkles,
  Play,
  Mail,
  Building,
  User,
  Phone,
  Briefcase,
  AlertTriangle,
  FileText,
  Clock,
  RefreshCw,
  Cpu,
  Lock,
  Globe,
  Upload,
  UserPlus,
  Eye,
  Settings,
  X
  ,
  Star,
  Quote
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HumanexProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"team" | "industry">("team");
  const [activeSubTab, setActiveSubTab] = useState<string>("hr");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Book a Demo Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "Corporate",
    useCase: "Recruitment Automation",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: `Company: ${formState.company}\nPhone: ${formState.phone}\nIndustry: ${formState.industry}\nPrimary Use Case: ${formState.useCase}\n\nRequirements:\n${formState.message}`,
          selectedServices: ["Humanex Demo Request"],
          toEmail: "info@devopstrioglobal.com"
        })
      });
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert("Failed to submit demo request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { icon: UserPlus, title: "1. Recruit Talent", desc: "Publish requirements, parse applications, and score candidates automatically." },
    { icon: Check, title: "2. Onboard Employee", desc: "Automate contract templates, distribute checklist forms, and assign workspaces." },
    { icon: Clock, title: "3. Attendance", desc: "Monitor daily check-ins, record shifts, and sync rosters." },
    { icon: Layers, title: "4. Payroll Processing", desc: "Run regional tax calculations, manage benefits, and prepare ledger deposits." },
    { icon: Activity, title: "5. Performance", desc: "Conduct 360-degree review feedback rounds and track operational key goals." },
    { icon: X, title: "6. Offboard / Exit", desc: "Automate return checklists, revoke permissions, and finalize exit documentation." }
  ];

  const features = [
    { title: "Smart Recruitment Hub", desc: "Track applicant pipelines, coordinate review interviews, and centralize profiles." },
    { title: "Employee Database", desc: "Secure digital folder vault housing contract agreements and demographic details." },
    { title: "Attendance & Shift Manager", desc: "Log active shifts, coordinate timesheets, and manage leave requests." },
    { title: "Flexible Leave Planner", desc: "Calculate balances, schedule calendar views, and automate manager approvals." },
    { title: "Automated Payroll Engine", desc: "Execute regional tax rules, salary updates, and direct billing schedules." },
    { title: "Comprehensive Performance Reviews", desc: "Setup 360-feedback templates, track KPIs, and log review results." }
  ];

  const aiCapabilities = [
    {
      title: "AI Resume Screening Parser",
      desc: "Our recruitment neural net scans uploaded candidate documents to map skills, histories, and certifications against your requirements, recommending top fits."
    },
    {
      title: "Automated Candidate Ranking",
      desc: "Scores applicant pools using semantic alignment, prioritizing matching qualifications to save HR teams hours of manual page reviews."
    },
    {
      title: "Predictive Turnover Analytics",
      desc: "Analyzes check-in trends and engagement variables to flag teams at risk of turnover, recommending preventive measures."
    }
  ];

  const useCases = [
    { title: "Corporate", desc: "Streamline talent operations, centralize databases, and automate global payroll rules." },
    { title: "SMEs & Startups", desc: "Deploy fast onboarding sheets and track shifts attendance without admin overhead." },
    { title: "IT Teams", desc: "Manage remote developers, sync shifts, and integrate secure SAML SSO." },
    { title: "Manufacturing", desc: "Configure complex roster variations, track shifts, and manage contractor records." }
  ];

  const teamSolutions = {
    hr: {
      title: "HR Teams",
      useCase: "Consolidate operations. Automate onboarding checklists, run payroll calculations, and coordinate reviews in one portal.",
      metrics: "Average onboarding duration: -50% shorter"
    },
    managers: {
      title: "Team Managers",
      useCase: "Approve leave requests, track employee attendance metrics, and conduct performance KPI check-ins easily.",
      metrics: "30% increase in feedback review speed"
    },
    employees: {
      title: "Employees",
      useCase: "Check payslips, update banking profiles, log time off requests, and review feedback from self-service panels.",
      metrics: "88% employee self-service adoption"
    }
  };

  const industrySolutions = {
    tech: {
      title: "Technology",
      useCase: "Onboard remote teams, configure SSO, and automate technical assessment evaluations.",
      compliance: "SAML SSO & OAuth compliance ready"
    },
    manufacturing: {
      title: "Manufacturing",
      useCase: "Govern roster variations, shift schedules, and dynamic overtime calculations.",
      compliance: "Roster hours compliance checks"
    },
    retail: {
      title: "Retail & Services",
      useCase: "Manage high-volume part-time staff rosters, contract updates, and hourly payroll.",
      compliance: "Flexible shift scaling rules"
    }
  };

  const integrations = [
    { title: "Payroll Networks", desc: "Push direct deposit logs and billing schedules to regional banking panels." },
    { title: "ERP Clusters", desc: "Sync company directories with SAP, NetSuite, or central databases." },
    { title: "Email Directories", desc: "Connect communication chains to Outlook, Gmail, or Slack channels." },
    { title: "SSO Providers", desc: "Authenticate sign-ins using Okta, Azure AD, or Ping Identity." }
  ];

  const faqs = [
    { q: "Is the employee database secured?", a: "Yes, all employee demographic profiles and salary records are isolated under AES-256 with strict tenant row checks." },
    { q: "Does Humanex support regional tax calculators?", a: "Yes, the payroll engine contains updated compliance rules for local and national taxes across multiple operational regions." },
    { q: "Can we configure custom onboarding sequences?", a: "Absolutely. You can build templates, drag and drop form requirements, and define sequential approval paths for new hires." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 bg-black border-b border-zinc-900/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <Reveal className="mb-4">
                <span className="gap-2 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-rose-500/30 text-rose-400 bg-rose-955/15">
                  <Users className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                  Featured HRTech Platform
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight tracking-tight">
                  Humanex
                </h1>
                <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 mb-6">
                  AI-Powered Human Resource Platform
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mb-8">
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold max-w-xl">
                  Streamline talent operations. Automate recruitment, employee databases, rosters, payroll sheets, and performance evaluations inside one intelligent panel.
                </p>
              </Reveal>

              <Reveal delay={0.3} className="flex flex-wrap gap-4">
                <a
                  href="#book-demo"
                  className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg"
                >
                  Book a Demo
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </a>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300"
                >
                  <Play className="w-3.5 h-3.5 text-rose-400 fill-rose-400/20" />
                  Watch Demo
                </button>
              </Reveal>
            </div>

            {/* Right Showcase Interface */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-3xl border border-zinc-900 bg-zinc-950/40 p-4 hover:border-rose-500/20 transition-colors shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-900/60">
                  <Image
                    src="/assets/Home-page/our-products/humanex.png"
                    alt="Humanex Application Interface"
                    fill
                    className="object-cover transition-transform duration-750 group-hover:scale-[1.02]"
                    priority
                    unoptimized
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center group-hover:bg-black/35 transition-colors cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                    <div className="w-16 h-16 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-300">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BUSINESS PROBLEM SECTION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              THE STATUS QUO
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              The Pain of Legacy HR Administrations
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Why manual rosters and scattered sheets degrade talent scaling speeds.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="p-8 bg-zinc-950/20 border border-zinc-900 rounded-3xl relative">
              <div className="absolute top-6 right-6 text-red-500/80 bg-red-950/20 border border-red-500/20 rounded-full px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider">
                Outdated Method
              </div>
              <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" /> Manual &amp; Disconnected HR
              </h3>
              <ul className="space-y-4 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Slow Resume Screening:</strong> Reviewing hundreds of applicant CV files manually wastes recruitment bandwidth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Attendance &amp; Roster Errors:</strong> Offline shift tracking leads to compliance disputes and pay inaccuracies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Complex Payroll Processing:</strong> Tax calculations, variables, and bonuses processed on scattered sheets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Static Performance Reviews:</strong> Employee goal sheets sitting unused in files with zero tracking.</span>
                </li>
              </ul>
            </div>

            {/* The Humanex Way */}
            <div className="p-8 bg-rose-955/5 border border-rose-500/10 rounded-3xl relative">
              <div className="absolute top-6 right-6 text-rose-400 bg-rose-955/30 border border-rose-500/20 rounded-full px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider">
                Humanex Flow
              </div>
              <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-rose-400" /> Unified Intelligent HR
              </h3>
              <ul className="space-y-4 text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✔</span>
                  <span><strong>AI Resume Screening:</strong> Upload applications and automatically extract top profiles matched to jobs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✔</span>
                  <span><strong>Secure Rosters Console:</strong> Log shift updates and calculate payroll balances automatically.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✔</span>
                  <span><strong>Automated Payroll Engine:</strong> Run taxes, benefits, and bank deposit file creation in clicks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✔</span>
                  <span><strong>Dynamic KPI Goals:</strong> Track performance metrics, reviews, and logs in one portal.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT HUMANEX SECTION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-400 mb-3 block">
                ABOUT HUMANEX
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                Connected Workplace Operations
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold mb-6">
                Humanex is an enterprise-grade HR platform that simplifies the entire employee lifecycle—from CV screening and onboarding to shift rosters, payroll management, and exit checklists.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
                Designed to integrate with directory services and ERP modules, Humanex replaces manual HR paperwork with secure, audit-ready portals for managers and employees alike.
              </p>
            </div>

            <div className="lg:col-span-6 bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-[300px] h-[300px] bg-rose-500/[0.01] rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-base font-bold text-white mb-6">Core Operational Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-rose-400 font-mono">40%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Faster Hiring Pipelines</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-rose-400 font-mono">60%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Less Manual HR Files</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-rose-400 font-mono">99.9%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Platform Availability</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-rose-400 font-mono">SSO</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Directory Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (STEP BY STEP) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left Side: Copy and CTA */}
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                How it works
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Get up and running in minutes. No steep learning curve, no complex setup — just a clear path from zero to productive.
              </p>

              <button className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-colors mb-8 shadow-lg shadow-white/10">
                GET STARTED
              </button>

              <p className="text-sm text-zinc-500 font-medium">
                Need a custom plan for large teams? <Link href="/contact#contact-form" className="text-white hover:underline">Contact us</Link>.
              </p>
            </div>

            {/* Right Side: Vertical Steps */}
            <div className="flex flex-col gap-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 md:gap-8 items-start group">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white text-black font-bold flex items-center justify-center text-lg mt-1 group-hover:scale-110 transition-transform shadow-lg shadow-white/5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. KEY FEATURES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-20 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CAPABILITIES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Platform Key Features
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed max-w-md mx-auto">
              Everything required to coordinate recruitment pipelines, databases, and payroll calculations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/15 rounded-3xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-3 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-rose-500" />
                    </div>
                    {feat.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-355 font-bold leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI CAPABILITIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              INTELLIGENT RECRUITMENT
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              AI Capabilities inside Humanex
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Discover the machine learning models driving screening pipelines.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((ai, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/30 border border-zinc-900 rounded-3xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-4 tracking-wide">{ai.title}</h3>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">{ai.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRODUCT SCREENSHOTS & DEMO VIDEO */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MEDIA SHOWCASE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Explore the Interface
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Inspect candidate lists, employee files, shifts rosters, and payroll panels inside Humanex.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Recruitment Dashboard", label: "Central catalog tracking jobs, applicants, and AI screening scores." },
              { title: "Employee Database Page", label: "Structured folder containing personal files, contact data, and histories." },
              { title: "Attendance Roster Panel", label: "Timesheet monitor checking shifts, clock-ins, and overtime totals." },
              { title: "Payroll Engine Panel", label: "Salary console processing regional taxes, bonus codes, and payouts." },
              { title: "Performance Reviews Screen", label: "Manager feedback dashboard tracking KPI goals and review timelines." },
              { title: "Reports Analytics Display", label: "HR telemetry charts tracking turnover risks, hiring speeds, and costs." }
            ].map((scr, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 hover:border-zinc-800 transition-colors">
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-900/80 mb-5">
                  <Image
                    src="/assets/Home-page/our-products/humanex.png"
                    alt={scr.title}
                    fill
                    className="object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="text-xs font-bold text-white mb-2 tracking-wide">{scr.title}</h4>
                <p className="text-[10px] text-zinc-500 font-semibold leading-relaxed">{scr.label}</p>
              </div>
            ))}
          </div>

          {/* Simulated Demo Video */}
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-zinc-900 bg-zinc-950 relative aspect-video shadow-2xl flex flex-col justify-center items-center group">
            <Image
              src="/assets/Home-page/our-products/humanex.png"
              alt="Humanex Video Walkthrough Background"
              fill
              className="object-cover opacity-35 transition-transform duration-700 group-hover:scale-[1.01]"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 text-center px-6">
              <button onClick={() => setIsVideoOpen(true)} className="w-20 h-20 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto hover:bg-rose-650 transition-all shadow-[0_0_50px_rgba(244,63,94,0.3)] hover:scale-105 duration-300 mb-6">
                <Play className="w-8 h-8 fill-white ml-1.5" />
              </button>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">Watch Humanex in Action</h3>
              <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm mx-auto">
                A 3-minute walkthrough showcasing job setups, applicant screening parsing, and payroll runs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BUSINESS USE CASES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PRACTICAL USE CASES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Supported HR Workflows
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Standardize employment pipelines across daily corporate operations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {useCases.map((uc, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900 rounded-3xl hover:border-zinc-800 transition-colors">
                <h3 className="text-sm md:text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {uc.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SOLUTIONS BY TEAM OR INDUSTRY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ALIGNMENT INDEX
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Tailored Solutions
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Find how Humanex solves challenges for your specific team responsibilities or industry sector.
            </p>
          </Reveal>

          {/* Toggle Tab Bar */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => { setActiveTab("team"); setActiveSubTab("hr"); }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all ${activeTab === "team" ? "bg-white text-black border-white" : "bg-transparent text-zinc-400 border-zinc-850 hover:border-zinc-700"}`}
            >
              By Business Team
            </button>
            <button
              onClick={() => { setActiveTab("industry"); setActiveSubTab("tech"); }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all ${activeTab === "industry" ? "bg-white text-black border-white" : "bg-transparent text-zinc-400 border-zinc-850 hover:border-zinc-700"}`}
            >
              By Sector / Industry
            </button>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-zinc-950/40 border border-zinc-900 p-8 rounded-3xl">
            {/* Sub Tabs Selection */}
            <div className="md:col-span-4 flex flex-col gap-2.5">
              {activeTab === "team" ? (
                Object.keys(teamSolutions).map((key) => {
                  const s = teamSolutions[key as keyof typeof teamSolutions];
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSubTab(key)}
                      className={`w-full text-left px-5 py-3 rounded-xl text-xs font-bold transition-all border ${activeSubTab === key ? "bg-rose-500/10 text-rose-455 border-rose-500/35" : "bg-black/40 text-zinc-400 border-zinc-900 hover:border-zinc-800"}`}
                    >
                      {s.title}
                    </button>
                  );
                })
              ) : (
                Object.keys(industrySolutions).map((key) => {
                  const s = industrySolutions[key as keyof typeof industrySolutions];
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSubTab(key)}
                      className={`w-full text-left px-5 py-3 rounded-xl text-xs font-bold transition-all border ${activeSubTab === key ? "bg-rose-500/10 text-rose-455 border-rose-500/35" : "bg-black/40 text-zinc-400 border-zinc-900 hover:border-zinc-800"}`}
                    >
                      {s.title}
                    </button>
                  );
                })
              )}
            </div>

            {/* Sub Tab Panel Detail */}
            <div className="md:col-span-8 flex flex-col justify-center min-h-[200px]">
              {activeTab === "team" ? (
                (() => {
                  const s = teamSolutions[activeSubTab as keyof typeof teamSolutions];
                  if (!s) return null;
                  return (
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">{s.title} Portal</h3>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold mb-6">{s.useCase}</p>
                      <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-850 rounded text-[10px] font-mono text-rose-400 font-bold">
                        Key Value: {s.metrics}
                      </div>
                    </div>
                  );
                })()
              ) : (
                (() => {
                  const s = industrySolutions[activeSubTab as keyof typeof industrySolutions];
                  if (!s) return null;
                  return (
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">{s.title} Deployment</h3>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold mb-6">{s.useCase}</p>
                      <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-850 rounded text-[10px] font-mono text-rose-400 font-bold">
                        Compliance Basis: {s.compliance}
                      </div>
                    </div>
                  );
                })()
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. BUSINESS BENEFITS (PREMIUM) */}
      <section className="relative w-full py-24 md:py-32 bg-[#030303] border-b border-zinc-900/60 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-12 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              INVESTMENT RETURN
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Measurable Business Benefits
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
              Why transitioning operations to Humanex saves administrative capital.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {[
              { title: "Accelerated Sourcing Pipelines", desc: "Our AI resume matching collapse applicant screen-to-offer loops from weeks to days." },
              { title: "Minimize Manual Entries", desc: "Centralized database sync eliminates paper onboarding packets and redundant calculations." },
              { title: "Accurate Payroll Runs", desc: "Dynamic tax grids and direct bank integrations minimize ledger mistakes." }
            ].map((ben, idx) => (
              <div
                key={idx}
                className="group relative flex-1 min-w-[280px] max-w-[400px] p-8 md:p-10 bg-[#0a0a0a] border border-zinc-800/80 rounded-[2rem] overflow-hidden hover:bg-zinc-900/50 transition-colors duration-500 shadow-lg hover:shadow-2xl hover:shadow-rose-500/10"
              >
                {/* Background Huge Number */}
                <div className="absolute -right-4 -bottom-8 text-8xl md:text-[120px] font-black text-zinc-800/20 group-hover:text-rose-500/10 transition-colors duration-500 pointer-events-none select-none">
                  0{idx + 1}
                </div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-rose-500/0 via-rose-500/50 to-rose-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <span className="font-mono font-bold text-lg">0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-4 tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                    {ben.title}
                  </h4>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium group-hover:text-zinc-300 transition-colors duration-300">
                    {ben.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. WHY HUMANEX, CUSTOMIZATION & INTEGRATION (PREMIUM) */}
      <section className="w-full py-32 bg-black border-b border-zinc-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">

            {/* Left Column: Text & List */}
            <div className="lg:w-5/12 flex flex-col items-start text-left lg:sticky lg:top-32">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-400 mb-4 block">
                  EXTENSIBILITY
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
                  Customization &amp; Personalization
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium mb-10">
                  Setup custom branding and onboarding routes. Enforce regional rules, specialized department layouts, and notification structures easily.
                </p>

                <ul className="space-y-6">
                  {[
                    "Branded Workspace Panels: Adapt colors, logs, and headers.",
                    "Custom Onboarding Checklist: Map routes sequentially per role.",
                    "Regional Tax Grids: Tailor calculators by state or region."
                  ].map((txt, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm md:text-base text-zinc-300 font-bold">
                      <div className="w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-rose-500/20">
                        <Check className="w-3.5 h-3.5 text-rose-400" />
                      </div>
                      <span className="leading-relaxed">{txt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right Column: 3D Flip Cards Grid */}
            <div className="lg:w-7/12 w-full">
              <Reveal className="mb-6">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-400 mb-2 block">
                  CONNECTIVITY
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Enterprise Ecosystem Connectors
                </h3>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {integrations.map((int, i) => {
                  const icons = [UserPlus, Activity, Briefcase, Globe];
                  const images = [
                    "/assets/common/1b065043b6959827c05a0073c93a4a53 1.png",
                    "/assets/common/260b761ad40c3ad2acba2c6666894539 1.png",
                    "/assets/common/315e4fdc6263bfd240f36297e376576e 1.png",
                    "/assets/common/37b9b888cc479ea7b74d2d9a05c37597 1.png"
                  ];
                  const Icon = icons[i % 4];
                  return (
                    <Reveal key={i} delay={i * 0.1}>
                      <div className="group relative h-[260px] md:h-[280px] [perspective:1000px] cursor-pointer">
                        <div className="absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                          {/* Front Face */}
                          <div className="absolute inset-0 w-full h-full flex flex-col justify-start bg-black border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-6 shadow-sm [backface-visibility:hidden] transition-colors">
                            <div className="w-12 h-12 mb-5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-400">
                              <Icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg text-zinc-100 mb-3">
                              {int.title}
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed flex-1 font-medium">
                              {int.desc}
                            </p>
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-500 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                              View Integration <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>

                          {/* Back Face */}
                          <div className="absolute inset-0 w-full h-full flex flex-col rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-rose-500/30">
                            <img src={images[i % 4]} alt={int.title} className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 flex flex-col justify-end p-6">
                              <div className="w-10 h-10 mb-4 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-500/40 flex items-center justify-center text-rose-400">
                                <Icon size={18} strokeWidth={2} />
                              </div>
                              <h3 className="font-bold text-lg text-white mb-2">{int.title}</h3>
                              <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-400">
                                Explore Capabilities <ArrowUpRight size={14} />
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
      \n\n{/* 12. SECURITY & DATA PRIVACY (PREMIUM) */}
      <section className="relative w-full py-24 bg-black text-white overflow-hidden border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-400 mb-4 block">
                COMPLIANCE &amp; ARCHITECTURE
              </span>
            </Reveal>
            <Reveal>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                Security &amp; Data Isolation
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-zinc-400 text-sm leading-relaxed font-bold">
                Employee profiles contain highly sensitive files. Humanex enforces zero-compromise security layers and directory isolation.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: "SAML SSO Integrations", desc: "Authenticate employee access using Okta, Azure AD, or corporate catalogs.", image: "/assets/common/09ff7846bc8c9998745688779c09f88d 1.png" },
              { icon: Upload, title: "Secure Upload Portals", desc: "Upload employee contracts, scans, and IDs with automatic isolation checkups.", image: "/assets/common/1b065043b6959827c05a0073c93a4a53 1.png" },
              { icon: ShieldCheck, title: "Granular Role Settings (RBAC)", desc: "Enforce strict boundaries between managers, payroll admins, and employees.", image: "/assets/common/260b761ad40c3ad2acba2c6666894539 1.png" },
              { icon: Activity, title: "Encrypted Audit Records", desc: "Every profile review, salary adjustment, or document check is logged.", image: "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa 1.png" }
            ].map((sec, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="relative rounded-[24px] border border-zinc-800/80 bg-black p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-rose-500/50 min-h-[380px]">

                  {/* Expanding Image Layer with Glassmorphism */}
                  <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                    <img src={sec.image || '/assets/common/09ff7846bc8c9998745688779c09f88d 1.png'} alt={sec.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-40" />
                    <div className="absolute inset-0 bg-rose-950/40 backdrop-blur-md" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-rose-900/10 border border-rose-500/10 rounded-[24px]" />
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <sec.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-4 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                        {sec.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-medium group-hover:text-zinc-300 transition-colors duration-500">
                        {sec.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      \n\n

      {/* 13. CLIENT TESTIMONIALS (PREMIUM) */}
      <section className="w-full py-24 md:py-32 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-12 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Trusted by HR Leaders
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
              Read how people managers accelerate onboarding using Humanex.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Humanex resume parser saved our recruitment team over 20 hours a week. The automated onboarding triggers make hiring a breeze.",
                author: "Danielle Vance",
                role: "Director of HR, TechNova Solutions",
                avatar: "https://i.pravatar.cc/150?u=director"
              },
              {
                quote: "Running payroll for our remote engineering team was a massive chore. Humanex tax calculators run local payroll coordinates instantly.",
                author: "Michael Ross",
                role: "VP of People, Global Scale Group",
                avatar: "https://i.pravatar.cc/150?u=vpofpeop"
              },
              {
                quote: "SAML SSO was critical for our corporate security standards. Humanex integrated with Azure AD in less than an hour.",
                author: "Sarah Jenkins",
                role: "IT Security lead, Prime Logistics",
                avatar: "https://i.pravatar.cc/150?u=itsecuri"
              }
            ].map((t, idx) => (
              <div
                key={idx}
                className={`p-8 md:p-10 bg-[#0c0c0c] border border-zinc-800/80 rounded-[2rem] flex flex-col justify-between relative group hover:border-rose-500/50 hover:bg-zinc-900/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-rose-500/10 ${idx === 1 ? 'md:-translate-y-6' : ''}`}
              >
                {/* Large Quotation Icon Background */}
                <div className="absolute top-6 right-6 text-zinc-800/30 group-hover:text-rose-500/10 transition-colors pointer-events-none">
                  <Quote size={80} />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1.5 mb-8">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-rose-500 text-rose-500" />
                    ))}
                  </div>

                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium mb-12">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-zinc-800/50 group-hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-rose-500/30 transition-colors">
                    <Image
                      src={t.avatar || 'https://i.pravatar.cc/150?u=fallback'}
                      alt={t.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white tracking-wide">{t.author}</div>
                    <div className="text-[10px] text-rose-400 font-mono tracking-widest uppercase mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FAQS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-3xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-3 block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="flex flex-col border-t border-zinc-900">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="text-xs md:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. BOOK A DEMO FORM SECTION */}
      <section id="book-demo" className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-4xl mx-auto px-12 xl:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DEMO REQUEST
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Book a Humanex Demo
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md mx-auto leading-relaxed">
              Schedule a call with our HR technology architects to evaluate integration pathways.
            </p>
            <p className="text-zinc-500 text-xs font-bold mt-4">
              Prefer speaking with an expert? Call us directly at{" "}
              <a href="tel:04612940062" className="text-rose-500 hover:text-rose-400 font-bold transition-colors">
                0461 2940062 / +44 7586 879046
              </a>
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-rose-500/[0.015] rounded-full blur-xl pointer-events-none" />

            {formSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm">
                  Thank you! Our solutions engineers will contact you at your business email to schedule a live demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-zinc-500" /> Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-rose-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-zinc-500" /> Business Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-rose-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-zinc-500" /> Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-rose-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-zinc-500" /> Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-rose-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
                      placeholder="+44 7586 879046"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-zinc-500" /> Industry Sector
                    </label>
                    <select
                      value={formState.industry}
                      onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-rose-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors appearance-none font-bold"
                    >
                      <option value="Corporate">Corporate</option>
                      <option value="SMEs">SMEs</option>
                      <option value="IT">IT</option>
                      <option value="Manufacturing">Manufacturing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-500" /> Primary Use Case
                    </label>
                    <select
                      value={formState.useCase}
                      onChange={(e) => setFormState({ ...formState, useCase: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-rose-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors appearance-none font-bold"
                    >
                      <option value="Recruitment Automation">Recruitment Automation</option>
                      <option value="Employee Database">Employee Database</option>
                      <option value="Attendance & Leave">Attendance & Leave</option>
                      <option value="Payroll Engine">Payroll Engine</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold">Message / Additional Requirements</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-black border border-zinc-900 focus:border-rose-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors resize-none"
                    placeholder="Describe your current HR challenges or active systems..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black font-bold text-xs md:text-sm uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting Request..." : "Request Humanex Demo"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA & CONTACT SECTION */}
      <section className="w-full py-28 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
            Ready to simplify your employee operations?
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our product specialist team at <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-rose-500 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</a> or call sales at <a href="tel:+447586879046" className="text-rose-500 hover:underline">0461 2940062</a>.
          </p>
          <a
            href="#book-demo"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300"
          >
            Book a Humanex Demo
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </a>
        </div>
      </section>

      {/* VIDEO LIGHTBOX MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6">
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden aspect-video shadow-2xl flex flex-col justify-center items-center">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Video content overlay */}
            <div className="text-center p-8 z-10 max-w-md">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto mb-4">
                <Play className="w-5 h-5 fill-rose-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Humanex Walkthrough Video</h3>
              <p className="text-xs text-zinc-400 font-bold leading-relaxed mb-6">
                Interactive video stream simulation. Real environments render custom client platform streams directly.
              </p>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="px-6 py-2.5 bg-white text-black text-xs font-bold rounded-lg hover:bg-zinc-200 transition-colors"
              >
                Close Walkthrough
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
