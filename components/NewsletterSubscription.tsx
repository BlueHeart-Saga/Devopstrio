"use client";

import React, { useState } from "react";
import CategoryPopup from "@/components/CategoryPopup";

export function NewsletterSubscription({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsPopupOpen(true);
  };

  return (
    <div className={`max-w-7xl mx-auto w-full bg-[#050505] rounded-[2rem] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-stretch justify-between gap-16 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative z-20 border border-white/5 overflow-hidden ${className}`}>

      {/* Geometric Background Graphic on Right Side */}
      <div className="absolute top-0 right-0 w-[150%] lg:w-[65%] h-full pointer-events-none z-0 overflow-hidden">
        {/* Base dark magenta */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8c2354] to-[#6a153b]" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, -10% 100%)' }} />
        {/* Top right brighter pink */}
        <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-gradient-to-bl from-[#b82c66] to-[#991d50]" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 50%)' }} />
        {/* Bottom right orange/gold */}
        <div className="absolute bottom-0 right-0 w-[90%] h-[65%] bg-gradient-to-tl from-[#a66a42] to-[#8a522f]" style={{ clipPath: 'polygon(100% 40%, 100% 100%, 10% 100%)' }} />
        {/* Dark purple intersecting stripe */}
        <div className="absolute inset-0 w-full h-full bg-[#3a0f2b] opacity-80 mix-blend-multiply" style={{ clipPath: 'polygon(20% 0, 40% 0, 15% 100%, -5% 100%)' }} />
      </div>

      {/* Left Side: Huge Typography */}
      <div className="flex-1 max-w-2xl flex flex-col justify-center relative z-10">
        <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1] text-white">
          Engineering mastery<br />
          is your<br />
          edge. <span className="text-zinc-600">Devopstrio<br />
            builds it for you.</span>
        </h2>
      </div>

      {/* Right Side: Form and Text */}
      <div className="w-full lg:w-[420px] flex flex-col justify-center relative z-10 mt-8 lg:mt-0">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
          We turn engineering<br />
          curiosity<br />
          into careers.
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full mb-10">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-grow bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-5 py-3.5 text-sm font-medium text-white focus:outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-white/60 shadow-inner"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[13px] font-bold tracking-wider bg-white text-black hover:bg-zinc-200 transition-all duration-300 whitespace-nowrap shrink-0"
          >
            Apply Now &rarr;
          </button>
        </form>

        <div className="flex items-end justify-between gap-6 mt-auto">
          <p className="text-white/80 text-[10px] leading-relaxed max-w-[240px] font-medium">
            When the right perspective meets the right enterprise production, better engineers happen. Devopstrio connects your potential and delivers.
          </p>

          <div className="flex flex-col items-center gap-2 shrink-0">
            <div
              className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setIsPopupOpen(true)}
              title="Open Preferences"
            >
              {/* Mail Icon */}
              <svg className="w-8 h-8 text-[#8c2354]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <span className="text-[7px] font-bold tracking-widest text-white/90 uppercase">Portal Apply</span>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <CategoryPopup
          email={email}
          closePopup={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
}
