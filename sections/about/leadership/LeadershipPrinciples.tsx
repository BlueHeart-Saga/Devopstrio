"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface PrinciplePoster {
  id: string;
  number: string; // "01"
  badge: string; // "1/8"
  titleTop: string; // e.g. "8 Timeless" or "Customer-First"
  titleBottom: string; // e.g. "Leadership Principles" or "Obsession"
  subtitle: string; // e.g. "START WITH THE CLIENT PROBLEM, WORK BACKWARDS TO IMPACT"
  leaderName: string;
  leaderRole: string;
  coreTakeaway: string;
  image: string;
}

const posters: PrinciplePoster[] = [
  {
    id: "customer-first",
    number: "01",
    badge: "1/8",
    titleTop: "Customer-First",
    titleBottom: "Obsession",
    subtitle: "START WITH THE CLIENT PROBLEM, WORK BACKWARDS TO IMPACT",
    leaderName: "Punitha A.",
    leaderRole: "Cloud & Infrastructure Lead",
    coreTakeaway:
      "Every architecture decision begins with customer success and measurable outcomes. We engineer solutions that solve real-world problems.",
    image: "/assets/Home-page/homehero/updated_hero/Punitha.svg",
  },
  {
    id: "engineering-excellence",
    number: "02",
    badge: "2/8",
    titleTop: "Engineering",
    titleBottom: "Excellence",
    subtitle: "WHY 'GOOD ENOUGH' IS NEVER OUR PROFESSIONAL STANDARD",
    leaderName: "Ananthalakshmi",
    leaderRole: "Software & Quality Engineering Head",
    coreTakeaway:
      "Quality is never an inspection phase tacked on at the end—it is engineered into every commit, unit test, and automated deployment pipeline.",
    image: "/assets/Home-page/homehero/Ananthalakshmi.svg",
  },
  {
    id: "extreme-ownership",
    number: "03",
    badge: "3/8",
    titleTop: "Extreme",
    titleBottom: "Ownership",
    subtitle: "LEADERS AT EVERY LEVEL OWN OUTCOMES, NOT JUST TASKS",
    leaderName: "Umamaheswari R.",
    leaderRole: "Data & Cloud Platforms Director",
    coreTakeaway:
      "We empower autonomous teams with complete trust. When unforeseen bottlenecks occur, our leaders step up, take total ownership, and deliver.",
    image: "/assets/Home-page/homehero/Umamaheswari-R.svg",
  },
  {
    id: "innovation-mindset",
    number: "04",
    badge: "4/8",
    titleTop: "Innovation",
    titleBottom: "Mindset",
    subtitle: "FAIL FAST, ITERATE FASTER, SCALE FEARLESSLY WITH AI",
    leaderName: "Kishore P.",
    leaderRole: "AI & DevOps Innovation Specialist",
    coreTakeaway:
      "We continuously experiment with modern AI architectures, agentic pipelines, and cloud-native frameworks to create tomorrow's tech advantages.",
    image: "/assets/Home-page/homehero/updated_hero/Kishore.svg",
  },
  {
    id: "radical-transparency",
    number: "05",
    badge: "5/8",
    titleTop: "Radical",
    titleBottom: "Transparency",
    subtitle: "ELIMINATE SILOS & EMBRACE BLAMELESS POST-MORTEMS",
    leaderName: "Subbiah Muthu M.",
    leaderRole: "Principal System Architect",
    coreTakeaway:
      "High-velocity teams thrive on unvarnished honesty and constructive debate. Blameless incident analyses turn hiccups into organizational strength.",
    image: "/assets/Home-page/homehero/updated_hero/Subbiah-Muthu.M.svg",
  },
  {
    id: "multiplier-mentorship",
    number: "06",
    badge: "6/8",
    titleTop: "Multiplier",
    titleBottom: "Mentorship",
    subtitle: "GREAT LEADERS MULTIPLY CAPABILITIES IN THOSE AROUND THEM",
    leaderName: "Thangalakshmi M.",
    leaderRole: "Talent & Technical Guild Lead",
    coreTakeaway:
      "True leadership is measured by the growth, autonomy, and confidence of teammates. We invest heavily in apprenticeships and career velocity.",
    image: "/assets/Home-page/homehero/updated_hero/Thanga-Lakshmi.svg",
  },
  {
    id: "speed-with-discipline",
    number: "07",
    badge: "7/8",
    titleTop: "Speed with",
    titleBottom: "Discipline",
    subtitle: "VELOCITY MEANS NOTHING WITHOUT ARCHITECTURAL INTEGRITY",
    leaderName: "Saravanakumar S.",
    leaderRole: "DevOps & Continuous Delivery Architect",
    coreTakeaway:
      "We ship rapidly by automating everything: testing, security audits, and infrastructure as code. Speed is the fruit of engineered discipline.",
    image: "/assets/Home-page/homehero/Saravanakumar.s.svg",
  },
  {
    id: "long-term-stewardship",
    number: "08",
    badge: "8/8",
    titleTop: "Long-Term",
    titleBottom: "Stewardship",
    subtitle: "BUILDING RESILIENT DIGITAL ASSETS THAT ENDURE FOR DECADES",
    leaderName: "Sagadevan S.",
    leaderRole: "Chief Executive & Strategy Officer",
    coreTakeaway:
      "We reject short-term technical debt in favor of enduring, clean architectures that scale gracefully, adapt to change, and create lasting value.",
    image: "/assets/Home-page/homehero/updated_hero/Sahadevan1.svg",
  },
];

