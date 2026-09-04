"use client";

/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/reveal";

export function PilatesHorarios() {
  return (
    <section id="horarios" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <Reveal delay={0.08}>
        <div className="relative overflow-hidden rounded-[24px] border border-border shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          <img
            src="/images/pilates/horarios-pilates.jpg"
            alt="Horarios clases de Pilates con fondo sala multifuncional"
            className="w-full h-auto object-cover"
            loading="lazy"
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              t.src = "/images/clinic/collage-5-espacios.jpg";
            }}
          />
        </div>
      </Reveal>

      {/* Detalle animado sutil — puntos teal flotantes */}
      <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-[720px] mx-auto">
        {[
          { title: "Fuerza y flexibilidad", desc: "TRX, bosu, pelotas" },
          { title: "Postura y alineación", desc: "Madera clara, espejos" },
          { title: "Bienestar integral", desc: "Luz natural, calma" },
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="rounded-[14px] border border-border bg-card p-4 text-center hover:border-teal/20 hover:shadow-[0_4px_16px_rgba(14,138,138,0.06)] transition-all hover:-translate-y-0.5">
              <span className="inline-flex h-2 w-2 rounded-full bg-teal animate-pulse" aria-hidden />
              <p className="mt-2 text-[13px] font-medium">{item.title}</p>
              <p className="text-[12px] text-muted-foreground">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
