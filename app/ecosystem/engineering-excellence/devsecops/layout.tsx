import type { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export const metadata: Metadata = generatePageMetadata({
  ...getMetadataFromPath("/ecosystem/engineering-excellence/devsecops"),
  path: "/ecosystem/engineering-excellence/devsecops"
});

export default function DevSecOpsExcellenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
