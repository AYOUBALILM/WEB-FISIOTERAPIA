import { Hero } from "@/components/hero";
import { Treatments } from "@/components/treatments";
import { Team } from "@/components/team";
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
      <Treatments />
      <PilatesHorarios />
      <Team />
      <Testimonials />
      <Clinic />
      <Booking />
      <Location />
      <FAQ />
    </>
  );
}
