import type { NextPage } from "next";
import Head from "next/head";

// component
import Message from "@/components/Message";

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Message Me | Alireza Zahiri</title>
        <meta name="description" content="Message, Alireza Zahiri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Message />
    </div>
  );
};

export default Page;
