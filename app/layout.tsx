import type { Metadata, Viewport } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { MobileCTA } from "@/components/mobile-cta";
import { siteConfig, contact } from "@/lib/config";
import { business, seoKeywords } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${business.name} — ${business.claim}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: business.description,
  keywords: [...seoKeywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${business.name} — ${business.claim}`,
    description: business.description,
    images: [
      {
        url: "/og.jpg", // [VERIFICAR CON ANA] — crear og 1200x630 con foto real
        width: 1200,
        height: 630,
        alt: `${business.name} — ${contact.address.full}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.claim}`,
    description: business.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "health",
  // verification placeholders — no añadir IDs vacíos
};

export const viewport: Viewport = {
  themeColor: "#1E3329",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    // Subtype más específico cuando esté verificado
    name: business.name,
    description: business.description,
    url: siteConfig.domain,
    telephone: contact.phone.e164,
    email: contact.email.address.includes("VERIFICAR")
      ? undefined
      : contact.email.address,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode.includes("VERIFICAR")
        ? undefined
        : contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.715, // [VERIFICAR CON ANA] — coordenadas exactas
      longitude: -1.03,
    },
    openingHours: "[VERIFICAR CON ANA]",
    priceRange: "[VERIFICAR CON ANA]",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${newsreader.variable} ${geistMono.variable} antialiased`}
      >
        <LocalBusinessJsonLd />
        <Navbar />
        <main id="main" className="pb-[76px] lg:pb-0">
          {children}
        </main>
        <MobileCTA />

        {/* Footer minimal Fase 1 — se expandirá en Fase 6 */}
        <footer className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="font-serif text-[15px] font-medium tracking-tight">
                  {business.name}
                </p>
                <p className="mt-1 text-[13px] leading-5 text-muted-foreground">
                  {contact.address.full}
                  <br />
                  <a href={contact.phone.href} className="hover:text-foreground underline underline-offset-4">
                    {contact.phone.display}
                  </a>{" "}
                  ·{" "}
                  <a
                    href={contact.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground underline underline-offset-4"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
              <p className="text-[11px] leading-5 tracking-wide text-muted-foreground max-w-[48ch]">
                Información orientativa. No realizamos diagnósticos por la web.
                Para valoración individual, pide cita por teléfono o WhatsApp.
                <br />
                © {new Date().getFullYear()} {business.name} — Casetas, Zaragoza.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
