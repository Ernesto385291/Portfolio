// ---------------------------------------------------------------------------
// Everything personal about the site lives here so it can be edited in one
// place. Fields marked TODO are the ones I could not derive from your existing
// content — fill them in (or leave them empty and the section hides itself).
// ---------------------------------------------------------------------------

export const profile = {
  name: "Ernesto Vizcaíno",
  role: "Full-Stack AI / Product Engineer",
  avatar: "/profile.jpg",
  email: "vizcaino.erne@gmail.com",
  verified: true,

  // TODO: your birth year, shown as "EST. ____" in the top bar.
  establishedYear: 2003,

  // TODO: your city / country and IANA timezone, shown in the top bar clock
  // and the footer. Find yours at https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  location: "San Luis Potosí, México",
  timeZone: "America/Mexico_City",
  timeZoneLabel: "CST",

  bio: [
    { text: "I build " },
    { text: "AI products and full-stack software", strong: true },
    {
      text: " from first idea to production. My work spans fintech, SaaS, mobile apps and applied machine learning, with a focus on useful products and measurable outcomes.",
    },
  ],
};

export const socials = [
  { label: "Email", handle: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
  { label: "X.com", handle: "@erne_vizcaino", href: "https://twitter.com/erne_vizcaino", icon: "x" },
  { label: "GitHub", handle: "@Ernesto385291", href: "https://github.com/Ernesto385291/", icon: "github" },
  { label: "LinkedIn", handle: "/in/erne-vizcaino", href: "https://www.linkedin.com/in/erne-vizcaino/", icon: "linkedin" },
];

// simple-icons slugs. Every entry here is a technology named in your own
// project descriptions in data/content.js.
export const stack = [
  "typescript",
  "python",
  "react",
  "nextdotjs",
  "reactnative",
  "nodedotjs",
  "postgresql",
  "amazonwebservices",
  "vercel",
  "posthog",
];

export const experience = [
  {
    from: "Jan 2026",
    to: "Present",
    role: "Founder / Product Engineer",
    company: "Kashi",
    url: "https://www.getkashi.com/",
    logo: "/brands/kashi.png",
    summary:
      "Designed and built an offline-first mobile and web POS for small businesses, owning product strategy, architecture, inventory, sales, customer credit and cross-platform subscriptions.",
  },
  {
    from: "Apr 2026",
    to: "Present",
    role: "Founder / Product Engineer",
    company: "PasaEGEL",
    url: "https://www.pasaegel.com/",
    logo: "/brands/pasaegel.png",
    summary:
      "Built a revenue-generating exam-prep SaaS from scratch. Reached 300+ users, more than 5,000 monthly visitors, more than 130 paid orders and top-five Google rankings without paid ads.",
  },
  {
    from: "Oct 2025",
    to: "Jan 2026",
    role: "AI Engineer / Founding Team",
    company: "Financiamiento Inteligente / Xignus",
    url: "https://financiamientointeligente.com/",
    logo: "/brands/financiamiento-inteligente.svg",
    summary:
      "Built a credit pre-approval model that helped SMBs access more than $4M MXN in its first month, plus AI agents and React/Python financial dashboards.",
  },
  {
    from: "Jan 2024",
    to: "Jul 2025",
    role: "Technical Co-Founder",
    company: "Oliver AI",
    url: "https://www.tryoliver.ai/en",
    logo: "/brands/oliver.ico",
    summary:
      "Led a full-stack fintech platform and production AI workflows for loan origination, risk, compliance and document analysis, backed by AWS and product analytics.",
  },
  {
    from: "Aug 2021",
    to: "Dec 2023",
    role: "Founder / Engineer",
    company: "Oliver POS / ERP",
    logo: "/brands/oliver.ico",
    summary:
      "Shipped a POS mobile app to 10,000+ downloads and 3,000 active users in three months, then expanded it into a full web ERP.",
  },
];
