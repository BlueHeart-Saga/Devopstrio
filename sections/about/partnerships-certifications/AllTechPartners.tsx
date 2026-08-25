"use client";

import { Reveal } from "@/components/ui/Reveal";

const techPartners = [
  {
    name: "AWS",
    logo: "/webp/assets/Devopstrio_Partners/aws.webp"
  },
  {
    name: "Google Cloud",
    logo: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg"
  },
  {
    name: "Docker",
    logo: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg"
  },
  {
    name: "GitLab",
    logo: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg"
  },
  {
    name: "PostgreSQL",
    logo: "/assets/Tech-icons/postgre-sql-logo_svgstack_com_29021780931526.svg"
  },
  {
    name: "Python",
    logo: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg"
  },
  {
    name: "Node.js",
    logo: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg"
  },
  {
    name: "TypeScript",
    logo: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg"
  }
];

export function AllTechPartners() {
  return (
    <section className="py-10 sm:py-14 bg-black text-white relative overflow-hidden z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              Our Tech <span className="text-rose-600">Partners</span>
            </h2>
          </div>
        </Reveal>

        {/* Auto-scrolling Marquee Container */}
        <div
          className="w-full overflow-hidden pb-8 pt-2 relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)'
          }}
        >
          <style>{`
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-marquee-reverse {
              animation: marquee-reverse 45s linear infinite;
            }
            .animate-marquee-reverse:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex w-max animate-marquee-reverse">
            {/* First Set */}
            <div className="flex gap-6 pr-6">
              {techPartners.map((partner, i) => (
                <div
                  key={`tech-a-${i}`}
                  className="w-[200px] sm:w-[240px] h-28 sm:h-32 shrink-0 p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-xl flex items-center justify-center hover:border-rose-500/50 hover:bg-zinc-900/70 transition-all duration-300 cursor-pointer group shadow-xl"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={partner.logo}
                    alt={partner.name}
                    className="max-w-[80%] max-h-[75%] object-contain select-none transition-all duration-300 group-hover:scale-105 filter contrast-105"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>

            {/* Second Set (Duplicate for seamless scroll) */}
            <div className="flex gap-6 pr-6">
              {techPartners.map((partner, i) => (
                <div
                  key={`tech-b-${i}`}
                  className="w-[200px] sm:w-[240px] h-28 sm:h-32 shrink-0 p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-xl flex items-center justify-center hover:border-rose-500/50 hover:bg-zinc-900/70 transition-all duration-300 cursor-pointer group shadow-xl"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={partner.logo}
                    alt={partner.name}
                    className="max-w-[80%] max-h-[75%] object-contain select-none transition-all duration-300 group-hover:scale-105 filter contrast-105"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllTechPartners;
