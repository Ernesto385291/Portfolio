"use client";

import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import posthog from "posthog-js";
import { Section } from "@/components/Section";

const ProjectMark = ({ project }) => (
  <span
    aria-hidden="true"
    className={`grid size-10 shrink-0 place-items-center overflow-hidden rounded-[10px] ${project.Accent}`}
  >
    {project.Image ? (
      <Image
        src={project.Image}
        alt=""
        width={28}
        height={28}
        className="image-outline size-7 rounded-lg object-contain"
      />
    ) : (
      <span className="font-mono text-sm text-foreground/70">
        {project.Monogram ??
          project.Project_Title.replace(/[^a-z0-9]/gi, "").charAt(0)}
      </span>
    )}
  </span>
);

export const Projects = ({ data, label = "Selected work", intro }) => {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="projects"
      label={label}
      intro={intro}
    >
      <ul className="-mx-3 mt-8">
        {data.map((project, index) => (
          <m.li
            key={project.id}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14, filter: reduceMotion ? "none" : "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              type: "spring",
              duration: 0.4,
              bounce: 0,
              delay: reduceMotion ? 0 : index * 0.06,
            }}
          >
            {project.Project_URL ? (
              <m.a
                href={project.Project_URL}
                target="_blank"
                rel="noreferrer"
                whileHover={reduceMotion ? undefined : { x: 3 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                onClick={() =>
                  posthog.capture("project_link_clicked", {
                    project_title: project.Project_Title,
                    project_url: project.Project_URL,
                  })
                }
                className="group/row flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-surface focus-visible:bg-surface focus-visible:outline-none"
              >
                <ProjectMark project={project} />

                <span className="min-w-0 flex-1">
                  <span className="block text-base font-medium text-foreground">
                    {project.Project_Title}
                  </span>
                  <span className="block text-pretty text-sm leading-[1.6] text-muted-foreground">
                    {project.Description}
                  </span>
                </span>

                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-faint transition-[transform,color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-hover/row:translate-x-px group-hover/row:-translate-y-px group-hover/row:text-foreground"
                />
              </m.a>
            ) : (
              <div className="flex items-center gap-4 rounded-xl px-3 py-3">
                <ProjectMark project={project} />

                <span className="min-w-0 flex-1">
                  <span className="block text-base font-medium text-foreground">
                    {project.Project_Title}
                  </span>
                  <span className="block text-pretty text-sm leading-[1.6] text-muted-foreground">
                    {project.Description}
                  </span>
                </span>
              </div>
            )}
          </m.li>
        ))}
      </ul>
    </Section>
  );
};
