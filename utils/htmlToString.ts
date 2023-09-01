import { convert } from "html-to-text";

export const htmlToString = (html: string) =>
  convert(html)
    .split("\n")
    .join(" ")
    .replace(/(\r\n|\n|\r|\\n)/gm, "");
