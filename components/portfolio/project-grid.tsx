import { ArrowUpRight, BarChart3, Boxes, BrainCircuit, Cpu } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap = {
  "High Frequency Trading System": Cpu,
  "Skin Disease Classification": BrainCircuit,
  "Black-Scholes Option Pricing": BarChart3,
};

const backgroundMap = {
  "High Frequency Trading System":
    "bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.28),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.92))] text-white border-slate-700/70",
  "Skin Disease Classification":
    "bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,245,249,0.94))]",
  "Black-Scholes Option Pricing":
    "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.24),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,247,237,0.94))]",
};

export function ProjectGrid() {
  return (
    <section id="projects" className="border-b border-border/70 py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Proof through shipped work."
          description="The portfolio centers on three themes from the resume: low-latency systems, machine learning applications, and finance-oriented tooling with practical interfaces."
        />

        <BentoGrid>
          {projects.map((project) => {
            const Icon = iconMap[project.name as keyof typeof iconMap] ?? Boxes;
            const isDarkCard = project.name === "High Frequency Trading System";

            return (
              <article
                key={project.name}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] border border-border/70 p-6 shadow-soft transition hover:-translate-y-1",
                  backgroundMap[project.name as keyof typeof backgroundMap],
                  project.className,
                )}
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <p
                          className={cn("font-mono text-[11px] uppercase tracking-[0.28em]", {
                            "text-white/70": isDarkCard,
                            "text-primary": !isDarkCard,
                          })}
                        >
                          {project.strapline}
                        </p>
                        <h3 className={cn("text-2xl font-semibold tracking-tight", { "text-white": isDarkCard })}>
                          {project.name}
                        </h3>
                      </div>
                      <div
                        className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", {
                          "bg-white/10 text-white": isDarkCard,
                          "bg-primary/10 text-primary": !isDarkCard,
                        })}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className={cn("text-sm leading-7", { "text-white/78": isDarkCard, "text-muted-foreground": !isDarkCard })}>
                      {project.description}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {project.impact.map((item) => (
                        <div
                          key={item}
                          className={cn("rounded-2xl border px-4 py-3 text-sm", {
                            "border-white/10 bg-white/5 text-white/85": isDarkCard,
                            "border-border/70 bg-background/75 text-foreground": !isDarkCard,
                          })}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge
                          key={item}
                          variant={isDarkCard ? "secondary" : "outline"}
                          className={cn({
                            "bg-white/10 text-white": isDarkCard,
                            "bg-background/80": !isDarkCard,
                          })}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant={isDarkCard ? "secondary" : "default"}>
                        <a href={project.codeUrl} target="_blank" rel="noreferrer">
                          View Code
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.liveUrl ? (
                        <Button asChild variant={isDarkCard ? "outline" : "secondary"}>
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            Live Demo
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
