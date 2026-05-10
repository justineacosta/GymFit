"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/data";
import Link from "next/link";

export function Faq() {
  return (
    <section id="faq" className="relative section-padding" aria-labelledby="faq-heading">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title={
                <>
                  Honest answers to the <span className="text-gradient-brand">things you'd ask.</span>
                </>
              }
              description="Don't see what you're looking for? Drop us a message — a real human responds, usually within a few hours."
            />
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/contact">Ask a question</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-card/40 p-2 sm:p-6 backdrop-blur-xl"
            >
              <Accordion type="single" collapsible className="px-3 sm:px-2">
                {faqs.map((item, i) => (
                  <AccordionItem key={item.q} value={`item-${i}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
