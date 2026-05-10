import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Gallery } from "@/components/sections/gallery";
import { Transformation } from "@/components/sections/transformation";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A peek inside the gym, the sessions, and the transformations that quietly happen on the back of consistent coaching.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
        title={
          <>
            Inside the <span className="text-gradient-brand">work.</span>
          </>
        }
        description="The sessions, the spaces, the people. No filters, no actors — just the day-to-day reality of what we do."
      />
      <Gallery showHeading={false} />
      <Transformation />
      <Cta />
    </>
  );
}
