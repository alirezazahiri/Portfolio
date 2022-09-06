export const capitalize = (str: string) =>
  str
    .split(" ")
    .map(
      (item) =>
        item[0].toUpperCase() +
        item
          .split("")
          .map((char, index) => {
            if (index === 0) return "";
            return char.toLowerCase();
          })
          .join("")
    )
    .join(" ");
