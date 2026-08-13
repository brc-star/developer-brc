"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

interface TechLogoProps {
  color: string;
  children: ReactNode;
}

function TechMark({ color, children }: TechLogoProps) {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-lg"
      style={{
        color,
        background: `${color}1f`,
        boxShadow: `0 0 0 1px ${color}40`,
      }}
    >
      {children}
    </span>
  );
}

function NextLogo() {
  return (
    <TechMark color="#ffffff">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M18.665 21.978a11.994 11.994 0 0 0 5.325-14.217 12 12 0 1 0-5.325 14.216zM16.504 4.4c-.41-.21-.912-.047-1.123.363-.09.164-.084.25-.084 1.596v3.135l-3.28-3.276a.867.867 0 0 0-1.226 0c-.34.34-.34.887 0 1.227l1.225 1.226-3.327 3.327c-.34.34-.34.886 0 1.225.34.34.887.34 1.226 0l3.28-3.28v6.313c0 .468.38.848.85.848a.85.85 0 0 0 .848-.849V8.74l1.967 1.968c.17.17.393.254.615.254.223 0 .444-.085.613-.254a.868.868 0 0 0 0-1.226l-2.02-2.02v-2.74c0-.468-.38-.848-.848-.848z" />
      </svg>
    </TechMark>
  );
}

function ReactLogo() {
  return (
    <TechMark color="#61dafb">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <ellipse
          cx="12"
          cy="12"
          rx="10.5"
          ry="4.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.9"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10.5"
          ry="4.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.9"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10.5"
          ry="4.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.9"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </svg>
    </TechMark>
  );
}

function TypeScriptLogo() {
  return (
    <TechMark color="#3178c6">
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <rect x="1" y="1" width="22" height="22" rx="3" fill="currentColor" />
        <text
          x="12"
          y="17"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          fontSize="12"
          fill="#fff"
        >
          TS
        </text>
      </svg>
    </TechMark>
  );
}

function TailwindLogo() {
  return (
    <TechMark color="#38bdf8">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    </TechMark>
  );
}

function NodeLogo() {
  return (
    <TechMark color="#83cd29">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12.2 2.02a.9.9 0 0 0-.41 0L2.5 6.1c-.4.18-.7.66-.7 1.1v9.6c0 .44.3.92.7 1.1l9.3 4.08c.4.18.86.18 1.25 0l9.25-4.06c.4-.18.7-.66.7-1.1V7.2c0-.44-.3-.92-.7-1.1l-9.3-4.08h-.7zm1.4 3.24 4.9 2.16c.3.13.5.47.5.83v4.5c0 .36-.2.7-.5.83l-4.9 2.16c-.3.13-.66.13-.96 0l-4.9-2.16c-.3-.13-.5-.47-.5-.83V8.25c0-.36.2-.7.5-.83l4.9-2.16c.3-.13.66-.13.96 0zM12 8.4c-1.32 0-2.4 1.08-2.4 2.4s1.08 2.4 2.4 2.4 2.4-1.08 2.4-2.4-1.08-2.4-2.4-2.4z" />
      </svg>
    </TechMark>
  );
}

function PostgresLogo() {
  return (
    <TechMark color="#4169e1">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <ellipse cx="12" cy="5.5" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 5.5v7c0 1.66-3.58 3-8 3s-8-1.34-8-3v-7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 12.5v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.7" />
      </svg>
    </TechMark>
  );
}

const technologies = [
  { name: "Next.js", logo: NextLogo },
  { name: "React", logo: ReactLogo },
  { name: "TypeScript", logo: TypeScriptLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "Node.js", logo: NodeLogo },
  { name: "PostgreSQL", logo: PostgresLogo },
];

function TechTile({ name, logo: Logo }: (typeof technologies)[number]) {
  return (
    <div className="flex shrink-0 items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 transition-colors duration-300 hover:border-neon-cyan/40 hover:bg-white/[0.06]">
      <Logo />
      <span className="whitespace-nowrap font-display text-base font-semibold text-white">
        {name}
      </span>
    </div>
  );
}

export function TechStack() {
  const doubled = [...technologies, ...technologies];

  return (
    <section id="stack" className="relative overflow-hidden py-20 sm:py-28">
      {/* Edge fades for the marquee */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night-900 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night-900 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack We Use"
          title={
            <>
              Modern Tools, <span className="text-gradient">Proven Results</span>
            </>
          }
          description="We build with the industry's most trusted stack — the same tools powering the world's largest web applications."
        />
      </div>

      <motion.div
        className="mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="group flex w-max animate-marquee gap-5 pr-5 hover:[animation-play-state:paused]">
          {doubled.map((tech, i) => (
            <TechTile key={`${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
