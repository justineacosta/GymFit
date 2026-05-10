import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-radial-fade blur-3xl"
      />
      <div className="container py-20 text-center">
        <p className="font-display text-[10rem] leading-none text-gradient-brand sm:text-[14rem]">
          404
        </p>
        <h1 className="mt-2 heading-display text-4xl text-gradient sm:text-5xl">
          Lost a rep somewhere.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
          The page you're looking for doesn't exist — but your next session does. Let's get you
          back to it.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/programs">Browse programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
