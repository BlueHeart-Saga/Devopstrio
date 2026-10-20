"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sun, Moon, Globe } from "lucide-react";

/* ------------------------------------------------------------------
 * Follow-the-Sun Relay: interactive toolkit for the global delivery
 * pages. Everything here is computed from real IANA timezones, so the
 * live clocks and the coverage timeline stay accurate without any
 * hard-coded data.
 * ------------------------------------------------------------------ */

export type HubKey = "uk" | "eu" | "in" | "us";
export type HubFocus = HubKey | "all";

export const RELAY_HUBS: { key: HubKey; name: string; tz: string }[] = [
  { key: "uk", name: "United Kingdom", tz: "Europe/London" },
  { key: "eu", name: "Europe", tz: "Europe/Berlin" },
  { key: "in", name: "India", tz: "Asia/Kolkata" },
  { key: "us", name: "United States", tz: "America/New_York" },
];

// Illustrative business-hours window used for the relay view.
const SHIFT_START = 9;
const SHIFT_END = 18;

type LocalTime = { hour: number; hm: string; full: string; weekday: string };

function localTime(tz: string, date: Date): LocalTime {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const hh = get("hour");
  const mm = get("minute");
  const ss = get("second");
  return { hour: Number(hh), hm: `${hh}:${mm}`, full: `${hh}:${mm}:${ss}`, weekday: get("weekday") };
}

function isOnShift(t: LocalTime) {
  const weekend = t.weekday === "Sat" || t.weekday === "Sun";
  return !weekend && t.hour >= SHIFT_START && t.hour < SHIFT_END;
}

const ENHANCER_CSS = `
.dv-spot{position:relative;isolation:isolate;--dv-x:50%;--dv-y:50%}
.dv-spot::before{content:"";position:absolute;inset:0;z-index:-1;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s ease;background:radial-gradient(circle 340px at var(--dv-x) var(--dv-y),rgba(244,63,94,.16),transparent 70%)}
.dv-spot:hover::before{opacity:1}
#relay-cursor{will-change:transform}
@media (pointer:coarse){#relay-cursor{display:none}}
`;

/** Scroll progress, pointer spotlight on cards and a soft cursor glow. Mount once per page. */
export function RelayEnhancer() {
  useEffect(() => {
    const progress = document.getElementById("relay-progress");
    const cursor = document.getElementById("relay-cursor");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (progress) progress.style.transform = `scaleX(${ratio})`;
    };

    const onMove = (e: PointerEvent) => {
      const card = e.target instanceof Element ? e.target.closest<HTMLElement>(".dv-spot") : null;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--dv-x", `${e.clientX - r.left}px`);
        card.style.setProperty("--dv-y", `${e.clientY - r.top}px`);
      }
      if (cursor && !reduce) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
          cursor.style.opacity = "1";
        });
      }
    };

    const onLeave = () => {
      if (cursor) cursor.style.opacity = "0";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ENHANCER_CSS }} />
      <div
        id="relay-progress"
        aria-hidden
        className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-rose-600 via-rose-400 to-indigo-500"
        style={{ transform: "scaleX(0)" }}
      />
      <div
        id="relay-cursor"
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[5] h-[460px] w-[460px] rounded-full mix-blend-screen opacity-0 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle, rgba(244,63,94,0.10), transparent 62%)" }}
      />
    </>
  );
}

