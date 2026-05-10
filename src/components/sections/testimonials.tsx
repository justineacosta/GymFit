"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative section-padding" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Stories"
          title={
            <>
              The receipts are in the <span className="text-gradient-brand">results.</span>
            </>
          }
          description="Real members. Real numbers. Real outcomes — across goals, ages, and starting points."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-md lg:col-span-5">
            <div aria-hidden className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-3xl" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.name}
                custom={direction}
                initial={{ opacity: 0, scale: 0.95, x: direction * 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -direction * 40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
              >
                <Image
                  src={t.image}
                  alt={`Photo of ${t.name}`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">Result</p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">{t.result}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-7">
            <Quote className="size-10 text-primary/60" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.quote}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="mt-4 font-display text-2xl leading-snug text-foreground sm:text-3xl lg:text-4xl"
              >
                "{t.quote}"
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-1 text-amber-300">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-2 font-display text-base font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                >
                  <ChevronRight className="size-5" />
                </Button>
                <span className="ml-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mx-1">/</span>
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
