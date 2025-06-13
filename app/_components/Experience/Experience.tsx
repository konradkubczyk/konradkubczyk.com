import { ExperienceItem } from "@/app/_components/Experience/ExperienceItem";
import experience from "@/app/_data/experience.json";
import { outfit } from "@/app/fonts";

export const Experience = () => (
  <div className="flex flex-col gap-5">
    <h2
      className={`${outfit.className} text-3xl text-neutral-800 sm:text-4xl dark:text-neutral-300`}
    >
      Experience
    </h2>
    <div className="flex flex-col gap-1 lg:flex-row lg:gap-2">
      {experience.map((experienceItem, index) => (
        <ExperienceItem
          key={JSON.stringify(experienceItem)}
          experience={experienceItem}
          isLast={index === experience.length - 1}
        />
      ))}
    </div>
  </div>
);
