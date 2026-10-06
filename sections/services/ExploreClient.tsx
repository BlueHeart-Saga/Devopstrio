"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import {
  Cpu,
  Layers,
  Zap,
  Shield,
  Code,
  Activity,
  Database,
  Monitor,
  CheckCircle,
  Briefcase,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import {
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaJenkins,
  FaJira,
  FaSlack,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiDatadog,
  SiSnowflake,
  SiDatabricks,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiOkta,
  SiSnyk,
  SiAnsible,
  SiArgo,
  SiGrafana,
  SiAnthropic,
  SiPrometheus,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { Reveal } from "@/components/ui/Reveal";
import { DetailedServices } from "./DetailedServices";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";
import {
  exploreCategories,
  industryMap,
  techStackCategories,
  engagementModels,
  transformationPackages,
  serviceCaseStudies,
  exploreFAQs,
} from "@/data/services/exploreData";

type IconType = React.ComponentType<{ className?: string; style?: React.CSSProperties; "aria-hidden"?: boolean }>;

/* ---------- icons ---------- */
const CAT_ICONS: Record<string, IconType> = {
  FiCpu: Cpu as IconType,
  FiLayers: Layers as IconType,
  FiZap: Zap as IconType,
  FiShield: Shield as IconType,
  FiCode: Code as IconType,
  FiActivity: Activity as IconType,
  FiDatabase: Database as IconType,
  FiMonitor: Monitor as IconType,
  FiCheckCircle: CheckCircle as IconType,
  FiBriefcase: Briefcase as IconType,
};
const CatIcon = ({ name, className = "h-5 w-5" }: { name: string; className?: string }) => {
  const Icon = CAT_ICONS[name] ?? (Code as IconType);
  return <Icon className={className} aria-hidden />;
};

// Official brand colors
const TECH_ICONS: Record<string, [IconType, string]> = {
  FaAws: [FaAws as IconType, "#FF9900"],
  FaMicrosoft: [FaMicrosoft as IconType, "#0078D4"],
  FaGoogle: [FaGoogle as IconType, "#4285F4"],
  FaDocker: [FaDocker as IconType, "#2496ED"],
  FaGithub: [FaGithub as IconType, "#FFFFFF"],
  FaGitlab: [FaGitlab as IconType, "#FC6D26"],
  FaJenkins: [FaJenkins as IconType, "#D24939"],
  FaJira: [FaJira as IconType, "#0052CC"],
  FaSlack: [FaSlack as IconType, "#ECB22E"],
  SiKubernetes: [SiKubernetes as IconType, "#326CE5"],
  SiTerraform: [SiTerraform as IconType, "#844FBA"],
  SiDatadog: [SiDatadog as IconType, "#632CA6"],
  SiSnowflake: [SiSnowflake as IconType, "#29B5E8"],
  SiDatabricks: [SiDatabricks as IconType, "#FF3621"],
  SiPostgresql: [SiPostgresql as IconType, "#4169E1"],
  SiMongodb: [SiMongodb as IconType, "#47A248"],
  SiRedis: [SiRedis as IconType, "#DC382D"],
  SiApachekafka: [SiApachekafka as IconType, "#FFFFFF"],
  SiOkta: [SiOkta as IconType, "#007DC1"],
  SiSnyk: [SiSnyk as IconType, "#A352F7"],
  SiAnsible: [SiAnsible as IconType, "#EE0000"],
  SiArgo: [SiArgo as IconType, "#EF7B4D"],
  SiGrafana: [SiGrafana as IconType, "#F46800"],
  SiAnthropic: [SiAnthropic as IconType, "#D97706"],
  TbBrandOpenai: [TbBrandOpenai as IconType, "#10A37F"],
};
function TechIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const [Icon, color] = TECH_ICONS[name] ?? [Code as IconType, "#a1a1aa"];
  return <Icon className={className} style={{ color }} aria-hidden />;
}

/* hero logo wall: white tiles, official brand logos */
const HERO_COLS: { name: string }[][] = [
  [
    { name: "AWS" },
    { name: "Kubernetes" },
    { name: "GitHub" },
    { name: "Prometheus" },
    { name: "Python" },
  ],
  [
    { name: "Azure" },
    { name: "Terraform" },
    { name: "GitLab" },
    { name: "Grafana" },
    { name: "React" },
  ],
  [
    { name: "Google Cloud" },
    { name: "Docker" },
    { name: "Jenkins" },
    { name: "Jira" },
    { name: "Ansible" },
  ],
];

