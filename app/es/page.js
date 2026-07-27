import { Home } from "../../components/Home";
import { getDictionary } from "../../data/locales";

export const revalidate = 3600;

const dictionary = getDictionary("es");

export const metadata = {
  title: "Ernesto Vizcaíno",
  description: dictionary.metadata.description,
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "es_MX",
    url: "/es",
  },
};

export default function SpanishHomePage() {
  return <Home locale="es" />;
}
