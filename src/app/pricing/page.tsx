import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for personal coaching, online programming, and 1:1 mentorship. Pause any time, cancel any time.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
        title={
          <>
            Pay for the coaching. <span className="text-gradient-brand">Not the marketing.</span>
          </>
        }
        description="Three plans. No setup fees. No 12-month contracts. Pause for travel, switch when your goals change, cancel any time."
      />
      <Pricing showHeading={false} />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
