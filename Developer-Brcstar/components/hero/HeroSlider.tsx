"use client";

import {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SlideBackground } from "@/components/hero/SlideBackground";
import { DeviceMockup } from "@/components/hero/DeviceMockup";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons";
import { heroSlides, type HeroSlide } from "@/lib/slides";

const AUTOPLAY_INTERVAL = 5000;
const SWIPE_THRESHOLD = 60;

/** Renders the headline, colouring the configured gradient phrases. */
function renderHeadline(headline: string, gradientWords: string[]) {
  const parts: ReactNode[] = [];
  let remaining = headline;

  gradientWords.forEach((phrase, i) => {
    const idx = remaining.indexOf(phrase);
    if (idx === -1) return;
    parts.push(<Fragment key={`p-${i}`}>{remaining.slice(0, idx)}</Fragment>);
    parts.push(
      <span key={`g-${i}`} className="text-gradient">
        {phrase}
      </span>,
    );
    remaining = remaining.slice(idx + phrase.length);
  });

  parts.push(<Fragment key="tail">{remaining}</Fragment>);
  return parts;
}

/** Primary CTA — gradient fill, white text, glow that intensifies on hover. */
function PrimaryCTA({ label, href }: { label: string; href: string }) {
  return (
    <motion.a
      href={href}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-neon-purple/40 transition-shadow duration-300 hover:shadow-[0_0_44px_-6px_rgba(0,212,255,0.85),0_0_64px_-10px_rgba(168,85,247,0.7)]"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Shine sweep on hover */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        aria-hidden="true"
      />
      {label}
      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  );
}

/** Secondary CTA — glass background with a gradient border. */
function SecondaryCTA({ label, href }: { label: string; href: string }) {
  return (
    <motion.a
      href={href}
      className="group rounded-full bg-gradient-to-r from-neon-cyan/70 via-neon-purple/70 to-neon-pink/70 p-px transition-all duration-300 hover:from-neon-cyan hover:via-neon-purple hover:to-neon-pink"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="flex items-center gap-2 rounded-full bg-night-900/85 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 group-hover:bg-white/5">
        {label}
      </span>
    </motion.a>
  );
}

function SlideContent({
  slide,
  deviceY,
}: {
  slide: HeroSlide;
  deviceY: MotionValue<number>;
}) {
  return (
    <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2 lg:gap-8">
      {/* Copy — first in source order so mobile shows badge → headline →
          description → CTA → device. */}
      <div className="text-center lg:text-left">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neon-cyan"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
          {slide.eyebrow}
        </motion.span>

        <motion.h1
          className="hero-headline mt-6 font-display text-white"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderHeadline(slide.headline, slide.gradientWords)}
        </motion.h1>

        <motion.p
          className="prose-body mx-auto mt-6 max-w-xl text-slate-400 lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {slide.subheading}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <PrimaryCTA label={slide.primaryCTA} href={slide.primaryHref} />
          <SecondaryCTA label={slide.secondaryCTA} href={slide.secondaryHref} />
        </motion.div>
      </div>

      {/* Device mockup */}
      <motion.div
        style={{ y: deviceY }}
        className="flex justify-center lg:justify-end"
        initial={{ opacity: 0, x: 60, rotate: 1.2, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <DeviceMockup visual={slide.visual} />
      </motion.div>
    </div>
  );
}

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/80 focus-visible:ring-offset-2 focus-visible:ring-offset-night-900";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const total = heroSlides.length;

  const goTo = useCallback(
    (target: number) => setIndex(((target % total) + total) % total),
    [total],
  );

  const next = useCallback(
    () => setIndex((current) => ((current + 1) % total + total) % total),
    [total],
  );

  const prev = useCallback(
    () => setIndex((current) => ((current - 1) % total + total) % total),
    [total],
  );

  // Autoplay every 5s. Pauses on hover; restarts whenever the slide changes
  // so a manual interaction always gets the full interval before the next.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, next, index]);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Scroll parallax: background drifts slower than the content.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const deviceY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const activeSlide = heroSlides[index];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-night-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      {/* Stacked, crossfading slides */}
      <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-full flex-col justify-center pt-28 pb-32 lg:pt-24">
          {/* Parallax background layer */}
          <motion.div style={{ y: backgroundY }} className="absolute inset-0">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeSlide.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <SlideBackground variant={activeSlide.backgroundVariant} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Swipeable slide body — popLayout pops the exiting slide out of
              the document flow so the crossfade never causes a height jump. */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`slide-${activeSlide.id}`}
              className="relative"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x <= -SWIPE_THRESHOLD) next();
                else if (info.offset.x >= SWIPE_THRESHOLD) prev();
              }}
              initial={{ opacity: 0, scale: 0.985, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.015, y: -16 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <SlideContent slide={activeSlide} deviceY={deviceY} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows + dots */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 sm:bottom-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
          <motion.button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 backdrop-blur transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan ${focusRing}`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </motion.button>

          <div className="pointer-events-auto flex items-center gap-2.5">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${focusRing} ${
                  i === index
                    ? "w-10 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink shadow-lg shadow-neon-purple/40"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <motion.button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 backdrop-blur transition-colors hover:border-neon-purple/50 hover:text-neon-purple ${focusRing}`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
