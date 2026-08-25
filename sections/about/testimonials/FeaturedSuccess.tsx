"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Cloud, Shield, Settings, Server } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    id: "microsoft",
    logo: "/assets/Home-page/partners/Microsoft.svg",
    title: "Azure VMware Solution helps Microsoft scale enterprise workloads",
    description: "Microsoft utilized Devopstrio's expertise to migrate complex enterprise applications, achieving unprecedented scale and security while reducing operational overhead by 40%.",
    products: [
      { name: "Azure VMware Solution", icon: <Cloud className="w-4 h-4" /> },
      { name: "Enterprise Cloud", icon: <Server className="w-4 h-4" /> }
    ],
    image: "/webp/assets/About-page/overview/partner/microsoft.webp",
  },
  {
    id: "airbnb",
    logo: "/assets/Home-page/partners/Airbnb.svg",
    title: "Airbnb transforms global infrastructure for high availability",
    description: "By implementing a robust multi-region architecture, Airbnb ensures seamless experiences for millions of users daily with 99.99% uptime during peak seasons.",
    products: [
      { name: "Platform Engineering", icon: <Settings className="w-4 h-4" /> },
      { name: "Global Edge", icon: <Cloud className="w-4 h-4" /> }
    ],
    image: "/webp/assets/About-page/overview/partner/airhub.webp",
  },
  {
    id: "virgin",
    logo: "/assets/Home-page/partners/Virgin.svg",
    title: "Virgin accelerates digital delivery by 3× across global markets",
    description: "Virgin partnered with Devopstrio to modernize their CI/CD pipelines, accelerating feature delivery and creating a unified digital experience.",
    products: [
      { name: "DevOps Automation", icon: <Settings className="w-4 h-4" /> },
      { name: "Cloud Migration", icon: <Cloud className="w-4 h-4" /> }
    ],
    image: "/webp/assets/About-page/overview/partner/virgin.webp",
  },
  {
    id: "nhs",
    logo: "/assets/Home-page/partners/NHS.svg",
    title: "NHS secures patient data while modernizing core services",
    description: "The NHS enhanced its security posture and modernized legacy systems, enabling faster access to critical health data without compromising compliance.",
    products: [
      { name: "Cybersecurity", icon: <Shield className="w-4 h-4" /> },
      { name: "Managed Ops", icon: <Server className="w-4 h-4" /> }
    ],
    image: "/webp/assets/About-page/overview/partner/nhs.webp",
  },
  {
    id: "asda",
    logo: "/assets/Home-page/partners/ASDA.svg",
    title: "ASDA optimizes retail logistics with predictive cloud analytics",
    description: "ASDA leverages advanced cloud infrastructure to run real-time logistics analytics, reducing supply chain delays by 25% and improving customer satisfaction.",
    products: [
      { name: "Cloud Analytics", icon: <Cloud className="w-4 h-4" /> },
      { name: "Data Platform", icon: <Server className="w-4 h-4" /> }
    ],
    image: "/webp/assets/About-page/overview/partner/asda.webp",
  },
  {
    id: "costco",
    logo: "/assets/Home-page/partners/Costco.svg",
    title: "Costco enhances global distribution with smart cloud solutions",
    description: "By implementing a robust, auto-scaling cloud architecture, Costco reduced operational bottlenecks and optimized their supply chain for maximum efficiency during peak seasons.",
    products: [
      { name: "Cloud Architecture", icon: <Cloud className="w-4 h-4" /> },
      { name: "Global Edge", icon: <Server className="w-4 h-4" /> }
    ],
    image: "/webp/assets/About-page/overview/partner/cisco.webp",
  },
  {
    id: "godaddy",
    logo: "/assets/Home-page/partners/godaddy.svg",
    title: "GoDaddy empowers millions with seamless domain management",
    description: "Devopstrio helped GoDaddy modernize their hosting infrastructure, delivering 99.99% uptime and lightning-fast domain provisioning for customers globally.",
    products: [
      { name: "Platform Engineering", icon: <Settings className="w-4 h-4" /> },
      { name: "Managed Ops", icon: <Shield className="w-4 h-4" /> }
    ],
    image: "/webp/assets/About-page/overview/partner/godaddy.webp",
  },
  {
    id: "lenovo",
    logo: "/assets/Home-page/partners/lenovo.svg",
    title: "Lenovo scales AI-driven hardware analytics seamlessly",
    description: "Leveraging custom cloud solutions, Lenovo can now process massive datasets from connected devices in real-time, unlocking powerful insights for hardware optimization.",
    products: [
      { name: "Data Platform", icon: <Server className="w-4 h-4" /> },
      { name: "Cloud Analytics", icon: <Cloud className="w-4 h-4" /> }
    ],
    image: "/webp/assets/About-page/overview/partner/lenova.webp",
  },
  {
    id: "servicenow",
    logo: "/webp/assets/Home-page/partners/servicenow.webp",
    title: "ServiceNow accelerates enterprise workflow automation",
    description: "With a modernized infrastructure foundation, ServiceNow accelerated their deployment cycles by 3×, enabling faster rollout of critical enterprise workflow features.",
    products: [
      { name: "DevOps Automation", icon: <Settings className="w-4 h-4" /> },
      { name: "Platform Engineering", icon: <Server className="w-4 h-4" /> }
    ],
    image: "/webp/assets/About-page/overview/partner/servicenow.webp",
  }
];

