"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const offices = [
  { 
    city: "London", 
    region: "(Head Office)", 
    details: "128 City Road, London, United Kingdom\nEC1V 2NX", 
    image: "/assets/locations/london.png",
    gradient: "from-rose-500 to-red-500",
    mapUrl: "https://www.google.com/maps/place/Devopstrio+ltd/@51.5245288,-0.1367657,14z/data=!3m1!5s0x4875cee4157f1139:0xd249cf37df391616!4m10!1m2!2m1!1sdevopstrio+ltd+uk!3m6!1s0x48760b08b17623d1:0x6617df320c1480ed!8m2!3d51.5272553!4d-0.0887416!15sChFkZXZvcHN0cmlvIGx0ZCB1a5IBEHNvZnR3YXJlX2NvbXBhbnngAQA!16s%2Fg%2F11s90s3cf8"
  },
  { 
    city: "Tennessee", 
    region: "(Sub-Regional Office)", 
    details: "522 Aventura Dr, Mt Juliet, Tennessee\n37122 United States",
    image: "/assets/locations/Tennessee.png",
    gradient: "from-zinc-500 to-zinc-300",
    mapUrl: "https://maps.google.com/?q=522+Aventura+Dr,+Mt+Juliet,+TN+37122"
  },
  { 
    city: "Bengaluru", 
    region: "(Corporate Office)", 
    details: "Embassy Golf Links Business Park,\nBengaluru, Karnataka-560071, India",
    image: "/assets/locations/Bengaluru.png",
    gradient: "from-zinc-400 to-zinc-200",
    mapUrl: "https://www.google.com/maps/place/Devopstrio+Pvt+Ltd/@11.2597005,71.6100439,6.11z/data=!4m10!1m2!2m1!1sDevopstrio+Pbangalore!3m6!1s0x3bae152b54eca867:0x980925bb507a328c!8m2!3d12.9513154!4d77.6464534!15sChVEZXZvcHN0cmlvIFBiYW5nYWxvcmVaFyIVZGV2b3BzdHJpbyBwYmFuZ2Fsb3JlkgEdY29tcHV0ZXJfc3VwcG9ydF9hbmRfc2VydmljZXPgAQA!16s%2Fg%2F11mdtl382s"
  },
  { 
    city: "London", 
    region: "(Support Office)", 
    details: "167-169 Great Portland Street, 5th Floor,\nLondon, W1W 5PF",
    image: "/assets/locations/london.png",
    gradient: "from-rose-600 to-red-700",
    mapUrl: "https://www.google.com/maps/place/Devopstrio+Ltd/@51.5217329,-0.1816995,14z/data=!3m1!5s0x48761b2a2ad5bccd:0x14f0e4cbfee2283a!4m10!1m2!2m1!1sdevopstrio+ltd+uk!3m6!1s0x48761bf02b1933c7:0x47453e7d1b549278!8m2!3d51.5217329!4d-0.1435907!15sChFkZXZvcHN0cmlvIGx0ZCB1a5IBHWNvbXB1dGVyX3N1cHBvcnRfYW5kX3NlcnZpY2Vz4AEA!16s%2Fg%2F11zcnb2t_d"
  },
  { 
    city: "Chennai", 
    region: "(Technology & Operations Center)", 
    details: "Ground Floor, Primus Building, Door No.\nSP – 7A, Guindy Industrial Estate, SIDCO\nIndustrial Estate, Chennai 600032",
    image: "/assets/locations/chennai.png",
    gradient: "from-orange-600 to-amber-500",
    mapUrl: "https://www.google.com/maps/place/Devopstrio+Pvt+Ltd/@13.0095316,80.2063518,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267f2a761f2c5:0x795e4dac8df70296!8m2!3d13.0095264!4d80.2089267!16s%2Fg%2F11nq0wrf8p"
  },
  { 
    city: "Thoothukudi", 
    region: "(Innovation Hub)", 
    details: "4/ 367, Rajeev Colony, Pasuvanthanai\n628718 Thoothukudi, Tamilnadu, IN",
    image: "/assets/locations/Thoothukudi.png",
    gradient: "from-red-600 to-orange-500",
    mapUrl: "https://www.google.com/maps/place/Devopstrio/@9.0039123,77.9576017,17z/data=!3m1!4b1!4m6!3m5!1s0x3b01557677b55437:0xdccfaa15cbbc87ca!8m2!3d9.0039123!4d77.9601766!16s%2Fg%2F11xw9tzf_k"
  }
];

export function GlobalLocations() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="pt-8 pb-4 border-t border-zinc-900/60">
      <Reveal>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            {/* <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-rose-500 block mb-2">
              OUR LOCATIONS
            </span> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Visit Our Global Offices
            </h2>
            {/* <p className="text-zinc-400 text-xs sm:text-sm font-semibold leading-relaxed">
              We&apos;d love to meet you in person. Our global locations and engineering hubs are always open for client visits, workshops, and architecture reviews.
            </p> */}
          </div>

          {/* Right Side Interactive Dropdown Button with linearrow.png */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:bg-rose-500/10 hover:border-rose-500/50 text-white transition-all duration-300 shrink-0 cursor-pointer shadow-md"
          >
            <span className="text-sm font-bold tracking-wider uppercase text-zinc-100 group-hover:text-rose-400">
              {isOpen ? "Hide Locations" : "View All Locations"}
            </span>
            <img src="/assets/components/linearrow.png"
              alt="Toggle arrow"
              className={`w-5 h-5 object-contain filter drop-shadow-[0_0_8px_rgba(244,63,94,0.5)] transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            loading="lazy" />
          </button>
        </div>
      </Reveal>

      {/* Expandable Grid */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 pt-6 pb-8 border-t border-zinc-900">
              {offices.map((office, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-full h-48 relative mb-4 overflow-hidden flex items-end justify-center">
                    <img src={office.image} 
                      alt={`${office.city} Office`}
                      className="object-contain h-full w-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    loading="lazy" />
                  </div>

                  <div className={`w-12 h-[3px] rounded-full bg-gradient-to-r ${office.gradient} mb-4 opacity-80`} />

                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-1.5 tracking-wide group-hover:text-rose-400 transition-colors">
                    {office.city}
                  </h4>

                  <span className="text-sm font-mono font-bold text-rose-500 uppercase tracking-widest mb-3">
                    {office.region}
                  </span>

                  <div className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed mb-6 max-w-[300px]">
                    {office.details.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>

                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-rose-500/50 bg-zinc-950/80 hover:bg-rose-600 text-zinc-100 hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md group/map cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-rose-500 group-hover/map:text-white transition-colors" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover/map:text-white transition-colors ml-0.5" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
