"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { trainers } from "@/lib/data";

type Props = { showHeading?: boolean };

export function TrainersGrid({ showHeading = true }: Props) {
  return (
    <section id="trainers" className="relative section-padding" aria-labelledby="trainers-heading">
      <div className="container">
        {showHeading && (
          <SectionHeading
            eyebrow="Coaches"
            title={
              <>
                Real coaches.
                <br />
                <span className="text-gradient-brand">Real receipts.</span>
              </>
            }
            description="Every coach on the team has competed, coached, and quietly grown a roster of clients who keep coming back. No certificates collecting dust."
          />
        )}

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <motion.article
              key={t.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={t.image}
                  alt={`Portrait of ${t.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-white">{t.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">{t.role}</p>
                </div>
                <Link
                  href={t.socials.instagram ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${t.name} on Instagram`}
                  className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Instagram className="size-4" />
                </Link>
              </div>
              <div className="space-y-3 p-5">
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.specialties.map((s) => (
                    <Badge key={s} variant="secondary" className="text-[11px]">
                      {s}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t.experience} coaching
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
