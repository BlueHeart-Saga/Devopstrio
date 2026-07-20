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
  Clock,
  Zap,
  ShieldCheck,
  Server,
  Database,
  Cloud,
  Bot,
  Terminal,
  Settings,
  BarChart3
} from "lucide-react";
import Link from "next/link";

export default function FollowTheSunSupportPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const alwaysOnFeatures = [
    "Continuous Monitoring",
    "Global Engineering Collaboration",
    "Business Continuity",
    "Rapid Incident Response",
    "Preventive Maintenance",
    "Operational Excellence"
  ];

  const whySupport = [
    { title: "Around-the-Clock Availability", desc: "No downtime, regardless of your time zone." },
    { title: "Faster Incident Resolution", desc: "Immediate triage and continuous debugging." },
    { title: "Reduced Downtime", desc: "Proactive issue detection before business impact." },
    { title: "Proactive Monitoring", desc: "24/7 observability across all critical systems." },
    { title: "Global Knowledge Sharing", desc: "Cross-regional insights for better solutions." },
    { title: "Seamless Team Handover", desc: "Structured shift handovers ensuring continuous work." }
  ];

  const workflowStages = [
    "Monitoring", "Detection", "Regional Engineering Team", "Investigation", "Resolution", "Knowledge Transfer", "Continuous Monitoring"
  ];

  const operationsCenter = [
    { title: "Infrastructure Monitoring", icon: <Server className="w-5 h-5 text-rose-500" /> },
    { title: "Application Monitoring", icon: <Terminal className="w-5 h-5 text-rose-500" /> },
    { title: "Cloud Operations", icon: <Cloud className="w-5 h-5 text-rose-500" /> },
    { title: "Security Monitoring", icon: <ShieldCheck className="w-5 h-5 text-rose-500" /> },
    { title: "Performance Management", icon: <BarChart3 className="w-5 h-5 text-rose-500" /> },
    { title: "Capacity Planning", icon: <Settings className="w-5 h-5 text-rose-500" /> },
    { title: "Backup Verification", icon: <Database className="w-5 h-5 text-rose-500" /> },
    { title: "Service Health", icon: <Activity className="w-5 h-5 text-rose-500" /> }
  ];

  const supportServices = [
    "Cloud Infrastructure Support",
    "Application Support",
    "DevOps Operations",
    "Database Administration",
    "Platform Support",
    "Security Operations",
    "Backup & Disaster Recovery",
    "Performance Optimization"
  ];

  const incidentLifecycle = [
    "Detect", "Alert", "Assess", "Respond", "Resolve", "Recover", "Review", "Improve"
  ];

  const monitoringObservability = [
    "Infrastructure Monitoring",
    "Application Performance",
    "Log Analytics",
    "Distributed Tracing",
    "Alert Management",
    "Dashboard Reporting",
    "Capacity Monitoring",
    "Health Checks"
  ];

  const aiOperations = [
    "AI Anomaly Detection",
    "Predictive Alerts",
    "Automated Remediation",
    "Workflow Automation",
    "Self-Healing Processes",
    "Intelligent Notifications",
    "Capacity Forecasting",
    "Operational Insights"
  ];

  const serviceLevelManagement = [
    { title: "SLA Management", value: "99.99%" },
    { title: "Response Time", value: "< 15 Mins" },
    { title: "Resolution Time", value: "Optimized" },
    { title: "Service Availability", value: "24×7" },
    { title: "Escalation Matrix", value: "Defined" },
    { title: "Customer Satisfaction", value: "100%" }
  ];

  const techStack = {
    monitoring: ["Prometheus", "Grafana", "Datadog", "Elastic", "Azure Monitor", "CloudWatch", "Google Cloud Monitoring"],
    incident: ["PagerDuty", "Opsgenie", "Jira Service Management", "ServiceNow"],
    automation: ["Terraform", "Ansible", "GitHub Actions", "Azure DevOps"],
    collaboration: ["Microsoft Teams", "Slack", "Confluence"],
    cloud: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud"]
  };

  const outcomes = [
    { label: "Continuous Operations", value: "24×7" },
    { label: "Issue Detection", value: "Proactive" },
    { label: "Business Downtime", value: "Reduced" },
    { label: "Incident Resolution", value: "Faster" },
    { label: "Service Availability", value: "Reliable" },
    { label: "Operational Improvement", value: "Continuous" }
  ];

  const whyDevopstrio = [
    "Global Engineering Collaboration",
    "Always-On Monitoring",
    "Cloud Operations Expertise",
    "AI-Assisted Operations",
    "Security-Integrated Support",
    "Automation-Driven Efficiency",
    "Structured Incident Management",
    "Long-Term Operational Partnership"
  ];

  const faqs = [
    { q: "What is Follow-the-Sun support?", a: "Follow-the-Sun is a global support model where issues are continuously passed between time zones so work never stops, ensuring 24x7 resolution." },
    { q: "How do you provide 24×7 monitoring?", a: "We utilize automated monitoring tools (like Datadog, Prometheus) paired with active global operations centers that respond immediately to alerts." },
    { q: "Which systems do you monitor?", a: "We monitor entire ecosystems including cloud infrastructure, network health, databases, application performance, and security perimeters." },
    { q: "Do you support multi-cloud environments?", a: "Yes, our engineers are certified and experienced across AWS, Azure, Google Cloud, and Oracle Cloud." },
    { q: "How are incidents escalated?", a: "Incidents follow a strict SLA-based escalation matrix, utilizing tools like PagerDuty to immediately alert L2/L3 engineers based on severity." },
    { q: "Can you support existing applications?", a: "Absolutely. We can take over operational support for existing legacy and modern applications, providing full stability and maintenance." },
    { q: "What SLAs do you provide?", a: "We provide customizable, stringent SLAs typically guaranteeing 99.99% uptime, rapid response times (e.g. < 15 minutes for critical issues), and clear resolution targets." },
    { q: "How do you ensure service continuity?", a: "Through automated failovers, robust disaster recovery planning, and continuous cross-regional shift handovers." }
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
            Follow-the-Sun <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">
              Support
            </span>
          </>
        }
        subtitle="Deliver uninterrupted business operations through 24×7 monitoring, intelligent incident response, proactive maintenance, and globally coordinated engineering teams."
        hyperspeed={true}
        hyperspeedOptions={{
          distortion: 'turbulentDistortion',
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xeab308, 0xa16207, 0xfde047],
            rightCars: [0xd97706, 0x92400e, 0xfcd34d],
            sticks: 0xeab308
          }
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "GLOBAL DELIVERY", href: "/ecosystem/global-delivery" },
          { label: "FOLLOW-THE-SUN SUPPORT" }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Contact Support Team
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/services/explore"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
          >
            Explore Managed Services
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 mt-12 max-w-4xl mx-auto">
          {["24×7 Monitoring", "Global Support Coverage", "Proactive Operations", "Incident Response", "AI-Driven Monitoring", "Business Continuity"].map((highlight, idx) => (
            <span key={idx} className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-zinc-400 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-rose-500/50 hover:text-white transition-colors duration-300 cursor-default">
              {highlight}
            </span>
          ))}
        </div>
      </Hero>

      {/* 2. ALWAYS-ON OPERATIONS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Continuous Operations Without Borders
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium mb-8">
              Business never stops—and neither do we. Our Follow-the-Sun support model enables engineering teams across different regions to collaborate seamlessly, ensuring continuous monitoring, faster issue resolution, proactive maintenance, and uninterrupted service availability for mission-critical environments.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {alwaysOnFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/50 bg-zinc-950/40 hover:border-rose-500/30 transition-colors group">
                <Globe className="w-5 h-5 text-rose-500 shrink-0 group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-bold text-zinc-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY FOLLOW-THE-SUN SUPPORT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ADVANTAGE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Why Organizations Choose Continuous Global Support</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whySupport.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 flex flex-col items-start group">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-6 text-rose-500">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GLOBAL SUPPORT WORKFLOW & 7. INCIDENT MANAGEMENT LIFECYCLE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 gap-24">
          {/* Workflow */}
          <div>
            <Reveal className="mb-16 text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PROCESS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">How Our Global Support Model Works</h2>
            </Reveal>
            <div className="flex flex-col md:flex-row justify-between items-center relative gap-6 md:gap-0">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800 hidden md:block -z-10" />
              {workflowStages.map((stage, idx) => (
                <div key={idx} className="relative flex flex-col items-center group w-full text-center">
                  <div className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-rose-500 mb-4 z-10 shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
                  <h4 className="text-[11px] lg:text-xs font-bold text-white mb-2 max-w-[100px]">{stage}</h4>
                </div>
              ))}
            </div>
          </div>
          
          {/* Incident Lifecycle */}
          <div>
            <Reveal className="mb-16 text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">RESPONSE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Structured Incident Response</h2>
            </Reveal>
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
              {incidentLifecycle.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div className="relative group w-full md:w-auto">
                    <div className="px-6 py-4 bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl text-center hover:border-yellow-500/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                      <div className="text-yellow-500 text-[10px] font-bold tracking-[0.2em] mb-1 font-mono group-hover:text-yellow-400">0{idx + 1} //</div>
                      <div className="text-sm font-bold text-white tracking-wide">{stage}</div>
                    </div>
                  </div>
                  {idx < incidentLifecycle.length - 1 && (
                    <ArrowUpRight className="w-5 h-5 text-zinc-700 rotate-45 hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 24x7 OPERATIONS CENTER */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">NOC / SOC</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Global Operations Center</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {operationsCenter.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUPPORT SERVICES & 8. MONITORING OBSERVABILITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SERVICES</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Managed Support Capabilities</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportServices.map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">VISIBILITY</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Complete Visibility Across Your Environment</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {monitoringObservability.map((obs, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <Activity className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{obs}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 9. AUTOMATION & AI OPERATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">AIOPS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Intelligent Operations at Scale</h2>
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

      {/* 10. SERVICE LEVEL MANAGEMENT */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">COMMITMENT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Built Around Reliability</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {serviceLevelManagement.map((sla, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/30 flex flex-col justify-center items-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                <span className="text-xl lg:text-2xl font-black text-white mb-2 tracking-tighter leading-none">{sla.value}</span>
                <span className="text-[10px] lg:text-xs uppercase font-bold text-rose-500 mt-2">{sla.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TOOLS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Technology Stack</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Monitoring</h3>
              <div className="flex flex-col gap-3">
                {techStack.monitoring.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Incident</h3>
              <div className="flex flex-col gap-3">
                {techStack.incident.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Automation</h3>
              <div className="flex flex-col gap-3">
                {techStack.automation.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Collaboration</h3>
              <div className="flex flex-col gap-3">
                {techStack.collaboration.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Cloud</h3>
              <div className="flex flex-col gap-3">
                {techStack.cloud.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
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

      {/* 13. WHY DEVOPSTRIO SUPPORT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DIFFERENTIATOR</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Why Devopstrio Support</h2>
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
              Everything you need to know about our continuous operations framework.
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
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">Keep Your Business Running Around the Clock</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with Devopstrio for continuous monitoring, proactive support, rapid incident response, and reliable managed operations that keep your critical systems available 24×7.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Talk to Our Support Team
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/services/explore"
              className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
            >
              Explore Managed Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
