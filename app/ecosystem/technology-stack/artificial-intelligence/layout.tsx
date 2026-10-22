import type { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export const metadata: Metadata = generatePageMetadata({
  ...getMetadataFromPath("/ecosystem/technology-stack/artificial-intelligence"),
  path: "/ecosystem/technology-stack/artificial-intelligence"
});

export default function ArtificialIntelligenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
