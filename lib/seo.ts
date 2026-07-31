export const siteConfig = {
  name: "Ernesto Vizcaíno",
  title: "Ernesto Vizcaíno — Product Engineer — AI, Fintech & SaaS",
  description:
    "Product engineer building and launching AI, fintech, SaaS and mobile products from zero to production.",
  url: "https://ernestovizcaino.com",
  locale: "en_US",
  twitter: "@erne_vizcaino",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
