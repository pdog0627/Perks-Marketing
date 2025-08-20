type IconName = "bell" | "cake" | "truck" | "heart" | "cart" | "chart";

export const content = {
  // Brand
  appName: "TeamJoy",
  tagline: "Employee engagement & perks that actually matter.",
  subtagline:
    "Free, branded for your company, with smart HR workflows and curated discounts.",

  // Navigation
  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "For HR", href: "#for-hr" },
      { label: "For Employees", href: "#for-employees" },
      { label: "Vendors", href: "#vendors" },
      { label: "Contact", href: "#contact" },
    ],
  },

  // Hero
  hero: {
    headline: "Employee engagement & perks that actually matter.",
    subheadline:
      "Free, branded for your company, with smart HR workflows and curated discounts.",
    primaryCta: "Get started free",
    secondaryCta: "See how it works",
  },

  // Value Props
  valueProps: [
    {
      icon: "bell" as IconName,
      title: "Smart Reminders",
      description:
        "Never miss birthdays, anniversaries, or team events with automated workflows.",
    },
    {
      icon: "heart" as IconName,
      title: "Free for Companies",
      description:
        "Vendor-funded platform means zero cost for your organization.",
    },
    {
      icon: "truck" as IconName,
      title: "Easy Access",
      description:
        "Works via app, Slack, email links. No forced logins or app downloads.",
    },
    {
      icon: "chart" as IconName,
      title: "Time-Saving Templates",
      description:
        "Pre-built flows for common HR tasks and employee engagement.",
    },
  ],

  // How It Works
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        icon: "chart" as IconName,
        title: "HR creates & shares",
        description:
          "Set up automated workflows for birthdays, events, and perks in minutes.",
      },
      {
        icon: "heart" as IconName,
        title: "Employees engage",
        description:
          "Teams participate via simple links - no downloads or complex signups required.",
      },
      {
        icon: "truck" as IconName,
        title: "Vendors deliver",
        description:
          "Curated partners fulfill orders and experiences seamlessly.",
      },
    ],
  },

  // Use Cases
  useCases: [
    {
      icon: "cake" as IconName,
      title: "Birthday cakes",
      description: "Automated reminders and local bakery partnerships",
    },
    {
      icon: "truck" as IconName,
      title: "Food truck vote",
      description: "Team polls for lunch preferences and vendor coordination",
    },
    {
      icon: "cart" as IconName,
      title: "Bulk swag",
      description: "Volume discounts on branded merchandise and gifts",
    },
    {
      icon: "heart" as IconName,
      title: "Remote wellness",
      description: "Fitness apps, mental health resources, home office gear",
    },
    {
      icon: "truck" as IconName,
      title: "Catering",
      description: "Event planning with preferred vendor networks",
    },
    {
      icon: "bell" as IconName,
      title: "Team milestones",
      description:
        "Celebrate work anniversaries, project completions, and achievements",
    },
  ],

  // For HR
  forHR: {
    title: "Built for HR Teams",
    subtitle: "Automate the busy work, amplify the impact",
    features: [
      "Automated birthday and anniversary reminders",
      "Bulk discounts on swag, supplies, and catering",
      "One-click communication to entire teams",
      "Budget tracking and vendor management",
      "Integration with existing HR systems",
    ],
  },

  // For Employees
  forEmployees: {
    title: "Loved by Employees",
    subtitle: "Relevant perks, zero hassle",
    features: [
      "Perks relevant to your location and interests",
      "No spam or irrelevant offers cluttering your inbox",
      "Login optional - simple links that just work",
      "Mobile-optimized for on-the-go access",
      "Privacy-first approach to personal data",
    ],
  },

  // Vendors
  vendors: {
    title: "Reach engaged teams where they already are",
    subtitle: "Connect with employees through their trusted workplace platform",
    features: [
      "Targeted reach to engaged employee audiences",
      "Sponsored placement in relevant moments",
      "Performance-based pricing models",
    ],
    cta: "Become a vendor",
  },

  // Social Proof
  socialProof: {
    companies: [
      "Early Access",
      "Beta Partners",
      "Coming Soon",
      "Join the Waitlist",
      "Be First",
    ],
    testimonials: [
      {
        quote:
          "We've been looking for exactly this solution. The approach of vendor-funded perks with zero hassle for employees is brilliant.",
        name: "Sarah Chen",
        role: "Head of People, Early Beta Partner",
      },
      {
        quote:
          "Finally, someone gets it. HR platforms shouldn't require IT approval or force employees to download yet another app.",
        name: "Marcus Johnson",
        role: "HR Director, Design Partner",
      },
    ],
  },

  // Final CTA
  finalCta: {
    title: "Ready to boost engagement for free?",
    subtitle:
      "Be among the first companies to create better workplace experiences",
    primaryCta: "Get started free",
    secondaryCta: "Talk to us",
  },

  // Footer
  footer: {
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "/careers" },
    ],
    disclosure:
      "Some offers may be provided via affiliate partnerships. We may earn a commission when you make a purchase through our platform.",
  },

  // SEO
  seo: {
    title: "TeamJoy & HR Comms – Free, Branded, Useful",
    description:
      "A free, company-branded HR comms + perks platform that automates birthdays, lunches, and events while unlocking curated discounts and bulk vendor savings. Easy links via Slack/email, optional logins, and vendor-funded pricing.",
  },
};
