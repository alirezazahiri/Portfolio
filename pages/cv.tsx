import Resume from "@/components/Resume";
import type { NextPage } from "next";

// next deps
import Head from "next/head";

import React from "react";

const MyResume: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>My Resume | Alireza Zahiri</title>
        <meta name="description" content="Contact, Alireza Zahiri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Resume />
    </div>
  );
};

export function getServerSideProps() {
  return {
    props: {
      resume: true
    }
  }
}

export default MyResume;
