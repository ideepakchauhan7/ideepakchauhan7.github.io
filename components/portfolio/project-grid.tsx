import { ArrowUpRight, BarChart3, Boxes, Cpu, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap = {
  Xerolas: Sparkles,
  "Distributed Vector Database": BarChart3,
  "C++20 Paper-Trading Platform": Cpu,
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

        <BentoGrid className="md:grid-cols-3">
          {projects.map((project) => {
            const Icon = iconMap[project.name as keyof typeof iconMap] ?? Boxes;

            return (
              <article
                key={project.name}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/85 p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/50",
                )}
              >
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                        {project.strapline}
                      </p>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                      {project.name}
                    </h3>

                    <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.impact.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-border/70 bg-background/75 px-4 py-3 text-sm leading-6 text-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-1">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} variant="outline" className="bg-background/80">
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="outline">
                        <a href={project.codeUrl} target="_blank" rel="noreferrer">
                          View Code
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.liveUrl ? (
                        <Button asChild>
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            {project.liveLabel ?? "Live Demo"}
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
