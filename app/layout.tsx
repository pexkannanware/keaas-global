import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { company } from "@/lib/data";
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
    default: "KEAAS Global Services — Expertise Delivered.",
    template: "%s · KEAAS Global Services",
  },
  description: company.description,
  icons: {
    icon: "/KEAAS-k-favicon.png",
    apple: "/KEAAS-k-favicon.png",
  },
  metadataBase: new URL("https://keaas.com"),
  openGraph: {
    title: "KEAAS Global Services — Expertise Delivered.",
    description: company.description,
    type: "website",
    locale: "en_GB",
    siteName: "KEAAS Global Services",
    images: [{ url: "/KEAAS-web-site.png", alt: "KEAAS Global Services" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip font-sans">
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
