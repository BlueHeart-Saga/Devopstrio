"use client";

import { Reveal } from "@/components/ui/Reveal";

const partnerCategories = [
  {
    title: "Cloud & Platform Partners",
    partners: [
      {
        name: "Microsoft",
        logo: "/assets/Devopstrio_Partners/Microsoft.svg"
      },
      {
        name: "AWS",
        logo: "/webp/assets/Devopstrio_Partners/aws.webp"
      },
      {
        name: "Google Cloud",
        logo: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg"
      },
      {
        name: "Lenovo TrueScale",
        logo: "/assets/Devopstrio_Partners/Lenovo-true-scale.svg"
      }
    ]
  },
  {
    title: "Enterprise Operations & Workflow Partners",
    partners: [
      {
        name: "ServiceNow",
        logo: "/assets/Devopstrio_Partners/service-now.svg"
      },
      {
        name: "Appian",
        logo: "/assets/Devopstrio_Partners/appian.svg"
      },
      {
        name: "ThreatLocker",
        logo: "/assets/Devopstrio_Partners/threatlocker.svg"
      },
      {
        name: "NinjaOne",
        logo: "/assets/Devopstrio_Partners/ninja-one.svg"
      }
    ]
  }
];

export function StrategicPartnerships() {
  return (
    <section id="strategic-partners" className="py-10 sm:py-14 bg-black text-white relative overflow-hidden z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header with Highlighted Credibility */}
        <div className="max-w-4xl mb-12 relative">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.35] text-white font-sans">
              Great work starts with trust and grows through{" "}
              <span className="relative inline-block">
                <span className="inline-block bg-rose-500 text-black font-extrabold px-3.5 py-0.5 mx-1.5 rounded-xs transform -rotate-3 shadow-[0_4px_20px_rgba(225,29,72,0.45)] align-middle">
                  Credibility
                </span>
                {/* Curved top-to-bottom side arrow image positioned directly AFTER Credibility */}
                <img src="/webp/assets/components/top-to-buttom-side-Arrowmid.webp"
                  alt="Side arrow pointing down"
                  className="absolute -bottom-14 sm:-bottom-20 md:-bottom-24 -right-8 sm:-right-12 md:-right-16 scale-x-[-1] w-10 sm:w-14 md:w-16 lg:w-18 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.5)] pointer-events-none select-none z-20"
                  loading="lazy" />
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-12">
          {partnerCategories.map((cat, idx) => (
            <div key={idx}>
              <Reveal>
                <div className="mb-6 border-b border-zinc-800 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-sans">{cat.title}</h3>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {cat.partners.map((partner, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl p-6 hover:border-rose-500/50 hover:bg-zinc-900/70 transition-all duration-300 h-32 sm:h-36 flex items-center justify-center cursor-pointer shadow-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={partner.logo}
                        alt={partner.name}
                        className="max-w-[80%] max-h-[75%] object-contain select-none transition-all duration-300 group-hover:scale-105 filter contrast-105"
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
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

export default StrategicPartnerships;
