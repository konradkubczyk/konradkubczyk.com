const MONTHS_ABBREVIATIONS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getFormattedYearMonthDate = (date: Date) =>
  `${MONTHS_ABBREVIATIONS[date.getMonth()]} ${date.getFullYear()}`;