const AUTO_SLIDE_DURATION = 6500;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export const LeadershipPrinciples = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = ((page % posters.length) + posters.length) % posters.length;
  const currentPoster = posters[currentSlide];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleNext = () => paginate(1);
  const handlePrev = () => paginate(-1);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      paginate(1);
    }, AUTO_SLIDE_DURATION);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [page, isPaused]);

  return (
    <section
      id="principles"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="relative w-full min-h-screen flex flex-col justify-between bg-black text-white overflow-hidden py-10 sm:py-14 px-6 sm:px-12 lg:px-20 select-none"
    >
      {/* Ambient Dark Atmospheric Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1200px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.06),transparent_70%)] pointer-events-none z-0" />

      {/* Floating Side Arrow Controls */}
      {/* <button
        onClick={handlePrev}
        aria-label="Previous Principle"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-900/90 hover:bg-rose-600 border border-zinc-800 hover:border-rose-500 text-white flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 group cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Principle"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-900/90 hover:bg-rose-600 border border-zinc-800 hover:border-rose-500 text-white flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 group cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
      </button> */}

      {/* Main Full-Screen Swipeable Poster Stage */}
      <div className="relative w-full h-full flex-1 flex flex-col justify-between max-w-5xl mx-auto my-auto z-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 280, damping: 30 },
              opacity: { duration: 0.35 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000 || offset.x < -70) {
                handleNext();
              } else if (swipe > 10000 || offset.x > 70) {
                handlePrev();
              }
            }}
            className="w-full flex-1 flex flex-col justify-between cursor-grab active:cursor-grabbing"
          >
            {/* Top Large Editorial Serif Headline */}
            <div className="text-center pt-2 sm:pt-4">
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-normal text-white tracking-tight leading-[1.04]">
                {currentPoster.titleTop}{" "}
                <span className="font-serif font-normal block sm:inline">
                  {currentPoster.titleBottom}
                </span>
              </h2>
              {/* <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-rose-400 mt-3 sm:mt-4 max-w-xl mx-auto">
                {currentPoster.subtitle}
              </p> */}
            </div>

            {/* Central Illustrated Leader Portrait & Hand-Drawn Annotation */}
            <div className="relative my-6 sm:my-8 flex items-center justify-center w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">
              {/* Illustrated Leader Portrait */}
              <div className="relative z-10 w-64 sm:w-80 md:w-96 lg:w-[400px] h-64 sm:h-80 md:h-96 lg:h-[400px] flex items-center justify-center">
                <img src={currentPoster.image}
                  alt={currentPoster.leaderName}
                  className="w-full h-full object-contain filter contrast-105 pointer-events-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                loading="lazy" />
              </div>

              {/* Hand-Drawn Dotted Curved Arrow & Leader Annotation (Left Side) */}
              <div className="absolute left-2 sm:left-6 md:left-12 lg:left-16 top-1/3 z-20 flex flex-col items-start text-left max-w-[160px] sm:max-w-[220px]">
                <h3 className="font-serif font-bold text-base sm:text-xl md:text-2xl text-white leading-tight">
                  {currentPoster.leaderName}
                </h3>
                <p className="font-serif italic text-xs sm:text-sm md:text-base text-rose-400 mt-0.5 leading-snug">
                  {currentPoster.leaderRole}
                </p>

                {/* Hand-Drawn Curved Dotted Arrow pointing down/right towards leader */}
                <svg
                  className="w-16 sm:w-20 md:w-24 h-12 sm:h-14 md:h-16 text-rose-500 mt-2"
                  viewBox="0 0 80 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                >
                  <path
                    d="M10 10 C 25 10, 60 18, 70 40"
                    strokeLinecap="round"
                  />
                  <path
                    d="M62 36 L 70 42 L 72 32"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Interactive Swipe Prompt Button (Right Side, exactly matching reference) */}
              <div className="absolute right-2 sm:right-6 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-20">
                <button
                  onClick={handleNext}
                  title="Swipe to next principle"
                  className="flex items-center gap-2 text-sm sm:text-base font-sans font-medium text-zinc-300 hover:text-rose-400 transition-colors group cursor-pointer"
                >
                  <span>Swipe</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <div className="w-6 h-6 rounded-md bg-rose-500 group-hover:bg-rose-400 transition-colors shadow-sm" />
                </button>
              </div>
            </div>

            {/* Bottom Takeaway Statement */}
            <div className="max-w-3xl mx-auto text-center px-4 mb-5 sm:mb-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-zinc-100 leading-relaxed font-sans">
                &ldquo;{currentPoster.coreTakeaway}&rdquo;
              </p>
            </div>

            {/* Bottom Footer Watermark & Counter */}
            <div className="flex items-end justify-between w-full pt-4 border-t border-zinc-800 text-zinc-400">
              {/* Bottom Left: Written by Devopstrio */}
              <div className="text-left">
                <p className="font-serif italic text-xs sm:text-sm text-zinc-500 leading-tight">
                  Written by
                </p>
                <p className="font-serif font-bold text-sm sm:text-base text-white leading-tight">
                  Devopstrio Leadership
                </p>
              </div>

              {/* Bottom Right: Slide Number */}
              {/* <div className="text-right">
                <span className="font-mono text-xs sm:text-sm font-bold text-zinc-500 tracking-wider">
                  {currentPoster.number} / 08
                </span>
              </div> */}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};



