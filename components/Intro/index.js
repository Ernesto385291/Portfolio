"use client";

import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export const Intro = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure origin, denied permission). Fall
      // back to opening the mail client so the action still does something.
      window.location.href = `mailto:${profile.email}`;
    }
  }, []);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "c" && event.key !== "C") return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      // Never hijack the key while the user is typing.
      const el = event.target;
      if (
        el instanceof HTMLElement &&
        (el.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName))
      ) {
        return;
      }
      event.preventDefault();
      copyEmail();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [copyEmail]);

  return (
    <section id="about" className="column scroll-mt-12">
      <div className="rise relative w-fit" style={{ "--rise-delay": 0 }}>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={56}
          height={56}
          priority
          className="image-outline size-14 rounded-2xl object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -bottom-0.5 size-3.5 rounded-full border-[2.5px] border-background bg-emerald-500"
        />
      </div>

      <h1
        className="rise mt-5 text-base font-medium text-foreground"
        style={{ "--rise-delay": 1 }}
      >
        {profile.name}
      </h1>
      <p
        className="rise text-base text-muted-foreground"
        style={{ "--rise-delay": 1 }}
      >
        {profile.role}
      </p>

      <p
        className="rise mt-6 text-base leading-[1.7] text-muted-foreground"
        style={{ "--rise-delay": 2 }}
      >
        {profile.bio.map((part, index) =>
          part.strong ? (
            <strong key={index} className="font-medium text-foreground">
              {part.text}
            </strong>
          ) : (
            part.text
          ),
        )}
      </p>

      <p
        className="rise mt-6 flex items-center gap-2 text-base text-muted-foreground"
        style={{ "--rise-delay": 3 }}
      >
        <span>Press</span>
        <button
          type="button"
          onClick={copyEmail}
          aria-label={`Copy ${profile.email} to clipboard`}
          className={cn(
            "relative grid h-[26px] min-w-[26px] place-items-center rounded-md border border-border bg-surface px-1.5 font-mono text-xs text-foreground shadow-[0_1px_0_0_var(--border)]",
            "transition-[background-color,scale] duration-150 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-muted active:scale-[0.96]",
          )}
        >
          C
        </button>
        <span>to copy my email</span>
        <span
          aria-live="polite"
          className={cn(
            "flex items-center gap-1 text-sm text-emerald-600 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)] dark:text-emerald-500",
            copied ? "opacity-100" : "scale-25 opacity-0 blur-[4px]",
          )}
        >
          <HugeiconsIcon icon={Tick02Icon} size={15} strokeWidth={2.5} />
          Copied
        </span>
      </p>
    </section>
  );
};
