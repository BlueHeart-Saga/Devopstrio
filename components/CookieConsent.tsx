"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        setShowBanner(true);
      }
    } catch (e) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookieConsent", "accepted");
    } catch (e) {}
    setShowBanner(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("cookieConsent", "declined");
    } catch (e) {}
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 lg:left-12 lg:right-12 z-[99] flex flex-col md:flex-row items-center justify-between gap-4 p-5 md:py-4 md:px-6 bg-[#0c0c0e]/95 backdrop-blur-md border border-zinc-800/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-7xl mx-auto"
        >
          {/* Left / Text Section */}
          <div className="text-zinc-200 text-xs sm:text-sm font-medium leading-relaxed text-center md:text-left">
            We use cookies to improve your experience on our site. By using our site you consent to cookies.{" "}
            <Link 
              href="/privacy-policy" 
              className="text-rose-500 hover:text-rose-400 underline font-semibold transition-colors ml-1"
            >
              Learn more
            </Link>
          </div>

          {/* Right / Buttons Section */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center">
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 bg-white text-zinc-950 font-bold text-xs sm:text-sm rounded-xl hover:bg-zinc-100 transition-colors shadow-md hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              Allow Cookies
            </button>
            <button
              onClick={handleDecline}
              className="px-6 py-2.5 bg-transparent text-white border border-zinc-700/85 hover:border-zinc-650 hover:bg-zinc-900/40 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
