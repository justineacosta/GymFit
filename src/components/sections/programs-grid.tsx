"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { programs } from "@/lib/data";

type Props = { showHeading?: boolean; limit?: number };

export function ProgramsGrid({ showHeading = true, limit }: Props) {
  const list = limit ? programs.slice(0, limit) : programs;

  return (
    <section id="programs" className="relative section-padding" aria-labelledby="programs-heading">
      <div className="container">
        {showHeading && (
          <SectionHeading
            eyebrow="Programs"
            title={
              <>
                Built for the body you want.
                <br />
                <span className="text-gradient-brand">Coached by humans.</span>
              </>
            }
            description="Pick a track, or let us build a fully bespoke plan around your goal, schedule, and equipment. Every program is coach-led, every block is reviewed."
          />
        )}

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            >
              <SpotlightCard className="group flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <Badge variant="secondary" className="border-white/15 bg-black/40 text-white backdrop-blur">
                      {p.level}
                    </Badge>
                    <Badge variant="outline" className="border-white/15 bg-black/40 text-white backdrop-blur">
                      {p.duration}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/40">
                    <p.icon className="size-6" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-primary/90">{p.tagline}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="space-y-2 pt-1">
                    {p.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-2">
                    <Link
                      href={`/programs#${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Explore program
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
