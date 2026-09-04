"use client";

import { Phone, MessageCircle } from "lucide-react";
import { contact } from "@/lib/config";

/**
 * Mobile CTA — barra fija inferior
 * SKILL 8 — Llamar | WhatsApp | Pedir cita — siempre visible en mobile
 * Solo visible < lg, respeta safe-area
 */
export function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 lg:hidden"
      style={{ paddingBottom: "max(0px, env(safe-area-inset-bottom))" }}
      aria-label="Acciones principales"
    >
      <div className="mx-auto flex max-w-[560px] items-center gap-2 px-3 py-3">
        <a
          href={contact.phone.href}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background px-3 py-[13px] text-[13.5px] font-medium text-foreground hover:bg-accent active:bg-accent transition-colors"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          Llamar
        </a>

        <a
          href={contact.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background px-3 py-[13px] text-[13.5px] font-medium text-foreground hover:bg-accent active:bg-accent transition-colors"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
          WhatsApp
        </a>

        <a
          href={contact.phone.href}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-[13px] text-[13.5px] font-semibold text-primary-foreground shadow-[0_2px_12px_rgba(0,0,0,0.12)] hover:bg-primary/90 active:bg-primary/95 transition-colors"
        >
          Pedir cita
        </a>
      </div>
    </div>
  );
}
