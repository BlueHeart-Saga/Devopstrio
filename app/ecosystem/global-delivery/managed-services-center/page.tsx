"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  Settings,
  History,
  TrendingDown,
  HelpCircle,
  Activity,
  Award,
  Layers
} from "lucide-react";
import Link from "next/link";

export default function ManagedServicesCenterPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const capabilities = [
    { title: "OS & Node Patching", desc: "Automating scheduled updates across server fleets to resolve active CVE security exploits." },
    { title: "Backup Verification", desc: "Testing restore sequences daily on sandbox node systems to confirm snapshot safety." },
    { title: "Cloud Bill Audits", desc: "Evaluating monthly statements to detect idle database resources and compute waste." }
  ];

  const patchProcedures = [
    "Running automated Ansible CVE scanners to index outdated packages",
    "Deploying patches in isolated staging environments first to check stability",
    "Orchestrating rolling cluster updates keeping server services online"
  ];

  const backupOperations = [
    "Triggering daily automated snapshots across all managed databases",
    "Validating backups by restoring them into sandbox containers automatically",
    "Logging audit histories to confirm compliance with data recovery rules"
  ];

  const costOptimizationSteps = [
    { title: "Waste Detection", desc: "Scanning cloud accounts for orphaned storage drives and unattached network IPs." },
    { title: "Egress Analysis", desc: "Mapping network data transfers to optimize CDN caching routes and lower transit fees." },
    { title: "Spot Orchestration", desc: "Running non-critical background jobs on cheap spot compute container clusters." }
  ];

  const managedInfrastructure = [
    "Virtual Machine instances running Linux, Windows, or custom distributions",
    "Managed database instances including RDS PostgreSQL, CosmosDB, and DocumentDB",
    "Kubernetes clusters tracking node wellness and autoscaling metrics",
    "Serverless routines cleaning cloud caches and executing batch calculations"
  ];

  const metrics = [
    { value: "100%", label: "Patch Compliance Rate" },
    { value: "30%+", label: "Average Cloud Bill Savings" },
    { value: "75%", label: "Reduction in IT Helpdesk Tickets" }
  ];

  const faqs = [
    { q: "What is managed infrastructure support?", a: "We take over operations of your virtual machines, databases, Kubernetes clusters, and cloud environments, allowing your developers to focus on product features." },
    { q: "How often do you patch servers?", a: "We run automated patching cycles weekly for standard updates, and initiate hotfixes immediately for critical zero-day CVE exploits." },
    { q: "How do you verify backup integrity?", a: "We restore snapshots to sandbox containers automatically, execute query checks, and record restoration success logs." },
    { q: "Can you help lower our monthly cloud bills?", a: "Yes, our cost team conducts audits, flags idle resources, optimizes caching, and sets up spot nodes to lower cloud spend by 30% on average." },
    { q: "Do you support hybrid or on-premise setups?", a: "Yes, we run Ansible playbooks over SSH tunnels to manage on-premise hardware and virtual machines." },
    { q: "What security frameworks do you follow?", a: "Our operations comply with SOC 2 Type II, ISO 27001, and CIS benchmark security guidelines." },
    { q: "What happens if a backup restoration fails?", a: "Our monitoring triggers an alert, paging our SRE team to investigate and resolve the backup issue immediately." },
    { q: "Do you offer SLA guarantees?", a: "Yes, we commit to 99.99% infrastructure uptime and 15-minute response times for high-severity alerts." },
    { q: "How are resources monitored?", a: "We configure Datadog, Prometheus, Grafana, and CloudWatch to monitor resource metrics and alert on anomalies." },
    { q: "How do we transition operations to your center?", a: "Click the 'Outsource IT Operations' button to schedule a transition planning call with our leads." }
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
              <Settings className="w-3.5 h-3.5" />
              MANAGED OPERATIONAL DESKS
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Managed Services Center
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Outsource System Patching, Automated Backups & Cost Reviews.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              Delegate routine tasks, enforce OS patch security, and reduce monthly cloud billing waste via managed operations desks.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Outsource IT Operations
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">OUTSOURCING</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Core Capabilities</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Layers className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{cap.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PATCH AUTOMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">PATCHING</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Patch Automation</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We automate CVE packages scanning, testing patches in isolated sandboxes.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {patchProcedures.map((proc, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{proc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKUP OPERATIONS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 lg:order-2">
              {backupOperations.map((op, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{op}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">RECOVERY</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Backup Operations</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We trigger daily backup processes, validating restorations inside test containers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COST OPTIMIZATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">FINOPS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Cost Optimization</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {costOptimizationSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <TrendingDown className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MANAGED INFRASTRUCTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">CATEGORIES</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Managed Infrastructure</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We manage VMs, databases, container clusters, and serverless background tasks.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {managedInfrastructure.map((infra, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{infra}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CENTER METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">ACHIEVEMENTS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Center Metrics</h2>
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
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Outsource Your Operational Burden</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Delegate patching, backups, and cost reviews to our operations center.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Outsource IT Operations
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
