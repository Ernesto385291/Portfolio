"use client";

import {
  ArrowUpRight01Icon,
  GithubIcon,
  InstagramIcon,
  Layers01Icon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { profile, socials } from "@/data/profile";
import { cn } from "@/lib/utils";

// Traced from the original platzi_logo.png, which was a palette PNG with a
// baked-in white background. As inline SVG it inherits currentColor.
const PlatziIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.65 2.45 13.95 2.55 14.95 3.05 19.85 7.95 20.3 8.75 20.45 9.3 20.4 10.6 19.9 11.65 15.3 16.3 13.1 14.15 17.4 9.9 17.4 9.75 13.15 5.5 6.6 11.95 13.05 18.5 15.2 16.4 17.35 18.45 14.95 20.95 14.25 21.35 13.5 21.55 12.2 21.45 11.15 20.9 4.2 13.95 3.75 13.2 3.55 12.5 3.65 11.05 4.2 10.05 11.15 3.1 11.8 2.7Z" />
  </svg>
);

const ICONS = {
  mail: Mail01Icon,
  x: NewTwitterIcon,
  github: GithubIcon,
  linkedin: Linkedin01Icon,
  instagram: InstagramIcon,
  timeline: Layers01Icon,
};

const fieldClass =
  "w-full rounded-xl bg-input px-4 py-3 text-base text-foreground placeholder:text-faint transition-[background-color,box-shadow] duration-200 focus:bg-muted focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // No backend: compose the message and hand it to the user's mail client.
  // Nothing is faked — if their client does not open, nothing was "sent".
  const send = () => {
    const subject = form.name
      ? `Portfolio message from ${form.name}`
      : "Portfolio message";
    const body = [
      form.message,
      "",
      `— ${form.name || "Anonymous"}${form.email ? ` (${form.email})` : ""}`,
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const onKeyDown = (event) => {
    // Plain Enter must still insert a newline inside the textarea.
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      send();
    }
  };

  const update = (key) => (event) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  return (
    <section id="contact" className="column scroll-mt-12">
      <p className="label reveal">Contact</p>
      <p className="reveal mt-5 text-base leading-[1.7] text-muted-foreground">
        You can contact me using the form or via the links below.
      </p>

      <form
        className="reveal mt-7 flex flex-col gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          send();
        }}
        onKeyDown={onKeyDown}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            className={fieldClass}
            type="text"
            name="name"
            aria-label="Name"
            placeholder="Name"
            value={form.name}
            onChange={update("name")}
          />
          <input
            className={fieldClass}
            type="email"
            name="email"
            aria-label="Email"
            placeholder="Email"
            value={form.email}
            onChange={update("email")}
          />
        </div>
        <textarea
          className={cn(fieldClass, "min-h-40 resize-y")}
          name="message"
          aria-label="Message"
          placeholder="Message"
          value={form.message}
          onChange={update("message")}
        />
        <div className="mt-1 flex items-center justify-between gap-4">
          <button
            type="submit"
            className="rounded-xl bg-muted px-4 py-2.5 text-base font-medium text-foreground transition-[background-color,scale] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-accent active:scale-[0.96] focus-visible:ring-[3px] focus-visible:ring-ring/25 focus-visible:outline-none"
          >
            Send message
          </button>
          <p className="meta">
            or <kbd className="font-mono">⌘</kbd>
            <kbd className="font-mono">↵</kbd> to send
          </p>
        </div>
      </form>

      <ul className="mt-12 -mx-3">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group/row flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-surface focus-visible:bg-surface focus-visible:outline-none"
            >
              <span className="shrink-0 text-muted-foreground transition-colors duration-200 group-hover/row:text-foreground">
                {social.icon === "platzi" ? (
                  <PlatziIcon />
                ) : (
                  <HugeiconsIcon icon={ICONS[social.icon]} size={17} strokeWidth={2} />
                )}
              </span>
              <span className="flex-1 text-base text-foreground">
                {social.label}
              </span>
              <span className="truncate text-base text-muted-foreground">
                {social.handle}
              </span>
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={15}
                strokeWidth={2}
                className="shrink-0 text-faint transition-[transform,color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-hover/row:translate-x-px group-hover/row:-translate-y-px group-hover/row:text-foreground"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
