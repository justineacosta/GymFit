"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const floatingPills = [
  { label: "−12 kg in 14 weeks", className: "left-[6%] top-[28%]" },
  { label: "First strict pull-up", className: "right-[8%] top-[18%]" },
  { label: "Bench 2× bodyweight", className: "right-[4%] bottom-[18%]" },
];

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-32 sm:pt-36 lg:pt-44"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-radial-fade blur-3xl"
      />

      <div className="container relative">
        <motion.div
          style={{ opacity }}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="gap-2">
                <span className="flex -space-x-1">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                </span>
                Now coaching · Spring intake open
              </Badge>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="heading-display mt-6 text-5xl text-gradient sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Train like you{" "}
              <span className="relative inline-block">
                <span className="text-gradient-brand">mean it.</span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute -bottom-2 left-0 w-full text-primary/60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                >
                  <path
                    d="M2 8 C 75 -2, 150 14, 298 4"
                    strokeDasharray="600"
                    strokeDashoffset="0"
                  />
                </svg>
              </span>
              <br className="hidden sm:block" /> Coach like we know you.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Personal coaching, smart programming, and accountability that meets you where you
              actually live. Whether you have a barbell or a hotel room — we'll build the path.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg">
                <Link href="/pricing">
                  Start coaching <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link href="/programs">
                  <Play className="size-5" /> Watch a session
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
                  "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&q=80",
                ].map((src, i) => (
                  <span
                    key={i}
                    className="relative grid size-10 place-items-center overflow-hidden rounded-full border-2 border-background"
                  >
                    <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">4.9 / 5</span> · trusted by 875k+
                  members worldwide
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              style={{ y: yImg }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto aspect-[4/5] w-full max-w-md"
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
                  alt="Athlete training with coach"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent" />
              </div>

              {floatingPills.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  className={`absolute hidden rounded-full border border-white/15 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-xl backdrop-blur-xl sm:block ${p.className}`}
                >
                  <span className="mr-1.5 inline-block size-1.5 rounded-full bg-primary" />
                  {p.label}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
