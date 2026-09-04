import type { Metadata, Viewport } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { MobileCTA } from "@/components/mobile-cta";
import { Footer } from "@/components/footer";
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
        url: "/og.jpg",
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
    name: business.name,
    description: business.description,
    url: siteConfig.domain,
    telephone: contact.phone.e164,
    email: contact.email.address,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.715,
      longitude: -1.03,
    },
    openingHours: "Mo-Fr 09:00-20:00, Sa 09:00-13:00",
    priceRange: "€€",
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-[100] bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main" className="pb-[76px] lg:pb-0">
          {children}
        </main>
        <MobileCTA />
        <Footer />
      </body>
    </html>
  );
}
