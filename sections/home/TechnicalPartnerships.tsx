"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const techStack = [
  { name: "AWS", icon: "/assets/Techtools/aws-color.svg" },
  { name: "Azure", icon: "/assets/Techtools/azure-color.svg" },
  { name: "Google Cloud", icon: "/assets/Techtools/google-color.svg" },
  { name: "Node.js", icon: "/assets/Techtools/Node.svg" },
  { name: "Python", icon: "/assets/Techtools/Python.svg" },
  { name: "Go", icon: "/assets/Techtools/GO.svg" },
  { name: "Java", icon: "/assets/Techtools/java-colored.svg" },
  { name: ".NET", icon: "/assets/Techtools/net.svg" },
  { name: "React", icon: "/assets/Techtools/React.svg" },
  { name: "Next.js", icon: "/assets/Techtools/next-js-color.svg" },
  { name: "Angular", icon: "/assets/Techtools/Angular.svg" },
  { name: "Flutter", icon: "/assets/Techtools/flutter.svg" },
  { name: "PostgreSQL", icon: "/assets/Techtools/postgre.svg" },
  { name: "MySQL", icon: "/assets/Techtools/MySQL.svg" },
  { name: "C++", icon: "/assets/Techtools/Cplusplus.svg" },
  { name: "Ruby", icon: "/assets/Techtools/Ruby.svg" },
  { name: "PHP", icon: "/assets/Techtools/PHP.svg" },
  { name: "iOS", icon: "/assets/Techtools/iOS.svg" },
  { name: "Android", icon: "/assets/Techtools/Android.svg" },
  { name: "Microsoft", icon: "/assets/partners/Microsoft.svg" },
  { name: "Lenovo", icon: "/assets/partners/lenovo.svg" },
  { name: "ServiceNow", icon: "/assets/partners/servicenow.svg" },
  { name: "GoDaddy", icon: "/assets/partners/godaddy.svg" },
  { name: "BT", icon: "/assets/partners/BT.svg" },
  { name: "NHS", icon: "/assets/partners/NHS.svg" },
  { name: "Airbnb", icon: "/assets/partners/Airbnb.svg" },
  { name: "Costco", icon: "/assets/partners/Costco.svg" },
  { name: "ASDA", icon: "/assets/partners/ASDA.svg" },
  { name: "Virgin", icon: "/assets/partners/Virgin.svg" },
  { name: "BP", icon: "/assets/partners/bp-logo.svg" },
];

export function TechnicalPartnerships() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="w-full py-24 md:py-32 bg-[#050505] text-white border-b border-zinc-900 relative overflow-hidden">
      
      {/* Background ambient lighting - Custom Wave Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img 
          src="/assets/wavebg/image.png" 
          alt="Background Wave" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <Reveal>
            <div className="flex flex-col justify-center w-full lg:max-w-[90%] xl:max-w-[85%]">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block mb-4">
                TECHNOLOGY ECOSYSTEM
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight text-white leading-[1.1] mb-6">
                Strategic Technology Partnerships <br className="hidden md:block" />
                <span className="font-bold text-white">
                  The Foundation Behind Digital Success
                </span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light mb-12">
                Hover over the nodes to explore the integrated tools in our delivery pipeline.
              </p>
              
              <div className="flex flex-col gap-6 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-rose-500 via-rose-900 to-transparent"></div>
                
                <div className="pl-6">
                  <h4 className="text-white font-bold text-lg mb-2">Cloud Native</h4>
                  <p className="text-sm text-zinc-500">Scalable, resilient architectures built on leading global platforms.</p>
                </div>
                
                <div className="pl-6">
                  <h4 className="text-white font-bold text-lg mb-2">Secure by Design</h4>
                  <p className="text-sm text-zinc-500">Integrated security and compliance at every stage of the pipeline.</p>
                </div>

                <div className="pl-6 pt-6">
                  <div className="h-[2px] w-12 bg-rose-500 mb-3"></div>
                  <div className="text-rose-500 text-xs font-black tracking-widest uppercase">
                    {hoveredTech ? `Viewing: ${hoveredTech}` : "Interactive Ecosystem"}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Content - Tech Grid */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3 relative">
              {/* Dynamic glow effect behind the grid */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/10 to-transparent blur-3xl -z-10 rounded-full" />
              
              {techStack.map((tech, i) => (
                <div 
                  key={`${tech.name}-${i}`}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className={`
                    bg-white rounded-lg flex items-center justify-center p-2 md:p-3 
                    aspect-square shadow-md cursor-pointer transition-all duration-300
                    hover:-translate-y-1 hover:shadow-rose-500/30 hover:shadow-lg
                    ${hoveredTech && hoveredTech !== tech.name ? 'opacity-40 scale-95 grayscale' : 'opacity-100 scale-100'}
                  `}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    title={tech.name}
                    className="w-[85%] h-[85%] object-contain transition-transform duration-300" 
                  />
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
