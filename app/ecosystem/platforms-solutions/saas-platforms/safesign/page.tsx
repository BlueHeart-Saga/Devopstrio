"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  FileCheck,
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
  X,
  Code,
  Palette,
  Workflow
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/sections/contact/ContactForm";
import { CurvedCarousel } from "@/components/CurvedCarousel";

export default function SafeSignProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"team" | "industry">("team");
  const [activeSubTab, setActiveSubTab] = useState<string>("sales");
  const [activeFeature, setActiveFeature] = useState<string>("developer");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Book a Demo Form State




  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };



  const steps = [
    { icon: Upload, title: "1. Upload Document", desc: "Drag and drop any PDF, DOCX, or text file into the secure portal." },
    { icon: UserPlus, title: "2. Add Signers", desc: "Input recipient emails and define custom verification requirements." },
    { icon: Settings, title: "3. Configure Fields", desc: "Place signature blocks, initials, date stamps, and form fields." },
    { icon: Zap, title: "4. Send Securely", desc: "Distribute access codes and secure invite hashes instantly." },
    { icon: FileCheck, title: "5. Sign Anywhere", desc: "Signees complete fields on mobile, tablet, or web panels." },
    { icon: Activity, title: "6. Track Status", desc: "Monitor views, signatures, and reminders in real time." },
    { icon: ShieldCheck, title: "7. Cryptographic Seal", desc: "Lock document with PKI encryption and log the audit trail." }
  ];

  const features = [
    { title: "Compliant eSignatures", desc: "Legally binding signatures meeting US ESIGN Act, UETA, and European eIDAS regulatory guidelines." },
    { title: "No-Code Document Workflows", desc: "Template routers sending documents to multiple signatories in pre-defined sequential paths." },
    { title: "Cryptographic Audit Logs", desc: "Sealed tamper-proof logs capturing email OTPs, SMS codes, IP addresses, and timestamps." },
    { title: "AES-256 Lockers", desc: "High-grade database encryption ensuring signed agreements cannot be intercepted or modified." },
    { title: "Smart Reusable Templates", desc: "Upload and structure boilerplate templates, positioning initials and sign fields in seconds." },
    { title: "Flexible Reminders", desc: "Set automatic notifications and expiration bounds to chase signatures without manual follow-ups." }
  ];

  const aiCapabilities = [
    {
      title: "AI Smart Field Auto-Detection",
      desc: "Our neural nets scan document layouts to identify lines and labels, recommending placing signature, initial, and date fields automatically so you don't have to manually drag and drop them."
    },
    {
      title: "Contract Clause Risk Analyzer",
      desc: "An integrated semantic parser reviews incoming drafts against corporate compliance matrices, highlighting clauses with high liabilities, unusual indemnifications, or deviations."
    },
    {
      title: "Behavioral Anomaly Detection",
      desc: "SafeSign algorithms examine client interaction variables such as velocity, coordinate mapping, and device fingerprint patterns to flag suspicious signing behaviors or potential identity forgery."
    }
  ];

  const useCases = [
    { title: "NDA Signing", desc: "Protect intellectual property instantly before onboarding vendors or partners." },
    { title: "Offer Letters", desc: "Streamline candidate signing loops and secure top talent with zero friction." },
    { title: "Employee Documents", desc: "Deploy handbook updates, benefit approvals, and internal policy confirmations." },
    { title: "Client Agreements", desc: "Accelerate professional services agreements with legally compliant signatures." },
    { title: "Sales Contracts", desc: "Shorten deal lifecycles and increase revenue velocities with instant mobile sign-offs." },
    { title: "Vendor Agreements", desc: "Standardize external supply-chain procurement forms and routing approvals." }
  ];

  const teamSolutions = {
    sales: {
      title: "Sales Teams",
      useCase: "Close deals 4x faster by removing signature bottlenecks. Send contracts, order forms, and Master Service Agreements directly from your CRM workspace, allowing clients to sign on mobile in seconds.",
      metrics: "Average signature cycle: 18 minutes"
    },
    hr: {
      title: "HR Teams",
      useCase: "Deliver high-touch candidate experiences. Streamline hiring pipelines by routing offer letters, direct deposit authorization forms, and insurance paperwork sequentially, keeping your records centralized.",
      metrics: "92% candidate paperwork completion rate"
    },
    legal: {
      title: "Legal Teams",
      useCase: "Maintain compliant control frameworks. Enforce pre-approved contract templates, track revisions with automated revision history checks, and execute complex multi-party agreements securely.",
      metrics: "100% compliant cryptographically sealed logs"
    },
    operations: {
      title: "Operations & Admin",
      useCase: "Govern internal approvals and vendor routing smoothly. Deploy expense sheets, board resolutions, and procurement policies to internal executives and external partners in one structured flow.",
      metrics: "60% operational hours saved on follow-ups"
    }
  };

  const industrySolutions = {
    tech: {
      title: "IT & SaaS",
      useCase: "Integrate legally binding signature blocks directly into your app screens or SaaS consoles. SafeSign REST APIs and webhooks ensure seamless automation and secure programmatic signature loops.",
      compliance: "SOC 2 Type II, ISO 27001 Prepared"
    },
    agencies: {
      title: "Agencies & Consulting",
      useCase: "Onboard new projects, sign Statements of Work (SOW), and lock down retainer approvals without delay. Send branded signing consoles to clients to present professional corporate identity.",
      compliance: "Custom client branding panels"
    },
    realestate: {
      title: "Real Estate & Housing",
      useCase: "Organize smart lease contracts and transaction checklists. Landlords, agents, and tenants can verify parameters and execute documents on mobile devices without physical printing or scanning.",
      compliance: "UETA & ESIGN compliant logs"
    },
    sme: {
      title: "SMEs & Startups",
      useCase: "Eliminate administrative overhead. Centralize all agreements, automate reminders, and secure compliance metrics at a price tier designed to scale with your venture's trajectory.",
      compliance: "Budget-friendly cloud deployment options"
    }
  };

  const integrationDetails = [
    { title: "Enterprise HRMS", desc: "Native bi-directional sync with Workday, BambooHR, and Greenhouse. Automate onboarding packets instantly." },
    { title: "CRM Ecosystems", desc: "Execute contracts without leaving Salesforce or HubSpot. Auto-populate fields from CRM records in real-time." },
    { title: "ERP & Finance", desc: "Seal vendor approvals and route invoices seamlessly through SAP, Oracle, and NetSuite workflows." },
    { title: "Cloud Infrastructure", desc: "Mirror cryptographically sealed PDFs directly into your private AWS S3, Google Cloud, or Azure blob environments." }
  ];

  const faqs = [
    { q: "Does SafeSign hold legal weight globally?", a: "Absolutely. SafeSign architectures comply strictly with the US ESIGN Act, UETA, and European eIDAS standards, rendering every signature court-admissible and globally binding." },
    { q: "Can we embed our own corporate templates?", a: "Yes. Ingest any PDF or DOCX file, overlay dynamic signature and logic fields, and publish it as a standardized template across your entire organizational hierarchy." },
    { q: "How intelligent is the AI field auto-detection?", a: "Our proprietary neural nets scan your unstructured documents, recognize semantic patterns (like 'Lessee Signature' or 'Date'), and auto-place perfectly aligned fields in milliseconds." },
    { q: "Are enterprise integrations supported out-of-the-box?", a: "SafeSign provides robust REST APIs, real-time webhooks, and native connectors for Salesforce, HubSpot, Workday, and major cloud storage providers." },
    { q: "What is your baseline security posture?", a: "Zero-compromise. We utilize TLS 1.3 for data in transit, AES-256 for data at rest, and cryptographic hashing to seal the integrity of every completed document vault." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] pt-8 pb-12 bg-black border-b border-zinc-900/60 overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04),transparent_60%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-emerald-500/30 text-emerald-400 bg-emerald-950/15">
              <FileCheck className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              SafeSign Platform
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Secure, Legally Binding <br className="hidden md:block" /> E-Signatures
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="mb-10">
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-normal max-w-2xl mx-auto">
              Bypass physical printing and scanning. Streamline approvals, verify signatories with secure OTP workflows, and execute agreements instantly with AES-256 encrypted cryptographic logs.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-8 pr-4 py-3.5 bg-white text-black font-bold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get Started
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </a>
          </Reveal>
        </div>

        {/* Curved Carousel */}
        <div className="w-full max-w-[100vw] overflow-hidden mt-2 relative z-10 flex justify-center">
          <CurvedCarousel
            images={[
              "/assets/Home-page/our-products/safesign/dashboardpage.png",
              "/assets/Home-page/our-products/safesign/documenteditor.png",
              "/assets/Home-page/our-products/safesign/homepage.png",
              "/assets/Home-page/our-products/safesign/loginpage.png",
              "/assets/Home-page/our-products/safesign/offers.png",
              "/assets/Home-page/our-products/safesign/pricing-page.png",
              "/assets/Home-page/our-products/safesign/recipientpage.png",
              "/assets/Home-page/our-products/safesign/analyticspage.png",
              "/assets/Home-page/our-products/safesign/alert.png",
              "/assets/Home-page/our-products/safesign/aboutpage.png",
            ]}
          />
        </div>
      </section>

      {/* 2. THE BUSINESS PROBLEM SECTION */}
      <section className="w-full py-32 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-8 xl:px-12">

          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-2xl leading-[1.1]">
              Because contract management shouldn't be <span className="italic font-serif text-zinc-400">this complicated</span>
            </h2>
            <div className="lg:max-w-sm mt-4 lg:mt-0">
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
                We've lived the operational chaos of printing, scanning, and chasing signatures ourselves — so we built a simpler way to secure and execute agreements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-3xl p-8 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors h-[380px]">
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-zinc-600 text-xs font-mono font-bold">01</span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">One place for everything</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                  No more scattered email threads, lost PDF attachments, or endless browser tabs. Draft, send, and manage every contract in a single, uncluttered workspace.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-white group-hover:text-emerald-400 transition-colors cursor-pointer">
                Explore the workspace <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-3xl p-8 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors h-[380px]">
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-zinc-600 text-xs font-mono font-bold">02</span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Fair, friction-free routing</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                  Instant document routing and mobile-optimized signing — because executing a deal, or hiring a candidate, should never be a guessing game.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-white group-hover:text-emerald-400 transition-colors cursor-pointer">
                See how routing works <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-3xl p-8 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors h-[380px]">
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-zinc-600 text-xs font-mono font-bold">03</span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">A system you can trust</h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                  Every signature is cryptographically sealed and verified, so you can focus on the work itself instead of worrying about compliance and audit trails.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-white group-hover:text-emerald-400 transition-colors cursor-pointer">
                Review security protocols <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT SAFESIGN SECTION */}
      <section className="w-full py-32 bg-black text-white relative overflow-hidden border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-8 xl:px-12">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[32px] border border-zinc-800/60 bg-zinc-950/30 backdrop-blur-xl shadow-2xl">

              {/* Background Glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-600/10 blur-[120px]" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-emerald-600/5 blur-[120px]" />
              </div>

              <div className="relative grid lg:grid-cols-2 gap-0">
                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-500 mb-8">
                    ABOUT THE PLATFORM
                  </span>

                  <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-[1.2] tracking-tight mb-6">
                    Redefining Trust in Document Exchanges
                  </h2>

                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                    SafeSign is an enterprise-grade digital signature and document lifecycle management platform built for scaling businesses. Designed to sit securely at the center of your workflows, SafeSign replaces manual document friction with a single, legally compliant portal.
                  </p>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 font-medium">
                    From simple non-disclosure agreements to complex multi-party enterprise agreements, the platform enforces strict security, identity verification protocols, and ironclad audit records.
                  </p>

                  <Link
                    href="/contact#contact-form"
                    className="inline-flex items-center gap-3 text-white font-bold text-xs tracking-widest uppercase group/link w-fit"
                  >
                    Deploy SafeSign
                    <span className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </span>
                  </Link>
                </div>

                {/* RIGHT IMAGE */}
                <div className="p-3 md:p-4 flex items-center justify-center bg-zinc-950/20 border-t lg:border-t-0 lg:border-l border-zinc-900/60">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl group/img">
                    <img
                      src="/assets/common/90361fed0bb781d7c86e451995b4dbce-1.png"
                      alt="SafeSign Platform Overview"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-[1.02]"
                    />
                    {/* Subtle reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
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
              {[
                { title: "Create your account", desc: "Enter your details and choose a plan that fits your team's size and workflow." },
                { title: "Upload document", desc: "Drag and drop any PDF, DOCX, or text file directly into the secure portal." },
                { title: "Add recipients", desc: "Input recipient emails and define custom verification requirements for signers." },
                { title: "Configure signature fields", desc: "Place signature blocks, initials, date stamps, and form fields onto the document." },
                { title: "Send document", desc: "Distribute access codes and secure invite hashes instantly to all parties." },
                { title: "Sign & Complete", desc: "Signees complete fields securely, generating a cryptographically sealed document." },
              ].map((step, idx) => (
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

      {/* 5. TEAMS CAPABILITIES SECTION (Tabbed Layout) */}
      <section className="w-full py-32 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-8 xl:px-12">

          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Built to power <br className="hidden md:block" />
              <span className="italic font-serif text-zinc-300">the teams behind great work</span>
            </h2>
          </Reveal>

          {/* TABS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 max-w-4xl mx-auto">
            {[
              { id: "sales", title: "Sales Teams", icon: Briefcase },
              { id: "hr", title: "HR Teams", icon: UserPlus },
              { id: "legal", title: "Legal", icon: ShieldCheck },
              { id: "operations", title: "Operations", icon: Settings }
            ].map((tab) => {
              const isActive = activeSubTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`flex flex-col items-center justify-center p-8 rounded-3xl border transition-all duration-300 h-40 ${isActive
                      ? "bg-zinc-900/90 border-zinc-700 text-white shadow-2xl scale-[1.02]"
                      : "bg-zinc-950 border-zinc-800/60 text-zinc-500 hover:bg-zinc-900/40 hover:text-zinc-300"
                    }`}
                >
                  <Icon className={`w-8 h-8 mb-4 transition-colors ${isActive ? "text-emerald-400" : "text-zinc-600"}`} />
                  <span className="text-sm font-bold tracking-wide">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* CONTENT AREA */}
          <div className="border-t border-zinc-800/80 pt-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

              {/* Left Content */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight leading-[1.2]">
                  {activeSubTab === "sales" && "From first pitch to closed won"}
                  {activeSubTab === "hr" && "From first interview to final hire"}
                  {activeSubTab === "legal" && "From first draft to final seal"}
                  {activeSubTab === "operations" && "From first request to final approval"}
                </h3>
                <button className="px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-white text-sm font-bold transition-all shadow-lg hover:border-zinc-500">
                  See the {teamSolutions[activeSubTab as keyof typeof teamSolutions].title.toLowerCase()} toolkit
                </button>
              </div>

              {/* Right Content */}
              <div className="flex flex-col gap-10">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">One source of truth</h4>
                  <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">
                    {teamSolutions[activeSubTab as keyof typeof teamSolutions].useCase}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Move fast, stay calm</h4>
                  <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">
                    Ship more in less time. {teamSolutions[activeSubTab as keyof typeof teamSolutions].metrics}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. AI CAPABILITIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-400 mb-3 block">
              INTELLIGENT CONTRACTS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              AI Capabilities inside SafeSign
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              We go beyond the baseline signature pad. Discover the machine learning engines driving compliance and analytics.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((ai, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/30 border border-zinc-900 rounded-3xl hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
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
              Inspect critical panels, drawing layouts, and template settings inside SafeSign.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "SafeSign Dashboard", label: "Centralized workspace monitoring documents, pending initials, and templates.", img: "/assets/Home-page/our-products/safesign/dashboardpage.png" },
              { title: "Document Upload Console", label: "Drag and drop panel featuring metadata tagging and cloud directory synchronization.", img: "/assets/Home-page/our-products/safesign/homepage.png" },
              { title: "Signer Configuration", label: "Setup sequentials, authorization pins, and two-factor code checks.", img: "/assets/Home-page/our-products/safesign/recipientpage.png" },
              { title: "Canvas Signature Editor", label: "Responsive draw tools, font stylers, and initial markers.", img: "/assets/Home-page/our-products/safesign/documenteditor.png" },
              { title: "Real-Time Tracking Panel", label: "Visual telemetry timelines tracking open timestamps and location IPs.", img: "/assets/Home-page/our-products/safesign/analyticspage.png" },
              { title: "Completed Audit Record", label: "Cryptographically sealed PDF package complete with metadata log files.", img: "/assets/Home-page/our-products/safesign/alert.png" }
            ].map((scr, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 hover:border-zinc-800 transition-colors">
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-900/80 mb-5">
                  <Image
                    src={scr.img}
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
              src="/assets/Home-page/our-products/safesign/loginpage.png"
              alt="SafeSign Video Walkthrough Background"
              fill
              className="object-cover opacity-35 transition-transform duration-700 group-hover:scale-[1.01]"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 text-center px-6">
              <button onClick={() => setIsVideoOpen(true)} className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto hover:bg-emerald-600 transition-all shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:scale-105 duration-300 mb-6">
                <Play className="w-8 h-8 fill-white ml-1.5" />
              </button>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">Watch SafeSign in Action</h3>
              <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm mx-auto">
                A 3-minute walkthrough showcasing upload, drag-and-drop template placement, and signee validation steps.
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
              Supported Business Workflows
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Standardize contract lifecycles across daily corporate operations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900 rounded-3xl hover:border-zinc-800 transition-colors">
                <h3 className="text-sm md:text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {uc.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. POWERFUL FEATURES (Replaced Solutions section) */}
      <section className="w-full py-32 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-8 xl:px-12">

          {/* Header */}
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Powerful features
            </h2>
            <p className="text-zinc-400 text-lg font-medium">
              Everything you need to build exceptional workflows
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Side: Vertical Tabs */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {[
                {
                  id: "developer",
                  title: "Developer Friendly",
                  desc: "Built with modern technologies and best practices for seamless integration.",
                  icon: Code,
                },
                {
                  id: "customizable",
                  title: "Fully Customizable",
                  desc: "Tailor every aspect to match your brand and design requirements perfectly.",
                  icon: Palette,
                },
                {
                  id: "performance",
                  title: "Performance First",
                  desc: "Optimized for speed with lazy loading, code splitting, and efficient rendering.",
                  icon: Zap,
                },
                {
                  id: "enterprise",
                  title: "Enterprise Ready",
                  desc: "Battle-tested security features and compliance standards for peace of mind.",
                  icon: ShieldCheck,
                }
              ].map((feature) => {
                const isActive = activeFeature === feature.id;
                const Icon = feature.icon;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`w-full p-6 text-left border rounded-[1.5rem] transition-all duration-300 flex items-start gap-5 ${isActive
                        ? 'bg-[#18181b] border-zinc-700 shadow-xl'
                        : 'bg-[#0f0f11] border-zinc-900/60 opacity-60 hover:opacity-100 hover:bg-[#121214]'
                      }`}
                  >
                    <div className={`p-3 rounded-xl transition-colors ${isActive ? 'bg-zinc-800' : 'bg-transparent'}`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                    </div>
                    <div>
                      <h4 className={`font-bold mb-1.5 text-base tracking-wide ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                        {feature.title}
                      </h4>
                      <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                        {feature.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Side: Active Tab Detail Card */}
            <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800/80 rounded-[2.5rem] p-10 md:p-14 h-full flex flex-col justify-center">
              {(() => {
                const activeData = [
                  {
                    id: "developer",
                    title: "Developer Friendly",
                    desc: "Built with modern technologies and best practices for seamless integration.",
                    icon: Code,
                    bullets: [
                      "RESTful API architecture",
                      "Real-time webhook events",
                      "SDKs for Node.js, Python, & Go",
                      "Comprehensive developer docs"
                    ]
                  },
                  {
                    id: "customizable",
                    title: "Fully Customizable",
                    desc: "Tailor every aspect to match your brand and design requirements perfectly.",
                    icon: Palette,
                    bullets: [
                      "Custom branding & colors",
                      "White-labeled email notifications",
                      "Custom domain support (CNAME)",
                      "Dynamic field placement"
                    ]
                  },
                  {
                    id: "performance",
                    title: "Performance First",
                    desc: "Optimized for speed with lazy loading, code splitting, and efficient rendering.",
                    icon: Zap,
                    bullets: [
                      "Edge network document delivery",
                      "Optimized mobile render paths",
                      "Instant WebSocket syncing",
                      "Sub-second API latency"
                    ]
                  },
                  {
                    id: "enterprise",
                    title: "Enterprise Ready",
                    desc: "Battle-tested security features and compliance standards for peace of mind.",
                    icon: ShieldCheck,
                    bullets: [
                      "SOC 2 Type II certified",
                      "GDPR compliant by design",
                      "Regular security audits",
                      "Data encryption at rest"
                    ]
                  }
                ].find(f => f.id === activeFeature);

                if (!activeData) return null;
                const ActiveIcon = activeData.icon;

                return (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-zinc-800/60 flex items-center justify-center mb-10 border border-zinc-700/50 shadow-inner">
                      <ActiveIcon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                      {activeData.title}
                    </h3>

                    <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                      {activeData.desc}
                    </p>

                    <div className="space-y-4">
                      {activeData.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-center gap-5 bg-[#151518] border border-zinc-800/60 hover:border-zinc-700 transition-colors rounded-2xl p-4 md:p-5">
                          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-black stroke-[3]" />
                          </div>
                          <span className="text-zinc-300 font-bold text-sm tracking-wide">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </div>
      </section>

      {/* 10. BUSINESS BENEFITS (PREMIUM) */}
      <section className="relative w-full py-24 md:py-32 bg-[#030303] border-b border-zinc-900/60 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-12 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-emerald-500 mb-4 block">
              ROI & EFFICIENCY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Transforming Time into Capital
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
              Eliminate friction and accelerate revenue with automated signing workflows that pay for themselves.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {[
              { title: "Eliminate Friction", desc: "Eradicate manual printing, scanning, and endless physical checklists from your workflow." },
              { title: "Intelligent Routing", desc: "Deploy dynamic sequences that automatically chase signatories based on smart deadlines." },
              { title: "Real-Time Telemetry", desc: "Gain absolute clarity with granular tracking of document views, reviews, and signatures." },
              { title: "Unified Vault", desc: "Consolidate every NDA and contract inside a hyper-secure, globally indexed database." },
              { title: "Velocity Closing", desc: "Shrink the deal lifecycle from weeks of waiting to mere minutes of action." }
            ].map((ben, idx) => (
              <div
                key={idx}
                className="group relative flex-1 min-w-[280px] max-w-[400px] p-8 md:p-10 bg-[#0a0a0a] border border-zinc-800/80 rounded-[2rem] overflow-hidden hover:bg-zinc-900/50 transition-colors duration-500 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Background Huge Number */}
                <div className="absolute -right-4 -bottom-8 text-8xl md:text-[120px] font-black text-zinc-800/20 group-hover:text-emerald-500/10 transition-colors duration-500 pointer-events-none select-none">
                  0{idx + 1}
                </div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <span className="font-mono font-bold text-lg">0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-4 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
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

      {/* 11. WHY SAFESIGN, CUSTOMIZATION & INTEGRATION */}
      <section className="w-full py-32 bg-black border-b border-zinc-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">

            {/* Left Column: Text & List */}
            <div className="lg:w-5/12 flex flex-col items-start text-left lg:sticky lg:top-32">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-emerald-400 mb-4 block">
                  BRAND ARCHITECTURE
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
                  Your Identity, Pixel-Perfect
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium mb-10">
                  Command the entire signing experience. Embed your corporate identity deeply into every touchpoint, from custom domain routing to branded email notifications and robust role-based access controls.
                </p>

                <ul className="space-y-6">
                  {[
                    "White-Label Consoles: Deploy seamless signing portals that mirror your exact brand language.",
                    "Smart Triggers: Program dynamic SMTP alerts, SMS nudges, and webhook payloads.",
                    "Role-Based Access Control: Architect granular permission layers for enterprise-wide security."
                  ].map((txt, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm md:text-base text-zinc-300 font-bold">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
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
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-emerald-400 mb-2 block">
                  CONNECTIVITY
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Enterprise Ecosystem Connectors
                </h3>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {integrationDetails.map((int, i) => {
                  const icons = [UserPlus, Activity, Briefcase, Globe];
                  const images = [
                    "/assets/common/1b065043b6959827c05a0073c93a4a53-1.png",
                    "/assets/common/260b761ad40c3ad2acba2c6666894539-1.png",
                    "/assets/common/315e4fdc6263bfd240f36297e376576e-1.png",
                    "/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.png"
                  ];
                  const Icon = icons[i];
                  return (
                    <Reveal key={i} delay={i * 0.1}>
                      <div className="group relative h-[260px] md:h-[280px] [perspective:1000px] cursor-pointer">
                        <div className="absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                          {/* Front Face */}
                          <div className="absolute inset-0 w-full h-full flex flex-col justify-start bg-black border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-6 shadow-sm [backface-visibility:hidden] transition-colors">
                            <div className="w-12 h-12 mb-5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                              <Icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg text-zinc-100 mb-3">
                              {int.title}
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed flex-1 font-medium">
                              {int.desc}
                            </p>
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-500 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                              View Integration <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>

                          {/* Back Face */}
                          <div className="absolute inset-0 w-full h-full flex flex-col rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-emerald-500/30">
                            <img src={images[i]} alt={int.title} className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 flex flex-col justify-end p-6">
                              <div className="w-10 h-10 mb-4 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                                <Icon size={18} strokeWidth={2} />
                              </div>
                              <h3 className="font-bold text-lg text-white mb-2">{int.title}</h3>
                              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400">
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

      {/* 12. SECURITY & DATA PRIVACY */}
      <section className="relative w-full py-24 bg-black text-white overflow-hidden border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-400 mb-4 block">
                SECURITY FOUNDATION
              </span>
            </Reveal>
            <Reveal>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                Zero-Trust Architecture & <span className="text-emerald-400">Governance</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-zinc-400 text-sm leading-relaxed font-bold">
                Contracts represent your most sensitive corporate intelligence. SafeSign surrounds your data with military-grade encryption layers and impenetrable isolation boundaries.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: "AES-256 Vault Encryption",
                desc: "Data and metadata are strictly isolated within hardened databases managed by automated KMS rotations.",
                image: "/assets/common/09ff7846bc8c9998745688779c09f88d-1.png"
              },
              {
                icon: ShieldCheck,
                title: "Global Compliance Matrices",
                desc: "Engineered to exceed eIDAS Advanced criteria and stringent US ESIGN Act certification standards.",
                image: "/assets/common/1b065043b6959827c05a0073c93a4a53-1.png"
              },
              {
                icon: Globe,
                title: "Data Sovereignty Routing",
                desc: "Maintain absolute control by deploying storage nodes directly into your regional Azure or AWS clusters.",
                image: "/assets/common/260b761ad40c3ad2acba2c6666894539-1.png"
              },
              {
                icon: Activity,
                title: "Cryptographic Integrity Seals",
                desc: "Final PDF binaries are locked with SHA-256 hashes, instantly invalidating any unauthorized post-execution edits.",
                image: "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.png"
              }
            ].map((sec, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="relative rounded-[24px] border border-zinc-800/80 bg-black p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-emerald-500/50 min-h-[380px]">

                  {/* Expanding Image Layer with Glassmorphism */}
                  <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                    <img src={sec.image} alt={sec.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-40" />
                    <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-md" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-emerald-900/10 border border-emerald-500/10 rounded-[24px]" />
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mb-6 group-hover:scale-110 transition-transform duration-500">
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

      {/* 13. CLIENT TESTIMONIALS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE VALIDATION
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Trusted by Industry Vanguard
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              See how operations leaders achieve unprecedented contract velocity using SafeSign.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "SafeSign collapsed our vendor agreement cycles from 8 days to under 20 minutes. The automated routing logic is nothing short of revolutionary.",
                author: "Marcus Chen",
                role: "Director of Operations, Veloce Tech"
              },
              {
                quote: "In high-volume recruitment, friction is the enemy. SafeSign empowers our candidates to execute legally binding contracts on mobile flawlessly.",
                author: "Sarah Jenkins",
                role: "VP of People, Nexus Talent"
              },
              {
                quote: "The SHA-256 seals and granular audit telemetry satisfy our legal team's highest compliance thresholds. SafeSign is our definitive standard.",
                author: "David Ross",
                role: "General Counsel, Prestige Consulting"
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
              KNOWLEDGE BASE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Answers for Enterprise Architects
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
      <ContactForm />

      {/* 16. FINAL CTA & CONTACT SECTION */}
      <section className="w-full py-28 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
            Ready to simplify your document workflow?
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our product specialist team at <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-rose-500 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</a> or call sales at <a href="tel:+441784640216" className="text-rose-500 hover:underline">0461 2940062</a>.
          </p>
          <a
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300"
          >
            Book a SafeSign Demo
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
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <Play className="w-5 h-5 fill-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">SafeSign Walkthrough Video</h3>
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
