"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import {
  GlobeIcon,
  LayersIcon,
  PaletteIcon,
  ResponsiveIcon,
  ShieldIcon,
  ZapIcon,
} from "@/components/icons";

const features = [
  {
    icon: ZapIcon,
    title: "High Performance",
    description:
      "Build fast-loading websites optimized for real-world performance.",
  },
  {
    icon: GlobeIcon,
    title: "SEO Ready",
    description:
      "Create technically optimized websites designed for search visibility.",
  },
  {
    icon: ResponsiveIcon,
    title: "Responsive Design",
    description:
      "Deliver consistent experiences across desktop, tablet, and mobile.",
  },
  {
    icon: PaletteIcon,
    title: "Modern UI/UX",
    description:
      "Create attractive interfaces focused on usability and conversion.",
  },
  {
    icon: ShieldIcon,
    title: "Secure Architecture",
    description:
      "Build applications with modern development and security practices.",
  },
  {
    icon: LayersIcon,
    title: "Scalable Technology",
    description:
      "Create a strong technical foundation that can grow with your business.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Features"
          title={
            <>
              Everything You Need to{" "}
              <span className="text-gradient">Build Better</span>
            </>
          }
          description="Modern technology, thoughtful design, and scalable engineering combined into one powerful development experience."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={item}
              whileHover={{ y: -10 }}
              className="group glass-panel-glow border-animate relative overflow-hidden rounded-2xl p-7"
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-neon-cyan/25 via-neon-purple/20 to-neon-pink/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              {/* Soft sheen sweep */}
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/15 to-neon-purple/15 text-neon-cyan ring-1 ring-white/10 transition-all duration-300 group-hover:text-white group-hover:shadow-lg group-hover:shadow-neon-cyan/30">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
