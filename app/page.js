import { Home } from "../components/Home";
import { profile, socials } from "../data/profile";
import { absoluteUrl, jsonLd, siteConfig } from "../lib/seo";

export const revalidate = 3600;

export default async function HomePage() {
  const sameAs = socials
    .filter(({ href }) => href.startsWith("http"))
    .map(({ href }) => href);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: profile.name,
    url: siteConfig.url,
    image: absoluteUrl(profile.avatar),
    jobTitle: profile.role,
    description: siteConfig.description,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Luis Potosí",
      addressCountry: "MX",
    },
    sameAs,
    knowsAbout: [
      "Artificial intelligence",
      "Full-stack web development",
      "Product engineering",
      "Financial technology",
      "Software as a service",
      "Machine learning",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <Home locale="en" />
    </>
  );
}
