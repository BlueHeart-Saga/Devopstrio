
import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { AboutHero } from "@/sections/about/AboutHero";
import { CompanyIntro } from "@/sections/about/CompanyIntro";
import { MissionVision } from "@/sections/about/MissionVision";
import { OurStory } from "@/sections/about/OurStory";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { Reveal } from "@/components/ui/Reveal";



export const metadata: Metadata = {
  title: "Company Overview",
  description: "Devopstrio helps enterprises build, modernize and scale mission-critical AI platforms, cloud infrastructure and digital products.",
  alternates: {
    canonical: "/about/company-overview"
  }
};
export default function CompanyOverviewPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Company Overview", item: "/about/company-overview" }
      ]} />
      {/* Glow Ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_70%)] pointer-events-none" />

      {/* Page Header */}
      <section className="pt-20 pb-8 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-bold">About Devopstrio</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white leading-tight">
              Company <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Overview</span>
            </h1>
            <p className="text-zinc-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              We co-engineer modern cloud landing zones, automated deployment guardrails, and enterprise generative AI hubs that keep businesses scaling.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Blocks */}
      <div className="flex flex-col bg-black">
        <AboutHero />
        
        <div className="border-t border-zinc-900/60 py-16">
          <CompanyIntro />
        </div>

        <div className="border-t border-zinc-900/60 py-16 bg-[#030303]/40">
          <MissionVision />
        </div>

        <div className="border-t border-zinc-900/60 py-16">
          <OurStory />
        </div>

        <AboutCTA />
      </div>
    </main>
  );
}
