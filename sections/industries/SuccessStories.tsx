"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface SuccessStoryItem {
  company: string;
  industry: string;
  achievement: string;
  summary: string;
  image: string;
  link: string;
  metric: string;
}

const successStories: SuccessStoryItem[] = [
  {
    company: "Apex Clearing Bank",
    industry: "Banking & Finance",
    achievement: "Mainframe Modernization & Low-Latency Ledgers",
    summary: "Re-engineered legacy transactional mainframes into distributed multi-region databases serving 45K tx/sec.",
    image: "/webp/assets/Industries-page/case-studies/2.webp",
    link: "/industries/banking-finance#case-study",
    metric: "45K Tx/sec · 99.999% Uptime"
  },
  {
    company: "Novis Diagnostics",
    industry: "Healthcare & Life Sciences",
    achievement: "HIPAA-Compliant Remote Patient Monitoring",
    summary: "Constructed secure streaming telemetry gateways and automated EHR ingestion for 2M+ active patient monitors.",
    image: "/webp/assets/Industries-page/case-studies/3.webp",
    link: "/industries/healthcare-life-sciences#case-study",
    metric: "Zero Leak · SOC-2 Type II"
  },
  {
    company: "Horizon Retailers",
    industry: "Retail & E-Commerce",
    achievement: "Black Friday Concurrency Scaling",
    summary: "Built Karpenter Kubernetes autoscaling with multi-CDN dynamic caching for 100K+ checkout bursts.",
    image: "/webp/assets/Industries-page/case-studies/4.webp",
    link: "/industries/retail-ecommerce#case-study",
    metric: "100K Carts/s · 0ms Drop"
  },
  {
    company: "Global Telecom",
    industry: "Telecommunications",
    achievement: "5G Edge Telemetry & Zero-Downtime Migration",
    summary: "Modernized petabyte CDR log pipelines using Apache Flink and distributed microservices with zero service drops.",
    image: "/webp/assets/Industries-page/case-studies/5.webp",
    link: "/industries/telecommunications#case-study",
    metric: "250K CDR/s · 5G Mesh"
  },
  {
    company: "SmartForge IoT",
    industry: "Manufacturing",
    achievement: "Predictive Machine Maintenance & Telemetry",
    summary: "Deployed edge MQTT gateways and automated AI anomaly detectors across automated robotic assembly lines.",
    image: "/webp/assets/Industries-page/case-studies/6.webp",
    link: "/industries/manufacturing#case-study",
    metric: "40% Downtime Drop · 24/7 SCADA"
  },
  {
    company: "EduLearn Portal",
    industry: "Education & EdTech",
    achievement: "Autoscaling Virtual Classrooms",
    summary: "Constructed high-throughput WebRTC live video streaming infrastructure and low-latency student LMS services.",
    image: "/webp/assets/Industries-page/case-studies/7.webp",
    link: "/industries/education#case-study",
    metric: "500K Students · <100ms Ping"
  },
  {
    company: "Public Safety Net",
    industry: "Government & Public Sector",
    achievement: "FedRAMP High-Availability Gov-Cloud",
    summary: "Migrated state database records to sovereign air-gapped AWS GovCloud with automated zero-trust authorization.",
    image: "/webp/assets/Industries-page/case-studies/8.webp",
    link: "/industries/government-public-sector#case-study",
    metric: "100% FedRAMP · 0 Data Loss"
  },
  {
    company: "MediaFlow CDN",
    industry: "Media & Entertainment",
    achievement: "Edge Video Delivery & Low-Latency Transcoding",
    summary: "Constructed global multi-CDN caching with dynamic HLS transcoding for continuous 4K live sports events.",
    image: "/webp/assets/Industries-page/case-studies/9.webp",
    link: "/industries/media-entertainment#case-study",
    metric: "10M+ Streamers · 40% Cost Cut"
  },
  {
    company: "PaySafe Integrations",
    industry: "Fintech & Payments",
    achievement: "Automated Real-Time Fraud Filtering",
    summary: "Integrated Kafka event streams with ML XGBoost classifiers evaluating card swipes in a tight 35ms window.",
    image: "/webp/assets/Industries-page/case-studies/10.webp",
    link: "/industries/banking-finance#case-study",
    metric: "35ms Latency · 99.4% Catch"
  },
  {
    company: "Aerotech Logistics",
    industry: "Supply Chain & Logistics",
    achievement: "Autonomous Fleet Routing & Telemetry",
    summary: "Constructed real-time routing engines with automated microservice failover and telemetry sync across 14 hubs.",
    image: "/webp/assets/Industries-page/case-studies/1.webp",
    link: "/industries/manufacturing#case-study",
    metric: "18% Fuel Savings · 24/7 SRE"
  }
];

export function SuccessStories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="success" className="w-full pt-6 pb-14 md:pt-8 md:pb-18 bg-[#030303] relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      {/* Hide Scrollbar Style Block */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .hide-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-left">

        {/* Section Header with Navigation Arrow Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 mb-2 block font-mono">
              PROVEN ENTERPRISE OUTCOMES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
              Featured client <span className="text-rose-500 font-semibold">success stories</span>
            </h2>
          </Reveal>

          {/* Navigation controls + All Case Studies Link */}
          <Reveal className="flex items-center gap-3">
            <Link
              href="/marketing/case-studies"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white border border-white/10 hover:border-rose-500/60 bg-[#0b0b0c] px-4 py-2.5 rounded-full transition-all duration-300 mr-2"
            >
              All Case Studies <ArrowUpRight size={14} className="text-rose-400" />
            </Link>
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-white/10 bg-[#0b0b0c] hover:bg-rose-600 hover:border-rose-600 flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-white/10 bg-[#0b0b0c] hover:bg-rose-600 hover:border-rose-600 flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-300"
            >
              <ArrowRight size={16} />
            </button>
          </Reveal>
        </div>

        {/* Horizontal Slider List (Interactive Case Study Cards with Direct Links) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 pt-4 snap-x snap-mandatory relative"
        >
          {successStories.map((story, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="flex-shrink-0 snap-start">
              <Link
                href={story.link}
                className="group block w-[300px] sm:w-[340px] bg-[#0b0b0c] border border-white/10 rounded-[24px] p-5 hover:border-rose-500/40 hover:shadow-[0_16px_40px_rgba(244,63,94,0.15)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full cursor-pointer"
              >
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Flush Image Container */}
                    <div className="relative w-full aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden mb-4 group-hover:border-rose-500/30 transition-colors duration-300 bg-zinc-900">
                      <img
                        src={story.image}
                        alt={story.achievement}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                        {story.industry}
                      </div>
                    </div>

                    {/* Company */}
                    <span className="text-xs text-zinc-400 font-mono tracking-wide uppercase block mb-1">
                      {story.company}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-rose-400 transition-colors duration-300 font-sans mb-2">
                      {story.achievement}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                      {story.summary}
                    </p>
                  </div>

                  {/* Simple CTA Footer Link */}
                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-zinc-400 group-hover:text-white transition-colors duration-300">
                    <span className="text-xs font-mono font-semibold text-rose-400/90">
                      {story.metric}
                    </span>
                    <span className="text-xs sm:text-sm font-bold flex items-center gap-1.5 text-rose-400 group-hover:text-rose-300 transition-colors">
                      Read Story <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SuccessStories;
