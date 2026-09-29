import { profile } from "@/config/profile";
import { TerminalNav } from "@/components/terminal-nav";

/**
 * Sticky terminal-style header: prompt line + text-only section navigation.
 */
export function TerminalHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg">
      <div className="mx-auto w-full max-w-3xl px-5 py-2.5 sm:px-6 sm:py-3">
        <p className="text-[13px] leading-5 whitespace-nowrap">
          <span className="text-highlight">{profile.handle}</span>
          <span className="text-muted">:~$</span>{" "}
          <span className="text-fg">./profile.sh</span>
        </p>
        <TerminalNav />
      </div>
    </header>
  );
}
