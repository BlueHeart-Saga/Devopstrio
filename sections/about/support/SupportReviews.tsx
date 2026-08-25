"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ThumbsUp, Heart, User, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  tag: string;
  rating: number;
  avatarColor: string;
}

const reviews: Review[] = [
  { id: 1, name: "Emily R.", role: "VP of Engineering, FinTech UK", text: "Devopstrio provided phenomenal support. Their engineers migrated our critical infrastructure without a single second of downtime. Passionate, brilliant team!", tag: "Cloud Migration", rating: 5, avatarColor: "#E11D48" },
  { id: 2, name: "David K.", role: "CTO, HealthTech Systems", text: "Outstanding 24/7 responsiveness. Whenever an alert triggers, their war-room team is active within minutes. Real peace of mind!", tag: "24/7 Managed SRE", rating: 5, avatarColor: "#2563EB" },
  { id: 3, name: "Sarah Chen", role: "Head of Infrastructure, Global Pay", text: "The dedication of the Devopstrio team is inspiring. They transformed our CI/CD pipelines and cut deployment times by 70%. Truly world-class!", tag: "DevOps & CI/CD", rating: 5, avatarColor: "#059669" },
  { id: 4, name: "Michael B.", role: "Director of IT, Enterprise Solutions", text: "Exceptional service and deep technical expertise. Their Kubernetes optimization saved us over 40% in monthly Azure costs. Beyond impressed!", tag: "FinOps & Azure", rating: 5, avatarColor: "#7C3AED" },
  { id: 5, name: "Sophia Martinez", role: "Chief Security Officer, CyberTrust", text: "SecOps alignment is top-notch. Devopstrio helped us achieve ISO 27001 compliance effortlessly while hardening our AWS architecture.", tag: "Cybersecurity", rating: 5, avatarColor: "#D97706" },
  { id: 6, name: "James Wilson", role: "Founder, SaaS Scale", text: "Devopstrio feels like a natural extension of our in-house engineering team. Responsive, kind, highly skilled, and always going the extra mile.", tag: "SaaS Scale-Up", rating: 5, avatarColor: "#0284C7" },
  { id: 7, name: "Alexander Wright", role: "VP Cloud Operations, OmniRetail", text: "Every interaction with Devopstrio brings clarity and efficiency. Their proactive monitoring stopped critical incidents before they even happened.", tag: "Cloud Support", rating: 5, avatarColor: "#E11D48" },
  { id: 8, name: "Olivia Taylor", role: "Lead DevOps Architect, NextGen AI", text: "Incredible speed and attention to detail! They automated our multi-region AI workloads on GCP flawlessly. Best support experience ever.", tag: "AI Infrastructure", rating: 5, avatarColor: "#059669" },
  { id: 9, name: "Daniel Park", role: "Head of Digital Transformation, Apex Global", text: "Warm, professional, and endlessly talented. Devopstrio made our legacy cloud modernization journey smooth, enjoyable, and successful.", tag: "Digital Transformation", rating: 5, avatarColor: "#7C3AED" },
  { id: 10, name: "Hannah Bennett", role: "Director of Product, SmartCare", text: "The speed at which their team resolves tickets is unprecedented. 5 stars aren't enough for the incredible dedication they demonstrate every day!", tag: "Product Support", rating: 5, avatarColor: "#D97706" },
  { id: 11, name: "Marcus Vance", role: "Chief Architect, LogiTech Global", text: "Devopstrio's engineers solved complex multi-cloud routing issues in record time. Their commitment to technical excellence is unmatched.", tag: "Multi-Cloud Networking", rating: 5, avatarColor: "#2563EB" },
  { id: 12, name: "Chloe Dupont", role: "Senior Operations Lead, EuroData", text: "Absolute pleasure to work with. Friendly engineers, clear communication, and zero jargon. They deliver on every promise reliably.", tag: "Global SLA Support", rating: 5, avatarColor: "#E11D48" },
  { id: 13, name: "Robert Harrison", role: "VP Technology, InsureDigital", text: "Devopstrio transformed our release pipeline stability. Our deployment failure rate dropped to 0%. Extraordinary partnership!", tag: "DevSecOps", rating: 5, avatarColor: "#059669" },
  { id: 14, name: "Amara Okezie", role: "Head of Infrastructure, Banking 360", text: "Their follow-the-sun 24/7 support model is seamless across London, US, and India. No matter the hour, expert help is immediate.", tag: "24/7 Global Support", rating: 5, avatarColor: "#7C3AED" },
  { id: 15, name: "Lucas Meyer", role: "Engineering Lead, Cloud Native Labs", text: "Flawless Kubernetes cluster management. Devopstrio handled our traffic spike during Black Friday with zero latency increase!", tag: "Kubernetes Scale", rating: 5, avatarColor: "#D97706" },
  { id: 16, name: "Elena Rostova", role: "Chief Technology Officer, FinEdge", text: "Professionalism at its finest. They rescued our migration project and brought total stability to our financial data engine.", tag: "Database Optimization", rating: 5, avatarColor: "#0284C7" },
  { id: 17, name: "Liam O'Connor", role: "Director of SRE, Telecom Global", text: "Working with Devopstrio gives us complete peace of mind. Their proactive threat intelligence and patching are faultless.", tag: "Proactive Security", rating: 5, avatarColor: "#E11D48" },
  { id: 18, name: "Priya Sharma", role: "Head of Delivery, EdTech World", text: "Devopstrio's team is not only highly technical but also incredibly empathetic and supportive. They truly care about client success.", tag: "Customer Success", rating: 5, avatarColor: "#059669" },
  { id: 19, name: "Benjamin Thorne", role: "Lead Systems Engineer, EnergyGrid", text: "From day one, Devopstrio demonstrated unparalleled mastery in Terraform and automated IaC. Highly recommended!", tag: "Infrastructure as Code", rating: 5, avatarColor: "#2563EB" },
  { id: 20, name: "Jessica Alba", role: "VP Operations, BioHealth Labs", text: "Their round-the-clock incident response saved our critical clinical trial server. We are forever grateful for their speed!", tag: "Critical Escalation", rating: 5, avatarColor: "#7C3AED" },
  { id: 21, name: "Vikram Mehta", role: "Co-Founder & CTO, PaySphere", text: "Devopstrio helped us scale from 10k to 2 million daily active transactions. Their architecture guidance was pivotal.", tag: "Hyper-Growth Scale", rating: 5, avatarColor: "#D97706" },
  { id: 22, name: "Charlotte Green", role: "Head of Quality, MediaStream", text: "Always helpful, transparent, and swift. Devopstrio sets the gold standard for enterprise IT customer support.", tag: "Enterprise Support", rating: 5, avatarColor: "#0284C7" },
  { id: 23, name: "Gabriel Santos", role: "Infrastructure Manager, SwiftLogistics", text: "The best partner we've ever engaged. They reduced our cloud infrastructure downtime to absolute zero across 12 consecutive months.", tag: "Zero-Downtime SLA", rating: 5, avatarColor: "#E11D48" },
  { id: 24, name: "Grace Liu", role: "VP Engineering, Analytics AI", text: "Devopstrio's cloud engineers optimize every query and container. Highly knowledgeable and wonderfully collaborative.", tag: "Cloud Analytics", rating: 5, avatarColor: "#059669" },
  { id: 25, name: "Noah Campbell", role: "Chief Security Officer, ShieldPay", text: "Their Zero Trust implementation was swift, flawless, and certified on the first attempt. Top-tier cybersecurity talent!", tag: "Zero Trust Architecture", rating: 5, avatarColor: "#2563EB" },
  { id: 26, name: "Zoe Kravitz", role: "Product Director, Creative Cloud", text: "Devopstrio's support team feels like part of our family. Always warm, cheerful, and extraordinarily effective.", tag: "Client Partnership", rating: 5, avatarColor: "#7C3AED" },
  { id: 27, name: "Oliver Scott", role: "Lead Cloud Architect, RetailOne", text: "Unmatched expertise in AWS Serverless and EventBridge. Devopstrio modernized our stack effortlessly.", tag: "AWS Serverless", rating: 5, avatarColor: "#D97706" },
  { id: 28, name: "Mia Takahashi", role: "Head of Platform, Mobility Global", text: "Their P1 SLA response of under 15 minutes is real. Whenever we need assistance, an expert engineer is instantly available.", tag: "Rapid SLA Response", rating: 5, avatarColor: "#0284C7" },
  { id: 29, name: "Ethan Hunt", role: "VP Operations, DefenseTech", text: "Rock-solid reliability and strict adherence to security protocols. Devopstrio is an indispensable partner for enterprise tech.", tag: "Enterprise Reliability", rating: 5, avatarColor: "#E11D48" },
  { id: 30, name: "Freya Lindqvist", role: "Engineering Manager, Nordic Pay", text: "Devopstrio's team is quick to respond and solved complex Kafka clustering challenges effortlessly. Truly elite professionals!", tag: "Kafka Clustering", rating: 5, avatarColor: "#059669" },
  { id: 31, name: "Sebastian Vance", role: "Director of Infrastructure, CloudCore", text: "They saved us $180,000 annually through intelligent cloud resource rightsizing without impacting performance.", tag: "Cost Optimisation", rating: 5, avatarColor: "#2563EB" },
  { id: 32, name: "Isabella Rossi", role: "Head of Operations, Milano Fashion Tech", text: "Prompt, warm, and highly efficient. Devopstrio handled our e-commerce traffic spike of 500% with absolute ease.", tag: "Traffic Spike Management", rating: 5, avatarColor: "#7C3AED" },
  { id: 33, name: "William Zhang", role: "CTO, Quantum Computations", text: "Devopstrio's deep understanding of container orchestration and service mesh is truly impressive. Exceptional quality!", tag: "Service Mesh & Istio", rating: 5, avatarColor: "#D97706" },
  { id: 34, name: "Ava Robinson", role: "VP Product, HealthHub", text: "Their dedicated support engineers understand our business context deeply. We couldn't ask for a better technology partner.", tag: "Dedicated Engineers", rating: 5, avatarColor: "#0284C7" },
  { id: 35, name: "Harper Davis", role: "Director of IT, Global Logistics", text: "Whenever we launch new microservices, Devopstrio provides 24/7 hand-holding and monitoring. Supreme peace of mind!", tag: "Microservices Support", rating: 5, avatarColor: "#E11D48" },
  { id: 36, name: "Mason Clark", role: "Lead DevOps Engineer, CyberGuard", text: "Devopstrio's automated backup and disaster recovery setup worked flawlessly during our regional testing drill. A+", tag: "Disaster Recovery", rating: 5, avatarColor: "#059669" },
  { id: 37, name: "Evelyn Foster", role: "Head of Software, Smart Home Inc", text: "Every ticket raised receives immediate human attention with actionable solutions. A refreshingly high standard of service!", tag: "Human-Centric Support", rating: 5, avatarColor: "#2563EB" },
  { id: 38, name: "Logan Miller", role: "VP Infrastructure, Capital Growth", text: "Devopstrio's Azure migration team completed our project 3 weeks ahead of deadline. Exceptional project management and execution.", tag: "Azure Migration", rating: 5, avatarColor: "#7C3AED" },
  { id: 39, name: "Sofia Patel", role: "Chief Security Officer, DataVault", text: "Top-notch vulnerability management. Devopstrio keeps our servers patched and compliant without any service disruption.", tag: "Patch Management", rating: 5, avatarColor: "#D97706" },
  { id: 40, name: "Jackson Hayes", role: "Head of Cloud, AutoDrive AI", text: "Outstanding support for GPU cluster scaling on Google Cloud. Devopstrio's engineers are brilliant AI infrastructure pioneers.", tag: "GCP AI Scaling", rating: 5, avatarColor: "#0284C7" },
  { id: 41, name: "Aria Montgomery", role: "Director of Systems, LegalTech Corp", text: "Reliable, transparent, and always focused on business value. Devopstrio is by far the best managed service provider we've hired.", tag: "Managed Services", rating: 5, avatarColor: "#E11D48" },
  { id: 42, name: "Mateo Fernandez", role: "CTO, Solaria Energy", text: "Devopstrio helped us automate our IoT data pipeline processing 50M events daily. Flawless execution and super friendly team!", tag: "IoT Pipeline Support", rating: 5, avatarColor: "#059669" },
  { id: 43, name: "Lily Jenkins", role: "VP Operations, FinSecure", text: "Their war-room support during our core platform upgrade was stellar. Every engineer knew exactly what to do. 10/10!", tag: "War-Room Activation", rating: 5, avatarColor: "#2563EB" },
  { id: 44, name: "Caleb Cooper", role: "Head of DevOps, Gaming Domain", text: "Low latency, 100% uptime, and 24/7 instant chat support. Devopstrio keeps our multiplayer gaming servers ultra-fast worldwide.", tag: "Low Latency SRE", rating: 5, avatarColor: "#7C3AED" },
  { id: 45, name: "Nora Sullivan", role: "Lead Systems Architect, InsurTech", text: "Devopstrio's engineers are true masters of cloud security and Terraform automation. Highly recommended to any enterprise!", tag: "Cloud Automation", rating: 5, avatarColor: "#D97706" },
  { id: 46, name: "Henry Wallace", role: "Director of IT, Global Foods", text: "Fantastic team to work with. They upgraded our database cluster without any downtime during peak operating hours.", tag: "Database Upgrades", rating: 5, avatarColor: "#0284C7" },
  { id: 47, name: "Scarlett King", role: "Head of Engineering, BioGenetics", text: "Devopstrio brings passion and precision to every project. Their 24/7 support gives our team the confidence to innovate rapidly.", tag: "Rapid Innovation", rating: 5, avatarColor: "#E11D48" },
  { id: 48, name: "Wyatt Reed", role: "VP Technology, OmniChannel", text: "Superb communication, rapid ticket resolution, and proactive architectural guidance. Devopstrio is a premier tech partner.", tag: "Architecture Advisory", rating: 5, avatarColor: "#059669" },
  { id: 49, name: "Hazel Adams", role: "Chief Operating Officer, Enterprise Cloud", text: "We've worked with many vendors, but Devopstrio stands out for their dedication, technical depth, and friendly approach.", tag: "Dedicated Partnership", rating: 5, avatarColor: "#2563EB" },
  { id: 50, name: "Julian Vance", role: "Head of Infrastructure, NextFin", text: "50+ stars wouldn't be enough! Devopstrio transformed our entire cloud posture into a high-speed, secure powerhouse.", tag: "Cloud Transformation", rating: 5, avatarColor: "#7C3AED" },
];

