import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlowButton({
  href,
  children,
  variant = "outline",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  if (variant === "solid") {
    return (
      <a
        href={href}
        target={href.startsWith("#") ? undefined : "_blank"}
        rel={href.startsWith("#") ? undefined : "noreferrer"}
        className={cn(
          "inline-flex items-center justify-center gap-1 rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-fg transition hover:brightness-110",
          className
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noreferrer"}
      className={cn(
        "group relative inline-flex overflow-hidden rounded-full p-[1px]",
        className
      )}
    >
      <span className="absolute inset-[-40%] bg-[conic-gradient(from_90deg,transparent_0%,var(--accent)_40%,transparent_70%)] opacity-80 transition duration-500 group-hover:animate-[spin_2.8s_linear_infinite]" />
      <span className="relative inline-flex items-center gap-1 rounded-full bg-[var(--bg)] px-4 py-2 text-xs text-foreground">
        {children}
      </span>
    </a>
  );
}
