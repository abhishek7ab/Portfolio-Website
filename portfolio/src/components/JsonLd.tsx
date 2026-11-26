import { personal } from "@/data/personal";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    alternateName: personal.preferredName,
    jobTitle: personal.title,
    description: personal.bio,
    url: "https://abhishekbadave.dev",
    image: `https://abhishekbadave.dev${personal.profileImage}`,
    email: `mailto:${personal.contact.email}`,
    telephone: personal.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Vishwakarma University",
      sameAs: "https://www.vupune.ac.in/",
    },
    sameAs: [
      personal.social.github,
      personal.social.linkedin,
      personal.social.twitter,
      personal.social.instagram,
      personal.social.leetcode,
    ],
    knowsAbout: personal.interests,
    skills: personal.qualities,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personal.name} Portfolio`,
    url: "https://abhishekbadave.dev",
    description: personal.bio,
    author: {
      "@type": "Person",
      name: personal.name,
    },
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://abhishekbadave.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://abhishekbadave.dev#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://abhishekbadave.dev#projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://abhishekbadave.dev#contact",
      },
    ],
  };

  return (
    <>
      <script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
