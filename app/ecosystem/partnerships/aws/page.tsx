"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { FAQ } from "@/components/ecosystem/FAQ";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";
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
const AI_IMG = "/ai/aws-partnership";

/* =========================================================================
   SHARED CONSTANTS & STYLES
   ========================================================================= */
const ROSE = "#F43F5E";
const wrap = "mx-auto w-full max-w-[1280px] px-6 sm:px-8";
const h2 = "text-[32px] leading-[40px] sm:text-[42px] sm:leading-[48px] font-bold tracking-[-1.2px] text-white";
const lead = "text-[16px] sm:text-[17px] leading-[28px] text-zinc-400";

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
    <div className={center ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]"}>
      {subtitle && (
        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
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
          : "bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 text-white hover:from-red-500 hover:to-rose-400 hover:shadow-[0_0_28px_rgba(225,29,72,0.4)]"
      }`}
    >
      {children}
    </Link>
  );
}

/* =========================================================================
   1. HERO SECTION (Oracle-Style Connected Cards + Orbiting Curve Wave Lines)
   ========================================================================= */
const heroHighlights = [
  {
    text: "AWS Migration Acceleration (MAP)",
    desc: "Enterprise re-platforming, database migrations & funded TCO reduction",
  },
  {
    text: "Cloud-Native Kubernetes & EKS",
    desc: "Production microservices, GitOps pipelines & serverless Lambda architectures",
  },
  {
    text: "Zero-Trust Security & GuardDuty",
    desc: "AWS IAM, KMS encryption, WAF rules & continuous Security Hub compliance",
  },
  {
    text: "Applied AI & Amazon Bedrock",
    desc: "Enterprise GenAI copilots, SageMaker MLOps & custom vector embeddings",
  },
];

function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
      {/* Concentric Orbital Wave Elements in Crimson/Orange Theme */}
      <div className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[85%] md:w-[65%] h-[130%] z-0 pointer-events-none select-none overflow-hidden flex items-center justify-end">
        <div className="relative w-full h-full flex items-center justify-end">
          <div className="absolute w-[200%] h-[160%] right-[-50%] rounded-[120px] md:rounded-[260px] border border-red-950/15 rotate-[-28deg] pointer-events-none" />
          <div className="absolute w-[170%] h-[135%] right-[-40%] rounded-[110px] md:rounded-[230px] border border-orange-500/10 rotate-[-28deg] pointer-events-none" />
          <div className="absolute w-[140%] h-[110%] right-[-30%] rounded-[100px] md:rounded-[200px] border border-amber-500/10 rotate-[-28deg] pointer-events-none" />
          <div className="absolute w-[110%] h-[85%] right-[-20%] rounded-[90px] md:rounded-[170px] border border-red-600/15 rotate-[-28deg] pointer-events-none" />
          <div className="absolute w-[80%] h-[60%] right-[-10%] rounded-[80px] md:rounded-[140px] border border-rose-500/20 rotate-[-28deg] pointer-events-none" />
          <div className="absolute w-[50%] h-[35%] right-[0%] rounded-[70px] md:rounded-[110px] border border-orange-500/25 rotate-[-28deg] pointer-events-none" />
          <div className="absolute right-[5%] w-[200px] h-[100px] bg-gradient-to-r from-orange-600/20 via-red-600/15 to-rose-500/10 rounded-full blur-[55px] opacity-50 animate-pulse" />
        </div>
      </div>

      {/* Ambient Radial Gradients & Precision Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none select-none">
        <div className="absolute top-[20%] right-[10%] w-[480px] h-[480px] bg-orange-950/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[30%] w-[380px] h-[380px] bg-rose-950/15 rounded-full blur-[100px]" />
        <div className="absolute top-[35%] right-[0%] w-[260px] h-[260px] bg-amber-950/15 rounded-full blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f0c0c_1px,transparent_1px),linear-gradient(to_bottom,#1f0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Reveal className="mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/60 mb-6 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-300">
                  AWS Advanced Tier Services Partner
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                AWS <span className="text-[#E11D48] whitespace-nowrap">Ecosystem</span>
              </h1>
            </Reveal>

            

            {/* Bullet Highlights Grid with Red Check Icons */}
            <Reveal delay={0.3} className="w-full mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {heroHighlights.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 p-3 rounded-xl bg-zinc-950/40 border border-zinc-900/80 hover:border-zinc-800 transition-colors"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        {pt.text}
                      </h4>
                      
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.4} className="flex flex-wrap gap-4">
              <Button href="/contact#contact-form">
                Talk to an AWS Solutions Expert
              </Button>
              <Button href="#services" ghost>
                Explore AWS Capabilities
              </Button>
            </Reveal>
          </div>

          {/* Right Column: Devopstrio + AWS Connected Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center select-none z-10">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              {/* Outer concentric integration rings */}
              <div className="absolute w-[95%] h-[95%] rounded-full border border-zinc-900/40 pointer-events-none z-0" />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-zinc-900/60 pointer-events-none z-0" />
              <div className="absolute w-[60%] h-[60%] rounded-full border border-zinc-800/30 pointer-events-none z-0" />

              {/* Connecting glowing line and animated energy node */}
              <div className="absolute inset-x-8 sm:inset-x-12 h-[2px] bg-gradient-to-r from-rose-500/30 via-orange-500/50 to-amber-500/30 z-0 pointer-events-none">
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full blur-[2px] shadow-[0_0_14px_#FF9900] animate-ping"
                  style={{ animationDuration: "2.8s" }}
                />
              </div>

              {/* Cards Container */}
              <div className="flex items-center justify-between w-full relative z-10 px-3 sm:px-6">
                {/* Devopstrio Logo Card */}
                <div className="relative group/logo w-[128px] h-[128px] sm:w-[146px] sm:h-[146px] rounded-[28px] bg-[#09090b]/90 border border-zinc-800 hover:border-rose-500/40 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.04] to-transparent rounded-[28px] opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                  <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-rose-600 to-red-600 opacity-0 group-hover/logo:opacity-25 blur-md transition-opacity" />
                  <img
                    src="/webp/assets/logo/logo.webp"
                    alt="Devopstrio"
                    className="w-full h-auto max-h-[85%] object-contain select-none filter brightness-105"
                    loading="lazy"
                  />
                </div>

                {/* Central Connector Node */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-xl relative z-20 group hover:border-orange-500/40 transition-colors">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                </div>

                {/* AWS Logo Card */}
                <div className="relative group/logo w-[128px] h-[128px] sm:w-[146px] sm:h-[146px] rounded-[28px] bg-[#09090b]/90 border border-zinc-800 hover:border-orange-500/40 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] to-transparent rounded-[28px] opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                  <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover/logo:opacity-25 blur-md transition-opacity" />
                  <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
                    <img
                      src="/assets/Tech_logos/AWS.svg"
                      alt="Amazon Web Services"
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain select-none filter drop-shadow-[0_2px_10px_rgba(255,153,0,0.4)]"
                      loading="lazy"
                    />
                    <span className="text-[11px] font-bold tracking-wider text-zinc-300 uppercase">
                      AWS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   2. WHY DEVOPSTRIO + AWS (3D Infrastructure Hub)
   ========================================================================= */
const reasons = [
  {
    Icon: ShieldCheck,
    t: "Well-Architected by Default",
    d: "Automated AWS Well-Architected Framework reviews enforcing security, reliability, performance efficiency, and cost optimization from day one.",
  },
  {
    Icon: Workflow,
    t: "Accelerated IaC & GitOps Automation",
    d: "Modular Terraform & AWS CDK infrastructure as code with automated CI/CD release gates and zero-downtime canary deployments.",
  },
  {
    Icon: Repeat2,
    t: "24×7 Follow-the-Sun SRE Operations",
    d: "Continuous platform reliability, CloudWatch telemetry, incident response, and active FinOps savings plans tuning across your AWS accounts.",
  },
];

function Why() {
  return (
    <section className="py-24 lg:py-32 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-12 lg:gap-16`}>
        {/* Left Visual: 3D Enterprise Architecture Hub */}
        <Reveal className="lg:col-span-6 relative justify-self-center w-full">
          <div
            aria-hidden
            className="absolute inset-0 -z-0 scale-105 rounded-3xl blur-2xl opacity-35"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,153,0,0.35), rgba(244,63,94,0.2), transparent 100%)",
            }}
          />
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 p-3 shadow-2xl backdrop-blur-md group">
            {/* Console Header Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800/80 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[11px] font-mono text-zinc-400">aws-control-tower.tf</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                ACTIVE MULTI-AZ
              </span>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={`${AI_IMG}/aws-infrastructure-hub.png`}
                alt="Devopstrio AWS Enterprise Architecture Hub"
                width={720}
                height={540}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Bottom Architecture Pill */}
            <div className="mt-3 rounded-xl border border-white/10 bg-black/90 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  Enterprise AWS Cloud Hub
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/25">
                Well-Architected Certified
              </span>
            </div>
          </div>
        </Reveal>

        {/* Right Content */}
        <div className="lg:col-span-6">
          <Reveal>
            <Head
              subtitle="THE DEVOPSTRIO ADVANTAGE"
              title="Technology has power. Collaboration gives it direction."
              body="Amazon Web Services provides an unmatched breadth of 200+ fully-featured services. Devopstrio designs the architecture, implements automated guardrails, and ensures your workloads run reliably at lowest total operational cost."
            />
          </Reveal>
          <div className="mt-8 space-y-4">
            {reasons.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="flex gap-4 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 hover:border-orange-500/30 hover:bg-zinc-900/30 transition-all duration-300 group">
                  <div className="flex-shrink-0 grid h-11 w-11 place-items-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                    <Icon size={20} color={ROSE} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white group-hover:text-orange-400 transition-colors">
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
   3. SERVICES ("Everything you need to run on AWS")
   ========================================================================= */
const services = [
  {
    badge: "FOUNDATIONS",
    Icon: Cloud,
    t: "Landing Zones & Control Tower",
    d: "Multi-account AWS Organizations, Control Tower guardrails, Transit Gateway networks, and centralized SSO identity governance.",
  },
  {
    badge: "MIGRATION",
    Icon: Repeat2,
    t: "Migration Acceleration (MAP)",
    d: "Structured migrations of SQL Server, Oracle, and VMware workloads to AWS utilizing AWS DMS, SMS, and MAP funding offsets.",
  },
  {
    badge: "CONTAINERS",
    Icon: Code2,
    t: "Kubernetes, EKS & Serverless",
    d: "Production-grade Amazon EKS clusters, ECS on Fargate, serverless AWS Lambda pipelines, and automated GitOps workflows.",
  },
  {
    badge: "DATA & AI",
    Icon: Database,
    t: "Data Lakes & Amazon Bedrock",
    d: "Amazon Redshift, AWS Glue data pipelines, Amazon OpenSearch, and generative AI copilot solutions powered by Amazon Bedrock.",
  },
  {
    badge: "CYBER DEFENSE",
    Icon: ShieldCheck,
    t: "Zero-Trust Security & SIEM",
    d: "AWS GuardDuty, Security Hub, KMS encryption, IAM Access Analyzer, and compliance auditing for SOC 2, HIPAA, and PCI-DSS.",
  },
  {
    badge: "FINOPS",
    Icon: Gauge,
    t: "FinOps & Cost Governance",
    d: "Real-time AWS Cost Explorer telemetry, Compute Savings Plans, Reserved Instance planning, and automated rightsizing.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-black border-b border-zinc-900/60">
      <div className={wrap}>
        <Reveal>
          <Head
            subtitle="CORE CAPABILITIES"
            title="Everything you need to run on AWS."
            body="Six core engineering disciplines covering your complete lifecycle—from initial landing zone blueprint to production 24×7 operations."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ badge, Icon, t, d }, i) => (
            <Reveal key={t} delay={(i % 3) * 90}>
              <article className="group relative h-full rounded-2xl border border-zinc-800/80 bg-[#0D0E12] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(244,63,94,0.45)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors duration-300 group-hover:bg-[rgba(244,63,94,0.14)] group-hover:border-rose-500/30">
                    <Icon size={22} color={ROSE} />
                  </span>
                  <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-zinc-500 group-hover:text-orange-400 transition-colors">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-6 text-[19px] font-bold text-white group-hover:text-orange-400 transition-colors">
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
    value: "48%",
    label: "Average TCO Reduction",
    desc: "Through FinOps rightsizing & AWS Savings Plans optimization",
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    label: "High-Availability SLA",
    desc: "Multi-AZ active-active architectures across AWS regions",
  },
  {
    icon: Rocket,
    value: "4× Faster",
    label: "Release Cadence",
    desc: "Automated CI/CD with AWS CodePipeline & EKS GitOps",
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
    title: "AWS Control Tower & Landing Zones",
    desc: "Scalable multi-account topologies with automated account vending, central GuardDuty log archiving, and enterprise SCPs.",
    tag: "Terraform & CDK",
  },
  {
    icon: Server,
    title: "Production Kubernetes (Amazon EKS)",
    desc: "Highly resilient Kubernetes pods, Karpenter auto-scaling, Cilium service mesh, and zero-downtime rolling upgrades.",
    tag: "EKS & Karpenter",
  },
  {
    icon: Cpu,
    title: "Amazon Bedrock & Applied GenAI",
    desc: "Private VPC endpoints, fine-tuned foundational models, enterprise RAG pipelines, and vector databases using OpenSearch.",
    tag: "Bedrock & SageMaker",
  },
  {
    icon: Lock,
    title: "Security Hub & Continuous Compliance",
    desc: "Centralized threat detection, automated AWS Config remediation playbooks, and continuous posture auditing.",
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
        style={{ background: "radial-gradient(circle, #FF9900, transparent 70%)" }}
      />

      <div className={wrap}>
        {/* Section Header */}
        <Reveal>
          <Head
            subtitle="ENTERPRISE MODERNIZATION STACK"
            title="Accelerate Digital Value with Production-Ready AWS Blueprints"
            body="Devopstrio couples AWS Certified Solution Architects with turnkey automation accelerators to de-risk migrations and deliver measurable enterprise business impact."
          />
        </Reveal>

        {/* Metrics Row */}
        <Reveal delay={100} className="mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {transformationMetrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-800/80 bg-[#0D0E12] p-6 text-left relative overflow-hidden group hover:border-orange-500/40 transition-colors"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-500 opacity-60" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                      {m.value}
                    </span>
                    <Icon size={18} className="text-orange-500/70" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    {m.label}
                  </div>
                  <p className="mt-1.5 text-[11px] text-zinc-400 leading-normal">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Showcase Grid: 3D Collaboration Graphic + Architecture Pillars */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: 3D Collaboration Graphic */}
          <Reveal delay={150} className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 p-3 shadow-2xl backdrop-blur-md group">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={`${AI_IMG}/aws-collaboration-growth.png`}
                  alt="Enterprise AWS Collaboration and Workload Modernization"
                  width={720}
                  height={540}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3 rounded-xl border border-white/10 bg-black/90 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-white">
                    End-to-End AWS Engineering Pods
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">AWS Premier Ready</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 4 Architecture Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {architecturePillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="rounded-xl border border-zinc-800/80 bg-[#0D0E12] p-5 transition-all duration-300 hover:border-orange-500/40 hover:bg-zinc-900/50 flex gap-4 items-start group">
                    <div className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-lg bg-zinc-900 border border-zinc-800 text-orange-500 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-colors">
                      <Icon size={19} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-[16px] font-bold text-white group-hover:text-orange-400 transition-colors">
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
    d: "We evaluate your current estate, database dependencies, licensing, and business goals under the AWS MAP framework.",
  },
  {
    step: "PHASE 02",
    t: "Architect & Blueprint",
    d: "We design the target AWS Control Tower landing zone, networking, security controls, and a phased migration roadmap.",
  },
  {
    step: "PHASE 03",
    t: "Migrate & Modernize",
    d: "We containerize, re-platform, and migrate workloads with automated testing and zero-downtime cutover rehearsals.",
  },
  {
    step: "PHASE 04",
    t: "Operate & Optimize",
    d: "Our 24×7 SRE team handles continuous monitoring, automated patching, security threat defense, and FinOps savings.",
  },
];

