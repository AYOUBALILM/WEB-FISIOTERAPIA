"use client";

/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/reveal";

const gallery = [
  {
    src: "/images/clinic/salas/sala-2.jpg",
    fallback: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    alt: "Sala de Tratamiento 2 — camilla, logo Ana Seva, luz cálida",
    label: "Tratamiento 2",
  },
  {
    src: "/images/clinic/salas/sala-3-presoterapia.jpg",
    fallback: "https://images.unsplash.com/photo-1570172619644-dfd03edfa798?q=80&w=800&auto=format&fit=crop",
    alt: "Sala 3 Presoterapia — camilla azul",
    label: "Presoterapia",
  },
  {
    src: "/images/clinic/exterior-noche.jpg",
    fallback: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    alt: "Fachada noche — Centro de Fisioterapia Ana Seva, Calle Huesca",
    label: "Fachada",
  },
  {
    src: "/images/clinic/sala-tratamiento-1.jpg",
    fallback: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=800&auto=format&fit=crop",
    alt: "Sala Tratamiento 1 — camilla beige, vitrina",
    label: "Tratamiento 1",
  },
  {
    src: "/images/pilates/sala-multifuncional.jpg",
    fallback: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop",
    alt: "Sala Multifuncional Pilates — esterillas, TRX, pelotas",
    label: "Pilates",
  },
  {
    src: "/images/clinic/bano-accesible.jpg",
    fallback: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    alt: "Baño accesible — seguro y acogedor",
    label: "Accesible",
  },
];

export function Clinic() {
  return (
    <section id="centro" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12">
      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-[26px] font-[380] leading-none lg:text-[30px]">El centro</h2>
            <p className="mt-2 text-[15px] leading-5 text-muted-foreground">Madera clara, blanco y teal — fotos reales del local.</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 text-[12px] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" aria-hidden />
            Luz natural
          </span>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((img, i) => (
          <Reveal key={img.label} delay={i * 0.04}>
            <figure className="group relative overflow-hidden rounded-[18px] border border-border bg-secondary">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    if (t.src !== img.fallback) t.src = img.fallback;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
              <figcaption className="absolute bottom-2 left-2 rounded-full bg-background/95 backdrop-blur px-3 py-1 text-[11px] font-medium shadow-sm">
                {img.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Guarda las 6 fotos en <code className="bg-secondary px-1 rounded">public/images/...</code> con los nombres de arriba — animación hover sutil incluida.
      </p>
    </section>
  );
}
