"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on devices that support hover (non-mobile/non-tablet)
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    if (!supportsHover) {
      return;
    }

    // Add active class to HTML when initialized
    document.documentElement.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // Set initial positions off-screen
    gsap.set(dot, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    gsap.set(ring, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    // Use gsap.quickTo for high-performance rendering (60fps/120fps tracking)
    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });

    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.25, ease: "power2.out" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.25, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Expand hover effects on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("[role='button']") ||
        target.closest(".cursor-pointer") ||
        target.closest("[data-cursor='pointer']");

      if (isClickable) {
        gsap.to(ring, {
          scale: 1.2,
          backgroundColor: "rgba(255, 45, 85, 0.25)",
          duration: 0.25,
          ease: "power2.out"
        });
        gsap.to(dot, {
          scale: 0.6,
          backgroundColor: "#ffffff",
          duration: 0.25,
          ease: "power2.out"
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("[role='button']") ||
        target.closest(".cursor-pointer") ||
        target.closest("[data-cursor='pointer']");

      if (isClickable) {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: "rgba(255, 45, 85, 0.15)",
          duration: 0.25,
          ease: "power2.out"
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: "#ff2d55",
          duration: 0.25,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Hide standard cursor ONLY when custom cursor is active */
        .custom-cursor-active,
        .custom-cursor-active a,
        .custom-cursor-active button,
        .custom-cursor-active select,
        .custom-cursor-active input,
        .custom-cursor-active textarea,
        .custom-cursor-active [role="button"],
        .custom-cursor-active .cursor-pointer {
          cursor: none !important;
        }

        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 5px;
          height: 5px;
          background: #ff2d55;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }

        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 26px;
          height: 26px;
          background: rgba(255, 45, 85, 0.15);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
        }
      `}</style>

      {/* Small Center Dot */}
      <div ref={dotRef} className="cursor-dot" />

      {/* Large Outer Trail Ring */}
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
