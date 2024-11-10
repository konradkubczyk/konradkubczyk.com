"use client";

import Header from "@/app/_components/header";
import Image from "next/image";

import background from "../public/background.webp";
import { spaceGrotesk } from "@/app/fonts";
import { useRef } from "react";

export default function Home() {
  const hero = useRef(null);

  return (
    <>
      <Header observableRef={hero} />
      <main className="flex flex-col">
        <section
          ref={hero}
          className="relative flex flex-col"
          style={{
            minHeight: "85vh",
          }}
        >
          <Image
            alt=""
            src={background}
            fill
            quality={100}
            sizes="100vw"
            objectFit="cover"
            className="opacity-60 invert dark:invert-0"
          />
          <div className="z-10 flex flex-1 items-center justify-center bg-gradient-to-b from-neutral-200/40 from-65% to-neutral-200 dark:from-neutral-950/75 dark:to-neutral-950">
            <div className="grid w-full max-w-screen-xl px-5 md:grid-cols-2">
              <div className="flex flex-col gap-6">
                <h1
                  className={
                    spaceGrotesk.className +
                    " text-6xl font-light tracking-tight text-neutral-800 dark:text-neutral-300"
                  }
                >
                  Konrad Kubczyk
                </h1>
                <p>
                  I am a creative, open-minded and motivated person. My
                  experience in web and software development is complemented by
                  an eye for design and eagerness to innovate while solving
                  problems.
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
