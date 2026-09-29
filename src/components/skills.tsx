import { profile } from "@/config/profile";
import { TerminalSection } from "@/components/terminal-section";

/**
 * Technical skills — compact text panels, no progress bars or ratings.
 */
export function Skills() {
  return (
    <TerminalSection id="skills" command="cat ./skills.txt" label="Skills">
      <div className="grid gap-5 sm:grid-cols-2">
        {profile.skills.map((group) => (
          <div
            key={group.id}
            className="border border-line bg-surface px-5 py-4"
          >
            <h3 className="text-[13px] leading-5 text-highlight">
              [{group.label}]
            </h3>
            <ul className="mt-3 space-y-1 text-[13px] leading-6 text-fg">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TerminalSection>
  );
}
