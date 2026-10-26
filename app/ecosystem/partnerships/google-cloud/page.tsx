"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { FAQ } from "@/components/ecosystem/FAQ";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";
import { HeroParticleCanvas } from "@/components/ecosystem/HeroParticleCanvas";
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
const AI_IMG = "/ai/gcp-partnership";

/* =========================================================================
   SHARED CONSTANTS & STYLES
   ========================================================================= */
const ROSE = "#F43F5E";
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
   1. HERO SECTION: GOOGLE CLOUD ECOSYSTEM HERO
   ========================================================================= */
const DEVOPSTRIO_LOGO_SRC = "/webp/assets/logo/logo.webp";
const GCP_LOGO_SRC = "/assets/Tech_logos/Google_Cloud.svg";

function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden bg-black text-white pt-24 pb-16 lg:py-28 border-b border-zinc-900/60">
      <style>{`
        /* Partnership Connector Rail - Bounded, stops cleanly before Google Cloud logo */
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
            Google Cloud Premier Partner
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">Google Cloud</span>
            <span className="block bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
            Co-engineered enterprise cloud architectures, high-performance GKE modernizations, and BigQuery & Vertex AI sovereign intelligence powered by Google Cloud.
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
              <div className="w-full h-0.5 bg-gradient-to-r from-rose-500/50 via-zinc-700/40 to-blue-500/50 rounded-full" />
              
              {/* Laser tracer beam bounded along line */}
              <div className="connector-laser absolute inset-y-0 h-1 rounded-full bg-gradient-to-r from-transparent via-rose-500 to-transparent blur-[1px]" />
              
              {/* Energy pulse particle stopping cleanly before GCP card */}
              <div className="connector-node absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_16px_5px_rgba(244,63,94,0.9)]" />
            </div>

            {/* Google Cloud Logo Card */}
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-zinc-950/90 p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(66,133,244,0.25)] transition-all duration-300">
              <img
                src={GCP_LOGO_SRC}
                alt="Google Cloud"
                className="h-full w-full object-contain filter drop-shadow-[0_2px_8px_rgba(66,133,244,0.35)]"
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
   2. WHY DEVOPSTRIO + GCP (3D Infrastructure Hub)
   ========================================================================= */
const reasons = [
  {
    Icon: ShieldCheck,
    t: "AI & Data-First Engineering",
    d: "Native integration with BigQuery, Vertex AI, and Looker, engineered to extract actionable intelligence from petabyte-scale data lakes.",
  },
  {
    Icon: Workflow,
    t: "Production Kubernetes (GKE) Mastery",
    d: "Automated GKE Autopilot provisioning, Istio service mesh routing, and Cloud Build GitOps pipelines for hyper-scalable microservices.",
  },
  {
    Icon: Repeat2,
    t: "24×7 SRE & Committed Use FinOps",
    d: "Continuous platform reliability, Cloud Monitoring telemetry, incident response, and active Committed Use Discount (CUD) optimization.",
  },
];

function Why() {
  return (
    <section className="py-24 lg:py-32 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-12 lg:gap-16`}>
        {/* Left Visual: The Devopstrio Advantage */}
        <Reveal className="lg:col-span-6 relative justify-self-center w-full flex items-center justify-center">
          <Image
            src="/webp/assets/partnerships/google-cloud/the-devopstrio-advantage.webp"
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
              body="Google Cloud leads the industry in data analytics, container orchestration, and foundational AI models. Devopstrio structures the architecture, automates the governance, and ensures your workloads run reliably at lowest total operational cost."
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
   3. SERVICES ("Everything you need to run on Google Cloud")
   ========================================================================= */
