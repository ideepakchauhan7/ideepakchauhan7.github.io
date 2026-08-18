import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-2xl space-y-4", {
        "mx-auto text-center": align === "center",
      })}
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
}
