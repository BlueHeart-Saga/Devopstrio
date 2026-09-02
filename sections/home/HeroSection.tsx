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
  name: string;
  signatureImage: string;
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
          <span className="whitespace-nowrap">Enterprise Infrastructure</span>
          <br />
          Demands
          <br />
          <span className="text-rose-500 whitespace-nowrap">Scalability.</span>
          <br />
          We Deliver
          <br />
          <span className="text-rose-500 whitespace-nowrap">Confidence.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/Punitha.webp",
      name: "Punitha",
      signatureImage: "/webp/assets/sign/Punitha.webp"
    },
    {
      eyebrow: "Software & Quality Engineering",
      title: (
        <>
          <span className="whitespace-nowrap">Software Excellence</span>
          <br />
          Requires
          <br />
          <span className="text-rose-500 whitespace-nowrap">Precision.</span>
          <br />
          We Deliver
          <br />
          <span className="text-rose-500 whitespace-nowrap">Quality.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/anantha lakshmi.webp",
      name: "Ananthalakshmi",
      signatureImage: "/webp/assets/sign/ananthalakshmi.webp"
    },
    {
      eyebrow: "Data & Cloud Infrastructure",
      title: (
        <>
          <span className="whitespace-nowrap">Enterprise Growth</span>
          <br />
          Requires
          <br />
          <span className="text-rose-500 whitespace-nowrap">Intelligence.</span>
          <br />
          We Deliver
          <br />
          <span className="text-rose-500 whitespace-nowrap">Innovation.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/uma.webp",
      name: "Umamaheswari R",
      signatureImage: "/webp/assets/sign/uma.webp"
    },
    {
      eyebrow: "Digital Products & Platforms",
      title: (
        <>
          <span className="whitespace-nowrap">Product Innovation </span>
          <br />
          Drive
          <br />
          <span className="text-rose-500 whitespace-nowrap">Innovation.</span>
          <br />
          We Deliver
          <br />
          <span className="text-rose-500 whitespace-nowrap">Value.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/Subbaiah.webp",
      name: "Subbiah Muthu M",
      signatureImage: "/webp/assets/sign/subbiah.webp"
    },
    {
      eyebrow: "End-to-End Technology Services",
      title: (
        <>
          <span className="whitespace-nowrap">Technology Excellence</span>
          <br />
          Powers
          <br />
          <span className="text-rose-500 whitespace-nowrap">Growth.</span>
          <br />
          We Deliver
          <br />
          <span className="text-rose-500 whitespace-nowrap">Performance.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/Kishore.webp",
      name: "Kishore",
      signatureImage: "/webp/assets/sign/kishore.webp"
    },
    {
      eyebrow: "Ecosystem & Strategic Alliances",
      title: (
        <>
          <span className="whitespace-nowrap">Business Partnerships</span>
          <br />
          Create
          <br />
          <span className="text-rose-500 whitespace-nowrap">Innovation.</span>
          <br />
          We Build
          <br />
          <span className="text-rose-500 whitespace-nowrap">Together.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/thanga lakshmi.webp",
      name: "Thanga Lakshmi",
      signatureImage: "/webp/assets/sign/thangalakshmi.webp"
    },
    {
      eyebrow: "AI & Data Innovation",
      title: (
        <>
          <span className="whitespace-nowrap">Intelligent Innovation </span>
          <br />
          Powers
          <br />
          <span className="text-rose-500 whitespace-nowrap">Decisions.</span>
          <br />
          We Deliver
          <br />
          <span className="text-rose-500 whitespace-nowrap">Results.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/Serma.webp",
      name: "Sermaraj",
      signatureImage: "/webp/assets/sign/serma.webp"
    },
    {
      eyebrow: "Platform & Cloud Operations",
      title: (
        <>
          <span className="whitespace-nowrap">Platform Reliability</span>
          <br />
          Requires
          <br />
          <span className="text-rose-500 whitespace-nowrap">Performance.</span>
          <br />
          We Scale
          <br />
          <span className="text-rose-500 whitespace-nowrap">Seamlessly.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/Hamsavarthini.webp",
      name: "Hamsavarthiny P",
      signatureImage: "/webp/assets/sign/hamsa.webp"
    },
    {
      eyebrow: "Elite Global Technology Partner",
      title: (
        <>
          <span className="whitespace-nowrap">Global Technology</span>
          <br />
          Drives
          <br />
          <span className="text-rose-500 whitespace-nowrap">Innovation.</span>
          <br />
          We Enable
          <br />
          <span className="text-rose-500 whitespace-nowrap">Success.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/sahadevan.webp",
      name: "Sagadevan",
      signatureImage: "/webp/assets/sign/saga.webp"
    },
    {
      eyebrow: "Modern DevOps & Automation",
      title: (
        <>
          <span className="whitespace-nowrap">DevOps Excellence</span>
          <br />
          Requires
          <br />
          <span className="text-rose-500 whitespace-nowrap">Automation.</span>
          <br />
          We Deliver
          <br />
          <span className="text-rose-500 whitespace-nowrap">Speed.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/Surya.webp",
      name: "Suryaprakash S",
      signatureImage: "/webp/assets/sign/surya.webp"
    },
    {
      eyebrow: "Industry-Focused Expertise",
      title: (
        <>
          <span className="whitespace-nowrap">Industry Expertise</span>
          <br />
          Demands
          <br />
          <span className="text-rose-500 whitespace-nowrap">Results.</span>
          <br />
          We Deliver
          <br />
          <span className="text-rose-500 whitespace-nowrap">Advantage.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/OOviya.webp",
      name: "Oviya",
      signatureImage: "/webp/assets/sign/oviya.webp"
    },
    {
      eyebrow: "Enterprise Application Delivery",
      title: (
        <>
          <span className="whitespace-nowrap">Application Engineering</span>
          <br />
          Accelerates
          <br />
          <span className="text-rose-500 whitespace-nowrap">Business.</span>
          <br />
          We Deliver
          <br />
          <span className="text-rose-500 whitespace-nowrap">Growth.</span>
        </>
      ),
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact#contact-form" },
      image: "/webp/assets/Home-page/homehero/our-people/Saravana.webp",
      name: "Saravanakumar S",
      signatureImage: "/webp/assets/sign/saravana.webp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section ref={heroRef} className="relative w-full min-h-[520px] lg:h-[95vh] lg:min-h-[750px] xl:min-h-[850px] max-h-[950px] flex items-center justify-center bg-[#030303] text-white pt-20 sm:pt-24 lg:pt-16 pb-8 lg:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Text content - constrained to max 50% width on large screens */}
          <div className="lg:col-span-6 lg:pr-6 pl-1 sm:pl-6 md:pl-10 lg:pl-14 xl:pl-14 flex flex-col items-start text-left justify-center relative z-20 py-2 sm:py-4 lg:py-8">

            {/* Fixed-height title area so all slides stay at same vertical level */}
            <div className="relative w-full min-h-[220px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[440px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={currentSlide === 0 ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(8px)" }}
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
                  {/* Heading — same font size and line-height for every slide */}
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.15] sm:leading-[1.12] text-white max-w-[620px]">
                    {slides[currentSlide].title}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators — hidden on mobile screens */}
            <div className="hidden sm:flex gap-2 relative z-20 mt-4 sm:mt-6">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-rose-500 w-6" : "bg-zinc-800 hover:bg-zinc-750"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Person Image & Glow Background centered vertically */}
          <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 xl:right-0 relative flex items-center justify-center z-10 w-full max-w-[320px] sm:max-w-[460px] lg:max-w-[580px] xl:max-w-[680px] mt-2 lg:mt-0 pb-0 mb-0 mx-auto">

            {/* Only load images on demand when slide changes */}

            {/* Person image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={currentSlide === 0 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
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
                className="relative z-10 w-full max-w-[340px] sm:max-w-[500px] lg:max-w-[580px] xl:max-w-[680px] flex items-end justify-center pb-0 mb-0"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].eyebrow}
                  priority
                  fetchPriority="high"
                  width={680}
                  height={850}
                  className="w-full h-auto object-contain max-h-[300px] sm:max-h-[460px] lg:max-h-[750px] xl:max-h-[850px] select-none pb-0 mb-0"
                />

                {/* Authentic Handwritten Signature Image (Original PNG shifted right & higher up) */}
                <motion.div
                  initial={currentSlide === 0 ? { opacity: 1, scale: 1, rotate: -4 } : { opacity: 0, scale: 0.9, rotate: -6 }}
                  animate={{ opacity: 1, scale: 1, rotate: -4 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 right-4 sm:right-10 md:right-16 lg:right-20 z-30 flex flex-col items-start select-none pointer-events-none"
                >
                  <img src={slides[currentSlide].signatureImage}
                    alt={`${slides[currentSlide].name} signature`}
                    className="w-36 sm:w-48 md:w-56 lg:w-64 h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                  loading="eager" fetchPriority="high" />
                </motion.div>

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
