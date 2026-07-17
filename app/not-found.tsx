"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Home, ServerCrash, Terminal, Layers } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function NotFound() {
  const [glitchOffset, setGlitchOffset] = useState(0);

  // Simple glitch effect simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchOffset(Math.random() * 6 - 3);
      setTimeout(() => setGlitchOffset(0), 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05),transparent_60%)] pointer-events-none blur-2xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Animated 404 Display */}
        <div className="mb-8 relative inline-block">
          <div className="absolute -inset-10 bg-rose-500/10 blur-2xl rounded-full" />
          
          <h1 
            className="text-[120px] md:text-[200px] font-black tracking-tighter relative z-10"
            style={{ 
              transform: `translate(${glitchOffset}px, ${glitchOffset}px)`,
              textShadow: '0 0 40px rgba(239,68,68,0.4)',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #3F3F46 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            404
          </h1>
          
          {/* Glitch artifacts */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-rose-500/20 -translate-y-1/2 mix-blend-overlay" />
          <div className="absolute top-1/3 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 mix-blend-overlay" />
        </div>

        <Reveal delay={0.2}>
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <ServerCrash className="w-4 h-4 animate-pulse" />
            No Signal!
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6">
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
