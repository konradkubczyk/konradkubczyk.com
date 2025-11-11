import { ExperienceItem } from "@/app/_components/Experience/ExperienceItem";
import { EXPERIENCE } from "@/app/_constants/experience";
import { outfit } from "@/app/fonts";

export const Experience = () => (
  <div className="flex flex-col gap-5">
    <h2
      className={`${outfit.className} text-3xl text-neutral-800 sm:text-4xl dark:text-neutral-300`}
    >
      Experience
    </h2>
    <div className="flex flex-col gap-1 lg:flex-row lg:gap-2">
      {EXPERIENCE.map((experienceItem, index) => (
        <ExperienceItem
          key={JSON.stringify(experienceItem)}
          experienceItem={experienceItem}
          isLast={index === EXPERIENCE.length - 1}
        />
      ))}
    </div>
  </div>
);
