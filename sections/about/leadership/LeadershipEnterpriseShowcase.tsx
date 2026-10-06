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

const showcaseItems = [
  {
    title: "AI Services",
    description: "Transform your enterprise with cutting-edge AI solutions, from machine learning engineering to agentic automation and GenAI copilots.",
    link: "/services/ai-data-innovation",
    image: "/webp/assets/About-page/leadership/sourcecard/AI services.webp",
  },
  {
    title: "Cloud Services",
    description: "Architect resilient multi-cloud environments with automated provisioning, FinOps governance, and zero-downtime deployments.",
    link: "/services/cloud-services",
    image: "/webp/assets/About-page/leadership/sourcecard/Cloud Services.webp",
  },
  {
    title: "Managed Services",
    description: "Ensure high availability, proactive monitoring, and 24x7 enterprise SRE operations across hybrid and multi-cloud environments.",
    link: "/services/managed-services",
    image: "/webp/assets/About-page/leadership/sourcecard/Managed Services.webp",
  },
  {
    title: "Careers at Devopstrio",
    description: "Join a global team of 525+ engineers building next-generation enterprise solutions. Shape your career in AI, Cloud, and DevOps.",
    link: "/careers",
    image: "/webp/assets/About-page/leadership/sourcecard/Careers at Devopstrio.webp",
  },
  {
    title: "Partnerships",
    description: "See how we collaborate with technology leaders like AWS, Azure, and Google Cloud to deliver certified, enterprise-grade solutions.",
    link: "/about/partnerships-certifications",
    image: "/webp/assets/About-page/leadership/sourcecard/Partnerships.webp",
  },
  {
    title: "Our Culture & People",
    description: "Experience an engineering culture built on innovation, inclusion, and continuous learning across our global delivery centers.",
    link: "/about/our-culture-people",
    image: "/webp/assets/About-page/leadership/sourcecard/our-culture-people.webp",
  },
  {
    title: "Global Internship Programme",
    description: "Launch your tech career with hands-on experience in enterprise AI, cloud architecture, and DevOps engineering at scale.",
    link: "/about/global-internship",
    image: "/webp/assets/About-page/leadership/sourcecard/Global Internship Programme.webp",
  },
  {
    title: "Explore All Services",
    description: "Discover our complete portfolio of engineering services spanning AI, Cloud, DevOps, Quality Engineering, and Digital Transformation.",
    link: "/services/explore",
    image: "/webp/assets/About-page/leadership/sourcecard/Explore All Services.webp",
  },
];

const GAP = 24;
const AUTOPLAY_MS = 3000;
const EASE = [0.22, 1, 0.36, 1] as const;

export const LeadershipEnterpriseShowcase = () => {
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
  const maxIndex = Math.max(0, showcaseItems.length - itemsPerPage);
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

  // Autoplay 3 seconds
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
      className="relative w-full py-6 sm:py-8 md:py-10 bg-black overflow-hidden font-sans text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHovered(null);
      }}
      onKeyDown={onKeyDown}
      aria-roledescription="carousel"
      aria-label="Explore what we build and who builds it"
    >
      {/* Ambient rose glow */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-rose-600/10 blur-[140px] pointer-events-none"
        animate={reduceMotion ? undefined : { x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-rose-900/10 via-black to-black opacity-70 pointer-events-none" />

      {/* Main Page Layout Container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10">
        
        {/* Section Heading */}
        <div className="mb-4 sm:mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight max-w-4xl"
          >
            Explore what we <span className="text-rose-500 font-semibold">build</span> and who <span className="text-rose-500 font-semibold">builds it</span>
          </motion.h2>
        </div>

        {/* Carousel Slider Window (bounded inside max-w-7xl page layout) */}
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
            {showcaseItems.map((item, i) => {
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
                            Learn more
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
