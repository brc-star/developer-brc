"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import {
  CheckIcon,
  ClockIcon,
  GaugeIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/icons";

const highlights = [
  {
    icon: GaugeIcon,
    value: "0.8s",
    label: "Median load time",
    detail: "Edge-rendered pages that never keep users waiting.",
  },
  {
    icon: TrendingUpIcon,
    value: "180%",
    label: "Organic traffic lift",
    detail: "Average SEO growth across projects in year one.",
  },
  {
    icon: UsersIcon,
    value: "2.1M+",
    label: "Users served",
    detail: "Traffic handled by applications we've shipped.",
  },
  {
    icon: ClockIcon,
    value: "24/7",
    label: "Support & monitoring",
    detail: "Uptime watch and rapid response, always on.",
  },
];

const benefits = [
  "Dedicated development team",
  "Weekly progress reports",
  "Transparent, fixed pricing",
  "Post-launch support included",
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function WhyChooseUs() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Numbers That <span className="text-gradient">Speak for Themselves</span>
            </>
          }
          description="We measure success in the outcomes our clients see — speed, traffic, revenue and reliability."
        />

        {/* Stat cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={item}
              className="group glass-panel-glow relative overflow-hidden rounded-2xl p-7 text-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/15 to-neon-purple/15 text-neon-cyan ring-1 ring-white/10 group-hover:text-white">
                <h.icon className="h-6 w-6" />
              </div>
              <p className="font-display text-4xl font-bold">
                <span className="text-gradient">{h.value}</span>
              </p>
              <p className="mt-2 text-base font-semibold text-white">{h.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {h.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefit checklist */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2"
        >
          {benefits.map((benefit) => (
            <motion.li
              key={benefit}
              variants={item}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-5 py-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple">
                <CheckIcon className="h-4 w-4 text-white" />
              </span>
              <span className="text-sm font-medium text-slate-200">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
