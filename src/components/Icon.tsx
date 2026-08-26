import type { ReactNode } from "react";

type IconName =
  | "handshake"
  | "briefcase"
  | "shield"
  | "lightbulb"
  | "heart"
  | "award"
  | "star"
  | "tag"
  | "users"
  | "check"
  | "clock"
  | "play"
  | "arrow"
  | "phone"
  | "mail"
  | "map"
  | "globe"
  | "quote"
  | "kaaba"
  | "calendar"
  | "partner"
  | "menu"
  | "close"
  | "chevron";

const paths: Record<IconName, ReactNode> = {
  handshake: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 12l3 3 7-7M4.5 10.5l2 2m11-3l2 2M9 19l-2.5-2.5a2.5 2.5 0 010-3.5l1-1M15 5l2.5 2.5a2.5 2.5 0 010 3.5l-1 1"
    />
  ),
  briefcase: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 7H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"
    />
  ),
  lightbulb: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 18h6M10 21h4M12 3a6 6 0 00-3 11.2V16h6v-1.8A6 6 0 0012 3z"
    />
  ),
  heart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z"
    />
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 13l-1.5 8 5-2.5L17 21l-1.5-8" />
    </>
  ),
  star: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l2.5 5.5L20 9.5l-4 4 1 6.5L12 17l-5 3 1-6.5-4-4 5.5-1L12 3z"
    />
  ),
  tag: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 12l-8 8-9-9V3h8l9 9zM7.5 7.5h.01"
    />
  ),
  users: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M11 11a4 4 0 100-8 4 4 0 000 8zM21 21v-2a3.5 3.5 0 00-2.5-3.3M16.5 3.2a3.5 3.5 0 010 6.6"
    />
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 2" />
    </>
  ),
  play: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5v9l8-4.5-8-4.5z" />
  ),
  arrow: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 16.9v2a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 013.1 3.2 2 2 0 015 1h2a2 2 0 012 1.7c.1.8.3 1.6.6 2.3a2 2 0 01-.5 2.1L8.1 8.1a16 16 0 006 6l1-1a2 2 0 012.1-.5c.7.3 1.5.5 2.3.6A2 2 0 0122 16.9z"
    />
  ),
  mail: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16v12H4V6zm0 0l8 7 8-7"
    />
  ),
  map: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s7-5.3 7-11a7 7 0 10-14 0c0 5.7 7 11 7 11zm0-8a3 3 0 100-6 3 3 0 000 6z"
    />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </>
  ),
  quote: (
    <path d="M7 10c0-2.5 1.5-4 4-4v2c-1.2 0-2 .8-2 2h2v6H5v-6h2zm8 0c0-2.5 1.5-4 4-4v2c-1.2 0-2 .8-2 2h2v6h-6v-6h2z" />
  ),
  kaaba: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 8l8-4 8 4v12H4V8zm0 0h16M8 20V12h8v8"
    />
  ),
  calendar: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 3v2M17 3v2M4 8h16M6 5h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z"
    />
  ),
  partner: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11a4 4 0 10-8 0 4 4 0 008 0zM4 20a6 6 0 0112 0M18 8a3 3 0 110 6"
    />
  ),
  menu: (
    <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
  ),
  close: (
    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
  ),
  chevron: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
