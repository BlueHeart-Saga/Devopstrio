import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCapabilityData } from "@/data/ecosystem/capabilities-registry";
import CapabilityMasterTemplate from "@/components/ecosystem/technology/CapabilityMasterTemplate";

interface PageProps {
  params: Promise<{ capability: string }> | { capability: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const data = getCapabilityData("emerging-technologies", resolved.capability);
  if (!data) return { title: "Capability Not Found | DevOpsTrio" };
  return {
    title: `${data.title} | DevOpsTrio Emerging Technologies`,
    description: data.description,
  };
}

export default async function EmergingCapabilityPage({ params }: PageProps) {
  const resolved = await Promise.resolve(params);
  const data = getCapabilityData("emerging-technologies", resolved.capability);

  if (!data) {
    notFound();
  }

  return <CapabilityMasterTemplate data={data} />;
}
