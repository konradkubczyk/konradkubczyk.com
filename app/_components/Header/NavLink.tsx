import Link from "next/link";
import { ReactNode } from "react";
import { outfit } from "@/app/fonts";

type NavLinkProps = { children: ReactNode; href: string };

export const NavLink = ({ children, href }: NavLinkProps) => (
  <li>
    <Link
      href={href}
      className={`${outfit.className} block rounded-lg px-3 py-2 text-sm uppercase tracking-wider transition hover:bg-neutral-400/25 focus:bg-neutral-400/25 focus:outline-none active:hover:scale-90 dark:hover:bg-neutral-800/75 dark:focus:bg-neutral-800/75`}
    >
      {children}
    </Link>
  </li>
);
