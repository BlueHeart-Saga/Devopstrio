"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import Image from "next/image";

const awards = [
  {
    title: "Employee Excellence Award",
    subtitle: "Q4 2025 Recognition Night",
    description: "Celebrating individuals who go beyond their role to deliver extraordinary results and inspire those around them.",
    image: "/assets/About-page/life-at-devopstrio/032138c4134fcdf8077d84f8a7737cf9 1.png",
    year: "2025",
    count: "12 Awardees"
  },
  {
    title: "Innovation Award",
    subtitle: "Annual Engineering Summit",
    description: "Honoring teams who shipped breakthrough features and products that fundamentally changed how our clients operate.",
    image: "/assets/About-page/life-at-devopstrio/74274f9572786d02b259386996664713 1.png",
    year: "2025",
    count: "5 Teams"
  },
  {
    title: "Customer Success Award",
    subtitle: "Client Satisfaction Program",
    description: "Recognizing delivery teams that achieved outstanding client NPS scores and project outcomes across global engagements.",
    image: "/assets/About-page/life-at-devopstrio/a92aaf7afdcc998ac1f4170d0ce4f3bf 1.png",
    year: "2024",
    count: "8 Teams"
  },
  {
    title: "Engineering Excellence Award",
    subtitle: "Platform & Architecture Summit",
    description: "Given to engineers who demonstrate mastery of their craft through performance, reliability, and code quality.",
    image: "/assets/About-page/life-at-devopstrio/f06bd1e09e11b43ff330d32ecd4e0377 1.png",
    year: "2024",
    count: "6 Awardees"
  },
];

export const AwardsRecognition = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + awards.length) % awards.length);
  const next = () => setCurrent(c => (c + 1) % awards.length);

  return (
    <section className="py-24 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
            >
              Awards &amp; Recognition
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
            >
              Celebrating <span className="text-rose-500">Excellence</span>
            </motion.h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-red-500 hover:text-red-500 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-red-500 hover:text-red-500 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden"
            >
              {/* Image side */}
              <div className="relative h-64 md:h-auto min-h-[320px]">
                <Image
                  src={awards[current].image}
                  alt={awards[current].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent md:hidden" />
              </div>

              {/* Content side */}
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-xs font-mono">{awards[current].year}</span>
                    <span className="mx-2 text-zinc-700">·</span>
                    <span className="text-red-400 text-xs font-medium">{awards[current].count}</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{awards[current].title}</h3>
                <p className="text-red-400 text-sm font-medium mb-5">{awards[current].subtitle}</p>
                <p className="text-zinc-400 leading-relaxed">{awards[current].description}</p>

                {/* Pagination dots */}
                <div className="flex gap-2 mt-8">
                  {awards.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? "bg-red-500 w-6" : "bg-zinc-700 w-1.5 hover:bg-zinc-500"}`}
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
