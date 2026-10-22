"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useAnimationControls,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface LabShowcaseItem {
  title: string;
  description: string;
  link: string;
  image: string;
  objectPosition?: string;
}

const labsShowcaseItems: LabShowcaseItem[] = [
  {
    title: "AI Innovation Lab",
    description: "Autonomous AI agent networks, LLM custom fine-tuning, and semantic prompt database routers.",
    link: "/ecosystem/innovation-labs/ai-lab",
    image: "/webp/assets/ecosystem/innovation-labs-page_metrica-card_4/Image-Artificial-Intelligence.webp",
  },
  {
    title: "Cloud Innovation Lab",
    description: "Green serverless resource schedules, edge container networks, and cost-optimized WASM runtimes.",
    link: "/ecosystem/innovation-labs/cloud-lab",
    image: "/webp/assets/ecosystem/innovation-labs-page_metrica-card_4/cloud.webp",
  },
  {
    title: "DevOps Innovation Lab",
    description: "Next-gen GitOps engines, dynamic container provisioning, and automated continuous delivery loops.",
    link: "/ecosystem/innovation-labs/devops-lab",
    image: "/webp/assets/ecosystem/innovation-labs-page-Showcase-_Card/Devops.webp",
    objectPosition: "center 0%",
  },
  {
    title: "Cybersecurity Lab",
    description: "Zero-trust verification systems, network threat simulation tools, and automated security audit meshes.",
    link: "/ecosystem/innovation-labs/cybersecurity-lab",
    image: "/webp/assets/ecosystem/innovation-labs-page_metrica-card_4/cyber.webp",
  },
  {
    title: "Data & Analytics Lab",
    description: "High-velocity stream parsing, lakehouse compression structures, and predictive telemetry tools.",
    link: "/ecosystem/innovation-labs/data-analytics-lab",
    image: "/webp/assets/ecosystem/innovation-labs-page_metrica-card_4/data-platform.webp",
  },
];

const GAP = 24;
const AUTOPLAY_MS = 3500;
const EASE = [0.22, 1, 0.36, 1] as const;

