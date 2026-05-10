import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ProgramsGrid } from "@/components/sections/programs-grid";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Programs for fat loss, muscle building, strength, conditioning, nutrition, and mobility — every one coach-led and built around your real life.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs" },
        ]}
        title={
          <>
            Pick a program. <span className="text-gradient-brand">Or build your own.</span>
          </>
        }
        description="Six structured programs covering every major goal. Or skip the menu and let a coach design something fully bespoke."
      />
      <ProgramsGrid showHeading={false} />
      <Process />
      <Faq />
      <Cta />
    </>
  );
}
