import React from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import { resolveUniversalLocationSlug } from "@/lib/location-universal-resolver";
import { generatePageMetadata } from "@/lib/seo-utils";
import { normalizeDisplayText } from "@/lib/text-utils";

export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveUniversalLocationSlug(slug);
  if (!resolved) {
    notFound();
  }

  const preferredRelativePath = `/locations/${resolved.countryCode}/${resolved.citySlug}-${resolved.serviceMapping.serviceSlug}`;

  return generatePageMetadata({
    title: normalizeDisplayText(resolved.serviceMapping.metaTitle),
    description: normalizeDisplayText(resolved.serviceMapping.metaDescription),
    path: preferredRelativePath,
    keywords: [
      normalizeDisplayText(resolved.serviceMapping.commercialIntentQuery),
      `${normalizeDisplayText(resolved.service?.title || "Cloud")} in ${resolved.cityName}`,
      `${normalizeDisplayText(resolved.service?.title || "DevOps")} ${resolved.cityName}`
    ]
  });
}

export default async function UniversalLocationServicePage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolveUniversalLocationSlug(slug);

  if (!resolved) {
    notFound();
  }

  // Permanently 301/308 redirect flat URLs to preferred country-based URL structure: /locations/[country]/[location]-[service]
  const preferredRelativePath = `/locations/${resolved.countryCode}/${resolved.citySlug}-${resolved.serviceMapping.serviceSlug}`;
  permanentRedirect(preferredRelativePath);
}
