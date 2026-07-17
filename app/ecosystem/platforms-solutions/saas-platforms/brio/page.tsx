"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  TrendingUp,
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

export default function BrioProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"team" | "industry">("team");
  const [activeSubTab, setActiveSubTab] = useState<string>("finance");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Book a Demo Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "FinTech",
    useCase: "Payment Orchestration",
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
          selectedServices: ["Brio Demo Request"],
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
    { icon: UserPlus, title: "1. Customer Checkout", desc: "Buyer initiates checkout inside your checkout window or mobile app screen." },
    { icon: Cpu, title: "2. Intelligent Routing", desc: "AI checks gateway status rates and routes transactions to optimal networks." },
    { icon: ShieldCheck, title: "3. Fraud Screening", desc: "Analyse transaction variables against active risk factors in real time." },
    { icon: Zap, title: "4. Process Gateway", desc: "Execute billing transaction directly on selected processor pipeline." },
    { icon: RefreshCw, title: "5. Auto-Reconciliation", desc: "Match transaction entries against processor invoices automatically." },
    { icon: FileText, title: "6. Reports & Payouts", desc: "Publish settlement telemetry logs and distribute funds to merchant accounts." }
  ];

  const features = [
    { title: "Multi-Gateway Orchestration", desc: "Connect Stripe, PayPal, Adyen, and other billing networks in one panel." },
    { title: "Smart Transaction Routing", desc: "Route billing events dynamically to minimize failed payments and charges." },
    { title: "Unified Reconciliation Ledger", desc: "Audit and reconcile multi-processor transaction records automatically." },
    { title: "Real-Time Fraud Radar", desc: "Shield checkouts against card testers and chargebacks with automated blocks." },
    { title: "Localized Payment Modules", desc: "Support digital wallets, localized banking apps, and split checkouts." },
    { title: "Instant Settlement Logs", desc: "Export ledger lists, transaction fees, and compiled net revenues instantly." }
  ];

  const aiCapabilities = [
    {
      title: "Intelligent Routing Engine",
      desc: "Our neural net tracks processing failure rates across global networks to select the highest-success path for each card checkout."
    },
    {
      title: "Fraud Pattern Classifier",
      desc: "Scans checkout variables in milliseconds to block fraudulent attempts before processors flag chargebacks."
    },
    {
      title: "Fee Optimization Advisor",
      desc: "Calculates interchange fees to direct transactions to lowest-cost processors based on card regions."
    }
  ];

  const useCases = [
    { title: "E-Commerce", desc: "Connect checkout pages with multiple gateways to prevent cart drop-offs." },
    { title: "SaaS Platforms", desc: "Manage subscription plans, retry logics, and local recurring billing." },
    { title: "Global Marketplaces", desc: "Coordinate merchant payouts, split checkouts, and multi-currency billing." }
  ];

  const teamSolutions = {
    finance: {
      title: "Finance & Accounting",
      useCase: "Consolidate accounting logs. Eliminate manual matching entries and download audit-ready ledgers in one click.",
      metrics: "Reconciliation time reduced: -70%"
    },
    product: {
      title: "Product Engineers",
      useCase: "Integrate a single checkout SDK and activate new payment methods from Brio console without rewriting code.",
      metrics: "Dev hours saved: 120+ hrs per gateway"
    },
    operations: {
      title: "Ops & Management",
      useCase: "Track global payment success metrics, optimize billing pipelines, and review checkout transaction failures.",
      metrics: "Transaction success rate: +4.2%"
    }
  };

  const industrySolutions = {
    retail: {
      title: "Retail & E-Commerce",
      useCase: "Enable localized payment integrations and route transactions dynamically during peak checkout rushes.",
      compliance: "PCI-DSS Level 1 Compliant"
    },
    saas: {
      title: "Subscription SaaS",
      useCase: "Setup recurring invoice cards, handle dunning retry sequences, and monitor MRR metrics.",
      compliance: "Automated dunning scripts"
    },
    marketplace: {
      title: "Marketplaces",
      useCase: "Route multi-party checkout transactions, hold escrows, and automate payouts to sellers.",
      compliance: "Granular payout split controls"
    }
  };

  const integrations = [
    { title: "Stripe", desc: "Process card payments and support digital wallet checkouts." },
    { title: "Adyen", desc: "Route enterprise global payments and localize checkouts." },
    { title: "PayPal", desc: "Offer express checkout buttons and wallet balances." },
    { title: "Checkout.com", desc: "Process credit card transactions across international regions." }
  ];

  const faqs = [
    { q: "Is Brio PCI-DSS compliant?", a: "Yes, Brio maintains PCI-DSS Level 1 compliance using isolated tokenization vaults to secure transaction details." },
    { q: "Can we configure fallback processors?", a: "Absolutely. If a primary processor goes down, Brio automatically routes transactions to active fallbacks in milliseconds." },
    { q: "How long does integration take?", a: "Using our unified checkout SDK, most engineering teams go live with multiple gateways within a week." }
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white pt-24 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(240,73,153,0.03),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <Reveal className="mb-4">
                <span className="gap-2 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-fuchsia-500/30 text-fuchsia-400 bg-fuchsia-955/15">
                  <TrendingUp className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
                  Featured FinTech Platform
                </span>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight tracking-tight">
                  Brio
                </h1>
                <p className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 mb-6">
                  Payment Orchestration Simplified
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mb-8">
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold max-w-xl">
                  Orchestrate payment gateways, automate transaction routing, reconcile ledger accounts, and audit processing fees from one unified compliant workspace.
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
                  <Play className="w-3.5 h-3.5 text-fuchsia-400 fill-fuchsia-400/20" />
                  Watch Demo
                </button>
              </Reveal>
            </div>

            {/* Right Showcase Interface */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-3xl border border-zinc-900 bg-zinc-950/40 p-4 hover:border-fuchsia-500/20 transition-colors shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-900/60">
                  <Image
                    src="/assets/Home-page/our-products/brio.png"
                    alt="Brio Application Interface"
                    fill
                    className="object-cover transition-transform duration-750 group-hover:scale-[1.02]"
                    priority
                    unoptimized
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center group-hover:bg-black/35 transition-colors cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                    <div className="w-16 h-16 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-300">
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
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              THE STATUS QUO
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              The Friction of Fragmented Billing Gateways
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Why manual transaction checks and single processor dependencies hurt conversion rates.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="p-8 bg-zinc-950/20 border border-zinc-900 rounded-3xl relative">
              <div className="absolute top-6 right-6 text-red-500/80 bg-red-950/20 border border-red-500/20 rounded-full px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider">
                Outdated Method
              </div>
              <h3 className="text-base font-extrabold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" /> Disconnected Billing Platforms
              </h3>
              <ul className="space-y-4 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Single Processor Vulnerability:</strong> A simple API downtime halts checkout pages globally, dropping sales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Static Checkout Routing:</strong> Card transactions fail from lack of routing fallbacks across international borders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Complex Reconciliation Ledger:</strong> Matching bank bank statements with ad-hoc processor CSVs saves hours of admin work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Hidden Processing Fees:</strong> Dynamic cross-border card fees eat profit margins without warnings.</span>
                </li>
              </ul>
            </div>

            {/* The Brio Way */}
            <div className="p-8 bg-fuchsia-955/5 border border-fuchsia-500/10 rounded-3xl relative">
              <div className="absolute top-6 right-6 text-fuchsia-400 bg-fuchsia-955/30 border border-fuchsia-500/20 rounded-full px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider">
                Brio Flow
              </div>
              <h3 className="text-base font-extrabold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-fuchsia-400" /> Orchestrated Payments
              </h3>
              <ul className="space-y-4 text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-400 font-bold">✔</span>
                  <span><strong>Fail-Safe Orchestration:</strong> Automatically fall back to active processors during gateway drops.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-400 font-bold">✔</span>
                  <span><strong>Intelligent AI Routing:</strong> Route transactions dynamically to maximize success rates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-400 font-bold">✔</span>
                  <span><strong>Unified Ledger Suite:</strong> Auto-reconcile payouts from Stripe, PayPal, and Adyen in one sheet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-400 font-bold">✔</span>
                  <span><strong>Optimized Fees Console:</strong> Smart routes card charges to minimize exchange and network fees.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT BRIO SECTION */}
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-fuchsia-400 mb-3 block">
                ABOUT BRIO
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                Connected Financial Operations
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold mb-6">
                Brio is an enterprise-grade payment orchestration platform that empowers businesses to manage multiple payment processors, configure smart routing rules, and automate accounting reconciliation.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
                Designed to run alongside popular checkout suites and API banks, Brio reduces transaction checkout failures and saves finance teams hours of invoice audits.
              </p>
            </div>

            <div className="lg:col-span-6 bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-[300px] h-[300px] bg-fuchsia-500/[0.01] rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-base font-extrabold text-white mb-6">Core Operational Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-fuchsia-400 font-mono">+4.2%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Checkout Success Rates</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-fuchsia-400 font-mono">-70%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Reconciliation Hours</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-fuchsia-400 font-mono">100%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">PCI-DSS vault compliant</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-fuchsia-400 font-mono">&lt;50ms</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">API routing lag</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (STEP BY STEP) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              How Brio Works
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              A clean 6-step journey from checkout trigger to consolidated financial reporting.
            </p>
          </Reveal>

          <div className="relative">
            {/* Horizontal line for desktop stepper */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-900 -translate-y-1/2 z-0 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {steps.map((st, idx) => (
                <div key={idx} className="bg-zinc-950/60 border border-zinc-900/80 rounded-2xl p-5 flex flex-col justify-between hover:border-fuchsia-500/10 transition-colors">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-4 shadow-inner shrink-0">
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
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-20 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CAPABILITIES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Platform Key Features
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed max-w-md mx-auto">
              Everything required to orchestrate checkout gateways, route payments, and audit costs.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-fuchsia-500/15 rounded-3xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-3 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-fuchsia-500" />
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
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-fuchsia-400 mb-3 block">
              INTELLIGENT ROUTING
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              AI Capabilities inside Brio
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Discover the machine learning models driving checkout pipelines.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((ai, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/30 border border-zinc-900 rounded-3xl hover:border-fuchsia-500/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/25 flex items-center justify-center text-fuchsia-400 mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
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
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MEDIA SHOWCASE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Explore the Interface
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Inspect transaction ledgers, routing charts, and gateway toggles inside Brio.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Main Payments Dashboard", label: "Central console monitoring checkout volume, revenues, and success rates." },
              { title: "Transaction Ledger View", label: "Detailed grid checking payouts, merchant codes, and routing parameters." },
              { title: "Routing Rules Console", label: "Drag and drop panel configuring processor fallbacks and filters." },
              { title: "Gateway Settings Panel", label: "One-click connection screen linking Stripe, PayPal, and Adyen accounts." },
              { title: "Reconciliation Ledger Sheet", label: "Matching ledger checking payouts against processor invoices automatically." },
              { title: "Fraud Pattern Radar", label: "Telemetry panel checking IP tags, card testing warnings, and blocks." }
            ].map((scr, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 hover:border-zinc-800 transition-colors">
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-900/80 mb-5">
                  <Image
                    src="/assets/Home-page/our-products/brio.png"
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
              src="/assets/Home-page/our-products/brio.png"
              alt="Brio Video Walkthrough Background"
              fill
              className="object-cover opacity-35 transition-transform duration-700 group-hover:scale-[1.01]"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 text-center px-6">
              <button onClick={() => setIsVideoOpen(true)} className="w-20 h-20 rounded-full bg-fuchsia-500 text-white flex items-center justify-center mx-auto hover:bg-fuchsia-650 transition-all shadow-[0_0_50px_rgba(240,73,153,0.3)] hover:scale-105 duration-300 mb-6">
                <Play className="w-8 h-8 fill-white ml-1.5" />
              </button>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">Watch Brio in Action</h3>
              <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm mx-auto">
                A 3-minute walkthrough showcasing gateway integrations, fallback routing setups, and payout logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BUSINESS USE CASES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PRACTICAL USE CASES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Supported Payment Workflows
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Standardize payment processing layouts across daily financial operations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900 rounded-3xl hover:border-zinc-800 transition-colors">
                <h3 className="text-sm md:text-base font-extrabold text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                  {uc.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SOLUTIONS BY TEAM OR INDUSTRY */}
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ALIGNMENT INDEX
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Tailored Solutions
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Find how Brio solves challenges for your specific team responsibilities or industry sector.
            </p>
          </Reveal>

          {/* Toggle Tab Bar */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => { setActiveTab("team"); setActiveSubTab("finance"); }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all ${activeTab === "team" ? "bg-white text-black border-white" : "bg-transparent text-zinc-400 border-zinc-850 hover:border-zinc-700"}`}
            >
              By Business Team
            </button>
            <button
              onClick={() => { setActiveTab("industry"); setActiveSubTab("retail"); }}
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
                      className={`w-full text-left px-5 py-3 rounded-xl text-xs font-bold transition-all border ${activeSubTab === key ? "bg-fuchsia-500/10 text-fuchsia-455 border-fuchsia-500/35" : "bg-black/40 text-zinc-400 border-zinc-900 hover:border-zinc-800"}`}
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
                      className={`w-full text-left px-5 py-3 rounded-xl text-xs font-bold transition-all border ${activeSubTab === key ? "bg-fuchsia-500/10 text-fuchsia-455 border-fuchsia-500/35" : "bg-black/40 text-zinc-400 border-zinc-900 hover:border-zinc-800"}`}
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
                      <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-850 rounded text-[10px] font-mono text-fuchsia-400 font-bold">
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
                      <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-850 rounded text-[10px] font-mono text-fuchsia-400 font-bold">
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
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              INVESTMENT RETURN
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Measurable Business Benefits
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Why transitioning payment logic to Brio saves operating capital.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Higher Success Rates", desc: "Intelligent AI routing checks gateway channels to prevent failed customer card payments." },
              { title: "Lower Processing Fees", desc: "Dynamic route sorting selects lowest-cost processors based on transaction regions." },
              { title: "Automated Matching Logs", desc: "Reconcile Stripe, PayPal, and Adyen ledger payouts with bank accounts instantly." }
            ].map((ben, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-fuchsia-500/10 rounded-3xl transition-all duration-300">
                <div className="text-fuchsia-455 text-sm font-bold font-mono mb-3">0{idx + 1}.</div>
                <h4 className="text-base font-bold text-white mb-3 tracking-wide">{ben.title}</h4>
                <p className="text-xs md:text-sm text-zinc-450 leading-relaxed font-semibold">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. WHY BRIO, CUSTOMIZATION & INTEGRATION */}
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Customization Details */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-fuchsia-400 mb-3 block">
                EXTENSIBILITY
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Customization &amp; Personalization
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold mb-8">
                Setup custom branding and gateway routing rules. Configure specific fallback options, currencies, and dunning retry frequencies.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Branded Checkout Sheets: Adapt payment layouts to your UI style.",
                  "Custom Payout Splits: Setup split fees rules for marketplaces.",
                  "Local Currency Profiles: Activate cards and wallets by country."
                ].map((txt, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-zinc-350 font-bold">
                    <Check className="w-4 h-4 text-fuchsia-400 shrink-0" />
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
                    <p className="text-[10px] text-zinc-455 leading-relaxed font-semibold">{int.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SECURITY & DATA PRIVACY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-fuchsia-400 mb-3 block">
                COMPLIANCE &amp; ARCHITECTURE
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                Security &amp; Card Compliance
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-bold">
                Card records demand high-security compliance. Brio keeps all sensitive parameters inside secure token vaults with multi-tenant isolation.
              </p>
            </div>

            <div className="lg:col-span-7 bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Lock, title: "PCI-DSS Level 1 Vault", desc: "Isolate card numbers and tokenise payloads using bank-level algorithms." },
                  { icon: Upload, title: "Secure Payout Logs", desc: "Verify merchant payout checks and upload tax forms with isolation tags." },
                  { icon: ShieldCheck, title: "Role-Based Access (RBAC)", desc: "Enforce strict check boundaries between finance admins and support reps." },
                  { icon: Activity, title: "Encrypted Ledger Audits", desc: "Every transaction, checkout route edit, or payout check is logged." }
                ].map((sec, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 shrink-0">
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
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Trusted by Finance Leaders
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Read how operating groups automate reconciliation using Brio.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Brio completely simplified our multi-country checkouts. The automated routing features reduced our payment failures by 15%.",
                author: "Sarah Mercer",
                role: "Director of Payments, Global Scale Retail"
              },
              {
                quote: "Reconciling checkout payouts was a weekly nightmare for our finance team. Brio matches ledger accounts programmatically.",
                author: "James Vance",
                role: "VP of Finance, Acme SaaS Hub"
              },
              {
                quote: "Security was key for our marketplace. Brio's PCI-DSS Level 1 token vault gives our risk team complete confidence.",
                author: "Danielle Ross",
                role: "Chief Compliance Officer, Prime Escrows"
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
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
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
      <section id="book-demo" className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-4xl mx-auto px-12 xl:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DEMO REQUEST
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Book a Brio Demo
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md mx-auto leading-relaxed">
              Schedule a call with our financial technology architects to evaluate payment pipelines.
            </p>
            <p className="text-zinc-500 text-xs font-bold mt-4">
              Prefer speaking with an expert? Call us directly at{" "}
              <a href="tel:0447471482903" className="text-rose-500 hover:text-rose-400 font-extrabold transition-colors">
                044-7471 482903
              </a>
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-fuchsia-500/[0.015] rounded-full blur-xl pointer-events-none" />
            
            {formSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 mb-6">
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
                      className="w-full bg-black border border-zinc-900 focus:border-fuchsia-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
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
                      className="w-full bg-black border border-zinc-900 focus:border-fuchsia-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
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
                      className="w-full bg-black border border-zinc-900 focus:border-fuchsia-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
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
                      className="w-full bg-black border border-zinc-900 focus:border-fuchsia-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
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
                      className="w-full bg-black border border-zinc-900 focus:border-fuchsia-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors appearance-none font-bold"
                    >
                      <option value="FinTech">FinTech</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="SaaS Platforms">SaaS Platforms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-500" /> Primary Use Case
                    </label>
                    <select
                      value={formState.useCase}
                      onChange={(e) => setFormState({ ...formState, useCase: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-fuchsia-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors appearance-none font-bold"
                    >
                      <option value="Payment Orchestration">Payment Orchestration</option>
                      <option value="Smart Routing">Smart Routing</option>
                      <option value="Unified Reconciliation">Unified Reconciliation</option>
                      <option value="Fraud Screening">Fraud Screening</option>
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
                    className="w-full bg-black border border-zinc-900 focus:border-fuchsia-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors resize-none"
                    placeholder="Describe your current transaction challenges or gateway plans..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black font-extrabold text-xs md:text-sm uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting Request..." : "Request Brio Demo"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA & CONTACT SECTION */}
      <section className="w-full py-28 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(240,73,153,0.02),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
            Ready to simplify your payment operations?
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our product specialist team at <a href="mailto:info@devopstrioglobal.com" className="text-rose-500 hover:underline">info@devopstrioglobal.com</a> or call sales at <a href="tel:+447471482903" className="text-rose-500 hover:underline">044-7471 482903</a>.
          </p>
          <a
            href="#book-demo"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300"
          >
            Book a Brio Demo
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
              <div className="w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 mx-auto mb-4">
                <Play className="w-5 h-5 fill-fuchsia-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Brio Walkthrough Video</h3>
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