/** Four live hub clocks. The page's own hub is highlighted. */
export function RelayPulse({ active = "all" }: { active?: HubFocus }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mx-auto mt-10 w-full max-w-3xl">
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Follow-the-sun relay</span>
        <span className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-rose-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
          </span>
          LIVE
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
        {RELAY_HUBS.map((hub) => {
          const t = now ? localTime(hub.tz, now) : null;
          const on = t ? isOnShift(t) : false;
          const isActive = active === hub.key;
          return (
            <div
              key={hub.key}
              className={`rounded-xl border px-4 py-3 text-left backdrop-blur-sm transition-all duration-300 ${
                isActive
                  ? "border-rose-500/60 bg-rose-500/10 shadow-[0_0_30px_-8px_rgba(244,63,94,0.5)]"
                  : "border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-[11px] font-semibold text-zinc-400">{hub.name}</span>
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    on ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-zinc-600"
                  }`}
                />
              </div>
              <div className="mt-1 font-mono text-lg tabular-nums text-white">{t ? t.full : "--:--:--"}</div>
              <div className="font-mono text-[10px] text-zinc-500">{t ? (on ? "On shift" : "Off shift") : "Syncing…"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Interactive 24-hour coverage timeline. Drag or use arrow keys to scrub through UTC hours. */
export function SunCoverage({ active = "all", id = "relay" }: { active?: HubFocus; id?: string }) {
  const [nowUtc, setNowUtc] = useState<number | null>(null);
  const [matrix, setMatrix] = useState<boolean[][] | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNowUtc(d.getUTCHours() + d.getUTCMinutes() / 60);
    };
    tick();
    const timer = window.setInterval(tick, 30000);

    // A cell counts as covered if the hub is on shift at any point in that UTC hour.
    const day = new Date();
    setMatrix(
      RELAY_HUBS.map((hub) =>
        Array.from({ length: 24 }, (_, h) => {
          const start = new Date(day);
          start.setUTCHours(h, 0, 0, 0);
          const end = new Date(day);
          end.setUTCHours(h, 59, 0, 0);
          return isOnShift(localTime(hub.tz, start)) || isOnShift(localTime(hub.tz, end));
        })
      )
    );
    return () => window.clearInterval(timer);
  }, []);

  const liveHour = nowUtc !== null ? Math.floor(nowUtc) : 12;
  const hourIdx = selected ?? liveHour;

  const readBase = new Date();
  readBase.setUTCHours(hourIdx, 30, 0, 0);

  const coveredHours = matrix
    ? Array.from({ length: 24 }, (_, h) => matrix.some((row) => row[h])).filter(Boolean).length
    : null;

  const hourAt = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - r.left) / r.width, 0), 0.999);
    return Math.floor(ratio * 24);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") setSelected((hourIdx + 1) % 24);
    if (e.key === "ArrowLeft") setSelected((hourIdx + 23) % 24);
  };

  const pct = (h: number) => `${((h + 0.5) / 24) * 100}%`;

  return (
    <section id={id} className="relative w-full overflow-hidden scroll-mt-24 border-b border-zinc-900/60 bg-black py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/[0.05] blur-[140px]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-rose-500">
            Interactive · Follow the sun
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-4xl">
            Drag across the day. See who is on shift.
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
            Local business hours (09:00–18:00, Mon–Fri) for each delivery hub, converted to UTC for today. Drag the
            timeline or use the arrow keys.
          </p>
        </div>

        <div className="dv-spot rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-5 md:p-8">
          <div className="grid grid-cols-[104px_1fr] gap-x-4 md:grid-cols-[168px_1fr]">
            {/* Labels */}
            <div className="flex flex-col gap-2">
              {RELAY_HUBS.map((hub) => (
                <div key={hub.key} className="flex h-7 items-center md:h-9">
                  <span
                    className={`truncate text-[11px] font-semibold md:text-xs ${
                      active === hub.key ? "text-rose-400" : "text-zinc-400"
                    }`}
                  >
                    {hub.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Track */}
            <div
              ref={trackRef}
              role="slider"
              tabIndex={0}
              aria-label="Select a UTC hour"
              aria-valuemin={0}
              aria-valuemax={23}
              aria-valuenow={hourIdx}
              aria-valuetext={`${String(hourIdx).padStart(2, "0")}:30 UTC`}
              onKeyDown={onKeyDown}
              onPointerDown={(e) => {
                dragging.current = true;
                e.currentTarget.setPointerCapture(e.pointerId);
                setSelected(hourAt(e.clientX));
              }}
              onPointerMove={(e) => {
                if (dragging.current) setSelected(hourAt(e.clientX));
              }}
              onPointerUp={() => {
                dragging.current = false;
              }}
              onPointerCancel={() => {
                dragging.current = false;
              }}
              className="relative flex touch-none select-none cursor-ew-resize flex-col gap-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-rose-500/60"
            >
              {RELAY_HUBS.map((hub) => {
                const row = matrix ? matrix[RELAY_HUBS.indexOf(hub)] : null;
                const isActive = active === hub.key;
                return (
                  <div key={hub.key} className="flex h-7 gap-[3px] md:h-9">
                    {Array.from({ length: 24 }, (_, h) => {
                      const on = row ? row[h] : false;
                      return (
                        <div
                          key={h}
                          className={`flex-1 rounded-[3px] transition-colors duration-300 ${
                            on
                              ? isActive
                                ? "bg-gradient-to-b from-rose-400 to-rose-600 shadow-[0_0_12px_-2px_rgba(244,63,94,0.7)]"
                                : "bg-gradient-to-b from-zinc-500 to-zinc-700"
                              : "bg-zinc-900"
                          }`}
                        />
                      );
                    })}
                  </div>
                );
              })}

              {/* Selected hour marker */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 w-[2px] -translate-x-1/2 bg-white/80 shadow-[0_0_14px_rgba(255,255,255,0.7)] transition-[left] duration-150"
                style={{ left: pct(hourIdx) }}
              />
              {/* Live "now" marker */}
              {nowUtc !== null && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-2 h-[calc(100%+1rem)] w-px bg-rose-500/70"
                  style={{ left: `${(nowUtc / 24) * 100}%` }}
                >
                  <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.9)]" />
                </div>
              )}
            </div>

            {/* Axis */}
            <div />
            <div className="mt-3 grid font-mono text-[9px] text-zinc-600 md:text-[10px]" style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}>
              {Array.from({ length: 24 }, (_, h) => (
                <span key={h} className="text-center">
                  {h % 3 === 0 ? String(h).padStart(2, "0") : ""}
                </span>
              ))}
            </div>
          </div>

          {/* Readout */}
          <div className="mt-8 grid grid-cols-2 gap-2.5 md:grid-cols-4">
            {RELAY_HUBS.map((hub) => {
              const t = localTime(hub.tz, readBase);
              const on = isOnShift(t);
              const isActive = active === hub.key;
              return (
                <div
                  key={hub.key}
                  className={`rounded-xl border px-4 py-3 transition-colors duration-300 ${
                    isActive ? "border-rose-500/50 bg-rose-500/10" : "border-zinc-800/80 bg-black/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-[11px] font-semibold text-zinc-400">{hub.name}</span>
                    {on ? <Sun className="h-3.5 w-3.5 shrink-0 text-amber-400" /> : <Moon className="h-3.5 w-3.5 shrink-0 text-zinc-500" />}
                  </div>
                  <div className="mt-1 font-mono text-lg tabular-nums text-white">{t.hm}</div>
                  <div className="font-mono text-[10px] text-zinc-500">{on ? "On shift" : "Off shift"}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-zinc-800/80 pt-5 text-xs text-zinc-400 md:flex-row md:items-center">
            <span className="flex items-center gap-2 font-mono">
              <Globe className="h-3.5 w-3.5 text-rose-500" />
              {coveredHours === null
                ? "Calculating coverage…"
                : `${coveredHours} of 24 UTC hours have at least one hub in business hours today`}
            </span>
            <span className="text-zinc-500">
              Showing {String(hourIdx).padStart(2, "0")}:30 UTC · outside these windows, after-hours cover depends on the engagement model.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
