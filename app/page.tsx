import { Hero } from "@/components/hero";
import { Fisioterapia } from "@/components/fisioterapia";
import { Pilates } from "@/components/pilates";
import { Ana } from "@/components/ana";
import { Testimonials } from "@/components/testimonials";
import { Clinic } from "@/components/clinic";
import { PilatesHorarios } from "@/components/pilates-horarios";
import { Booking } from "@/components/booking";
import { Location } from "@/components/location";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Fisioterapia />
      <Pilates />
      <Ana />
      <Testimonials />
      <Clinic />
      <PilatesHorarios />
      <Booking />
      <Location />
      <FAQ />
    </>
  );
}
