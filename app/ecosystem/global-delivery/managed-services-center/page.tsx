"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Activity,
  Globe,
  Settings,
  ShieldCheck,
  Server,
  Database,
  Cloud,
  Bot,
  Terminal,
  BarChart3,
  Layers,
  Network
} from "lucide-react";
import Link from "next/link";

export default function ManagedServicesCenterPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const overviewFeatures = [
    { title: "Cloud Operations", icon: <Cloud className="w-5 h-5 text-rose-500" /> },
    { title: "Infrastructure Management", icon: <Server className="w-5 h-5 text-rose-500" /> },
    { title: "Application Support", icon: <Terminal className="w-5 h-5 text-rose-500" /> },
    { title: "Security Operations", icon: <ShieldCheck className="w-5 h-5 text-rose-500" /> },
    { title: "Service Desk", icon: <Globe className="w-5 h-5 text-rose-500" /> },
    { title: "Performance Optimization", icon: <Activity className="w-5 h-5 text-rose-500" /> }
  ];

  const whyManagedServices = [
    { title: "Proactive Monitoring", desc: "Detecting and resolving issues before they impact business." },
    { title: "Predictable Operations", desc: "Stabilizing costs and performance through standardized IT." },
    { title: "Reduced Downtime", desc: "Maximizing system uptime with 24x7 continuous care." },
    { title: "Continuous Optimization", desc: "Right-sizing infrastructure and improving application efficiency." },
    { title: "Expert Engineering Teams", desc: "Accessing specialized talent without overhead." },
    { title: "Business Continuity", desc: "Ensuring resilient and fail-safe enterprise operations." }
  ];

  const portfolio = [
    "Cloud Management",
    "Infrastructure Operations",
    "Application Management",
    "Database Administration",
    "Network Operations",
    "Cybersecurity Services",
    "DevOps Operations",
    "End-User Support"
  ];

  const deliveryFramework = [
    "Assess", "Transition", "Operate", "Monitor", "Optimize", "Review", "Innovate"
  ];

  const operationsCenter = [
    "Infrastructure Monitoring",
    "Application Performance",
    "Capacity Planning",
    "Backup & Recovery",
    "Patch Management",
    "Configuration Management",
    "Health Dashboards",
    "Service Reporting"
  ];

  const cloudInfrastructure = [
    "Azure Management",
    "AWS Operations",
    "Google Cloud Management",
    "Hybrid Cloud",
    "Server Administration",
    "Storage Management",
    "Network Operations",
    "Disaster Recovery"
  ];

  const appPlatform = [
    "Application Monitoring",
    "Performance Optimization",
    "Release Management",
    "Middleware Support",
    "API Monitoring",
    "Database Management",
    "Platform Upgrades",
    "Availability Management"
  ];

  const securityCompliance = [
    "Security Monitoring",
    "Vulnerability Management",
    "Identity & Access Management",
    "Threat Detection",
    "Compliance Monitoring",
    "Patch Compliance",
    "Backup Validation",
    "Incident Response"
  ];

  const aiOperations = [
    "AI-Powered Monitoring",
    "Automated Remediation",
    "Predictive Maintenance",
    "Intelligent Alerting",
    "Capacity Forecasting",
    "Workflow Automation",
    "Self-Healing Infrastructure",
    "Operational Analytics"
  ];

  const serviceGovernance = [
    "SLA Management",
    "KPI Reporting",
    "Service Reviews",
    "Change Management",
    "Problem Management",
    "Risk Management",
    "Escalation Matrix",
    "Continuous Improvement"
  ];

  const outcomes = [
    { label: "Service Availability", value: "99.9%" },
    { label: "Operations Support", value: "24×7" },
    { label: "Operational Risk", value: "Reduced" },
    { label: "Issue Resolution", value: "Faster" },
    { label: "Cloud Performance", value: "Optimized" },
    { label: "Technology Partnership", value: "Long-Term" }
  ];

  const whyDevopstrio = [
    "Proactive Operations",
    "Cloud Expertise",
    "Security by Design",
    "Automation First",
    "Global Engineering Teams",
    "Continuous Optimization",
    "Transparent Governance",
    "Business-Focused Delivery"
  ];

  const faqs = [
    { q: "What managed services does Devopstrio provide?", a: "We provide comprehensive end-to-end management of cloud environments, applications, databases, and cybersecurity operations." },
    { q: "Do you support Azure, AWS, and Google Cloud?", a: "Yes, our certified engineers provide managed services across all three major public clouds, as well as hybrid environments." },
    { q: "Can you manage existing applications?", a: "Yes, we transition existing legacy and modern applications into our managed services framework for ongoing support and optimization." },
    { q: "How do you monitor infrastructure?", a: "We deploy enterprise-grade monitoring tools enriched with AI to proactively detect anomalies, measure capacity, and alert our NOC team instantly." },
    { q: "What SLAs do you offer?", a: "We offer customized, enterprise-grade SLAs tailored to your business criticality, often guaranteeing 99.9% uptime and rapid response times." },
    { q: "Do you provide database administration?", a: "Yes, our DBA teams manage PostgreSQL, MongoDB, SQL Server, and other critical database environments." },
    { q: "Is 24×7 support included?", a: "Absolutely. Our global delivery model ensures true 24x7 continuous coverage, monitoring, and active management." },
    { q: "How do we transition to managed services?", a: "We follow a structured 'Assess & Transition' framework to map your architecture, document processes, and securely transfer operational control." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="GLOBAL DELIVERY NETWORK"
        title={
          <>
            Managed Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-700">
              Center
            </span>
          </>
        }
        subtitle="Deliver proactive, secure, and always-on IT operations through managed cloud services, infrastructure management, application support, cybersecurity, and continuous optimization."
        hyperspeed={true}
        hyperspeedOptions={{
          distortion: 'turbulentDistortion',
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0x8b5cf6, 0x6d28d9, 0xa78bfa],
            rightCars: [0x6366f1, 0x4338ca, 0x818cf8],
            sticks: 0x8b5cf6
          }
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "GLOBAL DELIVERY", href: "/ecosystem/global-delivery" },
          { label: "MANAGED SERVICES CENTER" }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Managed Services
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
          >
            Talk to Our Operations Team
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 mt-12 max-w-4xl mx-auto">
          {["24×7 Managed Operations", "Cloud Infrastructure", "Application Support", "Security Operations", "AI-Powered Monitoring", "Service Excellence"].map((highlight, idx) => (
            <span key={idx} className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-zinc-400 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-rose-500/50 hover:text-white transition-colors duration-300 cursor-default">
              {highlight}
            </span>
          ))}
        </div>
      </Hero>

      {/* 2. MANAGED SERVICES OVERVIEW */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Keeping Your Business Running at Peak Performance
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium mb-8">
              Technology requires continuous management to remain secure, resilient, and efficient. Our Managed Services Center provides proactive monitoring, maintenance, optimization, and operational support, allowing organizations to focus on innovation while we manage the technology behind the scenes.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {overviewFeatures.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-zinc-800/50 bg-zinc-950/40 hover:border-rose-500/30 transition-colors text-center group">
                <div className="group-hover:scale-110 transition-transform">{feature.icon}</div>
                <span className="text-sm font-bold text-zinc-200">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY MANAGED SERVICES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">VALUE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">More Than Support — Continuous Technology Operations</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyManagedServices.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-6 text-rose-500">
                  <Settings className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR MANAGED SERVICES PORTFOLIO */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-10 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PORTFOLIO</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">Our Managed Services Portfolio</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {portfolio.map((item, idx) => (
              <span key={idx} className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950/50 text-sm font-bold text-zinc-300 hover:text-white hover:border-rose-500 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICE DELIVERY FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">METHODOLOGY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Structured Service Delivery</h2>
          </Reveal>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
            {deliveryFramework.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="relative group w-full md:w-auto">
                  <div className="px-6 py-4 bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl text-center hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                    <div className="text-indigo-500 text-[10px] font-bold tracking-[0.2em] mb-1 font-mono group-hover:text-indigo-400">0{idx + 1} //</div>
                    <div className="text-sm font-bold text-white tracking-wide">{stage}</div>
                  </div>
                </div>
                {idx < deliveryFramework.length - 1 && (
                  <ArrowUpRight className="w-5 h-5 text-zinc-700 rotate-45 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OPERATIONS CENTER & 7. CLOUD & INFRASTRUCTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">NOC</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Centralized Operations & Monitoring</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {operationsCenter.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <Activity className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">INFRASTRUCTURE</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Cloud & Infrastructure Management</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cloudInfrastructure.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <Cloud className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPLICATION MANAGEMENT & 9. SECURITY OPERATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">APPLICATIONS</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Application & Platform Management</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appPlatform.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <Terminal className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SECURITY</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Security & Compliance Operations</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityCompliance.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. AUTOMATION & AI OPERATIONS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">AIOPS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Intelligent Operations for Modern Enterprises</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aiOperations.map((ai, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-colors flex flex-col items-center text-center">
                <Bot className="w-5 h-5 text-rose-500 mb-3" />
                <h4 className="text-sm font-bold text-zinc-200">{ai}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SERVICE GOVERNANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">GOVERNANCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Service Governance & SLA</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceGovernance.map((gov, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-colors flex flex-col items-center text-center">
                <CheckCircle2 className="w-5 h-5 text-rose-500 mb-3" />
                <h4 className="text-sm font-bold text-zinc-200">{gov}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BUSINESS OUTCOMES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">IMPACT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Business Outcomes</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {outcomes.map((metric, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/30 flex flex-col justify-center items-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                <span className="text-xl lg:text-2xl font-black text-white mb-2 tracking-tighter leading-none">{metric.value}</span>
                <span className="text-[10px] lg:text-xs uppercase font-bold text-rose-500 mt-2">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. WHY DEVOPSTRIO MANAGED SERVICES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DIFFERENTIATOR</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Why Devopstrio Managed Services</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {whyDevopstrio.map((item, idx) => (
              <span key={idx} className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950/50 text-sm font-bold text-zinc-300 hover:text-white hover:border-rose-500 transition-colors flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FAQs */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-655 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-bold">
              Everything you need to know about partnering with our Managed Services Center.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">Let Us Manage Your Technology, So You Can Focus on Growth</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with Devopstrio&apos;s Managed Services Center to ensure secure, reliable, and continuously optimized IT operations through proactive management, expert engineering, and AI-driven automation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Request a Managed Services Consultation
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
            >
              Contact Our Operations Team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
