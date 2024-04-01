/**
 * Converts a timestamp to a formatted date string.
 *
 * @param {string} timeStamp - The timestamp to convert, in string format.
 * @returns {string} A formatted date string in the format "day/month/year hours:minutes".
 */
export const convertTimeStampToDate = (timeStamp: number): string => {
  const date = new Date(timeStamp);
  // Extracting date components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so adding 1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};
