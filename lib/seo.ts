import type { Metadata } from "next";

export const siteUrl = "https://keaasglobal.com";
export const siteName = "KEAAS Global Services";
export const ogImage = { url: "/KEAAS-web-site.png", alt: "KEAAS Global Services" };

export const baseKeywords = [
  "KEAAS",
  "KEAAS Global Services",
  "SAP consultants",
  "SAP experts",
  "SAP consulting services",
  "SAP staff augmentation",
  "SAP talent for System Integrators",
  "SAP S/4HANA consultants",
  "SAP functional consultants",
  "SAP technical consultants",
  "SAP AMS support",
  "Experts as a Service",
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

// Next.js merges metadata shallowly, so each page rebuilds openGraph/twitter
// to keep the site name and share image alongside its own title.
export function pageMetadata({ title, description, path, keywords = [], type = "website" }: PageSeo): Metadata {
  return {
    title,
    description,
    keywords: [...keywords, ...baseKeywords],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${siteName}`,
      description,
      url: path,
      type,
      locale: "en_GB",
      siteName,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${siteName}`,
      description,
      images: [ogImage.url],
    },
  };
}
