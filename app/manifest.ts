import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: "Centro de fisioterapia en Casetas, Zaragoza — Av. de Logroño, 38",
    start_url: "/",
    display: "standalone",
    background_color: "#FCFCF9",
    theme_color: "#1E3329",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
