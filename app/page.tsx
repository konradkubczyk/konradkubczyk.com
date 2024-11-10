"use client";

import Header from "@/app/_components/header";
import Image from "next/image";

import background from "../public/background.webp";
import { outfit } from "@/app/fonts";
import { useRef } from "react";
import FeaturedCard from "@/app/_components/featured-card";

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
            className="opacity-40 invert dark:opacity-60 dark:invert-0"
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
              <FeaturedCard
                title="Design"
                description="Design plays a crucial role in every project, defining the experience of users while making lasting impressions and building trust."
              />
              <FeaturedCard
                title="Development"
                description="Bringing great ideas to life is what I pursue. Translating goals into results and solving challanges with carefully crafted solutions."
              />
              <FeaturedCard
                title="Deployment"
                description="Shipping digital experiences using modern, adaptive and scalable ways lets them be enjoyed globally and improves maintainability."
              />
            </div>
          </div>
        </section>
        <div className="h-screen"></div>
      </main>
    </>
  );
}
