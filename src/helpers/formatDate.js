export const formatDate = (date) => {
  const parse = new Date(date);

  const month = [
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
    "Des",
  ];

  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return `${day[parse.getDay()]}, ${parse.getDate()} ${
    month[parse.getMonth()]
  } ${parse.getFullYear()}`;
};