function Process() {
  return (
    <section className="py-24 lg:py-32 bg-black border-b border-zinc-900/60">
      <div className={wrap}>
        <Reveal>
          <Head
            subtitle="DELIVERY METHODOLOGY"
            title="A clear path from first call to steady-state operations."
            body="Our 4-phase structured engagement model ensures complete visibility, minimal risk, and accelerated time-to-value."
          />
        </Reveal>
        <Reveal className="mt-16">
          <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
            <span
              aria-hidden
              className="absolute left-0 right-0 top-[20px] hidden h-[2px] origin-left bg-gradient-to-r from-orange-600 via-amber-500 to-transparent md:block"
            />
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-orange-500/60 bg-black text-[14px] font-bold text-orange-400 shadow-[0_0_15px_rgba(255,153,0,0.3)]">
                  {i + 1}
                </span>
                <span className="mt-4 block text-[10px] font-mono font-semibold tracking-wider text-orange-400">
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
    tag: "HIPAA & HITRUST",
    t: "Healthcare & Life Sciences",
    d: "HIPAA-compliant, highly resilient environments for electronic health records, clinical imaging, and genomics data.",
  },
  {
    n: "manufacturing",
    tag: "AWS IoT & Greengrass",
    t: "Industrial & Manufacturing",
    d: "AWS IoT Greengrass, predictive maintenance telemetry pipelines, and automated factory floor telemetry.",
  },
  {
    n: "retail",
    tag: "Elastic EKS & CloudFront",
    t: "Retail & E-Commerce",
    d: "Elastic auto-scaling Amazon EKS clusters engineered to handle Black Friday transaction volumes with sub-second latency.",
  },
  {
    n: "education",
    tag: "AppStream & Cloud Directory",
    t: "Education & Public Sector",
    d: "Scalable virtual laboratories, institutional collaboration systems, and cost-governed research computing clusters.",
  },
];

