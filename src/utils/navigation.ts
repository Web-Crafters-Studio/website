// An array of links for footer
const footerLinks = [
  {
    section: "Notre entreprise",
    links: [
      { name: "Expertises", url: "/services" },
      { name: "Nous contacter", url: "/contact" },
    ],
  },
  {
    section: "Legal",
    links: [
      { name: "Mentions Légales", url: "/mentions-legales" },
      { name: "Politique de confidentialité", url: "/politique-confidentialite" },
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

export default {
  footerLinks,
  socialLinks,
};
