"use client";

import { m, useReducedMotion } from "framer-motion";
import { CompanyChip } from "@/components/CompanyChip";
import { Section } from "@/components/Section";
import { experience } from "@/data/profile";

export const Experience = () => {
  const reduceMotion = useReducedMotion();

  if (!experience.length) return null;

  return (
    <Section
      id="experience"
      label="Experience"
      intro="I take products from first idea to production, combining engineering, product strategy and a close view of how people actually use the software."
    >
      <ul className="mt-10 flex flex-col gap-8">
        {experience.map((role, index) => (
          <m.li
            key={`${role.company}-${role.from}`}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16, filter: reduceMotion ? "none" : "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              type: "spring",
              duration: 0.45,
              bounce: 0,
              delay: reduceMotion ? 0 : index * 0.07,
            }}
            className="flex flex-col gap-1 sm:flex-row sm:gap-6"
          >
            <p className="meta shrink-0 uppercase sm:w-[8.5rem] sm:pt-1">
              {role.from} — {role.to}
            </p>

            <div className="min-w-0">
              <h3 className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-base font-medium text-foreground">
                <span>{role.role} at</span>
                {role.url ? (
                  <a
                    href={role.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/company inline-flex items-center gap-1.5 rounded-md transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25"
                  >
                    <CompanyChip
                      company={role.company}
                      icon={role.icon}
                      logo={role.logo}
                    />
                    <span className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-200 group-hover/company:decoration-foreground">
                      {role.company}
                    </span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <CompanyChip
                      company={role.company}
                      icon={role.icon}
                      logo={role.logo}
                    />
                    {role.company}
                  </span>
                )}
              </h3>

              <p className="mt-1.5 text-base leading-[1.7] text-muted-foreground">
                {role.summary}
              </p>
            </div>
          </m.li>
        ))}
      </ul>
    </Section>
  );
};
