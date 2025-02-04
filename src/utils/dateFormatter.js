export const convertDateString = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const convertDateToReadableString = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Example usage:
// console.log(convertDateString("2011-01-06T00:00:00")); // Output: "2011-06-01"
// console.log(convertDateToReadableString("2024-01-25T00:00:00")); // Output: "Jan 25, 2024"
