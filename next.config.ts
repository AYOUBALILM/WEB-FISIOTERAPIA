import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SKILL 13 — Performance
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Solo si Ana facilita imágenes externas — por ahora local-first
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Evitar trailingSlash para canonical limpio
  trailingSlash: false,
  // Headers seguridad básica
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
