import type { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export const metadata: Metadata = generatePageMetadata({
  ...getMetadataFromPath("/ecosystem/community-talent-network/talent-network"),
  path: "/ecosystem/community-talent-network/talent-network"
});

export default function TalentNetworkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
