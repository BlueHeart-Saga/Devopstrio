"use client";

import React, { useRef } from "react";
import { motion, useAnimationFrame, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

const headingWords = [
  "Leaders",
  "who",
  "turn",
  "engineering",
  "into",
  "lasting",
  "impact",
];

/* ---------------- perspective grid geometry ---------------- */
const W = 1200;
const H = 400;
const H_LINES = 6;
const V_RANGE = 4; // cleaner perspective grid
const V_STEP = 240;
const SPEED = 0.16; // slow, calm

const lineY = (i: number, phase: number) =>
  H * Math.pow((i + phase) / H_LINES, 2.2);

const lineOpacity = (i: number, phase: number) =>
  Math.min(1, ((i + phase) / H_LINES) * 1.5) * 0.12;

export const LeadershipHero = () => {
  const still = useReducedMotion() ?? false;

  const hRefs = useRef<(SVGLineElement | null)[]>([]);
  const vRefs = useRef<(SVGLineElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ target: 0, current: 0 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();

    mouse.current.target =
      ((e.clientX - r.left) / r.width - 0.5) * 2;
  };

  useAnimationFrame((t) => {
    if (still) return;

    const m = mouse.current;

    m.current += (m.target - m.current) * 0.05;

    const phase = ((t / 1000) * SPEED) % 1;

    const vpX = W / 2 + m.current * 90;

    hRefs.current.forEach((el, i) => {
      if (!el) return;

      const y = lineY(i, phase);

      el.setAttribute("y1", String(y));
      el.setAttribute("y2", String(y));
      el.setAttribute(
        "stroke-opacity",
        String(lineOpacity(i, phase))
      );
    });

    vRefs.current.forEach((el) =>
      el?.setAttribute("x2", String(vpX))
    );

    if (glowRef.current) {
      glowRef.current.style.transform = `translateX(${m.current * 28}px)`;
    }
  });

  return (
    <section
      id="hero"
      onMouseMove={still ? undefined : onMove}
      className="
        relative w-full min-h-[100svh]
        bg-black
        bg-[radial-gradient(ellipse_at_50%_75%,rgba(244,63,94,0.045),transparent_60%)]
        text-white
        overflow-hidden
        flex flex-col
      "
    >
      {/* ---------- text ---------- */}
      <div
        className="
          relative z-10
          max-w-5xl mx-auto w-full
          px-6 sm:px-10
          pt-32 sm:pt-36 lg:pt-40
          pb-12
          flex flex-col items-center text-center
        "
      >
        {/* badge */}
        <motion.span
          initial={still ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="
            mb-7
            inline-flex items-center gap-2
            rounded-full
            border border-rose-500/20
            bg-rose-500/[0.03]
            px-4 py-1.5
            text-xs font-medium
            tracking-[0.18em]
            uppercase
            text-rose-400
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />

          Leadership &amp; Executive Team
        </motion.span>

        {/* heading */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            xl:text-6xl
            font-semibold
            tracking-tight
            leading-[1.08]
            flex flex-wrap
            justify-center
            gap-x-[0.28em]
          "
        >
          {headingWords.map((w, i) => (
            <span
              key={w}
              className="overflow-hidden inline-block pb-[0.12em]"
            >
              <motion.span
                className="inline-block"
                initial={still ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.07,
                  ease: EASE,
                }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* description */}
        <motion.p
          initial={still ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.8,
            ease: EASE,
          }}
          className="
            mt-8
            max-w-2xl
            text-zinc-300
            text-base sm:text-lg
            leading-relaxed
          "
        >
          Meet the people guiding 525+ engineers across four global hubs,
          and the principles behind every system we build.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={still ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.95,
            ease: EASE,
          }}
          className="
            mt-10
            flex flex-wrap
            items-center
            justify-center
            gap-4 sm:gap-6
          "
        >
          <a
            href="#executive-leadership"
            className="btn-tactile group"
          >
            <div>
              <span>
                Meet Our Leaders

                <ArrowRight
                  className="
                    w-4 h-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </span>
            </div>
          </a>

          <Link
            href="/careers"
            className="btn-tactile btn-tactile-secondary group"
          >
            <div>
              <span>Join Our Team</span>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* ---------- horizon stage ---------- */}
      <div className="relative mt-auto h-[26svh] min-h-[200px]">

        {/* halo arcs */}
        <div
          ref={glowRef}
          aria-hidden
          className="
            absolute
            bottom-full
            left-1/2
            -translate-x-1/2
            w-[min(900px,120vw)]
            h-[450px]
            overflow-hidden
            pointer-events-none
            will-change-transform
          "
        >
          {[100, 68, 38].map((pct, i) => (
            <div
              key={pct}
              className="
                absolute
                left-1/2
                bottom-0
                aspect-square
                -translate-x-1/2
                translate-y-1/2
              "
              style={{
                width: `${pct}%`,
              }}
            >
              <motion.div
                initial={
                  still
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.85,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.6,
                  delay: 0.3 + i * 0.2,
                  ease: EASE,
                }}
                className={`w-full h-full rounded-full border ${
                  i === 2
                    ? "border-rose-400/20 bg-[radial-gradient(circle,rgba(251,113,133,0.12),rgba(251,113,133,0.02)_60%,transparent_72%)]"
                    : i === 1
                    ? "border-rose-400/10"
                    : "border-rose-400/5"
                }`}
              />
            </div>
          ))}
        </div>

        {/* horizon glow */}
        <div
          aria-hidden
          className="
            absolute
            -top-16
            inset-x-0
            h-32
            bg-[radial-gradient(ellipse_at_center_bottom,rgba(251,113,133,0.12),transparent_65%)]
            blur-2xl
            pointer-events-none
          "
        />

        {/* horizon line */}
        <motion.div
          aria-hidden
          initial={
            still
              ? false
              : {
                  scaleX: 0,
                  opacity: 0,
                }
          }
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.8,
            delay: 0.2,
            ease: EASE,
          }}
          className="
            absolute
            top-0
            inset-x-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-rose-400/50
            to-transparent
            shadow-[0_0_18px_rgba(244,63,94,0.22)]
          "
        />

        {/* perspective grid */}
        <motion.svg
          aria-hidden
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMin slice"
          className="absolute inset-0 w-full h-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 18%, #000 82%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, #000 18%, #000 82%, transparent)",
          }}
          initial={
            still
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.6,
            delay: 0.5,
          }}
        >
          <defs>
            <linearGradient
              id="hz-v"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="0"
              y2={H}
            >
              <stop
                offset="0"
                stopColor="#f43f5e"
                stopOpacity="0"
              />

              <stop
                offset="1"
                stopColor="#fb7185"
                stopOpacity="0.11"
              />
            </linearGradient>
          </defs>

          {/* converging vertical lines */}
          {Array.from(
            {
              length: V_RANGE * 2 + 1,
            },
            (_, n) => n - V_RANGE
          ).map((k, idx) => (
            <line
              key={k}
              ref={(el) => {
                vRefs.current[idx] = el;
              }}
              x1={W / 2 + k * V_STEP}
              y1={H}
              x2={W / 2}
              y2={0}
              stroke="url(#hz-v)"
              strokeWidth={0.8}
            />
          ))}

          {/* horizontal travelling lines */}
          {Array.from(
            {
              length: H_LINES,
            },
            (_, i) => (
              <line
                key={i}
                ref={(el) => {
                  hRefs.current[i] = el;
                }}
                x1={-1500}
                x2={W + 1500}
                y1={lineY(i, 0.35)}
                y2={lineY(i, 0.35)}
                stroke="#fb7185"
                strokeOpacity={lineOpacity(i, 0.35)}
                strokeWidth={1}
              />
            )
          )}
        </motion.svg>

        {/* fade into next section */}
        <div
          aria-hidden
          className="
            absolute
            inset-x-0
            bottom-0
            h-56
            bg-gradient-to-t
            from-black
            to-transparent
            pointer-events-none
          "
        />
      </div>
    </section>
  );
};
