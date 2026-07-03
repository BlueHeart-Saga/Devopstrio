"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, Globe, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface Location {
  name: string;
  country: string;
  region: string;
  type: string;
  role: string;
  employees: string;
  top: number;
  left: number;
}

interface InteractiveMapProps {
  locations: Location[];
  filters: string[];
}

export function InteractiveMap({ locations, filters }: InteractiveMapProps) {
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
  const totalEmployees = "525+"; // Standard aligned value

  // Map Zoom settings for each region
  const getMapTransform = () => {
    switch (activeFilter) {
      case "India":
        return { scale: 3.2, origin: "77% 48%" };
      case "Europe":
        return { scale: 3.2, origin: "55% 22%" };
      case "North America":
        return { scale: 3.2, origin: "15% 25%" };
      default:
        return { scale: 1, origin: "center" };
    }
  };

  const mapStyle = getMapTransform();

  return (
    <section className="py-24 md:py-32 relative bg-zinc-950/20">
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
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              Interactive Map
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Our Global Footprint
            </h2>
          </Reveal>

          {/* Region Filters */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-6">
            {filters.map((item, i) => (
              <button
                key={i}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md ${
                  activeFilter === item
                    ? "bg-rose-500/10 border border-rose-500/30 text-rose-500 shadow-[0_8px_24px_rgba(225,29,72,0.12)]"
                    : "bg-zinc-950/20 border border-zinc-900/60 text-zinc-400 hover:border-zinc-700/85 hover:bg-zinc-900/30 hover:text-white"
                }`}
                onClick={() => setActiveFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* main side-by-side split layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch mt-8">
          
          {/* Left Column: Stats Card */}
          <div className="w-full lg:w-[320px] border border-zinc-800/80 p-8 bg-zinc-950/40 backdrop-blur-md rounded-2xl transition-all duration-300 hover:border-rose-500/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(225,29,72,0.08)] flex-shrink-0 flex flex-col justify-between">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-rose-500 leading-none mb-2">
                {totalOffices}
              </h1>
              <h3 className="text-xl font-bold text-white mb-2">Offices</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Across {uniqueCountries}+ Countries with {totalEmployees}+ Global Workforce
              </p>

              <div className="my-6 py-6 border-y border-zinc-800/60">
                <div className="flex justify-between items-center mb-4">
                  <span className="flex items-center gap-2.5 text-zinc-400 text-sm">
                    <MapPin className="text-rose-500 text-base" /> Total Offices
                  </span>
                  <strong className="text-base font-bold text-white">
                    {totalOffices}
                  </strong>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="flex items-center gap-2.5 text-zinc-400 text-sm">
                    <Globe className="text-rose-500 text-base" /> Countries
                  </span>
                  <strong className="text-base font-bold text-white">
                    {uniqueCountries}+
                  </strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2.5 text-zinc-400 text-sm">
                    <Users className="text-rose-500 text-base" /> Total Employees
                  </span>
                  <strong className="text-base font-bold text-white">
                    {totalEmployees}
                  </strong>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-zinc-900/50">
              <div className="flex items-center gap-2.5 text-xs text-zinc-500">
                <MapPin className="text-rose-500 filter drop-shadow-[0_0_4px_rgba(225,29,72,0.5)] h-3.5 w-3.5" />
                <span>Physical Office Location</span>
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

              {/* Location Pins with Tooltips */}
              {filteredLocations.map((loc, index) => (
                <div
                  key={index}
                  className="absolute z-10 cursor-pointer group/pin"
                  style={{
                    top: `${loc.top}%`,
                    left: `${loc.left}%`,
                    transform: `translate(-50%, -50%) scale(${1 / mapStyle.scale})`,
                    transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <MapPin className="h-[15px] w-[15px] text-rose-500 gp-location-icon-anim group-hover/pin:text-white group-hover/pin:scale-110 transition-all duration-300 stroke-[2.5px]" />

                  {/* Tooltip */}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-zinc-900/95 border border-rose-500/40 rounded-lg p-3 shadow-xl opacity-0 invisible group-hover/pin:opacity-100 group-hover/pin:visible transition-all duration-300 z-50 pointer-events-none w-max max-w-[240px]">
                    <div className="flex justify-between items-center gap-3 pb-1.5 mb-1.5 border-b border-zinc-800">
                      <strong className="text-white text-xs block">{loc.name}</strong>
                      <span className="text-zinc-500 text-[9px] uppercase tracking-wider font-semibold">{loc.country}</span>
                    </div>
                    <div className="mb-1">
                      <span className="block text-rose-500 text-[10px] font-bold leading-normal">{loc.type}</span>
                      <p className="text-[10px] text-zinc-400 mt-1 leading-snug">{loc.role}</p>
                      <span className="flex items-center gap-1.5 text-zinc-450 text-[9px] mt-2">
                        <Users className="text-rose-500 h-2.5 w-2.5" /> {loc.employees} employees
                      </span>
                    </div>
                    <div className="text-[8px] text-zinc-600 uppercase tracking-widest mt-1.5">{loc.region}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
