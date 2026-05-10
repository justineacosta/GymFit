export const siteConfig = {
  name: "GymFit",
  tagline: "Personal Coaching Built For Real Results",
  description:
    "Personal gym coaching, custom training programs, nutrition, and accountability — built around the way you actually live. Coach-led, science-backed, results obsessed.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gymfit.example.com",
  ogImage: "/og.jpg",
  contact: {
    email: "hello@gymfit.example.com",
    phone: "+1 (509) 407-5064",
    address: "2707 New York City, Dhaka 7555",
  },
  social: {
    instagram: "https://instagram.com/gymfit",
    youtube: "https://youtube.com/@gymfit",
    twitter: "https://twitter.com/gymfit",
    tiktok: "https://tiktok.com/@gymfit",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Trainers", href: "/trainers" },
    { label: "Pricing", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
