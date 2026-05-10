import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { TrainersGrid } from "@/components/sections/trainers-grid";
import { Stats } from "@/components/sections/stats";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Trainers",
  description:
    "Meet the GymFit coaching team — competitors, scientists, and quietly obsessive coaches who'll quietly transform your training.",
  alternates: { canonical: "/trainers" },
};

export default function TrainersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Coaches"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Trainers" },
        ]}
        title={
          <>
            The team behind <span className="text-gradient-brand">your next PR.</span>
          </>
        }
        description="Every coach has 8+ years of experience, a recognised qualification, and the kind of receipts you can verify in 30 seconds of Googling."
      />
      <TrainersGrid showHeading={false} />
      <Stats />
      <Cta
        eyebrow="Find your match"
        title={
          <>
            Not sure which coach <span className="text-gradient-brand">fits you?</span>
          </>
        }
        description="Tell us your goal and a quick bit about you. We'll match you with the coach most likely to get you there."
        primaryCta={{ label: "Match me with a coach", href: "/contact?intent=match" }}
        secondaryCta={{ label: "Browse programs", href: "/programs" }}
      />
    </>
  );
}
