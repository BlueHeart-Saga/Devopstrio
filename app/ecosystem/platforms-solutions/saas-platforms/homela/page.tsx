"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  Home,
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
  Search,
  MapPin,
  Heart,
  FileCheck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomelaProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"team" | "industry">("team");
  const [activeSubTab, setActiveSubTab] = useState<string>("agents");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Book a Demo Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "Real Estate",
    useCase: "Property Management",
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
          selectedServices: ["Homela Demo Request"],
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
    { icon: Upload, title: "1. Create Listing", desc: "Upload property details, specifications, pricing, and high-definition galleries." },
    { icon: Globe, title: "2. Publish Listing", desc: "Distribute your listing instantly across Homela public portals and connected feeds." },
    { icon: Mail, title: "3. Receive Enquiries", desc: "Gather tenant or buyer enquiries inside a centralized inbox layout." },
    { icon: Clock, title: "4. Schedule Visits", desc: "Coordinate viewings automatically with integrated calendars and slots." },
    { icon: UserPlus, title: "5. Manage Leads", desc: "Filter and rank leads based on budgets, timeline urgency, and background checks." },
    { icon: FileCheck, title: "6. Close Deal", desc: "Execute lease parameters or sale contracts with legal-tier templates." }
  ];

  const features = [
    { title: "Dynamic Property Listings", desc: "Construct listings with detailed structural criteria, floor plans, and amenities catalogs." },
    { title: "Smart Property Search", desc: "Allow users to narrow down properties using geospatial mapping and specific filters." },
    { title: "Unified Lead Management", desc: "Track buyer and renter journey stages from initial click to handoff." },
    { title: "Comprehensive Agent Dashboard", desc: "Give agents individual panels to coordinate pipelines, listings, and messages." },
    { title: "Favorites & Watchlists", desc: "Engage visitors by letting them bookmark, compare, and monitor listings." },
    { title: "Inquiry Routing Matrix", desc: "Automatically assign incoming web leads to the correct regional agent dynamically." }
  ];

  const aiCapabilities = [
    {
      title: "AI Property Recommendations",
      desc: "Our recommendation models analyze user browsing behaviors, budgets, and location weights to propose properties that match their preferences."
    },
    {
      title: "Natural Language Search",
      desc: "Allow clients to search using human conversational inputs like '3 bedroom flat with garden near transit links' instead of basic filter drops."
    },
    {
      title: "Listing Yield Optimization",
      desc: "AI compares listings against regional market parameters to automatically recommend pricing models and copy adjustments."
    }
  ];

  const useCases = [
    { title: "Real Estate Agencies", desc: "Equip your agents with unified pipeline management tools and digital listing repositories." },
    { title: "Corporate Builders", desc: "Showcase pre-construction developments, gather deposits, and automate prospect tracking." },
    { title: "Private Property Owners", desc: "Publish listing credentials, manage scheduling calendars, and collect enquiries directly." },
    { title: "Rental Management", desc: "Automate recurring tenant communications, collect payments, and manage maintenance tickets." }
  ];

  const teamSolutions = {
    sales: {
      title: "Sales Teams",
      useCase: "Accelerate transaction speed. Qualify buyer criteria automatically, distribute leads, and trigger digital signature routes when closing properties.",
      metrics: "Average transaction velocity: +35% faster"
    },
    agents: {
      title: "Real Estate Agents",
      useCase: "Organize client relationships in one hub. Track viewing feedback, manage personal property catalogs, and update listing parameters on the go.",
      metrics: "40% administrative hours saved"
    },
    managers: {
      title: "Property Managers",
      useCase: "Track tenancy agreements, collect lease collections, organize inspection reports, and assign maintenance tickets to regional vendors.",
      metrics: "98% timely lease collections rate"
    }
  };

  const industrySolutions = {
    residential: {
      title: "Residential Property",
      useCase: "Manage single-family homes, high-rise flats, and master-planned communities. Simplify tenant routing and automate residential operations.",
      compliance: "Fully GDPR & regional tenant law compliant"
    },
    commercial: {
      title: "Commercial Property",
      useCase: "Oversee office parks, retail outlets, and warehouse logistics. Manage complex multi-tenant leases, common area maintenance fees, and utility grids.",
      compliance: "Enterprise-grade financial reporting tables"
    },
    management: {
      title: "Property Management",
      useCase: "Consolidate operations for property management groups overseeing diverse portfolios. Enforce standard checklists and track team tasks.",
      compliance: "Multiteneant secure role controls"
    }
  };

  const integrations = [
    { title: "CRM Directories", desc: "Sync leads and transactions with Salesforce, HubSpot, or custom broker databases." },
    { title: "Geospatial Maps", desc: "Render interactive listings with high-fidelity Google Maps or Mapbox coordinates." },
    { title: "Payment Gateways", desc: "Collect application fees, deposits, and rent using Stripe, Plaid, or GoCardless integrations." },
    { title: "Messaging Channels", desc: "Push enquiry alerts and updates directly to Slack, email inboxes, or WhatsApp feeds." }
  ];

  const faqs = [
    { q: "Can we link custom maps for listing coordinates?", a: "Yes, Homela integrates directly with Google Maps and Mapbox APIs. You can pinpoint properties precisely with custom markers." },
    { q: "Is tenant data securely isolated?", a: "Yes, Homela employs strict database schema separation and AES-256 data protection to ensure tenant records cannot cross boundaries." },
    { q: "Can agents manage their own leads?", a: "Absolutely. Admins can configure custom team permissions so agents only access their assigned properties and leads." }
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white pt-24 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <Reveal className="mb-4">
                <span className="gap-2 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-amber-500/30 text-amber-400 bg-amber-950/15">
                  <Home className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  Featured PropTech Platform
                </span>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight tracking-tight">
                  Homela
                </h1>
                <p className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6">
                  Property Operations &amp; Real Estate Platform
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mb-8">
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold max-w-xl">
                  Centralize listing management, automate customer enquiries, and track buyer/renter journeys. Homela links operations with integrated maps, payment grids, and AI recommendations.
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
                  <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                  Watch Demo
                </button>
              </Reveal>
            </div>

            {/* Right Showcase Interface */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-3xl border border-zinc-900 bg-zinc-950/40 p-4 hover:border-amber-500/20 transition-colors shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-900/60">
                  <Image
                    src="/assets/Home-page/our-products/homela.png"
                    alt="Homela Application Interface"
                    fill
                    className="object-cover transition-transform duration-750 group-hover:scale-[1.02]"
                    priority
                    unoptimized
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center group-hover:bg-black/35 transition-colors cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                    <div className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-300">
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
              The Pain of Fragmented Real Estate Operations
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Why manual listing updates and offline lead tracking degrade agency margins.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="p-8 bg-zinc-950/20 border border-zinc-900 rounded-3xl relative">
              <div className="absolute top-6 right-6 text-red-500/80 bg-red-950/20 border border-red-500/20 rounded-full px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider">
                Outdated Method
              </div>
              <h3 className="text-base font-extrabold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" /> Scattered Listings &amp; Leads
              </h3>
              <ul className="space-y-4 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Scattered Listing Portals:</strong> Updating specs, pricing, and images across multiple platforms manually.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Manual Lead Tracking:</strong> Enquiries get lost in messy inbox threads with zero centralized statuses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Slow Communication:</strong> Days wasted coordinating schedules between agents, buyers, and tenants.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Poor Property Visibility:</strong> Listings lack modern search, map-based filtering, or high-fidelity display panels.</span>
                </li>
              </ul>
            </div>

            {/* The Homela Way */}
            <div className="p-8 bg-amber-950/5 border border-amber-500/10 rounded-3xl relative">
              <div className="absolute top-6 right-6 text-amber-400 bg-amber-950/30 border border-amber-500/20 rounded-full px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider">
                Homela Flow
              </div>
              <h3 className="text-base font-extrabold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" /> Unified Operations
              </h3>
              <ul className="space-y-4 text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✔</span>
                  <span><strong>One-Click Publishing:</strong> Publish listing details instantly to public feeds from one catalog.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✔</span>
                  <span><strong>Centralized Lead CRM:</strong> Capture enquiries automatically and assign them directly to agents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✔</span>
                  <span><strong>Self-Service Scheduling:</strong> Let clients book slots on integrated calendars based on agent limits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">✔</span>
                  <span><strong>Premium Visual Engine:</strong> Render interactive maps, search, and dynamic galleries seamlessly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT HOMELA SECTION */}
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-3 block">
                ABOUT THE PLATFORM
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                Simplifying the Property Lifecycle
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold mb-6">
                Homela links agents, buyers, tenants, and property owners in a single unified workspace. The platform simplifies real estate operations from listing publication and search to lead management and contracts.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
                Whether you manage a residential agency, build commercial property, or oversee rental portfolios, Homela provides the visual dashboard, CRM routing, and telemetry layers required to scale.
              </p>
            </div>

            <div className="lg:col-span-6 bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-[300px] h-[300px] bg-amber-500/[0.01] rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-base font-extrabold text-white mb-6">Core Operational Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-amber-400 font-mono">3x</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Lead Conversion Velocity</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-amber-400 font-mono">100%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Centralized Catalog</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-amber-400 font-mono">Zero</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Missed Enquiries</div>
                </div>
                <div className="p-4 bg-black border border-zinc-900 rounded-xl">
                  <div className="text-2xl font-black text-amber-400 font-mono">Mobile</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">First Console</div>
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
              How Homela Works
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              A clean 6-step journey from initial listing upload to closed transaction.
            </p>
          </Reveal>

          <div className="relative">
            {/* Horizontal line for desktop stepper */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-900 -translate-y-1/2 z-0 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {steps.map((st, idx) => (
                <div key={idx} className="bg-zinc-950/60 border border-zinc-900/80 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/10 transition-colors">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 shadow-inner shrink-0">
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
              Everything required to showcase properties, manage pipelines, and schedule visits.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-amber-500/15 rounded-3xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-3 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-amber-500" />
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
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-3 block">
              INTELLIGENT RECOMMENDATIONS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              AI Capabilities inside Homela
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              We go beyond standard listing tables. Discover the machine learning models driving listing matches.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((ai, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/30 border border-zinc-900 rounded-3xl hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
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
              Inspect property search maps, agent dashboards, and listing panels inside Homela.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Homela Homepage", label: "Customizable buyer dashboard highlighting recommended listings." },
              { title: "Property Search Console", label: "Geospatial search panels complete with custom filters." },
              { title: "Property Details Display", label: "High-resolution photo galleries, floor plans, and amenities lists." },
              { title: "Agent Pipeline Dashboard", label: "Centralized workspace tracking lead ratings and viewer feedback." },
              { title: "Listing Editor Console", label: "Structured input workspace managing parameters, price points, and status." },
              { title: "User Enquiries Box", label: "Inbox displaying buyer/renter enquiries, scheduling, and direct messages." }
            ].map((scr, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 hover:border-zinc-800 transition-colors">
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-900/80 mb-5">
                  <Image
                    src="/assets/Home-page/our-products/homela.png"
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
              src="/assets/Home-page/our-products/homela.png"
              alt="Homela Video Walkthrough Background"
              fill
              className="object-cover opacity-35 transition-transform duration-700 group-hover:scale-[1.01]"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 text-center px-6">
              <button onClick={() => setIsVideoOpen(true)} className="w-20 h-20 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto hover:bg-amber-600 transition-all shadow-[0_0_50px_rgba(245,158,11,0.3)] hover:scale-105 duration-300 mb-6">
                <Play className="w-8 h-8 fill-white ml-1.5" />
              </button>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">Watch Homela in Action</h3>
              <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm mx-auto">
                A 3-minute walkthrough showcasing listing creation, maps setup, and agent lead management panels.
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
              Supported Real Estate Workflows
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Standardize property pipelines across daily agency operations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900 rounded-3xl hover:border-zinc-800 transition-colors">
                <h3 className="text-sm md:text-base font-extrabold text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
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
              Find how Homela solves challenges for your specific team responsibilities or industry sector.
            </p>
          </Reveal>

          {/* Toggle Tab Bar */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => { setActiveTab("team"); setActiveSubTab("agents"); }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all ${activeTab === "team" ? "bg-white text-black border-white" : "bg-transparent text-zinc-400 border-zinc-850 hover:border-zinc-700"}`}
            >
              By Business Team
            </button>
            <button
              onClick={() => { setActiveTab("industry"); setActiveSubTab("residential"); }}
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
                      className={`w-full text-left px-5 py-3 rounded-xl text-xs font-bold transition-all border ${activeSubTab === key ? "bg-amber-500/10 text-amber-400 border-amber-500/35" : "bg-black/40 text-zinc-400 border-zinc-900 hover:border-zinc-800"}`}
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
                      className={`w-full text-left px-5 py-3 rounded-xl text-xs font-bold transition-all border ${activeSubTab === key ? "bg-amber-500/10 text-amber-400 border-amber-500/35" : "bg-black/40 text-zinc-400 border-zinc-900 hover:border-zinc-800"}`}
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
                      <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-850 rounded text-[10px] font-mono text-amber-400 font-bold">
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
                      <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-850 rounded text-[10px] font-mono text-amber-400 font-bold">
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
              Why transitioning your real estate operations to Homela saves capital.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Faster Property Discovery", desc: "Geospatial coordinates and NLP recommendations help buyers find and lock listings immediately." },
              { title: "Better Lead Conversion", desc: " 중앙 qualified routing assigns buyer inquiries to the best regional agent instantly." },
              { title: "Centralized Listings Catalog", desc: "Manage all specifications, files, layouts, and status parameters inside a single database." }
            ].map((ben, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-amber-500/10 rounded-3xl transition-all duration-300">
                <div className="text-amber-500 text-sm font-bold font-mono mb-3">0{idx + 1}.</div>
                <h4 className="text-base font-bold text-white mb-3 tracking-wide">{ben.title}</h4>
                <p className="text-xs md:text-sm text-zinc-450 leading-relaxed font-semibold">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. WHY HOMELA, CUSTOMIZATION & INTEGRATION */}
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Customization Details */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-3 block">
                EXTENSIBILITY
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Customization &amp; Personalization
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold mb-8">
                Adapt the platform dashboard to match your agency branding. Setup custom layout categories, parameters, regional rules, and notification flows.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Branded Property Feeds: Setup custom colors, logo catalogs, and headers.",
                  "Custom Property Categories: Define parameters for lease types.",
                  "Regional Language Support: Translate listings and notifications."
                ].map((txt, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-zinc-350 font-bold">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
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
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-3 block">
                COMPLIANCE &amp; ARCHITECTURE
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
                Security &amp; Tenant Governance
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-bold">
                Protecting lease files and client payments. Homela features zero-compromise encryption layers and isolation boundaries.
              </p>
            </div>

            <div className="lg:col-span-7 bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Lock, title: "User Authentication", desc: "Protect client profiles and bank payouts with secure MFA." },
                  { icon: Upload, title: "Secure File Uploads", desc: "Upload tenancy agreements and property documents with automated malware checks." },
                  { icon: ShieldCheck, title: "Role Permissions", desc: "Grant custom access boundaries to agents, owners, and tenants." },
                  { icon: Activity, title: "Encrypted Ledgers", desc: "All lease terms and payment log histories are secured with AES-256." }
                ].map((sec, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
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
              Trusted by Real Estate Leaders
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Read how agency leaders coordinate property transactions using Homela.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Homela has completely unified our listing database. Agents can publish properties instantly and follow up with qualified leads in minutes.",
                author: "Sarah Davis",
                role: "Managing Director, Apex Properties"
              },
              {
                quote: "The interactive search map and automatic recommendations have doubled our renter enquiry velocity. Our occupancy rate is at an all-time high.",
                author: "Robert Miller",
                role: "VP of Housing, Metro Co-Living"
              },
              {
                quote: "Securing lease records and encrypting rent payments is critical. Homela's security framework gives our clients absolute confidence.",
                author: "Emily White",
                role: "General Manager, Prime Commercial"
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
              Book a Homela Demo
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md mx-auto leading-relaxed">
              Schedule a call with our property management architects to evaluate integration pathways.
            </p>
            <p className="text-zinc-500 text-xs font-bold mt-4">
              Prefer speaking with an expert? Call us directly at{" "}
              <a href="tel:0447471482903" className="text-rose-500 hover:text-rose-400 font-extrabold transition-colors">
                044-7471 482903
              </a>
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-amber-500/[0.015] rounded-full blur-xl pointer-events-none" />
            
            {formSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
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
                      className="w-full bg-black border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
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
                      className="w-full bg-black border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
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
                      className="w-full bg-black border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
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
                      className="w-full bg-black border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
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
                      className="w-full bg-black border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors appearance-none font-bold"
                    >
                      <option value="Real Estate">Real Estate</option>
                      <option value="Property Management">Property Management</option>
                      <option value="Housing">Housing</option>
                      <option value="Commercial Property">Commercial Property</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-500" /> Primary Use Case
                    </label>
                    <select
                      value={formState.useCase}
                      onChange={(e) => setFormState({ ...formState, useCase: e.target.value })}
                      className="w-full bg-black border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors appearance-none font-bold"
                    >
                      <option value="Property Management">Property Management</option>
                      <option value="Listing Showcase">Listing Showcase</option>
                      <option value="Lead Qualification">Lead Qualification</option>
                      <option value="Viewing Schedules">Viewing Schedules</option>
                      <option value="Contract Automation">Contract Automation</option>
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
                    className="w-full bg-black border border-zinc-900 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors resize-none"
                    placeholder="Describe your current property management challenges..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black font-extrabold text-xs md:text-sm uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting Request..." : "Request Homela Demo"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA & CONTACT SECTION */}
      <section className="w-full py-28 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.02),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">
            Ready to simplify your property workflow?
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our product specialist team at <a href="mailto:info@devopstrioglobal.com" className="text-rose-500 hover:underline">info@devopstrioglobal.com</a> or call sales at <a href="tel:+447471482903" className="text-rose-500 hover:underline">044-7471 482903</a>.
          </p>
          <a
            href="#book-demo"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300"
          >
            Book a Homela Demo
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
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-emerald-500/30 flex items-center justify-center text-amber-400 mx-auto mb-4">
                <Play className="w-5 h-5 fill-amber-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Homela Walkthrough Video</h3>
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
