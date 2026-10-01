"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Mini line-art animations (one per pillar). Pure SVG, rose strokes.  */
/* `still` = reduced motion → static drawing.                          */
/* ------------------------------------------------------------------ */
type ArtProps = { still: boolean };
const loop = (delay = 0, duration = 3, ease: any = "easeInOut") => ({
  duration,
  delay,
  repeat: Infinity,
  ease,
});
const svgProps = {
  viewBox: "0 0 120 80",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-full h-full",
  "aria-hidden": true,
};

// AI & Data: live bars
const DataArt = ({ still }: ArtProps) => (
  <svg {...svgProps}>
    <line x1="4" y1="76" x2="116" y2="76" strokeOpacity="0.4" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <motion.rect
        key={i}
        x={10 + i * 15}
        y={20}
        width={9}
        height={56}
        rx={2}
        fill="currentColor"
        fillOpacity={0.35}
        stroke="none"
        style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        initial={{ scaleY: 0.5 }}
        animate={still ? undefined : { scaleY: [0.25, 0.95, 0.5, 1, 0.3] }}
        transition={loop(i * 0.18, 2.6 + (i % 3) * 0.5)}
      />
    ))}
  </svg>
);

// Cloud: connected nodes pulsing
const nodes = [
  [20, 54], [44, 22], [66, 58], [96, 26], [60, 38],
];
const links = [[0, 1], [1, 4], [4, 2], [4, 3], [0, 4], [2, 3]];
const CloudArt = ({ still }: ArtProps) => (
  <svg {...svgProps}>
    {links.map(([a, b], i) => (
      <motion.line
        key={i}
        x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
        strokeOpacity={0.3}
        animate={still ? undefined : { strokeOpacity: [0.15, 0.7, 0.15] }}
        transition={loop(i * 0.4, 3.2)}
      />
    ))}
    {nodes.map(([x, y], i) => (
      <motion.circle
        key={i}
        cx={x} cy={y} r={4}
        fill="currentColor"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={still ? undefined : { scale: [1, 1.5, 1] }}
        transition={loop(i * 0.45, 2.6)}
      />
    ))}
  </svg>
);

// DevOps: build → test → deploy pipeline
const DevOpsArt = ({ still }: ArtProps) => (
  <svg {...svgProps}>
    <line x1="30" y1="40" x2="48" y2="40" strokeOpacity="0.5" />
    <line x1="72" y1="40" x2="90" y2="40" strokeOpacity="0.5" />
    {[6, 48, 90].map((x, i) => (
      <motion.rect
        key={x}
        x={x} y={28} width={24} height={24} rx={6}
        fill="currentColor"
        fillOpacity={0.12}
        animate={still ? undefined : { fillOpacity: [0.12, 0.8, 0.12] }}
        transition={loop(i * 1.2, 3.6)}
      />
    ))}
    {!still && (
      <motion.circle
        cy={40} r={2.6} fill="currentColor" stroke="none"
        animate={{ cx: [8, 112] }}
        transition={loop(0, 3.6, "linear")}
      />
    )}
  </svg>
);

// Quality Engineering: tests passing one by one
const QualityArt = ({ still }: ArtProps) => (
  <svg {...svgProps}>
    {[0, 1, 2, 3].map((i) => {
      const y = 8 + i * 18;
      return (
        <g key={i}>
          <rect x={10} y={y} width={13} height={13} rx={3} strokeOpacity={0.6} />
          <line x1={32} y1={y + 6.5} x2={104 - i * 12} y2={y + 6.5} strokeOpacity={0.3} />
          <motion.path
            d={`M13 ${y + 6.5} l3.2 3.2 l5 -6.4`}
            initial={{ pathLength: still ? 1 : 0 }}
            animate={still ? undefined : { pathLength: [0, 1, 1, 0] }}
            transition={{ ...loop(i * 0.7, 4.8), times: [0, 0.25, 0.8, 1] }}
          />
        </g>
      );
    })}
  </svg>
);

// Cybersecurity: shield with scan line
const shield = "M60 6 L98 19 V42 C98 60 80 72 60 78 C40 72 22 60 22 42 V19 Z";
const SecurityArt = ({ still }: ArtProps) => (
  <svg {...svgProps}>
    <defs>
      <clipPath id="hero-shield-clip">
        <path d={shield} />
      </clipPath>
    </defs>
    <path d={shield} fill="currentColor" fillOpacity={0.08} />
    <g clipPath="url(#hero-shield-clip)">
      <motion.rect
        x={20} width={82} height={3} fill="currentColor" stroke="none" fillOpacity={0.75}
        initial={{ y: 30 }}
        animate={still ? undefined : { y: [6, 74, 6] }}
        transition={loop(0, 3.8)}
      />
    </g>
  </svg>
);

