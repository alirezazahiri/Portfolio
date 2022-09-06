export const capitalize = (str: string) =>
  str[0].toUpperCase() +
  str
    .split("")
    .map((char, index) => {
      if (index === 0) return "";
      return char.toLowerCase();
    })
    .join("");
