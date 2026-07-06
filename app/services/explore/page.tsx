import React from "react";
import { Metadata } from "next";
import { ExploreClient } from "@/sections/services/ExploreClient";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export const metadata: Metadata = {
  title: "Service Capability Explorer | Devopstrio",
  description: "Explore the complete Devopstrio engineering ecosystem. Search 250+ cloud, AI innovation, DevOps automation, security, and digital transformation capabilities.",
  alternates: {
    canonical: "/services/explore"
  }
};

export default function ExplorePage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Explore Ecosystem", item: "/services/explore" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <BreadcrumbSchema items={breadcrumbs} />
      <ExploreClient />
    </main>
  );
}
