"use client";

import { contact, siteConfig } from "@/lib/config";
import { business, navLinks } from "@/lib/content";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/images/logo/ana-seva.png"
                alt="Ana Seva"
                className="h-7 w-auto"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = "none";
                }}
              />
              <span className="font-serif text-[14px] font-[550]">{business.name}</span>
            </div>
            <p className="mt-3 max-w-[44ch] text-[13px] leading-5 text-muted-foreground">{business.longDescription}</p>
            <p className="mt-3 text-[12px]">
              <a href={contact.phone.href} className="underline underline-offset-4">{contact.phone.display}</a> · <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">WhatsApp</a>
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">Secciones</p>
            <ul className="mt-3 space-y-1.5 text-[13px]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">Local</p>
            <p className="mt-3 text-[12px] leading-5 text-muted-foreground">
              {contact.address.full}
              <br />
              L–V 9:00–20:00 · S 9:00–13:00
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col gap-1 text-[11px] text-muted-foreground lg:flex-row lg:justify-between">
          <p>© {new Date().getFullYear()} {business.name} — Casetas, Zaragoza.</p>
          <p>{siteConfig.domain.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