function Industries() {
  return (
    <section className="py-24 lg:py-32 bg-[#030303] border-b border-zinc-900/60">
      <div className={wrap}>
        <Reveal>
          <Head
            subtitle="INDUSTRY SPECIALIZATIONS"
            title="Tailored for your industry's compliance & performance demands."
            body="Every vertical operates under unique constraints. We shape the architecture, data residency, and security controls around yours."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((c, i) => (
            <Reveal key={c.n} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0D0E12] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(255,153,0,0.45)] hover:shadow-xl">
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
                  <h3 className="text-[18px] font-bold text-white group-hover:text-orange-400 transition-colors">
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
    q: "What AWS cloud services does Devopstrio architect and support?",
    a: "We support the complete AWS ecosystem, including Amazon EKS, AWS Control Tower, RDS/Aurora databases, Redshift, AWS Glue, SageMaker, Amazon Bedrock, GuardDuty, Security Hub, Transit Gateway, and serverless Lambda architectures.",
  },
  {
    q: "Can Devopstrio help us secure AWS Migration Acceleration Program (MAP) funding?",
    a: "Yes. As an AWS Services Partner, we help qualify and unlock AWS MAP funding to significantly offset migration assessment and execution costs for eligible enterprise migrations.",
  },
  {
    q: "How does Devopstrio handle zero-downtime database migrations to AWS?",
    a: "We use AWS Database Migration Service (DMS) with continuous Change Data Capture (CDC) replication alongside AWS SCT to migrate SQL Server, Oracle, and PostgreSQL workloads with cutovers taking minutes, not hours.",
  },
  {
    q: "How do you help optimize our monthly AWS cloud spend?",
    a: "Our certified FinOps practitioners analyze AWS Cost Explorer and Compute Optimizer telemetry to eliminate idle instances, apply Compute Savings Plans, right-size EBS volumes, and configure automated autoscaling, saving clients 30% to 50% on average.",
  },
  {
    q: "How do you enforce security and regulatory compliance on AWS?",
    a: "We deploy infrastructure as code with embedded AWS Config rules and Service Control Policies (SCPs), enforce IAM least-privilege with AWS IAM Identity Center, and configure GuardDuty and Security Hub to comply with SOC 2, ISO 27001, and HIPAA.",
  },
  {
    q: "Do you provide 24×7 managed operations after our workloads go live?",
    a: "Yes. Our global follow-the-sun delivery hubs provide 24×7 proactive infrastructure monitoring, automated incident triage, backup validation, synthetic health probes, and monthly Well-Architected governance reviews.",
  },
];


/* =========================================================================
   PAGE ROOT
   ========================================================================= */
export default function AWSPartnershipPage() {
  return (
    <main className="overflow-x-clip bg-black font-sans text-white">
      <Hero />
      <Why />
      <Services />
      <TransformationStack />
      <Process />
      <Industries />
      <FAQ faqs={faqs} />
      <RepresentativeCTA
        title="Ready To Modernize Your Enterprise On"
        highlightText="Amazon Web Services?"
        description="Connect directly with our AWS Certified Solution Architects. We will evaluate your workload estate, unlock AWS MAP funding, and formulate an accelerated cloud migration roadmap."
        primaryBtnText="TALK TO AN AWS ARCHITECT"
        primaryBtnHref="/contact#contact-form"
        secondaryBtnText="EXPLORE ALL SERVICES"
        secondaryBtnHref="/services"
        theme="rose"
      />
    </main>
  );
}
