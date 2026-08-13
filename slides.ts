export type BackgroundVariant = "cyan" | "purple" | "pink" | "mixed";

/** Visual rendered inside the floating device mockup. */
export type VisualType =
  | "browser"
  | "performance"
  | "seo"
  | "architecture"
  | "growth";

export interface HeroSlide {
  id: number;
  eyebrow?: string;
  headline: string;
  /** Phrases inside the headline rendered with the brand gradient. */
  gradientWords: string[];
  subheading: string;
  primaryCTA: string;
  secondaryCTA: string;
  primaryHref: string;
  secondaryHref: string;
  backgroundVariant: BackgroundVariant;
  /** Which dashboard / illustration appears beside the copy. */
  visual: VisualType;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "BRCStar — Web Development Studio",
    headline: "Next.js Website Development — Grow Your Business",
    gradientWords: ["Development", "Grow Your Business"],
    subheading:
      "We build fast, modern, SEO-friendly websites that convert visitors into customers.",
    primaryCTA: "Get Started",
    secondaryCTA: "View Our Work",
    primaryHref: "#contact",
    secondaryHref: "#work",
    backgroundVariant: "cyan",
    visual: "browser",
  },
  {
    id: 2,
    eyebrow: "Performance First",
    headline: "Blazing Fast Performance with Next.js",
    gradientWords: ["Blazing Fast", "Performance"],
    subheading:
      "Build lightning-fast digital experiences engineered for speed, performance, and scalability.",
    primaryCTA: "Build Faster",
    secondaryCTA: "Explore Technology",
    primaryHref: "#contact",
    secondaryHref: "#stack",
    backgroundVariant: "purple",
    visual: "performance",
  },
  {
    id: 3,
    eyebrow: "Built to Be Found",
    headline: "SEO-Optimized From Day One",
    gradientWords: ["SEO-Optimized"],
    subheading:
      "Build search-friendly websites designed to improve visibility, rankings, traffic, and customer discovery.",
    primaryCTA: "Improve SEO",
    secondaryCTA: "Get Started",
    primaryHref: "#contact",
    secondaryHref: "#contact",
    backgroundVariant: "pink",
    visual: "seo",
  },
  {
    id: 4,
    eyebrow: "End-to-End Engineering",
    headline: "Custom Full-Stack Solutions",
    gradientWords: ["Custom", "Full-Stack"],
    subheading:
      "From frontend experiences to powerful backend systems, we build complete digital products around your business needs.",
    primaryCTA: "Build Your Solution",
    secondaryCTA: "View Services",
    primaryHref: "#contact",
    secondaryHref: "#features",
    backgroundVariant: "mixed",
    visual: "architecture",
  },
  {
    id: 5,
    eyebrow: "Ready for the Long Run",
    headline: "Scalable Apps Built to Grow With You",
    gradientWords: ["Scalable", "Grow With You"],
    subheading:
      "Start with a powerful foundation and scale your website or application as your business grows.",
    primaryCTA: "Start Scaling",
    secondaryCTA: "Let's Talk",
    primaryHref: "#contact",
    secondaryHref: "#contact",
    backgroundVariant: "cyan",
    visual: "growth",
  },
];
