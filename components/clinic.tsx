"use client";

/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/reveal";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    alt: "Sala de tratamiento",
    label: "Sala",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03edfa798?q=80&w=800&auto=format&fit=crop",
    alt: "Recepción",
    label: "Recepción",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    alt: "Sala de pilates",
    label: "Pilates",
  },
];

export function Clinic() {
  return (
    <section id="centro" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12">
      <Reveal>
        <h2 className="font-serif text-[24px] font-[380] leading-none lg:text-[28px]">El centro</h2>
        <p className="mt-2 max-w-[48ch] text-[13px] leading-5 text-muted-foreground">Luz natural, orden y calma en Casetas.</p>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {gallery.map((img, i) => (
          <Reveal key={img.label} delay={i * 0.06}>
            <figure className="group relative overflow-hidden rounded-[16px] border border-border bg-secondary">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <figcaption className="absolute bottom-2 left-2 rounded-full bg-background/95 px-2.5 py-1 text-[11px] font-medium">
                {img.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
