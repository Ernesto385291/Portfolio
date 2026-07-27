import { CompanyChip } from "@/components/CompanyChip";
import { Section } from "@/components/Section";
import { experience } from "@/data/profile";

export const Experience = () => {
  if (!experience.length) return null;

  return (
    <Section
      id="experience"
      label="Experience"
      intro="Throughout my career I have worked on various projects, from building scalable systems to designing user-friendly interfaces. Here's a brief overview."
    >
      <ul className="mt-10 flex flex-col gap-8">
        {experience.map((role, index) => (
          <li
            key={`${role.company}-${role.from}`}
            className="reveal flex flex-col gap-1 sm:flex-row sm:gap-6"
            style={{ "--rise-delay": index % 3 }}
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
                    <CompanyChip company={role.company} icon={role.icon} />
                    <span className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-200 group-hover/company:decoration-foreground">
                      {role.company}
                    </span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <CompanyChip company={role.company} icon={role.icon} />
                    {role.company}
                  </span>
                )}
              </h3>

              <p className="mt-1.5 text-base leading-[1.7] text-muted-foreground">
                {role.summary}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
