"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface Product {
  name: string;
  tagline: string;
  desc: string;
  logo: string;
  image: string;
  link: string;
  accent: string; // brand color (6-digit hex)
}

const PRODUCTS: Product[] = [
  {
    name: "Humanex",
    tagline: "AI Recruitment & Enterprise Workforce Management",
    desc: "All-in-one HR tech platform streamlining intelligent candidate sourcing, AI-driven assessment scoring, multi-tenant onboarding, and global workforce telemetry.",
    logo: "/webp/assets/Home-page/our-products/logo/humanex.webp",
    image: "/webp/assets/Home-page/our-products/humanex.webp",
    link: "/ecosystem/platforms-solutions/saas-platforms/humanex",
    accent: "#fb7185",
  },
  {
    name: "Brio",
    tagline: "AI Marketing, Creator & Growth Engine",
    desc: "Unified marketing ecosystem providing predictive campaign attribution, intelligent creator collaboration, automated copy generation, and multi-channel asset scheduling.",
    logo: "/webp/assets/Home-page/our-products/logo/brio.webp",
    image: "/webp/assets/Home-page/our-products/brio.webp",
    link: "/ecosystem/platforms-solutions/saas-platforms/brio",
    accent: "#60a5fa",
  },
  {
    name: "eSigniva",
    tagline: "Zero-Trust Electronic Signature & Digital Trust",
    desc: "Cryptographically secured e-signature and digital document trust platform delivering immutable audit trails, biometric validation, and global regulatory compliance.",
    logo: "/webp/assets/Home-page/our-products/logo/safesign.webp",
    image: "/webp/assets/Home-page/our-products/safesign.webp",
    link: "/ecosystem/platforms-solutions/saas-platforms/esigniva",
    accent: "#fb923c",
  },
  {
    name: "CareSuite",
    tagline: "HIPAA-Compliant Healthcare & Clinical Operations",
    desc: "Comprehensive healthcare operations suite managing patient consultation queues, encrypted telehealth video consults, EHR interoperability, and secure medical charts.",
    logo: "/webp/assets/Home-page/our-products/logo/Caresuite.webp",
    image: "/webp/assets/Home-page/our-products/caresuite.webp",
    link: "/ecosystem/platforms-solutions/saas-platforms/caresuite",
    accent: "#34d399",
  },
  {
    name: "Homela",
    tagline: "PropTech & Enterprise Property Management",
    desc: "Next-generation property management workspace connecting tenants, property managers, and service vendors with automated maintenance ticketing and payment tracking.",
    logo: "/webp/assets/Home-page/our-products/logo/homela.webp",
    image: "/webp/assets/Home-page/our-products/homela.webp",
    link: "/ecosystem/platforms-solutions/saas-platforms/homela",
    accent: "#c084fc",
  },
  {
    name: "Campix",
    tagline: "Smart Campus & Higher Education Operations",
    desc: "Unified campus ERP ecosystem connecting students, faculty, hostel, transport, fee billing, and real-time academic governance into a single digital platform.",
    logo: "/webp/assets/Home-page/our-products/logo/Campix.webp",
    image: "/webp/assets/landingpage-campix/hero.webp",
    link: "/ecosystem/platforms-solutions/saas-platforms/campix",
    accent: "#fbbf24",
  },
  {
    name: "Justivon",
    tagline: "Legal Practice, Case & Contract Intelligence",
    desc: "Enterprise legal operations platform managing multi-jurisdiction case dockets, AI-powered contract discovery, automated client billing, and strict compliance workflows.",
    logo: "/webp/assets/Home-page/our-products/logo/Justivon.webp",
    image: "/webp/assets/Home-page/our-products/justivon.webp",
    link: "/ecosystem/platforms-solutions/saas-platforms/justivon",
    accent: "#818cf8",
  },
  {
    name: "Prestivo",
    tagline: "FinTech Advisory & Wealth Intelligence Platform",
    desc: "Intelligent wealth management and credit intelligence platform delivering real-time portfolio analytics, automated risk scoring, and secure micro-lending pipelines.",
    logo: "/webp/assets/Home-page/our-products/logo/Prestivo.webp",
    image: "/webp/assets/Home-page/our-products/prestivo.webp",
    link: "/ecosystem/platforms-solutions/saas-platforms/prestivo",
    accent: "#2dd4bf",
  },
];

const AUTOPLAY_MS = 6000;

