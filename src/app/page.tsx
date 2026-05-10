import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Stats } from "@/components/sections/stats";
import { Values } from "@/components/sections/values";
import { ProgramsGrid } from "@/components/sections/programs-grid";
import { Process } from "@/components/sections/process";
import { Transformation } from "@/components/sections/transformation";
import { TrainersGrid } from "@/components/sections/trainers-grid";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Stats />
      <Values />
      <ProgramsGrid limit={6} />
      <Process />
      <Transformation />
      <TrainersGrid />
      <Testimonials />
      <Pricing />
      <Gallery />
      <Faq />
      <Cta />
    </>
  );
}
