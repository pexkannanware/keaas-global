import type { MetadataRoute } from "next";
import { insights, services } from "@/lib/data";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/why-keaas",
    "/approach",
    "/experts",
    "/insights",
    "/leadership",
    "/careers",
    "/contact",
    "/case-studies",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    })),
    ...insights.map((article) => ({
      url: `${siteUrl}/insights/${article.slug}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
    })),
  ];
}
