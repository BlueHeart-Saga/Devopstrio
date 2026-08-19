"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCheck } from "lucide-react";

const defaultMessages = [
  "We are innovative solutions.",
  "We conduct AI-centric digital transformation.",
  "We engineer secure, cloud-native solutions.",
  "We modernize mission-critical core systems.",
  "We deliver security by design across industries.",
  "We partner with global tech leaders to build resilient platforms.",
];

interface TableToTextVisualProps {
  messages?: string[];
  currentText?: string;
  intervalMs?: number;
  className?: string;
}

export function TableToTextVisual({
  messages = defaultMessages,
  currentText,
  intervalMs = 3200,
  className = "",
}: TableToTextVisualProps) {
  const [index, setIndex] = useState(0);

  // Auto-cycle through messages every intervalMs
  useEffect(() => {
    if (currentText) return; // If manually controlled, don't auto cycle

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [messages, intervalMs, currentText]);

  const activeMessage = currentText || messages[index];

  return (
    <div className={`relative w-full max-w-5xl mx-auto flex items-center justify-center select-none ${className}`}>
      {/* Simple, Large, Borderless Table on Black Theme */}
      <div className="relative w-full max-w-5xl mx-auto">
        
        {/* Table Image */}
        <img
          src="/assets/About-page/overview/tabletotext1.png"
          alt="Devopstrio Solutions Collaboration Table"
          className="w-full h-auto object-contain block select-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.8)]"
          loading="lazy"
        />

        {/* Middle of Table Text Overlay (Between the two laptops) */}
        <div className="absolute top-[14%] bottom-[14%] left-[27%] right-[27%] flex flex-col items-center justify-center pointer-events-none px-2 sm:px-4 md:px-6">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMessage}
              initial={{ opacity: 0, scale: 0.95, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full flex flex-col items-center justify-center text-center my-auto"
            >
              <p className="text-zinc-950 font-semibold text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl leading-snug sm:leading-tight font-sans tracking-tight drop-shadow-sm">
                {activeMessage}
              </p>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Chat-style timestamp with WhatsApp double checkmark (positioned top & right) */}
        {/* <div className="absolute bottom-[18%] sm:bottom-[19%] md:bottom-[20%] right-[23%] sm:right-[24%] md:right-[24.5%] flex items-center gap-1 text-[9px] sm:text-[11px] md:text-xs font-bold text-emerald-950 font-mono select-none pointer-events-none">
          <span>10:15 AM</span>
          <CheckCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-900" strokeWidth={2.5} />
        </div> */}

      </div>
    </div>
  );
}
