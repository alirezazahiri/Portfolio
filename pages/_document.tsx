import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { PROPS, VARS } from "@/constants/seoVariables";

const MyDocument: React.FC = () => {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Language" content="en, fa" />
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta name="reply-to" content="itsalireza.zr@gmail.com" />
        <meta
          name="google-site-verification"
          content="FDqY1e222kk3QSsd_Ls_mvXh5pGkiKktSR9fyDZ_vpY"
        />
        {Object.entries(VARS).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}
        {Object.entries(PROPS).map(([name, content]) => (
          <meta key={name} property={name} content={content} />
        ))}
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
