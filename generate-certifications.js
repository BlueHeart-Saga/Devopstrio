const fs = require('fs');
const path = require('path');

// 1. Create the shared component
const componentContent = `"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CertBadge {
  name?: string;
  image: string;
}

interface PartnerCertificationsProps {
  title?: string;
  subtitle?: string;
  certifications: CertBadge[];
}

export function PartnerCertifications({ 
  title = "Partner Certifications & Accreditations", 
  subtitle = "Our teams are rigorously trained and certified to ensure world-class solution deliveries.",
  certifications 
}: PartnerCertificationsProps) {
  if (!certifications || certifications.length === 0) return null;

  return (
    <div id="certifications" className="scroll-mt-24">
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
              VERIFIED EXPERTISE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white drop-shadow-md">
              {title}
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              {subtitle}
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300 text-center gap-4 group w-[160px] md:w-[180px]"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2 relative group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={cert.image} 
                    alt={cert.name || \`Certification \${idx + 1}\`} 
                    className="w-full h-full object-contain filter brightness-95 contrast-105" 
                  />
                </div>
                {cert.name && (
                  <h4 className="text-xs font-bold text-zinc-350 group-hover:text-white transition-colors leading-snug">
                    {cert.name}
                  </h4>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
`;

fs.writeFileSync('c:/Sagadevan/Devopstrio/sections/ecosystem/partnerships/PartnerCertifications.tsx', componentContent);

// 2. Process each page
const vendors = [
  { id: 'aws', title: 'AWS Certifications', folder: 'aws-awards' },
  { id: 'cisco', title: 'Cisco Certifications', folder: 'Cisco_Awards' },
  { id: 'google-cloud', title: 'Google Cloud Certifications', folder: 'GCP-award' },
  { id: 'microsoft', title: 'Microsoft Certifications', folder: 'microsofr-awards' },
  { id: 'oracle', title: 'Oracle Certifications', folder: 'ORACLE_Awards' },
  { id: 'sap', title: 'SAP Certifications', folder: 'Sap_Awards' },
  { id: 'servicenow', title: 'ServiceNow Certifications', folder: 'Servicenow_Aards' }
];

vendors.forEach(vendor => {
  const pagePath = `c:/Sagadevan/Devopstrio/app/ecosystem/partnerships/${vendor.id}/page.tsx`;
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Fix broken injections first! (const certifications = [...]; return () inside faqs.map)
  content = content.replace(/const certifications = \[\s*[\s\S]*?\s*\];\s*return \(/g, 'return (');

  // Add the import if not exists
  if (!content.includes('PartnerCertifications')) {
    content = content.replace(/import \{ SectionNavbar \} from "@\/components\/ui\/SectionNavbar";/, 
      `import { SectionNavbar } from "@/components/ui/SectionNavbar";\nimport { PartnerCertifications } from "@/sections/ecosystem/partnerships/PartnerCertifications";`);
  }

  // Generate the certifications array from files
  const imagesDir = `c:/Sagadevan/Devopstrio/public/assets/ecosystem/${vendor.folder}`;
  let certsCode = '[]';
  
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png') || f.endsWith('.svg') || f.endsWith('.jpg'));
    const certsArray = files.map(file => {
      return `{ image: "/assets/ecosystem/${vendor.folder}/${file}" }`;
    });
    certsCode = `[\n            ${certsArray.join(',\n            ')}\n          ]`;
  }

  // Inject the component before the FINAL CTA
  if (!content.includes('<PartnerCertifications')) {
    const injection = `
      {/* CERTIFICATIONS */}
      <PartnerCertifications 
        title="${vendor.title}"
        certifications={${certsCode}}
      />
`;
    // Find where to inject: before "{/* 8. FINAL CTA" or "{/* 7. FINAL CTA"
    content = content.replace(/\{\/\*\s*\d+\.\s*FINAL CTA\s*\*\/\}/, (match) => {
      return injection + '\n      ' + match;
    });
  }

  fs.writeFileSync(pagePath, content);
  console.log(`Updated ${vendor.id}`);
});
console.log('All done!');
