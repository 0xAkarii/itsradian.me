import { profile } from "@/config/profile";
import { TerminalSection } from "@/components/terminal-section";

/**
 * Experience, Hall of Fame and research links.
 * Groups are numbered and render whatever `profile.experienceGroups` contains;
 * empty groups show their placeholder hint instead of invented entries.
 */
export function Experience() {
  return (
    <TerminalSection
      id="experience"
      command="cat ./experience/index.txt"
      label="Experience and Hall of Fame"
    >
      <div className="space-y-7">
        {profile.experienceGroups.map((group, groupIndex) => (
          <div key={group.id}>
            <h3 className="text-[13px] leading-5 text-highlight">
              [{String(groupIndex + 1).padStart(2, "0")}] {group.label}
            </h3>

            {group.entries.length === 0 ? (
              <p className="mt-2 text-[13px] leading-6 text-muted">
                <span aria-hidden="true" className="text-accent">
                  &gt;
                </span>{" "}
                <span className="wrap-tech">[ placeholder — {group.placeholder} ]</span>
              </p>
            ) : (
              <>
                <ul className="mt-2 space-y-4">
                  {group.entries.map((entry) => (
                    <li key={entry.id} className="text-[13px] leading-6">
                      <span aria-hidden="true" className="text-accent">
                        &gt;{" "}
                      </span>
                      {entry.url ? (
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg underline decoration-line underline-offset-4 transition-colors hover:text-highlight hover:decoration-highlight"
                        >
                          {entry.title}
                        </a>
                      ) : (
                        <span className="text-fg">{entry.title}</span>
                      )}
                      {entry.tag ? (
                        <>
                          {" "}
                          <span className="text-muted">[{entry.tag}]</span>
                        </>
                      ) : null}
                      {entry.description ? (
                        <p className="mt-1 pl-4 text-muted">{entry.description}</p>
                      ) : null}
                      {entry.url ? (
                        <p className="wrap-tech mt-1 pl-4 text-muted">
                          {entry.url}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>

                {group.trailingNote ? (
                  <p className="mt-3 text-[13px] leading-6 text-muted">
                    <span aria-hidden="true" className="text-accent">
                      &gt;
                    </span>{" "}
                    {group.trailingNote}
                  </p>
                ) : null}
              </>
            )}
          </div>
        ))}
      </div>
    </TerminalSection>
  );
}
