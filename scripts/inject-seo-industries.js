const fs = require('fs');
const path = require('path');

const INDUSTRIES_DIR = path.join(__dirname, '..', 'app', 'industries');

// Mapping of slug to display name
const industryNames = {
  'banking-finance': 'Banking & Finance',
  'education': 'Education',
  'government-public-sector': 'Government & Public Sector',
  'healthcare-life-sciences': 'Healthcare & Life Sciences',
  'manufacturing': 'Manufacturing',
  'media-entertainment': 'Media & Entertainment',
  'retail-ecommerce': 'Retail & E-Commerce',
  'telecommunications': 'Telecommunications'
};

Object.entries(industryNames).forEach(([slug, displayName]) => {
  const pageFile = path.join(INDUSTRIES_DIR, slug, 'page.tsx');
  if (fs.existsSync(pageFile)) {
    let content = fs.readFileSync(pageFile, 'utf8');

    // Check if not already injected
    if (!content.includes('BreadcrumbSchema')) {
      console.log(`Processing industry page: ${slug}`);

      // 1. Remove "use client";
      content = content.replace(/"use client";\r?\n/, '');
      content = content.replace(/'use client';\r?\n/, '');

      // 2. Add imports
      content = content.replace(
        `import React from "react";`,
        `import React from "react";\nimport { Metadata } from "next";\nimport { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/Schemas";`
      );

      // 3. Find end of `const data = { ... }` object and insert generateMetadata
      // Let's locate the definition of `const data = { ... };` and insert metadata right after it.
      const dataEndStr = 'const data = {';
      const dataIndex = content.indexOf(dataEndStr);
      if (dataIndex !== -1) {
        // We'll search for the matching closing brace of `const data = { ... };`
        let openBraces = 0;
        let foundStart = false;
        let closingIndex = -1;

        for (let i = dataIndex; i < content.length; i++) {
          if (content[i] === '{') {
            openBraces++;
            foundStart = true;
          } else if (content[i] === '}') {
            openBraces--;
            if (foundStart && openBraces === 0) {
              // Found the end of the object. Look for the next semicolon.
              const semicolonIndex = content.indexOf(';', i);
              closingIndex = semicolonIndex !== -1 && semicolonIndex - i < 5 ? semicolonIndex : i;
              break;
            }
          }
        }

        if (closingIndex !== -1) {
          const insertPos = closingIndex + 1;
          const metadataStr = `\n\nexport async function generateMetadata(): Promise<Metadata> {\n  return {\n    title: \`\${data.hero.title} \${data.hero.highlightedWord}\`,\n    description: data.hero.subtitle,\n    alternates: {\n      canonical: \`/industries/${slug}\`\n    }\n  };\n}`;
          content = content.slice(0, insertPos) + metadataStr + content.slice(insertPos);
        }
      }

      // 4. Inject Schema Components inside the component return
      content = content.replace(
        `return (\n    <main className="min-h-screen bg-black text-white pt-16 font-sans">`,
        `return (\n    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Industries", item: "/industries" },
        { name: "${displayName}", item: "/industries/${slug}" }
      ]} />
      <ServiceSchema name="${displayName} Solutions" description={data.hero.subtitle} offers={data.capabilities.map(c => c.title)} />
      {data.faqs && <FAQSchema faqs={data.faqs} />}`
      );

      fs.writeFileSync(pageFile, content, 'utf8');
    }
  }
});

console.log('Industries SEO injection completed successfully!');
