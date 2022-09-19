import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import About from "@/components/About";
import { useQuery } from "@apollo/client";
import { GET_ABOUT } from "@/gql/queries";
import { TPageProps } from "@/types/common";

const Page: NextPage<TPageProps> = (props) => {
  const { loading, data, error } = useQuery(GET_ABOUT);
  const { about = {} } = { about: {}, ...data };
  return (
    <div>
      <Head>
        <title>About Me | Alireza Zahiri</title>
        <meta name="description" content="About, Alireza Zahiri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About isLoading={loading} content={about.text} error={error} />
    </div>
  );
};

export default Page;