export function FeaturedProducts() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = PRODUCTS[active];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // auto-advance; any manual change restarts the timer, hover/focus pauses it
  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % PRODUCTS.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduced]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + PRODUCTS.length) % PRODUCTS.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="showcase" className="relative w-full overflow-hidden border-b border-zinc-900/60 bg-[#020202] py-14 lg:py-16">
      <style>{`
        @keyframes fpIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        .fp-in{animation:fpIn .5s cubic-bezier(.2,.7,.2,1)}
        .fp-grid{display:grid;gap:2rem}
        @media (min-width:1024px){.fp-grid{grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:3.5rem}}
        @media (prefers-reduced-motion:reduce){.fp-in{animation:none}}
      `}</style>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 xl:px-8">
        <Reveal className="mx-auto mb-8 max-w-2xl text-center lg:mb-10">
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            Featured Products <span className="text-rose-500">Showcase</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
            Pick a platform to preview it, then open its landing page.
          </p>
        </Reveal>

        <div
          className="fp-grid items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Product list (chips on mobile, vertical list on desktop) */}
          <div
            role="tablist"
            aria-label="Featured products"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {PRODUCTS.map((p, i) => {
              const on = i === active;
              return (
                <button
                  key={p.name}
                  ref={(el) => { tabs.current[i] = el; }}
                  id={`prod-tab-${i}`}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls="prod-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group relative flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 cursor-pointer lg:w-full lg:gap-4 lg:px-5 lg:py-3 ${
                    on ? "border-white/10 bg-white/[0.045]" : "border-transparent hover:bg-white/[0.025]"
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute bottom-3 left-0 top-3 hidden w-0.5 rounded-full transition-opacity duration-300 lg:block"
                    style={{ background: p.accent, opacity: on ? 1 : 0 }}
                  />
                  <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/[0.06] bg-zinc-900/80 lg:h-10 lg:w-10">
                    <Image src={p.logo} alt="" fill unoptimized className="object-contain p-1.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm font-semibold uppercase tracking-wider transition-colors lg:text-base ${on ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                      {p.name}
                    </span>
                    <span className="hidden truncate text-xs text-zinc-500 lg:block">{p.tagline}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="hidden h-4 w-4 shrink-0 transition-all duration-300 lg:block"
                    style={{ color: p.accent, opacity: on ? 1 : 0, transform: on ? "none" : "translate(-4px, 4px)" }}
                  />
                </button>
              );
            })}
          </div>

          {/* Preview stage */}
          <div id="prod-panel" role="tabpanel" aria-labelledby={`prod-tab-${active}`} className="relative">
            {PRODUCTS.map((p, i) => (
              <div
                key={p.name}
                aria-hidden
                className="pointer-events-none absolute -inset-8 -z-10 blur-3xl transition-opacity duration-700"
                style={{ opacity: i === active ? 0.35 : 0, background: `radial-gradient(60% 55% at 50% 45%, ${p.accent}, transparent 70%)` }}
              />
            ))}

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/70">
              <div className="flex h-9 items-center gap-1.5 border-b border-white/[0.06] bg-zinc-900/80 px-4" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="mx-auto rounded-md bg-zinc-800/80 px-3 py-0.5 text-[11px] text-zinc-400">{current.name}</span>
                <span className="w-[42px]" />
              </div>

              <Link href={current.link} aria-label={`Open ${current.name} landing page`} className="group/shot relative block aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                {PRODUCTS.map((p, i) => (
                  <Image
                    key={p.name}
                    src={p.image}
                    alt={i === active ? `${p.name} preview` : ""}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className={`object-cover object-top transition-all duration-700 ease-out ${i === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"}`}
                  />
                ))}
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/shot:opacity-100" />
                <span className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black opacity-0 shadow-xl transition-all duration-300 group-hover/shot:translate-y-0 group-hover/shot:opacity-100">
                  Visit {current.name} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            </div>

            <div key={active} className="fp-in mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider" style={{ color: current.accent }}>{current.tagline}</p>
                <p className="text-sm leading-relaxed text-zinc-400">{current.desc}</p>
              </div>
              <Link
                href={current.link}
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:bg-white/[0.06] sm:self-auto cursor-pointer"
                style={{ borderColor: `${current.accent}66`, color: current.accent }}
              >
                Explore {current.name} <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   PREVIOUS 3-COLUMN GRID SHOWCASE CODE (PRESERVED FOR COMPARISON / ROLLBACK)
   =========================================================================
export function FeaturedProductsOldGrid() {
  const products = PRODUCTS;

  return (
    <section id="showcase" className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-rose-650/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Featured Products <span className="text-rose-500">Showcase</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-white/[0.05] bg-zinc-950/60 p-6 backdrop-blur-xl transition-all duration-500 hover:border-rose-500/20 hover:bg-zinc-900/40"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-1 bg-zinc-900/80 border border-white/[0.05]">
                      <Image
                        src={prod.logo}
                        alt={`${prod.name} logo`}
                        fill
                        unoptimized
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                  <Link href={prod.link}>
                    <ArrowUpRight size={14} className="text-zinc-500 hover:text-rose-500 transition-colors cursor-pointer" />
                  </Link>
                </div>

                <Link href={prod.link} className="inline-block">
                  <h3 className="text-xl md:text-2xl font-semibold text-white uppercase tracking-wider mb-2 mt-1 hover:text-rose-400 group-hover:text-rose-400 transition-colors">
                    {prod.name}
                  </h3>
                </Link>

                <Link
                  href={prod.link}
                  className="block relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.03] group-hover:border-rose-500/15 bg-zinc-900/40 transition-all duration-500"
                >
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/
