"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.svg";
import { spaceGrotesk } from "@/app/fonts";
import { MutableRefObject, useEffect, useState } from "react";

export default function Header({
  observableRef,
}: {
  observableRef: MutableRefObject<any>;
}) {
  const [isScrolled, setIsScrolled] = useState<boolean>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 1,
      },
    );

    observer.observe(observableRef.current);

    return () => observer.disconnect();
  }, [observableRef]);

  return (
    <header className="fixed top-2.5 z-20 w-full">
      <div className="mx-auto max-w-screen-xl px-5">
        <div
          className={
            (isScrolled
              ? "bg-neutral-300/75 px-3 backdrop-blur-lg dark:bg-neutral-900/75"
              : "") +
            " flex items-center justify-between rounded-2xl py-3 transition-all"
          }
        >
          <Link
            href="/"
            className="mx-2 opacity-70 transition hover:opacity-100 focus:opacity-100 active:hover:scale-90"
          >
            <Image alt="Logo" src={logo} className="h-5 w-auto dark:invert" />
          </Link>
          <nav>
            <ul className="flex gap-2 overflow-hidden">
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className={
          spaceGrotesk.className +
          " block rounded-lg px-3 py-2 text-sm uppercase tracking-wider transition hover:bg-neutral-300/50 focus:bg-neutral-300/50 focus:outline-none active:hover:scale-90 dark:hover:bg-neutral-800/75 dark:focus:bg-neutral-800/75"
        }
      >
        {children}
      </Link>
    </li>
  );
}
