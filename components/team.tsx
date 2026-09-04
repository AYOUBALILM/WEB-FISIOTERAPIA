"use client";

/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/reveal";
import { team } from "@/lib/content";
import { contact } from "@/lib/config";

export function Team() {
  const member = team[0];
  return (
    <section id="equipo" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 items-start">
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-[20px] border border-border bg-secondary lg:aspect-[4/4.2]">
            {/* Placeholder real photo Ana */}
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900&auto=format&fit=crop"
              alt={member.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[20px] pointer-events-none" />
            <div className="absolute bottom-3 left-3 rounded-full bg-background/95 px-3 py-1.5 text-[11px] font-medium shadow-sm backdrop-blur">
              Foto real pendiente <span className="text-muted-foreground">[VERIFICAR CON ANA]</span>
            </div>
          </div>

          <div className="pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Equipo
            </p>
            <h2 className="mt-2 font-serif text-[26px] font-[380] leading-none tracking-[-0.02em] lg:text-[30px]">
              {member.name}
              <span className="block text-[14px] font-sans font-medium tracking-normal text-muted-foreground mt-1.5">
                {member.role} · <span className="font-normal">{member.credentials}</span>
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-[14px] leading-7 text-muted-foreground">
              <p className="text-foreground font-[450] leading-7">
                Trato cercano, explicación clara y acompañamiento continuo.
              </p>
              <p>{member.bio}</p>
              <p className="text-[13px] leading-6 bg-secondary/40 rounded-[12px] border border-border p-4">
                <span className="font-medium text-foreground">Nota:</span> Esta presentación se reemplazará por texto en primera persona de Ana,
                con formación y colegiación verificadas. Nunca inventamos titulaciones.
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <a href={contact.phone.href} className="inline-flex rounded-full bg-primary px-5 py-2.5 text-[13.5px] font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                Pedir cita con Ana
              </a>
              <a href="#contacto" className="inline-flex rounded-full border border-border bg-background px-5 py-2.5 text-[13.5px] font-medium hover:bg-accent transition-colors">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
