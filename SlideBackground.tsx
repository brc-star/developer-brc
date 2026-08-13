"use client";

import { motion } from "framer-motion";
import type { BackgroundVariant } from "@/lib/slides";

const orbPalette: Record<BackgroundVariant, { a: string; b: string; c: string }> = {
  cyan: { a: "#00d4ff", b: "#0ea5e9", c: "#a855f7" },
  purple: { a: "#a855f7", b: "#7c3aed", c: "#00d4ff" },
  pink: { a: "#ec4899", b: "#a855f7", c: "#00d4ff" },
  mixed: { a: "#00d4ff", b: "#a855f7", c: "#ec4899" },
};

function GlowOrb({
  color,
  size,
  position,
  delay,
}: {
  color: string;
  size: string;
  position: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-[90px] ${position}`}
      style={{ width: size, height: size, backgroundColor: color }}
      initial={{ x: 0, y: 0, scale: 1 }}
      animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
      transition={{
        duration: 9 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/** Small drifting light particles — kept dim so text stays readable. */
function Particles() {
  const particles = [
    { top: "12%", left: "8%", size: 3, delay: 0 },
    { top: "68%", left: "14%", size: 2, delay: 1.2 },
    { top: "22%", left: "44%", size: 2, delay: 0.6 },
    { top: "78%", left: "58%", size: 3, delay: 1.8 },
    { top: "34%", left: "82%", size: 2, delay: 0.3 },
    { top: "58%", left: "90%", size: 3, delay: 2.4 },
    { top: "84%", left: "84%", size: 2, delay: 1.0 },
    { top: "45%", left: "30%", size: 2, delay: 2.0 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/50"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          initial={{ y: 0, opacity: 0.1, boxShadow: "0 0 0px 0px rgba(0,212,255,0)" }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.1, 0.6, 0.1],
            boxShadow: [
              "0 0 0px 0px rgba(0,212,255,0)",
              "0 0 6px 1px rgba(0,212,255,0.5)",
              "0 0 0px 0px rgba(0,212,255,0)",
            ],
          }}
          transition={{
            duration: 5 + p.delay,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function SlideBackground({ variant }: { variant: BackgroundVariant }) {
  const palette = orbPalette[variant];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base grid */}
      <div className="bg-grid bg-grid-fade absolute inset-0" />

      {/* Radial vignette keeps the copy readable over the glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,7,15,0.55)_100%)]" />

      {/* Floating gradient orbs, tuned per slide variant */}
      <GlowOrb color={palette.a} size="26rem" position="left-[-6rem] top-[-4rem]" delay={0} />
      <GlowOrb color={palette.b} size="22rem" position="right-[-8rem] top-[10%]" delay={1.4} />
      <GlowOrb color={palette.c} size="20rem" position="left-[20%] bottom-[-10rem]" delay={2.8} />

      {/* Drifting light particles */}
      <Particles />

      {/* Scanline highlight */}
      <motion.div
        className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Corner circuit accents */}
      <div className="absolute right-8 top-16 hidden h-24 w-24 opacity-40 md:block">
        <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
          <path d="M10 90 H60 V40 H90" stroke={palette.a} strokeWidth="1.5" strokeDasharray="4 6" />
          <circle cx="10" cy="90" r="3" fill={palette.a} />
          <circle cx="90" cy="40" r="3" fill={palette.a} />
        </svg>
      </div>
      <div className="absolute bottom-24 left-8 hidden h-20 w-20 opacity-40 md:block">
        <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
          <path d="M90 10 H40 V60 H10" stroke={palette.b} strokeWidth="1.5" strokeDasharray="4 6" />
          <circle cx="90" cy="10" r="3" fill={palette.b} />
          <circle cx="10" cy="60" r="3" fill={palette.b} />
        </svg>
      </div>
    </div>
  );
}
