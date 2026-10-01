"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

// Engineering pillars (taken from the services listed across the site).
// h = pillar height as % of the stage. Rising left → right reads as growth.
const pillars = [
  { label: "AI & Data", h: 44 },
  { label: "Cloud", h: 56 },
  { label: "DevOps", h: 68 },
  { label: "Quality Engineering", h: 80 },
  { label: "Cybersecurity", h: 90 },
  { label: "Digital Transformation", h: 100 },
];

const Pillar = ({
  label,
  h,
  index,
  center,
  mouse,
  still,
}: {
  label: string;
  h: number;
  index: number;
  center: number; // 0..1 horizontal position of this pillar
  mouse: MotionValue<number>;
  still: boolean;
}) => {
  // pillars near the cursor rise a little, then settle back
  const lift = useSpring(
    useTransform(mouse, (m) => {
      const d = Math.abs(m - center);
      return -Math.max(0, 1 - d / 0.16) * 26;
    }),
    { stiffness: 160, damping: 18 }
  );
  const glow = useTransform(mouse, (m) =>
    Math.max(0, 1 - Math.abs(m - center) / 0.16)
  );

  return (
    <motion.div
      style={still ? undefined : { y: lift }}
      className="flex-1 min-w-0 h-full flex flex-col justify-end"
    >
      <motion.div
        initial={still ? { height: `${h}%` } : { height: "0%" }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 1.4, delay: 0.35 + index * 0.1, ease: EASE }}
        className="relative rounded-t-xl border border-b-0 border-white/10 bg-gradient-to-b from-rose-500/25 via-zinc-900/60 to-transparent overflow-hidden"
      >
        {/* cap light: slow breathing, staggered so it reads as a wave */}
        <motion.span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"
          animate={still ? undefined : { opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5, ease: "easeInOut" }}
        />
        {/* cursor glow */}
        <motion.span
          aria-hidden
          style={{ opacity: still ? 0 : glow }}
          className="absolute inset-0 bg-gradient-to-b from-rose-500/30 to-transparent"
        />
        <p className="relative p-3 sm:p-5 text-xs sm:text-sm font-medium text-zinc-300 leading-snug [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]">
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const LeadershipHero = () => {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion() ?? false;
  const mouse = useMotionValue(-1); // -1 = cursor away

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouse.set((e.clientX - r.left) / r.width);
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={still ? undefined : onMove}
      onMouseLeave={() => mouse.set(-1)}
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
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 pt-32 sm:pt-36 lg:pt-40">
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
        className="relative z-10 mt-auto w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16"
      >
        <div className="relative h-[34vh] min-h-[220px] max-h-[360px] flex items-end gap-2 sm:gap-4">
          {pillars.map((p, i) => (
            <Pillar
              key={p.label}
              label={p.label}
              h={p.h}
              index={i}
              center={(i + 0.5) / pillars.length}
              mouse={mouse}
              still={still}
            />
          ))}
        </div>
        {/* floor line with glow */}
        <div aria-hidden className="relative h-px bg-white/15">
          <div className="absolute inset-x-[10%] -top-px h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
        </div>
      </motion.div>
      <div aria-hidden className="h-10 sm:h-14" />
    </section>
  );
};
