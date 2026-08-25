"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";

const PULL_DURATION = 3400;
const ABSORB_DURATION = 600;
const EJECT_DURATION = 1400;
const COOLDOWN_DURATION = 2800;

const nodes = [
  { id: "l1", cls: "left l1", logo: "/webp/assets/Home-page/our-products/logo/humanex.webp", alt: "Humanex" },
  { id: "l2", cls: "left l2", logo: "/webp/assets/Home-page/our-products/logo/homela.webp", alt: "Homela" },
  { id: "l3", cls: "left l3", logo: "/webp/assets/Home-page/our-products/logo/brio.webp", alt: "Brio" },
  { id: "l4", cls: "left l4", logo: "/webp/assets/Home-page/our-products/logo/Campix.webp", alt: "Campix" },
  { id: "r1", cls: "right r1", logo: "/webp/assets/Home-page/our-products/logo/Prestivo.webp", alt: "Perstivo" },
  { id: "r2", cls: "right r2", logo: "/webp/assets/Home-page/our-products/logo/Justivon.webp", alt: "Justivon" },
  { id: "r3", cls: "right r3", logo: "/webp/assets/Home-page/our-products/logo/Caresuite.webp", alt: "Caresuite" },
  { id: "r4", cls: "right r4", logo: "/webp/assets/Home-page/our-products/logo/safesign.webp", alt: "Safesign" },
];

