"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    desc: "Transform business operations with AI solutions, Generative AI, AI agents, machine learning, automation, and intelligent decision-making systems.",
    bgImage: "/assets/wavebg/homepage/core1.png",
    href: "/services/ai",
    features: ["Generative AI Models", "Machine Learning", "AI Agents", "Process Automation"]
  },
  {
    id: "cloud-migration",
    title: "Cloud Engineering",
    desc: "Design, migrate, optimize, and manage cloud environments across AWS, Microsoft Azure, Google Cloud, and hybrid infrastructures.",
    bgImage: "/assets/wavebg/homepage/core2.png",
    href: "/services/cloud",
    features: ["AWS & Azure Migration", "Google Cloud Optimization", "Hybrid Infrastructure", "Cloud Management"]
  },
  {
    id: "devops-iac",
    title: "DevOps & IaC",
    desc: "Accelerate delivery with CI/CD pipelines, Kubernetes, Terraform, automation, platform engineering, and Infrastructure as Code.",
    bgImage: "/assets/wavebg/homepage/core3.png",
    href: "/services/devops",
    features: ["CI/CD Pipelines", "Kubernetes Management", "Terraform & IaC", "Platform Engineering"]
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    desc: "Build enterprise web applications, mobile apps, SaaS platforms, APIs, and digital products tailored to business needs.",
    bgImage: "/assets/wavebg/homepage/core4.png",
    href: "/services/software-development",
    features: ["Enterprise Web Apps", "Mobile Applications", "SaaS Platform Development", "API Integrations"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    desc: "Protect digital assets through security assessments, monitoring, compliance, vulnerability management, SOC services, and proactive support.",
    bgImage: "/assets/wavebg/homepage/core1.png",
    href: "/services/cybersecurity",
    features: ["Security Assessments", "SOC Services", "Vulnerability Management", "Compliance Monitoring"]
  },
  {
    id: "public-sector",
    title: "Enterprise Solutions",
    desc: "Deliver scalable technology solutions for government organizations, public services, enterprises, education, healthcare, and regulated industries.",
    bgImage: "/assets/wavebg/homepage/core2.png",
    href: "/industries",
    features: ["Government IT Solutions", "Regulated Compliance", "Healthcare Tech", "Enterprise Scaling"]
  }
];

const outcomes = [
  "Faster Time-to-Market",
  "Reduced Infrastructure Costs",
  "Enhanced Security & Compliance",
  "Improved Operational Efficiency",
  "Scalable Cloud Architecture",
  "Future-Ready Digital Products"
];

const tags = [
  "Artificial Intelligence", "Generative AI", "AI Agents", "Cloud Migration",
  "AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform",
  "DevOps", "Platform Engineering", "Cybersecurity", "SOC Operations",
  "Data Engineering", "Analytics", "Web Development", "Mobile Development",
  "SaaS Platforms", "Digital Transformation", "Managed Services"
];

export function CoreServices() {
  const [activeId, setActiveId] = useState(services[0].id);
  const activeService = services.find(s => s.id === activeId) || services[0];

  return (
    <section className="w-full pt-24 md:pt-36 pb-16 md:pb-20 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden" id="capabilities">

      {/* Background ambient red glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.04),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="mb-20 max-w-4xl">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-rose-500 mb-6 block">
              WHAT WE DO BEST
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-8 text-white">
              Our core capabilities
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-bold leading-relaxed">
              Helping organizations innovate, modernize, secure, and scale through AI-powered technology solutions.
            </p>
          </div>
        </Reveal>

        {/* Huge Text Tabs + Visual Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.85fr] gap-12 lg:gap-20 items-start mb-16 lg:mb-24">

          {/* Left Side: Massive Navigation List */}
          <div className="flex flex-col gap-3 md:gap-4">
            {services.map((service) => {
              const isActive = activeId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`text-left text-2xl md:text-3xl lg:text-[34px] tracking-tight font-bold transition-all duration-300 ${isActive ? "text-white" : "text-zinc-600 hover:text-zinc-400"
                    }`}
                >
                  {service.title}
                </button>
              );
            })}

            <a
              href="/services"
              className="mt-8 text-white text-base md:text-lg font-medium tracking-wide flex items-center gap-2 border-b border-white pb-1 w-fit hover:text-rose-400 hover:border-rose-400 transition-colors"
            >
              All capabilities <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Side: Detailed Card */}
          <div className="relative w-full min-h-[350px] md:min-h-[420px] lg:min-h-[460px] rounded-3xl overflow-hidden bg-zinc-950 p-8 md:p-14 border border-zinc-800/60 shadow-2xl flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                {/* Wave Background Image */}
                <img
                  src={activeService.bgImage}
                  alt={activeService.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen pointer-events-none"
                />
                {/* Dark gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent pointer-events-none" />
                {/* Red Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.15),transparent_60%)] pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id + "-content"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative z-10 w-full"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {activeService.title}
                </h3>
                <p className="text-zinc-300 text-base md:text-[17px] leading-[1.7] font-bold mb-8 max-w-lg">
                  {activeService.desc}
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {activeService.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm md:text-[15px] font-bold">
                      <CheckCircle2 size={18} className="text-rose-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={activeService.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-wider"
                >
                  Explore Service <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>



        {/* SEO Text Section */}
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-0">
            <h3 className="text-2xl font-bold text-white mb-6">
              Technology Expertise Across the Entire Digital Lifecycle
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed font-bold">
              From strategy and architecture to development, deployment, and ongoing optimization, Devopstrio delivers end-to-end technology services that help organizations innovate faster, operate securely, and scale confidently in a rapidly evolving digital world.
            </p>
          </div>
        </Reveal>

      </div>



    </section>
  );
}
