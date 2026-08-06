"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  eyebrow: string;
  title: React.ReactNode;
  primaryBtn: { text: string; href: string };
  secondaryBtn: { text: string; href: string };
  image: string;
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const slides: Slide[] = [

    {
      eyebrow: "Cloud & Infrastructure",
      title: (
        <>
          Modern Cloud Demands
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Scalability.</span>
          <br />
          We Build It
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Seamlessly.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Punitha.A.svg"
    },
    {
      eyebrow: "Industry-Focused Expertise",
      title: (
        <>
          Every Industry Demands
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Change.</span>
          <br />
          We Deliver the
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Advantage.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Ooviya.R.svg"
    },
    {
      eyebrow: "Elite Global Technology Partner",
      title: (
        <>
          The World Runs on
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Code.</span>
          <br />
          We Make It
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Unstoppable.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Sagadevan.S.svg"
    },
    {
      eyebrow: "Modern DevOps & Automation",
      title: (
        <>
          Modern DevOps Demands
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Automation.</span>
          <br />
          We Power It
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Everywhere.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Suryaprakash s.svg"
    },

    {
      eyebrow: "Software & Quality Engineering",
      title: (
        <>
          Software Excellence Demands
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Precision.</span>
          <br />
          We Engineer It
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Flawlessly.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Ananthalakshmi.svg"
    },
    {
      eyebrow: "Data & Cloud Infrastructure",
      title: (
        <>
          Enterprise Growth Requires
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Innovation.</span>
          <br />
          We Build The
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Future.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Umamaheswari R.svg"
    },

    {
      eyebrow: "Digital Products & Platforms",
      title: (
        <>
          Great Ideas Deserve
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Products.</span>
          <br />
          We Turn Them Into
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Reality.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Subbiah_Muthu.M.svg"
    },
    {
      eyebrow: "End-to-End Technology Services",
      title: (
        <>
          Great Businesses Run on
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Technology.</span>
          <br />
          We Make It
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Perform.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Kishore.P.svg"
    },


    {
      eyebrow: "Ecosystem & Strategic Alliances",
      title: (
        <>
          Innovation Grows Through
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Partnerships.</span>
          <br />
          We Connect the
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Future.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Thangalakshmi.M.svg"
    },
    {
      eyebrow: "AI & Data Innovation",
      title: (
        <>
          Data Creates the Next
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Breakthrough.</span>
          <br />
          We Make It
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Intelligent.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Sermaraja.V.svg"
    },
    // {
    //   eyebrow: "Cybersecurity & Compliance",
    //   title: (
    //     <>
    //       Trust Is Built Through
    //       <br />
    //       <span className="text-[#E11D48] whitespace-nowrap">Security.</span>
    //       <br />
    //       We Protect What
    //       <br />
    //       <span className="text-[#E11D48] whitespace-nowrap">Matters.</span>
    //     </>
    //   ),
    //   primaryBtn: { text: "Explore Services", href: "/services" },
    //   secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
    //   image: "/assets/Home-page/homehero/Sudalairajan.A.svg"
    // },

    {
      eyebrow: "Platform & Cloud Operations",
      title: (
        <>
          High-Scale Systems Need
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Reliability.</span>
          <br />
          We Scale Them
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Seamlessly.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Hamsavarthiny.P.svg"
    },
    {
      eyebrow: "Enterprise Application Delivery",
      title: (
        <>
          Scalable Applications Drive
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Growth.</span>
          <br />
          We Deliver Them
          <br />
          <span className="text-[#E11D48] whitespace-nowrap">Fast.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/assets/Home-page/homehero/Saravanakumar.s.svg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section ref={heroRef} className="relative w-full h-[95vh] min-h-[600px] lg:min-h-[750px] xl:min-h-[850px] max-h-[950px] flex items-center justify-center bg-[#030303] text-white pt-16 pb-12 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Text content - constrained to max 50% width on large screens */}
          <div className="lg:col-span-6 lg:pr-6 pl-2 sm:pl-6 md:pl-10 lg:pl-14 xl:pl-14 flex flex-col items-start text-left justify-center relative z-20 py-4 lg:py-8">

            {/* Fixed-height title area so all slides stay at same vertical level */}
            <div className="relative w-full min-h-[220px] sm:min-h-[250px] md:min-h-[290px] lg:min-h-[310px] xl:min-h-[350px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(8px)"
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                    filter: "blur(8px)"
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="absolute inset-0 flex flex-col items-start text-left w-full justify-center"
                >
                  {/* Eyebrow */}
                  {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                      {slides[currentSlide].eyebrow}
                    </span>
                  </div> */}

                  {/* Heading — same font size and line-height for every slide */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.12] text-white">
                    {slides[currentSlide].title}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA buttons */}
            {/* <div className="flex flex-wrap gap-4 items-center justify-start mb-8">
              <Link
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                href={slides[currentSlide].primaryBtn.href}
              >
                {slides[currentSlide].primaryBtn.text}
              </Link>
              <Link
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                href={slides[currentSlide].secondaryBtn.href}
              >
                {slides[currentSlide].secondaryBtn.text}
              </Link>
              <a
                 href="https://devopstrioaiservices-e6dnggh5gxehh9d0.southindia-01.azurewebsites.net"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3.5 text-white hover:bg-red-700 font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.4)] hover:-translate-y-0.5"
               >
                 🚀 Launch AI Studio
               </a>
            </div> */}

            {/* Slide Indicators — always pinned below the fixed title area */}
            <div className="flex gap-2 relative z-20 mt-6">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-[#E11D48] w-6" : "bg-zinc-800 hover:bg-zinc-750"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Person Image & Glow Background centered vertically */}
          <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 xl:right-0 relative flex items-center justify-center z-10 w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[580px] xl:max-w-[680px] mt-6 lg:mt-0 pb-0 mb-0">

            {/* Preload images to eliminate network delay on slide change */}
            <div className="hidden" aria-hidden="true">
              {slides.map((slide, idx) => (
                <link key={`preload-${idx}`} rel="preload" as="image" href={slide.image} />
              ))}
            </div>

            {/* Person image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 1.05
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative z-10 w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[580px] xl:max-w-[680px] flex items-end justify-center pb-0 mb-0"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].eyebrow}
                  priority
                  width={680}
                  height={850}
                  className="w-full h-auto object-contain max-h-[460px] lg:max-h-[750px] xl:max-h-[850px] select-none pb-0 mb-0"
                />
                {/* Bottom blending gradient */}
                <div className="absolute bottom-[-1px] left-0 right-0 h-36 bg-gradient-to-t from-[#030303] via-[#030303]/90 to-transparent pointer-events-none z-20" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
