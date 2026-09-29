import type { ReactNode } from "react";
import type { SectionId } from "@/types/profile";

interface TerminalSectionProps {
  /** Must match the anchor id used by the navigation. */
  id: SectionId;
  /** Command shown after the prompt, e.g. `cat ./skills.txt`. */
  command: string;
  /** Full section name, exposed to screen readers only. */
  label: string;
  children: ReactNode;
}

/**
 * Shared shell for the anchored sections: prompt line + subtle separator.
 */
export function TerminalSection({
  id,
  command,
  label,
  children,
}: TerminalSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-12 border-t border-line pt-8"
    >
      <h2
        id={`${id}-heading`}
        className="text-[13px] leading-5 font-normal text-fg"
      >
        <span aria-hidden="true" className="text-accent">
          $
        </span>{" "}
        {command}
        <span className="sr-only"> — section: {label}</span>
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
