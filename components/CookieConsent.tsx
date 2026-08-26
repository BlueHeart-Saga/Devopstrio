"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Settings, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);

  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("devopstrio_cookie_consent");
    if (!consent) {
      // Delay slightly for smooth initial page load
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("devopstrio_cookie_consent", JSON.stringify(fullConsent));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const minConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("devopstrio_cookie_consent", JSON.stringify(minConsent));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const savedConsent = {
      ...preferences,
      essential: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("devopstrio_cookie_consent", JSON.stringify(savedConsent));
    setShowBanner(false);
  };

  const togglePreference = (key: "analytics" | "marketing") => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          layout="position"
          className="fixed bottom-6 right-6 z-[999] w-[calc(100vw-3rem)] sm:w-[460px] bg-white border border-zinc-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden font-sans"
        >
          <div className="p-6 sm:p-7 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-rose-50 text-rose-500 border border-rose-100 rounded-xl shrink-0">
                  <Cookie className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-zinc-900 font-bold tracking-tight text-base sm:text-lg">
                    We value your privacy
                  </h3>
                  <p className="text-xs text-zinc-500 font-semibold tracking-wider uppercase">Consent Settings</p>
                </div>
              </div>
              <button
                onClick={handleRejectAll}
                className="p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            {!isCustomizing ? (
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.{" "}
                <Link
                  href="/privacy-policy"
                  className="text-rose-600 hover:text-rose-700 underline font-semibold transition-colors inline-block"
                >
                  Cookie Policy
                </Link>
              </p>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
                className="space-y-3.5 pt-1"
              >
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Customize your preferences below. Essential cookies are required for the website to function.
                </p>

                {/* Preference Toggles */}
                <div className="space-y-2.5">
                  {/* Essential */}
                  <div className="flex items-start justify-between p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl">
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-zinc-800">Essential Cookies</span>
                        <span className="text-[10px] px-2 py-0.5 bg-zinc-200 text-zinc-700 rounded-full font-semibold">Required</span>
                      </div>
                      <p className="text-xs text-zinc-500 leading-normal">Necessary for security, system integrity, and basic site operations.</p>
                    </div>
                    <div className="flex items-center pt-1">
                      <div className="w-7 h-7 bg-rose-50 text-rose-600 border border-rose-100 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
                    <div className="space-y-1 pr-4">
                      <span className="text-sm font-bold text-zinc-800">Analytics &amp; Performance</span>
                      <p className="text-xs text-zinc-500 leading-normal">Helps us measure visitor traffic, page views, and user flows to refine experience.</p>
                    </div>
                    <div className="flex items-center pt-1">
                      <button
                        onClick={() => togglePreference("analytics")}
                        className={`w-10 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none flex items-center cursor-pointer ${
                          preferences.analytics ? "bg-rose-500 justify-end" : "bg-zinc-300 justify-start"
                        }`}
                      >
                        <motion.div
                          layout
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className="w-5 h-5 bg-white rounded-full shadow-md"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
                    <div className="space-y-1 pr-4">
                      <span className="text-sm font-bold text-zinc-800">Marketing &amp; Targeting</span>
                      <p className="text-xs text-zinc-500 leading-normal">Used to deliver advertisements relevant to you and track conversion campaigns.</p>
                    </div>
                    <div className="flex items-center pt-1">
                      <button
                        onClick={() => togglePreference("marketing")}
                        className={`w-10 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none flex items-center cursor-pointer ${
                          preferences.marketing ? "bg-rose-500 justify-end" : "bg-zinc-300 justify-start"
                        }`}
                      >
                        <motion.div
                          layout
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className="w-5 h-5 bg-white rounded-full shadow-md"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-2.5 pt-2">
              {!isCustomizing ? (
                <>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={handleRejectAll}
                      className="px-5 py-3 text-zinc-700 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-[0.98] cursor-pointer"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-5 py-3 bg-zinc-900 text-white hover:bg-zinc-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
                    >
                      Accept All
                    </button>
                  </div>
                  <button
                    onClick={() => setIsCustomizing(true)}
                    className="w-full py-2.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 font-bold text-xs sm:text-sm border border-dashed border-zinc-300 hover:border-zinc-400 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Settings className="w-4 h-4" />
                    Customize Preferences
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setIsCustomizing(false)}
                    className="px-5 py-3 text-zinc-700 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-[0.98] cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-5 py-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
                  >
                    Save &amp; Accept
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
