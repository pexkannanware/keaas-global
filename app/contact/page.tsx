import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="pt-[84px] sm:pt-[90px]">
      <Contact />
    </div>
  );
}
