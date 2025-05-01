import { getFormattedYearMonthDate } from "@/app/_lib/get-formatted-year-month-date";
import { getMonthsDifference } from "@/app/_lib/get-months-difference";
import { Experience } from "@/app/_types/experience";

export const getFormattedExperienceTimeframe = (
  experienceTimeframe: Experience["timeframe"],
) => {
  const { start, end } = experienceTimeframe;

  const startDate = new Date(start);
  const endOrPresentDate = end ? new Date(end) : new Date();

  const durationMonths = getMonthsDifference(startDate, endOrPresentDate);
  const durationYears = Math.floor(durationMonths / 12);
  const durationMonthsRemaining = durationMonths % 12;

  const formattedStartDate = getFormattedYearMonthDate(startDate);
  const formattedEndDate = end
    ? getFormattedYearMonthDate(endOrPresentDate)
    : "Present";

  let formattedDuration = "";

  if (durationYears > 0) {
    formattedDuration += `${durationYears} year${durationYears === 1 ? "" : "s"}`;

    if (durationMonthsRemaining > 0) {
      formattedDuration += ` and ${durationMonthsRemaining} month${
        durationMonthsRemaining === 1 ? "" : "s"
      }`;
    }
  } else {
    formattedDuration += `${durationMonths} month${
      durationMonths === 1 ? "" : "s"
    }`;
  }

  return {
    formattedStartDate,
    formattedEndDate,
    formattedDuration,
  };
};
