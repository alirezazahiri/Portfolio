import Head from "next/head";
import { FC } from "react";
import { TPageProps } from "@/types/common";

const SEO: FC<TPageProps> = ({ meta }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.desc} />
    </Head>
  );
};

export default SEO;
