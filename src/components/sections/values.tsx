"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { values } from "@/lib/data";

export function Values() {
  return (
    <section className="relative section-padding" aria-labelledby="values-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Our approach"
          title={
            <>
              The boring stuff that <span className="text-gradient-brand">quietly works.</span>
            </>
          }
          description="We don't sell magic. We sell the four things that 99% of fitness apps and gyms quietly skip — and that 99% of results come from."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
            >
              <SpotlightCard className="flex h-full flex-col gap-4 p-7">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="size-6" />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
