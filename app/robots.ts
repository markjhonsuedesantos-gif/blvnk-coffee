import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robot {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://blvnk-coffee.vercel.app/sitemap.xml",
  };
}