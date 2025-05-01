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
    <div className="flex lg:flex-col-reverse gap-2.5 flex-1 lg:justify-between">
      <div className="flex flex-col lg:flex-row items-center gap-1">
        <div className="shrink-0 m-3 lg:ml-2 w-1 aspect-square rounded-full outline outline-1 outline-offset-4 outline-neutral-900/50 dark:outline-neutral-300/50 bg-neutral-900 dark:bg-neutral-300" />
        {!isLast ? (
          <div className="h-full lg:h-px w-px lg:w-full bg-neutral-900/15 dark:bg-neutral-300/15" />
        ) : (
          <div className="h-full lg:h-px w-px lg:w-full bg-gradient-to-b lg:bg-gradient-to-r from-neutral-900/15 dark:from-neutral-300/15 to-transparent" />
        )}
      </div>
      <div className="flex flex-col gap-2.5 pb-10 lg:pb-2.5 lg:pr-10">
        <h3
          className={`${outfit.className} text-xl font-medium text-neutral-800 dark:text-neutral-300`}
        >
          {role}
        </h3>
        <div className="flex gap-2">
          <CalendarDateRangeIcon className="w-5 shrink-0 aspect-square mt-1 self-baseline" />
          <p>
            {formattedStartDate} &mdash; {formattedEndDate}
            <span className="block text-xs">{formattedDuration}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
