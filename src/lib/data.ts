import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Apple,
  BarChart3,
  Dumbbell,
  Flame,
  HeartPulse,
  Medal,
  Target,
  Timer,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export type Program = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All levels";
  icon: LucideIcon;
  highlights: string[];
  image: string;
};

export const programs: Program[] = [
  {
    slug: "muscle-builder",
    title: "Muscle Builder",
    tagline: "Hypertrophy-focused, progressive overload, real gains.",
    description:
      "A 12-week strength and hypertrophy program designed to add lean muscle, build foundational strength, and dial in your technique under load.",
    duration: "12 weeks",
    level: "Intermediate",
    icon: Dumbbell,
    highlights: [
      "4–5 sessions per week",
      "Periodised progressive overload",
      "Form-check video reviews",
      "Macro-aligned nutrition guide",
    ],
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "fat-loss",
    title: "Fat Loss System",
    tagline: "Sustainable cuts. No starvation. No fluff.",
    description:
      "Drop body fat without losing strength. A blend of resistance training, smart conditioning, and a flexible nutrition framework you can actually live with.",
    duration: "8 weeks",
    level: "All levels",
    icon: Flame,
    highlights: [
      "Calorie + macro coaching",
      "Metabolic conditioning blocks",
      "Step + sleep accountability",
      "Weekly check-ins with your coach",
    ],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "strength-conditioning",
    title: "Strength & Conditioning",
    tagline: "Get stronger, move better, perform harder.",
    description:
      "Hybrid powerlifting and conditioning template for athletes who want to be strong AND able to actually use it on the field, mat, or trail.",
    duration: "16 weeks",
    level: "Advanced",
    icon: Activity,
    highlights: [
      "Squat / bench / deadlift cycles",
      "Sport-specific energy systems",
      "Mobility + warm-up routines",
      "Recovery & deload protocols",
    ],
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "online-coaching",
    title: "1:1 Online Coaching",
    tagline: "Your coach, your plan, your pace.",
    description:
      "Fully bespoke training and nutrition coaching, delivered via app. Custom programming, weekly video calls, and unlimited messaging support.",
    duration: "Ongoing",
    level: "All levels",
    icon: Target,
    highlights: [
      "Custom block periodisation",
      "Weekly 1:1 video coaching",
      "Form video feedback < 24h",
      "App-based habit tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "nutrition-coaching",
    title: "Nutrition Coaching",
    tagline: "Eat for the body you want — without obsessing.",
    description:
      "Stop guessing. We map your calories, macros, meal timing, and habits to your goal and lifestyle, then iterate every two weeks.",
    duration: "12 weeks",
    level: "All levels",
    icon: Apple,
    highlights: [
      "Personalised macro targets",
      "Eating-out / travel playbook",
      "Habit-based nutrition coaching",
      "Bi-weekly metric reviews",
    ],
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "mobility-recovery",
    title: "Mobility & Recovery",
    tagline: "Move better. Recover faster. Stay in the game.",
    description:
      "Targeted mobility, soft-tissue work, and recovery protocols to undo desk-job damage and keep your joints feeling 25 forever.",
    duration: "6 weeks",
    level: "Beginner",
    icon: HeartPulse,
    highlights: [
      "Hip / shoulder / spine focus",
      "10-minute daily routines",
      "Sleep & stress protocols",
      "Pre-/post-workout primers",
    ],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
  },
];

export type Trainer = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  experience: string;
  image: string;
  socials: { instagram?: string; twitter?: string };
};

export const trainers: Trainer[] = [
  {
    slug: "nick-mitchell",
    name: "Nick Mitchell",
    role: "Head Coach · Hypertrophy Specialist",
    bio: "Former competitive bodybuilder turned coach. Nick has spent 14 years helping clients add lean muscle and break plateaus with intelligent programming.",
    specialties: ["Hypertrophy", "Strength", "Contest prep"],
    experience: "14+ years",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    socials: { instagram: "https://instagram.com" },
  },
  {
    slug: "james-smith",
    name: "James Smith",
    role: "Fat Loss & Nutrition Specialist",
    bio: "James blends a no-nonsense coaching style with deep nutrition science. Has guided 600+ clients through fat-loss phases that actually stick.",
    specialties: ["Fat loss", "Nutrition", "Habit coaching"],
    experience: "10+ years",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    socials: { instagram: "https://instagram.com" },
  },
  {
    slug: "shaun-stafford",
    name: "Shaun Stafford",
    role: "Strength & Conditioning Coach",
    bio: "Two-time WBFF Pro World Champion. Shaun brings elite-level S&C principles to everyday athletes who want to perform AND look the part.",
    specialties: ["Powerlifting", "Conditioning", "Athletes"],
    experience: "12+ years",
    image:
      "https://images.unsplash.com/photo-1532009324734-20a7a5813719?auto=format&fit=crop&w=1200&q=80",
    socials: { instagram: "https://instagram.com" },
  },
  {
    slug: "sarah-bell",
    name: "Sarah Bell",
    role: "Women's Coaching Specialist",
    bio: "Sarah is obsessed with helping women lift heavy, eat enough, and finally feel at home in the weights room. Pre/postnatal certified.",
    specialties: ["Women's strength", "Pre/postnatal", "Mindset"],
    experience: "8+ years",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=80",
    socials: { instagram: "https://instagram.com" },
  },
];

