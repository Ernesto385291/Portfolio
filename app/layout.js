import { Figtree, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Dock } from "../components/Dock";
import { Footer } from "../components/Footer";
import { MotionProvider } from "../components/MotionProvider";
import { SkipLink } from "../components/SkipLink";
import { ThemeProvider } from "../components/ThemeProvider";
import "../styles/globals.css";

const siteUrl = "https://ernestovizcaino.vercel.app";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ernesto Vizcaíno",
    template: "Ernesto Vizcaíno | %s",
  },
  description:
    "Full-stack AI and product engineer building fintech, SaaS, mobile, and applied machine-learning products.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/",
    },
  },
  authors: [{ name: "Ernesto Vizcaíno" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Ernesto Vizcaíno",
    images: ["https://i.imgur.com/Hi2WGWX.png"],
  },
  twitter: {
    card: "summary",
    creator: "@erne_vizcaino",
    images: ["https://i.imgur.com/Hi2WGWX.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#242424" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <MotionProvider>
            <SkipLink />
            <main id="main">{children}</main>
            <Footer />
            <Dock />
          </MotionProvider>
        </ThemeProvider>
        <Script id="matomo" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
            _paq.push(["setCookieDomain", "*.ernestovizcaino.vercel.app"]);
            _paq.push(["setDomains", ["*.ernestovizcaino.vercel.app"]]);
            _paq.push(["trackPageView"]);
            _paq.push(["enableLinkTracking"]);
            (function() {
              var u = "https://analytics.traverapp.com/";
              _paq.push(["setTrackerUrl", u + "matomo.php"]);
              _paq.push(["setSiteId", "4"]);
              var d = document;
              var g = d.createElement("script");
              var s = d.getElementsByTagName("script")[0];
              g.async = true;
              g.src = u + "matomo.js";
              s.parentNode.insertBefore(g, s);
            })();
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
