"use client";

import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactForm } from "@/sections/contact/ContactForm";
import { OurLocations } from "@/sections/contact/OurLocations";
import { MeetOurTeam } from "@/sections/contact/MeetOurTeam";
import { WhyContactUs } from "@/sections/contact/WhyContactUs";
import { TrustSignal } from "@/sections/contact/TrustSignal";
import { FAQ } from "@/sections/contact/FAQ";
import { ContactCTA } from "@/sections/contact/ContactCTA";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <ContactHero />
      <WhyContactUs />
      <ContactForm />
      <TrustSignal />
      <OurLocations />
      <MeetOurTeam />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
