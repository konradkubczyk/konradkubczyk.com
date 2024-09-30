"use client";

import Header from "@/app/_components/header";
import Image from "next/image";

import background from "../public/background.webp"
import {spaceGrotesk} from "@/app/fonts";
import {useRef} from "react";

export default function Home() {
    const hero = useRef(null);

    return (
        <>
            <Header observableRef={hero}/>
            <main className="flex flex-col">
                <section
                    ref={hero}
                    className="relative flex flex-col"
                    style={{
                        minHeight: "85vh"
                    }}
                >
                    <Image
                        alt=""
                        src={background}
                        fill
                        quality={100}
                        sizes="100vw"
                        objectFit="cover"
                        className="invert dark:invert-0 opacity-60"
                    />
                    <div
                        className="flex-1 z-10 bg-gradient-to-b from-65% from-neutral-200/40 dark:from-neutral-950/75 to-neutral-200 dark:to-neutral-950 flex items-center justify-center"
                    >
                        <div className="max-w-screen-xl px-5 w-full md:grid-cols-2 grid">
                            <div className="flex flex-col gap-6">
                                <h1 className={spaceGrotesk.className + " font-light text-6xl text-neutral-800 dark:text-neutral-300 tracking-tight"}>
                                    Konrad Kubczyk
                                </h1>
                                <p>
                                    I am a creative, open-minded and motivated person. My experience in web and software
                                    development is complemented by an eye for design and eagerness to innovate while
                                    solving problems.
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </section>
                <div className="h-screen"></div>
            </main>
        </>
    );
}
