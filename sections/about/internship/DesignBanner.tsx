"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const DesignBanner = () => {
  const handleScrollToForm = () => {
    const form = document.getElementById("apply-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden border-t border-zinc-900 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Banner Container */}
        <div className="relative w-full bg-[#030303] border border-zinc-850 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[460px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
          
          {/* LEFT COLUMN: Large Typography */}
          <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              Engineering mastery <br />
              is your <br />
              edge. <span className="text-zinc-700">Devopstrio <br className="hidden sm:inline" />
              builds it for you.</span>
            </h2>
          </div>

          {/* RIGHT COLUMN: Gradient Overlay Block */}
          <div className="lg:col-span-5 relative p-8 sm:p-12 flex flex-col justify-between text-white overflow-hidden min-h-[380px] lg:min-h-full">
            
            {/* Colorful Magenta/Rose Polygon Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#9c0c3c] via-[#dd0d55] to-[#f43f5e] z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ec4899,transparent_75%)] opacity-70 z-0" />
            
            {/* Geometric shadow layer */}
            <div 
              className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 100%)`,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
              }}
            />

            {/* Content Top */}
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold leading-tight mb-6 max-w-sm">
                We turn engineering curiosity <br />
                into careers.
              </h3>
              
              <button
                onClick={handleScrollToForm}
                className="px-6 py-3 bg-white hover:bg-zinc-100 text-black rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg flex items-center gap-2 group w-fit"
              >
                Apply Now
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Content Bottom (Text + QR code) */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end mt-12">
              
              {/* Short paragraph info */}
              <p className="sm:col-span-8 text-[11px] sm:text-xs text-white/80 leading-relaxed font-medium">
                When the right perspective meets the right enterprise production, better engineers happen. Devopstrio connects your potential and delivers.
              </p>

              {/* High-tech QR Code mockup */}
              <div className="sm:col-span-4 flex flex-col items-center sm:items-end justify-end group">
                <div className="bg-white p-2.5 rounded-lg shadow-md w-fit hover:scale-105 transition-transform duration-300">
                  {/* Clean SVG Matrix Representation of a QR Code */}
                  <svg className="w-16 h-16 text-black" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="0" y="0" width="30" height="30" />
                    <rect x="5" y="5" width="20" height="20" fill="white" />
                    <rect x="10" y="10" width="10" height="10" />

                    <rect x="70" y="0" width="30" height="30" />
                    <rect x="75" y="5" width="20" height="20" fill="white" />
                    <rect x="80" y="10" width="10" height="10" />

                    <rect x="0" y="70" width="30" height="30" />
                    <rect x="5" y="75" width="20" height="20" fill="white" />
                    <rect x="10" y="80" width="10" height="10" />

                    <rect x="40" y="10" width="10" height="10" />
                    <rect x="50" y="20" width="10" height="10" />
                    <rect x="45" y="35" width="15" height="10" />
                    <rect x="10" y="45" width="10" height="15" />
                    <rect x="35" y="55" width="10" height="10" />
                    <rect x="55" y="45" width="10" height="10" />
                    <rect x="45" y="70" width="15" height="15" />
                    <rect x="80" y="40" width="15" height="15" />
                    <rect x="70" y="70" width="10" height="10" />
                    <rect x="85" y="85" width="15" height="15" />
                  </svg>
                </div>
                <span className="text-[9px] font-bold tracking-widest text-white/90 uppercase mt-2 block mr-1 sm:text-right">
                  PORTAL APPLY
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
