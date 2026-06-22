
import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { GlobalPresence } from "@/sections/home/GlobalPresence";
import { GlobalLocations } from "@/sections/home/GlobalLocations";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { Reveal } from "@/components/ui/Reveal";



export const metadata: Metadata = {
  title: "Global Presence",
  description: "Find our international developer hubs and sales offices across the globe.",
  alternates: {
    canonical: "/about/global-presence"
  }
};
export default function GlobalPresencePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Global Presence", item: "/about/global-presence" }
      ]} />
      {/* Page Header */}
      <section className="pt-20 pb-12 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-bold">Follow-the-Sun Operations</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white leading-tight">
              Global <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Presence</span>
            </h1>
            <p className="text-zinc-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              With centers across the UK, USA, and India, our follow-the-sun model ensures continuous software integration, database support, and active cloud uptime.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-black flex flex-col gap-16 pb-16">
        <div className="px-6 md:px-12 lg:px-20 max-w-site mx-auto w-full">
          <GlobalPresence />
        </div>
        
        <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 border-t border-zinc-900/60 pt-16">
          <GlobalLocations />
        </div>
        
        <AboutCTA />
      </div>
    </main>
  );
}
