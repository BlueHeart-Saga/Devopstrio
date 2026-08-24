"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyItem {
  title: string;
  desc: React.ReactNode;
  metrics: Metric[];
  highlights: string[];
  image?: string;
}

interface IndustryCaseStudyProps {
  caseStudyTitle: string;
  caseStudyDesc: React.ReactNode;
  metrics: Metric[];
  caseStudyHighlights: string[];
}

export function IndustryCaseStudy({
  caseStudyTitle,
  caseStudyDesc,
  metrics,
  caseStudyHighlights
}: IndustryCaseStudyProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  // Define 9 high-quality DevOps case study slides using case-studies images 2.png through 10.png
  const defaultSlides: CaseStudyItem[] = [
    {
      title: "Global High-Frequency Ledger Migrations",
      desc: <>Reconstructed banking mainframe ledgers into low-latency <Link href="/services/cloud-services" className="text-rose-500 hover:underline">distributed databases</Link>, serving 45,000 requests per second with high consistency.</>,
      metrics: [
        { value: "45K/s", label: "Tx Throughput" },
        { value: "99.999%", label: "System Uptime" },
        { value: "12ms", label: "Latency Ceiling" }
      ],
      highlights: [
        "Zero ledger inconsistencies over 12 months.",
        "Built automated data reconciliation pipelines.",
        "Configured multi-region active-active clusters."
      ],
      image: "/assets/Industries-page/case-studies/2.png"
    },
    {
      title: "Automated SOC-2 Security Audits",
      desc: <>Constructed real-time drift detection agents that scan configurations against <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">compliance rules</Link> hourly to secure <Link href="/services/devops-automation" className="text-rose-500 hover:underline">staging loops</Link>.</>,
      metrics: [
        { value: "100%", label: "SOC-2 Checked" },
        { value: "< 1hr", label: "Drift Alert Time" },
        { value: "94%", label: "Manual Effort Drop" }
      ],
      highlights: [
        "Continuous telemetry log processing.",
        "Automated IAM policy validation rules.",
        "Self-healing security group policies."
      ],
      image: "/assets/Industries-page/case-studies/3.png"
    },
    {
      title: "Multi-Region Disaster Protection",
      desc: <>Deployed cross-continent <Link href="/services/cloud-services" className="text-rose-500 hover:underline">Kubernetes</Link> and <Link href="/services/devops-automation" className="text-rose-500 hover:underline">state synchronization</Link> systems to handle severe cloud network cuts and power grids.</>,
      metrics: [
        { value: "< 5s", label: "Failover Target" },
        { value: "Zero", label: "Data Loss (RPO)" },
        { value: "100%", label: "Tested Success" }
      ],
      highlights: [
        "Continuous replication block devices.",
        "Automated DNS failover systems.",
        "Chaos monkey stress-test confirmed."
      ],
      image: "/assets/Industries-page/case-studies/4.png"
    },
    {
      title: "Cloud Cost Optimization Initiative",
      desc: <>Replaced redundant compute pools with <Link href="/services/cloud-services" className="text-rose-500 hover:underline">serverless scaling</Link> and optimized database cache nodes under private VPCs.</>,
      metrics: [
        { value: "42%", label: "Hosting Cost Drop" },
        { value: "$1.2M", label: "Annualized Saving" },
        { value: "1.4x", label: "Speed Multiplier" }
      ],
      highlights: [
        "Intelligent database sleep profiles.",
        "Auto-scaling Kubernetes execution nodes.",
        "Real-time cost telemetry alerts."
      ],
      image: "/assets/Industries-page/case-studies/5.png"
    },
    {
      title: "Generative AI Platform Scale",
      desc: <>Constructed GPU clustering pipelines and <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">vector db indexing</Link> frameworks to host <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">LLM-driven chat tools</Link>.</>,
      metrics: [
        { value: "24M", label: "Daily Queries" },
        { value: "35ms", label: "Model Latency" },
        { value: "99.9%", label: "API Availability" }
      ],
      highlights: [
        "Low-latency model caching pipelines.",
        "Distributed GPU scheduling rules.",
        "Secure enterprise tenant isolation."
      ],
      image: "/assets/Industries-page/case-studies/6.png"
    },
    {
      title: "GitOps CD Continuous Deployments",
      desc: <>Implemented unified <Link href="/services/devops-automation" className="text-rose-500 hover:underline">ArgoCD controllers</Link> managing 400 <Link href="/services/cloud-services" className="text-rose-500 hover:underline">microservices</Link> across staging and prod sites.</>,
      metrics: [
        { value: "15,000+", label: "Monthly Builds" },
        { value: "4.8m", label: "Deploy Time" },
        { value: "0.01%", label: "Rollback Rate" }
      ],
      highlights: [
        "Declarative infrastructure state files.",
        "Container validation scans on merge.",
        "Automated canary release testing."
      ],
      image: "/assets/Industries-page/case-studies/7.png"
    },
    {
      title: "24/7 SRE Telemetry & Monitoring",
      desc: <>Configured unified Prometheus and <Link href="/services/devops-automation" className="text-rose-500 hover:underline">OpenTelemetry</Link> agents collecting system health metrics from 12 edge centers.</>,
      metrics: [
        { value: "1.2B", label: "Daily Metrics" },
        { value: "< 2s", label: "Alert Notification" },
        { value: "85%", label: "Auto-Remediation" }
      ],
      highlights: [
        "Synthetic end-user scenario tests.",
        "Slack/PagerDuty automated escalations.",
        "Machine learning anomaly detection."
      ],
      image: "/assets/Industries-page/case-studies/8.png"
    },
    {
      title: "Microservices API Mesh Implementation",
      desc: <>Migrated legacy monolith backbones to high-performance <Link href="/services/cloud-services" className="text-rose-500 hover:underline">Istio service meshes</Link> with <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">mutual TLS</Link>.</>,
      metrics: [
        { value: "400+", label: "Connected Nodes" },
        { value: "100%", label: "Encrypted Traffic" },
        { value: "18%", label: "CPU Usage Decline" }
      ],
      highlights: [
        "Automated mutual TLS certificates.",
        "Granular route policy rules.",
        "Real-time traffic trace mappings."
      ],
      image: "/assets/Industries-page/case-studies/9.png"
    },
    {
      title: "Zero-Trust Network Perimeter",
      desc: <>Architected modern boundary defenses using cloud-native firewalls, single sign-on hooks, and <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">network isolation</Link>.</>,
      metrics: [
        { value: "Zero", label: "Boundary Penetration" },
        { value: "100%", label: "Endpoint Checked" },
        { value: "60%", label: "Login Latency Drop" }
      ],
      highlights: [
        "Identity-aware access proxies.",
        "Dynamic firewall rule evaluations.",
        "Continuous device health verification."
      ],
      image: "/assets/Industries-page/case-studies/10.png"
    }
  ];

  // Merge the dynamically provided page case study as Slide 0 (using image 1.png), followed by the default slides
  const slides: CaseStudyItem[] = [
    {
      title: caseStudyTitle,
      desc: caseStudyDesc,
      metrics: metrics,
      highlights: caseStudyHighlights,
      image: "/assets/Industries-page/case-studies/1.png"
    },
    ...defaultSlides
  ];

  const totalSlides = slides.length;

  const changeSlide = (newIdx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIdx(newIdx);
      setAnimating(false);
    }, 250);
  };

  const handleNext = () => {
    resetTimer();
    changeSlide((activeIdx + 1) % totalSlides);
  };

  const handlePrev = () => {
    resetTimer();
    changeSlide((activeIdx - 1 + totalSlides) % totalSlides);
  };

  const resetTimer = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
    autoPlayTimer.current = setInterval(() => {
      changeSlide((activeIdx + 1) % totalSlides);
    }, 7000);
  };

  // Set up auto-play cycles
  useEffect(() => {
    autoPlayTimer.current = setInterval(() => {
      changeSlide((activeIdx + 1) % totalSlides);
    }, 7000);

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [activeIdx, totalSlides]);

  const currentSlide = slides[activeIdx];
  const displayImage = currentSlide.image || "/assets/Industries-page/case-studies/1.png";

  return (
    <section id="case-study" className="w-full py-20 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">

        {/* Section Header */}
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
            Proven <span className="text-[#E11D48] font-semibold">milestone achievements</span>
          </h2>
        </Reveal>

        {/* Big Card Slider Container - Compact padding p-2 (8px) on mobile, p-6 on desktop */}
        <div className="relative w-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-1 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.4)]">

          {/* Decorative ambient glow inside card */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#E11D48]/5 to-transparent rounded-full blur-[80px] pointer-events-none z-0" />

          {/* Active Card Body Wrapper */}
          <div className={`transition-all duration-300 ${animating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"} grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center relative z-10 p-2 sm:p-3`}>

            {/* Left Panel: Title, Description, Highlights, Metrics */}
            <div>
              <span className="text-xs font-mono tracking-widest text-[#E11D48] uppercase font-semibold block mb-2">
                Case Study {(activeIdx + 1).toString().padStart(2, "0")} / {totalSlides.toString().padStart(2, "0")}
              </span>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight max-w-xl">
                {currentSlide.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal mb-4 max-w-xl">
                {currentSlide.desc}
              </p>

              {/* Highlights List (re-positioned to the left side in a clean grid) */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-xs sm:text-sm text-zinc-300 font-medium max-w-xl">
                {currentSlide.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5 max-w-xl">
                {currentSlide.metrics.map((m, i) => (
                  <div key={i}>
                    <span className="block text-xl md:text-2xl font-black text-white font-mono tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel: Project Showcase Image */}
            <div className="relative w-full aspect-[16/11] rounded-[16px] border border-white/5 p-0.5 bg-zinc-950 overflow-hidden group/img">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E11D48]/10 via-transparent to-transparent pointer-events-none z-10" />
              <img
                src={displayImage}
                alt={currentSlide.title}
                className="w-full h-full object-cover rounded-[14px] transition-transform duration-700 group-hover/img:scale-[1.02] select-none pointer-events-none"
              />
            </div>

          </div>

          {/* Slider Controls Footer */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center relative z-10 px-3 pb-2">

            {/* Indicators Dots */}
            <div className="flex gap-2 items-center">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => { resetTimer(); changeSlide(idx); }}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${activeIdx === idx ? "w-6 bg-[#E11D48]" : "w-2 bg-zinc-800 hover:bg-zinc-700"
                    }`}
                />
              ))}
            </div>

            {/* Left/Right Buttons */}
            <div className="flex gap-3 items-center">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-white/5 bg-[#0b0b0c] hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full border border-white/5 bg-[#0b0b0c] hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <ArrowUpRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
