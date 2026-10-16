import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCapabilityData } from "@/data/ecosystem/capabilities-registry";
import CapabilityMasterTemplate from "@/components/ecosystem/technology/CapabilityMasterTemplate";

interface PageProps {
  params: Promise<{ capability: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const data = getCapabilityData("artificial-intelligence", resolved.capability);
  if (!data) return { title: "Capability Not Found | DevOpsTrio" };
  return {
    title: `${data.title} | DevOpsTrio AI Architecture`,
    description: data.description || data.subtitle,
  };
}

export default async function AICapabilityPage({ params }: PageProps) {
  const resolved = await params;
  const data = getCapabilityData("artificial-intelligence", resolved.capability);

  if (!data) {
    notFound();
  }

  return <CapabilityMasterTemplate data={data} />;
}
