"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Activity, ArrowRight, ArrowUpRight, Bot, Cloud, Compass, Database, FileText, FlaskConical,
  Gauge, GitBranch, Hammer, Lock, PenTool, Plug, Rocket, Search, Server, ShieldCheck,
  SlidersHorizontal, Plus, Minus, Check, type LucideIcon,
} from "lucide-react";
import {
  focusAreas, heroBadges, capabilities, framework, deliverables, architectureLayers,
  techStack, scenarios, outcomes, outcomeBullets, differentiators, otherLabs, faqs,
} from "./data";

/* Icon lookup so data.ts can stay plain text. */
const ICONS: Record<string, LucideIcon> = {
  Activity, Bot, Cloud, Compass, Database, FileText, FlaskConical, Gauge, GitBranch,
  Hammer, Lock, PenTool, Plug, Rocket, Search, Server, ShieldCheck, SlidersHorizontal,
};

const NAV = [
  { id: "capabilities", label: "Capabilities" },
  { id: "framework", label: "Framework" },
  { id: "deliverables", label: "Deliverables" },
  { id: "architecture", label: "Architecture" },
  { id: "scenarios", label: "Scenarios" },
  { id: "outcomes", label: "Outcomes" },
  { id: "faq", label: "FAQ" },
];

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-500";
const h2 = "text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl";
const card = "group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/40";

