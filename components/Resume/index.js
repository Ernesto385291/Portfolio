import { Download04Icon, PdfIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Section } from "@/components/Section";
import { resumes } from "@/data/resumes";

const formatSize = (bytes) => `${Math.round(bytes / 1024)} KB`;

const formatUpdated = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });

export const Resume = () => {
  if (!resumes.length) return null;

  const updated = resumes
    .map((resume) => resume.updatedAt)
    .sort()
    .at(-1);

  return (
    <Section
      id="resume"
      label="Resume"
      intro={`Grab a copy of my CV in either language. Last updated ${formatUpdated(updated)}.`}
    >
      <ul className="-mx-3 mt-8">
        {resumes.map((resume, index) => (
          <li
            key={resume.locale}
            className="reveal"
            style={{ "--rise-delay": index }}
          >
            <a
              href={`/resume/${resume.locale}`}
              download={resume.filename}
              className="group/row flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-surface focus-visible:bg-surface focus-visible:outline-none"
            >
              <span
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-muted text-muted-foreground transition-colors duration-200 group-hover/row:bg-foreground group-hover/row:text-background"
              >
                <HugeiconsIcon icon={PdfIcon} size={18} strokeWidth={2} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-base font-medium text-foreground">
                  {resume.label}
                </span>
                <span className="block truncate text-sm text-muted-foreground">
                  Download as PDF
                </span>
              </span>

              <span className="meta shrink-0">{formatSize(resume.size)}</span>

              <HugeiconsIcon
                icon={Download04Icon}
                size={16}
                strokeWidth={2}
                className="shrink-0 text-faint transition-[transform,color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-hover/row:translate-y-px group-hover/row:text-foreground"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
