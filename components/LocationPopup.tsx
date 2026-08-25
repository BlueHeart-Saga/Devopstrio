import React from "react";
import { X, ArrowUpRight } from "lucide-react";

interface Office {
  city: string;
  region: string;
  details: string;
  image: string;
  gradient: string;
  mapUrl: string;
}

const offices: Office[] = [
  { 
    city: "London", 
    region: "(Head Office)", 
    details: "128 City Road, London, United Kingdom\nEC1V 2NX", 
    image: "/webp/assets/locations/london.webp",
    gradient: "from-rose-500 to-red-500",
    mapUrl: "https://www.google.com/maps/place/Devopstrio+Ltd/@51.5272749,-0.0913978,646m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48761de53ed821b3:0x76b8b1beb8ae8846!8m2!3d51.5272749!4d-0.0888229!16s%2Fg%2F11xl88t9lx?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  { 
    city: "Tennessee", 
    region: "(Sub-Regional Office)", 
    details: "522 Aventura Dr, Mt Juliet, Tennessee\n37122 United States",
    image: "/webp/assets/locations/Tennessee.webp",
    gradient: "from-zinc-500 to-zinc-300",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=522+Aventura+Dr,+Mt+Juliet,+Tennessee+37122+United+States"
  },
  { 
    city: "Bengaluru", 
    region: "(Corporate Office)", 
    details: "Embassy Golf Links Business Park,\nBengaluru, Karnataka-560071, India",
    image: "/webp/assets/locations/Bengaluru.webp",
    gradient: "from-zinc-400 to-zinc-200",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Embassy+Golf+Links+Business+Park,+Bengaluru,+Karnataka-560071,+India"
  },
  { 
    city: "London", 
    region: "(Support Office)", 
    details: "167-169 Great Portland Street, 5th Floor,\nLondon, W1W 5PF",
    image: "/webp/assets/locations/london.webp",
    gradient: "from-rose-600 to-red-700",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=167-169+Great+Portland+Street,+London,+W1W+5PF"
  },
  { 
    city: "Chennai", 
    region: "(Operations Center)", 
    details: "Ground Floor, Primus Building, Door No.\nSP – 7A, Guindy Industrial Estate, SIDCO\nIndustrial Estate, Chennai 600032",
    image: "/webp/assets/locations/chennai.webp",
    gradient: "from-orange-600 to-amber-500",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Primus+Building,+Guindy+Industrial+Estate,+Chennai+600032"
  },
  { 
    city: "Thoothukudi", 
    region: "(Operations Center)", 
    details: "4/ 367, Rajeev Colony, Pasuvanthanai\n628718 Thoothukudi, Tamilnadu, IN",
    image: "/webp/assets/locations/Thoothukudi.webp",
    gradient: "from-red-600 to-orange-500",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rajeev+Colony,+Pasuvanthanai+628718+Thoothukudi"
  }
];

interface LocationPopupProps {
  closePopup: () => void;
}

const LocationPopup: React.FC<LocationPopupProps> = ({ closePopup }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-[100000] p-4 md:p-8 animate-fade-in"
      onClick={closePopup}
    >
      <div 
        className="bg-[#0a0a0a] w-full max-w-6xl rounded-3xl border border-zinc-900 shadow-2xl relative flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10"
          onClick={closePopup} 
          aria-label="Close location popup"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="p-8 md:p-12 pb-2 text-center">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
            OUR LOCATIONS
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
            Select Global Location
          </h3>
          <p className="text-zinc-500 text-xs md:text-sm font-semibold max-w-lg mx-auto leading-relaxed">
            Click on any office card to open its verified location pin directly on Google Maps.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 md:px-12 pb-12 pt-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {offices.map((office, idx) => (
              <a
                key={idx}
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center group cursor-pointer transition-all duration-350"
              >
                {/* Office Image */}
                <div className="w-full h-40 relative mb-6 overflow-hidden flex items-end justify-center">
                  <img src={office.image} 
                    alt={`${office.city} Office`}
                    className="object-contain h-full w-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy" />
                </div>

                {/* Gradient divider line */}
                <div className={`w-12 h-[3px] rounded-full bg-gradient-to-r ${office.gradient} mb-6 opacity-80`} />

                {/* City name */}
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-rose-450 transition-colors">
                  {office.city}
                </h4>

                {/* Details */}
                <div className="text-xs md:text-sm text-zinc-400 font-medium leading-relaxed mb-6 max-w-[280px]">
                  {office.details.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>

                {/* Button Action */}
                <div className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-lg text-[10px] font-bold tracking-wider uppercase border border-zinc-800 group-hover:border-rose-500/40 bg-zinc-950/60 group-hover:bg-rose-500/10 text-zinc-400 group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5 shadow-sm group-hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]">
                  <span>Go to Live Location</span>
                  <ArrowUpRight size={12} className="text-zinc-500 group-hover:text-rose-500 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
