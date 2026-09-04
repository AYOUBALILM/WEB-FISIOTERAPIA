"use client";

/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/reveal";

const servicios = [
  {
    title: "Fisioterapia",
    desc: "Terapia manual y ejercicio terapéutico adaptado a tu momento. Valoración individual, sin prisas.",
    img: "/images/clinic/salas/sala-1-real.jpg",
    fallback: "https://images.unsplash.com/photo-1570172619644-dfd03edfa798?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Pilates",
    desc: "Grupos reducidos en sala luminosa. Fuerza, control y bienestar con acompañamiento.",
    img: "/images/pilates/sala-multifuncional.jpg",
    fallback: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Radiofrecuencia",
    desc: "Apoyo en postparto y recuperación. Tecnología suave, trato cercano.",
    img: "/images/treatments/radiofrecuencia.jpg",
    fallback: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Presoterapia",
    desc: "Drenaje y ligereza. Espacio tranquilo para parar y cuidarte.",
    img: "/images/clinic/salas/sala-3-presoterapia.jpg",
    fallback: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
  },
];

export function Fisioterapia() {
  return (
    <section id="fisioterapia" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 lg:py-24">
      <Reveal>
        <div className="max-w-[560px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">Servicios</p>
          <h2 className="mt-2 font-serif text-[28px] font-[380] leading-[0.9] tracking-[-0.03em] lg:text-[36px]">
            Cuidado que <span className="italic text-teal">se siente.</span>
          </h2>
          <p className="mt-3 text-[16px] leading-6 text-muted-foreground">
            No hacemos menús interminables. Hacemos lo que hacemos bien, y te lo explicamos con claridad.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
        {servicios.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <article className="group relative overflow-hidden rounded-[20px] border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    if (t.src !== s.fallback) t.src = s.fallback;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[19px] font-[550] leading-none">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
