"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { transformations } from "@/lib/data";

export function Transformation() {
  return (
    <section className="relative section-padding" aria-labelledby="transformation-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Transformations"
          title={
            <>
              Slide to see the <span className="text-gradient-brand">before & after.</span>
            </>
          }
          description="No before/after is faked, filtered, or pulled from a stock library. Every photo here is a member who showed up and trusted the process."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <BeforeAfter {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type BAProps = {
  name: string;
  duration: string;
  result: string;
  before: string;
  after: string;
};

function BeforeAfter({ name, duration, result, before, after }: BAProps) {
  const [position, setPosition] = React.useState(50);
  const [dragging, setDragging] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl">
      <div
        ref={ref}
        className="relative aspect-[4/5] cursor-ew-resize select-none overflow-hidden"
        onMouseDown={() => setDragging(true)}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onMouseMove={(e) => dragging && handleMove(e.clientX)}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={() => setDragging(false)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        role="slider"
        aria-label={`${name} before and after transformation slider`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
        }}
      >
        <Image src={after} alt={`${name} after transformation`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={before}
            alt={`${name} before transformation`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            style={{ objectPosition: "left center" }}
          />
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white text-background shadow-2xl">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 6L3 12l6 6" />
              <path d="M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground">
          After
        </span>
      </div>
      <div className="flex items-center justify-between p-5">
        <div>
          <p className="font-display text-base font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{duration}</p>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {result}
        </span>
      </div>
    </article>
  );
}
