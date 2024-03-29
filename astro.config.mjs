import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://screwfast.uk",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap(),
    starlight({
      title: "ScrewFast Docs",
      defaultLocale: "root",
      locales: {
        root: {
          label: "Français",
          lang: "fr",
        },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Guides de Démarrage Rapide",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tools & Equipment",
          items: [
            { label: "Tool Guides", link: "tools/tool-guides/" },
            { label: "Equipment Care", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Construction Services",
          autogenerate: { directory: "construction" },
        },
        {
          label: "Advanced Topics",
          autogenerate: { directory: "advanced" },
        },
      ],
      social: {
        github: "https://github.com/mearashadowfax/ScrewFast",
      },
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: { property: "og:image", content: "https://screwfast.uk" + "/social.png" },
        },
        {
          tag: "meta",
          attrs: { property: "twitter:image", content: "https://screwfast.uk" + "/social.png" },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  }
});
