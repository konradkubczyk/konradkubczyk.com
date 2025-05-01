import { ExperienceItem } from "@/app/_components/Experience/ExperienceItem";
import experience from "@/app/_data/experience.json";
import { outfit } from "@/app/fonts";

export const Experience = () => (
  <div className="flex flex-col gap-5">
    <h2
      className={`${outfit.className} text-3xl sm:text-4xl text-neutral-800 dark:text-neutral-300`}
    >
      Experience
    </h2>
    <div className="flex flex-col lg:flex-row gap-1 lg:gap-2">
      {experience.map((experienceItem, index) => (
        <ExperienceItem
          key={experienceItem.role + experienceItem.company}
          experience={experienceItem}
          isLast={index === experience.length - 1}
        />
      ))}
    </div>
  </div>
);
