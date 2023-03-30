import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { VARS } from "@/constants/seoVariables";

const MyDocument: React.FC = () => {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Welcome to my Portfolio Website, where I show my skills and projects"
        />
        <meta name="keywords" content={VARS.keywords} />
        <meta name="author" content={VARS.author} />
        <meta name="google-site-verification" content="FDqY1e222kk3QSsd_Ls_mvXh5pGkiKktSR9fyDZ_vpY" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
