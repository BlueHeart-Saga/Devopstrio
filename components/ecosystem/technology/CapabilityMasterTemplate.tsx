"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Globe,
  Database,
  Terminal,
  Activity,
  Workflow,
  Lock,
  GitBranch,
  Sliders,
  Server,
  Code2,
  RefreshCw,
  Search,
  Plus,
  Minus,
  Check,
  Shield,
  Bot,
  Copy,
  Gauge,
  Box,
  Key,
  Radio,
  FileCheck,
  Binary,
  Share2
} from "lucide-react";
import Link from "next/link";
import { CapabilityPageData } from "@/data/ecosystem/capabilities-registry";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  Zap,
  Layers,
  Lock,
  Workflow,
  Activity,
  Sliders,
  Database,
  Search,
  RefreshCw,
  Cpu,
  ShieldCheck,
  Server,
  Code2,
  GitBranch,
  Terminal,
  Bot,
  Gauge,
  Box,
  Key,
  Globe,
  Radio,
  FileCheck,
  Binary,
  Share2
};

export function CapabilityMasterTemplate({ data }: { data: CapabilityPageData }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const activeCapability = data.capabilities[activeTab] || data.capabilities[0];

  const handleCopyCommand = () => {
    if (activeCapability?.terminal?.command) {
      navigator.clipboard.writeText(activeCapability.terminal.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-rose-500 selection:text-white relative">
      
      {/* Background High-Tech Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* =========================================================================
          BREADCRUMBS
      ========================================================================= */}
      <div className="pt-24 pb-4 border-b border-zinc-900/60 bg-black/70 backdrop-blur-xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-zinc-400 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-zinc-600 shrink-0" />
            <Link href="/ecosystem" className="hover:text-white transition-colors">Ecosystem</Link>
            <ChevronRight size={12} className="text-zinc-600 shrink-0" />
            <Link href="/ecosystem/technology-stack" className="hover:text-white transition-colors">Technology Stack</Link>
            <ChevronRight size={12} className="text-zinc-600 shrink-0" />
            <Link href={`/ecosystem/technology-stack/${data.pillarSlug}`} className="hover:text-white transition-colors">{data.pillarName}</Link>
            <ChevronRight size={12} className="text-zinc-600 shrink-0" />
            <span className="text-rose-500 font-semibold">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          1. HERO SECTION (Pure Code Design — No Stock Images)
      ========================================================================= */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-zinc-900/80">
        {/* Glow Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-rose-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 backdrop-blur-xl mb-8 text-xs font-semibold uppercase tracking-wider text-rose-300 shadow-[0_0_20px_rgba(225,29,72,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>{data.badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
          >
            {data.pillarName} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300 bg-clip-text text-transparent">
              {data.title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            {data.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center items-center gap-4"
          >
            <Link 
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:scale-[1.02]"
            >
              Deploy Architecture <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 font-medium text-sm transition-all duration-200 hover:text-white"
            >
              Explore Technical Specs
            </a>
          </motion.div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto border-t border-zinc-900/90 pt-10">
            {data.metrics.map((m, i) => (
              <div key={i} className="text-center group p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-rose-400 transition-colors">{m.val}</p>
                <p className="text-xs uppercase font-semibold text-zinc-400 mt-1">{m.label}</p>
                <p className="text-[11px] text-zinc-600 font-mono mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE TABBED FEATURE SECTION (Pure Code Design Console)
      ========================================================================= */}
      <section id="architecture" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Pillar Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Engineered for High-Concurrency Production
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
              Modular microservices designed to slot into enterprise Kubernetes environments with automated failover and sub-second execution.
            </p>
          </div>

          {/* Tab Navigation Pill Bar */}
          <div className="flex gap-2 p-1.5 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl w-fit mb-8 overflow-x-auto max-w-full backdrop-blur-md shadow-lg">
            {data.capabilities.map((feat, idx) => (
              <button
                key={feat.id}
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === idx
                    ? "text-white bg-rose-600 shadow-[0_0_20px_rgba(225,29,72,0.4)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {feat.title}
              </button>
            ))}
          </div>

          {/* Interactive Card Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/90 border border-zinc-800/80 hover:border-zinc-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                  {activeCapability.badge}
                </span>
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {activeCapability.latencyBadge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeCapability.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                {activeCapability.desc}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {activeCapability.stats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{stat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link 
                  href="/contact#contact-form"
                  className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 text-sm font-semibold group"
                >
                  Request Technical Implementation Plan <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Graphic / Mock Console Column (Pure Code Design) */}
            <div className="lg:col-span-6 h-full min-h-[340px] bg-[#070709] border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between font-mono text-xs shadow-inner relative group/terminal">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-zinc-500 text-[11px] font-mono">telemetry.bash</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleCopyCommand}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors p-1 rounded"
                    title="Copy command"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                  <span className="text-emerald-400 text-[11px] font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {activeCapability.terminal.status}
                  </span>
                </div>
              </div>

              {/* Terminal Body with Line Numbers */}
              <div className="space-y-2.5 py-5 text-zinc-400">
                <div className="flex items-center gap-3 text-emerald-400 font-semibold">
                  <span className="text-zinc-600 select-none">01</span>
                  <span>// Real-time telemetry trace connected</span>
                </div>
                <div className="flex items-start gap-3 text-white font-medium">
                  <span className="text-zinc-600 select-none">02</span>
                  <span className="text-rose-400 font-semibold">&gt; {activeCapability.terminal.command}</span>
                </div>
                {activeCapability.terminal.logs.map((log, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-zinc-600 select-none">{String(i + 3).padStart(2, "0")}</span>
                    <span className={
                      log.type === "comment" ? "text-zinc-500 italic" : 
                      log.type === "success" ? "text-emerald-300 font-semibold" : 
                      log.type === "info" ? "text-cyan-400" : "text-zinc-300"
                    }>
                      {log.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Terminal Footer */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-zinc-500 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  runtime: cloud-pod-cluster
                </span>
                <span className="text-rose-400 font-semibold">zero-leak certified</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. 5-STAGE END-TO-END ARCHITECTURE (Pure Code Diagram)
      ========================================================================= */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-950/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              EXECUTION TOPOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              End-to-End Architecture Dataflow
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              Every operation is observable. Observe how requests transition through our multi-tenant, high-availability architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {data.pipelineStages.map((stage, i) => {
              const Icon = iconMap[stage.iconName || "Cpu"] || Cpu;
              return (
                <div 
                  key={stage.step}
                  className="bg-zinc-900/40 border border-zinc-800/70 hover:border-rose-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 relative"
                >
                  {/* Step connector on desktop */}
                  {i < data.pipelineStages.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700 pointer-events-none">
                      <ChevronRight size={18} />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                        STAGE {stage.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-zinc-800/60 text-zinc-400 group-hover:text-rose-400 group-hover:bg-rose-500/10 flex items-center justify-center transition-colors">
                        <Icon size={16} />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                      {stage.tag}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FEATURE CARDS GRID (3-COLUMN BALANCED 2x3)
      ========================================================================= */}
      <section className="py-20 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Production-Grade Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.featureCards.map((card, idx) => {
              const Icon = iconMap[card.iconName || "Zap"] || Zap;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/70 hover:border-rose-500/40 transition duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Subtle top glow on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-500/0 group-hover:via-rose-500/50 to-transparent transition-all duration-500" />

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-rose-400 transition-colors">{card.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-normal mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                    {card.tags.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono font-medium text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. VERIFIED TECH STACK MATRIX
      ========================================================================= */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              VERIFIED ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Supported Technologies & Frameworks
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              We build on battle-tested open standards and enterprise cloud systems with strict vendor neutrality.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {data.techStack.map((group, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-zinc-700/80 transition-colors"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 sm:w-56 shrink-0">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-300 hover:border-rose-500/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. BEFORE VS AFTER COMPARISON
      ========================================================================= */}
      <section className="py-20 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              THE IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Legacy Approaches vs Managed Enterprise Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-6">
                {data.beforeVsAfter.beforeTitle}
              </span>
              <ul className="space-y-4 text-sm text-zinc-400">
                {data.beforeVsAfter.beforePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Devopstrio */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-rose-950/20 via-zinc-950 to-zinc-950 border border-rose-900/40 relative shadow-[0_0_30px_rgba(225,29,72,0.1)]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
                  {data.beforeVsAfter.afterTitle}
                </span>
                <span className="text-[10px] font-mono uppercase bg-rose-500/10 text-rose-300 px-2 py-0.5 rounded border border-rose-500/20">
                  RECOMMENDED
                </span>
              </div>
              <ul className="space-y-4 text-sm text-white font-medium">
                {data.beforeVsAfter.afterPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. TECHNICAL FAQS
      ========================================================================= */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ARCHITECTURE FAQS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i}
                  className="rounded-2xl border border-zinc-900 bg-zinc-950/80 overflow-hidden transition-colors hover:border-zinc-800"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between text-base font-semibold text-white hover:text-rose-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0 ml-4">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed font-normal border-t border-zinc-900/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CALL TO ACTION (BOTTOM BANNER)
      ========================================================================= */}
      <section className="py-24 relative overflow-hidden border-t border-zinc-900 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to Upgrade Your {data.title} Architecture?
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Partner with Devopstrio to design, build, and deploy resilient, high-concurrency systems tailored to your enterprise scale.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact#contact-form"
              className="px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm transition-all duration-200 shadow-xl shadow-rose-600/20"
            >
              Book an Architecture Session
            </Link>
            <Link 
              href={`/ecosystem/technology-stack/${data.pillarSlug}`}
              className="px-8 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 font-semibold text-sm transition-all duration-200 hover:text-white"
            >
              Back to {data.pillarName}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CapabilityMasterTemplate;
