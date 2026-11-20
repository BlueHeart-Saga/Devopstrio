"use client";

import { getSubpageContent } from "@/data/services/subpage-content-registry";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityUseCasesProps {
  capabilitySlug?: string;
  serviceSlug: string;
  capabilityTitle: string;
  overrideTitle?: string;
  overrideSubtitle?: string;
}

interface IndustryUseCase {
  slug: string;
  name: string;
  image: string;
  desc: string;
  bulletsMap: Record<string, string[]>;
}

const industryList: IndustryUseCase[] = [
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    image: "/webp/assets/Industries-page/industries/Banking-and-Finance.webp",
    desc: "Secure, regulatory-compliant solutions for banking, investing, and digital payments.",
    bulletsMap: {
      "ai-modernization": ["Legacy Core Banking Refactoring", "Microservices Boundary Extraction", "Automated Transaction Regression Testing"],
      "ai-data-innovation": ["AI Fraud Detection", "AI Credit Scoring", "Conversational Portfolio Assistants"],
      "cloud-services": ["PCI-DSS Compliant Hosting", "Low-Latency Trading Infrastructure", "Multi-Region Ledger Backups"],
      "devops-automation": ["GitOps Compliance Enforcement", "Automated Security Gate Validation", "Canary Deployment Controls"],
      "cybersecurity": ["Zero-Trust Ledger Access", "Real-Time Threat Telemetry", "Field-Level Account Encryption"],
      "software-development": ["Secure Core APIs", "Wealth Management Portals", "gRPC Transaction Engines"],
      "data-engineering": ["Real-time Fraud Transaction Analytics", "Risk Telemetry Pipelines", "Consolidated Audit Trails"]
    }
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    image: "/webp/assets/Industries-page/industries/Healthcare-and-Life-Sciences.webp",
    desc: "HIPAA-compliant telehealth apps, EHR platforms, and research databases.",
    bulletsMap: {
      "ai-modernization": ["EHR Monolith Decoupling", "FHIR/HL7 Data Pipeline Migration", "HIPAA-Compliant Code Hardening"],
      "ai-data-innovation": ["Clinical Scribes & Summaries", "Genomic Research Accelerations", "Intelligent Patient Ingest Routing"],
      "cloud-services": ["HIPAA-Secure Cloud Vaults", "High-Performance Lab Compute", "High-Availability Clinic Portals"],
      "devops-automation": ["Zero-Downtime Telehealth Updates", "Standardized Host Configurations", "HIPAA Validation Sandboxes"],
      "cybersecurity": ["Patient Record Encryption", "IoT Medical Device Defenses", "Clinical Access Audits"],
      "software-development": ["Telemedicine Video Engines", "Patient Booking Portals", "EHR Sync Microservices"],
      "data-engineering": ["Unified Genomic Data Lakes", "Patient Cohort Reporting", "Clinical Metric Aggregations"]
    }
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    image: "/webp/assets/Industries-page/industries/Retail-and-E-Commerce.webp",
    desc: "Omni-channel engines, high-speed checkouts, and real-time inventory systems.",
    bulletsMap: {
      "ai-modernization": ["Checkout Service Modernisation", "Stateless Inventory Micro-Modules", "Elastic API Gateway Modernisation"],
      "ai-data-innovation": ["Personalized Shopping Feeds", "AI Chat Support Assistants", "Seasonal Demand Forecasts"],
      "cloud-services": ["Peak-Traffic Auto-Scaling", "Distributed Catalog Cache", "Multi-Channel Stock Databases"],
      "devops-automation": ["Checkout Security Testing Gates", "GitOps Promo Page Releases", "API Integration Safety Loops"],
      "cybersecurity": ["Secure Checkout Cryptography", "DDoS Mitigation Rules", "Customer Account Protections"],
      "software-development": ["Next.js Headless Frontends", "Dynamic Cart Engines", "Real-Time Stock Alerts"],
      "data-engineering": ["Real-time Purchase Stream Aggregators", "Customer Behavior Data Lakes", "Supply Chain Dashboards"]
    }
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    image: "/webp/assets/Industries-page/industries/Manufacturing.webp",
    desc: "Industrial IoT integrations, predictive maintenance logs, and smart supply chains.",
    bulletsMap: {
      "ai-modernization": ["SCADA Telemetry Decoupling", "Industrial IoT Protocol Upgrades", "Concurrent Event Streaming Workers"],
      "ai-data-innovation": ["Predictive Machinery Failures", "Defect Detection Vision Networks", "Supply Chain Ingestion Forecasts"],
      "cloud-services": ["IoT Telemetry Cloud Hubs", "Edge Device Control Nodes", "High-Availability Factory Networks"],
      "devops-automation": ["Firmware Deployment Pipelines", "Automated Device Config Checks", "Site Build Automation Tools"],
      "cybersecurity": ["OT Network Segmentation", "Device Certificate Managers", "Factory Gateway Firewalls"],
      "software-development": ["Machinery Dashboard Webapps", "Warehouse Conveyor APIs", "Inventory Ingestion Tools"],
      "data-engineering": ["Real-time Route Cost Analyzers", "Fleet Sensor Ingestion", "Warehouse Load Analytics"]
    }
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    image: "/webp/assets/Industries-page/industries/Telecommunications.webp",
    desc: "Scalable OSS/BSS infrastructures, 5G cloud services, and telecom analytics.",
    bulletsMap: {
      "ai-modernization": ["OSS/BSS Subsystem Refactoring", "Low-Latency Core Routing Upgrades", "Automated Pipeline Compliance"],
      "ai-data-innovation": ["Network Congestion Predictors", "Telecom Customer Churn Analytics", "AI Voice Support Routers"],
      "cloud-services": ["5G Edge Core Compute", "High-Volume Packet Ingest", "OSS/BSS Server Migrations"],
      "devops-automation": ["Network Function Virtualization CD", "Automated Router Config Verification", "Scale Test Automation Labs"],
      "cybersecurity": ["Telecom Traffic Audits", "Core Router Defenses", "Subscriber Access Governance"],
      "software-development": ["Customer Billing Webapps", "5G Telemetry Ingestion APIs", "Service Activation Middleware"],
      "data-engineering": ["Real-time Network Event Streams", "Billing System Warehouses", "Network Ingestion Logs"]
    }
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    image: "/webp/assets/Industries-page/industries/Media-and-Entertainment.webp",
    desc: "High-bandwidth VOD platforms, live broadcasting, and digital assets.",
    bulletsMap: {
      "ai-modernization": ["Video Ingestion Engine Refactoring", "Cloud-Native Asset Modernisation", "Stateless Streaming Microservices"],
      "ai-data-innovation": ["Automatic Video Tagging", "User Content Recommendation", "AI Subtitle Generation"],
      "cloud-services": ["High-Bandwidth Video Pipelines", "Global Edge CDN Clusters", "Dynamic Transcoding Servers"],
      "devops-automation": ["VOD Pipeline Integrations", "Media Server Health Audits", "Autoscaling Test Runs"],
      "cybersecurity": ["Digital Rights Access Restrictors", "High-Traffic DDoS Defenses", "Secure Payment Gateways"],
      "software-development": ["Custom Video Player Clients", "Digital Content Manager Tools", "High-Volume Notification Hubs"],
      "data-engineering": ["Viewer Stream Telemetry", "Ad Campaign Attribution Lakes", "Unified Content Metadata logs"]
    }
  },
  {
    slug: "education",
    name: "Education",
    image: "/webp/assets/Industries-page/industries/Education.webp",
    desc: "LMS environments, remote learning tools, and digital collaboration spaces.",
    bulletsMap: {
      "ai-data-innovation": ["Automated Assignment Graders", "Student Performance Predictors", "Personalized Learning Bots"],
      "cloud-services": ["Virtual Classroom Server Groups", "LMS Scale-Up Rules", "Secure Student File Vaults"],
      "devops-automation": ["LMS Continuous Delivery", "Classroom Server Standardized Configs", "Test Run Gating Loops"],
      "cybersecurity": ["Student Account Safeguards", "Proctored Exam Secure Ports", "LMS Database Security Checks"],
      "software-development": ["LMS Course Dashboards", "Video Chat Classroom Webapps", "Homework Submission Tools"],
      "data-engineering": ["LMS Session Event Streams", "Student Enrollment Analytics", "Resource Utilization Warehouses"]
    }
  },
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    image: "/webp/assets/Industries-page/industries/Government-and-Public-Sector.webp",
    desc: "Citizen portals, cloud modernization, and strict security compliance.",
    bulletsMap: {
      "ai-data-innovation": ["Citizen Document AI Scanners", "Public Data Analysis Models", "Intelligent Support Systems"],
      "cloud-services": ["FedRAMP-Secure Hosting", "Citizen Portal Cloud Deployments", "Agency Database Backups"],
      "devops-automation": ["Agency Compliance Gates", "Infrastructure Deployment Logs", "Validated Test Lab Sandboxes"],
      "cybersecurity": ["Strict Citizen File Encryption", "State-Sponsored Intrusion Guards", "SSO Access Audits"],
      "software-development": ["Citizen Registration Portals", "Public Data Sync APIs", "Agency Dashboard Systems"],
      "data-engineering": ["Public Records Schema Sync", "State Department Data Catalogs", "National Registry Warehouses"]
    }
  }
];

