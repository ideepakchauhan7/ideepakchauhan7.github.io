"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems, resumeUrl } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-foreground">
          Deepak Chauhan
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
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

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/70 bg-background/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-display text-lg text-foreground transition hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild size="lg" className="mt-4 w-full">
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
