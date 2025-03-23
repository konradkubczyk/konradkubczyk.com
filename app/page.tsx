"use client";

import Image from "next/image";
import { useRef } from "react";

import Featured from "@/app/_components/Featured";
import Header from "@/app/_components/Header";
import Skills from "@/app/_components/Skills";

import { outfit } from "@/app/fonts";

import background from "../public/background.webp";

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
            className="object-cover opacity-40 invert dark:opacity-60 dark:invert-0"
            placeholder="blur"
          />
          <div className="z-10 flex flex-1 flex-col items-center justify-around gap-20 bg-gradient-to-b from-neutral-200/40 from-80% to-neutral-200 dark:from-neutral-950/75 dark:to-neutral-950">
            <div className="h-14"></div>
            <div className="grid w-full max-w-screen-xl gap-5 px-5 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <h1
                  className={`${outfit.className} ml-[-.25rem] text-6xl font-light tracking-tight text-neutral-800 dark:text-neutral-300`}
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
            <div className="grid max-w-screen-xl gap-5 px-5 sm:grid-cols-3">
              <Featured />
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-screen-xl px-5">
          <Skills />
        </section>

        <div className="h-screen">
          {/* TODO: Remove the spacer when no longer useful for testing */}
        </div>
      </main>
    </>
  );
}
