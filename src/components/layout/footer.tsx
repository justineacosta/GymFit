import Link from "next/link";
import { Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { NewsletterForm } from "@/components/sections/newsletter-form";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Programs",
    links: [
      { label: "Muscle Builder", href: "/programs#muscle-builder" },
      { label: "Fat Loss", href: "/programs#fat-loss" },
      { label: "Strength & Conditioning", href: "/programs#strength-conditioning" },
      { label: "1:1 Online Coaching", href: "/programs#online-coaching" },
      { label: "Nutrition Coaching", href: "/programs#nutrition-coaching" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Trainers", href: "/trainers" },
      { label: "Pricing", href: "/pricing" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Free Trial", href: "/contact?intent=trial" },
      { label: "Coach Application", href: "/contact?intent=coach" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="size-4 text-primary" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="size-4 text-primary" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-foreground">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 text-primary" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-base font-semibold">Get the weekly drop</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Programming notes, nutrition deep-dives, no fluff. Once a week.
              </p>
              <NewsletterForm className="mt-4" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <SocialLink href={siteConfig.social.instagram} label="Instagram">
              <Instagram className="size-4" />
            </SocialLink>
            <SocialLink href={siteConfig.social.youtube} label="YouTube">
              <Youtube className="size-4" />
            </SocialLink>
            <SocialLink href={siteConfig.social.twitter} label="Twitter">
              <Twitter className="size-4" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
    >
      {children}
    </a>
  );
}
