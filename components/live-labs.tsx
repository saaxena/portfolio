"use client";

import { ArrowUpRight, Box, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { liveWork } from "@/lib/site";

export function LiveLabs() {
  const components = liveWork.filter((item) => item.kind === "component");
  const products = liveWork.filter((item) => item.kind === "product");

  return (
    <section id="labs" className="relative mx-auto max-w-6xl px-6 py-16 md:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.28em] text-mute">From GitHub · live</p>
        <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Live labs</h2>
        <p className="mt-3 max-w-xl text-sm text-mute">Neon Grid, Twitter Card, and Proofreader — open them live.</p>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {components.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="overflow-hidden rounded-3xl border border-line bg-[var(--card)]">
              <iframe
                title={item.title}
                src={item.live}
                className="h-56 w-full border-0 bg-background"
                loading="lazy"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 text-accent">
                  <Box className="h-4 w-4" />
                  <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-mute">{item.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a href={item.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent">
                    Live <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href={item.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-mute hover:text-foreground">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {products.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <TiltCard>
              <article className="rounded-3xl border border-line bg-[var(--card)] p-5">
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{item.blurb}</p>
                <p className="mt-3 text-xs text-mute">{item.stack.join(" · ")}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a href={item.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent">
                    Open live <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href={item.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-mute hover:text-foreground">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
