const fs = require('fs');
const path = require('path');

const SERVICES_DIR = path.join(__dirname, '..', 'app', 'services');

// List of all 10 service categories
const categories = [
  'ai-data-innovation',
  'cloud-services',
  'cybersecurity',
  'data-engineering',
  'devops-automation',
  'digital-transformation',
  'it-consulting',
  'managed-services',
  'qa-testing',
  'software-development'
];

categories.forEach(category => {
  const categoryPath = path.join(SERVICES_DIR, category);
  
  // 1. Process category page.tsx
  const pageFile = path.join(categoryPath, 'page.tsx');
  if (fs.existsSync(pageFile)) {
    let content = fs.readFileSync(pageFile, 'utf8');
    
    // Check if not already injected
    if (!content.includes('BreadcrumbSchema')) {
      console.log(`Processing category page: ${category}`);
      
      // Add imports
      content = content.replace(
        `import { FAQ } from "@/components/services/FAQ";`,
        `import { FAQ } from "@/components/services/FAQ";\nimport { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/Schemas";`
      );
      
      // Update generateMetadata alternates
      content = content.replace(
        `openGraph: {
      title: \`\${data.title} | Devopstrio\`,
      description: data.subtitle
    }`,
        `openGraph: {
      title: \`\${data.title} | Devopstrio\`,
      description: data.subtitle
    },
    alternates: {
      canonical: \`/services/\${service}\`
    }`
      );
      
      // Insert Schema Components inside return
      content = content.replace(
        `return (
    <main className="min-h-screen bg-black text-white font-sans">`,
        `return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: data.title, item: \`/services/\${service}\` }
      ]} />
      <ServiceSchema name={data.title} description={data.subtitle} offers={data.capabilities.map(c => c.title)} />
      {data.faqs && <FAQSchema faqs={data.faqs} />}`
      );
      
      fs.writeFileSync(pageFile, content, 'utf8');
    }
  }

  // 2. Process [capability]/page.tsx
  const capFile = path.join(categoryPath, '[capability]', 'page.tsx');
  if (fs.existsSync(capFile)) {
    let content = fs.readFileSync(capFile, 'utf8');
    
    // Check if not already injected
    if (!content.includes('BreadcrumbSchema')) {
      console.log(`Processing capability page: ${category}/[capability]`);
      
      // Add imports
      content = content.replace(
        `import { FAQ } from "@/components/services/FAQ";`,
        `import { FAQ } from "@/components/services/FAQ";\nimport { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/Schemas";`
      );
      
      // Update generateMetadata alternates
      content = content.replace(
        `openGraph: {
      title: \`\${data.title} | Devopstrio\`,
      description: data.heroSubtitle
    }`,
        `openGraph: {
      title: \`\${data.title} | Devopstrio\`,
      description: data.heroSubtitle
    },
    alternates: {
      canonical: \`/services/\${service}/\${capability}\`
    }`
      );
      
      // Insert Schema Components inside return
      content = content.replace(
        `return (
    <main className="min-h-screen bg-black text-white font-sans">`,
        `return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: serviceData.title, item: \`/services/\${service}\` },
        { name: data.title, item: \`/services/\${service}/\${capability}\` }
      ]} />
      <ServiceSchema name={data.title} description={data.heroSubtitle} offers={data.benefits} />
      {data.faqs && <FAQSchema faqs={data.faqs} />}`
      );
      
      fs.writeFileSync(capFile, content, 'utf8');
    }
  }
});

console.log('Services SEO injection completed successfully!');
