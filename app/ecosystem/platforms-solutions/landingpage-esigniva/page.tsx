"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

const signUrl = "https://safesign.devopstrio.co.uk/login";

const RedStar = ({ className = "w-4 h-4 text-[#FB2C53] shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

const SectionBadge = ({ label }: { label: string }) => (
  <div className="inline-flex items-center gap-3.5 px-9 py-3 sm:px-10 sm:py-3.5 rounded-full border-2 border-[#FB2C53] bg-black text-white text-lg sm:text-xl font-bold tracking-wider uppercase shadow-[0_0_28px_rgba(251,44,83,0.4)] hover:shadow-[0_0_38px_rgba(251,44,83,0.6)] transition-all duration-300">
    <RedStar className="w-5 h-5 text-[#FB2C53]" />
    <span>{label}</span>
  </div>
);

function usePresentationSection(totalSteps: number, debounceMs = 600) {
  const [step, setStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRef       = useRef(0);
  const pinnedRef     = useRef(false);
  const cooldownRef   = useRef(false);
  const releasingRef  = useRef(false);
  const touchStartRef = useRef<number | null>(null);

  useEffect(() => { stepRef.current = step; }, [step]);

  const goToStep = useCallback((n: number) => {
    setStep(n);
    stepRef.current = n;
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const startCooldown = () => {
      cooldownRef.current = true;
      window.setTimeout(() => { cooldownRef.current = false; }, debounceMs);
    };

    const releaseDown = () => {
      if (releasingRef.current) return;
      releasingRef.current = true;
      pinnedRef.current = false;
      detachWheel();
      const rect = el.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + rect.bottom, behavior: "smooth" });
      window.setTimeout(() => { releasingRef.current = false; }, 800);
    };

    const releaseUp = () => {
      if (releasingRef.current) return;
      releasingRef.current = true;
      pinnedRef.current = false;
      detachWheel();
      const rect = el.getBoundingClientRect();
      window.scrollTo({ top: Math.max(0, window.scrollY + rect.top - window.innerHeight), behavior: "smooth" });
      window.setTimeout(() => { releasingRef.current = false; }, 800);
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
        if (ratio >= 0.92 && !pinnedRef.current && !releasingRef.current) {
          pinnedRef.current = true;
          attachWheel();
        } else if (ratio < 0.5 && pinnedRef.current) {
          pinnedRef.current = false;
          detachWheel();
        }
      },
      { threshold: [0, 0.5, 0.92, 1.0] }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      detachWheel();
      pinnedRef.current = false;
      cooldownRef.current = false;
      releasingRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalSteps, debounceMs]);

  return { step, goToStep, sectionRef };
}

const workSteps = [
  {
    num: 1,
    title: "Upload Document",
    desc: "Upload your PDF, DOCX, or text file.",
    img: "/webp/assets/landingpage-esigniva/how to work section/upload document.webp?v=2",
  },
  {
    num: 2,
    title: "Add Recipients",
    desc: "Enter signer emails and set verification.",
    img: "/webp/assets/landingpage-esigniva/how to work section/Add recipients.webp?v=2",
  },
  {
    num: 3,
    title: "Place Signature Fields",
    desc: "Add signatures, initials, dates, and form fields.",
    img: "/webp/assets/landingpage-esigniva/how to work section/place signature fields.webp?v=2",
  },
  {
    num: 4,
    title: "Sign & Complete",
    desc: "Recipients sign securely and the document is sealed.",
    img: "/webp/assets/landingpage-esigniva/how to work section/sign & complete.webp?v=2",
  },
];

const featuresData = [
  {
    id: "document-center",
    title: "Smart Document Center",
    desc: "Manage, organize, and access every document from one place.",
    img: "/webp/assets/landingpage-esigniva/feat-document-center.webp",
  },
  {
    id: "reminders",
    title: "Automated Reminders",
    desc: "Keep every signing request on track with smart reminders.",
    img: "/webp/assets/landingpage-esigniva/feat-reminders.webp",
  },
  {
    id: "signing-order",
    title: "Signing Order",
    desc: "Set the right signing sequence and keep every document moving smoothly.",
    img: "/webp/assets/landingpage-esigniva/feat-signing-order.webp",
  },
  {
    id: "secure-signing",
    title: "Secure & Verified Signing",
    desc: "Keep every document protected with secure, trusted signing.",
    img: "/webp/assets/landingpage-esigniva/feat-secure-signing.webp",
  },
];

const reviewsData = [
  {
    name: "Divya R",
    role: "Operations Manager",
    quote: "The platform is easy to use and has simplified the way our team manages documents.",
    avatar: "/webp/assets/landingpage-esigniva/avatars/divya.png?v=2",
    pos: "object-top",
  },
  {
    name: "Sarah J",
    role: "Finance Executive",
    quote: "Esigniva has made our contract process faster, simpler, and more secure.",
    avatar: "/webp/assets/landingpage-esigniva/avatars/sarah.png?v=2",
    pos: "object-center",
  },
  {
    name: "Vignesh K",
    role: "Operations Head",
    quote: "Sending and signing documents has never been this fast and seamless.",
    avatar: "/webp/assets/landingpage-esigniva/avatars/vignesh.png?v=2",
    pos: "object-top",
  },
  {
    name: "John M",
    role: "Team Lead",
    quote: "We can manage agreements confidently without the hassle of paperwork.",
    avatar: "/webp/assets/landingpage-esigniva/avatars/john.png?v=2",
    pos: "object-top",
  },
  {
    name: "Keerthana V",
    role: "Business Manager",
    quote: "From sending documents to tracking completion, everything feels effortless.",
    avatar: "/webp/assets/landingpage-esigniva/avatars/keerthana.png?v=2",
    pos: "object-center",
  },
  {
    name: "Karthik P",
    role: "Business Analyst",
    quote: "Our team now has a more organised and professional way to handle agreements.",
    avatar: "/webp/assets/landingpage-esigniva/avatars/karthik.png?v=2",
    pos: "object-top",
  },
];

const whyItems = ["Send in seconds", "Sign from anywhere", "Track in real time", "Stay secure"];

export default function ESignivaLandingPage() {
  const [activeFeature, setActiveFeature] = useState("document-center");

  const { step: workStep, goToStep: goWorkStep, sectionRef: workSectionRef } = usePresentationSection(4, 600);
  const { step: whyStep, goToStep: goWhyStep, sectionRef: whySectionRef } = usePresentationSection(4, 600);

  const activeStep = workStep + 1;
  const radius = 220;
  const circumference = 2 * Math.PI * radius;
  const arcDashOffset =
    activeStep === 1 ? circumference * 0.75
    : activeStep === 2 ? circumference * 0.5
    : activeStep === 3 ? circumference * 0.25
    : 0;

  const currentFeature  = featuresData.find((f) => f.id === activeFeature) || featuresData[0];
  const currentStepData = workSteps.find((s) => s.num === activeStep) || workSteps[0];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FB2C53]/30 overflow-x-hidden font-sans">

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â• 1. HERO (40% Text / 60% Image) â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative w-full min-h-screen pt-24 pb-12 overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_70%_at_8%_50%,#4a0718_0%,#1a0208_45%,#000000_85%)]" />
        <div className="w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-0 items-center">

            {/* LEFT 40%: Text + button + curved arrow */}
            <div className="flex flex-col items-start relative z-20 lg:pr-8">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl xl:text-[3.6rem] font-semibold tracking-tight text-white leading-[1.1] mb-8 uppercase"
              >
                SIGN SMARTER
                <br />
                WORK FASTER
              </motion.h1>

              <div className="relative flex flex-col items-start w-full">
                {/* Two side-by-side CTA buttons */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 relative z-10">
                  <a
                    href="https://www.zoho.com/people/signup.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full bg-[#FB2C53] hover:bg-[#d91e40] text-white font-semibold text-base sm:text-lg shadow-[0_10px_32px_rgba(251,44,83,0.5)] hover:shadow-[0_16px_45px_rgba(251,44,83,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 tracking-wide text-center"
                  >
                    Sign up for free trial
                  </a>

                  <a
                    href="https://www.zoho.com/people/free-demo.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full bg-[#FB2C53] hover:bg-[#d91e40] text-white font-semibold text-base sm:text-lg shadow-[0_10px_32px_rgba(251,44,83,0.5)] hover:shadow-[0_16px_45px_rgba(251,44,83,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 tracking-wide text-center"
                  >
                    Request Demo
                  </a>
                </div>

                {/* Curved dashed arrow: centered below the two buttons, curving up from the dashboard side toward the center of the buttons */}
                <div className="hidden sm:block absolute -bottom-20 left-1/4 sm:left-[30%] w-40 h-20 pointer-events-none select-none text-white/70">
                  <svg viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M140 68 C 105 76, 55 60, 20 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="4 4" />
                    <path d="M36 12 L 18 12 L 20 30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT 60%: Slanted stacked cards */}
            <div className="relative flex items-center justify-center lg:justify-end min-h-[420px] sm:min-h-[520px] lg:min-h-[580px]">
              <div className="relative w-full max-w-[740px]">

                {/* Main dashboard */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.92)] backdrop-blur-md overflow-hidden"
                  style={{ transform: "perspective(1400px) rotateY(-5deg) rotateX(2deg)" }}
                >
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/webp/assets/landingpage-esigniva/hero-dashboard.webp"
                      alt="eSigniva Dashboard"
                      className="w-full h-full object-cover object-left-top"
                    />
                  </div>
                </motion.div>

                {/* Floating Card 1 â€“ top-left */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: [-8, 7, -8] }}
                  transition={{ opacity: { duration: 0.5, delay: 0.35 }, y: { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.35 } }}
                  className="absolute -top-14 left-0 sm:left-6 w-48 sm:w-60 drop-shadow-[0_18px_38px_rgba(0,0,0,0.92)] z-30 pointer-events-none"
                  style={{ transform: "rotate(-6deg)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/webp/assets/landingpage-esigniva/hero-document-signed.webp" alt="Document Signed" className="w-full h-auto rounded-2xl" />
                </motion.div>

                {/* Floating Card 2 â€“ top-right */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: [7, -7, 7] }}
                  transition={{ opacity: { duration: 0.5, delay: 0.5 }, y: { duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                  className="absolute -top-12 -right-4 sm:-right-8 w-48 sm:w-56 drop-shadow-[0_18px_38px_rgba(0,0,0,0.92)] z-30 pointer-events-none"
                  style={{ transform: "rotate(5deg)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/webp/assets/landingpage-esigniva/hero-offer-letter.webp" alt="Offer Letter" className="w-full h-auto rounded-2xl" />
                </motion.div>

                {/* Floating Card 3 â€“ bottom-left */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: [-6, 6, -6] }}
                  transition={{ opacity: { duration: 0.5, delay: 0.65 }, y: { duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.65 } }}
                  className="absolute -bottom-12 -left-6 sm:-left-10 w-52 sm:w-64 drop-shadow-[0_18px_38px_rgba(0,0,0,0.92)] z-30 pointer-events-none"
                  style={{ transform: "rotate(-4deg)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/webp/assets/landingpage-esigniva/hero-completed-docs.webp" alt="Completed Documents" className="w-full h-auto rounded-2xl" />
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â• 2. TRUSTED BY â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="w-full py-12 bg-black border-y border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center mb-8">
          <SectionBadge label="Trusted by" />
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]">
          <div className="flex w-max animate-marquee gap-20 sm:gap-32 items-center py-2">
            {[1, 2, 3].map((rep) => (
              <React.Fragment key={rep}>
                {["paymentology", "ncpl", "vdcapital", "startupfuel", "topland", "godaddy"].map((name) => (
                  <div key={`${rep}-${name}`} className="flex items-center shrink-0 opacity-80 hover:opacity-100 transition-opacity px-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/webp/assets/landingpage-esigniva/logos/${name}.png`}
                      alt={name}
                      className="h-8 sm:h-10 w-auto max-w-[150px] object-contain brightness-110"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â• 3. HOW IT WORKS â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section
        ref={workSectionRef as React.RefObject<HTMLElement>}
        className="w-full h-screen bg-black border-b border-zinc-900 flex items-center justify-center overflow-hidden py-8"
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
          <div className="text-center mb-8">
            <SectionBadge label="How to work" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 lg:gap-12 items-center">

            {/* LEFT: Large circle orbit */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[530px] sm:max-w-[600px] aspect-square flex items-center justify-center mx-auto">

                {/* Orbit SVG */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 500 500">
                  <circle cx="250" cy="250" r={radius} fill="none" stroke="#2e0810" strokeWidth="2" />
                  <motion.circle
                    cx="250" cy="250" r={radius}
                    fill="none" stroke="#FB2C53" strokeWidth="3"
                    strokeDasharray={circumference}
                    animate={{ strokeDashoffset: arcDashOffset }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    strokeLinecap="round"
                    style={activeStep === 4 ? { filter: "drop-shadow(0 0 14px #FB2C53)" } : undefined}
                  />
                </svg>

                {/* Step buttons at 12/3/6/9 o'clock */}
                {[
                  { num: 1, cls: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1" },
                  { num: 2, cls: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1" },
                  { num: 3, cls: "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1" },
                  { num: 4, cls: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1" },
                ].map(({ num, cls }) => {
                  const isReached = activeStep >= num;
                  const isCurrent = activeStep === num;
                  return (
                    <button
                      key={num}
                      onClick={() => goWorkStep(num - 1)}
                      aria-label={`Step ${num}`}
                      className={`${cls} flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 font-semibold text-sm transition-all duration-500 z-30 cursor-pointer ${
                        isCurrent
                          ? "bg-[#FB2C53] border-[#FB2C53] text-white shadow-[0_0_26px_rgba(251,44,83,0.9)] scale-115"
                          : isReached
                          ? "bg-[#1a0507] border-[#FB2C53] text-[#FB2C53]"
                          : "bg-[#0d0c0e] border-zinc-700 text-zinc-500"
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}

                {/* Inner mockup image — tablet frames */}
                <div className="relative w-[95%] sm:w-[96%] flex items-center justify-center z-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.97, x: 6 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.97, x: -6 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full flex items-center justify-center"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={currentStepData.img}
                        alt={currentStepData.title}
                        className={`w-full h-auto max-h-[480px] object-contain drop-shadow-[0_18px_48px_rgba(0,0,0,0.9)] transition-transform duration-300 ${
                          activeStep > 1 ? "scale-[1.06] sm:scale-[1.07]" : "scale-100"
                        }`}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* RIGHT: Step list with crimson left-border accent */}
            <div className="flex flex-col justify-center space-y-7">
              {workSteps.map((step) => {
                const isCurrent = activeStep === step.num;
                const isReached = activeStep >= step.num;
                return (
                  <div
                    key={step.num}
                    onClick={() => goWorkStep(step.num - 1)}
                    className={`cursor-pointer group border-l-[3px] pl-5 py-1 transition-all duration-300 ${
                      isCurrent
                        ? "border-[#FB2C53]"
                        : isReached
                        ? "border-[#FB2C53]/40"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    <h3
                      className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
                        isCurrent
                          ? "text-[#FB2C53]"
                          : isReached
                          ? "text-[#FB2C53]/65"
                          : "text-zinc-700 group-hover:text-zinc-400"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mt-1 transition-colors duration-300 ${
                        isCurrent ? "text-white/90" : "text-zinc-600 group-hover:text-zinc-400"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 4. FEATURES ══════════════ */}
      <section className="w-full py-12 md:py-16 relative bg-black border-b border-zinc-900 overflow-hidden">
        {/* Subtle ambient background grid texture (3-4% opacity) */}
        <div
          className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_40%,transparent_100%)]"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-10">
            <SectionBadge label="Features" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] gap-8 lg:gap-12 items-center">

            {/* LEFT: 4 Feature cards — exactly equal height & width, compact & balanced */}
            <div className="flex flex-col space-y-3 w-full">
              {featuresData.map((feat) => {
                const isSelected = activeFeature === feat.id;
                return (
                  <div
                    key={feat.id}
                    onClick={() => setActiveFeature(feat.id)}
                    className={`w-full h-[86px] sm:h-[90px] rounded-2xl border px-4 sm:px-5 py-3 transition-all duration-300 cursor-pointer flex flex-col justify-center ${
                      isSelected
                        ? "bg-[#1f1619] border-[#FB2C53] shadow-[0_0_28px_rgba(251,44,83,0.24)] scale-[1.01]"
                        : "bg-[#0f0e10] border-white/10 hover:border-[#FB2C53]/60 hover:shadow-[0_0_22px_rgba(251,44,83,0.16)] hover:bg-[#161214] hover:scale-[1.01]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-semibold text-[#FB2C53] truncate">{feat.title}</h3>
                      <RedStar className="w-4 h-4 text-[#FB2C53] shrink-0 ml-2" />
                    </div>
                    <p className="text-white/80 text-xs sm:text-[0.82rem] leading-snug font-normal line-clamp-2">{feat.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* RIGHT: Feature preview — standalone mockup image with ambient crimson glow */}
            <div className="flex items-center justify-center w-full relative">
              <div className="relative w-full h-[500px] sm:h-[535px] lg:h-[555px] flex items-center justify-center">
                {/* Large diffused radial ambient glow centered behind the vertical feature image */}
                <div
                  className="absolute inset-0 m-auto w-[120%] h-[120%] max-w-[640px] max-h-[640px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,44,83,0.18)_0%,rgba(251,44,83,0.06)_45%,transparent_75%)] blur-[70px] pointer-events-none"
                  aria-hidden="true"
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature.id}
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative w-full h-full flex items-center justify-center z-10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentFeature.img}
                      alt={currentFeature.title}
                      className="w-full h-full object-contain drop-shadow-[0_22px_50px_rgba(0,0,0,0.9)]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 5. WHY ESIGNIVA (50/50 Balanced Layout) ══════════════ */}
      <section
        ref={whySectionRef as React.RefObject<HTMLElement>}
        className="w-full h-screen bg-black border-b border-zinc-900 flex items-center justify-center overflow-hidden py-8"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <div className="text-center mb-10">
            <SectionBadge label="Why Esigniva" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* LEFT HALF (50%): Content occupies the full left half */}
            <div className="flex flex-col items-start w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-semibold tracking-tight text-white leading-[1.1] whitespace-nowrap">
                Simple steps to smart
              </h2>
              <div className="flex items-center mt-3 sm:mt-3.5 mb-3.5 sm:mb-4">
                <div className="w-2 h-10 sm:w-2.5 sm:h-11 bg-[#FB2C53] rounded-full mr-3 shrink-0" />
                <span className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-2xl bg-[#80182C] text-white text-xl sm:text-2xl lg:text-3xl xl:text-[2.2rem] font-semibold tracking-wide shadow-[0_6px_28px_rgba(251,44,83,0.4)]">
                  digital signing
                </span>
              </div>
              <p className="text-zinc-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed whitespace-nowrap font-normal">
                Send, Sign, track, and manage documents – all in one place.
              </p>
            </div>

            {/* RIGHT HALF (50%): Starts at the center line and extends rightward with natural breathing room on the right */}
            <div className="flex flex-col justify-center space-y-6 w-full lg:pr-6">
              {whyItems.map((title, idx) => {
                const isReached = whyStep >= idx;
                const isCurrent = whyStep === idx;
                return (
                  <motion.div
                    key={title}
                    onClick={() => goWhyStep(idx)}
                    animate={{
                      opacity: isCurrent ? 1 : isReached ? 0.62 : 0.18,
                      scale: isCurrent ? 1.04 : 1,
                      x: isCurrent ? 10 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="cursor-pointer border-l-4 pl-6 transition-colors duration-300"
                    style={{
                      borderColor: isCurrent
                        ? "#FB2C53"
                        : isReached
                        ? "rgba(251,44,83,0.38)"
                        : "rgba(255,255,255,0.04)",
                      filter: isCurrent ? "drop-shadow(0 0 10px rgba(251,44,83,0.4))" : "none",
                    }}
                  >
                    <h3
                      className={`text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-semibold tracking-tight ${
                        isCurrent
                          ? "text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.6)]"
                          : isReached
                          ? "text-[#FB2C53]/55"
                          : "text-zinc-800"
                      }`}
                    >
                      {title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 6. REVIEWS ────────────────── */}
      <section className="w-full py-16 md:py-24 relative bg-black border-b border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <SectionBadge label="Reviews" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-5 whitespace-nowrap">
              Trusted by Teams{" "}
              <span className="inline-block px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#7a1526] to-[#FB2C53] text-white font-semibold">
                Who Sign Smart
              </span>
            </h2>

            <div className="flex items-center justify-center gap-3.5 sm:gap-4 mt-4 flex-wrap">
              {/* 5 Stacked Reviewer Avatars */}
              <div className="flex items-center -space-x-2.5 sm:-space-x-3 overflow-visible shrink-0 py-0.5 px-0.5">
                {[
                  { name: "Divya", src: "/webp/assets/landingpage-esigniva/avatars/divya.png?v=2", pos: "object-top" },
                  { name: "Sarah", src: "/webp/assets/landingpage-esigniva/avatars/sarah.png?v=2", pos: "object-center" },
                  { name: "Vignesh", src: "/webp/assets/landingpage-esigniva/avatars/vignesh.png?v=2", pos: "object-top" },
                  { name: "John", src: "/webp/assets/landingpage-esigniva/avatars/john.png?v=2", pos: "object-top" },
                  { name: "Keerthana", src: "/webp/assets/landingpage-esigniva/avatars/keerthana.png?v=2", pos: "object-center" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-black bg-zinc-900 shadow-md shrink-0 ring-1 ring-white/20 flex items-center justify-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.name}
                      className={`w-full h-full object-cover ${item.pos}`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex text-amber-400 gap-0.5 items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm sm:text-base font-medium text-zinc-300">2,500+ customer reviews</span>
            </div>
          </div>

          {/* Review cards — matching Careers "What Our Team Is Saying" template */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reviewsData.map((rev, index) => (
              <motion.div
                key={rev.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="flex flex-col gap-5 text-left group"
              >
                {/* Quote bubble card */}
                <div className="relative bg-[#0d0d0d] border border-white/[0.08] hover:border-[#FB2C53]/35 p-6 sm:p-7 rounded-[24px] shadow-xl hover:shadow-[0_12px_40px_rgba(251,44,83,0.12)] transition-all duration-300 flex flex-col justify-between min-h-[175px] group-hover:-translate-y-1">
                  <p className="text-zinc-100 text-base sm:text-[1.05rem] font-semibold italic leading-relaxed mb-6">
                    &ldquo;{rev.quote}&rdquo;
                  </p>

                  {/* Star rating */}
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Profile details under the card */}
                <div className="flex items-center gap-3.5 px-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-lg ring-2 ring-[#FB2C53]/30 bg-zinc-900 border-2 border-black flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className={`w-full h-full object-cover ${rev.pos || "object-top"}`}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-base font-bold text-white block leading-tight">
                      {rev.name}
                    </span>
                    <span className="text-sm text-zinc-400 font-medium block mt-1 leading-tight">
                      {rev.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 7. FINAL CTA (Contact Page Design) ══════════════ */}
      <section className="w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 bg-black relative font-sans overflow-x-clip">
        {/* Subtle ambient background grid texture (3-4% opacity) */}
        <div
          className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_40%,transparent_100%)]"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <Reveal>
            <div className="bg-[#080808] border border-zinc-800/80 rounded-3xl p-6 sm:p-10 lg:p-12 lg:pl-14 lg:pr-8 relative shadow-2xl flex flex-col lg:flex-row items-stretch justify-between gap-8 min-h-[340px] sm:min-h-[380px] lg:min-h-[400px]">
              
              {/* Left Content Column: Title, Subheading & CTA Buttons */}
              <div className="w-full lg:w-[58%] xl:w-[60%] z-20 flex flex-col justify-between items-start text-left relative py-2">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.18] font-sans mb-4 max-w-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                    Sign smarter,{" "}
                    <span className="text-rose-500 font-semibold block sm:inline mt-1 sm:mt-0">
                      anywhere.
                    </span>
                  </h2>

                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal mb-6 max-w-2xl">
                    Manage documents, send for signatures, and track every step —
                    <br className="hidden sm:inline" /> all in one secure place with eSigniva.
                  </p>
                </div>

                {/* Tactile CTA Buttons */}
                <div className="mt-auto pt-6 sm:pt-8 flex flex-wrap items-center gap-5 sm:gap-7">
                  <a
                    href={signUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile group"
                  >
                    <div>
                      <span>
                        Start Your Free Journey
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </a>

                  <a
                    href={signUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile btn-tactile-secondary group"
                  >
                    <div>
                      <span>
                        TALK TO AN EXPERT
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Representative Image */}
              <div className="flex lg:absolute lg:bottom-0 lg:right-2 xl:right-6 w-full sm:w-[480px] md:w-[540px] lg:w-[640px] xl:w-[700px] justify-center lg:justify-end items-end pointer-events-none z-10 mt-6 sm:mt-8 lg:mt-0 mx-auto lg:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/webp/assets/components/cta-img-001.webp"
                  alt="eSigniva Representative"
                  className="w-full h-auto max-h-[240px] sm:max-h-[320px] lg:max-h-[calc(100%+160px)] xl:max-h-[calc(100%+180px)] object-contain object-bottom pointer-events-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] lg:drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
                  loading="lazy"
                />
              </div>

            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
