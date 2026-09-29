import { TerminalHeader } from "@/components/terminal-header";
import { Whoami } from "@/components/whoami";
import { Socials } from "@/components/socials";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Infrastructure } from "@/components/infrastructure";
import { TerminalFooter } from "@/components/terminal-footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <TerminalHeader />
      <main
        id="main"
        className="mx-auto w-full max-w-3xl flex-1 px-5 pb-16 sm:px-6"
      >
        <Whoami />
        <Socials />
        <Experience />
        <Skills />
        <Infrastructure />
      </main>
      <TerminalFooter />
    </div>
  );
}
