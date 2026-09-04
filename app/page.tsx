import { HeroPlaceholder } from "@/components/hero-placeholder";
import { Separator } from "@/components/ui/separator";
import { business, problems } from "@/lib/content";
import { contact } from "@/lib/config";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroPlaceholder />

      {/* Problems teaser — SKILL 31 user journey */}
      <section
        id="tratamientos"
        className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16"
        aria-labelledby="problems-heading"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Motivos frecuentes
            </p>
            <h2
              id="problems-heading"
              className="mt-2 font-serif text-[28px] font-[380] leading-none tracking-[-0.02em] lg:text-[32px]"
            >
              ¿Qué te ocurre?
            </h2>
          </div>
          <p className="max-w-[44ch] text-[14px] leading-6 text-muted-foreground">
            Elige lo que más se acerca a tu caso. Si no lo tienes claro,
            cuéntanos por teléfono y te orientamos sin compromiso.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group relative flex flex-col justify-between rounded-[16px] border border-border bg-card p-5 transition-all duration-200 hover:border-primary/15 hover:bg-accent/40 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <span className="text-[13px] font-medium tracking-tight text-foreground group-hover:text-primary transition-colors">
                {p.label}
              </span>
              <span className="mt-2 text-[13px] leading-5 text-muted-foreground">
                {p.description}
              </span>
              <span className="mt-4 inline-flex text-[12px] font-medium tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">
                Saber más →
              </span>
              {p.highlight && (
                <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary-foreground">
                  Te orientamos
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-[1280px]" />

      {/* Contact tease + fase placeholder */}
      <section
        id="contacto"
        className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16"
      >
        <div className="grid gap-8 rounded-[20px] border border-border bg-secondary/30 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <h2 className="font-serif text-[24px] font-[380] tracking-tight lg:text-[28px]">
              Cuéntanos qué te ocurre.
            </h2>
            <p className="mt-3 max-w-[52ch] text-[14.5px] leading-6 text-muted-foreground">
              {business.longDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contact.phone.href}
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-[14px] font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Pedir cita — {contact.phone.display}
              </a>
              <a
                href={contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-[14px] font-medium hover:bg-accent transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <p className="mt-4 text-[12px] leading-4 text-muted-foreground">
              Av. de Logroño, 38 — Casetas ·{" "}
              <span className="font-medium text-foreground">[VERIFICAR CON ANA] horario</span>
            </p>
          </div>

          <div className="rounded-[16px] border border-border bg-background p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Fase 1 — placeholder
            </p>
            <p className="mt-2 font-serif text-[16px] leading-6">
              En Fase 5 aquí vivirá el flujo “No sé qué necesito” con preguntas
              suaves y envío a WhatsApp/teléfono — sin diagnósticos automáticos.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-4 text-[13px] leading-5 text-muted-foreground">
              <li>¿Dónde tienes la molestia?</li>
              <li>¿Desde cuándo?</li>
              <li>¿Te limita en alguna actividad?</li>
              <li>Déjanos tu teléfono y te llamamos.</li>
            </ul>
            <p className="mt-4 text-[12px] font-medium text-muted-foreground">
              SKILL 9 — canal de contacto, no diagnóstico.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-[11px] tracking-wide text-muted-foreground">
          FASE 1 · Diseño base operativo · Siguiente: Hero editorial premium + motion sutil (FASE 2)
        </p>
      </section>
    </>
  );
}
