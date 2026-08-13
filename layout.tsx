import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const SITE_URL = "https://developer.brcstar.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BRCStar | Next.js Website Development — Grow Your Business",
    template: "%s | BRCStar",
  },
  description:
    "We build fast, modern, SEO-friendly websites that convert visitors into customers. Custom full-stack solutions with Next.js, TypeScript and Tailwind CSS.",
  applicationName: "BRCStar",
  authors: [{ name: "BRCStar Development Team" }],
  keywords: [
    "Next.js development",
    "web development",
    "full-stack solutions",
    "SEO optimized websites",
    "BRCStar",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "BRCStar",
    title: "BRCStar | Next.js Website Development — Grow Your Business",
    description:
      "We build fast, modern, SEO-friendly websites that convert visitors into customers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRCStar | Next.js Website Development — Grow Your Business",
    description:
      "We build fast, modern, SEO-friendly websites that convert visitors into customers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0e1a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <div className="relative min-h-screen overflow-x-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
