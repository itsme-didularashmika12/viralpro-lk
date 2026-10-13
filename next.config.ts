import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(sitemap\\.xml|sitemap-main\\.xml|sitemap_index\\.xml)",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
