"use client";

import {
  Briefcase01Icon,
  CubeIcon,
  Layers01Icon,
  Mail01Icon,
  Moon02Icon,
  PenTool02Icon,
  Sun03Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { id: "about", label: "About", icon: UserIcon },
  { id: "experience", label: "Experience", icon: Briefcase01Icon },
  { id: "projects", label: "Projects", icon: CubeIcon },
  { id: "stack", label: "Stack", icon: Layers01Icon },
  { id: "writing", label: "Writing", icon: PenTool02Icon },
  { id: "contact", label: "Contact", icon: Mail01Icon },
];

const buttonClass =
  "relative grid size-10 place-items-center rounded-xl transition-[color,background-color,scale] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-muted active:scale-[0.96] focus-visible:ring-[3px] focus-visible:ring-ring/25 focus-visible:outline-none";

const iconClass =
  "absolute inset-0 m-auto transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]";

export const Dock = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      // Bias the band toward the upper-middle of the viewport so the active
      // item matches what the reader is actually looking at.
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
    >
      {/* Outer radius 18px = inner radius 14px + 4px padding. */}
      <ul className="flex items-center gap-0.5 rounded-2xl border border-border bg-background/80 p-1 shadow-card backdrop-blur-xl">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-label={item.label}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                buttonClass,
                active === item.id
                  ? "bg-muted text-foreground"
                  : "text-faint hover:text-foreground",
              )}
            >
              <HugeiconsIcon icon={item.icon} size={18} strokeWidth={2} />
            </a>
          </li>
        ))}

        <li aria-hidden="true" className="mx-1 h-5 w-px bg-border" />

        <li>
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className={cn(buttonClass, "text-faint hover:text-foreground")}
          >
            <span className="relative size-[18px]">
              <HugeiconsIcon
                icon={Sun03Icon}
                size={18}
                strokeWidth={2}
                className={cn(iconClass, "dark:scale-25 dark:opacity-0 dark:blur-[4px]")}
              />
              <HugeiconsIcon
                icon={Moon02Icon}
                size={18}
                strokeWidth={2}
                className={cn(
                  iconClass,
                  "scale-25 opacity-0 blur-[4px] dark:scale-100 dark:opacity-100 dark:blur-[0px]",
                )}
              />
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
