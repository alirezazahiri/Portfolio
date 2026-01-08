import Image from "next/image";

type CompanyLogoProps = {
  name: "bnut" | "pindo" | "rsimu" | "systemgroup" | "maqin" | "tapsi";
};

export const CompanyLogo = ({ name }: CompanyLogoProps) => {
  return (
    <Image
      src={`/assets/logos/${name}.jpg`}
      alt={name}
      width={48}
      height={48}
      className="size-10 object-contain rounded-md"
    />
  );
};
