"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    name: "Sarah Jenkins",
    role: "Software Engineer",
    path: "Intern → Software Engineer",
    image: "/assets/Home-page/client-reviews/image 169.png",
    quote: <>"Starting as an intern in the <Link href="/about/internship" className="text-rose-500 hover:underline font-bold">internship program</Link>, I was immediately given real-world problems to solve. The mentorship here didn't just teach me how to code better; it taught me how to engineer solutions that scale. Within two years, I was leading my own microservices architecture."</>
  },
  {
    name: "David Chen",
    role: "Platform Engineer",
    path: "Developer → Platform Engineer",
    image: "/assets/Home-page/client-reviews/image 170.png",
    quote: <>"Devopstrio recognized my passion for infrastructure early on. They sponsored my Kubernetes certifications and gave me the autonomy to help build our internal developer platform in <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps automation</Link>. The growth trajectory here is limited only by your ambition."</>
  },
  {
    name: "Priya Sharma",
    role: "Engineering Team Lead",
    path: "Associate → Team Lead",
    image: "/assets/Home-page/client-reviews/image 171.png",
    quote: <>"What stands out to me is the culture of ownership. When I proposed a new way to handle our CI/CD pipelines in <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link>, leadership empowered me to build a team and execute the vision. Now I help others grow in the same way."</>
  },
  {
    name: "Marcus Vance",
    role: "Principal Cloud Architect",
    path: "Cloud Specialist → Principal Architect",
    image: "/assets/Home-page/client-reviews/image 169.png",
    quote: <>"The cross-disciplinary collaboration at Devopstrio is unmatched. Working alongside top AI practitioners and SRE teams on enterprise <Link href="/services/ai-modernization" className="text-rose-500 hover:underline font-bold">AI modernization</Link> projects has allowed me to architect resilient systems used by millions daily."</>
  },
  {
    name: "Elena Rostova",
    role: "AI Operations Lead",
    path: "AI Specialist → Ops Lead",
    image: "/assets/Home-page/client-reviews/image 170.png",
    quote: <>"From day one, my ideas were listened to with genuine respect. Devopstrio gave me the freedom to pioneer intelligent automated agents in our <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-bold">AI & Data innovation lab</Link>, turning research prototypes into high-performing client products."</>
  },
  {
    name: "Vikram Malhotra",
    role: "Lead DevSecOps Engineer",
    path: "Security Analyst → Lead DevSecOps",
    image: "/assets/Home-page/client-reviews/image 171.png",
    quote: <>"Security is embedded into everything we build here. Leadership trusted me to lead zero-trust architecture initiatives across major financial client migrations in <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">cybersecurity</Link>, making our engineering impact both meaningful and secure."</>
  }
];

export const EmployeeStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  // Visible stories slice of 3
  const visibleStories = [
    stories[currentIndex],
    stories[(currentIndex + 1) % stories.length],
    stories[(currentIndex + 2) % stories.length],
  ];

  return (
    <section className="py-24 sm:py-32 bg-black relative border-t border-zinc-900 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-2 font-sans"
            >
              Meet the People Behind <span className="text-rose-500 font-semibold">Devopstrio</span>
            </motion.h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous employee stories"
              className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-rose-500/50 hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next employee stories"
              className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-rose-500/50 hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visibleStories.map((story, idx) => (
                <motion.div
                  key={`${story.name}-${(currentIndex + idx) % stories.length}`}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-9 hover:bg-zinc-900/90 hover:border-rose-500/40 transition-all duration-500 relative group flex flex-col justify-between shadow-xl"
                >
                  <Quote className="absolute top-8 right-8 text-zinc-800/60 w-12 h-12 group-hover:text-rose-500/20 transition-colors" />
                  
                  <div>
                    {/* Employee Bio Header */}
                    <div className="flex items-center gap-4 mb-7">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-zinc-800 group-hover:border-rose-500/50 transition-colors shrink-0 shadow-md"
                      />
                      <div>
                        <h3 className="text-white font-semibold text-xl tracking-tight leading-tight">{story.name}</h3>
                        
                      </div>
                    </div>

                    {/* Quote Body */}
                    <p className="text-zinc-300 text-base sm:text-lg leading-relaxed relative z-10 font-semibold italic font-sans">
                      {story.quote}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-12">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to story ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i
                  ? "w-8 bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)]"
                  : "w-2 bg-zinc-800 hover:bg-zinc-700"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
