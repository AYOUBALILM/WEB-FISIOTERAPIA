"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { contact } from "@/lib/config";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when drawer open
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-border supports-[backdrop-filter]:bg-background/70 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
            : "bg-background border-transparent"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex h-[64px] items-center justify-between gap-6 lg:h-[72px]">
            {/* Brand — logo real teal */}
            <Link
              href="/"
              className="group flex items-center gap-3 shrink-0"
              aria-label="Centro de Fisioterapia Ana Seva - Inicio"
            >
              <img
                src="/images/logo/ana-seva.png"
                alt="Ana Seva — Centro de Fisioterapia"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = "none";
                  const fallback = t.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <span className="hidden h-8 w-8 items-center justify-center rounded-[8px] bg-primary text-primary-foreground text-[11px] font-semibold tracking-widest">
                AS
              </span>
              <span className="hidden sm:flex flex-col items-start leading-none">
                <span className="font-serif text-[15.5px] font-[550] tracking-tight text-foreground">
                  Ana Seva
                </span>
                <span className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground font-medium">
                  Fisioterapia — Casetas
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Navegación principal"
              className="hidden lg:flex items-center gap-1"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-[14px] font-[450] text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
              >
                WhatsApp
              </a>
              <Button asChild size="sm" className="rounded-full px-5">
                <a href={contact.phone.href}>
                  <Phone className="mr-2 h-3.5 w-3.5" aria-hidden />
                  Pedir cita — {contact.phone.display}
                </a>
              </Button>
            </div>

            {/* Mobile trigger */}
            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-accent transition-colors"
            >
              {open ? (
                <X className="h-[18px] w-[18px]" />
              ) : (
                <Menu className="h-[18px] w-[18px]" />
              )}
            </button>
          </div>
        </div>

        {/* Subline local — always visible under header, editorial credibility */}
        <div className="hidden lg:block border-t border-border/50 bg-warm/40">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8 flex h-7 items-center justify-between text-[12px]">
            <span className="text-muted-foreground">
              Av. de Logroño, 38 — Casetas, Zaragoza
            </span>
            <a
              href={contact.address.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground/30 transition-colors"
            >
              Ver en mapa
            </a>
          </div>
        </div>
      </header>

      {/* Mobile drawer — motion sutil, no rebotes */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-[2px] lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-[64px] z-40 lg:hidden border-b border-border bg-background shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              <nav
                aria-label="Navegación móvil"
                className="mx-auto max-w-[1280px] px-6 py-6"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="py-3 text-[16px] font-[450] tracking-tight text-foreground border-b border-border/60 last:border-0 hover:text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full justify-center"
                  >
                    <a
                      href={contact.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-center">
                    <a href={contact.phone.href}>Llamar ahora</a>
                  </Button>
                </div>

                <p className="mt-4 text-center text-[12px] leading-5 text-muted-foreground">
                  {contact.address.full} ·{" "}
                  <a
                    href={contact.phone.href}
                    className="underline underline-offset-4"
                  >
                    {contact.phone.display}
                  </a>
                </p>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
