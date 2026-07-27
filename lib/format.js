const SPANISH_MONTHS = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  setiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
};

/**
 * Parses the Spanish long-form dates stored in data/content.js, e.g.
 * "Martes, 26 de enero del 2021" or "Sabado, 24 de Julio del 2021".
 * Returns null when the string does not match, so callers can fall back.
 */
export function parseSpanishDate(value) {
  if (typeof value !== "string") return null;

  const match = value
    .toLowerCase()
    .match(/(\d{1,2})\s+de\s+([a-záéíóúñ]+)\s+de[l]?\s+(\d{4})/);
  if (!match) return null;

  const [, day, monthName, year] = match;
  const month = SPANISH_MONTHS[monthName];
  if (month === undefined) return null;

  return new Date(Number(year), month, Number(day));
}

/** "26 de enero del 2021" -> "26/01/21" */
export function shortDate(value) {
  const date = parseSpanishDate(value);
  if (!date) return value;

  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yy = String(date.getFullYear()).slice(-2);
  return `${dd}/${mm}/${yy}`;
}

/** "26 de enero del 2021" -> "26 January 2021" (falls back to the raw string) */
export function longDate(value) {
  const date = parseSpanishDate(value);
  if (!date) return value;

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Sortable timestamp, newest first. Unparseable dates sink to the bottom. */
export function timestamp(value) {
  const date = parseSpanishDate(value);
  return date ? date.getTime() : 0;
}

/**
 * Reading time in whole minutes, floored at 1. Strips markdown fences, inline
 * code, links and images first so code blocks do not inflate the estimate.
 */
export function readingTime(markdown, wordsPerMinute = 200) {
  if (!markdown) return 1;

  const prose = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~-]/g, " ");

  const words = prose.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}
