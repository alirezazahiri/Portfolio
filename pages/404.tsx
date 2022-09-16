import NotFound from "@/components/NotFound";
import { TITLE_ALERTS } from "@/constants/common.constants";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

let isOldTitle = true;
let interval: NodeJS.Timer | null = null;

const changeTitle = () => {
  window.document.title = isOldTitle ? TITLE_ALERTS[0] : TITLE_ALERTS[1];
  isOldTitle = !isOldTitle;
};


const NotFoundPage: NextPage = () => {
  useEffect(() => {
    interval = setInterval(changeTitle, 1000);
    return () => {
      clearInterval(interval as NodeJS.Timeout);
    };
  }, []);

  return (
    <div>
      <Head>
        <meta name="description" content="404 - NOT FOUND" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFound />
    </div>
  );
};

export default NotFoundPage;
