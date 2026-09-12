import { about, certifications, education, experience, projects, site } from "@/lib/site";

export async function GET() {
  const body = `# ${site.name}
> ${site.title} in ${site.location}

${site.description}

## Contact
- Email: ${site.email}
- Phone: ${site.phone}
- GitHub: ${site.github}

## About
${about}

## Experience
${experience.role}, ${experience.company} (${experience.dates})
${experience.points.map((p) => `- ${p}`).join("\n")}

## Projects
${projects
  .map(
    (p) => `### ${p.title} (${p.year})
${p.summary}
${p.points.map((x) => `- ${x}`).join("\n")}
Stack: ${p.stack.join(", ")}
Link: ${p.href || "coming soon"}`
  )
  .join("\n\n")}

## Education
${education.degree}, ${education.school}, ${education.dates}, ${education.score}

## Certifications
${certifications.map((c) => `- ${c}`).join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
