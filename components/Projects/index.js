import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Section } from "@/components/Section";

export const Projects = ({ data }) => {
  return (
    <Section
      id="projects"
      label="Projects"
      intro="A selection of things I have designed, built and shipped. Full walkthroughs on request."
    >
      <ul className="-mx-3 mt-8">
        {data.map((project, index) => (
          <li
            key={project.id}
            className="reveal"
            style={{ "--rise-delay": index % 4 }}
          >
            <a
              href={project.Project_URL}
              target="_blank"
              rel="noreferrer"
              className="group/row flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-surface focus-visible:bg-surface focus-visible:outline-none"
            >
              {/* No per-project logos exist, so the initial stands in — it keeps
                  the row rhythm without inventing brand marks. */}
              <span
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-muted font-mono text-sm text-muted-foreground transition-colors duration-200 group-hover/row:bg-foreground group-hover/row:text-background"
              >
                {project.Project_Title.replace(/[^a-z0-9]/gi, "").charAt(0)}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-base font-medium text-foreground">
                  {project.Project_Title}
                </span>
                <span className="block truncate text-sm text-muted-foreground">
                  {project.Description}
                </span>
              </span>

              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={16}
                strokeWidth={2}
                className="shrink-0 text-faint transition-[transform,color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-hover/row:translate-x-px group-hover/row:-translate-y-px group-hover/row:text-foreground"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
