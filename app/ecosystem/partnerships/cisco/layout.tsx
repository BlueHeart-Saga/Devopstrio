import type { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export const metadata: Metadata = generatePageMetadata({
  ...getMetadataFromPath("/ecosystem/partnerships/cisco"),
  path: "/ecosystem/partnerships/cisco"
});

export default function CiscoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
