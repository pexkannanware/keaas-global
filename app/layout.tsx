import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { company } from "@/lib/data";
import { baseKeywords, ogImage, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "KEAAS Global Services (KEAAS) | SAP Experts",
    template: "%s · KEAAS Global Services",
  },
  description: company.description,
  keywords: baseKeywords,
  applicationName: siteName,
  icons: {
    icon: "/KEAAS-k-favicon.png",
    apple: "/KEAAS-k-favicon.png",
  },
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "ZFXAYd8ELTFvFDtZfeB70bv7zEpLHomAsckD5RCwJ1Y",
  },
  openGraph: {
    title: "KEAAS Global Services (KEAAS) | SAP Experts",
    description: company.description,
    type: "website",
    locale: "en_GB",
    siteName,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "KEAAS Global Services (KEAAS) | SAP Experts",
    description: company.description,
    images: [ogImage.url],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  alternateName: ["KEAAS", company.formal],
  url: siteUrl,
  logo: `${siteUrl}/KEAAS-k-favicon.png`,
  email: company.email,
  description: company.description,
  sameAs: ["https://www.linkedin.com/company/143782054"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: company.email,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
