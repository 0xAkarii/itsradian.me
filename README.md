# Alva Radian — Personal Profile Website

Single-page personal portfolio with a dark CLI terminal aesthetic, built with
Next.js (App Router), TypeScript (strict), Tailwind CSS v4, and JetBrains Mono.

All content lives in one configuration file: **`src/config/profile.ts`**.
No icons, no icon libraries, no social logos, no tracking scripts.

## Requirements

- Node.js 20+ (developed on Node 22)
- pnpm 10+

## Commands

```bash
pnpm install        # install dependencies
pnpm dev            # dev server on http://localhost:3000
pnpm typecheck      # tsc --noEmit (strict)
pnpm lint           # ESLint (eslint-config-next)
pnpm build          # production build (static prerender)
pnpm start          # serve the production build
pnpm check          # typecheck + lint + build
```

## Project structure

```
web-profile/
├── .agent/SKILLS.md          # build specification this site implements
├── src/
│   ├── app/
│   │   ├── layout.tsx        # metadata, font, landmarks
│   │   ├── page.tsx          # composes the five sections
│   │   ├── globals.css       # design tokens, focus styles, cursor animation
│   │   └── icon.svg          # minimal terminal favicon (no image assets used)
│   ├── components/
│   │   ├── terminal-header.tsx     # prompt line + navigation shell
│   │   ├── terminal-nav.tsx        # client component: active-section tracking
│   │   ├── terminal-section.tsx    # shared section shell (prompt + separator)
│   │   ├── whoami.tsx
│   │   ├── socials.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── infrastructure.tsx
│   │   └── terminal-footer.tsx
│   ├── config/profile.ts     # ← ALL EDITABLE CONTENT
│   └── types/profile.ts      # content types (compile-time contract)
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── next.config.ts
```

Sections (anchor ids): `#whoami`, `#socials`, `#experience`, `#skills`,
`#infrastructure`. Navigation is text-only, uses native anchors, and works
without JavaScript.

## Where to update content

Everything below is edited in `src/config/profile.ts` — no component changes
needed.

| What | Where |
| --- | --- |
| Name, professional title | `profile.name`, `profile.title` |
| Terminal identifier (`alva@portfolio`) | `profile.handle` |
| Prose intro + terminal transcript | `profile.about`, `profile.aboutTerminal` |
| Meta description / SEO | `profile.metaDescription` |
| Navigation labels | `navItems` |
| Social profile URLs | `profile.socials[].url` |
| Experience / Hall of Fame / research entries | `profile.experienceGroups[].entries` |
| Security + programming skills | `profile.skills` |
| Infrastructure and security software | `profile.infrastructure` |

### Social links

Each entry is `{ id, label, url, handle }`. Replace `url: null` with the real
URL, for example:

```ts
{ id: "hackerone", label: "HackerOne", url: "https://hackerone.com/<handle>", handle: "@<handle>" },
```

While `url` is `null` the row renders as
`[ url not set — src/config/profile.ts ]` and is **not** a link, so the site
never shows a dead or misleading external link. Configured URLs open in a new
tab with `rel="noopener noreferrer"`.

### Experience / Hall of Fame entries

```ts
{
  id: "experience",
  label: "Experience",
  placeholder: "no entries yet — add them in src/config/profile.ts",
  entries: [
    {
      id: "acme-sec-eng",
      title: "Security Engineer — ACME",
      description: "One-line description.",
      url: "https://example.com",
    },
  ],
}
```

Empty groups show their `placeholder` hint; add or remove entries freely — the
layout adapts and groups are numbered automatically.

## Design tokens

Defined once in `src/app/globals.css` (CSS variables, exposed to Tailwind via
`@theme inline`):

| Token | Value | Use |
| --- | --- | --- |
| `bg` | `#08070D` | page background |
| `surface` | `#100B19` | panels |
| `accent` | `#6D28D9` | prompt symbols |
| `highlight` | `#A78BFA` | active nav, headings, links |
| `fg` | `#EDE9F5` | primary text |
| `muted` | `#9A91AA` | secondary text |
| `line` | `#2B203D` | borders |

Typeface: JetBrains Mono via `next/font` (self-hosted build output, `display: swap`).

## Accessibility / motion

- Semantic landmarks, `h1` → `h3` hierarchy, skip link, visible focus rings.
- Active navigation is marked with `aria-current` **and** weight/underline
  (never color alone).
- `prefers-reduced-motion: reduce` disables the blinking cursor, transitions,
  and smooth scrolling.
- All content is server-rendered, so it remains readable with JavaScript off.

## Deployment

Static-friendly and backend-free (no API routes, no database, no auth).

**Vercel:** import the repository — the Next.js defaults work as-is.

**Any Node host:**

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start        # default port 3000, override with -p <port>
```

**Static export** (Netlify/Cloudflare Pages/S3/nginx), if a pure static bundle
is preferred:

```bash
# next.config.ts
const nextConfig = { output: "export" };   # add this line
pnpm build        # emits ./out
```

## Placeholders that still need real data

- Socials: HackerOne, BugCrowd, Medium, GitHub and YouTube are clickable links.
  Discord is shown as the plain handle `@radian.id` — Discord accounts are
  identified by username/ID and have no public profile URL, so it stays
  text-only. X (Twitter) was removed for now; re-add it in
  `profile.socials` when there is a URL.
- Hall of Fame lists Deepnote, UXCam and the Google VRP profile and accepts
  more entries. Experience holds the current Security Engineer (challenge
  author / problem setter) role. Security Research lists the vendor findings
  (Statamic, Suteki, Tripay, Blibli, Halodoc); links point to the vendor
  site/repository since no public advisory or write-up URL exists yet.

No certifications, employers, awards, or achievements are fabricated anywhere
in this project.
