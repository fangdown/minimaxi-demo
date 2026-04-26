import type { MetadataRoute } from "next";

const BASE_URL = "https://www.minimaxi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["zh", "en"];
  const routes = [
    "",
    "/about",
    "/news",
    "/careers",
    "/models/text",
    "/models/text/m27",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
