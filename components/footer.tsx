import { contact, siteConfig } from "@/lib/config";
import { business, navLinks } from "@/lib/content";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-primary text-primary-foreground text-[11px] font-semibold tracking-widest">
                AS
              </span>
              <span className="font-serif text-[15px] font-[550] tracking-tight">
                {business.name}
              </span>
            </div>
            <p className="mt-3 max-w-[46ch] text-[13px] leading-6 text-muted-foreground">
              {business.longDescription}
            </p>
            <p className="mt-4 text-[12px] leading-5 text-muted-foreground">
              <span className="font-medium text-foreground">{contact.address.full}</span>
              <br />
              <a href={contact.phone.href} className="underline underline-offset-4">
                {contact.phone.display}
              </a>{" "}
              ·{" "}
              <a
                href={contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                WhatsApp
              </a>{" "}
              ·{" "}
              <a
                href={contact.address.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Ver mapa
              </a>
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Navegación
            </p>
            <ul className="mt-3 space-y-2 text-[13px]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              SEO local
            </p>
            <ul className="mt-3 space-y-1.5 text-[12.5px] leading-5 text-muted-foreground">
              <li>Fisioterapia Casetas</li>
              <li>Fisioterapeuta Casetas</li>
              <li>Fisioterapia Utebo · Zaragoza</li>
              <li>Pilates Casetas</li>
            </ul>
            <p className="mt-4 text-[11px] leading-4 text-muted-foreground">
              Arquitectura preparada para páginas <code className="bg-background border border-border px-1 rounded">/fisioterapia-casetas</code> etc. (SKILL 12)
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-[11px] leading-5 text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name} — Casetas, Zaragoza. Información orientativa, no diagnóstico médico.
          </p>
          <p>
            Web por estudio digital premium ·{" "}
            <a href={siteConfig.domain} className="underline underline-offset-4">
              {siteConfig.domain.replace("https://", "")}
            </a>{" "}
            · Datos pendientes <span className="font-medium text-foreground">[VERIFICAR CON ANA]</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
