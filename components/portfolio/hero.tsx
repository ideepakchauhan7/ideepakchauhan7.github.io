import { ArrowDownRight, ArrowUpRight, GitBranch, Link2, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Interactive3DObject } from "@/components/portfolio/interactive-3d-object";
import { ParticleField } from "@/components/portfolio/particle-field";
import { framerBuildUrl, heroLabels, heroStats, resumeUrl } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/70">
      <ParticleField />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-center gap-12 px-4 py-20 sm:px-6 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div className="space-y-8">
          <BlurFade delay={0.05}>
            <Badge variant="secondary" className="w-fit border border-border/80 bg-background/70 text-foreground">
              Available for software engineering opportunities
            </Badge>
          </BlurFade>

          <div className="space-y-5">
            <BlurFade delay={0.12}>
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-primary">Greater Noida, India</p>
            </BlurFade>
            <BlurFade delay={0.18}>
              <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Building low-latency systems, agentic AI workflows, and open source that ships.
              </h1>
            </BlurFade>
            <BlurFade delay={0.24}>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                I&apos;m Deepak Chauhan, a computer science graduate who ships C++ infrastructure,
                RAG and LangGraph workflows, and responsive, interactive 3D/WebGL web experiences —
                this page included.
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {heroLabels.map((label) => (
                <Badge key={label} variant="outline" className="border-border/80 bg-background/60 px-4 py-2 text-sm">
                  {label}
                </Badge>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={0.36}>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={resumeUrl} target="_blank" rel="noreferrer">
                  Download Resume
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href={framerBuildUrl} target="_blank" rel="noreferrer">
                  View Framer Build
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.42}>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <a
                href="mailto:ideepakchauhan7@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 transition hover:border-primary/60 hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                ideepakchauhan7@gmail.com
              </a>
              <a
                href="https://github.com/ideepakchauhan7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 transition hover:border-primary/60 hover:text-foreground"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ideepakchauhan7/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 transition hover:border-primary/60 hover:text-foreground"
              >
                <Link2 className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.48}>
            <div className="grid max-w-md gap-3 sm:grid-cols-2">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-border/70 bg-background/60 p-4">
                  <p className="font-display text-3xl font-semibold tracking-tight text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.3} className="lg:justify-self-end">
          <div className="relative aspect-square w-full max-w-md">
            <Interactive3DObject />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
