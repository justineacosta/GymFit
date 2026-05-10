import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      aria-label="GymFit home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-brand-700 shadow-lg shadow-primary/30 transition-transform group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="size-5 text-primary-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 7v10" />
          <path d="M18 7v10" />
          <path d="M3 10v4" />
          <path d="M21 10v4" />
          <path d="M6 12h12" />
        </svg>
      </span>
      <span className="font-display text-xl font-semibold tracking-tight">
        Gym<span className="text-primary">Fit</span>
      </span>
    </Link>
  );
}
