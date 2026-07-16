"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X, Settings, ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        setShowBanner(true);
      } else {
        const savedPrefs = localStorage.getItem("cookiePreferences");
        if (savedPrefs) {
          setPreferences(JSON.parse(savedPrefs));
        }
      }
    } catch (e) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (consentValue: "accepted" | "declined" | "custom", prefs: typeof preferences) => {
    try {
      localStorage.setItem("cookieConsent", consentValue);
      localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    } catch (e) { }
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    const allPrefs = { essential: true, analytics: true, marketing: true };
    setPreferences(allPrefs);
    saveConsent("accepted", allPrefs);
  };

  const handleRejectAll = () => {
    const nonePrefs = { essential: true, analytics: false, marketing: false };
    setPreferences(nonePrefs);
    saveConsent("declined", nonePrefs);
  };

  const handleSavePreferences = () => {
    const isAll = preferences.analytics && preferences.marketing;
    const isNone = !preferences.analytics && !preferences.marketing;
    const status = isAll ? "accepted" : isNone ? "declined" : "custom";
    saveConsent(status, preferences);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "essential") return;
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
          className="fixed bottom-6 right-6 z-[999] w-[calc(100vw-3rem)] sm:w-[420px] bg-white border border-zinc-200/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden"
        >
          <div className="p-6 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-50 text-rose-500 border border-rose-100 rounded-xl">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-zinc-900 font-semibold tracking-tight text-sm sm:text-base">
                    We value your privacy
                  </h3>
                  <p className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase">Consent Settings</p>
                </div>
              </div>
              <button
                onClick={handleRejectAll}
                className="p-1.5 text-zinc-400 hover:text-zinc-650 hover:bg-zinc-50 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            {!isCustomizing ? (
              <p className="text-zinc-600 text-xs leading-relaxed font-normal">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.{" "}
                <Link
                  href="/privacy-policy"
                  className="text-rose-500 hover:text-rose-600 underline font-semibold transition-colors inline-block"
                >
                  Cookie Policy
                </Link>
              </p>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
                className="space-y-3 pt-1"
              >
                <p className="text-zinc-500 text-[11px] leading-relaxed">
                  Customize your preferences below. Essential cookies are required for the website to function.
                </p>

                {/* Preference Toggles */}
                <div className="space-y-2">
                  {/* Essential */}
                  <div className="flex items-start justify-between p-3 bg-zinc-50 border border-zinc-150 rounded-xl">
                    <div className="space-y-0.5 pr-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-zinc-800">Essential Cookies</span>
                        <span className="text-[9px] px-1.5 py-0.5 bg-zinc-150 text-zinc-500 rounded-full font-medium">Required</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 leading-snug">Necessary for security, system integrity, and basic site operations.</p>
                    </div>
                    <div className="flex items-center pt-1">
                      <div className="w-6 h-6 bg-rose-50 text-rose-600 border border-rose-100 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between p-3 bg-zinc-50 border border-zinc-150 rounded-xl hover:border-zinc-200 transition-colors">
                    <div className="space-y-0.5 pr-4">
                      <span className="text-xs font-semibold text-zinc-800">Analytics & Performance</span>
                      <p className="text-[10px] text-zinc-500 leading-snug">Helps us measure visitor traffic, page views, and user flows to refine experience.</p>
                    </div>
                    <div className="flex items-center pt-1">
                      <button
                        onClick={() => togglePreference("analytics")}
                        className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none flex items-center ${preferences.analytics ? "bg-rose-500 justify-end" : "bg-zinc-200 justify-start"
                          }`}
                      >
                        <motion.div
                          layout
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className="w-4 h-4 bg-white rounded-full shadow-md"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between p-3 bg-zinc-50 border border-zinc-150 rounded-xl hover:border-zinc-200 transition-colors">
                    <div className="space-y-0.5 pr-4">
                      <span className="text-xs font-semibold text-zinc-800">Marketing & Targeting</span>
                      <p className="text-[10px] text-zinc-500 leading-snug">Used to deliver advertisements relevant to you and track conversion campaigns.</p>
                    </div>
                    <div className="flex items-center pt-1">
                      <button
                        onClick={() => togglePreference("marketing")}
                        className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none flex items-center ${preferences.marketing ? "bg-rose-500 justify-end" : "bg-zinc-200 justify-start"
                          }`}
                      >
                        <motion.div
                          layout
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className="w-4 h-4 bg-white rounded-full shadow-md"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-2 pt-2">
              {!isCustomizing ? (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleRejectAll}
                      className="px-4 py-2 text-zinc-600 hover:text-zinc-800 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 hover:border-zinc-300/85 font-semibold text-xs rounded-xl transition-all active:scale-[0.98]"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-950 font-semibold text-xs rounded-xl transition-all shadow-[0_4px_12px_rgba(0,0,0,0.08)] active:scale-[0.98]"
                    >
                      Accept All
                    </button>
                  </div>
                  <button
                    onClick={() => setIsCustomizing(true)}
                    className="w-full py-2 text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50/60 font-semibold text-xs border border-dashed border-zinc-200 hover:border-zinc-300 rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    Customize Preferences
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setIsCustomizing(false)}
                    className="px-4 py-2 text-zinc-650 hover:text-zinc-800 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 hover:border-zinc-300/85 font-semibold text-xs rounded-xl transition-all active:scale-[0.98]"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-semibold text-xs rounded-xl transition-all shadow-[0_4px_12px_rgba(244,63,94,0.15)] active:scale-[0.98]"
                  >
                    Save & Accept
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
