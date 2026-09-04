"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { contact } from "@/lib/config";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background border-b border-border"
    >
      {/* Imagen protagonista — derecha, negativo izquierda */}
      <div className="absolute inset-0 lg:left-[42%]">
        <img
          src="/images/hero/hero-volver-a-moverte.jpg"
          alt="Fisioterapeuta acompañando a paciente en ejercicio suave, luz natural en clínica Ana Seva"
          className="h-full w-full object-cover object-[65%_30%]"
          loading="eager"
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            if (!t.src.includes("unsplash")) {
              t.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop";
            }
          }}
        />
        {/* Velo editorial — deja respirar texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent lg:from-background lg:via-background/70 lg:to-white/0" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent lg:hidden" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="min-h-[78vh] lg:min-h-[84vh] flex items-center py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[560px] pt-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal flex items-center gap-2">
              <span className="h-px w-6 bg-teal" aria-hidden />
              Casetas · Zaragoza
            </p>

            <h1
              id="hero-heading"
              className="mt-4 font-serif text-[42px] font-[420] leading-[0.88] tracking-[-0.04em] sm:text-[52px] lg:text-[62px] xl:text-[68px]"
            >
              <span className="block">Volver a moverte</span>
              <span className="block italic font-[380] text-teal">empieza por</span>
              <span className="block">entenderte.</span>
            </h1>

            <p className="mt-5 max-w-[44ch] text-[17px] leading-[1.6] text-muted-foreground lg:text-[18px]">
              Fisioterapia, movimiento y acompañamiento personalizado en Zaragoza.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.phone.href}
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 h-[48px] text-[13px] font-semibold tracking-[0.04em] text-white hover:bg-teal/90 transition-colors"
              >
                <Phone className="mr-2 h-3.5 w-3.5" aria-hidden />
                PEDIR CITA
              </a>
              <a
                href="#centro"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 backdrop-blur px-7 h-[48px] text-[13px] font-medium tracking-[0.02em] hover:bg-white transition-colors"
              >
                CONOCER EL CENTRO
              </a>
            </div>

            <p className="mt-6 text-[12px] tracking-wide text-muted-foreground">
              Av. de Logroño, 38 — Casetas
            </p>
          </motion.div>
        </div>
      </div>

      {/* Indicador scroll sutil */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[10px] tracking-[0.12em] text-muted-foreground"
        aria-hidden
      >
        <span className="h-8 w-px bg-border" />
      </motion.div>
    </section>
  );
}