export const SupportReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = reviews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto slide every 10s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeSlow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-rose-600/10 rounded-full blur-[160px]" />
      </div>

      {/* Huge Outlined Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-20 md:opacity-30">
        <h2 
          className="text-[140px] sm:text-[220px] md:text-[300px] leading-[0.75] font-black text-transparent tracking-tighter"
          style={{ WebkitTextStroke: "3px rgba(225, 29, 72, 0.4)" }}
        >
          client
        </h2>
        <h2 
          className="text-[140px] sm:text-[220px] md:text-[300px] leading-[0.75] font-black text-transparent tracking-tighter"
          style={{ WebkitTextStroke: "3px rgba(225, 29, 72, 0.4)" }}
        >
          feedback
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
            Loved by Engineering <span className="text-rose-500 font-semibold">Leaders Worldwide</span>
          </h2>
        </div>

        {/* Featured Review Card Carousel */}
        <div 
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-rose-950/40 via-zinc-950 to-zinc-950 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(225,29,72,0.12)] backdrop-blur-xl"
            >
              {/* Overlapping Heart Accent */}
              <div className="absolute -top-6 -right-4 md:-top-8 md:-right-6 w-16 h-16 md:w-20 md:h-20 bg-rose-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 hover:scale-105 transition-transform duration-300">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-white fill-white drop-shadow-md" />
              </div>

              {/* Card Header (Avatar + Info) */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Initial Avatar */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md shrink-0"
                    style={{ backgroundColor: current.avatarColor }}
                  >
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{current.name}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-medium">{current.role}</p>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center gap-2 bg-rose-950/30 px-3.5 py-1.5 rounded-full">
                  <span className="text-xs text-zinc-300 font-semibold">Verified Google Review</span>
                  <Image 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" 
                    alt="Google"
                    width={45}
                    height={15}
                    className="opacity-80 object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-xs text-amber-400 font-bold ml-2">5.0 / 5.0</span>
              </div>

              {/* Feel-Good Review Quote */}
              <p className="text-zinc-200 text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-8">
                &ldquo;{current.text}&rdquo;
              </p>

              {/* Footer Row: Tag + Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
                <span className="px-4 py-1.5 rounded-lg bg-rose-900/30 text-rose-300 text-xs sm:text-sm font-semibold">
                  {current.tag}
                </span>

                {/* Carousel Navigation Controls */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500 font-mono font-bold mr-2">
                    {String(currentIndex + 1).padStart(2, "0")} / {reviews.length}
                  </span>
                  <button 
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-rose-950/40 hover:bg-rose-900/60 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-rose-950/40 hover:bg-rose-900/60 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Continuous Horizontal Ticker Marquee for 50+ Reviews */}
        <div className="mt-20 pt-12 overflow-hidden relative">
          <p className="text-sm sm:text-base font-bold text-zinc-400 uppercase tracking-widest text-center mb-8">
            Live Stream of 50+ Verified Client Feedbacks
          </p>

          <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div 
              className="flex gap-6 shrink-0 py-2 hover:[animation-play-state:paused] cursor-pointer"
              style={{ animation: "marqueeSlow 200s linear infinite" }}
            >
              {[...reviews, ...reviews].map((rev, idx) => (
                <div 
                  key={idx}
                  className="w-96 md:w-[420px] bg-gradient-to-br from-rose-950/35 via-zinc-950/90 to-zinc-950/90 rounded-2xl p-6 shrink-0 flex flex-col justify-between hover:from-rose-950/60 transition-all duration-500 backdrop-blur-md shadow-lg"
                >
                  <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed italic mb-4 line-clamp-3">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-sm pt-3">
                    <div className="flex items-center gap-2.5">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm shrink-0"
                        style={{ backgroundColor: rev.avatarColor }}
                      >
                        {rev.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-white text-sm sm:text-base leading-tight">{rev.name}</span>
                        <span className="text-xs text-rose-400 font-semibold">{rev.tag}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-500/10 px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupportReviews;
