"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { social } from "@/lib/config";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Check if placeholders: if all names are VERIFICAR, show empty state editorial
  const isPlaceholder = testimonials.every((t) => t.name.includes("VERIFICAR"));

  return (
    <section id="resenas" className="border-y border-border bg-secondary/20 py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Reseñas
              </p>
              <h2 className="mt-2 font-serif text-[26px] font-[380] leading-none tracking-[-0.02em] lg:text-[30px]">
                Lo que dicen
                <span className="italic text-muted-foreground"> en Google.</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                <span className="text-[13px] font-semibold">4,9</span>
                <span className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                  ))}
                </span>
                <span className="text-[11px] text-muted-foreground">Google</span>
              </div>
              <a
                href={social.googleBusiness !== "[VERIFICAR CON ANA]" ? social.googleBusiness : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium underline underline-offset-4 decoration-border hover:decoration-foreground/30"
              >
                Ver perfil
              </a>
            </div>
          </div>
        </Reveal>

        {isPlaceholder ? (
          <Reveal delay={0.1} className="mt-8 rounded-[16px] border border-dashed border-border bg-background p-8 text-center">
            <p className="font-serif text-[16px]">Reseñas reales pendientes</p>
            <p className="mt-2 text-[13.5px] leading-6 text-muted-foreground max-w-[60ch] mx-auto">
              Aquí se mostrarán reseñas literales copiadas de Google, gestionables desde <code className="rounded bg-secondary px-1.5 py-0.5 text-[12px]">lib/content.ts</code>.
              No inventamos testimonios. <span className="font-medium text-foreground">[VERIFICAR CON ANA]</span> — sustituir los 3 placeholders tras verificar ficha.
            </p>
          </Reveal>
        ) : (
          <div className="mt-8 relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]">
                    <article className="h-full rounded-[16px] border border-border bg-card p-5 flex flex-col">
                      <div className="flex gap-1" aria-label={`${t.rating} de 5`}>
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className={`h-3.5 w-3.5 ${j < t.rating ? "fill-primary text-primary" : "text-border"}`}
                          />
                        ))}
                      </div>
                      <p className="mt-3 text-[14px] leading-6">“{t.text}”</p>
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <p className="text-[13px] font-medium">{t.name}</p>
                        <span className="text-[11px] uppercase tracking-wide text-muted-foreground">{t.source}</span>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canPrev}
                aria-label="Anterior"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border bg-background disabled:opacity-40 hover:bg-accent transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canNext}
                aria-label="Siguiente"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border bg-background disabled:opacity-40 hover:bg-accent transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-[11px] text-muted-foreground">
          Reseñas gestionables en <code className="bg-secondary px-1 py-0.5 rounded">lib/content.ts:139</code> · Nunca inventar (SKILL 11)
        </p>
      </div>
    </section>
  );
}
