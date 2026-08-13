import { MotionConfig } from "framer-motion";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/hero/HeroSlider";

// Below-the-fold sections are code-split and lazy-loaded to keep the
// initial JavaScript payload small and time-to-interactive fast.
const FeatureGrid = dynamic(() =>
  import("@/components/FeatureGrid").then((m) => m.FeatureGrid),
);
const TechStack = dynamic(() =>
  import("@/components/TechStack").then((m) => m.TechStack),
);
const WhyChooseUs = dynamic(() =>
  import("@/components/WhyChooseUs").then((m) => m.WhyChooseUs),
);
const CTABanner = dynamic(() =>
  import("@/components/CTABanner").then((m) => m.CTABanner),
);
const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer));

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <HeroSlider />
        <FeatureGrid />
        <TechStack />
        <WhyChooseUs />
        <CTABanner />
      </main>
      <Footer />
    </MotionConfig>
  );
}
