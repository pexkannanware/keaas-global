import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact KEAAS Global Services for SAP consultants, expert pods or a SWAT team. Email info@keaasglobal.com to discuss your SAP programme requirements.",
  path: "/contact",
  keywords: ["contact KEAAS", "hire SAP consultants", "SAP consultant enquiry"],
});

export default function ContactPage() {
  return (
    <div className="pt-[84px] sm:pt-[90px]">
      <Contact />
    </div>
  );
}
