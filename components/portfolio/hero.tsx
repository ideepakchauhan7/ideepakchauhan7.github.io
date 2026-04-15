import { ArrowDownRight, ArrowUpRight, GitBranch, Link2, Mail, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { heroLabels, heroStats } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/70">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(13,148,136,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0))]" />
      <AnimatedGridPattern
        className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_78%)]"
        numSquares={44}
        maxOpacity={0.45}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-center gap-12 px-4 py-20 sm:px-6 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
        <div className="space-y-8">
          <BlurFade delay={0.05}>
            <Badge variant="secondary" className="w-fit border border-border/80 bg-background/70 text-foreground shadow-inset">
              Available for software engineering opportunities
            </Badge>
          </BlurFade>

          <div className="space-y-5">
            <BlurFade delay={0.12}>
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-primary">Greater Noida, India</p>
            </BlurFade>
            <BlurFade delay={0.18}>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Building low-latency systems, ML products, and meaningful open source improvements.
              </h1>
            </BlurFade>
            <BlurFade delay={0.24}>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                I&apos;m Deepak Chauhan, a computer science graduate who enjoys shipping C++ infrastructure,
                machine learning applications, and carefully scoped contributions inside large engineering codebases.
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
                <a href="/resume/Deepak_Chauhan_Resume_Updated.docx" target="_blank" rel="noreferrer">
                  Download Resume
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
        </div>

        <BlurFade delay={0.3} className="lg:justify-self-end">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-soft">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/80 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Profile</p>
                    <h2 className="mt-3 text-2xl font-semibold">Deepak Chauhan</h2>
                    <p className="mt-2 max-w-sm text-sm leading-7 text-muted-foreground">
                      B.Tech. Computer Science graduate with a foundation in systems, machine learning,
                      and production-minded open source collaboration.
                    </p>
                  </div>
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-secondary text-4xl font-semibold text-primary">
                    DC
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-2xl border border-border/70 bg-card px-4 py-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Greater Noida, Uttar Pradesh
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] border border-border/70 bg-background/70 p-4">
                    <p className="text-3xl font-semibold tracking-tight text-foreground">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
