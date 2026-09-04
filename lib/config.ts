export const siteConfig = {
  name: "Centro de Fisioterapia Ana Seva",
  shortName: "Ana Seva",
  domain: "https://anaseva.es",
  locale: "es-ES",
} as const;

export const contact = {
  phone: {
    display: "976 97 98 58",
    e164: "+34976979858",
    href: "tel:+34976979858",
  },
  whatsapp: {
    display: "976 97 98 58",
    number: "34976979858",
    href: "https://wa.me/34976979858?text=Hola%20Ana%2C%20me%20gustar%C3%ADa%20pedir%20cita%20en%20el%20centro.",
  },
  email: {
    address: "info@anaseva.es",
    href: "mailto:info@anaseva.es",
  },
  address: {
    street: "Av. de Logroño, 38",
    locality: "Casetas",
    city: "Zaragoza",
    postalCode: "50180",
    region: "Aragón",
    country: "ES",
    full: "Av. de Logroño, 38 — Casetas, Zaragoza",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Av.+de+Logro%C3%B1o+38+Casetas+Zaragoza",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.0!2d-1.033!3d41.715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQXYuIGRlIExvZ3Jvw7FvIDM4LCBDYXNldGFzLCBaYXJhZ296YQ!5e0!3m2!1ses!2ses!4v13.1",
  },
} as const;

export const social = {
  googleBusiness: "https://www.google.com/search?q=Centro+de+Fisioterapia+Ana+Seva+Casetas",
  instagram: "",
  facebook: "",
} as const;

export const openingHours: Array<{
  days: string;
  hours: string;
  note?: string;
}> = [
  {
    days: "Lunes a Viernes",
    hours: "9:00 – 20:00",
  },
  {
    days: "Sábado",
    hours: "9:00 – 13:00",
  },
  {
    days: "Domingo",
    hours: "Cerrado",
  },
];

export const analytics = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleSearchConsole: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
} as const;
