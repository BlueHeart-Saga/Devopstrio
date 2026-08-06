"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Search } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  category: string;
  image: string;
}

const clientImages = [
  "/assets/Home-page/client-reviews/image%20164.png",
  "/assets/Home-page/client-reviews/image%20165.png",
  "/assets/Home-page/client-reviews/image%20166.png",
  "/assets/Home-page/client-reviews/image%20167.png",
  "/assets/Home-page/client-reviews/image%20168.png",
  "/assets/Home-page/client-reviews/image%20169.png",
  "/assets/Home-page/client-reviews/image%20170.png",
  "/assets/Home-page/client-reviews/image%20171.png",
  "/assets/Home-page/client-reviews/image%20172.png",
  "/assets/Home-page/client-reviews/image%20173.png",
  "/assets/Home-page/client-reviews/image%20174.png",
  "/assets/Home-page/client-reviews/image%20175.png",
  "/assets/Home-page/client-reviews/image%20176.png",
  "/assets/Home-page/client-reviews/image%20177.png",
  "/assets/Home-page/client-reviews/image%20178.png",
  "/assets/Home-page/client-reviews/image%20179.png",
  "/assets/Home-page/client-reviews/image%20180.png",
  "/assets/Home-page/client-reviews/image%20181.png"
];

// Generate 100 realistic enterprise executive testimonials across 6 categories
const rawTestimonials: Testimonial[] = Array.from({ length: 100 }, (_, i) => {
  const categories = [
    "FinTech & Banking",
    "Healthcare & Life Sciences",
    "Cloud & DevOps",
    "AI & Data Science",
    "Enterprise SaaS",
    "Retail & Logistics"
  ];
  
  const quotesData = [
    { quote: "Working with Devopstrio is like having a team of experts whose capabilities you never have to test.", author: "Ron Holmes", role: "CTO", company: "Radium Capital", category: "FinTech & Banking" },
    { quote: "Devopstrio transformed our core infrastructure. We deployed our multi-cloud AI broker platform two months ahead of schedule.", author: "Sarah Jenkins", role: "VP of Infrastructure", company: "Zenith Global", category: "Cloud & DevOps" },
    { quote: "Their zero-trust security framework and SOC2 audit readiness saved our cloud architecture from compliance delays.", author: "Michael Chen", role: "CISO", company: "Apex Financial", category: "FinTech & Banking" },
    { quote: "The AI-driven predictive telemetry pipeline built by Devopstrio fundamentally upgraded our operational efficiency.", author: "Elena Rodriguez", role: "Chief Data Officer", company: "BioHealth Global", category: "Healthcare & Life Sciences" },
    { quote: "Devopstrio's Kubernetes and CI/CD automation eliminated deploy bottlenecks completely.", author: "David O'Connor", role: "VP of Engineering", company: "Nexus Logistics", category: "Retail & Logistics" },
    { quote: "From strategy to execution, Devopstrio delivered top-tier engineering. Zero downtime multi-cloud migration.", author: "Amina Al-Fayed", role: "Director of IT", company: "Horizon Telecom", category: "Enterprise SaaS" },
    { quote: "Their managed SRE team acts as a true extension of our own. 99.999% system uptime achieved.", author: "Thomas Wright", role: "Head of Operations", company: "EduTech Global", category: "Enterprise SaaS" },
    { quote: "Devopstrio's data engineering team architected a high-throughput lakehouse that unified all data silos.", author: "Marcus Lin", role: "VP of Data", company: "Retail Dynamics", category: "Retail & Logistics" },
    { quote: "DevSecOps integration was seamless. Snyk and SonarQube pipelines reduced vulnerabilities by 85%.", author: "Julia Gomez", role: "Director of DevOps", company: "CyberNet Systems", category: "Cloud & DevOps" },
    { quote: "Unmatched technical precision. Devopstrio engineered a secure foundation for our enterprise scaling.", author: "Samuel Peterson", role: "CIO", company: "Global Mfg Inc", category: "Enterprise SaaS" },
    { quote: "GCP autopilot setup and Vertex AI integration allowed us to serve 20M users with real-time responsiveness.", author: "Lisa Chang", role: "CTO", company: "Streamline Media", category: "AI & Data Science" },
    { quote: "Legacy mainframe refactoring to Go microservices reduced operational overhead by 45% in Q1.", author: "Robert Hughes", role: "VP of Architecture", company: "Nexus Financial", category: "FinTech & Banking" },
    { quote: "Devopstrio AI Studio enabled our team to automate document parsing and invoice workflows instantly.", author: "Sophia Martinez", role: "Head of AI", company: "InnovateTech", category: "AI & Data Science" },
    { quote: "Latency dropped by 60% after Devopstrio's SRE team optimized our Database indexing and caching.", author: "Daniel Foster", role: "Director of SRE", company: "Quantum Systems", category: "Cloud & DevOps" },
    { quote: "Serverless AWS Lambda migration cut our cloud bill by $120K annually while handling 3x traffic spikes.", author: "Olivia Bennett", role: "VP of Cloud Ops", company: "Acumen Tech", category: "Cloud & DevOps" },
    { quote: "HIPAA-compliant telehealth platform built with absolute security standards and WebRTC video integration.", author: "Dr. Arthur Pendelton", role: "Chief Medical Officer", company: "CareSuite Systems", category: "Healthcare & Life Sciences" },
    { quote: "Our payment processing time dropped under 50ms globally after Devopstrio restructured our global DB replications.", author: "Alexander Sterling", role: "VP of Payments", company: "Vanguard Pay", category: "FinTech & Banking" },
    { quote: "The NLP pipeline designed by their engineering team automates 80% of our clinical triage notes sorting.", author: "Clara Vance", role: "Director of Clinical AI", company: "Helix Health", category: "Healthcare & Life Sciences" },
    { quote: "Devopstrio's cloud governance framework reduced resource sprawl and aligned our spending exactly to usage cycles.", author: "Jonathan Wu", role: "Director of FinOps", company: "Symphony Cloud", category: "Cloud & DevOps" },
    { quote: "The ML model lifecycle management platform built on Vertex AI cut our validation iteration rounds in half.", author: "Deepak Nair", role: "Head of Machine Learning", company: "Kognitive Tech", category: "AI & Data Science" },
    { quote: "Deploying updates used to take weekends. With their custom GitHub Actions automation, it takes 8 minutes.", author: "Hanna Linna", role: "DevOps Lead", company: "Veritas Solutions", category: "Enterprise SaaS" },
    { quote: "Devopstrio modernised our legacy ERP. Integrations with Shopify and SAP operate flawlessly under extreme loads.", author: "Victor Dupont", role: "Chief Supply Officer", company: "Apex Logistics", category: "Retail & Logistics" },
    { quote: "Our real-time trade execution engine compliance auditing was automated without adding code latency.", author: "Sarah Bernardi", role: "Head of Risk Assurance", company: "Lombard Securities", category: "FinTech & Banking" },
    { quote: "They deployed an air-gapped Kubernetes system matching strict federal security parameters on time.", author: "Col. Randall Vance", role: "Director of Security Systems", company: "GovDefense Systems", category: "Cloud & DevOps" },
    { quote: "Devopstrio structured our multitenant Postgres cluster to guarantee hardware isolation for premium enterprises.", author: "Nate Kowalski", role: "Chief Architect", company: "CloudScale SaaS", category: "Enterprise SaaS" },
    { quote: "We scaled our microservices on ECS effortlessly during Black Friday peak. Not a single error logged.", author: "Rachel Greene", role: "VP of E-Commerce", company: "Threads Global", category: "Retail & Logistics" },
    { quote: "From training data pipelines to live model deployments, their data platform has been robust and cost-effective.", author: "Dr. Kenji Tanaka", role: "VP of Core Research", company: "NeoCognition", category: "AI & Data Science" },
    { quote: "Implemented robust end-to-end telemetry and observability that made finding production bugs trivial.", author: "Simone de Beau", role: "VP of Site Reliability", company: "Système SA", category: "Cloud & DevOps" },
    { quote: "Our EHR integration timelines were cut from months to weeks using Devopstrio's FHIR compliant API templates.", author: "Elena Rostova", role: "Integration Architect", company: "PulseMed Group", category: "Healthcare & Life Sciences" },
    { quote: "We automated database schema migrations safely across 40 distinct clusters with zero customer downtime.", author: "George Fletcher", role: "VP of Infrastructure", company: "AlphaTech SaaS", category: "Enterprise SaaS" },
    { quote: "Their predictive analytics engine accurately forecast customer demand to optimize our entire supply chain inventory.", author: "Mei-Ling Zhou", role: "Director of Analytics", company: "Horizon Retail", category: "Retail & Logistics" },
    { quote: "The zero-trust remote access architecture securely handles developer configurations across 14 global offices.", author: "Charles Dunhill", role: "CISO", company: "Standard Assurance", category: "FinTech & Banking" }
  ];

  const template = quotesData[i % quotesData.length];
  const imageIndex = i % clientImages.length;
  const cat = categories[i % categories.length];

  return {
    id: i + 1,
    quote: i < quotesData.length 
      ? template.quote 
      : `Devopstrio provided exemplary strategic engineering delivery for our #project-${i + 1} milestone. The implementation of modern cloud integrations helped us exceed targeted roadmap timelines securely.`,
    author: i < quotesData.length ? template.author : `Client Partner #${i + 1}`,
    role: i < quotesData.length ? template.role : "VP of Technology",
    company: i < quotesData.length ? template.company : `Enterprise Systems #${i + 1}`,
    category: cat,
    image: clientImages[imageIndex]
  };
});

