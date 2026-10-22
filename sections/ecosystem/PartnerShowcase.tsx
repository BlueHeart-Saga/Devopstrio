"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/* ==================================================================
 * STRATEGIC ALLIANCES & PARTNER SHOWCASE
 * ------------------------------------------------------------------
 * Direct integration for Devopstrio Ecosystem Alliances
 * ================================================================== */

export interface Partner {
  name: string;
  monogram: string;
  tag: string;
  category: string;
  accent: string;
  logo: string;
  href: string;
}

export interface Tier {
  label: string;
  note: string;
  partners: Partner[];
}

export const PARTNER_TIERS: Tier[] = [
  {
    label: "Hyperscale Cloud",
    note: "Infrastructure, platforms and AI services",
    partners: [
      {
        name: "Microsoft Alliance",
        monogram: "AZ",
        tag: "Cloud migration, enterprise AI, Azure OpenAI & Kubernetes modernization",
        category: "Cloud",
        accent: "#0078D4",
        logo: "/assets/Tech_logos/Microsoft-Azure.svg",
        href: "/ecosystem/partnerships/microsoft",
      },
      {
        name: "AWS Partner Network",
        monogram: "AW",
        tag: "Serverless architectures, cloud security, migration & Bedrock GenAI",
        category: "Cloud",
        accent: "#FF9900",
        logo: "/assets/Tech_logos/AWS.svg",
        href: "/ecosystem/partnerships/aws",
      },
      {
        name: "Google Cloud Ecosystem",
        monogram: "GC",
        tag: "BigQuery analytics, Vertex AI, Kubernetes platforms & Anthos mesh",
        category: "Cloud",
        accent: "#4285F4",
        logo: "/assets/Tech_logos/Google_Cloud.svg",
        href: "/ecosystem/partnerships/google-cloud",
      },
      {
        name: "Oracle Alliance",
        monogram: "OC",
        tag: "Autonomous database, Exadata cloud systems & mission-critical OCI",
        category: "Cloud",
        accent: "#F80000",
        logo: "/assets/Tech_logos/Oracle_Cloud.svg",
        href: "/ecosystem/partnerships/oracle",
      },
    ],
  },
  {
    label: "Enterprise Platforms",
    note: "Workflow automation, ERP and core business systems",
    partners: [
      {
        name: "ServiceNow Integration",
        monogram: "SN",
        tag: "ITSM, ITOM, GenAI workflows & enterprise service automation",
        category: "Workflow",
        accent: "#62D84E",
        logo: "/assets/Tech_logos/Service_now.svg",
        href: "/ecosystem/partnerships/servicenow",
      },
      {
        name: "SAP on Cloud",
        monogram: "SA",
        tag: "SAP S/4HANA migration, cloud ERP, finance & supply chain resilience",
        category: "ERP",
        accent: "#0FAAFF",
        logo: "/assets/Tech_logos/sap.svg",
        href: "/ecosystem/partnerships/sap",
      },
    ],
  },
];

function PartnerMark({ partner }: { partner: Partner }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="relative flex h-28 sm:h-32 w-full items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 backdrop-blur-sm transition-all duration-500 group-hover:border-zinc-700 group-hover:bg-zinc-900/80"
    >
      {!hasError && partner.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logo}
          alt={partner.name}
          onError={() => setHasError(true)}
          className="h-14 sm:h-16 w-auto max-w-[85%] max-h-16 object-contain filter drop-shadow transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 text-sm font-bold tracking-wide text-zinc-200 ring-1 ring-zinc-700">
            {partner.monogram}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Logo</span>
        </div>
      )}
    </div>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link
      href={partner.href}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-zinc-700 sm:p-7"
    >
      {/* Top ambient highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${partner.accent}24, transparent 65%)`,
        }}
      />

      {/* Card Header & Content */}
      <div className="relative z-10">
        {/* Large Logo Showcase */}
        <PartnerMark partner={partner} />

        {/* Partner Name & Tagline */}
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-rose-400 sm:text-xl">
          {partner.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {partner.tag}
        </p>
      </div>

      {/* Bottom Action Link */}
      <div className="relative z-10 mt-6 flex items-center gap-2 border-t border-zinc-900/80 pt-4 text-xs font-semibold tracking-wide text-zinc-400 transition-colors duration-300 group-hover:text-rose-400">
        <span>Explore solution</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export function PartnerShowcase() {
  return (
    <section
      id="alliances"
      className="relative w-full overflow-hidden border-b border-zinc-900/60 bg-black py-20 sm:py-24 text-white"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(225,29,72,0.08)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 bottom-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(225,29,72,0.06)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 xl:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-14 sm:mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.25em] text-rose-500 sm:text-sm sm:tracking-[0.3em]">
            <span className="h-px w-8 bg-rose-500/60" />
            STRATEGIC ALLIANCES
            <span className="h-px w-8 bg-rose-500/60" />
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Co-Engineered with <span className="text-rose-500">Global Leaders</span>
          </h2>
        </div>

        {/* Partner Tiers */}
        <div className="space-y-16">
          {PARTNER_TIERS.map((tier) => (
            <div key={tier.label}>
              {/* Tier Header with Divider Line */}
              <div className="mb-8 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                    {tier.label}
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-zinc-400">{tier.note}</p>
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent sm:mb-3 sm:ml-8 sm:block" />
              </div>

              {/* Responsive Grid */}
              <div
                className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 ${
                  tier.partners.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-2"
                }`}
              >
                {tier.partners.map((partner) => (
                  <div key={partner.name} className="h-full">
                    <PartnerCard partner={partner} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default PartnerShowcase;
