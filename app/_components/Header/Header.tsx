import Image from "next/image";
import Link from "next/link";
import { MutableRefObject, useEffect, useState } from "react";
import { NavLink } from "@/app/_components/Header/NavLink";
import logo from "../../../public/logo.svg";

type HeaderProps = {
  observableRef: MutableRefObject<any>;
};

export const Header = ({ observableRef }: HeaderProps) => {
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
          className={`${
            isScrolled
              ? "bg-neutral-300/75 px-3 backdrop-blur-lg dark:bg-neutral-900/75"
              : ""
          } flex items-center justify-between rounded-2xl py-3 transition-all`}
        >
          <Link
            href="/public"
            className={`${
              isScrolled ? "mx-2" : "mr-2"
            } opacity-70 transition-all hover:opacity-100 focus:opacity-100 active:hover:scale-90`}
          >
            <Image alt="Logo" src={logo} className="h-5 w-auto dark:invert" />
          </Link>
          <nav>
            <ul className="flex gap-2 overflow-hidden">
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
