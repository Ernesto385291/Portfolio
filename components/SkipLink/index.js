"use client";

import { usePathname } from "next/navigation";
import { getDictionary } from "@/data/locales";

export function SkipLink() {
  const pathname = usePathname();
  const locale = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
    >
      {getDictionary(locale).ui.skip}
    </a>
  );
}
