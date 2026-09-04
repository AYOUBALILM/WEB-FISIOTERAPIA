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

const schema = z.object({
  zona: z.string().min(2, "Indica la zona"),
  tiempo: z.string().min(2, "Indica desde cuándo"),
  nombre: z.string().min(2, "Nombre"),
  telefono: z.string().min(9, "Teléfono"),
  mensaje: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;

export function Booking() {
  const [step, setStep] = React.useState<1 | 2>(1);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { zona: "", tiempo: "", nombre: "", telefono: "", mensaje: "" },
  });

  const onSubmit = (v: FormValues) => {
    const text = `Hola Ana, soy ${v.nombre} (${v.telefono}). Zona: ${v.zona}, desde: ${v.tiempo}. ${v.mensaje || ""}`;
    window.open(`https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const next = async () => {
    if (await trigger(["zona", "tiempo"])) setStep(2);
  };

  return (
    <section id="contacto" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-start">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Contacto</p>
          <h2 className="mt-1 font-serif text-[26px] font-[380] leading-none lg:text-[30px]">¿No sabes qué necesitas?</h2>
          <p className="mt-3 max-w-[44ch] text-[14px] leading-6 text-muted-foreground">
            Responde dos preguntas y te contactamos. Sin diagnósticos por la web.
          </p>
          <div className="mt-5 flex gap-2">
            <a href={contact.phone.href} className="rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground">
              {contact.phone.display}
            </a>
            <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-background px-5 py-2.5 text-[13px] font-medium">
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-[20px] border border-border bg-card p-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">Paso {step}/2</p>
            {step === 1 ? (
              <div className="mt-4 space-y-3">
                <div>
                  <Label htmlFor="zona">¿Dónde te duele? *</Label>
                  <Input id="zona" placeholder="Ej: lumbar, hombro" className="mt-1" {...register("zona")} />
                  {errors.zona && <p className="text-[11px] text-destructive mt-1">{errors.zona.message}</p>}
                </div>
                <div>
                  <Label htmlFor="tiempo">¿Desde cuándo? *</Label>
                  <Input id="tiempo" placeholder="Ej: 2 semanas" className="mt-1" {...register("tiempo")} />
                  {errors.tiempo && <p className="text-[11px] text-destructive mt-1">{errors.tiempo.message}</p>}
                </div>
                <Button type="button" onClick={next} className="w-full rounded-full mt-2">
                  Continuar
                </Button>
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input id="nombre" placeholder="Tu nombre" className="mt-1" {...register("nombre")} />
                    {errors.nombre && <p className="text-[11px] text-destructive mt-1">{errors.nombre.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input id="telefono" placeholder="612 345 678" className="mt-1" {...register("telefono")} />
                    {errors.telefono && <p className="text-[11px] text-destructive mt-1">{errors.telefono.message}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                  <Textarea id="mensaje" rows={2} placeholder="Algo más..." className="mt-1" {...register("mensaje")} />
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant="secondary" onClick={() => setStep(1)} className="flex-1 rounded-full">
                    Atrás
                  </Button>
                  <Button type="submit" className="flex-[1.4] rounded-full">
                    Enviar por WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
