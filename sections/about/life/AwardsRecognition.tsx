"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const awards = [
  {
    title: "Employee Excellence Award",
    subtitle: "Q4 2025 Recognition Night",
    description: <>Celebrating individuals who go beyond their role to deliver extraordinary results and inspire those around them under our <Link href="/careers" className="text-rose-500 hover:underline font-bold">careers development program</Link>.</>,
    image: "/assets/About-page/life-at-devopstrio/032138c4134fcdf8077d84f8a7737cf9 1.png",
    year: "2025",
    count: "12 Awardees"
  },
  {
    title: "Innovation Award",
    subtitle: "Annual Engineering Summit",
    description: <>Honoring teams who shipped breakthrough features and products that fundamentally changed how our clients operate with <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">product engineering</Link>.</>,
    image: "/assets/About-page/life-at-devopstrio/74274f9572786d02b259386996664713 1.png",
    year: "2025",
    count: "5 Teams"
  },
  {
    title: "Customer Success Award",
    subtitle: "Client Satisfaction Program",
    description: <>Recognizing delivery teams that achieved outstanding client NPS scores and project outcomes across <Link href="/about/global-presence" className="text-rose-500 hover:underline font-bold">global presence</Link> engagements.</>,
    image: "/assets/About-page/life-at-devopstrio/a92aaf7afdcc998ac1f4170d0ce4f3bf 1.png",
    year: "2024",
    count: "8 Teams"
  },
  {
    title: "Engineering Excellence Award",
    subtitle: "Platform & Architecture Summit",
    description: <>Given to engineers who demonstrate mastery of their craft through performance, reliability, and code quality in <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps & platform automation</Link>.</>,
    image: "/assets/About-page/life-at-devopstrio/f06bd1e09e11b43ff330d32ecd4e0377 1.png",
    year: "2024",
    count: "6 Awardees"
  },
];

export const AwardsRecognition = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + awards.length) % awards.length);
  const next = () => setCurrent((c) => (c + 1) % awards.length);

  return (
    <section className="py-24 sm:py-32 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white"
            >
              Celebrating <span className="text-rose-500">Excellence</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-300 hover:border-rose-500 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-md"
              aria-label="Previous award"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-300 hover:border-rose-500 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-md"
              aria-label="Next award"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Award Showcase Card */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-zinc-950/80 border border-zinc-800/90 rounded-3xl overflow-hidden backdrop-blur-xl"
            >
              {/* Image side */}
              <div className="relative h-72 md:h-auto min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]">
                <Image
                  src={awards[current].image}
                  alt={awards[current].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-950/90 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent md:hidden" />
              </div>

              {/* Content side */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3 tracking-tight leading-tight">
                  {awards[current].title}
                </h3>
                <p className="text-rose-400 text-sm sm:text-base font-semibold mb-6 tracking-wide">
                  {awards[current].subtitle}
                </p>
                <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed font-semibold">
                  {awards[current].description}
                </p>

                {/* Pagination indicator dots */}
                <div className="flex items-center gap-2 mt-10">
                  {awards.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        idx === current
                          ? "bg-rose-500 w-8 shadow-[0_0_12px_rgba(244,63,94,0.6)]"
                          : "bg-zinc-800 w-2 hover:bg-zinc-700"
                      }`}
                      aria-label={`Go to award ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
