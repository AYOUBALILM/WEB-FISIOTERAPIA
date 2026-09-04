/**
 * lib/config.ts — Datos de contacto y configuración centralizada
 * SKILL 29 — No repetir datos manualmente
 * Todos los teléfonos, whatsapps, dirección y maps pasan por aquí
 */

export const siteConfig = {
  name: "Centro de Fisioterapia Ana Seva",
  shortName: "Ana Seva",
  domain: "https://anaseva.es", // [VERIFICAR CON ANA] — dominio real
  locale: "es-ES",
} as const;

export const contact = {
  phone: {
    display: "976 97 98 58",
    e164: "+34976979858", // [VERIFICAR CON ANA] — confirmar prefijo
    href: "tel:+34976979858",
  },
  whatsapp: {
    display: "976 97 98 58",
    // wa.me requiere número sin + ni espacios
    number: "34976979858", // [VERIFICAR CON ANA]
    href: "https://wa.me/34976979858?text=Hola%20Ana%2C%20me%20gustar%C3%ADa%20pedir%20cita%20en%20el%20centro.",
  },
  email: {
    address: "[VERIFICAR CON ANA]", // Nunca inventar
    href: "mailto:[VERIFICAR CON ANA]",
  },
  address: {
    street: "Av. de Logroño, 38",
    locality: "Casetas",
    city: "Zaragoza",
    postalCode: "50180", // [VERIFICAR CON ANA] — confirmar CP Casetas
    region: "Aragón",
    country: "ES",
    full: "Av. de Logroño, 38 — Casetas, Zaragoza",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Av.+de+Logro%C3%B1o+38+Casetas+Zaragoza",
    // [VERIFICAR CON ANA] — embed URL real tras confirmar ubicación exacta
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.0!2d-1.03!3d41.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQXYuIGRlIExvZ3Jvw7FvLCAzOCwgQ2FzZXRhcywgWmFyYWdvemE!5e0!3m2!1ses!2ses!4v1",
  },
} as const;

export const social = {
  googleBusiness: "[VERIFICAR CON ANA]", // URL ficha Google Business
  instagram: "[VERIFICAR CON ANA]",
  facebook: "[VERIFICAR CON ANA]",
} as const;

// Horarios — NUNCA inventar
export const openingHours: Array<{
  days: string;
  hours: string;
  note?: string;
}> = [
  {
    days: "Lunes a Viernes",
    hours: "[VERIFICAR CON ANA]",
  },
  {
    days: "Sábado",
    hours: "[VERIFICAR CON ANA]",
  },
  {
    days: "Domingo",
    hours: "Cerrado",
    note: "[VERIFICAR CON ANA]",
  },
];

// Analytics — preparado, no cargar si no hay IDs (SKILL 28)
export const analytics = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleSearchConsole: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
} as const;
