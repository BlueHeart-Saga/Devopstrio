"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, Globe, Users, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export interface Location {
  name: string;
  country: string;
  region: string;
  type: string;
  role: string;
  employees: string;
  top: number;
  left: number;
  mapUrl?: string;
  tag?: string;
  address?: string;
}

export const defaultLocations: Location[] = [
  {
    name: "London (HQ)",
    country: "UK",
    region: "Europe",
    type: "Global HQ / Client Experience Centre",
    role: "Connecting Global Expertise. Supporting Innovation. Delivering Excellence.",
    employees: "200+",
    top: 27.2,
    left: 46.9,
    tag: "HQ",
    address: "London, UK",
    mapUrl: "https://www.google.com/maps/place/Devopstrio+ltd/@51.5245288,-0.1367657,14z/data=!3m1!5s0x4875cee4157f1139:0xd249cf37df391616!4m10!1m2!2m1!1sdevopstrio+ltd+uk!3m6!1s0x48760b08b17623d1:0x6617df320c1480ed!8m2!3d51.5272553!4d-0.0887416!15sChFkZXZvcHN0cmlvIGx0ZCB1a5IBEHNvZnR3YXJlX2NvbXBhbnngAQA!16s%2Fg%2F11s90s3cf8"
  },
  {
    name: "London Support",
    country: "UK",
    region: "Europe",
    type: "London Support Office",
    role: "Connecting Global Expertise. Supporting Innovation. Delivering Excellence.",
    employees: "50+",
    top: 28.5,
    left: 46.1,
    tag: "Support",
    address: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=167-169+Great+Portland+Street,+5th+Floor,+London,+W1W+5PF"
  },
  {
    name: "Tennessee",
    country: "USA",
    region: "North America",
    type: "North America Operations",
    role: "Regional client support, collaboration coverage, and operational continuity for US-based engagements.",
    employees: "50+",
    top: 37.5,
    left: 23.5,
    tag: "Support",
    address: "522 Aventura Dr, Mt Juliet, TN 37122",
    mapUrl: "https://maps.google.com/?q=522+Aventura+Dr,+Mt+Juliet,+TN+37122"
  },
  {
    name: "Bengaluru",
    country: "India",
    region: "India",
    type: "Corporate Office",
    role: "Leading Strategy. Accelerating Technology. Enabling Global Growth.",
    employees: "150+",
    top: 51.1,
    left: 68.35,
    tag: "Corporate",
    address: "Bengaluru, Karnataka, India",
    mapUrl: "https://www.google.com/maps/place/Devopstrio+Pvt+Ltd/@11.2597005,71.6100439,6.11z/data=!4m10!1m2!2m1!1sDevopstrio+Pbangalore!3m6!1s0x3bae152b54eca867:0x980925bb507a328c!8m2!3d12.9513154!4d77.6464534!15sChVEZXZvcHN0cmlvIFBiYW5nYWxvcmVaFyIVZGV2b3BzdHJpbyBwYmFuZ2Fsb3JlkgEdY29tcHV0ZXJfc3VwcG9ydF9hbmRfc2VydmljZXPgAQA!16s%2Fg%2F11mdtl382s"
  },
  {
    name: "Chennai",
    country: "India",
    region: "India",
    type: "Technology & Operations Center",
    role: "Managed cloud operations, DevSecOps, infrastructure monitoring, and security-aligned delivery.",
    employees: "75+",
    top: 50.9,
    left: 69.1,
    tag: "Ops",
    address: "Chennai, Tamil Nadu, India",
    mapUrl: "https://www.google.com/maps/place/Devopstrio+Pvt+Ltd/@13.0095316,80.2063518,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267f2a761f2c5:0x795e4dac8df70296!8m2!3d13.0095264!4d80.2089267!16s%2Fg%2F11nq0wrf8p"
  },
  {
    name: "Thoothukudi",
    country: "India",
    region: "India",
    type: "Innovation Hub",
    role: "Empowering Talent. Accelerating Innovation. Creating Global Impact.",
    employees: "150+",
    top: 52.99,
    left: 68.53,
    tag: "Innovation",
    address: "Thoothukudi, Tamil Nadu, India",
    mapUrl: "https://www.google.com/maps/place/Devopstrio/@9.0039123,77.9576017,17z/data=!3m1!4b1!4m6!3m5!1s0x3b01557677b55437:0xdccfaa15cbbc87ca!8m2!3d9.0039123!4d77.9601766!16s%2Fg%2F11xw9tzf_k"
  },
];

