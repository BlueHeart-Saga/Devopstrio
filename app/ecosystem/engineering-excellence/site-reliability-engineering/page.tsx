"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  ActivitySquare,
  BarChart4,
  AlertTriangle,
  Server,
  Zap,
  Gauge,
  MonitorCheck
} from "lucide-react";
import Link from "next/link";

export default function SiteReliabilityEngineeringPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const reliabilityFramework = [
    { title: "Service Level Objectives (SLOs)", desc: "Defining precise uptime and latency targets that balance reliability with the need to release new features quickly." },
    { title: "Service Level Indicators (SLIs)", desc: "Measuring the exact metrics (like HTTP 500 error rates) that determine if we are meeting our SLOs." },
    { title: "Error Budgets", desc: "Using the allowed downtime window as a budget. If the budget runs out, feature deployments are halted to focus on stability." }
  ];

  const observability = [
    { title: "Grafana Dashboards", desc: "Creating centralized visual interfaces for cross-referencing system health metrics in real-time." },
    { title: "Prometheus Metrics", desc: "Scraping time-series data directly from Kubernetes clusters and application nodes at scale." },
    { title: "OpenTelemetry", desc: "Injecting distributed tracing into microservices to track exactly where a request failed in the network." }
  ];

  const incidentManagement = [
    { title: "Detection", desc: "Algorithmic anomaly detection automatically triggers alerts via PagerDuty before a customer notices." },
    { title: "Response", desc: "On-call engineers utilize standardized playbooks to quickly contain the blast radius of the failure." },
    { title: "Recovery & Postmortems", desc: "After restoration, we conduct blameless reviews to implement guardrails so the exact failure cannot happen again." }
  ];

  const capacityEngineering = [
    { title: "Performance Testing", desc: "Simulating heavy Black Friday traffic loads on staging environments using k6." },
    { title: "Scaling Policies", desc: "Configuring Kubernetes HPA (Horizontal Pod Autoscaler) to react dynamically to CPU spikes." },
    { title: "Optimization", desc: "Analyzing database query times and memory leaks to lower hardware usage costs." }
  ];

  const automation = [
    "Self-Healing scripts that automatically restart unresponsive microservice pods",
    "Auto Scaling rules expanding cloud compute capacity precisely when traffic surges",
    "Executable Runbooks stored in version control replacing outdated PDF disaster manuals"
  ];

  const dashboardFlow = [
    { step: "Availability", desc: "System Uptime" },
    { step: "Latency", desc: "Response Times" },
    { step: "Errors", desc: "Failure Rates" },
    { step: "Traffic", desc: "Request Volumes" }
  ];

  const metrics = [
    { value: "99.95%", label: "Uptime Guaranteed" },
    { value: "<10m", label: "MTTR (Mean Time to Recovery)" },
    { value: "300 Days", label: "MTBF (Mean Time Between Failures)" }
  ];

  const faqs = [
    { q: "What is the difference between DevOps and SRE?", a: "DevOps is a cultural philosophy about bridging development and operations. SRE is a specific job role and set of practices (like SLOs and Error Budgets) that implements that philosophy." },
    { q: "How do you calculate an Error Budget?", a: "If an SLO is 99.9% uptime for a month, the error budget is the remaining 0.1% (about 43 minutes). We can afford 43 minutes of downtime to experiment and push risky updates." },
    { q: "What happens when an Error Budget is exhausted?", a: "By agreement between product and engineering, feature releases are frozen. The team focuses entirely on reliability engineering until the budget replenishes." },
    { q: "How do you prevent alert fatigue for on-call engineers?", a: "We only page human engineers for actionable events that directly impact an SLO. Non-critical anomalies generate silent tickets that are reviewed during business hours." },
    { q: "What does 'blameless postmortem' mean?", a: "It means we assume every engineer acts with good intentions. If someone brought down production, the system failed by allowing them to do it. We fix the system, we don't punish the person." },
    { q: "Do SREs write code?", a: "Yes. SRE is fundamentally a software engineering approach to operations. Our SREs spend at least 50% of their time writing automation code, not just fighting fires." },
    { q: "What is OpenTelemetry?", a: "It is an open-source observability framework used to generate, collect, and export telemetry data (metrics, logs, and traces) consistently across different services." },
    { q: "How do you test system resilience?", a: "We utilize Chaos Engineering—intentionally injecting failures like killing database nodes or severing network links in controlled environments to ensure the system auto-recovers." },
    { q: "Why is tracking 'Traffic' important?", a: "Traffic (the number of requests) provides context. A high error rate during low traffic might be a localized issue, but during peak traffic, it indicates a massive cascading failure." },
    { q: "How do we implement SRE in our company?", a: "Click 'Improve Service Reliability' to schedule an infrastructure audit with our lead Site Reliability Engineers." }
  ];

  return (
    <main className="relative min-h-screen bg-[#030303] text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        <div className="absolute inset-0 z-0">
          <img src="/assets/ecosystem/sub-page-hero/ecosystem_Engineering_excellence/site_reliability.png" alt="Site Reliability Engineering background" className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-20">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <ActivitySquare className="w-3.5 h-3.5" />
              SITE RELIABILITY ENGINEERING
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Site Reliability Engineering
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Ensuring Reliability, Availability and Performance At Scale.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              We apply software engineering principles to operations, utilizing SLOs, error budgets, and deep observability to guarantee system uptime while maintaining high release velocity.
            </p>
          </Reveal>
          
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. RELIABILITY FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">GOVERNANCE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Reliability Framework</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reliabilityFramework.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <MonitorCheck className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OBSERVABILITY PLATFORM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">TELEMETRY</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Observability Platform</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We eliminate blind spots by instrumenting every layer of the stack with distributed tracing and metric scraping.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {observability.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <BarChart4 className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. INCIDENT MANAGEMENT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">RESPONSE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Incident Management</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {incidentManagement.map((inc, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{inc.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{inc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CAPACITY ENGINEERING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:order-2">
              {capacityEngineering.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">SCALE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Capacity Engineering</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We mathematically ensure your infrastructure can handle peak loads without over-provisioning expensive hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AUTOMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">TOIL REDUCTION</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Automation</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                SREs code their way out of their job by automating recovery protocols and scaling rules.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {automation.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. RELIABILITY DASHBOARD */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">THE FOUR GOLDEN SIGNALS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Reliability Dashboard</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {dashboardFlow.map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center w-[160px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <Gauge className="w-6 h-6 text-rose-500 mb-4" />
                <h4 className="text-sm font-bold text-white mb-2">{stage.step}</h4>
                <p className="text-[10px] text-zinc-400 font-medium">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RELIABILITY METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">KPIs</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Reliability Metrics</h2>
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

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Improve Service Reliability</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our SRE teams to instrument your applications, establish error budgets, and ensure 99.95% availability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Consult SRE Experts
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
