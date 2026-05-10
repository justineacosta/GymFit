"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/lib/data";
import { cn } from "@/lib/utils";

type Props = { showHeading?: boolean };

export function Gallery({ showHeading = true }: Props) {
  return (
    <section className="relative section-padding" aria-labelledby="gallery-heading">
      <div className="container">
        {showHeading && (
          <SectionHeading
            eyebrow="Inside the gym"
            title={
              <>
                Where the work <span className="text-gradient-brand">actually happens.</span>
              </>
            }
            description="Sweat, chalk, late-night PRs, early-morning steps. A peek at the spaces and sessions that shape every program."
          />
        )}

        <div className="mt-14 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 6) * 0.05 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 break-inside-avoid",
                i % 5 === 0 ? "aspect-[3/4]" : i % 4 === 0 ? "aspect-[4/3]" : "aspect-square",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
