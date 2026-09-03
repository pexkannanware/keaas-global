import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-ticker";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Why } from "@/components/sections/why";
import { Industries } from "@/components/sections/industries";
import { Difference } from "@/components/sections/difference";
import { Insights } from "@/components/sections/insights";
import { Leadership } from "@/components/sections/leadership";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <Why />
      <Industries />
      <Difference />
      <Insights />
      <Leadership />
      <Contact />
    </>
  );
}
