"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Home, ServerCrash } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const BG_SVG = `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22ht%74p%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2284px%22%20height%3D%2254px%22%20viewBox%3D%22-10%20-10%2064%2034%22%3E%3Crect%20x%3D%2210%22%20y%3D%222%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23fff%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%222%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23fff%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%222%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23fff%22%2F%3E%3Crect%20x%3D%2226%22%20y%3D%222%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23fff%22%2F%3E%3Crect%20x%3D%2228%22%20y%3D%222%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23fff%22%2F%3E%3Crect%20x%3D%2246%22%20y%3D%222%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23fff%22%2F%3E%3Crect%20x%3D%2248%22%20y%3D%222%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E")`;

export default function NotFound() {
  const [glitchOffset, setGlitchOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchOffset(Math.random() * 6 - 3);
      setTimeout(() => setGlitchOffset(0), 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Animated Pattern Background */}
      <style>{`
        @keyframes move404 {
          from { background-position: 0 0, 0; }
          to { background-position: calc(84px * 4) calc(54px * 2), 0; }
        }
        @keyframes move-light {
          0%   { background-position: 10%; }
          50%  { background-position: 90%; }
          100% { background-position: 90%; }
        }
        .not-found-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image: ${BG_SVG},
            conic-gradient(#111 0.25turn, #333 0.25turn 0.5turn, #111 0.5turn 0.75turn, #111 0.75turn);
          background-color: #111;
          background-size: auto, 4px 4px;
          background-repeat: repeat;
          animation: move404 4s linear infinite;
        }
        .not-found-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
            -62.5deg,
            lime, green, green, green, green,
            lime, green, green, green, green, lime
          );
          mix-blend-mode: multiply;
          background-size: 400%;
          background-position: 10%;
          animation: move-light 5s infinite;
        }
      `}</style>

      <div className="not-found-bg" />

      {/* Overlay to darken and ensure text readability */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Animated 404 Display */}
        <div className="mb-8 relative inline-block">
          <div className="absolute -inset-10 bg-rose-500/10 blur-2xl rounded-full" />
          <h1
            className="text-[120px] md:text-[200px] font-black tracking-tighter relative z-10"
            style={{
              transform: `translate(${glitchOffset}px, ${glitchOffset}px)`,
              textShadow: "0 0 40px rgba(239,68,68,0.4)",
              background: "linear-gradient(180deg, #FFFFFF 0%, #3F3F46 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </h1>
          <div className="absolute top-1/2 left-0 w-full h-1 bg-rose-500/20 -translate-y-1/2 mix-blend-overlay" />
          <div className="absolute top-1/3 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 mix-blend-overlay" />
        </div>

        <Reveal delay={0.2}>
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <ServerCrash className="w-4 h-4 animate-pulse" />
            No Signal!
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Endpoint Disconnected
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed font-semibold mb-10">
            The requested architecture layout or platform endpoint could not be located on our servers. The page may have been deprecated, moved, or simply doesn't exist.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-black font-semibold text-sm tracking-wide rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Return to Core Framework
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-white font-semibold text-sm tracking-wide rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
