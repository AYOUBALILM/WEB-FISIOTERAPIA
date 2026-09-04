"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { business } from "@/lib/content";
import { contact } from "@/lib/config";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-border">
      {/* Fondo real del local */}
      <div className="absolute inset-0">
        <img
          src="/images/clinic/recepcion-real.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            t.src = "/images/clinic/collage-5-espacios.jpg";
            t.onerror = () => {
              t.src = "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1920&auto=format&fit=crop";
            };
          }}
        />
        <div className="absolute inset-0 bg-white/78 backdrop-blur-[1px]" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px]"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-px w-7 bg-teal" aria-hidden />
            Casetas — Zaragoza
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium normal-case tracking-normal text-foreground">
              <MapPin className="h-3 w-3 text-teal" aria-hidden />
              Av. de Logroño, 38
            </span>
          </div>

          <h1 id="hero-heading" className="mt-5 font-serif leading-[0.82] tracking-[-0.04em] text-foreground">
            <span className="block text-[54px] font-[700] tracking-[-0.05em] sm:text-[66px] lg:text-[78px] xl:text-[86px]">ANA SEVA</span>
            <span className="block mt-1 text-[36px] font-[350] tracking-[-0.03em] sm:text-[44px] lg:text-[54px]">Fisioterapia</span>
            <span className="block text-[36px] font-[350] italic tracking-[-0.03em] sm:text-[44px] lg:text-[54px] text-teal">cercana</span>
          </h1>

          <p className="mt-5 max-w-[48ch] text-[18px] leading-[1.6] text-foreground/80 lg:text-[19px]">{business.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full h-[50px] px-8 w-full sm:w-auto text-[15px]">
              <a href={contact.phone.href}>
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {contact.phone.display}
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="rounded-full h-[50px] px-7 w-full sm:w-auto border-border bg-white/90 backdrop-blur">
              <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4 text-teal" aria-hidden />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-white/90 backdrop-blur px-4 py-2 shadow-sm">
            <span className="text-[13px] font-semibold">4,9</span>
            <span className="flex gap-0.5" aria-label="5 estrellas">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-[13px] w-[13px] fill-teal text-teal" aria-hidden>
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91 7.03 5.98 10 0l2.97 5.98 6.541.93-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Google</span>
            <span className="h-4 w-px bg-border" aria-hidden />
            <span className="text-[12px] text-muted-foreground">127 valoraciones</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
