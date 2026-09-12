import { BackgroundBeams } from "@/components/background-beams";
import { BentoSkills } from "@/components/bento-skills";
import { DotGrid } from "@/components/dot-grid";
import { HeroVisual } from "@/components/hero-visual";
import { LiveLabs } from "@/components/live-labs";
import { Nav } from "@/components/nav";
import { NeuralFlow } from "@/components/neural-flow";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { TiltCard } from "@/components/tilt-card";
import { about, certifications, education, experience, faqs, projects, site } from "@/lib/site";
import { ArrowUpRight, Github, Mail, MapPin, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <div className="pointer-events-none absolute inset-0">
        <DotGrid />
        <BackgroundBeams />
        <Spotlight />
      </div>

      <section className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-8 px-6 pb-16 pt-28 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-mute">
            {site.location} · available for backend & genai roles
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-4 font-display text-xl text-accent sm:text-2xl">{site.title}</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">{site.headline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition hover:brightness-110"
            >
              View projects
            </a>
            <a
              href="#labs"
              className="rounded-full border border-foreground/25 px-5 py-2.5 text-sm text-foreground transition hover:border-accent"
            >
              Live labs
            </a>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-6 py-16 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-mute">About</p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Built for production AI systems</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-mute">
            {about.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </Reveal>
        <div className="mt-10">
          <NeuralFlow />
        </div>
      </section>

      <section id="work" className="relative mx-auto max-w-6xl px-6 py-16 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-mute">Experience</p>
          <div className="mt-6 rounded-3xl border border-line bg-[var(--card)] p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl text-foreground">{experience.role}</h2>
                <p className="text-accent">{experience.company}</p>
              </div>
              <p className="text-sm text-mute">
                {experience.dates} · {experience.location}
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-mute">
              {experience.points.map((point) => (
                <li key={point} className="border-l border-accent/40 pl-4">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-mute">Selected work</p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">AI & backend projects</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <TiltCard>
                <article id={project.slug} className="h-full rounded-3xl border border-line bg-[var(--card)] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.metric}</p>
                    <p className="text-xs text-mute">{project.year}</p>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-mute">{project.summary}</p>
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
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1 text-sm text-accent"
                    >
                      Open live <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <p className="mt-6 text-xs uppercase tracking-[0.18em] text-mute">Link coming soon</p>
                  )}
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <LiveLabs />
      <BentoSkills />

      <section className="relative mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-line bg-[var(--card)] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-mute">Education</p>
              <h2 className="mt-3 font-display text-2xl text-foreground">{education.degree}</h2>
              <p className="mt-2 text-sm text-mute">{education.school}</p>
              <p className="mt-4 text-sm text-foreground">
                {education.dates} · {education.score}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-line bg-[var(--card)] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-mute">Certifications</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12 md:px-8">
        <Reveal>
          <h2 className="font-display text-2xl text-foreground">Questions people ask</h2>
          <dl className="mt-6 space-y-5">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="text-sm font-medium text-foreground">{item.q}</dt>
                <dd className="mt-1 text-sm leading-6 text-mute">{item.a}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-mute">Contact</p>
          <h2 className="mt-3 font-display text-4xl text-foreground">Let&apos;s build something exact.</h2>
          <div className="mt-8 flex flex-col gap-4 text-sm text-mute">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-foreground hover:text-accent">
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-foreground">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <a href={site.github} className="inline-flex items-center gap-2 whitespace-nowrap hover:text-foreground">
              <Github className="h-4 w-4" />
              <span>github.com/{site.githubHandle}</span>
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {site.location}
            </p>
          </div>
        </Reveal>
      </section>

      <footer className="relative border-t border-line px-6 py-8 text-center text-xs text-mute">
        © {new Date().getFullYear()} {site.name}. Backend and Generative AI Engineer.
      </footer>
    </main>
  );
}