export function UnifiedIntegrations() {
  const [phase, setPhase] = useState("idle");
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const cycleRef = useRef<(() => void) | null>(null);

  const startCycle = useCallback(() => {
    setPhase("pull");

    timerRef.current = setTimeout(() => {
      setPhase("absorb");

      timerRef.current = setTimeout(() => {
        setPhase("eject");

        timerRef.current = setTimeout(() => {
          setPhase("cooldown");

          timerRef.current = setTimeout(() => {
            setPhase("idle");
            timerRef.current = setTimeout(() => cycleRef.current?.(), 600);
          }, COOLDOWN_DURATION);
        }, EJECT_DURATION);
      }, ABSORB_DURATION);
    }, PULL_DURATION);
  }, []);

  useEffect(() => {
    cycleRef.current = startCycle;
  }, [startCycle]);

  useEffect(() => {
    const firstDelay = setTimeout(() => startCycle(), 1200);
    return () => {
      clearTimeout(firstDelay);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startCycle]);

  return (
    <section className="hub-section w-full py-20 md:py-32 bg-[#030303] text-white  relative overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        .hub-section {
          background: #030303;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .hub-header {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hub-visualization {
          position: relative;
          max-width: 95%;
          height: 500px;
          margin: 0 auto;
          z-index: 1;
          container-type: size;
        }

        .hub-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .hub-line {
          fill: none;
          stroke: rgba(255, 255, 255, 0.05);
          stroke-width: 1;
          stroke-linecap: round;
          transition: stroke 1.8s ease, stroke-width 1.8s ease, opacity 1.8s ease;
        }

        .hub-phase-pull .hub-line {
          stroke: rgba(244, 63, 94, 0.22);
          stroke-width: 1.2;
        }

        .hub-phase-absorb .hub-line {
          stroke: rgba(244, 63, 94, 0.06);
          stroke-width: 0.8;
          opacity: 0.5;
        }

        .hub-phase-eject .hub-line {
          stroke: rgba(231, 158, 87, 0.18);
          stroke-width: 1;
          transition: stroke 0.6s ease;
        }

        .hub-phase-cooldown .hub-line,
        .hub-phase-idle .hub-line {
          stroke: rgba(255, 255, 255, 0.05);
          stroke-width: 1;
        }

        .hub-center {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          pointer-events: none;
        }

        .hub-accretion {
          position: absolute;
          inset: 50%;
          width: 175px;
          height: 175px;
          border-radius: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
          border: 1px solid transparent;
          border-top-color: rgba(244, 63, 94, 0);
          animation: orbit-idle 12s linear infinite;
          z-index: 2;
          transition:
            border-top-color 1.5s ease,
            border-right-color 1.5s ease,
            width 1.5s ease,
            height 1.5s ease,
            filter 1.5s ease;
        }

        .hub-phase-pull .hub-accretion {
          border-top-color: rgba(244, 63, 94, 0.35);
          border-right-color: rgba(82, 44, 114, 0.15);
          animation-duration: 6s;
          filter: drop-shadow(0 0 6px rgba(244, 63, 94, 0.3));
        }

        .hub-phase-absorb .hub-accretion {
          width: 160px;
          height: 160px;
          border-top-color: rgba(244, 63, 94, 0.65);
          border-right-color: rgba(82, 44, 114, 0.3);
          animation-duration: 2.5s;
          filter: drop-shadow(0 0 12px rgba(244, 63, 94, 0.5));
        }

        .hub-phase-eject .hub-accretion {
          width: 220px;
          height: 220px;
          border-top-color: rgba(231, 158, 87, 0.2);
          border-right-color: rgba(231, 158, 87, 0.08);
          animation-duration: 10s;
          filter: none;
          transition: width 0.8s ease, height 0.8s ease, border-top-color 0.5s ease;
        }

        .hub-phase-cooldown .hub-accretion,
        .hub-phase-idle .hub-accretion {
          border-top-color: rgba(244, 63, 94, 0);
          border-right-color: transparent;
        }

        @keyframes orbit-idle {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .hub-shockwave {
          position: absolute;
          inset: 50%;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 1px solid rgba(244, 63, 94, 0);
          transform: translate(-50%, -50%) scale(0.9);
          pointer-events: none;
          z-index: 4;
          opacity: 0;
        }

        .hub-phase-eject .hub-shockwave {
          animation: gravity-release 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes gravity-release {
          0%   { transform: translate(-50%, -50%) scale(0.9);  border-color: rgba(244, 63, 94, 0.7); opacity: 1; }
          60%  { border-color: rgba(244, 63, 94, 0.15); }
          100% { transform: translate(-50%, -50%) scale(2.8);  border-color: rgba(244, 63, 94, 0);   opacity: 0; }
        }

        .hub-pulse {
          position: absolute;
          inset: 50%;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            rgba(244, 63, 94, 0.1) 0%,
            rgba(244, 63, 94, 0.03) 50%,
            transparent 70%
          );
          filter: blur(8px);
          animation: ambient-pulse 6s ease-in-out infinite;
          z-index: 1;
          pointer-events: none;
        }
        .pulse-2 { animation-delay: 2s; }
        .pulse-3 { animation-delay: 4s; }

        .hub-phase-pull .hub-pulse,
        .hub-phase-absorb .hub-pulse { opacity: 0.3; }
        .hub-phase-eject .hub-pulse { opacity: 1; animation-duration: 2s; }

        @keyframes ambient-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.4; }
          50%       { transform: translate(-50%, -50%) scale(1.2);  opacity: 0.9; }
        }

        .hub-core {
          position: relative;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 8;
          transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: all;
        }

        .hub-phase-pull .hub-core {
          transform: scale(1.04);
        }

        .hub-phase-absorb .hub-core {
          transform: scale(1.08);
          transition: transform 0.5s ease;
        }

        .hub-phase-eject .hub-core {
          transform: scale(0.98);
          transition: transform 0.5s ease;
        }

        .hub-phase-cooldown .hub-core,
        .hub-phase-idle .hub-core {
          transform: scale(1);
        }

        .hub-center-logo {
          width: 80px;
          height: 80px;
          transition: transform 1.5s ease, filter 1.5s ease, opacity 1.5s ease;
          object-fit: contain;
        }

        .hub-phase-absorb .hub-center-logo {
          opacity: 0.7;
          filter: brightness(1.4) drop-shadow(0 0 8px rgba(244, 63, 94, 0.5));
          transition: transform 0.5s ease, filter 0.5s ease, opacity 0.5s ease;
        }

        .hub-phase-eject .hub-center-logo {
          opacity: 1;
          filter: brightness(1.05);
          transition: transform 0.5s ease, filter 0.5s ease, opacity 0.3s ease;
        }

        .hub-node {
          --half-size: 35px;
          position: absolute;
          width: calc(var(--half-size) * 2);
          height: calc(var(--half-size) * 2);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          cursor: pointer;
          transition:
            left         2.0s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            right        2.0s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            top          2.0s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform    2.0s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            opacity      2.0s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hub-node.left {
          left: var(--start-x);
          top: var(--start-y);
          --offset-x: -50%;
        }

        .hub-node.right {
          right: var(--start-x);
          top: var(--start-y);
          --offset-x: 50%;
        }

        .hub-phase-idle .hub-node.left,
        .hub-phase-cooldown .hub-node.left {
          left: var(--start-x);
        }

        .hub-phase-idle .hub-node.right,
        .hub-phase-cooldown .hub-node.right {
          right: var(--start-x);
          left: auto;
        }

        .hub-phase-idle .hub-node,
        .hub-phase-cooldown .hub-node {
          top: var(--start-y);
          transform: translate(0, 0) scale(1);
          opacity: 1;
          transition:
            left         2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            right        2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            top          2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform    2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            opacity      2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hub-phase-pull .hub-node.left {
          left: calc(var(--start-x) + (50% - var(--start-x)) * 0.55);
        }

        .hub-phase-pull .hub-node.right {
          right: calc(var(--start-x) + (50% - var(--start-x)) * 0.55);
          left: auto;
        }

        .hub-phase-pull .hub-node {
          top: calc(var(--start-y) + (50% - var(--start-y)) * 0.55);
          transform: translate(calc(var(--offset-x) * 0.55), calc(-50% * 0.55)) scale(0.88);
          opacity: 0.75;
          transition:
            left         3.4s cubic-bezier(0.4, 0, 0.2, 1),
            right        3.4s cubic-bezier(0.4, 0, 0.2, 1),
            top          3.4s cubic-bezier(0.4, 0, 0.2, 1),
            transform    3.4s cubic-bezier(0.4, 0, 0.2, 1),
            opacity      3.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hub-phase-absorb .hub-node.left {
          left: 50%;
        }

        .hub-phase-absorb .hub-node.right {
          right: 50%;
          left: auto;
        }

        .hub-phase-absorb .hub-node {
          top: 50%;
          transform: translate(var(--offset-x), -50%) scale(0);
          opacity: 0;
          transition:
            left         0.6s cubic-bezier(0.55, 0, 1, 0.45),
            right        0.6s cubic-bezier(0.55, 0, 1, 0.45),
            top          0.6s cubic-bezier(0.55, 0, 1, 0.45),
            transform    0.6s cubic-bezier(0.55, 0, 1, 0.45),
            opacity      0.6s cubic-bezier(0.55, 0, 1, 0.45);
        }

        .hub-phase-eject .hub-node.left {
          left: var(--start-x);
        }

        .hub-phase-eject .hub-node.right {
          right: var(--start-x);
          left: auto;
        }

        .hub-phase-eject .hub-node {
          top: var(--start-y);
          transform: translate(0, 0) scale(1.04);
          opacity: 1;
          transition:
            left         1.2s cubic-bezier(0.34, 1.56, 0.64, 1),
            right        1.2s cubic-bezier(0.34, 1.56, 0.64, 1),
            top          1.2s cubic-bezier(0.34, 1.56, 0.64, 1),
            transform    1.2s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity      1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .left.l1  { --start-x: 21%; --start-y:  9%; }
        .left.l2  { --start-x: 13%; --start-y: 31%; }
        .left.l3  { --start-x: 24%; --start-y: 43%; }
        .left.l4  { --start-x: 11%; --start-y: 69%; }

        .right.r1 { --start-x: 21%; --start-y:  9%; }
        .right.r2 { --start-x: 13%; --start-y: 31%; }
        .right.r3 { --start-x: 24%; --start-y: 43%; }
        .right.r4 { --start-x: 11%; --start-y: 69%; }

        .hub-node:hover {
          transform: scale(1.1);
          z-index: 20;
        }

        .node-logo {
          width: 40px;
          height: 40px;
          object-fit: contain;
          transition: filter 0.3s ease, transform 0.3s ease;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.45));
        }

        .hub-node:hover .node-logo {
          transform: scale(1.08);
          filter: drop-shadow(0 0 10px rgba(244, 63, 94, 0.5)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5));
        }

        @media (max-width: 1200px) {
          .hub-visualization { max-width: 1000px; height: 450px; }
          .hub-center       { width: 130px; height: 130px; }
          .hub-core         { width: 108px; height: 108px; }
          .hub-center-logo  { width: 54px; height: 54px; }
          .hub-accretion    { width: 150px; height: 150px; }
          .hub-pulse        { width: 120px; height: 120px; }
          .hub-node         { --half-size: 32px; }
          .node-logo        { width: 36px; height: 36px; }
        }

        @media (max-width: 1024px) {
          .hub-visualization { height: 420px; }
          .hub-center       { width: 120px; height: 120px; }
          .hub-core         { width: 96px; height: 96px; }
          .hub-center-logo  { width: 46px; height: 46px; }
          .hub-accretion    { width: 135px; height: 135px; }
          .hub-pulse        { width: 110px; height: 110px; }
          .hub-node         { --half-size: 30px; }
          .node-logo        { width: 33px; height: 33px; }
          .left.l1  { --start-x: 16%; }
          .left.l2  { --start-x: 10%; }
          .left.l3  { --start-x: 19%; }
          .left.l4  { --start-x:  9%; }
          .right.r1 { --start-x: 16%; }
          .right.r2 { --start-x: 10%; }
          .right.r3 { --start-x: 19%; }
          .right.r4 { --start-x:  9%; }
        }

        @media (max-width: 768px) {
          .hub-visualization { height: 360px; }
          .hub-center       { width: 110px; height: 110px; }
          .hub-core         { width: 88px; height: 88px; }
          .hub-center-logo  { width: 42px; height: 42px; }
          .hub-accretion    { width: 120px; height: 120px; }
          .hub-pulse        { width: 100px; height: 100px; }
          .hub-node         { --half-size: 28px; }
          .node-logo        { width: 30px; height: 30px; }
          .left.l1  { --start-x: 12%; }
          .left.l2  { --start-x:  8%; }
          .left.l3  { --start-x: 14%; }
          .left.l4  { --start-x:  6%; }
          .right.r1 { --start-x: 12%; }
          .right.r2 { --start-x:  8%; }
          .right.r3 { --start-x: 14%; }
          .right.r4 { --start-x:  6%; }
        }

        @media (max-width: 640px) {
          .hub-visualization { height: 300px; }
          .hub-center       { width: 96px; height: 96px; }
          .hub-core         { width: 78px; height: 78px; }
          .hub-center-logo  { width: 36px; height: 36px; }
          .hub-node         { --half-size: 25px; }
          .node-logo        { width: 27px; height: 27px; }
        }

        @media (max-width: 480px) {
          .hub-visualization { height: 260px; }
          .hub-center       { width: 84px; height: 84px; }
          .hub-core         { width: 68px; height: 68px; }
          .hub-center-logo  { width: 30px; height: 30px; }
          .hub-accretion    { width: 95px; height: 95px; }
          .hub-pulse        { width: 80px; height: 80px; }
          .hub-node         { --half-size: 22px; }
          .node-logo        { width: 24px; height: 24px; }
          .left.l1  { --start-x: 8%; }
          .left.l2  { --start-x: 5%; }
          .left.l3  { --start-x: 9%; }
          .left.l4  { --start-x: 4%; }
          .right.r1 { --start-x: 8%; }
          .right.r2 { --start-x: 5%; }
          .right.r3 { --start-x: 9%; }
          .right.r4 { --start-x: 4%; }
        }

        @media (max-width: 375px) {
          .hub-visualization { height: 230px; }
          .hub-core         { width: 60px; height: 60px; }
          .hub-center-logo  { width: 26px; height: 26px; }
          .hub-node         { --half-size: 20px; }
          .node-logo        { width: 22px; height: 22px; }
        }
      `}} />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        {/* HEADER */}
        <div className="hub-header mb-16 max-w-3xl mx-auto text-center">
          <span className="mb-6 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
            PRODUCT ECOSYSTEM
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-6">
            A unified suite of proprietary products
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Devopstrio designs and builds industry-leading products to streamline cloud, security, compliance, operations, and workforce management.
          </p>
        </div>

        {/* VISUALIZATION */}
        <div className={`hub-visualization hub-phase-${phase}`}>
          {/* SVG CONNECTION LINES */}
          <svg
            className="hub-svg"
            viewBox="0 0 1600 600"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* LEFT */}
            <path d="M150 -100 C 450 220, 600 240, 800 300" className="hub-line" />
            <path d="M150 10 C 450 240, 600 255, 800 300" className="hub-line" />
            <path d="M150 100 C 450 260, 600 270, 800 300" className="hub-line" />
            <path d="M150 200 C 450 280, 600 285, 800 300" className="hub-line" />
            <path d="M150 300 C 450 300, 600 300, 800 300" className="hub-line" />
            <path d="M150 400 C 450 320, 600 315, 800 300" className="hub-line" />
            <path d="M150 500 C 450 340, 600 330, 800 300" className="hub-line" />
            <path d="M220 550 C 450 360, 600 350, 800 300" className="hub-line" />
            {/* RIGHT */}
            <path d="M1450 -100 C 1150 220, 1000 240, 800 300" className="hub-line" />
            <path d="M1450 10 C 1150 240, 1000 255, 800 300" className="hub-line" />
            <path d="M1450 100 C 1150 260, 1000 270, 800 300" className="hub-line" />
            <path d="M1450 200 C 1150 280, 1000 285, 800 300" className="hub-line" />
            <path d="M1450 300 C 1150 300, 1000 300, 800 300" className="hub-line" />
            <path d="M1450 400 C 1150 320, 1000 315, 800 300" className="hub-line" />
            <path d="M1450 500 C 1150 340, 1000 330, 800 300" className="hub-line" />
            <path d="M1365 550 C 1150 360, 1000 350, 800 300" className="hub-line" />
          </svg>

          {/* CENTER HUB */}
          <div className="hub-center">
            {/* Orbital ring (single, slow, minimal) */}
            <span className="hub-accretion" />
            {/* Gravity release ring (fires on eject) */}
            <span className="hub-shockwave" />
            {/* Ambient depth pulses */}
            <span className="hub-pulse pulse-1" />
            <span className="hub-pulse pulse-2" />
            <span className="hub-pulse pulse-3" />

            <div className="hub-core">
              <img src="/webp/assets/Home-page/our-products/Devopsrio_Main_logo.webp"
                alt="Devopstrio"
                className="hub-center-logo"
              loading="lazy" />
            </div>
          </div>

          {/* NODES */}
          {nodes.map((n) => (
            <div key={n.id} className={`hub-node ${n.cls}`}>
              <img src={n.logo} alt={n.alt} className="node-logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