export const defaultFilters = ["All", "India", "Europe", "North America"];

interface InteractiveMapProps {
  locations?: Location[];
  filters?: string[];
}

export function InteractiveMap({
  locations = defaultLocations,
  filters = defaultFilters,
}: InteractiveMapProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const filteredLocations = activeFilter === "All"
    ? locations
    : locations.filter((loc) => loc.region === activeFilter);

  // Handle canvas dot animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (activeFilter !== "All") {
        filteredLocations.forEach((loc) => {
          const x = (loc.left / 100) * canvas.width;
          const y = (loc.top / 100) * canvas.height;

          ctx.beginPath();
          ctx.arc(x, y, 40, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 40);
          gradient.addColorStop(0, "rgba(225, 29, 72, 0.25)");
          gradient.addColorStop(1, "rgba(225, 29, 72, 0)");
          ctx.fillStyle = gradient;
          ctx.fill();
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [activeFilter, filteredLocations]);

  // Auto-cycle map filter
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setActiveFilter((prev) => {
        const nextIndex = (filters.indexOf(prev) + 1) % filters.length;
        return filters[nextIndex];
      });
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeFilter, isPaused, filters]);

  // Calculate dynamic stats
  const totalOffices = locations.length;
  const uniqueCountries = [...new Set(locations.map((l) => l.country))].length;
  const totalEmployees = "525+";

  // Map Zoom settings for each region
  const getMapTransform = () => {
    switch (activeFilter) {
      case "India":
        return { scale: 3.2, origin: "77% 48%" };
      case "Europe":
        return { scale: 3.2, origin: "55% 22%" };
      case "North America":
      case "America":
        return { scale: 3.2, origin: "25% 42%" };
      default:
        return { scale: 1, origin: "center" };
    }
  };

  const mapStyle = getMapTransform();

  return (
    <section className="py-24 md:py-32 relative bg-zinc-950/20 font-sans">
      {/* Custom Keyframes & Continents Mask CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .gp-map-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          margin-top: 50px;
          pointer-events: none;
          background-color: rgba(255, 255, 255, 0.06);
          mask-image: url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg');
          mask-size: 100% 100%;
          mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-image: url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg');
          -webkit-mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
          transition: all 0.5s ease;
          clip-path: inset(0 0 15% 0);
        }
        @keyframes gp-pulsate {
          0% { transform: scale(1); opacity: 0.8; filter: drop-shadow(0 0 4px rgba(225,29,72,0.5)); }
          50% { transform: scale(1.15); opacity: 1; filter: drop-shadow(0 0 12px rgba(225,29,72,0.9)); }
          100% { transform: scale(1); opacity: 0.8; filter: drop-shadow(0 0 4px rgba(225,29,72,0.5)); }
        }
        .gp-location-icon-anim {
          animation: gp-pulsate 2s ease-in-out infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Title + Filters */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-6 font-sans">
              Our Global Footprint
            </h2>
          </Reveal>

          {/* Region Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {filters.map((item, i) => (
              <button
                key={i}
                className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer ${
                  activeFilter === item
                    ? "bg-rose-500 text-white shadow-[0_8px_24px_rgba(225,29,72,0.3)]"
                    : "bg-zinc-950/40 border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900/60 hover:text-white"
                }`}
                onClick={() => setActiveFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main side-by-side split layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch mt-8">
          
          {/* Left Column: Stats Card */}
          <div className="w-full lg:w-[360px] border border-zinc-800/80 p-8 bg-zinc-950/40 backdrop-blur-md rounded-2xl transition-all duration-300 hover:border-rose-500/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(225,29,72,0.08)] flex-shrink-0 flex flex-col justify-between">
            <div>
              <span className="text-6xl md:text-7xl font-bold text-rose-500 leading-none mb-2 block">
                {totalOffices}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Global Locations</h3>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                Across {uniqueCountries}+ Countries with <Link href="/careers" className="text-[#E11D48] hover:underline font-semibold">{totalEmployees} Global Workforce</Link>
              </p>

              <div className="my-6 py-6 border-y border-zinc-800/60">
                <div className="flex justify-between items-center mb-4">
                  <span className="flex items-center gap-2.5 text-zinc-300 text-base">
                    <MapPin className="text-rose-500 text-lg" /> Total Offices
                  </span>
                  <strong className="text-base sm:text-lg font-bold text-white">
                    {totalOffices}
                  </strong>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="flex items-center gap-2.5 text-zinc-300 text-base">
                    <Globe className="text-rose-500 text-lg" /> Countries
                  </span>
                  <strong className="text-base sm:text-lg font-bold text-white">
                    {uniqueCountries}+
                  </strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2.5 text-zinc-300 text-base">
                    <Users className="text-rose-500 text-lg" /> Total Employees
                  </span>
                  <strong className="text-base sm:text-lg font-bold text-white">
                    {totalEmployees}
                  </strong>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-zinc-900/50">
              <div className="flex items-center gap-2.5 text-sm text-zinc-400 font-medium">
                <MapPin className="text-rose-500 filter drop-shadow-[0_0_4px_rgba(225,29,72,0.5)] h-4 w-4" />
                <span>Click pin to view on Google Maps</span>
              </div>
            </div>
          </div>

          {/* Right Column: Map Area */}
          <div className="relative flex-1 bg-zinc-950/20 border border-zinc-900/80 rounded-2xl overflow-hidden aspect-video min-h-[350px] md:min-h-[450px] hover:border-rose-500/20 transition-colors duration-300 flex items-center justify-center">
            <div
              className="w-full h-full relative will-change-transform"
              style={{
                transform: `scale(${mapStyle.scale})`,
                transformOrigin: mapStyle.origin,
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Normal World Map Background */}
              <div className="gp-map-bg"></div>

              <canvas ref={canvasRef} className="w-full h-full block absolute inset-0 bg-transparent" />

              {/* Location Pins with Tooltips & Direct Google Maps Links */}
              {filteredLocations.map((loc, index) => (
                <a
                  key={index}
                  href={loc.mapUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute z-20 cursor-pointer group/pin focus:outline-none"
                  style={{
                    top: `${loc.top}%`,
                    left: `${loc.left}%`,
                    transform: `translate(-50%, -50%) scale(${1 / mapStyle.scale})`,
                    transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  title={`Open ${loc.name} office on Google Maps`}
                >
                  <div className="relative flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-rose-500 gp-location-icon-anim group-hover/pin:text-white group-hover/pin:scale-125 transition-all duration-300 stroke-[2.5px] filter drop-shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                  </div>

                  {/* Tooltip Hover Card */}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-zinc-950/95 border border-rose-500/50 rounded-xl p-4 shadow-2xl opacity-0 invisible group-hover/pin:opacity-100 group-hover/pin:visible transition-all duration-300 z-50 w-max min-w-[240px] backdrop-blur-md">
                    <div className="flex items-center justify-between gap-4 pb-2 mb-2 border-b border-zinc-800">
                      <strong className="text-white text-lg sm:text-xl font-bold tracking-tight">{loc.name}</strong>
                      <span className="text-rose-400 text-xs sm:text-sm font-semibold uppercase tracking-wider px-2 py-0.5 bg-rose-950/40 rounded border border-rose-500/30">{loc.country}</span>
                    </div>

                    {loc.address && (
                      <p className="text-sm text-zinc-200 mb-2.5 font-medium max-w-[260px] leading-relaxed">
                        {loc.address}
                      </p>
                    )}

                    <div className="flex items-center justify-between gap-2 text-sm sm:text-base font-semibold text-rose-400 group-hover/pin:text-rose-300">
                      <span>View on Google Maps</span>
                      <ArrowUpRight size={16} className="text-rose-400 group-hover/pin:translate-x-0.5 group-hover/pin:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default InteractiveMap;
