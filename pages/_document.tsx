import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { VARS } from "@/constants/seoVariables";

const MyDocument: React.FC = () => {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="A portfolio website for a front-end developer showcasing their skills and projects"
        />
        <meta name="keywords" content={VARS.keywords} />
        <meta name="author" content={VARS.author} />
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