// Digital Transformation: growth curve drawing itself
const curve = "M8 68 C 30 66, 42 56, 58 46 S 92 22, 112 10";
const GrowthArt = ({ still }: ArtProps) => (
  <svg {...svgProps}>
    <line x1="4" y1="76" x2="116" y2="76" strokeOpacity="0.4" />
    <motion.path
      d={curve}
      initial={{ pathLength: still ? 1 : 0 }}
      animate={still ? undefined : { pathLength: [0, 1, 1, 0] }}
      transition={{ ...loop(0, 5), times: [0, 0.55, 0.9, 1] }}
    />
    <motion.circle
      cx={112} cy={10} r={4} fill="currentColor"
      initial={{ opacity: still ? 1 : 0 }}
      animate={still ? undefined : { opacity: [0, 0, 1, 1, 0] }}
      transition={{ ...loop(0, 5), times: [0, 0.5, 0.6, 0.9, 1] }}
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Pillars                                                             */
/* ------------------------------------------------------------------ */
const pillars = [
  { label: "AI & Data", h: 58, Art: DataArt, text: "From machine learning to GenAI copilots and agentic automation." },
  { label: "Cloud", h: 66, Art: CloudArt, text: "Resilient multi-cloud platforms with FinOps governance built in." },
  { label: "DevOps", h: 75, Art: DevOpsArt, text: "Automated pipelines and zero-downtime releases." },
  { label: "Quality Engineering", h: 84, Art: QualityArt, text: "Test automation that lets teams ship fast without breaking things." },
  { label: "Cybersecurity", h: 92, Art: SecurityArt, text: "Security designed into every layer, not added at the end." },
  { label: "Digital Transformation", h: 100, Art: GrowthArt, text: "Modernising the enterprise end to end, from legacy to AI-ready." },
];

export const LeadershipHero = () => {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion() ?? false;
  const [hover, setHover] = useState<number | null>(null);
  const [auto, setAuto] = useState(0);
  const active = hover ?? auto;

  // when nobody is hovering, spotlight rotates through the pillars
  useEffect(() => {
    if (hover !== null || still) return;
    const t = setInterval(() => setAuto((a) => (a + 1) % pillars.length), 3600);
    return () => clearInterval(t);
  }, [hover, still]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full min-h-[100svh] bg-black text-white overflow-hidden flex flex-col"
    >
      {/* quiet background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 right-[-10%] w-[720px] h-[720px] rounded-full bg-rose-600/15 blur-[160px]" />
        <div
          className="absolute top-0 right-0 w-[55%] h-[70%] opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 22px)",
            WebkitMaskImage: "radial-gradient(ellipse at top right, #000 0%, transparent 70%)",
            maskImage: "radial-gradient(ellipse at top right, #000 0%, transparent 70%)",
          }}
        />
      </div>

      {/* text */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 pt-28 sm:pt-32 lg:pt-36">
        <motion.h1
          initial={still ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.08] max-w-5xl"
        >
          Leaders who turn engineering into lasting impact
        </motion.h1>

        <motion.div
          initial={still ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="mt-8 sm:mt-10 lg:ml-[33%] max-w-xl flex gap-5"
        >
          <span aria-hidden className="w-px self-stretch bg-rose-500/80 shrink-0" />
          <div>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Meet the people guiding 525+ engineers across four global hubs, and the
              principles behind every system we build.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8">
              <a href="#executive-leadership" className="btn-tactile group">
                <div>
                  <span>
                    Meet Our Leaders
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
              <Link href="/careers" className="btn-tactile btn-tactile-secondary group">
                <div>
                  <span>Join Our Team</span>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* pillar stage */}
      <motion.div
        style={still ? undefined : { y: stageY }}
        className="relative z-10 mt-auto w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-14"
      >
        <div
          className="relative h-[44vh] min-h-[340px] max-h-[440px] flex items-end gap-2 sm:gap-4"
          onMouseLeave={() => setHover(null)}
        >
          {pillars.map(({ label, h, Art, text }, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={label}
                className="basis-0 min-w-0 h-full flex flex-col justify-end"
                initial={{ flexGrow: 1 }}
                animate={{ flexGrow: isActive ? 2.2 : 1 }}
                transition={{ type: "spring", stiffness: 140, damping: 22 }}
                onMouseEnter={() => setHover(i)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                tabIndex={0}
              >
                <motion.div
                  initial={{ height: still ? `${h}%` : "0%" }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1.4, delay: 0.35 + i * 0.1, ease: EASE }}
                  className={`relative rounded-t-2xl border border-b-0 overflow-hidden flex flex-col transition-[border-color,background-color] duration-500 ${
                    isActive
                      ? "border-rose-500/50 bg-gradient-to-b from-rose-500/30 via-zinc-900/70 to-transparent"
                      : "border-white/10 bg-gradient-to-b from-rose-500/15 via-zinc-900/60 to-transparent"
                  }`}
                >
                  {/* cap light */}
                  <motion.span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"
                    animate={still ? undefined : { opacity: [0.35, 1, 0.35] }}
                    transition={loop(i * 0.5, 4)}
                  />

                  <p
                    className={`p-3 sm:p-5 text-xs sm:text-sm font-medium leading-snug transition-colors duration-500 [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb] ${
                      isActive ? "text-white" : "text-zinc-300"
                    }`}
                  >
                    {label}
                  </p>

                  <div
                    className={`hidden sm:block px-5 h-[84px] text-rose-400 transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-45"
                    }`}
                  >
                    <Art still={still} />
                  </div>

                  <p
                    className={`hidden sm:block px-5 pt-3 text-[13px] leading-snug text-zinc-400 transition-all duration-500 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  >
                    {text}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* floor line */}
        <div aria-hidden className="relative h-px bg-white/15">
          <div className="absolute inset-x-[10%] -top-px h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
        </div>
      </motion.div>
      <div aria-hidden className="h-10 sm:h-14" />
    </section>
  );
};
