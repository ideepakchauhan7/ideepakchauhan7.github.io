import { ArrowUpRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { contributions } from "@/lib/site-data";

export function OpenSourceMarquee() {
  return (
    <section id="open-source" className="border-b border-border/70 py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open Source"
          title="Contributions that scale beyond personal projects."
          description="These contributions show the kind of environments I like working in: established repositories, strong engineering expectations, and changes that improve reliability for real users."
        />

        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 py-4 shadow-soft">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent" />
          <Marquee pauseOnHover repeat={3}>
            {contributions.map((contribution) => (
              <a
                key={contribution.repo}
                href={contribution.href}
                target="_blank"
                rel="noreferrer"
                className="mx-2 flex h-full w-[20rem] flex-col justify-between rounded-[1.75rem] border border-border/70 bg-background/85 p-5 transition hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">{contribution.stars}</p>
                      <h3 className="mt-2 text-xl font-semibold">{contribution.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{contribution.repo}</p>
                    </div>
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">{contribution.summary}</p>
                  <p className="rounded-2xl bg-secondary/70 px-4 py-3 text-sm text-secondary-foreground">
                    {contribution.highlight}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {contribution.stack.map((item) => (
                      <Badge key={item} variant="outline" className="bg-background/80">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
