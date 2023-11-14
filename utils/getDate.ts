import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export const getDate = (created_at: string): string => {
  const now = dayjs().utc();
  const articleDate = dayjs(created_at).utc();

  const seconds = now.diff(articleDate, "s");
  const minutes = now.diff(articleDate, "m");
  const hours = now.diff(articleDate, "h");
  const days = now.diff(articleDate, "d");
  const months = now.diff(articleDate, "M");
  const years = now.diff(articleDate, "y");

  let date = "";

  if (years > 0) {
    date = `${years} year${years > 1 ? "s" : ""}`;
  } else if (months > 0) {
    date = `${months} month${months > 1 ? "es" : ""}`;
  } else if (days > 0) {
    date = `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    date = `${hours} hour${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    date = `${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else {
    date = `${seconds} second${seconds > 1 ? "s" : ""}`;
  }

  return date;
};
