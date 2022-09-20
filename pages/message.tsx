import type { NextPage } from "next";
import Head from "next/head";

// component
import Message from "@/components/Message";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";

const Page: NextPage<TPageProps> = ({ meta }) => {
  return (
    <>
      <SEO meta={meta} />
      <Message />
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      meta: {
        title: "Message Me | Alireza Zahiri",
        desc: "send your messages to me, so we can keep in touch, and mention your email for further communications",
      },
    },
  };
};

export default Page;