const services = [
  {
    badge: "FOUNDATIONS",
    Icon: Cloud,
    t: "Resource Topologies & VPCs",
    d: "Multi-tenant Google Cloud Resource Manager hierarchies, Shared VPC networks, Cloud Interconnect, and centralized Cloud IAM.",
  },
  {
    badge: "MIGRATION",
    Icon: Repeat2,
    t: "Migration & Database Refactoring",
    d: "Structured migrations of VMware, bare metal, Oracle, and MySQL workloads to Cloud SQL, AlloyDB, and Cloud Spanner.",
  },
  {
    badge: "CONTAINERS",
    Icon: Code2,
    t: "GKE, Cloud Run & Anthos",
    d: "Enterprise Google Kubernetes Engine (GKE Autopilot), Cloud Run serverless microservices, and hybrid mesh with Google Anthos.",
  },
  {
    badge: "DATA & AI",
    Icon: Database,
    t: "BigQuery & Vertex AI Platform",
    d: "Petabyte-scale BigQuery data warehouses, Dataflow stream processing, Dataproc Spark clusters, and Gemini AI copilots on Vertex AI.",
  },
  {
    badge: "CYBER DEFENSE",
    Icon: ShieldCheck,
    t: "BeyondCorp Zero-Trust & Cloud Armor",
    d: "DDoS mitigation with Cloud Armor, VPC Service Controls, Security Command Center Premium, and ISO/SOC compliance.",
  },
  {
    badge: "FINOPS",
    Icon: Gauge,
    t: "FinOps & Cost Governance",
    d: "Active Committed Use Discounts (CUDs), sustained use savings, custom VM right-sizing, and automated idle resource termination.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-black border-b border-zinc-900/60">
      <div className={wrap}>
        <Reveal>
          <Head
            subtitle="CORE CAPABILITIES"
            title="Google Cloud Platform Capabilities"
            body="Six core engineering disciplines covering your complete lifecycle—from initial landing zone blueprint to production 24×7 operations."
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
    value: "50%",
    label: "Faster Query Performance",
    desc: "Through BigQuery partitioning, clustering & BI Engine acceleration",
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    label: "High-Availability SLA",
    desc: "Multi-region resilient GKE clusters and Cloud Spanner globally",
  },
  {
    icon: Rocket,
    value: "3.5× Faster",
    label: "Release Cadence",
    desc: "Automated CI/CD with Cloud Build, Artifact Registry & GitOps",
  },
  {
    icon: Clock,
    value: "24×7",
    label: "Managed SRE Support",
    desc: "Follow-the-sun monitoring, telemetry & incident triage",
  },
];

