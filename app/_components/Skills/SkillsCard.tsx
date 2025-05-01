import { outfit } from "@/app/fonts";

type SkillsCardProps = {
  category: string;
  skills: string[];
};

export const SkillsCard = ({ category, skills }: SkillsCardProps) => (
  <div className="flex flex-1 grow basis-64 flex-col gap-3 rounded-2xl bg-neutral-300/25 p-5 xl:basis-80 dark:bg-neutral-900/25">
    <h3
      className={`${outfit.className} text-xl text-neutral-800 sm:whitespace-nowrap sm:text-2xl dark:text-neutral-300`}
    >
      {category}
    </h3>
    <div className="flex gap-12">
      <ul className="flex list-inside flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="whitespace-nowrap rounded-lg bg-neutral-300 px-3 py-1 dark:bg-neutral-900"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
