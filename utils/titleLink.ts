export const titleLink = (type: "mail" | null | undefined, link: string) => {
  return type === "mail"
    ? link.split("@")[0]
    : link.split("/").reverse()[0].substring(0, 14);
};
