export function getDateDifference(departureTime, arrivalTime) {
  if (!departureTime || !arrivalTime) return 0;
  const departure = departureTime.slice(0, -15);
  const arrival = arrivalTime.slice(0, -15);
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
  const slicedTime = time.slice(0, -6); // eslint-disable-line no-magic-numbers
  const newTime = new Date(slicedTime);
  return newTime.toLocaleString("en-US", template).replace(/^0+/u, "");
}
