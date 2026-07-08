"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Cloud,
  DollarSign,
  ShieldAlert,
  TrendingUp,
  BarChart2,
  Layers,
  Sparkles,
  Server,
  Activity,
  Workflow
} from "lucide-react";
import Link from "next/link";

export default function CloudManagementPlatformPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const heroMetrics = [
    { value: "30%+", label: "Cost Reduction" },
    { value: "Real-Time", label: "Anomaly Detection" },
    { value: "100%", label: "Tag Compliance" },
    { value: "Multi-Cloud", label: "Central Control" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const opsFeatures = [
    "Azure management portal integrations tracking active resource counts",
    "AWS workspace organizers grouping linked accounts under billing umbrellas",
    "OCI compute controls auditing bare-metal network speeds",
    "Hybrid Cloud sync scripts managing local virtualization clusters"
  ];

  const costFeatures = [
    "Unified FinOps Dashboards summarizing weekly spend profiles",
    "Automatic Budget Tracking triggering Slack webhooks on anomalies",
    "Resource Optimization recommendations pointing out oversized VMs",
    "Chargeback Models routing cloud costs to specific division budgets"
  ];

  const govFeatures = [
    "Enforced Resource Tagging policies automatically labeling nodes",
    "Compliance auditor checklists scanning configurations weekly",
    "Resource Standards parameters locking down allowed VM sizing families",
    "Enterprise Landing Zones provisioning pre-isolated virtual networks"
  ];

  const secFeatures = [
    "IAM role audit profiles pointing out unused root permissions",
    "Real-time Security Monitoring tracing resource provisioning events",
    "Risk Detection rules alerting team leaders to open public database ports",
    "Secure Audit Logging archiving API actions for compliance reviews"
  ];

  const analyticsFeatures = [
    "Usage Analytics charts correlating cpu load with billing metrics",
    "Performance Analytics auditing storage input-output speeds (IOPS)",
    "Capacity Planning projections estimating resource requirements for peaks"
  ];

  const faqs = [
    { q: "How does the platform fetch cost details?", a: "We link with AWS Cost Explorer, Azure Retail Prices, and OCI Usage APIs using secure read-only credentials to compile spend databases." },
    { q: "What is a FinOps dashboard?", a: "FinOps stands for Cloud Financial Operations. The dashboard displays cost structures, maps spend to business projects, and suggests cost-saving opportunities." },
    { q: "Can the platform automate resource deletion?", a: "By default, it prompts. With appropriate authorization, scheduler jobs will turn off idle staging nodes automatically." },
    { q: "Does it support private cloud architectures?", a: "Yes, we deploy agents auditing local VMware ESXi or OpenStack setups, displaying local hardware costs beside public spend." },
    { q: "How are alerts delivered?", a: "Alerts route through customizable webhook channels, integrating with Slack, Microsoft Teams, and PagerDuty." },
    { q: "Does this platform track Kubernetes cluster costs?", a: "Yes, we integrate with open-source tools like Kubecost to allocate shared container namespace costs to specific teams." },
    { q: "What security measures protect our credentials?", a: "We query cloud provider endpoints using secure cross-account role assumes, meaning we never store access key files." },
    { q: "Can we configure multiple budget thresholds?", a: "Yes, you can configure warn alarms (e.g. 80% budget) and blocking policies (e.g. 100% budget reached)." },
    { q: "What compliance checklists are supported?", a: "We run CIS Benchmarks, SOC-2 alignment checks, and PCI-DSS compliance audits." },
    { q: "How do we start cloud optimization?", a: "Click 'Optimize Your Cloud Estate' to request a cloud billing review and setup assessment." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="Cloud Operations Unit"
        title={
          <>
            Cloud Management <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Audit global cloud spend, enforce resource tagging standards, isolate networks, and discover cost anomalies in one unified dashboard."
        bgImage="/assets/ecosystem/sub-page-hero/Ecosystem_flatform&solutions/cloud.png"
        stats={heroMetrics}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "CLOUD MANAGEMENT PLATFORM" }
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Optimize Your Cloud Estate
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>


      {/* 2. CLOUD OPERATIONS OVERVIEW */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OPS CONTROL</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cloud Operations Overview</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Unify control nodes. Monitor infrastructure status, track host limits, and secure virtualization servers through a single platform.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {opsFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. COST INTELLIGENCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {costFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <DollarSign className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FINOPS RULES</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cost Intelligence</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Correlate resource utilization figures with hourly billing metrics, find orphaned staging assets, and distribute budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GOVERNANCE CENTER */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">COMPLIANCE HUB</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Governance Center</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Enforce security guidelines automatically. Restrict provisioning of unsafe instance classes and lock database enclaves to secure regions.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {govFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Layers className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOUD SECURITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {secFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SECURITY CHECKS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cloud Security</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Inspect identity assignments, audit credential setups, trace admin changes, and verify firewall parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MULTI-CLOUD MANAGEMENT */}
      <section className="w-full py-28 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TOPOLOGY MAP</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Multi-Cloud Management</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 select-none font-mono text-xs text-center">
            <div className="p-8 bg-zinc-950 border border-zinc-900/80 rounded-3xl hover:border-rose-500/30 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-lg mb-2">Azure</div>
              <div className="text-zinc-500">Resource Groups, AKS</div>
            </div>
            <div className="p-8 bg-zinc-950 border border-zinc-900/80 rounded-3xl hover:border-rose-500/30 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-lg mb-2">AWS</div>
              <div className="text-zinc-500">EC2, VPC, EKS</div>
            </div>
            <div className="p-8 bg-zinc-950 border border-zinc-900/80 rounded-3xl hover:border-rose-500/30 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-lg mb-2">OCI</div>
              <div className="text-zinc-500">Compute, Block Storage</div>
            </div>
            <div className="p-8 bg-rose-500/10 border border-rose-500/20 rounded-3xl hover:border-rose-500/40 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-lg mb-2">Private Cloud</div>
              <div className="text-rose-500/70">VMware, Local Hosts</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOUD ANALYTICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CAPACITY AUDIT</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cloud Analytics</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Plot database utilization records, compare cloud performance metrics, and forecast sizing requirements for seasonal scaling.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {analyticsFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <BarChart2 className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FAQ</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
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
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Optimize Cloud Spend Today</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our cloud architects to audit sizing configuration settings.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Optimize Your Cloud Estate
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
