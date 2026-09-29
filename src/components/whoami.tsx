import { profile } from "@/config/profile";

/**
 * Introduction section — the name is the strongest visual element,
 * followed by a short terminal-style transcript.
 */
export function Whoami() {
  const { name, title, about, aboutTerminal } = profile;

  return (
    <section id="whoami" aria-labelledby="whoami-heading" className="pt-10">
      <h1
        id="whoami-heading"
        className="text-3xl font-bold tracking-tight text-fg sm:text-4xl"
      >
        {name}
      </h1>
      <p className="mt-2 text-[13px] text-highlight sm:text-sm">{title}</p>

      <p className="mt-6 max-w-2xl text-[13px] leading-7 text-muted sm:text-sm">
        {about}
      </p>

      <div className="mt-8 border border-line bg-surface px-5 py-4 text-[13px] leading-6">
        <p>
          <span aria-hidden="true" className="text-accent">
            $
          </span>{" "}
          <span className="text-muted">whoami</span>
        </p>
        <p className="text-fg">{name}</p>

        <p className="mt-4">
          <span aria-hidden="true" className="text-accent">
            $
          </span>{" "}
          <span className="text-muted">cat about.txt</span>
        </p>
        {aboutTerminal.map((line, index) => (
          <p key={line} className="text-fg">
            {line}
            {index === aboutTerminal.length - 1 ? (
              <span className="caret" aria-hidden="true" />
            ) : null}
          </p>
        ))}
      </div>
    </section>
  );
}
