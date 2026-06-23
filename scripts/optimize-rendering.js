const fs = require("fs");
const path = require("path");

// 1. Optimize Ecosystem [subpage] routes to Server Components (SSG + Server Metadata)
const ecosystemDomains = [
  "technology-stack",
  "platforms-solutions",
  "innovation-labs",
  "partnerships",
  "engineering-excellence",
  "community-talent-network",
  "accelerators-frameworks"
];

ecosystemDomains.forEach((domain) => {
  const filePath = path.join(__dirname, `../app/ecosystem/${domain}/[subpage]/page.tsx`);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing ecosystem file: ${filePath}`);
    return;
  }

  console.log(`Optimizing ecosystem page: ${filePath}`);
  let content = fs.readFileSync(filePath, "utf8");

  // Remove "use client"
  content = content.replace(/"use client";?\r?\n?/g, "");
  content = content.replace(/'use client';?\r?\n?/g, "");

  // Update react imports (remove use import since we use await instead of use())
  content = content.replace(/import React, \{\s*use\s*\}\s*from\s*"react";/g, 'import React from "react";');
  content = content.replace(/import React,\s*\{\s*use\s*\}\s*from\s*'react';/g, 'import React from "react";');

  // Change to async function and await params
  content = content.replace(
    /export default function EcosystemSubpage\(\{\s*params\s*\}\s*:\s*SubpageProps\)\s*\{/g,
    "export default async function EcosystemSubpage({ params }: SubpageProps) {"
  );
  content = content.replace(
    /const \{\s*subpage\s*\}\s*=\s*use\(params\);/g,
    "const { subpage } = await params;"
  );

  // Inject generateMetadata and generateStaticParams if not present
  if (!content.includes("export async function generateMetadata")) {
    const metadataSnippet = `
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";

export async function generateMetadata({ params }: SubpageProps): Promise<Metadata> {
  const { subpage } = await params;
  const domain = "${domain}";
  const data = getEcosystemSubpage(domain, subpage);
  if (!data) return {};

  return generatePageMetadata({
    title: \`\${data.title} | Devopstrio\`,
    description: data.heroSubtitle,
    path: \`/ecosystem/\${domain}/\${subpage}\`
  });
}
`;
    content = content.replace(/interface SubpageProps/g, `${metadataSnippet}\ninterface SubpageProps`);
  }

  if (!content.includes("export async function generateStaticParams")) {
    const staticParamsSnippet = `
import { ecosystemSubpages } from "@/data/ecosystem";

export async function generateStaticParams() {
  const domain = "${domain}";
  const subpages = ecosystemSubpages[domain] || {};
  return Object.keys(subpages).map((slug) => ({
    subpage: slug
  }));
}
`;
    content += `\n${staticParamsSnippet}\n`;
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Successfully converted ${domain} [subpage] to server-component SSG!`);
});

// 2. Add generateStaticParams to all Services [capability] routes
const servicesCategories = [
  "ai-data-innovation",
  "cloud-services",
  "cybersecurity",
  "data-engineering",
  "devops-automation",
  "digital-transformation",
  "it-consulting",
  "managed-services",
  "qa-testing",
  "software-development"
];

servicesCategories.forEach((category) => {
  const filePath = path.join(__dirname, `../app/services/${category}/[capability]/page.tsx`);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing services file: ${filePath}`);
    return;
  }

  console.log(`Optimizing services page: ${filePath}`);
  let content = fs.readFileSync(filePath, "utf8");

  if (!content.includes("export async function generateStaticParams")) {
    const staticParamsSnippet = `
export async function generateStaticParams() {
  const service = "${category}";
  const serviceData = getServiceByCategory(service);
  if (!serviceData) return [];
  return serviceData.capabilities.map((cap) => ({
    capability: cap.slug
  }));
}
`;
    content += `\n${staticParamsSnippet}\n`;
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Successfully added generateStaticParams to ${category} [capability]!`);
  } else {
    console.log(`${category} [capability] already has generateStaticParams.`);
  }
});