/* ---------- shared styles ---------- */
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400";
const btnPrimary = `inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] ${focus}`;
const btnGhost = `inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/60 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900 ${focus}`;
const box = "rounded-xl border border-zinc-800 bg-zinc-950";
const chip = "rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300";
const eyebrow = "mb-3 block text-xs font-semibold uppercase tracking-wider text-rose-500";
const capCount = (c: (typeof exploreCategories)[number]) =>
  c.groups.reduce((n, g) => n + g.services.length, 0);

function Section({
  eyebrow: eb,
  title,
  intro,
  alt,
  id,
  sectionRef,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  alt?: boolean;
  id?: string;
  sectionRef?: React.Ref<HTMLElement>;
  children: React.ReactNode;
}) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`border-b border-zinc-900/80 py-24 ${alt ? "bg-[#020202]" : "bg-black"}`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Reveal>
            <span className={eyebrow}>{eb}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl xl:text-5xl">
              {title}
            </h2>
          </Reveal>
          {intro && (
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm text-zinc-300">
    <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" aria-hidden />
    <span>{children}</span>
  </li>
);

const LIFECYCLE = [
  {
    phase: "Consult",
    sub: "Strategy and audit",
    Icon: Briefcase,
    desc: "Readiness assessments, cloud maturity audits and tech stack roadmap definition.",
    outputs: ["Readiness report", "Tech roadmap"],
  },
  {
    phase: "Architect",
    sub: "System blueprints",
    Icon: Layers,
    desc: "Multi-region landing zones, microservices topology and private AI vector graphs.",
    outputs: ["Landing zone design", "Decision records"],
  },
  {
    phase: "Engineer",
    sub: "Code and workflows",
    Icon: Code,
    desc: "Next.js frontends, FastAPI microservices, LLM orchestration and custom connectors.",
    outputs: ["Working services", "Test suite"],
  },
  {
    phase: "Automate",
    sub: "GitOps and CI/CD",
    Icon: Zap,
    desc: "Terraform IaC modules, GitHub Actions runners and ArgoCD progressive sync.",
    outputs: ["IaC modules", "Release pipelines"],
  },
  {
    phase: "Secure",
    sub: "Zero-trust and SOC",
    Icon: ShieldCheck,
    desc: "Secret rotation, automated SAST/DAST scans and SOC 2 / HIPAA compliance.",
    outputs: ["Hardened baseline", "Audit evidence"],
  },
  {
    phase: "Operate",
    sub: "24/7 SRE and SLA",
    Icon: Activity,
    desc: "Distributed tracing, Prometheus metrics and 15-minute SLA incident triage.",
    outputs: ["Runbooks", "SLA reports"],
  },
];

/* ---------- page ---------- */
export function ExploreClient() {
  const pillars = useMemo(() => exploreCategories.slice(0, 10), []);
  const [activeCatalogTab, setActiveCatalogTab] = useState(pillars[0]?.id);
  const [isCatalogPaused, setIsCatalogPaused] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const catalogTabsRef = useRef<HTMLDivElement>(null);
  const catalogSectionRef = useRef<HTMLElement>(null);

  const totalCapabilities = useMemo(() => pillars.reduce((n, c) => n + capCount(c), 0), [pillars]);
  const catalogCat = pillars.find((c) => c.id === activeCatalogTab) ?? pillars[0];

  // Observe if the Sub-Service Catalog section is currently visible on screen
  useEffect(() => {
    const el = catalogSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-advance tabs every 5 seconds ONLY when section is visible on screen and not paused
  useEffect(() => {
    if (isCatalogPaused || !isSectionInView) return;

    const timer = setInterval(() => {
      setActiveCatalogTab((prev) => {
        const currentIndex = pillars.findIndex((p) => p.id === prev);
        const nextIndex = (currentIndex + 1) % pillars.length;
        return pillars[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [isCatalogPaused, isSectionInView, pillars]);

  // Smoothly scroll active tab into view inside the tab container ONLY (never jumps the page)
  useEffect(() => {
    if (catalogTabsRef.current) {
      const container = catalogTabsRef.current;
      const activeBtn = container.querySelector<HTMLButtonElement>(`[data-tab-id="${activeCatalogTab}"]`);
      if (activeBtn) {
        const containerWidth = container.offsetWidth;
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const targetScroll = btnLeft - containerWidth / 2 + btnWidth / 2;
        container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
      }
    }
  }, [activeCatalogTab]);

  const scrollCatalogTabs = (direction: "left" | "right") => {
    if (catalogTabsRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      catalogTabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden bg-black font-sans text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-16 lg:py-20">
        <style>{`
          @keyframes heroUp{from{transform:translateY(0)}to{transform:translateY(-50%)}}
          @keyframes heroDown{from{transform:translateY(-50%)}to{transform:translateY(0)}}
          .hero-up{animation:heroUp 30s linear infinite}.hero-down{animation:heroDown 34s linear infinite}
          @media (prefers-reduced-motion:reduce){.hero-up,.hero-down{animation:none}}
        `}</style>
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-rose-600/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-400">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-zinc-200">
                  Explore
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Engineering that connects your whole technology stack
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Cloud, AI, DevOps, security and 24/7 operations from one delivery team.{" "}
              {totalCapabilities} capabilities across {pillars.length} pillars, wired into the tools
              you already run.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#core-pillars" className={btnPrimary}>
                Explore core pillars
              </a>
              <Link href="/contact#contact-form" className={btnGhost}>
                Consult an architect
              </Link>
            </div>
          </div>

          {/* logo wall */}
          <div className="lg:col-span-6">
            <div
              aria-hidden
              className="relative mx-auto h-[440px] w-full max-w-[520px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]"
            >
              <div className="grid h-full grid-cols-3 gap-3 px-4">
                {HERO_COLS.map((col, ci) => (
                  <div key={ci} className="overflow-hidden">
                    <div className={ci === 1 ? "hero-down" : "hero-up"}>
                      {[...col, ...col].map((b, i) => (
                        <div
                          key={`${b.name}-${i}`}
                          className="mb-3 flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white p-2 shadow-sm"
                        >
                          <BrandLogo name={b.name} className="h-8 w-8 object-contain" />
                          <span className="text-[11px] font-medium text-zinc-700">{b.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE LIFECYCLE */}
      <section className="border-b border-zinc-900 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-14 max-w-2xl">
            <span className={eyebrow}>The lifecycle</span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              How we organize our service lifecycle
            </h2>
            <p className="mt-3 text-zinc-400">
              One connected path from advisory and architecture to custom engineering, zero-trust
              security and 24/7 managed operations.
            </p>
          </div>
          <ol className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
            {LIFECYCLE.map(({ phase, sub, Icon, desc, outputs }, i) => (
              <li key={phase} className="group">
                <div className="mb-5 flex items-center gap-3">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-black text-rose-400 transition-colors group-hover:border-rose-500 group-hover:bg-rose-600/10">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  {i < LIFECYCLE.length - 1 && (
                    <span
                      className="hidden h-px flex-1 bg-gradient-to-r from-zinc-700 to-zinc-800 lg:block"
                      aria-hidden
                    />
                  )}
                </div>
                <span className="text-xs text-zinc-400">Step {i + 1}</span>
                <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-rose-400">
                  {phase}
                </h3>
                <p className="text-sm text-zinc-300">{sub}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {outputs.map((o) => (
                    <li key={o} className={chip}>
                      {o}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICE PLATFORM: 10 pillars, 5 per row */}
      <section
        id="core-pillars"
        className="relative scroll-mt-24 border-b border-zinc-900/80 bg-[#020202] py-24"
      >
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-rose-600/5 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Reveal>
              <span className={eyebrow}>SERVICE PLATFORM</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl xl:text-5xl">
                Explore Our {pillars.length} Core{" "}
                <span className="text-rose-500">Service Pillars</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                We specialize in {pillars.length} integrated pillars designed to address every aspect
                of modern enterprise IT engineering, operational efficiency, and digital
                transformation.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((cat, idx) => (
              <Reveal key={cat.id} delay={idx * 0.05} className="h-full">
                <Link
                  href={`/services/${cat.slug}`}
                  className={`group relative flex h-full min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/40 hover:bg-zinc-900/20 hover:shadow-[0_8px_32px_0_rgba(244,63,94,0.06)] ${focus}`}
                >
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-rose-600/5 blur-2xl transition-all duration-500 group-hover:scale-125" />
                  <div className="space-y-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-600/10 transition-all duration-300 group-hover:bg-rose-600">
                      <CatIcon
                        name={cat.iconName}
                        className="h-5 w-5 text-rose-500 transition-colors group-hover:text-white"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white transition-colors group-hover:text-rose-400">
                        {cat.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-zinc-400">
                        {cat.shortDesc}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 mt-4 flex items-center justify-between border-t border-zinc-900/60 pt-4">
                    <span className="font-mono text-xs uppercase text-zinc-400">
                      {capCount(cat)} capabilities
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-500 transition-transform group-hover:translate-x-0.5">
                      Explore <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVOLVE: Wiz-style integrations directory (see DetailedServices.tsx) */}
      <div id="interactive-explorer">
        <DetailedServices hideExploreButton />
      </div>

      {/* DETAILED SUB-SERVICE CATALOG */}
      <Section
        sectionRef={catalogSectionRef}
        eyebrow="ECOSYSTEM DIRECTORY"
        title={
          <>
            Detailed Sub-Service <span className="text-rose-500">Catalog</span>
          </>
        }
        intro="Browse the complete structure by service group to see every sub-service capability we bring to our clients."
        alt
      >
        <div
          className="relative mb-10 flex items-center gap-2"
          onMouseEnter={() => setIsCatalogPaused(true)}
          onMouseLeave={() => setIsCatalogPaused(false)}
          onTouchStart={() => setIsCatalogPaused(true)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => {
              scrollCatalogTabs("left");
              setIsCatalogPaused(true);
            }}
            aria-label="Scroll tabs left"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/80 text-zinc-400 transition-all hover:border-rose-500/50 hover:bg-zinc-900 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>

          {/* Scrollable Tabs Row */}
          <div
            ref={catalogTabsRef}
            role="tablist"
            aria-label="Practice areas"
            className="scrollbar-hide flex flex-1 items-center gap-2 overflow-x-auto scroll-smooth border-b border-zinc-900 pb-3"
          >
            {pillars.map((cat) => {
              const isActive = activeCatalogTab === cat.id;
              return (
                <button
                  key={cat.id}
                  data-tab-id={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCatalogTab(cat.id);
                    setIsCatalogPaused(true);
                  }}
                  className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${focus} ${
                    isActive
                      ? "border-rose-600 bg-rose-600 text-white shadow-[0_2px_15px_rgba(225,29,72,0.35)]"
                      : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => {
              scrollCatalogTabs("right");
              setIsCatalogPaused(true);
            }}
            aria-label="Scroll tabs right"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/80 text-zinc-400 transition-all hover:border-rose-500/50 hover:bg-zinc-900 hover:text-white"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <div className="grid items-stretch gap-6 lg:grid-cols-4">
          <div className={`${box} flex flex-col justify-between p-8 lg:col-span-1`}>
            <div>
              <span className="text-xs font-semibold text-rose-500">Active practice</span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{catalogCat.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{catalogCat.shortDesc}</p>
              <p className="mt-4 text-xs text-zinc-400">
                {capCount(catalogCat)} capabilities in {catalogCat.groups.length} groups
              </p>
              {catalogCat.useCases && catalogCat.useCases.length > 0 && (
                <div className="mt-6 space-y-4 border-t border-zinc-800 pt-6">
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-300">The challenge</h4>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                      {catalogCat.useCases[0].challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-rose-400">Our solution</h4>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                      {catalogCat.useCases[0].solution}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <Link href={`/services/${catalogCat.slug}`} className={`${btnPrimary} mt-8 w-full`}>
              Explore practice <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {catalogCat.groups.map((g) => (
              <div key={g.title} className={`${box} p-5 transition-colors hover:border-zinc-700`}>
                <div className="mb-4 flex items-baseline justify-between gap-2">
                  <h4 className="text-sm font-semibold text-rose-400">{g.title}</h4>
                  <span className="text-xs text-zinc-400">{g.services.length}</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.services.map((s) => (
                    <li key={s} className={chip}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section
        eyebrow="INDUSTRIES SERVED"
        title={
          <>
            Browse Services by <span className="text-rose-500">Industry Domain</span>
          </>
        }
        intro="We translate raw engineering capacity into domain-specific solutions engineered to pass audits and scale operations."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industryMap.map((ind) => (
            <article
              key={ind.name}
              className={`${box} group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/30`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500 transition-colors group-hover:bg-rose-600 group-hover:text-white">
                <CatIcon name={ind.iconName} />
              </span>
              <h3 className="mt-4 text-lg font-semibold transition-colors group-hover:text-rose-400">
                {ind.name}
              </h3>
              <p className="mt-3 rounded-md bg-zinc-900 p-3 text-sm leading-relaxed text-zinc-400">
                <span className="font-medium text-zinc-200">Challenge: </span>
                {ind.challenges}
              </p>
              <h4 className="mb-2 mt-5 text-sm font-semibold text-zinc-200">
                Recommended services
              </h4>
              <ul className="space-y-2">
                {ind.recommendedServices.map((r) => (
                  <CheckItem key={r}>{r}</CheckItem>
                ))}
              </ul>
              <Link
                href={ind.link}
                className={`mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-rose-400 hover:text-rose-300 ${focus}`}
              >
                View case studies <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* TECHNOLOGY STACK */}
      <Section
        eyebrow="TECHNOLOGY STACK"
        title={
          <>
            Browse by <span className="text-rose-500">Technology Stack</span>
          </>
        }
        intro="We write, run, secure and monitor applications with the industry's most reliable developer tools and cloud services."
        alt
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {techStackCategories.map((cat) => (
            <div key={cat.name} className={`${box} p-5`}>
              <h3 className="mb-4 flex items-center justify-between border-b border-zinc-800 pb-3 text-sm font-semibold text-rose-400">
                {cat.name}
                <span className="text-xs font-normal text-zinc-400">
                  {cat.technologies.length}
                </span>
              </h3>
              <ul className="space-y-2">
                {cat.technologies.map((t) => (
                  <li
                    key={t.name}
                    className="flex items-center justify-between gap-3 rounded-lg border border-zinc-800 bg-zinc-900/60 p-2.5 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-black">
                        <TechIcon name={t.iconName} />
                      </span>
                      <span className="truncate text-sm font-medium">{t.name}</span>
                    </span>
                    <span className="shrink-0 text-xs text-zinc-400">{t.type}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ENGAGEMENT MODELS */}
      <Section
        eyebrow="ENGAGEMENT MODELS"
        title={
          <>
            Enterprise <span className="text-rose-500">Engagement Models</span>
          </>
        }
        intro="We structure engagement models designed for agility, transparent billing and clear ownership transfers."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((m) => (
            <article
              key={m.title}
              className={`${box} group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/30`}
            >
              <div
                className="h-1 bg-gradient-to-r from-rose-600 to-rose-500/20"
                aria-hidden
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-0.5 text-xs text-rose-300">
                  {m.badge}
                </span>
                <h3 className="mt-3 text-lg font-semibold transition-colors group-hover:text-rose-400">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{m.description}</p>
                <ul className="mb-6 mt-5 space-y-2 border-t border-zinc-800 pt-5">
                  {m.features.map((f) => (
                    <CheckItem key={f}>{f}</CheckItem>
                  ))}
                </ul>
                <Link
                  href={`/contact?model=${encodeURIComponent(m.title)}#contact-form`}
                  className={`${btnGhost} mt-auto !py-2.5 hover:!border-rose-600 hover:!bg-rose-600`}
                >
                  Select model
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* PACKAGES */}
      <Section
        eyebrow="TRANSFORMATION PACKAGES"
        title={
          <>
            Featured Solution <span className="text-rose-500">Packages</span>
          </>
        }
        intro="We bundle complementary engineering practices into packaged sprints to accelerate your time to market."
        alt
      >
        <div className="grid gap-5 md:grid-cols-2">
          {transformationPackages.map((p) => (
            <article
              key={p.title}
              className={`${box} group flex flex-col p-8 transition-colors hover:border-rose-500/30`}
            >
              <span className="w-fit rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300">
                {p.tagline}
              </span>
              <h3 className="mt-3 text-xl font-semibold transition-colors group-hover:text-rose-400">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.description}</p>
              <h4 className="mb-2 mt-5 text-xs font-semibold text-zinc-300">Included services</h4>
              <ul className="flex flex-wrap gap-2">
                {p.services.map((s) => (
                  <li key={s} className={chip}>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg border border-rose-500/20 border-l-2 border-l-rose-500 bg-rose-500/[0.04] p-4">
                <h4 className="text-sm font-semibold text-rose-400">Target outcome</h4>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">{p.outcome}</p>
              </div>
              <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                <span className="text-sm text-zinc-400">
                  Includes 90-day stabilization and runbooks.
                </span>
                <Link
                  href={`/contact?package=${encodeURIComponent(p.title)}#contact-form`}
                  className={`inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-rose-400 hover:text-rose-300 ${focus}`}
                >
                  Inquire <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section
        eyebrow="CLIENT SUCCESS"
        title={
          <>
            Client Transformation <span className="text-rose-500">Showcases</span>
          </>
        }
        intro="Read how we helped enterprises modernize workloads, configure AI agents and secure endpoints."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {serviceCaseStudies.map((cs) => (
            <article
              key={cs.client}
              className={`${box} flex flex-col overflow-hidden transition-colors hover:border-zinc-700`}
            >
              <dl className="grid grid-cols-2 divide-x divide-zinc-800 border-b border-zinc-800 bg-zinc-900/40">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="p-5">
                    <dd className="text-3xl font-semibold text-rose-400">{m.value}</dd>
                    <dt className="mt-1 text-xs text-zinc-400">{m.label}</dt>
                  </div>
                ))}
              </dl>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{cs.client}</h3>
                <h4 className="mt-4 text-sm font-semibold text-zinc-200">The challenge</h4>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{cs.challenge}</p>
                <h4 className="mt-4 text-sm font-semibold text-rose-400">Our solution</h4>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{cs.solution}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                  {cs.services.map((s) => (
                    <li key={s} className={chip}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* WHY DEVOPSTRIO */}
      <section className="border-b border-zinc-900/80 bg-[#020202] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <Reveal>
                <span className={eyebrow}>WHY DEVOPSTRIO</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                  Architected for Secure,{" "}
                  <span className="text-rose-500">Enterprise-Grade Delivery</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Devopstrio bridges the gap between{" "}
                  <Link href="/services/cloud-services" className="text-rose-400 hover:underline">
                    modern cloud complexity
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/devops-automation"
                    className="text-rose-400 hover:underline"
                  >
                    rapid operational engineering
                  </Link>
                  . We construct robust configurations built to withstand strict{" "}
                  <Link href="/services/cybersecurity" className="text-rose-400 hover:underline">
                    security compliance frameworks
                  </Link>
                  .
                </p>
              </Reveal>
              <ul className="space-y-4 pt-2">
                {[
                  [
                    "Full lifecycle support",
                    "From roadmap assessments and container staging to active 24/7 security containment.",
                  ],
                  [
                    "Audited security hardening",
                    "Strict IAM least-privilege configurations, automated security scanning and SOC audit prep.",
                  ],
                ].map(([t, d]) => (
                  <li key={t} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose-500/10">
                      <Check className="h-4 w-4 text-rose-500" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{t}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-zinc-400">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:col-span-7">
              {[
                [
                  "Integrated teams",
                  "Eliminate multiple vendor hand-offs. We coordinate cloud, AI engineering, QA automation and operations under a single team.",
                ],
                [
                  "No placeholders policy",
                  "Every capability listing features fully functional configurations, real-world case references and battle-tested scripts.",
                ],
                [
                  "SLA-backed containment",
                  "Our managed ops framework supports active 24/7 logging with 15-minute response triggers for production incident containment.",
                ],
                [
                  "Global scale",
                  "We deploy multi-region container grids (AKS, EKS) designed for high concurrency, global load balancing and failovers.",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className={`${box} border-t-2 border-t-rose-600 p-6 transition-colors hover:border-zinc-700 hover:border-t-rose-500`}
                >
                  <h3 className="text-sm font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-zinc-900/80 bg-black py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-12">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Reveal>
              <span className={eyebrow}>FAQ</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl xl:text-5xl">
                Frequently Asked <span className="text-rose-500">Questions</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-zinc-400 sm:text-base">
                Read transparent answers regarding scoping, team assignments, delivery frameworks,
                and system handovers.
              </p>
            </Reveal>
          </div>
          <div className="space-y-4">
            {exploreFAQs.map((faq, idx) => {
              const isOpen = openFAQ === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 transition-colors hover:border-zinc-800"
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left transition-colors hover:bg-zinc-950/80"
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-zinc-500 transition-transform ${
                        isOpen ? "rotate-180 text-rose-500" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-zinc-900/60 bg-zinc-950/20 px-6 pb-5 pt-1">
                      <p className="pt-2 text-sm font-normal leading-relaxed text-zinc-400">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <RepresentativeCTA
        title="Let's Build The Right Transformation Path"
        highlightText="For Your Business"
        description="Whether you need a focused engineering capability, a cloud modernization partner, an AI implementation roadmap, or end-to-end transformation support, Devopstrio can help you design the right engagement model."
        primaryBtnText="BOOK A CONSULTATION"
        primaryBtnHref="/contact#contact-form"
        secondaryBtnText="TALK TO A SPECIALIST"
        secondaryBtnHref="/contact#contact-form"
      />
    </div>
  );
}
