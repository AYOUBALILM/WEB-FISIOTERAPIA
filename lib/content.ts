/**
 * lib/content.ts — ÚNICA fuente de verdad editable (SKILL 16)
 * Todo lo modificable está aquí. Componentes solo consumen.
 * NUNCA inventar: si falta dato → [VERIFICAR CON ANA]
 */

import { contact } from "./config";

// --- BUSINESS ---
export const business = {
  name: "Centro de Fisioterapia Ana Seva",
  claim: "Fisioterapia cercana, en Casetas.",
  description:
    "En el Centro de Fisioterapia Ana Seva te atendemos con un trato cercano y profesional, en Av. de Logroño, 38 — Casetas, Zaragoza. Cuéntanos qué te ocurre y vemos contigo cuál puede ser el siguiente paso.",
  longDescription:
    "Centro de fisioterapia en Casetas (Zaragoza) orientado a ayudarte a moverte mejor y con menos molestias. Valoración individual, trato cercano y plan adaptado a tu situación. Si no sabes qué necesitas, te orientamos sin compromiso.",
  // [VERIFICAR CON ANA] — años, titulaciones, nº colegiado, especialidades exactas
  foundedYear: "[VERIFICAR CON ANA]" as string,
  rating: {
    value: 4.9, // [VERIFICAR CON ANA] — debe coincidir con Google real
    count: "[VERIFICAR CON ANA]" as string | number,
    source: "Google",
  },
};

// --- NAV ---
export const navLinks = [
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Centro", href: "#centro" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
] as const;

// --- TRUST ---
export const trust = {
  headline: "Acompañarte es lo importante.",
  points: [
    "Valoración individual y trato cercano",
    "Plan adaptado a tu momento y objetivos",
    "Seguimiento claro, sin tecnicismos innecesarios",
  ],
};

// --- PROBLEMS / MOTIVOS DE CONSULTA (SKILL 31 - User Journey) ---
export const problems: Array<{
  id: string;
  label: string;
  description: string;
  href: string;
  highlight?: boolean;
}> = [
  {
    id: "espalda",
    label: "Dolor de espalda",
    description: "Cervical, dorsal o lumbar que limita tu día a día.",
    href: "#tratamientos",
  },
  {
    id: "deportiva",
    label: "Lesión deportiva",
    description: "Sobrecarga, esguince o vuelta a la actividad.",
    href: "#tratamientos",
  },
  {
    id: "articular",
    label: "Dolor articular",
    description: "Hombro, rodilla, cadera o tobillo.",
    href: "#tratamientos",
  },
  {
    id: "postoperatorio",
    label: "Postoperatorio",
    description: "Recuperación tras cirugía o inmovilización.",
    href: "#tratamientos",
  },
  {
    id: "pilates",
    label: "Pilates terapéutico",
    description: "Movimiento guiado para cuidarte y prevenir.",
    href: "#tratamientos",
  },
  {
    id: "no-se",
    label: "No sé qué tengo",
    description: "Cuéntanos tu caso y te orientamos.",
    href: "#contacto",
    highlight: true,
  },
];

// --- TREATMENTS — NO inventar técnicas no confirmadas (SKILL 10) ---
export const treatments = [
  {
    slug: "fisioterapia-general",
    title: "Fisioterapia general",
    excerpt:
      "Valoración y tratamiento manual adaptado a tu situación.",
    detail:
      "[VERIFICAR CON ANA] — describir técnicas realmente ofrecidas (p. ej. terapia manual, ejercicio terapéutico). No añadir drenaje, punción, ecografía, etc. sin confirmar.",
    forWhom: "Molestias musculares y articulares del día a día.",
  },
  {
    slug: "fisioterapia-deportiva",
    title: "Fisioterapia deportiva",
    excerpt: "Te acompañamos en la recuperación y vuelta a la actividad.",
    detail: "[VERIFICAR CON ANA] — especificar si se colabora con clubes, nivel, etc.",
    forWhom: "Deportistas y personas activas.",
  },
  {
    slug: "pilates",
    title: "Pilates terapéutico",
    excerpt: "Clases en grupo reducido, guiadas por fisioterapeuta.",
    detail: "[VERIFICAR CON ANA] — horario, grupos, nivel, precio.",
    forWhom: "Quienes buscan cuidarse y prevenir.",
  },
  {
    slug: "dolor-espalda",
    title: "Dolor de espalda",
    excerpt: "Abordaje de cervicalgias, dorsalgias y lumbalgias.",
    detail:
      "[VERIFICAR CON ANA] — no prometer curas ni porcentajes. Texto orientativo, no diagnóstico.",
    forWhom: "Dolor cervical, dorsal o lumbar.",
  },
] as const;

