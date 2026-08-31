import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vaxion.pro",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://vaxion.pro/login",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.35,
    },
    {
      url: "https://vaxion.pro/signup",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.55,
    },
  ];
}
