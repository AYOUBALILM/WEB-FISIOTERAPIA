"use client";

import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { contact, openingHours } from "@/lib/config";
import { Reveal } from "@/components/reveal";

export function Location() {
  return (
    <section id="ubicacion" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Dónde estamos</p>
          <h2 className="mt-1 font-serif text-[24px] font-[380] leading-none lg:text-[28px]">Casetas, a pie de calle.</h2>

          <div className="mt-6 space-y-4 text-[13px]">
            <div className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" aria-hidden />
              <div>
                <p className="font-medium">{contact.address.full}</p>
                <a href={contact.address.googleMaps} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-muted-foreground">
                  Ver en Google Maps
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" aria-hidden />
              <div>
                <p className="font-medium">{contact.phone.display}</p>
                <div className="flex gap-3 text-muted-foreground">
                  <a href={contact.phone.href} className="underline underline-offset-4">Llamar</a>
                  <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">
                    <MessageCircle className="h-3 w-3" aria-hidden /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" aria-hidden />
              <div className="w-full">
                <dl className="grid gap-1 text-[13px]">
                  {openingHours.map((h) => (
                    <div key={h.days} className="flex justify-between border-b border-border/60 py-1.5 last:border-0">
                      <dt className="text-muted-foreground">{h.days}</dt>
                      <dd className="font-medium">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-[16px] border border-border bg-secondary aspect-[4/3]">
            <iframe
              title="Mapa Casetas"
              src={contact.address.embedUrl}
              loading="lazy"
              className="h-full w-full border-0 grayscale-[0.15]"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
