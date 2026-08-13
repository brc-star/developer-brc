"use client";

import { motion } from "framer-motion";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ChartIcon,
  CloudIcon,
  CpuIcon,
  DatabaseIcon,
  GaugeIcon,
  GlobeIcon,
  SearchIcon,
  ServerIcon,
  TrendingUpIcon,
  ZapIcon,
} from "@/components/icons";
import type { VisualType } from "@/lib/slides";

/* ------------------------------------------------------------------ */
/* Shared chrome                                                        */
/* ------------------------------------------------------------------ */

function Sidebar() {
  return (
    <div className="hidden w-14 flex-col gap-3 border-r border-white/5 p-3 sm:flex">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`h-2 rounded-full ${
            i === 0 ? "bg-neon-purple/80" : "bg-white/10"
          }`}
        />
      ))}
      <div className="mt-auto h-2 rounded-full bg-white/10" />
    </div>
  );
}

function MockupShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[260px] sm:h-[280px]">
      <Sidebar />
      <div className="flex-1 p-2.5">{children}</div>
    </div>
  );
}

function PanelLabel({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="mb-1.5 flex items-center gap-1 text-[9px] font-medium uppercase tracking-wide text-slate-400">
      {icon}
      {text}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Browser — dashboard mockup                                       */
/* ------------------------------------------------------------------ */

function BrowserVisual() {
  return (
    <div className="flex h-full flex-col gap-2.5 rounded-xl bg-night-900 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-neon-cyan to-neon-purple text-[10px] font-bold text-white">
            B
          </span>
          <div>
            <p className="text-[10px] font-semibold leading-none text-white">
              Live Overview
            </p>
            <p className="mt-0.5 text-[9px] leading-none text-slate-400">
              Real-time traffic dashboard
            </p>
          </div>
        </div>
        <div className="h-4 w-4 rounded-full bg-neon-cyan/30" />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {[
          { label: "Revenue", value: "$128.4k", icon: TrendingUpIcon },
          { label: "Visitors", value: "48.2k", icon: GlobeIcon },
        ].map((stat) => (
          <div key={stat.label} className="glass-panel rounded-lg p-2.5">
            <PanelLabel icon={<stat.icon className="h-2.5 w-2.5 text-neon-cyan" />} text={stat.label} />
            <p className="text-sm font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="glass-panel rounded-lg p-3">
        <PanelLabel icon={<ChartIcon className="h-2.5 w-2.5 text-neon-pink" />} text="Weekly traffic" />
        <div className="flex h-14 items-end gap-1.5">
          {[35, 55, 42, 70, 52, 80, 65, 92].map((height, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0.2 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: "easeOut" }}
              style={{ height: `${height}%` }}
              className="flex-1 origin-bottom rounded-t-sm bg-gradient-to-t from-neon-cyan/70 via-neon-purple/80 to-neon-pink/90"
            />
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between rounded-lg bg-gradient-to-r from-neon-cyan/15 to-neon-purple/15 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <ZapIcon className="h-3 w-3 text-neon-cyan" />
          <span className="text-[9px] font-medium text-slate-300">
            Powered by Next.js
          </span>
        </div>
        <div className="flex items-center gap-1 text-[9px] font-semibold text-neon-purple">
          Live
          <GlobeIcon className="h-2.5 w-2.5" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Performance — futuristic speed dashboard                         */
/* ------------------------------------------------------------------ */

function SpeedLines() {
  const lines = [30, 50, 40, 60, 45];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {lines.map((top, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-16 rounded-full bg-gradient-to-r from-transparent via-neon-cyan/70 to-transparent"
          style={{ top: `${top}%`, right: `${10 + i * 4}%` }}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: [40, -120], opacity: [0, 0.9, 0] }}
          transition={{
            duration: 2.2 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.55,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function SpeedGauge() {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="relative flex items-center gap-3 rounded-lg bg-night-900/70 p-3">
      <svg viewBox="0 0 100 100" className="h-20 w-20 -rotate-90">
        <defs>
          <linearGradient id="gauge-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="url(#gauge-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * 0.12 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="flex flex-col">
        <p className="text-lg font-bold text-white">99</p>
        <p className="text-[9px] text-slate-400">Performance score</p>
        <p className="mt-1 flex items-center gap-1 text-[9px] font-semibold text-neon-cyan">
          <ZapIcon className="h-2.5 w-2.5" />
          Max speed achieved
        </p>
      </div>
    </div>
  );
}

function PerformanceVisual() {
  const tiles = [
    { label: "Fast Load", value: "0.4s", icon: ZapIcon },
    { label: "Optimized", value: "100%", icon: GaugeIcon },
    { label: "Server Rendering", value: "SSR", icon: ServerIcon },
    { label: "High Performance", value: "99", icon: CpuIcon },
  ];

  return (
    <div className="relative flex h-full flex-col gap-2.5 rounded-xl bg-night-900 p-3">
      <SpeedLines />
      <div className="grid grid-cols-2 gap-2.5">
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="glass-panel rounded-lg p-2.5"
          >
            <div className="mb-1.5 flex items-center gap-1 text-[9px] text-slate-400">
              <tile.icon className="h-2.5 w-2.5 text-neon-cyan" />
              {tile.label}
            </div>
            <p className="text-sm font-bold text-white">{tile.value}</p>
          </motion.div>
        ))}
      </div>
      <div className="relative">
        <SpeedGauge />
      </div>
      <div className="mt-auto flex items-center justify-between rounded-lg bg-gradient-to-r from-neon-purple/15 to-neon-pink/15 px-3 py-2">
        <span className="text-[9px] font-medium text-slate-300">
          Edge-rendered at 120+ locations
        </span>
        <span className="text-[9px] font-bold text-neon-pink">100 / 100</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. SEO — analytics dashboard mockup                                 */
/* ------------------------------------------------------------------ */

function SeoBars() {
  const bars = [30, 48, 40, 62, 54, 76, 68, 92];
  return (
    <div className="glass-panel rounded-lg p-3">
      <PanelLabel icon={<SearchIcon className="h-2.5 w-2.5 text-neon-cyan" />} text="Search traffic" />
      <div className="flex h-12 items-end gap-1.5">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0.15 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: "easeOut" }}
            style={{ height: `${height}%` }}
            className="flex-1 origin-bottom rounded-t-sm bg-gradient-to-t from-neon-cyan/60 via-neon-purple/70 to-neon-pink/90"
          />
        ))}
      </div>
    </div>
  );
}

function RankingRows() {
  const rows = [
    { keyword: "website development", position: "#1", width: "92%" },
    { keyword: "next.js agency", position: "#2", width: "78%" },
    { keyword: "seo websites", position: "#3", width: "64%" },
  ];
  return (
    <div className="space-y-2">
      {rows.map((row, i) => (
        <motion.div
          key={row.keyword}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.12, duration: 0.45, ease: "easeOut" }}
          className="flex items-center gap-2 rounded-md bg-white/[0.03] px-2 py-1.5"
        >
          <span className="w-24 truncate text-[9px] text-slate-300">{row.keyword}</span>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: row.width }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
            />
          </div>
          <span className="w-5 rounded bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-center text-[9px] font-bold text-neon-cyan">
            {row.position}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function SeoVisual() {
  return (
    <div className="flex h-full flex-col gap-2.5 rounded-xl bg-night-900 p-3">
      <SeoBars />
      <RankingRows />
      <div className="mt-auto grid grid-cols-3 gap-2">
        {[
          { label: "CTR", value: "8.4%" },
          { label: "Impressions", value: "312k" },
          { label: "Pages/s", value: "1.9" },
        ].map((m) => (
          <div key={m.label} className="rounded-md bg-white/[0.03] px-2 py-1.5 text-center">
            <p className="text-[11px] font-bold text-white">{m.value}</p>
            <p className="text-[8px] text-slate-400">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Architecture — full-stack pipeline                               */
/* ------------------------------------------------------------------ */

function Connector({ delay, tone }: { delay: number; tone: string }) {
  return (
    <div className="relative mx-auto flex h-4 w-full items-center justify-center">
      <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <motion.span
        className={`absolute h-1.5 w-1.5 rounded-full ${tone}`}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: [-40, 40], opacity: [0, 1, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, delay, ease: "easeInOut" }}
      />
    </div>
  );
}

function ArchNode({
  icon: Icon,
  label,
  sub,
  delay,
  gradient,
}: {
  icon: React.ElementType;
  label: string;
  sub: string;
  delay: number;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      className={`flex items-center gap-2.5 rounded-lg border border-white/10 bg-gradient-to-r ${gradient} px-3 py-2`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-white">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div>
        <p className="text-[10px] font-semibold leading-none text-white">{label}</p>
        <p className="mt-0.5 text-[8px] leading-none text-slate-300/70">{sub}</p>
      </div>
    </motion.div>
  );
}

function ArchitectureVisual() {
  return (
    <div className="flex h-full flex-col rounded-xl bg-night-900 p-3">
      <div className="mb-1 flex items-center gap-1.5">
        <CloudIcon className="h-3 w-3 text-neon-cyan" />
        <p className="text-[9px] font-semibold text-white">Full-Stack Architecture</p>
      </div>

      <div className="grid flex-1 grid-cols-2 content-center gap-x-3">
        <div className="col-span-1 flex flex-col justify-center">
          <ArchNode icon={ChartIcon} label="Frontend" sub="Next.js · React" delay={0.1} gradient="from-neon-cyan/10 to-transparent" />
          <Connector delay={0.4} tone="bg-neon-cyan" />
          <ArchNode icon={GlobeIcon} label="API" sub="REST · GraphQL" delay={0.25} gradient="from-neon-purple/10 to-transparent" />
          <Connector delay={0.7} tone="bg-neon-purple" />
          <ArchNode icon={ServerIcon} label="Backend" sub="Node.js" delay={0.4} gradient="from-neon-pink/10 to-transparent" />
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <ArchNode icon={DatabaseIcon} label="Database" sub="PostgreSQL" delay={0.5} gradient="from-neon-purple/10 to-transparent" />
          <Connector delay={1} tone="bg-neon-pink" />
          <ArchNode icon={CloudIcon} label="Cloud" sub="Edge · CDN" delay={0.6} gradient="from-neon-cyan/10 to-transparent" />
          <Connector delay={1.3} tone="bg-neon-cyan" />
          <ArchNode icon={ZapIcon} label="Cache" sub="ISR · SWR" delay={0.7} gradient="from-neon-pink/10 to-transparent" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Growth — scaling pipeline                                        */
/* ------------------------------------------------------------------ */

function GrowthStage({
  icon: Icon,
  label,
  sub,
  delay,
  gradient,
}: {
  icon: React.ElementType;
  label: string;
  sub: string;
  delay: number;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`flex items-center gap-3 rounded-lg border border-white/10 bg-gradient-to-r ${gradient} px-3 py-2.5`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-white shadow-inner">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-[11px] font-bold leading-none text-white">{label}</p>
        <p className="mt-1 text-[8px] leading-none text-slate-300/70">{sub}</p>
      </div>
    </motion.div>
  );
}

function GlowConnector({ delay, label }: { delay: number; label?: string }) {
  return (
    <div className="relative mx-auto flex h-6 w-full items-center justify-center">
      <div className="absolute h-full w-px bg-gradient-to-b from-white/15 to-white/5" />
      <motion.span
        className="absolute h-1.5 w-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_2px_rgba(0,212,255,0.7)]"
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: [-12, 12], opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, delay, ease: "easeInOut" }}
      />
      {label ? (
        <span className="absolute right-1 text-[8px] font-medium text-slate-400">{label}</span>
      ) : null}
    </div>
  );
}

function GrowthVisual() {
  return (
    <div className="flex h-full flex-col justify-center rounded-xl bg-night-900 p-4">
      <p className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold text-white">
        <TrendingUpIcon className="h-3 w-3 text-neon-cyan" />
        Growth Path
      </p>
      <GrowthStage icon={GlobeIcon} label="Website" sub="Marketing & content" delay={0.1} gradient="from-neon-cyan/10 to-transparent" />
      <GlowConnector delay={0.4} label="app.dev" />
      <GrowthStage icon={ServerIcon} label="Application" sub="Logic & integrations" delay={0.25} gradient="from-neon-purple/10 to-transparent" />
      <GlowConnector delay={0.8} label="cloud" />
      <GrowthStage icon={CloudIcon} label="Cloud" sub="Edge & storage" delay={0.4} gradient="from-neon-pink/10 to-transparent" />
      <GlowConnector delay={1.2} label="scale" />
      <GrowthStage icon={TrendingUpIcon} label="Scalable Infrastructure" sub="Zero-downtime growth" delay={0.55} gradient="from-neon-cyan/10 to-transparent" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Visual switcher                                                     */
/* ------------------------------------------------------------------ */

const visualMap: Record<VisualType, React.ComponentType> = {
  browser: BrowserVisual,
  performance: PerformanceVisual,
  seo: SeoVisual,
  architecture: ArchitectureVisual,
  growth: GrowthVisual,
};

/* ------------------------------------------------------------------ */
/* Floating device                                                      */
/* ------------------------------------------------------------------ */

export function DeviceMockup({ visual }: { visual: VisualType }) {
  const Visual = visualMap[visual];

  return (
    <motion.div
      className="relative w-full max-w-[340px] lg:max-w-[420px]"
      initial={{ y: 0 }}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {/* Soft glow behind the device */}
      <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-neon-cyan/25 via-neon-purple/25 to-neon-pink/25 blur-3xl" />

      {/* Browser frame */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-night-800/90 shadow-2xl shadow-neon-purple/20 backdrop-blur-xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-neon-pink/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-neon-purple/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-neon-cyan/80" />
          </div>
          <div className="mx-auto flex h-5 w-1/2 items-center justify-center gap-1.5 rounded-full bg-white/5 px-3">
            <GlobeIcon className="h-2.5 w-2.5 text-slate-400" />
            <span className="text-[9px] text-slate-400">brcstar.in</span>
          </div>
          <ArrowRightIcon className="h-3 w-3 text-slate-500" />
        </div>

        <MockupShell>
          <Visual />
        </MockupShell>
      </div>
    </motion.div>
  );
}
