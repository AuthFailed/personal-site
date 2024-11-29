import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Roman Chursanov",
  DESCRIPTION: "Roman Chursanov, a developer`s portfolio.",
  AUTHOR: "Roman Chursanov",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "authfailed@gmail.com",
    HREF: "mailto:authfailed@gmail.com",
  },
  {
    NAME: "Telegram",
    ICON: "telegram",
    TEXT: "@authfailed",
    HREF: "https://t.me/authfailed",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "authfailed",
    HREF: "https://github.com/authfailed",
  },
];
