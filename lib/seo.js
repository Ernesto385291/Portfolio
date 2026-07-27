export const siteConfig = {
  name: "Ernesto Vizcaíno",
  title: "Ernesto Vizcaíno — Full-Stack AI & Product Engineer",
  description:
    "Full-stack AI and product engineer building fintech, SaaS, mobile, and applied machine-learning products from idea to production.",
  url: "https://ernestovizcaino.com",
  locale: "en_US",
  twitter: "@erne_vizcaino",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function jsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
