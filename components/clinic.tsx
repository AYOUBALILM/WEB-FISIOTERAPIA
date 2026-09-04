"use client";

import { Reveal } from "@/components/reveal";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    alt: "Sala de tratamiento con camilla y luz natural [VERIFICAR CON ANA] — imagen temporal",
    label: "Sala de tratamiento",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03edfa798?q=80&w=800&auto=format&fit=crop",
    alt: "Recepción cálida y luminosa [VERIFICAR CON ANA] — imagen temporal",
    label: "Recepción",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    alt: "Sala de pilates terapéutico [VERIFICAR CON ANA] — imagen temporal",
    label: "Pilates",
  },
];

export function Clinic() {
  return (
    <section id="centro" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <Reveal>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              El centro
            </p>
            <h2 className="mt-2 font-serif text-[26px] font-[380] leading-none tracking-[-0.02em] lg:text-[30px]">
              Un espacio luminoso
              <span className="italic text-muted-foreground"> y tranquilo.</span>
            </h2>
          </div>
          <p className="max-w-[52ch] text-[14px] leading-6 text-muted-foreground">
            En Casetas, a pie de calle. Luz natural, orden y calma para que te sientas a gusto.
            Fotos reales del centro se añadirán aquí. Stock actual temporal y marcado.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {gallery.map((img, i) => (
          <Reveal key={img.label} delay={i * 0.07}>
            <figure className="group relative overflow-hidden rounded-[18px] border border-border bg-secondary">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/45 to-transparent p-3">
                <span className="inline-flex rounded-full bg-background/95 px-2.5 py-1 text-[11px] font-medium backdrop-blur">
                  {img.label} <span className="ml-1 text-muted-foreground">[VERIFICAR]</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        Imágenes temporales — reemplazar por <code className="bg-secondary px-1 rounded">public/images/clinic/*.jpg</code> con fotos reales. SKILL 4 / SKILL 17.
      </p>
    </section>
  );
}
