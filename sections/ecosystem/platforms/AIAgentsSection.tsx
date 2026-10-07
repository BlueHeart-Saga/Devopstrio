"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  Briefcase,
  Code2,
  Sparkles,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  Megaphone,
  Headset,
  Wallet,
  ShoppingCart,
  Scale,
  CalendarCheck,
  GitBranch,
  FlaskConical,
  Cloud,
  ShieldCheck,
  Database,
  BookOpen,
  Search,
  FileText,
  Mic,
  Mail,
  Workflow,
  Building2,
  Cpu,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

interface Agent {
  name: string;
  icon: LucideIcon;
  desc: string;
  caps: [string, string, string];
  href: string;
}

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
  rgb: string; // accent as "r g b" so it can be used with rgb(var(--a) / alpha)
  agents: Agent[];
}

const CATEGORIES: Category[] = [
  {
    id: "business",
    label: "Business Agents",
    icon: Briefcase,
    rgb: "244 63 94",
    agents: [
      {
        name: "HR Agent",
        icon: Users,
        desc: "Handles hiring, onboarding and employee requests so your people team can focus on people.",
        caps: ["Screens and ranks candidates", "Automates onboarding steps", "Answers policy questions"],
        href: "https://ai.devopstrio.co.uk/agents/hr-agent",
      },
      {
        name: "Sales Agent",
        icon: TrendingUp,
        desc: "Keeps the pipeline moving by qualifying leads and following up at the right moment.",
        caps: ["Qualifies inbound leads", "Drafts personalised outreach", "Updates CRM records"],
        href: "https://ai.devopstrio.co.uk/agents/sales-agent",
      },
      {
        name: "Marketing Agent",
        icon: Megaphone,
        desc: "Plans, writes and schedules campaigns across channels, then reports what worked.",
        caps: ["Generates campaign content", "Schedules multi-channel posts", "Summarises performance"],
        href: "https://ai.devopstrio.co.uk/agents/marketing-agent",
      },
      {
        name: "Customer Support Agent",
        icon: Headset,
        desc: "Resolves common tickets instantly and hands complex ones to your team with full context.",
        caps: ["Resolves tickets end to end", "Escalates with context", "Learns from past cases"],
        href: "https://ai.devopstrio.co.uk/agents/customer-support-agent",
      },
      {
        name: "Finance Agent",
        icon: Wallet,
        desc: "Reconciles invoices, tracks spend and flags anything that looks off before month end.",
        caps: ["Matches invoices to orders", "Tracks budgets and spend", "Flags anomalies"],
        href: "https://ai.devopstrio.co.uk/agents/finance-agent",
      },
      {
        name: "Procurement Agent",
        icon: ShoppingCart,
        desc: "Runs purchase requests from quote to approval and keeps vendor records current.",
        caps: ["Compares vendor quotes", "Routes approvals", "Monitors contracts"],
        href: "https://ai.devopstrio.co.uk/agents/procurement-agent",
      },
      {
        name: "Legal Agent",
        icon: Scale,
        desc: "Reviews contracts against your playbook and highlights the clauses that need a lawyer.",
        caps: ["Reviews contract clauses", "Flags risk and deviations", "Tracks renewal dates"],
        href: "https://ai.devopstrio.co.uk/agents/legal-agent",
      },
      {
        name: "Executive Assistant",
        icon: CalendarCheck,
        desc: "Manages calendars, inboxes and briefings so leaders start every day prepared.",
        caps: ["Schedules and reschedules", "Prepares daily briefings", "Drafts replies"],
        href: "https://ai.devopstrio.co.uk/agents/executive-assistant",
      },
    ],
  },
  {
    id: "it_engineering",
    label: "IT & Engineering Agents",
    icon: Code2,
    rgb: "56 189 248",
    agents: [
      {
        name: "DevOps Agent",
        icon: GitBranch,
        desc: "Automates build, release and rollback so deployments stay fast and predictable.",
        caps: ["Runs CI/CD pipelines", "Rolls back failed releases", "Keeps environments in sync"],
        href: "https://ai.devopstrio.co.uk/agents/devops-agent",
      },
      {
        name: "Software Engineering Agent",
        icon: Code2,
        desc: "Writes, reviews and refactors code alongside your developers.",
        caps: ["Reviews pull requests", "Fixes bugs from tickets", "Writes documentation"],
        href: "https://ai.devopstrio.co.uk/agents/software-engineering-agent",
      },
      {
        name: "QA Testing Agent",
        icon: FlaskConical,
        desc: "Generates and runs tests on every change and reports regressions early.",
        caps: ["Generates test cases", "Runs regression suites", "Reports failures with steps"],
        href: "https://ai.devopstrio.co.uk/agents/qa-testing-agent",
      },
      {
        name: "Cloud Operations Agent",
        icon: Cloud,
        desc: "Watches cloud resources, scales them as demand shifts and trims idle cost.",
        caps: ["Monitors infrastructure", "Scales workloads", "Cuts unused spend"],
        href: "https://ai.devopstrio.co.uk/agents/cloud-operations-agent",
      },
      {
        name: "Security Operations Agent",
        icon: ShieldCheck,
        desc: "Triages alerts, investigates threats and recommends the next response step.",
        caps: ["Triages security alerts", "Investigates incidents", "Audits access and config"],
        href: "https://ai.devopstrio.co.uk/agents/security-operations-agent",
      },
      {
        name: "Database Agent",
        icon: Database,
        desc: "Tunes queries, manages backups and keeps your data layer healthy.",
        caps: ["Optimises slow queries", "Verifies backups", "Detects schema drift"],
        href: "https://ai.devopstrio.co.uk/agents/database-agent",
      },
    ],
  },
  {
    id: "knowledge_productivity",
    label: "Knowledge & Productivity Agents",
    icon: Sparkles,
    rgb: "167 139 250",
    agents: [
      {
        name: "Knowledge Agent",
        icon: BookOpen,
        desc: "Turns scattered company knowledge into answers your team can trust and trace.",
        caps: ["Answers with cited sources", "Connects internal systems", "Keeps content current"],
        href: "https://ai.devopstrio.co.uk/agents/knowledge-agent",
      },
      {
        name: "Research Agent",
        icon: Search,
        desc: "Gathers, compares and summarises sources into a brief you can act on.",
        caps: ["Searches multiple sources", "Compares findings", "Writes structured briefs"],
        href: "https://ai.devopstrio.co.uk/agents/research-agent",
      },
      {
        name: "Document Agent",
        icon: FileText,
        desc: "Reads, extracts and organises documents of any length and format.",
        caps: ["Extracts key fields", "Summarises long files", "Files and tags documents"],
        href: "https://ai.devopstrio.co.uk/agents/document-agent",
      },
      {
        name: "Meeting Agent",
        icon: Mic,
        desc: "Joins your meetings, captures decisions and sends clear follow-ups.",
        caps: ["Transcribes live", "Lists decisions and owners", "Sends action items"],
        href: "https://ai.devopstrio.co.uk/agents/meeting-agent",
      },
      {
        name: "Email Agent",
        icon: Mail,
        desc: "Sorts your inbox, drafts replies in your voice and surfaces what needs you.",
        caps: ["Prioritises messages", "Drafts replies", "Schedules follow-ups"],
        href: "https://ai.devopstrio.co.uk/agents/email-agent",
      },
      {
        name: "Workflow Agent",
        icon: Workflow,
        desc: "Connects your tools and runs repeatable processes without manual hand-offs.",
        caps: ["Chains tasks across apps", "Triggers on events", "Reports on every run"],
        href: "https://ai.devopstrio.co.uk/agents/workflow-agent",
      },
    ],
  },
  {
    id: "specialized_platform",
    label: "Specialized & Platform",
    icon: Building2,
    rgb: "245 158 11",
    agents: [
      {
        name: "Industry Agents",
        icon: Building2,
        desc: "Domain-tailored autonomous agent systems designed for banking, healthcare, retail and industrial verticals.",
        caps: ["Industry-specific workflows", "Regulatory guardrails & audit", "Enterprise core integration"],
        href: "https://ai.devopstrio.co.uk/agents/industry-agents",
      },
      {
        name: "Agent Platform",
        icon: Cpu,
        desc: "The unified runtime engine for multi-agent orchestration, shared memory graphs, telemetry and model routing.",
        caps: ["Multi-agent orchestration", "Shared memory & state graph", "Automated model routing"],
        href: "https://ai.devopstrio.co.uk/agents/agent-platform",
      },
    ],
  },
];

