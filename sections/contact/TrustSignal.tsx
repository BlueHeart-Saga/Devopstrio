"use client";

import React from "react";

const certLogos = [
  // Compliance
  { name: "GDPR", src: "/assets/About-page/complience-Logos/GDPR.png" },
  { name: "ISO", src: "/assets/About-page/complience-Logos/ISO.png" },
  { name: "HIPAA", src: "/assets/About-page/complience-Logos/HIPAA.png" },
  { name: "NIST", src: "/assets/About-page/complience-Logos/NIST.png" },
  { name: "FDA", src: "/assets/About-page/complience-Logos/FDA.png" },
  // Certifications
  { name: "AWS", src: "/assets/About-page/Certification/Aws_1.svg" },
  { name: "Azure", src: "/assets/About-page/Certification/AZURE-icon.svg" },
  { name: "CISSP", src: "/assets/About-page/Certification/cissp.svg" },
  { name: "OSCP", src: "/assets/About-page/Certification/oscp.svg" },
  { name: "CREST", src: "/assets/About-page/Certification/CREST.svg" },
  { name: "CEH", src: "/assets/About-page/Certification/CEH.svg" },
  // Our Certifications
  { name: "Group 1", src: "/assets/About-page/our-Certification/Group_1.png" },
  { name: "Group 2", src: "/assets/About-page/our-Certification/Group_2.png" },
  { name: "Group 3", src: "/assets/About-page/our-Certification/Group_3.png" },
  { name: "Group 4", src: "/assets/About-page/our-Certification/Group_4.png" },
  { name: "Group 5", src: "/assets/About-page/our-Certification/Group_5.png" },
  { name: "Group 6", src: "/assets/About-page/our-Certification/Group_6.png" },
  { name: "Group 7", src: "/assets/About-page/our-Certification/Group_7.png" },
  { name: "Group 8", src: "/assets/About-page/our-Certification/Group_8.png" },
  { name: "Group 9", src: "/assets/About-page/our-Certification/Group_9.png" },
  { name: "Group 10", src: "/assets/About-page/our-Certification/Group_10.png" }
];

export function TrustSignal() {
  return (
    <section className="w-full py-8 bg-black border-y border-zinc-900/50 overflow-hidden" aria-label="Certifications and Compliance">
      <div className="flex whitespace-nowrap overflow-x-hidden relative w-full">
        <div className="flex gap-16 items-center animate-marquee">
          {[...certLogos, ...certLogos].map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex-shrink-0 flex items-center justify-center">
              <img src={item.src}
                alt={item.name}
                className="h-8 md:h-11 w-auto object-contain pointer-events-none select-none"
              loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSignal;
