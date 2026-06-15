"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyItem {
  title: string;
  desc: string;
  metrics: Metric[];
  highlights: string[];
  image?: string;
}

interface IndustryCaseStudyProps {
  caseStudyTitle: string;
  caseStudyDesc: string;
  metrics: Metric[];
  caseStudyHighlights: string[];
}

const defaultImages = [
  "/assets/Home-page/arch-design.png",
  "/assets/Home-page/arch-life.png",
  "/assets/Home-page/biz-envisioning.png",
  "/assets/Home-page/biz-life.png",
  "/assets/Home-page/rapid-prototype.png",
  "/assets/Home-page/rapid-life.png",
  "/assets/Home-page/sol-envisioning.png",
  "/assets/Home-page/sol-life.png",
  "/assets/Home-page/innovation-banner.png",
  "/assets/Home-page/mission-bg.png"
];

export function IndustryCaseStudy({
  caseStudyTitle,
  caseStudyDesc,
  metrics,
  caseStudyHighlights
}: IndustryCaseStudyProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  // Define 9 high-quality DevOps case study fallback slides with corresponding images
  const defaultSlides: CaseStudyItem[] = [
    {
      title: "Global High-Frequency Ledger Migrations",
      desc: "Reconstructed banking mainframe ledgers into low-latency distributed databases, serving 45,000 requests per second with high consistency.",
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
      image: "/assets/Home-page/arch-life.png"
    },
    {
      title: "Automated SOC-2 Security Audits",
      desc: "Constructed real-time drift detection agents that scan configurations against compliance rules hourly to secure staging loops.",
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
      image: "/assets/Home-page/sol-life.png"
    },
    {
      title: "Multi-Region Disaster Protection",
      desc: "Deployed cross-continent Kubernetes state synchronization systems to handle severe cloud network cuts and power grids.",
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
      image: "/assets/Home-page/rapid-life.png"
    },
    {
      title: "Cloud Cost Optimization Initiative",
      desc: "Replaced redundant compute pools with serverless scaling and optimized database cache nodes under private VPCs.",
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
      image: "/assets/Home-page/biz-life.png"
    },
    {
      title: "Generative AI Platform Scale",
      desc: "Constructed GPU clustering pipelines and vector db indexing frameworks to host LLM-driven chat tools.",
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
      image: "/assets/Home-page/arch-design.png"
    },
    {
      title: "GitOps CD Continuous Deployments",
      desc: "Implemented unified ArgoCD controllers managing 400 microservices across staging and prod sites.",
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
      image: "/assets/Home-page/sol-envisioning.png"
    },
    {
      title: "24/7 SRE Telemetry & Monitoring",
      desc: "Configured unified Prometheus and OpenTelemetry agents collecting system health metrics from 12 edge centers.",
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
      image: "/assets/Home-page/rapid-prototype.png"
    },
    {
      title: "Microservices API Mesh Implementation",
      desc: "Migrated legacy monolith backbones to high-performance Istio service meshes with mutual TLS.",
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
      image: "/assets/Home-page/biz-envisioning.png"
    },
    {
      title: "Zero-Trust Network Perimeter",
      desc: "Architected modern boundary defenses using cloud-native firewalls, single sign-on hooks, and network isolation.",
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
      image: "/assets/Home-page/innovation-banner.png"
    }
  ];

  // Merge the dynamically provided page case study as Slide 0, followed by the 9 default slides
  const slides: CaseStudyItem[] = [
    {
      title: caseStudyTitle,
      desc: caseStudyDesc,
      metrics: metrics,
      highlights: caseStudyHighlights,
      image: "/assets/Home-page/arch-design.png"
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
  const displayImage = currentSlide.image || defaultImages[activeIdx % defaultImages.length];

  return (
    <section id="case-study" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Case Validation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Proven <span className="text-[#E11D48]">milestone achievements</span>
          </h2>
        </Reveal>

        {/* Big Card Slider Container */}
        <div className="relative w-full bg-[#0b0b0c] border border-white/10 rounded-[32px] p-8 lg:p-16 min-h-[500px] flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Decorative ambient glow inside card */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-[#E11D48]/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

          {/* Active Card Body Wrapper */}
          <div className={`transition-all duration-300 ${animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"} grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center relative z-10`}>
            
            {/* Left Panel: Title, Description, Highlights, Metrics */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#E11D48] uppercase font-bold block mb-4">
                Case Study {(activeIdx + 1).toString().padStart(2, "0")} / {totalSlides.toString().padStart(2, "0")}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight max-w-xl">
                {currentSlide.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed font-semibold mb-8 max-w-xl">
                {currentSlide.desc}
              </p>

              {/* Highlights List (re-positioned to the left side in a clean grid) */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-xs text-zinc-300 font-semibold max-w-xl">
                {currentSlide.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 max-w-xl">
                {currentSlide.metrics.map((m, i) => (
                  <div key={i}>
                    <span className="block text-2xl md:text-3xl font-black text-white font-mono tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mt-1">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel: Project Showcase Image (Double-bordered card layout) */}
            <div className="relative w-full aspect-[4/3] rounded-[24px] border border-white/10 p-0.5 bg-zinc-950 overflow-hidden group/img">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E11D48]/10 via-transparent to-transparent pointer-events-none z-10" />
              <img
                src={displayImage}
                alt={currentSlide.title}
                className="w-full h-full object-cover rounded-[22px] transition-transform duration-700 group-hover/img:scale-[1.03] select-none pointer-events-none"
              />
            </div>

          </div>

          {/* Slider Controls Footer */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-6 justify-between items-center relative z-10">
            
            {/* Indicators Dots */}
            <div className="flex gap-2.5 items-center">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => { resetTimer(); changeSlide(idx); }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIdx === idx ? "w-8 bg-[#E11D48]" : "w-2.5 bg-zinc-800 hover:bg-zinc-700"
                  }`}
                />
              ))}
            </div>

            {/* Left/Right Buttons */}
            <div className="flex gap-4 items-center">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-11 h-11 rounded-full border border-white/5 bg-[#0b0b0c] hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-11 h-11 rounded-full border border-white/5 bg-[#0b0b0c] hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
