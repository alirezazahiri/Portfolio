import { FC } from "react";
import { TPageProps } from "@/types/common";
import Head from "next/head";

const SEO: FC<TPageProps> = ({ meta }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta charSet="UTF-8"></meta>
      <meta name="description" content={meta.description} />
      <meta name="pagename" content={meta.pagename} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
