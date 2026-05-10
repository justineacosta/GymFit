"use client";

import * as React from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});

type Props = { className?: string };

export function NewsletterForm({ className }: Props) {
  const [done, setDone] = React.useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async () => {
    await new Promise((r) => setTimeout(r, 800));
    setDone(true);
    reset();
    toast({
      title: "You're on the list",
      description: "Check your inbox for a welcome note.",
      variant: "success",
    });
    setTimeout(() => setDone(false), 3500);
  });

  return (
    <form
      onSubmit={onSubmit}
      className={cn("relative", className)}
      aria-label="Newsletter signup"
      noValidate
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Input
            type="email"
            placeholder="you@looking-strong.com"
            aria-label="Email address"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
            className="pr-32 sm:pr-4"
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting} size="default" className="sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Subscribing
            </>
          ) : done ? (
            <>
              <CheckCircle2 className="size-4" /> Subscribed
            </>
          ) : (
            <>
              Subscribe <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        No spam. One email a week. Unsubscribe in one click.
      </p>
    </form>
  );
}
