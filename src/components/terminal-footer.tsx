import { profile } from "@/config/profile";

/**
 * Minimal terminal footer.
 */
export function TerminalFooter() {
  return (
    <footer className="mt-10 border-t border-line">
      <div className="mx-auto w-full max-w-3xl px-5 py-6 text-[13px] leading-6 sm:px-6">
        <p>
          <span className="text-highlight">{profile.handle}</span>
          <span className="text-muted">:~$</span> exit
        </p>
        <p className="text-muted">Connection closed.</p>
        <p className="mt-4 text-muted">© {profile.name}</p>
      </div>
    </footer>
  );
}
