import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/v2`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/v1`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/v3`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
