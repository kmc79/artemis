import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://artemis.endless-summer.online";

const routes = [
  "",
  "/crew",
  "/mission",
  "/apollo-legacy",
  "/technology-comparison",
  "/future",
  "/sources",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
