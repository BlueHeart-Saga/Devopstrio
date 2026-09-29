"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Crosshair,
  Key,
  FileCheck,
  Scale,
  XCircle,
  MinusCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GlowImage } from "@/components/ui/GlowImage";

/* =========================================================================
   1. HERO SECTION
   ========================================================================= */
const EsignivaHero: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white font-sans pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_680px] gap-8 items-center min-h-[440px]">
          {/* Left Text Block */}
          <div className="text-left space-y-6 max-w-[488px]">
            {/* Esigniva Brand Logo */}
            <Reveal>
              <div className="flex items-center gap-3">
                <img
                  src="/webp/assets/landingpage-esigniva/Images/esigniva_logo_icon.webp"
                  alt="eSigniva"
                  className="w-[34px] h-[34px] object-contain shrink-0"
                />
                <span className="text-[28px] sm:text-[32px] font-bold text-white tracking-[-0.5px] font-sans">
                  Esigniva
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold text-white leading-[1.12] lg:leading-[56px] tracking-[-1.2px]">
                Sign Documents. <br />
                Simplify Business.
              </h1>
            </Reveal>

            <Reveal delay={0.07}>
              <p className="text-[16px] lg:text-[18px] text-white leading-[26px] font-normal max-w-[482px]">
                eSigniva brings electronic signatures and document workflows together in one simple experience. Send documents, collect signatures, manage signing activities, and keep your agreements moving digitally.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="https://safesign.devopstrio.co.uk/login"
                  target="_blank"
                  className="w-[158px] h-[42px] inline-flex items-center justify-center gap-2 rounded-lg bg-[#26756E] text-[13px] font-semibold text-white transition-all hover:bg-[#1f5f59]"
                >
                  <span>Get Started</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="#how-it-works"
                  className="w-[205px] h-[42px] inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-black/40 text-[13px] font-medium text-white transition-all hover:border-zinc-500"
                >
                  <PlayCircle size={15} className="text-zinc-300" />
                  <span>Explore How It Works</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Hero Image: Static, Subtle Glow */}
          <div className="flex justify-center lg:justify-end">
            <Reveal delay={0.12} className="w-full flex justify-center lg:justify-end">
              <GlowImage
                src="/webp/assets/landingpage-esigniva/Images/hero_clean.webp"
                alt="Sign Documents with eSigniva"
                maxW="max-w-[680px]"
                eager
                glow="w-[110%] h-[80%]"
                interactive={false}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   2. WHAT IS ESIGNIVA?
   ========================================================================= */
const whatIsFeatures = [
  "Frictionless Workflow Automation",
  "Hardware-Backed Security",
  "Developer-First API & Integrations",
  "Legally Binding & Court-Admissible",
];

