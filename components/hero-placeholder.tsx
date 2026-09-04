/**
 * HeroPlaceholder — Solo para FASE 1
 * En FASE 2 se reemplazará por hero editorial premium asimétrico
 * Aquí verificamos sistema tipográfico, tokens y CTAs
 */

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { business, cta } from "@/lib/content";
import { contact } from "@/lib/config";
import { Button } from "@/components/ui/button";

export function HeroPlaceholder() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-[12px] font-medium tracking-wide text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {contact.address.full}
          </div>

          <h1 className="mt-6 font-serif text-[36px] font-[380] leading-[0.95] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[56px]">
            Fisioterapia
            <br />
            <span className="font-[380] italic text-muted-foreground">
              cercana,
            </span>{" "}
            en Casetas.
          </h1>

          <p className="mt-6 max-w-[56ch] text-[16.5px] leading-7 text-muted-foreground lg:text-[17px]">
            {business.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href={cta.primary.href}>
                {cta.primary.label}
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="rounded-full">
              <a
                href={cta.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.secondary.label}
              </a>
            </Button>
            <Link
              href="#tratamientos"
              className="inline-flex h-[48px] items-center px-4 text-[14.5px] font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border transition-colors"
            >
              Ver tratamientos
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-border pt-6">
            <div className="flex -space-x-2" aria-hidden>
              <span className="h-8 w-8 rounded-full border-2 border-background bg-accent" />
              <span className="h-8 w-8 rounded-full border-2 border-background bg-stone-200" />
              <span className="h-8 w-8 rounded-full border-2 border-background bg-secondary" />
            </div>
            <p className="text-[13px] leading-4 text-muted-foreground">
              <span className="font-semibold text-foreground">4,9</span> en
              Google ·{" "}
              <span className="underline underline-offset-4 decoration-border">
                [VERIFICAR CON ANA]
              </span>{" "}
              reseñas
            </p>
          </div>
        </div>

        {/* Visual placeholder — FASE 2: foto real ana/clinica */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-border bg-secondary lg:aspect-[4/3.4]">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent/40 to-stone-100" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <p className="font-serif text-[13px] uppercase tracking-[0.14em] text-muted-foreground">
              Fotografía real
            </p>
            <p className="mt-2 max-w-[28ch] text-[14px] leading-5 text-muted-foreground">
              Aquí irá fotografía luminosa del centro / Ana atendiendo.{" "}
              <span className="font-medium text-foreground">
                [VERIFICAR CON ANA]
              </span>
            </p>
            <div className="mt-6 h-px w-12 bg-border" />
            <p className="mt-4 text-[12px] text-muted-foreground">
              1200×900 · luz natural · sin stock genérico
            </p>
          </div>

          {/* Corner note editorial */}
          <div className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground shadow-sm backdrop-blur">
            Av. de Logroño, 38
          </div>
        </div>
      </div>

      {/* Trust micro — composición editorial no templática */}
      <div className="mt-12 grid gap-6 border-y border-border py-7 lg:grid-cols-3">
        <p className="text-[13px] leading-6 text-muted-foreground lg:col-span-1">
          Valoración individual,
          <br />
          trato humano y seguimiento claro.
        </p>
        <ul className="grid gap-2 text-[14px] leading-6 text-foreground lg:col-span-2 lg:grid-cols-3">
          <li className="flex gap-2.5">
            <span className="mt-[9px] h-px w-6 shrink-0 bg-border" aria-hidden />
            Primera valoración cercana
          </li>
          <li className="flex gap-2.5">
            <span className="mt-[9px] h-px w-6 shrink-0 bg-border" aria-hidden />
            Plan adaptado a ti
          </li>
          <li className="flex gap-2.5">
            <span className="mt-[9px] h-px w-6 shrink-0 bg-border" aria-hidden />
            Acompañamiento continuo
          </li>
        </ul>
      </div>
    </section>
  );
}
