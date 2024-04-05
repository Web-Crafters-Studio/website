import ogImageSrc from "@/images/social.png";

export const SITE = {
  title: "Studio Web Crafters",
  tagline: "Agence web à Saint-Malo",
  description:
    "Web Crafters Studio offre un accompagnement premium aux TPE et PME pour les aider à se démarquer sur internet. Contactez notre équipe d'expert pour convenir d'une réunion de lancement.",
  description_short:
    "Web Crafters Studio la nouvelle agence web malouine qui booste votre visibilité et vous aide à vous démarquer sur internet.",
  url: "https://web-crafters.studio",
  author: "Nicolas TOISON",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: SITE.title,
    url: SITE.url,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Avenue Anita Conti",
      addressLocality: "Saint-Malo",
      addressRegion: "Bretagne",
      postalCode: "35400",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.64744787492076",
      longitude: "-2.0046975669908194",
    },
    openingHours: "Mo, Tu, We, Th, Fr 09:30-18:00",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33223172236",
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
