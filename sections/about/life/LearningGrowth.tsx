"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roadmap = [
  {
    title: "Immersive Onboarding",
    desc: "A comprehensive introduction to our engineering culture, modern developer toolchains, and global delivery standards.",
  },
  {
    title: "Technical Training & Labs",
    desc: "Hands-on sandbox labs and deep-dive workshops with leading cloud architectures and cutting-edge AI technologies.",
  },
  {
    title: "Funded Certifications",
    desc: "100% sponsored certification paths across AWS, Microsoft Azure, Google Cloud, and CNCF Kubernetes.",
  },
  {
    title: "Project & System Ownership",
    desc: "Empowering engineers early on to own critical system components, drive technical design reviews, and ship to production.",
  },
  {
    title: "Architecture & Innovation Labs",
    desc: "Pioneering new solutions in our internal AI and Cloud labs, prototyping emerging tools, and evaluating modern frameworks.",
  },
  {
    title: "Leadership & Mentorship",
    desc: "Structured coaching pathways to transition from individual contributor to engineering team lead and technical mentor.",
  },
  {
    title: "Global Cross-Border Delivery",
    desc: "Direct collaboration with enterprise Fortune 500 executives and multidisciplinary teams across 4 continents.",
  },
  {
    title: "Thought Leadership & Strategy",
    desc: "Publishing high-impact research, speaking at international technology summits, and guiding company-wide architectural strategy.",
  },
];

export const LearningGrowth = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer to only auto-advance when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance interval
  useEffect(() => {
    if (isHovered || !isInView) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % roadmap.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isHovered, isInView]);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-black relative border-t border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Heading & Full Image (No border, uncropped) */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8 lg:sticky lg:top-28 self-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-white"
            >
              Accelerate Your <span className="text-rose-500">Growth</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <img src="/assets/About-page/life-at-devopstrio/tirtle.png"
                alt="Accelerate Your Growth at Devopstrio"
                className="w-full h-auto object-contain rounded-2xl"
              loading="lazy" />
            </motion.div>
          </div>

          {/* Right Column: Auto-changing & Hover-expandable Titles List */}
          <div 
            className="w-full lg:w-1/2 flex flex-col space-y-3 sm:space-y-4 pt-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {roadmap.map((item, idx) => {
              const isActive = idx === activeIdx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-500 border ${
                    isActive
                      ? "bg-zinc-900/50 border-zinc-800/90 shadow-lg"
                      : "bg-transparent border-transparent hover:bg-zinc-900/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`rounded-full shrink-0 transition-all duration-500 ${
                        isActive
                          ? "w-3 h-3 bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)] scale-110"
                          : "w-2.5 h-2.5 bg-zinc-700 group-hover:bg-rose-400"
                      }`}
                    />
                    <h3
                      className={`text-xl sm:text-2xl md:text-[28px] font-semibold tracking-tight leading-snug transition-colors duration-300 ${
                        isActive ? "text-white font-bold" : "text-zinc-400 group-hover:text-zinc-200"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Expandable Description */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pl-7 sm:pl-7"
                      >
                        <p className="pt-3 text-zinc-300 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};