export const InnovationLabsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Measure container width within page layout
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setContainerWidth(width);
        if (width < 640) {
          setItemsPerPage(1);
        } else if (width < 1024) {
          setItemsPerPage(2);
        } else {
          setItemsPerPage(3);
        }
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const cardWidth =
    itemsPerPage === 1
      ? containerWidth
      : (containerWidth - GAP * (itemsPerPage - 1)) / itemsPerPage;

  const step = cardWidth + GAP;
  const maxIndex = Math.max(0, labsShowcaseItems.length - itemsPerPage);
  const targetX = -index * step;

  // Slide animation to target
  useEffect(() => {
    controls.start({
      x: targetX,
      transition: reduceMotion
        ? { duration: 0 }
        : { type: "spring", stiffness: 140, damping: 24, mass: 0.9 },
    });
  }, [targetX, controls, reduceMotion]);

  // Clamp if screen size / itemsPerPage changes
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex]
  );
  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex]
  );

  // Autoplay
  useEffect(() => {
    if (isPaused || isDragging || reduceMotion) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, isPaused, isDragging, next, reduceMotion]);

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // Drag handling
  const onDragEnd = (_: unknown, info: PanInfo) => {
    setIsDragging(false);
    const swipe = info.offset.x + info.velocity.x * 0.2;
    if (swipe < -step * 0.25) {
      setIndex((i) => Math.min(maxIndex, i + 1));
    } else if (swipe > step * 0.25) {
      setIndex((i) => Math.max(0, i - 1));
    } else {
      controls.start({
        x: targetX,
        transition: { type: "spring", stiffness: 140, damping: 24 },
      });
    }
  };

  return (
    <section
      id="innovation-labs"
      className="relative w-full py-20 sm:py-24 bg-black overflow-hidden font-sans text-white border-b border-zinc-900/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHovered(null);
      }}
      onKeyDown={onKeyDown}
      aria-roledescription="carousel"
      aria-label="Emerging Tech R&D Innovation Labs"
    >
      {/* Ambient glowing radial light */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(225,29,72,0.12)_0%,transparent_70%)] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-rose-900/10 via-black to-black opacity-70 pointer-events-none" />

      {/* Main Page Layout Container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10">

        {/* Section Heading (Clean, No Sub-Note) */}
        <div className="mb-10 sm:mb-12">
          <span className="mb-3 inline-flex items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.25em] text-rose-500 sm:text-sm sm:tracking-[0.3em]">
            <span className="h-px w-8 bg-rose-500/60" />
            EMERGING TECH R&D
            <span className="h-px w-8 bg-rose-500/60" />
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight max-w-4xl"
          >
            Innovation <span className="text-rose-500 font-semibold">Labs</span>
          </motion.h2>
        </div>

        {/* Carousel Slider Window */}
        <div
          ref={containerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
        >
          <motion.div
            className="flex py-4"
            style={{ gap: GAP }}
            animate={controls}
            initial={{ x: 0 }}
            drag="x"
            dragElastic={0.12}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={onDragEnd}
          >
            {labsShowcaseItems.map((item, i) => {
              const isHovered = hovered === i;
              return (
                <motion.article
                  key={item.title}
                  className="flex-none"
                  style={{ width: cardWidth }}
                  onMouseEnter={() => setHovered(i)}
                  animate={{ y: isHovered ? -6 : 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <div
                    className={`group h-full flex flex-col rounded-2xl overflow-hidden bg-zinc-900/80 border transition-[border-color,box-shadow] duration-500 ${
                      isHovered
                        ? "border-rose-500/50 shadow-[0_20px_50px_-15px_rgba(244,63,94,0.3)]"
                        : "border-zinc-800/80 shadow-none"
                    }`}
                  >
                    {/* Card Top Image */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-800">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        draggable={false}
                        style={{ objectPosition: item.objectPosition || "center" }}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Card Body: vertical accent line + text */}
                    <div className="relative flex gap-4 p-6 sm:p-7 flex-grow">
                      <span className="relative w-0.5 shrink-0 bg-zinc-700/60 self-stretch">
                        <motion.span
                          className="absolute left-0 top-0 w-0.5 bg-rose-500 origin-top"
                          initial={false}
                          animate={{ height: isHovered ? "100%" : "28px" }}
                          transition={{ duration: 0.5, ease: EASE }}
                        />
                      </span>

                      <div className="flex flex-col flex-grow min-h-[11rem]">
                        <h3 className="text-white font-bold text-xl sm:text-2xl mb-2.5 tracking-tight group-hover:text-rose-500 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-zinc-300 font-semibold text-sm sm:text-base leading-relaxed mb-6 flex-grow line-clamp-3">
                          {item.description}
                        </p>
                        <Link
                          href={item.link}
                          draggable={false}
                          className="relative inline-flex items-center gap-2 self-start text-sm sm:text-base font-semibold text-rose-500 hover:text-rose-400 transition-colors rounded-sm"
                        >
                          <span className="relative">
                            Explore Lab
                            <span className="absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                          </span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Controls: Progress Indicator (Left) + Next/Prev Arrows (Right) */}
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex-1 max-w-xs h-1 bg-zinc-800/80 rounded-full relative overflow-hidden" aria-hidden>
            <motion.div
              key={`${index}-${isPaused}`}
              className="absolute inset-y-0 left-0 bg-rose-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: isPaused || reduceMotion ? 0 : "100%" }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
            />
            <div
              className="absolute inset-y-0 bg-rose-500/50 rounded-full transition-all duration-500"
              style={{
                left: `${(index / (maxIndex + 1)) * 100}%`,
                width: `${100 / (maxIndex + 1)}%`,
                opacity: isPaused ? 1 : 0,
              }}
            />
          </div>

          <div className="flex items-center gap-3">
            {[
              { fn: prev, label: "Previous slide", Icon: ArrowLeft },
              { fn: next, label: "Next slide", Icon: ArrowRight },
            ].map(({ fn, label, Icon }) => (
              <motion.button
                key={label}
                onClick={fn}
                aria-label={label}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-rose-500/70 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InnovationLabsSection;
