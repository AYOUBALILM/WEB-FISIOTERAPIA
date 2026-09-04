"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-14 border-t border-border">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Preguntas frecuentes
            </p>
            <h2 className="mt-2 font-serif text-[24px] font-[380] leading-none tracking-[-0.02em] lg:text-[28px]">
              Dudas habituales,
              <br />
              <span className="italic text-muted-foreground">respuestas claras.</span>
            </h2>
            <p className="mt-4 max-w-[44ch] text-[13.5px] leading-6 text-muted-foreground">
              Si tienes otra pregunta, escríbenos por WhatsApp o llama. No damos diagnósticos por la web.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </section>
  );
}
