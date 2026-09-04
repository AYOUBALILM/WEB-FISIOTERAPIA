"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, MessageCircle } from "lucide-react";
import { business } from "@/lib/content";
import { contact } from "@/lib/config";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-border bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid items-start gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pt-1"
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-px w-7 bg-border" aria-hidden />
              Casetas — Zaragoza
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium normal-case tracking-normal text-foreground">
                <MapPin className="h-3 w-3" aria-hidden />
                Av. de Logroño, 38
              </span>
            </div>

            <h1
              id="hero-heading"
              className="mt-5 font-serif leading-[0.82] tracking-[-0.04em] text-foreground"
            >
              <span className="block text-[52px] font-[650] tracking-[-0.05em] sm:text-[62px] lg:text-[74px] xl:text-[82px]">
                ANA SEVA
              </span>
              <span className="block mt-1 text-[34px] font-[350] tracking-[-0.03em] sm:text-[42px] lg:text-[52px] xl:text-[56px] text-foreground">
                Fisioterapia
              </span>
              <span className="block text-[34px] font-[350] italic tracking-[-0.03em] sm:text-[42px] lg:text-[52px] xl:text-[56px] text-muted-foreground">
                cercana
              </span>
            </h1>

            <p className="mt-5 max-w-[48ch] text-[17px] leading-[1.65] text-muted-foreground lg:text-[18px]">
              {business.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-full h-[48px] px-7 w-full sm:w-auto">
                <a href={contact.phone.href}>
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {contact.phone.display}
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-full h-[48px] px-6 w-full sm:w-auto border-border">
                <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
                  WhatsApp
                </a>
              </Button>
              <a
                href="#tratamientos"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-[13.5px] font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border transition-colors"
              >
                Ver tratamientos <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-semibold">4,9</span>
                <span className="flex gap-0.5" aria-label="5 estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-[13px] w-[13px] fill-primary text-primary" aria-hidden>
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91 7.03 5.98 10 0l2.97 5.98 6.541.93-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Google</span>
              </div>
              <span className="h-4 w-px bg-border" aria-hidden />
              <p className="text-[12.5px] text-muted-foreground">127 valoraciones</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="relative"
          >
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-[24px] border border-border bg-secondary lg:aspect-[4/3.4]">
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"
                alt="Terapia manual elegante — manos de fisioterapeuta en tratamiento con luz cálida, representando la fisioterapia cercana de Ana Seva"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between">
                <div className="rounded-[12px] bg-background/95 backdrop-blur px-3.5 py-2 shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Casetas</p>
                  <p className="text-[13px] font-medium leading-none">Av. de Logroño, 38</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
