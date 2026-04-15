import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  ArrowUpRight,
  GitBranch,
  Link2,
  Mail,
  Phone,
} from "lucide-react";

import { Hero } from "@/components/portfolio/hero";
import { OpenSourceMarquee } from "@/components/portfolio/open-source-marquee";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { SiteHeader } from "@/components/portfolio/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  achievements,
  certifications,
  contactLinks,
  education,
  experience,
  skills,
} from "@/lib/site-data";

const contactIcons = {
  Email: Mail,
  Phone: Phone,
  GitHub: GitBranch,
  LinkedIn: Link2,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <section id="about" className="border-b border-border/70 py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="About"
                title="A portfolio shaped by systems thinking and iteration speed."
                description="The resume points to a consistent pattern: building performance-sensitive software, translating machine learning work into usable interfaces, and contributing thoughtfully in real-world repositories."
              />
              <div className="rounded-[2rem] border border-border/70 bg-card/80 p-6 shadow-soft">
                <p className="text-lg leading-8 text-muted-foreground">
                  I enjoy problems that require both technical depth and practical delivery. That includes
                  performance tuning in C++, experiment-driven model work in Python, and reading through large
                  codebases carefully enough to make small but meaningful improvements.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-[2rem] border border-border/70 bg-card/80 p-6 shadow-soft">
                <BriefcaseBusiness className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Internship Impact</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Built predictive ML workflows at Atharvo and shipped a Flask-backed depression prediction app
                  grounded in real data preparation and feature engineering.
                </p>
              </article>
              <article className="rounded-[2rem] border border-border/70 bg-card/80 p-6 shadow-soft">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Competitive Practice</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  480+ LeetCode problems and Codeforces performances have sharpened algorithmic thinking,
                  debugging speed, and implementation discipline.
                </p>
              </article>
              <article className="rounded-[2rem] border border-border/70 bg-card/80 p-6 shadow-soft sm:col-span-2">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Open Source Signal</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Contributions across GitNexus, emdash, and Microsoft Aspire show comfort with established
                  codebases, type-safe workflows, and production-minded engineering collaboration.
                </p>
              </article>
            </div>
          </div>
        </section>

        <OpenSourceMarquee />
        <ProjectGrid />

        <section id="experience" className="border-b border-border/70 py-24">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Experience"
              title="Hands-on ML work backed by a strong CS foundation."
              description="The internship and degree work reinforce each other: applied experimentation on one side, and core systems and theory on the other."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-border/70 bg-card/85 p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{experience.period}</p>
                      <h3 className="mt-2 text-2xl font-semibold">
                        {experience.role} <span className="text-muted-foreground">@ {experience.company}</span>
                      </h3>
                    </div>
                    <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                      {experience.bullets.map((bullet) => (
                        <p key={bullet} className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                          {bullet}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-[2rem] border border-border/70 bg-card/85 p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{education.period}</p>
                      <h3 className="mt-2 text-2xl font-semibold">{education.degree}</h3>
                      <p className="mt-1 text-muted-foreground">{education.school}</p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm text-muted-foreground">
                      CGPA: <span className="font-medium text-foreground">{education.cgpa}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((item) => (
                        <Badge key={item} variant="outline" className="bg-background/80">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="border-b border-border/70 py-24">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Skills"
              title="A toolbox that spans systems, ML, and product delivery."
              description="Instead of listing everything in one place, the site groups the resume skills into the categories that best reflect how the work gets done."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {skills.map((group) => (
                <article key={group.title} className="rounded-[2rem] border border-border/70 bg-card/85 p-6 shadow-soft">
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline" className="bg-background/75 px-4 py-2 text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="space-y-10">
              <SectionHeading
                eyebrow="Achievements"
                title="Signals of consistency beyond coursework."
                description="Competitive programming, hackathon results, and GitHub recognition all reinforce the same story: steady practice and a bias for improving performance."
              />
              <div className="grid gap-4">
                {achievements.map((achievement) => (
                  <article key={achievement} className="rounded-[2rem] border border-border/70 bg-card/85 p-5 shadow-soft">
                    <p className="text-sm leading-7 text-muted-foreground">{achievement}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <SectionHeading
                eyebrow="Certifications"
                title="Additional programs and simulations."
                description="These complement the portfolio with software engineering exposure across finance, networking, and employability-focused learning."
              />
              <div className="rounded-[2rem] border border-border/70 bg-card/85 p-6 shadow-soft">
                <div className="flex flex-wrap gap-3">
                  {certifications.map((item) => (
                    <Badge key={item} variant="secondary" className="px-4 py-2 text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(217,119,6,0.18),transparent_28%)]" />
          <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s build something thoughtful and fast."
              description="If you&apos;re hiring for software engineering, systems, or ML-oriented roles, I&apos;d be happy to connect. The portfolio keeps the resume details visible, but the fastest way to reach me is still email or LinkedIn."
              align="center"
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {contactLinks.map((item) => {
                const Icon = contactIcons[item.label as keyof typeof contactIcons] ?? Mail;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/50"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.28em] text-primary">{item.label}</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.value}</p>
                  </a>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a href="mailto:ideepakchauhan7@gmail.com">
                  Email Deepak
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://github.com/ideepakchauhan7" target="_blank" rel="noreferrer">
                  GitHub Profile
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 py-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Deepak Chauhan portfolio, rebuilt with Next.js, shadcn-style components, and Magic UI motion.</p>
          <p className="font-mono text-xs uppercase tracking-[0.24em]">2026 edition</p>
        </div>
      </footer>
    </div>
  );
}
