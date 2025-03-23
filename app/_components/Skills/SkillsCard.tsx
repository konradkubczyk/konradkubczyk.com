import { outfit } from "@/app/fonts";

export default function SkillsCard({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) {
  return (
    <div className="flex flex-1 grow basis-64 flex-col gap-3 rounded-2xl bg-neutral-300/75 p-5 xl:basis-80 dark:bg-neutral-900/75">
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
              className="whitespace-nowrap rounded-lg bg-neutral-100/35 px-3 py-1 dark:bg-neutral-950/35"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
