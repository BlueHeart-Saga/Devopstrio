"use client";

import React from "react";

const certLogos = [
  // Compliance
  { name: "GDPR", src: "/webp/assets/About-page/complience-Logos/GDPR.webp" },
  { name: "ISO", src: "/webp/assets/About-page/complience-Logos/ISO.webp" },
  { name: "HIPAA", src: "/webp/assets/About-page/complience-Logos/HIPAA.webp" },
  { name: "NIST", src: "/webp/assets/About-page/complience-Logos/NIST.webp" },
  { name: "FDA", src: "/webp/assets/About-page/complience-Logos/FDA.webp" },
  // Certifications
  { name: "AWS", src: "/assets/About-page/Certification/Aws_1.svg" },
  { name: "Azure", src: "/assets/About-page/Certification/AZURE-icon.svg" },
  { name: "CISSP", src: "/assets/About-page/Certification/cissp.svg" },
  { name: "OSCP", src: "/assets/About-page/Certification/oscp.svg" },
  { name: "CREST", src: "/assets/About-page/Certification/CREST.svg" },
  { name: "CEH", src: "/assets/About-page/Certification/CEH.svg" },
  // Our Certifications
  { name: "Group 1", src: "/webp/assets/About-page/our-Certification/Group_1.webp" },
  { name: "Group 2", src: "/webp/assets/About-page/our-Certification/Group_2.webp" },
  { name: "Group 3", src: "/webp/assets/About-page/our-Certification/Group_3.webp" },
  { name: "Group 4", src: "/webp/assets/About-page/our-Certification/Group_4.webp" },
  { name: "Group 5", src: "/webp/assets/About-page/our-Certification/Group_5.webp" },
  { name: "Group 6", src: "/webp/assets/About-page/our-Certification/Group_6.webp" },
  { name: "Group 7", src: "/webp/assets/About-page/our-Certification/Group_7.webp" },
  { name: "Group 8", src: "/webp/assets/About-page/our-Certification/Group_8.webp" },
  { name: "Group 9", src: "/webp/assets/About-page/our-Certification/Group_9.webp" },
  { name: "Group 10", src: "/webp/assets/About-page/our-Certification/Group_10.webp" }
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
