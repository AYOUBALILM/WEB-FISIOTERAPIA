"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/reveal";

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

  return (
    <section id="resenas" className="border-y border-border bg-secondary/20 py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Reseñas</p>
              <h2 className="mt-1 font-serif text-[24px] font-[380] leading-none lg:text-[28px]">En Google</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
              <span className="text-[13px] font-semibold">4,9</span>
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]">
                  <article className="h-full rounded-[16px] border border-border bg-card p-5 flex flex-col">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`h-3.5 w-3.5 ${j < t.rating ? "fill-primary text-primary" : "text-border"}`} />
                      ))}
                    </div>
                    <p className="mt-3 text-[14px] leading-6">“{t.text}”</p>
                    <p className="mt-4 pt-3 border-t border-border text-[12px] font-medium">{t.name} <span className="font-normal text-muted-foreground">· {t.source}</span></p>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button onClick={scrollPrev} disabled={!canPrev} aria-label="Anterior" className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-border bg-background disabled:opacity-40">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={scrollNext} disabled={!canNext} aria-label="Siguiente" className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-border bg-background disabled:opacity-40">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
