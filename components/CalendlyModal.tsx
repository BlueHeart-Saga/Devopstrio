"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Sparkles } from "lucide-react";

// You can customize the Calendly scheduling link here or via NEXT_PUBLIC_CALENDLY_URL environment variable
const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/schedule-devopstrio-solutions/30min";

export function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#schedule-call") {
        setIsOpen(true);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    // Check hash on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("open-calendly-modal", handleCustomOpen);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("open-calendly-modal", handleCustomOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (window.location.hash === "#schedule-call") {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  };

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      document.body.style.overflow = "hidden";
      // Ensure loading state never hangs permanently
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Load Calendly widget script once for dynamic height adjustments
  useEffect(() => {
    if (!isOpen) return;
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isOpen]);

  const embedSrc = `${CALENDLY_URL}?embed_domain=${
    typeof window !== "undefined" ? window.location.hostname : ""
  }&embed_type=Inline&hide_gdpr_banner=1`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl h-[700px] max-h-[94vh] bg-zinc-950/95 backdrop-blur-2xl rounded-2xl md:rounded-[2rem] shadow-[0_30px_90px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.08)] flex flex-col overflow-hidden border border-white/10 ring-1 ring-white/5"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-zinc-900 px-6 py-4 flex justify-between items-center relative overflow-hidden shrink-0 border-b border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                  <Calendar size={20} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Schedule a Consultation
                    </h3>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/15 text-white/90">
                      <Sparkles size={11} className="text-rose-200" /> 30 Min Session
                    </span>
                  </div>
                  <p className="text-xs text-rose-100/90 font-medium mt-0.5">
                    Connect directly with Devopstrio engineering & solution experts.
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                aria-label="Close scheduling modal"
                className="relative z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white/90 hover:text-white backdrop-blur-md transition-all border border-white/15 cursor-pointer shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Calendly Widget Body */}
            <div className="flex-1 w-full bg-white relative overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-zinc-950 text-white gap-3 transition-opacity duration-300">
                  <div className="w-10 h-10 border-3 border-rose-500 border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm font-medium text-zinc-400">
                    Loading available calendar slots...
                  </p>
                </div>
              )}

              {/* Calendly Iframe Embed */}
              <iframe
                src={embedSrc}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a consultation with Devopstrio"
                className="w-full h-full border-0"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
