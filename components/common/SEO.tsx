import { FC } from "react";
import { TPageProps } from "@/types/common";
import Head from "next/head";

const SEO: FC<TPageProps> = ({ meta }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.desc} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
