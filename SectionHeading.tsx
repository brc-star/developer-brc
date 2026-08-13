import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neon-cyan">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-purple" />
        {eyebrow}
      </span>
      <h2 className="section-heading mt-5 font-display text-white">
        {title}
      </h2>
      {description ? (
        <p className="prose-body mt-4 text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}
