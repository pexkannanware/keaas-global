"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  compact?: boolean;
};

export function Logo({ href = "/", compact = false }: LogoProps) {
  const content = (
    <Image
      src="/KEAAS-web-site.png"
      alt="KEAAS Global Services"
      width={400}
      height={302}
      className={`h-auto object-contain ${compact ? "w-[104px] sm:w-[116px]" : "w-[124px] sm:w-[140px]"}`}
      priority
    />
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="KEAAS Global Services home" className="inline-flex items-center">
      {content}
    </Link>
  );
}
