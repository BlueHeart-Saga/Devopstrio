"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  TrendingUp,
  Shield,
  Activity,
  Layers,
  Zap,
  Globe,
  Settings,
  Plus,
  Minus,
  Briefcase,
  Users,
  FileCheck,
  HeartPulse,
  LineChart,
  Home,
  GraduationCap,
  Sparkles,
  Bot
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SaaSPlatformsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Lead Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    org: "",
    platform: "All Platforms",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Real forms would send to API endpoints
  };

  // Product Grid Data (All 8 Products)
  const products = [
    {
      slug: "homela",
      name: "Homela",
      category: "PropTech",
      badgeColor: "border-amber-500/30 text-amber-400 bg-amber-950/10",
      tagline: "Tailored operations manager for real estate",
      desc: "Coordinate scheduling, automate lease contract triggers, and aggregate regional rental telemetry for property portfolios.",
      features: ["Lease Workflows", "Asset Telemetry", "Contract Automation", "Regional Analytics"],
      logo: "/assets/Home-page/our-products/logo/homela.png",
      ctaPrimary: "View Platform",
      ctaSecondary: "Request Demo",
      url: "https://homela.devopstrio.co.uk/"
    },
    {
      slug: "caresuite",
      name: "CareSuite",
      category: "HealthTech",
      badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-950/10",
      tagline: "Designed for hospitals and clinics",
      desc: "Centralize clinical workflows, verify patient credentials, manage appointments, and streamline healthcare operations.",
      features: ["Patient Records", "Appointments Scheduler", "Clinical Billing", "Actionable Reports"],
      logo: "/assets/Home-page/our-products/logo/Caresuite.png",
      ctaPrimary: "View Platform",
      ctaSecondary: "Book Demo",
      url: "https://caresuite.devopstrio.co.uk/"
    },
    {
      slug: "humanex",
      name: "Humanex",
      category: "HRTech",
      badgeColor: "border-rose-500/30 text-rose-400 bg-rose-950/10",
      tagline: "AI-powered Human Resource Platform",
      desc: "Simplify recruitment, onboarding, attendance, payroll, and employee management from one intelligent platform.",
      features: ["Recruitment Automation", "Leave Management", "Dynamic Payroll Engine", "Attendance Tracking"],
      logo: "/assets/Home-page/our-products/logo/humanex.png",
      ctaPrimary: "View Platform",
      ctaSecondary: "Start Trial",
      url: "https://humanex.devopstrio.co.uk/"
    },
    {
      slug: "campix",
      name: "Campix",
      category: "MarTech",
      badgeColor: "border-purple-500/30 text-purple-400 bg-purple-950/10",
      tagline: "Align marketing execution with conversions",
      desc: "Track cross-channel spending, automate analytics collection, and split traffic dynamically for optimal campaign conversions.",
      features: ["Traffic Splitting", "Spend Auditing", "Analytics Aggregator", "Channel Attribution"],
      logo: "/assets/Home-page/our-products/logo/Campix.png",
      ctaPrimary: "View Platform",
      ctaSecondary: "Request Demo",
      url: "https://campix.devopstrio.co.uk/"
    },
    {
      slug: "prestivo",
      name: "Prestivo",
      category: "EdTech",
      badgeColor: "border-blue-500/30 text-blue-400 bg-blue-950/10",
      tagline: "Collaborative learning workspace platform",
      desc: "Empower schools and training centers with course modules, student logs, task sheets, and grade records.",
      features: ["Course Modules", "Student Logs", "Task Sheets", "Performance Reports"],
      logo: "/assets/Home-page/our-products/logo/Prestivo.png",
      ctaPrimary: "View Platform",
      ctaSecondary: "Learn More",
      url: "https://prestivo.devopstrio.co.uk/"
    },
    {
      slug: "brio",
      name: "Brio",
      category: "AI & Marketing",
      badgeColor: "border-fuchsia-500/30 text-fuchsia-400 bg-fuchsia-950/10",
      tagline: "Empower design teams at scale",
      desc: "Produce brand assets, write copy, and manage creative media using automated neural generative tools.",
      features: ["AI Copywriter & Editor", "Design Asset Generation", "Campaign Coordination", "Media Asset Lake"],
      logo: "/assets/Home-page/our-products/logo/brio.png",
      ctaPrimary: "View Platform",
      ctaSecondary: "Watch Demo",
      url: "https://brio.devopstrio.co.uk/"
    },
    {
      slug: "safesign",
      name: "SafeSign",
      category: "LegalTech",
      badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-950/10",
      tagline: "Legally compliant digital signing",
      desc: "Accelerate signature loops securely. Fully compliant with European eIDAS and US ESIGN Acts, featuring audit logs.",
      features: ["Compliant eSignatures", "Document Workflows", "Detailed Audit Logs", "Secure Lockers"],
      logo: "/assets/Home-page/our-products/logo/safesign.png",
      ctaPrimary: "View Platform",
      ctaSecondary: "Start Free",
      url: "https://safesign.devopstrio.co.uk/"
    },
    {
      slug: "justivon",
      name: "Justivon",
      category: "Legal Operations",
      badgeColor: "border-indigo-500/30 text-indigo-400 bg-indigo-950/10",
      tagline: "Designed for law firms and legal departments",
      desc: "Automate contract reviews, track billing metrics, organize case documentation, and streamline intake channels.",
      features: ["Legal Case Management", "Document Summarization", "Legal Research Assistant", "Time Tracking & Billing"],
      logo: "/assets/Home-page/our-products/logo/Justivon.png",
      ctaPrimary: "View Platform",
      ctaSecondary: "Book Demo",
      url: "https://justivon.devopstrio.co.uk/"
    }
  ];

  // Industry Coverage Mappings
  const industries = [
    { industry: "Healthcare", product: "CareSuite", link: "/ecosystem/platforms-solutions/saas-platforms/caresuite" },
    { industry: "Human Resources", product: "Humanex", link: "/ecosystem/platforms-solutions/saas-platforms/humanex" },
    { industry: "Real Estate", product: "Homela", link: "/ecosystem/platforms-solutions/saas-platforms/homela" },
    { industry: "Marketing", product: "Campix", link: "/ecosystem/platforms-solutions/saas-platforms/campix" },
    { industry: "Education", product: "Prestivo", link: "/ecosystem/platforms-solutions/saas-platforms/prestivo" },
    { industry: "Legal", product: "SafeSign", link: "/ecosystem/platforms-solutions/saas-platforms/safesign" },
    { industry: "Law Firms", product: "Justivon", link: "/ecosystem/platforms-solutions/saas-platforms/justivon" },
    { industry: "AI Marketing", product: "Brio", link: "/ecosystem/platforms-solutions/saas-platforms/brio" }
  ];

  // Comparison Section Table Data
  const comparisonData = [
    { name: "Humanex", bestFor: "HR operations", users: "HR teams", url: "https://humanex.devopstrio.co.uk/" },
    { name: "CareSuite", bestFor: "Healthcare workflows", users: "Hospitals & clinics", url: "https://caresuite.devopstrio.co.uk/" },
    { name: "Homela", bestFor: "Property management", users: "Agencies & landlords", url: "https://homela.devopstrio.co.uk/" },
    { name: "Campix", bestFor: "Campaign management", users: "Marketing teams", url: "https://campix.devopstrio.co.uk/" },
    { name: "Prestivo", bestFor: "Learning management", users: "Schools & training providers", url: "https://prestivo.devopstrio.co.uk/" },
    { name: "Brio", bestFor: "AI marketing", users: "Brands & agencies", url: "https://brio.devopstrio.co.uk/" },
    { name: "SafeSign", bestFor: "Digital signatures", users: "Legal, HR, Finance", url: "https://safesign.devopstrio.co.uk/" },
    { name: "Justivon", bestFor: "Legal case management", users: "Law firms & legal departments", url: "https://justivon.devopstrio.co.uk/" }
  ];

  // Why Organizations Choose Our Platforms
  const valueProps = [
    { title: "Cloud-native architecture", desc: "Built with resilient container infrastructures deployed inside secure, autoscaling AKS and EKS namespaces." },
    { title: "AI-powered automation", desc: "Integrated smart classifiers and deep generative LLMs reducing cognitive load across tasks." },
    { title: "Enterprise-grade security", desc: "Rigorous ISO-27001 readiness, row-level isolated storage, and end-to-end TLS 1.3 network transport security." },
    { title: "Multi-tenant SaaS", desc: "Fully isolated tenant spaces guaranteeing compliance, high throughput, and zero-crossover boundaries." },
    { title: "API-first integrations", desc: "Fully mapped REST frameworks, secure webhooks, and pre-built connectors to external CRM/ERP platforms." },
    { title: "Responsive UI", desc: "Highly customizable React panels responding fluently to client viewports and drawing gestures." },
    { title: "Analytics & reporting", desc: "Real-time query metrics, customized telemetry tables, and exportable audit histories." },
    { title: "Scalable deployment", desc: "Rapid single-click container provisioning either hosted by us or inside your cloud directories." }
  ];

  // FAQs
  const faqs = [
    {
      q: "Are these SaaS platforms hosted by Devopstrio or in our own cloud?",
      a: "We support both! You can run them as fully managed SaaS tools hosted on our secure nodes, or we can deploy them inside your company's AWS, Azure, or GCP accounts."
    },
    {
      q: "Can we request custom feature additions?",
      a: "Yes. We frequently build custom API integrations, bespoke dashboard charts, and workflows to support specific enterprise setups."
    },
    {
      q: "What security frameworks do these platforms follow?",
      a: "All products follow SOC-2 and ISO-27501 frameworks, with data encrypted in transit and at rest, detailed audit trail logs, and isolated tenant architectures."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <Hero
        badge="Devopstrio SaaS Portfolio"
        title={
          <>
            Enterprise SaaS Platforms <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-rose-600 font-extrabold">
              Built for Modern Businesses
            </span>
          </>
        }
        subtitle="Industry-specific cloud platforms engineered to automate operations, improve customer experiences, and accelerate digital transformation."
        dotField={true}
        dotFieldProps={{
          dotRadius: 1.5,
          dotSpacing: 14,
          bulgeStrength: 67,
          glowRadius: 160,
          sparkle: false,
          waveAmplitude: 0,
          gradientFrom: "rgba(225, 29, 72, 0.35)",
          gradientTo: "rgba(239, 68, 68, 0.15)",
          glowColor: "#1c0508",
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "SAAS PLATFORMS" }
        ]}
      />

      {/* 2. PRODUCT ECOSYSTEM DIAGRAM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              SYSTEM ORCHESTRATION
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6">
              Product Ecosystem Diagram
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Our applications are built on a cohesive cloud substrate, allowing cross-system triggers and secure communication pathways.
            </p>
          </Reveal>

          {/* ASCII & Graphical Hybrid Node Diagram */}
          <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-900 p-8 rounded-3xl relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            
            {/* Top Node */}
            <div className="text-center relative z-10 mb-8 w-full max-w-md">
              <div className="bg-gradient-to-r from-red-900/30 to-rose-900/30 border border-red-500/30 text-rose-400 px-6 py-4 rounded-2xl inline-block shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                <span className="text-[10px] font-mono tracking-widest uppercase block mb-1 font-extrabold text-zinc-500">Central Core</span>
                <span className="text-sm font-black text-white uppercase tracking-widest font-mono">DEVOPSTRIO</span>
                <span className="text-[9px] block text-zinc-400 font-mono mt-1">Enterprise AI • Cloud • SaaS Engineering</span>
              </div>
            </div>

            {/* Tree Branching Lines (SVG) */}
            <svg className="w-full max-w-3xl h-16 pointer-events-none opacity-25 mb-4 hidden md:block">
              {/* Lines to Tier 1 */}
              <line x1="50%" y1="0%" x2="16.6%" y2="100%" stroke="white" strokeWidth="1.5" strokeDasharray="3" />
              <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="white" strokeWidth="1.5" strokeDasharray="3" />
              <line x1="50%" y1="0%" x2="83.3%" y2="100%" stroke="white" strokeWidth="1.5" strokeDasharray="3" />
            </svg>

            {/* Grid representing the nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-10 text-center mb-8">
              {/* Left Wing */}
              <div className="flex flex-col gap-6">
                <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl">
                  <div className="text-xs font-bold text-white font-mono">Humanex</div>
                  <div className="text-[9px] font-mono text-rose-500 uppercase tracking-widest mt-1 font-bold">HR</div>
                </div>
                <div className="flex justify-center text-zinc-700">↓</div>
                <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl">
                  <div className="text-xs font-bold text-white font-mono">SafeSign</div>
                  <div className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest mt-1 font-bold">eSignature</div>
                </div>
              </div>

              {/* Center Wing */}
              <div className="flex flex-col gap-6">
                <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl">
                  <div className="text-xs font-bold text-white font-mono">CareSuite</div>
                  <div className="text-[9px] font-mono text-cyan-500 uppercase tracking-widest mt-1 font-bold">Health</div>
                </div>
                <div className="flex justify-center text-zinc-700">↓</div>
                <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl">
                  <div className="text-xs font-bold text-white font-mono">Justivon</div>
                  <div className="text-[9px] font-mono text-indigo-500 uppercase tracking-widest mt-1 font-bold">Legal Ops</div>
                </div>
              </div>

              {/* Right Wing */}
              <div className="flex flex-col gap-6">
                <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl">
                  <div className="text-xs font-bold text-white font-mono">Homela</div>
                  <div className="text-[9px] font-mono text-amber-500 uppercase tracking-widest mt-1 font-bold">Property</div>
                </div>
                <div className="flex justify-center text-zinc-700">↓</div>
                <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl">
                  <div className="text-xs font-bold text-white font-mono">Campix</div>
                  <div className="text-[9px] font-mono text-purple-500 uppercase tracking-widest mt-1 font-bold">Marketing</div>
                </div>
              </div>
            </div>

            {/* Bottom Connector Flow */}
            <div className="flex flex-col items-center w-full max-w-sm relative z-10 text-center">
              <div className="text-zinc-700 mb-6">↓</div>
              <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl w-full mb-6">
                <div className="text-xs font-bold text-white font-mono">Prestivo</div>
                <div className="text-[9px] font-mono text-blue-500 uppercase tracking-widest mt-1 font-bold">Education</div>
              </div>
              <div className="text-zinc-700 mb-6">↓</div>
              <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl w-full">
                <div className="text-xs font-bold text-white font-mono">Brio</div>
                <div className="text-[9px] font-mono text-fuchsia-500 uppercase tracking-widest mt-1 font-bold">AI Marketing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="w-full py-28 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="max-w-3xl mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              RECOMMENDED SAAS PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
              Enterprise SaaS Platforms Built for Modern Businesses
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
              Explore our comprehensive portfolio. Click to discover key capabilities, view live mirrors, and assess deployment parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.slug}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 border-b border-zinc-900/60 pb-4">
                    <span className={`px-2.5 py-0.5 text-[9px] font-mono border rounded-full font-bold ${p.badgeColor}`}>
                      {p.category}
                    </span>
                    <span className="text-[9px] text-zinc-600 font-mono">Powered by Devopstrio</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white tracking-wide mb-1">{p.name}</h3>
                  <p className="text-[10px] text-rose-500 font-mono mb-4 uppercase tracking-wider font-bold">
                    {p.tagline}
                  </p>
                  
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.features.map((feat) => (
                      <span key={feat} className="px-2 py-0.5 bg-black border border-zinc-900 text-[9px] font-mono text-zinc-400 rounded-md font-bold">
                        ✔ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-zinc-900/40">
                  <Link
                    href={`/ecosystem/platforms-solutions/saas-platforms/${p.slug}`}
                    className="w-full py-2 bg-white text-black text-center text-xs font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    {p.ctaPrimary}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="#lead-form"
                    className="w-full py-2 bg-zinc-900 border border-zinc-800 text-zinc-350 text-center text-xs font-bold rounded-lg hover:bg-zinc-850 hover:text-white transition-colors"
                  >
                    {p.ctaSecondary}
                  </Link>
                  <div className="text-center text-[9px] text-zinc-650 font-mono mt-1">
                    {p.url}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY COVERAGE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                VERTICAL COVERAGE
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Industry Alignment
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-bold">
                Our platforms are configured with specific regulatory and operational layers tailored directly to each corresponding industry.
              </p>
            </div>

            <div className="lg:col-span-7 bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((ind, idx) => (
                  <Link
                    key={idx}
                    href={ind.link}
                    className="flex items-center justify-between p-4 bg-black border border-zinc-900 rounded-xl hover:border-rose-500/15 transition-all group"
                  >
                    <div>
                      <div className="text-[10px] text-zinc-550 font-mono uppercase tracking-wider font-bold">Sector</div>
                      <div className="text-xs font-extrabold text-white">{ind.industry}</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-rose-500 font-mono font-bold">
                      {ind.product}
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT COMPARISON SECTION */}
      <section className="w-full py-28 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PLATFORM INDEX
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
              Compare Our Solutions
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
              A quick guide to finding the right workspace or transactional system.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-zinc-900 bg-zinc-950/20">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-zinc-900 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  <th className="py-6 px-8">Platform</th>
                  <th className="py-6 px-6">Best For</th>
                  <th className="py-6 px-6">Typical Users</th>
                  <th className="py-6 px-8 text-right">Mirror Domain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-xs md:text-sm">
                {comparisonData.map((row) => (
                  <tr key={row.name} className="hover:bg-zinc-950/50 transition-colors">
                    <td className="py-6 px-8 font-black text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      {row.name}
                    </td>
                    <td className="py-6 px-6 text-zinc-300 font-medium">{row.bestFor}</td>
                    <td className="py-6 px-6 text-zinc-455 font-semibold">{row.users}</td>
                    <td className="py-6 px-8 text-right font-mono text-zinc-500 text-[10px] hover:text-white transition-colors">
                      <a href={row.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                        {row.url}
                        <ArrowUpRight className="w-2.5 h-2.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. WHY ORGANIZATIONS CHOOSE OUR PLATFORMS */}
      <section className="w-full py-28 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ARCHITECTURE MATRIX
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
              Why Organizations Choose Devopstrio
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
              Hard engineering and measurable values behind our deployment models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/10 rounded-3xl transition-colors duration-300"
              >
                <div className="text-xs font-black text-rose-500 uppercase tracking-widest font-mono mb-3">
                  0{idx + 1}. {prop.title}
                </div>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER SUCCESS & CASES */}
      <section className="w-full py-28 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PROVEN RESULTS
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              Customer Success Stories
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Scale Recruiting Lifecycles",
                platform: "Humanex Impact",
                challenge: "HR coordinators spent average 3.5 hours screening resume packets for technical fits.",
                result: "AI screening screens files and ranks matches dynamically, reducing hiring lifecycle durations by 40%."
              },
              {
                title: "Accelerating Legal Signing Pools",
                platform: "SafeSign Impact",
                challenge: "Vendor agreements required average 4 mailing loops and 12 days to verify signatures.",
                result: "eSign templates and SMS pins reduced active signing cycles to 12 minutes with compliant certificates."
              },
              {
                title: "Hospital Scheduling Telemetry",
                platform: "CareSuite Impact",
                challenge: "Patient queue routing was calculated on manual sheets, causing 45-minute clinic lobby delays.",
                result: "Automated timetables and alerts reduced patient wait times in lobbies by 35%."
              }
            ].map((story, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-500 tracking-wider uppercase font-bold block mb-1">
                    {story.platform}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-white mb-6 tracking-wide">
                    {story.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider block mb-1 font-bold">Challenge</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-bold">{story.challenge}</p>
                    </div>
                    <div className="pt-4 border-t border-zinc-900/60">
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Result</span>
                      <p className="text-xs text-zinc-350 font-bold leading-relaxed">{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SINGLE LEAD FORM ("Talk to Our Product Team") */}
      <section id="lead-form" className="w-full py-28 bg-[#030303]">
        <div className="max-w-4xl mx-auto px-12 xl:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CONNECT WITH US
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Talk to Our Product Team
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md mx-auto leading-relaxed">
              Schedule a live demo, request a trial workspace, or assess custom cloud deployments.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-rose-500/[0.015] rounded-full blur-xl pointer-events-none" />
            
            {formSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 mb-6">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm">
                  Our product solution architects will reach out to schedule your demo or launch staging workspaces.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold">Your Name</label>
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
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold">Email Address</label>
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
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold">Organization Name</label>
                    <input
                      type="text"
                      required
                      value={formState.org}
                      onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-rose-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold">Platform of Interest</label>
                    <select
                      value={formState.platform}
                      onChange={(e) => setFormState({ ...formState, platform: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-rose-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors appearance-none font-bold"
                    >
                      <option value="All Platforms">All Platforms / Multi-platform Suite</option>
                      <option value="Homela">Homela (PropTech)</option>
                      <option value="CareSuite">CareSuite (HealthTech)</option>
                      <option value="Humanex">Humanex (HRTech)</option>
                      <option value="Campix">Campix (MarTech)</option>
                      <option value="Prestivo">Prestivo (EdTech)</option>
                      <option value="Brio">Brio (AI & Marketing)</option>
                      <option value="SafeSign">SafeSign (LegalTech)</option>
                      <option value="Justivon">Justivon (Legal Operations)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold">Your Message / Requirements</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-black border border-zinc-900 focus:border-rose-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors resize-none"
                    placeholder="Describe your current software challenges or deployment specifications..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-extrabold text-xs md:text-sm uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors shadow-lg"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
