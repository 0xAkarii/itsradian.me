import { profile } from "@/config/profile";
import { TerminalSection } from "@/components/terminal-section";

/**
 * Infrastructure and security software, grouped by category and rendered
 * as aligned text rows — no logos or icons.
 */
export function Infrastructure() {
  return (
    <TerminalSection
      id="infrastructure"
      command="cat ./infrastructure.txt"
      label="Infrastructure and software"
    >
      <dl className="border border-line bg-surface px-5 py-4 text-[13px] leading-6">
        {profile.infrastructure.map((group) => (
          <div
            key={group.id}
            className="grid gap-x-5 gap-y-1 py-1 sm:grid-cols-[11rem_1fr]"
          >
            <dt className="text-muted">{group.label}</dt>
            <dd className="wrap-tech text-fg">
              {group.items
                .map((item) =>
                  item.note ? `${item.name} (${item.note})` : item.name,
                )
                .join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </TerminalSection>
  );
}
