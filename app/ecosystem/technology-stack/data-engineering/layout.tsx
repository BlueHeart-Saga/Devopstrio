import type { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export const metadata: Metadata = generatePageMetadata({
  ...getMetadataFromPath("/ecosystem/technology-stack/data-engineering"),
  path: "/ecosystem/technology-stack/data-engineering"
});

export default function TechDataEngineeringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
