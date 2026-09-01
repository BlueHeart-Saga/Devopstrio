import type { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export const metadata: Metadata = generatePageMetadata({
  ...getMetadataFromPath("/ecosystem/accelerators-frameworks/data-framework"),
  path: "/ecosystem/accelerators-frameworks/data-framework"
});

export default function DataFrameworkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
