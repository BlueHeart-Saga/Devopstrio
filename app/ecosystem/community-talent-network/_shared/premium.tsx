import React from "react";
import {
  Users,
  Award,
  Globe,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------
 * Shared premium primitives for the Community & Talent Network pages.
 * Keeping these in one file guarantees every page shares the same
 * hero actions, trust bar and stats strip. Private `_shared` folder:
 * Next.js App Router does not treat it as a route.
 * ------------------------------------------------------------------ */

export const heroPrimaryBtn =
  "group inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wide rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_12px_40px_-12px_rgba(225,29,72,0.55)] cursor-pointer";

export const heroPrimaryIconWrap =
  "w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300";

export const heroSecondaryBtn =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide border border-white/10 hover:border-rose-500/50 bg-white/[0.03] hover:bg-white/[0.06] text-white transition-all duration-300 cursor-pointer backdrop-blur-sm";

const TRUST_ICONS: Record<string, LucideIcon> = {
  users: Users,
  award: Award,
  globe: Globe,
  zap: Zap,
  shield: ShieldCheck,
  check: CheckCircle2,
  sparkles: Sparkles,
};

export type TrustItem = { icon: keyof typeof TRUST_ICONS; text: string };

/** Glass chip row rendered under the hero actions. */
export function HeroTrustBar({ items }: { items: TrustItem[] }) {
  return (
    <ul className="flex flex-wrap justify-start gap-2.5 md:gap-3 list-none p-0 m-0">
      {items.map((item, idx) => {
        const Icon = TRUST_ICONS[item.icon] ?? CheckCircle2;
        return (
          <li
            key={idx}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm text-xs md:text-[13px] font-medium text-zinc-300"
          >
            <Icon className="w-3.5 h-3.5 text-rose-500 shrink-0" aria-hidden />
            <span>{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
}

export type Metric = { val: string; label: string; sub?: string };

const GRID_BY_COUNT: Record<number, string> = {
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
};

/** Uniform stats band that sits directly under every page hero. */
export function StatStrip({ stats }: { stats: Metric[] }) {
  const grid = GRID_BY_COUNT[stats.length] ?? GRID_BY_COUNT[4];
  return (
    <section className="relative w-full py-14 md:py-16 bg-[#030303] border-b border-zinc-900/80 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className={`grid ${grid} gap-4 lg:gap-5`}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-6 md:p-7 rounded-2xl bg-gradient-to-b from-[#0E0E10] to-[#0A0A0A] border border-zinc-800/80 text-center overflow-hidden transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-0.5"
            >
              <span
                aria-hidden
                className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 group-hover:text-rose-500 transition-colors duration-300">
                {stat.val}
              </span>
              <span className="block text-xs md:text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                {stat.label}
              </span>
              {stat.sub && (
                <span className="block text-xs font-mono text-rose-400/90 font-medium">
                  {stat.sub}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
