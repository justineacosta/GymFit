import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessagesSquare } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { Faq } from "@/components/sections/faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a real coach. We typically reply within 24 hours and offer a free 30-minute strategy call to every serious enquiry.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: MapPin,
    label: "HQ",
    value: siteConfig.contact.address,
  },
  {
    icon: MessagesSquare,
    label: "Live chat",
    value: "Mon–Fri · 9am–6pm",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        title={
          <>
            Talk to a real <span className="text-gradient-brand">coach.</span>
          </>
        }
        description="Tell us a bit about your goal and where you're starting from. A coach will reply within 24 hours — usually faster."
      />

      <section className="container pb-12 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-white/10 bg-card/40 p-7 backdrop-blur-xl">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                Or reach us directly
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Pick whichever channel feels easiest. We answer everywhere.
              </p>
              <ul className="mt-6 space-y-5">
                {channels.map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-1 block font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-medium text-foreground">{c.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 to-transparent p-7 backdrop-blur-xl">
              <p className="font-display text-base font-semibold">Free 30-minute strategy call</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Every serious enquiry gets a free, no-pitch 30-minute call with a coach. We'll
                map your next 12 weeks together.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
