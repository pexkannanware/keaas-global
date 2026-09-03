"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-keaas text-white hover:bg-keaas-deep border-keaas",
    secondary:
      "bg-transparent text-ink border-ink hover:bg-ink hover:text-white",
    ghost:
      "bg-transparent text-white border-white/40 hover:border-white hover:bg-white hover:text-keaas",
    light:
      "bg-white text-keaas border-white hover:bg-transparent hover:text-white",
  }[variant];

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 border px-6 py-3 text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow text-keaas ${className}`}>{children}</p>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-14 ${className}`}>
      {children}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line bg-mist">
      <Container className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display mt-5 max-w-4xl text-4xl text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {children ? (
          <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg">
            {children}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
