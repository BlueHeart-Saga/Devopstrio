"use client";

import { AboutHero } from "@/sections/about/AboutHero";
import { CompanyIntro } from "@/sections/about/CompanyIntro";
import { MissionVision } from "@/sections/about/MissionVision";
import { OurStory } from "@/sections/about/OurStory";
import { Leadership } from "@/sections/about/Leadership";
import { AboutServices } from "@/sections/about/AboutServices";
import { WhyChoose } from "@/sections/about/WhyChoose";
import { OurPartnership } from "@/sections/about/OurPartnership";
import { WorkflowModel } from "@/sections/about/WorkflowModel";
import { MetricsStats } from "@/sections/about/MetricsStats";
import { Achievements } from "@/sections/about/Achievements";
import { AboutCTA } from "@/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <AboutHero />
      <CompanyIntro />
      <MissionVision />
      <OurStory />
      <Leadership />
      <AboutServices />
      <WhyChoose />
      <OurPartnership />
      <WorkflowModel />
      <MetricsStats />
      <Achievements />
      <AboutCTA />
    </main>
  );
}
