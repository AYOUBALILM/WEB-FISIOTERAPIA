"use client";

import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { contact, openingHours } from "@/lib/config";
import { Reveal } from "@/components/reveal";

export function Location() {
  return (
    <section id="ubicacion" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Dónde estamos
          </p>
          <h2 className="mt-2 font-serif text-[26px] font-[380] leading-none tracking-[-0.02em] lg:text-[30px]">
            Casetas, Zaragoza.
            <br />
            <span className="italic text-muted-foreground">A pie de calle.</span>
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-muted-foreground mt-0.5" aria-hidden />
              <div>
                <p className="text-[14px] font-medium">{contact.address.full}</p>
                <a
                  href={contact.address.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] underline underline-offset-4 decoration-border hover:decoration-foreground/30"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-muted-foreground mt-0.5" aria-hidden />
              <div>
                <p className="text-[14px] font-medium">{contact.phone.display}</p>
                <div className="flex gap-3 text-[13px]">
                  <a href={contact.phone.href} className="underline underline-offset-4">
                    Llamar
                  </a>
                  <a
                    href={contact.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 underline underline-offset-4"
                  >
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="h-5 w-5 shrink-0 text-muted-foreground mt-0.5" aria-hidden />
              <div className="w-full">
                <p className="text-[14px] font-medium">Horario</p>
                <dl className="mt-1.5 grid gap-1.5 text-[13px] leading-5">
                  {openingHours.map((h) => (
                    <div key={h.days} className="flex justify-between border-b border-border/60 py-1.5 last:border-0">
                      <dt className="text-muted-foreground">{h.days}</dt>
                      <dd className="font-medium">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Horario real pendiente de confirmar. <span className="font-medium text-foreground">[VERIFICAR CON ANA]</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-[18px] border border-border bg-secondary aspect-[4/3] lg:aspect-[4/3.2]">
            {/* Embed placeholder — replace with real embedUrl */}
            <iframe
              title="Mapa — Av. de Logroño 38, Casetas Zaragoza"
              src={contact.address.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 grayscale-[0.15] contrast-[1.05]"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[18px]" />
          </div>
          <p className="mt-2 text-center text-[11px] text-muted-foreground">
            Mapa orientativo · Coordenadas exactas <span className="font-medium">[VERIFICAR CON ANA]</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
