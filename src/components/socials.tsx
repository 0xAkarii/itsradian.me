import { profile } from "@/config/profile";
import { TerminalSection } from "@/components/terminal-section";

/**
 * Text-only social links. Entries without a URL are rendered as
 * non-clickable placeholders, never as dead links.
 */
export function Socials() {
  return (
    <TerminalSection id="socials" command="ls ./socials" label="Socials">
      <ul className="divide-y divide-line border border-line bg-surface">
        {profile.socials.map((social) => (
          <li
            key={social.id}
            className="flex flex-wrap items-baseline gap-x-3 gap-y-1 px-5 py-3 text-[13px] leading-6 sm:grid sm:grid-cols-[10rem_1.25rem_1fr]"
          >
            <span className="text-fg">
              {social.url ? (
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line underline-offset-4 transition-colors hover:text-highlight hover:decoration-highlight"
                >
                  {social.label}
                </a>
              ) : (
                <span className="text-muted">{social.label}</span>
              )}
            </span>

            <span aria-hidden="true" className="hidden text-accent sm:inline">
              -&gt;
            </span>

            <span className="wrap-tech text-muted">
              {social.url ? (
                <>
                  {social.url}
                  {social.handle ? ` (${social.handle})` : ""}
                </>
              ) : social.handle ? (
                <>{social.handle}</>
              ) : (
                <span className="text-muted">
                  [ url not set — src/config/profile.ts ]
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </TerminalSection>
  );
}
