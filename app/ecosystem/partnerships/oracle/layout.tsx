import type { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export const metadata: Metadata = generatePageMetadata({
  ...getMetadataFromPath("/ecosystem/partnerships/oracle"),
  path: "/ecosystem/partnerships/oracle"
});

export default function OracleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
