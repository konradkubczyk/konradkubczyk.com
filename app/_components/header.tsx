"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.svg"
import {spaceGrotesk} from "@/app/fonts";
import {MutableRefObject, useEffect, useState} from "react";

export default function Header({observableRef}: { observableRef: MutableRefObject<any> }) {
    const [isScrolled, setIsScrolled] = useState<boolean>();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsScrolled(!entry.isIntersecting);
        }, {
            root: null,
            threshold: 1
        });

        observer.observe(observableRef.current)

        return () => observer.disconnect()
    }, [observableRef]);

    return (
        <header className="fixed top-2.5 w-full z-20">
            <div className="max-w-screen-xl mx-auto px-5">
                <div
                    className={
                        (
                            isScrolled
                                ? "px-3 bg-neutral-300/75 dark:bg-neutral-900/75 backdrop-blur-lg"
                                : ""
                        )
                        + " py-3 rounded-2xl flex justify-between items-center transition-all"
                    }
                >
                    <Link
                        href="/"
                        className="mx-2 opacity-70 focus:opacity-100 hover:opacity-100 transition active:hover:scale-90">
                        <Image
                            alt="Logo"
                            src={logo}
                            className="dark:invert h-5 w-auto"
                        />
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

function NavLink({children, href}: { children: React.ReactNode, href: string }) {
    return (
        <li>
            <Link href={href}
                  className={spaceGrotesk.className + " block uppercase transition px-3 py-2 rounded-lg hover:bg-neutral-300/50 focus:bg-neutral-300/50 dark:hover:bg-neutral-800/75 dark:focus:bg-neutral-800/75 text-sm tracking-wider focus:outline-none active:hover:scale-90"}>
                {children}
            </Link>
        </li>
    );
}
