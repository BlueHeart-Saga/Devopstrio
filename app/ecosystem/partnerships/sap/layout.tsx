import type { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export const metadata: Metadata = generatePageMetadata({
  ...getMetadataFromPath("/ecosystem/partnerships/sap"),
  path: "/ecosystem/partnerships/sap"
});

export default function SapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
