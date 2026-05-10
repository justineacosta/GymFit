import { Marquee } from "@/components/ui/marquee";

const logos = [
  "Lattice",
  "Pandora",
  "VideoAsk",
  "GymShark",
  "Whoop",
  "Eight Sleep",
  "Vivobarefoot",
  "Athletic Greens",
  "Form Nutrition",
  "Mirafit",
];

export function LogoCloud() {
  return (
    <section className="relative py-12 sm:py-16" aria-label="Featured in">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Featured in & trusted by
        </p>
        <div className="mt-8 scroll-mask">
          <Marquee speed={40}>
            {logos.map((l) => (
              <span
                key={l}
                className="font-display text-2xl font-semibold tracking-tight text-foreground/40 transition-colors hover:text-foreground/80 sm:text-3xl"
              >
                {l}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
