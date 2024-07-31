import moment from "moment";

export function convertToTitleCaseForDisplay(str: string) {
  return str
    .replace(/_/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

export function convertToTitleCaseForPath(str: string) {
  const parts = str.split("_");
  const convertedParts = parts.map((part, index) =>
    index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
  );

  return convertedParts.join("");
}

export function formatDatePost(dateString: string) {
  const date = moment(dateString);

  if (date.isSame(moment(), "day")) {
    return "Today";
  }

  if (date.isSame(moment().subtract(1, "days"), "day")) {
    return "Yesterday";
  }

  return date.format("MMMM D");
}

export function convertSecondToMinutes(seconds: number) {
  return Math.round(seconds / 60)
}
