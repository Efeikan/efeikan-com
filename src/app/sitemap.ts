import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getBlogSlugs } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/projects/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const projectRoutes = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
