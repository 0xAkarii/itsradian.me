/**
 * Content types for the profile website.
 *
 * Every editable value lives in `src/config/profile.ts` and is validated
 * against these shapes, so content can be changed without touching components.
 */

export type SectionId =
  | "whoami"
  | "socials"
  | "experience"
  | "skills"
  | "infrastructure";

export interface NavItem {
  /** Must match the `id` of the rendered <section>. */
  id: SectionId;
  /** Text-only label rendered inside the navigation. */
  label: string;
}

export interface SocialLink {
  id: string;
  /** Platform name rendered as the text-only link label. */
  label: string;
  /** `null` = not provided yet. Placeholders are never rendered as links. */
  url: string | null;
  /** Optional public handle shown next to the link. */
  handle?: string | null;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  description: string;
  /** Optional short tag shown next to the title, e.g. `web platform`. */
  tag?: string;
  /** `null` = not provided yet (rendered as a plain placeholder, not a link). */
  url: string | null;
}

export interface ExperienceGroup {
  id: string;
  label: string;
  /** Hint shown while the group has no entries yet. */
  placeholder: string;
  /** Optional line rendered after the entries, e.g. `and many more.` */
  trailingNote?: string;
  entries: ExperienceEntry[];
}

export interface SkillGroup {
  id: string;
  /** Uppercase category label, e.g. `SECURITY`. */
  label: string;
  items: string[];
}

export interface InfrastructureEntry {
  name: string;
  /** Optional qualifier, e.g. `SIEM`, shown after the tool name. */
  note?: string;
}

export interface InfrastructureGroup {
  id: string;
  /** Uppercase category label, e.g. `CONTAINERS`. */
  label: string;
  items: InfrastructureEntry[];
}

export interface Profile {
  /** Terminal identifier, e.g. `alva@portfolio`. */
  handle: string;
  name: string;
  title: string;
  /** Used for <meta name="description"> and social previews. */
  metaDescription: string;
  /** Prose introduction shown at the top of the `whoami` section. */
  about: string;
  /** Terminal-style about output, one array item per line. */
  aboutTerminal: string[];
  socials: SocialLink[];
  experienceGroups: ExperienceGroup[];
  skills: SkillGroup[];
  infrastructure: InfrastructureGroup[];
}
