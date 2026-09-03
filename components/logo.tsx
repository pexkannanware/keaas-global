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
      src="/KEAAS-logo.png"
      alt="KEAAS Global"
      width={compact ? 96 : 120}
      height={compact ? 72 : 90}
      className={`h-auto object-contain ${compact ? "w-[80px] sm:w-[88px]" : "w-[96px] sm:w-[112px]"}`}
      priority
    />
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="KEAAS Global home" className="inline-flex items-center">
      {content}
    </Link>
  );
}
