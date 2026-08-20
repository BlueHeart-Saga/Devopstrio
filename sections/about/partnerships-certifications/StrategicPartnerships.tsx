"use client";

import { Reveal } from "@/components/ui/Reveal";

const partnerCategories = [
  {
    title: "Cloud & Platform Partners",
    partners: [
      {
        name: "Microsoft",
        logo: "/assets/Devopstrio_Partners/Microsoft.svg",
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
        name: "Lenovo TrueScale",
        logo: "/assets/Devopstrio_Partners/Lenovo true scale.svg",
        value: "Strengthening enterprise hybrid cloud infrastructure and scalable compute resources."
      }
    ]
  },
  {
    title: "Enterprise Operations & Workflow Partners",
    partners: [
      {
        name: "ServiceNow",
        logo: "/assets/Devopstrio_Partners/service now.svg",
        value: "Supporting workflow automation and digital operations transformation."
      },
      {
        name: "Appian",
        logo: "/assets/Devopstrio_Partners/appian.svg",
        value: "Accelerating enterprise low-code process automation and case management."
      },
      {
        name: "ThreatLocker",
        logo: "/assets/Devopstrio_Partners/threatlocker.svg",
        value: "Enforcing zero-trust endpoint security, ringfencing, and privilege controls."
      },
      {
        name: "NinjaOne",
        logo: "/assets/Devopstrio_Partners/ninja one.svg",
        value: "Automating unified IT endpoint management and remote monitoring infrastructure."
      }
    ]
  }
];

export function StrategicPartnerships() {
  return (
    <section id="strategic-partners" className="py-10 sm:py-14 bg-black text-white relative overflow-hidden z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              Strategic Partnerships That <br className="hidden md:block" />
              <span className="text-rose-600">Strengthen Our Delivery Model</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-12">
          {partnerCategories.map((cat, idx) => (
            <div key={idx}>
              <Reveal>
                <div className="mb-6 border-b border-zinc-800 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-sans">{cat.title}</h3>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.partners.map((partner, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-xl p-6 hover:border-rose-500/50 hover:bg-zinc-900/40 transition-all duration-300 h-full flex flex-col items-start">
                      <div className="w-full h-32 shrink-0 bg-zinc-900/40 rounded-xl flex items-center justify-center p-4 border border-zinc-800/60 mb-6 group-hover:border-zinc-700/80 transition-colors">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-[85%] max-h-[85%] object-contain transition-all duration-300 group-hover:scale-105"
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2.5 group-hover:text-rose-400 transition-colors font-sans">{partner.name}</h4>
                        <p className="text-sm text-zinc-300 font-normal leading-relaxed font-sans">
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
