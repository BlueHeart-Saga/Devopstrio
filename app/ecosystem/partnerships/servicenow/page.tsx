"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { FAQ } from "@/components/ecosystem/FAQ";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";
import { HeroParticleCanvas } from "@/components/ecosystem/HeroParticleCanvas";
import { VendorServicesMarquee } from "@/sections/ecosystem/partnerships/VendorServicesMarquee";
import {
  ArrowRight,
  Check,
  Clock,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gauge,
  Layers,
  Lock,
  Plus,
  Repeat2,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================================
   ASSETS
   ========================================================================= */
const IMG = "/webp/assets/azure-cloud";
const AI_IMG = "/ai/servicenow-partnership";

/* =========================================================================
   SHARED CONSTANTS & STYLES
   ========================================================================= */
const ROSE = "#F43F5E";
const EMERALD = "#10B981";
const wrap = "mx-auto w-full max-w-[1280px] px-6 sm:px-8";
const h2 = "text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white";
const lead = "text-[16px] sm:text-[18px] leading-[28px] text-zinc-400";

/* =========================================================================
   REVEAL ON SCROLL HELPER
   ========================================================================= */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        on
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0"
      } ${className}`}
      data-in={on}
    >
      {children}
    </div>
  );
}

function Head({
  title,
  body,
  center,
  subtitle,
}: {
  title: ReactNode;
  body?: string;
  center?: boolean;
  subtitle?: string;
}) {
  return (
    <div className={center ? "mx-auto max-w-[820px] text-center" : "max-w-[820px]"}>
      {subtitle && (
        <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
          {subtitle}
        </span>
      )}
      <h2 className={h2}>{title}</h2>
    </div>
  );
}

function Button({
  href,
  children,
  ghost,
}: {
  href: string;
  children: ReactNode;
  ghost?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg px-7 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
        ghost
          ? "border border-zinc-800 bg-zinc-950/70 text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
          : "bg-gradient-to-r from-red-600 to-rose-500 text-white hover:from-red-500 hover:to-rose-400 hover:shadow-[0_0_28px_rgba(225,29,72,0.4)]"
      }`}
    >
      {children}
    </Link>
  );
}

/* =========================================================================
   1. HERO SECTION: SERVICENOW ECOSYSTEM HERO
   ========================================================================= */
const DEVOPSTRIO_LOGO_SRC = "/webp/assets/logo/logo.webp";
const SERVICENOW_LOGO_SRC = "/assets/Home-page/partners/servicenow.svg";

function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden bg-black text-white pt-24 pb-16 lg:py-28 border-b border-zinc-900/60">
      <style>{`
        /* Partnership Connector Rail - Bounded, stops cleanly before ServiceNow logo */
        @keyframes connectorTravel {
          0% {
            left: 0px;
            opacity: 0;
            transform: translateY(-50%) scale(0.5);
          }
          15% {
            opacity: 1;
            transform: translateY(-50%) scale(1.15);
          }
          80% {
            opacity: 1;
            transform: translateY(-50%) scale(1.15);
          }
          96% {
            left: calc(100% - 14px);
            opacity: 0.8;
            transform: translateY(-50%) scale(0.9);
          }
          100% {
            left: calc(100% - 12px);
            opacity: 0;
            transform: translateY(-50%) scale(0.4);
          }
        }

        @keyframes laserBeam {
          0% {
            left: 0px;
            width: 16px;
            opacity: 0;
          }
          20% {
            opacity: 1;
            width: 70px;
          }
          75% {
            opacity: 1;
            width: 70px;
          }
          95% {
            left: calc(100% - 70px);
            width: 60px;
            opacity: 0.7;
          }
          100% {
            left: calc(100% - 30px);
            width: 25px;
            opacity: 0;
          }
        }

        .connector-node {
          animation: connectorTravel 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .connector-laser {
          animation: laserBeam 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .connector-node, .connector-laser {
            animation: none !important;
          }
        }
      `}</style>

      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12">
        {/* Left Column Content */}
        <div className="min-w-0">
          <span className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            ServiceNow Elite Partner
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">ServiceNow</span>
            <span className="block bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
            Autonomous ITSM/ITOM modernization, Now Assist GenAI workflows, and cross-platform enterprise integration mesh powered by ServiceNow.
          </p>

          {/* Partnership connector row */}
          <div className="mt-12 flex items-center gap-3 sm:gap-5 pt-8 border-t border-zinc-900/80">
            {/* Devopstrio Logo Card */}
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-zinc-950/90 p-3 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-rose-500/50 hover:shadow-[0_0_25px_rgba(244,63,94,0.25)] transition-all duration-300">
              <img src={DEVOPSTRIO_LOGO_SRC} alt="Devopstrio" className="h-full w-full object-contain" />
            </div>

            {/* Connecting Track with bounded laser tracer and travelling pulse node */}
            <div className="relative h-2 w-32 sm:w-52 flex-none flex items-center overflow-hidden">
              {/* Base rail track */}
              <div className="w-full h-0.5 bg-gradient-to-r from-rose-500/50 via-zinc-700/40 to-emerald-500/50 rounded-full" />
              
              {/* Laser tracer beam bounded along line */}
              <div className="connector-laser absolute inset-y-0 h-1 rounded-full bg-gradient-to-r from-transparent via-rose-500 to-transparent blur-[1px]" />
              
              {/* Energy pulse particle stopping cleanly before ServiceNow card */}
              <div className="connector-node absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_16px_5px_rgba(244,63,94,0.9)]" />
            </div>

            {/* ServiceNow Logo Card */}
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-zinc-950/90 p-3 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(41,144,114,0.25)] transition-all duration-300">
              <img
                src={SERVICENOW_LOGO_SRC}
                alt="ServiceNow"
                className="h-full w-full object-contain filter drop-shadow-[0_2px_8px_rgba(41,144,114,0.35)]"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Algoscale-style 3D Particle Field Canvas */}
        <div className="hidden lg:block">
          <HeroParticleCanvas />
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   2. WHY DEVOPSTRIO + SERVICENOW (3D Automation Hub)
   ========================================================================= */