export const FeaturedSuccess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden border-t border-zinc-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Centered Semibold Header, Subtitle Removed */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
            Hear From Our <span className="text-rose-600 font-semibold">Customers</span>
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl overflow-hidden mb-6 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 sm:p-12 flex flex-col justify-between z-10">
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStory.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-6">
                      <div className="inline-flex h-12 px-4 items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg">
                        <Image
                          src={activeStory.logo}
                          alt={`${activeStory.id} logo`}
                          width={100}
                          height={32}
                          className="max-h-7 w-auto object-contain"
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-4 font-sans">
                      {activeStory.title}
                    </h3>

                    <p className="text-zinc-200 text-base sm:text-lg leading-relaxed mb-8 font-normal font-sans">
                      {activeStory.description}
                    </p>

                    <div className="mb-8 lg:mb-12">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 block font-mono">Products Used</span>
                      <div className="flex flex-wrap gap-2.5">
                        {activeStory.products.map((product, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-zinc-900 px-3.5 py-1.5 rounded-lg border border-zinc-800">
                            <span className="text-rose-500">{product.icon}</span>
                            <span className="text-sm font-semibold text-zinc-200 font-sans">{product.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div>
                <button className="group inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-7 py-3.5 rounded-xl text-base font-bold transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.3)] font-sans">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl m-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeStory.image}
                    alt={activeStory.title}
                    fill
                    className="object-cover rounded-2xl lg:rounded-l-none"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Logo Tabs */}
        <div className="flex overflow-x-auto bg-zinc-950/90 border border-zinc-800 rounded-2xl hide-scrollbar shadow-2xl">
          {stories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex-1 min-w-[120px] md:min-w-[140px] h-20 md:h-24 flex items-center justify-center relative transition-all duration-300 border-r border-zinc-800/50 last:border-r-0 ${activeIndex === idx
                  ? "bg-zinc-900"
                  : "hover:bg-zinc-900/50"
                }`}
            >
              <Image
                src={story.logo}
                alt={`${story.id} logo`}
                width={90}
                height={32}
                className={`max-h-8 md:max-h-10 w-auto object-contain transition-all duration-300 px-4 ${activeIndex === idx ? "opacity-100 scale-105" : "opacity-40 hover:opacity-100"
                  }`}
              />
              {activeIndex === idx && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-rose-600 rounded-t-full shadow-[0_-2px_10px_rgba(225,29,72,0.4)]"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
