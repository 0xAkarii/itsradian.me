import type { NavItem, Profile } from "@/types/profile";

/**
 * ---------------------------------------------------------------------------
 * EDIT THIS FILE — all profile content lives here.
 * ---------------------------------------------------------------------------
 * Nothing in `src/components/*` hardcodes profile data.
 *
 * Placeholders are expressed as `null` (or as empty `entries: []` arrays) and
 * are rendered as clearly marked "not set" hints instead of broken links, so
 * the site never shows a link that does not go anywhere.
 * ---------------------------------------------------------------------------
 */

/** Section navigation. `id` must match the rendered section id. */
export const navItems: NavItem[] = [
  { id: "whoami", label: "whoami" },
  { id: "socials", label: "socials" },
  { id: "experience", label: "Experience and HoF" },
  { id: "skills", label: "skills" },
  { id: "infrastructure", label: "infrastructure and software" },
];

export const profile: Profile = {
  handle: "alva@portfolio",
  name: "Alva Radian",
  title: "Bug Hunter | Security Engineer",
  metaDescription:
    "Alva Radian — Bug Hunter and Security Engineer. Web application security, penetration testing, vulnerability research, and hands-on security labs for Red Team and Blue Team training.",
  about:
    "Passionate about cybersecurity, with a focus on web application security, penetration testing, and vulnerability research. Experienced in identifying security weaknesses, conducting security assessments, and building practical security solutions. Currently working as a Security Engineer, building hands-on security labs as a challenge author and problem setter for Red Team and Blue Team exercises. Always exploring new techniques and improving my skills in offensive and defensive security.",
  aboutTerminal: [
    "Bug Hunter & Security Engineer",
    "Currently building hands-on security labs as a challenge author",
    "and problem setter for Red Team and Blue Team exercises.",
    "Focused on application security, vulnerability research,",
    "penetration testing, and security operations.",
  ],

  /**
   * Social profiles — text-only links.
   * Replace `null` with the real URL, e.g. url: "https://hackerone.com/<handle>".
   * While `null`, the row is rendered as a non-clickable placeholder.
   */
  socials: [
    { id: "hackerone", label: "HackerOne", url: "https://hackerone.com/rdnzx", handle: "@rdnzx" },
    { id: "bugcrowd", label: "BugCrowd", url: "https://bugcrowd.com/rdnzx", handle: "@rdnzx" },
    { id: "medium", label: "Medium", url: "https://medium.com/@rdnzx", handle: "@rdnzx" },
    { id: "github", label: "GitHub", url: "https://github.com/0xAkarii", handle: "@0xAkarii" },
    { id: "youtube", label: "YouTube", url: "https://www.youtube.com/@radianid", handle: "@radianid" },
    { id: "discord", label: "Discord", url: null, handle: "@radian.id" },
  ],

  /**
   * Experience, Hall of Fame and research links.
   * Add entries like:
   *   { id: "acme", title: "Security Engineer — ACME", description: "One line.",
   *     url: "https://example.com" }
   * Groups with no entries show their `placeholder` hint instead of fake data.
   * The Hall of Fame list can be extended with further program pages at any time.
   */
  experienceGroups: [
    {
      id: "experience",
      label: "Experience",
      placeholder: "no entries yet — add them in src/config/profile.ts",
      entries: [
        {
          id: "security-engineer-labs",
          title: "Security Engineer — Challenge Author / Problem Setter",
          description:
            "Builds hands-on security labs and challenges for Red Team and Blue Team exercises on a private platform (name withheld).",
          url: null,
        },
        {
          id: "pentest-projects",
          title: "Penetration Testing Projects — Web, Android and API",
          description:
            "Delivered several penetration testing engagements for private companies (names withheld), covering web applications, Android applications, and APIs.",
          url: null,
        },
      ],
    },
    {
      id: "hall-of-fame",
      label: "Hall of Fame",
      placeholder: "no entries yet — add them in src/config/profile.ts",
      entries: [
        {
          id: "deepnote",
          title: "Deepnote — Security Acknowledgments",
          description: "Credited in Deepnote's public researcher acknowledgments.",
          url: "https://deepnote.com/.well-known/acknowledgments.txt",
        },
        {
          id: "uxcam",
          title: "UXCam — Bug Bounty Hall of Fame",
          description: "Listed in the UXCam bug bounty Hall of Fame.",
          url: "https://uxcam.com/bug-bounty-hall-of-fame/",
        },
        {
          id: "google-vrp",
          title: "Google VRP — Bug Hunters Profile",
          description: "Public Google Vulnerability Reward Program profile.",
          url: "https://bughunters.google.com/profile/7606ba31-24c6-4a2e-a111-a9358d90e74a",
        },
      ],
    },
    {
      id: "research",
      label: "Security Research",
      placeholder: "no entries yet — add them in src/config/profile.ts",
      trailingNote: "and many more.",
      entries: [
        {
          id: "statamic",
          title: "Statamic CMS — Blind XSS and Business Logic Flaw",
          description:
            "Blind XSS and business logic findings reported against the Statamic platform itself.",
          tag: "open-source software",
          url: "https://github.com/statamic/cms",
        },
        {
          id: "suteki",
          title: "Suteki — Critical Access to SMTP and Database Servers",
          description:
            "Critical issue that could be leveraged to reach the SMTP and database servers. Reported to the security team, fixed, and rewarded with a bounty.",
          tag: "web platform",
          url: "https://suteki.co.id",
        },
        {
          id: "tripay",
          title: "Tripay — Account Takeover and Full Inbox Access",
          description:
            "Multiple security issues that could be chained into account takeover and unauthorized access to all inboxes. Fixed and rewarded with a bounty.",
          tag: "web platform",
          url: "https://tripay.co.id",
        },
        {
          id: "blibli",
          title: "Blibli — Redirect to Attacker-Controlled Page (Credential Phishing)",
          description:
            "Users could be redirected to an attacker-controlled page for credential theft and phishing. Fixed and rewarded with a bounty.",
          tag: "web platform",
          url: "https://www.blibli.com",
        },
        {
          id: "halodoc",
          title: "Halodoc — Client-Side Code Execution (Account Takeover)",
          description:
            "Client-side vulnerability that could execute code on the client, leading to account takeover. Fixed and rewarded with a bounty.",
          tag: "web platform",
          url: "https://www.halodoc.com",
        },
      ],
    },
  ],

  /** Technical skills — text lists only, no scores or proficiency levels. */
  skills: [
    {
      id: "security",
      label: "SECURITY",
      items: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Bug Hunting",
        "Log Management",
        "Log Correlation",
      ],
    },
    {
      id: "programming",
      label: "PROGRAMMING",
      items: ["PHP", "JavaScript", "Python", "Bash"],
    },
  ],

  /** Infrastructure and security software, grouped by category. */
  infrastructure: [
    { id: "containers", label: "CONTAINERS", items: [{ name: "Docker" }] },
    { id: "virtualization", label: "VIRTUALIZATION", items: [{ name: "Proxmox" }] },
    { id: "siem", label: "SIEM", items: [{ name: "Wazuh" }] },
    { id: "soar", label: "SOAR", items: [{ name: "Shuffle" }] },
  ],
};
