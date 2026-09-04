"use client";

/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/config";

export function Ana() {
  return (
    <section id="ana" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-border bg-secondary">
            <img
              src="/images/team/equipo-4.jpg"
              alt="Ana Seva, fisioterapeuta en Casetas"
              className="h-full w-full object-cover object-top"
              loading="lazy"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                t.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900&auto=format&fit=crop";
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">Sobre Ana</p>
            <h2 className="mt-2 font-serif text-[36px] font-[380] leading-[0.9] tracking-[-0.04em] lg:text-[48px]">Soy Ana.</h2>
            <div className="mt-6 space-y-4 text-[16px] leading-7 text-muted-foreground">
              <p className="text-foreground font-[450]">Cercana, clara y constante. Así entiendo la fisioterapia.</p>
              <p>
                Este centro nació para acompañar sin prisas. Escuchar primero, valorar con calma y proponer un plan que tenga sentido para ti — no para una ficha.
              </p>
              <p>
                Si vienes, verás un espacio luminoso, ordenado y tranquilo. Madera clara, blanco y teal. El mismo que ves en las fotos, porque es real.
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <a href={contact.phone.href} className="rounded-full bg-teal px-7 h-[44px] inline-flex items-center text-[13px] font-semibold text-white">
                PEDIR CITA
              </a>
              <a href="#centro" className="rounded-full border border-border px-7 h-[44px] inline-flex items-center text-[13px] font-medium">
                Ver el centro
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
