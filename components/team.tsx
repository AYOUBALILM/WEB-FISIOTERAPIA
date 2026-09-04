"use client";

import { Reveal } from "@/components/reveal";
import { team } from "@/lib/content";
import { contact } from "@/lib/config";

export function Team() {
  const member = team[0];
  return (
    <section id="equipo" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <Reveal>
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Equipo
          </p>
          <h2 className="mt-2 font-serif text-[28px] font-[380] leading-none tracking-[-0.02em] lg:text-[32px]">
            {member.name}
          </h2>
          <p className="mt-2 text-[13px] font-medium tracking-wide text-muted-foreground uppercase">
            {member.role} — {member.credentials}
          </p>
          <p className="mt-6 text-[15px] leading-7 text-muted-foreground">
            {member.bio}
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href={contact.phone.href}
              className="inline-flex rounded-full bg-primary px-6 py-3 text-[14px] font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Pedir cita
            </a>
            <a
              href="#contacto"
              className="inline-flex rounded-full border border-border bg-background px-6 py-3 text-[14px] font-medium hover:bg-accent transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
