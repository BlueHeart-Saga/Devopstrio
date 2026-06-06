"use client";

import { useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const highlightDescription = (text: string) => {
  const terms = [
    "AI", "Cloud", "DevOps", "CI/CD", "Kubernetes", "SRE", "Infrastructure as Code",
    "SaaS", "Cybersecurity", "Zero Trust", "compliance", "automation"
  ];
  const regex = new RegExp(`\\b(${terms.join("|")})\\b`, "gi");
  const parts = text.split(regex);
  return parts.map((part, idx) => {
    const isMatch = terms.some(term => term.toLowerCase() === part.toLowerCase());
    return isMatch ? (
      <strong key={idx} className="text-zinc-200 font-semibold">
        {part}
      </strong>
    ) : (
      part
    );
  });
};

export function HeroSection() {
  const currentSlide = 0;
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const slides = [
    {
      eyebrow: "UK-Based Global Technology Partner",
      title: "The World Runs on Code. We Make It Unstoppable.",
      desc: "Devopstrio empowers enterprises to accelerate digital transformation with secure, scalable AI, Cloud, and DevOps solutions.",
      primaryBtn: { text: "Book a Consultation", href: "/contact" },
      secondaryBtn: { text: "Explore Our Services", href: "#capabilities" },
      image: "/assets/Home-page/homehero/Sagadevan.S.svg",
      glowColor: "rgba(220, 38, 38, 0.08)",
      keywords: []
    }
  ];

  const partnerLogos = [
    { src: "/assets/Home-page/partners/BT.svg", alt: "BT", className: "h-10 md:h-12" },
    { src: "/assets/Home-page/partners/bp-logo.svg", alt: "BP", className: "h-12 md:h-14" },
    { src: "/assets/Home-page/partners/NHS.svg", alt: "NHS", className: "h-8 md:h-10" },
    { src: "/assets/Home-page/partners/Boviet_Solar.png", alt: "Boviet Solar", className: "h-8 md:h-9" },
    { src: "/assets/Home-page/partners/gxo.svg", alt: "GXO", className: "h-7 md:h-8" },
    { src: "/assets/Home-page/partners/ASDA.svg", alt: "ASDA", className: "h-7 md:h-8" },
    { src: "/assets/Home-page/partners/Microsoft.svg", alt: "Microsoft", className: "h-8 md:h-9" },
    { src: "/assets/Home-page/partners/Virgin.svg", alt: "Virgin", className: "h-7 md:h-8" },
    { src: "/assets/Home-page/partners/Costco.svg", alt: "Costco", className: "h-7 md:h-9" },
    { src: "/assets/Home-page/partners/Metrobank.svg", alt: "Metro Bank", className: "h-8 md:h-10" }
  ];

  const doubledLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex flex-col justify-center bg-[#030303] text-white pt-20 pb-4 overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none"
        style={{ backgroundImage: `url('/assets/Home-page/homehero/herobg.png')` }}
      />
      {/* Background Subtle Mesh / Canvas */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 flex flex-col justify-between h-full items-center">

        {/* Top Section wrapper for centered layout */}
        <div className="relative w-full pb-0 flex flex-col items-center text-center">
          {/* Centered Main Container */}
          <div className="flex flex-col items-center justify-center w-full min-h-[400px] relative z-20">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ y: heroY }}
                className="flex flex-col items-center text-center justify-center w-full max-w-4xl mx-auto"
              >
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-900 bg-zinc-950/40 mb-3 mx-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                    {slides[currentSlide].eyebrow}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-white mb-3">
                  {slides[currentSlide].title.split(" ").map((word, i) => {
                    const cleanWord = word.replace(/[^\w&']/g, "");
                    const isAccent = [
                      "AI", "Cloud", "Digital", "Innovation", "Secure", "Scalable", "Platforms", "Vision", "Product", "Scale", "Securing", "Protecting", "Assets", "Data", "Value", "Delivery", "Dedicated", "Teams",
                      "Bold", "Powerful", "Growth", "Security", "Performance", "Secured", "Threat", "Precision", "Industry", "Resilient", "Enterprise", "Limits", "Power", "Intelligent", "Launch", "Engineer", "Automate", "DevOps",
                      "Code", "Unstoppable", "Perform", "Last", "Win", "Expertise", "Partnership", "Infrastructure", "Downtime", "Tomorrow", "Products", "Love", "Ship", "Faster", "Break", "Deliver", "Confidence"
                    ].includes(cleanWord);
                    return (
                      <span key={i} className={isAccent ? "text-[#E11D48] mr-2.5 inline-block font-bold" : "mr-2.5 inline-block"}>
                        {word}
                      </span>
                    );
                  })}
                </h1>

                {/* Subheading */}
                <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-4 font-normal">
                  {highlightDescription(slides[currentSlide].desc)}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 items-center justify-center mb-6">
                  <a
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.25)] hover:-translate-y-0.5"
                    href={slides[currentSlide].primaryBtn.href}
                  >
                    {slides[currentSlide].primaryBtn.text}
                    <span className="ml-2">→</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                    href={slides[currentSlide].secondaryBtn.href}
                  >
                    {slides[currentSlide].secondaryBtn.text}
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Visual Image Block (Centered at bottom) */}
            <div className="relative w-full max-w-[500px] mx-auto overflow-visible flex items-end justify-center min-h-[220px] md:min-h-[280px] mt-2 z-10">
              <div
                className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full pointer-events-none blur-3xl transition-all duration-700 opacity-60"
                style={{ background: `radial-gradient(circle at center, ${slides[currentSlide].glowColor}, transparent 65%)` }}
              />

              {/* Glowing Rings matching mockup */}
              <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] rounded-full border border-rose-500/20 pointer-events-none z-0" />
              <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] rounded-full border border-blue-500/10 pointer-events-none z-0" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative z-10 w-full flex items-end justify-center"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-auto object-contain max-h-[220px] md:max-h-[280px] select-none pointer-events-none filter drop-shadow-[0_0_35px_rgba(225,29,72,0.15)] relative z-10"
                  />
                  {/* Bottom fade shadow to blend effectively into black theme */}
                  <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-20 lg:h-24 bg-gradient-to-t from-[#030303] via-[#030303]/90 to-transparent blur-[2px] lg:blur-[4px] pointer-events-none z-20" />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Premium Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 gap-y-10 border-t border-zinc-900/60 pt-10 relative z-20">
          {[
            { num: 7, suffix: "+", label: "Years" },
            { num: 6, suffix: "+", label: "Offices" },
            { num: 4, suffix: "+", label: "Countries" },
            { num: 525, suffix: "+", label: "Experts" },
            { num: 9596, suffix: "+", label: "Services" },
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
        </div> */}

        {/* Trust Banner (Auto Scroll Logos) */}
        <div className="w-full mt-0 pt-4 overflow-hidden relative z-20 flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-bold text-white mb-1 text-center tracking-tight">
            Trusted by Industry Leaders
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm mb-4 text-center font-bold">
            Join 10,000+ companies worldwide that trust our platform
          </p>

          <div className="relative w-full flex items-center overflow-hidden py-2">
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
