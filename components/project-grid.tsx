"use client";

import { Reveal } from "@/components/reveal";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { GlowButton } from "@/components/ui/glow-button";
import { projects } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function ProjectGrid() {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={i * 0.06}>
          <CardContainer className="w-full" containerClassName="w-full py-0">
            <CardBody className="h-auto w-full rounded-3xl border border-line p-6 surface">
              <article id={project.slug}>
                <div className="flex items-start justify-between gap-4">
                  <CardItem translateZ={40} className="text-xs uppercase tracking-[0.2em] text-accent">
                    {project.metric}
                  </CardItem>
                  <CardItem translateZ={20} className="text-xs text-mute">
                    {project.year}
                  </CardItem>
                </div>
                <CardItem translateZ={50} className="mt-4 font-display text-2xl text-foreground">
                  {project.title}
                </CardItem>
                <CardItem as="p" translateZ={30} className="mt-3 text-sm leading-6 text-mute">
                  {project.summary}
                </CardItem>
                <ul className="mt-4 space-y-2 text-sm text-mute">
                  {project.points.map((point) => (
                    <li key={point}>— {point}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-foreground/80">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  {project.href ? (
                    <GlowButton href={project.href} variant="solid">
                      Open live <ArrowUpRight className="h-3.5 w-3.5" />
                    </GlowButton>
                  ) : (
                    <p className="text-xs uppercase tracking-[0.18em] text-mute">Link coming soon</p>
                  )}
                </div>
              </article>
            </CardBody>
          </CardContainer>
        </Reveal>
      ))}
    </div>
  );
}
