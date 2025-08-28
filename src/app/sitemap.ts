import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls = [
    "/",
    "/akoustika",
    "/akoustika/cic",
    "/akoustika/ric",
    "/akoustika/bte",
    "/akoustika/rechargeable",
    "/sxetika-me-mas",
    "/syxnes-erotiseis",
    "/epikoinonia",
    "/synergates",
    "/synergates/eopyy",
    "/synergates/paroxoi",
  ];
  return urls.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
