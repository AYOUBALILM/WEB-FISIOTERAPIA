import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;

  // SKILL 12 — Arquitectura preparada para páginas SEO futuras
  // Cuando se creen /fisioterapia-casetas, /pilates-casetas, etc., añadir aquí
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/#tratamientos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/#centro`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/#contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Futuras (comentadas hasta tener contenido real verificado):
  // { url: `${base}/fisioterapia-casetas`, priority: 0.9 },
  // { url: `${base}/fisioterapeuta-casetas`, priority: 0.9 },
  // { url: `${base}/pilates-casetas`, priority: 0.8 },
  // { url: `${base}/fisioterapia-utebo`, priority: 0.7 },

  return staticPages;
}
