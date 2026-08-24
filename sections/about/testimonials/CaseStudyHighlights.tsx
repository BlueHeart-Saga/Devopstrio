"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Cloud", "DevOps", "Security", "AI"];

const caseStudies = [
  {
    id: 1,
    category: "Cloud",
    title: "Cloud Cost Optimisation for a Global FinOps Leader",
    image: "/assets/common/09ff7846bc8c9998745688779c09f88d-1.png",
    link: "#"
  },
  {
    id: 2,
    category: "DevOps",
    title: "Platform Modernisation and 3× Faster Delivery",
    image: "/assets/common/1b065043b6959827c05a0073c93a4a53-1.png",
    link: "#"
  },
  {
    id: 3,
    category: "Security",
    title: "Zero-Trust Security Transformation in Healthcare",
    image: "/assets/common/260b761ad40c3ad2acba2c6666894539-1.png",
    link: "#"
  },
  {
    id: 4,
    category: "AI",
    title: "Unlocking the Value of AI in Retail operations",
    image: "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.png",
    link: "#"
  },
  {
    id: 5,
    category: "Cloud",
    title: "Scaling Enterprise Workloads with Azure VMware Solution",
    image: "/assets/common/315e4fdc6263bfd240f36297e376576e-1.png",
    link: "#"
  },
  {
    id: 6,
    category: "DevOps",
    title: "Global Infrastructure for High Availability and Scale",
    image: "/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.png",
    link: "#"
  },
  {
    id: 7,
    category: "Cloud",
    title: "Accelerating Digital Delivery by 3× Across Markets",
    image: "/assets/common/45ea830d170d382ade235db479060da7-1.png",
    link: "#"
  },
  {
    id: 8,
    category: "Security",
    title: "Securing Patient Data While Modernizing Core Services",
    image: "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.png",
    link: "#"
  },
  {
    id: 9,
    category: "AI",
    title: "Optimizing Retail Logistics with Predictive Analytics",
    image: "/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.png",
    link: "#"
  },
  {
    id: 10,
    category: "Cloud",
    title: "Enhancing Global Distribution with Auto-Scaling Cloud",
    image: "/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.png",
    link: "#"
  },
  {
    id: 11,
    category: "DevOps",
    title: "Seamless Domain Management and Lightning-Fast Provisioning",
    image: "/assets/common/90361fed0bb781d7c86e451995b4dbce-1.png",
    link: "#"
  },
  {
    id: 12,
    category: "AI",
    title: "Scaling Hardware Analytics Real-Time with Cloud Intelligence",
    image: "/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.png",
    link: "#"
  },
  {
    id: 13,
    category: "DevOps",
    title: "Accelerating Enterprise Workflow Automation Deployments",
    image: "/assets/common/9d230407fdcdb1a78debc2abe0ff1925-1.png",
    link: "#"
  }
];

export const CaseStudyHighlights = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredStudies = caseStudies.filter(
    (cs) => activeCategory === "All" || cs.category === activeCategory
  );

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden font-sans border-t border-zinc-900">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Semibold Header, Subtitle Removed */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
            Case Studies & <span className="text-rose-600 font-semibold">Highlights</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-base font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel container */}
        <div className="relative">
          <motion.div 
            layout
            ref={carouselRef}
            className="flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            <AnimatePresence>
              {filteredStudies.map((study) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="min-w-[300px] max-w-[300px] md:min-w-[340px] md:max-w-[340px] shrink-0 snap-start bg-zinc-950/80 border border-zinc-800 rounded-[28px] p-4 flex flex-col h-full shadow-lg group hover:border-rose-500/40 transition-all duration-300"
                >
                  <div className="relative h-[180px] w-full rounded-[20px] overflow-hidden bg-zinc-950">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide text-rose-400 border border-zinc-800 uppercase">
                      {study.category}
                    </div> */}
                  </div>
                  
                  <div className="pt-5 pb-2 px-2 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-6 flex-1 group-hover:text-rose-400 transition-colors font-sans">
                      {study.title}
                    </h3>
                    
                    <div className="mt-auto flex items-center gap-3 text-zinc-300 cursor-pointer group/btn">
                      <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white group-hover/btn:bg-rose-500 transition-colors duration-300 shadow-md">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-white group-hover/btn:text-rose-400 transition-colors font-sans">Read Story</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredStudies.length === 0 && (
               <div className="text-zinc-400 text-center w-full py-20 font-medium font-sans">No stories found for this category.</div>
            )}
          </motion.div>
        </div>
        
        {/* Navigation Arrows */}
        {filteredStudies.length > 0 && (
          <div className="flex gap-3 mt-4 justify-center">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300 hover:text-white hover:border-rose-500 transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300 hover:text-white hover:border-rose-500 transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
