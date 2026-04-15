import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: React.ReactNode;
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn("grid w-full auto-rows-[minmax(18rem,_1fr)] grid-cols-1 gap-4 md:grid-cols-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}
