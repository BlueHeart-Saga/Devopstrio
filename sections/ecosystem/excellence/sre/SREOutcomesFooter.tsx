"use client";

import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
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
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-3 block">ECOSYSTEM</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              SRE Technology Ecosystem
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-2xl">
                <h4 className="text-sm font-mono font-bold tracking-[0.2em] uppercase text-emerald-400 mb-6 border-b border-zinc-900 pb-4">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {stack.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-zinc-900 text-zinc-200 rounded-md text-xs md:text-sm font-medium border border-zinc-800">
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
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-3 block">IMPACT & ROI</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Measurable Business Outcomes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/80 border border-zinc-900 rounded-3xl relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />
                <span className="text-xs md:text-sm font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-2">{item.title}</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{item.metric}</h3>
                <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. WHY DEVOPSTRIO SRE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-3 block">ADVANTAGE</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Why Devopstrio Site Reliability Engineering
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                    <Icon className="w-6 h-6 text-zinc-300 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <FAQ faqs={faqs} />
      <CTA
        ctaTitle="Achieve 99.99% Availability with"
        ctaHighlight="Site Reliability Engineering"
        ctaDesc="Eliminate downtime with proactive SLOs, automated incident triage, chaos engineering, and enterprise observability."
        ctaBtnText="CONSULT SRE SPECIALISTS"
        backLink="/ecosystem/engineering-excellence"
      />
    </>
  );
}