// --- TEAM ---
export const team = [
  {
    name: "Ana Seva",
    role: "Fisioterapeuta",
    // [VERIFICAR CON ANA] — titulación, colegiado, formación, años
    credentials: "[VERIFICAR CON ANA]",
    bio: "[VERIFICAR CON ANA] — breve presentación humana, en primera persona idealmente. No inventar experiencia ni especialidades.",
    image: "/images/team/ana-seva.jpg", // [VERIFICAR CON ANA] — foto real, no stock
    imageAlt: "Ana Seva, fisioterapeuta en Casetas, Zaragoza",
  },
] as const;

// --- TESTIMONIALS — SKILL 11: solo reales, gestionables ---
export type Testimonial = {
  name: string;
  text: string;
  rating: 5 | 4;
  source: "Google";
  date?: string; // [VERIFICAR CON ANA]
};

// PLACEHOLDERS REALES — sustituir por reseñas copiadas literal de Google
export const testimonials: Testimonial[] = [
  {
    name: "[VERIFICAR CON ANA]",
    text: "[VERIFICAR CON ANA] — Pegar aquí reseña literal de Google. No inventar.",
    rating: 5,
    source: "Google",
  },
  {
    name: "[VERIFICAR CON ANA]",
    text: "[VERIFICAR CON ANA] — Pegar aquí reseña literal de Google.",
    rating: 5,
    source: "Google",
  },
  {
    name: "[VERIFICAR CON ANA]",
    text: "[VERIFICAR CON ANA] — Pegar aquí reseña literal de Google.",
    rating: 5,
    source: "Google",
  },
];

// --- CLINIC GALLERY ---
export const clinicImages = [
  {
    src: "/images/clinic/sala-01.jpg",
    alt: "[VERIFICAR CON ANA] — Sala de tratamiento, luz natural",
  },
  {
    src: "/images/clinic/recepcion.jpg",
    alt: "[VERIFICAR CON ANA] — Recepción del centro",
  },
  {
    src: "/images/clinic/pilates.jpg",
    alt: "[VERIFICAR CON ANA] — Sala de pilates",
  },
] as const;

// --- FAQ — solo preguntas generales, sin diagnóstico ---
export const faqs = [
  {
    q: "¿Necesito volante médico para pedir cita?",
    a: "No. Puedes pedir cita directamente. Cuéntanos qué te ocurre y vemos contigo el siguiente paso. [VERIFICAR CON ANA] — confirmar flujo real.",
  },
  {
    q: "¿Cuánto dura una sesión?",
    a: "[VERIFICAR CON ANA] — duración real de sesión y primera visita.",
  },
  {
    q: "¿Trabajáis con seguros?",
    a: "[VERIFICAR CON ANA] — especificar si hay convenio con aseguradoras.",
  },
  {
    q: "¿Dónde estáis exactamente?",
    a: `Estamos en ${contact.address.full}. Puedes vernos en el mapa o escribirnos por WhatsApp.`,
  },
  {
    q: "No sé qué me pasa, ¿podéis orientarme?",
    a: "Sí. Reserva por teléfono o WhatsApp y te orientamos sin compromiso. No realizamos diagnósticos médicos por la web.",
  },
] as const;

// --- CTA ---
export const cta = {
  primary: {
    label: "Pedir cita",
    href: contact.phone.href, // Fase 1: tel; Fase 5: evolucionará a booking
  },
  secondary: {
    label: "WhatsApp",
    href: contact.whatsapp.href,
  },
  tertiary: {
    label: "Llamar",
    href: contact.phone.href,
  },
};

// --- SEO KEYWORDS (SKILL 12) ---
export const seoKeywords = [
  "fisioterapia Casetas",
  "fisioterapeuta Casetas",
  "fisioterapia Utebo",
  "fisioterapeuta Utebo",
  "fisioterapia Zaragoza",
  "fisioterapia deportiva Casetas",
  "Pilates Casetas",
] as const;