function SectionHead({ kicker, title, text }: { kicker: string; title: React.ReactNode; text?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <span className={`${eyebrow} mb-4 block`}>{kicker}</span>
      <h2 className={h2}>{title}</h2>
      {text && <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">{text}</p>}
    </div>
  );
}

/* Counts up a value like "<50ms", "99.4%", "90%" when it scrolls into view. */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    if (!match || !ref.current) return;
    const [, prefix, numStr, suffix] = match;
    const end = parseFloat(numStr);
    const decimals = numStr.includes(".") ? 1 : 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const step = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setShown(`${prefix}${(end * eased).toFixed(decimals)}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      setShown(`${prefix}0${suffix}`);
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref}>{shown}</span>;
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const isDraft = a.startsWith("DRAFT: ");
  const text = isDraft ? a.replace("DRAFT: ", "") : a;
  return (
    <div className="border-b border-zinc-800/80">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className={`text-base font-semibold transition-colors sm:text-lg ${open ? "text-white" : "text-zinc-200"}`}>{q}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? "border-rose-500/60 bg-rose-500/10 text-rose-400" : "border-zinc-700 text-zinc-400"}`}>
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function AiLabPage() {
  const [scenario, setScenario] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState("capabilities");
  const sc = scenarios[scenario];

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActiveNav(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-black font-sans text-white">
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden border-b border-zinc-900/60 pt-32 pb-24 sm:pt-40">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-[560px] w-[560px] rounded-full bg-rose-600/10 blur-[150px]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-12">
          <div className="min-w-0">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              <span>Ecosystem</span><span>/</span><span>Innovation Labs</span><span>/</span><span className="text-zinc-300">AI Lab</span>
            </nav>
            <span className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-300">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" /></span>
              AI Lab · Emerging Technology R&amp;D
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-5xl 2xl:text-6xl">
              Pioneering Applied R&amp;D <span className="block bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">For Enterprise Cognitive Systems</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
              Where cognitive research meets production systems engineering. We prototype, benchmark and harden AI systems, then take the best of them into production.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_12px_40px_-12px_rgba(244,63,94,0.7)] transition-all duration-300 hover:scale-[1.02]">
                Schedule Technical Briefing <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#scenarios" className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950/60 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-zinc-100 transition-all duration-300 hover:border-rose-500/50 hover:bg-zinc-900">
                Explore Use Cases
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {focusAreas.map((f) => (
                <div key={f.title} className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4 backdrop-blur transition-colors duration-300 hover:border-rose-500/40">
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-[0_40px_120px_-40px_rgba(244,63,94,0.35)]">
              <img src="/images/ai-lab/reference-blueprint.webp" alt="Engineers reviewing a system blueprint together" className="aspect-[4/5] w-full object-cover" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            </div>
            {heroBadges.map((b, i) => (
              <div key={b.value} className={`absolute rounded-2xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-md shadow-xl ${i === 0 ? "-left-4 top-10 sm:-left-8" : "-right-4 bottom-16 sm:-right-8"}`}>
                <p className="text-2xl font-bold text-white"><CountUp value={b.value} /></p>
                <p className="mt-1 max-w-[12rem] text-[11px] leading-snug text-zinc-400">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STICKY SECTION NAV ================= */}
      <div className="sticky top-20 z-30 border-b border-zinc-900/80 bg-black/80 backdrop-blur-xl">
        <nav aria-label="On this page" className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 sm:px-8 lg:px-12">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${activeNav === n.id ? "bg-rose-500/15 text-rose-300" : "text-zinc-500 hover:text-zinc-200"}`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ================= CAPABILITIES ================= */}
      <section id="capabilities" className="relative scroll-mt-40 py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHead kicker="Capabilities" title={<>Core Areas of <span className="text-rose-500">AI Innovation</span></>} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => {
              const Icon = ICONS[c.icon];
              return (
                <div key={c.title} className={`${card} p-7`}>
                  <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-500/0 blur-2xl transition-all duration-500 group-hover:bg-rose-500/20" />
                  <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative text-lg font-semibold text-white">{c.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-zinc-400">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FRAMEWORK ================= */}
      <section id="framework" className="relative scroll-mt-40 border-y border-zinc-900/60 bg-zinc-950/30 py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHead kicker="Operating Framework" title={<>How the AI Lab Builds <span className="text-rose-500">Production Cognitive Platforms</span></>} />
          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent lg:block" />
            {framework.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <li key={s.title} className="relative flex flex-col items-start rounded-2xl border border-zinc-800/80 bg-black/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/40">
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 text-rose-500">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-[11px] font-bold text-white">{i + 1}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">{s.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ================= DELIVERABLES ================= */}
      <section id="deliverables" className="relative scroll-mt-40 py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHead kicker="Deliverables" title={<>AI Solutions Built <span className="text-rose-500">Inside the Lab</span></>} />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-800/60 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((d, i) => (
              <div key={d.title} className="group bg-black p-7 transition-colors duration-300 hover:bg-zinc-950">
                <span className="font-mono text-xs font-bold text-rose-500/80">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-base font-semibold text-white transition-colors group-hover:text-rose-400">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}
      <section id="architecture" className="relative scroll-mt-40 border-y border-zinc-900/60 bg-zinc-950/30 py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHead kicker="Reference Blueprint" title={<>Our Enterprise AI <span className="text-rose-500">Reference Architecture</span></>} />
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 lg:sticky lg:top-44">
              <img src="/images/ai-lab/reference-blueprint.webp" alt="Team reviewing an architecture blueprint" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm font-medium text-zinc-200">Six layers, from the client edge to model governance.</p>
            </div>

            <div className="space-y-3">
              {architectureLayers.map((layer, i) => (
                <div key={layer.title} className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-black/60 p-5 transition-all duration-300 hover:border-rose-500/40 sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-500/10 font-mono text-xs font-bold text-rose-400">{String(i + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-white">{layer.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {layer.items.map((it) => (
                          <span key={it} className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400 transition-colors group-hover:border-zinc-700 group-hover:text-zinc-300">{it}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-zinc-800/80 p-5 sm:p-6">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">Core technology</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((t) => (
                    <span key={t} className="rounded-lg bg-zinc-900 px-3 py-1.5 font-mono text-[11px] text-zinc-300">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCENARIOS ================= */}
      <section id="scenarios" className="relative scroll-mt-40 py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHead kicker="Scenarios" title={<>AI Use Cases We Engineer <span className="text-rose-500">Across the Enterprise</span></>} />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
            <div role="tablist" aria-orientation="vertical" className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
              {scenarios.map((s, i) => {
                const on = i === scenario;
                return (
                  <button
                    key={s.title}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setScenario(i)}
                    className={`group flex shrink-0 items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${on ? "border-rose-500/50 bg-rose-500/10" : "border-zinc-800 bg-zinc-950/60 hover:border-zinc-700"}`}
                  >
                    <span className={`text-sm font-semibold ${on ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>{s.title}</span>
                    <ArrowUpRight className={`h-4 w-4 shrink-0 transition-all ${on ? "text-rose-500" : "text-zinc-700"}`} />
                  </button>
                );
              })}
            </div>

            <div role="tabpanel" key={scenario} className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-7 sm:p-10" style={{ animation: "aiFade .5s ease-out" }}>
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-600/10 blur-3xl" />
              <div className="relative grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{sc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{sc.summary}</p>
                  {sc.points.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {sc.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-zinc-300">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-400"><Check className="h-3 w-3" /></span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">Built with</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {sc.builtWith.map((b) => (
                      <span key={b} className="rounded-full border border-rose-500/25 bg-rose-500/5 px-3 py-1.5 text-xs text-rose-200">{b}</span>
                    ))}
                  </div>
                </div>
                {sc.hasImage && (
                  <div className="overflow-hidden rounded-2xl border border-zinc-800">
                    <img src="/images/ai-lab/enterprise-knowledge-retrieval.webp" alt="Enterprise knowledge retrieval overview" className="w-full object-cover" loading="lazy" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUTCOMES ================= */}
      <section id="outcomes" className="relative scroll-mt-40 border-y border-zinc-900/60 bg-zinc-950/30 py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHead kicker="Outcomes" title={<>Measurable Results <span className="text-rose-500">Delivered By the AI Lab</span></>} />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {outcomes.map((o) => (
              <div key={o.label} className={`${card} p-6 text-center`}>
                <p className="text-4xl font-bold tracking-tight text-white transition-colors group-hover:text-rose-400 sm:text-5xl"><CountUp value={o.value} /></p>
                <p className="mt-3 text-sm font-semibold text-zinc-200">{o.label}</p>
                <p className="mt-1 text-xs text-zinc-500">{o.sub}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
            {outcomeBullets.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-zinc-800/80 bg-black/50 px-5 py-4 last:md:col-span-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                <p className="text-sm leading-relaxed text-zinc-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DIFFERENTIATORS ================= */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHead kicker="Why Partner With Us" title={<>Why Partner With the <span className="text-rose-500">Devopstrio AI Lab</span></>} />
          <div className="grid gap-5 md:grid-cols-2">
            {differentiators.map((d, i) => (
              <div key={d.title} className={`${card} flex gap-6 p-8`}>
                <span className="font-mono text-3xl font-bold text-zinc-800 transition-colors group-hover:text-rose-500/60">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OTHER LABS ================= */}
      <section className="relative border-y border-zinc-900/60 bg-zinc-950/30 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className={`${eyebrow} mb-3 block`}>Ecosystem</span>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Explore Our Other Innovation Labs</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherLabs.map((l) => {
              const Icon = ICONS[l.icon];
              return (
                <a key={l.title} href={l.href} className={`${card} flex flex-col p-6`}>
                  <Icon className="mb-5 h-6 w-6 text-rose-500" />
                  <h3 className="text-base font-semibold text-white">{l.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-500">{l.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400">Explore Lab <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="relative scroll-mt-40 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <span className={`${eyebrow} mb-4 block`}>FAQ</span>
            <h2 className={h2}>Questions we get asked <span className="text-rose-500">every day.</span></h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">Still have questions? Don&apos;t sit with them. Reach out to our team. We respond to every message personally.</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-rose-300">Contact our engineers <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="border-t border-zinc-800/80">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="relative scroll-mt-40 pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="relative grid overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 lg:grid-cols-2">
            <div className="relative p-10 sm:p-14">
              <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-rose-600/15 blur-3xl" />
              <span className={`${eyebrow} relative mb-4 block`}>Let&apos;s build</span>
              <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">Turn Cognitive Prototypes Into <span className="text-rose-500">Mission-Critical Systems</span></h2>
              <p className="relative mt-5 max-w-md text-sm leading-relaxed text-zinc-400">Tell us the workflow you want to automate. We will come back with a technical assessment, not a sales pitch.</p>
              <div className="relative mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.02]">Schedule Technical Briefing</a>
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-zinc-100 transition-colors hover:border-rose-500/50">Explore Ecosystem</a>
              </div>
            </div>
            <div className="relative min-h-[300px]">
              <img src="/images/ai-lab/cta-img-001.webp" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes aiFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </main>
  );
}

/* ==========================================================================
 * PREVIOUS IMPLEMENTATION (COMMENTED OUT AS PER USER REQUEST FOR EASY ROLLBACK)
 * ==========================================================================
${commentedOldLines}
*/
