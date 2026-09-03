import type { MetadataRoute } from "next";
import { insights, services } from "@/lib/data";

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
      url: `https://keaas.com${path}`,
      lastModified: new Date(),
    })),
    ...insights.map((article) => ({
      url: `https://keaas.com/insights/${article.slug}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `https://keaas.com/services/${service.slug}`,
      lastModified: new Date(),
    })),
  ];
}
