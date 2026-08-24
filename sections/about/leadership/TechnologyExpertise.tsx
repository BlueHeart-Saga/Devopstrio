"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "cloud",
    label: "Cloud Platforms",
    tools: [
      { name: "Microsoft Azure", badge: "Primary", color: "blue", iconPath: "/assets/Home-page/Techtools/MSAzure.svg" },
      { name: "Amazon Web Services", badge: "Primary", color: "orange", iconPath: "/assets/Home-page/Techtools/aws-color.svg" },
      { name: "Google Cloud Platform", badge: "Primary", color: "green", iconPath: "/assets/Home-page/Techtools/google-color.svg" },
      { name: "Oracle Cloud", badge: "Partner", color: "red", iconPath: "/assets/Home-page/Techtools/Oracle.svg" },
      { name: "Cloudflare", badge: "CDN & Edge", color: "orange", iconPath: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg" },
      { name: "Heroku Platform", badge: "PaaS", color: "violet", iconPath: "/assets/Tech-icons/heroku-logo-svg_svgstack_com_28481780931945.svg" },
    ],
  },
  {
    id: "platform",
    label: "Engineering Platforms",
    tools: [
      { name: "Docker", badge: "Containers", color: "blue", iconPath: "/assets/Home-page/Techtools/docker.svg" },
      { name: "GitHub Enterprise", badge: "VCS & CI/CD", color: "zinc", iconPath: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg" },
      { name: "GitLab Server", badge: "DevSecOps", color: "orange", iconPath: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg" },
      { name: "Linux OS", badge: "Kernel Core", color: "yellow", iconPath: "/assets/Tech-icons/linux-logo_svgstack_com_28711780931364.svg" },
      { name: "RedHat Enterprise", badge: "Server OS", color: "red", iconPath: "/assets/Tech-icons/redhat-logo_svgstack_com_29191780931481.svg" },
      { name: "Ubuntu Server", badge: "Server OS", color: "orange", iconPath: "/assets/Tech-icons/ubuntu-logo_svgstack_com_31491780931235.svg" },
      { name: "GitHub Copilot", badge: "AI Coding", color: "blue", iconPath: "/assets/Tech-icons/github-copilot-logo_svgstack_com_28101780931046.svg" },
      { name: "Jira Software", badge: "Management", color: "blue", iconPath: "/assets/Tech-icons/jira-logo_svgstack_com_28621780931167.svg" },
    ],
  },
  {
    id: "dev",
    label: "Development & Data",
    tools: [
      { name: "React", badge: "Frontend", color: "blue", iconPath: "/assets/Home-page/Techtools/React.svg" },
      { name: "Next.js", badge: "Frontend", color: "zinc", iconPath: "/assets/Home-page/Techtools/nextjs.svg" },
      { name: "TypeScript", badge: "Language", color: "blue", iconPath: "/assets/Home-page/Techtools/typescript.svg" },
      { name: "Node.js", badge: "Backend", color: "green", iconPath: "/assets/Home-page/Techtools/Node.svg" },
      { name: "Python", badge: "AI & Scripting", color: "yellow", iconPath: "/assets/Home-page/Techtools/python.svg" },
      { name: "Go Lang", badge: "Backend", color: "blue", iconPath: "/assets/Home-page/Techtools/GO.svg" },
      { name: "Java Platform", badge: "Enterprise", color: "red", iconPath: "/assets/Home-page/Techtools/java-colored.svg" },
      { name: "PostgreSQL", badge: "Database", color: "blue", iconPath: "/assets/Home-page/Techtools/postgre.svg" },
      { name: "MySQL", badge: "Database", color: "blue", iconPath: "/assets/Home-page/Techtools/MySQL.svg" },
      { name: "MongoDB", badge: "Database", color: "green", iconPath: "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg" },
      { name: "Redis Cache", badge: "Database", color: "red", iconPath: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" },
      { name: "Tailwind CSS", badge: "Styling", color: "teal", iconPath: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg" },
    ],
  },
];

const badgeColors: Record<string, string> = {
  blue:   "text-blue-400 bg-blue-500/10 border-blue-500/25",
  orange: "text-orange-400 bg-orange-500/10 border-orange-500/25",
  green:  "text-green-400 bg-green-500/10 border-green-500/25",
  red:    "text-rose-400 bg-rose-500/10 border-rose-500/25",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/25",
  yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/25",
  zinc:   "text-zinc-400 bg-zinc-800/40 border-zinc-700/30",
  teal:   "text-teal-400 bg-teal-500/10 border-teal-500/25",
};

const scrollingCloudTools = [
  { name: "Microsoft Azure", iconPath: "/assets/Home-page/Techtools/MSAzure.svg" },
  { name: "Amazon Web Services", iconPath: "/assets/Home-page/Techtools/aws-color.svg" },
  { name: "Google Cloud", iconPath: "/assets/Home-page/Techtools/google-color.svg" },
  { name: "Oracle Cloud", iconPath: "/assets/Home-page/Techtools/Oracle.svg" },
  { name: "Cloudflare", iconPath: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg" },
  { name: "Docker", iconPath: "/assets/Home-page/Techtools/docker.svg" },
  { name: "GitHub", iconPath: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg" },
  { name: "GitLab", iconPath: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg" },
  { name: "Linux", iconPath: "/assets/Tech-icons/linux-logo_svgstack_com_28711780931364.svg" },
  { name: "RedHat", iconPath: "/assets/Tech-icons/redhat-logo_svgstack_com_29191780931481.svg" },
  { name: "Heroku", iconPath: "/assets/Tech-icons/heroku-logo-svg_svgstack_com_28481780931945.svg" },
  { name: "Copilot", iconPath: "/assets/Tech-icons/github-copilot-logo_svgstack_com_28101780931046.svg" },
];

const scrollingDevTools = [
  { name: "React", iconPath: "/assets/Home-page/Techtools/React.svg" },
  { name: "Next.js", iconPath: "/assets/Home-page/Techtools/nextjs.svg" },
  { name: "TypeScript", iconPath: "/assets/Home-page/Techtools/typescript.svg" },
  { name: "Node.js", iconPath: "/assets/Home-page/Techtools/Node.svg" },
  { name: "Python", iconPath: "/assets/Home-page/Techtools/python.svg" },
  { name: "Go Lang", iconPath: "/assets/Home-page/Techtools/GO.svg" },
  { name: "Java", iconPath: "/assets/Home-page/Techtools/java-colored.svg" },
  { name: "PostgreSQL", iconPath: "/assets/Home-page/Techtools/postgre.svg" },
  { name: "MySQL", iconPath: "/assets/Home-page/Techtools/MySQL.svg" },
  { name: "MongoDB", iconPath: "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg" },
  { name: "Redis", iconPath: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" },
  { name: "Tailwind CSS", iconPath: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg" },
];

import Link from "next/link";

export const TechnologyExpertise = () => {
  const [active, setActive] = useState("cloud");
  const current = categories.find(c => c.id === active)!;

  return (
    <section className="py-24 bg-[#030303] border-t border-zinc-900 relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scroll-left 35s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scroll-right 35s linear infinite;
        }
        .scroll-container:hover .animate-scroll-left,
        .scroll-container:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Background ambient light */}
      <div className="absolute -left-20 top-1/3 w-80 h-80 rounded-full bg-rose-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-1/3 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            Technology Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            The Stack We <span className="text-rose-500">Master</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-550 text-sm md:text-base max-w-xl mx-auto font-bold"
          >
            Hover over any category to view our core toolsets or check out our <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud services</Link> and <Link href="/services/devops-automation" className="text-rose-500 hover:underline">DevOps automation solutions</Link>.
          </motion.p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold border transition-all duration-300 ${
                active === cat.id
                  ? "bg-red-500/10 border-red-500/40 text-white shadow-[0_0_15px_rgba(255,23,68,0.15)]"
                  : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:border-zinc-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tool grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
          >
            {current.tools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.4 }}
                className="group relative flex flex-col items-center justify-center gap-2.5 p-4 bg-zinc-900/30 backdrop-blur-md border border-zinc-800/40 rounded-xl text-center transition-all duration-500 hover:-translate-y-0.5 shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(244,63,94,0.08)] hover:border-rose-500/30 cursor-pointer min-h-[110px]"
              >
                <div className="w-9 h-9 flex items-center justify-center transition-all duration-500 relative overflow-hidden">
                  <img src={tool.iconPath}
                    alt={tool.name}
                    className="w-6.5 h-6.5 object-contain opacity-100 filter brightness-110 contrast-110 transition-all duration-500 group-hover:scale-110"
                  loading="lazy" />
                </div>

                <div className="relative z-10">
                  <p className="text-zinc-200 text-[11px] font-bold leading-tight group-hover:text-rose-500 transition-colors">
                    {tool.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Premium Double Scrolling Ticker Section */}
        <div className="border-t border-zinc-900/60 pt-16 mt-8 relative">
          <div className="text-center mb-8">
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase font-bold block mb-2">
              Continuous Integration Ecosystem
            </span>
            <h3 className="text-lg md:text-xl font-bold text-zinc-350">
              Enterprise Tooling Mesh
            </h3>
          </div>

          <div className="scroll-container relative flex flex-col gap-4 overflow-hidden w-full py-4 pointer-events-auto">
            {/* Left/Right Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

            {/* Row 1: Leftward Scroll */}
            <div className="flex overflow-hidden w-full select-none">
              <div className="animate-scroll-left gap-3 flex shrink-0">
                {[...scrollingCloudTools, ...scrollingCloudTools].map((tool, idx) => (
                  <div
                    key={`left-${idx}`}
                    className="group flex items-center gap-3 w-48 h-12 px-3.5 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/40 rounded-md hover:border-rose-500/20 hover:bg-zinc-900/50 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.4)] shrink-0"
                  >
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <img src={tool.iconPath}
                        alt={tool.name}
                        className="w-8 h-8 object-contain opacity-100 filter brightness-110 contrast-110 transition-all duration-300 group-hover:scale-105"
                      loading="lazy" />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-300 group-hover:text-rose-500 transition-colors truncate">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Rightward Scroll */}
            <div className="flex overflow-hidden w-full select-none">
              <div className="animate-scroll-right gap-3 flex shrink-0">
                {[...scrollingDevTools, ...scrollingDevTools].map((tool, idx) => (
                  <div
                    key={`right-${idx}`}
                    className="group flex items-center gap-3 w-48 h-12 px-3.5 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/40 rounded-md hover:border-rose-500/20 hover:bg-zinc-900/50 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.4)] shrink-0"
                  >
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <img src={tool.iconPath}
                        alt={tool.name}
                        className="w-8 h-8 object-contain opacity-100 filter brightness-110 contrast-110 transition-all duration-300 group-hover:scale-105"
                      loading="lazy" />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-300 group-hover:text-rose-500 transition-colors truncate">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
