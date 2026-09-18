"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Users,
  Folder,
  TrendingUp,
  BookOpen,
  Calendar,
  Clock,
  Share2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

// ─── PRESENTATION / PINNED SCROLL HOOK (FOR HOW CAMPIX WORKS STEPPER) ─────────
function usePresentationSection(totalSteps: number, debounceMs = 600) {
  const [step, setStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRef = useRef(0);
  const pinnedRef = useRef(false);
  const cooldownRef = useRef(false);
  const releasingRef = useRef(false);
  const touchStartRef = useRef<number | null>(null);

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  const goToStep = useCallback((n: number) => {
    setStep(n);
    stepRef.current = n;
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const startCooldown = () => {
      cooldownRef.current = true;
      window.setTimeout(() => {
        cooldownRef.current = false;
      }, debounceMs);
    };

    const releaseDown = () => {
      if (releasingRef.current) return;
      releasingRef.current = true;
      pinnedRef.current = false;
      detachWheel();
      const rect = el.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + rect.bottom, behavior: "smooth" });
      window.setTimeout(() => {
        releasingRef.current = false;
      }, 800);
    };

    const releaseUp = () => {
      if (releasingRef.current) return;
      releasingRef.current = true;
      pinnedRef.current = false;
      detachWheel();
      const rect = el.getBoundingClientRect();
      window.scrollTo({
        top: Math.max(0, window.scrollY + rect.top - window.innerHeight),
        behavior: "smooth"
      });
      window.setTimeout(() => {
        releasingRef.current = false;
      }, 800);
    };

    const handleWheel = (e: WheelEvent) => {
      if (!pinnedRef.current) return;
      e.preventDefault();
      e.stopPropagation();
      if (releasingRef.current || cooldownRef.current) return;
      const delta = e.deltaY;
      if (Math.abs(delta) < 2) return;
      const going = delta > 0 ? 1 : -1;
      const next = stepRef.current + going;
      if (next >= 0 && next < totalSteps) {
        setStep(next);
        stepRef.current = next;
        startCooldown();
      } else if (going > 0) {
        releaseDown();
      } else {
        releaseUp();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!pinnedRef.current) return;
      e.preventDefault();
      if (releasingRef.current || cooldownRef.current) return;
      const startY = touchStartRef.current;
      if (startY === null) return;
      const currentY = e.touches[0]?.clientY ?? startY;
      const delta = startY - currentY;
      if (Math.abs(delta) < 40) return;
      touchStartRef.current = currentY;
      const going = delta > 0 ? 1 : -1;
      const next = stepRef.current + going;
      if (next >= 0 && next < totalSteps) {
        setStep(next);
        stepRef.current = next;
        startCooldown();
      } else if (going > 0) {
        releaseDown();
      } else {
        releaseUp();
      }
    };

    let wheelAttached = false;
    const attachWheel = () => {
      if (wheelAttached) return;
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      wheelAttached = true;
    };
    const detachWheel = () => {
      if (!wheelAttached) return;
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      wheelAttached = false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        if (ratio >= 0.88 && !pinnedRef.current && !releasingRef.current) {
          pinnedRef.current = true;
          attachWheel();
        } else if (ratio < 0.4 && pinnedRef.current) {
          pinnedRef.current = false;
          detachWheel();
        }
      },
      { threshold: [0, 0.4, 0.88, 1.0] }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      detachWheel();
      pinnedRef.current = false;
      cooldownRef.current = false;
      releasingRef.current = false;
    };
  }, [totalSteps, debounceMs]);

  return { step, goToStep, sectionRef };
}

