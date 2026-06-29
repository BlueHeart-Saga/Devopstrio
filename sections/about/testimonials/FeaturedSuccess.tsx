"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Cloud, Shield, Settings, Server } from "lucide-react";

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
    image: "/assets/About-page/overview/partner/microsoft.png",
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
    image: "/assets/About-page/overview/partner/airhub.png",
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
    image: "/assets/About-page/overview/partner/virgin.png",
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
    image: "/assets/About-page/overview/partner/nhs.png",
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
    image: "/assets/About-page/overview/partner/asda.png",
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
    image: "/assets/About-page/overview/partner/cisco.png",
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
    image: "/assets/About-page/overview/partner/godaddy.png",
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
    image: "/assets/About-page/overview/partner/lenova.png",
  },
  {
    id: "servicenow",
    logo: "/assets/Home-page/partners/servicenow.svg",
    title: "ServiceNow accelerates enterprise workflow automation",
    description: "With a modernized infrastructure foundation, ServiceNow accelerated their deployment cycles by 3×, enabling faster rollout of critical enterprise workflow features.",
    products: [
      { name: "DevOps Automation", icon: <Settings className="w-4 h-4" /> },
      { name: "Platform Engineering", icon: <Server className="w-4 h-4" /> }
    ],
    image: "/assets/About-page/overview/partner/servicenow.png",
  }
];

export const FeaturedSuccess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  return (
    <section className="py-16 bg-[#050505] relative overflow-hidden border-t border-zinc-900">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CUSTOMER SUCCESS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Hear from our <span className="text-rose-500">customers</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            Real stories of transformation, scale, and resilience powered by our robust enterprise solutions.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden mb-6 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-6 md:p-10 flex flex-col justify-between z-10">
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
                      <div className="inline-flex h-12 px-4 items-center justify-center bg-zinc-800/40 border border-zinc-700/50 rounded-xl backdrop-blur-md shadow-lg">
                        <Image 
                          src={activeStory.logo} 
                          alt={`${activeStory.id} logo`} 
                          width={100} 
                          height={32} 
                          className="max-h-7 w-auto object-contain"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-white leading-tight mb-4">
                      {activeStory.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-base leading-relaxed mb-8">
                      {activeStory.description}
                    </p>
                    
                    <div className="mb-8 lg:mb-12">
                      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Products</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeStory.products.map((product, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-md border border-white/10 hover:border-rose-500/30 transition-colors">
                            <span className="text-rose-500 scale-90">{product.icon}</span>
                            <span className="text-sm font-medium text-zinc-300">{product.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div>
                <button className="group inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)]">
                  Read the story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[250px] md:min-h-[350px] lg:min-h-[450px] overflow-hidden rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl m-1.5 lg:m-3">
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
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-zinc-900/20 lg:to-zinc-900/80 rounded-2xl lg:rounded-l-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Logo Tabs */}
        <div className="flex overflow-x-auto bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-2xl hide-scrollbar shadow-2xl">
          {stories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex-1 min-w-[120px] md:min-w-[140px] h-20 md:h-24 flex items-center justify-center relative transition-all duration-300 border-r border-zinc-800/50 last:border-r-0 ${
                activeIndex === idx 
                  ? "bg-white/10" 
                  : "hover:bg-white/5"
              }`}
            >
              <Image 
                src={story.logo} 
                alt={`${story.id} logo`} 
                width={90} 
                height={32} 
                className={`max-h-8 md:max-h-10 w-auto object-contain transition-all duration-300 px-4 ${
                  activeIndex === idx ? "opacity-100 scale-105" : "opacity-40 hover:opacity-100"
                }`}
              />
              {/* Active Tab Indicator */}
              {activeIndex === idx && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-rose-500 rounded-t-full shadow-[0_-2px_10px_rgba(244,63,94,0.3)]" 
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

