
import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { GlobalPresence } from "@/sections/home/GlobalPresence";
import { GlobalLocations } from "@/sections/home/GlobalLocations";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { GlobalPresenceHero } from "@/sections/about/GlobalPresenceHero";

export const metadata: Metadata = {
  title: "Global Presence",
  description: "Find our international developer hubs and sales offices across the globe.",
  alternates: {
    canonical: "/about/global-presence"
  }
};
export default function GlobalPresencePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Global Presence", item: "/about/global-presence" }
      ]} />
      
      {/* 1. Hero */}
      <GlobalPresenceHero />

      {/* Main Content */}
      <div className="bg-black flex flex-col gap-16 pb-16" id="locations">
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
