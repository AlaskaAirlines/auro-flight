export function getDateDifference(departureTime, arrivalTime) {
  const departure = departureTime.slice(0, -15);
  const arrival = arrivalTime.slice(0, -15);
  const timeDiff = new Date(arrival).getTime() - new Date(departure).getTime();
  return timeDiff / (1000 * 3600 * 24);
}
