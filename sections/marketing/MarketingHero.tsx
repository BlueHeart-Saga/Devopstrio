"use client";

import React from "react";
import Image from "next/image";
import { FileText, Download, Send, X, Search } from "lucide-react";
import { MarketingResourceItem, POPULAR } from "./config";

export function MarketingHero({
  query, onQuery, onSubmit, onRequest, onProfile, stats, covers, loading,
}: {
  query: string;
  onQuery: (q: string) => void;
  onSubmit: () => void;
  onRequest: () => void;
  onProfile?: () => void;
  stats: { resources: number; categories: number; formats: number };
  covers: MarketingResourceItem[];
  loading: boolean;
}) {
  const val = (n: number) => (loading ? "–" : n);
  // Real covers only (max 3). Latest is always in front/center.
  // 0 covers -> one placeholder, 1 -> single card, 2 -> pair, 3 -> full fan.
  const stack: (MarketingResourceItem | undefined)[] = covers.length ? covers.slice(0, 3) : [undefined];
  const layouts: Record<number, string[]> = {
    1: ["z-10"],
    2: ["z-10 -rotate-3 -translate-x-14", "rotate-3 translate-x-14 translate-y-4 opacity-80"],
    3: ["z-10", "-rotate-6 -translate-x-24 translate-y-6 opacity-80", "rotate-6 translate-x-24 translate-y-6 opacity-80"],
  };
  const positions = layouts[stack.length] || layouts[1];

  return (
    <section className="relative isolate overflow-hidden border-b border-zinc-900 bg-black pb-16 pt-32 text-white lg:pb-24 lg:pt-40">
      <div aria-hidden className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)",
        }} />
      <div aria-hidden className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.18),transparent_65%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="mkt-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3.5 py-1.5 text-xs font-medium text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            Sales enablement hub
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Every deck, brochure and blueprint,{" "}
            <span className="text-zinc-400">ready to send.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
            Browse, preview and download our latest corporate material. Open any document as a flipbook, right in your browser.
          </p>

          <form
            role="search"
            onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
            className="relative mt-9 flex max-w-xl items-center"
          >
            <Search className="pointer-events-none absolute left-4 z-10 h-5 w-5 text-rose-400" aria-hidden />
            <label htmlFor="mkt-search" className="sr-only">Search resources</label>
            <input
              id="mkt-search"
              type="text"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Search by topic, service or platform"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 py-4 pl-12 pr-32 text-sm text-white placeholder-zinc-500 shadow-2xl shadow-black/50 outline-none backdrop-blur transition focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
            />
            {query && (
              <button type="button" onClick={() => onQuery("")} aria-label="Clear search"
                className="absolute right-24 rounded-full bg-zinc-800 p-1.5 text-zinc-400 transition hover:bg-zinc-700 hover:text-white">
                <X className="h-3.5 w-3.5" />
              </button>
            )}
            <button type="submit"
              className="absolute right-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-500">
              Search
            </button>
          </form>

          <div className="mt-4 flex max-w-xl flex-wrap items-center gap-2 text-xs">
            <span className="text-zinc-500">Try:</span>
            {POPULAR.map((t) => (
              <button key={t} type="button" onClick={() => onQuery(t)}
                className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 text-zinc-300 transition hover:border-rose-500/40 hover:text-rose-300">
                {t}
              </button>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button type="button" onClick={onRequest}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200">
              <Send className="h-4 w-4" aria-hidden /> Request custom deck
            </button>
            {onProfile && (
              <button type="button" onClick={onProfile}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-700 hover:text-white">
                <Download className="h-4 w-4 text-rose-400" aria-hidden /> Company profile
              </button>
            )}
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-zinc-900 pt-6">
            {[
              ["Resources", val(stats.resources)],
              ["Categories", val(stats.categories)],
              ["Formats", val(stats.formats)],
            ].map(([label, n]) => (
              <div key={label as string}>
                <dd className="text-3xl font-semibold tabular-nums text-white">{n}</dd>
                <dt className="mt-1 text-xs text-zinc-500">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Fanned document stack, built from real latest covers */}
        <div className="relative mx-auto hidden h-[420px] w-full max-w-md lg:block" aria-hidden>
          <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.16),transparent_65%)]" />
          {stack.map((c, i) => {
            return (
              <div key={c?.id ?? `placeholder-${i}`}
                className={`absolute left-1/2 top-1/2 h-72 w-52 overflow-hidden rounded-xl border border-zinc-700/70 bg-zinc-900 shadow-2xl shadow-black/70 transition duration-500 hover:-translate-y-2 ${positions[i]}`}
                style={{ marginLeft: "-6.5rem", marginTop: "-9rem" }}>
                {c?.thumbnailUrl ? (
                  <Image src={c.thumbnailUrl} alt="" fill sizes="208px" className="object-cover" />
                ) : (
                  <div className="flex h-full flex-col justify-end gap-2 bg-gradient-to-br from-zinc-800 to-zinc-950 p-4">
                    <FileText className="h-8 w-8 text-rose-400/80" />
                    <div className="h-2 w-3/4 rounded bg-zinc-700" />
                    <div className="h-2 w-1/2 rounded bg-zinc-800" />
                  </div>
                )}
                {c && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-10">
                    <p className="line-clamp-2 text-xs font-medium text-white">{c.title}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
