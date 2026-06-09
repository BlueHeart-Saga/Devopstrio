"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, MapPin, Briefcase, CalendarDays, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Poster = {
  id: number;
  role: string;
  location: string;
  type: string;
  status: string;
  req: string;
  accent: string;
  date: string;
  image?: string;
};

export function HiringSection() {
  const [hiringPosters, setHiringPosters] = useState<Poster[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Disable scroll when modal is active
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
    if (showModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  useEffect(() => {
    // Fetch dynamic posters from the API
    fetch("/api/hiring-posters")
      .then(res => res.json())
      .then(data => setHiringPosters(data))
      .catch(err => console.error("Failed to load posters", err));
  }, []);

  useEffect(() => {
    if (hiringPosters.length === 0) return;
    if (isHovered || showModal) return; // Pause auto-slide when interacting or viewing the image

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hiringPosters.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [hiringPosters.length, isHovered, showModal]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % hiringPosters.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + hiringPosters.length) % hiringPosters.length);
  };

  const poster = hiringPosters[currentIndex];

  if (!poster) return null; // Avoid rendering if no posters are available yet

  const isActive = poster.status === "active";

  return (
    <section className="w-full py-20 md:py-32 bg-[#030303] text-white  relative overflow-hidden">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">

        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">

          {/* Left Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                CAREERS
              </span>
            </div>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-8">
              Join our team of <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">technical creators</span>.
            </h2>
            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-bold max-w-md mb-8">
              We look for senior architects, database engineers, SRE specialists, and ML engineers who value precision, clean code, and zero organizational friction.
            </p>

            <a
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.25)] hover:-translate-y-0.5"
              href="/contact"
            >
              Explore Open Roles <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Right Block: Dynamic Hiring Poster */}
          <div
            className="relative h-[440px] w-full flex items-center justify-center perspective-[1000px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={poster.id}
                initial={{ opacity: 0, rotateY: 15, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1, x: 0 }}
                exit={{ opacity: 0, rotateY: -15, scale: 0.95, x: -20 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className={`absolute w-full max-w-sm h-[400px] rounded-xl border flex flex-col shadow-2xl overflow-hidden ${
                  poster.image ? "p-4 bg-zinc-950 border-zinc-800/80" : "p-8 bg-[#0a0a0a]"
                } ${
                  isActive
                    ? "border-rose-900/40 shadow-[0_0_50px_rgba(225,29,72,0.15)]"
                    : "border-zinc-800 grayscale opacity-80"
                }`}
              >
                {poster.image ? (
                  <>
                    <div 
                      onClick={() => setShowModal(true)}
                      className="flex-1 w-full rounded-lg overflow-hidden relative bg-zinc-900 cursor-zoom-in group"
                    >
                      <img
                        src={poster.image}
                        alt={poster.role}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Hover overlay hint */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <span className="bg-black/70 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white border border-white/10 shadow-lg">
                          Click to Expand
                        </span>
                      </div>
                    </div>
                    <div className="pt-3 mt-auto">
                      <button className={`w-full py-3.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 ${isActive
                          ? "bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.3)] hover:-translate-y-0.5"
                          : "bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800"
                        }`}>
                        {isActive ? "Apply Now" : "Position Filled"}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />

                    {/* Corner Accent Glow */}
                    {isActive && (
                      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${poster.accent} opacity-[0.15] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2`} />
                    )}

                    {/* Header */}
                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono tracking-widest text-zinc-500">
                          {poster.req}
                        </span>
                        <span className={`text-[11px] font-bold tracking-[0.25em] uppercase ${isActive ? "text-rose-500" : "text-zinc-600"}`}>
                          {isActive ? "We're Hiring" : "Closed"}
                        </span>
                      </div>
                      <div className={`px-2 py-1 text-[10px] font-mono font-bold uppercase rounded border ${isActive
                          ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                          : "bg-zinc-900 text-zinc-500 border-zinc-800"
                        }`}>
                        {poster.status}
                      </div>
                    </div>

                    {/* Role Info */}
                    <div className="flex-1 relative z-10">
                      <h3 className={`text-3xl font-black uppercase tracking-tight leading-[1.1] mb-8 ${isActive ? "text-white" : "text-zinc-500"
                        }`}>
                        {poster.role}
                      </h3>

                      <div className="flex flex-col gap-3.5">
                        <div className={`flex items-center gap-4 text-sm font-bold ${isActive ? "text-zinc-300" : "text-zinc-600"}`}>
                          <MapPin size={18} strokeWidth={2.5} className={isActive ? "text-rose-500" : "text-zinc-700"} />
                          {poster.location}
                        </div>
                        <div className={`flex items-center gap-4 text-sm font-bold ${isActive ? "text-zinc-300" : "text-zinc-600"}`}>
                          <Briefcase size={18} strokeWidth={2.5} className={isActive ? "text-rose-500" : "text-zinc-700"} />
                          {poster.type}
                        </div>
                        <div className={`flex items-center gap-4 text-sm font-bold ${isActive ? "text-zinc-300" : "text-zinc-600"}`}>
                          <CalendarDays size={18} strokeWidth={2.5} className={isActive ? "text-rose-500" : "text-zinc-700"} />
                          {poster.date}
                        </div>
                      </div>
                    </div>

                    {/* Footer/Action */}
                    <div className="pt-6 mt-auto border-t border-zinc-800/50 relative z-10">
                      <button className={`w-full py-3.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 ${isActive
                          ? "bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.3)] hover:-translate-y-0.5"
                          : "bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800"
                        }`}>
                        {isActive ? "Apply Now" : "Position Filled"}
                      </button>
                    </div>

                    {/* Expired Stamp overlay */}
                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden">
                        <div className="text-5xl font-black text-red-600/40 border-[8px] border-red-600/40 uppercase -rotate-[20deg] px-8 py-3 tracking-widest mix-blend-overlay shadow-2xl">
                          FILLED
                        </div>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots & Controls */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
              <button
                onClick={handlePrev}
                className="text-zinc-500 hover:text-rose-500 transition-colors p-1"
                aria-label="Previous Poster"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {hiringPosters.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to poster ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === idx ? "w-8 bg-rose-500 shadow-[0_0_10px_rgba(225,29,72,0.5)]" : "w-1.5 bg-zinc-800 hover:bg-zinc-600"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="text-zinc-500 hover:text-rose-500 transition-colors p-1"
                aria-label="Next Poster"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </Reveal>
      </div>

      {/* Full-size Image Lightbox Modal */}
      <AnimatePresence>
        {showModal && poster.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setShowModal(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer p-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-full hover:bg-zinc-800"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Image Wrapper */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <img
                src={poster.image}
                alt={poster.role}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-zinc-800/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