export function ExecutiveTestimonials() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "FinTech & Banking", "Healthcare & Life Sciences", "Cloud & DevOps", "AI & Data Science", "Enterprise SaaS", "Retail & Logistics"];

  const filteredTestimonials = rawTestimonials.filter((t) => {
    const matchesCategory = activeCategory === "All" || t.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      t.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  }, [filteredTestimonials.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  }, [filteredTestimonials.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    if (!isPlaying || filteredTestimonials.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying, handleNext, filteredTestimonials.length]);

  const currentT = filteredTestimonials[currentIndex] || rawTestimonials[0];

  return (
    <section id="testimonials" className="w-full py-8 bg-[#030303] text-white relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-[400px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            {/* <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-rose-400 text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                EXECUTIVE VALIDATIONS
              </div>
            </Reveal> */}
            <Reveal>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-3 relative inline-block">
                {/* Curved Down Arrow PNG (matching reference image) */}
                <div className="absolute -top-10 -left-6 sm:-left-10 z-20 pointer-events-none select-none">
                  <img
                    src="/assets/components/Carrow-right.png"
                    alt="Curved down arrow"
                    className="w-10 sm:w-14 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  />
                </div>

                Voices of Our{" "}
                <span className="relative inline-block text-white px-1">
                  <span className="relative z-10 text-white font-semibold">Clients</span>
                  {/* Double Rose Pencil Underline Stroke (matching reference image) */}
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-4 text-rose-500 pointer-events-none overflow-visible z-0"
                    viewBox="0 0 150 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 0 5 L 148 5 M 4 12 L 144 12"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="opacity-95 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.7)]"
                    />
                  </svg>
                </span>
              </h2>
            </Reveal>
            {/* <Reveal>
              <p className="text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed font-normal">
                Discover how organizations transform challenges into measurable business success with Devopstrio.
              </p>
            </Reveal> */}
          </div>

          {/* Controls: Search & Auto-Play */}
          {/* <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search 100 reviews..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-red-500 transition-colors w-48 sm:w-60"
                />
              </div>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
                title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-rose-500" /> : <Play className="w-3.5 h-3.5 text-rose-500" />}
                <span>{isPlaying ? "Autoplay On" : "Autoplay Off"}</span>
              </button>
            </div>
          </Reveal> */}
        </div>

        {/* Category Pills Filter Bar */}
        {/* <Reveal>
          <div className="flex gap-2 overflow-x-auto pb-4 mb-10 custom-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]"
                    : "bg-zinc-950 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat} {cat === "All" ? `(100)` : ""}
              </button>
            ))}
          </div>
        </Reveal> */}

        {/* Testimonial Card (Exact 1:1 Banner Layout matching User UI Screenshot) */}
        {filteredTestimonials.length > 0 ? (
          <Reveal>
            <div className="relative rounded-[28px] border border-zinc-200/90 bg-[#F4F1EA] text-zinc-900 shadow-2xl p-8 sm:p-12 md:p-14 min-h-[380px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentT.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10"
                >
                  
                  {/* Left Side: Large Quote Mark & Executive Statement */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Large Red Quote Mark */}
                      <span className="text-5xl sm:text-6xl md:text-7xl font-serif text-red-600 font-bold block mb-2 leading-none select-none">
                        ”
                      </span>

                      {/* Executive Quote */}
                      <p className="text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-zinc-800 leading-snug font-sans mb-8">
                        "{currentT.quote}"
                      </p>
                    </div>

                    {/* Author Meta Details */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-red-600 font-sans tracking-tight">
                        {currentT.author}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-600">
                        {currentT.role}, {currentT.company}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Executive Portrait Headshot Cutout */}
                  <div className="w-full md:w-5/12 max-w-[280px] sm:max-w-[320px] flex justify-center md:justify-end shrink-0 relative">
                    <div className="relative w-full h-[240px] sm:h-[300px] md:h-[340px] rounded-2xl overflow-hidden shadow-xl border border-zinc-300/50 bg-gradient-to-b from-zinc-200/50 to-zinc-300/30">
                      <img
                        src={currentT.image}
                        alt={currentT.author}
                        className="w-full h-full object-cover object-top filter contrast-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F4F1EA]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white flex items-center justify-between text-[11px] font-semibold">
                        <span>{currentT.category}</span>
                        <span className="text-red-400 font-bold">Verified</span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        ) : (
          <div className="p-12 text-center text-zinc-500 bg-zinc-950 border border-zinc-800 rounded-2xl">
            No testimonials match "{searchQuery}".
          </div>
        )}

        {/* Footer Navigation Bar (Index Counter & Arrows) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* <div className="text-sm font-mono text-zinc-300">
            Testimonial <span className="text-red-500 font-bold">{currentIndex + 1}</span> of <span className="text-white font-bold">{filteredTestimonials.length}</span> ({activeCategory})
          </div> */}

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 flex items-center justify-center text-white hover:text-rose-500 transition-all shadow-md active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 flex items-center justify-center text-white transition-all shadow-[0_0_15px_rgba(225,29,72,0.4)] active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
