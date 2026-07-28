"use client";

import { Clock01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import posthog from "posthog-js";
import { getDictionary } from "@/data/locales";
import type { Locale } from "@/data/locales";
import { getServerSnapshot, getSnapshot, subscribe } from "@/lib/clock";
import { profile } from "@/data/profile";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: profile.timeZone,
});

export const TopBar = ({ locale = "en" }: { locale?: Locale }) => {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const dictionary = getDictionary(locale);

  useEffect(() => {
    document.documentElement.lang = dictionary.htmlLang;
  }, [dictionary.htmlLang]);

  const selectLanguage = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    document.cookie = `portfolio-locale=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    posthog.capture("language_changed", {
      from_locale: locale,
      to_locale: nextLocale,
    });
  };

  return (
    <div className="column flex items-center justify-between pt-8 pb-12 md:pt-10">
      <span className="meta">EST. {profile.establishedYear}</span>
      <span className="flex items-center gap-3">
        <Link
          href={locale === "es" ? "/" : "/es"}
          hrefLang={locale === "es" ? "en" : "es"}
          aria-label={dictionary.ui.languageLabel}
          onClick={selectLanguage}
          className="meta rounded-md transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25"
        >
          {dictionary.ui.language}
        </Link>
        <span aria-hidden="true" className="h-3 w-px bg-border" />
        <span className="meta flex items-center gap-1.5">
          <HugeiconsIcon icon={Clock01Icon} size={13} strokeWidth={2} />
          {/* tabular-nums (set on body) keeps the width fixed as digits change. */}
          <time suppressHydrationWarning>
            {now === null ? "--:--:--" : formatter.format(now)}
          </time>{" "}
          {profile.timeZoneLabel}
        </span>
      </span>
    </div>
  );
};
