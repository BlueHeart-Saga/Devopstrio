import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

import { SupportHero } from "@/sections/about/support/SupportHero";
import { SupportChannels } from "@/sections/about/support/SupportChannels";
import { GlobalSupportNetwork } from "@/sections/about/support/GlobalSupportNetwork";
import { SupportServices } from "@/sections/about/support/SupportServices";
import { SLAMatrix } from "@/sections/about/support/SLAMatrix";
import { ProductEcosystem } from "@/sections/about/support/ProductEcosystem";
import { SupportMetrics } from "@/sections/about/support/SupportMetrics";
import { SupportFAQ } from "@/sections/about/support/SupportFAQ";
import { AboutDevopstrio } from "@/sections/about/support/AboutDevopstrio";
import { SupportCTA } from "@/sections/about/support/SupportCTA";

export const metadata: Metadata = {
  title: "Customer Support | Devopstrio — Enterprise Cloud, AI & DevOps Support",
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

      {/* 1. Hero */}
      <SupportHero />

      {/* 2. Contact Channels */}
      <SupportChannels />

      {/* 3. Global Support Network */}
      <GlobalSupportNetwork />

      {/* 4. Support Services (tabbed) */}
      <SupportServices />

      {/* 5. SLA Response Matrix */}
      <SLAMatrix />

      {/* 6. Product Ecosystem */}
      <ProductEcosystem />

      {/* 7. Customer Success Metrics */}
      <SupportMetrics />

      {/* 8. FAQ */}
      <SupportFAQ />

      {/* 9. About Devopstrio */}
      <AboutDevopstrio />

      {/* 10. Final CTA */}
      <SupportCTA />
    </main>
  );
}
