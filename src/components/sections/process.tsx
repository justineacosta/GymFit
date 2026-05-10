"use client";

import { motion } from "framer-motion";
import { Compass, ClipboardList, Dumbbell, LineChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    icon: Compass,
    title: "Discovery call",
    description:
      "30-minute conversation with a coach to map your goal, current fitness, schedule, equipment, and the wins you want in 12 weeks.",
  },
  {
    icon: ClipboardList,
    title: "Custom plan",
    description:
      "We build training, nutrition, and habits around your real life. You see the full plan in your member app within 48 hours.",
  },
  {
    icon: Dumbbell,
    title: "Train & report",
    description:
      "Log every session. Upload form videos. Your coach reviews them on a 24-hour SLA and tweaks your plan as needed.",
  },
  {
    icon: LineChart,
    title: "Iterate weekly",
    description:
      "Weekly check-ins. Bi-weekly progress photos. Quarterly strategy calls. The plan only gets sharper.",
  },
];

export function Process() {
  return (
    <section className="relative section-padding" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From hello to <span className="text-gradient-brand">first PR in 14 days.</span>
            </>
          }
          description="A four-step onboarding that's built to feel less like signing up for a gym and more like hiring a coach who actually gives a damn."
        />

        <ol className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl"
            >
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 font-display text-xs font-semibold text-primary-foreground">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <s.icon className="size-7 text-primary" />
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
