"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#labs", label: "Labs" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center gap-1 rounded-full border border-line bg-[var(--nav)] px-2 py-2 backdrop-blur-xl md:gap-2 md:px-3">
        <a href="#top" className="px-3 text-sm font-medium text-foreground">
          {site.name.split(" ")[0]}
        </a>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden rounded-full px-3 py-1.5 text-xs text-mute transition hover:bg-foreground/5 hover:text-foreground sm:inline md:text-sm"
          >
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
