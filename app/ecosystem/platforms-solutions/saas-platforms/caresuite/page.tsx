"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  HeartPulse,
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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CareSuiteProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"team" | "industry">("team");
  const [activeSubTab, setActiveSubTab] = useState<string>("doctors");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Book a Demo Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "Healthcare",
    useCase: "EMR Implementation",
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
          message: `Company/Hospital: ${formState.company}\nPhone: ${formState.phone}\nIndustry: ${formState.industry}\nPrimary Use Case: ${formState.useCase}\n\nRequirements:\n${formState.message}`,
          selectedServices: ["CareSuite Demo Request"],
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
    { icon: UserPlus, title: "1. Register Patient", desc: "Input demographics, verify credentials, and create isolated Electronic Health Records." },
    { icon: Clock, title: "2. Appointment Booking", desc: "Schedule slots automatically based on clinician timetables and queue limits." },
    { icon: Activity, title: "3. Consultation", desc: "Log active symptoms, capture vital signs, and update historical files." },
    { icon: FileText, title: "4. Treatment Plan", desc: "Formulate prescriptions, order lab workflows, and structure next actions." },
    { icon: Layers, title: "5. Billing & Coding", desc: "Generate invoices automatically using integrated medical code sets." },
    { icon: ShieldCheck, title: "6. Reports & Auditing", desc: "Compile telemetry summaries, compliance logs, and export performance audits." }
  ];

  const features = [
    { title: "Unified Patient Management", desc: "Centralize profile histories, treatment notes, and demographic parameters." },
    { title: "Secure EMR Engine", desc: "Electronic Medical Records vault isolating patient documents under strict compliance protocols." },
    { title: "Dynamic Appointment Booking", desc: "Automate booking pages, SMS notifications, and clinician calendar limits." },
    { title: "Integrated Billing Matrix", desc: "Coordinate medical billing claims, billing routes, and payments seamlessly." },
    { title: "Pharmacy Dispensing Portal", desc: "Manage clinic prescriptions, inventory lists, and conflict alarms." },
    { title: "Actionable Telemetry Reports", desc: "Compile analytics, patient metrics, and billing summaries instantly." }
  ];

  const aiCapabilities = [
    {
      title: "Clinician Scheduling Predictor",
      desc: "Our scheduling intelligence examines patient check-in histories and weather metrics to predict appointment no-show probabilities, helping clinics optimize active slots."
    },
    {
      title: "Medical Report Summarizer",
      desc: "AI engines parse detailed diagnostic files and lab reports, outputting natural language summaries to reduce cognitive load on doctors."
    },
    {
      title: "Predictive Health Trends",
      desc: "Machine learning algorithms scan aggregated telemetry logs to flag emerging population health trends or departmental resource crunches."
    }
  ];

  const useCases = [
    { title: "Hospitals", desc: "Coordinate multiple departments, manage patient databases, and centralize billing." },
    { title: "Clinics", desc: "Empower local practitioners with scheduling pages, EMR, and direct patient portals." },
    { title: "Medical Centers", desc: "Link pharmacy logs with diagnostic labs to maintain absolute workflow cohesion." }
  ];

  const teamSolutions = {
    doctors: {
      title: "Doctors & Clinicians",
      useCase: "Access EMR sheets, input diagnosis codes quickly, manage digital prescriptions, and check daily patient checklists from any screen.",
      metrics: "Average checkout time reduced: -30%"
    },
    reception: {
      title: "Reception & Admin",
      useCase: "Register incoming patients, organize appointment schedules, verify identities, and send auto-reminders to signatories.",
      metrics: "60% less reception phone time"
    },
    finance: {
      title: "Finance & Billing",
      useCase: "Review billing codes, submit insurance claims programmatically, and coordinate tenant collections safely.",
      metrics: "99% billing accuracy achieved"
    }
  };

  const industrySolutions = {
    healthcare: {
      title: "Healthcare Systems",
      useCase: "Centralize operations across multiple clinic locations. Enforce unified medical record standards and sync data seamlessly.",
      compliance: "HIPAA & regional health protocol compliant"
    },
    clinics: {
      title: "Specialty Clinics",
      useCase: "Tailor input forms and templates to match specific disciplines. Access custom diagnostic workflows easily.",
      compliance: "Highly customizable treatment plans"
    },
    diagnostic: {
      title: "Diagnostic Labs",
      useCase: "Share lab results securely with patients and prescribing physicians. Integrate testing records directly into EMR catalogs.",
      compliance: "Secure HL7 & FHIR data protocols"
    }
  };

  const integrations = [
    { title: "Lab Systems", desc: "Integrate testing laboratories and sync diagnostic charts dynamically." },
    { title: "Pharmacy Networks", desc: "Push prescription coordinates directly to pharmacy systems." },
    { title: "Insurance Databases", desc: "Submit electronic medical coding claims and verify active coverage." },
    { title: "SMS & Email Nodes", desc: "Send patient alerts, appointment schedules, and secure invite keys." }
  ];

  const faqs = [
    { q: "Is CareSuite HIPAA compliant?", a: "Yes, CareSuite satisfies HIPAA regulations, utilizing AES-256 data protection, strict isolation boundaries, and full audit trail histories." },
    { q: "Can we migrate data from legacy EHR databases?", a: "Yes, our engineers assist in mapping and migrating historical clinical records using HL7 and FHIR API connectors." },
    { q: "Is the practitioner panel mobile friendly?", a: "Yes, doctors and nurses can view EHR files, manage schedules, and input notes using tablets or mobile phones." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 bg-black border-b border-zinc-900/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <Reveal className="mb-4">
                <span className="gap-2 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-cyan-500/30 text-cyan-400 bg-cyan-950/15">
                  <HeartPulse className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  Featured HealthTech Platform
                </span>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight tracking-tight">
                  CareSuite
                </h1>
                <p className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-6">
                  Healthcare Management Simplified
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mb-8">
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold max-w-xl">
                  Centralize patient records, manage appointments automatically, optimize pharmacy catalogs, and secure clinical billing loops under strict HIPAA compliance rules.
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
                  <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
                  Watch Demo
                </button>
              </Reveal>
            </div>

            {/* Right Showcase Interface */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-3xl border border-zinc-900 bg-zinc-950/40 p-4 hover:border-cyan-500/20 transition-colors shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-900/60">
                  <Image
                    src="/assets/Home-page/our-products/caresuite.png"
                    alt="CareSuite Application Interface"
                    fill
                    className="object-cover transition-transform duration-750 group-hover:scale-[1.02]"
                    priority
                    unoptimized
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center group-hover:bg-black/35 transition-colors cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                    <div className="w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-300">
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
              The Pain of Scattered Healthcare Operations
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Why manual paperwork and disconnected clinic systems degrade patient experiences.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="p-8 bg-zinc-950/20 border border-zinc-900 rounded-3xl relative">
              <div className="absolute top-6 right-6 text-red-500/80 bg-red-950/20 border border-red-500/20 rounded-full px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider">
                Outdated Method
              </div>
              <h3 className="text-base font-extrabold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" /> Disconnected Clinic Workflows
              </h3>
              <ul className="space-y-4 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Paper Record Hurdles:</strong> Hardcopy patient logs are slow to index, prone to errors, and difficult to share.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Appointment Bottlenecks:</strong> Manual queue slots cause massive waiting room delays.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Complex Billing Loops:</strong> Medical codes, insurance validations, and payouts processed on separate sheets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Vulnerable Storage:</strong> Patient files sitting in physical folders with poor access auditing.</span>
                </li>
              </ul>
            </div>

            {/* The CareSuite Way */}
            <div className="p-8 bg-cyan-950/5 border border-cyan-500/10 rounded-3xl relative">
              <div className="absolute top-6 right-6 text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 rounded-full px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider">
                CareSuite Flow
              </div>
              <h3 className="text-base font-extrabold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" /> Unified HealthTech
              </h3>
              <ul className="space-y-4 text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✔</span>
                  <span><strong>Centralized EMR:</strong> Update patient profiles instantly across clinical units with full security audits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✔</span>
                  <span><strong>Auto-Scheduling:</strong> Let patients book, reschedule, and receive notifications via automated pipelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✔</span>
                  <span><strong>Integrated Billing Matrix:</strong> Process codes and insurance programmatically in one console.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✔</span>
                  <span><strong>HIPAA Compliant Vault:</strong> Secure diagnostic records with AES-256 and granular RBAC permissions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT CARESUITE SECTION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400 mb-3 block">
                ABOUT CARESUITE
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                Connected Medical Architecture
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold mb-6">
                CareSuite is an enterprise-grade medical operations platform that centralizes patient data, clinician calendars, pharmacy inventories, and billing pipelines into a single compliant portal.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
                Built to support hospitals, multi-specialty clinics, and diagnostic labs, CareSuite replaces paper administrative loops with secure, automated digital workflows.
              </p>
            </div>

            <div className="lg:col-span-6 bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-[300px] h-[300px] bg-cyan-500/[0.01] rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-base font-extrabold text-white mb-6">Core Operational Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-cyan-400 font-mono">-35%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Patient Lobby Delays</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-cyan-400 font-mono">100%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">HIPAA Compliant logs</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-cyan-400 font-mono">99.99%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">System Uptime</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-cyan-400 font-mono">FHIR</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Ready APIs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (STEP BY STEP) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              How CareSuite Works
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              A clean 6-step journey from initial patient registration to compiled medical reports.
            </p>
          </Reveal>

          <div className="relative">
            {/* Horizontal line for desktop stepper */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-900 -translate-y-1/2 z-0 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {steps.map((st, idx) => (
                <div key={idx} className="bg-zinc-950/60 border border-zinc-900/80 rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-500/10 transition-colors">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 shadow-inner shrink-0">
                      <st.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-white mb-2 tracking-wide">{st.title}</h3>
                    <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">{st.desc}</p>
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
              Everything required to coordinate clinicians, store records, and manage hospital accounts.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-cyan-500/15 rounded-3xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-3 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-cyan-500" />
                    </div>
                    {feat.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">{feat.desc}</p>
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400 mb-3 block">
              INTELLIGENT HEALTH
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              AI Capabilities inside CareSuite
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Discover the smart models driving appointment flow optimization.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((ai, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/30 border border-zinc-900 rounded-3xl hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-white mb-4 tracking-wide">{ai.title}</h3>
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
              Inspect doctor dashboards, scheduling grids, and patient records inside CareSuite.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Main Hospital Dashboard", label: "Central control console monitoring departmental admissions and telemetry." },
              { title: "Patient Profile EMR", label: "Detailed record showing vitals, history, diagnostic tags, and documents." },
              { title: "Appointments Scheduler", label: "Clinician grid managing bookings, calendar limits, and queues." },
              { title: "Billing & Claims Panel", label: "Integrated ledger processing medical codes, bills, and insurance payout tracking." },
              { title: "Telemetry Reports Room", label: "Analytics dashboards visualising clinic occupancy, budgets, and times." },
              { title: "Doctor Workstation Panel", label: "Accessible screen for clinicians managing active daily patients." }
            ].map((scr, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 hover:border-zinc-800 transition-colors">
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-900/80 mb-5">
                  <Image
                    src="/assets/Home-page/our-products/caresuite.png"
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
              src="/assets/Home-page/our-products/caresuite.png"
              alt="CareSuite Video Walkthrough Background"
              fill
              className="object-cover opacity-35 transition-transform duration-700 group-hover:scale-[1.01]"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 text-center px-6">
              <button onClick={() => setIsVideoOpen(true)} className="w-20 h-20 rounded-full bg-cyan-500 text-white flex items-center justify-center mx-auto hover:bg-cyan-600 transition-all shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:scale-105 duration-300 mb-6">
                <Play className="w-8 h-8 fill-white ml-1.5" />
              </button>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">Watch CareSuite in Action</h3>
              <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm mx-auto">
                A 3-minute walkthrough showcasing patient entry, EMR updates, and automated doctor scheduling limits.
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
              Supported Healthcare Workflows
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Standardize medical workflows across daily clinical operations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900 rounded-3xl hover:border-zinc-800 transition-colors">
                <h3 className="text-sm md:text-base font-extrabold text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
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
              Find how CareSuite solves challenges for your specific team responsibilities or industry sector.
            </p>
          </Reveal>

          {/* Toggle Tab Bar */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => { setActiveTab("team"); setActiveSubTab("doctors"); }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all ${activeTab === "team" ? "bg-white text-black border-white" : "bg-transparent text-zinc-400 border-zinc-850 hover:border-zinc-700"}`}
            >
              By Business Team
            </button>
            <button
              onClick={() => { setActiveTab("industry"); setActiveSubTab("healthcare"); }}
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
                      className={`w-full text-left px-5 py-3 rounded-xl text-xs font-bold transition-all border ${activeSubTab === key ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/35" : "bg-black/40 text-zinc-400 border-zinc-900 hover:border-zinc-800"}`}
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
                      className={`w-full text-left px-5 py-3 rounded-xl text-xs font-bold transition-all border ${activeSubTab === key ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/35" : "bg-black/40 text-zinc-400 border-zinc-900 hover:border-zinc-800"}`}
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
                      <h3 className="text-lg font-bold text-white mb-3">{s.title} Workspace</h3>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold mb-6">{s.useCase}</p>
                      <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-850 rounded text-[10px] font-mono text-cyan-400 font-bold">
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
                      <h3 className="text-lg font-bold text-white mb-3">{s.title} Solutions</h3>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold mb-6">{s.useCase}</p>
                      <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-850 rounded text-[10px] font-mono text-cyan-400 font-bold">
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

      {/* 10. BUSINESS BENEFITS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              INVESTMENT RETURN
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Measurable Business Benefits
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Why transitioning clinical operations to CareSuite saves resources and hours.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Reduce Manual Operations", desc: "Digital patient records and automated scheduling eliminate error-prone hand-written notes." },
              { title: "Minimize Appointment Friction", desc: "SMS and email notifications let patients check slots in real time to optimize queues." },
              { title: "Centralized Clinical Records", desc: "Secure EMR vault compiles historical treatment plans, scripts, and logs in one dashboard." }
            ].map((ben, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-cyan-500/10 rounded-3xl transition-all duration-300">
                <div className="text-cyan-400 text-sm font-bold font-mono mb-3">0{idx + 1}.</div>
                <h4 className="text-base font-bold text-white mb-3 tracking-wide">{ben.title}</h4>
                <p className="text-xs md:text-sm text-zinc-455 leading-relaxed font-semibold">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. WHY CARESUITE, CUSTOMIZATION & INTEGRATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Customization Details */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400 mb-3 block">
                EXTENSIBILITY
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Customization &amp; Personalization
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold mb-8">
                Configure patient input screens to fit your clinical specialty. Set customized fields, alerts, SMS notifications, and billing ledger categories.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Branded Clinic Panels: Set custom logos, headers, and colors.",
                  "Specialized Treatment Cards: Tailor record templates by discipline.",
                  "Custom Reminder Intervals: Setup alert rules for appointments."
                ].map((txt, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-zinc-350 font-bold">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Integrations Grid */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                CONNECTIVITY
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Supported Integrations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {integrations.map((int, idx) => (
                  <div key={idx} className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-zinc-800 transition-colors">
                    <h4 className="text-xs font-bold text-white mb-2 tracking-wide">{int.title}</h4>
                    <p className="text-[10px] text-zinc-450 leading-relaxed font-semibold">{int.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SECURITY & DATA PRIVACY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400 mb-3 block">
                COMPLIANCE &amp; ARCHITECTURE
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                Security &amp; Health Governance
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-bold">
                Medical logs contain highly sensitive records. CareSuite enforces zero-compromise encryption layers and isolation boundaries.
              </p>
            </div>

            <div className="lg:col-span-7 bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Lock, title: "MFA Authentication", desc: "Clinicians and patient profiles are secured with secure multi-factor checks." },
                  { icon: Upload, title: "Secure EMR Uploads", desc: "Upload diagnostic files, reports, and scans securely with isolation." },
                  { icon: ShieldCheck, title: "Role-Based Access (RBAC)", desc: "Limit details visibility based on doctors, receptionists, or billing admins." },
                  { icon: Activity, title: "Encrypted Audit Trails", desc: "Every record review or edit is cryptographically logged and stored." }
                ].map((sec, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <sec.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-1.5 tracking-wide">{sec.title}</h4>
                      <p className="text-[10px] text-zinc-455 leading-relaxed font-semibold">{sec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CLIENT TESTIMONIALS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Trusted by Clinic Leaders
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Read how hospital managers coordinate clinic workflows using CareSuite.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "CareSuite completely unified our EMR files. Doctors can view treatment notes instantly and coordinate with reception to minimize patient wait times.",
                author: "Dr. Alistair Vance",
                role: "Chief Medical Officer, St. Jude Clinic"
              },
              {
                quote: "The billing code matrix and automatic insurance payouts have eliminated invoicing delays. Our billing team saves hours daily.",
                author: "Laura Mercer",
                role: "VP of Finance, Valley Medical Center"
              },
              {
                quote: "Patient data protection is our number one priority. CareSuite's secure HIPAA-ready logs give our IT team absolute peace of mind.",
                author: "James Vance",
                role: "Director of IT, City Health Group"
              }
            ].map((t, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl flex flex-col justify-between">
                <p className="text-zinc-350 text-xs md:text-sm leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
                <div>
                  <div className="text-xs font-bold text-white">{t.author}</div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-1">{t.role}</div>
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
              Book a CareSuite Demo
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md mx-auto leading-relaxed">
              Schedule a call with our health technology architects to evaluate deployment parameters.
            </p>
            <p className="text-zinc-500 text-xs font-bold mt-4">
              Prefer speaking with an expert? Call us directly at{" "}
              <a href="tel:0447471482903" className="text-rose-500 hover:text-rose-400 font-extrabold transition-colors">
                044-7471 482903
              </a>
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-500/[0.015] rounded-full blur-xl pointer-events-none" />
            
            {formSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
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
                      className="w-full bg-black border border-zinc-900 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
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
                      className="w-full bg-black border border-zinc-900 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-zinc-500" /> Clinic / Hospital Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
                      placeholder="Acme Health"
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
                      className="w-full bg-black border border-zinc-900 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
                      placeholder="+44 7471 482903"
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
                      className="w-full bg-black border border-zinc-900 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors appearance-none font-bold"
                    >
                      <option value="Healthcare">Healthcare</option>
                      <option value="Clinics">Clinics</option>
                      <option value="Diagnostic Centers">Diagnostic Centers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-500" /> Primary Use Case
                    </label>
                    <select
                      value={formState.useCase}
                      onChange={(e) => setFormState({ ...formState, useCase: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors appearance-none font-bold"
                    >
                      <option value="EMR Implementation">EMR Implementation</option>
                      <option value="Appointment Booking">Appointment Booking</option>
                      <option value="Clinical Billing">Clinical Billing</option>
                      <option value="Pharmacy Management">Pharmacy Management</option>
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
                    className="w-full bg-black border border-zinc-900 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors resize-none"
                    placeholder="Describe your current clinic challenges or active EHR solutions..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black font-extrabold text-xs md:text-sm uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting Request..." : "Request CareSuite Demo"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA & CONTACT SECTION */}
      <section className="w-full py-28 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.02),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
            Ready to simplify your medical operations?
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our product specialist team at <a href="mailto:info@devopstrioglobal.com" className="text-rose-500 hover:underline">info@devopstrioglobal.com</a> or call sales at <a href="tel:+447471482903" className="text-rose-500 hover:underline">044-7471 482903</a>.
          </p>
          <a
            href="#book-demo"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300"
          >
            Book a CareSuite Demo
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
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4">
                <Play className="w-5 h-5 fill-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">CareSuite Walkthrough Video</h3>
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
