"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  highlightColor?: string;
};

export function SpotlightCard({ className, highlightColor = "rgba(249,115,22,0.18)", ...props }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl transition-colors hover:border-white/20",
        className,
      )}
      style={
        {
          "--mx": "50%",
          "--my": "50%",
          backgroundImage: `radial-gradient(400px circle at var(--mx) var(--my), ${highlightColor}, transparent 60%)`,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}
