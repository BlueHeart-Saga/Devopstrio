"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CountUp from "../../components/ui/CountUp";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const slides = [
    {
      eyebrow: "UK-Based Global Technology Partner",
      title: "Engineering Digital Transformation at Enterprise Scale",
      desc: "Devopstrio helps organizations accelerate innovation through Artificial Intelligence, Cloud Engineering, DevOps, Cybersecurity, Data Platforms, and Enterprise Software Development. We partner with businesses to build secure, scalable, and future-ready digital ecosystems.",
      primaryBtn: { text: "Book a Consultation", href: "/contact" },
      secondaryBtn: { text: "Explore Our Services", href: "#capabilities" },
      image: "/assets/homehero/1.png",
      glowColor: "rgba(220, 38, 38, 0.08)",
      keywords: [
        "Digital Transformation",
        "Cloud Engineering",
        "Artificial Intelligence",
        "Enterprise Solutions",
        "Innovation",
        "Global Delivery"
      ]
    },
    {
      eyebrow: "End-to-End Technology Services",
      title: "Solutions Designed for Growth, Security & Performance",
      desc: "From cloud migration and DevOps automation to AI implementation, cybersecurity, and custom software development, we deliver technology solutions that create measurable business value.",
      primaryBtn: { text: "View Services", href: "/services" },
      secondaryBtn: { text: "Talk to an Expert", href: "/contact" },
      image: "/assets/homehero/2.png",
      glowColor: "rgba(244, 63, 94, 0.06)",
      keywords: [
        "Cloud Services",
        "DevOps",
        "Cybersecurity",
        "AI Solutions",
        "Software Development",
        "Managed Services"
      ]
    },
    {
      eyebrow: "Industry-Focused Expertise",
      title: "Technology Solutions Built for Every Industry",
      desc: "We help organizations across Financial Services, Healthcare, Logistics, Telecommunications, Manufacturing, Retail, Media, and Public Sector modernize operations and accelerate digital growth.",
      primaryBtn: { text: "Explore Industries", href: "/industries" },
      secondaryBtn: { text: "View Success Stories", href: "#impact" },
      image: "/assets/homehero/3.png",
      glowColor: "rgba(225, 29, 72, 0.05)",
      keywords: [
        "Financial Services",
        "Healthcare",
        "Logistics",
        "Telecommunications",
        "Manufacturing",
        "Retail"
      ]
    },
    {
      eyebrow: "Cloud & Infrastructure Excellence",
      title: "Building Resilient Multi-Cloud Platforms",
      desc: "Our cloud specialists design, migrate, optimize, and manage enterprise workloads across Microsoft Azure, AWS, Google Cloud, Kubernetes, and hybrid infrastructure environments.",
      primaryBtn: { text: "Cloud Services", href: "/services/cloud" },
      secondaryBtn: { text: "Speak with an Architect", href: "/contact" },
      image: "/assets/homehero/4.png",
      glowColor: "rgba(244, 63, 94, 0.05)",
      keywords: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "Kubernetes",
        "Infrastructure as Code",
        "Cloud Security"
      ]
    },
    {
      eyebrow: "AI & Data Innovation",
      title: "Unlock Business Intelligence Through AI",
      desc: "Transform data into actionable insights with Generative AI, Machine Learning, AI Agents, Data Engineering, Predictive Analytics, and intelligent automation solutions.",
      primaryBtn: { text: "Explore AI Services", href: "/services/ai" },
      secondaryBtn: { text: "Start Your AI Journey", href: "/contact" },
      image: "/assets/homehero/5.png",
      glowColor: "rgba(220, 38, 38, 0.06)",
      keywords: [
        "Generative AI",
        "Machine Learning",
        "AI Agents",
        "Data Engineering",
        "Business Intelligence",
        "Automation"
      ]
    },
    {
      eyebrow: "Product Engineering & Innovation",
      title: "From Vision to Scalable Digital Products",
      desc: "We design and develop enterprise web applications, SaaS platforms, mobile applications, APIs, and digital products engineered for performance, security, and long-term growth.",
      primaryBtn: { text: "Start Your Project", href: "/contact" },
      secondaryBtn: { text: "View Capabilities", href: "/services/software-development" },
      image: "/assets/homehero/6.png",
      glowColor: "rgba(244, 63, 94, 0.05)",
      keywords: [
        "Product Engineering",
        "SaaS Development",
        "Web Applications",
        "Mobile Apps",
        "Enterprise Software",
        "API Development"
      ]
    },
    {
      eyebrow: "Enterprise Security & Compliance",
      title: "Securing Platforms, Protecting Digital Assets",
      desc: "From zero-trust network architectures and penetration testing to SOC 2 readiness, we implement compliance-driven security systems that guard your corporate ecosystem.",
      primaryBtn: { text: "Start Security Audit", href: "/contact" },
      secondaryBtn: { text: "Explore Security", href: "/services/cybersecurity" },
      image: "/assets/homehero/7.png",
      glowColor: "rgba(244, 63, 94, 0.05)",
      keywords: [
        "Zero Trust",
        "Penetration Testing",
        "SOC 2 Compliance",
        "ISO 27001",
        "Threat Detection",
        "Vulnerability Management"
      ]
    },
    {
      eyebrow: "DevOps & Automation Excellence",
      title: "Accelerating Delivery with Intelligent Pipelines",
      desc: "We automate your entire software lifecycle. By integrating continuous integration, deployment pipelines, and proactive monitoring, we eliminate bottlenecks and speed up your time to market.",
      primaryBtn: { text: "Optimize Delivery", href: "/contact" },
      secondaryBtn: { text: "Explore DevOps", href: "/services/devops" },
      image: "/assets/homehero/8.png",
      glowColor: "rgba(220, 38, 38, 0.06)",
      keywords: [
        "CI/CD Pipelines",
        "Site Reliability",
        "DevSecOps",
        "Infrastructure as Code",
        "Continuous Testing",
        "Platform Automation"
      ]
    }
  ];

  const partnerLogos = [
    { src: "/assets/partners/BT.svg", alt: "BT", className: "h-10 md:h-12" },
    { src: "/assets/partners/bp-logo.svg", alt: "BP", className: "h-12 md:h-14" },
    { src: "/assets/partners/NHS.svg", alt: "NHS", className: "h-8 md:h-10" },
    { src: "/assets/partners/Boviet_Solar.png", alt: "Boviet Solar", className: "h-8 md:h-9" },
    { src: "/assets/partners/gxo.svg", alt: "GXO", className: "h-7 md:h-8" },
    { src: "/assets/partners/ASDA.svg", alt: "ASDA", className: "h-7 md:h-8" },
    { src: "/assets/partners/Microsoft.svg", alt: "Microsoft", className: "h-8 md:h-9" },
    { src: "/assets/partners/Virgin.svg", alt: "Virgin", className: "h-7 md:h-8" },
    { src: "/assets/partners/Costco.svg", alt: "Costco", className: "h-7 md:h-9" },
    { src: "/assets/partners/Metrobank.svg", alt: "Metro Bank", className: "h-8 md:h-10" }
  ];

  const doubledLogos = [...partnerLogos, ...partnerLogos];

  const handlePrev = () => {
    setCurrentSlide((prev: number) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev: number) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-play slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex flex-col justify-center bg-[#030303] text-white pt-28 pb-12 overflow-hidden border-b border-zinc-900">
      {/* Background Subtle Mesh / Canvas */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 flex flex-col justify-between h-full">

        {/* Top Section wrapper for precise image positioning */}
        <div className="relative w-full">
          {/* Main Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center min-h-[460px] relative z-20">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ y: heroY }}
                className="flex flex-col justify-center"
              >
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500">
                    {slides[currentSlide].eyebrow}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white mb-6">
                  {slides[currentSlide].title.split(" ").map((word, i) => {
                    const cleanWord = word.replace(/[^\w&']/g, "");
                    const isAccent = [
                      "AI", "Cloud", "Digital", "Innovation", "Secure", "Scalable", "Platforms", "Vision", "Product", "Scale", "Securing", "Protecting", "Assets", "Data", "Value", "Delivery", "Dedicated", "Teams"
                    ].includes(cleanWord);
                    return (
                      <span key={i} className={isAccent ? "text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent mr-2.5 inline-block" : "mr-2.5 inline-block"}>
                        {word}
                      </span>
                    );
                  })}
                </h1>

                {/* Subheading */}
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mb-6 font-bold">
                  {slides[currentSlide].desc}
                </p>

                {/* Scrollable Keywords list */}
                <div
                  className="flex gap-2 items-center overflow-x-auto py-2 mb-8 -mx-1 px-1"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {slides[currentSlide].keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="flex-shrink-0 text-[10px] font-mono tracking-wider uppercase border border-zinc-900 bg-zinc-950/40 text-zinc-400 px-3 py-1 rounded select-none hover:border-zinc-800 transition-colors"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.25)] hover:-translate-y-0.5"
                    href={slides[currentSlide].primaryBtn.href}
                  >
                    {slides[currentSlide].primaryBtn.text}
                  </a>
                  <a
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-zinc-355 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                    href={slides[currentSlide].secondaryBtn.href}
                  >
                    {slides[currentSlide].secondaryBtn.text}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Visual Image Block (Visible on mobile/tablet, hidden on desktop to use absolute viewport alignment) */}
            <div className="lg:hidden relative w-full max-w-[500px] mx-auto overflow-hidden flex items-center justify-center min-h-[300px]">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full pointer-events-none blur-3xl transition-all duration-700"
                style={{ background: `radial-gradient(circle at center, ${slides[currentSlide].glowColor}, transparent 65%)` }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative z-10 w-full flex items-center justify-center"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-auto object-contain max-h-[360px] select-none pointer-events-none filter drop-shadow-[0_0_30px_rgba(225,29,72,0.12)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden lg:block w-full h-full pointer-events-none" />

          </div>

          {/* Viewport-edge aligned Right Image (Large screens) */}
          <div className="hidden lg:flex absolute top-0 bottom-[-160px] right-[calc(50%-50vw)] w-[48vw] items-end justify-end pointer-events-none z-10 overflow-visible">
            {/* Ambient background glow behind image */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full pointer-events-none blur-3xl transition-all duration-700"
              style={{ background: `radial-gradient(circle at center, ${slides[currentSlide].glowColor}, transparent 65%)` }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.98, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full flex items-end justify-end"
              >
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-[100%] object-contain object-right-bottom select-none pointer-events-none drop-shadow-[0_10px_35px_rgba(225,29,72,0.15)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Controls (Indicators & Chevron Arrows) */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-between items-center relative z-20">
          {/* Progress Indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="relative h-[2px] transition-all duration-300"
                style={{
                  width: currentSlide === index ? "48px" : "24px",
                  background: currentSlide === index ? "#e11d48" : "#27272a"
                }}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/80 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/80 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Premium Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 gap-y-10 border-t border-zinc-900/60 pt-10 relative z-20">
          {[
            { num: 7, suffix: "+", label: "Years" },
            { num: 6, suffix: "+", label: "Offices" },
            { num: 4, suffix: "+", label: "Countries" },
            { num: 525, suffix: "+", label: "Experts" },
            { num: 2500, suffix: "+", label: "Services" },
            { num: 25, suffix: "+", label: "Domains" },
            { num: 8, suffix: "+", label: "Partners" },
            { num: null, suffix: "24/7", label: "Support" }
          ].map((stat, i) => (
            <div key={i} className="text-left group">
              <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-tighter group-hover:text-rose-500 transition-colors duration-300 drop-shadow-sm">
                {stat.num !== null ? (
                  <CountUp from={0} to={stat.num} duration={2.5} separator="," />
                ) : null}
                {stat.suffix}
              </span>
              <span className="block text-xs text-zinc-400 uppercase tracking-widest mt-2 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Banner (Auto Scroll Logos) */}
        <div className="w-full mt-12 pt-10 border-t border-zinc-900/40 overflow-hidden relative z-20 flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center tracking-tight">
            Trusted by Industry Leaders
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm mb-10 text-center font-bold">
            Join 10,000+ companies worldwide that trust our platform
          </p>

          <div className="relative w-full flex items-center overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 30,
                repeat: Infinity
              }}
            >
              {doubledLogos.map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <img src={logo.src} alt={logo.alt} className={`object-contain ${logo.className || "h-8"}`} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>


    </section>
  );
}
