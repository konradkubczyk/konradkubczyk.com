"use client";

import { useRef } from "react";
import { Experience } from "@/app/_components/Experience";
import { Header } from "@/app/_components/Header/Header";
import { Skills } from "@/app/_components/Skills";
import { Hero } from "@/app/_components/Hero";

const Home = () => {
  const heroSectionRef = useRef(null);

  return (
    <>
      <Header observableRef={heroSectionRef} />

      <main className="flex flex-col gap-y-32">
        <section
          ref={heroSectionRef}
          className="relative flex flex-col"
          style={{
            minHeight: "85vh",
          }}
        >
          <Hero />
        </section>

        <section
          id="experience"
          className="mx-auto w-full max-w-screen-xl px-5"
        >
          <Experience />
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
};

export default Home;
