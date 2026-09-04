"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contact } from "@/lib/config";
import { Reveal } from "@/components/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

/**
 * SKILL 9 — "No sé qué tengo" — canal de contacto, NO diagnóstico
 * Preguntas suaves → WhatsApp / tel
 */
const schema = z.object({
  zona: z.string().min(2, "Indica la zona"),
  tiempo: z.string().min(2, "Indica desde cuándo"),
  limita: z.string().min(2, "Cuéntanos si te limita"),
  prevTratamiento: z.string().optional(),
  nombre: z.string().min(2, "Nombre requerido"),
  telefono: z.string().min(9, "Teléfono requerido"),
  mensaje: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;

export function Booking() {
  const [step, setStep] = React.useState<1 | 2>(1);
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      zona: "",
      tiempo: "",
      limita: "",
      prevTratamiento: "",
      nombre: "",
      telefono: "",
      mensaje: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    const text = `Hola Ana, soy ${values.nombre} (${values.telefono}).\n\nZona: ${values.zona}\nDesde cuándo: ${values.tiempo}\n¿Limita?: ${values.limita}\nTratamiento previo: ${values.prevTratamiento || "-"}\n\nMensaje: ${values.mensaje || "-"}\n\nMe gustaría que me orientarais sin compromiso.`;
    const url = `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const nextStep = async () => {
    const ok = await trigger(["zona", "tiempo", "limita"]);
    if (ok) setStep(2);
  };

  const zona = watch("zona");

  return (
    <section id="contacto" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 items-start">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Contacto — SKILL 9
          </p>
          <h2 className="mt-2 font-serif text-[28px] font-[380] leading-[0.95] tracking-[-0.02em] lg:text-[34px]">
            ¿No sabes
            <br />
            <span className="italic text-muted-foreground">qué necesitas?</span>
          </h2>
          <p className="mt-4 max-w-[52ch] text-[14px] leading-6 text-muted-foreground lg:text-[14.5px]">
            Responde 3 preguntas breves. No hacemos diagnósticos por la web — es solo para
            orientarte y llamarte. Si prefieres, llámanos directamente.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={contact.phone.href} className="inline-flex rounded-full bg-primary px-6 py-3 text-[14px] font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              Llamar — {contact.phone.display}
            </a>
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-border bg-background px-6 py-3 text-[14px] font-medium hover:bg-accent transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-6 rounded-[14px] border border-border bg-secondary/30 p-4">
            <p className="text-[12px] font-medium">Privacidad</p>
            <p className="text-[12.5px] leading-5 text-muted-foreground">
              Solo usamos tus datos para contactarte. No se almacena diagnóstico ni se comparte con terceros. Mensaje vía WhatsApp/teléfono directo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[20px] border border-border bg-card p-6 lg:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
            noValidate
          >
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Paso {step} de 2
              </p>
              <div className="flex gap-1.5" aria-hidden>
                <span className={`h-1.5 w-8 rounded-full ${step >= 1 ? "bg-primary" : "bg-border"}`} />
                <span className={`h-1.5 w-8 rounded-full ${step >= 2 ? "bg-primary" : "bg-border"}`} />
              </div>
            </div>

            {step === 1 && (
              <div className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="zona">¿Dónde tienes la molestia? *</Label>
                  <Input id="zona" placeholder="Ej: zona lumbar, hombro derecho" className="mt-1.5" {...register("zona")} aria-invalid={!!errors.zona} />
                  {errors.zona && <p className="mt-1 text-[12px] text-destructive">{errors.zona.message}</p>}
                </div>
                <div>
                  <Label htmlFor="tiempo">¿Desde cuándo? *</Label>
                  <Input id="tiempo" placeholder="Ej: hace 3 semanas, desde ayer" className="mt-1.5" {...register("tiempo")} aria-invalid={!!errors.tiempo} />
                  {errors.tiempo && <p className="mt-1 text-[12px] text-destructive">{errors.tiempo.message}</p>}
                </div>
                <div>
                  <Label htmlFor="limita">¿Te limita en alguna actividad? *</Label>
                  <Input id="limita" placeholder="Ej: me cuesta girarme, correr" className="mt-1.5" {...register("limita")} aria-invalid={!!errors.limita} />
                  {errors.limita && <p className="mt-1 text-[12px] text-destructive">{errors.limita.message}</p>}
                </div>
                <div>
                  <Label htmlFor="prevTratamiento">¿Has recibido tratamiento antes? (opcional)</Label>
                  <Input id="prevTratamiento" placeholder="Ej: sí, hace un año" className="mt-1.5" {...register("prevTratamiento")} />
                </div>

                <Button type="button" onClick={nextStep} className="w-full rounded-full mt-2">
                  Continuar
                </Button>
                <p className="text-center text-[11px] text-muted-foreground">
                  {zona ? `Zona: ${zona}` : "No guardamos datos médicos, solo contacto."}
                </p>
              </div>
            )}

            {step === 2 && (
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input id="nombre" placeholder="Tu nombre" className="mt-1.5" {...register("nombre")} aria-invalid={!!errors.nombre} />
                    {errors.nombre && <p className="mt-1 text-[12px] text-destructive">{errors.nombre.message}</p>}
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input id="telefono" inputMode="tel" placeholder="612 345 678" className="mt-1.5" {...register("telefono")} aria-invalid={!!errors.telefono} />
                    {errors.telefono && <p className="mt-1 text-[12px] text-destructive">{errors.telefono.message}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="mensaje">¿Algo más que quieras contarnos? (opcional)</Label>
                  <Textarea id="mensaje" rows={3} placeholder="Ej: trabajo sentado, entreno 3x/semana..." className="mt-1.5" {...register("mensaje")} />
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="secondary" onClick={() => setStep(1)} className="flex-1 rounded-full">
                    Atrás
                  </Button>
                  <Button type="submit" className="flex-[1.4] rounded-full">
                    Enviar por WhatsApp
                  </Button>
                </div>
                <p className="text-center text-[11px] leading-4 text-muted-foreground">
                  Al enviar, abrirás WhatsApp con el mensaje pre-escrito. No es un diagnóstico automático (SKILL 9/10).
                </p>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
