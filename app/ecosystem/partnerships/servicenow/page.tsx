"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Shield,
  Briefcase,
  Sparkles,
  Workflow,
  ChevronRight,
  Zap,
  Check,
  Cpu,
  Database,
  Users,
  Layers,
  FileText,
  Layout,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

const servicenowSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "solutions", label: "Solutions" },
  { id: "architecture", label: "Architecture" },
  { id: "use-cases", label: "Use Cases" },
  { id: "products", label: "Platform Expertise" },
  { id: "why-us", label: "Why Us" },
  { id: "outcomes", label: "Outcomes" },
  { id: "faq", label: "FAQ" }
];

export default function ServiceNowPartnershipPage() {
  const [activeTab, setActiveTab] = useState("it");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Scroll animations setup
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cleanupTriggers = () => {};
    let alive = true;

    const startMotion = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (!alive) return;

      lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.85 });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray<HTMLElement>(".fade-scroll-item").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0.2, y: 15 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: true
            },
            delay: index * 0.02
          }
        );
      });

      cleanupTriggers = () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    startMotion();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      lenis?.destroy();
      cleanupTriggers();
    };
  }, []);

  const heroHighlights = [
    { text: "Enterprise Workflow Automation", desc: "Orchestrate cross-departmental operations and requests automatically." },
    { text: "IT Service Management", desc: "Deploy ITIL-aligned ITSM hubs for rapid incident resolution loops." },
    { text: "Digital Operations", desc: "Gain complete infrastructure visibility and automated service mapping." },
    { text: "AI-Powered Service Delivery", desc: "Unlock intelligent routing and resolution suggestions with Now Assist." }
  ];

  const capabilitiesList = [
    {
      title: "IT Service Management",
      desc: "Incident, Problem, Change, Asset and Request Management.",
      icon: <Briefcase className="w-5 h-5 text-[#10b981]" />
    },
    {
      title: "IT Operations Management",
      desc: "Discovery, Event Management, Infrastructure Visibility and Service Mapping.",
      icon: <Cpu className="w-5 h-5 text-[#10b981]" />
    },
    {
      title: "IT Asset Management",
      desc: "Hardware, software and lifecycle governance.",
      icon: <Database className="w-5 h-5 text-[#10b981]" />
    },
    {
      title: "Employee Workflows",
      desc: "HR service delivery, onboarding, self-service portals and approvals.",
      icon: <Users className="w-5 h-5 text-[#10b981]" />
    },
    {
      title: "Customer Service Management",
      desc: "Case management, omnichannel support and digital customer experiences.",
      icon: <MessageSquare className="w-5 h-5 text-[#10b981]" />
    },
    {
      title: "Governance, Risk & Compliance",
      desc: "Risk management, policy automation and compliance tracking.",
      icon: <Shield className="w-5 h-5 text-[#10b981]" />
    },
    {
      title: "App Engine Development",
      desc: "Build low-code enterprise applications on ServiceNow.",
      icon: <Layout className="w-5 h-5 text-[#10b981]" />
    },
    {
      title: "Managed ServiceNow Operations",
      desc: "Platform monitoring, upgrades, administration and continuous improvement.",
      icon: <Zap className="w-5 h-5 text-[#10b981]" />
    }
  ];

  const solutionsList = [
    { title: "IT Service Management", desc: "Streamlined ticket resolution loops and modern self-service structures." },
    { title: "Enterprise Service Desk", desc: "Unified service channels crossing operations, facilities, and administration." },
    { title: "HR Service Delivery", desc: "Automated onboarding, benefits questions, and HR document management." },
    { title: "Customer Service Management", desc: "Omnichannel customer cases routed directly to resolving teams." },
    { title: "IT Operations", desc: "Real-time discovery maps, event correlation, and predictive service health." },
    { title: "Workflow Automation", desc: "Visual multi-departmental flow routing and task escalation rules." },
    { title: "Asset Management", desc: "Hardware lifecycle tracking and SaaS software license compliance dashboards." },
    { title: "Governance & Compliance", desc: "Automated policy reviews, risk registers, and integrated audit controls." }
  ];

  const workflowSteps = [
    { label: "Requestors", desc: "Employees, Customers, Partners", sub: "Generate requests via portal, chat, or API endpoints." },
    { label: "Access Layer", desc: "Self-Service Portal", sub: "Unified user interface for catalogs, knowledge, and chat support." },
    { label: "Catalog Layer", desc: "Service Catalog", sub: "Predefined request options, order guides, and forms parameters." },
    { label: "Orchestration", desc: "Workflow Engine", sub: "Executes conditional routing, SLAs, notifications, and script rules." },
    { label: "Execution Layer", desc: "Approvals, Automation & Integrations", sub: "Triggers manager approvals, automated bot steps, and API runs." },
    { label: "Service Domains", desc: "ITSM, HR, Finance & Security", sub: "Specific platform modules fulfilling tasks with secure operational logs." },
    { label: "Insight Layer", desc: "Analytics & Reporting", sub: "Looker-style dashboards showing queue delays, SLA achievements, and trends." }
  ];

  const whyUsList = [
    {
      title: "Workflow-First Approach",
      desc: "Automate repetitive work across departments."
    },
    {
      title: "Enterprise Integration",
      desc: "Connect ServiceNow with ERP, CRM and cloud platforms."
    },
    {
      title: "Low-Code Expertise",
      desc: "Build custom business applications quickly."
    },
    {
      title: "Faster Service Delivery",
      desc: "Reduce resolution times and improve productivity."
    },
    {
      title: "Governance & Compliance",
      desc: "Secure enterprise workflow management."
    },
    {
      title: "Continuous Platform Optimization",
      desc: "Ongoing improvements after implementation."
    }
  ];

  const outcomesList = [
    { value: "45%", label: "Faster Incident Resolution", desc: "Auto-routing tickets and automating incident resolution runbooks." },
    { value: "90%", label: "Improved Employee Experience", desc: "Self-service centers solving questions without raising support tickets." },
    { value: "50%", label: "Automated Enterprise Workflows", desc: "Removing manual handoffs between IT, HR, and finance pipelines." },
    { value: "35%", label: "Reduced Manual Operations", desc: "Executing automated password resets, system setups, and audits." },
    { value: "99.9%", label: "Higher Service Availability", desc: "Resolving event alerts before they impact business system tools." },
    { value: "100%", label: "Better Compliance Visibility", desc: "Continuous monitoring of security policies and risk compliance targets." }
  ];

  const platformExpertise = [
    {
      category: "ITSM",
      items: ["Incident Management", "Problem Management", "Change Management", "Knowledge Management", "CMDB Configurations"]
    },
    {
      category: "ITOM",
      items: ["Discovery Services", "Event Management", "Cloud Insights", "Service Mapping"]
    },
    {
      category: "HRSD",
      items: ["Employee Center", "HR Case Management", "Lifecycle Events"]
    },
    {
      category: "CSM",
      items: ["Customer Portal", "Case Management", "Field Service"]
    },
    {
      category: "GRC",
      items: ["Risk Assessment", "Audit Management", "Policy & Compliance"]
    },
    {
      category: "Creator Workflows",
      items: ["App Engine", "Integration Hub", "Automation Engine", "Flow Designer"]
    }
  ];

  const relatedPages = [
    { name: "Microsoft Ecosystem", desc: "Strategic Azure setups, Fabric integrations, and digital enterprise hubs.", href: "/ecosystem/partnerships/microsoft" },
    { name: "AWS Ecosystem", desc: "Amazon Web Services configurations, CI/CD code bases, and DevOps tools.", href: "/ecosystem/partnerships/aws" },
    { name: "Google Cloud Ecosystem", desc: "Next-gen GCP data warehousing and predictive AI models.", href: "/ecosystem/partnerships/google-cloud" },
    { name: "Oracle Ecosystem", desc: "Enterprise resource planning database modernizations and secure OCI architectures.", href: "/ecosystem/partnerships/oracle" },
    { name: "SAP Ecosystem", desc: "Enterprise resource planning, ERP migrations, and SCM modernizations.", href: "/ecosystem/partnerships/sap" },
    { name: "Cloud Services", desc: "Our core software delivery engineering stack, languages, and protocols.", href: "/ecosystem/technology-stack" },
    { name: "Managed Services", desc: "24/7 managed support operations, database tuning, and backup pipelines.", href: "/services/managed-operations" },
    { name: "IT Consulting", desc: "Strategic technology blueprints, security risk audits, and architecture design.", href: "/services/it-consulting" }
  ];

  const faqs = [
    {
      q: "What ServiceNow services does Devopstrio provide?",
      a: "We provide end-to-end services including strategic platform assessment, custom portal design, module implementations (ITSM, ITOM, HRSD, CSM, GRC), system integrations via Integration Hub, and managed support operations."
    },
    {
      q: "Can you implement ITSM?",
      a: "Yes. We implement and customize IT Service Management (ITSM), standardizing incident workflows, problem investigations, change approvals, request catalogs, and configuration database (CMDB) parameters."
    },
    {
      q: "Do you support HR workflows?",
      a: "Yes. We configure HR Service Delivery (HRSD), establishing unified Employee Center portals, automated onboarding/offboarding workflows, HR case tracking, and integration with HR systems like Workday."
    },
    {
      q: "Can ServiceNow integrate with SAP or Microsoft?",
      a: "Yes. We configure ServiceNow Integration Hub and REST integrations to safely pass records (e.g. ERP invoices, vendor details, AD profiles) between ServiceNow, SAP, and Microsoft platforms."
    },
    {
      q: "Do you provide managed ServiceNow support?",
      a: "Yes. We deliver post-implementation managed support covering regular upgrades, patch testing using ATF (Automated Test Framework), catalog adjustments, and performance tuning."
    },
    {
      q: "Can you build custom applications?",
      a: "Yes. Utilizing ServiceNow App Engine and Creator Workflows, we build low-code custom applications to automate specific, cross-departmental business workflows that standard SaaS applications don't cover."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      
      {/* 1. HERO SECTION WITH CALM EMERALD/GREEN SERVICENOW WAVE DESIGN */}
      <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        
        {/* Concentric Wave Elements in ServiceNow Emerald/Green Theme */}
        <div className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[85%] md:w-[65%] h-[130%] z-0 pointer-events-none select-none overflow-hidden flex items-center justify-end">
          <div className="relative w-full h-full flex items-center justify-end">
            <div className="absolute w-[200%] h-[160%] right-[-50%] rounded-[120px] md:rounded-[260px] border border-green-950/20 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[170%] h-[135%] right-[-40%] rounded-[110px] md:rounded-[230px] border border-emerald-500/10 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[140%] h-[110%] right-[-30%] rounded-[100px] md:rounded-[200px] border border-green-500/15 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[110%] h-[85%] right-[-20%] rounded-[90px] md:rounded-[170px] border border-emerald-600/15 rotate-[-28deg] pointer-events-none" />
            
            <div className="absolute w-[80%] h-[60%] right-[-10%] rounded-[80px] md:rounded-[140px] border border-green-500/20 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[50%] h-[35%] right-[0%] rounded-[70px] md:rounded-[110px] border border-emerald-500/25 rotate-[-28deg] pointer-events-none" />
            
            <div className="absolute right-[5%] w-[180px] h-[90px] bg-gradient-to-r from-emerald-600/15 via-green-600/10 to-teal-500/5 rounded-full blur-[50px] opacity-40 animate-pulse" />
          </div>
        </div>

        {/* Soft Ambient Light Theme Effect Gradients on Pitch-Black */}
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none select-none">
          <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-green-950/10 rounded-full blur-[110px]" />
          <div className="absolute bottom-[10%] right-[30%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px]" />
          <div className="absolute top-[35%] right-[0%] w-[250px] h-[250px] bg-teal-500/5 rounded-full blur-[90px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b2416_1px,transparent_1px),linear-gradient(to_bottom,#0b2416_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <Reveal className="mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                    Enterprise Workflow Partnership
                  </span>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                  ServiceNow <span className="text-[#10b981] whitespace-nowrap">Ecosystem</span>
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
                  Transform IT operations, automate enterprise workflows, and deliver seamless digital experiences through the ServiceNow platform and Devopstrio's implementation expertise.
                </p>
              </Reveal>

              {/* Hero Bullet Points Grid */}
              <Reveal delay={0.3} className="w-full mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {heroHighlights.map((pt, idx) => (
                    <div key={idx} className="flex gap-3 animate-fadeIn">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{pt.text}</h4>
                        <p className="text-[10px] text-zinc-450 font-semibold">{pt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
              
              {/* CTAs */}
              <Reveal delay={0.4} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:-translate-y-0.5"
                >
                  Talk to a ServiceNow Expert
                </Link>
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Workflow Solutions
                </a>
              </Reveal>
            </div>

            {/* Hero Right Visual (Logo Integration) */}
            <div className="lg:col-span-5 relative flex items-center justify-center select-none z-10">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                {/* Connecting glowing line and animation */}
                <div className="absolute inset-x-12 h-[2px] bg-gradient-to-r from-emerald-500/25 via-green-500/30 to-emerald-500/25 z-0 pointer-events-none">
                  {/* Energy Pulse */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_12px_#10b981] animate-ping" style={{ animationDuration: '3s' }} />
                </div>

                <div className="flex items-center justify-between w-full relative z-10 px-4">
                  
                  {/* Devopstrio Logo Card */}
                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-emerald-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-600 to-green-555 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img
                      src="/assets/logo/logo.png"
                      alt="Devopstrio Logo"
                      className="w-full h-auto max-h-[85%] object-contain select-none filter brightness-105"
                    />
                  </div>

                  {/* Plus Connector Indicator */}
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg relative z-20">
                    <Sparkles className="w-4 h-4 text-yellow-450 animate-pulse" />
                  </div>

                  {/* ServiceNow Logo Card */}
                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-emerald-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img
                      src="/assets/Tech_logos/ServiceNow.svg"
                      alt="ServiceNow Logo"
                      className="w-full h-auto max-h-[85%] object-contain select-none filter brightness-110"
                    />
                  </div>

                </div>

                {/* Outer concentric rings highlighting integration */}
                <div className="absolute w-[80%] h-[80%] rounded-full border border-zinc-900/40 pointer-events-none z-0" />
                <div className="absolute w-[95%] h-[95%] rounded-full border border-zinc-900/20 pointer-events-none z-0" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STICKY SECTION NAVBAR */}
      <SectionNavbar sections={servicenowSections} />

      {/* 2. PARTNERSHIP OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  ALLIANCE OVERVIEW
                </span>
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                  Modernizing Enterprise Workflows <span className="text-rose-500">with ServiceNow</span>
                </h2>
                <div className="space-y-4 text-zinc-300 text-sm md:text-base font-semibold leading-relaxed">
                  <p>
                    Organizations today require more than IT support—they need connected, intelligent workflows that improve productivity, reduce manual effort, and deliver exceptional employee and customer experiences.
                  </p>
                  <p>
                    Devopstrio helps organizations implement, customize, integrate, and optimize ServiceNow solutions to automate IT operations, enterprise services, governance, and digital workflows across the business.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Workflow Visual Mockup Card */}
            <div className="lg:col-span-7">
              <div className="p-8 bg-zinc-950/60 border border-zinc-900 rounded-3xl select-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/60" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/60" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                    Now Assist Workflow Engine
                  </div>
                </div>

                <div className="space-y-4 font-mono text-[10px] md:text-xs">
                  <div className="p-4 bg-zinc-900/50 border border-zinc-850 rounded-xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-white font-bold">Trigger:</span>
                      <span className="text-zinc-450">New Employee Hired (Workday Event)</span>
                    </div>
                    <span className="text-zinc-500 text-[10px] font-bold">08:00 AM</span>
                  </div>

                  <div className="pl-6 border-l border-zinc-800 space-y-4">
                    <div className="p-4 bg-zinc-900/50 border border-zinc-850 rounded-xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-white font-bold">ITSD Step:</span>
                        <span className="text-zinc-450">Provision AD Profile & Mailbox</span>
                      </div>
                      <span className="text-emerald-500 text-[10px] font-bold">COMPLETED</span>
                    </div>

                    <div className="p-4 bg-zinc-900/50 border border-zinc-850 rounded-xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-white font-bold">Asset Step:</span>
                        <span className="text-zinc-450">Allocate Macbook & Ship to Location</span>
                      </div>
                      <span className="text-emerald-500 text-[10px] font-bold">SHIPPED</span>
                    </div>

                    <div className="p-4 bg-zinc-900/30 border border-zinc-900/60 rounded-xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-yellow-500/50 border-t-transparent animate-spin" />
                        <span className="text-white font-bold">HRSD Step:</span>
                        <span className="text-zinc-550">Assign Safety & Policy Modules</span>
                      </div>
                      <span className="text-yellow-500 text-[10px] font-bold">PENDING APPROVAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES */}
      <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              OUR SERVICE CAPABILITIES
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Our ServiceNow <span className="text-rose-500">Capabilities</span>
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-semibold">
              Comprehensive expertise to architect, configure, and manage business-critical ServiceNow workflows.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilitiesList.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/5 flex items-center justify-center mb-6 text-rose-500">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-2 leading-snug">{cap.title}</h3>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS WE DELIVER */}
      <section id="solutions" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PLATFORM WORKLOADS
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Enterprise Solutions Powered by <span className="text-rose-500">ServiceNow</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsList.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2">{sol.title}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WORKFLOW ARCHITECTURE */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              WORKFLOW PIPELINE DESIGN
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Enterprise Workflow <span className="text-rose-500">Architecture</span>
            </h2>
            <p className="text-zinc-350 text-sm md:text-base font-semibold">
              Visual layer representation of how requests flow from triggers to automation scripts, ERP databases, and analytics logs.
            </p>
          </Reveal>

          {/* Vertical Workflow Steps Layout */}
          <div className="max-w-3xl mx-auto flex flex-col gap-4 relative z-10">
            {/* Connection Line */}
            <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500/20 via-rose-500/30 to-green-500/20 z-0 hidden md:block" />

            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col md:flex-row items-center md:justify-between p-5 bg-zinc-950/70 border border-zinc-900 hover:border-zinc-800 rounded-2xl transition-all duration-300 gap-4"
              >
                <div className="flex items-center gap-4 w-full md:w-1/2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center font-mono text-xs font-bold text-rose-500 shadow-md">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block font-bold">{step.label}</span>
                    <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{step.desc}</h4>
                  </div>
                </div>
                <div className="w-full md:w-1/2 text-left md:text-right">
                  <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-normal">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS USE CASES */}
      <section id="use-cases" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              REAL-WORLD DOMAINS
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Transforming Enterprise <span className="text-rose-500">Operations</span>
            </h2>
          </Reveal>

          {/* 8 Business Use Case Grid cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { domain: "IT", caseName: "Automated Incident Resolution", desc: "Correlating monitoring alerts and triggering auto-restarts of application pods on cloud clusters." },
              { domain: "HR", caseName: "Employee Onboarding", desc: "Setting up payroll profiles, contract signature logs, and workplace equipment allocations on day one." },
              { domain: "Facilities", caseName: "Workspace Requests", desc: "Routing desk allocations, swipe card access forms, and meeting room repairs to correct teams." },
              { domain: "Finance", caseName: "Approval Workflows", desc: "Enforcing purchase thresholds, matching invoices, and updating general ledgers via ERP integration." },
              { domain: "Security", caseName: "Incident Response", desc: "Isolating infected server endpoints automatically when firewalls detect telemetry threats." },
              { domain: "Customer Service", caseName: "Digital Support Portal", desc: "Providing multi-channel client portals with automated ticket escalations and support SLAs." },
              { domain: "Procurement", caseName: "Vendor Requests", desc: "Streamlining partner screening, NDAs signing loops, and contract catalog renewals with audit logs." },
              { domain: "Enterprise Operations", caseName: "Cross-department Automation", desc: "Linking workflows crossing IT, Legal, Security, and Facility teams under single request panels." }
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl flex flex-col justify-between hover:border-rose-500/20 transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-1 font-bold">{useCase.domain}</span>
                  <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-zinc-900 pb-3">{useCase.caseName}</h3>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SERVICENOW PRODUCTS / PLATFORM MODULES */}
      <section id="products" className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PLATFORM PORTFOLIO
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              ServiceNow Platform <span className="text-rose-500">Expertise</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 select-none">
            {platformExpertise.map((techGroup, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-350"
              >
                <h4 className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-4 border-b border-zinc-900/80 pb-2">
                  {techGroup.category}
                </h4>
                <div className="flex flex-col gap-2">
                  {techGroup.items.map((item) => (
                    <div 
                      key={item} 
                      className="px-3 py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-[10px] font-mono text-zinc-350 font-bold hover:text-white transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY SERVICENOW + DEVOPSTRIO */}
      <section id="why-us" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PARTNERSHIP ADVANTAGES
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Why Organizations Choose Devopstrio for <span className="text-rose-500">ServiceNow</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsList.map((card, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-4 leading-snug">{card.title}</h4>
                  <p className="text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BUSINESS OUTCOMES */}
      <section id="outcomes" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MEASURED VALUE
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Business Value <span className="text-rose-500">Delivered</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-none">
            {outcomesList.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 text-left group"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest leading-snug font-bold mb-3">
                  {stat.label}
                </div>
                <p className="text-[11px] text-zinc-500 font-bold leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. RELATED ECOSYSTEM PAGES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Related Ecosystem <span className="text-rose-500">Connections</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[160px]"
              >
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                    {partner.name}
                    <ChevronRight className="w-4 h-4 text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                  </h4>
                  <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section id="faq" className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left sticky top-28">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  QUESTIONS & RESPONSES
                </span>
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our ServiceNow workflow automation, modules implementation, and integrations.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col gap-4 select-none">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/10 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white uppercase tracking-wider"
                      >
                        {faq.q}
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-550 transition-transform duration-300 flex-shrink-0 ${
                            isOpen ? "rotate-180 text-rose-500" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-[250px] border-t border-zinc-900/60" : "max-h-0"
                        }`}
                      >
                        <p className="p-6 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 flex flex-col items-center">

          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              WORKFLOW TRANSFORMATION
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to Modernize Enterprise Workflows?
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Partner with Devopstrio to automate IT services, employee experiences, governance processes, and digital operations with the ServiceNow platform.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to a ServiceNow Expert
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your Transformation
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
