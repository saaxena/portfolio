"use client";

import { Brain, CircuitBoard, Cpu, Database, Network, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { skillGroups } from "@/lib/site";

const icons = [Cpu, Network, Database, Sparkles, Brain, CircuitBoard];

export function BentoSkills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-16 md:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.28em] text-mute">Capabilities</p>
        <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Skills</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="rounded-3xl border border-line bg-[var(--card)] p-5">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-accent" />
                  <h3 className="text-sm uppercase tracking-[0.18em] text-accent">{group.label}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-foreground/85">{group.items.join("  ·  ")}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