const EsignivaWhatIs: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white font-sans pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_650px] gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-5 text-left">
            <Reveal>
              <div className="space-y-2.5">
                <span className="text-[14px] leading-[14px] font-semibold text-[#2DD4BF] tracking-[0.55px] uppercase block">
                  WHAT IS ESIGNIVA?
                </span>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.12] lg:leading-[56px] tracking-[-1.2px] max-w-[591px]">
                  A Smarter Way to Manage <br />
                  Digital Signatures
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="text-[16px] lg:text-[18px] text-white font-normal leading-[26px] max-w-[467px]">
                eSigniva helps businesses move away from manual document signing by bringing document preparation, electronic signatures, and signing workflows into one streamlined platform.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-[10px] pt-2">
                {whatIsFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-[14px] h-[14px] text-[#2DD4BF] shrink-0" />
                    <span className="text-[14px] leading-[22px] font-normal text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column Visual: 558px with Anchored Glow */}
          <div className="flex justify-center lg:justify-end">
            <Reveal delay={0.1} className="w-full flex justify-center lg:justify-end">
              <GlowImage
                src="/webp/assets/landingpage-esigniva/Images/what_is_clean.webp"
                alt="What is eSigniva"
                maxW="max-w-[650px]"
                glow="w-[95%] h-[80%]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   3. HOW ESIGNIVA WORKS (Scroll-Driven Light Curves)
   ========================================================================= */
const howSteps = [
  {
    n: "01",
    title: "Build & Smart Upload",
    desc: "Upload any PDF/DOCX or construct dynamic agreement templates. Our AI engine auto-detects signatures and form fields in milliseconds.",
    img: "/webp/assets/landingpage-esigniva/Images/HOW ESIGNIVA WORKS/step1_clean.webp",
    alt: "Build and Smart Upload",
    maxW: "max-w-[680px]",
    flip: false,
  },
  {
    n: "02",
    title: "Choose Recipients & Smart Order",
    desc: "Configure multi-party signing flows with sequential or parallel approvals, identity challenges, and custom sign-order rules.",
    img: "/webp/assets/landingpage-esigniva/Images/HOW ESIGNIVA WORKS/step2_clean.webp",
    alt: "Choose Recipients and Smart Order",
    maxW: "max-w-[620px]",
    flip: true,
  },
  {
    n: "03",
    title: "Send, Track & Manage",
    desc: "Deliver documents to the right recipients, track their activity in real time, and send timely reminders until every signature is complete.",
    img: "/webp/assets/landingpage-esigniva/Images/HOW ESIGNIVA WORKS/step3_clean.webp",
    alt: "Send, Track and Manage",
    maxW: "max-w-[670px]",
    flip: false,
  },
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

const EsignivaHowItWorks: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const metrics = useRef({ a: 0, b: 0, c: 0, h: 0 });
  const [paths, setPaths] = useState({ d1: "", d2: "", d3: "", w: 0, h: 0 });
  const [prog, setProg] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    on: [false, false, false],
  });

  // scroll -> how far the light has travelled
  const update = () => {
    const box = boxRef.current;
    const { a, b, c, h } = metrics.current;
    if (!box || !h) return;
    const anchor = window.innerHeight * 0.6 - box.getBoundingClientRect().top;
    const p1 = clamp01((anchor - a) / (b - a));
    const p2 = clamp01((anchor - b) / (c - b));
    const p3 = clamp01((anchor - c) / (h - c));
    const on = [anchor >= a - 40, p1 >= 0.98, p2 >= 0.98];
    setProg((prev) =>
      prev.p1 === p1 &&
      prev.p2 === p2 &&
      prev.p3 === p3 &&
      prev.on.every((v, i) => v === on[i])
        ? prev
        : { p1, p2, p3, on }
    );
  };

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const centerOf = (el: HTMLElement) => {
      let x = 0,
        y = 0;
      let n: HTMLElement | null = el;
      while (n && n !== box) {
        x += n.offsetLeft;
        y += n.offsetTop;
        n = n.offsetParent as HTMLElement | null;
      }
      return { x: x + el.offsetWidth / 2, y: y + el.offsetHeight / 2 };
    };

    const calc = () => {
      const dots = dotRefs.current;
      const rows = rowRefs.current;
      if (!dots[0] || !dots[1] || !dots[2] || !rows[0] || !rows[1] || !rows[2]) return;

      const a = centerOf(dots[0]);
      const b = centerOf(dots[1]);
      const c = centerOf(dots[2]);
      const w = box.offsetWidth;
      const h = box.offsetHeight;
      const r = 48;

      const gap1 = (rows[0].offsetTop + rows[0].offsetHeight + rows[1].offsetTop) / 2;
      const gap2 = (rows[1].offsetTop + rows[1].offsetHeight + rows[2].offsetTop) / 2;

      metrics.current = { a: a.y, b: b.y, c: c.y, h };
      setPaths({
        d1: `M ${a.x} ${a.y + r} C ${a.x} ${gap1}, ${b.x} ${gap1}, ${b.x} ${b.y - r}`,
        d2: `M ${b.x} ${b.y + r} C ${b.x} ${gap2}, ${c.x} ${gap2}, ${c.x} ${c.y - r}`,
        d3: `M ${c.x} ${c.y + r} C ${c.x} ${h + 40}, ${c.x + (w - c.x) * 0.35} ${h + 40}, ${w * 0.85} ${h + 40}`,
        w,
        h,
      });
      update();
    };

    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(box);
    const t = setTimeout(calc, 1200);

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      ro.disconnect();
      clearTimeout(t);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const segs = [
    { d: paths.d1, p: prog.p1 },
    { d: paths.d2, p: prog.p2 },
    { d: paths.d3, p: prog.p3 },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-[#000000] text-white font-sans pt-12 pb-20 sm:pt-16 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[945px] mx-auto mb-16 sm:mb-20 space-y-3">
          <Reveal>
            <span className="text-[14px] leading-[14px] font-semibold text-[#89D4CB] tracking-[0.55px] uppercase block">
              HOW ESIGNIVA WORKS
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-bold text-[#E4E2E1] leading-[1.12] lg:leading-[56px] tracking-[-1.2px] whitespace-normal lg:whitespace-nowrap">
              From Document to Signed in Simple Steps
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[16px] lg:text-[18px] text-white font-normal leading-[26px] max-w-[677px] mx-auto">
              eSigniva simplifies the entire signing journey—from preparing your document to managing the completed agreement.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <div ref={boxRef} className="relative space-y-20 sm:space-y-28 lg:space-y-32">
          {/* Connecting line (desktop only) */}
          {paths.d1 && (
            <svg
              className="hidden lg:block absolute left-0 top-0 z-0 pointer-events-none overflow-visible"
              width={paths.w}
              height={paths.h}
              aria-hidden="true"
            >
              {segs.map((s, i) => (
                <path
                  key={`base-${i}`}
                  d={s.d}
                  fill="none"
                  stroke="rgba(45,212,191,0.14)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ))}

              {segs.map((s, i) => (
                <path
                  key={`lit-${i}`}
                  d={s.d}
                  pathLength={1}
                  fill="none"
                  stroke="#2DD4BF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="1"
                  strokeDashoffset={1 - s.p}
                  style={{
                    opacity: s.p > 0.001 ? 1 : 0,
                    filter: "drop-shadow(0 0 8px rgba(45,212,191,.9))",
                  }}
                />
              ))}
            </svg>
          )}

          {howSteps.map((s, i) => {
            const active = prog.on[i];
            return (
              <div
                key={s.n}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-center"
              >
                {/* Circle + text in one row */}
                <div
                  className={`lg:col-span-5 w-full max-w-[454px] ${
                    s.flip ? "order-1 lg:order-2 lg:ml-auto" : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-5 text-left ${
                      s.flip ? "lg:flex-row-reverse lg:text-right" : ""
                    }`}
                  >
                    {/* Circle (ref used by the line) */}
                    <Reveal>
                      <div
                        ref={(el) => {
                          dotRefs.current[i] = el;
                        }}
                        className={`shrink-0 w-[80.69px] h-[80.69px] rounded-full flex items-center justify-center text-[20px] font-semibold transition-all duration-500 ${
                          active ? "bg-white text-[#26756E]" : "bg-zinc-800 text-zinc-500"
                        }`}
                        style={{
                          boxShadow: active
                            ? "0 0 0 6px rgba(45,212,191,.25), 0 0 32px rgba(45,212,191,.8)"
                            : "0 0 0 1px rgba(45,212,191,.15)",
                        }}
                      >
                        {s.n}
                      </div>
                    </Reveal>

                    {/* Text beside the circle */}
                    <div className="min-w-0 flex-1 space-y-2">
                      <Reveal delay={0.06}>
                        <h3 className="text-[18px] leading-[26px] font-semibold text-white">
                          {s.title}
                        </h3>
                      </Reveal>
                      <Reveal delay={0.1}>
                        <p className="text-[14px] leading-[22px] text-white font-normal">
                          {s.desc}
                        </p>
                      </Reveal>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`lg:col-span-7 flex justify-center ${
                    s.flip ? "order-2 lg:order-1 lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <Reveal delay={0.08} className="w-full flex justify-center">
                    <GlowImage
                      src={s.img}
                      alt={s.alt}
                      maxW={s.maxW}
                      glow="w-[90%] h-[75%]"
                    />
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   4. SMART BUILDER STUDIO
   ========================================================================= */
const EsignivaBuilderStudio: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white font-sans pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-[821px] mx-auto mb-10 space-y-3">
          <Reveal>
            <span className="text-[14px] leading-[14px] font-semibold text-[#89D4CB] tracking-[0.55px] uppercase block">
              SMART BUILDER STUDIO
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.12] lg:leading-[56px] tracking-[-1.2px] whitespace-normal lg:whitespace-nowrap">
              Make Every Document Ready to Sign
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[16px] lg:text-[18px] text-white font-normal leading-[26px] max-w-[739px] mx-auto">
              Prepare documents with the information and fields your recipients need. Intuitive drag-and-drop field orchestration with automated cryptographic compliance rules.
            </p>
          </Reveal>

          {/* Stats Bar */}
          <Reveal delay={0.12}>
            <div className="max-w-[861px] h-auto sm:h-[48px] mx-auto mt-6 px-6 py-3 sm:py-0 rounded-2xl sm:rounded-full bg-[#0b0f10] border border-zinc-800/80 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 text-[13px] sm:text-[14px] text-zinc-300">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#2DD4BF]" />
                <span>SOC2 Type II Compliant</span>
              </div>
              <div className="hidden sm:block text-zinc-700">•</div>
              <div className="flex items-center gap-2">
                <Crosshair size={16} className="text-[#2DD4BF]" />
                <span>Sub-Pixel Vector Snapping</span>
              </div>
              <div className="hidden sm:block text-zinc-700">•</div>
              <div className="flex items-center gap-2">
                <Key size={16} className="text-[#2DD4BF]" />
                <span>SHA-256 Coordinate Seal</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Builder Image: 1240px */}
        <Reveal delay={0.15} className="w-full flex justify-center">
          <GlowImage
            src="/webp/assets/landingpage-esigniva/Images/builder_clean.webp"
            alt="Smart Builder Studio"
            maxW="max-w-[1240px]"
            mask={false}
            glow="w-[95%] h-[60%]"
          />
        </Reveal>
      </div>
    </section>
  );
};

/* =========================================================================
   5. SIGNING WORKFLOW
   ========================================================================= */
const EsignivaSigningWorkflow: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white font-sans pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-[768px] mx-auto mb-10 space-y-3">
          <Reveal>
            <span className="text-[14px] leading-[14px] font-semibold text-[#44E2CD] tracking-[0.55px] uppercase block">
              SIGNING WORKFLOW
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.12] lg:leading-[56px] tracking-[-1.2px]">
              Everyone Has a Role. <br />
              Every Signature Has a Place.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[16px] lg:text-[18px] text-white font-normal leading-[26px] max-w-[672px] mx-auto">
              From creating and sending to reviewing and signing, eSigniva brings everyone together in a secure and simple way — because great workflows work for everyone.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="w-full flex justify-center">
          <GlowImage
            src="/webp/assets/landingpage-esigniva/Images/workflow_clean.webp"
            alt="Signing Workflow Roles"
            maxW="max-w-[1240px]"
            mask={false}
            glow="w-[95%] h-[65%]"
          />
        </Reveal>
      </div>
    </section>
  );
};

/* =========================================================================
   6. DYNAMIC DEVICE RESPONSIVE ENGINE
   ========================================================================= */
const EsignivaDeviceEngine: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white font-sans pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-[702px] mx-auto mb-10 space-y-3">
          <Reveal>
            <span className="text-[14px] leading-[14px] font-semibold text-[#44E2CD] tracking-[0.55px] uppercase block">
              DYNAMIC DEVICE RESPONSIVE ENGINE
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.12] lg:leading-[56px] tracking-[-1.2px]">
              SIGN FROM ANYWHERE. <br />
              Your Documents. Your Devices.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[16px] lg:text-[18px] text-white font-normal leading-[26px] max-w-[629px] mx-auto">
              Give users the flexibility to review and sign documents wherever business happens. Author on desktop, verify on tablet, execute securely on mobile.
            </p>
          </Reveal>
        </div>

        {/* Multi-Device Graphic inside standard 1280px layout container */}
        <Reveal delay={0.12} className="w-full flex justify-center">
          <GlowImage
            src="/webp/assets/landingpage-esigniva/Images/devices_clean.webp"
            alt="Dynamic Device Responsive Engine"
            maxW="max-w-[1240px]"
            mask={false}
            glow="w-[95%] h-[60%]"
          />
        </Reveal>
      </div>
    </section>
  );
};

/* =========================================================================
   7. REAL-TIME TELEMETRY
   ========================================================================= */
const EsignivaTelemetry: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white font-sans pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-[763px] mx-auto mb-10 space-y-3">
          <Reveal>
            <span className="text-[14px] leading-[14px] font-semibold text-[#44E2CD] tracking-[0.55px] uppercase block">
              REAL-TIME TELEMETRY
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#E4E2E1] leading-[1.12] lg:leading-[56px] tracking-[-1.2px] max-w-[577px] mx-auto">
              Always Know Where Your <br />
              Document Stands.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[16px] lg:text-[18px] text-[#BEC9C6] font-normal leading-[26px]">
              Remove the uncertainty around pending signatures. Track document progress throughout the signing journey so you know what has been completed and what still needs attention.
            </p>
          </Reveal>
        </div>

        {/* Telemetry Visual: 1080px */}
        <Reveal delay={0.12} className="w-full flex justify-center">
          <GlowImage
            src="/webp/assets/landingpage-esigniva/Images/telemetry_clean.webp"
            alt="Real-Time Telemetry"
            maxW="max-w-[1080px]"
            mask={false}
            glow="w-[95%] h-[65%]"
          />
        </Reveal>
      </div>
    </section>
  );
};

/* =========================================================================
   8. DOCUMENT MANAGEMENT
   ========================================================================= */
const EsignivaDocManagement: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white font-sans pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-[780px] mx-auto mb-10 space-y-3">
          <Reveal>
            <span className="text-[14px] leading-[14px] font-semibold text-[#44E2CD] tracking-[0.55px] uppercase block">
              DOCUMENT MANAGEMENT
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.12] lg:leading-[56px] tracking-[-1.2px]">
              Keep Every Document Organized &amp; <br />
              Accessible
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[16px] lg:text-[18px] text-white font-normal leading-[26px] max-w-[767px] mx-auto">
              Store, organize, track, and manage documents from one secure place — from the moment they are uploaded to the final signed copy.
            </p>
          </Reveal>
        </div>

        {/* Composite Visual: 1240px */}
        <Reveal delay={0.12} className="w-full flex justify-center">
          <GlowImage
            src="/webp/assets/landingpage-esigniva/Images/DOCUMENT MANAGEMENT.webp"
            alt="Document Management"
            maxW="max-w-[1240px]"
            mask={false}
            glow="w-[95%] h-[60%]"
          />
        </Reveal>
      </div>
    </section>
  );
};

/* =========================================================================
   9. SECURITY & DOCUMENT TRUST
   ========================================================================= */
const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "Data encrypted at rest and in transit via TLS 1.3 cryptographic pipelines.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Identities",
    desc: "Verify authentic signers using passkeys, government ID scans, and live SMS OTPs.",
  },
  {
    icon: FileCheck,
    title: "Tamper-Proof Records",
    desc: "Immutable forensic audit trail. Instantly invalidates if a single pixel shifts.",
  },
  {
    icon: Scale,
    title: "Compliance Ready",
    desc: "Meets global statutory requirements for court-admissible legal enforceability.",
  },
];

const EsignivaSecurityTrust: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white font-sans pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_640px] gap-8 items-center">
          <div className="space-y-5 text-left">
            <Reveal>
              <div className="space-y-2.5">
                <span className="text-[14px] leading-[14px] font-semibold text-[#44E2CD] tracking-[0.55px] uppercase block">
                  SECURITY &amp; DOCUMENT TRUST
                </span>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.12] lg:leading-[56px] tracking-[-1.2px] max-w-[690px]">
                  Your Documents. <br />
                  Safe, Secure &amp; Trusted.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="text-[16px] lg:text-[18px] text-white font-normal leading-[26px] max-w-[471px]">
                We use advanced security measures and industry standards to protect your documents, identities, and signatures — so you can sign with total sovereign confidence.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 max-w-[560px]">
              {securityFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={idx} delay={0.1 + idx * 0.04}>
                    <div className="space-y-1.5 text-left max-w-[240px]">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                        <h3 className="text-[16px] sm:text-[18px] leading-[26px] font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[14px] leading-[22px] text-zinc-300 font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right: Security image with anchored Glow */}
          <div className="flex justify-center lg:justify-end">
            <Reveal delay={0.1} className="w-full flex justify-center lg:justify-end">
              <GlowImage
                src="/webp/assets/landingpage-esigniva/Images/security_clean.webp"
                alt="Security and Document Trust"
                maxW="max-w-[640px]"
                glow="w-[95%] h-[80%]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   10. BUILT FOR MODERN BUSINESSES (Auto-Slide Carousel with Arrows)
   ========================================================================= */
const businessCards = [
  {
    id: "card-1",
    title: "HR & Recruitment",
    image: "/webp/assets/landingpage-esigniva/Images/BUILT FOR MODERN BUSINESSES/CARD 1_ HR & Recruitment.webp",
  },
  {
    id: "card-2",
    title: "Legal & Compliance",
    image: "/webp/assets/landingpage-esigniva/Images/BUILT FOR MODERN BUSINESSES/CARD 2_ Legal & Compliance.webp",
  },
  {
    id: "card-3",
    title: "Sales Teams",
    image: "/webp/assets/landingpage-esigniva/Images/BUILT FOR MODERN BUSINESSES/CARD 3_ Sales Teams.webp",
  },
  {
    id: "card-4",
    title: "Finance & Operations",
    image: "/webp/assets/landingpage-esigniva/Images/BUILT FOR MODERN BUSINESSES/CARD 4_ Finance & Operations.webp",
  },
  {
    id: "card-5",
    title: "Real Estate",
    image: "/webp/assets/landingpage-esigniva/Images/BUILT FOR MODERN BUSINESSES/CARD 5_ Real Estate (1).webp",
  },
  {
    id: "card-6",
    title: "Service Businesses & Agencies",
    image: "/webp/assets/landingpage-esigniva/Images/BUILT FOR MODERN BUSINESSES/CARD 6_ Service Businesses & Agencies (1).webp",
  },
];

const EsignivaModernBusinesses: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const getStep = () => {
    const el = scrollerRef.current;
    const card = el?.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + 6 : 300;
  };

  const goNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: getStep(), behavior: "smooth" });
  };

  const goPrev = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: -getStep(), behavior: "smooth" });
  };

  // auto-change every 2 seconds (pauses while hovering)
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) goNext();
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-[#000000] text-white font-sans pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-[1002px] mx-auto mb-10 space-y-3">
          <Reveal>
            <span className="text-[14px] leading-[14px] font-semibold text-[#44E2CD] tracking-[0.55px] uppercase block">
              BUILT FOR MODERN BUSINESSES
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-bold text-white leading-[1.12] lg:leading-[56px] tracking-[-1.2px] whitespace-normal lg:whitespace-nowrap">
              One Signing Platform. Many Business Needs.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[16px] lg:text-[18px] text-white font-normal leading-[26px] max-w-[775px] mx-auto">
              eSigniva supports digital signing workflows across teams and industries where agreements must be reviewed, signed, and audited with velocity.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Auto-sliding cards */}
      <div
        ref={scrollerRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() => (pausedRef.current = false)}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth pt-2 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-[6px] min-w-max px-4 sm:px-8 lg:px-12">
          {businessCards.map((card) => (
            <div
              key={card.id}
              data-card
              className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[389px] h-auto rounded-lg overflow-hidden shadow-md shadow-black/40"
            >
              <img
                src={card.image}
                alt={card.title}
                width={389}
                height={439}
                className="w-full h-auto object-contain block rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous"
          className="w-11 h-11 rounded-full border border-zinc-700 bg-black/40 flex items-center justify-center text-white transition-all hover:border-[#2DD4BF] hover:text-[#2DD4BF]"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next"
          className="w-11 h-11 rounded-full border border-zinc-700 bg-black/40 flex items-center justify-center text-white transition-all hover:border-[#2DD4BF] hover:text-[#2DD4BF]"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

/* =========================================================================
   11. WHY ESIGNIVA?
   ========================================================================= */
const traditionalPoints = [
  "Printing, scanning, and mailing physical paper stacks.",
  "Important attachments lost in messy, untracked email threads.",
  "Awkward manual follow-ups and unverified signer reminders.",
  "Zero visibility into whether a contract was even viewed.",
  "Fragile, missing, or non-compliant paper audit records.",
];

const esignivaPoints = [
  "100% digital, paperless execution on desktop, tablet, and mobile.",
  "Centralized encrypted repository with structured search and tags.",
  "Automated email and SMS reminders.",
  "Real-time live telemetry tracking.",
  "Court-admissible cryptographic Certificate of Completion.",
];

const EsignivaWhy: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white font-sans pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-[819px] mx-auto mb-12 space-y-3">
          <Reveal>
            <span className="text-[14px] leading-[14px] font-semibold text-[#44E2CD] tracking-[0.55px] uppercase block">
              WHY ESIGNIVA?
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.12] lg:leading-[56px] tracking-[-1.2px]">
              Less Chasing. Less Paperwork. More <br />
              Progress.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[16px] lg:text-[18px] text-white font-normal leading-[26px] max-w-[735px] mx-auto">
              Bring your entire signing workflow into one streamlined digital experience designed for <br className="hidden sm:inline" />
              modern velocity.
            </p>
          </Reveal>
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left: Traditional Process */}
          <div className="lg:col-span-6 space-y-5 text-left max-w-[562px]">
            <Reveal delay={0.08}>
              <div className="flex items-center gap-3 h-[28px]">
                <XCircle className="w-5 h-5 text-[#EF4444] shrink-0" />
                <h3 className="text-[18px] sm:text-[20px] font-bold text-white">
                  Traditional Process (Before)
                </h3>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-3.5 pt-2 max-w-[512px]">
                {traditionalPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <MinusCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                    <span className="text-[14px] sm:text-[15px] leading-[22px] text-zinc-300 font-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Card: 630x312, White */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="w-full max-w-[630px] min-h-[312px] rounded-lg bg-white p-7 sm:p-8 text-left space-y-4 shadow-xl flex flex-col justify-between">
                <div className="flex items-center gap-3 h-[28px]">
                  <CheckCircle2 className="w-5 h-5 text-[#26756E] shrink-0" />
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-zinc-900">
                    With eSigniva (After)
                  </h3>
                </div>

                <div className="space-y-3 pt-1">
                  {esignivaPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#26756E] shrink-0 mt-0.5" />
                      <span className="text-[14px] leading-[22px] text-zinc-800 font-normal">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   12. CTA BANNER (Compact & Modern)
   ========================================================================= */
const EsignivaCTA: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white font-sans pt-6 pb-14 sm:pt-8 sm:pb-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 flex justify-center">
        <Reveal className="w-full max-w-[1040px]">
          <div className="relative w-full rounded-[12px] border border-[#158A8C]/40 bg-gradient-to-r from-[#158A8C]/25 via-[#158A8C]/10 to-[#158A8C]/25 px-6 sm:px-10 py-6 sm:py-7 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
            <div className="max-w-[560px] space-y-1.5">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white tracking-[-0.6px] leading-[1.2]">
                Ready to Move Beyond Paper?
              </h2>
              <p className="text-[14px] lg:text-[15px] text-zinc-300 font-normal leading-[22px]">
                Create, send, sign, and manage documents with a simpler, faster, and more reliable digital signing experience.
              </p>
            </div>

            <Link
              href="https://safesign.devopstrio.co.uk/login"
              target="_blank"
              className="shrink-0 w-full sm:w-[200px] h-[44px] inline-flex items-center justify-center gap-2 rounded-lg bg-[#26756E] hover:bg-[#1f5f59] text-white text-[14px] font-semibold transition-all"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* =========================================================================
   MAIN PAGE EXPORT
   ========================================================================= */
export default function EsignivaPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-[#26756E]/30 selection:text-white font-sans overflow-x-hidden">
      {/* 1. Hero */}
      <EsignivaHero />

      {/* 2. What is eSigniva? */}
      <EsignivaWhatIs />

      {/* 3. How eSigniva Works */}
      <EsignivaHowItWorks />

      {/* 4. Smart Builder Studio */}
      <EsignivaBuilderStudio />

      {/* 5. Signing Workflow */}
      <EsignivaSigningWorkflow />

      {/* 6. Dynamic Device Responsive Engine */}
      <EsignivaDeviceEngine />

      {/* 7. Real-Time Telemetry */}
      <EsignivaTelemetry />

      {/* 8. Document Management */}
      <EsignivaDocManagement />

      {/* 9. Security & Document Trust */}
      <EsignivaSecurityTrust />

      {/* 10. Built for Modern Businesses */}
      <EsignivaModernBusinesses />

      {/* 11. Why eSigniva? */}
      <EsignivaWhy />

      {/* 12. CTA */}
      <EsignivaCTA />
    </main>
  );
}
