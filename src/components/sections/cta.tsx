"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Cta({
  eyebrow = "Ready when you are",
  title = (
    <>
      Stop guessing. <span className="text-gradient-brand">Start training.</span>
    </>
  ),
  description = "Book a free strategy call with a coach. We'll map your goal, your timeline, and the exact next 12 weeks together.",
  primaryCta = { label: "Start coaching", href: "/pricing" },
  secondaryCta = { label: "Book a call", href: "/contact?intent=call" },
}: Props) {
  return (
    <section className="relative section-padding" aria-labelledby="cta-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-card/60 p-10 backdrop-blur-xl sm:p-14 lg:p-20"
        >
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover opacity-30"
            aria-hidden
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/85 to-primary/30" aria-hidden />
          <div aria-hidden className="absolute -right-20 -top-32 -z-10 size-[420px] rounded-full bg-primary/30 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                <Sparkles className="size-3.5" />
                {eyebrow}
              </span>
              <h2 id="cta-heading" className="heading-display mt-5 text-4xl text-gradient sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Button asChild size="lg">
                <Link href={primaryCta.href}>
                  {primaryCta.label} <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="glass">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
