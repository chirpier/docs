import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://docs.chirrop.com";

function getContentPages(
  dir: string,
  basePath: string = ""
): { route: string; lastModified: Date }[] {
  const pages: { route: string; lastModified: Date }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && !entry.name.startsWith("_")) {
      pages.push(...getContentPages(fullPath, `${basePath}/${entry.name}`));
    } else if (entry.name.endsWith(".mdx")) {
      const stat = fs.statSync(fullPath);
      if (entry.name === "index.mdx") {
        pages.push({ route: basePath || "/", lastModified: stat.mtime });
      } else {
        const slug = entry.name.replace(/\.mdx$/, "");
        pages.push({
          route: `${basePath}/${slug}`,
          lastModified: stat.mtime,
        });
      }
    }
  }

  return pages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDir = path.join(process.cwd(), "src/content");
  const pages = getContentPages(contentDir);

  return pages.map(({ route, lastModified }) => {
    const depth = route.split("/").filter(Boolean).length;

    let priority: number;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];

    if (route === "/") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (depth <= 1) {
      // Section landing pages: /concepts, /sdks, /api-reference, etc.
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (
      route.startsWith("/get-started") ||
      route.startsWith("/sdks")
    ) {
      // High-value pages for new users and developers
      priority = 0.8;
      changeFrequency = "weekly";
    } else {
      priority = 0.7;
      changeFrequency = "monthly";
    }

    return {
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
