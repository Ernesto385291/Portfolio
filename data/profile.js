// ---------------------------------------------------------------------------
// Everything personal about the site lives here so it can be edited in one
// place. Fields marked TODO are the ones I could not derive from your existing
// content — fill them in (or leave them empty and the section hides itself).
// ---------------------------------------------------------------------------

export const profile = {
  name: "Ernesto Vizcaíno",
  role: "Frontend & Mobile Developer",
  avatar: "/me.jpg",
  email: "vizcaino.erne@gmail.com",

  // TODO: your birth year, shown as "EST. ____" in the top bar.
  establishedYear: 1997,

  // TODO: your city / country and IANA timezone, shown in the top bar clock
  // and the footer. Find yours at https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  location: "Mexico",
  timeZone: "America/Mexico_City",
  timeZoneLabel: "CST",

  bio: [
    { text: "Hey, I'm Ernesto — a frontend and mobile developer based in " },
    { text: "Mexico", strong: true },
    {
      text: ", where I build interfaces with React and React Native. I'm in love with JavaScript and Python, and I never stop learning.",
    },
  ],
};

export const socials = [
  { label: "Email", handle: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
  { label: "X.com", handle: "@erne_vizcaino", href: "https://twitter.com/erne_vizcaino", icon: "x" },
  { label: "GitHub", handle: "@Ernesto385291", href: "https://github.com/Ernesto385291/", icon: "github" },
  { label: "LinkedIn", handle: "/in/erne-vizcaino", href: "http://linkedin.com/in/erne-vizcaino/", icon: "linkedin" },
  { label: "Instagram", handle: "@erne_vizcaino", href: "https://www.instagram.com/erne_vizcaino/", icon: "instagram" },
  { label: "Platzi", handle: "@Erne_Vizcaino", href: "https://platzi.com/@Erne_Vizcaino/", icon: "platzi" },
  { label: "Polywork", handle: "@erne_vizcaino", href: "https://www.polywork.com/erne_vizcaino", icon: "timeline" },
];

// simple-icons slugs. Every entry here is a technology named in your own
// project descriptions in data/content.js.
export const stack = [
  "react",
  "nextdotjs",
  "javascript",
  "nodedotjs",
  "python",
  "tensorflow",
  "strapi",
  "mysql",
  "github",
];

// ---------------------------------------------------------------------------
// !! REVIEW BEFORE DEPLOYING !!
//
// I could not derive your employment history from anything in the repo, so the
// companies and summaries below are drawn from your own projects in
// data/content.js — but the ROLE TITLES and DATE RANGES are placeholders.
// Correct them (or delete rows) before this goes live.
//
// `icon` is an optional simple-icons slug used for the little logo chip; omit
// it and the company initial is used instead.
// ---------------------------------------------------------------------------
export const experience = [
  {
    from: "2021", // TODO: verify
    to: "Now", // TODO: verify
    role: "Frontend & Mobile Developer", // TODO: verify
    company: "Traver App",
    url: "https://traverapp.com/",
    icon: "react",
    summary:
      "Built a mobile app that connects people across a city — photos, news, events and local food in one place. Worked across React Native, Node.js, AWS, GCP and MySQL.",
  },
  {
    from: "2021", // TODO: verify
    to: "2022", // TODO: verify
    role: "Frontend Developer", // TODO: verify
    company: 'Miel "El Meno"',
    url: "https://el-meno.vercel.app/",
    icon: "nextdotjs",
    summary:
      "Designed and shipped the marketing site for a local honey producer with Next.js, including content modelling and deployment.",
  },
  {
    from: "2020", // TODO: verify
    to: "Now", // TODO: verify
    role: "Open Source & Freelance", // TODO: verify
    company: "Independent",
    icon: "strapi",
    summary:
      "Published an AWS S3 upload provider for Strapi with Rekognition moderation, plus browser ML experiments using TensorFlow.js and Face-api.js.",
  },
];
