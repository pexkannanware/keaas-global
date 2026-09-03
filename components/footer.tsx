import Link from "next/link";
import { Logo } from "@/components/logo";
import { company } from "@/lib/data";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About KEAAS" },
      { href: "/why-keaas", label: "Why KEAAS" },
      { href: "/approach", label: "Approach" },
      { href: "/leadership", label: "Leadership" },
      {
        href: "https://kannanware.zohorecruit.in/jobs/Careers",
        label: "Opportunities",
        external: true,
      },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/individual-experts", label: "Individual Experts" },
      { href: "/services/tactical-pods", label: "Tactical Pods" },
      { href: "/services/swat-team", label: "SWAT Team" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/insights", label: "Insights" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/insights", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-14 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
            {company.description}
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="lg:col-span-2">
            <p className="eyebrow text-ink">{column.title}</p>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <p className="eyebrow text-ink">Contact</p>
          <a
            href={`mailto:${company.email}`}
            className="mt-5 inline-block text-sm text-muted transition-colors hover:text-keaas"
          >
            {company.email}
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-5 text-[0.75rem] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
          <p>© {new Date().getFullYear()} KEAAS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
