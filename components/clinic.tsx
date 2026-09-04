"use client";

/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/reveal";

const gallery = [
  {
    src: "/images/clinic/recepcion-real.jpg",
    fallback: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    alt: "Recepción y sala de espera — Ana Seva",
    label: "Recepción",
  },
  {
    src: "/images/clinic/salas/sala-1-real.jpg",
    fallback: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=800&auto=format&fit=crop",
    alt: "Sala de Tratamiento 1",
    label: "Tratamiento 1",
  },
  {
    src: "/images/clinic/collage-5-espacios.jpg",
    fallback: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    alt: "Collage 5 espacios — recepción, pilates, cabina, gabinete, baño",
    label: "Espacios",
  },
  {
    src: "/images/pilates/sala-multifuncional.jpg",
    fallback: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop",
    alt: "Sala Multifuncional Pilates",
    label: "Pilates",
  },
];

export function Clinic() {
  return (
    <section id="centro" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12">
      <Reveal>
        <h2 className="font-serif text-[26px] font-[380] leading-none lg:text-[30px]">El centro</h2>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
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
    </section>
  );
}
