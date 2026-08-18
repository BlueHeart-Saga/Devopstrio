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
    <div className={`max-w-7xl mx-auto w-full bg-[#050505] rounded-[2rem] p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row items-stretch justify-between gap-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative z-20 border border-white/5 overflow-hidden ${className}`}>

      {/* Geometric Background Graphic on Right Side */}
      <div className="absolute top-0 right-0 w-[150%] lg:w-[52%] h-full pointer-events-none z-0 overflow-hidden">
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
      <div className="flex-1 max-w-full lg:max-w-[45%] flex flex-col justify-center relative z-10">
        <h2 className="text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-bold tracking-tight leading-[1.05] text-white">
          Where tech leaders<br />
          gather.<br />
          <span className="text-zinc-550">Insights & live<br />
            engineering summits.</span>
        </h2>
      </div>

      {/* Right Side: Form and Text */}
      <div className="w-full lg:w-[460px] flex flex-col justify-end relative z-10 mt-6 lg:mt-auto">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
          Subscribe to get<br />
          exclusive invites<br />
          to all global events.
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
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
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[13px] font-bold tracking-wider bg-white text-black hover:bg-zinc-200 transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Subscribe Now &rarr;
          </button>
        </form>
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
