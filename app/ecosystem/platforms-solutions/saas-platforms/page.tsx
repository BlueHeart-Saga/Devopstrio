"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import { FeaturesAccordion } from "@/components/FeaturesAccordion";
import { OrbitEcosystem } from "@/components/OrbitEcosystem";
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
  Bot,
  Star,
  MessageCircle,
  Repeat,
  Heart,
  Cloud,
  Database,
  Hexagon,
  Triangle,
  Circle,
  Box,
  Sun,
  Moon,
  Search,
  Command,
  Play,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SaaSPlatformsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    org: "",
    platform: "All Platforms",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeLogoTab, setActiveLogoTab] = useState("All");
  const [activeProductSlug, setActiveProductSlug] = useState("homela");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: `Organization: ${formState.org}\nPlatform of Interest: ${formState.platform}\n\nRequirements:\n${formState.message}`,
          selectedServices: [formState.platform],
          toEmail: 'info@devopstrioglobal.com',
        }),
      });
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert('Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        shapeGrid={true}
        shapeGridSpeed={0.5}
        shapeGridSquareSize={50}
        shapeGridDirection="diagonal"
        shapeGridBorderColor="rgba(255, 255, 255, 0.08)"
        shapeGridHoverFillColor="rgba(225, 29, 72, 0.2)"
        shapeGridShape="square"
        shapeGridHoverTrailAmount={3}
        dotField={true}
        dotFieldProps={{
          dotRadius: 2,
          dotSpacing: 24,
          bulgeStrength: 67,
          glowRadius: 200,
          sparkle: true,
          waveAmplitude: 10,
          gradientFrom: "rgba(225, 29, 72, 0.8)",
          gradientTo: "rgba(239, 68, 68, 0.5)",
          glowColor: "rgba(225, 29, 72, 0.15)",
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "SAAS PLATFORMS" }
        ]}
      >
        {/* Infinite Scroll Tech Marquee */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mt-16 pt-8 border-t border-zinc-800/50 overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-500">
          <p className="text-center text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold mb-8">
            Powered by industry-leading cloud architecture
          </p>
          
          {/* Gradient Edge Masks for smooth fade */}
          <div className="absolute inset-y-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex flex-nowrap w-max items-center gap-12 sm:gap-24 pr-12 sm:pr-24"
            animate={{ x: [0, "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[
              { name: "AWS", src: "/assets/Tech_logos/AWS.svg" },
              { name: "Azure", src: "/assets/Tech_logos/Microsoft Azure.svg" },
              { name: "Google Cloud", src: "/assets/Tech_logos/Google_Cloud.svg" },
              { name: "Docker", src: "/assets/Tech_logos/Docker.svg" },
              { name: "Kubernetes", src: "/assets/Tech_logos/Kubernetes.svg" },
              { name: "React", src: "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg" },
              { name: "NodeJS", src: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg" },
              { name: "MongoDB", src: "/assets/Tech_logos/MongoDB.svg" },
              { name: "Elastic", src: "/assets/Tech_logos/Elastic.svg" },
              { name: "Datadog", src: "/assets/Tech_logos/Datadog.svg" },
              
              // Duplicated perfectly for the 50% translation loop
              { name: "AWS", src: "/assets/Tech_logos/AWS.svg" },
              { name: "Azure", src: "/assets/Tech_logos/Microsoft Azure.svg" },
              { name: "Google Cloud", src: "/assets/Tech_logos/Google_Cloud.svg" },
              { name: "Docker", src: "/assets/Tech_logos/Docker.svg" },
              { name: "Kubernetes", src: "/assets/Tech_logos/Kubernetes.svg" },
              { name: "React", src: "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg" },
              { name: "NodeJS", src: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg" },
              { name: "MongoDB", src: "/assets/Tech_logos/MongoDB.svg" },
              { name: "Elastic", src: "/assets/Tech_logos/Elastic.svg" },
              { name: "Datadog", src: "/assets/Tech_logos/Datadog.svg" }
            ].map((logo, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center shrink-0 w-10 h-10 md:w-12 md:h-12 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                title={logo.name}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    fill 
                    className="object-contain" 
                    unoptimized 
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Hero>

      {/* 2. PRODUCT ECOSYSTEM DIAGRAM */}
      <section className="w-full py-12 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              SYSTEM ORCHESTRATION
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Product Ecosystem Diagram
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Our applications are built on a cohesive cloud substrate, allowing cross-system triggers and secure communication pathways.
            </p>
          </Reveal>

          {/* Circular Orbit Node Diagram */}
          <div>
            <OrbitEcosystem
              centerLogo="/assets/logo/logo.png"
              nodes={[
                { name: "Campix", logo: "/assets/Home-page/our-products/logo/Campix.png" },
                { name: "CareSuite", logo: "/assets/Home-page/our-products/logo/Caresuite.png" },
                { name: "Justivon", logo: "/assets/Home-page/our-products/logo/Justivon.png" },
                { name: "Prestivo", logo: "/assets/Home-page/our-products/logo/Prestivo.png" },
                { name: "Brio", logo: "/assets/Home-page/our-products/logo/brio.png" },
                { name: "Homela", logo: "/assets/Home-page/our-products/logo/homela.png" },
                { name: "Humanex", logo: "/assets/Home-page/our-products/logo/humanex.png" },
                { name: "SafeSign", logo: "/assets/Home-page/our-products/logo/safesign.png" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* 3. PREMIUM SAAS PORTFOLIO CAROUSEL */}
      <section className="w-full py-16 md:py-24 border-b border-zinc-900/60 bg-[#030303] relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-12 relative z-10">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              RECOMMENDED SAAS PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Enterprise SaaS Platforms Built for Modern Businesses
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
              Explore our comprehensive portfolio. Select a platform below to discover key capabilities, live mirrors, and deployment parameters.
            </p>
          </div>

          {/* Main Showcase Card */}
          {products.filter(p => p.slug === activeProductSlug).map((activeProduct) => (
            <div key={activeProduct.slug} className="bg-[#0c0c0c] border border-zinc-800/80 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row mb-8 animate-in fade-in zoom-in-95 duration-500">
              
              {/* Left Content Half */}
              <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                {/* Subtle background glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-900/10 via-transparent to-transparent pointer-events-none" />

                {/* Logo & Category */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center p-3 shadow-inner">
                    <img src={activeProduct.logo} alt={`${activeProduct.name} Logo`} className="w-full h-full object-contain drop-shadow-md" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-snug relative z-10">
                  {activeProduct.name} redefines {activeProduct.category.toLowerCase()} with {activeProduct.tagline.toLowerCase()}.
                </h3>
                
                <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed mb-10 relative z-10">
                  {activeProduct.desc}
                </p>

                {/* Features (Products equivalent) */}
                <div className="mb-10 relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-5">Core Capabilities</h4>
                  <div className="flex flex-wrap gap-4">
                    {activeProduct.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-full">
                        <div className="w-5 h-5 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-rose-500" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto relative z-10">
                  <Link
                    href={`/ecosystem/platforms-solutions/saas-platforms/${activeProduct.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_25px_rgba(225,29,72,0.5)] hover:-translate-y-0.5"
                  >
                    View Platform
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Image Half */}
              <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full bg-zinc-950 border-l border-zinc-800/80 p-2">
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-zinc-800/50">
                  <Image
                    src={`/assets/Home-page/our-products/${activeProduct.slug}.png`}
                    alt={`${activeProduct.name} Interface`}
                    fill
                    className="object-cover object-left-top scale-105 transition-transform duration-1000 group-hover:scale-100"
                    unoptimized
                  />
                  {/* Glassmorphic inner shadow blending */}
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}

          {/* Logo Tabs Bar */}
          <div className="bg-[#0c0c0c] border border-zinc-800/80 rounded-2xl p-2 flex overflow-x-auto hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex w-max min-w-full">
              {products.map((p) => {
                const isActive = activeProductSlug === p.slug;
                return (
                  <button
                    key={p.slug}
                    onClick={() => setActiveProductSlug(p.slug)}
                    className={`flex-1 min-w-[160px] md:min-w-0 flex flex-col items-center justify-center p-4 border-b-2 transition-all duration-300 relative group ${
                      isActive 
                        ? "border-rose-500 bg-zinc-900/60 rounded-xl" 
                        : "border-transparent hover:bg-zinc-900/40 rounded-xl opacity-50 hover:opacity-100"
                    }`}
                  >
                    <div className="h-8 md:h-10 flex items-center justify-center mb-2">
                      <img 
                        src={p.logo} 
                        alt={p.name} 
                        className={`max-h-full w-auto object-contain transition-all duration-300 ${isActive ? "scale-110 drop-shadow-md" : "grayscale group-hover:grayscale-0"}`} 
                      />
                    </div>
                    {/* Optional text label for clarity */}
                    <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isActive ? "text-white" : "text-zinc-600"}`}>
                      {p.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4. INDUSTRY COVERAGE */}
      <section className="w-full py-12 bg-black border-b border-zinc-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-12">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                A season of shipped work.
              </h2>
              <p className="text-zinc-400 text-base md:text-lg font-medium">
                New identities, platforms, and launch sites — built with the in-house teams who run them now across diverse industries.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button onClick={() => document.getElementById('industry-scroll')?.scrollBy({ left: -424, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              </button>
              <button onClick={() => document.getElementById('industry-scroll')?.scrollBy({ left: 424, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>

          {/* Horizontal Scroller */}
          <div 
            id="industry-scroll"
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative"
          >
            {[
              { title: "Banking & Finance", subtitle: "Secure financial frameworks · 2026", badge: "Brio", logo: "/assets/Home-page/our-products/logo/brio.png", image: "/assets/Home-page/industries/bankifinance.png" },
              { title: "Healthcare", subtitle: "Clinical operational suites · 2026", badge: "CareSuite", logo: "/assets/Home-page/our-products/logo/Caresuite.png", image: "/assets/Home-page/industries/healthcaree.png" },
              { title: "Education", subtitle: "Collaborative learning hubs · 2026", badge: "Prestivo", logo: "/assets/Home-page/our-products/logo/Prestivo.png", image: "/assets/Home-page/industries/educationn.png" },
              { title: "Government", subtitle: "Public sector automation · 2026", badge: "Justivon", logo: "/assets/Home-page/our-products/logo/Justivon.png", image: "/assets/Home-page/industries/governmentsector.png" },
              { title: "Manufacturing", subtitle: "Supply chain integrations · 2026", badge: "Humanex", logo: "/assets/Home-page/our-products/logo/humanex.png", image: "/assets/Home-page/industries/manufacturingg.png" },
              { title: "Media & Ent.", subtitle: "Asset coordination matrix · 2026", badge: "Campix", logo: "/assets/Home-page/our-products/logo/Campix.png", image: "/assets/Home-page/industries/mediaentertainment.png" },
              { title: "Telecom", subtitle: "Network lifecycle tooling · 2026", badge: "SafeSign", logo: "/assets/Home-page/our-products/logo/safesign.png", image: "/assets/Home-page/industries/telecommunicationn.png" },
              { title: "Retail", subtitle: "Omnichannel workflows · 2026", badge: "Humanex", logo: "/assets/Home-page/our-products/logo/humanex.png", image: "/assets/Home-page/industries/retailecommerce.png" },
              { title: "Real Estate", subtitle: "Property asset telemetry · 2026", badge: "Homela", logo: "/assets/Home-page/our-products/logo/homela.png", image: "/assets/Home-page/industries/4.png" }
            ].map((ind, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer bg-[#0c0c0c] border border-zinc-800/80 rounded-[2rem] p-2 hover:border-zinc-700 transition-colors">
                {/* Visual Box */}
                <div className="bg-zinc-900 rounded-[1.5rem] border border-zinc-800/50 aspect-[4/3] relative overflow-hidden mb-4 shadow-inner">
                  
                  {/* Full Cover Image */}
                  <Image 
                    src={ind.image} 
                    alt={ind.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    unoptimized 
                  />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none opacity-80" />

                  {/* Top Badge (Logo) */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-10 flex items-center justify-center min-h-[28px]">
                    {ind.logo ? (
                      <Image src={ind.logo} alt={ind.badge} width={80} height={20} className="h-3 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" unoptimized />
                    ) : (
                      <span className="text-[9px] font-bold text-white tracking-widest uppercase">{ind.badge}</span>
                    )}
                  </div>
                </div>

                {/* Info Text */}
                <div className="flex justify-between items-start px-2 pb-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-rose-500 transition-colors">{ind.title}</h3>
                    <p className="text-xs md:text-sm text-zinc-500 font-medium">{ind.subtitle}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Progress UI */}
          <div className="flex items-center gap-6 mt-8 w-full max-w-sm mx-auto md:mx-0">
            <div className="flex-1 h-[1px] bg-zinc-800 relative">
              <div className="absolute left-0 top-0 h-full w-[22%]" style={{ backgroundImage: 'linear-gradient(90deg, #fff, #555)' }} />
            </div>
            <div className="text-[10px] font-mono text-zinc-400 font-bold tracking-widest uppercase">02 / 09</div>
          </div>
          
        </div>
      </section>

      {/* 5. PRODUCT COMPARISON SECTION */}
      <section className="w-full py-12 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PLATFORM INDEX
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
                Compare Our Solutions
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
              A quick guide to finding the right workspace or transactional system.
            </p>
          </div>

          <FeaturesAccordion 
            features={comparisonData.map(row => {
              const product = products.find(p => p.name === row.name) || products[0];
              return {
                id: row.name.toLowerCase(),
                title: row.name,
                description: (
                  <div className="flex flex-col gap-3 mt-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-zinc-600 mb-1">Target Audience</span>
                        <span className="text-zinc-300 font-semibold">{product.category}</span>
                      </div>
                    </div>
                    <a href={row.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-rose-500 hover:text-rose-400 font-bold text-sm mt-4 transition-colors">
                      Visit {row.name} Platform
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                ),
                tagline: product.tagline,
                desc: product.desc,
                featuresList: product.features
              };
            })}
          />
        </div>
      </section>

      {/* 6. WHY ORGANIZATIONS CHOOSE OUR PLATFORMS */}
      <section className="w-full py-12 bg-black border-b border-zinc-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-12">
          
          <div className="max-w-4xl mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Why Organizations Choose Devopstrio.
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-medium">
              Hard engineering and measurable values behind our deployment models.
            </p>
          </div>

          {/* Aesthetic Filter Bar (Static) */}
          <div className="flex flex-wrap items-center justify-between border-t border-b border-zinc-900/80 py-4 mb-6 gap-4">
            <div className="flex items-center gap-2 md:gap-4 overflow-x-auto hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mr-4">Filter</span>
              <button className="px-5 py-2 rounded-full bg-white text-black text-xs font-bold shrink-0">All</button>
              <button className="px-5 py-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-bold transition-colors shrink-0">Architecture</button>
              <button className="px-5 py-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-bold transition-colors shrink-0">Security</button>
              <button className="px-5 py-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-bold transition-colors shrink-0">Automation</button>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase shrink-0">8 Pillars</span>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {valueProps.map((prop, idx) => {
              const cardImages = [
                "/assets/common/09ff7846bc8c9998745688779c09f88d 1.png",
                "/assets/common/1b065043b6959827c05a0073c93a4a53 1.png",
                "/assets/common/260b761ad40c3ad2acba2c6666894539 1.png",
                "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa 1.png",
                "/assets/common/315e4fdc6263bfd240f36297e376576e 1.png",
                "/assets/common/37b9b888cc479ea7b74d2d9a05c37597 1.png",
                "/assets/common/45ea830d170d382ade235db479060da7 1.png",
                "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca 1.png"
              ];
              const image = cardImages[idx % cardImages.length];
              
              // Dynamic badges matching the aesthetic
              const category = idx % 2 === 0 ? "Architecture" : "Security";
              const tag = idx % 3 === 0 ? "Automation" : (idx % 2 === 0 ? "Cloud" : "Product");

              return (
                <div key={idx} className="min-w-[320px] md:min-w-[420px] snap-start group cursor-pointer bg-[#0c0c0c] border border-zinc-800/80 p-2 rounded-[2rem] shadow-xl hover:border-zinc-700 transition-colors">
                   <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-zinc-900 border border-zinc-800/50">
                      <Image 
                        src={image} 
                        alt={prop.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        unoptimized 
                      />
                      
                      {/* Inner shadow overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none opacity-80" />

                      {/* Pill Badges */}
                      <div className="absolute bottom-4 left-4 flex gap-2">
                         <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-widest border border-white/10">
                            {category}
                         </span>
                         <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-widest border border-white/10">
                            {tag}
                         </span>
                      </div>

                      {/* Hover Arrow top right */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-2xl">
                         <ArrowUpRight className="w-4 h-4" />
                      </div>
                   </div>

                   <div className="flex justify-between items-start px-2 pb-2">
                      <div className="max-w-[85%]">
                         <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">{prop.title}</h3>
                         <p className="text-sm text-zinc-400 font-medium leading-relaxed line-clamp-2">{prop.desc}</p>
                      </div>
                      <div className="text-[10px] font-mono text-zinc-600 mt-1.5 tracking-widest">0{idx + 1}</div>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER SUCCESS BENTO GRID */}
      <section className="w-full py-12 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Large Card */}
            <div className="lg:col-span-1 bg-[#111111] border border-zinc-800/80 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug tracking-tight mb-8">
                  "Devopstrio made our team feel ten people larger without adding a single meeting to the calendar."
                </h3>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden relative">
                    <Image src="https://i.pravatar.cc/150?u=clara" alt="Clara Weiss" fill className="object-cover" unoptimized />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Clara Weiss</div>
                    <div className="text-zinc-500 text-xs">Head of Ops, Northstar</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-zinc-900/60">
                <div className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase mb-4 font-bold">In Good Company</div>
                <div className="flex items-center gap-6 text-sm font-semibold text-zinc-400">
                  <span className="hover:text-white transition-colors cursor-pointer">Northstar</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Relay</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Forma</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Alpenglow</span>
                </div>
              </div>
            </div>

            {/* Right Side Grid of 4 */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Mina Hart", handle: "@minahart", date: "Mar 3", text: "The rare product that makes our operating cadence feel lighter without hiding any of the hard parts.", avatar: "https://i.pravatar.cc/150?u=mina" },
                { name: "Callum Price", handle: "@callumprice", date: "Feb 24", text: "I opened Devopstrio for a launch checklist and ended up moving the whole studio over before Friday.", avatar: "https://i.pravatar.cc/150?u=callum" },
                { name: "Aya Mensah", handle: "@ayamensah", date: "Feb 18", text: "Clear enough for leadership, flexible enough for the people doing the actual work. That gap is usually where tools fail.", avatar: "https://i.pravatar.cc/150?u=aya" },
                { name: "Felix Chen", handle: "@felixchen", date: "Feb 11", text: "The first project hub my team did not immediately try to rebuild in a spreadsheet.", avatar: "https://i.pravatar.cc/150?u=felix" }
              ].map((tweet, i) => (
                <div key={i} className="bg-[#111111] border border-zinc-800/80 rounded-[2rem] p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden relative">
                          <Image src={tweet.avatar} alt={tweet.name} fill className="object-cover" unoptimized />
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm flex items-center gap-1">
                            {tweet.name}
                            <CheckCircle2 className="w-3 h-3 text-zinc-500" />
                          </div>
                          <div className="text-zinc-500 text-xs">{tweet.handle}</div>
                        </div>
                      </div>
                      <div className="text-zinc-600 text-xs">{tweet.date}</div>
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                      {tweet.text}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6 text-zinc-500 text-xs font-medium">
                    <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"><MessageCircle className="w-3.5 h-3.5" /> {Math.floor(Math.random() * 60) + 10}</span>
                    <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"><Repeat className="w-3.5 h-3.5" /> {Math.floor(Math.random() * 200) + 50}</span>
                    <span className="flex items-center gap-1.5 hover:text-rose-500 transition-colors cursor-pointer"><Heart className="w-3.5 h-3.5" /> {(Math.random() * 3 + 0.5).toFixed(1)}k</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLIENT LOGOS & STRENGTHS */}
      <section className="w-full py-12 bg-black border-b border-zinc-900/60 flex flex-col items-center">
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
            Powering over 15,000 teams <br className="hidden md:block"/> building the future.
          </h2>

          <div className="inline-flex flex-wrap justify-center gap-2 bg-[#111111] border border-zinc-800/80 p-1.5 rounded-[2rem] mb-12 shadow-2xl max-w-4xl">
            {["All", "Partners", "Technology", "Cloud Providers", "Platforms", "AI Agents"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveLogoTab(tab)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${activeLogoTab === tab ? "bg-zinc-800/80 text-white shadow-lg" : "text-zinc-400 hover:text-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center opacity-80 min-h-[300px]">
            {[
              // Full Partners List
              { image: "/assets/Home-page/partners/Microsoft.svg", name: "Microsoft", categories: ["Partners", "Cloud Providers"] },
              { image: "/assets/Home-page/partners/Airbnb.svg", name: "Airbnb", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/NHS.svg", name: "NHS", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/servicenow.svg", name: "ServiceNow", categories: ["Partners", "Platforms"] },
              { image: "/assets/Home-page/partners/Costco.svg", name: "Costco", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/ASDA.svg", name: "ASDA", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/BT.svg", name: "BT", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/Boviet_Solar.png", name: "Boviet Solar", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/Metrobank.svg", name: "Metrobank", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/Virgin.svg", name: "Virgin", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/appian.svg", name: "Appian", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/bp-logo.svg", name: "BP", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/godaddy.svg", name: "GoDaddy", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/gxo.svg", name: "GXO", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/lenovo.svg", name: "Lenovo", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/paymentology.svg", name: "Paymentology", categories: ["Partners"] },
              { image: "/assets/Home-page/partners/topland.svg", name: "Topland", categories: ["Partners"] },
              
              // Cloud Providers
              { image: "/assets/Tech_logos/AWS.svg", name: "AWS", categories: ["Cloud Providers", "Technology"] },
              { image: "/assets/Tech_logos/Google_Cloud.svg", name: "Google Cloud", categories: ["Cloud Providers", "AI Agents"] },
              { image: "/assets/Tech_logos/Microsoft Azure.svg", name: "Azure", categories: ["Cloud Providers", "AI Agents"] },
              { image: "/assets/Tech_logos/IBM_Cloud.svg", name: "IBM Cloud", categories: ["Cloud Providers"] },
              { image: "/assets/Tech_logos/Oracle_Cloud.svg", name: "Oracle Cloud", categories: ["Cloud Providers"] },
              
              // Technology
              { image: "/assets/Tech_logos/Kubernetes.svg", name: "Kubernetes", categories: ["Technology", "Platforms"] },
              { image: "/assets/Tech_logos/Docker.svg", name: "Docker", categories: ["Technology", "Platforms"] },
              { image: "/assets/Home-page/Techtools/python.svg", name: "Python", categories: ["Technology", "AI Agents"] },
              { image: "/assets/Tech_logos/Snowflake.svg", name: "Snowflake", categories: ["Technology", "Platforms"] },
              { image: "/assets/Home-page/Techtools/MySQL.svg", name: "MySQL", categories: ["Technology"] },
              
              // Platforms
              { image: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg", name: "GitHub", categories: ["Platforms", "Technology"] },
              { image: "/assets/Tech-icons/figma-logo_svgstack_com_28291780931376.svg", name: "Figma", categories: ["Platforms"] },
              { image: "/assets/Tech-icons/slack-logo_svgstack_com_31371780931112.svg", name: "Slack", categories: ["Platforms"] },
              { image: "/assets/Tech-icons/jira-logo_svgstack_com_28621780931167.svg", name: "Jira", categories: ["Platforms"] },
              { image: "/assets/Tech_logos/GitLab.svg", name: "GitLab", categories: ["Platforms", "Technology"] },
              { image: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg", name: "Cloudflare", categories: ["Platforms", "Technology"] },
              
              // AI Agents
              { image: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg", name: "OpenAI", categories: ["AI Agents", "Technology"] },
              { image: "/assets/Tech-icons/github-copilot-logo_svgstack_com_28101780931046.svg", name: "Copilot", categories: ["AI Agents", "Technology"] },
            ].filter(logo => activeLogoTab === "All" || logo.categories.includes(activeLogoTab)).map((logo, i) => (
              <div key={i} className="flex flex-col items-center gap-3 text-white cursor-pointer group text-center w-full">
                <div className="w-12 h-12 relative group-hover:scale-110 transition-transform duration-500">
                  <Image 
                    src={logo.image} 
                    alt={logo.name} 
                    fill 
                    className="object-contain" 
                    unoptimized 
                  />
                </div>
                <span className="font-bold text-xs md:text-sm tracking-tight text-zinc-300 group-hover:text-white transition-colors">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SINGLE LEAD FORM ("Talk to Our Product Team") */}
      <section id="lead-form" className="w-full py-12 bg-[#030303]">
        <div className="max-w-4xl mx-auto px-12 xl:px-8">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CONNECT WITH US
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
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
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black font-extrabold text-xs md:text-sm uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
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