// ─── DATA FOR CORE FEATURES CAROUSEL ─────────────────────────────────────────
// All paths verified against actual assets folder — no fabricated filenames.
const carouselCards = [
  {
    id: "teacher-mgmt",
    title: "Teacher Management",
    desc: "Organize teacher information, responsibilities, classes, and academic activities.",
    img: "/webp/assets/landingpage-campix/Teacher Management card vertical.webp",
    isGold: true,
  },
  {
    id: "attendance-mgmt",
    title: "Attendance Management",
    desc: "Track and manage attendance with accurate, centralized records.",
    img: "/webp/assets/landingpage-campix/Attendance Management card vertical.webp",
    isGold: false,
  },
  {
    id: "academic-mgmt",
    title: "Academic Management",
    desc: "Manage courses, classes, learning resources, assignments, and academic activities.",
    img: "/webp/assets/landingpage-campix/Academic Management card vertical.webp",
    isGold: true,
  },
  {
    id: "parent-mgmt",
    title: "Parent Management",
    desc: "Keep parents connected with updates about student progress and activities.",
    img: "/webp/assets/landingpage-campix/Parent Management card vertical.webp",
    isGold: false,
  },
  {
    id: "student-mgmt",
    title: "Student Management",
    desc: "Access learning resources, schedules, activities, and important updates in one place.",
    img: "/webp/assets/landingpage-campix/Student Management card vertical.webp",
    isGold: true,
  },
  {
    id: "comm-mgmt",
    title: "Communication Management",
    desc: "Seamless messaging and broadcast updates for teachers, students, and parents.",
    img: "/webp/assets/landingpage-campix/communication card vertical.webp",
    isGold: false,
  },
];

// ─── HOW CAMPIX WORKS ROADMAP MILESTONES ─────────────────────────────────────
const howItWorksMilestones = [
  {
    step: "01",
    title: "Manage",
    desc: "Organize Courses, Content & Users",
  },
  {
    step: "02",
    title: "Connect",
    desc: "Foster Community, Collaboration & Engagement",
  },
  {
    step: "03",
    title: "Analyze",
    desc: "Gain Insights, Track Progress & Perform",
  },
  {
    step: "04",
    title: "Grow",
    desc: "Scale operations Expand research & archive",
  },
];

// ─── DATA FOR ORBIT NODES (EXACT EQUAL 40° ANGULAR SPACING) ─────────────────
const nodes = [
  { label: "Teacher", image: "/webp/assets/landingpage-campix/orbit_teacher.webp", x: 50.0, y: 9.0 },
  { label: "Library", image: "/webp/assets/landingpage-campix/orbit_library.webp", x: 76.4, y: 18.6 },
  { label: "Administration", image: "/webp/assets/landingpage-campix/orbit_admin.webp", x: 90.4, y: 42.9 },
  { label: "Hostel", image: "/webp/assets/landingpage-campix/orbit_hostel.webp", x: 85.5, y: 70.5 },
  { label: "Students", image: "/webp/assets/landingpage-campix/orbit_students.webp", x: 64.0, y: 88.5 },
  { label: "Communication", image: "/webp/assets/landingpage-campix/orbit_comm.webp", x: 36.0, y: 88.5 },
  { label: "Canteen", image: "/webp/assets/landingpage-campix/orbit_canteen.webp", x: 14.5, y: 70.5 },
  { label: "Analytics", image: "/webp/assets/landingpage-campix/orbit_analytics.webp", x: 9.6, y: 42.9 },
  { label: "Transport", image: "/webp/assets/landingpage-campix/orbit_transport.webp", x: 23.6, y: 18.6 },
];