const architecturePillars = [
  {
    icon: Layers,
    title: "Google Cloud Enterprise Landing Zones",
    desc: "Hierarchical resource structures, automated folder vending, organizational guardrails, and centralized audit logging.",
    tag: "Terraform & Config Connector",
  },
  {
    icon: Server,
    title: "GKE Autopilot & Cloud Run",
    desc: "Hands-off Kubernetes cluster management, automatic security patching, fine-grained node scaling, and zero-idle cost microservices.",
    tag: "GKE & Cloud Run",
  },
  {
    icon: Cpu,
    title: "Vertex AI & Gemini Foundation Models",
    desc: "Enterprise data grounding, private VPC Service Controls, model tuning, and production MLOps pipelines with Kubeflow.",
    tag: "Gemini & Vertex AI",
  },
  {
    icon: Lock,
    title: "BeyondCorp Zero-Trust & Cloud Armor",
    desc: "Context-aware access policies, web application firewall rules, automated DDoS mitigation, and Security Command Center monitoring.",
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
        style={{ background: "radial-gradient(circle, #4285F4, transparent 70%)" }}
      />

      <div className={wrap}>
        {/* Section Header */}
        <Reveal>
          <Head
            subtitle="ENTERPRISE MODERNIZATION STACK"
            title="Enterprise Modernization Stack"
            body="Devopstrio couples Google Cloud Certified Professional Architects with turnkey automation accelerators to de-risk migrations and deliver measurable enterprise business impact."
          />
        </Reveal>

        {/* Showcase Grid: 3D Collaboration Graphic + Architecture Pillars */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Enterprise Modernization Stack */}
          <Reveal delay={150} className="lg:col-span-6 relative flex items-center justify-center">
            <Image
              src="/webp/assets/partnerships/google-cloud/enterprise-modernization-stack.webp"
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
                    <div className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-lg bg-zinc-900 border border-zinc-800 text-rose-500 group-hover:border-rose-500/30 group-hover:bg-rose-500/10 transition-colors">
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
    t: "Discover & Assess",
    d: "We evaluate your data sources, application dependencies, licensing, and business goals to map your Google Cloud blueprint.",
  },
  {
    step: "PHASE 02",
    t: "Architect & Blueprint",
    d: "We design the target GCP Landing Zone, Shared VPC networking, Cloud IAM boundaries, and an phased modernization roadmap.",
  },
  {
    step: "PHASE 03",
    t: "Migrate & Modernize",
    d: "We containerize on GKE, migrate datasets to BigQuery, and deploy automated release gates with zero-downtime cutovers.",
  },
  {
    step: "PHASE 04",
    t: "Operate & Optimize",
    d: "Our 24×7 SRE team handles continuous monitoring, automated patching, security threat defense, and Committed Use FinOps savings.",
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
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-rose-500/60 bg-black text-[14px] font-bold text-rose-400 shadow-[0_0_15px_rgba(66,133,244,0.3)]">
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
    tag: "Vertex AI & Cloud Healthcare",
    t: "Healthcare & Life Sciences",
    d: "FHIR-native clinical data stores, Vertex AI Medical Search models, and Google Cloud Healthcare API compliance fabrics.",
    img: "/webp/assets/partnerships/google-cloud/healthcare.webp"
  },
  {
    n: "manufacturing",
    tag: "Supply Chain Twin",
    t: "Industrial & Manufacturing",
    d: "Visual Inspection AI for assembly defect detection, real-time Google Supply Chain Twin, and smart factory telemetry in BigQuery.",
    img: "/webp/assets/partnerships/google-cloud/manufacturing.webp"
  },
  {
    n: "retail",
    tag: "BigQuery & Vertex Search",
    t: "Retail & Consumer Brands",
    d: "Real-time omni-channel stock indexing in BigQuery, Google Search-quality product recommendations, and elastic GKE checkouts.",
    img: "/webp/assets/partnerships/google-cloud/retail.webp"
  },
  {
    n: "education",
    tag: "FedRAMP & Education",
    t: "Education & Public Sector",
    d: "Secure research environments, campus-wide BigQuery analytics, and FedRAMP-compliant Google Cloud infrastructure.",
    img: "/webp/assets/partnerships/google-cloud/education.webp"
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
              <article className="group h-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0D0E12] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(66,133,244,0.45)] hover:shadow-xl">
                <div className="overflow-hidden relative">
                  <Image
                    src={c.img}
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
    q: "What Google Cloud services does Devopstrio architect and support?",
    a: "We support the complete GCP ecosystem, including Google Kubernetes Engine (GKE), BigQuery, Vertex AI, Cloud Run, Cloud SQL, AlloyDB, Cloud Spanner, Cloud Armor, Security Command Center, and Anthos multi-cloud platforms.",
  },
  {
    q: "How does Devopstrio manage zero-downtime database migrations to GCP?",
    a: "We leverage Database Migration Service (DMS) with continuous Change Data Capture (CDC) replication for PostgreSQL, MySQL, and SQL Server, validating data parity before executing swift cutovers.",
  },
  {
    q: "Can you help optimize our monthly Google Cloud spend?",
    a: "Yes. Our certified FinOps practitioners analyze Cloud Billing data to secure 1-year and 3-year Committed Use Discounts (CUDs), right-size compute instances, and terminate idle persistent disks—achieving 30% to 50% average cost savings.",
  },
  {
    q: "How do you ensure security and regulatory compliance on GCP?",
    a: "We deploy infrastructure as code with embedded Google Cloud Organization Policies, enforce BeyondCorp context-aware zero-trust, configure VPC Service Controls, and audit against SOC 2, ISO 27001, and HIPAA.",
  },
  {
    q: "How does Devopstrio build enterprise generative AI solutions with Vertex AI?",
    a: "We build enterprise Retrieval-Augmented Generation (RAG) pipelines, grounding Gemini models in your private BigQuery or enterprise vector stores via private endpoints with zero data exposure to external training sets.",
  },
  {
    q: "Do you provide 24×7 managed operations after our workloads go live?",
    a: "Yes. Our global follow-the-sun delivery hubs provide 24×7 proactive infrastructure monitoring, automated incident triage, synthetic health probes, backup validation, and monthly architecture governance reviews.",
  },
];


/* =========================================================================
   PAGE ROOT
   ========================================================================= */
export default function GoogleCloudPartnershipPage() {
  return (
    <main className="overflow-x-clip bg-black font-sans text-white">
      <Hero />
      <Why />
      <Services />
      <TransformationStack />
      <Process />
      <TransformationMetricsSection />
      <Industries />
      <FAQ faqs={faqs} />
      <RepresentativeCTA
        title="Ready To Modernize Your Enterprise On"
        highlightText="Google Cloud?"
        description="Connect directly with our Google Cloud Certified Professional Solution Architects. We will evaluate your data and application estate, design scalable GKE & BigQuery architectures, and formulate an accelerated deployment roadmap."
        primaryBtnText="TALK TO A GCP ARCHITECT"
        primaryBtnHref="/contact#contact-form"
        secondaryBtnText="EXPLORE ALL SERVICES"
        secondaryBtnHref="/services"
        theme="rose"
      />
    </main>
  );
}
