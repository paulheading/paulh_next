import { DateTime } from "luxon";

function summary_length(dueComplete, due, start) {
  if (!dueComplete) due = DateTime.fromJSDate(new Date());

  const diff = due.diff(start, ["year", "month"]);

  let { years, months } = diff.toObject();

  years = Math.floor(years);

  months = Math.floor(months);

  if (years > 0) {
    if (months > 0) {
      months = months / 12;
      months = months.toFixed(1);
      years = Number(years) + Number(months);
    }
    const label = years > 1 ? "years" : "year";
    return years + " " + label;
  }

  const label = months > 1 ? "months" : "month";
  return months + " " + label;
}

export default { summary_length };
