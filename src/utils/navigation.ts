// An array of links for footer
const footerLinks = [
  {
    section: "Expertises",
    links: [
      { name: "Stratégie numérique", url: "/#strategie-numerique" },
      { name: "Web design (UX/UI)", url: "/identite-visuelle" },
      { name: "Création site web", url: "/#creation-site" },
      { name: "Référencement naturel (SEO)", url: "/#seo" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/studiowebcrafters/",
  x: "https://twitter.com/web_crafters35",
  github: "https://github.com/Web-Crafters-Studio",
  slack: "#",
  discord: "#",
};

const bottomBarLink = {
  mentionLegal: "/mentions-legales",
  confidentialite: "/politique-confidentialite"
};

export default {
  footerLinks,
  socialLinks,
  bottomBarLink
};
