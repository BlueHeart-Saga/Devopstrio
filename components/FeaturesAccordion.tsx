"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

export interface FeatureData {
  id: string;
  title: string;
  description: React.ReactNode;
  tagline: string;
  desc: string;
  featuresList: string[];
}

interface FeaturesAccordionProps {
  features: FeatureData[];
}

export function FeaturesAccordion({ features }: FeaturesAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(features.length / ITEMS_PER_PAGE);

  // Auto-change every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % features.length;
        if (Math.floor(next / ITEMS_PER_PAGE) !== currentPage) {
          setCurrentPage(Math.floor(next / ITEMS_PER_PAGE));
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [features.length, currentPage]);

  const visibleFeatures = features.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start min-h-[600px]">
      {/* Left: Accordion List (Paginated) */}
      <div className="flex flex-col relative">
        <div className="border-t border-zinc-900 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {visibleFeatures.map((feature, localIdx) => {
                const actualIdx = currentPage * ITEMS_PER_PAGE + localIdx;
                const isActive = activeIndex === actualIdx;
                const num = String(actualIdx + 1).padStart(2, "0");

                return (
                  <div
                    key={feature.id}
                    className={`border-b border-zinc-900 py-6 cursor-pointer transition-colors ${
                      isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                    onClick={() => {
                      setActiveIndex(actualIdx);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <span className="text-[10px] font-mono tracking-widest">{num}</span>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">{feature.title}</h3>
                      </div>
                      <div>
                        {isActive ? (
                          <ChevronUp className="w-5 h-5 text-rose-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-zinc-700" />
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-11 pr-4 pt-4 pb-2 text-zinc-400 text-sm md:text-base leading-relaxed">
                            {feature.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex items-center justify-start pl-11 gap-3 mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentPage(idx);
                setActiveIndex(idx * ITEMS_PER_PAGE);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === idx ? "w-6 bg-rose-500" : "bg-zinc-800 hover:bg-zinc-600"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right: Sticky Premium Features Card */}
      <div className="sticky top-32 w-full bg-[#111111] border border-zinc-800/80 rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.15),transparent_70%)] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mb-8 shadow-inner">
              <span className="text-white font-mono font-bold text-lg">{features[activeIndex].title.charAt(0)}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
              {features[activeIndex].tagline}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-md">
              {features[activeIndex].desc}
            </p>

            <div className="flex flex-col gap-3">
              {features[activeIndex].featuresList.map((feat, i) => (
                <div key={i} className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/60 p-4 rounded-xl hover:bg-zinc-900 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-semibold text-zinc-200">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
