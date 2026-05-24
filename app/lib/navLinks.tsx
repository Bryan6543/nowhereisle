// navLinks.tsx

export type NavLink = {
  label: string;
  href: string;
  isExternal?: boolean;  
};

export const navLinks: NavLink[] = [
  {
    label: "Game: Sigil Tactics: Lost Maylon",
    href: "/game",                   
  },
  // {
  //   label: "Press Kit",
  //   href: "/press",
  // },
  {
    label: "Community",
    href: "/community",
  },
  // {
  //   label: "Careers",
  //   href: "/careers",
  // },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "About",
    href: "/about",
  },
];