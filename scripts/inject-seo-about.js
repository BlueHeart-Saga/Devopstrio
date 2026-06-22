const fs = require('fs');
const path = require('path');

const ABOUT_DIR = path.join(__dirname, '..', 'app', 'about');

const aboutPages = {
  'company-overview': {
    title: 'Company Overview',
    desc: 'Devopstrio helps enterprises build, modernize and scale mission-critical AI platforms, cloud infrastructure and digital products.'
  },
  'awards-recognition': {
    title: 'Awards & Recognition',
    desc: 'Explore the industry awards and engineering recognition received by Devopstrio.'
  },
  'customer-support': {
    title: 'Customer Support',
    desc: 'Get 24/7 technical support, billing assistance, and customer service from Devopstrio.'
  },
  'global-presence': {
    title: 'Global Presence',
    desc: 'Find our international developer hubs and sales offices across the globe.'
  },
  'leadership-team': {
    title: 'Leadership & Team',
    desc: 'Meet the executive leadership and technical directors guiding Devopstrio.'
  },
  'life-at-devopstrio': {
    title: 'Life at Devopstrio',
    desc: 'Learn about the collaborative culture, work environment, and team perks at Devopstrio.'
  },
  'partnerships-certifications': {
    title: 'Partnerships & Certifications',
    desc: 'Our industry certifications and co-engineering alliances with AWS, Microsoft Azure, Google Cloud, and Oracle.'
  },
  'sustainability-csr': {
    title: 'Sustainability & CSR',
    desc: 'Our environmental pledge to green cloud hosting and community engineering initiatives.'
  },
  'testimonials': {
    title: 'Client Testimonials & Success',
    desc: 'Read authentic feedback and success stories from our enterprise engineering clients.'
  }
};

Object.entries(aboutPages).forEach(([slug, info]) => {
  const pageFile = path.join(ABOUT_DIR, slug, 'page.tsx');
  if (fs.existsSync(pageFile)) {
    let content = fs.readFileSync(pageFile, 'utf8');

    // Check if not already injected
    if (!content.includes('BreadcrumbSchema')) {
      console.log(`Processing about page: ${slug}`);

      // 1. Remove "use client";
      content = content.replace(/"use client";\r?\n/, '');
      content = content.replace(/'use client';\r?\n/, '');

      // 2. Add imports
      content = content.replace(
        `import React from "react";`,
        `import React from "react";\nimport { Metadata } from "next";\nimport { BreadcrumbSchema } from "@/components/seo/Schemas";`
      );

      // 3. Inject metadata export
      const metadataStr = `\n\nexport const metadata: Metadata = {\n  title: "${info.title}",\n  description: "${info.desc}",\n  alternates: {\n    canonical: "/about/${slug}"\n  }\n};\n`;
      
      // Let's insert metadata before the default export
      const exportStr = 'export default function';
      const exportIndex = content.indexOf(exportStr);
      if (exportIndex !== -1) {
        content = content.slice(0, exportIndex) + metadataStr + content.slice(exportIndex);
      }

      // 4. Inject Schema Components inside the component return
      content = content.replace(
        `return (\n    <main className="min-h-screen bg-black text-white pt-16 font-sans">`,
        `return (\n    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "${info.title}", item: "/about/${slug}" }
      ]} />`
      );

      fs.writeFileSync(pageFile, content, 'utf8');
    }
  }
});

console.log('About pages SEO injection completed successfully!');
