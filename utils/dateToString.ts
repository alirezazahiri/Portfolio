export const dateToString = (date: string) => {
  const [year, month, day] = date.split("-").map((num) => Number(num));
  return `${new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
  })} ${year}`;
};
