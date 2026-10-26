"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ChevronLeft, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud,
  Search, Smartphone, Phone, Mail, MessageCircle, MessageSquare, Twitter, Headset, Smile, User, Star, Map,
  BrainCircuit, Bot, Lightbulb, TrendingUp, CheckCircle, Target, Compass, Blocks, Code, FastForward, CheckSquare
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 1. OVERVIEW
// ==========================================
const QualityOverview = () => {
  const cards = [
    { title: "Continuous Test Automation", desc: "Automate cross-browser regression suites running seamlessly within GitHub Actions and GitLab CI.", icon: CheckSquare },
    { title: "Shift-Left Security & Linting", desc: "Embed static analysis, SonarQube quality gates, and dependency audit checks directly into PR hooks.", icon: ShieldCheck },
    { title: "High-Load Performance Testing", desc: "Simulate massive concurrent enterprise traffic using k6 and Locust distributed load generators.", icon: Gauge },
    { title: "API Contract Verification", desc: "Prevent microservice integration breaking changes using consumer-driven Pact contract testing.", icon: Network },
    { title: "Chaos & Resilience Engineering", desc: "Inject network latency, pod failures, and disk stress with Chaos Mesh and LitmusChaos.", icon: AlertTriangle },
    { title: "AI-Augmented Test Generation", desc: "Generate edge-case test fixtures and dynamic mock data with intelligent synthetic test generators.", icon: Sparkles }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-3 block">TEST ARCHITECTURE & RELIABILITY</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
              Zero-Defect Engineering for High-Velocity Releases
            </h2>
            
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group bg-zinc-950/45 border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col justify-between h-full hover:border-zinc-800 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 p-8 min-h-[220px]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 2. WHY QUALITY ENGINEERING
// ==========================================
const WhyQualityEngineering = () => {
  const traditional = [
    "Late-stage manual QA bottlenecks", "Brittle UI scripts requiring constant maintenance", "Untested microservice contract mismatches",
    "Production outages caused by peak load spikes", "Slow multi-day regression test cycles"
  ];
  const qualityEngineering = [
    "Shift-left automated test execution per PR", "Resilient component-level integration suites", "Automated consumer-driven API contracts",
    "Continuous k6 load & chaos validation in CI", "Under 15-minute complete test pipeline runs"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">PARADIGM SHIFT</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Moving from Manual Testing to Automated Quality Assurance
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Traditional */}
          <Reveal delay={0.1}>
            <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Minus className="w-4 h-4 text-zinc-500" /> Legacy QA Approach
              </h3>
              <ul className="space-y-4">
                {traditional.map((c, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-zinc-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Quality Engineering */}
          <Reveal delay={0.2}>
            <div className="p-8 bg-gradient-to-br from-rose-950/20 to-zinc-950 border border-rose-900/30 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(225,29,72,0.1)]">
              <h3 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Plus className="w-4 h-4 text-rose-500" /> With Quality Engineering
              </h3>
              <ul className="space-y-4">
                {qualityEngineering.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-white font-medium">
                    <CheckCircle className="w-4 h-4 text-rose-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. QUALITY ARCHITECTURE
// ==========================================
const QualityArchitecture = () => {
  const layers = [
    { name: "End-to-End & UI Testing", desc: "Playwright, Cypress, Appium, Cross-Device Matrix", color: "border-blue-500/50 bg-blue-500/10 text-blue-400" },
    { name: "API & Contract Verification", desc: "Pact, REST Assured, Postman CLI, Schemathesis", color: "border-indigo-500/50 bg-indigo-500/10 text-indigo-400" },
    { name: "Performance & Stress Testing", desc: "k6, Locust, Apache JMeter, Distributed Edge Probes", color: "border-purple-500/50 bg-purple-500/10 text-purple-400" },
    { name: "Static Analysis & Security Gates", desc: "SonarQube, Trivy, Snyk, Semgrep, ESLint Strict", color: "border-rose-500/50 bg-rose-500/10 text-rose-400" },
    { name: "Resilience & Chaos Injection", desc: "Chaos Mesh, LitmusChaos, AWS Fault Injection Simulator", color: "border-amber-500/50 bg-amber-500/10 text-amber-400" },
    { name: "Orchestration & Ephemeral Stacks", desc: "Testcontainers, Docker Compose, GitHub Actions Matrix", color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-4xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">TEST PYRAMID ARCHITECTURE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Multi-Tier Continuous Quality Framework</h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {layers.map((layer, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className={`p-6 border rounded-2xl flex flex-col md:flex-row justify-between items-center text-center md:text-left transition-all duration-300 hover:brightness-125 hover:-translate-y-1 shadow-lg ${layer.color}`}>
                <span className="text-sm md:text-base font-bold uppercase tracking-widest">{layer.name}</span>
                <span className="text-xs md:text-sm font-medium opacity-90 mt-2 md:mt-0 tracking-wide">{layer.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. QUALITY CAPABILITIES
// ==========================================
const QualityCapabilities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 310;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const capabilities = [
    { title: "Playwright E2E Automation", tag: "Validate", desc: "Fast, resilient browser automation with auto-wait, network interception, and video artifacts.", image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp", href: "/ecosystem/technology-stack/quality-engineering/end-to-end-test-automation" },
    { title: "k6 Performance Probes", tag: "Benchmark", desc: "Developer-centric load testing scripts executed as code in CI/CD before every production rollout.", image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp", href: "/ecosystem/technology-stack/quality-engineering/performance-load-testing" },
    { title: "Contract Testing with Pact", tag: "Decouple", desc: "Consumer-driven contract testing preventing microservice breaks across decentralized teams.", image: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp", href: "/ecosystem/technology-stack/quality-engineering/api-contract-validation" },
    { title: "Chaos Mesh Resilience", tag: "Harden", desc: "Automated fault injection testing ensuring graceful degradation when dependencies drop.", image: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp", href: "/ecosystem/technology-stack/quality-engineering/performance-load-testing" },
    { title: "Testcontainers Sandbox", tag: "Isolate", desc: "Spin up real ephemeral PostgreSQL, Kafka, and Redis instances within containerized unit suites.", image: "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp", href: "/ecosystem/technology-stack/quality-engineering/integration-security-audits" },
    { title: "Quality Gate Enforcement", tag: "Govern", desc: "Automated PR blocking if code coverage drops below 90% or new high vulnerabilities exist.", image: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp", href: "/ecosystem/technology-stack/quality-engineering/end-to-end-test-automation" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">ENGINEERING SUITE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Complete Quality Engineering Coverage</h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[260px] sm:min-w-[280px] md:min-w-[290px] max-w-[300px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-rose-500/40 hover:shadow-[0_8px_30px_rgba(225,29,72,0.12)] transition-all duration-300 flex flex-col h-full min-h-[330px] group">
                <div className="w-full h-32 relative bg-zinc-900 overflow-hidden border-b border-zinc-800/80">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    unoptimized
                  />
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4 line-clamp-2 flex-grow">{item.desc}</p>
                  
                  <Link 
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-1.5 text-rose-500 text-xs font-semibold hover:text-rose-400 transition-colors cursor-pointer w-fit group/btn"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                      <ChevronRight size={12} />
                    </div>
                    Explore {item.title}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Navigation below scroller */}
        <div className="flex items-center justify-between mt-6 px-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider">
            Explore all capabilities →
          </span>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. TECHNOLOGIES WE USE
// ==========================================
const QualityTechnologies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "E2E & UI Testing", items: ["Playwright", "Cypress", "Appium", "Selenium Grid"] },
    { name: "API & Contracts", items: ["Pact", "REST Assured", "Postman / Newman", "Karate"] },
    { name: "Performance & Stress", items: ["k6", "Locust", "Gatling", "Apache JMeter"] },
    { name: "Static Analysis", items: ["SonarQube", "Semgrep", "Snyk", "Trivy"] },
    { name: "Chaos & Reliability", items: ["Chaos Mesh", "LitmusChaos", "Gremlin", "Testcontainers"] }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-5xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">TEST TOOLCHAIN</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Technologies in Our Testing Stack</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs sidebar */}
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-6 py-4 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === idx ? "bg-rose-500 text-white shadow-lg" : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-full md:w-2/3 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] p-8 min-h-[250px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {tabs[activeTab].items.map((item, i) => (
                  <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center flex items-center justify-center hover:border-rose-500/30 transition-colors">
                    <span className="text-sm md:text-base font-medium text-zinc-200 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// 6. BUSINESS OUTCOMES
// ==========================================
const QualityOutcomes = () => {
  const outcomes = [
    { value: "95%+", title: "Automated Test Coverage" },
    { value: "80%", title: "Reduction in Post-Release Bugs" },
    { value: "<15m", title: "Complete Pipeline Test Runtime" },
    { value: "0", title: "Breaking API Contract Releases" },
    { value: "99.99%", title: "Payment Transaction Reliability" },
    { value: "4x", title: "Faster Release Cycle Frequency" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">BUSINESS VALUE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Proven Quality Engineering Outcomes</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-8 bg-zinc-950/50 border border-zinc-900 rounded-3xl hover:border-rose-500/30 transition-all flex flex-col justify-between min-h-[180px]">
                <div className="text-4xl sm:text-5xl font-extrabold text-rose-500 tracking-tight mb-2 font-mono">{item.value}</div>
                <div className="text-base md:text-lg font-bold text-white">{item.title}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// INDUSTRY USE CASES
// ==========================================
const QualityIndustryUseCases = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 310;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const useCases = [
    { title: "Financial Systems", tag: "Finance", desc: "Automated ledger regression suites, idempotency tests, and ISO 20022 message compliance.", image: "/webp/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.webp", href: "/industries/banking-finance" },
    { title: "Healthcare & MedTech", tag: "Health", desc: "FDA Title 21 CFR Part 11 validation, audit trails, and deterministic EHR contract tests.", image: "/webp/assets/common/9d91b93f83e6d4cd494ec13611b3e50e-1.webp", href: "/industries/healthcare-life-sciences" },
    { title: "Retail & E-Commerce", tag: "Commerce", desc: "Flash sale concurrency simulations with k6, checkout cart resilience, and payment webhook checks.", image: "/webp/assets/common/b384eb0438c55e43c61e7595acc29638-1.webp", href: "/industries/retail-ecommerce" },
    { title: "Industrial & Manufacturing", tag: "Industrial", desc: "Hardware-in-the-loop firmware simulation and MQTT sensor stream fuzz testing.", image: "/webp/assets/common/e76e125035885aab9c9070ce85df239e-1.webp", href: "/industries/manufacturing" },
    { title: "Telecommunications", tag: "Networking", desc: "Carrier-grade latency testing, 5G packet verification, and automated fault injection.", image: "/webp/assets/common/f03cc521fb070dfae9d87768b791ff70-1.webp", href: "/industries/telecommunications" },
    { title: "Government & Public Sector", tag: "Public", desc: "Accessibility Section 508 / WCAG 2.1 AA automated compliance sweeps and citizen portal tests.", image: "/webp/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.webp", href: "/industries/government-public-sector" },
    { title: "Education & Learning", tag: "Learning", desc: "Mass concurrent exam delivery load testing and media streaming playback QA.", image: "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp", href: "/industries/education" },
    { title: "Logistics & Supply Chain", tag: "Supply Chain", desc: "Fleet telemetry ingestion verification and cross-border customs schema validation.", image: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp", href: "/industries/retail-ecommerce" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">SOLUTIONS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Industry Use Cases
            </h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[260px] sm:min-w-[280px] md:min-w-[290px] max-w-[300px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-rose-500/40 hover:shadow-[0_8px_30px_rgba(225,29,72,0.12)] transition-all duration-300 flex flex-col h-full min-h-[330px] group">
                <div className="w-full h-32 relative bg-zinc-900 overflow-hidden border-b border-zinc-800/80">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" unoptimized />
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <span className="text-xs font-semibold tracking-[0.2em] text-rose-400 font-mono uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4 line-clamp-2 flex-grow">{item.desc}</p>
                  <Link 
                    href={item.href}
                    className="mt-auto flex items-center gap-2 text-rose-500 text-xs font-bold hover:text-white transition-colors cursor-pointer w-fit group/btn"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                      <ChevronRight size={12} />
                    </div>
                    Learn More
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Navigation below scroller */}
        <div className="flex items-center justify-between mt-6 px-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider">
            Explore industry deployments →
          </span>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. FAQ & CTA
// ==========================================
const QualityFAQ = () => {
  const faqs = [
    { q: "Why choose Playwright over Selenium or Cypress?", a: "Playwright provides out-of-the-box support for modern web apps, multi-tab execution, automatic waiting, native mobile emulation, and significantly faster execution speeds without flaky wait timers." },
    { q: "How do you integrate load testing into CI/CD?", a: "We run k6 test scripts in headless mode within pull request pipelines. If p99 response times or error rates exceed specified thresholds, the build automatically fails before merge." },
    { q: "What is contract testing and why is it needed?", a: "Contract testing (using Pact) verifies that microservices can communicate using agreed request/response schemas without spinning up entire end-to-end environments, saving hours of pipeline time." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-4xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">KNOWLEDGE BASE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">Frequently Asked Questions</h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 bg-zinc-950 border border-zinc-900 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">{faq.q}</h3>
              <p className="text-sm md:text-base text-zinc-400 font-normal leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QualityCTA = () => {
  return (
    <section className="w-full py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Ready to Build a Zero-Defect Continuous Testing Pipeline?
          </h2>

          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-8 pr-4 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-rose-600/30"
          >
            Schedule a Quality Engineering Audit
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function QualityEngineeringTechPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <Hero
        badge="Technology Stack"
        title={
          <>
            Quality <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering
            </span>
          </>
        }
        subtitle="Automate continuous testing, shift-left static analysis, API contract verification, and resilience testing to ship software with uncompromising reliability."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "TECHNOLOGY STACK", href: "/ecosystem/technology-stack" },
          { label: "QUALITY ENGINEERING" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
            Talk to a Quality Architect
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link href="/ecosystem/technology-stack" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
            Explore All Tech Stacks
          </Link>
        </div>
      </Hero>

      <QualityOverview />
      <WhyQualityEngineering />
      <QualityArchitecture />
      <QualityCapabilities />
      <QualityTechnologies />
      <QualityOutcomes />
      <QualityIndustryUseCases />
      <QualityFAQ />
      <QualityCTA />
    </main>
  );
}
