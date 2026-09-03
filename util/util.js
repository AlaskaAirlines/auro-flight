export function getDateDifference(departureTime, arrivalTime) {
  if (!departureTime || !arrivalTime) return 0;
  // Slice to date-only (first 10 chars) — works for both ±HH:MM and Z offsets.
  const departure = departureTime.slice(0, 10);
  const arrival = arrivalTime.slice(0, 10);
  const timeDiff = new Date(arrival).getTime() - new Date(departure).getTime();
  return timeDiff / (1000 * 3600 * 24);
}

/**
 * Letter-spaces an airport/station code for correct screen reader pronunciation.
 * e.g. "SEA" → "S E A"
 * @param {string} station
 * @returns {string}
 */
export function readStation(station) {
  if (!station) return "";
  return Array.from(station).join(" ");
}

/**
 * Converts an ISO 8601 datetime string to a locale-formatted time string.
 * @param {string} time - ISO 8601 datetime
 * @returns {string} e.g. "12:15 PM"
 */
export function convertTime(time) {
  if (!time) return "";
  const template = { hour: "2-digit", minute: "2-digit" };
  // Strip timezone offset (±HH:MM or Z) so the time is parsed as a wall-clock
  // local value — e.g. "12:30" from "2022-05-04T12:30:00-07:00" or "…Z".
  const withoutOffset = time.replace(/([+-]\d{2}:\d{2}|Z)$/, "");
  const newTime = new Date(withoutOffset);
  if (Number.isNaN(newTime.getTime())) return "";
  return newTime.toLocaleString("en-US", template).replace(/^0+/u, "");
}
