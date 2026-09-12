import { education, experience, projects, site } from "@/lib/site";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    email: site.email,
    telephone: site.phone,
    url: site.url,
    sameAs: [site.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patna",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
    knowsAbout: site.keywords,
    worksFor: {
      "@type": "Organization",
      name: experience.company,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} Portfolio`,
    url: site.url,
    description: site.description,
    author: { "@type": "Person", name: site.name },
  };

  const work = projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    datePublished: project.year,
    author: { "@type": "Person", name: site.name },
    keywords: project.stack.join(", "),
    url: project.href || `${site.url}#${project.slug}`,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(work) }} />
    </>
  );
}