export default function CampixLandingPage() {
  // Modal State for Image Zoom
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // Auto-slide carousel with 2s pause
  useEffect(() => {
    if (isCarouselPaused) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselCards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isCarouselPaused]);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselCards.length);
  };
  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselCards.length) % carouselCards.length);
  };

  // Scroll Pinned Hook for How Campix Works
  const { step: activeRoadmapStep, goToStep: goRoadmapStep, sectionRef: roadmapSectionRef } = usePresentationSection(4, 600);

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-[#FFCA54]/30 overflow-x-hidden font-sans">

      {/* ─── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 bg-[#000000] flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 text-center relative">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#FFCA54] bg-black text-[#FFCA54] text-[12px] sm:text-[14px] font-semibold tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(255,202,84,0.2)]">
            <span>ALL-IN-ONE EDUCATIONAL MANAGEMENT PLATFORM</span>
          </div>

          {/* H1 Heading — reduced weight, reference-matched line structure */}
          <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-white tracking-[-0.5px] leading-[1.25] max-w-[780px] mx-auto mb-6">
            All-in-One Platform for Complete Educational Institution Management
          </h1>

          {/* Subtitle — same 3-line structure, slightly lighter tone */}
          <p className="text-base sm:text-lg lg:text-[17px] text-white/75 font-normal leading-[27px] max-w-[650px] mx-auto mb-9">
            Campix brings academics, administration, communication, student <br className="hidden md:inline" />
            management, and analytics together in one powerful platform—helping <br className="hidden md:inline" />
            educational institutions manage their operations efficiently from a single place.
          </p>

          {/* CTA Buttons with Hover Glow */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/contact?service=campix-explore"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#FFCA54] text-black font-semibold text-[15px] hover:bg-[#ffc233] hover:shadow-[0_0_35px_rgba(255,202,84,0.65)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              Explore Campix →
            </Link>
            <Link
              href="/contact?service=campix-start"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-white text-black font-semibold text-[15px] hover:bg-zinc-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              Get Started →
            </Link>
          </div>

          {/* Hero Dashboard Showcase — no ring */}
          <div className="relative w-full max-w-[1169px] mx-auto rounded-[28px] overflow-hidden shadow-2xl">
            <Image
              src="/webp/assets/landingpage-campix/hero.webp"
              alt="Campix Educational Institution Management Platform"
              width={1169}
              height={847}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </section>

      {/* ─── 2. WHAT IS CAMPIX? SECTION ────────────────────────────────────── */}
      <section className="relative w-full py-28 bg-[#000000] border-t border-zinc-900 overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text + 2x2 Feature Grid with Bubble Icons */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[14px] font-semibold tracking-[0.4px] text-[#FFCA54] uppercase block mb-3">
                WHAT IS CAMPIX?
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-[0.14px] leading-[40px] mb-4">
                A Smarter Way to Manage Your Institution
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white/80 font-normal leading-[28px] mb-10">
                Campix is a comprehensive educational management platform designed to simplify everyday institutional operations, connect every stakeholder, and provide better visibility across your organization.
              </p>

              {/* 2x2 Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 w-full">
                
                {/* 1. Simplify Operations */}
                <div className="flex flex-col items-start group">
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 6 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-zinc-900 border border-[#FFCA54]/30 flex items-center justify-center text-[#FFCA54] mb-3 shadow-[0_0_15px_rgba(255,202,84,0.2)] group-hover:bg-[#FFCA54]/15 group-hover:border-[#FFCA54] group-hover:shadow-[0_0_25px_rgba(255,202,84,0.5)] transition-all duration-300 cursor-pointer"
                  >
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  </motion.div>
                  <h3 className="text-[20px] font-semibold text-white mb-2 leading-[28px] group-hover:text-[#FFCA54] transition-colors">
                    Simplify Operations
                  </h3>
                  <p className="text-[14px] text-zinc-400 font-normal leading-[22px]">
                    Manage everyday academic and administrative processes with ease.
                  </p>
                </div>

                {/* 2. Connect Everyone */}
                <div className="flex flex-col items-start group">
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 6 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-zinc-900 border border-[#FFCA54]/30 flex items-center justify-center text-[#FFCA54] mb-3 shadow-[0_0_15px_rgba(255,202,84,0.2)] group-hover:bg-[#FFCA54]/15 group-hover:border-[#FFCA54] group-hover:shadow-[0_0_25px_rgba(255,202,84,0.5)] transition-all duration-300 cursor-pointer"
                  >
                    <Users className="w-5 h-5 stroke-[2.5]" />
                  </motion.div>
                  <h3 className="text-[20px] font-semibold text-white mb-2 leading-[28px] group-hover:text-[#FFCA54] transition-colors">
                    Connect Everyone
                  </h3>
                  <p className="text-[14px] text-zinc-400 font-normal leading-[22px]">
                    Bring administrators, teachers, students, and parents together.
                  </p>
                </div>

                {/* 3. Centralize Information */}
                <div className="flex flex-col items-start group">
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 6 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-zinc-900 border border-[#FFCA54]/30 flex items-center justify-center text-[#FFCA54] mb-3 shadow-[0_0_15px_rgba(255,202,84,0.2)] group-hover:bg-[#FFCA54]/15 group-hover:border-[#FFCA54] group-hover:shadow-[0_0_25px_rgba(255,202,84,0.5)] transition-all duration-300 cursor-pointer"
                  >
                    <Folder className="w-5 h-5 stroke-[2.5]" />
                  </motion.div>
                  <h3 className="text-[20px] font-semibold text-white mb-2 leading-[28px] group-hover:text-[#FFCA54] transition-colors">
                    Centralize Information
                  </h3>
                  <p className="text-[14px] text-zinc-400 font-normal leading-[22px]">
                    Keep essential institutional information organized in one place.
                  </p>
                </div>

                {/* 4. Make Better Decisions */}
                <div className="flex flex-col items-start group">
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 6 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-zinc-900 border border-[#FFCA54]/30 flex items-center justify-center text-[#FFCA54] mb-3 shadow-[0_0_15px_rgba(255,202,84,0.2)] group-hover:bg-[#FFCA54]/15 group-hover:border-[#FFCA54] group-hover:shadow-[0_0_25px_rgba(255,202,84,0.5)] transition-all duration-300 cursor-pointer"
                  >
                    <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                  </motion.div>
                  <h3 className="text-[20px] font-semibold text-white mb-2 leading-[28px] group-hover:text-[#FFCA54] transition-colors">
                    Make Better Decisions
                  </h3>
                  <p className="text-[14px] text-zinc-400 font-normal leading-[22px]">
                    Use meaningful data and insights to improve institutional performance.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Complete Connected Ecosystem */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] lg:min-h-[540px]">
              <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center select-none">

                {/* Center Glow */}
                <div className="absolute w-56 h-56 rounded-full bg-[#FFCA54]/25 blur-3xl pointer-events-none z-0" />

                {/* ROTATING SIDE CIRCLES ONLY */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-10"
                >
                  {nodes.map((node, index) => (
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="flex flex-col items-center justify-center"
                      >
                        {/* Circle Image */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#FFCA54] bg-black overflow-hidden shadow-[0_0_25px_rgba(255,202,84,0.45)]">
                          <Image
                            src={node.image}
                            alt={node.label}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Label */}
                        <span className="text-[10px] sm:text-[11px] font-semibold text-white mt-1.5 whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                          {node.label}
                        </span>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>

                {/* Center Logo — sized to properly fill the black circular frame & vertically centered */}
                <div className="relative z-20 w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center">

                  {/* Golden radial glow */}
                  <div className="absolute inset-[-8px] rounded-full bg-[#FFCA54]/15 blur-md pointer-events-none" />

                  {/* Strong golden outer glow */}
                  <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(255,202,84,0.8),0_0_100px_rgba(255,202,84,0.35)] pointer-events-none" />

                  {/* Logo — vertically centered to balance top cube and bottom leaves */}
                  <div className="relative w-full h-full -translate-y-3 sm:-translate-y-4">
                    <Image
                      src="/webp/assets/landingpage-campix/orbit_center_logo_perfect.webp"
                      alt="Campix Central Hub"
                      fill
                      priority
                      className="object-contain" 
                    />
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. CORE FEATURES SECTION (CAROUSEL) ────────────────────────────── */}
      <section className="relative w-full py-28 bg-[#000000] border-t border-zinc-900 overflow-hidden">

        {/* Header stays in normal container */}
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[14px] font-semibold tracking-[0.6px] text-[#FFCA54] uppercase block mb-3">
              CORE FEATURES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-[-0.64px] leading-[40px] mb-4">
              Everything Your Institution Needs. All in One Place.
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white/80 font-normal leading-[28px]">
              From student management and academics to administration and analytics, Campix brings essential institutional functions together through one connected platform.
            </p>
          </div>
        </div>

        {/* Carousel Track — FULL PAGE WIDTH, tight 2px gap, image + caption */}
        <div
          className="relative w-full overflow-hidden mb-10"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
        >
          <motion.div
            className="flex gap-2 pl-6 sm:pl-10 lg:pl-16"
            animate={{ x: `-${carouselIndex * 358}px` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {carouselCards.concat(carouselCards).map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className="w-[336px] sm:w-[348px] shrink-0 flex flex-col cursor-pointer group"
                onClick={() => setModalImage({ src: card.img, title: card.title })}
              >
                {/* Image Card */}
                <div
                  className="relative w-full rounded-[20px] overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ height: "440px" }}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-4 px-6 sm:px-10 lg:px-16">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-12 h-12 rounded-full border border-white/20 bg-zinc-900/80 hover:bg-[#FFCA54] hover:text-black text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-12 h-12 rounded-full border border-white/20 bg-zinc-900/80 hover:bg-[#FFCA54] hover:text-black text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </section>

      {/* ─── 4. ACADEMIC MANAGEMENT SECTION ─────────────────────────────────── */}
      <section className="relative w-full py-24 bg-[#000000] border-t border-zinc-900 overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

            {/* Left Column: Text + 2x2 List + CTA */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-[14px] font-semibold tracking-[1.6px] text-[#FFCA54] uppercase block mb-3">
                ACADEMIC MANAGEMENT
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-[-0.64px] leading-[40px] mb-4">
                Empower Better Learning Management
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white/80 font-normal leading-[28px] mb-8">
                Bring academic activities, courses, classes, learning resources, and student progress together in one organized platform.
              </p>

              {/* 4 Feature Items (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 w-full mb-10">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Manage courses and classes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Folder className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Organize learning resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Track academic activities</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Monitor student progress</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact?service=academic-management"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#FFCA54] text-black font-semibold text-[15px] hover:bg-[#eab344] hover:shadow-[0_0_28px_rgba(255,202,84,0.5)] transition-all duration-300"
              >
                Explore Academic Management →
              </Link>
            </div>

            {/* Right Column: Academic Management Image — FIX: 7-col, object-cover 4:3, no empty space */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => setModalImage({
                  src: "/webp/assets/landingpage-campix/ACADEMIC MANAGEMENT.webp",
                  title: "Academic Management Dashboard"
                })}
                className="relative w-full rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/webp/assets/landingpage-campix/ACADEMIC MANAGEMENT.webp"
                  alt="Academic Management UI Cards"
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/80 px-2.5 py-1 rounded-full border border-white/20 text-[11px] font-semibold text-[#FFCA54] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3" /> Click to Zoom
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 5. INSTITUTION ADMINISTRATION SECTION ─────────────────────────── */}
      <section className="relative w-full py-24 bg-[#000000] border-t border-zinc-900 overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

            {/* Left Column: Institution Administration Image — FIX: 7-col, object-cover 4:3 */}
            <div className="lg:col-span-7 relative flex items-center justify-center order-2 lg:order-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => setModalImage({
                  src: "/webp/assets/landingpage-campix/INSTITUTION ADMINISTRATION.webp",
                  title: "Institution Administration Suite"
                })}
                className="relative w-full rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/webp/assets/landingpage-campix/INSTITUTION ADMINISTRATION.webp"
                  alt="Institution Administration UI Cards"
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/80 px-2.5 py-1 rounded-full border border-white/20 text-[11px] font-semibold text-[#FFCA54] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3" /> Click to Zoom
                </div>
              </motion.div>
            </div>

            {/* Right Column: Text + Checklist + CTA */}
            <div className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2">
              <span className="text-[14px] font-semibold tracking-[0.6px] text-[#FFCA54] uppercase block mb-3">
                INSTITUTION ADMINISTRATION
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-[-0.64px] leading-[40px] mb-4">
                Simplify Every Administrative Process
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white/80 font-normal leading-[28px] mb-8">
                Centralize your institution&apos;s essential operations and streamline administrative workflows for greater efficiency and visibility.
              </p>

              {/* Checklist */}
              <div className="space-y-4 w-full mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Centralized information</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Streamlined workflows</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Efficient attendance management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Simplified daily operations</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact?service=institution-administration"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#FFCA54] text-black font-semibold text-[15px] hover:bg-[#eab344] hover:shadow-[0_0_28px_rgba(255,202,84,0.5)] transition-all duration-300"
              >
                Explore Administration →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 6. BUILT FOR EVERY ROLE (2x2 GRID CARDS) ──────────────────────── */}
      {/* FIX: Added hover — card scale + image lift + glow shadow */}
      <section className="relative w-full py-28 bg-[#000000] border-t border-zinc-900 overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[14px] font-semibold tracking-[0.6px] text-[#FFCA54] uppercase block mb-3">
              BUILT FOR EVERY ROLE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-[-0.64px] leading-[40px] mb-4">
              One Platform. Every Member of Your Institution.
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white/80 font-normal leading-[28px]">
              Campix provides role-based experiences that help every member of your educational community work, communicate, and stay connected more effectively.
            </p>
          </div>

          {/* 2x2 Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

            {/* 1. Administrator (Yellow) */}
            <div className="group relative rounded-[20px] bg-[#FFCA54] overflow-hidden min-h-[280px] shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,202,84,0.40)]">
              {/* Text — top-left, constrained width so image shows */}
              <div className="relative z-10 p-7 sm:p-8 max-w-[52%]">
                <h3 className="text-2xl sm:text-[26px] font-bold text-black mb-3 tracking-tight leading-[32px]">Administrator</h3>
                <p className="text-[13px] sm:text-[14px] text-black/80 font-medium leading-[21px]">
                  Manage your institution with greater visibility, control, and efficiency.
                </p>
              </div>
              {/* Image — contained, right side, from bottom matching other 3 cards */}
              <div className="absolute right-2 sm:right-4 bottom-0 w-[46%] sm:w-[48%] h-[88%] pointer-events-none">
                <Image
                  src="/webp/assets/landingpage-campix/admin rectangle card.webp"
                  alt="Administrator"
                  fill
                  className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>

            {/* 2. Teacher (Dark) */}
            <div className="group relative rounded-[20px] bg-[#2a2a2e] overflow-hidden min-h-[280px] shadow-xl cursor-pointer border border-white/8 transition-all duration-300 hover:scale-[1.02] hover:border-[#FFCA54]/20 hover:shadow-[0_20px_60px_rgba(255,202,84,0.14)]">
              <div className="relative z-10 p-7 sm:p-8 max-w-[52%]">
                <h3 className="text-2xl sm:text-[26px] font-bold text-white mb-3 tracking-tight leading-[32px]">Teacher</h3>
                <p className="text-[13px] sm:text-[14px] text-zinc-300 font-normal leading-[21px]">
                  Manage classes, students, academic activities, and learning more effectively.
                </p>
              </div>
              <div className="absolute right-2 sm:right-4 bottom-0 w-[46%] sm:w-[48%] h-[88%] pointer-events-none">
                <Image
                  src="/webp/assets/landingpage-campix/Teacher.webp"
                  alt="Teacher"
                  fill
                  className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>

            {/* 3. Parent (Dark) */}
            <div className="group relative rounded-[20px] bg-[#2a2a2e] overflow-hidden min-h-[280px] shadow-xl cursor-pointer border border-white/8 transition-all duration-300 hover:scale-[1.02] hover:border-[#FFCA54]/20 hover:shadow-[0_20px_60px_rgba(255,202,84,0.14)]">
              <div className="relative z-10 p-7 sm:p-8 max-w-[52%]">
                <h3 className="text-2xl sm:text-[26px] font-bold text-white mb-3 tracking-tight leading-[32px]">Parent</h3>
                <p className="text-[13px] sm:text-[14px] text-zinc-300 font-normal leading-[21px]">
                  Stay informed about your child&apos;s academic progress, attendance, and institutional activities.
                </p>
              </div>
              <div className="absolute right-2 sm:right-4 bottom-0 w-[48%] sm:w-[50%] h-[88%] pointer-events-none">
                <Image
                  src="/webp/assets/landingpage-campix/Parent.webp"
                  alt="Parent"
                  fill
                  className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>

            {/* 4. Student (Yellow) */}
            <div className="group relative rounded-[20px] bg-[#FFCA54] overflow-hidden min-h-[280px] shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,202,84,0.40)]">
              <div className="relative z-10 p-7 sm:p-8 max-w-[52%]">
                <h3 className="text-2xl sm:text-[26px] font-bold text-black mb-3 tracking-tight leading-[32px]">Student</h3>
                <p className="text-[13px] sm:text-[14px] text-black/80 font-medium leading-[21px]">
                  Access learning resources, schedules, activities, and important updates in one place.
                </p>
              </div>
              <div className="absolute right-2 sm:right-4 bottom-0 w-[46%] sm:w-[48%] h-[88%] pointer-events-none">
                <Image
                  src="/webp/assets/landingpage-campix/Student.webp"
                  alt="Student"
                  fill
                  className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── 7. HOW CAMPIX WORKS (SCROLL-DRIVEN INTERACTIVE BUS STEPPER) ─── */}
      {/* FIX: Road section full page width, trees 2× bigger, bus 2× bigger, no max-w restriction */}
      <section
        ref={roadmapSectionRef}
        className="relative w-full min-h-screen py-24 bg-[#000000] border-t border-zinc-900 flex flex-col justify-center overflow-hidden"
      >
        {/* Header stays inside normal container */}
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[14px] font-semibold tracking-[0.6px] text-[#FFCA54] uppercase block mb-3">
              HOW CAMPIX WORKS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-[-0.64px] leading-[40px] mb-4">
              Manage. Connect. Analyze. Grow.
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white/80 font-normal leading-[28px]">
              Bring your institution, people, and information together through a simple and connected platform.
            </p>
          </div>
        </div>

        {/* Road section — no max-w, goes nearly edge-to-edge */}
        <div className="relative w-full px-4 sm:px-6">

          {/* 4 Milestones Text Above Road — each with 2 lines, z above trees */}
          <div className="max-w-[1280px] mx-auto grid grid-cols-4 gap-4 mb-10 px-8 sm:px-14 relative z-20">
            {howItWorksMilestones.map((m, idx) => (
              <div
                key={m.step}
                onClick={() => goRoadmapStep(idx)}
                className={`flex flex-col cursor-pointer transition-opacity duration-300 ${
                  activeRoadmapStep === idx ? "opacity-100" : "opacity-40 hover:opacity-75"
                }`}
              >
                <span className="text-[13px] font-bold text-[#FFCA54] mb-0.5">{m.step}</span>
                <h4 className="text-[18px] sm:text-[20px] font-bold text-white mb-1 leading-tight">{m.title}</h4>
                <p className="text-[11px] sm:text-[12px] text-zinc-400 leading-snug line-clamp-2">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Road strip — taller to accommodate bigger bus */}
          <div className="relative w-full h-56 sm:h-72 border-t-2 border-b-2 border-white/70 flex items-center overflow-visible">

            {/* Road white lane markers — short horizontal white lines (not dashed) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center gap-16 px-16 pointer-events-none">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="w-10 h-[3px] bg-white/50 shrink-0 rounded-full" />
              ))}
            </div>

            {/* Arrow Sign Board — left side before bus starts */}
            <div className="absolute left-[5%] top-[12%] z-10 pointer-events-none">
              <div className="flex flex-col items-center">
                {/* Sign board */}
                <div className="bg-white/90 text-black text-[10px] font-bold px-2.5 py-1 rounded flex items-center gap-1 shadow-md">
                  <span>→</span>
                  <span>SCHOOL</span>
                </div>
                {/* Post */}
                <div className="w-[3px] h-10 bg-white/70" />
              </div>
            </div>

            {/* Tree 1 — above road, left-center */}
            <div className="absolute -top-20 left-[22%] w-28 h-44 sm:w-36 sm:h-56 pointer-events-none z-10">
              <Image
                src="/webp/assets/landingpage-campix/tree.webp"
                alt="Milestone Tree"
                fill
                className="object-contain"
              />
            </div>

            {/* Tree 2 — below road, center */}
            <div className="absolute -bottom-20 left-[48%] w-28 h-44 sm:w-36 sm:h-56 pointer-events-none z-10">
              <Image
                src="/webp/assets/landingpage-campix/tree.webp"
                alt="Milestone Tree"
                fill
                className="object-contain"
              />
            </div>

            {/* Tree 3 — above road, right */}
            <div className="absolute -top-20 right-[8%] w-28 h-44 sm:w-36 sm:h-56 pointer-events-none z-10">
              <Image
                src="/webp/assets/landingpage-campix/tree.webp"
                alt="Milestone Tree"
                fill
                className="object-contain"
              />
            </div>

            {/* Moving School Bus — bigger size, travels 4%→78% of road width */}
            <motion.div
              className="absolute z-20 top-1/2 -translate-y-1/2 pointer-events-none"
              animate={{
                left: `${(activeRoadmapStep / (howItWorksMilestones.length - 1)) * 74 + 4}%`
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-52 h-32 sm:w-64 sm:h-40">
                <Image
                  src="/webp/assets/landingpage-campix/bus.webp"
                  alt="Campix Bus Moving Along Road"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* ─── 8. WHY CAMPIX? (VALUE PROPOSITION 3 COLUMNS) ─────────────────── */}
      <section className="relative w-full py-28 bg-[#000000] border-t border-zinc-900 overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[14px] font-semibold tracking-[0.6px] text-[#FFCA54] uppercase block mb-3">
              WHY CAMPIX?
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-[-0.64px] leading-[40px] mb-4">
              Built to Make Educational Management Simpler.
            </h2>
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: Save Time (Yellow) */}
            <div className="group rounded-[24px] bg-[#FFCA54] text-black p-8 sm:p-10 flex flex-col justify-between shadow-xl min-h-[300px] transition-all duration-300 hover:scale-[1.035] hover:shadow-[0_20px_50px_rgba(255,202,84,0.38)] cursor-pointer">
              <div>
                <div className="w-10 h-10 flex items-center justify-center text-black mb-6">
                  <Clock className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Save Time</h3>
                <p className="text-[15px] text-black/85 font-medium leading-[24px]">
                  Reduce manual processes and improve operational efficiency across administrative tasks, giving staff hours back every week.
                </p>
              </div>
            </div>

            {/* Card 2: Centralize Everything (Dark Glass) */}
            <div className="group rounded-[24px] bg-[#1C1C1E] border border-white/10 text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl min-h-[300px] transition-all duration-300 hover:scale-[1.035] hover:border-[#FFCA54]/25 hover:shadow-[0_20px_50px_rgba(255,202,84,0.14)] cursor-pointer">
              <div>
                <div className="w-10 h-10 flex items-center justify-center text-[#FFCA54] mb-6">
                  <Share2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Centralize Everything</h3>
                <p className="text-[15px] text-zinc-300 font-normal leading-[24px]">
                  Manage essential institutional information, records, and resources from one unified, secure platform accessible anywhere.
                </p>
              </div>
            </div>

            {/* Card 3: Make Better Decisions (Yellow) */}
            <div className="group rounded-[24px] bg-[#FFCA54] text-black p-8 sm:p-10 flex flex-col justify-between shadow-xl min-h-[300px] transition-all duration-300 hover:scale-[1.035] hover:shadow-[0_20px_50px_rgba(255,202,84,0.38)] cursor-pointer">
              <div>
                <div className="w-10 h-10 flex items-center justify-center text-black mb-6">
                  <TrendingUp className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Make Better Decisions</h3>
                <p className="text-[15px] text-black/85 font-medium leading-[24px]">
                  Use comprehensive reports and powerful analytics to identify trends and make data-driven, informed decisions for institutional growth.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── 9. PLATFORM HIGHLIGHTS SECTION ─────────────────────────────────── */}
      <section className="relative w-full py-28 bg-[#000000] border-t border-zinc-900 overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Text + Checklist + CTA */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-[14px] font-semibold tracking-[1.2px] text-[#FFCA54] uppercase block mb-3">
                PLATFORM HIGHLIGHTS
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-[-0.64px] leading-[40px] mb-4">
                Everything Your Institution Needs. One Powerful Platform.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white/80 font-normal leading-[28px] mb-8">
                Campix provides a comprehensive suite of tools designed to streamline educational management, empowering administrators and educators to focus on what matters most.
              </p>

              {/* Checklist */}
              <div className="space-y-4 w-full mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Multiple Modules</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Role-Based Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFCA54] shrink-0" />
                  <span className="text-[15px] sm:text-[16px] text-white font-medium">Scalable & Flexible</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact?service=campix-highlights"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#FFCA54] text-black font-semibold text-[15px] hover:bg-[#eab344] transition-all duration-300"
              >
                Explore Campix →
              </Link>
            </div>

            {/* Right Column: Platform Highlights Image */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <div
                className="relative w-full max-w-[580px] rounded-2xl overflow-hidden shadow-2xl translate-y-4 sm:translate-y-5 lg:translate-y-6"
                style={{ aspectRatio: "4/3.2" }}
              >
                <Image
                  src="/webp/assets/landingpage-campix/PLATFORM HIGHLIGHTS.webp"
                  alt="Campix Platform Highlights — mother and son using tablet"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 10. BOTTOM CTA BANNER ─────────────────────────────────────────── */}
      <section className="relative w-full py-16 bg-[#000000]">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="relative w-full max-w-6xl mx-auto rounded-[20px] bg-[#FFCA54] text-black p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight leading-tight mb-3">
                Ready to transform your institution?
              </h2>
              <p className="text-base sm:text-lg text-black/85 font-medium leading-relaxed">
                Join thousands of educators streamlining their daily operations with Campix.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact?service=campix-transform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-[18px] hover:bg-zinc-950 hover:text-white shadow-xl transition-all duration-300"
              >
                Get Started Today →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─── LIGHTBOX DIALOG MODAL (ZOOM ON CLICK WITH BACKDROP BLUR) ────────── */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-[#FFCA54] hover:text-black transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <div className="mb-4 pr-12">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {modalImage.title}
                </h3>
              </div>

              {/* High-Res Image Container */}
              <div className="relative w-full flex-1 min-h-[350px] sm:min-h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-black">
                <Image
                  src={modalImage.src}
                  alt={modalImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
