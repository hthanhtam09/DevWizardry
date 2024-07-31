import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.BASE_URL as string,
      lastModified: new Date(),
    },
  ];
}
