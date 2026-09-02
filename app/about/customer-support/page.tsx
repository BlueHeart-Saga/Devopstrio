import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

import { SupportHero } from "@/sections/about/support/SupportHero";
import { SupportChannels } from "@/sections/about/support/SupportChannels";
import { DepartmentContacts } from "@/sections/contact/DepartmentContacts";
import { SupportReviews } from "@/sections/about/support/SupportReviews";
import { InteractiveMap } from "@/sections/about/global-presence/InteractiveMap";
import { SupportServices } from "@/sections/about/support/SupportServices";
import { SLAMatrix } from "@/sections/about/support/SLAMatrix";
import { ProductEcosystem } from "@/sections/about/support/ProductEcosystem";
import { SupportMetrics } from "@/sections/about/support/SupportMetrics";
import { SupportFAQ } from "@/sections/about/support/SupportFAQ";
import { AboutDevopstrio } from "@/sections/about/support/AboutDevopstrio";
import { SupportCTA } from "@/sections/about/support/SupportCTA";

export const metadata: Metadata = {
  title: "24/7 Enterprise Customer Support | Devopstrio",
  description:
    "Enterprise-grade 24×7 support for Cloud, AI, DevOps and digital platforms. Global delivery centres in UK, USA, and India with strict SLA commitments and dedicated success teams.",
  alternates: {
    canonical: "/about/customer-support",
  },
  openGraph: {
    title: "Customer Support | Devopstrio",
    description:
      "Get expert engineering support from Devopstrio's global delivery centres. 24×7 coverage, enterprise SLAs, and dedicated success teams.",
    type: "website",
  },
};

const locations = [
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
    mapUrl: "https://www.google.com/maps/place/Devopstrio/@9.0039123,77.9576017,17z/data=!3m1!4b1!4m6!3m5!1s0x3b01557677b55437:0xdccfaa15cbbc87ca!8m2!3d9.0039123!4d77.9601766!16s%2Fg%2F11xw9tzf_k"
  },
];

const filters = ["All", "India", "Europe", "North America"];

import { FAQSchema } from "@/components/seo/Schemas";

const supportFaqsData = [
  {
    q: "How do I contact support?",
    a: "You can reach our support team via email at info@devopstrioglobal.com or call us directly at 0461 2940062 or +44 1784 640216. Enterprise customers also have access to dedicated Slack channels and priority escalation lines."
  },
  {
    q: "What are your support hours?",
    a: "We operate a follow-the-sun support model providing global coverage 24×7. Our delivery centres in the UK, USA, and India coordinate to ensure there is always an engineer available regardless of your timezone."
  },
  {
    q: "Do you provide managed cloud support?",
    a: "Yes. We provide comprehensive managed support for Azure, AWS, and Google Cloud. This includes infrastructure monitoring, incident response, cost optimisation, and architecture guidance across all major cloud platforms."
  },
  {
    q: "Can I request a dedicated support engineer?",
    a: "Enterprise customers can engage dedicated support engineers and customer success managers through our managed services programme. Contact our sales team to discuss dedicated resource arrangements and custom SLAs."
  },
  {
    q: "What products does Devopstrio support?",
    a: "We provide full lifecycle support for our entire product portfolio including Humanex, Brio, SafeSign, Prestivo, Campix, Homela, CareSuite, and Justivon, as well as our cloud and DevOps managed services."
  },
  {
    q: "How are incidents escalated and tracked?",
    a: "All incidents are tracked via our enterprise ticketing system. Critical incidents (P1) trigger an immediate war-room activation with dedicated engineers. You'll receive real-time updates throughout the resolution process."
  }
];

export default function CustomerSupportPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about/company-overview" },
          { name: "Customer Support", item: "/about/customer-support" },
        ]}
      />
      <FAQSchema faqs={supportFaqsData} />

      {/* 1. Hero */}
      <SupportHero />

      {/* 2. Contact Channels */}
      <SupportChannels />

      {/* 3. Department Direct Contacts */}
      <DepartmentContacts />

      {/* 3.5 Google Reviews Spotlight */}
      <SupportReviews />

      {/* 3. Global Interactive Support Map */}
      <div id="map">
        <InteractiveMap locations={locations} filters={filters} />
      </div>

      {/* 4. Support Services */}
      <SupportServices />

      {/* 5. SLA Response Matrix */}
      <SLAMatrix />

      {/* 6. Product Ecosystem */}
      <ProductEcosystem />

      {/* 7. Customer Success Metrics */}
      <SupportMetrics />

      {/* 8. About Devopstrio */}
      <AboutDevopstrio />

      {/* 9. FAQ */}
      <SupportFAQ />

      {/* 10. Final CTA */}
      <SupportCTA />
    </main>
  );
}
