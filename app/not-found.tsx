import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="column flex min-h-[70vh] flex-col justify-center">
      <p className="label">404</p>
      <h1 className="mt-4 text-base font-medium text-foreground">
        Page not found
      </h1>
      <p className="mt-1 text-base text-muted-foreground">
        The page may have moved or is no longer available.
      </p>
      <Link
        href="/"
        className="mt-7 -mx-3 flex w-fit items-center gap-2 rounded-xl px-3 py-2 text-base text-foreground transition-colors duration-200 hover:bg-surface"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} size={16} strokeWidth={2} />
        Back to the portfolio
      </Link>
    </section>
  );
}
