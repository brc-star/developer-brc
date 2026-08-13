import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "./footer-icons";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Next.js Websites",
  "Web Applications",
  "E-commerce Stores",
  "SEO Optimization",
  "API Development",
  "Website Maintenance",
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple font-display text-lg font-bold text-white">
                B
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                BRC<span className="text-gradient">Star</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A web development studio building fast, modern, SEO-friendly
              websites that convert visitors into customers.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="mailto:hello@brcstar.in"
                aria-label="Email BRCStar"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
              >
                <MailIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="BRCStar on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-neon-purple/50 hover:text-neon-purple"
              >
                <GlobeIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="BRCStar location"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-neon-pink/50 hover:text-neon-pink"
              >
                <MapPinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-neon-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#contact"
                    className="text-sm text-slate-400 transition-colors hover:text-neon-cyan"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} BRCStar. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            <PhoneIcon className="h-3.5 w-3.5" />
            +1 (555) 019-2834
          </p>
        </div>
      </div>
    </footer>
  );
}
