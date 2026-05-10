"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

const goalOptions = [
  "Fat loss",
  "Build muscle",
  "Get stronger",
  "Improve performance",
  "Habits & nutrition",
  "Just exploring",
] as const;

const schema = z.object({
  name: z.string().min(2, "Tell us your name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().optional(),
  goal: z.enum(goalOptions, { error: "Pick a goal" }),
  message: z.string().min(10, "A few more details would help — at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm({ className }: { className?: string }) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((r) => setTimeout(r, 900));
    toast({
      title: "Message sent",
      description: `Thanks ${data.name.split(" ")[0]} — a coach will reply within 24 hours.`,
      variant: "success",
    });
    reset();
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Contact form"
      className={cn(
        "rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl sm:p-8",
        className,
      )}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message} htmlFor="name">
          <Input id="name" placeholder="Alex Carter" {...register("name")} aria-invalid={Boolean(errors.name)} />
        </Field>
        <Field label="Email" error={errors.email?.message} htmlFor="email">
          <Input id="email" type="email" placeholder="alex@example.com" {...register("email")} aria-invalid={Boolean(errors.email)} />
        </Field>
        <Field label="Phone (optional)" error={errors.phone?.message} htmlFor="phone">
          <Input id="phone" type="tel" placeholder="+1 555 555 1234" {...register("phone")} />
        </Field>
        <Field label="Primary goal" error={errors.goal?.message} htmlFor="goal">
          <select
            id="goal"
            {...register("goal")}
            aria-invalid={Boolean(errors.goal)}
            className="flex h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-foreground transition-colors focus-visible:border-primary/60 focus-visible:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            defaultValue=""
          >
            <option value="" disabled>
              Select a goal
            </option>
            {goalOptions.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Tell us about yourself" error={errors.message?.message} htmlFor="message">
          <Textarea
            id="message"
            placeholder="What you've tried, what you're aiming for, and what's gotten in the way."
            rows={5}
            {...register("message")}
            aria-invalid={Boolean(errors.message)}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          By submitting you agree to our terms. We typically reply within 24 hours.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="size-5 animate-spin" /> Sending
            </>
          ) : (
            <>
              Send message <Send className="size-5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  htmlFor,
  label,
  error,
  children,
}: {
  htmlFor: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
