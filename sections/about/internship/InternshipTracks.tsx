"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cloud, Cpu, Shield, Database } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const InternshipTracks = () => {
  const tracks = [
    {
      id: "software",
      title: "Software Engineering",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      accent: "text-blue-500",
      bgGlow: "rgba(59,130,246,0.15)",
      image: "/assets/About-page/tech_architecture.png",
      badge: "Full-Stack & Cloud Architecture",
      desc: <>Master modern full-stack development. Build high-performance, responsive web applications and scale secure APIs with our <Link href="/services/software-development" className="text-blue-500 hover:underline">software development</Link> practices.</>,
      techs: ["React.js", "Next.js", "Node.js", "FastAPI", "MongoDB", "PostgreSQL"],
    },
    {
      id: "cloud",
      title: "Cloud Engineering",
      icon: Cloud,
      color: "from-cyan-500 to-teal-500",
      accent: "text-cyan-500",
      bgGlow: "rgba(6,182,212,0.15)",
      image: "/assets/About-page/cloud_servers.png",
      badge: "Cloud Infra & Landing Zones",
      desc: <>Architect enterprise public cloud runtimes. Plan zero-downtime database replications and design secure land zones under our <Link href="/services/cloud-services" className="text-cyan-500 hover:underline">cloud services</Link> division.</>,
      techs: ["Azure", "AWS", "Google Cloud", "Terraform", "Kubernetes"],
    },
    {
      id: "devops",
      title: "DevOps & Automation",
      icon: Cpu,
      color: "from-rose-500 to-pink-500",
      accent: "text-rose-500",
      bgGlow: "rgba(244,63,94,0.15)",
      image: "/assets/About-page/operations_room.png",
      badge: "GitOps & Platform Engineering",
      desc: <>Implement continuous integration and GitOps rollouts. Learn container orchestration, pipelines caching and platform engineering through <Link href="/services/devops-automation" className="text-rose-500 hover:underline">DevOps automation</Link>.</>,
      techs: ["CI/CD", "GitHub Actions", "Azure DevOps", "Docker", "IaC (Terraform)"],
    },
    {
      id: "ai-data",
      title: "AI & Data Engineering",
      icon: Database,
      color: "from-amber-500 to-orange-500",
      accent: "text-amber-500",
      bgGlow: "rgba(245,158,11,0.15)",
      image: "/assets/About-page/ai_dashboard.png",
      badge: "LLMOps & Real-Time Analytics",
      desc: <>Design data pipelines and deploy LLMs in production. Work on LLMOps, vector databases, analytics dashboards and machine learning models under <Link href="/services/ai-data-innovation" className="text-amber-500 hover:underline">AI & data engineering</Link>.</>,
      techs: ["Generative AI", "Machine Learning", "LLMOps", "Data Pipelines", "Analytics", "Vector DBs"],
    },
    {
      id: "security",
      title: "Cybersecurity",
      icon: Shield,
      color: "from-emerald-500 to-green-500",
      accent: "text-emerald-500",
      bgGlow: "rgba(16,185,129,0.15)",
      image: "/assets/About-page/cyber_security.png",
      badge: "Zero-Trust & DevSecOps",
      desc: <>Audit cloud security posture and establish identity perimeters. Work on threat modeling, vulnerability management, and DevSecOps integrations with our <Link href="/services/cybersecurity" className="text-emerald-500 hover:underline">cybersecurity</Link> team.</>,
      techs: ["Cloud Security", "DevSecOps", "Compliance", "Security Operations", "IAM Policies"],
    }
  ];

  const [activeTab, setActiveTab] = useState(tracks[0].id);

  return (
    <section id="program-tracks" className="relative py-24 bg-black overflow-hidden border-t border-zinc-900 font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          {/* Left-to-right arrow PNG pointing to header */}
          <div className="absolute -top-6 sm:-top-8 md:-top-10 left-0 sm:-left-6 md:-left-10 lg:-left-14 z-20 pointer-events-none select-none">
            <img
              src="/assets/components/lefttoright.png"
              alt="Left to right arrow"
              className="w-12 sm:w-16 md:w-20 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.45)]"
            />
          </div>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-4 font-sans">
            Internship Tracks Engineered <br className="hidden sm:block" />
            To{" "}
            <span className="inline-block bg-rose-500 text-black font-extrabold px-3.5 py-0.5 mx-1.5 rounded-xs transform -rotate-3 shadow-[0_4px_20px_rgba(225,29,72,0.45)] align-middle">
              Build
            </span>{" "}
            Your Future
          </h2>
        </div>

        {/* Tab Buttons (Mobile selector & desktop tabs) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto bg-zinc-950/80 p-2 rounded-2xl border border-zinc-900 backdrop-blur">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isActive = activeTab === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTab(track.id)}
                className={`flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${isActive
                    ? "bg-zinc-900 text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-zinc-800"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/30"
                  }`}
              >
                <Icon size={16} className={isActive ? track.accent : "text-zinc-500"} />
                {track.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {tracks.map((track) => {
              if (track.id !== activeTab) return null;
              const Icon = track.icon;
              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 sm:p-10 relative overflow-hidden backdrop-blur items-stretch"
                >
                  {/* Subtle Background Glow */}
                  <div
                    className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-500 opacity-40"
                    style={{ backgroundColor: track.bgGlow }}
                  />

                  {/* Left Column: Icon, Info & Tech Stack */}
                  <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                        {track.title}
                      </h3>
                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                        {track.desc}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">Target Technologies</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {track.techs.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-bold text-white bg-zinc-900 px-3.5 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Track Visual Showcase Image Frame */}
                  <div className="md:col-span-5 relative min-h-[260px] md:min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group/image">
                    <Image
                      src={track.image}
                      alt={track.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                      unoptimized
                    />
                    {/* Multi-layered cinematic gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-90" />
                    
                    {/* Floating bottom track pill & title */}
                    {/* <div className="absolute bottom-4 left-4 right-4 z-20">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/90 bg-black/60 border border-white/15 px-3 py-1 rounded-full backdrop-blur-md inline-block mb-2">
                        {track.badge}
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-tight drop-shadow-md">
                        {track.title}
                      </h4>
                    </div> */}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
