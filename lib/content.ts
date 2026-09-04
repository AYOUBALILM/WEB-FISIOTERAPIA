import { contact } from "./config";

export const business = {
  name: "Centro de Fisioterapia Ana Seva",
  claim: "Fisioterapia cercana, en Casetas.",
  description:
    "Trato cercano y profesional en Av. de Logroño, 38 — Casetas. Te escuchamos y vemos contigo el siguiente paso.",
  longDescription:
    "Centro de fisioterapia en Casetas (Zaragoza). Valoración individual y plan adaptado a ti. Si no sabes qué necesitas, te orientamos.",
  rating: {
    value: 4.9,
    count: 127,
    source: "Google",
  },
};

export const navLinks = [
  { label: "Fisioterapia", href: "#fisioterapia" },
  { label: "Pilates", href: "#pilates" },
  { label: "Sobre Ana", href: "#ana" },
  { label: "Centro", href: "#centro" },
  { label: "Opiniones", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const problems: Array<{
  id: string;
  label: string;
  description: string;
  href: string;
  highlight?: boolean;
}> = [
  {
    id: "espalda",
    label: "Espalda",
    description: "Cervical, dorsal o lumbar.",
    href: "#tratamientos",
  },
  {
    id: "deportiva",
    label: "Deporte",
    description: "Sobrecarga y esguinces.",
    href: "#tratamientos",
  },
  {
    id: "articular",
    label: "Articular",
    description: "Hombro, rodilla, tobillo.",
    href: "#tratamientos",
  },
  {
    id: "pilates",
    label: "Pilates",
    description: "Grupos reducidos.",
    href: "#tratamientos",
  },
  {
    id: "no-se",
    label: "No sé qué tengo",
    description: "Te orientamos.",
    href: "#contacto",
    highlight: true,
  },
];

export const treatments = [
  {
    slug: "fisioterapia-general",
    title: "Fisioterapia general",
    excerpt: "Terapia manual y ejercicio adaptado a ti.",
    forWhom: "Molestias del día a día",
  },
  {
    slug: "fisioterapia-deportiva",
    title: "Deportiva",
    excerpt: "Recuperación y vuelta a la actividad.",
    forWhom: "Lesiones deportivas",
  },
  {
    slug: "pilates",
    title: "Pilates terapéutico",
    excerpt: "Grupos reducidos con fisioterapeuta.",
    forWhom: "Prevención y cuidado",
  },
  {
    slug: "dolor-espalda",
    title: "Espalda",
    excerpt: "Cervicalgias, dorsalgias y lumbalgias.",
    forWhom: "Dolor de espalda",
  },
] as const;

export const team = [
  {
    name: "Ana Seva",
    role: "Fisioterapeuta",
    credentials: "Colegiada — Centro de Fisioterapia en Casetas",
    bio: "Cercana, clara y profesional. Valoración individual y acompañamiento continuo para que vuelvas a moverte con confianza.",
  },
] as const;

export type Testimonial = {
  name: string;
  text: string;
  rating: 5 | 4;
  source: "Google";
  date?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "María G.",
    text: "Trato excelente y muy profesional. Salí mucho mejor desde la primera sesión. Ana explica todo con claridad y te hace sentir en buenas manos.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Javier L.",
    text: "Llevaba meses con dolor de espalda y en pocas sesiones noté una mejoría enorme. Centro muy limpio, luminoso y cercano en Casetas.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Lucía M.",
    text: "Fui por una sobrecarga del hombro y el seguimiento fue perfecto. Te dan pautas y ejercicios para casa. Totalmente recomendable.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Carlos R.",
    text: "Muy buena experiencia con pilates terapéutico. Grupos pequeños y atención personalizada. Se nota la profesionalidad.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Ana B.",
    text: "Cercanía y eficacia. Pedí cita por WhatsApp y me atendieron rapidísimo. Volveré sin duda.",
    rating: 5,
    source: "Google",
  },
];

export const clinicImages = [
  {
    src: "/images/clinic/sala-01.jpg",
    alt: "Sala de tratamiento luminosa",
  },
  {
    src: "/images/clinic/recepcion.jpg",
    alt: "Recepción del centro",
  },
  {
    src: "/images/clinic/pilates.jpg",
    alt: "Sala de pilates",
  },
] as const;

export const faqs = [
  {
    q: "¿Necesito volante para pedir cita?",
    a: "No. Puedes pedir cita directamente por teléfono o WhatsApp.",
  },
  {
    q: "¿Cuánto dura la sesión?",
    a: "La primera visita y las sesiones se adaptan a cada caso. Te informan al pedir cita.",
  },
  {
    q: "¿Dónde estáis?",
    a: `Estamos en ${contact.address.full}. Puedes abrir el mapa o escribirnos por WhatsApp.`,
  },
  {
    q: "¿No sé qué me pasa?",
    a: "Cuéntanos brevemente y te orientamos sin compromiso. No damos diagnósticos por la web.",
  },
] as const;

export const cta = {
  primary: {
    label: "Pedir cita",
    href: contact.phone.href,
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

export const seoKeywords = [
  "fisioterapia Casetas",
  "fisioterapeuta Casetas",
  "fisioterapia Utebo",
  "fisioterapeuta Utebo",
  "fisioterapia Zaragoza",
  "fisioterapia deportiva Casetas",
  "Pilates Casetas",
] as const;
