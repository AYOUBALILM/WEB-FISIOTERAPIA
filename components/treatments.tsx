"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { treatments, problems } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/config";

/**
 * Treatments — editorial list, not 3-col identical cards (SKILL 2)
 * Left highlight + alternating composition
 */
export function Treatments() {
  return (
    <section id="tratamientos" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <Reveal>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Tratamientos
            </p>
            <h2 className="mt-2 font-serif text-[28px] font-[380] leading-none tracking-[-0.02em] lg:text-[34px]">
              Lo que hacemos,
              <br />
              <span className="italic text-muted-foreground">sin rodeos.</span>
            </h2>
          </div>
          <p className="max-w-[52ch] text-[14px] leading-6 text-muted-foreground lg:text-[14.5px]">
            Cada persona es distinta. Te explicamos con claridad qué podemos hacer y qué no.
            Si no sabes qué necesitas, te orientamos por teléfono o WhatsApp — sin diagnósticos por la web.
          </p>
        </div>
      </Reveal>

      {/* Problems — user journey SKILL 31 */}
      <Reveal delay={0.08} className="mt-8">
        <p className="text-[12px] font-medium tracking-wide text-muted-foreground">
          ¿Dónde te duele? <span className="font-normal">Elige tu motivo y te llevamos a la info.</span>
        </p>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group relative flex items-center justify-between gap-3 rounded-[14px] border border-border bg-card px-4 py-3.5 transition-all hover:border-primary/15 hover:bg-accent/30 hover:-translate-y-[1px]"
            >
              <div>
                <p className="text-[13.5px] font-medium leading-none tracking-tight group-hover:text-primary transition-colors">
                  {p.label}
                </p>
                <p className="mt-1 text-[12.5px] leading-4 text-muted-foreground">
                  {p.description}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Ver
              </span>
            </Link>
          ))}
        </div>
      </Reveal>

      {/* Treatments editorial */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="space-y-4">
          {treatments.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.06}>
              <article className="group rounded-[18px] border border-border bg-card p-5 lg:p-6 transition-all hover:border-primary/10 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-[17px] font-[550] tracking-tight lg:text-[18px]">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 max-w-[60ch] text-[13.5px] leading-6 text-muted-foreground">
                      {t.excerpt}
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {t.forWhom}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    [VERIFICAR CON ANA]
                  </span>
                </div>
                <p className="mt-4 text-[12.5px] leading-5 text-muted-foreground">
                  {t.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16} className="lg:sticky lg:top-[88px] self-start">
          <div className="rounded-[18px] border border-border bg-secondary/30 p-6 lg:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              ¿No sabes qué necesitas?
            </p>
            <h3 className="mt-2 font-serif text-[20px] font-[450] leading-tight tracking-tight lg:text-[22px]">
              Te orientamos sin compromiso.
            </h3>
            <p className="mt-3 text-[13.5px] leading-6 text-muted-foreground">
              Cuéntanos brevemente qué te ocurre, desde cuándo y si te limita en algo. Te llamamos para valorar el siguiente paso. No es un diagnóstico automático.
            </p>
            <ul className="mt-5 space-y-2 text-[13px] leading-5">
              <li className="flex gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                ¿Dónde tienes la molestia?
              </li>
              <li className="flex gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                ¿Desde cuándo?
              </li>
              <li className="flex gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                ¿Te limita en alguna actividad?
              </li>
              <li className="flex gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                Déjanos tu teléfono y te contactamos.
              </li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={contact.phone.href}
                className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-[13px] font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Llamar
              </a>
              <a
                href={contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-3 text-[13px] font-medium hover:bg-accent transition-colors"
              >
                WhatsApp
              </a>
            </div>
            <p className="mt-3 text-center text-[11px] leading-4 text-muted-foreground">
              Respuesta en horario de centro. <span className="font-medium">[VERIFICAR CON ANA]</span>
            </p>
          </div>

          <div className="mt-4 rounded-[14px] border border-dashed border-border bg-background p-4">
            <p className="text-[12px] font-medium">Horario actual</p>
            <p className="text-[13px] text-muted-foreground">[VERIFICAR CON ANA] — se mostrará aquí tras confirmar con el centro.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
