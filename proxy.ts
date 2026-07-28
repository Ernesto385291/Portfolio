import { NextResponse, type NextRequest } from "next/server";

const LOCALE_COOKIE = "portfolio-locale";
const ONE_YEAR = 60 * 60 * 24 * 365;

function preferredLocale(acceptLanguage = "") {
  const languages = acceptLanguage
    .split(",")
    .map((entry) => {
      const [tag, ...parameters] = entry.trim().toLowerCase().split(";");
      const qualityParameter = parameters.find((value) =>
        value.trim().startsWith("q="),
      );
      const quality = qualityParameter
        ? Number.parseFloat(qualityParameter.split("=")[1])
        : 1;

      return { tag, quality: Number.isNaN(quality) ? 0 : quality };
    })
    .filter(({ tag, quality }) => tag && quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of languages) {
    if (tag === "es" || tag.startsWith("es-")) return "es";
    if (tag === "en" || tag.startsWith("en-")) return "en";
  }

  return "en";
}

export function proxy(request: NextRequest) {
  const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (savedLocale === "en" || savedLocale === "es") {
    return NextResponse.next();
  }

  const locale = preferredLocale(request.headers.get("accept-language") ?? "");
  if (locale !== "es") {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.pathname = "/es";

  const response = NextResponse.redirect(destination);
  response.cookies.set(LOCALE_COOKIE, "es", {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/"],
};
