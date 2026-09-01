import type { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export const metadata: Metadata = generatePageMetadata({
  ...getMetadataFromPath("/ecosystem/technology-stack/cloud-native"),
  path: "/ecosystem/technology-stack/cloud-native"
});

export default function CloudNativeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
