"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Users, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OfficeDetail {
  id: string;
  country: string;
  flag: string;
  officeName: string;
  role: string;
  address: string;
  talentBase: string;
  mapQuery: string;
}

const locations: OfficeDetail[] = [
  {
    id: "london-hq",
    country: "United Kingdom",
    flag: "🇬🇧",
    officeName: "London HQ",
    role: "Global Headquarters",
    address: "128 City Road, London, United Kingdom, EC1V 2NX",
    talentBase: "SaaS Strategy, Program Orchestration, Governance Audits",
    mapQuery: "128 City Road, London, EC1V 2NX, United Kingdom"
  },
  {
    id: "london-office",
    country: "United Kingdom",
    flag: "🇬🇧",
    officeName: "London Office",
    role: "Client Experience Centre",
    address: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF",
    talentBase: "Customer Experience, Product Demos, Executive Briefings",
    mapQuery: "167-169 Great Portland Street, London, W1W 5PF, United Kingdom"
  },
  {
    id: "tennessee-office",
    country: "United States",
    flag: "🇺🇸",
    officeName: "Tennessee Office",
    role: "North America Operations",
    address: "522 Aventura Dr, Mt Juliet, Tennessee, 37122 United States",
    talentBase: "Managed Support, Incident Response, Tenant Onboarding",
    mapQuery: "522 Aventura Dr, Mt Juliet, Tennessee, 37122 United States"
  },
  {
    id: "bengaluru-center",
    country: "India",
    flag: "🇮🇳",
    officeName: "Bengaluru Engineering Centre",
    role: "R&D and Software Development",
    address: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
    talentBase: "AI & Data Engineering, LLM Tuning, RAG Architectures",
    mapQuery: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India"
  },
  {
    id: "chennai-hub",
    country: "India",
    flag: "🇮🇳",
    officeName: "Chennai Cloud & SecOps Hub",
    role: "Cloud operations & Security",
    address: "Primus Building, Door No. SP – 7A, Guindy Industrial Estate, Chennai 600032",
    talentBase: "SecOps Monitoring, Multi-Cloud Governance, Secure Gateways",
    mapQuery: "Primus Building, Door No. SP - 7A, Guindy Industrial Estate, Chennai 600032, India"
  },
  {
    id: "thoothukudi-center",
    country: "India",
    flag: "🇮🇳",
    officeName: "Thoothukudi DevOps & Automation Centre",
    role: "CI/CD & Platform Engineering",
    address: "4/367, Rajeev Colony, Pasuvanthanai, 628718 Thoothukudi, Tamilnadu, IN",
    talentBase: "Infrastructure as Code, Kubernetes Deployments, GitOps Loops",
    mapQuery: "Pasuvanthanai, Tamilnadu, India"
  }
];

export function GlobalTalentReach() {
  const [activeTab, setActiveTab] = useState(locations[0].id);
  const currentOffice = locations.find((loc) => loc.id === activeTab) || locations[0];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <Reveal>
            {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GEOGRAPHICAL SCOPE
            </span> */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
              Global Talent <span className="text-rose-500">Reach</span>
            </h2>
            {/* <p className="text-zinc-400 text-sm font-semibold leading-relaxed">
              Connecting professionals across our central offices to build cloud platforms and operate secure release cycles.
            </p> */}
          </Reveal>
        </div>

        {/* Tabs Menu */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 border-b border-zinc-900 pb-6">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveTab(loc.id)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ${activeTab === loc.id
                    ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                    : "bg-zinc-950/60 border border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                  }`}
              >
                <span>{loc.flag}</span>
                <span>{loc.officeName.split(" ")[0]} ({loc.flag})</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Main Grid: Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">

          {/* Left: Location details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-zinc-950/40 border border-white/5 relative overflow-hidden h-full min-h-[420px] shadow-lg backdrop-blur-md">
            {/* Accent vertical line */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />

            <div className="space-y-6">
              <div>
                {/* <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-rose-500 block mb-2 font-bold">
                  Talent Hub Information
                </span> */}
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight uppercase">
                  {currentOffice.officeName}
                </h3>
                <span className="inline-block mt-2 text-[9px] font-mono tracking-widest uppercase bg-rose-500/10 border border-rose-500/20 text-rose-455 px-2.5 py-0.5 rounded font-bold">
                  {currentOffice.role}
                </span>
              </div>

              <div className="space-y-5 border-t border-zinc-900 pt-6">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[10px] font-mono uppercase text-zinc-550 tracking-wider font-bold">Location Address</h5>
                    <p className="text-zinc-300 text-xs md:text-sm font-semibold mt-1 leading-relaxed">
                      {currentOffice.address}
                    </p>
                  </div>
                </div>

                {/* Talent focus */}
                <div className="flex gap-4">
                  <Users className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[10px] font-mono uppercase text-zinc-555 tracking-wider font-bold">Ecosystem Focus</h5>
                    <p className="text-rose-500 text-xs md:text-sm font-bold mt-1 leading-relaxed">
                      {currentOffice.talentBase}
                    </p>
                  </div>
                </div>

                {/* Country */}
                <div className="flex gap-4">
                  <Briefcase className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[10px] font-mono uppercase text-zinc-550 tracking-wider font-bold">Regional Reach</h5>
                    <p className="text-zinc-300 text-xs md:text-sm font-semibold mt-1">
                      {currentOffice.flag} {currentOffice.country} Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-6 mt-8">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(currentOffice.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 hover:text-white transition-colors"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>

          {/* Right: Iframe Map */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-900 overflow-hidden bg-zinc-950 relative min-h-[350px] lg:min-h-full shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(currentOffice.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full min-h-[400px] border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[100%]"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${currentOffice.officeName} Map`}
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
