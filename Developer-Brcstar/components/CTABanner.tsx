"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, RocketIcon } from "@/components/icons";

export function CTABanner() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink px-6 py-16 text-center shadow-2xl shadow-neon-purple/30 sm:px-12 sm:py-20"
        >
          {/* Decorative overlays */}
          <div
            className="pointer-events-none absolute inset-0 bg-night-900/40"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-40"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-night-900/50 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
              <RocketIcon className="h-3.5 w-3.5" />
              Ready When You Are
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
              Let&apos;s Build Your Website
            </h2>
            <p className="prose-body mx-auto mt-4 max-w-xl text-white/85">
              Tell us about your project and get a free consultation plus a
              tailored plan — no obligations, no jargon.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@brcstar.in"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-night-900 shadow-lg transition-transform hover:scale-105"
              >
                Start Your Project
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
