import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: [
      "https://viralpro-lk.vercel.app/sitemap.xml",
      "https://viralpro-lk.vercel.app/sitemap-main.xml",
      "https://viralpro-lk.vercel.app/sitemap_index.xml",
    ],
  };
}
