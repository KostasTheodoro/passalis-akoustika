import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

const abs = (p: string) => new URL(p, SITE.url).toString();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: [abs("/sitemap-index.xml"), abs("/sitemap.xml")],
  };
}
