import { outfit } from "@/app/fonts";
import SkillsCard from "@/app/_components/Skills/SkillsCard";
import skills from "@/app/_data/skills.json";

export default function Skills() {
  return (
    <div className="flex flex-col gap-5 xl:flex-row">
      <div className="rounded-2xl bg-neutral-100/75 p-5 text-neutral-800 xl:w-1/3 dark:bg-neutral-800/75 dark:text-neutral-300">
        <div className="flex flex-col-reverse">
          <h2 className={`${outfit.className} text-3xl sm:text-4xl`}>
            Abilities
          </h2>
        </div>
        <p className="mt-3">
          I am familiar with popular programming languages and widely used
          software. I learn quickly, and I am eager to discover new solutions
          which can improve my efficiency or expand possibilities.
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-5 sm:px-0">
        {Object.entries(skills).map(([category, skills]) => (
          <SkillsCard key={category} category={category} skills={skills} />
        ))}
      </div>
    </div>
  );
}
