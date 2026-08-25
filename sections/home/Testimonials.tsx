"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote: "Devopstrio has been a transformative partner in our digital journey. Their expertise in AI, cloud and DevOps helped us modernize our platform, reduce costs and deliver exceptional customer experiences.",
      author: "James Carter",
      role: "CTO, Global Retail Group",
      image: "/webp/assets/Home-page/client-reviews/image-164.webp"
    },
    {
      quote: "Their team embedded seamlessly into our engineering unit. We successfully launched our automated multi-cloud data broker platform two months ahead of schedule with complete error budget compliance.",
      author: "Sarah Jenkins",
      role: "VP of Platform Infrastructure, Zenith Capital",
      image: "/webp/assets/Home-page/client-reviews/image-165.webp"
    },
    {
      quote: "The transition to a cloud-native microservices architecture was flawless. Devopstrio's deep understanding of Kubernetes and CI/CD automation revolutionized our deployment cadence.",
      author: "Michael Chen",
      role: "VP of Engineering, FinTech Solutions",
      image: "/webp/assets/Home-page/client-reviews/image-166.webp"
    },
    {
      quote: "We partnered with Devopstrio to overhaul our cybersecurity governance. Their zero-trust implementation across our AWS environments gave our enterprise the robust security posture it desperately needed.",
      author: "Elena Rodriguez",
      role: "CISO, HealthCorp",
      image: "/webp/assets/Home-page/client-reviews/image-167.webp"
    },
    {
      quote: "The AI-driven analytics platform built by Devopstrio provided us with real-time actionable insights, fundamentally changing how we approach global supply chain logistics.",
      author: "David O'Connor",
      role: "Chief Data Officer, Nexus Logistics",
      image: "/webp/assets/Home-page/client-reviews/image-168.webp"
    },
    {
      quote: "From strategy to execution, Devopstrio delivered unparalleled excellence. They successfully migrated our legacy monolithic applications to Microsoft Azure with absolute zero downtime.",
      author: "Amina Al-Fayed",
      role: "Director of IT, Horizon Telecom",
      image: "/webp/assets/Home-page/client-reviews/image-169.webp"
    },
    {
      quote: "Their managed services team acts as a true extension of our own. The 24/7 proactive monitoring and incident resolution have significantly improved our core system reliability.",
      author: "Thomas Wright",
      role: "Head of Operations, EduTech Global",
      image: "/webp/assets/Home-page/client-reviews/image-170.webp"
    },
    {
      quote: "Devopstrio's data engineering experts architected a highly scalable data lake that eliminated our data silos and enabled advanced predictive modeling across the enterprise.",
      author: "Marcus Lin",
      role: "VP of Data Science, Retail Dynamics",
      image: "/webp/assets/Home-page/client-reviews/image-171.webp"
    },
    {
      quote: "Integrating security into our DevOps pipelines was a challenge until Devopstrio stepped in. Their DevSecOps approach transformed our development lifecycle, making security a seamless default.",
      author: "Julia Gomez",
      role: "Director of DevOps, CyberNet Systems",
      image: "/webp/assets/Home-page/client-reviews/image-172.webp"
    },
    {
      quote: "The level of technical proficiency and strategic foresight brought by Devopstrio is unmatched. They didn't just build a cloud platform; they engineered a foundation for our future growth.",
      author: "Samuel Peterson",
      role: "CIO, Global Manufacturing Inc.",
      image: "/webp/assets/Home-page/client-reviews/image-173.webp"
    },
    {
      quote: "By leveraging their expertise in Google Cloud Platform, Devopstrio helped us build a highly resilient, globally distributed infrastructure that seamlessly scales with our fluctuating user demand.",
      author: "Lisa Chang",
      role: "CTO, Streamline Media",
      image: "/webp/assets/Home-page/client-reviews/image-174.webp"
    },
    {
      quote: "Devopstrio's approach to application modernization breathed new life into our core systems. We experienced a 40% reduction in operational overhead within the first six months.",
      author: "Robert Hughes",
      role: "VP of Enterprise Architecture, Nexus Financial",
      image: "/webp/assets/Home-page/client-reviews/image-175.webp"
    },
    {
      quote: "The CI/CD pipeline automation completely transformed how we ship software. We went from monthly releases to multiple daily deployments with absolute confidence.",
      author: "Sophia Martinez",
      role: "Head of DevOps, InnovateTech",
      image: "/webp/assets/Home-page/client-reviews/image-180.webp"
    },
    {
      quote: "Their site reliability engineering team came in and immediately optimized our resource allocation. We saw a dramatic drop in latency and a massive boost in customer satisfaction.",
      author: "Daniel Foster",
      role: "Director of SRE, Quantum Data Systems",
      image: "/webp/assets/Home-page/client-reviews/image-177.webp"
    },
    {
      quote: "Working with Devopstrio was a masterclass in modern digital engineering. Their deep knowledge of serverless architecture was crucial to scaling our core product line.",
      author: "Olivia Bennett",
      role: "VP of Product Engineering, Acumen Tech",
      image: "/webp/assets/Home-page/client-reviews/image-178.webp"
    },
    {
      quote: "Their robust multi-cloud strategy not only eliminated vendor lock-in but empowered us to leverage the best tools from AWS and Azure simultaneously without friction.",
      author: "William Takahashi",
      role: "Chief Architect, CloudNet Solutions",
      image: "/webp/assets/Home-page/client-reviews/image-180.webp"
    }
  ];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto rotate every 10 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-24 md:py-36 bg-[#030303] text-white  relative overflow-hidden">
      {/* Background Image */}
      <img src="/webp/assets/wavebg/homepage/testimonals.webp"
        alt="Background Wave"
        className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none z-0"
      loading="lazy" />
      {/* Ambient Gradient Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030303]/95 via-[#030303]/50 to-[#030303]/95 pointer-events-none z-0" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05),transparent_70%)] blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          {/* Quote Content Side */}
          <div className="flex flex-col justify-between min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex-1"
              >
                <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-rose-500 mb-8">
                  HEAR FROM OUR CLIENTS
                </span>

                {/* Big quotation mark */}
                <span className="block text-rose-600 text-7xl font-serif leading-none select-none -ml-2 mb-2">
                  &ldquo;
                </span>

                <p className="text-xl md:text-2xl font-bold text-zinc-200 leading-relaxed mb-8 tracking-wide">
                  {testimonials[current].quote}
                </p>

                <div className="border-t border-zinc-900 pt-6">
                  <strong className="block text-base font-semibold text-white tracking-wide">
                    {testimonials[current].author}
                  </strong>
                  <span className="text-xs uppercase font-mono text-zinc-500 tracking-wider">
                    {testimonials[current].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="mt-12 flex items-center justify-between">
              {/* Progress Indicators */}
              <div className="flex items-center gap-2.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className="relative h-[2px] transition-all duration-300"
                    style={{
                      width: current === index ? "36px" : "18px",
                      background: current === index ? "#e11d48" : "#27272a"
                    }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/80 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/80 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Image & Red Mesh wave Side */}
          <div className="relative w-full max-w-[420px] lg:max-w-none mx-auto flex items-center justify-center">
            {/* Dynamic red energy ring / overlay background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_60%)] pointer-events-none scale-125" />

            {/* Abstract red waves behind the headshot */}
            <div className="absolute w-[120%] h-[120%] rounded-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,transparent_30%,#030303_70%)] z-0" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full aspect-square rounded-2xl border border-zinc-900 overflow-hidden bg-zinc-950 flex items-center justify-center max-w-[380px] shadow-2xl"
              >
                {/* Visual red trails mesh overlay on the testimonial photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-50 z-20 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.06),transparent_60%)] z-20 pointer-events-none" />

                <img src={testimonials[current].image}
                  alt={testimonials[current].author}
                  className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
