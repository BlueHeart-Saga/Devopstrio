"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "lucide-react";

export function ClientBenefits() {
  const testimonials = [
    {
      quote: "Devopstrio's certified engineering pods delivered our multi-region cloud migration months ahead of schedule with zero security downtime.",
      author: "Chief Technology Officer"
    },
    {
      quote: "Their 24/7 follow-the-sun operations model gave our leadership team total confidence across complex DevOps and Kubernetes deployments.",
      author: "VP of Infrastructure"
    },
    {
      quote: "Working with Devopstrio feels like having an elite internal SWAT team. Their technical depth and agility solve our toughest platform bottlenecks.",
      author: "Head of Cloud Architecture"
    },
    {
      quote: "They don't just complete projects—they actively co-own outcomes, continuously optimizing our systems and driving genuine long-term value.",
      author: "Engineering Director"
    },
    {
      quote: "Our application release cycles dropped from weeks to hours after Devopstrio implemented automated CI/CD and GitOps infrastructure.",
      author: "Director of Software Engineering"
    },
    {
      quote: "Exceptional rigor in DevSecOps compliance. They audited and hardened our cloud infrastructure to meet strict global healthcare standards.",
      author: "Chief Information Security Officer"
    },
    {
      quote: "The strategic advisory from London paired with execution from India gave us global scale without sacrificing communication speed.",
      author: "Head of Global Delivery"
    },
    {
      quote: "Their data engineering team built high-throughput AI pipelines that transformed how our analytics platform processes live telemetry.",
      author: "Lead Data Architect"
    },
    {
      quote: "Modernizing our legacy infrastructure with Devopstrio brought immediate cost savings and unprecedented platform resilience.",
      author: "VP of Cloud Operations"
    }
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto change page every 3.5 seconds (paused on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, totalPages]);

  const currentCards = testimonials.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <section className="py-14 sm:py-20 bg-black text-white relative overflow-hidden z-10 font-sans border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Simple Header */}
        <Reveal>
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              What This Means for <span className="text-rose-600">Our Clients</span>
            </h2>
          </div>
        </Reveal>

        {/* 3-Card Grid with 3-and-3 Auto Change */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[260px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {currentCards.map((item, idx) => (
            <div
              key={`${currentPage}-${idx}`}
              className="p-7 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-rose-500/50 transition-all duration-500 flex flex-col justify-between shadow-xl cursor-pointer group"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-7 h-7 text-rose-500/30 mb-3 group-hover:text-rose-500/50 transition-colors" />

                {/* Quote Text Only */}
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-medium italic font-sans mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Name Only */}
              <div className="pt-4 border-t border-zinc-800/80">
                <h4 className="text-sm font-bold text-white font-sans group-hover:text-rose-400 transition-colors">
                  — {item.author}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (3 auto change indicators) */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentPage ? "bg-rose-500 w-8" : "bg-zinc-700 hover:bg-zinc-500 w-2.5"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ClientBenefits;
