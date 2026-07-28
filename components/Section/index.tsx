import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, label, intro, children, className }: SectionProps) => {
  return (
    <section id={id} className={`column scroll-mt-12 ${className ?? ""}`}>
      <p className="label reveal">{label}</p>
      {intro ? (
        <p className="reveal mt-5 text-base leading-[1.7] text-muted-foreground">
          {intro}
        </p>
      ) : null}
      {children}
    </section>
  );
};
