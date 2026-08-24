"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Map } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface Location {
  name: string;
  country: string;
  region: string;
  type: string;
  role: string;
  employees: string;
  top: number;
  left: number;
  tag: string;
}

interface HubSpotlightProps {
  locations?: Location[];
}

const officeLocations = [
  {
    id: "london-hq",
    city: "London",
    officeName: "London (Head Office)",
    tagline: "Strategic Leadership. Enterprise Governance. Global Partnerships.",
    address: "128 City Road, London, United Kingdom, EC1V 2NX",
    type: "Head Office",
    tel: "+44 (0) 20 7183 0123",
    email: "info@devopstrioglobal.com",
    mapQuery: "128 City Road, London, EC1V 2NX, United Kingdom",
  },
  {
    id: "tennessee-office",
    city: "Tennessee",
    officeName: "Tennessee (Sub-Regional Office)",
    tagline: "North America Operations & Real-Time Client Collaboration.",
    address: "522 Aventura Dr, Mt Juliet, Tennessee, 37122 United States",
    type: "Sub-Regional Office",
    tel: "+1 (615) 555-0199",
    email: "info@devopstrioglobal.com",
    mapQuery: "522 Aventura Dr, Mt Juliet, Tennessee, 37122 United States",
  },
  {
    id: "bengaluru-office",
    city: "Bengaluru",
    officeName: "Bengaluru (Corporate Office)",
    tagline: "Leading Strategy. Accelerating Technology. Enabling Global Growth.",
    address: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
    type: "Corporate Office",
    tel: "+91 80 4123 4567",
    email: "info@devopstrioglobal.com",
    mapQuery: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
  },
  {
    id: "london-support",
    city: "London",
    officeName: "London (Support Office)",
    tagline: "Connecting Global Expertise. Supporting Innovation. Delivering Excellence.",
    address: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF",
    type: "Support Office",
    tel: "+44 (0) 20 7183 0124",
    email: "info@devopstrioglobal.com",
    mapQuery: "167-169 Great Portland Street, London, W1W 5PF, United Kingdom",
  },
  {
    id: "chennai-office",
    city: "Chennai",
    officeName: "Chennai (Technology & Operations Center)",
    tagline: "24/7 Cloud Architecture & Security Operations.",
    address: "Ground Floor, Primus Building, Door No. SP – 7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai 600032",
    type: "Technology & Operations Center",
    tel: "+91 44 6123 4567",
    email: "info@devopstrioglobal.com",
    mapQuery: "Primus Building, Door No. SP - 7A, Guindy Industrial Estate, Chennai 600032, India",
  },
  {
    id: "thoothukudi-office",
    city: "Thoothukudi",
    officeName: "Thoothukudi (Innovation Hub)",
    tagline: "Empowering Talent. Accelerating Innovation. Creating Global Impact.",
    address: "4/ 367, Rajeev Colony, Pasuvanthanai, 628718 Thoothukudi, Tamilnadu, IN",
    type: "Innovation Hub",
    tel: "+91 461 234 5678",
    email: "info@devopstrioglobal.com",
    mapQuery: "Pasuvanthanai, Tamilnadu, India",
  }
];

export function HubSpotlight({ locations }: HubSpotlightProps) {
  const [activeTab, setActiveTab] = useState(officeLocations[0].id);
  const currentOffice = officeLocations.find((loc) => loc.id === activeTab) || officeLocations[0];

  return (
    <section className="py-24 md:py-32 relative max-w-7xl mx-auto px-6 lg:px-12">
      {/* Tabs Menu */}
      <div className="flex flex-wrap gap-2.5 md:gap-3 mb-10 border-b border-zinc-900 pb-6">
        {officeLocations.map((office) => (
          <button
            key={office.id}
            onClick={() => setActiveTab(office.id)}
            className={`px-5 py-3 text-xs sm:text-sm md:text-base font-semibold rounded-xl transition-all duration-300 cursor-pointer ${activeTab === office.id
                ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25"
                : "bg-zinc-950/60 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900/80"
              }`}
          >
            {office.city} ({office.type})
          </button>
        ))}
      </div>

      {/* Main Grid: Info + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

        {/* Left: Location details Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-zinc-950/40 border border-white/5 relative overflow-hidden h-full">
          {/* Accent vertical line */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                {currentOffice.officeName}
              </h3>
              {currentOffice.tagline && (
                <p className="text-xs sm:text-sm text-rose-400 font-medium mt-1 leading-relaxed">
                  {currentOffice.tagline}
                </p>
              )}
            </div>

            <div className="space-y-5 border-t border-zinc-900 pt-6">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Address</h5>
                  <p className="text-zinc-300 text-xs md:text-sm font-medium mt-1 leading-relaxed">
                    {currentOffice.address}
                  </p>
                </div>
              </div>

              {/* Tel */}
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Telephone</h5>
                  <p className="text-zinc-300 text-xs md:text-sm font-medium mt-1">
                    {currentOffice.tel}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Email</h5>
                  <p className="text-zinc-300 text-xs md:text-sm font-medium mt-1">
                    {currentOffice.email}
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
        <div className="lg:col-span-7 rounded-2xl border border-zinc-900 overflow-hidden bg-zinc-950 relative min-h-[350px] lg:min-h-full">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(currentOffice.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="w-full h-full min-h-[400px] border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[100%]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${currentOffice.officeName} Map`}
          />
        </div>

      </div>
    </section>
  );
}
