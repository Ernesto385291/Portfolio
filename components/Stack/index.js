import * as icons from "simple-icons";
import { Section } from "@/components/Section";
import { stack } from "@/data/profile";

const toIconKey = (slug) =>
  `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;

export const Stack = () => {
  const marks = stack
    .map((slug) => icons[toIconKey(slug)])
    .filter(Boolean);

  if (!marks.length) return null;

  return (
    <Section id="stack" label="Stack">
      <ul className="reveal mt-7 flex flex-wrap items-center gap-x-6 gap-y-5">
        {marks.map((mark) => (
          <li key={mark.slug}>
            {/* Monochrome at rest so the page stays neutral; the brand colour
                fades in on hover. */}
            <span className="group/mark relative block" title={mark.title}>
              <svg
                role="img"
                aria-label={mark.title}
                viewBox="0 0 24 24"
                className="size-[26px] text-foreground/75 transition-[color,opacity] duration-300 ease-[cubic-bezier(0.2,0,0,1)] group-hover/mark:opacity-0"
              >
                <path d={mark.path} fill="currentColor" />
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                style={{ color: `#${mark.hex}` }}
                className="absolute inset-0 size-[26px] opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.2,0,0,1)] group-hover/mark:opacity-100"
              >
                <path d={mark.path} fill="currentColor" />
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
};