const AUTOPLAY_MS = 6500;
const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Motion variants (direction-aware: +1 = next, -1 = previous)         */
/* ------------------------------------------------------------------ */

const emblemV: Variants = {
  enter: (d: number) => ({ opacity: 0, scale: 0.55, rotate: d * 70, x: d * 80 }),
  center: { opacity: 1, scale: 1, rotate: 0, x: 0, transition: { duration: 0.8, ease: EASE } },
  exit: (d: number) => ({ opacity: 0, scale: 0.55, rotate: -d * 70, x: -d * 80, transition: { duration: 0.35, ease: "easeIn" } }),
};

const lineV = (delay: number): Variants => ({
  enter: (d: number) => ({ x: `${d * 45}%`, opacity: 0 }),
  center: { x: "0%", opacity: 1, transition: { duration: 0.6, ease: EASE, delay } },
  exit: (d: number) => ({ x: `${-d * 45}%`, opacity: 0, transition: { duration: 0.22 } }),
});
const lineV0 = lineV(0.05);
const lineV1 = lineV(0.15);

const cardV: Variants = {
  enter: (d: number) => ({ opacity: 0, y: 18, x: d * 24 }),
  center: { opacity: 1, y: 0, x: 0, transition: { duration: 0.55, ease: EASE, delay: 0.2 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function AIAgentsSection() {
  const reduce = useReducedMotion();
  const [catIdx, setCatIdx] = useState(0);
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const cat = CATEGORIES[catIdx];
  const agent = cat.agents[idx];
  const Icon = agent.icon;
  const words = agent.name.split(" ");
  const last = words.pop() as string;
  const first = words.join(" ");
  const key = `${cat.id}-${idx}`;

  const stripRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectCategory = (i: number) => {
    if (i === catIdx) return;
    setDir(i > catIdx ? 1 : -1);
    setCatIdx(i);
    setIdx(0);
  };

  const selectAgent = (i: number) => {
    if (i === idx) return;
    setDir(i > idx ? 1 : -1);
    setIdx(i);
  };

  const next = useCallback(() => {
    setDir(1);
    if (idx < cat.agents.length - 1) {
      setIdx(idx + 1);
    } else {
      setCatIdx((catIdx + 1) % CATEGORIES.length);
      setIdx(0);
    }
  }, [idx, catIdx, cat.agents.length]);

  const prev = useCallback(() => {
    setDir(-1);
    if (idx > 0) {
      setIdx(idx - 1);
    } else {
      const p = (catIdx - 1 + CATEGORIES.length) % CATEGORIES.length;
      setCatIdx(p);
      setIdx(CATEGORIES[p].agents.length - 1);
    }
  }, [idx, catIdx]);

  // Keep the active chip centred inside the strip (scrolls the strip only, never the page)
  useEffect(() => {
    const strip = stripRef.current;
    const el = chipRefs.current[idx];
    if (!strip || !el) return;
    strip.scrollTo({
      left: el.offsetLeft - strip.clientWidth / 2 + el.clientWidth / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [idx, catIdx, reduce]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  const accent = { "--a": cat.rgb } as React.CSSProperties;

  return (
    <section
      id="ai-agents"
      style={accent}
      className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden"
    >
      <style>{`@keyframes agentProgress{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>

      {/* Background radial glow follows the accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none transition-colors duration-1000"
        style={{ background: "rgb(var(--a) / 0.07)" }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 xl:px-8 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
              AI <span className="text-rose-500">Agents</span>
            </h2>
          </div>
        </Reveal>

        {/* Tab pills */}
        <div className="flex items-center justify-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {CATEGORIES.map((c, i) => {
            const active = i === catIdx;
            const CIcon = c.icon;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => selectCategory(i)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                  active
                    ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                    : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                }`}
              >
                <CIcon size={16} />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* ---------------- Stage ---------------- */}
        <Reveal>
          <div
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            aria-label={`${cat.label}, ${agent.name}`}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="relative outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-3xl"
          >
            {/* Big soft arcs that drift with every agent */}
            <motion.div
              aria-hidden
              className="absolute -left-24 -top-24 w-[520px] h-[520px] rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgb(var(--a) / 0.14)" }}
              animate={{ x: (idx % 4) * 50, y: (idx % 3) * 40 }}
              transition={{ duration: 1.2, ease: EASE }}
            />
            <motion.div
              aria-hidden
              className="absolute -right-32 -bottom-32 w-[460px] h-[460px] rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgb(var(--a) / 0.08)" }}
              animate={{ x: -(idx % 3) * 60, y: -(idx % 4) * 30 }}
              transition={{ duration: 1.2, ease: EASE }}
            />

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
                {/* Emblem */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] xl:w-[400px] xl:h-[400px]">
                    {/* Static halo */}
                    <div
                      className="absolute inset-0 rounded-full blur-2xl transition-colors duration-1000"
                      style={{ background: "radial-gradient(circle, rgb(var(--a) / 0.28), transparent 65%)" }}
                    />
                    {/* Slow orbit ring with satellites */}
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-dashed"
                      style={{ borderColor: "rgb(var(--a) / 0.35)" }}
                      animate={reduce ? undefined : { rotate: 360 }}
                      transition={{ duration: 48, ease: "linear", repeat: Infinity }}
                    >
                      <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 w-3 h-3 rounded-full" style={{ background: "rgb(var(--a))", boxShadow: "0 0 18px rgb(var(--a) / 0.9)" }} />
                      <span className="absolute -right-1 top-1/2 w-2 h-2 rounded-full bg-white/70" />
                      <span className="absolute left-[14%] bottom-[12%] w-1.5 h-1.5 rounded-full bg-white/50" />
                    </motion.div>
                    <div className="absolute inset-[9%] rounded-full border border-white/5" />

                    {/* The swapping "plate" */}
                    <AnimatePresence mode="wait" custom={dir}>
                      <motion.div
                        key={key}
                        custom={dir}
                        variants={emblemV}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-[16%]"
                      >
                        <motion.div
                          initial={{ borderRadius: "50%" }}
                          animate={{ borderRadius: idx % 2 === 0 ? "50%" : "30%" }}
                          transition={{ delay: 0.35, duration: 0.9, ease: EASE }}
                          className="w-full h-full flex items-center justify-center border border-white/15 overflow-hidden relative"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 22%, rgb(var(--a) / 0.55), rgb(var(--a) / 0.08) 62%), #0a0506",
                            boxShadow:
                              "0 30px 80px -20px rgb(var(--a) / 0.55), inset 0 1px 0 rgba(255,255,255,0.15)",
                          }}
                        >
                          <div className="absolute inset-3 rounded-[inherit] border border-white/10" />
                          <Icon className="text-white relative w-[38%] h-[38%]" strokeWidth={1.25} />
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Title + info */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-white">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-700"
                        style={{ background: "rgb(var(--a) / 0.12)", color: "rgb(var(--a))" }}
                      >
                        <cat.icon size={16} />
                      </div>
                      <span className="text-sm md:text-base font-semibold tracking-tight text-zinc-300">{cat.label}</span>
                    </div>
                  </div>

                  {/* Two-line title, masked slide */}
                  <h3 className="text-white leading-[0.95] tracking-tight uppercase" aria-label={agent.name}>
                    <AnimatePresence mode="wait" custom={dir}>
                      <motion.span key={key} className="block" initial={false}>
                        <span className="block overflow-hidden pb-1">
                          {first && (
                            <motion.span
                              custom={dir}
                              variants={lineV0}
                              initial="enter"
                              animate="center"
                              exit="exit"
                              className="block text-3xl md:text-5xl xl:text-6xl font-light"
                            >
                              {first}
                            </motion.span>
                          )}
                        </span>
                        <span className="block overflow-hidden pb-2">
                          <motion.span
                            custom={dir}
                            variants={lineV1}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="block text-4xl md:text-6xl xl:text-7xl font-extrabold"
                          >
                            {last}
                          </motion.span>
                        </span>
                      </motion.span>
                    </AnimatePresence>
                  </h3>

                  {/* Info card */}
                  <AnimatePresence mode="wait" custom={dir}>
                    <motion.div
                      key={key}
                      custom={dir}
                      variants={cardV}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur-md p-6 md:p-7"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white"
                          style={{ background: "rgb(var(--a) / 0.16)", border: "1px solid rgb(var(--a) / 0.4)" }}
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Production Ready
                        </span>
                      </div>

                      <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-xl mb-5">{agent.desc}</p>

                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                        {agent.caps.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-zinc-200">
                            <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full" style={{ background: "rgb(var(--a))" }} />
                            {c}
                          </li>
                        ))}
                      </ul>

                      {/* Navigates directly in the same tab */}
                      <a
                        href={agent.href}
                        className="group/link inline-flex items-center gap-2.5 w-fit select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-full"
                      >
                        <span
                          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover/link:text-black"
                          style={{ background: "rgb(var(--a) / 0.14)", color: "rgb(var(--a))" }}
                        >
                          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </span>
                        <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-zinc-300 group-hover/link:text-white transition-colors">
                          Launch System
                        </span>
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Chip carousel */}
              <div className="mt-10 flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous agent"
                  className="shrink-0 w-10 h-10 rounded-full border border-white/10 bg-zinc-950/60 text-zinc-300 hover:text-white hover:border-white/30 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <ChevronLeft size={18} />
                </button>

                <div ref={stripRef} className="relative flex-1 flex gap-2 overflow-x-auto scrollbar-hide py-1">
                  {cat.agents.map((a, i) => {
                    const active = i === idx;
                    const AIcon = a.icon;
                    return (
                      <button
                        key={a.name}
                        ref={(el) => { chipRefs.current[i] = el; }}
                        type="button"
                        onClick={() => selectAgent(i)}
                        aria-current={active}
                        className="relative shrink-0 min-w-[104px] px-3 py-3 rounded-2xl flex flex-col items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      >
                        {active && (
                          <motion.span
                            layoutId={`chip-highlight`}
                            className="absolute inset-0 rounded-2xl"
                            style={{ background: "rgb(var(--a) / 0.12)", border: "1px solid rgb(var(--a) / 0.45)" }}
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                        <AIcon
                          size={20}
                          className="relative transition-colors duration-300"
                          style={{ color: active ? "rgb(var(--a))" : "#a1a1aa" }}
                        />
                        <span className={`relative text-xs font-semibold text-center leading-tight transition-colors duration-300 ${active ? "text-white" : "text-zinc-400"}`}>
                          {a.name.replace(/ Agent$/, "")}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next agent"
                  className="shrink-0 w-10 h-10 rounded-full border border-white/10 bg-zinc-950/60 text-zinc-300 hover:text-white hover:border-white/30 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Autoplay progress (also drives the advance; pauses on hover/focus) */}
              {!reduce && (
                <div className="mt-6 mx-auto h-px w-full max-w-md bg-white/10">
                  <div
                    key={key}
                    onAnimationEnd={next}
                    className="h-full origin-left"
                    style={{
                      background: "rgb(var(--a))",
                      animation: `agentProgress ${AUTOPLAY_MS}ms linear forwards`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                </div>
              )}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
