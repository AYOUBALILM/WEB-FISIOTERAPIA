"use client";

import Link from "next/link";
import { treatments, problems } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/config";

export function Treatments() {
  return (
    <section id="tratamientos" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <Reveal>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-serif text-[28px] font-[380] leading-none tracking-[-0.02em] lg:text-[32px]">
            ¿Qué necesitas?
          </h2>
          <p className="max-w-[48ch] text-[14px] leading-6 text-muted-foreground">
            Elige tu motivo. Si no lo tienes claro, te orientamos.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.06} className="mt-7">
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          {problems.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group flex items-center justify-between gap-2 rounded-[14px] border border-border bg-card px-4 py-3.5 hover:border-primary/15 hover:bg-accent/30 transition-colors"
            >
              <div>
                <p className="text-[13.5px] font-medium leading-none">{p.label}</p>
                <p className="mt-1 text-[12px] leading-4 text-muted-foreground">{p.description}</p>
              </div>
              <span className="shrink-0 text-muted-foreground group-hover:text-foreground">→</span>
            </Link>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {treatments.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.05}>
              <article className="rounded-[16px] border border-border bg-card p-5 hover:border-primary/10 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all h-full">
                <h3 className="font-serif text-[16px] font-[550] leading-tight">{t.title}</h3>
                <p className="mt-1.5 text-[13px] leading-5 text-muted-foreground">{t.excerpt}</p>
                <span className="mt-3 inline-flex rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground">{t.forWhom}</span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="self-start">
          <div className="rounded-[18px] border border-border bg-secondary/30 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">¿No sabes?</p>
            <h3 className="mt-2 font-serif text-[19px] font-[450] leading-tight">Te orientamos.</h3>
            <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
              Cuéntanos dónde te duele y desde cuándo. Te llamamos para valorar el siguiente paso.
            </p>
            <div className="mt-5 flex gap-2">
              <a href={contact.phone.href} className="flex-1 inline-flex justify-center rounded-full bg-primary px-4 py-3 text-[13px] font-semibold text-primary-foreground">
                Llamar
              </a>
              <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex justify-center rounded-full border border-border bg-background px-4 py-3 text-[13px] font-medium">
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
