import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";
import { getFormattedExperienceTimeframe } from "@/app/_lib/get-formatted-experience-timeframe";
import { Experience } from "@/app/_types/experience";
import { outfit } from "@/app/fonts";

type ExperienceProps = {
  experience: Experience;
  isLast: boolean;
};

export const ExperienceItem = ({ experience, isLast }: ExperienceProps) => {
  const { role, timeframe } = experience;

  const { formattedStartDate, formattedEndDate, formattedDuration } = useMemo(
    () => getFormattedExperienceTimeframe(timeframe),
    [timeframe],
  );

  return (
    <div className="flex flex-1 gap-2.5 lg:flex-col-reverse lg:justify-between">
      <div className="flex flex-col items-center gap-1 lg:flex-row">
        <div className="m-3 aspect-square w-1 shrink-0 rounded-full bg-neutral-900 outline outline-1 outline-offset-4 outline-neutral-900/50 lg:ml-2 dark:bg-neutral-300 dark:outline-neutral-300/50" />
        {!isLast ? (
          <div className="h-full w-px bg-neutral-900/15 lg:h-px lg:w-full dark:bg-neutral-300/15" />
        ) : (
          <div className="h-full w-px bg-gradient-to-b from-neutral-900/15 to-transparent lg:h-px lg:w-full lg:bg-gradient-to-r dark:from-neutral-300/15" />
        )}
      </div>
      <div className="flex flex-col gap-2.5 pb-10 lg:pb-2.5 lg:pr-10">
        <h3
          className={`${outfit.className} text-xl font-medium text-neutral-800 dark:text-neutral-300`}
        >
          {role}
        </h3>
        <div className="flex gap-2">
          <CalendarDateRangeIcon className="mt-1 aspect-square w-5 shrink-0 self-baseline" />
          <p>
            {formattedStartDate} &mdash; {formattedEndDate}
            <span className="block text-xs">{formattedDuration}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
