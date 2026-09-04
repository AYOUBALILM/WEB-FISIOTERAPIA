"use client";

/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/reveal";

export function Pilates() {
  return (
    <section id="pilates" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
        <Reveal>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">Pilates</p>
            <h2 className="mt-2 font-serif text-[30px] font-[380] leading-[0.9] tracking-[-0.03em] lg:text-[40px]">
              Muévete mejor.
              <br />
              <span className="italic text-teal">Siéntete mejor.</span>
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-muted-foreground">
              Grupos reducidos, esterillas alineadas, luz cenital. Fuerza y flexibilidad sin gritar. Solo movimiento consciente.
            </p>
            <div className="mt-6 flex gap-6 text-[13px]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden /> Fuerza
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden /> Postura
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden /> Bienestar
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border bg-secondary">
            <img
              src="/images/pilates/sala-multifuncional.jpg"
              alt="Sala de Pilates Ana Seva — esterillas y TRX"
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                t.src = "/images/hero/hero-pilates-panoramica.jpg";
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
