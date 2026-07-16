"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Workflow,
  Sparkles,
  Cpu,
  Activity,
  Layers,
  Server,
  Terminal,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function AutomationPlatformPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const heroMetrics = [
    { value: "10x", label: "Process Velocity" },
    { value: "99.99%", label: "Orchestration Uptime" },
    { value: "Zero", label: "Manual Data Entry" },
    { value: "100%", label: "Audit Traceability" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const orchFeatures = [
    "Temporal.io orchestrations executing stateful workflow lines",
    "Process Automation builders mapping business approvals",
    "Event Driven Systems triggering tasks on message topics"
  ];

  const bizFeatures = [
    "HR Automation syncing new hire metadata across directories",
    "IT Automation provisioning workspace groups and software seats",
    "Finance Automation matching invoices with billing ledgers",
    "Operations Automation triggering logistics reports schedule"
  ];

  const intFeatures = [
    "RESTful API connection libraries linking external servers",
    "Webhook routers catching and verifying callback payloads",
    "Enterprise Systems integrations connecting ERP and CRM systems"
  ];

  const intelFeatures = [
    "Workflow Analytics mapping average transaction times",
    "SLA Monitoring tracking task expiration alarms",
    "Performance Metrics detailing database write load sizes"
  ];

  const aiFeatures = [
    "Autonomous AI Agents querying database entries to resolve tasks",
    "Intelligent Workflows splitting routes based on text classifications",
    "Decision Engines selecting best providers matching price thresholds"
  ];

  const faqs = [
    { q: "What is Temporal.io orchestration?", a: "Temporal is a developer platform that ensures code executes reliably, managing state, retries, and failure recovery automatically for multi-step workflows." },
    { q: "How long can a stateful workflow run?", a: "Temporal workflows are persistent and can run for days, weeks, or months, pausing for manual approvals without consuming memory." },
    { q: "Can we integrate this with legacy ERP databases?", a: "Yes, we build adapter services querying databases or running SFTP file synchronizations to interface with legacy ERPs." },
    { q: "What security measures protect webhook inputs?", a: "We verify webhook signatures using shared secrets and enforce SSL connections to block malicious payloads." },
    { q: "How do AI agents decide process branches?", a: "We run LLMs to parse text inputs, classify request goals, and execute pre-approved tool calls inside safe platform boundaries." },
    { q: "Does the platform track SLA violations?", a: "Yes, you can configure timeout triggers that automatically escalate delayed workflows or notify managers." },
    { q: "Is workflow history archived?", a: "Yes, we save execution logs detailing every task input, retry count, and success payload for compliance auditing." },
    { q: "Does the system support parallel task execution?", a: "Yes, workflows can launch multiple child tasks concurrently, merging results once all complete." },
    { q: "What happens if a target API goes offline?", a: "The workflow engine pauses and executes custom retry schedules with exponential backoffs, preventing data loss." },
    { q: "How do we get started with the Automation Platform?", a: "Click 'Automate Business Operations' to discuss your workflows and schedule a technical demonstration." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="Process Automation Unit"
        title={
          <>
            Enterprise Automation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Orchestrate multi-system tasks, build HR/IT approval routes, verify webhook parameters, and deploy decision engines."
        particles={true}
        particleColors={["#ffffff", "#fda4af", "#f43f5e"]}
        stats={heroMetrics}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "AUTOMATION PLATFORM" }
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Automate Business Operations
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>


      {/* 2. WORKFLOW ORCHESTRATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ORCHESTRATION CORE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Workflow Orchestration</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Run stateful workflow executions, track retry counters, and route event payloads reliably using robust orchestrators.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {orchFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Workflow className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS AUTOMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {bizFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">BUSINESS LOGIC</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Business Automation</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Deploy templates automation routing tasks across divisions. Connect databases and system tools to prevent manual copying work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTEGRATION HUB */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">API ROUTERS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Integration Hub</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Unify service links. Secure external API connections, catalog parameters, and listen to callback signals in one central hub.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {intFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Terminal className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS INTELLIGENCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {intelFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Activity className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SLA ANALYTICS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Process Intelligence</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Monitor task duration lists, capture bottleneck steps, track operational errors, and chart performance results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI AUTOMATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DECISION AI</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">AI Automation</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Deploy reasoning agents to parse text inputs, solve transactional tasks, and orchestrate workflow routes autonomously.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. AUTOMATION ARCHITECTURE */}
      <section className="w-full py-28 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">BLUEPRINT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Automation Architecture</h2>
          </Reveal>

          <div className="max-w-3xl mx-auto bg-zinc-950/40 border border-zinc-900/80 rounded-3xl p-8 lg:p-12 relative overflow-hidden font-mono text-xs hover:border-rose-500/20 transition-all duration-500 shadow-2xl">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Events</span>
                <span className="text-zinc-400">Webhook alerts, REST triggers, user uploads</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Workflow Engine</span>
                <span className="text-zinc-400">Temporal state tracking, step retries loop</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Business Rules</span>
                <span className="text-zinc-400">Classifiers, limits verification checks</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Actions</span>
                <span className="text-zinc-400">SSO adjustments, direct bank transfers</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Reporting</span>
                <span className="text-zinc-400">SLA charts, metric updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
              Everything you need to know about our workflow orchestration, processes automation, and system integration capabilities. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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

          {/* Below FAQ callout */}
          <Reveal delay={0.2}>
            <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-xs md:text-sm font-bold">
                Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
              </p>
              <a
                href="mailto:info@devopstrioglobal.com"
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Orchestrate Business Rules</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our system engineers to map workflow checkpoints and logic pathways.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Automate Business Operations
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
