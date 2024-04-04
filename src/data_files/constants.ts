import ogImageSrc from "@/images/social.png";

export const SITE = {
  title: "Studio Web Crafters",
  tagline: "Agence web à Saint-Malo",
  description: "Web Crafters Studio offre un accompagnement premium aux TPE et PME pour les aider à se démarquer sur internet. Contactez notre équipe d'expert pour convenir d'une réunion de lancement.",
  description_short: "Web Crafters Studio offre un accompagnement premium aux TPE et PME pour les aider à se démarquer sur internet.",
  url: "https://web-crafters.studio",
  author: "Nicolas TOISON",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "fr-FR",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "fr_FR",
  type: "website",
  url: SITE.url,
  title: `${SITE.tagline} | ${SITE.title}`,
  description: `${SITE.description}`,
  image: ogImageSrc,
};
