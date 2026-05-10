"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { plans } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";

type Props = { showHeading?: boolean };

export function Pricing({ showHeading = true }: Props) {
  const [billing, setBilling] = React.useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" className="relative section-padding" aria-labelledby="pricing-heading">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[400px] bg-radial-fade opacity-60 blur-3xl" />

      <div className="container">
        {showHeading && (
          <SectionHeading
            eyebrow="Pricing"
            title={
              <>
                Choose the plan that <span className="text-gradient-brand">fits your goal.</span>
              </>
            }
            description="Cancel any time. Pause for travel. Upgrade when you're ready. We hate friction as much as you do."
          />
        )}

        <div className="mt-10 flex justify-center">
          <Tabs value={billing} onValueChange={(v) => setBilling(v as "monthly" | "annual")}>
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">
                Annual{" "}
                <span className="ml-2 rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  −20%
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = billing === "monthly" ? plan.price.monthly : plan.price.annual;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={cn(
                  "relative flex flex-col rounded-3xl border p-7 backdrop-blur-xl",
                  plan.highlight
                    ? "border-primary/40 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent shadow-2xl shadow-primary/20 lg:scale-[1.04]"
                    : "border-white/10 bg-card/60",
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/40">
                      <Sparkles className="size-3" /> Most popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className="font-display text-5xl font-semibold tracking-tight">
                    {formatPrice(price)}
                  </span>
                  <span className="pb-2 text-sm text-muted-foreground">
                    /{billing === "monthly" ? "mo" : "mo · billed yearly"}
                  </span>
                </div>

                <ul className="mt-7 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          plan.highlight ? "bg-primary text-primary-foreground" : "bg-white/10 text-primary",
                        )}
                      >
                        <Check className="size-3" />
                      </span>
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Button
                    asChild
                    variant={plan.highlight ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    <Link href="/contact?intent=join">{plan.cta}</Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          All plans include free 7-day trial · No setup fee · Cancel anytime
        </p>
      </div>
    </section>
  );
}
