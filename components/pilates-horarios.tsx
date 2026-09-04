"use client";

/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/reveal";

export function PilatesHorarios() {
  return (
    <section id="horarios" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <Reveal>
        <div className="text-center max-w-[640px] mx-auto">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-teal">Horarios</p>
          <h2 className="mt-2 font-serif text-[28px] font-[380] leading-none lg:text-[34px]">
            Pilates — <span className="italic text-teal">grupos reducidos</span>
          </h2>
          <p className="mt-3 text-[15px] leading-6 text-muted-foreground">
            Lunes a jueves mañana y tarde, viernes tarde. Sala multifuncional luminosa.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-8">
        <div className="relative overflow-hidden rounded-[20px] border border-border bg-card shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          {/* Imagen real del horario — colócala en public/images/pilates/horarios-pilates.jpg */}
          <img
            src="/images/pilates/horarios-pilates.jpg"
            alt="Horarios clases de Pilates — lunes a viernes, grupos reducidos"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
          {/* Fallback si aún no está la imagen local — muestra stock temporal con animación sutil */}
          <div className="absolute inset-0 pointer-events-none border border-border rounded-[20px]" aria-hidden />
        </div>
        <p className="mt-3 text-center text-[12px] text-muted-foreground">
          Imagen real del centro — si no la ves, copia el archivo a <code className="bg-secondary px-1 rounded">public/images/pilates/horarios-pilates.jpg</code>
        </p>
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
