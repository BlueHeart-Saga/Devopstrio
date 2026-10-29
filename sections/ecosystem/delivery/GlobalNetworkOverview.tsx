"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface OfficeDetail {
  id: string;
  city: string;
  officeName: string;
  address: string;
  type: string;
  tel: string;
  email: string;
  mapQuery: string;
  flag: string;
  mapUrl?: string;
  embedUrl?: string;
}

const officeLocations: OfficeDetail[] = [
  {
    id: "london-hq",
    city: "London",
    officeName: "London HQ",
    address: "128 City Road, London, United Kingdom, EC1V 2NX",
    type: "Head Office",
    tel: "+44 (0) 20 7183 0123",
    email: "info@devopstrioglobal.com",
    mapQuery: "128 City Road, London, EC1V 2NX, United Kingdom",
    flag: "🇬🇧"
  },
  {
    id: "london-support",
    city: "London",
    officeName: "London Office",
    address: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF",
    type: "Support Office",
    tel: "+44 (0) 20 7183 0124",
    email: "info@devopstrioglobal.com",
    mapQuery: "167-169 Great Portland Street, London, W1W 5PF, United Kingdom",
    flag: "🇬🇧"
  },
  {
    id: "tennessee-office",
    city: "Tennessee",
    officeName: "Tennessee Office",
    address: "522 Aventura Dr, Mt Juliet, Tennessee, 37122 United States",
    type: "Sub-Regional Office",
    tel: "+1 (615) 555-0199",
    email: "info@devopstrioglobal.com",
    mapQuery: "522 Aventura Dr, Mt Juliet, Tennessee, 37122 United States",
    flag: "🇺🇸"
  },
  {
    id: "bengaluru-office",
    city: "Bengaluru",
    officeName: "Bengaluru Office",
    address: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
    type: "Corporate Office",
    tel: "+91 80 4123 4567",
    email: "info@devopstrioglobal.com",
    mapQuery: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
    flag: "🇮🇳",
    mapUrl: "https://maps.app.goo.gl/vdAe8XAb242GweER9",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3207553683833!2d77.64387847559166!3d12.951315387362154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152b54eca867%3A0x980925bb507a328c!2sDevopstrio%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1793250546683!5m2!1sen!2sin"
  },
  {
    id: "chennai-office",
    city: "Chennai",
    officeName: "Chennai Office",
    address: "Ground Floor, Primus Building, Door No. SP – 7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai 600032",
    type: "Operations Center",
    tel: "+91 44 6123 4567",
    email: "info@devopstrioglobal.com",
    mapQuery: "Primus Building, Door No. SP - 7A, Guindy Industrial Estate, Chennai 600032, India",
    flag: "🇮🇳",
    mapUrl: "https://maps.app.goo.gl/8pytBuRQstcSHqtR7",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4102547639977!2d80.20635177559258!3d13.009526387309348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f2a761f2c5%3A0x795e4dac8df70296!2sDevopstrio%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1793250520470!5m2!1sen!2sin"
  },
  {
    id: "thoothukudi-office",
    city: "Thoothukudi",
    officeName: "Thoothukudi Office",
    address: "4/ 367, Rajeev Colony, Pasuvanthanai, 628718 Thoothukudi, Tamilnadu, IN",
    type: "Operations Center",
    tel: "+91 461 234 5678",
    email: "info@devopstrioglobal.com",
    mapQuery: "Pasuvanthanai, Tamilnadu, India",
    flag: "🇮🇳",
    mapUrl: "https://maps.app.goo.gl/gsrJPp7h2zbzQTPP9",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.654408808943!2d77.9576016755411!3d9.003912291056443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01557677b55437%3A0xdccfaa15cbbc87ca!2sDevopstrio!5e0!3m2!1sen!2sin!4v1793250567463!5m2!1sen!2sin"
  }
];

export function GlobalNetworkOverview() {
  const [activeTab, setActiveTab] = useState(officeLocations[0].id);
  const currentOffice = officeLocations.find((loc) => loc.id === activeTab) || officeLocations[0];

  return (
    <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <Reveal>
            {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              OPERATIONAL BOUNDARIES
            </span> */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
              Global Network <span className="text-rose-500">Overview</span>
            </h2>
            {/* <p className="text-zinc-400 text-sm font-semibold">
              Strategically located offices providing continuous delivery workflows, design sessions, and enterprise integrations.
            </p> */}
          </Reveal>
        </div>

        {/* Tabs Menu */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 border-b border-zinc-900 pb-6">
            {officeLocations.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveTab(office.id)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === office.id
                    ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                    : "bg-zinc-950/60 border border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                  }`}
              >
                <span>{office.flag}</span>
                <span>{office.city} ({office.type})</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Main Grid: Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">

          {/* Left: Location details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-zinc-950/40 border border-white/5 relative overflow-hidden h-full min-h-[420px]">
            {/* Accent vertical line */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />

            <div className="space-y-6">
              <div>
                <span className="text-xs md:text-sm font-mono tracking-[0.25em] uppercase text-rose-500 block mb-2 font-semibold">
                  Office Information
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight uppercase">
                  {currentOffice.officeName}
                </h3>
                <span className="inline-block mt-2 text-xs md:text-sm font-mono tracking-widest uppercase bg-rose-500/10 border border-rose-500/20 text-rose-400 px-3 py-1 rounded-md font-semibold">
                  {currentOffice.type}
                </span>
              </div>

              <div className="space-y-5 border-t border-zinc-900 pt-6">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs md:text-sm font-mono uppercase text-zinc-400 tracking-wider font-semibold">Address</h5>
                    <p className="text-zinc-200 text-sm md:text-base font-semibold mt-1 leading-relaxed">
                      {currentOffice.address}
                    </p>
                  </div>
                </div>

                {/* Tel */}
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs md:text-sm font-mono uppercase text-zinc-400 tracking-wider font-semibold">Telephone</h5>
                    <p className="text-zinc-200 text-sm md:text-base font-semibold mt-1">
                      {currentOffice.tel}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs md:text-sm font-mono uppercase text-zinc-400 tracking-wider font-semibold">Email</h5>
                    <p className="text-zinc-200 text-sm md:text-base font-semibold mt-1">
                      {currentOffice.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-6 mt-8">
              <a
                href={currentOffice.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(currentOffice.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm md:text-base font-semibold uppercase tracking-wider text-rose-500 hover:text-white transition-colors"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>

          {/* Right: Iframe Map */}
          <div className="dv-spot lg:col-span-7 rounded-2xl border border-zinc-900 overflow-hidden bg-zinc-950 relative min-h-[350px] lg:min-h-full">
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
                  src={currentOffice.embedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(currentOffice.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
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
