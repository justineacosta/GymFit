import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/page-header";
import { Stats } from "@/components/sections/stats";
import { Values } from "@/components/sections/values";
import { TrainersGrid } from "@/components/sections/trainers-grid";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the coaches, the philosophy, and the obsession with results that drives every program at GymFit.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About GymFit"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        title={
          <>
            We coach humans. <span className="text-gradient-brand">Not algorithms.</span>
          </>
        }
        description="Started in a garage in 2014. Now coaching 875,000+ members in 60+ countries. The thing that hasn't changed: every plan still gets a coach behind it."
      />

      <section className="container pb-12 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="heading-display text-4xl text-gradient sm:text-5xl">
              Our origin story, the short version.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                GymFit started because we were tired of watching smart, motivated people get
                ignored by their gyms and ghosted by their PT apps. The PDFs were generic. The
                accountability was zero. The results were predictable.
              </p>
              <p>
                Today, the team has grown to 40+ coaches across powerlifting, hypertrophy, S&C,
                and women's coaching — but the rule is the same: every member gets a real coach,
                a real plan, and weekly attention. No bots, no copy-paste, no exceptions.
              </p>
              <p>
                We built our own member app, our own accountability framework, and our own
                programming engine. Then we put a real human at the centre of all of it.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80"
                alt="The GymFit coaching team"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Values />
      <TrainersGrid />
      <Cta
        eyebrow="Want to coach with us?"
        title={
          <>
            We're hiring <span className="text-gradient-brand">great coaches.</span>
          </>
        }
        description="If you've been coaching for 5+ years, hold a recognised qualification, and care obsessively about your members — we'd like to talk."
        primaryCta={{ label: "Apply now", href: "/contact?intent=coach" }}
        secondaryCta={{ label: "Read open roles", href: "/contact?intent=coach" }}
      />
    </>
  );
}
