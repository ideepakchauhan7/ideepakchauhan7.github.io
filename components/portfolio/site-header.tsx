import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="inline-flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              DC
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-tight">Deepak Chauhan</span>
              <span className="block font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                systems x ml x open source
              </span>
            </span>
          </a>
          <Button asChild size="sm" className="lg:hidden">
            <a href="/resume/Deepak_Chauhan_Resume_Updated.docx" target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-2 lg:justify-end">
          <nav className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild size="sm" className="hidden lg:inline-flex">
            <a href="/resume/Deepak_Chauhan_Resume_Updated.docx" target="_blank" rel="noreferrer">
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
