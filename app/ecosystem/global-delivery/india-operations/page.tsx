"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Cpu,
  HardDrive,
  Activity,
  Database,
  Terminal,
  Zap,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function IndiaOperationsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const offices = [
    { city: "Bengaluru", details: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071", label: "Corporate Office" },
    { city: "Chennai", details: "Ground Floor, Primus Building, SIDCO Industrial Estate, Guindy, Chennai 600032", label: "Operations Center" },
    { city: "Thoothukudi", details: "4/ 367, Rajeev Colony, Pasuvanthanai 628718 Thoothukudi, Tamilnadu", label: "Operations Center" }
  ];

  const capabilities = [
    { title: "Software Engineering", desc: "Constructing modular REST APIs, frontend components, and backend database integrations." },
    { title: "DevOps Pipelines", desc: "Building CI/CD factory routines using GitHub Actions, GitLab CI, and Jenkins runners." },
    { title: "Cloud Infrastructure", desc: "Deploying high-performance Kubernetes clusters and VPC configurations." }
  ];

  const sreSupport = [
    "24/7/365 active monitoring on cloud node networks",
    "Continuous alert triage filtering noise from critical incidents",
    "15-minute response SLAs to resolve P1 service blockers"
  ];

  const databaseUpkeep = [
    "Index optimization reclaiming disk storage and boosting query speeds",
    "Daily automated backup restoration checks verifying snapshot integrity",
    "Query execution tuning rewriting complex joins and schemas"
  ];

  const automationTools = [
    { title: "Terraform Orchestration", desc: "Defining Infrastructure as Code templates for AWS and Azure clouds." },
    { title: "GitOps Workflows", desc: "Synchronizing live cluster states with code branches using ArgoCD." },
    { title: "Ansible Patching", desc: "Automating OS patches and application package upgrades." }
  ];

  const metrics = [
    { value: "350+", label: "Certified Engineers" },
    { value: "99.99%", label: "Uptime Maintenance SLA" },
    { value: "<15m", label: "Incident Response SLA" }
  ];

  const faqs = [
    { q: "Where are your India hubs located?", a: "We operate SRE and engineering hubs in Bengaluru, Chennai, and Thoothukudi." },
    { q: "What is the size of your engineering team in India?", a: "Our India centers host over 350 certified DevOps and software engineers." },
    { q: "Do your SRE teams operate on public holidays?", a: "Yes, our Operations Centers run 24/7/365, including weekends and all holidays." },
    { q: "Which database platforms do you support?", a: "We manage PostgreSQL, MySQL, MongoDB, Redis, and Oracle Database deployments." },
    { q: "How do you automate server patching?", a: "We write Ansible playbooks that patch OS vulnerabilities on a regular, pre-scheduled basis." },
    { q: "What cloud platforms do your engineers manage?", a: "Our engineers are certified in AWS, Microsoft Azure, and Oracle Cloud Infrastructure (OCI)." },
    { q: "How do you coordinate incident handovers with western offices?", a: "We conduct live video handover syncs at shift ends and maintain unified Jira tracking boards." },
    { q: "What is your average response time for critical alerts?", a: "We guarantee a response time of less than 15 minutes for critical P1 incidents." },
    { q: "Do you offer application support services?", a: "Yes, our team manages application-level monitoring, bug fixes, and minor feature updates." },
    { q: "How do we get started with your India SRE team?", a: "Click the 'Connect With SRE Leads' button to request a consultation with our operations leads." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-32 bg-black overflow-hidden border-b border-zinc-900/60 flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-10">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Cpu className="w-3.5 h-3.5" />
              SRE & ENGINEERING HQ
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              India Operations
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Scale SRE Execution, Database Upkeep & Infrastructure Automation.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              Scale platform development, manage automated database maintenance routines, and keep infrastructure responsive via Bengaluru, Chennai, and Thoothukudi operations centers.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Connect With SRE Leads
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. INDIAN CENTERS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">REGIONAL OFFICES</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Indian Centers</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span className="text-xs font-mono text-rose-500 uppercase tracking-wide font-bold">{office.label}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{office.city}</h4>
                </div>
                <p className="text-sm text-zinc-400 font-bold leading-relaxed">{office.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING CAPABILITIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Engineering Capabilities</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Cpu className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{cap.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SRE SUPPORT CENTER */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">OPERATIONS</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">SRE Support Center</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Our SRE desks keep enterprise systems fully operational across timezones.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {sreSupport.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DATABASE UPKEEP */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 lg:order-2">
              {databaseUpkeep.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">MAINTENANCE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Database Upkeep</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We manage backups, rebuild indexes, and optimize query runs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INFRASTRUCTURE AUTOMATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">AUTOMATION</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Infrastructure Automation</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automationTools.map((tool, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Terminal className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{tool.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SCALE METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">PERFORMANCE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Scale Metrics</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900/60 rounded-xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-center items-center">
                <span className="text-4xl font-black text-white tracking-tight mb-2">{m.value}</span>
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-zinc-950/50 border border-zinc-900 rounded-xl overflow-hidden hover:border-zinc-800 transition-colors duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white"
                  >
                    {faq.q}
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-500" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[200px] border-t border-zinc-900/60" : "max-h-0"}`}>
                    <p className="p-6 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Upgrade Your SRE Operations</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Deploy certified engineers to automate patching, monitor clusters, and resolve incidents.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Connect With SRE Leads
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