const defaultBullets = ["Regulatory Compliance Checks", "Secure Data Governance", "Infrastructure Audit Trails"];

export function CapabilityUseCases({ 
  serviceSlug, 
  capabilityTitle,
  capabilitySlug,
  overrideTitle,
  overrideSubtitle
}: CapabilityUseCasesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const subpage = capabilitySlug ? getSubpageContent(serviceSlug, capabilitySlug) : undefined;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 370; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="use-cases" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background graphic glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
              {overrideTitle || `How Organizations Use ${capabilityTitle}`}
            </h2>
          </Reveal>
        </div>

        {/* CSS style block to hide scrollbar across all major browsers */}
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

        {/* Carousel Slider Wrapper */}
        <div className="relative w-full">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory scroll-smooth"
            style={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}
          >
            {(subpage?.useCases || industryList).map((item: any, idx: number) => {
              const isCustom = 'focusAreas' in item;
              const industryName = isCustom ? item.industry : item.name;
              const scenarioTitle = isCustom ? item.scenario : item.name;
              const desc = item.desc;
              const bullets = isCustom ? item.focusAreas : (item.bulletsMap[serviceSlug] || defaultBullets);
              const image = item.image;
              const practicalVal = isCustom ? item.practicalValue : undefined;
              const href = isCustom ? `/industries/${item.industry.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : `/industries/${item.slug}`;

              return (
                <div
                  key={idx}
                  className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] bg-[#0b0b0c] border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.12)] transition-all duration-300 relative group self-start"
                >
                  {/* Padded image layout */}
                  <div className="p-3 pb-0">
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 rounded-[16px] border border-white/5">
                      <img src={image}
                        alt={industryName}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 pointer-events-none select-none"
                      loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-rose-500">
                        {industryName}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-rose-500 transition-colors">
                      {scenarioTitle}
                    </h3>

                    {/* <p className="text-xs text-white leading-relaxed font-semibold mb-6">
                      {desc}
                    </p> */}

                    {/* Bullet Focus Areas - Reveal on Hover Only */}
                    {/* Full-sized Card - Content Always Visible (No hover hide) */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4">
                      {desc}
                    </p>
                    <div className="space-y-2.5 pt-3 border-t border-white/5">
                      <span className="text-xs sm:text-sm font-mono tracking-widest text-rose-500 uppercase font-semibold block mb-2">
                        Focus Areas
                      </span>
                      {bullets.slice(0, 3).map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-zinc-100 font-semibold leading-relaxed group-hover:text-white transition-colors">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {practicalVal && (
                      <div className="mt-4 pt-3 border-t border-white/5 text-xs text-zinc-400">
                        <strong className="text-zinc-200">Value:</strong> {practicalVal}
                      </div>
                    )}
                    {/* Card Actions Footer */}
                  <div className="px-6 pb-6 pt-3 mt-auto border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={href}
                      className="text-sm text-rose-500 font-semibold uppercase tracking-wider group-hover:text-rose-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      Learn more <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Arrow Controls (Bottom-Left Placement) */}
        <div className="flex gap-4 mt-8 justify-start relative z-20">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
          >
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
