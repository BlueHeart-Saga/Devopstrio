"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, ShieldCheck, Eye, LineChart, Gauge, AlertTriangle, Bot, Activity, Flame } from "lucide-react";
import Link from "next/link";

export function SREOutcomesFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const techStack = [
    { category: "Observability & Monitoring", items: ["Prometheus", "Grafana", "Datadog", "Dynatrace", "New Relic"] },
    { category: "Logging & Tracing", items: ["OpenTelemetry", "ELK Stack", "Loki", "Jaeger", "Zipkin"] },
    { category: "Incident & On-Call", items: ["PagerDuty", "Opsgenie", "VictorOps", "Statuspage"] },
    { category: "Chaos & Resilience", items: ["Gremlin", "Chaos Mesh", "LitmusChaos", "Kube-monkey"] },
    { category: "AIOps & Auto-Remediation", items: ["BigPanda", "Moogsoft", "Argo Rollouts", "Keda"] }
  ];

  const businessOutcomes = [
    { title: "99.99%", metric: "Uptime & Availability", desc: "Maintain high availability across critical microservices with automated failover topology." },
    { title: "60%", metric: "Reduction in MTTR", desc: "Mean-time-to-resolution cut down significantly via automated triage runbooks and distributed tracing." },
    { title: "Zero", metric: "Unplanned Outages", desc: "Catch degradation early with error budget burn rate alerts before end-users notice." },
    { title: "75%", metric: "Reduction in Toil", desc: "Eliminate repetitive manual operations with self-healing Kubernetes clusters." },
    { title: "Controlled", metric: "Release Risk", desc: "SLO-driven gating ensures high feature velocity without compromising platform stability." },
    { title: "Proactive", metric: "Capacity Scaling", desc: "Predictive traffic scaling eliminates blackout risk during major traffic peaks." }
  ];

  const whyChooseUs = [
    { title: "SLO/SLI Governance Experts", icon: ShieldCheck },
    { title: "Full-Stack OpenTelemetry Tracing", icon: Eye },
    { title: "Automated Self-Healing Pipelines", icon: Bot },
    { title: "Chaos Engineering Game Days", icon: Flame },
    { title: "Blameless Incident Culture", icon: AlertTriangle },
    { title: "Multi-Cloud Active-Active DR", icon: Activity },
    { title: "Latency & DB Optimization", icon: Gauge },
    { title: "Capacity Forecasting", icon: LineChart }
  ];

  const faqs = [
    { q: "What is Site Reliability Engineering (SRE)?", a: "SRE is a discipline that incorporates software engineering aspects into infrastructure and operations problems to build ultra-scalable and highly reliable software systems." },
    { q: "What is the difference between SRE and DevOps?", a: "DevOps is a cultural philosophy focused on breaking down silos between development and operations. SRE is a concrete implementation of DevOps principles using software engineering techniques." },
    { q: "What is an Error Budget?", a: "An Error Budget is the allowable amount of risk/downtime a service can experience over a given period (e.g. 99.9% uptime = 43 minutes downtime/month). If the budget is exhausted, releases freeze until stability is restored." },
    { q: "How do SLIs and SLOs work?", a: "A Service Level Indicator (SLI) is a quantifiable metric of service health (e.g., latency under 100ms). A Service Level Objective (SLO) is the target goal set for that metric (e.g., 99.9% of requests meet the SLI)." },
    { q: "What is operational toil and how do you reduce it?", a: "Toil is manual, repetitive, scriptable work that scales linearly as services grow. SRE reduces toil by building automated self-healing scripts and GitOps workflows." },
    { q: "What is Chaos Engineering?", a: "Chaos Engineering is the practice of intentionally introducing controlled failures (e.g., killing pods or injecting latency) into a staging or production system to test its fault tolerance." },
    { q: "How fast can SRE improve our MTTR?", a: "By centralizing distributed tracing, configuring automated alerts, and creating runbooks, most engineering organizations see a 50-70% reduction in MTTR within 90 days." },
    { q: "How do I start an SRE engagement with Devopstrio?", a: "Schedule an SRE Audit. We will analyze your current incident metrics, telemetry tools, and SLO targets to build a custom reliability roadmap." }
  ];

  return (
    <>
      {/* 11. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              SRE Technology Ecosystem
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-2xl">
                <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-rose-500 mb-6 border-b border-zinc-900 pb-4">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-zinc-900 text-zinc-300 rounded-md text-xs font-medium border border-zinc-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BUSINESS OUTCOMES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">IMPACT & ROI</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Measurable Business Outcomes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/80 border border-zinc-900 rounded-3xl relative overflow-hidden group hover:border-rose-500/40 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl group-hover:bg-rose-500/10 transition-colors pointer-events-none" />
                <span className="text-xs font-mono text-rose-500 font-bold uppercase tracking-widest block mb-2">{item.title}</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-4">{item.metric}</h3>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. WHY DEVOPSTRIO SRE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ADVANTAGE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Why Devopstrio Site Reliability Engineering
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/50 hover:bg-zinc-900 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition-all">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-rose-500 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60 z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions about <span className="text-white font-bold bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent">Site Reliability Engineering</span>.
            </h2>
          </Reveal>

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

      {/* 15. CTA */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Build Ultra-Reliable Systems with Devopstrio</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with Devopstrio to implement SRE practices, automate telemetry, eliminate toil, and maintain maximum enterprise uptime.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Schedule an SRE Audit
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Talk to an SRE Architect
              <div className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
