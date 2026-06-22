
import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { Leadership } from "@/sections/about/Leadership";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { Reveal } from "@/components/ui/Reveal";



export const metadata: Metadata = {
  title: "Leadership & Team",
  description: "Meet the executive leadership and technical directors guiding Devopstrio.",
  alternates: {
    canonical: "/about/leadership-team"
  }
};
export default function LeadershipTeamPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Leadership & Team", item: "/about/leadership-team" }
      ]} />
      {/* Page Header */}
      <section className="pt-20 pb-4 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-bold">Executive Board & Engineering Architects</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white leading-tight">
              Leadership & <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Team</span>
            </h1>
            <p className="text-zinc-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Meet the innovators, architects, and designers scaling cloud platforms and data services across the globe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leadership Section */}
      <div className="bg-black">
        <Leadership />
        
        <AboutCTA />
      </div>
    </main>
  );
}
