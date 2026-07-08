"use client";

import { Reveal } from "@/components/ui/Reveal";

const partnerCategories = [
  {
    title: "Cloud & Platform Partners",
    partners: [
      {
        name: "Microsoft",
        logo: "/assets/Home-page/partners/Microsoft.svg",
        value: "Supporting cloud modernization, enterprise productivity, and scalable platform delivery."
      },
      {
        name: "AWS",
        logo: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg",
        value: "Enabling resilient cloud-native infrastructure and modern application delivery."
      },
      {
        name: "Google Cloud",
        logo: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg",
        value: "Supporting data, AI, and digital platform transformation initiatives."
      },
      {
        name: "Oracle",
        logo: "/assets/Home-page/Techtools/oracle-logo.svg",
        value: "Strengthening enterprise application, data, and business systems modernization."
      }
    ]
  },
  {
    title: "Enterprise Operations & Workflow Partners",
    partners: [
      {
        name: "ServiceNow",
        logo: "/assets/Home-page/partners/servicenow.png",
        value: "Supporting workflow automation and digital operations transformation."
      },
      {
        name: "SAP",
        logo: "/assets/Home-page/partners/sap-logo.svg",
        value: "Helping connect business operations with scalable enterprise platforms."
      },
      {
        name: "Cisco",
        logo: "/assets/Home-page/partners/cisco-logo.svg",
        value: "Reinforcing connectivity, infrastructure, and enterprise technology operations."
      }
    ]
  }
];

import Link from "next/link";

export function StrategicPartnerships() {
  return (
    <section id="strategic-partners" className="py-24 bg-black text-white relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E11D48] mb-3 block">
              Strategic Alliances
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Strategic Partnerships That <br className="hidden md:block" />
              <span className="text-[#E11D48]">Strengthen Our Delivery Model</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
              Our partnerships help us stay aligned with evolving technologies, enterprise platforms, and modern delivery expectations. These alliances strengthen our ability to support clients across <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline font-bold">cloud modernization</Link>, enterprise systems, digital operations, and innovation-led <Link href="/services/digital-transformation" className="text-[#E11D48] hover:underline font-bold">transformation programs</Link>.
            </p>
          </div>
        </Reveal>

        <div className="space-y-16">
          {partnerCategories.map((cat, idx) => (
            <div key={idx}>
              <Reveal>
                <div className="mb-8 border-b border-zinc-800 pb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">{cat.title}</h3>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.partners.map((partner, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/30 backdrop-blur-xl p-6 hover:border-zinc-700 transition-all duration-300 h-full flex flex-col">
                      <div className="w-16 h-16 shrink-0 bg-white rounded-lg flex items-center justify-center p-3 shadow-sm border border-zinc-200 mb-6">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-rose-500 transition-colors">{partner.name}</h4>
                        <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                          {partner.value}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