const reasons = [
  {
    Icon: ShieldCheck,
    t: "Unified Cross-Cloud CMDB Governance",
    d: "Automated agentless discovery mapping dependencies across AWS, Azure, on-premises datacenters, and microservices into a single system of record.",
  },
  {
    Icon: Workflow,
    t: "Autonomous Incident Remediation",
    d: "AI-driven event management that suppresses noise, correlates root causes, and executes automated remediation playbooks to reduce MTTR by up to 60%.",
  },
  {
    Icon: Repeat2,
    t: "Turnkey Enterprise Integration Fabric",
    d: "Production REST, Kafka, and webhook pipelines linking ServiceNow with SAP, Salesforce, Jira, and enterprise CI/CD toolchains seamlessly.",
  },
];

function Why() {
  return (
    <section className="py-24 lg:py-32 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-12 lg:gap-16`}>
        {/* Left Visual: The Devopstrio Advantage */}
        <Reveal className="lg:col-span-6 relative justify-self-center w-full flex items-center justify-center">
          <Image
            src="/webp/assets/partnerships/servicenow/the-devopstrio-advantage.webp"
            alt="The Devopstrio Advantage"
            width={1764}
            height={1863}
            className="h-auto w-full max-w-[540px] object-contain rounded-2xl"
            priority
          />
        </Reveal>

        {/* Right Content */}
        <div className="lg:col-span-6">
          <Reveal>
            <Head
              subtitle="THE DEVOPSTRIO ADVANTAGE"
              title="The Devopstrio Advantage"
              body="ServiceNow is the intelligent operating system for modern digital enterprise workflows. Devopstrio structures the configuration, automates the service pipelines, and ensures your IT operations run with maximum efficiency and continuous audit compliance."
            />
          </Reveal>
          <div className="mt-8 space-y-4">
            {reasons.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="flex gap-4 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 hover:border-rose-500/30 hover:bg-zinc-900/30 transition-all duration-300 group">
                  <div className="flex-shrink-0 grid h-11 w-11 place-items-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors duration-300 group-hover:border-rose-500/40 group-hover:bg-rose-500/10">
                    <Icon size={20} color={ROSE} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white group-hover:text-rose-400 transition-colors">
                      {t}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[23px] text-zinc-400">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. SERVICES ("Everything you need to run on ServiceNow")
   ========================================================================= */
const services = [
  {
    badge: "SERVICE DESK",
    Icon: Cloud,
    t: "ITSM Pro & Service Portals",
    d: "Intelligent incident routing, change advisory automation, self-service portals, and predictive SLA tracking.",
  },
  {
    badge: "OPERATIONS",
    Icon: Repeat2,
    t: "ITOM & Cloud Discovery",
    d: "Autonomous service mapping, cloud discovery across AWS/Azure, event correlation, and automated alert noise reduction.",
  },
  {
    badge: "PORTFOLIO",
    Icon: Code2,
    t: "Strategic Portfolio (SPM)",
    d: "Enterprise demand intake, project financial tracking, agile release trains, and alignment with corporate strategy.",
  },
  {
    badge: "GENAI & COPILOT",
    Icon: Database,
    t: "Now Assist & Virtual Agents",
    d: "Generative AI conversational virtual agents, automated case summarization, and intelligent knowledge article drafting.",
  },
  {
    badge: "GOVERNANCE",
    Icon: ShieldCheck,
    t: "SecOps & GRC / Risk Management",
    d: "Vulnerability response orchestration, security incident handling, continuous regulatory auditing, and vendor risk assessments.",
  },
  {
    badge: "CUSTOM APPS",
    Icon: Gauge,
    t: "App Engine & Workflow Fabric",
    d: "Custom enterprise low-code applications, Flow Designer automation, and bi-directional integration spokes for SAP and Workday.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-black border-b border-zinc-900/60">
      <div className={wrap}>
        <Reveal>
          <Head
            subtitle="CORE CAPABILITIES"
            title="ServiceNow Workflow Capabilities"
            body="Six core engineering disciplines covering your complete lifecycle—from initial platform blueprint to continuous enterprise optimization."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ badge, Icon, t, d }, i) => (
            <Reveal key={t} delay={(i % 3) * 90}>
              <article className="group relative h-full rounded-2xl border border-zinc-800/80 bg-[#0D0E12] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(244,63,94,0.45)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors duration-300 group-hover:bg-[rgba(244,63,94,0.14)] group-hover:border-rose-500/30">
                    <Icon size={22} color={ROSE} />
                  </span>
                  <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-zinc-500 group-hover:text-rose-400 transition-colors">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-6 text-[19px] font-bold text-white group-hover:text-rose-400 transition-colors">
                  {t}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[24px] text-zinc-400">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4. EXTRA SECTION: ENTERPRISE ARCHITECTURE & COLLABORATION STACK
   ========================================================================= */
const transformationMetrics = [
  {
    icon: TrendingDown,
    value: "60%",
    label: "Reduction in MTTR",
    desc: "Through AI event correlation & autonomous remediation playbooks",
  },
  {
    icon: ShieldCheck,
    value: "95%",
    label: "CMDB Health & Accuracy",
    desc: "Continuous automated discovery across multi-cloud infrastructure",
  },
  {
    icon: Rocket,
    value: "4× Faster",
    label: "Employee Service Delivery",
    desc: "Self-service virtual agents & Now Assist automated workflows",
  },
  {
    icon: Clock,
    value: "100%",
    label: "Audit & Compliance Health",
    desc: "Automated regulatory reporting and continuous posture tracking",
  },
];

const architecturePillars = [
  {
    icon: Layers,
    title: "Autonomous ITOM & Service Mapping",
    desc: "Dynamic application service topologies, pattern-based discovery, and ML alert noise reduction down to core root causes.",
    tag: "ITOM & CSDM 4.0",
  },
  {
    icon: Server,
    title: "Enterprise Multi-Cloud CMDB",
    desc: "Unified single pane of glass synchronizing assets, relationships, and dependencies across AWS, Azure, and private datacenters.",
    tag: "Automated Discovery",
  },
  {
    icon: Cpu,
    title: "Now Assist & GenAI Virtual Agents",
    desc: "Domain-trained generative AI virtual agents capable of deflecting 40%+ of level-1 tickets with human-like accuracy.",
    tag: "Generative AI Copilots",
  },
  {
    icon: Lock,
    title: "SecOps & Integrated Risk (GRC)",
    desc: "Automated vulnerability prioritization, security incident response orchestration, and ISO 27001/SOC 2 compliance tracking.",
    tag: "SOC 2 & ISO 27001",
  },
];

function TransformationStack() {
  return (
    <section className="py-24 lg:py-32 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-1/3 h-[500px] w-[500px] rounded-full blur-[120px] opacity-25"
        style={{ background: "radial-gradient(circle, #10B981, transparent 70%)" }}
      />

      <div className={wrap}>
        {/* Section Header */}
        <Reveal>
          <Head
            subtitle="ENTERPRISE MODERNIZATION STACK"
            title="Enterprise Modernization Stack"
            body="Devopstrio couples ServiceNow Certified Master Architects with turnkey workflow accelerators to de-risk platform rollouts and deliver measurable enterprise business impact."
          />
        </Reveal>

        {/* Showcase Grid: 3D Collaboration Graphic + Architecture Pillars */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Enterprise Modernization Stack */}
          <Reveal delay={150} className="lg:col-span-6 relative flex items-center justify-center">
            <Image
              src="/webp/assets/partnerships/servicenow/enterprise-modernization-stack.webp"
              alt="Enterprise Modernization Stack"
              width={1842}
              height={1842}
              className="h-auto w-full max-w-[540px] object-contain rounded-2xl"
            />
          </Reveal>

          {/* Right Column: 4 Architecture Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {architecturePillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="rounded-xl border border-zinc-800/80 bg-[#0D0E12] p-5 transition-all duration-300 hover:border-rose-500/40 hover:bg-zinc-900/50 flex gap-4 items-start group">
                    <div className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-lg bg-zinc-900 border border-zinc-800 text-rose-400 group-hover:border-rose-500/30 group-hover:bg-rose-500/10 transition-colors">
                      <Icon size={19} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-[16px] font-bold text-white group-hover:text-rose-400 transition-colors">
                          {p.title}
                        </h4>
                        <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                          {p.tag}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] leading-[22px] text-zinc-400">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   5. HOW WE WORK (Step-by-step roadmap)
   ========================================================================= */
const steps = [
  {
    step: "PHASE 01",
    t: "Discover & CSDM Assessment",
    d: "We evaluate your current ticketing landscape, configuration items, and integrations against Common Service Data Model (CSDM 4.0).",
  },
  {
    step: "PHASE 02",
    t: "Architect & Blueprint",
    d: "We design target workflow flows, service mapping rules, CMDB class hierarchies, and custom integration spokes.",
  },
  {
    step: "PHASE 03",
    t: "Configure & Automate",
    d: "We configure ITSM/ITOM modules, train virtual agent models, and run automated regression testing suites with zero data loss.",
  },
  {
    step: "PHASE 04",
    t: "Operate & Scale",
    d: "Our 24×7 platform operations team manages instance health, release upgrades, store application patches, and KPI telemetry.",
  },
];

function Process() {
  return (
    <section className="py-24 lg:py-32 bg-black border-b border-zinc-900/60">
      <div className={wrap}>
        <Reveal>
          <Head
            subtitle="DELIVERY METHODOLOGY"
            title="Proven Delivery Methodology"
            body="Our 4-phase structured engagement model ensures complete visibility, minimal risk, and accelerated time-to-value."
          />
        </Reveal>
        <Reveal className="mt-16">
          <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
            <span
              aria-hidden
              className="absolute left-0 right-0 top-[20px] hidden h-[2px] origin-left bg-gradient-to-r from-red-600 via-rose-500 to-transparent md:block"
            />
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-rose-500/60 bg-black text-[14px] font-bold text-rose-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  {i + 1}
                </span>
                <span className="mt-4 block text-[10px] font-mono font-semibold tracking-wider text-rose-400">
                  {s.step}
                </span>
                <h3 className="mt-2 text-[18px] font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-[14px] leading-[24px] text-zinc-400">{s.d}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   6. INDUSTRIES
   ========================================================================= */
const industries = [
  {
    n: "healthcare",
    tag: "Clinical Workflows & EHR",
    t: "Healthcare & Life Sciences",
    d: "Clinical device maintenance tracking, nurse call dispatch automation, patient request routing, and HIPAA compliance audits.",
  },
  {
    n: "manufacturing",
    tag: "OT Management & Shopfloor",
    t: "Industrial & Manufacturing",
    d: "Operational Technology (OT) asset discovery, plant maintenance dispatching, safety incident management, and supplier triage.",
  },
  {
    n: "retail",
    tag: "Store Ops & POS Dispatch",
    t: "Retail & Consumer Services",
    d: "Store asset lifecycle automation, high-velocity POS hardware incident routing, and centralized multi-store employee onboarding.",
  },
  {
    n: "education",
    tag: "FSO & SOX Compliance",
    t: "Financial Services Operations",
    d: "Automated account opening, dispute resolution workflows, SOX compliance audit tracking, and centralized Vendor Risk Management.",
  },
];

function TransformationMetricsSection() {
  return (
    <section className="py-14 sm:py-16 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className={wrap}>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {transformationMetrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl sm:rounded-3xl border border-zinc-800/80 bg-zinc-950/70 hover:bg-zinc-900/40 hover:border-rose-500/40 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col justify-between min-h-[190px] text-left"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-rose-400 transition-colors">
                      {m.value}
                    </span>
                    <div className="flex items-center gap-2">
                      <Icon size={18} className="text-zinc-500 group-hover:text-rose-400 transition-colors" />
                      <div className="w-2 h-2 rounded-full bg-rose-500/80 group-hover:animate-ping" />
                    </div>
                  </div>
                  <div>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mb-3 group-hover:w-20 transition-all duration-500" />
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200 group-hover:text-white transition-colors mb-1.5">
                      {m.label}
                    </div>
                    <p className="text-[12px] sm:text-[13px] text-zinc-400 leading-relaxed font-normal">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="py-24 lg:py-32 bg-[#030303] border-b border-zinc-900/60">
      <div className={wrap}>
        <Reveal>
          <Head
            subtitle="INDUSTRY SPECIALIZATIONS"
            title="Industry Specializations"
            body="Every vertical operates under unique constraints. We shape the architecture, data residency, and security controls around yours."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((c, i) => (
            <Reveal key={c.n} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0D0E12] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(16,185,129,0.45)] hover:shadow-xl">
                <div className="overflow-hidden relative">
                  <Image
                    src={`${IMG}/${c.n}.webp`}
                    alt={c.t}
                    width={512}
                    height={279}
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-mono text-zinc-300 border border-white/10 backdrop-blur-sm">
                    {c.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[18px] font-bold text-white group-hover:text-rose-400 transition-colors">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[22px] text-zinc-400">{c.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   7. FAQ
   ========================================================================= */
const faqs = [
  {
    q: "What ServiceNow product suites does Devopstrio implement and manage?",
    a: "We support the entire Now Platform suite, including IT Service Management (ITSM Pro), IT Operations Management (ITOM), Strategic Portfolio Management (SPM), Security Operations (SecOps), Governance, Risk & Compliance (GRC/IRM), and App Engine low-code development.",
  },
  {
    q: "How does Devopstrio ensure high CMDB data accuracy and health?",
    a: "We adhere to the Common Service Data Model (CSDM 4.0), deploying automated multi-cloud Discovery and Service Graph Connectors with continuous reconciliation rules to achieve 95%+ CMDB health scores.",
  },
  {
    q: "Can you help migrate our legacy ticketing system (Jira, Zendesk, Remedy) to ServiceNow?",
    a: "Yes. We design structured data extraction, schema mapping, historical ticket archiving, and phased cutover roadmaps to migrate enterprise service desks to ServiceNow with zero downtime.",
  },
  {
    q: "How does Now Assist and generative AI work within ServiceNow workflows?",
    a: "Now Assist leverages secure enterprise LLMs to summarize incident histories, draft resolution notes, generate code for Flow Designer, and power conversational virtual agents that deflect up to 40% of routine service requests.",
  },
  {
    q: "Can ServiceNow integrate with our existing ERP, CRM, and cloud platforms?",
    a: "Yes. Using IntegrationHub, pre-built ServiceNow spokes, and custom REST/GraphQL endpoints, we connect ServiceNow bi-directionally with SAP, Salesforce, AWS, Azure, Microsoft Teams, and CI/CD pipelines.",
  },
  {
    q: "Do you provide ongoing managed administration and platform upgrades?",
    a: "Yes. Our ServiceNow managed services team provides continuous incident triage, catalog item creation, flow optimizations, and seamless semi-annual version upgrade testing (Automated Test Framework).",
  },
];


/* =========================================================================
   PAGE ROOT
   ========================================================================= */
export default function ServiceNowPartnershipPage() {
  return (
    <main className="overflow-x-clip bg-black font-sans text-white">
      <Hero />
      <VendorServicesMarquee vendor="servicenow" />
      <Why />
      <Services />
      <TransformationMetricsSection />
      <TransformationStack />
      <Process />
      <Industries />
      <FAQ faqs={faqs} />
      <RepresentativeCTA
        title="Ready To Modernize Your Enterprise With"
        highlightText="ServiceNow Workflows?"
        description="Connect directly with our ServiceNow Certified Master Architects. We will evaluate your workflow landscape, benchmark your CMDB health against CSDM 4.0, and formulate an accelerated digital transformation roadmap."
        primaryBtnText="TALK TO A SERVICENOW ARCHITECT"
        primaryBtnHref="/contact#contact-form"
        secondaryBtnText="EXPLORE ALL SERVICES"
        secondaryBtnHref="/services"
        theme="rose"
      />
    </main>
  );
}