export type Plan = {
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Discover",
    description: "For people starting their journey with structured guidance.",
    price: { monthly: 99, annual: 79 },
    cta: "Start Discover",
    features: [
      "4 sessions per month",
      "2 group classes monthly",
      "Habit + nutrition guide",
      "Member app access",
      "Email coach support",
    ],
  },
  {
    name: "Enterprise",
    description: "Our most popular plan — programmed for serious progress.",
    price: { monthly: 299, annual: 249 },
    cta: "Choose Enterprise",
    highlight: true,
    features: [
      "8 sessions per month",
      "6 group classes monthly",
      "5 extra fitness training",
      "Form video reviews",
      "1:1 monthly coach call",
      "Custom macro plan",
    ],
  },
  {
    name: "Professional",
    description: "Fully bespoke 1:1 coaching for athletes and pros.",
    price: { monthly: 199, annual: 169 },
    cta: "Go Professional",
    features: [
      "6 sessions per month",
      "4 group classes monthly",
      "Unlimited messaging",
      "Custom programming",
      "Priority response < 24h",
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  result: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jacob Reyes",
    role: "Software Engineer · 36",
    quote:
      "I went from never having squatted to pulling 180kg in a year. The programming was smart and the coach actually listened.",
    rating: 5,
    result: "−12 kg fat / +8 kg muscle",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Emily Carter",
    role: "Founder · 31",
    quote:
      "The first plan that actually fit my life. I travel constantly and they programmed around it without missing a beat.",
    rating: 5,
    result: "−8 kg in 14 weeks",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marcus Lee",
    role: "Doctor · 42",
    quote:
      "Tried every app, every gym, every fad. This is the only thing that stuck. The accountability is the secret weapon.",
    rating: 5,
    result: "Bench press 2× bodyweight",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Designer · 28",
    quote:
      "Finally a coach who didn't just throw me a generic PDF. Every block was tweaked based on what I actually reported.",
    rating: 5,
    result: "First strict pull-up at 26",
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Daniel Kim",
    role: "Founder · 39",
    quote:
      "Six months in, I'm leaner, stronger, and somehow sleeping better. I budget the coaching like rent now.",
    rating: 5,
    result: "−14 kg / down 4 belt notches",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
  },
];

export type StatItem = {
  value: number;
  suffix?: string;
  label: string;
  icon: LucideIcon;
};

export const stats: StatItem[] = [
  { value: 875, suffix: "k+", label: "Clients coached", icon: Users },
  { value: 14, suffix: " yrs", label: "Average coach experience", icon: Trophy },
  { value: 96, suffix: "%", label: "Adherence after 12 weeks", icon: BarChart3 },
  { value: 240, suffix: "+", label: "Programs delivered weekly", icon: Zap },
];

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "Do I need a gym, or can I train from home?",
    a: "Both. When you onboard, you'll list the equipment you have access to and your coach will design around it — full gym, garage, hotel, or just dumbbells.",
  },
  {
    q: "What if I'm a complete beginner?",
    a: "That's actually our favourite starting point. Every program scales to your level, every lift gets a form-check video, and you'll have a coach checking in weekly.",
  },
  {
    q: "How is this different from a generic PDF or app?",
    a: "Programming is rebuilt every block based on your actual data — sleep, soreness, performance, lifestyle. You're not following a stranger's plan; you're following yours.",
  },
  {
    q: "Can I switch programs or pause?",
    a: "Yes. You can pause at any time, and your coach will help you switch programs whenever your goals change — no contracts, no penalty fees.",
  },
  {
    q: "What's the typical timeline for results?",
    a: "Most clients see meaningful changes in body composition within 6–8 weeks, and major changes by 12–16 weeks if they hit training and nutrition consistently.",
  },
  {
    q: "Do you offer nutrition coaching too?",
    a: "Yes — every plan includes habit-based nutrition guidance. The Enterprise and 1:1 plans get full custom macro plans with bi-weekly reviews.",
  },
];

export type Transformation = {
  name: string;
  duration: string;
  result: string;
  before: string;
  after: string;
};

export const transformations: Transformation[] = [
  {
    name: "Marcus · 38",
    duration: "16 weeks",
    result: "−18 kg, +1.5× bench",
    before:
      "https://images.unsplash.com/photo-1583500178690-f7fd39a44e9c?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Anika · 29",
    duration: "12 weeks",
    result: "First strict pull-up",
    before:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Jordan · 34",
    duration: "20 weeks",
    result: "Squat 2× bodyweight",
    before:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80",
  },
];

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const values: Value[] = [
  {
    title: "Coach-led, never automated",
    description:
      "A real human reviews your training, your lifts, your data — every single week. No bots, no auto-progression, no copy-paste plans.",
    icon: Users,
  },
  {
    title: "Science-backed programming",
    description:
      "We program the way the research actually works — periodisation, RPE, autoregulation. The boring stuff that quietly compounds.",
    icon: Activity,
  },
  {
    title: "Results-obsessed accountability",
    description:
      "Weekly check-ins, photos, lifts, sleep, steps. You'll see your trajectory clearly and your coach will catch slips before they become slides.",
    icon: Medal,
  },
  {
    title: "Built for real life",
    description:
      "Travel weeks, sick weeks, kids, deadlines, weddings. Your plan flexes around the way you actually live — not the other way around.",
    icon: Timer,
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1554344728-77cf90d922a2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
];
