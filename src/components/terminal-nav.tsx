"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/config/profile";
import type { SectionId } from "@/types/profile";

/**
 * Text-only section navigation.
 * Highlights the section currently in view using an IntersectionObserver,
 * and falls back to plain anchors so the links work without JavaScript.
 */
export function TerminalNav() {
  const [active, setActive] = useState<SectionId>(navItems[0].id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const visible = new Set<SectionId>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
        }
        const current = navItems.find((item) => visible.has(item.id));
        if (current) setActive(current.id);
      },
      // a narrow band around the upper third of the viewport defines "in view"
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) setActive(navItems[navItems.length - 1].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav aria-label="Sections" className="mt-2">
      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] leading-5">
        {navItems.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={[
                  "inline-block transition-colors",
                  "underline-offset-4 hover:text-fg",
                  isActive
                    ? "font-medium text-highlight underline decoration-highlight"
                    : "text-muted no-underline",
                ].join(" ")}
              >
                [{item.label}]
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
